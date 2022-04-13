<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container" style="width: 600px;">

        <div class="modal-header">Create new Profile</div>

        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="profile_image" class="form-label">Profile Image</label>
              <input type="file" class="form-control" id="profile_image" @change="onFileSelected">
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input class="form-control" id="username" v-model="newProfile.username">
            </div>
            <div class="mb-3">
              <label for="first_name" class="form-label">First Name</label>
              <input class="form-control" id="first_name" v-model="newProfile.first_name">
            </div>
            <div class="mb-3">
              <label for="last_name" class="form-label">Last Name</label>
              <input class="form-control" id="last_name" v-model="newProfile.last_name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input class="form-control" id="email" v-model="newProfile.email">
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-primary" @click="$emit('submit', newProfile, file)">Submit</button>
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
        </div>
      </div>
    </div>
  <Modal v-if="false"></Modal>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "CreateProfile",
  components: {
    Modal
  },
  emits: ['close', 'submit'],
  data() {
    return {
      file: null,
      newProfile: {
        username: "",
        first_name: "",
        last_name: "",
        email: ""
      }
    }
  },
  methods: {
    onFileSelected(event) {
      console.log(event)
      console.log(event.target.files[0])
      this.file = event.target.files[0]
    }
  }
}
</script>

<style scoped>

</style>