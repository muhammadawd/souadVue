<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 mt-5"></div>
            <div class="col-md-6">
                <div class="post" v-if="current_news">
                    <router-link class="post-img"
                                 :to="{ name: 'show_news',params:{slug:current_news.slug,id:current_news._id}}" tag="a">
                        <img :src="current_news.images[0].fileName" alt="" height="500"></router-link>
                    <div class="post-body">
                        <div class="post-category">
                            <router-link :to="{ name: 'show_news',params:{slug:current_news.slug,id:current_news._id}}"
                                         tag="a">
                                {{current_news[currentLang].publisher_name}}
                            </router-link>
                        </div>
                        <h3 class="post-title">
                            <router-link :to="{ name: 'show_news',params:{slug:current_news.slug,id:current_news._id}}"
                                         tag="a">
                                {{current_news[currentLang].title}}
                            </router-link>
                        </h3>
                        <!--                        <p class="small" v-html="current_news[currentLang].description"></p>-->
                        <ul class="post-meta">
                            <li>
                                <router-link
                                        :to="{ name: 'show_news',params:{slug:current_news.slug,id:current_news._id}}"
                                        tag="a">
                                    {{current_news[currentLang].publisher_name}}
                                </router-link>
                            </li>
                            <li>{{current_news.date}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h1 class="title title-custom bg-transparent">{{$ml.get('latest_news')}} </h1>
                        </div>
                    </div>
                    <div v-for="(_new,key) in news" :key="key" v-if="key != 0" class="col-md-12">
                        <div class="post post-row">
                            <div class="post-img" @click="current_news = _new" style="cursor: pointer">
                                <img v-for="(image,key) in _new.images" :key="key" v-if="key == 0" :src="image.fileName"
                                     height="140" alt="">
                            </div>
                            <div class="post-body" @click="current_news = _new" style="cursor: pointer">
                                <div class="post-category">
                                    {{_new[currentLang].publisher_name}}
                                </div>
                                <h3 class="post-title">
                                    {{_new[currentLang].title}}
                                </h3>
                                <ul class="post-meta">
                                    <li>
                                        {{_new[currentLang].publisher_name}}
                                    </li>
                                    <li> {{_new.date}}</li>
                                </ul>
                                <!--                                <p class="small" v-html="_new[currentLang].description"></p>-->

                                <div class="post-category pull-left">
                                    <router-link :to="{ name: 'show_news',params:{slug:_new.slug,id:_new._id}}" tag="a">
                                        {{$ml.get('more')}}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-md-12">
                        <infinite-loading @infinite="infiniteHandler">
                            <div slot="no-more"></div>
                            <div slot="no-results"></div>
                        </infinite-loading>
                    </div>
                </div>
            </div>

            <div v-if="!current_news">
                <h1 class="text-center" style="margin: 180px 0 250px">No Data</h1>
            </div>

            <!--<div class="col-md-12 text-center" v-if="page_count > 1">-->
            <!--<paginate-->
            <!--v-model="page"-->
            <!--:page-count="page_count"-->
            <!--:margin-pages="1"-->
            <!--:page-range="page_range"-->
            <!--:click-handler="triggerGetPaginateData"-->
            <!--:container-class="'pagination'"-->
            <!--:page-class="'page-item'"-->
            <!--:page-link-class="'page-link-item'"-->
            <!--:prev-class="'prev-item'"-->
            <!--:prev-link-class="'prev-link-item'"-->
            <!--:next-class="'next-item'"-->
            <!--:next-link-class="'next-link-item'"-->
            <!--:break-view-class="'break-view'"-->
            <!--:break-view-link-class="'break-view-link'"-->
            <!--&gt;</paginate>-->
            <!--</div>-->
        </div>
    </div>


</template>

<script>
    /* eslint-disable */

    import InfiniteLoading from 'vue-infinite-loading';
    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue'
    import VueSpinners from 'vue-spinners'
    import BounceSpinner from "vue-spinners/src/components/BounceSpinner";

    Vue.use(VueSpinners);

    export default {
        name: "News",
        components: {BounceSpinner, InfiniteLoading},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                page: 1,
                page_count: 1,
                page_range: 1,
                news: [],
                current_news: null
            }
        },
        created() {
            let vm = this;
            // vm.getNews()
        },
        methods: {
            infiniteHandler($state) {
                // console.log('scroll')
                this.getNews($state)
            },
            triggerGetPaginateData(page_num) {
                let vm = this;
                vm.getNews(page_num)
            },
            getNews($state) {
                let vm = this;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.NEWS_PAGE, {
                    params: {
                        page: vm.page,
                        lang: vm.currentLang,
                        category: vm.$route.params.category,
                        limit: 4
                    }
                }).then(response => {

                    let news = [];
                    if (response.data.status) {
                        if (vm.page == 1) {
                            if (response.data.data.news.data.length > 0){
                                vm.current_news = response.data.data.news.data[0]
                            }
                        }
                        vm.page += 1;
                        if (response.data.data.news.data.length) {
                            vm.news.push(...response.data.data.news.data);
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                        // setTimeout(() => {
                        //     news = response.data.data.news;
                        //     vm.news = news.data;
                        //     vm.current_news = news.data[0];
                        //     vm.page_range = news.perPage;
                        //     vm.page_count = news.lastPage;
                        // }, 100);
                    }
                    return news;
                })
            }
        },
        computed: {
            check_loader() {
                return this.isLoading;
            }
        }
    }
</script>

<style scoped>

</style>