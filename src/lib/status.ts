export type Status = 'good' | 'caution' | 'sun' | 'danger'

export const statusHex: Record<Status, string> = {
  good: '#00ff3c',
  caution: '#feec61',
  sun: '#feb161',
  danger: '#ff0022',
}

export const statusBg: Record<Status, string> = {
  good: 'rgba(0,255,60,0.25)',
  caution: 'rgba(254,236,97,0.25)',
  sun: 'rgba(254,177,97,0.25)',
  danger: 'rgba(255,0,34,0.25)',
}

export const statusPillClass: Record<Status, string> = {
  good: 'bg-[rgba(0,255,60,0.25)] text-[#1c2632]',
  caution: 'bg-[rgba(254,236,97,0.25)] text-[#1c2632]',
  sun: 'bg-[rgba(254,177,97,0.25)] text-[#1c2632]',
  danger: 'bg-[rgba(255,0,34,0.25)] text-[#1c2632] font-bold',
}
