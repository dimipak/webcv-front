<template>
  <div class="education-container">
    <h2 ref="education">Education</h2>

    <a v-for="(education, index) in getEducation" :key="index" target="_blank" :href="education.link">
      <div class="certificate">
        <div class="header">
          <p>{{this.getFullYear(education.date)}}</p>
          <h2>{{education.title}}</h2>
          <p>{{education.reference}}</p>
        </div>
        <div class="body">
          <ul>
            <li v-for="(li, index) in education.description" :key="index">{{li}}</li>
          </ul>
        </div>
      </div>
    </a>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ScrollMagic from 'scrollmagic';

export default {
  name: "Education",
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapGetters(['getEducation'])
  },
  async mounted() {
    await this.fetchProfileEducation()

    this.scrollTo()

    this.fadeInContent()

  },
  methods: {
    ...mapActions(['fetchProfileEducation']),

    scrollTo: function() {
      const headerOffSet = 75;
      const elemPosition = this.$refs.education.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    },
    fadeInContent: function() {
      this.$el.querySelectorAll('.certificate').forEach((elem)=>{

        let controller = new ScrollMagic.Controller()
        // Create the Scene and trigger when visible
        const scene = new ScrollMagic.Scene({
          triggerElement: elem,
          triggerHook: .8,
          reverse: false
        }).setTween(elem, .4, {opacity: 1});

        controller.addScene(scene)
      })
    },
    getFullYear: (dateTime) => {
      const date = new Date(dateTime)
      return date.getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>

.education-container {
  padding: 20px;
  width: 60%;
  margin: 50px auto;
  background-color: white;

  @media screen and (max-width: 520px) {
    width: 100%;
  }
}

a {
  position: relative;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

}
p {
  color: #2c3e50;
}
.certificate {
  margin: 50px 0;

  border-top: 5px solid #2c3e50;
  padding: 20px 0;
  opacity: 0;

  &:hover {
    box-shadow: 0 1px 4px 0 #0000004f;
  }

  .header {
    margin:0 auto;

    h2 {
      border-top:1px solid #2c3e50;
      border-bottom:1px solid #2c3e50;
      color: #2c3e50;
    }
  }

  .body {
    text-align: left;
    margin-top:30px;

    p {
      text-align: center;
      width: 70%;
      margin:0 auto;
    }

    ul {
      list-style: square;

      li {
        color: black;
      }
    }
  }

}


</style>