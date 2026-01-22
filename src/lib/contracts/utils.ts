import { keccak256, toBytes } from 'viem'

export const applyKeccak256 = (input: string): string => {
  const normalizedInput = input.toLowerCase().trim()
  const hash = keccak256(toBytes(normalizedInput))
  return hash
}
