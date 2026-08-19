import iconZoomIn from '../../assets/panels/source-terminal/icon-zoom-in.svg'
import iconZoomOut from '../../assets/panels/source-terminal/icon-zoom-out.svg'
import iconLocate from '../../assets/panels/source-terminal/icon-locate.svg'
import iconMove from '../../assets/panels/source-terminal/icon-move.svg'
import iconFullscreen from '../../assets/panels/source-terminal/icon-fullscreen.svg'
import iconChevron from '../../assets/panels/source-terminal/icon-chevron.svg'

function ControlButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-lg border border-[#6e808e] p-1 transition-colors duration-150 hover:bg-white/50 ${className}`}
    >
      {children}
    </button>
  )
}

function IconTile({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded bg-[#6e808e] ${className}`}>
      <img src={src} alt={alt} className="block" />
    </div>
  )
}

export function ZoomLocateStack({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <ControlButton className="flex-col gap-px p-0 overflow-hidden">
        <IconTile src={iconZoomIn} className="h-6 w-6 rounded-b-none" />
        <IconTile src={iconZoomOut} className="h-6 w-6 rounded-t-none" />
      </ControlButton>
      <ControlButton>
        <IconTile src={iconLocate} className="size-6" />
      </ControlButton>
      <ControlButton>
        <IconTile src={iconMove} className="size-6" />
      </ControlButton>
    </div>
  )
}

export function FullscreenButton() {
  return (
    <ControlButton className="absolute right-2 top-2">
      <IconTile src={iconFullscreen} className="size-6" />
    </ControlButton>
  )
}

export function CollapseButton({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Collapse usage bars"
      className={`flex h-6 w-7 shrink-0 items-center justify-center rounded-lg border border-[#6e808e] transition-colors duration-150 hover:bg-white/50 ${className}`}
    >
      <div className="flex h-4 w-5 items-center justify-center rounded bg-[#6e808e]">
        <img src={iconChevron} alt="" className="block rotate-90" style={{ width: 9, height: 9 }} />
      </div>
    </button>
  )
}
