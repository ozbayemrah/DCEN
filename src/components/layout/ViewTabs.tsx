import { NavLink } from 'react-router-dom'

const tabs = [
  { label: 'Standard View', to: '/' },
  { label: 'Heat Map', to: '/deployment' },
  { label: 'Loading Cap', to: '/load-test' },
  { label: 'Source Terminal', to: '/grid' },
] as const

const comingSoonTabs = ['Maintenance', 'Deployments', 'Terminal Issues']

export default function ViewTabs() {
  return (
    <div className="scroll-hide flex items-center gap-2 overflow-x-auto rounded-lg">
      {tabs.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `relative flex h-12 min-w-[120px] shrink-0 items-center overflow-clip rounded-lg border px-4 text-base font-bold transition-colors duration-150 ${
              isActive
                ? 'border-2 border-[#6e808e] bg-[#e4ebf1] text-[#eff2f9]'
                : 'border-white text-[#6e808e] hover:border-[#6e808e] hover:bg-[#e4ebf1]/60'
            }`
          }
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundImage:
                    'repeating-linear-gradient(-45deg, rgba(28,38,50,0.5) 0px, rgba(28,38,50,0.5) 1.5px, transparent 1.5px, transparent 7px)',
                }
              : undefined
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="pointer-events-none absolute inset-[10px] rounded-sm bg-[#1c2632]" />
              )}
              <span className="relative">{label}</span>
            </>
          )}
        </NavLink>
      ))}
      {comingSoonTabs.map((label) => (
        <span
          key={label}
          className="flex h-12 min-w-[120px] shrink-0 cursor-not-allowed items-center rounded-lg border border-white px-4 text-base font-bold text-[#6e808e] opacity-50"
        >
          {label}
        </span>
      ))}
    </div>
  )
}
