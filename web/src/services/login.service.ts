import axios from "axios";
import Cookies from "js-cookie"
import { API_URL } from "../utils/getApiUrl";

export async function login(user: { username: string, password: string }): Promise<string> {
  const response = await axios.post(`${API_URL}/auth/login`, user)
  if (!response.data.token) {
    alert("Erro ao fazer login")
    return ''
  }

  Cookies.set('bamboo.token', response.data.token, {
    expires: 7 // 7 days
  })
  return response.data.token
}