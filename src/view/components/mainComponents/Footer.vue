<template>

    <footer id="footer">
        <!-- container -->
        <div class="container">
            <!-- row -->
            <div class="row">
                <div class="col-md-3">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="" class="logo"><img src="@/assets/images/logo.png" width="90" alt=""></a>
                        </div>
                        <p class="text-white">{{$ml.get('footer_p')}}</p>
<!--                        <ul class="contact-social">-->
<!--                            <li><a :href="staticInfo.facebook_url" target="_blank" class="social-facebook"><i-->
<!--                                    class="fab fa-facebook"></i></a></li>-->
<!--                            <li><a :href="staticInfo.twitter_url" target="_blank" class="social-twitter"><i-->
<!--                                    class="fab fa-twitter"></i></a></li>-->
<!--                            <li><a :href="staticInfo.instagram_url" target="_blank" class="social-instagram"><i-->
<!--                                    class="fab fa-instagram"></i></a></li>-->
<!--                        </ul>-->
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer-widget">
                        <h3 class="footer-title">{{$ml.get('tags')}}</h3>
                        <div class="tags-widget">
                            <ul>
                                <li><a href="#">كتب</a></li>
                                <li><a href="#">مقالات</a></li>
                                <li><a href="#">فيديوهات</a></li>
                                <li><a href="#">منشورات</a></li>
                                <li><a href="#">اخبار</a></li>
                                <li><a href="#">اخر الاحداث</a></li>
                                <li><a href="#">كتب</a></li>
                                <li><a href="#">مقالات</a></li>
                                <li><a href="#">فيديوهات</a></li>
                                <li><a href="#">منشورات</a></li>
                                <li><a href="#">اخبار</a></li>
                                <li><a href="#">اخر الاحداث</a></li>
                                <li><a href="#">كتب</a></li>
                                <li><a href="#">مقالات</a></li>
                                <li><a href="#">فيديوهات</a></li>
                                <li><a href="#">منشورات</a></li>
                                <li><a href="#">اخبار</a></li>
                                <li><a href="#">اخر الاحداث</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-widget">
                        <h3 class="footer-title">{{$ml.get('email')}} </h3>
                        <div class="newsletter-widget">
                            <form
                                    id="form"
                                    @submit="postSubscribe"
                                    method="post">
                                <p class="text-white"> {{$ml.get('subscribe_p')}}</p>
                                <input class="input" name="email" v-model="email" :placeholder="$ml.get('type_email')">
                                <div class="text-center">
                                    <button class="primary-button mt-5"> {{$ml.get('subscribe_now')}}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /row -->

            <!-- row -->
            <div class="footer-bottom row">
                <div class="col-md-12 text-center text-white">
                    <div class="footer-copyright">

                        {{$ml.get('all_rights')}} ©
                        {{ new Date().getFullYear()}}
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </div>
                </div>
            </div>
            <!-- /row -->
        </div>
        <!-- /container -->
    </footer>

</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'
    import GLOBALINFO from '../../../bootstrap/appStaticInfo'

    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';
    import 'vue-toast-notification/dist/index.css';

    Vue.use(VueToast);

    export default {
        name: "Footer",
        data() {
            return {
                staticInfo: GLOBALINFO,
                email: null,
                currentLang: this.$ml.current
            }
        },
        methods: {
            postSubscribe(e) {
                let vm = this;
                e.preventDefault();

                axios.post(apiServiesRoutes.BASE_URL + apiServiesRoutes.SUBSCRIBE, {
                    email: vm.email,
                }).then(response => {
                    let status = response.data.status;
                    let data = response.data.data;
                    if (status) {

                        Vue.$toast.open({
                            message: vm.$ml.get('_success'),
                            type: 'info'
                        });
                        vm.email = null;
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


            },
        }
    }
</script>

<style scoped>

</style>