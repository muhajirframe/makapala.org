<template>
  <nav class="navbar" @click="opened = !opened">
    <div class="hamburger">
      {{ menuIcon }}
    </div>
    <div class="overlay" v-if="opened">
      <nuxt-link class="link" to='/'>Home</nuxt-link>
      <nuxt-link class="link" to='/'>Sejarah</nuxt-link>
      <nuxt-link class="link" to='/'>Prestasi</nuxt-link>
      <nuxt-link class="link" to='/'>Anggota</nuxt-link>
      <nuxt-link class="link" to='/'>Artikel</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  },
  computed: {
    menuIcon () {
      return this.opened ? '⨯' : '☰'
    }
  }
}
</script>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

.hamburger {
  position: absolute;
  width: 100%;
  right: 2rem;
  top: 2rem;

  font-size: 2rem;
  text-align: right;
}

.overlay {
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.link {
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
}
</style>
