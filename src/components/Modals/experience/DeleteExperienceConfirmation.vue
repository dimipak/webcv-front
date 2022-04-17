<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div id="modal-container" class="modal-container">

        <div id="model-header" class="modal-header">
          Are you sure?
        </div>

        <div class="modal-body">
          You are going to delete experience with id '{{experience.experience_id}}' and company name '{{experience.company_name}}'
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button class="modal-default-button btn btn-danger" @click="$emit('confirm')">Delete</button>
        </div>
      </div>
    </div>
    <Modal v-if="false"></Modal>
  </div>
</template>

<script>
import Modal from "../Modal";

export default {
  name: "DeleteExperienceConfirmation",
  props: {
    experience: Object
  },
  components: {Modal}
}
</script>

<style scoped>
#modal-container {
  width: 600px;
  padding: 0 20px;
}
#model-header {
  font-weight: bolder;
}
</style>