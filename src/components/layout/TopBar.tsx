import { StatGroup, statGroups } from './StatTicker'
import {
  AvatarPhoto,
  BellIcon,
  ChatIcon,
  CloudDownloadIcon,
  DropdownChevron,
  GearIcon,
  HamburgerIcon,
  LogoIcon,
  MenuIcon,
  RssIcon,
  StructureIcon,
} from './TopBarIcons'
import HoverCard from '../ui/HoverCard'
import IconButton from '../ui/IconButton'
import OrderList from '../ui/OrderList'
import { messageOrders, notificationOrders, operatorLocation } from '../../lib/mockActivity'

type TopBarProps = {
  fullName: string
  company: string
  greeting: string
  unreadCount: number
  highPriorityCount: number
}

export default function TopBar({ fullName, company, greeting, unreadCount, highPriorityCount }: TopBarProps) {
  const firstName = fullName.split(' ')[0]
  const initials = fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const now = new Date()
  const dateLabel = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const timeLabel = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  return (
    <header className="flex items-start justify-between gap-4 border-b border-white px-8 py-3">
        <div className="flex shrink-0 items-start gap-4">
          <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-white p-4">
            <div className="absolute inset-0 rounded-full bg-[#1c2632]" />
            <LogoIcon />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(22,27,29,0.25),inset_-2px_-2px_10px_0px_rgba(250,251,255,0.5)]" />
          </div>
          <div className="pt-1">
            <p className="text-2xl font-bold text-[#1c2632]">{greeting}, {firstName}</p>
            <p className="text-base text-[#1c2632]">
              You have <span className="font-bold underline">{unreadCount} unread messages</span>,
              <br />
              and{' '}
              <span className="font-bold text-[#f02] underline">
                {highPriorityCount} High Priority Notification
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {statGroups.map((group) => (
            <StatGroup key={group.key} rows={group.rows} />
          ))}
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <div className="flex items-center gap-4">
            <div className="flex h-12 items-center gap-2 rounded-full p-4">
              <HoverCard
                align="right"
                trigger={
                  <IconButton className="p-1.5" aria-label="Notifications">
                    <BellIcon />
                  </IconButton>
                }
              >
                <OrderList title="Notifications" items={notificationOrders} />
              </HoverCard>
              <HoverCard
                align="right"
                trigger={
                  <IconButton className="p-1.5" aria-label="Messages">
                    <ChatIcon />
                  </IconButton>
                }
              >
                <OrderList title="Messages" items={messageOrders} />
              </HoverCard>
              <IconButton className="p-1.5" aria-label="Downloads">
                <CloudDownloadIcon />
              </IconButton>
              <IconButton className="p-1.5" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <IconButton className="p-1.5" aria-label="Navigation">
                <HamburgerIcon />
              </IconButton>
              <IconButton className="p-1.5" aria-label="Settings">
                <GearIcon />
              </IconButton>
            </div>
            <div className="h-12 w-0.5 rounded bg-[#1c2632] opacity-50" />
            <div className="flex h-12 items-center gap-2">
              <AvatarPhoto initials={initials} />
              <div className="whitespace-nowrap">
                <p className="text-base font-bold text-[#1c2632]">{fullName}</p>
                <p className="text-xs text-[#6e808e]">{company}</p>
              </div>
              <IconButton className="size-6 p-0" aria-label="Account menu">
                <DropdownChevron />
              </IconButton>
            </div>
          </div>

          <div className="h-px w-full rounded bg-[#1c2632] opacity-50" />

          <HoverCard
            align="right"
            trigger={
              <div className="flex cursor-default items-center gap-2 rounded-lg px-1.5 py-1 text-xs text-[#1c2632] transition-colors duration-150 hover:bg-[#1c2632]/5">
                <CloudDownloadIcon className="w-4" />
                <RssIcon />
                <StructureIcon />
                <div className="mx-1 h-4 w-0.5 rounded bg-[#1c2632] opacity-50" />
                <p>
                  <span className="font-bold">
                    {dateLabel}, {timeLabel}
                  </span>{' '}
                  ({operatorLocation.utcOffset})
                </p>
              </div>
            }
            panelClassName="w-72"
          >
            <div className="flex flex-col gap-2 p-1 text-[#1c2632]">
              <p className="text-2xl font-bold">{timeLabel}</p>
              <p className="text-sm text-[#6e808e]">{dateLabel}</p>
              <div className="h-px w-full rounded bg-[#1c2632] opacity-20" />
              <p className="text-sm font-bold">
                {operatorLocation.city}, {operatorLocation.country}
              </p>
              <p className="text-xs text-[#6e808e]">{operatorLocation.region}</p>
              <p className="text-xs text-[#6e808e]">{operatorLocation.coordinates}</p>
              <p className="text-xs text-[#6e808e]">
                {operatorLocation.timezone} · {operatorLocation.utcOffset}
              </p>
            </div>
          </HoverCard>
        </div>
    </header>
  )
}
