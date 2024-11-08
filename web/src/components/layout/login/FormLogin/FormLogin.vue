<template>
  <div class="login__container">
    <div className="main">
      <div className="login">
        <div className="title">
          <img src="../../../../assets/logo-only.svg" alt="Logo" />
          <span>Controle Financeiro</span>
        </div>
        <h2>Login</h2>
        <h3>Escolha como fazer login</h3>
        <form>
          <div className="content-inputs">
            <input type="text" name="username" placeholder="Usuário" />
            <input type="password" name="password" placeholder="Senha" />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div className="welcome">
        <div className="main-information">
          <img src="/background-login.png" alt="Imagem de fundo" />
          <p>Gerencie suas <br />finanças</p>
        </div>
        <div className="footer-information">
          <span>briefing: rocketseat</span>
          <span>develop: gabrielmelogm</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped></style>
