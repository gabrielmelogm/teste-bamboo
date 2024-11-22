import NewTransactionModal from '../NewTransactionModal/NewTransactionModal.vue';
import { Button, Popover, Dialog, Toast, ConfirmPopup } from 'primevue';
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
    NewTransactionModal,
    Toast,
    ConfirmPopup,
  },
  setup() {
    const op = ref();
    const selectedItem = ref<any>(null)

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
      selectedItem,
    };
  },
  methods: {
    handleClickEdit(transaction: TransactionProps) {
      this.selectedItem = transaction
    },
    handleClickDelete(event: any) {
      this.$confirm.require({
        target: event.currentTarget,
        group: 'templating',
        message: 'Você deseja excluir esse registro?',
        icon: 'pi pi-exclamation-circle',
        rejectProps: {
          icon: 'pi pi-times',
          label: 'Cancel',
          outlined: true
        },
        acceptProps: {
          icon: 'pi pi-check',
          label: 'Confirm'
        },
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
          this.$confirm.close()
        }
      });
    }
  }
});