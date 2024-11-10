import { defineComponent, onMounted, ref } from "vue";
import {
  getTransactions,
  TransactionProps,
} from "../../../../services/getTransactions.service";

export default defineComponent({
  name: "TransactionsTable",
  setup() {
    const transactions = ref<TransactionProps[]>([]);

    const fetchData = async () => {
      const result = await getTransactions();
      transactions.value = result;
    };

    onMounted(fetchData);

    return {
      transactions,
    };
  },
});