<template>
  <form class="form">
    <h2>Cadastrar transação</h2>

    <input placeholder="Título" required />
    <input type="number" placeholder="R$" required />

    <div class="form_radio">
      <button
        type="button"
        class="form_radio__button form_radio__button--deposit"
        :class="{ 'form_radio__button--active': transactionType === 'deposit' }"
        @click="changeTransactionType('deposit')"
      >
        <img src="../../assets/income.svg" alt="Entrada" />
        <span>Entrada</span>
      </button>

      <button
        type="button"
        class="form_radio__button form_radio__button--withdraw"
        :class="{ 'form_radio__button--active': transactionType === 'withdraw' }"
        @click="changeTransactionType('withdraw')"
      >
        <img src="../../assets/outcome.svg" alt="Saída" />
        <span>Saída</span>
      </button>
    </div>

    <input placeholder="Categoria" required />

    <button type="submit">Cadastrar</button>
  </form>
</template>

<style lang="scss" src="./styles.scss"></style>
<script lang="ts" src="./script.ts"></script>
