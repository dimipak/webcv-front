<template>
  <div>
    <h2 ref="about">About</h2>
    <p>
      Programming is my passion. I love writing code and when i am not, i truly miss it. I started by myself watching
      lessons at internet mainly at lynda.com and later on at linkedin learning.
    </p>
    <p>
      I have learned a lot in the past years in both work and personal experience. I always try to be up to date about
      new technologies that comes forward every day. I found myself enjoying better as a backend on various languages
      but frontend its not something that passed by without notice.
    </p>
    <!--    <p>-->
    <!--      When i started learning i created websites for training and after some time a took a job as a junior web-->
    <!--      developer - IT. After two years at this job i found myself that there is nothing more i can learn. I needed a job-->
    <!--      which i can be more developer than IT and collaborate with other developers. Today after more than a year at my-->
    <!--      current job and watching a lot of lessons at the same time i think i am more a mid level developer who always-->
    <!--      searching for new technologies that come forward every day.-->
    <!--    </p>-->
    <p>
      I am a teamwork player, cooperative and i can, and i have in the past, take responsibilities without any issues. I
      always want to write as much clean code and readable as i can.
    </p>
    <p>
      If i am not coding, i like to exercise my self in the gym or watching nice movies.
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