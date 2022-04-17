<template>
  <div style="text-align: left;">
    <button class="btn btn-success" @click="createExperienceModal = true">Create</button>
  </div>

  <div class="table-responsive">
    <table class="table .table-striped">
      <thead>
        <th>Information</th>
        <th>Description</th>
        <th>Actions</th>
      </thead>
      <tbody>
      <tr v-for="experience in this.getExperiences" :key="experience.experience_id">
        <td class="text-nowrap">
          <p>{{getMonthYear(experience.start_date)}} - {{getMonthYear(experience.end_date)}}</p>
          <p>{{experience.country}} - {{experience.city}}</p>
          <p>{{experience.company_name}}</p>
          <p>{{experience.role}}</p>
        </td>
        <td><pre class="description">{{experience.description}}</pre></td>
        <td>
          <i class="bi bi-pencil-square actions" @click="experienceData = experience; updateExperienceModal = true"></i>
          <i class="bi bi-trash3 actions" @click="experienceData = experience; deleteExperienceModal = true"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <CreateExperience
      v-if="createExperienceModal"
      @submit="createNewExperience"
      @close="createExperienceModal = false"
  />

  <UpdateExperience
      v-if="updateExperienceModal"
      :edit-experience="experienceData"
      @submit="updateCurrentExperience"
      @close="updateExperienceModal = false"
  />

  <DeleteExperienceConfirmation
      v-if="deleteExperienceModal"
      :experience="experienceData"
      @confirm="deleteCurrentExperience"
      @close="deleteExperienceModal = false"
  />

</template>

<script>
import {mapGetters, mapActions} from "vuex";
import CreateExperience from "../../components/Modals/experience/CreateExperience";
import UpdateExperience from "../../components/Modals/experience/UpdateExperience";
import DeleteExperienceConfirmation from "../../components/Modals/experience/DeleteExperienceConfirmation";

export default {
  name: "Experience",
  props: {
    profileId: Number
  },
  data() {
    return {
      createExperienceModal: false,
      updateExperienceModal: false,
      deleteExperienceModal: false,
      experienceData: {}
    }
  },
  components: {
    CreateExperience,
    UpdateExperience,
    DeleteExperienceConfirmation
  },
  emits: ['usernameUpdated'],
  computed: {
    ...mapGetters('admin/experience', ['getExperiences'])
  },
  methods: {
    ...mapActions('admin/experience', ['fetchExperiences', 'createExperience', 'updateExperience', 'deleteExperience']),

    getMonthYear(date) {
      const newDate = new Date(date)
      return (newDate.getMonth() + 1) + "/" + newDate.getFullYear()
    },

    async createNewExperience(experience) {
      if (await this.createExperience({profileId: this.profileId, request: experience})) {
        console.log("experience created")
        this.createExperienceModal = false
        this.fetchExperiences(this.profileId)
      }
    },

    async updateCurrentExperience(experience) {
      if (await this.updateExperience({profileId: this.profileId, experienceId: this.experienceData.experience_id, request: experience})) {
        console.log("experience updated")
        this.updateExperienceModal = false
        this.fetchExperiences(this.profileId)
      }
    },

    async deleteCurrentExperience() {
      if (await this.deleteExperience({profileId: this.profileId, experienceId: this.experienceData.experience_id})) {
        console.log("experience deleted")
        this.deleteExperienceModal = false
      }
    }
  },
  async mounted() {
    console.log("experiences!")
    await this.fetchExperiences(this.profileId)
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