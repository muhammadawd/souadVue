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
import MenuOrder from '../view/pages/admin/MenuOrder'

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

import AddCompetition from '../view/pages/admin/competitions/Add'
import AllCompetition from '../view/pages/admin/competitions/All'
import EditCompetition from '../view/pages/admin/competitions/Edit'
import FindCompetition from '../view/pages/admin/competitions/Find'

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
                title: 'غير موجود',
                guest: true
            }
        },
        {
            path: '/contact-us',
            name: 'contact_us',
            component: ContactUs,
            meta: {
                title: 'تواصل معنا',
                guest: true
            }
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs,
            meta: {
                title: 'عن الدار',
                guest: true
            }
        },
        {
            path: '/audio-playlist/:category/category',
            name: 'audios',
            component: Audios,
            meta: {
                title: 'صوتيات',
                guest: true
            }
        },
        {
            path: '/videos-playlist/:category/category',
            name: 'videos',
            component: Videos,
            meta: {
                title: 'فيديوهات',
                guest: true
            }
        },
        {
            path: '/gallery/:category/category',
            name: 'gallery',
            component: Gallery,
            meta: {
                title: 'معرض الصور',
                guest: true
            }
        },
        {
            path: '/books-list/:id',
            name: 'show_books',
            component: ShowBooks,
            meta: {
                title: 'اصدارات الدار',
                guest: true
            }
        },
        {
            path: '/books-list/:category/category',
            name: 'books',
            component: Books,
            meta: {
                title: 'اصدارات الدار',
                guest: true
            }
        },
        {
            path: '/news/:slug',
            name: 'show_news',
            component: ShowNews,
            meta: {
                title: 'اﻻخبار',
                guest: true
            }
        },
        {
            path: '/news/:category/category',
            name: 'news',
            component: News,
            meta: {
                title: 'اﻻخبار',
                guest: true
            }
        },
        {
            path: '/competitions/:id',
            name: 'show_competition',
            component: ShowCompetition,
            meta: {
                title: 'المسابقات',
                guest: true
            }
        },
        {
            path: '/competitions/:category/category',
            name: 'competitions',
            component: Competations,
            meta: {
                title: 'المسابقات',
                guest: true
            }
        },
        {
            path: '/written-peoms/:category/category',
            name: 'written_peoms',
            component: PeomsWritten,
            meta: {
                title: 'قصائد مكتوبة',
                guest: true
            }
        },
        {
            path: '/articles/:category/category',
            name: 'articles',
            component: Articles,
            meta: {
                title: 'مقالات',
                guest: true
            }
        },
        {
            path: '/activities/:category/category',
            name: 'activities',
            component: Activities,
            meta: {
                title: 'انشطة',
                guest: true
            }
        },
        {
            path: '/about-souad',
            name: 'about_person',
            component: AboutPerson,
            meta: {
                title: 'عن سعاد الصباحي',
                guest: true
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'الرئيسية',
                guest: true
            }
        },
        {
            path: '/admin/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'الدخول',
                guest: true
            }
        },
        {
            path: '/admin',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                title: 'لوحة التحكم - الرئيسية',
                requiresAuth: true
            }
        },
        {
            path: '/admin/menu_order',
            name: 'menu_order',
            component: MenuOrder,
            meta: {
                title: 'لوحة التحكم - القائمة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_news',
            name: 'add_news',
            component: AddNews,
            meta: {
                title: 'لوحة التحكم - اضافة خبر',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_news',
            name: 'all_news',
            component: AllNews,
            meta: {
                title: 'لوحة التحكم - جميع الاخبار',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_news/:news_id',
            name: 'edit_news',
            component: EditNews,
            meta: {
                title: 'لوحة التحكم - عرض خبر',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_books',
            name: 'add_books',
            component: AddBooks,
            meta: {
                title: 'لوحة التحكم - اضافة كتاب',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_books',
            name: 'all_books',
            component: AllBooks,
            meta: {
                title: 'لوحة التحكم - جميع الكتب',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_books/:book_id',
            name: 'edit_books',
            component: EditBooks,
            meta: {
                title: 'لوحة التحكم - تعديل كتاب',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_articles',
            name: 'add_articles',
            component: AddArticles,
            meta: {
                title: 'لوحة التحكم - اضافة مقال',
                requiresAuth: true,
            }
        },
        {
            path: '/admin/all_articles',
            name: 'all_articles',
            component: AllArticles,
            meta: {
                title:'لوحة التحكم - جميع المقالات',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_articles/:article_id',
            name: 'edit_articles',
            component: EditArticles,
            meta: {
                title: 'لوحة التحكم - تعديل مقال',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_poems',
            name: 'add_poems',
            component: AddPoems,
            meta: {
                title: 'لوحة التحكم - اضافة قصيدة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_poems',
            name: 'all_poems',
            component: AllPoems,
            meta: {
                title: 'لوحة التحكم - جميع القصائد',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_poems/:poem_id',
            name: 'edit_poems',
            component: EditPoems,
            meta: {
                title: 'لوحة التحكم - تعديل قصيدة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_activity',
            name: 'add_activity',
            component: AddActivity,
            meta: {
                title: 'لوحة التحكم - اضافة نشاط',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_activity',
            name: 'all_activity',
            component: AllActivity,
            meta: {
                title: 'لوحة التحكم - جميع النشاطات',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_activity/:activity_id',
            name: 'edit_activity',
            component: EditActivity,
            meta: {
                title: 'لوحة التحكم - تعديل نشاط',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_slider',
            name: 'add_slider',
            component: AddSlider,
            meta: {
                title: 'لوحة التحكم - اضافة سلايد',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_slider',
            name: 'all_slider',
            component: AllSlider,
            meta: {
                title: 'لوحة التحكم - جميع السلايدز',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_slider/:slider_id',
            name: 'edit_slider',
            component: EditSlider,
            meta: {
                title: 'لوحة التحكم - تعديل سلايد',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_competitions',
            name: 'add_competitions',
            component: AddCompetition,
            meta: {
                title: 'لوحة التحكم - اضافة مسابقة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_competitions',
            name: 'all_competitions',
            component: AllCompetition,
            meta: {
                title: 'لوحة التحكم - المسابقات',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_competitions/:competition_id',
            name: 'edit_competitions',
            component: EditCompetition,
            meta: {
                title: 'لوحة التحكم - تعديل مسابقة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/find_competition/:competition_id',
            name: 'find_competitions',
            component: FindCompetition,
            meta: {
                title: 'لوحة التحكم - عرض مسابقة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/add_audios',
            name: 'add_audios',
            component: AddAudio,
            meta: {
                title: 'لوحة التحكم - اضافة صوت',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_audios',
            name: 'all_audios',
            component: AllAudio,
            meta: {
                title: 'لوحة التحكم - صوتيات',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_audios/:audio_id',
            name: 'edit_audios',
            component: EditAudio,
            meta: {
                title: 'لوحة التحكم - تعديل صوت',
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_video',
            name: 'add_videos',
            component: AddVideo,
            meta: {
                title: 'لوحة التحكم - اضافة فيديو',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_videos',
            name: 'all_videos',
            component: AllVideo,
            meta: {
                title: 'لوحة التحكم - جميع الفيديوهات',
                requiresAuth: true
            }
        },
        {
            path: '/admin/edit_videos/:video_id',
            name: 'edit_videos',
            component: EditVideo,
            meta: {
                title: 'لوحة التحكم - تعديل فيديو',
                requiresAuth: true
            }
        },

        {
            path: '/admin/add_gallery',
            name: 'add_gallery',
            component: AddGallery,
            meta: {
                title: 'لوحة التحكم - اصافة صورة',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_gallery',
            name: 'all_gallery',
            component: AllGallery,
            meta: {
                title: 'لوحة التحكم - جميع الصور',
                requiresAuth: true
            }
        },

        {
            path: '/admin/all_about_us',
            name: 'all_about_us',
            component: AllAboutUs,
            meta: {
                title: 'لوحة التحكم - عن الدار',
                requiresAuth: true
            }
        },
        {
            path: '/admin/all_souad_about_us',
            name: 'all_souad_about_us',
            component: AllSouadAboutUs,
            meta: {
                title: 'لوحة التحكم - عن سعاد الصباحي',
                requiresAuth: true
            }
        },

    ]
});

/**
 * routes middleware
 */
router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    if (nearestWithTitle)document.title = nearestWithTitle.meta.title;
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
