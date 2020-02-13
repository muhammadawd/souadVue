module.exports = {
    BASE_URL: 'http://souad-alsabah.com:3333/api',
    // BASE_URL: 'http://approc.com:3333/api',
    // BASE_URL: 'http://172.81.117.216:3333/api',
    // BASE_URL: 'http://3.92.38.153:3336/api',
    // BASE_URL: 'http://192.168.1.100:3333/api',

    NEWS_PAGE: '/news/all-paginated',
    NEWS_ALL: '/news',
    NEWS_CREATE: '/news/store',
    NEWS_UPDATE: '/news/update',
    NEWS_DELETE: '/news/delete',
    NEWS_SLUG: '/news/slug/find',
    NEWS_COMMENT: '/news-comment/store',

    GALLERY_ALL: '/gallery/all-paginated',
    GALLERY_CREATE: '/gallery/store',
    GALLERY_DELETE: '/gallery/delete',

    BOOKS: '/book',
    BOOKS_CREATE: '/book/store',
    BOOK_UPDATE: '/book/update',
    BOOKS_DELETE: '/book/delete',
    BOOKS_ALL: '/book/all-paginated',
    BOOK_Find: '/book',
    BOOK_FILE: '/book/get-file',

    VIDEO_ALL: '/video/all-paginated',
    VIDEO_FIND: '/video',
    VIDEO_CREATE: '/video/store',
    VIDEO_UPDATE: '/video/update',
    VIDEO_DELETE: '/video/delete',

    AUDIO_ALL: '/sound/all-paginated',
    AUDIO_FIND: '/sound',
    AUDIO_CREATE: '/sound/store',
    AUDIO_UPDATE: '/sound/update',
    AUDIO_DELETE: '/sound/delete',

    ARTICLE_ALL: '/article/all-paginated',
    ARTICLES: '/article',
    ARTICLE_CREATE: '/article/store',
    ARTICLE_UPDATE: '/article/update',
    ARTICLE_DELETE: '/article/delete',

    POEM_FIND: '/poem',
    POEM_ALL: '/poem/all-paginated',
    POEM_CREATE: '/poem/store',
    POEM_UPDATE: '/poem/update',
    POEM_DELETE: '/poem/delete',

    ACTIVITY_ALL: '/activity/all-paginated',
    ACTIVITY_FIND: '/activity',
    ACTIVITY_CREATE: '/activity/store',
    ACTIVITY_UPDATE: '/activity/update',
    ACTIVITY_DELETE: '/activity/delete',

    COMPETITIONS: '/competition',
    COMPETITION_CREATE: '/competition/store',
    COMPETITION_UPDATE: '/competition/update',
    COMPETITION_DELETE: '/competition/delete',
    COMPETITION_FINISH: '/competition/competition-finish',
    COMPETITION_WINNER: '/competition/winner-competition',
    COMPETITION_REMOVE_WINNER: '/competition/remove-winner-competition',
    COMPETITIONS_ALL: '/competition/all-paginated',
    COMPETITION_APPLICATION: '/competition/apply-competition',
    COMPETITIONS_FINISHED_ALL: '/competition/finished/all-paginated',
    COMPETITIONS_AVAILABLE_ALL: '/competition/available/all-paginated',

    ABOUT_SOAUD: '/about/get-about',
    ABOUT_UPDATE_SOUAD: '/about/update-about',

    ABOUT_ALL: '/about',
    ABOUT_UPDATE: '/about/update',
    ABOUT_IMAGE_DELETE: '/about-image/delete',

    SLIDER_ALL: '/slider',
    SLIDER_FIND: '/slider',
    SLIDER_CREATE: '/slider/store',
    SLIDER_UPDATE: '/slider/update',
    SLIDER_DELETE: '/slider/delete',

    SUBSCRIBE_ALL: '/subscribe/all-paginated',
    SUBSCRIBE: '/subscribe/store',

    GET_DATES: '/utility/get-dates',
    NAV_BAR_UPDATE: '/utility/update-category',
    NAV_BAR_DELETE: '/utility/delete-category', // key , category

    LOGIN: '/user/login',

    NAV_BAR_ORDER: '/navbar/update',
    NAV_BAR: '/navbar',

    AUTO_COMPLETE_NEWS: '/news/category',
    AUTO_COMPLETE_BOOK: '/book/category',
    AUTO_COMPLETE_VIDEO: '/video/category',
    AUTO_COMPLETE_SOUND: '/sound/category',
    AUTO_COMPLETE_POEM: '/poem/category',
    AUTO_COMPLETE_ACTIVITY: '/activity/category',
    AUTO_COMPLETE_ARTICLE: '/article/category',
    AUTO_COMPLETE_GALLERY: '/gallery/category',
    AUTO_COMPLETE_COMPETITION: '/competition/category',
};
