<template>


    <!-- Main Nav -->
    <div id="nav-bottom">
        <div class="container-fluid">
            <!-- nav -->
            <ul class="nav-menu">
                <slot v-for="(nav_item , key) in NBar">
                    <li v-if="nav_item.categories.length == 0">
                        <router-link :to="{ name: nav_item.name}"
                                     tag="a" active-class="actives"
                                     exact-active-class="active">{{nav_item[currentLang].title}}
                        </router-link>
                    </li>

                    <li class="has-dropdown" v-if="nav_item.categories.length > 0">
                        <a href="#">{{nav_item[currentLang].title}}</a>
                        <div class="dropdown">
                            <div class="dropdown-body">
                                <ul class="dropdown-list">
                                    <li v-for="(category , _key) in nav_item.categories" :key="_key">
                                        <router-link :to="{ name: nav_item.name,params: {category:category}}"
                                                     tag="a" active-class="actives" class="black"
                                                     exact-active-class="active">{{category}}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </slot>
                <!--                <li>-->
                <!--                    <router-link :to="{ name: 'home'}"-->
                <!--                                 tag="a" active-class="actives"-->
                <!--                                 exact-active-class="active">{{$ml.get('home_page')}}-->
                <!--                    </router-link>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                    <router-link :to="{ name: 'about_person'}"-->
                <!--                                 tag="a" active-class="actives"-->
                <!--                                 exact-active-class="active">{{$ml.get('site_name')}}-->
                <!--                    </router-link>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('competitions')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'competitions'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('competitions')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('activities')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'activities'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('activities')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('poems_written')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'written_peoms'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('poems_written')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('news')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'news'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('news')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('articles')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'articles'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('articles')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('books')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'books'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('books')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('gallery')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'gallery'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('gallery')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('videos')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'videos'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('videos')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li class="has-dropdown">-->
                <!--                    <a href="#">{{$ml.get('audios')}}</a>-->
                <!--                    <div class="dropdown">-->
                <!--                        <div class="dropdown-body">-->
                <!--                            <ul class="dropdown-list">-->
                <!--                                <li>-->
                <!--                                    <router-link :to="{ name: 'audios'}"-->
                <!--                                                 tag="a" active-class="actives" class="black"-->
                <!--                                                 exact-active-class="active">{{$ml.get('audios')}}-->
                <!--                                    </router-link>-->
                <!--                                </li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                    <router-link :to="{ name: 'about_us'}"-->
                <!--                                 tag="a" active-class="active"-->
                <!--                                 exact-active-class="active">{{$ml.get('about_us')}}-->
                <!--                    </router-link>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                    <router-link :to="{ name: 'contact_us'}"-->
                <!--                                 tag="a" active-class="active"-->
                <!--                                 exact-active-class="active">{{$ml.get('contact_us')}}-->
                <!--                    </router-link>-->
                <!--                </li>-->
            </ul>
            <!-- /nav -->
        </div>
    </div>
    <!-- /Main Nav -->
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    export default {
        name: "TopHeaderNav",
        data() {
            return {
                currentLang: this.$ml.current,
                NBar: []
            }
        },
        mounted() {
            this.getMenuItems();
        },
        methods: {
            getMenuItems() {
                let vm = this;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.NAV_BAR, {
                    params: {
                        lang: vm.currentLang
                    }
                }).then(response => {
                    if (response.data.status) {
                        vm.NBar = response.data.data.navbar;

                    }
                });
            }

        }
    }
</script>

<style scoped>
    .black {
        color: #000 !important;
        text-align: right !important;
    }

    .nav-menu li.has-dropdown > a:after {
        margin-right: 5px !important;
    }
</style>