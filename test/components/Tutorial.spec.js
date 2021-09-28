import { mount } from '@vue/test-utils'
import { axe } from 'jest-axe'
import 'jest-axe/extend-expect'
import Tutorial from '@/components/Tutorial.vue'

describe('Tutorial', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Tutorial)
    expect(wrapper.vm).toBeTruthy()
  })

  test('<action-menu /> passes accessibility tests', async () => {
    const wrapper = mount(Tutorial)
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })
})
