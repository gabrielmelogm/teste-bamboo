import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
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
})