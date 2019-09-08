<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5" v-if="!currentCompetition">
                <h1>{{this.$ml.get('no_data')}}</h1>
            </div>
        </div>
        <div class="row" v-if="currentCompetition">
            <div class="col-md-12 mt-5">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('current_competition')}}</h1>
                </div>
            </div>
            <div class="col-md-12 mt-2" v-if="currentCompetition.status == 'finished'">

                <div class="newsletter-widget">
                    <div class="post">
                        <div class="bg-transparent">
                            <h3 class="post-title">{{$ml.get('winner_name')}}</h3>
                            <h3 class="post-title" v-for="(winner , key) in currentCompetition.winner" :key="key">
                                <img src="@/assets/images/award-512.png" width="50">
                                {{winner.name}}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4" style="padding-right: 25px">
                <h3>{{currentCompetition[currentLang].title}}</h3>
            </div>
            <div class="col-md-8">


                <div id="carousel" class="carousel slide" data-ride="carousel">

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item" v-for="(image,key) in currentCompetition.images" :key="key"
                             :class="key == 0 ? 'active': ''">
                            <img :src="image.fileName" alt="" style="height: 500px;width: 100%">
                        </div>
                    </div>

                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <!--                <img :src="currentCompetition.image" alt="">-->
            </div>
            <div class="col-md-12 mt-2" style="padding-right: 25px">
                <p v-html="currentCompetition[currentLang].description"></p>
            </div>
            <div class="col-md-12" v-if="currentCompetition.status == 'available'">
                <div class="form_contact ">
                    <form
                            id="form"
                            @submit="postApplication"
                            method="post">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h1 class="title title-custom bg-transparent"> {{$ml.get('subscribe_now')}} </h1>
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
                            <div class="col-md-6">
                                <input class="input mt-2" name="email" v-model="email" required
                                       autocomplete="off"
                                       :placeholder="$ml.get('type_email')">
                            </div>
                            <div class="col-md-6">
                                <input class="input mt-2" name="phone" v-model="phone" required
                                       autocomplete="off"
                                       :placeholder="$ml.get('type_phone')">
                            </div>
                            <div class="text-center">
                                <button class="primary-button mt-5"> {{$ml.get('subscribe_now')}}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';

    import 'vue-toast-notification/dist/index.css';

    Vue.use(VueToast);

    export default {
        name: "CompetitionsView",
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                currentCompetition: null,
                competition_id: this.$route.params.id,
                first_name: null,
                last_name: null,
                phone: null,
                email: null
            }
        },
        async created() {
            let vm = this;
            let _id = vm.$route.params.id;
            require('@/assets/js/bootstrap.min.js')
            await vm.getCompetition(_id)
        },
        methods: {
            postApplication(e) {
                let vm = this;
                e.preventDefault();

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITION_APPLICATION, {
                        name: vm.first_name + ' ' + vm.last_name,
                        phone: vm.phone,
                        email: vm.email,
                        competition_id: vm.$route.params.id
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
                            vm.email = null;
                            vm.phone = null;
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
            getCompetition(_id) {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITIONS + '/' + _id, {
                    params: {
                        lang: vm.currentLang,
                        limit: 2
                    }
                }).then(response => {
                    let competition = [];
                    if (response.data.status) {
                        vm.currentCompetition = response.data.data.competition;

                        vm.isLoading = false
                        setTimeout(() => {
                            $('.carousel').carousel()
                        },100);
                    }
                    return competition;
                })
            },
        }
    }
</script>

<style scoped>

</style>