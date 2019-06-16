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
                                <form>
                                    <p> {{$ml.get('subscribe_p')}}</p>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input class="input" name="newsletter" :placeholder="$ml.get('type_email')">
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
                            <div class="service_element" data-950="top:-150px;right:-80px" data-1550="top:0;right:0px">
                                <h4>قصائد سعاد الصباحي</h4>
                                <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive" width="50"
                                     alt="">
                            </div>
                        </div>
                        <div class="col-md-6 parent_service">
                            <div class="service_element" data-950="top:-150px;left:-80px" data-1550="top:0;left:0px">
                                <h4>قالو عن سعاد الصباحي</h4>
                                <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive" width="50"
                                     alt="">
                            </div>
                        </div>
                        <div class="col-md-6 parent_service">
                            <div class="service_element" data-1150="top:-10px;right:-80px" data-1550="top:0;right:0px">
                                <h4>مهرجان سعاد الصباحي للفن والتشكيل</h4>
                                <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive" width="50"
                                     alt="">
                            </div>
                        </div>
                        <div class="col-md-6 parent_service">
                            <div class="service_element" data-1150="top:-10px;left:-80px" data-1550="top:0;left:0px">
                                <h4>يوم الوفاء </h4>
                                <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive" width="50"
                                     alt="">
                            </div>
                        </div>
                        <div class="col-md-6 parent_service">
                            <div class="service_element" data-1250="bottom:-110px;right:-80px"
                                 data-1550="bottom:0;right:0px">
                                <h4>صوتيات </h4>
                                <img src="@/assets/images/mail-old-school-icon.png" class="img-responsive" width="50"
                                     alt="">
                            </div>
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
    import 'fullcalendar/dist/fullcalendar.css'

    import moment from 'moment'
    import {FullCalendar} from 'vue-full-calendar'


    export default {
        name: "Calender",
        components: {
            FullCalendar,
        },
        data() {
            return {
                events: [
                    {
                        title: ' فيصل',
                        start: '2019-06-06'
                    }
                ],
                config: {
                    locale: 'en',
                    weekends: false,
                    drop() {

                    },
                },
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style>

    .fc-agendaWeek-button,
    .fc-agendaDay-button {
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