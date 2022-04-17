<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container" id="modal-container">

        <div class="modal-header">
          Update Education
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input type="date" class="form-control" id="date" v-model="date">
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input class="form-control" id="title" v-model="education.title">
          </div>
          <div class="mb-3">
            <label for="reference" class="form-label">Reference</label>
            <input class="form-control" id="reference" v-model="education.reference">
          </div>
          <div class="mb-3">
            <label for="link" class="form-label">Link</label>
            <input class="form-control" id="link" v-model="education.link">
          </div>
          <div class="text-start mb-3 col-md-12">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="10" style="resize: none;" v-model="education.description"></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button class="modal-default-button btn btn-success" @click="$emit('submit', education)">Update</button>
        </div>
      </div>
    </div>
    <Modal v-if="false"/>
  </div>
</template>

<script>
import Modal from '../Modal'

export default {
  name: "UpdateEducation",
  components: {Modal},
  emits: ['close', 'submit'],
  props: {
    EDUCATION: Object
  },
  computed: {
    date: {
      get() {
        // if (this.tempDate === "") {
        //   const date = new Date(this.education.date)
        //   this.tempDate = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2)
        //   this.education.date = date.getFullYear().toString()
        // }
        return this.tempDate
      },
      set(newValue) {
        this.tempDate = newValue
        console.log("temp date!", this.tempDate)
        this.education.date = (new Date(newValue).getFullYear()).toString()
      }
    }
  },
  data() {
    return {
      tempDate: "",
      education: {}
    }
  },
  mounted() {
    console.log("date", this.EDUCATION.date)
    this.education = this.EDUCATION
    const date = new Date(this.education.date)
    this.tempDate = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2)
    this.education.date = date.getFullYear().toString()
  }
}
</script>

<style scoped>
#modal-container {
  width: 700px;
}
</style>