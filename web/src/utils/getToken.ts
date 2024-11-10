import Cookies from "js-cookie"
import { router } from "../routes/routes"

export function getToken(): string {
  const token = Cookies.get('bamboo.token') as string
  if (!token) {
    Cookies.remove('bamboo.token')
    router.push('/')
    return ''
  }
  return token
}