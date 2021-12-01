<template>
  <div class="navigation-component">
    <nav>
      <ul class="nav">
        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        <li class="nav-item"><router-link to="/skills" class="nav-link">Skills</router-link></li>
        <li class="nav-item"><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
        <li class="nav-item"><router-link to="/experience" class="nav-link">Experience</router-link></li>
        <li class="nav-item"><router-link to="/education" class="nav-link">Education</router-link></li>
        <!--      <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>-->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",

}
</script>

<style lang="scss" scoped>

nav {
  width: max-content;
  margin: 0 auto;
}

.navigation-component {
  background-color: $menuColor;
  height: 50px;
  width: 100%;

  @media screen and (max-width: 490px) {
    overflow-x: scroll;
  }
}

.nav-link {
  color: black;
  font-weight: 600;

  @media screen and (max-width: 400px) {
    padding: .5rem .7rem;
  }
}

.router-link-active {
  color: $greenColor;
}

</style>