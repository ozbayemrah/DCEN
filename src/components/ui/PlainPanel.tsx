import type { ReactNode } from 'react'
import PanelShell from './PanelShell'

type PlainPanelProps = {
  title: string
  children?: ReactNode
  className?: string
}

export default function PlainPanel({ title, children, className = '' }: PlainPanelProps) {
  return (
    <PanelShell className={`flex flex-col items-center gap-2 bg-white/40 ${className}`}>
      <p className="text-base text-[#6e808e]">{title}</p>
      {children ?? <p className="text-sm text-[#6e808e]">Coming next.</p>}
    </PanelShell>
  )
}
