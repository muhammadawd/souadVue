<template>
    <div class="container">
        <div>
            <tabs
                    :tabs="tabs"
                    :currentTab="currentTab"
                    :wrapper-class="'default-tabs'"
                    :tab-class="'default-tabs__item'"
                    :tab-active-class="'default-tabs__item_active'"
                    :line-class="'default-tabs__active-line'"
                    @onClick="handleClick"
            />
            <div class="content">
                <div v-if="currentTab === 'tab1'">

                    <div class="row">
                        <!--                        <div class="col-md-12 mt-5">-->
                        <!--                            <div class="section-title">-->
                        <!--                                <h1 class="title title-custom bg-transparent">{{$ml.get('current_competition')}}</h1>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <div class="col-md-12" v-if="un_finish_competitions.length == 0">
                            <h1>{{this.$ml.get('no_data')}}</h1>
                        </div>
                        <div class="col-md-12" v-for="(unf_comp , key) in un_finish_competitions" :key="key">
                            <div class="aside-widget">
                                <div class="section-title">
                                    <h2 class="title">{{$ml.get('competition_name')}}</h2>
                                </div>
                                <div class="newsletter-widget">
                                    <div class="post">
                                        <div class="post-body bg-transparent">
                                            <h3 class="post-title" style="margin-top: 15px;">
                                                {{unf_comp[currentLang].title}}
                                            </h3>
                                            <div class="post-category">
                                                <i class="fas fa-map-marker-alt text-primary"></i>
                                                {{$ml.get('competition_location')}} : {{unf_comp.location}}
                                            </div>
                                            <ul class="post-meta">
                                                <li> {{unf_comp.date}}</li>
                                            </ul>
                                            <p v-html="unf_comp[currentLang].title"></p>
                                            <div class="text-right">
                                                <router-link class="primary-button mt-5"
                                                             :to="{ name: 'show_competition',params:{id:unf_comp._id}}"
                                                             tag="a">
                                                    {{$ml.get('more')}}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 text-center" v-if="un_finish_page_count > 0">
                            <paginate
                                    v-model="un_finish_page"
                                    :page-count="un_finish_page_count"
                                    :margin-pages="2"
                                    :page-range="un_finish_page_range"
                                    :click-handler="triggerGetPaginateDataUnFinished"
                                    :container-class="'pagination'"
                                    :page-class="'page-item'"
                                    :page-link-class="'page-link-item'"
                                    :prev-class="'prev-item'"
                                    :prev-link-class="'prev-link-item'"
                                    :next-class="'next-item'"
                                    :next-link-class="'next-link-item'"
                                    :break-view-class="'break-view'"
                                    :break-view-link-class="'break-view-link'"
                                    :first-last-button="true"
                            ></paginate>
                        </div>
                    </div>
                </div>
                <div v-if="currentTab === 'tab2'">

                    <div class="row">
                        <!--                        <div class="col-md-12 mt-5">-->
                        <!--                            <div class="section-title">-->
                        <!--                                <h1 class="title title-custom bg-transparent">{{$ml.get('previous_competition')}}</h1>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <div class="col-md-12" v-if="finish_competitions.length == 0">
                            <h1>{{this.$ml.get('no_data')}}</h1>
                        </div>
                        <div class="col-md-12" v-for="(f_comp , index) in finish_competitions" :key="index">
                            <div class="aside-widget">
                                <div class="section-title">
                                    <h2 class="title">{{$ml.get('competition_name')}}</h2>
                                </div>
                                <div class="newsletter-widget">
                                    <div class="post">
                                        <div class="post-body bg-transparent">
                                            <h3 class="post-title" style="margin-top: 15px;">
                                                {{f_comp[currentLang].title}}
                                            </h3>
                                            <div class="post-category">
                                                <i class="fas fa-map-marker-alt text-primary"></i>
                                                {{$ml.get('competition_location')}} : {{f_comp.location}}
                                            </div>
                                            <ul class="post-meta">
                                                <li> {{f_comp.date}}</li>
                                            </ul>
                                            <p v-html="f_comp[currentLang].title"></p>
                                            <div class="text-right">
                                                <router-link class="primary-button mt-5"
                                                             :to="{ name: 'show_competition',params:{id:f_comp._id}}"
                                                             tag="a">
                                                    {{$ml.get('more')}}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center" v-if="finish_page_count > 0">
                            <paginate
                                    v-model="finish_page"
                                    :page-count="finish_page_count"
                                    :margin-pages="2"
                                    :page-range="finish_page_range"
                                    :click-handler="triggerGetPaginateDataFinished"
                                    :container-class="'pagination'"
                                    :page-class="'page-item'"
                                    :page-link-class="'page-link-item'"
                                    :prev-class="'prev-item'"
                                    :prev-link-class="'prev-link-item'"
                                    :next-class="'next-item'"
                                    :next-link-class="'next-link-item'"
                                    :break-view-class="'break-view'"
                                    :break-view-link-class="'break-view-link'"
                                    :first-last-button="true"
                            ></paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'
    import Tabs from 'vue-tabs-with-active-line';

    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'

    Vue.component('paginate', Paginate)
    export default {
        name: "Competitions",
        components: {
            Tabs,
        },
        data() {
            return {
                isLoading: false,
                tabs: [
                    {title: this.$ml.get('current_competition'), value: 'tab1'},
                    {title: this.$ml.get('previous_competition'), value: 'tab2'}
                ],
                currentTab: 'tab1',
                currentLang: this.$ml.current,
                finish_page: 1,
                finish_page_count: 1,
                finish_page_range: 1,
                finish_competitions: [],
                un_finish_page: 1,
                un_finish_page_count: 1,
                un_finish_page_range: 1,
                un_finish_competitions: []
            }
        },
        async created() {
            let vm = this;
            vm.getFinishedCompetitions();
            vm.getAvailableCompetitions();
        },
        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
            },
            triggerGetPaginateDataFinished(page_number) {
                let vm = this;
                vm.getFinishedCompetitions(page_number);
            },
            triggerGetPaginateDataUnFinished(page_number) {
                let vm = this;
                vm.getAvailableCompetitions(page_number);
            },
            getFinishedCompetitions(page_number = 1) {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITIONS_FINISHED_ALL, {
                    params: {
                        page: page_number,
                        limit: 2
                    }
                }).then(response => {
                    let competition = [];
                    if (response.data.status) {
                        competition = response.data.data.competition;

                        vm.finish_competitions = competition.data;
                        vm.finish_page_range = competition.perPage;
                        vm.finish_page_count = competition.lastPage;
                        vm.isLoading = false
                    }
                    return competition;
                })
            },
            getAvailableCompetitions(page_number = 1) {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.COMPETITIONS_AVAILABLE_ALL, {
                    params: {
                        page: page_number,
                        limit: 2
                    }
                }).then(response => {
                    let competition = [];
                    if (response.data.status) {
                        competition = response.data.data.competition;

                        vm.un_finish_competitions = competition.data;
                        vm.un_finish_page_range = competition.perPage;
                        vm.un_finish_page_count = competition.lastPage;
                        vm.isLoading = false
                    }
                    return competition;
                })
            },
        }
    }
