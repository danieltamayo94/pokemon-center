import { mount } from '@vue/test-utils'
import LoadingScreen from '@/components/shared-components/LoadingScreen.vue'

jest.useFakeTimers()

describe('LoadingScreen.vue', () => {
  it('muestra flares y luego hace fade out cuando la animación termina', async () => {
    const wrapper = mount(LoadingScreen)

    const pokeball = wrapper.find('.pokeball')
    await pokeball.trigger('animationend', { animationName: 'pulseDrop' })
    expect(wrapper.vm.showFlares).toBe(true)
    jest.advanceTimersByTime(1200)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.loading-screen').classes()).toContain('fade-out')
  })
})
