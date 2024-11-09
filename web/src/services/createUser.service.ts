import axios from "axios"

interface CreateUserProps {
  username: string
  email: string
  password: string
}

interface CreateUserResponseProps extends CreateUserProps {
  id: string
  createdAt: string
}

export async function createUser(user: CreateUserProps): Promise<Omit<CreateUserResponseProps, 'password'>> {
  const response = await axios.post('http://localhost:3333/users', user)
  const createdUser = response.data
  return createdUser
}