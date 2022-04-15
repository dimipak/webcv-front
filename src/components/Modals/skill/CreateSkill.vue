<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container" id="modal-container">

        <div class="modal-header">
          Create Skill
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input class="form-control" id="name" v-model="skill.name">
          </div>
          <div class="mb-3">
            <label for="progress" class="form-label">Progress: {{skill.progress}}</label>
            <input type="range" class="form-range" id="progress" min="0" max="100" v-model="skill.progress">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input class="form-control" id="description" v-model="skill.description">
          </div>
        </div>

        <div class="modal-footer">
          <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button class="modal-default-button btn btn-success" @click="$emit('submit', skill)">Create</button>
        </div>
      </div>
    </div>
    <Modal v-if="false"/>
  </div>
</template>

<script>
import Modal from "../Modal";

export default {
  name: "CreateSkill",
  components: {
    Modal
  },
  data() {
    return {
      skill: {
        name: "",
        progress: 0,
        description: ""
      }
    }
  },
}
</script>

<style scoped>
#modal-container {
  width: 600px;
}
</style>