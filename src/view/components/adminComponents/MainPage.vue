<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="mt-5 text-center">
                    <h1>{{$ml.get('control_panel')}} </h1>
                    <h3 class="card-title">( {{$ml.get('subscribe_now')}} )</h3>
                    <div class="col-md-12">
                        <table class="table table-bordered table-hover table-responsive">
                            <thead>
                            <tr>
                                <th>{{$ml.get('email')}}</th>
                                <th>{{$ml.get('date')}}</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(_subscribes , key) in subscribes" :key="key">
                                <td>{{_subscribes.email}}</td>
                                <td>{{_subscribes.created_at}}</td>
                                <td>
                                    <!--                                    <div class="btn-group">-->
                                    <!--                                        <button class="btn btn-danger" @click="deleteElement(_subscribes._id)">-->
                                    <!--                                            <i class="fas fa-times"></i>-->
                                    <!--                                        </button>-->
                                    <!--                                    </div>-->
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div v-if="subscribes.length == 0">
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

    // main.js
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';
    // import 'sweetalert2/dist/sweetalert2.min.css';

    export default {
        name: "MainPage",
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                page: 1,
                page_count: 1,
                page_range: 1,
                subscribes: []
            }
        },
        created() {
            let vm = this;
            vm.getsubscribes()
        },
        methods: {
            getsubscribes(page_number = 1) {
                let vm = this;
                vm.page = page_number;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.SUBSCRIBE_ALL, {
                    params: {
                        page: page_number,
                        limit: 20
                    }
                }).then(response => {
                    console.log(response.data)
                    let subscribes = [];
                    if (response.data.status) {
                        setTimeout(() => {
                            subscribes = response.data.data.subscribe;
                            vm.subscribes = subscribes.data;
                            vm.page_range = subscribes.perPage;
                            vm.page_count = subscribes.lastPage;
                        }, 100);
                    }
                    return subscribes;
                })
            },
        },
    }
</script>

<style scoped>

</style>