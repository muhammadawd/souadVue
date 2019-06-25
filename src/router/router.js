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
import Audios from '../view/pages/Audios'
import Videos from '../view/pages/Videos'
import Gallery from '../view/pages/Gallery'
import Books from '../view/pages/Books'
import ContactUs from '../view/pages/ContactUs'
import News from '../view/pages/News'
import ShowNews from '../view/pages/ShowNews'
import AboutPerson from '../view/pages/AboutPerson'
import ShowBooks from '../view/pages/ShowBooks'
import Activities from '../view/pages/Activities'
import PeomsWritten from '../view/pages/PeomsWritten'
import Articles from '../view/pages/Articles'
import Competations from '../view/pages/Competations'
import ShowCompetition from '../view/pages/ShowCompetition'

import PageNotFound from '../view/errors/PageNotFound'

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
            path: "*",
            component: PageNotFound,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/contact-us',
            name: 'contact_us',
            component: ContactUs,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/audio-playlist',
            name: 'audios',
            component: Audios,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/videos-playlist',
            name: 'videos',
            component: Videos,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/books-list/:id',
            name: 'show_books',
            component: ShowBooks,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/books-list',
            name: 'books',
            component: Books,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/news/:slug',
            name: 'show_news',
            component: ShowNews,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/news',
            name: 'news',
            component: News,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/competitions/:id',
            name: 'show_competition',
            component: ShowCompetition,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/competitions',
            name: 'competitions',
            component: Competations,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/written-peoms',
            name: 'written_peoms',
            component: PeomsWritten,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/activities',
            name: 'activities',
            component: Activities,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/about-souad',
            name: 'about_person',
            component: AboutPerson,
            meta: {
                requiresAuth: false,
                guest: true
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: false,
                guest: true
            }
        }
    ]
});

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
