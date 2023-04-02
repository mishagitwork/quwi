class TokensHelpers {
  authToken = () => localStorage.getItem('qToken')
  getAuthHeader = () => `Bearer ${this.authToken()}`
  setAuthToken = (token) => localStorage.setItem('qToken', token)
  removeAuthToken = () => localStorage.removeItem('qToken')
}

export default new TokensHelpers()
