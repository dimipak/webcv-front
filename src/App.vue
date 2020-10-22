<template>
  <div id="app">
    <Navigation/>
    <vue-scroll-indicator
        height="7px"
        color="#11998e"
        background="none"
    >
    </vue-scroll-indicator>
    <Profile/>
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App!!!"/>-->
    <!--    <router-link to="/bar">go to bar</router-link> |-->
    <!--    <router-link to="/foo">go to foo</router-link> |-->
    <!--    <router-link to="/home">go to home</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";
import {VueScrollIndicator} from 'vue-scroll-indicator';

export default {
  name: 'App',
  components: {
    Navigation,
    Profile,
    VueScrollIndicator
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

$backgroundColor: #dfdfdf;

body {
  background-color: $backgroundColor;
  font-family: 'Work Sans', sans-serif;
}

#app {
  position: relative;
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  height: 2000px;
  margin: 0 auto;
}
</style>
