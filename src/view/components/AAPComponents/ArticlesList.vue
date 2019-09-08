<template>
    <div class="container position_relative">
        <div class="position_absolute" v-if="isLoading">
            <bounce-spinner></bounce-spinner>
        </div>
        <div class="row">
            <div class="col-md-12 mt-5">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('articles')}}</h1>
                </div>
            </div>
            <div class="col-md-12 mt-5" v-for="(article ,key) in articles" :key="key">
                <div class="post post-row">
                    <a class="post-img" href=""><img v-for="(image , index) in article.images" :src="image.fileName"
                                                     alt=""></a>
                    <div class="post-body">
                        <div class="post-category">
                            <a href="">{{$ml.get('articles')}}</a>
                        </div>
                        <h3 class="post-title"><a href="">
                            {{article[currentLang].title}}
                        </a></h3>
                        <ul class="post-meta">
                            <li><a href="">{{article[currentLang].publisher_name}}</a></li>
                            <li>{{article.date}}</li>
                        </ul>
                    </div>
                    <p style="padding-right: 20px;" v-html="article[currentLang].description">
                    </p>
                    <!--                    <div class="text-left">-->
                    <!--                        <button class="primary-button mt-5"> {{$ml.get('more')}}</button>-->
                    <!--                    </div>-->
                </div>
            </div>
            <div class="col-md-12 text-center" v-if="page_count > 0">
                <paginate
                        v-model="page"
                        :page-count="page_count"
                        :margin-pages="2"
                        :page-range="page_range"
                        :click-handler="triggerGetPaginateData"
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
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'
    import BounceSpinner from "vue-spinners/src/components/BounceSpinner";

    Vue.component('paginate', Paginate)
    export default {
        name: "ArticleList",
        components: {BounceSpinner},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                page: 1,
                page_count: 1,
                page_range: 1,
                articles: []
            }
        },
        async created() {
            let vm = this;
            await vm.getArticles();
        },
        methods: {
            triggerGetPaginateData(page_num) {
                this.getArticles(page_num)
            },
            getArticles(page_number = 1) {
                let vm = this;
                vm.isLoading = true;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ARTICLE_ALL, {
                    params: {
                        page: page_number,
                        lng: vm.currentLang,
                        category: vm.$route.params.category,
                        limit: 1
                    }
                }).then(response => {
                    let articles = [];
                    if (response.data.status) {
                        articles = response.data.data.article;

                        vm.articles = articles.data;
                        vm.page_range = articles.perPage;
                        vm.page_count = articles.lastPage;
                        vm.isLoading = false
                    }
                    return articles;
                })
            }
        }
    }
</script>

<style scoped>
    .position_relative {
        position: relative;
    }

    .position_absolute {
        position: absolute;
        background: #FFF;
        width: 100%;
        height: 100%;
        z-index: 9;
        padding-top: 5%;
    }

    @media only screen and (min-width: 600px) {
        .post.post-row .post-body {
            margin: 0px 335px 0px 0px !important;
        }
    }
    .post.post-row .post-img{
        margin-left: 10px;
    }
</style>