import { Route } from 'f7router/route.js'
import { inject } from 'next-service'
import { ClassPage } from './class-page.js'

export class ClassRoute extends Route {
  static component = ClassPage

  @inject('userStore')
  userStore

  activate() {
    console.log('class activate')
  }

  deactivate() {
    console.log('class deactivate')
  }

  prepareEl(el) {
    el.user = this.userStore.currentUser
  }
}
