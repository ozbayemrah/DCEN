import type { ReactNode } from 'react'

type PanelShellProps = {
  className?: string
  children: ReactNode
}

export default function PanelShell({ className = '', children }: PanelShellProps) {
  return (
    <div className={`relative overflow-clip rounded-lg border border-white p-2 ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(22,27,29,0.25),inset_-2px_-2px_10px_0px_rgba(250,251,255,0.5)]" />
    </div>
  )
}
