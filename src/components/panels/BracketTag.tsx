type BracketTagProps = {
  text: string
  size?: number
  className?: string
}

export default function BracketTag({ text, size = 32, className = '' }: BracketTagProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <span className="absolute left-0 top-0 size-1.5 border-l-2 border-t-2 border-[#1c2632]" />
      <span className="absolute bottom-0 right-0 size-1.5 border-b-2 border-r-2 border-[#1c2632]" />
      <span
        className="absolute inset-0 flex items-center justify-center font-bold text-[#1c2632]"
        style={{ fontSize: size * 0.625 }}
      >
        {text}
      </span>
    </div>
  )
}
