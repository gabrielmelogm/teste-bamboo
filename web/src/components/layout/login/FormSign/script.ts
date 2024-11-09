import z from "zod"
import { defineComponent } from "vue";
import { createUser } from "../../../../services/createUser.service";

const inputsSchema = z.object({
  username: z.string({
    required_error: "Usuário é obrigatório"
  }).min(1, {
    message: "Usuário é obrigatório"
  }),
  email: z.string({
    required_error: "E-mail é obrigatório"
  }).email({
    message: "E-mail inválido"
  }),
  password: z.string({
    required_error: "Senha é obrigatório"
  }).min(8, {
    message: "A senha deve conter no mínimo 8 caracteres"
  })
})

export default defineComponent({
  name: "FormSign",
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      submitted: false
    }
  },
  methods: {
    async handleSubmit() {
      const inputs = inputsSchema.parse(this.form)
      this.submitted = true
      const createdUser = await createUser(inputs)
      console.log(createdUser)
    }
  }
})