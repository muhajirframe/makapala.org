<template>
  <div class="wrapper">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="text">
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
  .title{
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
 export default {
   props: ['title']
 }
 </script>
