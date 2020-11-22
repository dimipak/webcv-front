<template>
  <div id="app">

    <Profile class="profile-component"/>

    <Navigation/>

    <transition name="slither">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";

export default {
  name: 'App',
  components: {
    Navigation,
    Profile
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

@import "assets/sass/variables";

body {
  background-color: $backgroundColor;
  font-family: 'Work Sans', sans-serif !important;
}

#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //height: 2000px;
  margin: 0 auto;
}

.profile-component {
  //padding-top: 50px;
  width: 70%;
  margin: 0 auto 10px;
}

.about-container, .skills-container {
  width: 60%;
  background-color: #e6e4e4;
  margin: 50px auto;
  padding: 20px 100px;
}


.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-200%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(200%);
}


</style>
