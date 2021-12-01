<template>
  <h1>Hello admin</h1>

  <router-link to="/todos">Todos</router-link>
  <br>
  <router-view />

</template>

<script>
export default {
  name: "Admin"
}
</script>

<style scoped>

</style>