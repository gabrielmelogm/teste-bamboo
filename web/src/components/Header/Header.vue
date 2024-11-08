<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "../ui/Modal/Modal.vue";
import NewTransactionModal from "../NewTransactionModal/NewTransactionModal.vue";

export default defineComponent({
  name: "Header",
  components: {
    Modal,
    NewTransactionModal,
  },
  setup() {
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    return {
      isModalVisible,
      openModal,
    };
  },
});
</script>

<template>
  <header class="header__container">
    <div class="header__content">
      <h1 class="header__title">
        <img src="../assets/logo-only.svg" alt="Logo" />
        <span>Transações</span>
      </h1>
      <div>
        <button type="button" class="header__button" @click="openModal">
          Nova transação
        </button>
      </div>
    </div>
  </header>
  <Modal v-model="isModalVisible">
    <NewTransactionModal />
  </Modal>
</template>

<style lang="scss" scoped src="./styles.scss"></style>
