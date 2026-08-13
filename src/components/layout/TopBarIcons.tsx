import logoUnion from '../../assets/icons/topbar/union-11.svg'
import bellUnion from '../../assets/icons/topbar/union-6.svg'
import bellDot from '../../assets/icons/topbar/ellipse-276.svg'
import chatUnion from '../../assets/icons/topbar/union-7.svg'
import chatDot from '../../assets/icons/topbar/ellipse-277.svg'
import cloudUnion from '../../assets/icons/topbar/union-4.svg'
import cloudArrow from '../../assets/icons/topbar/union-5.svg'
import menuVector from '../../assets/icons/topbar/vector.svg'
import gearUnion from '../../assets/icons/topbar/union-8.svg'
import gearUnion2 from '../../assets/icons/topbar/union-9.svg'
import gearDot from '../../assets/icons/topbar/ellipse-309.svg'
import rssUnion from '../../assets/icons/topbar/union-1.svg'
import rssDot from '../../assets/icons/topbar/union-2.svg'
import structureUnion from '../../assets/icons/topbar/union-3.svg'
import structureStroke from '../../assets/icons/topbar/rectangle-3406-stroke.svg'
import chevron from '../../assets/icons/topbar/subtract.svg'
import avatarRing from '../../assets/icons/topbar/ellipse-stroke.svg'

export function LogoIcon() {
  return (
    <div className="relative size-12 overflow-clip">
      <div className="absolute inset-x-0 top-[12.5%] bottom-[12.5%]">
        <img alt="" className="block size-full" src={logoUnion} />
      </div>
    </div>
  )
}

export function BellIcon() {
  return (
    <div className="relative size-8 shrink-0 overflow-clip">
      <div className="absolute inset-[6.25%_13.45%_6.77%_16.58%]">
        <img alt="" className="block size-full" src={bellUnion} />
      </div>
      <div className="absolute inset-[6.25%_6.25%_78.13%_78.13%]">
        <img alt="" className="block size-full" src={bellDot} />
      </div>
    </div>
  )
}

export function ChatIcon() {
  return (
    <div className="relative size-8 shrink-0 overflow-clip">
      <div className="absolute inset-[6.25%_6.25%_7.56%_6.25%]">
        <img alt="" className="block size-full" src={chatUnion} />
      </div>
      <div className="absolute inset-[6.25%_6.25%_78.13%_78.13%]">
        <img alt="" className="block size-full" src={chatDot} />
      </div>
    </div>
  )
}

export function CloudDownloadIcon({ className = 'size-8' }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="absolute inset-[18.75%_6.25%_21.87%_6.25%]">
        <img alt="" className="block size-full" src={cloudUnion} />
      </div>
      <div className="absolute inset-[65.63%_37.5%_15.62%_37.5%]">
        <img alt="" className="block size-full" src={cloudArrow} />
      </div>
    </div>
  )
}

export function MenuIcon() {
  return (
    <div className="relative size-8 shrink-0 overflow-clip">
      <div className="absolute inset-[4.69%_6.25%_15.63%_6.25%]">
        <img alt="" className="block size-full" src={menuVector} />
      </div>
    </div>
  )
}

export function HamburgerIcon() {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute left-[5px] top-[5px] h-[6px] w-[22px] rounded-sm border-2 border-[#1c2632]" />
      <div className="absolute left-[5px] top-[14px] h-[4px] w-[22px] rounded-sm border-2 border-[#1c2632]" />
      <div className="absolute left-[5px] top-[21px] h-[4px] w-[22px] rounded-sm border-2 border-[#1c2632]" />
    </div>
  )
}

export function GearIcon() {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute inset-[6.25%_26.14%_6.25%_12.5%]">
        <img alt="" className="block size-full" src={gearUnion} />
      </div>
      <div className="absolute inset-[53.13%_6.25%_6.25%_53.13%]">
        <img alt="" className="block size-full" src={gearUnion2} />
      </div>
      <div className="absolute inset-[68.75%_21.88%_21.88%_68.75%]">
        <img alt="" className="block size-full" src={gearDot} />
      </div>
    </div>
  )
}

export function RssIcon({ className = 'w-4' }: { className?: string }) {
  return (
    <div className={`relative shrink-0 aspect-square ${className}`}>
      <div className="absolute inset-[6.25%_6.18%_10.71%_10.7%]">
        <img alt="" className="block size-full" src={rssUnion} />
      </div>
      <div className="absolute inset-[71.88%_71.88%_12.5%_12.5%]">
        <img alt="" className="block size-full" src={rssDot} />
      </div>
      <div className="absolute right-0 top-0 size-[6px] rotate-45 rounded-sm bg-[#a35139]" />
    </div>
  )
}

export function StructureIcon({ className = 'w-4' }: { className?: string }) {
  return (
    <div className={`relative shrink-0 aspect-square ${className}`}>
      <div className="absolute inset-[12.5%_6.25%]">
        <img alt="" className="block size-full" src={structureUnion} />
      </div>
      <div className="absolute inset-[12.5%_34.38%_56.25%_34.38%]">
        <img alt="" className="block size-full" src={structureStroke} />
      </div>
    </div>
  )
}

export function DropdownChevron() {
  return (
    <div className="relative size-6 shrink-0">
      <div className="absolute inset-[12.5%_6.7%]">
        <img alt="" className="block size-full" src={chevron} />
      </div>
    </div>
  )
}

export function AvatarPhoto({ initials }: { initials: string }) {
  return (
    <div className="relative size-8 shrink-0">
      <div className="absolute inset-px flex size-[30px] items-center justify-center rounded-full bg-[#1c2632] text-[11px] font-bold text-[#eff2f9]">
        {initials}
      </div>
      <div className="absolute inset-[3.13%]">
        <img alt="" className="block size-full" src={avatarRing} />
      </div>
    </div>
  )
}
