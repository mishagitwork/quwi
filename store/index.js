import TokensHelpers from '~/helpers/auth'

export const actions = {
  nuxtClientInit({ commit }) {
    commit('auth/setIsLoggedIn', !!TokensHelpers.authToken(), {
      root: true,
    })
  },
}
