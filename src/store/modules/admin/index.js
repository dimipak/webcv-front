import user from '@/api/admin/user'
import router from '../../../router'
import profile from './profile'
import skill from './skill'
import portfolio from './portfolio'
import experience from './experience'

const namespaced = true

const modules = {
    profile,
    skill,
    portfolio,
    experience
}

const state = {
    toast: {
        type: "",
        show: false,
        message: ""
    },
    toasts: [],
    access_token: '',
    token: localStorage.getItem('access_token'),
    user_id: 0,
    badResponse: {},
}

const getters = {
    getUser: (state) => state.user_id,
    getAccessToken: (state) => state.access_token,
    getToken: () => localStorage.getItem('access_token'),
    getBadResponse: (state) => state.badResponse,
    getToasts: (state) => state.toasts
}

const actions = {

    async logout() {
        localStorage.removeItem('access_token')
        await router.push({name: "Admin/Home"})
    },

    async loginUser({commit, dispatch}, {username, password}) {

        const data = await user.login(username, password)

        if (data.code === 200) {
            localStorage.setItem('access_token', data.access_token)
            commit('setUser', data)
        } else {
            dispatch('logout')
            commit('setBadResponse', data)
            commit('setToast', {type: "error", message: data.message})
        }

        return data.code
    }
}

const mutations = {
    setUser(state, data) {
        state.user_id = data.data.user_id
    },

    setUserId(state, userId) {
        state.user_id = userId
    },

    fetchAccessToken() {
        state.access_token = localStorage.getItem('access_token')
    },

    setBadResponse(state, data) {
        state.badResponse = data
    },

    setToast(state, data) {
        state.toast = {
            type: data.type,
            show: true,
            message: data.message
        }
        state.toasts.push(state.toast)
        setTimeout(() => {
            state.toast.show = false
            state.toasts.shift()
        }, 5000)
    }
}

export default {
    namespaced,
    modules,
    state,
    getters,
    actions,
    mutations
}