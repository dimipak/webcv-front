<template>
  <router-view />
</template>

<script>
import {onMounted} from 'vue'

onMounted(() => {
  document.title = 'dimipak'
})

export default {
  name: "App",

}
</script>

<style scoped>

</style>