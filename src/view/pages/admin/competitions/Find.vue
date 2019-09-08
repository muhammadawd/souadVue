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
                        <h3 class="card-title">( {{$ml.get('applications')}} )</h3>
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
                <div class="col-md-12">
                    <table class="table table-hover table-responsive">
                        <thead>
                        <tr>
                            <th>{{$ml.get('name')}}</th>
                            <th>{{$ml.get('email')}}</th>
                            <th>{{$ml.get('phone')}}</th>
                            <th>{{$ml.get('date')}}</th>
                            <th>{{$ml.get('winner')}}</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(_applications , key)  in applications" :key="key">
                            <td>{{_applications.name}}</td>
                            <td>{{_applications.email}}</td>
                            <td>{{_applications.phone}}</td>
                            <td>{{_applications.created_at}}</td>
                            <td>
                                <i class="fas fa-check" v-if="_applications.winner"></i>
                                <i class="fas fa-times" v-if="!_applications.winner"></i>
                            </td>
                            <td>
                                <button class="btn btn-primary"  v-if="!_applications.winner"
                                        @click="selectWinner(_applications._id)">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button class="btn btn-danger"  v-if="_applications.winner"
                                        @click="removeWinner(_applications._id)">
                                    <i class="fas fa-times"></i>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="applications.length == 0">
                <h1 class="text-center" style="margin: 180px 0 250px">No Data</h1>
            </div>

        </div>
        <div class="container-fluid">

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
                applications: [],
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{list: "ordered"}, {list: "bullet"}],
                    ["image", "code-block"]
                ]
            }
        },
        methods: {
            getcompetitions() {
                let vm = this;
                let id = vm.$route.params.competition_id;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITIONS + '/' + id, {})
                    .then(response => {
                        let status = response.data.status;
                        let data = response.data.data;
                        console.log(data);
                        if (status) {
                            vm.applications = data.competition.application;
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
                let file = vm.$refs.images.files[0];
                vm.images = file;

                formData.append('images[0]', vm.images);
                formData.append('title_ar', vm.title_ar);
                formData.append('title_en', vm.title_en);
                formData.append('description_ar', vm.description_ar);
                formData.append('description_en', vm.description_en);
                formData.append('location', vm.location);
                formData.append('publisher_name_ar', vm.publisher_name_ar);
                formData.append('publisher_name_en', vm.publisher_name_en);
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
            },
            sendRequest(id) {
                let vm = this;
                vm.$Progress.start();
                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITION_WINNER, {
                        id: id
                    })
                    .then(response => {
                        vm.$Progress.finish();
                        let status = response.data.status;
                        if (status) {
                            location.reload()
                        }
                    })
                    .catch(err => {

                    })
            },
            statusRomveRequest(id) {
                let vm = this;
                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITION_REMOVE_WINNER, {
                        id: id
                    })
                    .then(response => {
                        vm.$Progress.finish();
                        let status = response.data.status;
                        if (status) {
                            location.reload()
                        }
                    })
                    .catch(err => {

                    })
            },
            selectWinner(id) {
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
                        vm.sendRequest(id)
                        // vm.$swal(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        // )
                    }
                });
            },
            removeWinner(id) {
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
                        vm.statusRomveRequest(id)
                        // vm.$swal(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        // )
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>