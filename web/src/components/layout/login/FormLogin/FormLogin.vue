<script lang="ts">
import { defineComponent, ref } from "vue";
import FormSign from "../FormSign/FormSign.vue";

export default defineComponent({
  name: "FormLogin",
  components: {
    FormSign,
  },
  setup() {
    const isSign = ref<boolean>(false);

    function handleSign() {
      isSign.value = true;
    }

    return {
      isSign,
      handleSign,
    };
  },
});
</script>

<template>
  <div class="login__container">
    <div class="main">
      <div class="login">
        <div class="title">
          <img src="../../../../assets/logo-only.svg" alt="Logo" />
          <span>Controle Financeiro</span>
        </div>
        <div v-if="!isSign">
          <h2>Login</h2>
          <h3>Escolha como fazer login</h3>
          <form>
            <div class="content-inputs">
              <input type="text" name="username" placeholder="Usuário" />
              <input type="password" name="password" placeholder="Senha" />
              <div class="login__sign">
                <span>Não tem uma conta?</span>
                <a @click="handleSign()">Crie uma conta</a>
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <div v-if="isSign">
          <FormSign />
        </div>
      </div>
      <div class="welcome">
        <div class="main-information">
          <img src="/background-login.png" alt="Imagem de fundo" />
          <p>Gerencie suas <br />finanças</p>
        </div>
        <div class="footer-information">
          <span>briefing: rocketseat</span>
          <span>develop: gabrielmelogm</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
