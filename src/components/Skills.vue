<template>
<div class="skills-container">
  <h2 ref="skills">Skills</h2>
  <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">

    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>PHP</p>
      <i>PHP is my main language when it comes to web development</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Laravel / CodeIgniter</p>
      <i>My favorite php frameworks. Both of them having a lot of experience</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="80"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>MySQL / Postgres / Redis</p>
      <i>While i used MySQL most of the times Postgres seems a lot more interesting and advanced database</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="80"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Docker / Vagrant</p>
      <i>Docker when it comes with Vagrant its a powerful combination when working with different OS</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="50"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Go</p>
      <i>Powerful API server i am developing home but soon enough will be used for my job project</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="50"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>C / C++</p>
      <i>Using C and C++ for developing firmware on IoT</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>RestFul APIs / SOAP / ERP</p>
      <i>Integrate advanced functions and features into apps</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="70"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Vue / React</p>
      <i>Vue is my comfort front end framework</i>
    </div>



    <div class="col">
      <vue-ellipse-progress
          :progress="80"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Wordpress</p>
      <i>Wordpress is the CMS that i have worked the most.</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>HTML / CSS / SASS / Javascript / JQuery</p>
      <i>Working with or without libraries gives the same excitement to me</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="80"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Photoshop</p>
      <i>When i want to create some visuals for websites or a HTML5 animation banner Ad</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="80"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Linux Debian - RedHat</p>
      <i>Worked with many variants of both distributions. Very Familiar with Linux terminal and server scripting</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="70"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Node JS</p>
      <i>I have used and developed Node API server</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Apache / Nginx</p>
      <i>Even though Apache is more common than Nginx i have worked with both technologies</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Linux / Windows</p>
      <i>Linux user for the past few years</i>
    </div>


  </div>
</div>
</template>

<script>

export default {
name: "Skills",
  mounted() {

    this.scrollTo()

    this.fadeInContent()

  },
  methods: {
    scrollTo: function() {
      const headerOffSet = 120;
      const elemPosition = this.$refs.skills.offsetTop;
      const offsetPosition = elemPosition - headerOffSet;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    },
    fadeInContent: function() {
      this.$el.querySelectorAll('.col').forEach((elem, index)=>{
        // index = index > 3 ? index % 3 : index;
        index = index <= 11 ? index * .1 : (index - 10)/10
        console.log(index)
        // Create the Scene and trigger when visible
        const scene = this.$scrollmagic.scene({
          triggerElement: elem,
          triggerHook: .9,
          reverse: false
        }).setTween(elem, .4, {opacity: 1, delay:index});

        this.$scrollmagic.addScene(scene);

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
  padding: 20px 100px;

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