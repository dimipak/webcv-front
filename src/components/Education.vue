<template>
  <div style="position: relative" ref="box">
    hello world
  </div>

</template>

<script>
import { TimelineLite } from 'gsap'

export default {
  name: "Education",
  data () {
    return {
      dialog: false,
    }
  },
  mounted() {
    const {box} = this.$refs
    const timeline = new TimelineLite()

    timeline.to(box, 2, {left:100})
  },
  beforeDestroy() {
    const {box} = this.$refs
    const timeline = new TimelineLite()

    timeline.to(box, 2, {right:200})
  }
}
</script>

<style scoped>

</style>