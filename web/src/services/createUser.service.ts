import axios from "axios"
import { API_URL } from "../utils/getApiUrl"

interface CreateUserProps {
  username: string
  email: string
  password: string
}

export interface CreateUserResponseProps extends CreateUserProps {
  id: string
  createdAt: string
}

export async function createUser(user: CreateUserProps): Promise<Omit<CreateUserResponseProps, 'password'>> {
  const response = await axios.post(`${API_URL}/users`, user)
  const createdUser = response.data
  return createdUser
}