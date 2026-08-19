import { useMemo, useState } from 'react'
import HexGrid, { type HexCell } from '../components/heatmap/HexGrid'
import { generateSectorLoads } from '../lib/mockGrid'
import { statusPillClass, type Status } from '../lib/status'
import PanelHeaderBadge from '../components/ui/PanelHeaderBadge'
import PanelShell from '../components/ui/PanelShell'

const legend: { status: Status; label: string; range: string }[] = [
  { status: 'good', label: 'Low', range: '< 40%' },
  { status: 'caution', label: 'Medium', range: '40–65%' },
  { status: 'sun', label: 'High', range: '65–85%' },
  { status: 'danger', label: 'Critical', range: '> 85%' },
]

function statusForLoad(load: number): Status {
  if (load >= 85) return 'danger'
  if (load >= 65) return 'sun'
  if (load >= 40) return 'caution'
  return 'good'
}

export default function DeploymentTracker() {
  const cells = useMemo(() => generateSectorLoads(14, 9), [])
  const sectors = useMemo(
    () => cells.filter((cell) => cell.label).sort((a, b) => b.load - a.load),
    [cells],
  )
  const [selected, setSelected] = useState<HexCell | null>(sectors[0] ?? null)

  return (
    <div className="flex gap-4">
      <PanelShell className="flex w-2/3 flex-col gap-3 bg-white/40">
        <div className="flex items-center justify-between">
          <PanelHeaderBadge>Grid Heat Map</PanelHeaderBadge>
          <div className="flex gap-3 text-xs text-[#6e808e]">
            {legend.map(({ status, label, range }) => (
              <span key={status} className={`rounded px-2 py-1 ${statusPillClass[status]}`}>
                {label} <span className="opacity-70">{range}</span>
              </span>
            ))}
          </div>
        </div>
        <HexGrid
          cols={14}
          rows={9}
          cells={cells}
          onSelect={setSelected}
          selectedKey={selected ? `${selected.col}:${selected.row}` : undefined}
        />
      </PanelShell>

      <div className="flex w-1/3 flex-col gap-4">
        <PanelShell className="flex flex-col items-start gap-2 bg-white/40">
          <PanelHeaderBadge>Deployment Tracker</PanelHeaderBadge>
          <div className="flex flex-col gap-1">
            {sectors.map((sector) => {
              const key = `${sector.col}:${sector.row}`
              const status = statusForLoad(sector.load)
              const isSelected = selected && `${selected.col}:${selected.row}` === key
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelected(sector)}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left transition-colors duration-150 hover:border-[#6e808e] hover:bg-white/50 ${
                    isSelected ? 'border-[#1c2632]' : 'border-white'
                  }`}
                >
                  <span className="text-sm font-bold text-[#1c2632]">{sector.label}</span>
                  <span className={`rounded px-2 py-0.5 text-xs ${statusPillClass[status]}`}>
                    {sector.load}% load
                  </span>
                </button>
              )
            })}
          </div>
        </PanelShell>

        {selected && (
          <PanelShell className="flex flex-col gap-3 bg-[#1c2632] text-[#eff2f9]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold">Sector {selected.label}</p>
              <span className={`rounded px-2 py-0.5 text-xs ${statusPillClass[statusForLoad(selected.load)]}`}>
                {selected.load}% load
              </span>
            </div>
            <p className="text-sm text-[#eff2f9]/80">
              {selected.load >= 85
                ? 'Critical load detected. Immediate deployment of standby capacity is advised.'
                : selected.load >= 65
                  ? 'Elevated load. Consider deploying reserve capacity ahead of peak demand.'
                  : 'Load within normal operating range. No action required.'}
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="h-10 rounded-lg bg-[#eff2f9] text-sm font-bold text-[#1c2632] transition-colors duration-150 hover:bg-white"
              >
                Confirm Deployment
              </button>
              <button
                type="button"
                className="h-9 rounded-lg border border-[#eff2f9]/40 text-sm text-[#eff2f9] transition-colors duration-150 hover:border-[#eff2f9] hover:bg-[#eff2f9]/10"
              >
                Review
              </button>
            </div>
          </PanelShell>
        )}
      </div>
    </div>
  )
}
