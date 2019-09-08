<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('videos')}}</h1>
                </div>
            </div>
            <div class="col-md-4">
                <input name="first_name" required="required" autocomplete="off" v-model="query"
                       :placeholder="$ml.get('filter')" class="input mt-2">
            </div>
            <div class="col-md-12 text-center mt-2">
                <button class="primary-button" @click="getVideos">
                    {{$ml.get('filter')}}
                </button>
            </div>
            <div class="col-md-12 mt-2"></div>
            <div class="col-md-6" v-for="(video , key) in videos" :key="key">
                <h3>{{video[currentLang].title}}</h3>
                <div v-html="video.link"></div>
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
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'

    Vue.component('paginate', Paginate);

    export default {
        name: "VideosPlaylist",
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                page: 1,
                page_count: 1,
                page_range: 1,
                query: null,
                videos: []
            }
        },
        created() {
            let vm = this;
            vm.getVideos();
        },
        methods: {
            triggerGetPaginateData(page_num) {
                this.getVideos(page_num)
            },
            getVideos(page_number = 1) {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.VIDEO_ALL, {
                    params: {
                        page: page_number,
                        lng: vm.currentLang,
                        limit: 2,
                        category: vm.$route.params.category,
                        query: vm.query
                    }
                }).then(response => {
                    let videos = [];
                    if (response.data.status) {
                        videos = response.data.data.video;

                        vm.videos = videos.data;
                        vm.page_range = videos.perPage;
                        vm.page_count = videos.lastPage;
                        vm.isLoading = false
                    }
                    return videos;
                })
            }
        }
    }
</script>

<style>
    iframe {
        width: 100%;
    }
</style>