import PanelHeaderBadge from '../components/ui/PanelHeaderBadge'
import PanelShell from '../components/ui/PanelShell'
import PlainPanel from '../components/ui/PlainPanel'
import SourceTerminalPanel from '../components/panels/SourceTerminalPanel'

function Panel({ title, className = '' }: { title: string; className?: string }) {
  return (
    <PanelShell className={`flex flex-col items-start gap-2 bg-white/40 ${className}`}>
      <PanelHeaderBadge>{title}</PanelHeaderBadge>
      <p className="text-sm text-[#6e808e]">Coming next.</p>
    </PanelShell>
  )
}

export default function Overview() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-[auto_1fr] gap-4">
      <SourceTerminalPanel />
      <Panel title="RES Map" className="aspect-square" />
      <Panel title="Heat Map" className="aspect-square" />
      <PlainPanel title="General Source Terminal" className="col-span-2 justify-center" />
      <PlainPanel title="Usage Terminal" className="justify-center" />
    </div>
  )
}
