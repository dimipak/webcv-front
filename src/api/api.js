import axios from "axios"
import success from "../interceptors/response/success";
import failure from "../interceptors/response/failure"

export default () => {
    const api = axios.create({
        baseURL: process.env.VUE_APP_ADMIN_API_URL,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    })

    api.interceptors.response.use(success, failure)

    return api
}