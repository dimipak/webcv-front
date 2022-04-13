import api from "../api"

export default {
    get(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/skills'
        return api().get(url).then(data => data).catch(err => err)
    },
    updateOrder(userId, profileId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/skills'
        return api().put(url, request).then(data => data).catch(err => err)
    },
    show(userId, profileId, skillId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/skills/' + skillId
        return api().get(url).then(data => data).catch(err => err)
    },
    update(userId, profileId, skillId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/skills/' + skillId
        return api().put(url, request).then(data => data).catch(err => err)
    },
    delete(userId, profileId, skillId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/skills/' + skillId
        return api().delete(url).then(data => data).catch(err => err)
    },
    create(userId, profileId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/skills'
        return api().post(url, request).then(data => data).catch(err => err)
    }
}