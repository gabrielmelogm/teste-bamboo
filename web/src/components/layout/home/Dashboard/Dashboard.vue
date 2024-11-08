<script setup lang="ts">
import Summary from "../Summary/Summary.vue";
import TransactionsTable from "../TransactionsTable/TransactionsTable.vue";
</script>

<template>
  <div class="dashboard__container">
    <Summary />
    <TransactionsTable />
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
