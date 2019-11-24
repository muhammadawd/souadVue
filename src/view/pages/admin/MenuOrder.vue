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
                        <h3 class="card-title">( {{$ml.get('menu')}} )</h3>
                        <div class="col-md-12">
                            <table class="table table-bordered table-hover table-responsive">
                                <thead>
                                <tr>
                                    <th>{{$ml.get('menu')}}</th>
                                    <th>{{$ml.get('order')}}</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <slot v-for="(nav_item,_key) in NBar">
                                    <tr>
                                        <td class="text-right">{{nav_item[currentLang].title}}
                                            <input type="text" class="input form-control" :id="'main_category_'+_key"
                                                   :value="nav_item[currentLang].title">
                                        </td>
                                        <td width="150" class="text-center">
                                            <input type="text" class="input form-control" :id="'item_'+nav_item._id"
                                                   :value="nav_item.order">
                                        </td>
                                        <td>
                                            <div class="btn-group">
                                                <button class="btn btn-primary"
                                                        @click="updateElement(nav_item,_key)">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-for="(category,key) in nav_item.categories">
                                        <td class="text-right">
                                            <b class="text-primary">فرعي</b>
                                            | {{category}}
                                            <input type="text" class="input form-control" :id="'category_'+_key+key"
                                                   :value="category">
                                        </td>
                                        <td width="150" class="text-center">

                                        </td>
                                        <td>
                                            <div class="btn-group">
                                                <button class="btn btn-primary"
                                                        @click="updateCategory(category,_key,key,nav_item.name)">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button class="btn btn-danger"
                                                        @click="deleteCategory(category,_key,key,nav_item.name)">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </slot>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
    import Loader from '../../components/mainComponents/Loader'
    import AdminTopHeader from '../../components/mainComponents/AdminTopHeader'
    import AdminTopHeaderSide from '../../components/mainComponents/AdminTopHeaderSide'
    import Footer from '../../components/mainComponents/Footer'

    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';
    // import 'sweetalert2/dist/sweetalert2.min.css';
    const options = {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
    };
    Vue.use(VueSweetalert2, options);

    export default {
        name: "Dashboard",
        components: {Loader, AdminTopHeader, AdminTopHeaderSide, Footer},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                NBar: []
            }
        },
        mounted() {
            this.getMenuItems();
        },
        methods: {
            updateCategory(element, _key, key, name) {
                let vm = this;
                let category = $('#category_' + _key + key).val();
                // console.log(name)
                // console.log(element)
                // console.log(category)
                axios.post(apiServiesRoutes.BASE_URL + apiServiesRoutes.NAV_BAR_UPDATE, {
                    old_category: element,
                    new_category: category,
                    key: name,
                }).then(response => {
                    if (response.data.status) {
                        vm.$swal({
                            type: 'success',
                            title: vm.$ml.get('_success')
                        });
                        return true;
                    }
                    vm.$swal({
                        type: 'error',
                        title: vm.$ml.get('_error')
                    });
                });
            },
            deleteCategory(element, _key, key, name) {
                let vm = this;

                vm.$swal({
                    title: 'هل انت متأكد من الحذف',
                    text: "تحذير سيتم حذف جميع الوحدات الخاصة بهذا التصنيف",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'نعم',
                    cancelButtonText: 'لا'
                }).then((result) => {
                    if (result.value) {


                        axios.post(apiServiesRoutes.BASE_URL + apiServiesRoutes.NAV_BAR_DELETE, {
                            category: element,
                            key: name,
                        }).then(response => {
                            if (response.data.status) {
                                vm.$swal({
                                    type: 'success',
                                    title: vm.$ml.get('_success')
                                });
                                setTimeout(() => {
                                    location.reload()
                                }, 1000)
                                return true;
                            }
                            vm.$swal({
                                type: 'error',
                                title: vm.$ml.get('_error')
                            });
                        });

                    }
                })
            },
            updateElement(element, _key) {
                let category = $('#main_category_' + _key).val();
                let vm = this;
                axios.post(apiServiesRoutes.BASE_URL + apiServiesRoutes.NAV_BAR_ORDER, {
                    id: element._id,
                    title_ar: category,
                    order: $('#item_' + element._id).val()
                }).then(response => {
                    if (response.data.status) {
                        vm.$swal({
                            type: 'success',
                            title: vm.$ml.get('_success')
                        });
                        setTimeout(() => {
                            location.reload()
                        }, 1000)
                        return true;
                    }
                    vm.$swal({
                        type: 'error',
                        title: vm.$ml.get('_error')
                    });
                });
            },
            getMenuItems() {
                let vm = this;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.NAV_BAR, {
                    params: {
                        lang: vm.currentLang
                    }
                }).then(response => {
                    if (response.data.status) {
                        vm.NBar = response.data.data.navbar;

                    }
                });
            }

        }
    }
</script>

<style scoped>

</style>