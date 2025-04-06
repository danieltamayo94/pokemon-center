import { mount } from '@vue/test-utils'
import WelcomePage from '@/components/WelcomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('WelcomePage.vue', () => {
  let router

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/home', name: 'Home' }]
    })
  })

  it('se renderiza correctamente', () => {
    const wrapper = mount(WelcomePage, {
      global: {
        stubs: ['ButtonComponent']
      }
    })

    expect(wrapper.text()).toContain('Welcome to Pokédex')
    expect(wrapper.find('img').attributes('src')).toBe('/img/pikachu.svg')
  })

  it('navega a /home al hacer click en el botón', async () => {
    const wrapper = mount(WelcomePage, {
      global: {
        plugins: [router],
        stubs: {
          ButtonComponent: {
            template: '<button @click="$emit(\'click\')">Get started</button>'
          }
        }
      }
    })

    router.push = jest.fn() // 👈 corregido

    await wrapper.find('button').trigger('click')
    expect(router.push).toHaveBeenCalledWith('/home')
  })
})
