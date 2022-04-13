<template>

  <div class="container">
    <h2 id="profile-header">Choose profile</h2>

    <div class="navigation-component profiles-component">
      <nav>
        <ul class="profiles nav">
<!--          <div v-if="getUProfile">-->
            <li class="nav-item profile" v-for="profile in getProfiles" :key="profile.profile_id">
              <router-link :to="{name: 'Admin/About', params: {profileId: profile.profile_id?? 0}}">
                <div class="image-container" :style="{backgroundImage: 'url(' + profile.profile_image + ')'}"></div>
              </router-link>
              <i @click="activate(profile.profile_id)" class="profile-status" :class="profile.active ? 'active-profile' : 'inactive-profile' "></i>
              <p class="profile-username">{{profile.username}}</p>
            </li>
<!--          </div>-->
          <li class="nav-item profile">
            <div class="new-profile-container" @click="createProfileModal = true">
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="logout-button"><p @click="logout">Logout</p></div>

  <transition name="modal">
    <CreateProfile
        v-if="createProfileModal"
        @close="createProfileModal = false"
        @submit="createNewProfile"
    ></CreateProfile>
  </transition>

  <NotificationsToast/>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CreateProfile from "@/components/Modals/CreateProfile.vue";

export default {
  name: "Profiles",
  data() {
    return {
      createProfileModal: false
    }
  },
  components: {
    CreateProfile
  },
  computed: {
    ...mapGetters('admin/profile', ['getProfiles']),
  },
  methods: {
    ...mapActions('admin', ['logout']),

    ...mapActions('admin/profile', ['fetchProfiles', 'activateProfile', 'createProfile', 'uploadProfileImage']),

    activate: async function(profileId) {

      await this.activateProfile(profileId)

      await this.fetchProfiles()
    },

    async createNewProfile(newProfile, fileData) {

      if (await this.createProfile(newProfile))
        await this.uploadProfileImage({profileId: this.getProfiles.at(-1).profile_id, fileData})

      this.createProfileModal = false;
    }
  },
  async mounted() {
    console.log("profiles!!!")
    await this.fetchProfiles()
  },
  async activated() {
    // await this.page()
  },
  async beforeMount() {
    // await this.page()
  }
}
</script>

<style>

#profile-header {
  text-align: center;
  margin-top: 130px;
  color: whitesmoke;
}

.image-container {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
}

.profiles {
  overflow-x: scroll;
  margin-top: 30px;
  padding-top: 10px;
  flex-wrap: nowrap !important;
}

.profile {
  border-radius: 50%;
  margin: 0 50px;
  position: relative;
}

.profile:hover {
  cursor: pointer;
}

.profiles-component {
  width: 60%;
  margin: auto;
}

.profile-username {
  margin-top: 4px;
  text-align: center;
  color: dimgray;
}

.profile-status {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  top: 129px;
  left: 25px;
}

.active-profile {
  background-color: dodgerblue;
}

.inactive-profile {
  background-color: #a4a5a6;
}

.new-profile-container {
  background-color: ghostwhite;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.logout-button {
  color: #d9d7d7;
  margin-top: 50px;
}

.logout-button p {
  margin: auto;
  width: min-content;
  cursor: pointer;
}
</style>