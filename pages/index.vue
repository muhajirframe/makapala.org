<template>
  <section class="container">
    <div class="heading">
      <h1 id="title"
          class="title stag">Makapala</h1>
      <div class="subtitle stag">
        <h2>Satu</h2>
        <div class="timnyawa">
          <h3 class="tim stag">Tim</h3>
          <h3 class="nyawa stag">Nyawa</h3>
        </div>
      </div>
      <button class="btn">
        DAFTAR
      </button>
    </div>
  </section>
</template>

<style scoped>
.container {
  min-height: inherit;

  display: flex;
  align-items: center;
}

.heading {
  padding-left: 3rem;
  line-height: 0;
}

.title {
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
}

.subtitle {
  font-size: 3rem;
  display: block;
  letter-spacing: 1rem;
  h2 {
    display: inline-block;
    font-weight: 700;
    font-size: 4rem;
  }
  .timnyawa {
    display: inline-block;
    line-height: 0rem;
    font-size: 1rem;
    font-weight: 300;
  }
}

.btn {
  border: none;
  padding: 1rem 2rem;
  font-size: 0.8rem;

  cursor: pointer;

  border-radius: 4px;

  font-weight: 500;
}
</style>

<script>
import { TimelineLite } from 'gsap'
export default {
  mounted () {
    const tl = new TimelineLite()
    tl
      .staggerFrom('.stag', 1, {
        opacity: 0,
        x: 20,
        ease: 'Power1.easeOut',
        delay: 0.5
      }, 0.3)
      .from('.btn', 1, {
        opacity: 0,
        x: 20,
        ease: 'Power1.easeOut'
      })
  }
}
</script>
