<template>

    <!-- SLIDER -->
    <div class="container-fluids">
        <!-- row -->
        <div id="hot-post" class="row hot-post">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!-- post -->
                        <div class="post post-thumb">
                            <a class="post-img" href=""><img src="@/assets/images/bg_1.jpg" alt="" height="500"
                                                             width="100%"></a>
                            <div class="post-body">
                                <div class="post-category">
                                    <a href="">عنوان تجريبي</a>
                                </div>
                                <h3 class="post-title title-lg"><a href="">هذا النص تجريبي يستبدل لاحقا</a></h3>
                                <ul class="post-meta">
                                    <li><a href=""> سعاد الصباحي</a></li>
                                    <li>منذ 3 ساعات</li>
                                </ul>
                            </div>
                        </div>
                        <!-- /post -->
                    </div>
                    <div class="swiper-slide">
                        <!-- post -->
                        <div class="post post-thumb">
                            <a class="post-img" href=""><img src="@/assets/images/bg_4.jpg" alt="" height="500"
                                                             width="100%"></a>
                            <div class="post-body">
                                <div class="post-category">
                                    <a href="">عنوان تجريبي</a>
                                </div>
                                <h3 class="post-title title-lg"><a href="">هذا النص تجريبي يستبدل لاحقا</a></h3>
                                <ul class="post-meta">
                                    <li><a href=""> سعاد الصباحي</a></li>
                                    <li>منذ 3 ساعات</li>
                                </ul>
                            </div>
                        </div>
                        <!-- /post -->
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- /row -->
    </div>
    <!-- /SLIDER -->

</template>

<script>
    export default {
        name: "Slider",
        mounted() {
            this.swiperFunctionality()
        },
        methods: {
            swiperFunctionality() {
                require('@/assets/js/swiper.min.js')
                new Swiper('.swiper-container', {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
        }
    }
</script>

<style scoped>

</style>