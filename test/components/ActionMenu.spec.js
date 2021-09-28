import { mount } from '@vue/test-utils'
import { axe } from 'jest-axe'
import 'jest-axe/extend-expect'
import ActionMenu from '@/components/ActionMenu.vue'

describe('ActionMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ActionMenu)
    expect(wrapper.vm).toBeTruthy()
  })

  test('<action-menu /> passes accessibility tests', async () => {
    const wrapper = mount(ActionMenu)
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })
})
