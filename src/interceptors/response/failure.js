import {store} from "../../store"


export default async (error) => {
    if (error.response !== undefined) {
        const data = error.response.data
        if (data.code === 401) {
            await store.dispatch('admin/logout')
        }
        return Promise.reject(data)
    } else {
        console.log("intercept network error")
    }
    return Promise.reject(error)
}