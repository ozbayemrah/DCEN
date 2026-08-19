import type { MenuAction } from '../../lib/mockActivity'

type MenuActionListProps = {
  items: MenuAction[]
}

export default function MenuActionList({ items }: MenuActionListProps) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          disabled={item.disabled}
          className="flex items-center justify-between rounded-lg border border-transparent px-2 py-2 text-left text-sm text-[#1c2632] transition-colors duration-150 enabled:hover:border-white enabled:hover:bg-[#1c2632]/5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span>{item.label}</span>
          {item.disabled && <span className="text-[10px] text-[#6e808e]">Soon</span>}
        </button>
      ))}
    </div>
  )
}
