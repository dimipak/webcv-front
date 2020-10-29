<template>
<div class="skills-container">
  <h2>Skills</h2>
  <div class="row row-cols-4">
    <div class="col">
      <vue-ellipse-progress
          :progress="90"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>HTML</p>
      <i>Html is my favorite programming language!</i>
<!--      <img class="logo" src="../assets/images/html.svg"/>-->
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
      <p>CSS</p>
      <i>I have been used css to make complex animations</i>
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
      <p>Javascript</p>
      <i>My favorite framework is jQuery</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="75"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>PHP</p>
      <i>I can do everything with PHP</i>
    </div>
    <div class="col">
      <vue-ellipse-progress
          :progress="60"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Docker</p>
      <i>Loved it, i try to use it as often as i can</i>
    </div>

    <div class="col">
      <vue-ellipse-progress
          :progress="60"
          :size="60"
          line="square"
          color="#11998e"
          emptyColor="#d5d3d3">
        <span slot="legend-value">%</span>
      </vue-ellipse-progress>
      <p>Vagrant</p>
      <i>Powerful and enjoyable using vagrant</i>
    </div>

  </div>
</div>
</template>

<script>

export default {
name: "Skills"
}
</script>

<style lang="scss" scoped>

.skills-container {
  width: 60%;
  background-color: #e6e4e4;
  margin: 50px auto;
  padding: 20px 100px;

  .col {
    margin: 50px 0;

    p {
      font-weight: 600;
      margin-bottom: 0;
    }
  }
}

</style>