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
                                    <router-link :to="{ name: 'add_competitions'}"
                                                 class="btn btn-info"
                                                 tag="a" active-class="actives"
                                                 exact-active-class="active">{{$ml.get('add')}}
                                    </router-link>

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
                    <div class="row">
                        <div class="col-md-4">
                            <input name="query" r autocomplete="off" v-model="query" :placeholder="$ml.get('filter')"
                                   @keyup.enter="getcompetitions(1)"
                                   class="input mt-2">
                        </div>
                        <div class="col-md-12 text-center mt-2" style="margin-bottom: 15px">
                            <button class="primary-button" @click="getcompetitions(1)">
                                {{$ml.get('filter')}}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <table class="table table-bordered table-hover table-responsive">
                        <thead>
                        <tr>
                            <th>{{$ml.get('title')}}</th>
                            <th>{{$ml.get('image')}}</th>
                            <th>{{$ml.get('date')}}</th>
                            <th>{{$ml.get('location')}}</th>
                            <th>{{$ml.get('status')}}</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(_competitions , key) in competitions" :key="key">
                            <td>{{_competitions[currentLang].title}}</td>
                            <td>
                                <div v-for="_image in _competitions.images">
                                    <a class="text-primary" :href="_image.fileName" target="_blank">
                                        <b>
                                            <i class="fas fa-image"></i>
                                            عرض الصورة الحالية
                                        </b>
                                    </a>
                                </div>
                            </td>
                            <td>{{_competitions.date}}</td>
                            <td>{{_competitions.location}}</td>
                            <td>
                                <label class="label"
                                       :class="_competitions.status == 'finished' ?'label-danger':'label-success'">{{_competitions.status}}</label>
                            </td>
                            <td>
                                <div class="btn-group text-center" style="margin: auto">

                                    <button class="btn btn-primary" v-if="_competitions.status != 'finished'"
                                            @click="updateStatus(_competitions._id)">
                                        <i class="fas fa-check"></i>
                                    </button>
                                    <router-link
                                            class="btn btn-warning"
                                            :to="{ name: 'find_competitions',params:{competition_id:_competitions._id}}"
                                            tag="a">
                                        <i class="fas fa-users"></i>
                                    </router-link>
                                    <router-link
                                            class="btn btn-info"
                                            :to="{ name: 'edit_competitions',params:{competition_id:_competitions._id}}"
                                            tag="a">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <button class="btn btn-danger" @click="deleteElement(_competitions._id)">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="competitions.length == 0">
                    <h1 class="text-center" style="margin: 180px 0 250px">No Data</h1>
                </div>

                <div class="col-md-12 text-center" v-if="page_count > 1">
                    <paginate
                            v-model="page"
                            :page-count="page_count"
                            :margin-pages="1"
                            :page-range="page_range"
                            :click-handler="triggerGetPaginateData"
                            :container-class="'pagination'"
                            :page-class="'page-item'"
                            :page-link-class="'page-link-item'"
                            :prev-class="'prev-item'"
                            :prev-link-class="'prev-link-item'"
                            :next-class="'next-item'"
                            :next-link-class="'next-link-item'"
                            :break-view-class="'break-view'"
                            :break-view-link-class="'break-view-link'"
                    ></paginate>
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
                page: 1,
                page_count: 1,
                page_range: 1,
                query: null,
                competitions: [],
                current_competitions: null
            }
        },
        created() {
            let vm = this;
            vm.getcompetitions()
        },
        methods: {
            triggerGetPaginateData(page_num) {
                let vm = this;
                vm.getcompetitions(page_num)
            },
            getcompetitions(page_number = 1) {
                let vm = this;
                vm.page = page_number;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITIONS_ALL, {
                    params: {
                        page: page_number,
                        limit: 10,
                        query: vm.query
                    }
                }).then(response => {
                    console.log(response.data)
                    let competitions = [];
                    if (response.data.status) {
                        setTimeout(() => {
                            competitions = response.data.data.competition;
                            vm.competitions = competitions.data;
                            vm.page_range = competitions.perPage;
                            vm.page_count = competitions.lastPage;
                        }, 100);
                    }
                    return competitions;
                })
            },
            deleteRequest(id) {
                let vm = this;
                vm.$Progress.start();
                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITION_DELETE + '/' + id, {
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
            statusRequest(id) {
                let vm = this;
                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITION_FINISH, {
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
            },
            updateStatus(id) {
                let vm = this;
                vm.$swal({
                    title: vm.$ml.get('are_you_sure_update'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: vm.$ml.get('yes'),
                    cancelButtonText: vm.$ml.get('no'),
                }).then((result) => {
                    if (result.value) {
                        vm.statusRequest(id)
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