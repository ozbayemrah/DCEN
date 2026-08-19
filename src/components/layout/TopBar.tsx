import { StatGroup, statGroups } from './StatTicker'
import {
  AccountSettingsIcon,
  AvatarPhoto,
  BellIcon,
  ChatIcon,
  CloudDownloadIcon,
  DropdownChevron,
  LogoIcon,
  MenuIcon,
  RobotIcon,
  RssIcon,
  StructureIcon,
} from './TopBarIcons'
import { toolbarButtons } from './ToolbarButtons'
import HoverCard from '../ui/HoverCard'
import IconButton from '../ui/IconButton'
import OrderList from '../ui/OrderList'
import ServerStatusList from '../ui/ServerStatusList'
import MenuActionList from '../ui/MenuActionList'
import { statusPillClass } from '../../lib/status'
import {
  cloudSync,
  llmServers,
  menuMoreTools,
  messageOrders,
  notificationOrders,
  operatorLocation,
  userSettingsItems,
} from '../../lib/mockActivity'

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
  const llmOnlineCount = llmServers.filter((server) => server.status === 'good').length

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
              You have{' '}
              <HoverCard
                inline
                align="left"
                trigger={<span className="cursor-default font-bold underline">{unreadCount} unread messages</span>}
                panelClassName="w-80"
              >
                <OrderList title="Messages" items={messageOrders} />
              </HoverCard>
              ,
              <br />
              and{' '}
              <HoverCard
                inline
                align="left"
                trigger={
                  <span className="cursor-default font-bold text-[#f02] underline">
                    {highPriorityCount} High Priority Notification
                  </span>
                }
                panelClassName="w-80"
              >
                <OrderList title="Notifications" items={notificationOrders} />
              </HoverCard>
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
              <HoverCard
                align="right"
                panelClassName="w-64"
                trigger={
                  <IconButton className="p-1.5" aria-label="Cloud sync status">
                    <CloudDownloadIcon />
                  </IconButton>
                }
              >
                <div className="flex flex-col gap-2 p-1 text-[#1c2632]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold">Cloud Sync</p>
                    <span className={`rounded px-2 py-0.5 text-[10px] ${statusPillClass[cloudSync.status]}`}>
                      Up to date
                    </span>
                  </div>
                  <p className="text-xs text-[#6e808e]">Last synced {cloudSync.lastSync}</p>
                  <p className="text-xs text-[#6e808e]">Next sync {cloudSync.nextSync}</p>
                  <div className="h-px w-full rounded bg-[#1c2632] opacity-20" />
                  <p className="text-xs text-[#6e808e]">{cloudSync.destination}</p>
                </div>
              </HoverCard>
              <HoverCard
                align="right"
                trigger={
                  <IconButton className="p-1.5" aria-label="LLM systems status">
                    <RobotIcon />
                  </IconButton>
                }
              >
                <ServerStatusList
                  title="LLM Systems"
                  summary={`${llmOnlineCount}/${llmServers.length} Online`}
                  items={llmServers}
                />
              </HoverCard>
              <HoverCard
                align="right"
                panelClassName="w-64"
                trigger={
                  <IconButton className="p-1.5" aria-label="Tools menu">
                    <MenuIcon />
                  </IconButton>
                }
              >
                <div className="flex flex-col gap-2">
                  <p className="px-1 text-sm font-bold text-[#1c2632]">Tools Menu</p>
                  <div className="flex flex-col gap-1">
                    {toolbarButtons.map(({ key, label, Icon }) => (
                      <button
                        key={key}
                        type="button"
                        className="flex items-center gap-2 rounded-lg border border-transparent px-2 py-2 text-left transition-colors duration-150 hover:border-white hover:bg-[#1c2632]/5"
                      >
                        <Icon />
                        <span className="text-sm font-bold text-[#6e808e]">{label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="h-px w-full rounded bg-[#1c2632] opacity-20" />
                  <MenuActionList items={menuMoreTools} />
                </div>
              </HoverCard>
              <HoverCard
                align="right"
                panelClassName="w-56"
                trigger={
                  <IconButton className="p-1.5" aria-label="User settings">
                    <AccountSettingsIcon />
                  </IconButton>
                }
              >
                <div className="flex flex-col gap-2">
                  <p className="px-1 text-sm font-bold text-[#1c2632]">{fullName}</p>
                  <p className="px-1 text-xs text-[#6e808e]">{company}</p>
                  <div className="h-px w-full rounded bg-[#1c2632] opacity-20" />
                  <MenuActionList items={userSettingsItems} />
                </div>
              </HoverCard>
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
