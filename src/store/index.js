import { createStore } from 'vuex'
import todos from './modules/todos'
import profile from './modules/profile'

export default createStore({
    state: {
        topBarAnimation: true
    },
    getters: {
        getTopBarAnimation: (state) => state.topBarAnimation
    },
    actions: {},
    mutations: {
        setTopBarAnimation: (state, value) => state.topBarAnimation = value
    },
    modules: {
        todos,
        profile
    }
});