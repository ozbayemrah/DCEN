type BottomNavProps = {
  fullName: string
}

const SYSTEM_VERSION = 'DCEN Platform v0.1.0'

export default function BottomNav({ fullName }: BottomNavProps) {
  const dateLabel = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <footer className="border-t border-white px-4 py-3 lg:px-8">
      <div className="flex flex-col items-start gap-2 text-xs text-[#6e808e] lg:flex-row lg:items-center lg:justify-between lg:gap-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>{dateLabel}</span>
          <span className="opacity-40">·</span>
          <span>{SYSTEM_VERSION}</span>
          <span className="opacity-40">·</span>
          <span>{fullName}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:gap-4">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#00ff3c]" />
            AES-256 encrypted · TLS 1.3
          </span>
          <button
            type="button"
            className="rounded-lg px-2 py-1 font-bold text-[#1c2632] transition-colors duration-150 hover:bg-[#1c2632]/5"
          >
            Help
          </button>
        </div>
      </div>
    </footer>
  )
}
