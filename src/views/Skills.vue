<template>
  <div class="skills-container">
    <h2 ref="skills">Skills</h2>
    <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">

      <div v-for="skill in getSkills" :key="skill.skill_id" class="col">
        <ve-progress
            :progress="skill.progress"
            :size="60"
            line="square"
            color="#11998e"
            emptyColor="#d5d3d3">
        </ve-progress>
        <p>{{skill.name}}</p>
        <i>{{skill.description}}</i>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ScrollMagic from 'scrollmagic';

export default {
  name: "Skills",
  computed: {
    ...mapGetters(['getSkills', 'getProfile'])
  },
  async created() {

    await this.fetchProfileSkills()

    this.scrollTo()

    setTimeout(()=>{

    this.fadeInContent()
    }, 500)

  },
  methods: {
    ...mapActions(['fetchProfileSkills']),

    scrollTo: function() {
      const headerOffSet = 75;
      const elemPosition = this.$refs.skills.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    },
    fadeInContent: function() {


      this.$el.querySelectorAll('.col').forEach((elem, index)=>{
      let controller = new ScrollMagic.Controller()
        index = index <= 11 ? index * .1 : (index - 10)/10
        // Create the Scene and trigger when visible
        let scene = new ScrollMagic.Scene({
          triggerElement: elem,
          triggerHook: .9,
          reverse: false
        }).setTween(elem, .4, {opacity: 1, delay:index});

        controller.addScene(scene);

      })
    }
  }
}
</script>

<style lang="scss" scoped>

.skills-container {
  width: 60%;
  background-color: white;
  margin: 50px auto;
  padding: 20px 60px;

  @media screen and (max-width: 520px) {
    width: 100%;
  }

  .col {
    margin: 50px 0;
    opacity: 0;

    p {
      font-weight: 600;
      margin-bottom: 0;
    }
  }
}

</style>