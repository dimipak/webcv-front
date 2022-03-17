import user from '@/api/user'
import router from '../../router/index'

const state = {
    access_token: '',
    token: localStorage.getItem('access_token'),
    user_id: localStorage.getItem('user_id'),
    logged_in: false,
    profiles: [],
    badResponse: {},
    profile: {}
}

const getters = {
    getUser: (state) => state.user_id,
    getAccessToken: (state) => state.access_token,
    getToken: () => localStorage.getItem('access_token'),
    getUProfile: (state) => state.profiles,
    getBadResponse: (state) => state.badResponse,
    userProfile: (state) => state.profile
}

const actions = {
    async logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_id')

        await router.push({name: "HomeAdmin"})
    },
    async loginUser({commit, dispatch}, {username, password}) {

        const data = await user.login(username, password)

        console.log(data)

        if (data.code === 200) {
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('user_id', data.data.user_id)
            commit('setUser', data)
        } else {
            // localStorage.removeItem('access_token')
            // localStorage.removeItem('user_id')
            dispatch('logout')
            commit('setBadResponse', data)
        }

        return data.code
    },

    async getAllUserProfiles({commit}) {

        const data = await user.getUserProfiles(state.user_id)

        if (data.code === 200) {
            commit('fetchUserProfiles', data)
        }

        return data.code
    },

    async activateUserProfile({commit}, profileId) {
        const data = await user.activateUserProfile(state.user_id, profileId)

        if (data.code === 200) {
            commit('fetchUserProfiles', data)
        }

        return data.code
    },

    async createUserProfile({commit}, requestData) {
        const data = await user.createUserProfile(state.user_id, requestData)

        // if (data.code === 200) {
        //     commit('addUserProfile', data)
        // }

        return data
    },

    async uploadProfileImage({commit}, {profileId, fileData}) {
        const data = await user.uploadProfileImage(state.user_id, profileId, fileData)

        if (data.code === 200) {
            commit('addUserProfile', data)
        }

        return data.code
    },

    async getUserProfile({commit}, profileId) {
        const data = await user.getUserProfile(state.user_id, profileId)

        if (data.code === 200) {
            commit('fetchUserProfile', data)
        }

        return data.code
    }
}

const mutations = {
    setUser(state, data) {
        state.user_id = data.data.user_id
    },

    fetchAccessToken() {
        state.access_token = localStorage.getItem('access_token')
    },

    fetchUserProfiles(state, data) {
        state.profiles = data.data
    },

    fetchUserProfile(state, data) {
        state.profile = data.data
    },

    setBadResponse(state, data) {
        state.badResponse = data
    },

    addUserProfile(state, data) {
        state.profiles.push(data.data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}