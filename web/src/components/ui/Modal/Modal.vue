<template>
  <div v-if="isVisible" class="modal__overlay" @click.self="close">
    <div class="modal__content">
      <slot></slot>
      <button @click="close" class="modal__close">
        <img src="../../../assets/close.svg" alt="Close button" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isVisible = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newVal) => {
        isVisible.value = newVal;
      }
    );

    const close = () => {
      emit("update:modelValue", false);
    };

    return {
      isVisible,
      close,
    };
  },
});
</script>

<style lang="scss" src="./styles.scss" scoped></style>
