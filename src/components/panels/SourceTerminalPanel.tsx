import PanelShell from '../ui/PanelShell'
import PanelHeaderBadge from '../ui/PanelHeaderBadge'
import { ZoomLocateStack, FullscreenButton, CollapseButton } from './MapControls'
import UsageBarsWidget, { type BarColumn } from './UsageBarsWidget'
import SourceTerminalMap from './SourceTerminalMap'

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
    <PanelShell className="relative isolate aspect-square overflow-hidden p-0">
      <SourceTerminalMap />

      <FullscreenButton />
      <div className="absolute bottom-2 right-2 z-[1000] flex items-end gap-4">
        <div className="flex items-end gap-1.5">
          <CollapseButton />
          <UsageBarsWidget columns={USAGE_COLUMNS} />
        </div>
        <ZoomLocateStack />
      </div>

      <div className="absolute left-2 top-2 z-[1000]">
        <PanelHeaderBadge>Source Terminal</PanelHeaderBadge>
      </div>
    </PanelShell>
  )
}
