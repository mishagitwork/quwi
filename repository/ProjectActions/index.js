import { handleError } from '~/helpers/errors'

export default class ProjectActions {
  constructor(connector) {
    this.connector = connector
  }

  getList = async (query) => {
    const result = {
      value: false,
      error: null,
    }

    try {
      const response = await this.connector.conn.get(`/projects-manage`, query)

      result.value = response.data
    } catch (e) {
      handleError(e?.response)
      result.error = e?.response?.data
    }

    return result
  }

  update = async (id, body) => {
    const result = {
      value: false,
      error: null,
    }

    try {
      const response = await this.connector.conn.post(
        `/projects-manage/update?id=${id}`,
        body
      )
      result.value = response.data
    } catch (e) {
      handleError(e?.response)
      result.error = e?.response?.data
    }

    return result
  }
}
