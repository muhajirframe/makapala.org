<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <div class="time">
      {{ time }}
    </div>
  </div>
</template>

<style scoped>
.title {
  padding: 1rem 0;

  font-size: 1.5rem;
  font-weight: 600;
}

.time {
  font-size: 0.8rem;
}

.card {
  border: 1px solid blue;
  margin-bottom: 1rem;
}
</style>


<script>
export default {
  props: ['title', 'time']
}
</script>

