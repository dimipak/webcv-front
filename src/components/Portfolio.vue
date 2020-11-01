<template>
<div class="row row-cols-3 portfolio-container">
  <div class="col" data-toggle="modal" data-target="#exampleModal" @click="$refs.Modal.openModal()">
    <img src="https://picsum.photos/id/100/300/300" />
    <h6>Correct Creative Productions</h6>
    <a href="https://www.google.com">www.correct.gr</a>
  </div>

  <div class="col">
    <img src="https://picsum.photos/id/115/300/300" />
    <h6>Natasha Triantafylli</h6>
    <a href="https://www.google.com">www.natashatriantafylli.gr</a>
  </div>

  <div class="col">
    <img src="https://picsum.photos/id/200/300/300" />
    <h6>Giasite</h6>
    <a href="https://www.google.com">www.giasite.gr</a>
  </div>

  <div class="col">
    <img src="https://picsum.photos/id/100/300/300" />
    <h6>Correct Creative Productions</h6>
    <a href="https://www.google.com">www.correct.gr</a>
  </div>

  <div class="col">
    <img src="https://picsum.photos/id/115/300/300" />
    <h6>Natasha Triantafylli</h6>
    <a href="https://www.google.com">www.natashatriantafylli.gr</a>
  </div>

  <div class="col">
    <img src="https://picsum.photos/id/200/300/300" />
    <h6>Giasite</h6>
    <a href="https://www.google.com">www.giasite.gr</a>
  </div>

  <Modal />

</div>
</template>

<script>
import Modal from './Modal';

export default {
  name: "Portfolio",
  components: {
    Modal
  }
}
</script>

<style lang="scss" scoped>

.portfolio-container {
  width: 60%;
  margin: 50px auto;
  background-color: white;
  padding:50px 0;
}



</style>