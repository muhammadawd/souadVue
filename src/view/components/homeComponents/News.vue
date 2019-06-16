<template>

    <!-- NEWS -->
    <div class="container mt-5">
        <div class="row mt-5">

            <div class="col-md-8">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent"> {{$ml.get('show_news')}} </h1>
                </div>
                <div class="post">
                    <a class="post-img" href=""><img src="@/assets/images/bg_2.jpeg" alt=""></a>
                    <div class="post-body">
                        <div class="post-category">
                            <a href="">الخبر الحالى</a>
                        </div>
                        <h3 class="post-title"><a href="">الامير فصيل بندر يشرف حفل ...</a></h3>
                        <p class="small">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                            مولد النص العربى
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                            مولد النص العربى ....
                        </p>
                        <ul class="post-meta">
                            <li><a href="">سعاد الصباحي</a></li>
                            <li>منذ 3 ساعات</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent"> {{$ml.get('latest_news')}} </h1>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="post post-widget ">
                            <a class="post-img" href=""><img src="@/assets/images/bg_2.jpeg" alt=""></a>
                            <div class="post-body">
                                <h3 class="post-title"><a href="">الامير فصيل بندر يشرف حفل ...</a></h3>
                                <p class="small">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                    النص من
                                    مولد النص
                                    العربى </p>
                                <div class="post-category pull-left">
                                    <router-link :to="{ name: 'show_news',params:{slug:'الامير-فيصل-بندر'}}" tag="a">
                                        {{$ml.get('more')}}
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="post post-widget  direction">
                            <a class="post-img" href=""><img src="@/assets/images/bg_2.jpeg" alt=""></a>
                            <div class="post-body">
                                <h3 class="post-title"><a href="">الامير فصيل بندر يشرف حفل ...</a></h3>
                                <p class="small">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                    النص من
                                    مولد النص
                                    العربى </p>
                                <div class="post-category pull-left">
                                    <router-link :to="{ name: 'show_news',params:{slug:'الامير-فيصل-بندر'}}" tag="a">
                                        {{$ml.get('more')}}
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="post post-widget  direction">
                            <a class="post-img" href=""><img src="@/assets/images/bg_2.jpeg" alt=""></a>
                            <div class="post-body">
                                <h3 class="post-title"><a href="">الامير فصيل بندر يشرف حفل ...</a></h3>
                                <p class="small">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                    النص من
                                    مولد النص
                                    العربى </p>
                                <div class="post-category pull-left">
                                    <router-link :to="{ name: 'show_news',params:{slug:'الامير-فيصل-بندر'}}" tag="a">
                                        {{$ml.get('more')}}
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="post post-widget  direction">
                            <a class="post-img" href=""><img src="@/assets/images/bg_2.jpeg" alt=""></a>
                            <div class="post-body">
                                <h3 class="post-title"><a href="">الامير فصيل بندر يشرف حفل ...</a></h3>
                                <p class="small">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                    النص من
                                    مولد النص
                                    العربى </p>
                                <div class="post-category pull-left">
                                    <router-link :to="{ name: 'show_news',params:{slug:'الامير-فيصل-بندر'}}" tag="a">
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
    <!-- /NEWS -->

</template>

<script>
    export default {
        name: "News",
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>

</style>