<template>
  <h2>Nova Transação</h2>
  <form class="form">
    <h2>Cadastrar transação</h2>

    <input placeholder="Título" required />
    <input type="number" placeholder="R$" required />

    <div class="form_radio">
      <button
        type="button"
        activeColor="green"
        class="form_radio__button form_radio__button--deposit"
      >
        <img src="../assets/income.svg" alt="Entrada" />
        <span>Entrada</span>
      </button>

      <button type="button" class="form_radio__button form_radio__button--withdraw">
        <img src="../assets/outcome.svg" alt="Saída" />
        <span>Saída</span>
      </button>
    </div>

    <input placeholder="Categoria" required />

    <button type="submit">Cadastrar</button>
  </form>
</template>

<style lang="scss" src="./styles.scss"></style>
