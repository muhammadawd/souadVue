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
                        <h3 class="card-title">( {{$ml.get('books')}} )</h3>
                        <div class="card">
                            <div class="card-body text-right">
                                <div class="btn-group">
                                    <router-link :to="{ name: 'all_books'}"
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
                        @submit="postbooks"
                        method="post">
                    <div class="row">
                        <div class="col-md-3">
                            <label>{{$ml.get('title_ar')}}</label>
                            <input type="text" class="input" v-model="title_ar" name="title_ar" required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3">
                            <label>{{$ml.get('title_en')}}</label>
                            <input type="text" class="input" v-model="title_en" name="title_en"
                                   autocomplete="off">
                        </div>
                        <!--                        <div class="col-md-3">-->
                        <!--                            <label>{{$ml.get('author')}}</label>-->
                        <!--                            <input type="text" class="input" v-model="author" name="author" required-->
                        <!--                                   autocomplete="off">-->
                        <!--                        </div>-->
                        <div class="col-md-3 ">
                            <label>{{$ml.get('category')}}</label>
                            <input list="suggest" type="text" class="input" v-model="category" name="category" required
                                   autocomplete="off">
                            <datalist id="suggest">
                                <option v-for="item in suggest_categories" :value="item"></option>
                            </datalist>
                        </div>
                        <div class="col-md-12"></div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('images')}}</label>
                            <input type="file" class="input" name="image" ref="image"
                                   autocomplete="off">
                            <br>
                            <a class="text-primary" :href="image" target="_blank">
                                <b>
                                    <i class="fas fa-image"></i>
                                    عرض الصورة الحالية
                                </b>
                            </a>
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('file')}}</label>
                            <input type="file" class="input" name="file" ref="file"
                                   autocomplete="off">
                            <br>
                            <a class="text-primary" :href="file" target="_blank">
                                <b>
                                    <i class="fas fa-file"></i>
                                    عرض الملف الحالي
                                </b>
                            </a>
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
            vm.getbooks();
        },
        data() {
            return {
                title_ar: null,
                title_en: null,
                description_ar: null,
                description_en: null,
                image: null,
                file: null,
                category: null,
                suggest_categories: [],
                // author: null,
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{list: "ordered"}, {list: "bullet"}],
                    ["image", "code-block"]
                ]
            }
        },
        mounted() {
            this.getSuggest();
        },
        methods: {
            getSuggest() {
                let vm = this;
                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.AUTO_COMPLETE_BOOK,)
                    .then(response => {
                        vm.suggest_categories = response.data.data.categories;
                    });
            }, getbooks() {
                let vm = this;
                vm.$Progress.start();
                let id = vm.$route.params.book_id;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.BOOKS + '/' + id, {})
                    .then(response => {
                        vm.$Progress.finish();
                        let status = response.data.status;
                        let data = response.data.data;
                        if (status) {
                            console.log(data)
                            // title_ar: null,
                            //     title_en: null,
                            //     description_ar: null,
                            //     description_en: null,
                            //     image: null,
                            //     file: null,
                            //     author: null,
                            vm.title_ar = data.book.ar.title;
                            vm.description_ar = data.book.ar.description;
                            vm.title_en = data.book.en.title;
                            vm.description_en = data.book.en.description;
                            vm.file = data.book.file;
                            vm.image = data.book.image;
                            vm.category = data.book.category;
                            // vm.author = data.book.author;
                            return;
                        }
                        vm.$router.push({name: 'all_books'})
                    })
                    .catch(err => {

                    })
            },
            // books_UPDATE
            postbooks(e) {
                let vm = this;
                let id = vm.$route.params.book_id;
                e.preventDefault();
                let formData = new FormData();
                vm.image = vm.$refs.image.files[0];
                vm.file = vm.$refs.file.files[0];

                formData.append('image', vm.image);
                formData.append('file', vm.file);
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                formData.append('description_ar', vm.description_ar);
                formData.append('description_en', vm.description_en);
                formData.append('author', vm.author);
                formData.append('category', vm.category);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.BOOK_UPDATE + '/' + id, formData, {
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

                            vm.$router.push({name: 'all_books'});
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