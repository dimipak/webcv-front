import { createStore } from 'vuex'
import profile from './modules/profile'
import admin from './modules/admin/index'

export const store = createStore({
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
        profile,
        admin
    }
});