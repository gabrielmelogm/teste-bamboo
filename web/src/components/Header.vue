<script setup lang="ts">
</script>

<template>
	<header class="header__container">
		<div class="header__content">
			<h1 class="header__title">
				<img src="../assets/logo-only.svg" alt="Logo" />
				<span>Transações</span>
			</h1>
			<div>
				<button type="button" class="header__button">Nova transação</button>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header__container {
	background: var(--blue);
}

.header__content {
	max-width: 1120px;
	margin: 0 auto;
	padding: 2rem 1rem 12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.header__title {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.5rem;
}
.header__button {
	font-size: 1rem;
	color: #fff;
	background: var(--blue-light);
	border: 0;
	padding: 0 2rem;
	border-radius: 0.25rem;
	height: 3rem;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
		cursor: pointer;
	}
}
</style>
