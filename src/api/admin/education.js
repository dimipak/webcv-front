import api from "../api"

export default {
    get(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/educations'
        return api().get(url).then(data => data).catch(err => err)
    },
    show(userId, profileId, educationId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/educations/' + educationId
        return api().get(url).then(data => data).catch(err => err)
    },
    update(userId, profileId, educationId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/educations/' + educationId
        return api().put(url, request).then(data => data).catch(err => err)
    },
    delete(userId, profileId, educationId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/educations/' + educationId
        return api().delete(url).then(data => data).catch(err => err)
    },
    create(userId, profileId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/educations'
        return api().post(url, request).then(data => data).catch(err => err)
    }
}