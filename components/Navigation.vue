<template>
  <nav class="navbar" @click="opened = !opened">
    <div class="hamburger">
      {{ menuIcon }}
    </div>
    <transition name="fade">
      <div class="overlay" v-if="opened">
        <nuxt-link class="link" to='/'>Home</nuxt-link>
        <nuxt-link class="link" to='/sejarah'>Sejarah</nuxt-link>
        <nuxt-link class="link" to='/prestasi'>Prestasi</nuxt-link>
        <nuxt-link class="link" to='/anggota'>Anggota</nuxt-link>
        <nuxt-link class="link" to='/artikel'>Artikel</nuxt-link>
      </div>
    </transition>
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
  z-index: 999;
}

.hamburger {
  position: absolute;
  width: 100%;
  right: 2rem;
  top: 2rem;

  font-size: 2rem;
  text-align: right;

  cursor: pointer;
}

.overlay {
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
}

.link {
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
}


/*animation  */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
  opacity: 0
}
</style>
