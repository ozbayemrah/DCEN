export type EnergyCategory =
  | 'solar'
  | 'wind'
  | 'hydro'
  | 'gas'
  | 'biomass'
  | 'other-generation'
  | 'substation'
  | 'transformer'

export type EnergyFeature = {
  id: string
  lat: number
  lon: number
  category: EnergyCategory
  name?: string
}

export const energySourceColor: Record<EnergyCategory, string> = {
  solar: '#feb161',
  wind: '#8ec7e0',
  hydro: '#3a7bd5',
  gas: '#a37f1c',
  biomass: '#7bbf6a',
  'other-generation': '#6e808e',
  substation: '#1c2632',
  transformer: '#feec61',
}

export const energySourceLabel: Record<EnergyCategory, string> = {
  solar: 'Solar plant',
  wind: 'Wind turbine',
  hydro: 'Hydro plant / dam',
  gas: 'Gas plant',
  biomass: 'Biomass plant',
  'other-generation': 'Power plant',
  substation: 'Substation',
  transformer: 'Transformer',
}

type OverpassElement = {
  type: 'node' | 'way'
  id: number
  lat?: number
  lon?: number
  center?: { lat: number; lon: number }
  tags?: Record<string, string>
}

type OverpassResponse = {
  elements: OverpassElement[]
}

export type Bbox = { south: number; west: number; north: number; east: number }

const OVERPASS_ENDPOINT = 'https://overpass-api.de/api/interpreter'
const CACHE_PREFIX = 'dcen:energy-infrastructure:'
const CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour — infrastructure locations barely change
const RETRY_DELAYS_MS = [1500, 4000] // retried on top of the initial attempt
const RETRYABLE_STATUS = new Set([429, 502, 503, 504])

function categorize(tags: Record<string, string>): EnergyCategory {
  if (tags.power === 'substation') return 'substation'
  if (tags.power === 'transformer') return 'transformer'

  const source = tags['plant:source'] ?? tags['generator:source']
  switch (source) {
    case 'solar':
      return 'solar'
    case 'wind':
      return 'wind'
    case 'hydro':
      return 'hydro'
    case 'gas':
    case 'natural_gas':
      return 'gas'
    case 'biomass':
    case 'biogas':
      return 'biomass'
    default:
      return 'other-generation'
  }
}

function cacheKey(bbox: Bbox) {
  return `${CACHE_PREFIX}${bbox.south},${bbox.west},${bbox.north},${bbox.east}`
}

function readCache(bbox: Bbox): EnergyFeature[] | null {
  try {
    const raw = localStorage.getItem(cacheKey(bbox))
    if (!raw) return null
    const parsed = JSON.parse(raw) as { timestamp: number; features: EnergyFeature[] }
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) return null
    return parsed.features
  } catch {
    return null
  }
}

function writeCache(bbox: Bbox, features: EnergyFeature[]) {
  try {
    localStorage.setItem(cacheKey(bbox), JSON.stringify({ timestamp: Date.now(), features }))
  } catch {
    // storage full or unavailable — not worth failing the request over
  }
}

function parseElements(elements: OverpassElement[]): EnergyFeature[] {
  const features: EnergyFeature[] = []
  for (const el of elements) {
    const lat = el.lat ?? el.center?.lat
    const lon = el.lon ?? el.center?.lon
    if (lat === undefined || lon === undefined || !el.tags) continue
    features.push({
      id: `${el.type}/${el.id}`,
      lat,
      lon,
      category: categorize(el.tags),
      name: el.tags.name,
    })
  }
  return features
}

function sleep(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal?.addEventListener('abort', () => {
      clearTimeout(timer)
      reject(new DOMException('Aborted', 'AbortError'))
    })
  })
}

export async function fetchEnergyInfrastructure(bbox: Bbox, signal?: AbortSignal): Promise<EnergyFeature[]> {
  const cached = readCache(bbox)
  if (cached) return cached

  const bboxStr = `${bbox.south},${bbox.west},${bbox.north},${bbox.east}`
  const query = `[out:json][timeout:25];(
    node["power"="plant"](${bboxStr});
    way["power"="plant"](${bboxStr});
    node["power"="generator"](${bboxStr});
    way["power"="generator"](${bboxStr});
    node["power"="substation"](${bboxStr});
    way["power"="substation"](${bboxStr});
    node["power"="transformer"](${bboxStr});
  );out center;`

  const attempts = RETRY_DELAYS_MS.length + 1
  let lastError: unknown

  for (let attempt = 0; attempt < attempts; attempt++) {
    if (attempt > 0) {
      await sleep(RETRY_DELAYS_MS[attempt - 1], signal)
    }

    try {
      const response = await fetch(OVERPASS_ENDPOINT, {
        method: 'POST',
        body: `data=${encodeURIComponent(query)}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        signal,
      })

      if (!response.ok) {
        lastError = new Error(`Overpass request failed: ${response.status}`)
        if (RETRYABLE_STATUS.has(response.status)) continue
        throw lastError
      }

      const data = (await response.json()) as OverpassResponse
      const features = parseElements(data.elements)
      writeCache(bbox, features)
      return features
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') throw error
      lastError = error
    }
  }

  throw lastError ?? new Error('Overpass request failed')
}
