<template>

    <!-- NEWS -->
    <div class="container mt-5">
        <div class="row mt-5">

            <div class="col-md-8" v-if="currentNews">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent"> {{$ml.get('show_news')}} </h1>
                </div>
                <div class="post">
                    <router-link class="post-img"
                                 :to="{ name: 'show_news',params:{slug:currentNews.slug}}"
                                 tag="a">
                        <img v-for="(_image,key) in currentNews.images" :key="key" v-if="key == 0"
                             :src="_image.fileName" class="swiper-lazy" height="500"
                             alt="">
                        <!--                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
                    </router-link>
                    <div class="post-body">
                        <div class="post-category">
                            <a v-for="_tag in currentNews.tags">
                                {{_tag}}
                            </a>
                        </div>
                        <h3 class="post-title">
                            <router-link
                                    :to="{ name: 'show_news',params:{slug:currentNews.slug}}"
                                    tag="a">
                                {{currentNews[currentLang].title}}
                            </router-link>
                        </h3>
                        <!--                        <p class="small text-ellipsis" v-html="currentNews[currentLang].description"></p>-->
                        <ul class="post-meta">
                            <li>
                                <router-link
                                        :to="{ name: 'show_news',params:{slug:currentNews.slug}}"
                                        tag="a">
                                    {{currentNews[currentLang].publisher_name}}
                                </router-link>
                            </li>
                            <li>{{currentNews.date}}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent"> {{$ml.get('latest_news')}} </h1>
                </div>

                <div class="row ">
                    <div class="col-md-12" style="position:relative;">
                        <div style="position: absolute;left: 0px;top: 0px;width: 100%;">
                                <div class="swiper-button-prev" style="position: relative;height: 15px;left: 0px;margin-right: auto;"></div>
                                <div class="swiper-button-next" style="position: relative;height: 15px;right: 0;top: 7px;"></div>
                        </div>

                        <div id="swiper-container" class="swiper-container">

                            <!-- If we need navigation buttons -->

                            <!--&lt;!&ndash; If we need scrollbar &ndash;&gt;-->
                            <!--<div class="swiper-scrollbar"></div>-->

                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(_news,key) in news" :key="key" style="width: 100%;">
                                    <div class="post post-widget text-right direction" style="width: 100%;">
                                        <router-link class="post-img"
                                                     :to="{ name: 'show_news',params:{slug:_news.slug}}"
                                                     tag="a">
                                            <img v-for="(image,key) in _news.images" :key="key" v-if="key == 0"
                                                 :src="image.fileName" class="swiper-lazy" height="70px"
                                                 alt="">
                                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                        </router-link>
                                        <div class="post-body">
                                            <h3 class="post-title">
                                                <router-link
                                                        :to="{ name: 'show_news',params:{slug:_news.slug}}"
                                                        tag="a">
                                                    {{_news[currentLang].title}}
                                                </router-link>
                                            </h3>
                                            <!--                                            <p class="small text-ellipsis " v-html="_news[currentLang].description"></p>-->
                                            <div class="post-category pull-right">
                                                <router-link
                                                        :to="{ name: 'show_news',params:{slug:_news.slug}}"
                                                        tag="a">
                                                    {{$ml.get('more')}}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
    <!-- /NEWS -->

</template>

<script>
    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue'
    import VueSpinners from 'vue-spinners'
    import CircleSpinner from "vue-spinners/src/components/CircleSpinner";
    import FoldSpinner from "vue-spinners/src/components/FoldSpinner";
    import TileSpinner from "vue-spinners/src/components/TileSpinner";
    import PulseSpinner from "vue-spinners/src/components/PulseSpinner";
    import CubeSpinner from "vue-spinners/src/components/CubeSpinner";
    import BounceSpinner from "vue-spinners/src/components/BounceSpinner";

    Vue.use(VueSpinners)

    export default {
        name: "News",
        components: {BounceSpinner, CubeSpinner, PulseSpinner, TileSpinner, FoldSpinner, CircleSpinner},
        data() {
            return {
                isLoading: false,
                news: [],
                currentLang: this.$ml.current,
                ScrollInterval: null,
                ReachedMaxScroll: false,
                PreviousScrollTop: 0,
                currentIndex: 0,
                currentNews: null,
            }
        },
        mounted() {
            let vm = this;
            vm.getNews();
        },
        methods: {
            scrollDiv_init() {
                let vm = this;
                require('@/assets/js/swiper.min.js')
                let mySwiper = new Swiper('#swiper-container', {
                    direction: 'vertical',
                    lazy: true,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    loop: true,
                    spaceBetween: 30,
                });
                mySwiper.on('slideChange', function () {

                    vm.currentIndex = vm.currentIndex + 1;
                    if (vm.news.length <= vm.currentIndex) {
                        vm.currentIndex = 0;
                    }
                    vm.currentNews = vm.news[vm.currentIndex] != undefined ? vm.news[vm.currentIndex] : null;
                });

                $(".swiper-container").hover(function () {
                    console.log('stop swipper')
                    mySwiper.autoplay.stop();
                }, function () {
                    console.log('start swipper')
                    mySwiper.autoplay.start();
                    // mySwiper.stopAutoplay();
                });
                // mySwiper.startAutoplay();
                // mySwiper.stopAutoplay();
            },
            getNews() {
                let vm = this;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.NEWS_PAGE, {
                    params: {
                        lang: vm.currentLang,
                        limit: 10
                    }
                }).then(response => {
                    let news = [];
                    if (response.data.status) {
                        vm.news = response.data.data.news.data;
                        if (vm.news[0] != undefined) {
                            vm.currentNews = vm.news[0]
                        }
                    }
                    setTimeout(() => {
                        vm.scrollDiv_init();
                    }, 1000);
                    return news;
                });
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
    .overflow_scroll {
        max-height: 600px;
        overflow-y: scroll;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
        max-height: 460px;
        margin-bottom: 100px;
    }

    .swiper-slide {
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .text-ellipsis {
        height: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .text-ellipsis::after {
        content: '';
        position: absolute;
        bottom: -5px;
        font-size: 20px;
        left: -1px;
    }
</style>