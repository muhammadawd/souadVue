<template>

    <div class="container position_relative">
        <div class="position_absolute" v-if="isLoading">
            <bounce-spinner></bounce-spinner>
        </div>
        <div class="row mt-5 ">
            <div class="col-md-12">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('gallery')}}</h1>
                </div>
            </div>
            <div class="col-md-12" v-if="gallery.length == 0">
                <h1>{{this.$ml.get('no_data')}}</h1>
            </div>
            <div id="container_lazy" class="col-md-12 masonry">
                <div class="gallery-item" v-for="(item,key) in gallery" :key="key">
                    <a data-fancybox="gallery" :href="item.fileName">
                        <img class="img-responsive" :src="item.fileName">
                    </a>
                </div>
            </div>
            <div class="col-md-12 text-center" v-if="page_count > 0">
                <paginate
                        v-model="page"
                        :page-count="page_count"
                        :margin-pages="2"
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
                        :first-last-button="true"
                ></paginate>
            </div>
        </div>
    </div>

</template>

<script>
    /* eslint-disable */
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import "@/assets/css/jquery.fancybox.min.css"

    import 'imagesloaded'

    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'
    import TileSpinner from "vue-spinners/src/components/TileSpinner";
    import BounceSpinner from "vue-spinners/src/components/BounceSpinner";

    Vue.component('paginate', Paginate)

    export default {
        name: "GalleryList",
        components: {BounceSpinner, TileSpinner},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                page: 1,
                page_count: 1,
                page_range: 1,
                gallery: []
            }
        },
        created() {
            let vm = this;
            vm.getImages();
        },
        mounted() {
            let vm = this;
            vm.fancyFunctionaliy()
            vm.lazyImage()
        },
        methods: {
            getImages(page_number = 1) {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.GALLERY_ALL, {
                    params: {
                        page: page_number,
                        category: vm.$route.params.category,
                        limit: 12
                    }
                }).then(response => {
                    let gallery = [];
                    if (response.data.status) {
                        gallery = response.data.data.gallery;

                        vm.gallery = gallery.data;
                        vm.page_range = gallery.perPage;
                        vm.page_count = gallery.lastPage;
                        vm.isLoading = false
                    }
                    return gallery;
                })
            },
            fancyFunctionaliy() {
                require('@/assets/js/jquery.fancybox.min.js');
                require('@/assets/js/imagesloaded.pkgd.min.js');
            },
            lazyImage() {
                $('#container_lazy').imagesLoaded(function () {
                    // images have loaded
                });
            },
            triggerGetPaginateData(page_num) {
                this.getImages(page_num)
            }
        }
    }
</script>

<style scoped>
    .position_relative{
        position: relative;
    }
    .position_absolute {
        position: absolute;
        background: #FFF;
        width: 100%;
        height: 100%;
        z-index: 9;
        padding-top: 5%;
    }

    .masonry {
        columns: 6 300px;
        column-gap: 1rem;
    }

    .masonry img {
        /*margin: 0 1rem 1rem 0;*/
        display: inline-block;
        width: 100%;
    }

</style>