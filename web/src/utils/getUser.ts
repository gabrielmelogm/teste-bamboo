
import { jwtDecode } from 'jwt-decode'
import { getToken } from './getToken'

export interface UserPayload {
  sub: string
  username: string
  email: string
  iat: number
  exp: number
}

export function getUser(): UserPayload {
  const token = getToken()
  const user = jwtDecode(token) as UserPayload
  return user
}