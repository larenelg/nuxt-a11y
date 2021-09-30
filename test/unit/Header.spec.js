// tests/unit/Button.spec.js
import { mount } from '@vue/test-utils';
import { toHaveNoViolations } from 'jest-axe';
import axe from '@/test/axe-helper';

import Header from '@/stories/Header.vue';

// 👇 Imports a specific story for the test
import { LoggedIn, LoggedOut } from '@/stories/Header.stories';


expect.extend(toHaveNoViolations)

describe('header', () => {
  describe('logged in', () => {
    it('should have no a11y violations', async () => {
      const wrapper = mount(Header, {
        propsData: LoggedIn.args,
      });
      const results = await axe(wrapper.element);
      expect(results).toHaveNoViolations();
    })
  })

  describe('logged out', () => {
    it('should have no a11y violations', async () => {
      const wrapper = mount(Header, {
        propsData: LoggedOut.args,
      });
      const results = await axe(wrapper.element);
      expect(results).toHaveNoViolations();
    })
  })
})
