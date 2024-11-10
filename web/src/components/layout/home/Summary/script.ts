import { defineComponent, onMounted, ref } from "vue";
import { getTransactions } from "../../../../services/getTransactions.service";

interface SummaryProps {
  deposits: number;
  withdraws: number;
  total: number;
}

export default defineComponent({
  name: "Summary",
  setup() {
    const summary = ref<SummaryProps>({} as SummaryProps);

    const fetchData = async () => {
      const result = await getTransactions();

      const summaryCalc = result.reduce(
        (acc, transaction) => {
          if (transaction.type === "deposit") {
            acc.deposits += parseFloat(transaction.amount);
            acc.total += parseFloat(transaction.amount);
          } else {
            acc.withdraws += parseFloat(transaction.amount);
            acc.total -= parseFloat(transaction.amount);
          }

          return acc;
        },
        {
          deposits: 0,
          withdraws: 0,
          total: 0,
        }
      );

      summary.value = summaryCalc;
    };

    onMounted(fetchData);

    return {
      summary,
    };
  },
});