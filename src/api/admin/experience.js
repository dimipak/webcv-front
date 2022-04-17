import api from "../api"

export default {
    get(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/experiences'
        return api().get(url).then(data => data).catch(err => err)
    },
    show(userId, profileId, experienceId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId
        return api().get(url).then(data => data).catch(err => err)
    },
    update(userId, profileId, experienceId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId
        return api().put(url, request).then(data => data).catch(err => err)
    },
    delete(userId, profileId, experienceId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId
        return api().delete(url).then(data => data).catch(err => err)
    },
    create(userId, profileId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/experiences'
        return api().post(url, request).then(data => data).catch(err => err)
    }
}