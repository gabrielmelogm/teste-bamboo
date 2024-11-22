import NewTransactionModal from '../NewTransactionModal/NewTransactionModal.vue';
import { Button, Popover, Dialog } from 'primevue';
import { defineComponent, onMounted, ref } from "vue";
import {
  getTransactions,
  TransactionProps,
} from "../../../../services/getTransactions.service";

export default defineComponent({
  name: "TransactionsTable",
  components: {
    Button,
    Popover,
    Dialog,
    NewTransactionModal
  },
  setup() {
    const op = ref();
    const selectedItem = ref<TransactionProps | null>(null)

    const selectItemMenu = (event: any) => {
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
      selectItemMenu,
      selectedItem
    };
  },
  methods: {
    handleClickEdit(transaction: TransactionProps) {
      this.selectedItem = transaction
    }
  }
});