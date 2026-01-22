export type RawZoneData = {
  zone: number
  timeInSeconds: bigint
  timestamp: bigint
  index: bigint
}

export type ZoneData = {
  zone: number
  timeInSeconds: number
  date: string
  index: number
}
