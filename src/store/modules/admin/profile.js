import profile from '@/api/admin/profile'

const namespaced = true

const state = {
    profiles: [],
    profile: {
        social_networks: {}
    }
}

const getters = {
    getProfiles: (state) => state.profiles,
    getProfile: (state) => state.profile,
}

const actions = {

    async fetchProfiles({commit, rootState}) {
        const data = await profile.get(rootState.admin.user_id)

        if (data.code === 200) {
            commit('setProfiles', data)
            commit('admin/setToast', {type: "success", message: "Profiles retrieved"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },

    async activateProfile({commit, rootState}, profileId) {
        const data = await profile.activate(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            // commit('setProfile', data)
            commit('admin/setToast', {type: "success", message: "Profile Activated"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },

    async createProfile({commit, rootState}, requestData) {
        const data = await profile.create(rootState.admin.user_id, requestData)

        if (data.code === 200) {
            commit('addProfile', data)
            commit('admin/setToast', {type: "success", message: "Profile Created Successfully"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }

        return false
    },

    async uploadProfileImage({commit, rootState}, {profileId, fileData}) {
        const data = await profile.uploadProfileImage(rootState.admin.user_id, profileId, fileData)

        if (data.code === 200) {
            commit('addProfileImageUrl', data)
        } else {
            commit('admin/setToast', {type: "error", message: data.message})
        }
    },

    async fetchProfile({commit, rootState}, profileId) {
        const data = await profile.show(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            commit('setProfile', data)
            commit('admin/setToast', {type: "success", message: "User profile data retrieved successfully"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async updateProfile({commit, rootState}, {profileId, request}) {
        const data = await profile.update(rootState.admin.user_id, profileId, request)

        if (data.code === 200) {
            console.log("update user profile ", data)
            commit('setProfile', data)
            commit('admin/setToast', {type: "success", message: "Profile Updated!!!"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },

    async deleteProfile({commit, rootState}, profileId) {
        const data = await profile.delete(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            commit('removeProfile', data)
            commit('admin/setToast', {type: "success", message: "Profile deleted successfully"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    }
}

const mutations = {

    setProfiles(state, data) {
        state.profiles = data.data
    },

    setProfile(state, data) {
        state.profile = data.data
    },

    addProfile(state, data) {
        state.profiles.push(data.data)
    },

    addProfileImageUrl(state, data) {
        let profile = state.profiles.at(-1)
        profile.profile_image = data.data.profile_image
        state.profiles.splice(-1, 1, profile)
    },

    removeProfile(state, data) {
        state.profiles = state.profiles.filter(profile => profile.profile_id !== data.data.profile_id)
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}