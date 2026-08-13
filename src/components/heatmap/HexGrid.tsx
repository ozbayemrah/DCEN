import { useMemo } from 'react'
import { statusHex } from '../../lib/status'

export type HexCell = {
  col: number
  row: number
  load: number
  label?: string
}

type HexGridProps = {
  cols: number
  rows: number
  cells: HexCell[]
  size?: number
  onSelect?: (cell: HexCell) => void
  selectedKey?: string
}

function loadColor(load: number) {
  if (load >= 85) return statusHex.danger
  if (load >= 65) return statusHex.sun
  if (load >= 40) return statusHex.caution
  return statusHex.good
}

function hexPoints(cx: number, cy: number, size: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i)
    return `${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`
  }).join(' ')
}

export default function HexGrid({ cols, rows, cells, size = 28, onSelect, selectedKey }: HexGridProps) {
  const hexWidth = size * 1.5
  const hexHeight = Math.sqrt(3) * size
  const width = cols * hexWidth + size
  const height = rows * hexHeight + hexHeight

  const cellMap = useMemo(() => {
    const map = new Map<string, HexCell>()
    for (const cell of cells) map.set(`${cell.col}:${cell.row}`, cell)
    return map
  }, [cells])

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Grid load heatmap">
      {Array.from({ length: cols }).map((_, col) =>
        Array.from({ length: rows }).map((_, row) => {
          const cx = size + col * hexWidth
          const cy = size * 0.87 + row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0)
          const key = `${col}:${row}`
          const cell = cellMap.get(key)
          const isSelected = selectedKey === key

          return (
            <g
              key={key}
              onClick={() => cell && onSelect?.(cell)}
              className={cell ? 'cursor-pointer' : undefined}
            >
              <polygon
                points={hexPoints(cx, cy, size - 1)}
                fill={cell ? loadColor(cell.load) : '#e4ebf1'}
                fillOpacity={cell ? 0.55 : 0.4}
                stroke={isSelected ? '#1c2632' : '#ffffff'}
                strokeWidth={isSelected ? 2 : 1}
              />
              {cell?.label && (
                <text
                  x={cx}
                  y={cy + 4}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  fill="#1c2632"
                >
                  {cell.label}
                </text>
              )}
            </g>
          )
        }),
      )}
    </svg>
  )
}
