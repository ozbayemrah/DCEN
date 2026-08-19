import vector981 from '../../assets/icons/toolbar/vector-981-stroke.svg'
import ellipse294 from '../../assets/icons/toolbar/ellipse-294.svg'
import union1 from '../../assets/icons/toolbar/union-1.svg'
import iconStroke from '../../assets/icons/toolbar/icon-stroke.svg'

export function ControlIcon() {
  return (
    <div className="relative size-8 shrink-0 overflow-clip">
      <div className="absolute inset-[6.25%_9.38%]">
        <img alt="" className="block size-full" src={union1} />
      </div>
    </div>
  )
}

export function ForecastsIcon() {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute inset-[21.97%_6.25%_15.51%_6.25%]">
        <img alt="" className="block size-full" src={vector981} />
      </div>
      <div className="absolute bottom-[9.38%] left-[31.25%] right-1/2 top-[71.88%]">
        <img alt="" className="block size-full" src={ellipse294} />
      </div>
      <div className="absolute inset-[40.63%_37.5%_40.63%_43.75%]">
        <img alt="" className="block size-full" src={ellipse294} />
      </div>
      <div className="absolute inset-[53.13%_9.38%_28.13%_71.88%]">
        <img alt="" className="block size-full" src={ellipse294} />
      </div>
    </div>
  )
}

export function ToolsIcon() {
  return (
    <div className="relative size-8 shrink-0 overflow-clip">
      <div className="absolute inset-[6.25%_6.25%_9.38%_9.38%]">
        <img alt="" className="block size-full" src={iconStroke} />
      </div>
    </div>
  )
}

export const toolbarButtons = [
  { key: 'control', label: 'Control', Icon: ControlIcon },
  { key: 'forecasts', label: 'Forecasts', Icon: ForecastsIcon },
  { key: 'tools', label: 'Tools', Icon: ToolsIcon },
] as const

const buttons = toolbarButtons

export default function ToolbarButtons() {
  return (
    <div className="flex items-center justify-end gap-2">
      {buttons.map(({ key, label, Icon }) => (
        <button
          key={key}
          type="button"
          className="flex w-[184px] shrink-0 items-center gap-2 rounded-lg border border-white p-2 transition-colors duration-150 hover:border-[#6e808e] hover:bg-white/40"
        >
          <Icon />
          <span className="whitespace-nowrap text-base font-bold text-[#6e808e]">{label}</span>
        </button>
      ))}
    </div>
  )
}
