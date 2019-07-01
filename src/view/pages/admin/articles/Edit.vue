<template>

    <div>
        <Loader/>
        <AdminTopHeader/>
        <AdminTopHeaderSide/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5 text-center">
                        <h1>{{$ml.get('control_panel')}} </h1>
                        <h3 class="card-title">( {{$ml.get('articles')}} )</h3>
                        <div class="card">
                            <div class="card-body text-right">
                                <div class="btn-group">
                                    <router-link :to="{ name: 'all_articles'}"
                                                 class="btn btn-primary"
                                                 tag="a" active-class="actives"
                                                 exact-active-class="active">{{$ml.get('all')}}
                                    </router-link>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="form_contact ">
                <form
                        id="form"
                        @submit="postarticles"
                        method="post">
                    <div class="row">
                        <div class="col-md-3">
                            <label>{{$ml.get('title_ar')}}</label>
                            <input type="text" class="input" v-model="title_ar" name="title_ar" required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3">
                            <label>{{$ml.get('title_en')}}</label>
                            <input type="text" class="input" v-model="title_en" name="title_en" required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3">
                            <label>{{$ml.get('slug')}}</label>
                            <input type="text" class="input" v-model="slug" name="slug" required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3">
                            <label>{{$ml.get('images')}}</label>
                            <input type="file" class="input" name="images" ref="images"
                                   autocomplete="off">
                            <a v-for="(image ,key) in images" :href="image.fileName" target="_blank"
                               class="text-primary" :key="key">
                                <br>
                                <i class="fas fa-image"></i>
                                <b> عرض الصورة الحالية</b>
                                <!--                                    <img :src="image.fileName" width="50%" class="mt-2" alt="">-->
                            </a>
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('date')}}</label>
                            <flat-pickr class="input" v-model="date" required></flat-pickr>
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('publisher_name_ar')}}</label>
                            <input type="text" class="input" v-model="publisher_name_ar" name="publisher_name_ar"
                                   required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('publisher_name_en')}}</label>
                            <input type="text" class="input" v-model="publisher_name_en" name="publisher_name_en"
                                   required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-12"></div>
                        <div class="col-md-6 mt-5">
                            <label>{{$ml.get('description_ar')}}</label>
                            <vue-editor v-model="description_ar"></vue-editor>
                        </div>
                        <div class="col-md-6 mt-5">
                            <label>{{$ml.get('description_en')}}</label>
                            <vue-editor v-model="description_en"></vue-editor>
                        </div>
                        <div class="col-md-12 text-center">
                            <button class="primary-button mt-2">{{$ml.get('submit')}}</button>
                        </div>
                        <div class="col-md-12">
                            <hr>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // import css files
    import '@/assets/css/bootstrap.min.css';
    import '@/assets/css/bootstrap-rtl.css';
    import '@/assets/css/style.css';
    import '@/assets/css/swiper.min.css';
    import '@/assets/js/packages/core/main.css';
    import '@/assets/js/packages/daygrid/main.css';
    import '@/assets/css/ar.css';

    // register import components files
    import Loader from '../../../components/mainComponents/Loader'
    import AdminTopHeader from '../../../components/mainComponents/AdminTopHeader'
    import AdminTopHeaderSide from '../../../components/mainComponents/AdminTopHeaderSide'
    import MainPage from '../../../components/adminComponents/MainPage'
    import Footer from '../../../components/mainComponents/Footer'

    // Import the editor
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes';

    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';
    import {VueEditor} from "vue2-editor";
    import flatPickr from 'vue-flatpickr-component';

    import 'vue-toast-notification/dist/index.css';
    import 'flatpickr/dist/flatpickr.css';

    Vue.use(VueToast);

    export default {
        name: "Edit",
        components: {VueEditor, Loader, AdminTopHeader, AdminTopHeaderSide, MainPage, Footer, flatPickr},
        created() {
            let vm = this;
            vm.getarticles();
        },
        data() {
            return {
                title_ar: null,
                title_en: null,
                description_ar: null,
                description_en: null,
                publisher_name_ar: null,
                publisher_name_en: null,
                images: [],
                links: [],
                tags: [],
                date: new Date(),
                slug: null,
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{list: "ordered"}, {list: "bullet"}],
                    ["image", "code-block"]
                ]
            }
        },
        methods: {
            getarticles() {
                let vm = this;
                let id = vm.$route.params.article_id;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ARTICLES + '/' + id, {})
                    .then(response => {
                        let status = response.data.status;
                        let data = response.data.data;
                        console.log(data)
                        if (status) {
                            vm.title_ar = data.article.ar.title;
                            vm.publisher_name_ar = data.article.ar.publisher_name;
                            vm.description_ar = data.article.ar.description;

                            vm.title_en = data.article.en.title;
                            vm.publisher_name_en = data.article.en.publisher_name;
                            vm.description_en = data.article.en.description;
                            vm.slug = data.article.slug;
                            vm.date = data.article.date;
                            vm.images = data.article.images;
                            return;
                        }
                        vm.$router.push({name: 'all_articles'})
                    })
                    .catch(err => {

                    })
            },
            // articles_UPDATE
            postarticles(e) {
                let vm = this;
                let id = vm.$route.params.article_id;
                e.preventDefault();
                let formData = new FormData();
                let file = vm.$refs.images.files[0];
                vm.images = file;

                formData.append('images[0]', vm.images);
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                formData.append('description_ar', vm.description_ar);
                formData.append('description_en', vm.description_en);
                formData.append('slug', vm.slug);
                formData.append('publisher_name_ar', vm.publisher_name_ar);
                formData.append('publisher_name_en', vm.publisher_name_en);
                formData.append('date', vm.date);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.ARTICLE_UPDATE + '/' + id, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        let auth = response.data.auth;
                        let status = response.data.status;
                        let data = response.data.data;
                        // return;
                        if (!auth) {
                            // localStorage.removeItem('auth_token');
                            // vm.$router.push({name: 'login'});
                        }

                        if (status) {

                            Vue.$toast.open({
                                message: vm.$ml.get('_success'),
                                type: 'info'
                            });
                            // vm.first_name = null;
                            // vm.last_name = null;
                            // vm.comment = null;
                            // vm.subject = null;
                            vm.title_ar = null;
                            vm.title_en = null;
                            vm.description_ar = null;
                            vm.description_en = null;
                            vm.publisher_name_ar = null;
                            vm.publisher_name_en = null;
                            vm.date = new Date();
                            vm.slug = null;
                            vm.images = [];
                            vm.$router.push({name: 'all_articles'});
                        } else {
                            data.validation_errors.forEach(function (item, index) {
                                Vue.$toast.open({
                                    message: item.message,
                                    type: 'error'
                                });
                            })
                        }
                    })
                    .catch(err => {
                        Vue.$toast.open({
                            message: vm.$ml.get('_error'),
                            type: 'error'
                        });
                    })
            }
        }
    }
</script>

<style scoped>

</style>