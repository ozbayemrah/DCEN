import { useState } from 'react'
import { ConsumptionIcon, GridIcon, SourceIcon, StorageIcon } from './SidebarIcons'

const navItems = [
  {
    key: 'source',
    label: 'Source',
    Icon: SourceIcon,
    items: ['Bioenergy', 'Solar Farms', 'Hydroelectric', 'Geothermal'],
  },
  {
    key: 'storage',
    label: 'Storage & Backup',
    Icon: StorageIcon,
    items: ['BESS', 'Hydro/Thermal', 'Mobile Battery V2G', 'Diesel & Gas Units'],
  },
  { key: 'grid', label: 'Grid', Icon: GridIcon, items: [] as string[] },
  { key: 'consumption', label: 'Consumption', Icon: ConsumptionIcon, items: [] as string[] },
] as const

export default function Sidebar() {
  const [openKey, setOpenKey] = useState<string | null>('source')

  return (
    <nav
      className="relative flex w-[219px] shrink-0 flex-col items-start gap-3 overflow-clip rounded-lg border border-white py-4 pl-4 pr-6"
      style={{
        backgroundImage:
          'linear-gradient(192.92deg, rgb(211, 221, 229) 0%, rgb(239, 242, 249) 45.232%)',
      }}
    >
      {navItems.map(({ key, label, Icon, items }) => {
        const hasItems = items.length > 0
        const isOpen = hasItems && openKey === key

        return (
          <div key={key} className="flex w-full flex-col gap-2">
            <button
              type="button"
              onClick={() => hasItems && setOpenKey(isOpen ? null : key)}
              className="flex w-full shrink-0 items-center gap-2 rounded-lg px-1 py-1 -mx-1 text-left text-[#6e808e] transition-colors duration-150 hover:bg-[#1c2632]/5 hover:text-[#1c2632]"
            >
              <Icon />
              <span className="flex-1 whitespace-nowrap text-base font-bold">{label}</span>
              {hasItems && (
                <span
                  className={`block size-[6px] shrink-0 rotate-45 border-b-2 border-r-2 border-[#6e808e] transition-transform ${
                    isOpen ? '-rotate-[135deg]' : ''
                  }`}
                />
              )}
            </button>
            {isOpen && (
              <div className="flex flex-col gap-1.5 pl-10">
                {items.map((item) => (
                  <span key={item} className="whitespace-nowrap text-base font-normal text-[#6e808e]">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        )
      })}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(22,27,29,0.25),inset_-2px_-2px_10px_0px_rgba(250,251,255,0.5)]" />
    </nav>
  )
}
