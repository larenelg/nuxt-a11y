<template>
  <layout>
    <main id="main" role="main" tabindex="-1" aria-labelledby="heading">
      <h2 id="heading">{{ title }}</h2>
      <button @click="onClick">Show toast</button>
    </main>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  components: {
    Layout,
  },
  data () {
    return {
      title: 'Home',
    }
  },
  head () {
    return {
      title: this.title,
    }
  },
  methods: {
    onClick () {
      this.$toasted.show('G\'day!', { duration: 3000 })
    },
  },
}
</script>
