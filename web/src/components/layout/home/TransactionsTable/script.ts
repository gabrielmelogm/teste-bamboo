import Button from 'primevue/button';
import Popover from 'primevue/popover';
import { defineComponent, onMounted, ref } from "vue";
import {
  getTransactions,
  TransactionProps,
} from "../../../../services/getTransactions.service";

export default defineComponent({
  name: "TransactionsTable",
  components: {
    Button,
    Popover
  },
  setup() {
    const op = ref();

    const selectItemMenu = (event: any, transaction: TransactionProps) => {
      op.value[0].show(event)
    }

    const transactions = ref<TransactionProps[]>([]);

    const fetchData = async () => {
      const result = await getTransactions();
      transactions.value = result;
    };

    onMounted(fetchData);

    return {
      transactions,
      op,
      selectItemMenu
    };
  },
});