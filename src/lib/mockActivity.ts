import type { Status } from './status'

export type OrderItem = {
  id: string
  title: string
  meta: string
  status: Status
}

export const messageOrders: OrderItem[] = [
  { id: 'ORD-4821', title: 'Dispatch order — Sector 7 BESS', meta: '2 min ago · Ops Desk', status: 'good' },
  { id: 'ORD-4820', title: 'Load-shed request — Grid North', meta: '18 min ago · Control Room', status: 'caution' },
  { id: 'ORD-4816', title: 'Maintenance order — Solar Farm 3', meta: '1 hr ago · Field Team', status: 'sun' },
  { id: 'ORD-4809', title: 'Reserve capacity order — RES', meta: '3 hr ago · Ops Desk', status: 'good' },
  { id: 'ORD-4802', title: 'Battery swap order — Mobile V2G 4', meta: '5 hr ago · Field Team', status: 'good' },
  { id: 'ORD-4795', title: 'Curtailment order — Solar Farm 1', meta: 'Yesterday · Control Room', status: 'caution' },
  { id: 'ORD-4788', title: 'Fuel resupply order — Diesel Unit 2', meta: 'Yesterday · Logistics', status: 'good' },
  { id: 'ORD-4779', title: 'Inspection order — Geothermal Well 3', meta: '2 days ago · Field Team', status: 'sun' },
]

export const notificationOrders: OrderItem[] = [
  { id: 'ORD-4825', title: 'Critical load order — Sector 12', meta: 'Just now · Auto-flagged', status: 'danger' },
  { id: 'ORD-4823', title: 'Standby deployment order — Hydro 2', meta: '9 min ago · Ops Desk', status: 'sun' },
  { id: 'ORD-4811', title: 'Storm alert order — Coastal Grid', meta: '45 min ago · Weather Feed', status: 'danger' },
  { id: 'ORD-4806', title: 'Frequency deviation order — Grid North', meta: '1 hr ago · Auto-flagged', status: 'caution' },
  { id: 'ORD-4798', title: 'Reserve margin order — RES', meta: '2 hr ago · Control Room', status: 'danger' },
  { id: 'ORD-4790', title: 'Voltage sag order — Sector 4', meta: '4 hr ago · Auto-flagged', status: 'caution' },
  { id: 'ORD-4783', title: 'Backup activation order — BESS 6', meta: 'Yesterday · Ops Desk', status: 'sun' },
]

export const operatorLocation = {
  city: 'Graz',
  region: 'Styria',
  country: 'Austria',
  timezone: 'Europe/Vienna',
  utcOffset: 'GMT+2',
  coordinates: '47.0707° N, 15.4395° E',
}

export const cloudSync = {
  lastSync: '2 minutes ago',
  nextSync: 'in 3 minutes',
  status: 'good' as Status,
  destination: 'dcen-grid-archive · eu-central-1',
}

export type ServerStatusItem = {
  name: string
  status: Status
  note?: string
}

export const llmServers: ServerStatusItem[] = [
  { name: 'llm-core-01.dcen.internal', status: 'good' },
  { name: 'llm-core-02.dcen.internal', status: 'good' },
  { name: 'llm-infer-03.dcen.internal', status: 'good' },
  { name: 'llm-batch-04.dcen.internal', status: 'caution', note: 'Under maintenance' },
  { name: 'llm-edge-05.dcen.internal', status: 'good' },
]

export type MenuAction = {
  key: string
  label: string
  disabled?: boolean
}

export const menuMoreTools: MenuAction[] = [
  { key: 'diagnostics', label: 'Diagnostics' },
  { key: 'reports', label: 'Reports' },
  { key: 'export', label: 'Export Data', disabled: true },
]

export const userSettingsItems: MenuAction[] = [
  { key: 'profile', label: 'Profile' },
  { key: 'preferences', label: 'Preferences' },
  { key: 'notifications', label: 'Notification Settings' },
  { key: 'security', label: 'Security' },
  { key: 'sign-out', label: 'Sign Out' },
]
