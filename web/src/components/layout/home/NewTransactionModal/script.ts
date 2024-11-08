import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NewTransactionModal",
  setup() {
    type TransactionType = "deposit" | "withdraw"

    const transactionType = ref<TransactionType>("deposit")

    function changeTransactionType(trType: TransactionType) {
      transactionType.value = trType
    }
    
    return {
      transactionType,
      changeTransactionType
    }
  }
})