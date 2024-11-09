import axios from "axios";
import Cookies from "js-cookie"

export async function login(user: { username: string, password: string }): Promise<string> {
  const response = await axios.post('http://localhost:3333/auth/login', user)
  if (!response.data.token) {
    alert("Erro ao fazer login")
    return ''
  }

  Cookies.set('bamboo.token', response.data.token, {
    expires: 7 // 7 days
  })
  return response.data.token
}