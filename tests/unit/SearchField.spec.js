// tests/unit/SearchInput.spec.js
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import SearchInput from '@/components/shared-components/SearchField.vue'

describe('SearchInput.vue', () => {
  it('renderiza el input y el botón de búsqueda', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    })

    const input = wrapper.find('input')
    const button = wrapper.find('button')

    expect(input.exists()).toBe(true)
    expect(button.exists()).toBe(true)
  })

  it('actualiza el valor del input con v-model', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    })

    const input = wrapper.find('input')
    await input.setValue('pikachu')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['pikachu'])
  })

  it('muestra el valor inicial correctamente', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: 'bulbasaur'
      }
    })

    const input = wrapper.find('input')
    expect(input.element.value).toBe('bulbasaur')
  })
})
