// tests/unit/Button.spec.js
import { mount } from '@vue/test-utils';
import { toHaveNoViolations } from 'jest-axe';
import axe from '@/test/axe-helper';

import MyButton from '@/stories/Button.vue';

// 👇 Imports a specific story for the test
import { Primary } from '@/stories/Button.stories';


expect.extend(toHaveNoViolations)

it('renders the button in the primary state', () => {
  const wrapper = mount(MyButton, {
    propsData: Primary.args,
  });
  expect(wrapper.classes()).toContain('storybook-button--primary');
});

it('should have no a11y violations', async () => {
  const wrapper = mount(MyButton, {
    propsData: Primary.args,
  });
  const results = await axe(wrapper.element);
  expect(results).toHaveNoViolations();
})
