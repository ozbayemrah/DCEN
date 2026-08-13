import type { ReactNode } from 'react'

export default function PanelHeaderBadge({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative inline-flex h-9 shrink-0 items-center overflow-clip rounded-lg border-2 border-[#6e808e] bg-[#e4ebf1] px-3 text-sm font-normal"
      style={{
        backgroundImage:
          'repeating-linear-gradient(-45deg, rgba(28,38,50,0.5) 0px, rgba(28,38,50,0.5) 1.5px, transparent 1.5px, transparent 7px)',
      }}
    >
      <span className="pointer-events-none absolute inset-[6px] rounded-sm bg-[#eff2f9]" />
      <span className="relative text-[#1c2632]">{children}</span>
    </div>
  )
}
