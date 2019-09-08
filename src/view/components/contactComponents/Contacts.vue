<template>
    <div class="container">
        <div class="row" v-if="about">
            <div class="col-md-6 mt-5">
                <ul class="contact-icons">
                    <li>
                        <div class="icon-content">
                            <i class="fa fa-map-marker-alt fa-2x main-color"></i>
                        </div>
                        <p class="contact-p">{{about[currentLang].location}}</p>
                    </li>
                    <li>
                        <div class="icon-content">
                            <i class="fas fa-mobile fa-2x main-color"></i>
                        </div>
                        <p class="contact-p">{{about.phone}}</p>
                    </li>
                    <li>
                        <div class="icon-content">
                            <i class="far fa-envelope fa-2x main-color"></i>
                        </div>
                        <p class="contact-p"> {{about.email}}</p>
                    </li>
                    <li>
                        <div class="icon-content">
                            <i class="fas fa-phone fa-2x main-color"></i>
                        </div>
                        <p class="contact-p">{{$ml.get('for_issues')}}: {{about.for_issues}}</p>
                    </li>
                </ul>
                <div class="section-title mt-5">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('socail_media')}}</h1>
                </div>
                <ul class="list-inline">
                    <li>
                        <a :href="about.facebook" target="_blank">
                            <div class="social_element social_bg_fb"></div>
                        </a>
                    </li>
                    <li>
                        <a :href="about.twitter" target="_blank">
                            <div class="social_element social_bg_tw"></div>
                        </a>
                    </li>
                    <li>
                        <a :href="about.instagram" target="_blank">
                            <div class="social_element social_bg_ns"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <div class="mt-5" v-html="about.map">
<!--                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3478.3130725872093!2d47.95123147964475!3d29.33181931854667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84bcf08fa443%3A0x513cb926bdbb6ef5!2sAl-Assriya!5e0!3m2!1sen!2s!4v1485856667114"-->
<!--                                                width="100%" height="350" frameborder="0" style="border:1px solid #777" scrolling="no"-->
<!--                                                allowfullscreen=""></iframe>-->

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
            await this.getAboutData();
        },
        methods: {

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

                        vm.isLoading = false
                    }
                })
            },
        }
    }
</script>
<style scoped>

</style>