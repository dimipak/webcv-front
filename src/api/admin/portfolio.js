import api from "../api"

export default {
    get(userId, profileId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/portfolio'
        return api().get(url).then(data => data).catch(err => err)
    },
    show(userId, profileId, portfolioId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/portfolio/' + portfolioId
        return api().get(url).then(data => data).catch(err => err)
    },
    update(userId, profileId, portfolioId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/portfolio/' + portfolioId
        return api().put(url, request).then(data => data).catch(err => err)
    },
    delete(userId, profileId, portfolioId) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/portfolio/' + portfolioId
        return api().delete(url).then(data => data).catch(err => err)
    },
    create(userId, profileId, request) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/portfolio'
        return api().post(url, request).then(data => data).catch(err => err)
    },
    uploadImage(userId, profileId, portfolioId, fileData) {
        const url = '/user/' + userId + '/profiles/' + profileId + '/portfolio/' + portfolioId + '/image'
        const fd = new FormData()
        fd.append('portfolio_image', fileData)
        return api().post(url, fd).then(data => data).catch(err => err)
    }
}