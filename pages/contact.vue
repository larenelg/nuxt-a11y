<template>
  <layout>
    <main id="main" role="main" tabindex="-1" aria-labelledby="heading">
      <h2 id="heading">{{ title }}</h2>
    </main>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  components: {
    Layout,
  },
  data() {
    return {
      title: 'Contact',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>