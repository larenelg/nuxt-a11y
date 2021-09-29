// tests/unit/Page.spec.js
import { mount } from '@vue/test-utils';
import { toHaveNoViolations } from 'jest-axe';
import axe from '@/test/axe-helper';

import Page from '@/stories/Page.vue';

// 👇 Imports a specific story for the test
import { LoggedIn, LoggedOut } from '@/stories/Page.stories';


expect.extend(toHaveNoViolations)

describe('page', () => {
  describe('logged in', () => {
    it('should have no a11y violations', async () => {
      const wrapper = mount(Page, {
        propsData: LoggedIn.args,
      });
      const results = await axe(wrapper.element);
      expect(results).toHaveNoViolations();
    })
  })

  describe('logged out', () => {
    it('should have no a11y violations', async () => {
      const wrapper = mount(Page, {
        propsData: LoggedOut.args,
      });
      const results = await axe(wrapper.element);
      expect(results).toHaveNoViolations();
    })
  })
})
