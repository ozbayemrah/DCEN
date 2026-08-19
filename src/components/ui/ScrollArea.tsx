import { useEffect, useRef, useState, type ReactNode } from 'react'

type ScrollAreaProps = {
  className?: string
  contentClassName?: string
  maxHeight: string
  children: ReactNode
}

export default function ScrollArea({
  className = '',
  contentClassName = '',
  maxHeight,
  children,
}: ScrollAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [thumb, setThumb] = useState({ height: 0, top: 0, visible: false })

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const updateThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      if (scrollHeight <= clientHeight + 1) {
        setThumb({ height: 0, top: 0, visible: false })
        return
      }
      const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 24)
      const maxThumbTop = clientHeight - thumbHeight
      const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop
      setThumb({ height: thumbHeight, top: thumbTop, visible: true })
    }

    updateThumb()
    el.addEventListener('scroll', updateThumb)
    const observer = new ResizeObserver(updateThumb)
    observer.observe(el)
    return () => {
      el.removeEventListener('scroll', updateThumb)
      observer.disconnect()
    }
  }, [children])

  return (
    <div className={`relative ${className}`}>
      <div
        ref={viewportRef}
        className={`scroll-hide overflow-y-auto pr-3 ${contentClassName}`}
        style={{ maxHeight }}
      >
        {children}
      </div>
      {thumb.visible && (
        <div className="pointer-events-none absolute right-0.5 top-0 h-full w-1.5 rounded-full bg-[#1c2632]/10">
          <div
            className="absolute right-0 w-1.5 rounded-full bg-[#1c2632]/45"
            style={{ height: thumb.height, top: thumb.top }}
          />
        </div>
      )}
    </div>
  )
}
