import AuthActions from './AuthActions'
import Connector from './connector'
import ProjectActions from './ProjectActions'

export default class Repository {
  constructor(context) {
    this.connector = new Connector()
    this.AuthActions = new AuthActions(this.connector)
    this.ProjectActions = new ProjectActions(this.connector)
  }
}
