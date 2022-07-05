<template>
  <router-view/>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'app',
  setup () {
    const store = useStore()
    const info = localStorage.getItem('INFO')
    if (info) {
      console.log(store)
    }
  }
}
</script>
<style lang="scss">

</style>
