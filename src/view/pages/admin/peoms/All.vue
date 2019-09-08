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
                        <h3 class="card-title">( {{$ml.get('poems_written')}} )</h3>
                        <div class="card">
                            <div class="card-body text-right">
                                <div class="btn-group">
                                    <router-link :to="{ name: 'add_poems'}"
                                                 class="btn btn-info"
                                                 tag="a" active-class="actives"
                                                 exact-active-class="active">{{$ml.get('add')}}
                                    </router-link>

                                    <router-link :to="{ name: 'all_poems'}"
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
                            <input name="query" r autocomplete="off" v-model="query" :placeholder="$ml.get('filter')" @keyup.enter="getpoems(1)"
                                   class="input mt-2">
                        </div>
                        <div class="col-md-12 text-center mt-2" style="margin-bottom: 15px">
                            <button class="primary-button" @click="getpoems(1)">
                                {{$ml.get('filter')}}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <table class="table table-bordered table-hover table-responsive">
                        <thead>
                        <tr>
                            <th>{{$ml.get('image')}}</th>
                            <th>{{$ml.get('title')}}</th>
                            <th>{{$ml.get('author')}}</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(_poems , key) in poems" :key="key">
                            <td>{{_poems.image}} <br>
                                <a class="text-primary" :href="_poems.image" target="_blank">
                                    <b>
                                        <i class="fas fa-image"></i>
                                        عرض الصورة الحالية
                                    </b>
                                </a>
                            </td>
                            <td>{{_poems[currentLang].title}}</td>
                            <td>{{_poems.author}}</td>
                            <td>
                                <div class="btn-group">
                                    <router-link
                                            class="btn btn-info"
                                            :to="{ name: 'edit_poems',params:{poem_id:_poems._id}}"
                                            tag="a">
                                        <i class="fas fa-edit"></i>
                                    </router-link>

                                    <button class="btn btn-danger" @click="deleteElement(_poems._id)">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="poems.length == 0">
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
                poems: [],
                current_poems: null
            }
        },
        created() {
            let vm = this;
            vm.getpoems()
        },
        methods: {
            triggerGetPaginateData(page_num) {
                let vm = this;
                vm.getpoems(page_num)
            },
            getpoems(page_number = 1) {
                let vm = this;
                vm.page = page_number;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.POEM_ALL, {
                    params: {
                        page: page_number,
                        limit: 10,
                        query: vm.query
                    }
                }).then(response => {
                    console.log(response.data)
                    let poems = [];
                    if (response.data.status) {
                        setTimeout(() => {
                            poems = response.data.data.poem;
                            vm.poems = poems.data;
                            vm.page_range = poems.perPage;
                            vm.page_count = poems.lastPage;
                        }, 100);
                    }
                    return poems;
                })
            },
            deleteRequest(id) {
                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.POEM_DELETE + '/' + id, {})
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