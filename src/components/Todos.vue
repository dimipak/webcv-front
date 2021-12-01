<template>
<div>
  <h3>Todos</h3>
  <p>Hello world</p>
  <button @click="fetchTodos">Fetch from api</button>
  <button @click="changeTodos">Fetch from hardcode</button>
  <p>Results: </p>
  <div v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</div>
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: "Todos",
  methods: {
    ...mapActions(['fetchTodos', 'fetchProfile']),
    ...mapMutations(['changeTodos'])
  },
  computed: {
    ...mapGetters(['allTodos', 'getLogged', 'getProfile'])
  },
  created() {
    // this.fetchTodos()
    // if (!this.getLogged) {
    //   this.$router.push('/new')
    //   return
    // }
    this.changeTodos()
    this.fetchProfile()
  }
}
</script>

<style scoped>

</style>