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

import Login from '../view/pages/admin/Login'
import Dashboard from '../view/pages/admin/Dashboard'

import AddNews from '../view/pages/admin/news/Add'
import AllNews from '../view/pages/admin/news/All'
import EditNews from '../view/pages/admin/news/Edit'

import AddBooks from '../view/pages/admin/books/Add'
import AllBooks from '../view/pages/admin/books/All'
import EditBooks from '../view/pages/admin/books/Edit'

import AddArticles from '../view/pages/admin/articles/Add'
import AllArticles from '../view/pages/admin/articles/All'
import EditArticles from '../view/pages/admin/articles/Edit'

import AddPoems from '../view/pages/admin/peoms/Add'
import AllPoems from '../view/pages/admin/peoms/All'
import EditPoems from '../view/pages/admin/peoms/Edit'

import AddActivity from '../view/pages/admin/activities/Add'
import AllActivity from '../view/pages/admin/activities/All'
import EditActivity from '../view/pages/admin/activities/Edit'

import AddAudio from '../view/pages/admin/sound/Add'
import AllAudio from '../view/pages/admin/sound/All'
import EditAudio from '../view/pages/admin/sound/Edit'

import AddVideo from '../view/pages/admin/video/Add'
import AllVideo from '../view/pages/admin/video/All'
import EditVideo from '../view/pages/admin/video/Edit'

import AddSlider from '../view/pages/admin/slider/Add'
import AllSlider from '../view/pages/admin/slider/All'
import EditSlider from '../view/pages/admin/slider/Edit'

import AddGallery from '../view/pages/admin/gallery/Add'
import AllGallery from '../view/pages/admin/gallery/All'

import AllAboutUs from '../view/pages/admin/about_us/All'
import AllSouadAboutUs from '../view/pages/admin/about_us_souad/All'

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
                guest: true
            }
        },
        {
            path: '/contact-us',
            name: 'contact_us',
            component: ContactUs,
            meta: {
                guest: true
            }
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs,
            meta: {
                guest: true
            }
        },
        {
            path: '/audio-playlist',
            name: 'audios',
            component: Audios,
            meta: {
                guest: true
            }
        },
        {
            path: '/videos-playlist',
            name: 'videos',
            component: Videos,
            meta: {
                guest: true
            }
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery,
            meta: {
                guest: true
            }
        },
        {
            path: '/books-list/:id',
            name: 'show_books',
            component: ShowBooks,
            meta: {
                guest: true
            }
        },
        {
            path: '/books-list',
            name: 'books',
            component: Books,
            meta: {
                guest: true
            }
        },
        {
            path: '/news/:slug',
            name: 'show_news',
            component: ShowNews,
            meta: {
                guest: true
            }
        },
        {
            path: '/news',
            name: 'news',
            component: News,
            meta: {
                guest: true
            }
        },
        {
            path: '/competitions/:id',
            name: 'show_competition',
            component: ShowCompetition,
            meta: {
                guest: true
            }
        },
        {
            path: '/competitions',
            name: 'competitions',
            component: Competations,
            meta: {
                guest: true
            }
        },
        {
            path: '/written-peoms',
            name: 'written_peoms',
            component: PeomsWritten,
            meta: {
                guest: true
            }
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
            meta: {
                guest: true
            }
        },
        {
            path: '/activities',
            name: 'activities',
            component: Activities,
            meta: {
                guest: true
            }
        },
        {
            path: '/about-souad',
            name: 'about_person',
            component: AboutPerson,
            meta: {
                guest: true
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                guest: true
            }
        },
        {
            path: '/admin/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: '/admin',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_news',
            name: 'add_news',
            component: AddNews,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_news',
            name: 'all_news',
            component: AllNews,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_news/:news_id',
            name: 'edit_news',
            component: EditNews,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_books',
            name: 'add_books',
            component: AddBooks,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_books',
            name: 'all_books',
            component: AllBooks,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_books/:book_id',
            name: 'edit_books',
            component: EditBooks,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_articles',
            name: 'add_articles',
            component: AddArticles,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_articles',
            name: 'all_articles',
            component: AllArticles,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_articles/:article_id',
            name: 'edit_articles',
            component: EditArticles,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_poems',
            name: 'add_poems',
            component: AddPoems,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_poems',
            name: 'all_poems',
            component: AllPoems,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_poems/:poem_id',
            name: 'edit_poems',
            component: EditPoems,
            meta: {
                requiresAuth: true
            }
        },


        {
            path: '/admin/add_activity',
            name: 'add_activity',
            component: AddActivity,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_activity',
            name: 'all_activity',
            component: AllActivity,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_activity/:activity_id',
            name: 'edit_activity',
            component: EditActivity,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_slider',
            name: 'add_slider',
            component: AddSlider,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_slider',
            name: 'all_slider',
            component: AllSlider,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_slider/:slider_id',
            name: 'edit_slider',
            component: EditSlider,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_audios',
            name: 'add_audios',
            component: AddAudio,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_audios',
            name: 'all_audios',
            component: AllAudio,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_audios/:audio_id',
            name: 'edit_audios',
            component: EditAudio,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_video',
            name: 'add_videos',
            component: AddVideo,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_videos',
            name: 'all_videos',
            component: AllVideo,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_videos/:video_id',
            name: 'edit_videos',
            component: EditVideo,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_gallery',
            name: 'add_gallery',
            component: AddGallery,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_gallery',
            name: 'all_gallery',
            component: AllGallery,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/admin/all_about_us',
            name: 'all_about_us',
            component: AllAboutUs,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_souad_about_us',
            name: 'all_souad_about_us',
            component: AllSouadAboutUs,
            meta: {
                requiresAuth: true
            }
        },

    ]
});

/**
 * routes middleware
 */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('auth_token') == null) {
            next({name: 'login', params: {nextUrl: to.fullPath}})
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router
