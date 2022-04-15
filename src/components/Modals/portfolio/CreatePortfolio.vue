<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container" id="modal-container">

        <div class="modal-header">
          Create Portfolio
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label for="portfolio_image" class="form-label">Portfolio Image</label>
            <input type="file" class="form-control" id="portfolio_image" @change="onFileSelected">
          </div>
          <div class="mb-3">
            <label for="website-url" class="form-label">Website url</label>
            <input class="form-control" id="website-url" v-model="portfolio.website_url">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input class="form-control" id="name" v-model="portfolio.name">
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Type</label>
            <input class="form-control" id="type" v-model="portfolio.type">
          </div>
          <div class="mb-3">
            <label for="technology" class="form-label">Technology</label>
            <input class="form-control" id="technology" v-model="portfolio.technology">
          </div>
          <div class="mb-3">
            <label for="customer" class="form-label">Customer</label>
            <input class="form-control" id="customer" v-model="portfolio.customer">
          </div>
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button class="modal-default-button btn btn-success" @click="$emit('submit', portfolio, file)">Create</button>
        </div>
      </div>
    </div>
    <Modal v-if="false"/>
  </div>
</template>

<script>
import Modal from "../Modal";

export default {
  name: "CreatePortfolio",
  components: {Modal},
  emits: ['submit', 'close'],
  data() {
    return {
      file: null,
      portfolio: {
        name: "",
        website_url: "",
        type: "",
        technology: "",
        customer: ""
      }
    }
  },
  methods: {
    onFileSelected(e) {
      this.file = e.target.files[0]
    }
  }
}
</script>

<style scoped>
#modal-container {
  width: 600px;
}
</style>