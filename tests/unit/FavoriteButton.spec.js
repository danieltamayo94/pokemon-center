import { mount } from '@vue/test-utils'
import FavoriteButton from '@/components/shared-components/FavoriteButton.vue'

describe('FavoriteButton.vue', () => {
  const pokemon = { id: 25, name: 'Pikachu' }

  const favoritesStoreMock = {
    isFavorite: jest.fn(),
    toggleFavorite: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('muestra el botón dorado si es favorito', () => {
    favoritesStoreMock.isFavorite.mockReturnValue(true)

    const wrapper = mount(FavoriteButton, {
      props: { pokemon, favoritesStore: favoritesStoreMock }
    })

    expect(wrapper.find('svg').attributes('fill')).toBe('#ECA539')
  })

  it('muestra el botón gris si no es favorito', () => {
    favoritesStoreMock.isFavorite.mockReturnValue(false)

    const wrapper = mount(FavoriteButton, {
      props: { pokemon, favoritesStore: favoritesStoreMock }
    })

    expect(wrapper.find('svg').attributes('fill')).toBe('#D3D3D3')
  })

  it('llama a toggleFavorite al hacer click', async () => {
    favoritesStoreMock.isFavorite.mockReturnValue(false)

    const wrapper = mount(FavoriteButton, {
      props: { pokemon, favoritesStore: favoritesStoreMock }
    })

    await wrapper.find('button').trigger('click')

    expect(favoritesStoreMock.toggleFavorite).toHaveBeenCalledWith(pokemon)
  })
})
