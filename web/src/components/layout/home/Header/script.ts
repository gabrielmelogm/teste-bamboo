import { defineComponent, ref } from "vue";
import { Dialog } from "primevue";
import NewTransactionModal from "../NewTransactionModal/NewTransactionModal.vue";

export default defineComponent({
  name: "Header",
  components: {
    Dialog,
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