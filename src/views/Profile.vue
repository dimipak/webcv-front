<template>
  <h2>This is the individual profile {{profileId}}</h2>
  <p>{{userProfile.username}}</p>
</template>

<script>
import {useRoute} from 'vue-router'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Profile",
  data() {
    return {
      profileId: 0
    }
  },
  computed: {
    ...mapGetters(['userProfile'])
  },
  methods: {
    ...mapActions(['getUserProfile'])
  },
  async mounted() {
    const route = useRoute()
    this.profileId = route.params.profileId
    const statusCode = await this.getUserProfile(this.profileId)
  }
}
</script>

<style scoped>

</style>