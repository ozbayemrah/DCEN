import PanelShell from '../ui/PanelShell'
import PanelHeaderBadge from '../ui/PanelHeaderBadge'
import BracketTag from './BracketTag'
import { ZoomLocateStack, FullscreenButton, CollapseButton } from './MapControls'
import UsageBarsWidget, { type BarColumn } from './UsageBarsWidget'
import HexMeshOverlay from './HexMeshOverlay'
import mapBase from '../../assets/panels/source-terminal/map-base.png'
import markerPin from '../../assets/panels/source-terminal/marker-pin.svg'
import medicalCross from '../../assets/panels/source-terminal/icon-medical-cross.svg'

const LOCATION_MARKERS = [
  { key: 's1', text: 'S1', left: 62.71, top: 51.5 },
  { key: 's2', text: 'S2', left: 30.19, top: 58.08 },
  { key: 's3', text: 'S3', left: 42, top: 42 },
  { key: 's4', text: 'S4', left: 19.29, top: 89.66 },
  { key: 's5', text: 'S5', left: 41.09, top: 26.5 },
  { key: 's6', text: 'S6', left: 9.14, top: 32.89 },
  { key: 's7', text: 'S7', left: 73.42, top: 20.11 },
]

const HOSPITAL_MARKERS = [
  { key: 'h1', left: 48, top: 42 },
  { key: 'h2', left: 15.41, top: 32.33 },
]

const USAGE_COLUMNS: BarColumn[] = [
  {
    key: 't-l',
    label: 'T-L',
    segments: [
      { color: '#feec61', dimmed: true },
      { color: '#feec61' },
      { color: '#00ff3c' },
      { color: '#00ff3c' },
    ],
  },
  {
    key: 'c-u',
    label: 'C-U',
    segments: [
      { color: '#00ff3c', dimmed: true },
      { color: '#00ff3c' },
    ],
  },
  {
    key: 'a-c',
    label: 'A-C',
    segments: [
      { color: '#00ff3c', dimmed: true },
      { color: '#00ff3c' },
    ],
  },
]

export default function SourceTerminalPanel() {
  return (
    <PanelShell
      className="relative aspect-square overflow-hidden p-0"
      style={{ backgroundImage: 'linear-gradient(193.58deg, rgb(211, 221, 229) 0%, rgb(239, 242, 249) 45.232%)' }}
    >
      <img src={mapBase} alt="" className="absolute inset-0 size-full object-cover mix-blend-luminosity" />
      <HexMeshOverlay />

      {HOSPITAL_MARKERS.map(({ key, left, top }) => (
        <div
          key={key}
          className="absolute size-[38px] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          <img src={markerPin} alt="" className="absolute inset-0 size-full" />
          <img src={medicalCross} alt="" className="absolute inset-[3px] size-[32px]" />
        </div>
      ))}

      {LOCATION_MARKERS.map(({ key, text, left, top }) => (
        <div
          key={key}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          <BracketTag text={text} />
        </div>
      ))}

      <FullscreenButton />
      <div className="absolute bottom-2 right-2 flex items-end gap-4">
        <div className="flex items-end gap-1.5">
          <CollapseButton />
          <UsageBarsWidget columns={USAGE_COLUMNS} />
        </div>
        <ZoomLocateStack />
      </div>

      <div className="absolute left-2 top-2">
        <PanelHeaderBadge>Source Terminal</PanelHeaderBadge>
      </div>
    </PanelShell>
  )
}
