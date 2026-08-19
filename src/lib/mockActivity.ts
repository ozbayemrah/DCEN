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
]

export const notificationOrders: OrderItem[] = [
  { id: 'ORD-4825', title: 'Critical load order — Sector 12', meta: 'Just now · Auto-flagged', status: 'danger' },
  { id: 'ORD-4823', title: 'Standby deployment order — Hydro 2', meta: '9 min ago · Ops Desk', status: 'sun' },
  { id: 'ORD-4811', title: 'Storm alert order — Coastal Grid', meta: '45 min ago · Weather Feed', status: 'danger' },
]

export const operatorLocation = {
  city: 'Graz',
  region: 'Styria',
  country: 'Austria',
  timezone: 'Europe/Vienna',
  utcOffset: 'GMT+2',
  coordinates: '47.0707° N, 15.4395° E',
}
