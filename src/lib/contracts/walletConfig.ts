import { createWalletClient, http, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'
import { PRIVATE_KEY } from '../envs'

export const walletClient = createWalletClient({
  chain: sepolia,
  transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
  account: privateKeyToAccount(PRIVATE_KEY),
}).extend(publicActions)


export const DEKA_TRAINING_ADDRESS = "0x26bdf81B08A57c13797439224D74043E5A4d82c3" as `0x${string}`