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
                        <h3 class="card-title">( {{$ml.get('news')}} )</h3>
                        <div class="card">
                            <div class="card-body text-right">
                                <div class="btn-group">

                                    <router-link :to="{ name: 'all_news'}"
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
                        @submit="postNews"
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
                            <label>{{$ml.get('slug')}}</label>
                            <input type="text" class="input" v-model="slug" name="slug" required
                                   autocomplete="off">
                        </div>
                        <div class="col-md-3">
                            <label>{{$ml.get('images')}}</label>
                            <input type="file" class="input" name="images" ref="images" required multiple
                                   @change="setImages"
                                   autocomplete="off">
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
                                   autocomplete="off">
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
                            <div class="row">
                                <div class="col-md-3" v-for="(image , k) in images_before_crop" :key="k">
                                    <section class="cropper-area">
                                        <div class="img-cropper">
                                            <vue-cropper :src="image"
                                                         :aspect-ratio="1 / 1"
                                                         :ref="'cropper'+k"
                                                         alt=""></vue-cropper>
                                        </div>
                                    </section>
                                </div>
                            </div>
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

    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';

    Vue.use(VueToast);

    export default {
        name: "Add",
        components: {VueEditor, Loader, AdminTopHeader, AdminTopHeaderSide, MainPage, Footer, flatPickr, VueCropper},
        data() {
            return {
                title_ar: null,
                title_en: null,
                description_ar: null,
                description_en: null,
                publisher_name_ar: null,
                publisher_name_en: null,
                images: [],
                images_before_crop: [],
                images_after_crop: [],
                links: [],
                tags: [],
                suggest_categories: [],
                date: new Date(),
                slug: null,
                category: null,
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
            b64toBlob(b64Data, contentType, sliceSize) {
                contentType = contentType || '';
                sliceSize = sliceSize || 512;

                var byteCharacters = atob(b64Data);
                var byteArrays = [];

                for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                    var slice = byteCharacters.slice(offset, offset + sliceSize);

                    var byteNumbers = new Array(slice.length);
                    for (var i = 0; i < slice.length; i++) {
                        byteNumbers[i] = slice.charCodeAt(i);
                    }

                    var byteArray = new Uint8Array(byteNumbers);

                    byteArrays.push(byteArray);
                }

                var blob = new Blob(byteArrays, {type: contentType});
                return blob;
            },
            blobToFile(theBlob, fileName) {
                theBlob.lastModifiedDate = new Date();
                theBlob.lastModified = new Date().getTime();
                theBlob.name = fileName;
                return theBlob;
                // return new File(theBlob, fileName);
            },
            setImages() {
                let vm = this;
                let files = vm.$refs.images.files;

                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    if (file.type.indexOf('image/') === -1) {
                        console.log('Please select an image file');
                        return;
                    }
                    if (typeof FileReader === 'function') {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            vm.images_before_crop.push(event.target.result)
                            // this.imgSrc = event.target.result;
                            // this.$refs.cropper.replace(event.target.result);
                        };
                        reader.readAsDataURL(file);
                    } else {
                        console.log('Sorry, FileReader API not supported');
                    }
                }
                console.log(files)
            },
            getSuggest() {
                let vm = this;
                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.AUTO_COMPLETE_NEWS,)
                    .then(response => {
                        vm.suggest_categories = response.data.data.categories;
                    });
            },
            postNews(e) {

                let vm = this;
                vm.$Progress.start();

                e.preventDefault();
                let formData = new FormData();

                // let promises = $.map(vm.images_before_crop, function (img, i) {
                //     return new Promise(function (resolve) {
                //         // vm.$refs[`cropper${i}`][0].getCroppedCanvas().toBlob(resolve, 'image/jpeg', 0.75);
                //         vm.$refs[`cropper${i}`][0].cropper('getCroppedCanvas', {}).toBlob(resolve, 'image/jpeg', 0.75);
                //     });
                // });
                //
                // Promise.all(promises, function (blobs) {
                //     console.log(blobs);
                // });
                let all_cropper_data = [];
                for (let i = 0; i < vm.images_before_crop.length; i++) {
                    all_cropper_data.push(vm.$refs[`cropper${i}`][0].getCroppedCanvas().toDataURL())
                }
                $.each(all_cropper_data, function (k, data) {
                    let block = data.split(";");
                    let contentType = block[0].split(":")[1];
                    let realData = block[1].split(",")[1];
                    let image_file = vm.b64toBlob(realData, contentType);
                    let extension = '';
                    try {
                        extension = image_file.type.split('/')[1];
                    } catch (e) {
                        extension = 'jpg'
                    }
                    let image_file_name = `image_${k}_name_example.${extension}`;
                    image_file = vm.blobToFile(image_file, image_file_name)
                    console.log(image_file)
                    formData.append(`images[${k}]`, image_file)
                });
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                formData.append('description_ar', vm.description_ar);
                formData.append('description_en', vm.description_en);
                formData.append('slug', vm.slug);
                formData.append('publisher_name_ar', vm.publisher_name_ar);
                formData.append('publisher_name_en', vm.publisher_name_en);
                formData.append('date', vm.date);
                formData.append('category', vm.category);

                // {
                //     title_ar: vm.title_ar,
                //         title_en: vm.title_en,
                //     description_ar: vm.description_ar,
                //     description_en: vm.description_en,
                //     publisher_name_ar: vm.publisher_name_ar,
                //     publisher_name_en: vm.publisher_name_en,
                //     date: vm.date,
                //     slug: vm.slug,
                //     images: vm.images,
                // }
                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.NEWS_CREATE, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        let auth = response.data.auth;
                        let status = response.data.status;
                        let data = response.data.data;
                        vm.$Progress.finish()

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
                            vm.category = null;
                            vm.images = [];
                            vm.$router.push({name: 'all_news'});
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