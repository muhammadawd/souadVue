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
                        <h3 class="card-title">( {{$ml.get('competitions')}} )</h3>
                        <div class="card">
                            <div class="card-body text-right">
                                <div class="btn-group">
                                    <router-link :to="{ name: 'all_competitions'}"
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
                        @submit="postcompetitions"
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
                        <div class="col-md-3">
                            <label>{{$ml.get('location')}}</label>
                            <input type="text" class="input" v-model="location" name="location"
                                   autocomplete="off">
                        </div>
                        <div class="col-md-12"></div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('images')}}</label>
                            <input type="file" class="input" name="images" ref="images" multiple
                                   autocomplete="off">
                            <br>
                            <div v-for="_image in images">
                                <a class="text-primary" :href="_image.fileName" target="_blank">
                                    <b>
                                        <i class="fas fa-image"></i>
                                        عرض الصورة الحالية
                                    </b>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('date')}}</label>
                            <flat-pickr class="input" v-model="date" required></flat-pickr>
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('category')}}</label>
                            <input list="suggest" type="text" class="input" v-model="category" name="category" required
                                   autocomplete="off">
                            <datalist id="suggest">
                                <option v-for="item in suggest_categories" :value="item"></option>
                            </datalist>
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
            vm.getcompetitions();
        },
        data() {
            return {
                title_ar: null,
                title_en: null,
                description_ar: null,
                description_en: null,
                images: [],
                date: new Date(),
                location: null,
                category: null,
                suggest_categories: [],
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
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.AUTO_COMPLETE_COMPETITION,)
                    .then(response => {
                        vm.suggest_categories = response.data.data.categories;
                    });
            },
            getcompetitions() {
                let vm = this;
                vm.$Progress.start();
                let id = vm.$route.params.competition_id;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITIONS + '/' + id, {})
                    .then(response => {
                        vm.$Progress.finish();
                        let status = response.data.status;
                        let data = response.data.data;
                        console.log(data)
                        if (status) {
                            vm.title_ar = data.competition.ar.title;
                            vm.description_ar = data.competition.ar.description;

                            vm.title_en = data.competition.en.title;
                            vm.description_en = data.competition.en.description;
                            vm.location = data.competition.location;
                            vm.category = data.competition.category;
                            vm.date = data.competition.date;
                            vm.images = data.competition.images;
                            return;
                        }
                        vm.$router.push({name: 'all_competitions'})
                    })
                    .catch(err => {

                    })
            },
            // competitions_UPDATE
            postcompetitions(e) {
                let vm = this;
                vm.$Progress.start();
                let id = vm.$route.params.competition_id;
                e.preventDefault();
                let formData = new FormData();
                // let file = vm.$refs.images.files[0];
                // vm.images = file;
                // formData.append('images[0]', vm.images);

                let files = vm.$refs.images.files;
                for (let i = 0; i < files.length; i++) {
                    formData.append(`images[${i}]`, files[i]);
                }
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                formData.append('description_ar', vm.description_ar);
                formData.append('description_en', vm.description_en);
                formData.append('location', vm.location);
                formData.append('publisher_name_ar', vm.publisher_name_ar);
                formData.append('publisher_name_en', vm.publisher_name_en);
                formData.append('category', vm.category);
                formData.append('date', vm.date);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITION_UPDATE + '/' + id, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        vm.$Progress.finish();
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
                            vm.location = null;
                            vm.images = [];
                            vm.$router.push({name: 'all_competitions'});
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