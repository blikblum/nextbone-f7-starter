import { ClassRoute } from './pages/class/ClassRoute.js'

//
import { HomePage } from './pages/home-page.js'
import { DynamicPage } from './pages/dynamic-page.js'
import { RequestAndLoad } from './pages/request-and-load-page.js'

// use tag name as component
import './pages/form-page.js'
import './pages/about-page.js'
import './pages/auto-init-page.js'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: 'about-page',
  },
  {
    path: '/form/',
    component: 'form-page',
  },
  {
    path: '/auto-init/',
    component: 'auto-init-page',
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicPage,
  },
  {
    path: '/class-route/',
    class: ClassRoute,
  },
  {
    path: '/request-and-load/user/:userId/',
    async(routeTo, routeFrom, resolve, reject) {
      // Router instance
      const router = this

      // App instance
      const { app } = router

      // Show Preloader
      app.preloader.show()

      // User ID from request
      const { userId } = routeTo.params

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        const user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ],
        }
        // Hide Preloader
        app.preloader.hide()

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user,
            },
          }
        )
      }, 1000)
    },
  },
  {
    path: '(.*)',
    content: `<div class="page">
    <div class="navbar">
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">Not found</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block block-strong">
        <p>Sorry</p>
        <p>Requested content not found.</p>
      </div>
    </div>
  </div>`,
  },
]

export default routes
