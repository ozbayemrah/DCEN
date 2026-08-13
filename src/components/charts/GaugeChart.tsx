import { statusHex, type Status } from '../../lib/status'
import PanelShell from '../ui/PanelShell'

type GaugeChartProps = {
  label: string
  value: number
  max?: number
  unit?: string
  status: Status
  className?: string
}

export default function GaugeChart({
  label,
  value,
  max = 100,
  unit = '%',
  status,
  className = '',
}: GaugeChartProps) {
  const size = 140
  const strokeWidth = 14
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(1, Math.max(0, value / max))
  const dashOffset = circumference * (1 - pct)

  return (
    <PanelShell
      className={`flex flex-1 flex-col items-center justify-center gap-2 bg-white/40 ${className}`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e4ebf1"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={statusHex[status]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={22}
          fontWeight={700}
          fill="#1c2632"
        >
          {value}
          {unit}
        </text>
      </svg>
      <p className="text-sm font-bold text-[#1c2632]">{label}</p>
    </PanelShell>
  )
}
