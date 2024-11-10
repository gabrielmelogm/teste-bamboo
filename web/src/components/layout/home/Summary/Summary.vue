<script lang="ts">
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
</script>

<template>
  <div class="summary__container">
    <div>
      <header>
        <p>Entradas</p>
        <img src="../../../../assets/income.svg" alt="Entradas" />
      </header>
      <strong>
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)
        }}
      </strong>
    </div>
    <div>
      <header>
        <p>Saídas</p>
        <img src="../../../../assets/outcome.svg" alt="Saídas" />
      </header>
      <strong>
        -
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)
        }}
      </strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src="../../../../assets/total.svg" alt="Total" />
      </header>
      <strong>
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)
        }}
      </strong>
    </div>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
