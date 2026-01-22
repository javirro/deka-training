'use server'

import { verifyPassword } from '@/lib/contracts/smartContractFunctions'
import { generateJwt } from '@/lib/generateJwt'
import { cookies } from 'next/headers'

export async function loginAction(email: string, password: string) {
  try {
    const { valid: isValid, userId } = await verifyPassword(email, password)

    if (!isValid) {
      return { success: false, error: 'Invalid credentials' }
    }

    const token = generateJwt({ userId })

    const cookieStore = await cookies()
    cookieStore.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 14, // 14 days
    })

    return { success: true, userId }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: 'An error occurred during login' }
  }
}
