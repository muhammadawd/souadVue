import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'english',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('english').create({
            languages: 'english language',
            site_name: 'Souad Alsabah',
            home_page: 'Home',
            activities: 'Activities',
            poems_written: 'Poems written',
            news: 'News',
            articles: 'Articles',
            competitions: 'Competitions',
            dar_versions: 'Eldar Versions',
            gallery: 'Gallery',
            videos: 'Videos',
            audios: 'Audios',
            about_us: 'About US',
            contact_us: 'Contact Us',
            search_placeholder: 'Search here ... ',
        }),

        new MLanguage('arabic').create({
            languages: 'اللغة العربية',
            site_name: 'سعاد الصباح',
            home_page: 'الرئيسية',
            activities: 'الانشطة',
            poems_written: 'قصائد مكتوبة',
            news: 'الاخبار',
            articles: 'المقالات',
            competitions: 'المسابقات',
            dar_versions: 'اصدارات الدار',
            gallery: 'معرض الصور',
            videos: 'فيديوهات',
            audios: 'صوتيات',
            about_us: 'عن الدار',
            contact_us: 'اتصل بنا',
            search_placeholder: 'اكتب كلمة البحث ..',
        })
    ]
})