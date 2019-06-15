/*
|--------------------------------------------------------------------------
| Imports
|--------------------------------------------------------------------------
|
| Here is where you can import your dependencies.
|
*/
import Vue from 'vue'
import Router from 'vue-router'
/*
|--------------------------------------------------------------------------
| Components
|--------------------------------------------------------------------------
|
| Here is where you can register components for routes for your application.
| so you can using component in routes to be navigated
|
*/
import Home from '../view/pages/Home'
import AboutUs from '../view/pages/AboutUs'

/**
 * register packages
 */
Vue.use(Router)

/**
 * app routes
 * @type {VueRouter}
 */
let router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/about_us',
            name: 'about_us',
            component: AboutUs,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
    ]
})

/**
 * routes middleware
 */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/Login',
                params: {nextUrl: to.fullPath}
            })

        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwt') == null) {
            next()
        } else {
            next({name: 'Home'})
        }
    } else {
        next()
    }
})

export default router
