import { mount } from '@vue/test-utils'
import { axe } from 'jest-axe'
import 'jest-axe/extend-expect'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })

  test('<nuxt-logo /> passes accessibility tests', async () => {
    const wrapper = mount(NuxtLogo)
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })
})
