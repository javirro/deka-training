'use server'

import { registerNewTraining } from '@/lib/contracts/smartContractFunctions'

import { convertMinutesAndSecondsToTotalSeconds, convertStringDateToUnitSecondsTimestamp } from '@/lib/time'

export async function addNewTrainingAction(date: string, minutes: number, seconds: number, zoneId: number, userId: number) {
  try {
    const timeInSeconds = convertMinutesAndSecondsToTotalSeconds(minutes, seconds)
    const timestamp = convertStringDateToUnitSecondsTimestamp(date)

    const txHash = await registerNewTraining(userId, zoneId, timeInSeconds, timestamp)

    return { success: true, txHash }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: 'An error occurred during login', txHash: null }
  }
}
