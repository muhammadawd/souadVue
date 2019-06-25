<template>
    <!-- Aside Nav -->
    <div id="nav-aside">
        <ul class="nav-aside-menu">
            <li>
                <router-link :to="{ name: 'home'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('home_page')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about_person'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('site_name')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'activities'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('activities')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'written_peoms'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('poems_written')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'news'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('news')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'articles'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('articles')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'competitions'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('competitions')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'books'}"
                             tag="a" active-class="active"
                             exact-active-class="active">{{$ml.get('dar_versions')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'gallery'}"
                             tag="a" active-class="active"
                             exact-active-class="active">{{$ml.get('gallery')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'videos'}"
                             tag="a" active-class="active"
                             exact-active-class="active">{{$ml.get('videos')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'audios'}"
                             tag="a" active-class="active"
                             exact-active-class="active">{{$ml.get('audios')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about_us'}"
                             tag="a" active-class="active"
                             exact-active-class="active">{{$ml.get('about_us')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contact_us'}"
                             tag="a" active-class="active"
                             exact-active-class="active">{{$ml.get('contact_us')}}
                </router-link>
            </li>
        </ul>
        <button class="nav-close nav-aside-close"><span></span></button>
    </div>
    <!-- /Aside Nav -->
</template>

<script>
    export default {
        name: "TopHeaderSide",
        mounted() {
            this.sideBarFunctionality()
        },
        methods: {
            sideBarFunctionality() {
                // Aside Nav
                // $(document).click(function (event) {
                //     if (!$(event.target).closest($('#nav-aside')).length) {
                //         if ($('#nav-aside').hasClass('active')) {
                //             $('#nav-aside').removeClass('active');
                //             $('#nav').removeClass('shadow-active');
                //         } else {
                //             if ($(event.target).closest('.aside-btn').length) {
                //                 $('#nav-aside').addClass('active');
                //                 $('#nav').addClass('shadow-active');
                //             }
                //         }
                //     }
                // });

                $(document).on('click', '.aside-btn', function () {
                    $('#nav-aside').addClass('active');
                    $('#nav').addClass('shadow-active');
                });
                $(document).on('click', '.nav-aside-close', function () {
                    $('#nav-aside').removeClass('active');
                    $('#nav').removeClass('shadow-active');
                });
            }
        }
    }
</script>

<style scoped>

</style>