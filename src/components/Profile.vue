<template>
  <div class="profile-container">
    <div id="cover"></div>
    <div class="profile-pic-container">
      <div id="profile"></div>
      <h1 id="name">Dimitris Pakos</h1>
      <p>Hello, I am a web developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap');

$color: #e6e4e4;

.profile-container {
  position: relative;
}

#cover {
  width: 60%;
  height: 260px;
  background-image: url("../assets/cover.jpeg");
  background-position-y: 0;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto 10px;
}

#profile {
  width: 200px;
  height: 200px;
  border: 1px solid mintcream;
  background-image: url("../assets/profile.jpg");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-position: center;
  top: -110px;
  margin:0 auto;
}

.profile-pic-container {
  width: 60%;
  margin: 0 auto;
  position: relative;
  background-color: #e6e4e4;
  height: 300px;
}

#name {
  margin-top: -110px;
}
</style>