<template>
  <form class="form" @submit.prevent="handleSubmit()">
    <input placeholder="Título" name="title" v-model="form.title" required />
    <input type="number" placeholder="R$" name="amount" v-model="form.amount" required />

    <div class="form_radio">
      <button
        type="button"
        class="form_radio__button form_radio__button--deposit"
        :class="{ 'form_radio__button--active': form.transactionType === 'deposit' }"
        @click="changeTransactionType('deposit')"
      >
        <img src="../../../../assets/income.svg" alt="Entrada" />
        <span>Entrada</span>
      </button>

      <button
        type="button"
        class="form_radio__button form_radio__button--withdraw"
        :class="{ 'form_radio__button--active': form.transactionType === 'withdraw' }"
        @click="changeTransactionType('withdraw')"
      >
        <img src="../../../../assets/outcome.svg" alt="Saída" />
        <span>Saída</span>
      </button>
    </div>

    <input placeholder="Categoria" name="category" v-model="form.category" required />

    <Button type="submit">{{ editData ? "Editar" : "Cadastrar" }}</Button>
  </form>
</template>

<style lang="scss" src="./styles.scss"></style>
<script lang="ts" src="./script.ts"></script>
