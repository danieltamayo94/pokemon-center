import { shallowMount } from '@vue/test-utils'
import ButtonComponent from '@/components/shared-components/ButtonComponent.vue'

describe('ButtonComponent.vue', () => {
  it('renderiza el label correctamente', () => {
    const wrapper = shallowMount(ButtonComponent, {
      props: {
        label: 'Haz clic',
      },
    })
    expect(wrapper.text()).toContain('Haz clic')
  })

  it('agrega clase basada en el estado', () => {
    const wrapper = shallowMount(ButtonComponent, {
      props: {
        label: 'Botón activo',
        state: 'active',
      },
    })
    expect(wrapper.find('button').classes()).toContain('active')
  })

  it('se desactiva si el estado contiene "disabled"', () => {
    const wrapper = shallowMount(ButtonComponent, {
      props: {
        label: 'Botón desactivado',
        state: 'disabled',
      },
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('renderiza el ícono si iconType es proporcionado', () => {
    const wrapper = shallowMount(ButtonComponent, {
      props: {
        label: 'Con ícono',
        iconType: 'active',
      },
    })
    const icon = wrapper.find('.icon')
    expect(icon.exists()).toBe(true)
    expect(icon.html()).toContain('<svg')
  })

  it('no renderiza ícono si iconType no está definido', () => {
    const wrapper = shallowMount(ButtonComponent, {
      props: {
        label: 'Sin ícono',
      },
    })
    expect(wrapper.find('.icon').exists()).toBe(false)
  })
})
