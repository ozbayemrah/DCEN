import type { ReactNode } from 'react'
import PanelShell from './PanelShell'

type Align = 'left' | 'right' | 'center'

type HoverCardProps = {
  trigger: ReactNode
  children: ReactNode
  align?: Align
  panelClassName?: string
}

const alignClass: Record<Align, string> = {
  left: 'left-0',
  right: 'right-0',
  center: 'left-1/2 -translate-x-1/2',
}

export default function HoverCard({ trigger, children, align = 'right', panelClassName = '' }: HoverCardProps) {
  return (
    <div className="group/hovercard relative">
      {trigger}
      <div
        className={`invisible absolute top-full z-50 mt-3 translate-y-1 opacity-0 transition-all duration-150 ease-out group-hover/hovercard:visible group-hover/hovercard:translate-y-0 group-hover/hovercard:opacity-100 ${alignClass[align]}`}
      >
        <PanelShell
          className={`bg-[#eff2f9] shadow-[0_16px_40px_rgba(22,27,29,0.35)] ${panelClassName}`}
        >
          {children}
        </PanelShell>
      </div>
    </div>
  )
}
