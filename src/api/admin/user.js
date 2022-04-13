import api from "../api"

export default {
    login(username, password) {
        const request = {
            username,
            password
        }
        return api().post('/login', request).then(data => data).catch(err => err)
    }
}