import experience from '@/api/admin/experience'

const namespaced = true

const state = {
    experiences: [],
    experience: {}
}

const getters = {
    getExperiences: (state) => state.experiences,
    getExperience: (state) => state.experience
}

const actions = {
    async fetchExperiences({commit, rootState}, profileId) {
        const data = await experience.get(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            commit('setExperiences', data.data)
            commit('admin/setToast', {type: "success", message: "Experiences fetched successfully"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },

    async createExperience({commit, rootState}, {profileId, request}) {
        const data = await experience.create(rootState.admin.user_id, profileId, request)

        if (data.code === 200) {
            // commit('addExperience', data.data)
            commit('admin/setToast', {type: "success", message: "Experiences created"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async updateExperience({commit, rootState}, {profileId, experienceId, request}) {
        const data = await experience.update(rootState.admin.user_id, profileId, experienceId, request)

        if (data.code === 200) {
            commit('admin/setToast', {type: "success", message: "Experiences updated"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async deleteExperience({commit, rootState}, {profileId, experienceId}) {
        const data = await experience.delete(rootState.admin.user_id, profileId, experienceId)

        if (data.code === 200) {
            commit('removeExperienceFromArray', data.data)
            commit('admin/setToast', {type: "success", message: "Experiences deleted"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    }
}

const mutations = {
    setExperiences(state, experiences) {
        if (experiences !== null) state.experiences = experiences
    },
    setExperience(state, experience) {
        state.experience = experience
    },
    addExperience(state, experience) {
        state.experiences.push(experience)
    },
    updateExperienceInArray(state, updatedExperience) {
        // const index = state.experiences.findIndex(experience => experience.experience_id === updatedExperience.experience_id)
        // state.experiences.splice(index, 1, updatedExperience)
        state.experiences = state.experiences.map(experience => {
            if (experience.experience_id === updatedExperience.experience_id) return updatedExperience
        })
    },
    removeExperienceFromArray(state, deletedExperience) {
        const index = state.experiences.findIndex(experience => experience.experience_id === deletedExperience.experience_id)
        state.experiences.splice(index, 1)
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}