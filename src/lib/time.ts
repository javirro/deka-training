export const convertSecondsToTimeString = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  if (hours === 0) return `${minutes}m ${seconds}s`
  return `${hours}h ${minutes}m ${seconds}s`
}

export const convertUnixToDayMonthYear = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000)
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Months are zero-based
  const year = date.getUTCFullYear()
  return `${day}/${month}/${year}`
}

export const convertMinutesAndSecondsToTotalSeconds = (minutes: number, seconds: number): number => {
  return minutes * 60 + seconds
}

export const convertStringDateToUnitSecondsTimestamp = (dateString: string): number => {
  const date = new Date(dateString)
  return Math.floor(date.getTime() / 1000)
}