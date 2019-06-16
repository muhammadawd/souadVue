<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5">
                <div class="section-title">
                    <h1 class="title title-custom bg-transparent">{{$ml.get('dar_versions')}}</h1>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="bookitemlist">
                    <router-link :to="{ name: 'show_books',params:{id:1}}" tag="a">
                        <img src="https://via.placeholder.com/350x650" alt="">
                    </router-link>
                </div>
                <br>
                <h2 class="bold">الفيل الازرق</h2>
            </div>
            <div class="col-md-4 text-center">
                <div class="bookitemlist">
                    <router-link :to="{ name: 'show_books',params:{id:2}}" tag="a">
                        <img src="https://via.placeholder.com/350x650" alt="">
                    </router-link>
                </div>
                <br>
                <h2 class="bold">الفيل الازرق</h2>
            </div>
            <div class="col-md-4 text-center">
                <div class="bookitemlist">
                    <router-link :to="{ name: 'show_books',params:{id:3}}" tag="a">
                        <img src="https://via.placeholder.com/350x650" alt="">
                    </router-link>
                </div>
                <br>
                <h2 class="bold">الفيل الازرق</h2>
            </div>
            <div class="col-md-12 text-center">
                <paginate
                        v-model="page"
                        :page-count="4"
                        :margin-pages="2"
                        :page-range="5"
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
    import Vue from 'vue'
    import Paginate from 'vuejs-paginate'

    Vue.component('paginate', Paginate)
    export default {
        name: "Bookslist",
        data() {
            return {
                page: 1,
            }
        },
        methods: {

            triggerGetPaginateData(page_num) {
                console.log(page_num)
            }
        }
    }
</script>

<style scoped>
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
        color: #b7883f;
    }
</style>