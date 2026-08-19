import type { OrderItem } from '../../lib/mockActivity'
import { statusPillClass } from '../../lib/status'
import ScrollArea from './ScrollArea'

type OrderListProps = {
  title: string
  items: OrderItem[]
}

export default function OrderList({ title, items }: OrderListProps) {
  return (
    <div className="flex w-[22rem] flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-bold text-[#1c2632]">{title}</p>
        <span className="rounded px-2 py-0.5 text-xs text-[#6e808e]">{items.length} orders</span>
      </div>
      <ScrollArea maxHeight="20rem" contentClassName="flex flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="flex flex-col items-start gap-1 rounded-lg border border-transparent px-2 py-2 text-left transition-colors duration-150 hover:border-white hover:bg-[#1c2632]/5"
          >
            <div className="flex w-full items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#1c2632]">{item.id}</span>
              <span className={`rounded px-2 py-0.5 text-[10px] ${statusPillClass[item.status]}`}>
                {item.status}
              </span>
            </div>
            <p className="text-sm text-[#1c2632]">{item.title}</p>
            <p className="text-xs text-[#6e808e]">{item.meta}</p>
          </button>
        ))}
      </ScrollArea>
    </div>
  )
}
