import profile from '@/api/profile'

const state = {
    profile: {},
    info: {
        about: ''
    },
    skills: [],
    portfolio: [{
        image_url: ''
    }],
    experience: [],
    education: []
}

const getters = {
    getProfile: (state) => state.profile,
    getInfo: (state) => state.info,
    getSkills: (state) => state.skills,
    getPortfolio: (state) => state.portfolio,
    getExperience: (state) => state.experience,
    getEducation: (state) => state.education
}

const actions = {
    async fetchProfile({commit}) {
        const data = await profile.getActiveProfile()

        commit('setProfile', data)
    },
    async fetchProfileInfo({commit}) {
        const result = await profile.getProfileInfo(state.profile.profile_id)
        
        commit('setInfo', result)
    },
    async fetchProfileSkills({commit}) {
        const data = await profile.getProfileSkills(state.profile.profile_id)
        
        commit('setSkills', data)
    },
    async fetchProfilePortfolio({commit}) {
        const data = await profile.getProfilePortfolio(state.profile.profile_id)

        commit('setPortfolio', data)
    },
    async fetchProfileExperiene({commit}) {
        const data = await profile.getProfileExperience(state.profile.profile_id)

        commit ('setExperience', data)
    },
    async fetchProfileEducation({commit}) {
        const data = await profile.getProfileEducation(state.profile.profile_id)

        commit('setEducation', data)
    },
    async getPdf() {
        const response = await profile.getPdf(state.profile.profile_id)

        let blob = new Blob([response.data], { type: 'application/pdf' })
        let url = window.URL.createObjectURL(blob)
        return url
    }
}

const mutations = {
    setProfile(state, data) {

        state.profile = data.data
    },
    setInfo(state, data) {
        state.info = data.data
    },
    setSkills(state, data) {
        state.skills = data.data
    },
    setPortfolio(state, data) {
        state.portfolio = data.data
    },
    setExperience(state, data) {
        state.experience = data.data
    },
    setEducation(state, data) {
        state.education = data.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}