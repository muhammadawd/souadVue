<template>
    <div class="container-fluid">
        <div v-if="!currentBook">
            <h1 class="text-center" style="margin: 180px 0 250px">No Data</h1>
        </div>
        <div class="row" v-if="currentBook">

            <div class="col-md-3 text-center">
                <div class="bookitemlist">
                    <img :src="currentBook.image" alt="">
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-12 mt-5">
                        <h3>{{currentBook[currentLang].title}}</h3>
                        <div class="aside-widget">
                            <div class="social-widget">
                                <ul>
                                    <li>
                                        <a class="social-facebook" data-sharer="facebook"
                                           :data-title="currentBook[currentLang].title"
                                           :data-url="currentLink" v-sharer>
                                            <i class="fab fa-facebook"></i>
                                            <span>{{$ml.get('share_facebook')}}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="social-twitter" data-sharer="twitter"
                                           :data-title="currentBook[currentLang].title"
                                           :data-url="currentLink" v-sharer>
                                            <i class="fab fa-twitter"></i>
                                            <span>{{$ml.get('share_twitter')}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p v-html="currentBook[currentLang].description"> </p>
                    </div>
                    <div class="text-center">
                        <a :href="currentBook.file" target="_blank" class="primary-button danger-button mt-5">
                            {{$ml.get('view')}}
                            <i class="fas fa-eye"></i>
                        </a>
                        <a :href="currentBook.file" @click.prevent="downloadFile(currentBook.file_path)"
                           class="primary-button mt-5">
                            {{$ml.get('download')}}
                            <i class="fas fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'
    import VueSharer from 'vue-sharer'

    export default {
        name: "ViewBook",
        directives: {
            sharer: VueSharer,
        },
        created() {
            let vm = this;
            let _id = vm.$route.params.id;
            vm.getBook(_id)
        },
        data() {
            return {
                currentBook: null,
                currentLang: this.$ml.current,
                currentLink: window.location.href,
            }
        },
        components: {},
        methods: {
            downloadFile(file_path) {
                axios({
                    method: 'GET',
                    url: apiServiesRoutes.BASE_URL + apiServiesRoutes.BOOK_FILE + '?file_path=' + file_path,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        mode: 'no-cors'
                    },
                    responseType: 'arraybuffer'
                }).then((response) => {
                    let blob = new Blob([response.data]);
                    let link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'book.pdf';
                    link.click()
                })
                    .catch(error => {
                        console.log(error)
                    });
            },
            getBook(_id) {
                let vm = this;
                vm.isLoading = true;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.BOOK_Find + '/' + _id, {
                    params: {
                        lang: vm.currentLang
                    }
                }).then(response => {
                    if (response.data.status) {
                        vm.currentBook = response.data.data.book;

                        vm.isLoading = false
                    }
                })
            },
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

    .social-widget ul li a i {
        /*display: inline-block;*/
    }

    .social-widget ul li a {
        padding: 6px 50px;
        cursor: pointer;
    }

    .social-widget ul li {
        float: right;
        width: auto;
    }

    .danger-button {
        background-color: #F44336;
        color: #fff;
        -webkit-box-shadow: 0px 0px 0px 2px #2196f3 inset;
        box-shadow: 0px 0px 0px 2px #E91E63 inset;
    }
</style>