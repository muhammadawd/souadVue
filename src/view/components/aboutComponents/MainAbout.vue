<template>
    <div>

        <div class="container">
            <div class="row" v-if="about">
                <div class="col-md-12 mt-5">
                    <div class="section-title">
                        <h1 class="title title-custom bg-transparent">{{$ml.get('about_us')}}</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <p v-html="about[currentLang].description"></p>
                </div>
                <div class="col-md-6">
                    <div style="width: 100%;direction: ltr">
                        <ul id="lightSlider">
                            <li v-for="(image , key) in about.images" :key="key" :data-thumb="image.fileName">
                                <img :src="image.fileName"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mt-5"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    export default {
        name: "MainAbout",
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                about: null
            }
        },
        async created() {
            require('@/assets/js/lightslider.min.js')
            await this.getAboutData();
        },
        methods: {
            sliderFunctionaliy() {
                require('@/assets/js/lightslider.min.js')

                $('#lightSlider').lightSlider({
                    gallery: true,
                    item: 1,
                    loop: true,
                    slideMargin: 0,
                    thumbItem: 4
                });
            },

            getAboutData() {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_ALL, {
                    params: {
                        lang: vm.currentLang,
                    }
                }).then(response => {
                    if (response.data.status) {
                        vm.about = response.data.data.about;
                        setTimeout(() => {
                            vm.sliderFunctionaliy();
                        }, 1000)
                        vm.isLoading = false
                    }
                })
            },
        }
    }
</script>

<style>
    #lightSlider img {
        height: 400px;
    }

    .lSSlideOuter .lSPager.lSGallery img {
        height: 125px !important;
        width: 100% !important;
        margin: auto;
    }
</style>