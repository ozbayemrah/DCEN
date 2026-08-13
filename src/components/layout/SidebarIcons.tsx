import vectorSource from '../../assets/icons/vector-509-stroke.svg'
import unionSource from '../../assets/icons/union.svg'
import vectorGrid from '../../assets/icons/vector-1056.svg'
import vectorStorage from '../../assets/icons/vector-504.svg'
import subtractStorage from '../../assets/icons/subtract.svg'
import unionConsumption from '../../assets/icons/union-1.svg'

export function SourceIcon() {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute inset-[5.55%_19.59%_5.29%_16.49%]">
        <img alt="" className="block size-full" src={vectorSource} />
      </div>
      <div className="absolute inset-[6.25%_65.62%_67.81%_9.38%]">
        <img alt="" className="block size-full" src={unionSource} />
      </div>
    </div>
  )
}

export function StorageIcon() {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute inset-[33.32%_19.55%_36.7%_57.05%]">
        <img alt="" className="block size-full" src={vectorStorage} />
      </div>
      <div className="absolute inset-[33.32%_57.05%_36.7%_19.55%]">
        <img alt="" className="block size-full" src={vectorStorage} />
      </div>
      <div className="absolute h-6 left-[17px] top-1 w-[10px]">
        <img alt="" className="block size-full" src={subtractStorage} />
      </div>
      <div className="absolute h-6 left-[5px] top-1 w-[10px]">
        <img alt="" className="block size-full" src={subtractStorage} />
      </div>
    </div>
  )
}

export function GridIcon() {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute h-[25px] left-[5px] top-[3px] w-[22px]">
        <img alt="" className="block size-full" src={vectorGrid} />
      </div>
    </div>
  )
}

export function ConsumptionIcon() {
  return (
    <div className="relative size-8 shrink-0 overflow-clip">
      <div className="absolute inset-[6.25%]">
        <img alt="" className="block size-full" src={unionConsumption} />
      </div>
    </div>
  )
}
