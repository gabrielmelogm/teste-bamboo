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
        <tr v-for="item in transactions">
          <td>{{ item.title }}</td>
          <td>
            {{
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(parseFloat(item.amount))
            }}
          </td>
          <td>{{ item.category }}</td>
          <td>{{ new Intl.DateTimeFormat("pt-BR").format(item.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
<script lang="ts" src="./script.ts"></script>
