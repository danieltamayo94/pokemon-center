import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import PokeCard from '@/components/shared-components/PokeCard.vue'

describe('PokeCard.vue', () => {
  const mockProps = {
    imageSrc: '/img/pikachu.png',
    name: 'pikachu',
    weight: 60,
    height: 4,
    types: ['electric']
  }

  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue()
      }
    })
  })

  const mountWithPinia = (options = {}) => {
    return mount(PokeCard, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      },
      ...options
    })
  }

  it('renderiza correctamente los datos del Pokémon', () => {
    const wrapper = mountWithPinia({ props: mockProps })

    expect(wrapper.text()).toContain('Name:')
    expect(wrapper.text()).toContain('pikachu')
    expect(wrapper.text()).toContain('Weight:')
    expect(wrapper.text()).toContain('60')
    expect(wrapper.text()).toContain('Types:')
    expect(wrapper.text()).toContain('electric')
  })

  it('emite el evento close al hacer click en el botón de cerrar', async () => {
    const wrapper = mountWithPinia({ props: mockProps })

    await wrapper.find('.close-button').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('muestra la notificación de copiado después de hacer click en Share', async () => {
    jest.useFakeTimers()
    const wrapper = mountWithPinia({ props: mockProps })

    await wrapper.find('.share-button').trigger('click')
    expect(navigator.clipboard.writeText).toHaveBeenCalled()
    expect(wrapper.vm.copied).toBe(true)

    jest.advanceTimersByTime(2000)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.copied).toBe(false)
  })

  it('renderiza el botón de favorito y el componente de notificación', () => {
    const wrapper = mountWithPinia({ props: mockProps })

    expect(wrapper.findComponent({ name: 'FavoriteButton' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'CopiedNotification' }).exists()).toBe(true)
  })
})
