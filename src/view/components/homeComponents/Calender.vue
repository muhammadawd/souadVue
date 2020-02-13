<template>

    <!-- CALENDAR -->
    <div>
        <div class="main-bg" style="min-height: auto">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mt-5">
                        <div class="aside-widget">
                            <div class="section-title">
                                <h2 class="title bg-transparent"> {{$ml.get('subscribe_now')}}</h2>
                            </div>
                            <div class="newsletter-widget">
                                <form
                                        id="form"
                                        @submit="postSubscribe"
                                        method="post">
                                    <p> {{$ml.get('subscribe_p')}}</p>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input class="input" name="email" v-model="email"
                                                   :placeholder="$ml.get('type_email')">
                                            <div class="input-group-addon">
                                                <button class="primary-button"> {{$ml.get('subscribe_now')}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5"></div>
                </div>
                <div class="col-md-8 mt-5">
                    <div class="row">
                        <div class="col-md-6 parent_service">
                            <router-link :to="{ name: 'written_peoms'}"
                                         tag="a" active-class="active"
                                         exact-active-class="active">
                                <div class="service_element" data-950="top:-150px;right:-80px"
                                     data-1550="top:0;right:0px">
                                    <h4>قصائد سعاد الصباح</h4>
                                    <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive"
                                         width="50"
                                         alt="">
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-6 parent_service">
                            <router-link :to="{ name: 'about_person'}"
                                         tag="a" active-class="active"
                                         exact-active-class="active">
                                <div class="service_element" data-950="top:-150px;left:-80px"
                                     data-1550="top:0;left:0px">
                                    <h4>قالو عن سعاد الصباح</h4>
                                    <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive"
                                         width="50"
                                         alt="">
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-6 parent_service">
                            <router-link :to="{ name: 'gallery'}"
                                         tag="a" active-class="active"
                                         exact-active-class="active">
                                <div class="service_element" data-1250="bottom:-110px;right:-80px"
                                     data-1550="bottom:0;right:0px">
                                    <h4> مهرجان سعاد الصباح للفن والتشكيل </h4>
                                    <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive"
                                         width="50"
                                         alt="">
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-6 parent_service">
                            <router-link :to="{ name: 'videos'}"
                                         tag="a" active-class="active"
                                         exact-active-class="active">
                                <div class="service_element" data-1250="bottom:-110px;right:-80px"
                                     data-1550="bottom:0;right:0px">
                                    <h4>يوم الوفاء </h4>
                                    <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive"
                                         width="50"
                                         alt="">
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-6 parent_service">
                            <router-link :to="{ name: 'audios'}"
                                         tag="a" active-class="active"
                                         exact-active-class="active">
                                <div class="service_element" data-1250="bottom:-110px;right:-80px"
                                     data-1550="bottom:0;right:0px">
                                    <h4>{{$ml.get('audios')}} </h4>
                                    <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive"
                                         width="50"
                                         alt="">
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="section-title mt-5">
                        <h1 class="title title-custom bg-transparent"> {{$ml.get('activity_calendar')}} </h1>
                    </div>
                    <full-calendar :events="events" defaultView="month" themeSystem="bootstrap"
                                   :config="config"></full-calendar>

                </div>
            </div>
        </div>

        <div class="mt-5"></div>
    </div>
    <!-- /CALENDAR -->

</template>

<script>

    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import VueSharer from 'vue-sharer'
    import moment from 'moment'
    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';
    import {FullCalendar} from 'vue-full-calendar'

    import 'vue-toast-notification/dist/index.css';
    import 'fullcalendar/dist/fullcalendar.css'

    Vue.use(VueToast);

    export default {
        name: "Calender",
        components: {
            FullCalendar,
        },
        data() {
            return {
                events: [],
                config: {
                    locale: 'en',
                    weekends: false,
                    drop() {

                    },
                },
                email: null,
                currentLang: this.$ml.current
            }
        },
        async created() {
            await this.getDates()
        },
        methods: {
            postSubscribe(e) {
                let vm = this;
                e.preventDefault();

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.SUBSCRIBE, {
                        email: vm.email,
                    })
                    .then(response => {
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
            getDates() {

                let vm = this;
                axios.get(
                    apiServiesRoutes.BASE_URL + apiServiesRoutes.GET_DATES, {
                        params: {
                            lang: vm.currentLang
                        }
                    }).then(response => {
                    if (response.data.status) {
                        vm.events = response.data.data.date;
                    }
                    // return news;
                })
            }
        }
    }
</script>

<style>

    .fc-agendaWeek-button,
    .fc-agendaDay-button ,
    .fc-button:disabled{
        display: none !important;
    }

    .fc-icon-right-single-arrow:after {
        font-size: 35px;
        top: -5px;
    }

    .fc-icon-left-single-arrow:after {
        font-size: 35px;
        top: -5px;
    }
</style>
