import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from './envs'

export const generateJwt = (payload: { userId: number }) => {
  const expiresIn = '30d' // Token valid for 30 days
  return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn })
}

export const verifyJwt = (token: string) => {
  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET) as { userId: number; iat: number; exp: number }
    return { valid: true, decoded }
  } catch (error) {
    return { valid: false, error }
  }
}
