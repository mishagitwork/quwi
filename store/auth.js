import TokensHelpers from '~/helpers/auth'

export const state = () => ({
  isLoggedIn: process.client ? !!TokensHelpers.authToken() : false,
})

export const mutations = {
  setIsLoggedIn(state, value) {
    state.isLoggedIn = value
  },
}
