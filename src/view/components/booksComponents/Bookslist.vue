<template>
    <div class="container position_relative">
        <div class="position_absolute" v-if="isLoading">
            <bounce-spinner></bounce-spinner>
        </div>
        <div class="row">
            <div class="col-md-12 mt-5">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('dar_versions')}}</h1>
                </div>
            </div>
            <div class="col-md-4 text-center" v-for="(book,key) in books" :key="key">
                <div class="bookitemlist">
                    <router-link :to="{ name: 'show_books',params:{id:book._id}}" tag="a">
                        <img :src="book.image" alt="">
                    </router-link>
                </div>
                <br>
                <h2 class="bold">{{book[currentLang].title}} </h2>
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

    Vue.component('paginate', Paginate);

    export default {
        name: "Bookslist",
        components: {BounceSpinner},
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                page: 1,
                page_count: 1,
                page_range: 1,
                books: []
            }
        },
        created() {
            let vm = this;
            vm.getBooks();
        },
        mounted() {

        },
        methods: {
            triggerGetPaginateData(page_num) {
                console.log(page_num)
            },
            getBooks(page_number = 1) {
                let vm = this;
                vm.isLoading = true
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.BOOKS_ALL, {
                    params: {
                        page: page_number,
                        limit: 3
                    }
                }).then(response => {
                    let books = [];
                    if (response.data.status) {
                        books = response.data.data.book;
                        vm.books = books.data;
                        vm.page_range = books.perPage;
                        vm.page_count = books.lastPage;
                        vm.isLoading = false
                    }
                    return books;
                })
            }

        },
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

    .bookitemlist {
        box-shadow: 2px 2px 20px #888;
        border-radius: 15px;
        margin-top: 15px;
    }

    .bookitemlist img {
        width: 100%;
        height: 550px;
        border-radius: 15px;
    }

    .bold {
        font-weight: bold;
        color: #346bca;
        /*color: #b7883f;*/
    }
</style>