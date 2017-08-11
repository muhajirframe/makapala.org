<template>
  <Split title="Artikel">
    <Card v-for="artikel in artikels" :key="artikel.title" :title="artikel.title" :time="artikel.time" />
  </Split>
</template>

<script>
import Split from '~/components/SplitHalf.vue'
import Card from '~/components/Card.vue'
export default {
  components: {
    Split,
    Card
  },
  data () {
    return {
      artikels: [
        {
          title: 'Judul',
          time: '21, Januari, 2017'
        },
        {
          title: 'Judul',
          time: '21, Januari, 2017'
        },
        {
          title: 'Judul',
          time: '21, Januari, 2017'
        },
        {
          title: 'Judul',
          time: '21, Januari, 2017'
        },
        {
          title: 'Judul',
          time: '21, Januari, 2017'
        },
        {
          title: 'Judul 2',
          time: '16 Februari, 2019'
        }
      ]
    }
  }
}
</script>
