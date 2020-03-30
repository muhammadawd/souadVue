<template>
    <!--Books-->
    <div>
        <div class="mt-5"></div>
        <div class="main-bg" style="overflow: hidden">
            <div class="container-fluid">
                <div class="mt-5"></div>
                <div class="section-title bg-transparent">
                    <h1 class="title title-custom bg-transparent"> {{$ml.get('latest_versions')}}</h1>
                </div>
                <!--                <carousel :ref="'owl'" :autoplay="true" :nav="false"-->
                <!--                          :responsive="{0:{items: 1},600: {items: 8},1000: {items: 8}}"-->
                <!--                          :margin="15">-->
                <!--                    <div class="item" v-for="(book,key) in books" :key="key">-->
                <!--                                        <router-link :to="{ name: 'show_books',params:{id:book._id}}" tag="a">-->
                <!--                                            <img :src="book.image" class="bookitem" alt="">-->
                <!--                                        </router-link>-->
                <!--                    </div>-->
                <!--                </carousel>-->
                <div class="owl-carousel owl-theme owl-carousel-books" style="direction: ltr">
                    <div class="item" v-for="(book,key) in books" :key="key">
                        <router-link :to="{ name: 'show_books',params:{id:book._id}}" tag="a">
                            <img :src="book.image" class="bookitem" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5"></div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title bg-transparent">
                        <h1 class="title title-custom bg-transparent"> {{$ml.get('tweet')}}</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 over_flow_scroll">
                    <!--                    <Timeline id="DarSouadalsabah" sourceType="likes" :options="{ theme: 'dark' }"/>-->
                    <Timeline id="DarSouadalsabah" sourceType="profile" :options="{ tweetLimit: '3' }"/>

                </div>
            </div>
        </div>
    </div>
    <!--/Books-->
</template>

<script>
    /* eslint-disable */

    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    // css imports
    // import '@/assets/css/owl.carousel.min.css';
    // import '@/assets/css/owl.theme.default.min.css';
    // import '@/assets/css/owl.theme.green.min.css';
    import {Timeline} from 'vue-tweet-embed'


    import carousel from 'vue-owl-carousel'


    export default {
        name: "Books",
        components: {carousel, Timeline},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                books: []
            }
        },
        created() {
            let vm = this;
            window.fn = require('@/assets/js/owl.carousel.min.js');
            // vm.books = [
            //     {'image': ''},
            //     {'image': ''},
            //     {'image': ''},
            //     {'image': ''},
            //     {'image': ''},
            //     {'image': ''},
            //     {'image': ''},
            // ];
            vm.getBooks();
        },
        async mounted() {
            let vm = this;
        },
        methods: {
            getBooks() {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.BOOKS, {
                    params: {
                        lang: vm.currentLang
                    }
                }).then(response => {
                    let books = [];
                    if (response.data.status) {
                        vm.books = response.data.data.book;
                        vm.isLoading = false
                        setTimeout(() => {
                            vm.owlFunctionality(vm.books.length)
                        }, 500)
                    }
                    return books;
                })
            },
            owlFunctionality(le) {
                window.fn = require('@/assets/js/owl.carousel.min.js');

                $('.owl-carousel-books').owlCarousel({
                    rtl: true,
                    loop: true,
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 7
                        },
                        1000: {
                            items: 7
                        }
                    }
                }).trigger('to.owl.carousel', le)
            }
        }
    }
</script>

<style>
    .over_flow_scroll {
        max-height: 650px;
        overflow-y: scroll;
    }

    .owl-carousel .owl-item img {
        margin-bottom: 40px;
        min-height: 360px;
    }

    .owl-carousel .owl-stage-outer {
        direction: ltr !important;
        float: right;
    }
</style>
