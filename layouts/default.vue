<template>
  <div>
    <Navigation />
    <div class="wrapper">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
html {
  font-size: responsive;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
