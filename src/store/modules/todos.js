import axios from "axios"
import router from '../../router'

const state = {
    todos: [],
    logged: false
}

const getters = {
    allTodos: (state) => state.todos,
    getLogged: (state) => state.logged
}

const actions = {
    async fetchTodos({commit}) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')

        commit('setTodos', result.data)
    }
}

const mutations = {
    setTodos(state, todos) {
        state.todos = todos
    },
    changeTodos(state) {
        state.todos = [
            {
                id: 1,
                title: 'todo one'
            },
            {
                id: 2,
                title: 'todo two'
            }
        ]
    },
    changeLogingStatus(state) {
        state.logged = !state.logged
        router.push('/new')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}