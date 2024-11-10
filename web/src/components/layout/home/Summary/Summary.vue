<template>
  <div class="summary__container">
    <div>
      <header id="deposits">
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
<script lang="ts" src="./script.ts"></script>
