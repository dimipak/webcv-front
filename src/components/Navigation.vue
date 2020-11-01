<template>
<div class="navigation-component">
  <nav>
    <ul class="nav">
      <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
      <li class="nav-item"><router-link to="/skills" class="nav-link">Skills</router-link></li>
      <li class="nav-item"><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
      <li class="nav-item"><router-link to="/work" class="nav-link">Work</router-link></li>
      <li class="nav-item"><router-link to="/education" class="nav-link">Education</router-link></li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
name: "Navigation"
}
</script>

<style lang="scss" scoped>

@import "../assets/sass/variables";

nav {
  width: max-content;
  margin: 0 auto;
}

.navigation-component {
  background-color: $menuColor;
  height: 50px;
  width: 100%;
}

.nav-link {
  color: black;
  font-weight: 600;
}

.router-link-active {
  color: $greenColor;
}

</style>