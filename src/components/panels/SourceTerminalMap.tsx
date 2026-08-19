import { useCallback, useEffect, useState } from 'react'
import { CircleMarker, MapContainer, Tooltip, TileLayer } from 'react-leaflet'
import {
  energySourceColor,
  energySourceLabel,
  fetchEnergyInfrastructure,
  type EnergyFeature,
} from '../../lib/energyInfrastructure'

const CENTER: [number, number] = [46.7808, 15.535]
const BBOX = { south: 46.65, west: 15.35, north: 46.91, east: 15.72 }

type LoadState = 'loading' | 'success' | 'error'

export default function SourceTerminalMap() {
  const [features, setFeatures] = useState<EnergyFeature[]>([])
  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [retryToken, setRetryToken] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setLoadState('loading')
    fetchEnergyInfrastructure(BBOX, controller.signal)
      .then((result) => {
        setFeatures(result)
        setLoadState('success')
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        console.error('Failed to load energy infrastructure', error)
        setLoadState('error')
      })
    return () => controller.abort()
  }, [retryToken])

  const retry = useCallback(() => setRetryToken((token) => token + 1), [])

  return (
    <MapContainer
      center={CENTER}
      zoom={12}
      zoomControl={false}
      className="absolute inset-0 isolate size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {features.map((feature) => (
        <CircleMarker
          key={feature.id}
          center={[feature.lat, feature.lon]}
          radius={feature.category === 'substation' || feature.category === 'transformer' ? 5 : 7}
          pathOptions={{
            color: '#eff2f9',
            weight: 1,
            fillColor: energySourceColor[feature.category],
            fillOpacity: 0.9,
          }}
        >
          <Tooltip direction="top" offset={[0, -4]} opacity={1}>
            <p className="font-bold text-[#1c2632]">{feature.name ?? energySourceLabel[feature.category]}</p>
            <p className="text-xs text-[#6e808e]">{energySourceLabel[feature.category]}</p>
          </Tooltip>
        </CircleMarker>
      ))}

      {loadState !== 'success' && (
        <div className="pointer-events-none absolute left-1/2 top-2 z-[1000] -translate-x-1/2">
          {loadState === 'loading' ? (
            <span className="rounded-lg border border-white bg-white/80 px-2 py-1 text-xs text-[#6e808e]">
              Loading energy sources…
            </span>
          ) : (
            <span className="pointer-events-auto flex items-center gap-2 rounded-lg border border-white bg-white/90 px-2 py-1 text-xs text-[#6e808e]">
              Energy sources unavailable
              <button
                type="button"
                onClick={retry}
                className="font-bold text-[#1c2632] underline underline-offset-2 hover:text-[#6e808e]"
              >
                Retry
              </button>
            </span>
          )}
        </div>
      )}
    </MapContainer>
  )
}
