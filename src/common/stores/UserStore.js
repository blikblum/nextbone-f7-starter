const { service } = require('next-service')
const { Events } = require('nextbone')

@service('userStore')
class UserStore extends Events {
  currentUser = { name: 'Luiz', email: 'xxx@gmail.com' }
}
