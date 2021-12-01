<template ref="work">
  <div class="timeline-container">
    <h2 ref="work">Experience</h2>

    <div v-for="(experience, index) in getExperience" :key="index" class="container">
      <div class="timeline">
        <p><b>{{this.getMonthYear(experience.start_date)}} - {{this.getMonthYear(experience.end_date)}}</b></p>
        <p>{{experience.country}}</p>
        <p>{{experience.city}}</p>
      </div>

      <span class="dot"></span>
      <div class="details">
        <div class="work-header">
          <h2>{{experience.company_name}}</h2>
          <p>{{experience.role}}</p>
        </div>
        <ul class="description">
          <li v-for="(li, index) in experience.description" :key="index">{{li}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ScrollMagic from 'scrollmagic';

export default {
  name: "experience",
  computed: {
    ...mapGetters(['getExperience'])
  },
  async mounted() {

    await this.fetchProfileExperiene()

    this.scrollTo()

    this.fadeInContent()

  },
  methods: {

    ...mapActions(['fetchProfileExperiene']),

    scrollTo: function() {
      const headerOffSet = 75;
      const elemPosition = this.$refs.work.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    },
    fadeInContent: function() {
      this.$el.querySelectorAll('.container').forEach((elem, index)=>{

        let controller = new ScrollMagic.Controller()
        // Create the Scene and trigger when visible
        const scene = new ScrollMagic.Scene({
          triggerElement: elem,
          triggerHook: .8,
          reverse: false
        }).setTween(elem, .4, {opacity: 1, delay:'.'+index});

        controller.addScene(scene);
      })
    },
    getMonthYear: (dateTime) => {

      if (dateTime == null) return 'Current'

      const date = new Date(dateTime)
      const year = date.getFullYear();
      const month = date.getMonth() + 1

      return month + '/' + year
    }
  }
}
</script>

<style lang="scss" scoped>

.timeline-container {
  padding: 20px;
  width: 60%;
  margin: 50px auto;
  background-color: white;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
}

.container {
  display: flex;
  opacity: 0;
}

.timeline {
  width: 20%;
  text-align: right;
  padding-top: 20px;

  p {
    margin-bottom: 0;
  }
}

.dot {
  width: 15px;
  height: 14px;
  background-color: #2da1bf;
  border: 2px solid #2da1bf;
  border-radius: 50%;
  position: relative;
  top: 46px;
  left: 10.5px;
}

.details {
  width: 75%;
  text-align: left;
  padding: 6px 15px 100px;
  border-left: 5px solid #ccd5db;

  .description {
    color: gray;
  }
}

//.container:hover .timeline p b {
//  background-position: left;
//  color: white;
//  transition: background-position .3s linear;
//}

.container:hover .dot {
  background-color: white;
}

.container:hover .description {
  color: inherit;
}

.work-header {
  text-align: center;
}


</style>