</script>

<style>
    .default-tabs {
        position: relative;
        margin: 0 auto;
        margin-top: 50px;
    }

    .default-tabs__item {
        display: inline-block;
        margin: 0 5px;
        padding: 10px;
        padding-bottom: 8px;
        font-size: 22px;
        font-weight: bold;
        color: gray;
        text-decoration: none;
        border: none;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: all 0.25s;
    }

    .default-tabs__item_active {
        color: black;
    }

    .default-tabs__item:hover {
        border-bottom: 2px solid gray;
        color: black;
    }

    .default-tabs__item:focus {
        outline: none;
        border-bottom: 2px solid gray;
        color: black;
    }

    .default-tabs__item:first-child {
        margin-left: 0;
    }

    .default-tabs__item:last-child {
        margin-right: 0;
    }

    .default-tabs__active-line {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: black;
        transition: transform 0.4s ease, width 0.4s ease;
    }

    .disabled-tabs {
        position: relative;
        margin: 0 auto;
    }

    .disabled-tabs__item {
        display: inline-block;
        margin: 0 5px;
        padding: 10px;
        padding-bottom: 8px;
        font-size: 16px;
        letter-spacing: 0.8px;
        color: gray;
        text-decoration: none;
        border: none;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: all 0.25s;
    }

    .disabled-tabs__item:hover {
        border-bottom: 2px solid gray;
        color: black;
    }

    .disabled-tabs__item:focus {
        outline: none;
        border-bottom: 2px solid gray;
        color: blue;
    }

    .disabled-tabs__item_active {
        color: blue;
    }

    .disabled-tabs__item:disabled {
        border-bottom: 2px solid transparent;
        color: gray;
        cursor: default;
    }

    .disabled-tabs__item .tabs__item:first-child {
        margin-left: 0;
    }

    .disabled-tabs__item .tabs__item:last-child {
        margin-right: 0;
    }

    .disabled-tabs__active-line {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: blue;
        transition: transform 0.4s ease, width 0.4s ease;
    }

    .content {
        margin-top: 30px;
        font-size: 20px;
    }

</style>