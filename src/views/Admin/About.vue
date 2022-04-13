<template>

  <div class="image-containers">
    <div class="mb-3 edit-image-container">
      <div class="cover" :style="{backgroundImage: 'url(' + getProfile.cover_image + ')'}">
        <label for="cover_image" class="form-label">
          <svg id="edit-cover-image" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square edit-image" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </label>
      </div>
      <input type="file" class="" style="display: none" id="cover_image" @change="previewImage">
    </div>
    <div class="mb-3 edit-image-container">
      <div id="profile-image" class="profile-image" :style="{backgroundImage: 'url(' + getProfile.profile_image + ')'}">
        <label for="profile_image" class="form-label">
          <svg id="edit-profile-image" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square edit-image" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </label>
        <input type="file" class="" style="display: none" id="profile_image" @change="previewImage">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="text-start mb-3 col-md-12">
      <label for="username" class="form-label">Username</label>
      <input type="text" class="form-control" id="username" v-model="getProfile.username">
    </div>
    <div class="text-start mb-3 col-md-12">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" id="email" v-model="getProfile.email">
    </div>
    <div class="text-start mb-3 col-md-6">
      <label for="first_name" class="form-label">First Name</label>
      <input type="text" class="form-control" id="first_name" v-model="getProfile.first_name" >
    </div>
    <div class="text-start mb-3 col-md-6">
      <label for="last_name" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="last_name" v-model="getProfile.last_name" >
    </div>
    <div class="text-start mb-3 col-md-12">
      <label for="first_quote" class="form-label">First Quote</label>
      <input type="text" class="form-control" id="first_quote" v-model="getProfile.first_quote" >
    </div>
    <div class="text-start mb-3 col-md-12">
      <label for="second_quote" class="form-label">Second Quote</label>
      <input type="text" class="form-control" id="second_quote" v-model="getProfile.second_quote" >
    </div>
    <div class="text-start mb-3 col-md-12">
      <label for="linkedin" class="form-label">Linkedin</label>
      <input type="text" class="form-control" id="linkedin"  v-model="getProfile.social_networks.linkedin">
    </div>
    <div class="text-start mb-3 col-md-12">
      <label for="github" class="form-label">Github</label>
      <input type="text" class="form-control" id="github"  v-model="getProfile.social_networks.github">
    </div>
    <div class="text-start mb-3 col-md-12">
      <label for="about" class="form-label">About</label>
      <textarea v-model="getProfile.about" class="form-control" id="about" rows="10" style="resize: none;"></textarea>
    </div>
    <button class="modal-default-button btn btn-primary" @click="update">Update</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "About",
  props: {
    profileId: Number
  },
  data() {
    return {
      profile_image: null,
      cover_image: null,
    }
  },
  emits: ['usernameUpdated'],
  computed: {
    ...mapGetters('admin/profile', ['getProfile'])
  },
  methods: {
    ...mapActions('admin/profile', ['updateProfile', 'uploadProfileImage']),

    previewImage(e) {
      const file = e.target.files[0]
      if (e.target.id === "cover_image") this.cover_image = file
      if (e.target.id === "profile_image") this.profile_image = file
      const imgUrl = URL.createObjectURL(file)

      e.target
          .parentElement
          .style
          .backgroundImage = 'url('+ imgUrl +')'
    },
    async update() {
      await this.updateProfile({
        profileId: this.getProfile.profile_id,
        request: this.getProfile
      })

      if (this.profile_image != null) {
        await this.uploadProfileImage({profileId: this.getProfile.profile_id, fileData: this.profile_image})
      }

      this.$emit('usernameUpdated')
    }
  },
  mounted() {
    console.log("ABOUT!")
  }
}
</script>

<style scoped>
.edit-image-container {
  position: relative;
}
.edit-image {
  position: absolute;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid white;
  box-shadow: 0 0 1px 1px #fff;
}
#edit-cover-image {
  top: 244px;
  left: 0;
}
#edit-profile-image {
  top: 163px;
  left: 0;
}
.cover {
  height: 260px;
  background-position-y: 0;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto 10px;
}
.profile-image {
  width: 180px;
  height: 180px;
  border: 1px solid mintcream;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-position: center;
  top: -110px;
  right: 10px;
  margin: 0 auto;
}

.image-containers {
  margin-bottom: 100px;
}

</style>