<template>
  <div style="text-align: left;">
    <button class="btn btn-success" @click="this.skillCreateModal = true">Create</button>
  </div>

  <table class="table .table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Progress</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody @dragover.prevent @dragend="dropDrag">
    <tr v-for="(skill, index) in getSkills" :key="skill.skill_id"
        class="skills"
        :data-index="index"
        draggable="true"
        @dragstart="startDrag"
        @dragenter="enterDrag"
    >
      <th scope="row">{{index + 1}}</th>
      <td>{{skill.name}}</td>
      <td>{{skill.progress}} %</td>
      <td>{{skill.description}}</td>
      <td>
        <i class="bi bi-pencil-square actions" @click="setSkillForModal(skill); this.skillUpdateModal = true"></i>
        <i class="bi bi-trash3 actions" @click="setSkillForModal(skill); this.skillDeleteModal = true"></i>
      </td>
    </tr>
    </tbody>
  </table>
  <button class="btn btn-primary" @click="skillOrderUpdate">Update skill order</button>

  <DeleteSkillConfirmation
      v-if="skillDeleteModal"
      :skillId="skill.id"
      :name="skill.name"
      @close="skillDeleteModal = false"
      @confirm="deleteSkillConfirmed"
  />

  <UpdateSkill
      v-if="skillUpdateModal"
      :skill-name="skill.name"
      :skill-description="skill.description"
      :skill-progress="skill.progress"
      @close="skillUpdateModal = false"
      @submit="updateSkillConfirmed"
  />

  <CreateSkill
      v-if="skillCreateModal"
      @close="skillCreateModal = false"
      @submit="createSkillConfirmed"
  />

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import DeleteSkillConfirmation from "../../components/Modals/skill/DeleteSkillConfirmation";
import UpdateSkill from "../../components/Modals/skill/UpdateSkill";
import CreateSkill from "../../components/Modals/skill/CreateSkill";

export default {
  name: "Skills",
  components: {CreateSkill, UpdateSkill, DeleteSkillConfirmation},
  props: {
    profileId: Number
  },
  emits: ['usernameUpdated'],
  data() {
    return {
      draggableEl: null,
      targetEl: null,
      triggered: false,
      skillDeleteModal: false,
      skillUpdateModal: false,
      skillCreateModal: false,
      skill: {
        id: 0,
        name: "",
        description: "",
        progress: 0
      }
    }
  },
  computed: {
    ...mapGetters('admin/skill', ['getSkills'])
  },
  methods: {
    ...mapActions('admin/skill', ['fetchSkills', 'updateSkillOrder', 'deleteSkill', 'updateSkill', 'createSkill']),
    ...mapMutations('admin/skill', ['changeOrder']),

    startDrag(event) {
      // save draggable element
      this.draggableEl = event.currentTarget
      // add class to element with delay in order not to change the draggable image
      setTimeout(() => {event.target.classList.add('draggable')}, 1)
      // set drop effect
      event.dataTransfer.dropEffect = 'link'
    },

    enterDrag(event) {
      if (this.triggered) return;
      // Create break point for foreach loop
      const BreakException = {}
      // Try catch the break point
      try {
        const parent = event.currentTarget.parentElement
        parent.childNodes.forEach((element, index) => {
          if (element === event.currentTarget) {
            if (index === parent.childNodes.length || parent.childNodes[index+1] === this.draggableEl) {
              parent.insertBefore(this.draggableEl, event.currentTarget)
              this.targetEl = event.currentTarget
              this.triggered = true
              setTimeout(()=>{this.triggered = false}, 100) // add delay for trigger
              throw BreakException
            }
            if (index === 0 || parent.childNodes[index-1] === this.draggableEl) {
              parent.insertBefore(event.currentTarget, this.draggableEl)
              this.targetEl = event.currentTarget
              this.triggered = true
              setTimeout(()=>{this.triggered = false}, 100) // add delay for trigger
              throw BreakException
            }
          }
        })
      } catch(e) {
        // catch only break point
        if (e!== BreakException) throw e;
      }
    },

    dropDrag() {
      // remove draggable class
      this.draggableEl.classList.remove('draggable')
      // change order of state skills and rerender v-for
      this.changeOrder({
        oldPosition: this.draggableEl.getAttribute('data-index'),
        newPosition: this.targetEl.getAttribute('data-index')
      })
    },

    async skillOrderUpdate() {
      await this.updateSkillOrder(this.profileId)
    },

    setSkillForModal(skill) {
      this.skill.id = skill.skill_id
      this.skill.name = skill.name
      this.skill.progress = skill.progress
      this.skill.description = skill.description
    },

    async deleteSkillConfirmed() {
      if (await this.deleteSkill({profileId: this.profileId, skillId: this.skill.id})) {
        console.log("skill is deleted!")
        this.skillDeleteModal = false
      }
    },

    async updateSkillConfirmed(skill) {
      const request = {
        name: skill.name,
        description: skill.description,
        progress: Number(skill.progress)
      }
      if (await this.updateSkill({profileId: this.profileId, skillId: this.skill.id, request: request})) {
        console.log("skill is updated")
        this.skillUpdateModal = false
      }
    },

    async createSkillConfirmed(skill) {
      const request = {
        name: skill.name,
        description: skill.description,
        progress: Number(skill.progress)
      }
      if (await this.createSkill({profileId: this.profileId, request: request})) {
        console.log("skill created")
        this.skillCreateModal = false
      }
    }
  },
  mounted() {
    this.fetchSkills(this.profileId)
    console.log("skills")
  }
}
</script>

<style scoped>
.skills {
  cursor: grab;
}
.draggable {
  color: transparent;
  background-color: #cecdcd47;
  border: 3px dashed black;
  cursor: grabbing;
}
.actions {
  color: white;
  margin-right: 5px;
  cursor: pointer;
}
</style>