<template>

    <div>
        <Loader/>
        <AdminTopHeader/>
        <AdminTopHeaderSide/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5 text-center">
                        <h1>{{$ml.get('control_panel')}} </h1>
                        <h3 class="card-title">( {{$ml.get('site_name')}} )</h3>
                    </div>
                </div>

                <div class="form_contact ">
                    <form
                            id="form"
                            @submit="postAbout"
                            method="post">
                        <div class="col-md-12">
                            <div class="row">

                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('title_ar')}}</label>
                                    <input type="text" class="input" v-model="title_ar" name="title_ar" required
                                           autocomplete="off">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('title_en')}}</label>
                                    <input type="text" class="input" v-model="title_en" name="title_en" required
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

                            </div>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
    // services imports

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
        name: "All",
        components: {VueEditor, Loader, AdminTopHeader, AdminTopHeaderSide, MainPage, Footer, flatPickr},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                description_ar: null,
                description_en: null,
                title_ar: null,
                title_en: null,

            }
        },
        created() {
            let vm = this;
            vm.getabout_us()
        },
        methods: {
            triggerGetPaginateData(page_num) {
                let vm = this;
                vm.getabout_us(page_num)
            },
            getabout_us(page_number = 1) {
                let vm = this;
                vm.page = page_number;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_SOAUD).then(response => {
                    console.log(response.data);
                    let about_us = [];
                    if (response.data.status) {
                        about_us = response.data.data.about;

                        vm.description_ar = about_us.ar.html;
                        vm.description_en = about_us.en.html;
                        vm.title_ar = about_us.ar.title;
                        vm.title_en = about_us.en.title;

                    }
                    return about_us;
                })
            },
            postAbout(e) {

                let vm = this;
                e.preventDefault();
                let formData = new FormData();

                formData.append('html_ar', vm.description_ar);
                formData.append('html_en', vm.description_en);
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_UPDATE_SOUAD, formData, {
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
                            localStorage.removeItem('auth_token');
                            vm.$router.push({name: 'login'});
                        }

                        if (status) {

                            Vue.$toast.open({
                                message: vm.$ml.get('_success'),
                                type: 'info'
                            });

                            vm.title_ar = null;
                            vm.title_en = null;
                            vm.description_ar = null;
                            vm.description_en = null;
                            location.reload()
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
        },
    }
</script>

<style scoped>

</style>