import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HomePage from '@/components/HomePage.vue'
import { nextTick } from 'vue'

describe('HomePage.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomePage, {
      global: {
        plugins: [createTestingPinia()],
        stubs: ['SearchField', 'BottomBar', 'ListComponent', 'ButtonComponent', 'PokeCard', 'LoadingScreen']
      }
    })
  })

  it('renderiza el componente correctamente', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('muestra mensaje "Uh-oh!" cuando no hay resultados', () => {
    expect(wrapper.text()).toContain('Uh-oh!')
    expect(wrapper.text()).toContain('You look lost on your journey!')
  })

  it('llama a resetSearch cuando se hace click en "Go back home"', async () => {
    const resetButton = wrapper.findComponent({ name: 'ButtonComponent' })
    await resetButton.vm.$emit('click')
    await nextTick()

    // Verificamos que se haya limpiado el input de búsqueda
    expect(wrapper.vm.searchQuery).toBe('')
  })

  it('muestra la PokeCard cuando hay datos del Pokémon', async () => {
    wrapper.vm.pokemonData = {
      name: 'pikachu',
      sprites: { front_default: '/img/pikachu.png' },
      height: 4,
      weight: 60,
      types: [{ type: { name: 'electric' } }]
    }

    await nextTick()

    expect(wrapper.findComponent({ name: 'PokeCard' }).exists()).toBe(true)
  })
})
