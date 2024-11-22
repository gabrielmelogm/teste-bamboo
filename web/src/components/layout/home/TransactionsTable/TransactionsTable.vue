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
          <td>
            <Button
              variant="text"
              icon="pi pi-ellipsis-v"
              @click="selectItemMenu($event)"
            >
            </Button>
            <Popover ref="op">
              <div>
                <ul class="table__list">
                  <li class="table__item" @click="handleClickEdit(item)">Editar</li>
                  <li class="table__item" @click="handleClickDelete($event)">Excluir</li>
                </ul>
              </div>
            </Popover>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Dialog v-model:visible="selectedItem" modal header="Cadastrar transação">
    <NewTransactionModal :editData="selectedItem" />
  </Dialog>
  <Toast />
  <ConfirmPopup group="templating">
    <template #message="slotProps">
      <div class="table__confirm">
        <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
        <p>{{ slotProps.message.message }}</p>
      </div>
    </template>
  </ConfirmPopup>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
<script lang="ts" src="./script.ts"></script>
