import type { Bbox } from './energyInfrastructure'

export type MapLocation = {
  center: [number, number]
  zoom: number
  bbox: Bbox
}

// Whole Leibnitz district area — Source Terminal
export const LEIBNITZ_AREA: MapLocation = {
  center: [46.7808, 15.535],
  zoom: 12,
  bbox: { south: 46.65, west: 15.35, north: 46.91, east: 15.72 },
}

// Leibnitz town center — Heat Map
export const LEIBNITZ_CENTER: MapLocation = {
  center: [46.7805, 15.5407],
  zoom: 15,
  bbox: { south: 46.7605, west: 15.5107, north: 46.8005, east: 15.5707 },
}

// Kaindorf an der Sulm — RES Map
export const KAINDORF_AN_DER_SULM: MapLocation = {
  center: [46.7922, 15.5386],
  zoom: 14,
  bbox: { south: 46.7672, west: 15.5036, north: 46.8172, east: 15.5736 },
}
