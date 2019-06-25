<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 mt-5"></div>
            <div class="col-md-3"></div>
            <div class="col-md-6" v-if="currentNews">
                <div class="post">
                    <a class="post-img" href="#">
                        <img v-for="(image,key) in currentNews.images" :key="key" :src="image.fileName" alt="">
                    </a>
                    <div class="post-body">
                        <div class="post-category">
                            <a href="#">{{currentNews[currentLang].publisher_name}} </a>
                        </div>
                        <h3 class="post-title"><a href=""> {{currentNews[currentLang].title}} </a></h3>
                        <ul class="post-meta">
                            <li> {{currentNews.date}}</li>
                        </ul>
                        <div class="aside-widget">
                            <div class="social-widget">
                                <ul>
                                    <li>
                                        <a class="social-facebook" data-sharer="facebook"
                                           data-title="reviewpost"
                                           :data-url="currentLink"
                                           v-sharer>
                                            <i class="fab fa-facebook"></i>
                                            <span>{{$ml.get('share_facebook')}}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="social-twitter" data-sharer="twitter"
                                           data-title="reviewpost"
                                           :data-url="currentLink"
                                           v-sharer>
                                            <i class="fab fa-twitter"></i>
                                            <span>{{$ml.get('share_twitter')}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p class="smalls" v-html="currentNews[currentLang].description">

                        </p>
                    </div>

                    <div class="form_contact ">
                        <form
                                id="form"
                                @submit="postComment"
                                method="post">
                            <div class="row">
                                <input type="hidden" name="news_id" v-model="news_id">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <h1 class="title title-custom bg-transparent"> {{$ml.get('add_comment')}} </h1>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <input class="input mt-2" name="first_name" v-model="first_name" required
                                           autocomplete="off"
                                           :placeholder="$ml.get('type_first_name')">
                                </div>
                                <div class="col-md-6">
                                    <input class="input mt-2" name="last_name" v-model="last_name" required
                                           autocomplete="off"
                                           :placeholder="$ml.get('type_last_name')">
                                </div>
                                <div class="col-md-12">
                                    <input class="input mt-2" name="subject" v-model="subject" required
                                           autocomplete="off"
                                           :placeholder="$ml.get('type_subject')">
                                </div>
                                <div class="col-md-12">
                                <textarea class="input mt-2" name="comment" v-model="comment" required
                                          autocomplete="off"
                                          :placeholder="$ml.get('type_comment')"></textarea>
                                </div>

                                <div class="text-center">
                                    <button class="primary-button mt-5"> {{$ml.get('add_comment')}}</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>

</template>

<script>
    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import VueSharer from 'vue-sharer'
    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';

    import 'vue-toast-notification/dist/index.css';

    Vue.use(VueToast);

    export default {
        name: "ViewNews",
        directives: {
            sharer: VueSharer,
        },
        created() {
            let vm = this;
            let params = this.$route.params;

            vm.getCurrentNews(params.slug)
        },
        data() {
            return {
                currentLang: this.$ml.current,
                currentLink: window.location.href,
                currentNews: null,
                news_id: null,
                first_name: null,
                last_name: null,
                comment: null,
                subject: null,
            }
        },
        methods: {
            getCurrentNews(slug) {
                let vm = this;

                axios.get(
                    apiServiesRoutes.BASE_URL + apiServiesRoutes.NEWS_SLUG, {
                        params: {
                            lang: 'ar',
                            slug: slug
                        }
                    }).then(response => {
                    if (response.data.status) {
                        vm.currentNews = response.data.data.news;
                        vm.news_id = response.data.data.news._id;
                    }
                    // return news;
                })
            },
            postComment(e) {
                let vm = this;
                e.preventDefault();

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.NEWS_COMMENT, {
                        first_name: vm.first_name,
                        last_name: vm.last_name,
                        comment: vm.comment,
                        subject: vm.subject,
                        news_id: vm.news_id
                    })
                    .then(response => {
                        let status = response.data.status;
                        let data = response.data.data;
                        if (status) {

                            Vue.$toast.open({
                                message: vm.$ml.get('_success'),
                                type: 'info'
                            });
                            vm.first_name = null;
                            vm.last_name = null;
                            vm.comment = null;
                            vm.subject = null;
                        } else {
                            data.validation_errors.forEach(function (item, index) {
                                Vue.$toast.open({
                                    message: item.message,
                                    type: 'error'
                                });
                            })
                        }
                    })
                    .catch(err => {
                        Vue.$toast.open({
                            message: vm.$ml.get('_error'),
                            type: 'error'
                        });
                    })


            }
        }
    }
</script>

<style scoped>

    .social-widget ul li a i {
        /*display: inline-block;*/
    }

    .social-widget ul li a {
        padding: 6px 50px;
        cursor: pointer;
    }

    .social-widget ul li {
        float: right;
        width: auto;
    }
</style>