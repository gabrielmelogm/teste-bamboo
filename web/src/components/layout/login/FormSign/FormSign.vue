<template>
  <div class="sign">
    <h2>Criar conta</h2>
    <h3>Informe seus dados para criar uma conta</h3>
    <form @submit.prevent="handleSubmit">
      <div class="content-inputs">
        <input
          type="text"
          name="username"
          placeholder="Usuário"
          v-model="form.username"
        />
        <input type="email" name="email" placeholder="E-mail" v-model="form.email" />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          v-model="form.password"
        />
        <button type="submit">Criar conta</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
<script lang="ts" src="./script.ts"></script>
