<template>
  <div>
    <h2 ref="about">About</h2>
    <p>
      Programming is my passion. I love writing code and when i am not, i truly miss it. I started by myself watching
      lessons on the internet mainly at lynda.com and later on at linkedin learning.
    </p>
    <p>
      I have learned a lot in the past years in both work and personal experience. I always try to be up to date with
      new technologies that come up every day. I found myself enjoying better being a backend developer using various
      languages but frontend is something that does not go without notice.
    </p>
    <p>
      I am a teamwork player, cooperative and i always take responsibilities without any hesitation. I am keen on
      writing clean and readable code as much as possible.
    </p>
    <p>
      If i am not coding, i like to work out in the gym or watch movies.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
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