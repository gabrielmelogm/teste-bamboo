import axios from "axios";
import { getToken } from "../utils/getToken";
import { getUser } from "../utils/getUser";

export interface TransactionProps {
  amount: string
  category: string
  createAt: string
  id: string
  title: string
  type: string
  userId: string
}

export async function getTransactions(): Promise<TransactionProps[]> {
  const user = getUser()
  const token = getToken()

  const response = await axios.get(`http://localhost:3333/transactions/${user.sub}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}