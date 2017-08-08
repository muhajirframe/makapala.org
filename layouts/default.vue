<template>
  <div>
    <Navigation />
    <div class="wrapper">
      <nuxt/>
    </div>
    <Foot />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Navigation,
    Foot
  }
}
</script>

<style>
html {
  font-size: responsive;
  line-height: responsive;
  letter-spacing: responsive;
  font-family: 'Source Sans Pro', sans-serif;
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
