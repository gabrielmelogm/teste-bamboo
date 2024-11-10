import { DOMWrapper, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FormSign from "./FormSign.vue";

describe('FormSign', () => {
  it('deve renderizar os campos de username, email e password', () => {
    const element = mount(FormSign)

    expect(element.text()).toContain('Criar conta')

    const usernameInput = element.find('input[name="username"]')
    const emailInput = element.find('input[name="email"]')
    const passwordInput = element.find('input[name="password"]')

    expect(usernameInput.exists()).toBe(true)
    expect(emailInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)
  })
  it('deve preencher os dados corretamente e realizar submit do formulário', async () => {
    const element = mount(FormSign)

    const usernameInput = element.find('input[name="username"]') as DOMWrapper<HTMLInputElement>
    const emailInput = element.find('input[name="email"]') as DOMWrapper<HTMLInputElement>
    const passwordInput = element.find('input[name="password"]') as DOMWrapper<HTMLInputElement>

    await usernameInput.setValue('admin')
    await emailInput.setValue('email@email.com')
    await passwordInput.setValue('password')

    expect(usernameInput.element.value).toBe('admin')
    expect(emailInput.element.value).toBe('email@email.com')
    expect(passwordInput.element.value).toBe('password')

    const button = element.find('button')
    expect(button.text()).toContain('Criar conta')

    const submitFormSpy = vi.spyOn(element.vm, 'handleSubmit')
    const form = element.find('form')
    await form.trigger('submit')
    expect(submitFormSpy).toHaveBeenCalled()
  })
})