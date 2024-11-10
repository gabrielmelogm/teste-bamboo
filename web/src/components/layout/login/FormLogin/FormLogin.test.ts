import { describe, it, expect, vi } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import FormLogin from './FormLogin.vue'

describe('FormLogin', () => {
  it('deve renderizar os campos de username e password', () => {
    const element = mount(FormLogin)

    expect(element.text()).toContain('Login')

    const usernameInput = element.find('input[name="username"]')
    const passwordInput = element.find('input[name="password"]')

    expect(usernameInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)
  })
  it('deve preencher os dados corretamente e realizar submit do formulário', async () => {
    const element = mount(FormLogin)

    const usernameInput = element.find('input[name="username"]') as DOMWrapper<HTMLInputElement>
    const passwordInput = element.find('input[name="password"]') as DOMWrapper<HTMLInputElement>

    await usernameInput.setValue('admin')
    await passwordInput.setValue('password')

    expect(usernameInput.element.value).toBe('admin')
    expect(passwordInput.element.value).toBe('password')

    const button = element.find('button')
    expect(button.text()).toContain('Login')

    const submitFormSpy = vi.spyOn(element.vm, 'handleSubmit')
    const form = element.find('form')
    await form.trigger('submit')
    expect(submitFormSpy).toHaveBeenCalled()
  })
})