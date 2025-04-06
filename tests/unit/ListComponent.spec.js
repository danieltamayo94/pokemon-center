import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ListComponent from '@/components/shared-components/ListComponent.vue'
import FavoriteButton from '@/components/shared-components/FavoriteButton.vue'

describe('ListComponent.vue', () => {
  const pokemon = { id: 25, name: 'Pikachu' }
  const label = 'Pikachu'

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('muestra correctamente el label', () => {
    const wrapper = mount(ListComponent, {
      props: { label, pokemon }
    })

    expect(wrapper.find('.label').text()).toBe(label)
  })

  it('incluye el componente FavoriteButton', () => {
    const wrapper = mount(ListComponent, {
      props: { label, pokemon }
    })

    const favoriteButton = wrapper.findComponent(FavoriteButton)
    expect(favoriteButton.exists()).toBe(true)
  })

  it('pasa el prop pokemon correctamente al componente FavoriteButton', () => {
    const wrapper = mount(ListComponent, {
      props: { label, pokemon }
    })

    const favoriteButton = wrapper.findComponent(FavoriteButton)
    expect(favoriteButton.props('pokemon')).toEqual(pokemon)
  })
})
