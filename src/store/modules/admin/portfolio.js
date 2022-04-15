import portfolio from '@/api/admin/portfolio'

const namespaced = true

const state = {
    portfolios: [],
    portfolio: {}
}

const getters = {
    getPortfolios: (state) => state.portfolios,
    getPortfolio: (state) => state.portfolio
}

const actions = {
    async fetchPortfolios({commit, rootState}, profileId) {
        const data = await portfolio.get(rootState.admin.user_id, profileId)

        if (data.code === 200) {
            commit('setPortfolios', data.data)
            commit('admin/setToast', {type: "success", message: "Portfolios fetched successfully"}, {root: true})
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
        }
    },

    async deletePortfolio({commit, rootState}, {profileId, portfolioId}) {
        const data = await portfolio.delete(rootState.admin.user_id, profileId, portfolioId)

        if (data.code === 200) {
            commit('removePortfolioFromArray', data.data)
            commit('admin/setToast', {type: "success", message: "Portfolio deleted"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async createPortfolio({commit, rootState}, {profileId, request}) {
        const data = await portfolio.create(rootState.admin.user_id, profileId, request)

        if (data.code === 200) {
            commit('addPortfolio', data.data)
            commit('admin/setToast', {type: "success", message: "Portfolio created successfully"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async uploadPortfolioImage({commit, rootState}, {profileId, portfolioId, fileData}) {
        const data = await portfolio.uploadImage(rootState.admin.user_id, profileId, portfolioId, fileData)

        if (data.code === 200) {
            commit('updatePortfolioInArray', data.data)
            commit('admin/setToast', {type: "success", message: "Portfolio image updated"}, {root: true})
            return true
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    },

    async updatePortfolio({commit, rootState}, {profileId, portfolioId, request}) {
        const data = await portfolio.update(rootState.admin.user_id, profileId, portfolioId, request)

        if (data.code === 200) {
            commit('updatePortfolioInArray', data.data)
            commit('admin/setToast', {type: "success", message: "Portfolio updated"}, {root: true})
            return true;
        } else {
            commit('admin/setToast', {type: "error", message: data.message}, {root: true})
            return false
        }
    }
}

const mutations = {
    setPortfolios(state, portfolios) {
        if (portfolios !== null) state.portfolios = portfolios
    },
    setPortfolio(state, portfolio) {
        state.portfolio = portfolio
    },
    addPortfolio(state, portfolio) {
        state.portfolios.push(portfolio)
    },
    // addImageToPortfolio(state, newPortfolio) {
    //     const index = state.portfolios.findIndex(portfolio => portfolio.portfolio_id === newPortfolio.portfolio_id)
    //     state.portfolios.splice(index, 1, newPortfolio)
    // },
    updatePortfolioInArray(state, updatedPortfolio) {
        const index = state.portfolios.findIndex(portfolio => portfolio.portfolio_id === updatedPortfolio.portfolio_id)
        state.portfolios.splice(index, 1, updatedPortfolio)
    },
    removePortfolioFromArray(state, deletedPortfolio) {
        const index = state.portfolios.findIndex(portfolio => portfolio.portfolio_id === deletedPortfolio.portfolio_id)
        state.portfolios.splice(index, 1)
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}