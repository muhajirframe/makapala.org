<template>
  <nav class="navbar" @click="opened = !opened">
    <div class="hamburger">
      <transition name="slidex" mode="out-in">
        <span :key="opened">
          {{ opened ? '⨯' : '☰' }}
        </span>
      </transition>
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
  }
}
</script>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.hamburger {
  position: absolute;
  width: 100%;
  right: 2rem;
  top: 2rem;

  font-size: 2rem;
  text-align: right;

  z-index: 200;

  span {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
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

  color: inherit;
}

/*animation  */

.fade-enter-active,
.fade-leave-active {
  transition: transform .5s ease, opacity .5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px)
}

.slidex-enter-active,
.slidex-leave-active {
  transition: transform .5s ease, opacity .5s ease;
}

.slidex-enter,
.slidex-leave-to {
  opacity: 0;
  transform: translateX(10px)
}
</style>
