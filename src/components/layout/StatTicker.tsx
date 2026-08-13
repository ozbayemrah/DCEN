import { useEffect, useState } from 'react'
import type { Status } from '../../lib/status'

type NumericSpec = {
  base: number
  decimals: number
  prefix?: string
  suffix: string
  volatility: number
}

type StatRow = {
  label: string
  status: Status
  statusLabel: string
  numeric?: NumericSpec
  value?: string
}

const statusColors: Record<Status, string> = {
  good: 'bg-[rgba(0,255,60,0.25)] before:bg-[#00ff3c] after:bg-[#00ff3c]',
  caution: 'bg-[rgba(254,236,97,0.25)] before:bg-[#feec61] after:bg-[#feec61]',
  sun: 'bg-[rgba(254,177,97,0.25)] before:bg-[#feb161] after:bg-[#feb161]',
  danger: 'bg-[rgba(255,0,34,0.25)] before:bg-[#f02] after:bg-[#f02]',
}

function useLiveValue(spec: NumericSpec) {
  const [value, setValue] = useState(spec.base)
  const [trend, setTrend] = useState<'up' | 'down' | 'flat'>('flat')

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        const delta = (Math.random() - 0.5) * 2 * spec.volatility
        setTrend(Math.abs(delta) < spec.volatility * 0.15 ? 'flat' : delta > 0 ? 'up' : 'down')
        return Math.max(0, prev + delta)
      })
    }, 2200 + Math.random() * 800)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { value, trend }
}

const trendArrow = { up: '↑', down: '↓', flat: '-' }

const staticSpec: NumericSpec = { base: 0, decimals: 0, suffix: '', volatility: 0 }

function StatValueCell({ row }: { row: StatRow }) {
  const isDanger = row.status === 'danger'
  const { value, trend } = useLiveValue(row.numeric ?? staticSpec)

  const display = row.numeric
    ? `${row.numeric.prefix ?? ''}${value.toFixed(row.numeric.decimals)}${row.numeric.suffix} [${trendArrow[trend]}]`
    : (row.value ?? '')

  return (
    <div
      className={`relative flex h-[18px] w-[130px] shrink-0 items-center justify-between overflow-clip rounded before:block before:h-[18px] before:w-[5px] before:shrink-0 after:block after:h-[18px] after:w-[5px] after:shrink-0 ${statusColors[row.status]} ${
        isDanger ? 'animate-pulse' : ''
      }`}
    >
      <span
        className={`w-full shrink-0 whitespace-nowrap px-1 text-center text-xs leading-none text-[#1c2632] ${
          isDanger ? 'font-bold' : 'font-normal'
        }`}
      >
        {display}
      </span>
    </div>
  )
}

export type StatGroupData = { key: string; rows: StatRow[] }

export function StatGroup({ rows }: { rows: StatRow[] }) {
  return (
    <div className="flex shrink-0 flex-col gap-1 rounded-lg border border-white p-2">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-2">
          <span className="w-[70px] shrink-0 text-right text-xs text-[#1c2632]">{row.label}</span>
          <StatValueCell row={row} />
          <span className="w-[70px] shrink-0 text-left text-xs text-[#1c2632]">{row.statusLabel}</span>
        </div>
      ))}
    </div>
  )
}

export const statGroups: StatGroupData[] = [
  {
    key: 'load',
    rows: [
      {
        label: 'TOTAL LOAD',
        numeric: { base: 185.4, decimals: 1, suffix: ' MW', volatility: 3 },
        status: 'caution',
        statusLabel: 'Peak',
      },
      {
        label: 'CAP-USE',
        numeric: { base: 82.1, decimals: 1, suffix: ' %', volatility: 1.5 },
        status: 'good',
        statusLabel: 'Optimal',
      },
      {
        label: 'AVG-CONS',
        numeric: { base: 2.06, decimals: 2, suffix: ' kW', volatility: 0.05 },
        status: 'good',
        statusLabel: 'Efficient',
      },
    ],
  },
  {
    key: 'frequency',
    rows: [
      {
        label: 'FREQ',
        numeric: { base: 60.0, decimals: 2, suffix: ' Hz', volatility: 0.05 },
        status: 'good',
        statusLabel: 'Stable',
      },
      {
        label: 'V-DEV',
        numeric: { base: 1.2, decimals: 1, prefix: '±', suffix: '%', volatility: 0.1 },
        status: 'good',
        statusLabel: 'Normal',
      },
      {
        label: 'P-FAC',
        numeric: { base: 0.98, decimals: 2, suffix: ' LAG', volatility: 0.01 },
        status: 'good',
        statusLabel: 'Optimal',
      },
    ],
  },
  {
    key: 'tie',
    rows: [
      { label: 'TIE', value: 'Exporting', status: 'good', statusLabel: 'Active' },
      {
        label: 'ACE',
        numeric: { base: 0.5, decimals: 1, prefix: '±', suffix: ' MV', volatility: 0.1 },
        status: 'caution',
        statusLabel: 'Mismatched',
      },
      {
        label: 'RES',
        numeric: { base: 18, decimals: 0, suffix: '%', volatility: 2 },
        status: 'danger',
        statusLabel: 'Insufficient',
      },
    ],
  },
  {
    key: 'market',
    rows: [
      {
        label: 'LMP',
        numeric: { base: 45.2, decimals: 2, prefix: '€', suffix: '/MWh', volatility: 1.5 },
        status: 'good',
        statusLabel: 'Nominal',
      },
      {
        label: 'GHG',
        numeric: { base: 321, decimals: 0, suffix: 'g CO2/kWh', volatility: 5 },
        status: 'sun',
        statusLabel: 'Moderate',
      },
      { label: 'WIND/SOL', value: 'Storm Alert [!]', status: 'danger', statusLabel: 'Danger' },
    ],
  },
]
