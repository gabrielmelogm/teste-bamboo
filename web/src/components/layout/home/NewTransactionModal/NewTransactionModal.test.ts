import { DOMWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NewTransactionModal from "./NewTransactionModal.vue";

describe('NewTransactionModal', () => {
  it('deve renderizar os campos de Título, Valor, Tipo e Categoria', () => {
    const element = mount(NewTransactionModal)

    expect(element.text()).toContain('Cadastrar transação')

    const titleInput = element.find('input[name="title"]')
    const amountInput = element.find('input[name="amount"]')
    const radioInput = element.find('.form_radio')
    const categoryInput = element.find('input[name="category"]')

    expect(titleInput.exists()).toBe(true)
    expect(amountInput.exists()).toBe(true)
    expect(radioInput.exists()).toBe(true)
    expect(categoryInput.exists()).toBe(true)
  })
  it('o input radio deve conter dois botões, Entrada e Saída', () => {
    const element = mount(NewTransactionModal)

    const radioInput = element.find('.form_radio')
    expect(radioInput.exists()).toBe(true)

    const depositButton = radioInput.find('.form_radio__button--deposit')
    const withdrawButton = radioInput.find('.form_radio__button--withdraw')

    expect(depositButton.text()).toContain('Entrada')
    expect(withdrawButton.text()).toContain('Saída')
  })
  it('deve preencher os dados corretamente e realizar submit do formulário', async () => {
    const element = mount(NewTransactionModal)

    const usernameInput = element.find('input[name="title"]') as DOMWrapper<HTMLInputElement>
    const amountInput = element.find('input[name="amount"]') as DOMWrapper<HTMLInputElement>
    const categoryInput = element.find('input[name="category"]') as DOMWrapper<HTMLInputElement>

    const typeInput = element.find('.form_radio__button--withdraw')
    expect(typeInput.exists()).toBe(true)

    await typeInput.trigger('click')

    expect(typeInput.classes()).toContain('form_radio__button--active')

    await usernameInput.setValue('Gás')
    await amountInput.setValue(100)
    await categoryInput.setValue('Contas')

    expect(usernameInput.element.value).toBe('Gás')
    expect(amountInput.element.value).toBe("100")
    expect(categoryInput.element.value).toBe("Contas")

    const submitButton = element.find('button[type="submit"]')
    expect(submitButton.exists()).toBe(true)

    await submitButton.trigger('click')
  })
})