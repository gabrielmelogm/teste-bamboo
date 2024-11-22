import { defineComponent, ref } from "vue";
import { Button } from 'primevue'
import { z } from "zod";
import { createTransaction } from "../../../../services/createTransaction.service";

const inputSchema = z.object({
  title: z.string().min(1, {
    message: 'O título é obrigatório'
  }),
  amount: z.number().min(1, {
    message: 'O valor é obrigatório'
  }),
  transactionType: z.enum(['deposit', 'withdraw'], {
    message: 'Tipo inválido',
    required_error: 'O tipo é obrigatório'
  }),
  category: z.string().min(1, {
    message: 'A categoria é obrigatório'
  })
})

export type CreateTransactionProps = z.infer<typeof inputSchema>

export default defineComponent({
  name: "NewTransactionModal",
  components: {
    Button
  },
  data() {
    type TransactionType = "deposit" | "withdraw"
    const isLoading = ref<boolean>(false)
    const transactionType = ref<TransactionType>("deposit")

    function changeTransactionType(trType: TransactionType) {
      transactionType.value = trType
    }

    return {
      form: {
        title: '',
        amount: '',
        transactionType,
        category: ''
      },
      isLoading,
      changeTransactionType
    }
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true
      const inputs = inputSchema.parse(this.form)
      await createTransaction(inputs)
    }
  }
})