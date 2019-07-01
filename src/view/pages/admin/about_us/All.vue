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
                        <h3 class="card-title">( {{$ml.get('about_us')}} )</h3>
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
                                    <label>{{$ml.get('location_ar')}}</label>
                                    <input type="text" class="input" v-model="location_ar" name="location_ar" required
                                           autocomplete="off">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('location_en')}}</label>
                                    <input type="text" class="input" v-model="location_en" name="location_en" required
                                           autocomplete="off">
                                </div>

                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('phone')}}</label>
                                    <input type="text" class="input" v-model="phone" name="phone" required
                                           autocomplete="off">
                                </div>

                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('email')}}</label>
                                    <input type="text" class="input" v-model="email" name="email" required
                                           autocomplete="off">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('facebook')}}</label>
                                    <input type="text" class="input" v-model="facebook" name="facebook" required
                                           autocomplete="off">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('twitter')}}</label>
                                    <input type="text" class="input" v-model="twitter" name="twitter" required
                                           autocomplete="off">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label>{{$ml.get('instagram')}}</label>
                                    <input type="text" class="input" v-model="instagram" name="instagram" required
                                           autocomplete="off">
                                </div>

                                <div class="col-md-6 mt-2">
                                    <label>{{$ml.get('description_ar')}}</label>
                                    <textarea type="text" class="input" v-model="description_ar" name="description_ar"
                                              required
                                              autocomplete="off"></textarea>
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label>{{$ml.get('description_en')}}</label>
                                    <textarea type="text" class="input" v-model="description_en" name="description_en"
                                              required
                                              autocomplete="off"></textarea>
                                </div>
                                <div class="col-md-12 mt-2">
                                    <label>{{$ml.get('map')}}</label>
                                    <textarea type="text" class="input" v-model="map" name="map" required
                                              autocomplete="off"></textarea>
                                </div>
                                <div class="col-md-3">
                                    <label>{{$ml.get('images')}}</label>
                                    <input type="file" class="input" name="images" ref="images" multiple
                                           autocomplete="off">
                                </div>
                                <div class="col-md-12 text-center">
                                    <button class="primary-button mt-2">{{$ml.get('submit')}}</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-md-12 mt-5">
                    <h4>عدد الصور الحالية :
                        <span>{{images.length}}</span>
                    </h4>
                    <table class="table table-responsive table-hover">
                        <tr v-for="(_image , key) in images" :key="key">
                            <td>
                                <!--                                {{_image.fileName}}-->
                                <br>
                                <a class="text-primary" :href="_image.fileName" target="_blank">
                                    <b>
                                        <i class="fas fa-image"></i>
                                        عرض الصورة الحالية
                                    </b>
                                </a>
                            </td>
                            <td width="50">
                                <div class="btn-group">
                                    <button class="btn btn-danger" @click="deleteElement(_image._id)">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

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
    // main.js
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';
    // import 'sweetalert2/dist/sweetalert2.min.css';

    const options = {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
    };
    Vue.use(VueSweetalert2, options);
    export default {
        name: "All",
        components: {Loader, AdminTopHeader, AdminTopHeaderSide, MainPage, Footer},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                description_ar: null,
                description_en: null,
                location_ar: null,
                location_en: null,
                phone: null,
                email: null,
                facebook: null,
                twitter: null,
                instagram: null,
                map: null,
                images: null,

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
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_ALL).then(response => {
                    console.log(response.data);
                    let about_us = [];
                    if (response.data.status) {
                        //     setTimeout(() => {
                        about_us = response.data.data.about;

                        vm.description_ar = about_us.ar.description;
                        vm.description_en = about_us.en.description;
                        vm.location_ar = about_us.ar.location;
                        vm.location_en = about_us.en.location;
                        vm.phone = about_us.phone;
                        vm.email = about_us.email;
                        vm.facebook = about_us.facebook;
                        vm.twitter = about_us.twitter;
                        vm.instagram = about_us.instagram;
                        vm.map = about_us.map;
                        vm.images = about_us.images;

                        //         vm.about_us = about_us.data;
                        //         vm.page_range = about_us.perPage;
                        //         vm.page_count = about_us.lastPage;
                        //     }, 100);
                    }
                    return about_us;
                })
            },
            postAbout(e) {

                let vm = this;
                e.preventDefault();
                let formData = new FormData();
                vm.images = vm.$refs.images.files;
                for (let i = 0; i < vm.images.length; i++) {
                    formData.append(`images[${i}]`, vm.images[i]);
                }
                formData.append('description_ar', vm.description_ar);
                formData.append('description_en', vm.description_en);
                formData.append('location_ar', vm.location_ar);
                formData.append('location_en', vm.location_en);
                formData.append('phone', vm.phone);
                formData.append('email', vm.email);
                formData.append('facebook', vm.facebook);
                formData.append('twitter', vm.twitter);
                formData.append('instagram', vm.instagram);
                formData.append('map', vm.map);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_UPDATE, formData, {
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
                            vm.publisher_name_ar = null;
                            vm.publisher_name_en = null;
                            vm.date = new Date();
                            vm.slug = null;
                            vm.images = [];
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
            },
            deleteRequest(id) {
                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_IMAGE_DELETE + '/' + id, {})
                    .then(response => {
                        let status = response.data.status;
                        if (status) {
                            location.reload()
                        }
                    })
                    .catch(err => {

                    })
            },
            deleteElement(id) {
                let vm = this;
                vm.$swal({
                    title: vm.$ml.get('are_you_sure'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: vm.$ml.get('yes'),
                    cancelButtonText: vm.$ml.get('no'),
                }).then((result) => {
                    if (result.value) {
                        vm.deleteRequest(id)
                        // vm.$swal(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        // )
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>