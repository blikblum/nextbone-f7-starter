import { container } from 'next-service'
import $$ from 'dom7'
import { Framework7 } from './setup/f7.js'
import './setup/all.js'

// Import Routes
import routes from './routes.js'
import { mapRoutes } from './common/f7router/index.js'

const { sessionService } = container

const app = new Framework7({
  root: '#app', // App root element

  name: 'Nextbone Starter', // App name
  theme: 'md', // Automatic theme detection
  sortable: {
    moveElements: false,
  },
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    }
  },

  // App root methods
  methods: {
    helloWorld() {
      app.dialog.alert('Hello World!')
    },

    async asyncAction(action) {
      try {
        app.preloader.show()
        const result = await action()
        app.preloader.hide()
        return result
      } catch (error) {
        app.preloader.hide()
        const toast = app.toast.create({
          text: `${error}`,
          destroyOnClose: true,
          closeButton: true,
        })
        toast.open()
      }
      return undefined
    },
  },
  routes: mapRoutes(routes),
})

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  const username = $$('#my-login-screen [name="username"]').val()
  const password = $$('#my-login-screen [name="password"]').val()

  // Close login screen
  app.loginScreen.close('#my-login-screen')

  // Alert username and password
  app.dialog.alert(`Username: ${username}<br>Password: ${password}`)
})

const mainView = app.views.create('.view-main', {
  url: '/login/',
})
