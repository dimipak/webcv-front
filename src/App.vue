<template>

  <div>
    <div id="loader">
      <div>
        <h1>
          <router-link to="/">
            <span class="loader-letter">d</span>
            <span class="loader-letter">i</span>
            <span class="loader-letter">m</span>
            <span class="loader-letter">i</span>
            <span class="loader-letter">p</span>
            <span class="loader-letter">a</span>
            <span class="loader-letter">k</span>
          </router-link>
        </h1>
      </div>
      <div id="spinner" v-show="isLoading || animation">
        <div></div>
      </div>
    </div>

    <transition name="enter" mode="out-in">
      <div v-show="!isLoading && !animation" id="app">

        <Profile class="profile-component"/>

        <Navigation ref="nav" id="theNav"/>

        <div ref="scrollToTrigger" id="scrollTopTrigger"></div>

        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>

        <div ref="scrollTop" id="scrollTop" @click="scrollToTop">
          <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";
import gsap from 'gsap'

export default {
  name: 'App',
  components: {
    Navigation,
    Profile
  },
  computed: {
    combined() {
      return (!this.isLoading && !this.animation)
    }
  },
  data() {
    return {
      isLoading: true,
      animation: true
    }
  },
  mounted() {

    this.isLoading = false

    gsap.timeline({onComplete: () => { this.animation = false }})
        .from('.loader-letter', {duration:1, opacity:0, stagger: .1});

    this.scrollToTopShow()

  },
  methods: {
    scrollToTop: function()
    {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    scrollToTopShow: function() {
      const scene = this.$scrollmagic.scene({
        triggerElement: this.$refs.scrollToTrigger,
        triggerHook: .3,
      }).setTween(this.$refs.scrollTop, .4, {opacity: 1, display: 'block'});

      this.$scrollmagic.addScene(scene);
    },
    navigationBar: function() {
      const trigger = this.$refs.scrollToTrigger.offsetTop;
      const theNav = document.getElementById('theNav');
      console.log('trigger = ' + trigger)
      window.addEventListener('scroll', () => {
        let windowY = window.scrollY;
        // console.log('windowY = ' + windowY)
        if (windowY >= trigger) {
          theNav.style.position = 'fixed';
        } else {
          theNav.style.position = 'relative';
        }
      })
    }
  },
  watch: {
    $route () {

      const theNav = document.getElementById('theNav');
      theNav.style.position = 'relative';
    },

    combined: function(value) {
      if (value === true) {
        setTimeout(() => {
          this.navigationBar()
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
@import "assets/sass/variables";

body {
  background-color: $backgroundColor;
  font-family: 'Work Sans', sans-serif !important;
  overflow-x: hidden;
}

#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

#loader {
  width: 100%;
  height: auto;

  div {
    width: max-content;
    margin: 0 auto;

    h1 {
      font-family: 'Carter One', cursive;
      color: $fontColor;
      padding-top: 10px;
      position: relative;

      a {
        color:inherit;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

#spinner {
  margin-top: 15% !important;

  div {
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid #2c3e50;
    width: 30px !important;
    height: 30px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


#theNav {
  top:0;
  z-index: 1;
}

.profile-component {
  width: 70%;
  margin: 0 auto 10px;
}

.about-container, .skills-container {
  width: 60%;
  background-color: #e6e4e4;
  margin: 50px auto;
  padding: 20px 100px;
}

.enter-enter-active {
  transition: all .5s ease;
}

.enter-enter {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

#scrollTop {
  position: fixed;
  bottom: 4%;
  right: 4%;
  opacity: 0;
  display: none;
  cursor: pointer;
  transition: opacity .3s ease;

  &:hover {
    opacity: 1;
    transition: opacity .3s ease;
  }
}

</style>
