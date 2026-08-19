import hexTile from '../../assets/panels/source-terminal/hex-tile.svg'
import hexTileHighlight from '../../assets/panels/source-terminal/hex-tile-alt.svg'

type HexCell = {
  top: number
  right: number
  bottom: number
  left: number
  highlighted?: boolean
}

const HEX_CELLS: HexCell[] = [
  { top: 0, right: 68.52, bottom: 75.97, left: 9.85 },
  { top: 0, right: 49.04, bottom: 75.97, left: 29.33 },
  { top: 18.99, right: 58.66, bottom: 56.98, left: 19.71 },
  { top: 18.99, right: 78.37, bottom: 56.98, left: 0 },
  { top: 18.99, right: 39.18, bottom: 56.98, left: 39.18, highlighted: true },
  { top: 37.99, right: 68.52, bottom: 37.99, left: 9.85 },
  { top: 75.97, right: 68.52, bottom: 0, left: 9.85 },
  { top: 37.99, right: 49.04, bottom: 37.99, left: 29.33 },
  { top: 56.98, right: 58.66, bottom: 18.99, left: 19.71 },
  { top: 75.97, right: 49.04, bottom: 0, left: 29.33 },
  { top: 56.98, right: 78.37, bottom: 18.99, left: 0 },
  { top: 56.98, right: 39.18, bottom: 18.99, left: 39.18 },
  { top: 0, right: 29.33, bottom: 75.97, left: 49.04 },
  { top: 0, right: 9.85, bottom: 75.97, left: 68.52 },
  { top: 37.99, right: 29.33, bottom: 37.99, left: 49.04 },
  { top: 37.99, right: 9.85, bottom: 37.99, left: 68.52 },
  { top: 18.99, right: 19.48, bottom: 56.98, left: 58.89 },
  { top: 18.99, right: 0, bottom: 56.98, left: 78.37 },
  { top: 75.97, right: 29.33, bottom: 0, left: 49.04 },
  { top: 75.97, right: 9.85, bottom: 0, left: 68.52 },
  { top: 56.98, right: 19.48, bottom: 18.99, left: 58.89 },
  { top: 56.98, right: 0, bottom: 18.99, left: 78.37 },
]

export default function HexMeshOverlay() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[58.5%]"
      style={{ width: '191.8%', height: '178.75%', transform: 'translate(-50%, -50%) rotate(-11.16deg)' }}
    >
      {HEX_CELLS.map((hex, index) => (
        <img
          key={index}
          src={hex.highlighted ? hexTileHighlight : hexTile}
          alt=""
          className="absolute"
          style={{ top: `${hex.top}%`, right: `${hex.right}%`, bottom: `${hex.bottom}%`, left: `${hex.left}%` }}
        />
      ))}
    </div>
  )
}
