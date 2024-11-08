<script setup lang="ts">
import Summary from "./Summary.vue";
import TransactionsTable from "./TransactionsTable.vue";
</script>

<template>
  <div class="dashboard__container">
    <Summary />
    <TransactionsTable />
  </div>
</template>

<style lang="scss" scoped>
.dashboard__container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}
</style>
