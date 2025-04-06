import { mount } from '@vue/test-utils'
import CopiedInfo from '@/components/shared-components/CopiedNotification.vue'

describe('CopiedInfo.vue', () => {
  it('muestra el mensaje "Copied" cuando visible es true', () => {
    const wrapper = mount(CopiedInfo, {
      props: {
        visible: true
      }
    })

    expect(wrapper.text()).toContain('Copied')
    expect(wrapper.find('.copied-info').exists()).toBe(true)
  })

  it('no muestra el mensaje cuando visible es false', () => {
    const wrapper = mount(CopiedInfo, {
      props: {
        visible: false
      }
    })

    expect(wrapper.text()).not.toContain('Copied')
    expect(wrapper.find('.copied-info').exists()).toBe(false)
  })
})
