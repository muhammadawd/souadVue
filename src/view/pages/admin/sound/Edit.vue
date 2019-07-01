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
                        <h3 class="card-title">( {{$ml.get('audios')}} )</h3>
                        <div class="card">
                            <div class="card-body text-right">
                                <div class="btn-group">
                                    <router-link :to="{ name: 'all_audios'}"
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
                        @submit="postaudios"
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
                            <label>{{$ml.get('publisher_name_ar')}}</label>
                            <input type="text" class="input" v-model="author_ar" name="author_ar"
                                   required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3">
                            <label>{{$ml.get('publisher_name_en')}}</label>
                            <input type="text" class="input" v-model="author_en" name="author_en"
                                   required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('images')}}</label>
                            <input type="file" class="input" name="images" ref="images"
                                   autocomplete="off">
                            <a :href="images" target="_blank" class="text-primary" >
                                <br>
                                <i class="fas fa-image"></i>
                                <b> عرض الصورة الحالية</b>
                                <!--                                    <img :src="image.fileName" width="50%" class="mt-2" alt="">-->
                            </a>
                        </div>
                        <div class="col-md-3 mt-2">
                            <label>{{$ml.get('sound')}}</label>
                            <input type="file" class="input" name="sounds" ref="sounds"
                                   autocomplete="off">
                        </div>
                        <div class="col-md-12"></div>
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
            vm.getaudios();
        },
        data() {
            return {
                title_ar: null,
                title_en: null,
                author_ar: null,
                author_en: null,
                images: null,
                sound: null,
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{list: "ordered"}, {list: "bullet"}],
                    ["image", "code-block"]
                ]
            }
        },
        methods: {
            getaudios() {
                let vm = this;
                let id = vm.$route.params.audio_id;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.AUDIO_FIND + '/' + id, {})
                    .then(response => {
                        let status = response.data.status;
                        let data = response.data.data;
                        console.log(data)
                        if (status) {
                            vm.title_ar = data.sound.ar.title;
                            vm.author_ar = data.sound.ar.author;
                            vm.title_en = data.sound.en.title;
                            vm.author_en = data.sound.en.author;
                            vm.images = data.sound.image;
                            vm.sound = data.sound.sound;
                            return;
                        }
                        // vm.$router.push({name: 'all_audios'})
                    })
                    .catch(err => {

                    })
            },
            // audios_UPDATE
            postaudios(e) {
                let vm = this;
                let id = vm.$route.params.audio_id;
                e.preventDefault();
                let formData = new FormData();
                vm.images  = vm.$refs.images.files[0];
                vm.sound  = vm.$refs.sounds.files[0];

                formData.append('image', vm.images);
                formData.append('sound', vm.sound);
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                formData.append('author_ar', vm.author_ar);
                formData.append('author_en', vm.author_en);
                formData.append('date', vm.date);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.AUDIO_UPDATE + '/' + id, formData, {
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
                            vm.$router.push({name: 'all_audios'});
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