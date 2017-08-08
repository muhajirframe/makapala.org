<template>
  <section class="container">
    <div class="heading">
      <h1 class="title">Makapala</h1>
      <div class="subtitle">
        <h2>Satu</h2>
        <div class="timnyawa">
          <h3 class="tim">Tim</h3>
          <h3 class="nyawa">Nyawa</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  height: 100vh;

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
</style>
