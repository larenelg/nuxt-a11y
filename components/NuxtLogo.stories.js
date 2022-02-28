import NuxtLogo from './NuxtLogo.vue';

export default {
  title: 'Components/Nuxt Logo',
  component: NuxtLogo,
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NuxtLogo },
  template: '<nuxt-logo />',
});

export const Primary = Template.bind({});