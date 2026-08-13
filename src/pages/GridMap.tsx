import PanelHeaderBadge from '../components/ui/PanelHeaderBadge'
import PanelShell from '../components/ui/PanelShell'
import PlainPanel from '../components/ui/PlainPanel'

const sourceLists = [
  { key: 'deployed', title: 'Deployed Sources' },
  { key: 'undeployed', title: 'Undeployed Sources' },
  { key: 'maintenance', title: 'Sources Under Maintenance' },
]

export default function GridMap() {
  return (
    <div className="flex flex-col gap-4">
      <PanelShell className="flex aspect-[16/6] flex-col items-start gap-2 bg-white/40">
        <PanelHeaderBadge>Source Terminal Network Map</PanelHeaderBadge>
        <p className="text-sm text-[#6e808e]">Coming next.</p>
      </PanelShell>

      <div className="flex gap-4">
        <PlainPanel title="Network Status" className="w-1/3">
          <div className="flex gap-2 text-xs text-[#6e808e]">
            <span className="rounded bg-[rgba(0,255,60,0.25)] px-2 py-1">TIE</span>
            <span className="rounded bg-[rgba(254,236,97,0.25)] px-2 py-1">ACE</span>
            <span className="rounded bg-[rgba(255,0,34,0.25)] px-2 py-1">RES</span>
          </div>
        </PlainPanel>

        {sourceLists.map(({ key, title }) => (
          <PlainPanel
            key={key}
            title={title}
            className="flex-1"
          >
            <p className="text-sm text-[#6e808e]">No source-level data loaded yet.</p>
          </PlainPanel>
        ))}
      </div>
    </div>
  )
}
