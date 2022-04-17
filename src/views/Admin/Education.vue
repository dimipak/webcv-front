<template>

  <div style="text-align: left;">
    <button class="btn btn-success" @click="createEducationModal = true">Create</button>
  </div>

  <div class="table-responsive">
    <table class="table .table-striped">
      <thead>
      <th>Information</th>
      <th>Description</th>
      <th>Actions</th>
      </thead>
      <tbody>
      <tr v-for="(education, index) in this.getEducations" :key="education.education_id">
        <td class="text-nowrap">
          <p>{{date[index]}}</p>
          <p>{{education.title}}</p>
          <p>{{education.reference}}</p>
          <p>{{education.link}}</p>
        </td>
        <td><pre class="description">{{education.description}}</pre></td>
        <td>
          <i class="bi bi-pencil-square actions" @click="educationData = education; updateEducationModal = true"></i>
          <i class="bi bi-trash3 actions" @click="educationData = education; deleteEducationModal = true"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <CreateEducation
      v-if="createEducationModal"
      @submit="createNewEducation"
      @close="createEducationModal = false"
  />

  <DeleteEducationConfirmation
      v-if="deleteEducationModal"
      :education="educationData"
      @confirm="deleteCurrentEducation"
      @close="deleteEducationModal = false"
  />

  <UpdateEducation
      v-if="updateEducationModal"
      :EDUCATION="educationData"
      @submit="updateCurrentEducation"
      @close="updateEducationModal = false"
  />

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CreateEducation from '@/components/Modals/education/CreateEducation.vue'
import DeleteEducationConfirmation from "@/components/Modals/education/DeleteEducationConfirmation";
import UpdateEducation from "@/components/Modals/education/UpdateEducation";

export default {
  name: "Education",
  props: {
    profileId: Number
  },
  components: {
    CreateEducation,
    DeleteEducationConfirmation,
    UpdateEducation
  },
  emits: ['usernameUpdated'],
  data() {
    return {
      createEducationModal: false,
      deleteEducationModal: false,
      updateEducationModal: false,
      educationData: {}
    }
  },
  computed: {
    ...mapGetters('admin/education', ['getEducations']),

    date: function() {
      return this.getEducations.map(function(item) {
        return new Date(item.date).getFullYear()
      })
    }
  },
  methods: {
    ...mapActions('admin/education', ['fetchEducations', 'createEducation', 'deleteEducation', 'updateEducation']),

    async createNewEducation(education) {
      if (await this.createEducation({profileId: this.profileId, request: education})) {
        console.log("created education")
        this.createEducationModal = false
        await this.fetchEducations(this.profileId)
      }
    },

    async deleteCurrentEducation(educationId) {
      if (await this.deleteEducation({profileId: this.profileId, educationId: educationId})) {
        console.log("education deleted")
        this.deleteEducationModal = false
      }
    },

    async updateCurrentEducation(education) {
      if (await this.updateEducation({profileId: this.profileId, educationId: education.education_id, request: education})) {
        console.log("education updated")
        this.updateEducationModal = false
        this.fetchEducations(this.profileId)
      }
    }
  },
  async mounted() {
    console.log("educations")
    this.fetchEducations(this.profileId)
  }
}
</script>

<style scoped>
.actions {
  color: white;
  margin-right: 5px;
  cursor: pointer;
}
.description {
  text-align: left;
}
</style>