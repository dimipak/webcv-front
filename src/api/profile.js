import axios from "axios"

const api = process.env.VUE_APP_API_URL

export default {
    async getActiveProfile() {
        const result = await axios.get(api + '/profile/active')
        return result.data
    },

    async getProfileInfo(profileId) {
        const result = await axios.get(api + '/profile/' + profileId + '/info')
        return result.data
    },

    async getProfileSkills(profileId) {
        const result = await axios.get(api + '/profile/' + profileId + '/skills')
        return result.data
    },

    async getProfilePortfolio(profileId) {
        const result = await axios.get(api + '/profile/' + profileId + '/portfolio')
        return result.data
    },

    async getProfileExperience(profileId) {
        const result = await axios.get(api + '/profile/' + profileId + '/experience')
        return result.data
    },
    async getProfileEducation(profileId) {
        const result = await axios.get(api + '/profile/' + profileId + '/education')
        return result.data
    },
    async getPdf(profileId) {
        const result = await axios.get(api + '/profile/' + profileId + '/pdf', {responseType: 'blob'})
        return result
    }
}