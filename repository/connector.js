import axios from 'axios'
import TokensHelpers from '~/helpers/auth'

export default class Connector {
  constructor() {
    const baseURL = process.client ? '' : 'https://api.quwi.com'

    this.conn = axios.create({
      baseURL: baseURL + '/v2',
    })

    this.conn.interceptors.request.use((config) => {
      if (TokensHelpers.authToken()) {
        config.headers.Authorization = TokensHelpers.getAuthHeader()
      }
      return config
    })
  }
}
