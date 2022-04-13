<template>

  <TopBar v-if="getProfile.profile_id > 0" />

  <div id="spinner" v-show="isLoading || this.getTopBarAnimation">
    <div></div>
  </div>

  <transition v-if="getProfile.profile_id > 0" name="enter" mode="out-in">
    <div v-show="!isLoading && !this.getTopBarAnimation" id="app">

      <MainContent v-if="getProfile.profile_id > 0" class="profile-component" @mcLoaded="mainContentLoaded" />

      <Navigation ref="nav" id="theNav"/>

      <div ref="navBarTrigger"></div>

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

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import TopBar from '@/components/TopBar.vue'
import MainContent from '@/components/MainContent.vue'
import Navigation from '@/components/Navigation.vue'
import ScrollMagic from 'scrollmagic';
import { TweenMax } from "gsap"

export default {
  name: 'Index',
  components: {
    TopBar,
    MainContent,
    Navigation
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapMutations(['changeLogingStatus']),

    ...mapActions(['fetchProfile']),

    // Toggle show arrow for scrolling to top
    scrollToTopShow: function() {
      let controller = new ScrollMagic.Controller();

      let scene = new ScrollMagic.Scene({
        triggerElement: '#theNav', // starting scene, when reaching this element
        duration: 400 // pin the element for a total of 400px
      })
          .setTween(TweenMax.fromTo('#scrollTop', .4, {opacity: 0, display: 'none'}, {opacity: 1, display: 'block'}))

      controller.addScene(scene);
    },
    // Get from main container value when is loaded
    mainContentLoaded() {
      this.isLoading = false;
    },
    // Scroll to top of the page
    scrollToTop: function()
    {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    // Navigation menu bar change position to fixed or relative
    navigationBar() {
      const trigger = this.$refs.navBarTrigger.offsetTop;
      const theNav = document.getElementById('theNav');

      window.addEventListener('scroll', () => {
        let windowY = window.scrollY;
        if (windowY >= trigger) {
          theNav.style.position = 'fixed';
        } else {
          theNav.style.position = 'relative';
        }
      })
    }
  },
  computed: {
    ...mapGetters(['getLogged', 'getTopBarAnimation', 'getProfile']),

    // Set variable to be true when all page has loaded
    pageLoaded() {
      return (!this.isLoading && !this.getTopBarAnimation)
    }
  },
  mounted() {
    this.fetchProfile()
    console.log("home")
  },
  watch: {
    // Watch variable for changes
    // When is loaded call necessary functions
    pageLoaded: function(value) {
      if (value===true) {
        setTimeout(() => {
          this.scrollToTopShow()
          window.addEventListener('scroll', this.navigationBar)
        })
      }
    }
  }
}
</script>

<style lang="scss">

.loggedOut {
  color: rgba(255, 0, 0, 0.55);
}

html, body {
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

#spinner {
  @include spinner();
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

  @media screen and (max-width: 520px) {
    width: 100%;
  }
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
