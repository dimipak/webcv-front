<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container" id="modal-container">

        <div class="modal-header">
          Create Portfolio
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label for="start-date" class="form-label">Start Date</label>
            <input type="date" class="form-control" id="start-date" v-model="experience.start_date">
          </div>
          <div class="mb-3">
            <label for="end-date" class="form-label">End Date</label>
            <input type="date" class="form-control" id="end-date" v-model="experience.end_date">
          </div>
          <div class="mb-3">
            <label for="country" class="form-label">Country</label>
            <input class="form-control" id="country" v-model="experience.country">
          </div>
          <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input class="form-control" id="city" v-model="experience.city">
          </div>
          <div class="mb-3">
            <label for="company-name" class="form-label">Company name</label>
            <input class="form-control" id="company-name" v-model="experience.company_name">
          </div>
          <div class="mb-3">
            <label for="role" class="form-label">Role</label>
            <input class="form-control" id="role" v-model="experience.role">
          </div>
          <div class="text-start mb-3 col-md-12">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="10" style="resize: none;" v-model="experience.description"></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button class="modal-default-button btn btn-success" @click="$emit('submit', experience)">Create</button>
        </div>
      </div>
    </div>
    <Modal v-if="false"/>
  </div>
</template>

<script>
import Modal from "../Modal";

export default {
  name: "CreateExperience",
  components: {Modal},
  emits: ['close', 'submit'],
  data() {
    return {
      experience: {
        start_date: "",
        end_date: "",
        company_name: "",
        role: "",
        description: "",
        country: "",
        city: ""
      }
    }
  }
}
</script>

<style scoped>
#modal-container {
  width: 700px;
}
</style>