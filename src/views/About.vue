<template>
  <div>
    <h2 ref="about">About</h2>
    <p v-for="(p, index) in getInfo.about" :key="index">{{p}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "About",
  computed: {
    ...mapGetters(['getInfo'])
  },
  mounted() {
    this.scrollTo()
  },
  methods: {
    scrollTo: function () {
      const headerOffSet = 75;
      const elemPosition = this.$refs.about.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style lang="scss" scoped>

div {
  width: 60%;
  background-color: white;
  margin: 50px auto;
  padding: 20px 100px;

  @media screen and (max-width: 900px) {
    padding: 20px 60px;
  }

  @media screen and (max-width: 520px) {
    padding: 20px 40px;
    width: 100%;
  }
}

p {
  text-align: justify;
}

</style>