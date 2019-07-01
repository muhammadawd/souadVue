<template>
    <!-- Aside Nav -->
    <div id="nav-aside">
        <ul class="nav-aside-menu">
            <li>
                <router-link :to="{ name: 'dashboard'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('home_page')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_slider'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('slider')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_souad_about_us'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('site_name')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_activity'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('activities')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_poems'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('poems_written')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_news'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('news')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_articles'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('articles')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_books'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('dar_versions')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_gallery'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('gallery')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_audios'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('audios')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_videos'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('videos')}}
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'all_about_us'}"
                             tag="a" active-class="actives"
                             exact-active-class="active">{{$ml.get('about_us')}}
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