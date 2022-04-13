import api from "../api"

export default {

    get(userId) {
        const url = '/user/' + userId + '/profiles'
        return api().get(url).then(data => data).catch(err => err)
    },

    activate(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/activate'
        return api().put(url).then(data => data).catch(err => err)
    },

    create(userId, requestData) {
        const url = '/user/' + userId + '/profiles/create'
        return api().post(url, requestData).then(data => data).catch(err => err)
    },

    uploadProfileImage(userId, profileId, fileData) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/profile-image'
        const fd = new FormData()
        fd.append('profile_image', fileData)
        return api().post(url, fd).then(data => data).catch(err => err)
    },

    show(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId
        return api().get(url).then(data => data).catch(err => err)
    },

    update(userId, profileId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId
        return api().put(url, request).then(data => data).catch(err => err)
    },

    delete(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId
        return api().delete(url).then(data => data).catch(err => err)
    }
}