<template>
  <div class="education-container">
    <h2 ref="education">Education</h2>
    <div class="certificate">
      <div class="header">
        <p>2009</p>
        <h2>AUTOMATISM</h2>
        <p>Technological Educational Institute of Piraeus</p>
      </div>
      <div class="body">

        <ul>
          <li>Robotics</li>
          <li>Visual Basic</li>
          <li>Electricity</li>
          <li>Lathe</li>
        </ul>
      </div>
    </div>

    <div class="certificate">
      <div class="header">
        <p>2009</p>
        <h2>AUTOMATISM</h2>
        <p>Technological Educational Institute of Piraeus</p>
      </div>
      <div class="body">

        <ul>
          <li>Robotics</li>
          <li>Visual Basic</li>
          <li>Electricity</li>
          <li>Lathe</li>
        </ul>
      </div>
    </div>

    <div class="certificate">
      <div class="header">
        <p>2009</p>
        <h2>AUTOMATISM</h2>
        <p>Technological Educational Institute of Piraeus</p>
      </div>
      <div class="body">

        <ul>
          <li>Robotics</li>
          <li>Visual Basic</li>
          <li>Electricity</li>
          <li>Lathe</li>
        </ul>
      </div>
    </div>

    <div class="certificate">
      <div class="header">
        <p>2009</p>
        <h2>AUTOMATISM</h2>
        <p>Technological Educational Institute of Piraeus</p>
      </div>
      <div class="body">

        <ul>
          <li>Robotics</li>
          <li>Visual Basic</li>
          <li>Electricity</li>
          <li>Lathe</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { TimelineLite } from 'gsap'

export default {
  name: "Education",
  data() {
    return {
      dialog: false,
    }
  },
  mounted() {

    this.scrollTo()

    this.fadeInContent()

  },
  methods: {
    scrollTo: function() {
      const headerOffSet = 120;
      const elemPosition = this.$refs.education.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    },
    fadeInContent: function() {
      this.$el.querySelectorAll('.certificate').forEach((elem)=>{

        // Create the Scene and trigger when visible
        const scene = this.$scrollmagic.scene({
          triggerElement: elem,
          triggerHook: .8,
          reverse: false
        }).setTween(elem, .4, {opacity: 1});

        this.$scrollmagic.addScene(scene);

      })
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
}

.certificate {
  margin: 50px 0;
  box-shadow: 0 1px 4px 0 #0000004f;
  border-top: 5px solid #2c3e50;
  padding: 20px 0;
  opacity: 0;

  .header {
    width: max-content;
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
    }
  }

}


</style>