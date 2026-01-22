import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { verifyJwt } from './generateJwt'

export const cookiesValidation = async (cookiesStore: ReadonlyRequestCookies) => {
  const authToken = cookiesStore.get('auth_token')?.value || null
  let validToken = false
  let userId: number | null = null
  if (authToken) {
    const { valid, decoded: id } = verifyJwt(authToken)
    validToken = valid
    userId = id && typeof id === 'object' && 'userId' in id ? (id.userId as number) : null
  }
  return { validToken, userId }
}
