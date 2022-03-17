import axios from "axios"

const api = process.env.VUE_APP_ADMIN_API_URL

export default {
    async login(username, password) {
        const request = {
            username: username,
            password: password
        }

        let data
        try {
            const result = await axios.post(api + '/login', request)
            data = result.data
        } catch (e) {
            data = e.response.data
        }

        return data
    },

    async getUserProfiles(userId) {
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('access_token'),
            }
        }

        let data;
        try {
            const result = await axios.get(api + '/user/' + userId + '/profiles', config)
            data = result.data
            console.log("axios success", data)
        } catch (error) {
            // console.log("axios error", error)
            data = error.response.data
            console.log("axios error response", data)
        }

        return data
    },

    async activateUserProfile(userId, profileId) {
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            }
        }

        let data;
        try {
            const result = await axios.put(api + '/user/' + userId + '/profiles/' + profileId + '/activate', {foo: "bar"}, config)
            data = result.data
            console.log("axios success", data)
        } catch (error) {
            // console.log("axios error", error)
            data = error.response.data
            console.log("axios error response", data)
        }

        return data
    },

    async createUserProfile(userId, requestData) {
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            }
        }

        let data;
        try {
            const result = await axios.post(api + '/user/' + userId + '/profiles/create', requestData, config)
            data = result.data
            console.log("axios success", data)
        } catch (error) {
            data = error.response.data
            console.log("axios error response", data)
        }

        return data
    },

    async uploadProfileImage(userId, profileId, fileData) {
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            }
        }

        const fd = new FormData()

        fd.append('img', fileData)

        let data
        try {
            const result = await axios.post(api + '/user/' + userId + '/profiles/' + profileId + '/profile-image', fd, config)
            data = result.data
            console.log("axios success", data)
        } catch (error) {
            data = error.response.data
            console.log("axios error message", data)
        }

        return data
    },

    async getUserProfile(userId, profileId) {
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            }
        }

        let data
        try {
            const result = await axios.get(api + '/user/' + userId + '/profiles/' + profileId, config)
            data = result.data
            console.log("axios success", data)
        } catch (error) {
            data = error.response.data
            console.log("axios error message", data)
        }

        return data
    }
}