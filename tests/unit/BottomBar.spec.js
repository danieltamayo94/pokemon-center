import { mount } from '@vue/test-utils'
import BottomBar from '@/components/shared-components/BottomBar.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useFavoritesStore } from '@/stores/useFavoritesStore'

describe('BottomBar.vue', () => {
  let favoritesStore

  beforeEach(() => {
    setActivePinia(createPinia())
    favoritesStore = useFavoritesStore()
  })

  it('renderiza los dos botones', () => {
    const wrapper = mount(BottomBar, {
      global: {
        stubs: ['ButtonComponent']
      }
    })

    const buttons = wrapper.findAllComponents({ name: 'ButtonComponent' })
    expect(buttons.length).toBe(2)
  })

  it('emite "toggle-favorites" con false al hacer click en el botón All', async () => {
    const wrapper = mount(BottomBar, {
      global: {
        stubs: {
          ButtonComponent: {
            template: '<button @click="$emit(\'click\')"><slot /></button>'
          }
        }
      }
    })

    const buttons = wrapper.findAll('button')
    await buttons[0].trigger('click')
    expect(wrapper.emitted('toggle-favorites')).toBeTruthy()
    expect(wrapper.emitted('toggle-favorites')[0]).toEqual([false])
  })

  it('emite "toggle-favorites" con true al hacer click en el botón Favorites', async () => {
    favoritesStore.favorites.push({ name: 'pikachu' })

    const wrapper = mount(BottomBar, {
      global: {
        stubs: {
          ButtonComponent: {
            template: '<button @click="$emit(\'click\')"><slot /></button>'
          }
        }
      }
    })

    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')
    expect(wrapper.emitted('toggle-favorites')).toBeTruthy()
    expect(wrapper.emitted('toggle-favorites')[0]).toEqual([true])
  })
})
