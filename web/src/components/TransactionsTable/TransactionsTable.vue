<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransactionsTable",
  setup() {
    const transactions = [
      {
        id: "1",
        title: "Petshop",
        type: "withdraw",
        amount: 300,
        category: "Zeus",
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Freela",
        type: "deposit",
        amount: 10000,
        category: "Freela",
        createdAt: new Date().toISOString(),
      },
    ];
    return {
      transactions,
    };
  },
});
</script>

<template>
  <div class="table__container">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr :key="{ index }" v-for="(item, index) in transactions">
          <td>{{ item.title }}</td>
          <td>
            {{
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.amount)
            }}
          </td>
          <td>{{ item.category }}</td>
          <td>{{ new Intl.DateTimeFormat("pt-BR").format(new Date(item.createdAt)) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
