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
  line-height: responsive;
  letter-spacing: responsive;
  font-family: 'Roboto', sans-serif;
  color: #555;
}

body {
  margin: 0;
  padding: 0;
}

.wrapper {
  min-height: 100vh;
}
</style>
