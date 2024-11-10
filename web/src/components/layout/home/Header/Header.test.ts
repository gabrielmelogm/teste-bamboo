import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Header from "./Header.vue";
import NewTransactionModal from "../NewTransactionModal/NewTransactionModal.vue";

describe('Header', () => {
  it('deve renderizar o header e o botão de nova transação', () => {
    const header = mount(Header)
    expect(header.exists()).toBe(true)

    const button = header.find('button')
    expect(button.text()).toContain('Nova transação')
  })
  it('deve abrir o modal ao apertar no botão de nova transação', async () => {
    const header = mount(Header)
    expect(header.exists()).toBe(true)

    const button = header.find('button')
    const modal = mount(NewTransactionModal)

    expect(button.text()).toContain('Nova transação')

    await button.trigger('click')

    expect(modal.exists()).toBe(true)
  })
})