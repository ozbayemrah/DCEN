import type { ServerStatusItem } from '../../lib/mockActivity'
import { statusHex } from '../../lib/status'
import ScrollArea from './ScrollArea'

type ServerStatusListProps = {
  title: string
  summary: string
  items: ServerStatusItem[]
}

export default function ServerStatusList({ title, summary, items }: ServerStatusListProps) {
  return (
    <div className="flex w-[22rem] flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-bold text-[#1c2632]">{title}</p>
        <span className="rounded bg-[rgba(0,255,60,0.25)] px-2 py-0.5 text-[10px] font-bold text-[#1c2632]">
          {summary}
        </span>
      </div>
      <ScrollArea maxHeight="16rem" contentClassName="flex flex-col gap-1">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-lg border border-transparent px-2 py-2 transition-colors duration-150 hover:border-white hover:bg-[#1c2632]/5"
          >
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: statusHex[item.status] }}
            />
            <span className="flex-1 truncate text-xs text-[#1c2632]">{item.name}</span>
            {item.note && (
              <span className="whitespace-nowrap text-[10px] font-bold text-[#a37f1c]">({item.note})</span>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
