import {store} from "../store"

export default function setUserId() {

    const token = localStorage.getItem('access_token')

    if (token == null) return false

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    const userId = payload["user_id"]

    // console.log("middleware!: user id = ", userId)

    if (typeof userId == "number" && userId > 0) {
        store.commit('admin/setUserId', userId)
        return true
    }

    return false
}