<template>

  <div class="container">
    <h2 id="profile-header">Choose profile</h2>

    <div class="navigation-component profiles-component">
      <nav>
        <ul class="profiles nav">
          <li class="nav-item profile" v-for="profile in getUProfile" :key="profile.profile_id">
            <router-link :to="{name: 'Profile', params: {profileId: profile.profile_id}}">
              <div class="image-container" :style="{backgroundImage: 'url(' + profile.profile_image + ')'}"></div>
            </router-link>
            <i @click="activateProfile(profile.profile_id)" class="profile-status" :class="profile.active ? 'active-profile' : 'inactive-profile' "></i>
            <p class="profile-username">{{profile.username}}</p>
          </li>
          <li class="nav-item profile">
            <div class="new-profile-container" @click="showCreateModal = true">
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
        v-if="showCreateModal"
        v-model="newUsername"
        @close="showCreateModal = false"
        @submit="createProfile"
    ></CreateProfile>
  </transition>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Modal from '@/components/Modals/Modal.vue'
import CreateProfile from "@/components/Modals/CreateProfile.vue";

export default {
  name: "Profiles",
  data() {
    return {
      newUsername: "",
      showModal: false,
      showCreateModal: false,
      clickedProfile: {},
    }
  },
  components: {
    Modal,
    CreateProfile
  },
  computed: {
    ...mapGetters(['getUProfile'])
  },
  methods: {
    ...mapActions(['getAllUserProfiles', 'activateUserProfile', 'logout', 'createUserProfile', 'uploadProfileImage']),

    activateProfile: async function(profileId) {
      console.log('activates profile');
      const statusCode = await this.activateUserProfile(profileId)

      if (statusCode === 200) {
        await this.page()
      }
    },

    page: async function() {
      console.log("i am at profiles")
      // this.getAllUserProfiles()
      const statusCode = await this.getAllUserProfiles()
      console.log("profile status code", statusCode)
      if (statusCode !== 200) {
        // localStorage.removeItem('access_token')
        await this.logout()
        // await router.push({name: "HomeAdmin"})
      }
    },

    async createProfile(newProfile, fileData) {
      console.log("creating profile")
      console.log("data passed new profile = ", newProfile)
      console.log("new username = ", newProfile.username)
      const data = await this.createUserProfile(newProfile)

      console.log("create profile status code == ", data.code)
      console.log("new profile id = ", data.data.profile_id)

      const uploadStatusCode = await this.uploadProfileImage({profileId: data.data.profile_id, fileData})

      console.log("upload profile image status code = ", uploadStatusCode)

      this.showCreateModal = false;
    }
  },
  async mounted() {
    await this.page()
  },
  async activated() {
    await this.page()
  },
  async beforeMount() {
    console.log("profiles before mount")
    await this.page()
  }
}
</script>

<style>

html, body {
  background-color: #2d2d2d !important;
}

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