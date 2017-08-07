<template>
  <div>
    <TablePrestasi />
  </div>
</template>

<style scoped>
.wrapper {
  box-sizing: border-box;
  padding-top: 15rem;
  z-index: 99
}
</style>

<script>
import TablePrestasi from '~/components/TablePrestasi.vue'
export default {
  components: {
    TablePrestasi
  }
}
</script>
