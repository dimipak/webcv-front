<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container">

        <div class="modal-header">
          Update profile image
        </div>

        <div class="modal-body">
          <div class="image-container" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "ProfileImage",
  props: ['image'],
  components: {
    Modal
  }
}
</script>

<style scoped>

</style>