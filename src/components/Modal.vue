<template>
<div v-if="show">
  <h1>hello from modal</h1>
</div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false
    }
  },
  methods: {
    openModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    }
  }
}
</script>

<style scoped>

</style>