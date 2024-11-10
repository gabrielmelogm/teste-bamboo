import { defineComponent, ref } from "vue";
import Modal from "../../../ui/Modal/Modal.vue";
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