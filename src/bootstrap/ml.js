import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ar',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('en').create({
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
            about_us: 'About',
            contact_us: 'Contacts',
            search_placeholder: 'Search here ... ',
            latest_versions: 'Latest Versions',
            socail_media: 'Social Media',
            show_news: 'See Our News',
            latest_news: 'Latest News',
            more: 'More',
            current_news: 'Current News',
            all_rights: 'All Rights Are Reserved',
            tags: 'Tags',
            footer_p: 'We are happy to contact you now',
            email: 'Email',
            type_email: 'Type Your Email',
            subscribe_p: 'You can now subscribe to the email service',
            subscribe_now: 'Subscribe Now',
            activity_calendar: 'Activity Calendar',
            add_comment: 'Add Comment',
            type_first_name: 'Type First Name',
            type_last_name: 'Type Last Name',
            type_subject: 'Type Subject',
            download: 'Download',
            view: 'View',
            type_comment: 'Type Comment',
            share_facebook: 'Share Now',
            share_twitter: 'Share Now',
            current_competition: 'Current competition',
            previous_competition: 'Previous Competition',
            competition_name: 'Competition Name',
            competition_time: 'Competition Time',
            competition_location: 'Competition Locaiton',
            winner_name: 'Winnner Name',
            type_phone: 'Type Phone',
            no_data: 'No Data',
            _error: 'Errors Happened',
            _success: 'Success Happened',
            filter: 'Filter Search',
            tweet: 'Tweets',
            login: 'Login',
        }),

        new MLanguage('ar').create({
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
            latest_versions: 'احدث الاصدارات ',
            socail_media: 'وسائل التواصل الاجتماعي',
            show_news: 'مشاهدة الاخبار',
            latest_news: 'اخر الاخبار',
            more: 'المزيد',
            current_news: 'الخبر الحالى',
            all_rights: 'جميع الحقوق محفوظة',
            tags: 'علامات',
            footer_p: 'يسعدنا تواصلك معنا',
            email: 'البريد الالكتروني',
            type_email: 'اكتب بريدك الالكتروني',
            subscribe_p: 'يمكنك الان الاشترك فى خدمة الرسائل الالكترونية',
            subscribe_now: 'اشترك الان',
            activity_calendar: 'مفكرة انشطة',
            add_comment: 'اضف تعليقا',
            type_first_name: 'اكتب الاسم الاول',
            type_last_name: 'اكتب الاسم الاخير',
            type_subject: 'اكتب الموضوع',
            download: 'تحميل',
            view: 'عرض',
            type_comment: 'اكتب تعليقك',
            share_facebook: 'شارك الان',
            share_twitter: 'شارك الان',
            current_competition: 'المسابقة الحالية',
            previous_competition: 'المسابقات السابقة',
            competition_name: 'اسم المسابقة',
            competition_time: 'الوقت',
            competition_location: 'المكان',
            winner_name: 'اسم الفائز',
            type_phone: 'اكتب رقم الهاتف  ',
            no_data: 'ﻻ توجد بيانات  ',
            _error: 'حدث خطأ',
            _success: 'تمت العملية بنجاح',
            filter: 'تصفية البحث',
            tweet: 'منشورات تويتر',
            login: 'تسجيل الدخول',
            //
            username: 'اسم المستخدم',
            password: 'كلمة المرور',
            login_btn: 'دخول',
            add: 'اضافة',
            all: 'عرض الجميع',
            control_panel: 'لوحة التحكم  ',
            title: 'العنوان',
            author: 'الناشر',
            date: 'التاريخ',
            yes: 'نعم',
            no: 'ﻻ',
            are_you_sure: 'هل انت متأكد',
            title_ar: 'العنوان بالعربية',
            title_en: 'العنوان بالانجليزية',
            description_ar: 'الوصف بالعربية',
            description_en: 'الوصف بالانجليزية',
            publisher_name_ar: 'اسم الناشر بالعربية',
            publisher_name_en: 'اسم الناشر بالانجليزية',
            slug: 'اسم الرابط',
            sound: 'ملف صوت',
            image: 'صورة',
            images: 'صورة',
            frame: 'تضمين الفيديو',
            submit: 'تأكيد',
            location_ar: 'عنوان الموقع بالعربية',
            location_en: 'عنوان الموقع بالانجليزية',
            phone: 'الهاتف',
            facebook: 'رابط فيسبوك',
            twitter: 'رابط تويتر',
            instagram: 'رابط انستجرام',
            map: 'تضمين الخريطة',
            book: 'ملف الكتاب',
            books: 'الكتب  ',
            file: 'الملف',
            description: 'الوصف',
            slider: 'السلايد شو',
        })
    ]
})