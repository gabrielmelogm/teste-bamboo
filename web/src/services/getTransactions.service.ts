import axios from "axios";
import { getToken } from "../utils/getToken";
import { getUser } from "../utils/getUser";
import { API_URL } from "../utils/getApiUrl";

export interface TransactionProps {
  amount: string
  category: string
  createdAt: Date
  id: string
  title: string
  type: string
  userId: string
}

export async function getTransactions(): Promise<TransactionProps[]> {
  const user = getUser()
  const token = getToken()

  const response = await axios.get(`${API_URL}/transactions/${user.sub}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}