<template>
  <h2>Edit Profile</h2>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="sidebar-height offset-2 col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
          <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <i class="edit-profile-status" :class="getProfile.active ? 'active-profile' : 'inactive-profile' "></i> <span class="fs-4">{{username}}</span>
          </div>
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <router-link :to="{name: 'Admin/About'}" active-class="active" class="nav-link text-white" aria-current="page">About</router-link>
            </li>
            <li>
              <router-link :to="{name: 'Admin/Skills'}" active-class="active" class="nav-link text-white">Skills</router-link>
            </li>
            <li>
              <router-link :to="{name: 'Admin/Portfolio'}" active-class="active" class="nav-link text-white">Portfolio</router-link>
            </li>
            <li>
              <router-link :to="{name: 'Admin/Experience'}" active-class="active" class="nav-link text-white">Experience</router-link>
            </li>
          </ul>
          <hr>
          <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
<!--              <img src="https://github.com/mdo.png" alt="" class="rounded-circle me-2" width="32" height="32">-->
              <strong>Menu</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
              <li><a v-if="!getProfile.active" class="dropdown-item" href="#" @click="activate">Activate</a></li>
              <li><a v-if="!getProfile.active" class="dropdown-item" href="#" @click="deleteProfileModal = true">Delete</a></li>
              <li><router-link :to="{name: 'Profiles'}" class="dropdown-item">Back to profiles</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-6 py-3">
        <router-view
            @usernameUpdated="this.username = getProfile.username"
            :profileId="getProfile.profile_id"
            v-if="getProfile.profile_id > 0"
        ></router-view>
      </div>
    </div>
  </div>
  <DeleteProfileConfirmation
      v-if="deleteProfileModal"
      @close="deleteProfileModal = false"
      :profileId="getProfile.profile_id"
      :username="getProfile.username"
      @confirm="deleteCurrentProfile"
  />
  <NotificationsToast/>
</template>

<script>
import {useRoute} from 'vue-router'
import {mapActions, mapGetters} from 'vuex'
import DeleteProfileConfirmation from "../../components/Modals/profile/DeleteProfileConfirmation";
import router from "../../router";

export default {
  name: "Profile",
  components: {DeleteProfileConfirmation},
  data() {
    return {
      deleteProfileModal: false,
      username: "",
      isActive: true
    }
  },
  computed: {
    ...mapGetters('admin/profile', ['getProfile'])
  },
  methods: {
    ...mapActions('admin', ['logout']),
    ...mapActions('admin/profile', ['fetchProfile', 'activateProfile', 'deleteProfile']),

    async activate() {
      await this.activateProfile(this.getProfile.profile_id)
      await this.fetchProfile(this.getProfile.profile_id)
    },

    async deleteCurrentProfile() {
      if (await this.deleteProfile(this.getProfile.profile_id)) {
        await router.push({name: "Profiles"})
      }
    }
  },
  async mounted() {
    console.log("PROFILE!!")
    if (!await this.fetchProfile(useRoute().params.profileId)) {
      await router.push({name: "Profiles"})
    }

    this.username = this.getProfile.username
  },
  async activated() {
    // await this.page()
  },
}
</script>

<style scoped>
.edit-profile-status {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  margin-right: 7px;
  top: 2px;
}
.sidebar-height {
  height: 100vh;
}
</style>