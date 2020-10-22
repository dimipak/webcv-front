<template>
<nav>
  <ul class="nav">
    <li class="nav-item"><router-link to="/foo" class="nav-link active">Home</router-link></li>
    <li class="nav-item"><router-link to="/bar" class="nav-link">Work</router-link></li>
    <li class="nav-item"><router-link to="/home" class="nav-link">Education</router-link></li>
  </ul>
</nav>
</template>

<script>
export default {
name: "Navigation"
}
</script>

<style scoped>

nav {
  position: static;
}

</style>