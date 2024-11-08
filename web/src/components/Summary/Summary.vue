<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Summary",
  data() {
    return {
      summary: {
        deposits: 10000,
        withdraws: 300,
      },
    };
  },
});
</script>

<template>
  <div class="summary__container">
    <div>
      <header>
        <p>Entradas</p>
        <img src="../../assets/income.svg" alt="Entradas" />
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
        <img src="../../assets/outcome.svg" alt="Saídas" />
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
        <img src="../../assets/total.svg" alt="Total" />
      </header>
      <strong>
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits - summary.withdraws)
        }}
      </strong>
    </div>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
