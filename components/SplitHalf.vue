<template>
  <div class="wrapper">
    <div id="title" class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="text"
         id="text">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  height: 100%;
  width: 100%;
}

.title {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  h1 {
    font-size: 2rem;
  }
}

.text {
  overflow: scroll;
  padding: 2rem 3rem;
  flex: 1;
  font-size: 1.5rem;
  line-height: 2rem;
}

@media (min-width: 700px) {
  .wrapper {
    flex-direction: row;
  }
  .title {
    padding: 0;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
  }
  .text {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}
</style>
<script>
import { TimelineLite } from 'gsap'
export default {
  mounted () {
    const text = document.getElementById('text').children
    const tl = new TimelineLite()
    tl
      .from('#title', 1, {
        opacity: 0,
        x: 20,
        ease: 'Power1.easeOut',
        delay: 0.5
      })
      .staggerFrom(text, 1, {
        opacity: 0,
        y: 20,
        ease: 'Power1.easeOut'
      }, 0.3, '-=0.3')
  },
  props: ['title']
}
</script>
