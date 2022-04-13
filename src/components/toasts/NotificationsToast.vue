<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div v-for="(toast, index) in getToasts" :key="index" style="margin-top: 20px;">
      <div
          :class="toast.type === 'success' ? 'bg-success' : 'bg-danger'"
          class="toast show align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            {{toast.message}}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "NotificationsToast",
  computed: {
    ...mapGetters('admin', ['getToasts'])
  }
}
</script>

<style scoped>

</style>