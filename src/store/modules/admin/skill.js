import skill from '@/api/admin/skill'

const namespaced = true

const state = {
    skills: [],
    skill: {}
}

const getters = {
    getSkills: (state) => state.skills,
    getSkill: (state) => state.skill
}

const actions = {
    async fetchSkills({commit, rootState}, profileId) {
        const data = await skill.get(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            commit('setSkills', data)
            commit('admin/setToast', {type: "success", message: "Skills fetched successfully"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },
    async updateSkillOrder({commit, rootState}, profileId) {
        const skillIds = state.skills.map(skill => {
            return skill.skill_id
        })
        const data = await skill.updateOrder(rootState.admin.user_id, profileId, {skill_ids: skillIds})

        if (data.code === 200) {
            commit('setSkills', data)
            commit('admin/setToast', {type: "success", message: "Skills changed order successfully"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },
    async fetchSkill({commit, rootState}, {profileId, skillId}) {
        const data = await skill.show(rootState.admin.user_id, profileId, skillId)

        if (data.code === 200) {
            commit('setSkill', data)
            commit('admin/setToast', {type: "success", message: "Skill retrieved"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },
    async createSkill({commit, rootState}, {profileId, request}) {
        const data = await skill.create(rootState.admin.user_id, profileId, request)

        if (data.code === 200) {
            commit('addSkill', data)
            commit('admin/setToast', {type: "success", message: "Skill created"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },
    async updateSkill({commit, rootState}, {profileId, skillId, request}) {
        const data = await skill.update(rootState.admin.user_id, profileId, skillId, request)
        console.log("updated skill ", data)
        if (data.code === 200) {
            commit('refreshSkills', data)
            commit('admin/setToast', {type: "success", message: "Skill updated"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },
    async deleteSkill({commit, rootState}, {profileId, skillId}) {
        const data = await skill.delete(rootState.admin.user_id, profileId, skillId)

        if (data.code === 200) {
            commit('removeSkill', data)
            commit('admin/setToast', {type: "success", message: "Skill deleted"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false;
        }
    }
}

const mutations = {
    setSkills(state, data) {
        if (data.data !== null) state.skills = data.data
    },
    setSkill(state, data) {
        state.skill = data.data
    },
    addSkill(state, data) {
        state.skills.push(data.data)
    },
    refreshSkills(state, data) {
        state.skills.splice(state.skills.findIndex(skill => skill.skill_id === data.data.skill_id), 1, data.data)
    },
    removeSkill(state, data) {
        state.skills.splice(state.skills.findIndex(skill => skill.skill_id === data.data.skill_id), 1)
    },
    changeOrder(state, {oldPosition, newPosition}) {
        const el = state.skills.at(oldPosition)
        state.skills.splice(oldPosition, 1)
        state.skills.splice(newPosition, 0, el)
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}