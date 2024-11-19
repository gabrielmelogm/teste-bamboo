import axios from "axios";
import { CreateTransactionProps } from "../components/layout/home/NewTransactionModal/script";
import { getToken } from "../utils/getToken";
import { getUser } from "../utils/getUser";
import { API_URL } from "../utils/getApiUrl";

export async function createTransaction(data: CreateTransactionProps) {
  const userId = getUser().sub
  const token = getToken()

  const response = await axios.post(`${API_URL}/transactions`, {
    ...data,
    type: data.transactionType,
    userId,
    createdAt: new Date().toISOString()
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const result = response.data

  return result
}