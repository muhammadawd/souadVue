<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 mt-5"></div>
            <div class="col-md-6">
                <div class="post" v-if="current_news">
                    <router-link class="post-img"
                                 :to="{ name: 'show_news',params:{slug:current_news.slug,id:current_news._id}}" tag="a">
                        <img
                                :src="current_news.images[0].fileName" alt=""></router-link>
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
                        <p class="small" v-html="current_news[currentLang].description"></p>
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
                    <!--                    <div class="col-md-12">-->
                    <!--                        <bounce-spinner v-if="check_loader"></bounce-spinner>-->
                    <!--                    </div>-->
                    <div v-for="(_new,key) in news" :key="key" v-if="key != 0" class="col-md-12">
                        <div class="post post-row">
                            <router-link class="post-img" :to="{ name: 'show_news',params:{slug:_new.slug,id:_new._id}}"
                                         tag="a">
                                <img v-for="(image,key) in _new.images" :key="key" v-if="key == 0" :src="image.fileName" alt="">
                            </router-link>
                            <div class="post-body">
                                <div class="post-category">
                                    <router-link :to="{ name: 'show_news',params:{slug:_new.slug,id:_new._id}}" tag="a">
                                        {{_new[currentLang].publisher_name}}
                                    </router-link>
                                </div>
                                <h3 class="post-title">
                                    <router-link :to="{ name: 'show_news',params:{slug:_new.slug,id:_new._id}}" tag="a">
                                        {{_new[currentLang].title}}
                                    </router-link>
                                </h3>
                                <ul class="post-meta">
                                    <li>
                                        <router-link :to="{ name: 'show_news',params:{slug:_new.slug,id:_new._id}}"
                                                     tag="a">
                                            {{_new[currentLang].publisher_name}}
                                        </router-link>
                                    </li>
                                    <li> {{_new.date}}</li>
                                </ul>
                                <p class="small" v-html="_new[currentLang].description"></p>

                                <div class="post-category pull-left">
                                    <router-link :to="{ name: 'show_news',params:{slug:_new.slug,id:_new._id}}" tag="a">
                                        {{$ml.get('more')}}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>

            <div v-if="!current_news">
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
    /* eslint-disable */

    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue'
    import VueSpinners from 'vue-spinners'
    import BounceSpinner from "vue-spinners/src/components/BounceSpinner";

    Vue.use(VueSpinners);

    export default {
        name: "News",
        components: {BounceSpinner},
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
            vm.getNews()
        },
        methods: {
            triggerGetPaginateData(page_num) {
                let vm = this;
                vm.getNews(page_num)
            },
            getNews(page_number = 1) {
                let vm = this;
                // console.log(vm.$ml.current)

                vm.page = page_number;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.NEWS_PAGE, {
                        params: {
                            page: page_number,
                            lang: vm.currentLang,
                            category: vm.$route.params.category,
                            limit: 4
                        }
                    }).then(response => {

                    let news = [];
                    if (response.data.status) {
                        setTimeout(() => {
                            news = response.data.data.news;
                            vm.news = news.data;
                            vm.current_news = news.data[0];
                            vm.page_range = news.perPage;
                            vm.page_count = news.lastPage;
                        }, 100);
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