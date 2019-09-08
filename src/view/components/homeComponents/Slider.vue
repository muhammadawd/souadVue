<template>

    <!-- SLIDER -->
    <div class="container-fluids">
        <!-- row -->
        <div id="hot-post" class="hot-post" style="padding: 0">
            <div id="swiper-container-slider" class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(slide , key) in slider" :key="key">
                        <!-- post -->
                        <div class="post post-thumb">
                            <a class="post-img" href="">
                                <img :src="slide.image" alt="" height="500"
                                     width="100%"></a>
                            <div class="post-body">
                                <div class="post-category">
                                    <a href="">{{slide[currentLang].title}} </a>
                                </div>
                                <h3 class="post-title title-lg"><a href="">{{slide[currentLang].description}}</a></h3>
                                <ul class="post-meta">
                                    <li><a href=""> {{slide[currentLang].title}}</a></li>
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
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    export default {
        name: "Slider",
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                slider: []
            }
        },
        async created() {
            let vm = this;
            vm.getSlider();
        },
        methods: {

            getSlider() {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.SLIDER_ALL, {
                    params: {
                        lang: vm.currentLang,
                    }
                }).then(response => {
                    if (response.data.status) {
                        vm.slider = response.data.data.slider;
                        vm.isLoading = false
                        setTimeout(()=>{
                            vm.swiperFunctionality();
                        },100)
                    }
                })
            },

            swiperFunctionality() {
                require('@/assets/js/swiper.min.js')
                new Swiper('#swiper-container-slider', {
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