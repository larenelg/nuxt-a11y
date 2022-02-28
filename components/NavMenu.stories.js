import NavMenu from './NavMenu.vue';

export default {
  title: 'Components/Nav Menu',
  component: NavMenu,
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavMenu },
  template: '<nav-menu />',
});

export const Primary = Template.bind({});