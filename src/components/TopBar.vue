<template>
  <div id="loader">
    <div>
      <h1>
        <router-link to="/">
          <span v-for="(letter, index) in getProfile.username" :key="index" class="loader-letter">
            {{letter}}
          </span>
<!--          <span class="loader-letter">i</span>-->
<!--          <span class="loader-letter">m</span>-->
<!--          <span class="loader-letter">i</span>-->
<!--          <span class="loader-letter">p</span>-->
<!--          <span class="loader-letter">a</span>-->
<!--          <span class="loader-letter">k</span>-->
        </router-link>
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import gsap from 'gsap'

export default {
  name: "TopBar",
  methods: {
    ...mapMutations(['setTopBarAnimation'])
  },
  computed: {
    ...mapGetters(['getTopBarAnimation', 'getProfile'])
  },
  mounted() {
    gsap.timeline({onComplete: () => { this.setTopBarAnimation(false) }})
        .from('.loader-letter', {duration:1, opacity:0, stagger: .2});

  }
}
</script>

<style lang="scss" scoped>

#loader {
  width: 100%;
  height: auto;

  div {
    width: max-content;
    margin: 0 auto;

    h1 {
      font-family: 'Carter One', cursive;
      padding-top: 10px;
      color: $fontColor;
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

</style>