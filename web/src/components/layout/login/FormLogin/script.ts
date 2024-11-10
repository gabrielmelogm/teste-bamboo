import z from "zod"
import Cookies from "js-cookie"
import FormSign from "../FormSign/FormSign.vue";
import { defineComponent, onMounted, ref } from "vue";
import { login } from "../../../../services/login.service";
import { router } from "../../../../routes/routes";
import { getUser } from "../../../../utils/getUser";
import axios from "axios";

const inputsSchema = z.object({
  username: z.string({
    required_error: "Usuário é obrigatório"
  }).min(1, {
    message: "Usuário é obrigatório"
  }),
  password: z.string({
    required_error: "Senha é obrigatório"
  }).min(8, {
    message: "A senha deve conter no mínimo 8 caracteres"
  })
})


export default defineComponent({
  name: "FormLogin",
  components: {
    FormSign,
  },
  setup() {
    const token = Cookies.get('bamboo.token') as string

    async function VerifyIsLogged() {
      if (token) {
        const user = getUser()
        const response = await axios.get(`http://localhost:3333/users/${user.username}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (response.status === 200) {
          router.push('/home')
        }
      }
    }

    onMounted(VerifyIsLogged)

    const isSign = ref<boolean>(false);

    function handleSign() {
      isSign.value = true;
    }

    return {
      isSign,
      handleSign,
    };
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      const inputs = inputsSchema.parse(this.form)
      try {
        await login(inputs)
        router.push('/home')
      } catch (error) {
        console.error(error)
        alert("Erro inesperado ao fazer login")
      }
    }
  }
});