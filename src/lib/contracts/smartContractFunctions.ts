import { Hex } from 'viem'
import { convertUnixToDayMonthYear } from '../time'
import { RawZoneData, ZoneData } from '../zoneTypes'
import { DEKA_ABI } from './dekaTrainingAbi'
import { applyKeccak256 } from './utils'
import { DEKA_TRAINING_ADDRESS, walletClient } from './walletConfig'

export const verifyPassword = async (email: string, password: string): Promise<{ valid: boolean; userId: number }> => {
  const hashedPassword = applyKeccak256(password)
  const hashedEmail = applyKeccak256(email)
  const valid = (await walletClient.readContract({
    address: DEKA_TRAINING_ADDRESS,
    abi: DEKA_ABI,
    functionName: 'verifyUserPassword',
    args: [hashedEmail, hashedPassword],
  })) as boolean
  if (!valid) {
    return { valid: false, userId: 0 }
  }

  const userId = (await walletClient.readContract({
    address: DEKA_TRAINING_ADDRESS,
    abi: DEKA_ABI,
    functionName: 'registeredUsers',
    args: [hashedEmail],
  })) as number
  console.log('User ID:', userId)
  return { valid, userId }
}

export const getZoneTrainingsPaginated = async (userId: number, zoneId: number, page: number): Promise<Array<ZoneData>> => {
  const pageSize = 20
  const formattedZoneId = zoneId - 1 // In solidity enums start at 0 and in the app zones start at 1
  if (formattedZoneId < 0) {
    throw new Error('Invalid zone ID')
  }
  const rawData = (await walletClient.readContract({
    address: DEKA_TRAINING_ADDRESS,
    abi: DEKA_ABI,
    functionName: 'getZoneTrainingsPaginated',
    args: [userId, formattedZoneId, page, pageSize],
  })) as Array<RawZoneData>
  const timeOrderedData = rawData.sort((a, b) => {
    if (a.timeInSeconds < b.timeInSeconds) return -1
    if (a.timeInSeconds > b.timeInSeconds) return 1
    return 0
  })
  const data = timeOrderedData.map((entry) => ({
    zone: Number(entry.zone) + 1, // Adjusting back to app's zone numbering
    timeInSeconds: Number(entry.timeInSeconds),
    date: convertUnixToDayMonthYear(Number(entry.timestamp)),
    index: Number(entry.index),
  }))
  return data
}

export const registerNewTraining = async (userId: number, zoneId: number, timeInSeconds: number, timestamp: number): Promise<Hex> => {
  const formattedZoneId = zoneId - 1 // In solidity enums start at 0 and in the app zones start at 1
  if (formattedZoneId < 0) {
    throw new Error('Invalid zone ID')
  }
  const txHash = await walletClient.writeContract({
    address: DEKA_TRAINING_ADDRESS,
    abi: DEKA_ABI,
    functionName: 'addNewTraining',
    args: [userId, formattedZoneId, timeInSeconds, timestamp],
  })
  await walletClient.waitForTransactionReceipt({ hash: txHash })
  console.log('Transaction confirmed with hash:', txHash)
  return txHash as Hex
}
