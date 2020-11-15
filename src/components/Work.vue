<template>
  <div class="timeline-container">
    <h2>Work</h2>
    <div class="container">
      <div class="timeline">
        <p><b>2019 - current</b></p>
        <p>Greece</p>
        <p>Athens</p>
      </div>

      <span class="dot"></span>
      <div class="details">
        <div class="work-header">
          <h2>RoadCube</h2>
          <p>Back end developer</p>
        </div>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

    <div class="container">
      <div class="timeline">
        <p><b>2017 - 2019</b></p>
        <p>Greece</p>
        <p>Athens</p>
      </div>
      <span class="dot"></span>
      <div class="details">
        <div class="work-header">
          <h2>Correct Creative Productions</h2>
          <p>Web Developer - IT</p>
        </div>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

    <div class="container">
      <div class="timeline">
        <p><b>2015 - 2017</b></p>
        <p>England</p>
        <p>London</p>
      </div>
      <span class="dot"></span>
      <div class="details">
        <div class="work-header">
          <h2>Chiltern Firehouse</h2>
          <p>Waiter</p>
        </div>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Timeline"
}
</script>

<style lang="scss" scoped>

.timeline-container {
  padding: 20px;
  width: 60%;
  margin: 50px auto;
  background-color: white;
}

.container {
  display: flex;
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
  left: 9.5px;
}

.details {
  width: 90%;
  text-align: left;
  padding: 6px 20px 100px;
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