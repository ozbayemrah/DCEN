import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export default function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-lg text-[#1c2632] transition-all duration-150 hover:scale-105 hover:bg-[#1c2632]/10 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
