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

export const getZoneTrainingsPaginated = async (userId: number, zoneId: number, page: number) => {
  const pageSize = 10
  const data = await walletClient.readContract({
    address: DEKA_TRAINING_ADDRESS,
    abi: DEKA_ABI,
    functionName: 'getZoneTrainingsPaginated',
    args: [userId, zoneId, page, pageSize],
  })
  console.log('Paginated Trainings Data:', data)
}
