import education from '@/api/admin/education'

const namespaced = true

const state = {
    educations: [],
    education: {}
}

const getters = {
    getEducations: (state) => state.educations,
    getEducation: (state) => state.education
}

const actions = {
    async fetchEducations({commit, rootState}, profileId) {
        const data = await education.get(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            commit('setEducations', data.data)
            commit('admin/setToast', {type: "success", message: "Educations fetched successfully"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },

    async createEducation({commit, rootState}, {profileId, request}) {
        const data = await education.create(rootState.admin.user_id, profileId, request)

        if (data.code === 200) {
            commit('admin/setToast', {type: "success", message: "Education added"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async deleteEducation({commit, rootState}, {profileId, educationId}) {
        const data = await education.delete(rootState.admin.user_id, profileId, educationId)

        if (data.code === 200) {
            commit('removeEducationFromArray', data.data)
            commit('admin/setToast', {type: "success", message: "Education deleted"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async updateEducation({commit, rootState}, {profileId, educationId, request}) {
        const data = await education.update(rootState.admin.user_id, profileId, educationId, request)

        if (data.code === 200) {
            commit('admin/setToast', {type: "success", message: "Education updated"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    }
}

const mutations = {
    setEducations(state, educations) {
        if (educations !== null) state.educations = educations
    },
    setEducation(state, education) {
        state.education = education
    },
    // addExperience(state, experience) {
    //     state.experiences.push(experience)
    // },
    // updateExperienceInArray(state, updatedExperience) {
    //     // const index = state.experiences.findIndex(experience => experience.experience_id === updatedExperience.experience_id)
    //     // state.experiences.splice(index, 1, updatedExperience)
    //     state.experiences = state.experiences.map(experience => {
    //         if (experience.experience_id === updatedExperience.experience_id) return updatedExperience
    //     })
    // },
    removeEducationFromArray(state, deletedEducation) {
        const index = state.educations.findIndex(education => education.education_id === deletedEducation.education_id)
        state.educations.splice(index, 1)
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}