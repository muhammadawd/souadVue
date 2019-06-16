<template>

    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('gallery')}}</h1>
                </div>
            </div>
            <div class="col-md-4" v-for="(item,key) in gallery_data" :key="key">
                <div class="gallery-item">
                    <a data-fancybox="gallery" :href="item.image">
                        <img class="img-responsive" :src="item.image">
                    </a>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <paginate
                        v-model="page"
                        :page-count="20"
                        :margin-pages="2"
                        :page-range="5"
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
    import "@/assets/css/jquery.fancybox.min.css"

    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'

    Vue.component('paginate', Paginate)

    export default {
        name: "GalleryList",
        data() {
            return {
                page: 1,
                gallery_data: [
                    {
                        image: 'https://via.placeholder.com/350x350'
                    },
                    {
                        image: 'https://via.placeholder.com/350x350'
                    },
                    {
                        image: 'https://via.placeholder.com/350x350'
                    },
                    {
                        image: 'https://via.placeholder.com/350x350'
                    },
                    {
                        image: 'https://via.placeholder.com/350x350'
                    },
                    {
                        image: 'https://via.placeholder.com/350x350'
                    }
                ]
            }
        },
        mounted() {
            this.fancyFunctionaliy()
        },
        methods: {
            fancyFunctionaliy() {
                require('@/assets/js/jquery.fancybox.min.js');
            },
            triggerGetPaginateData(page_num) {
                console.log(page_num)
            }
        }
    }
</script>

<style scoped>

</style>