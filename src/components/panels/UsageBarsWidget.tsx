export type BarSegment = {
  color: string
  dimmed?: boolean
}

export type BarColumn = {
  key: string
  label: string
  segments: BarSegment[]
}

type UsageBarsWidgetProps = {
  columns: BarColumn[]
  trackHeight?: number
  className?: string
}

export default function UsageBarsWidget({ columns, trackHeight = 102, className = '' }: UsageBarsWidgetProps) {
  return (
    <div className={`flex items-end gap-1 ${className}`}>
      {columns.map(({ key, label, segments }, columnIndex) => (
        <div key={key} className="flex flex-col items-center gap-1 rounded-lg border border-[#6e808e] p-1">
          <p className="text-xs font-bold text-[#1c2632]">{label}</p>
          <div
            className="flex w-[26px] flex-col justify-end gap-px overflow-hidden rounded border border-[#6e808e] bg-[#6e808e]"
            style={{ height: trackHeight }}
          >
            {segments.map((segment, segmentIndex) => (
              <div
                key={segmentIndex}
                className={`h-3 shrink-0 ${segmentIndex === 0 ? 'animate-[bar-flicker_2.6s_ease-in-out_infinite]' : ''}`}
                style={{
                  backgroundColor: segment.color,
                  opacity: segmentIndex === 0 ? undefined : segment.dimmed ? 0.5 : 1,
                  animationDelay: segmentIndex === 0 ? `${columnIndex * 0.3}s` : undefined,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
