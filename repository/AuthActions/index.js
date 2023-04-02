import { handleError } from '~/helpers/errors'

export default class AuthActions {
  constructor(connector) {
    this.connector = connector
  }

  signIn = async (form) => {
    const result = {
      value: false,
      error: null,
    }

    try {
      const response = await this.connector.conn.post(`/auth/login`, form)

      result.value = response.data
    } catch (e) {
      handleError(e?.response)
      result.error = e?.response
    }

    return result
  }

  logout = async () => {
    const result = {
      value: false,
      error: null,
    }

    try {
      const response = await this.connector.conn.post(`/auth/logout`, {})

      result.value = response.data
    } catch (e) {
      handleError(e?.response)
      result.error = e?.response
    }

    return result
  }
}
