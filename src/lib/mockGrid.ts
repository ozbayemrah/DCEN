import type { HexCell } from '../components/heatmap/HexGrid'

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const sectorLabels = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12']

export function generateSectorLoads(cols: number, rows: number, seed = 42): HexCell[] {
  const rand = mulberry32(seed)
  const cells: HexCell[] = []
  let labelIndex = 0

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (rand() < 0.35) continue
      const hasLabel = rand() < 0.3 && labelIndex < sectorLabels.length
      cells.push({
        col,
        row,
        load: Math.round(rand() * 100),
        label: hasLabel ? sectorLabels[labelIndex++] : undefined,
      })
    }
  }

  return cells
}
