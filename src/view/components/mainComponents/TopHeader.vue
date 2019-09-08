<template>
    <!-- Top Nav -->
    <div id="nav-top">
        <div class="container">
            <!-- social -->
            <ul class="nav-social">
                <li><a :href="staticInfo.facebook_url" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a :href="staticInfo.twitter_url"><i class="fab fa-twitter" target="_blank"></i></a></li>
                <li><a :href="staticInfo.instagram_url"><i class="fab fa-instagram" target="_blank"></i></a></li>
                <li style="cursor: pointer"><a @click="changeLangEn"><b>En</b></a></li>
                <li style="cursor: pointer"><a @click="changeLangAr"><b>AR</b></a></li>
            </ul>
            <!-- /social -->

            <!-- logo -->
            <div class="nav-logo">
                <a href="" class="logo">
                    <img src="@/assets/images/logo.png" alt="">
                </a>
            </div>
            <!-- /logo -->

            <!-- search & aside toggle -->
            <div class="nav-btns">
                <button class="aside-btn hidden-lg hidden-md"><i class="fas fa-bars"></i></button>
                <!--<button class="search-btn"><i class="fas fa-search"></i></button>-->
                <div id="nav-search">
                    <form>
                        <input class="input" name="search" :placeholder="$ml.get('search_placeholder')"
                               autocomplete="off">
                    </form>
                    <button class="nav-close search-close">
                        <span></span>
                    </button>
                </div>
            </div>
            <!-- /search & aside toggle -->
        </div>
    </div>
    <!-- /Top Nav -->
</template>

<script>
    import GLOBALINFO from '../../../bootstrap/appStaticInfo'

    export default {
        name: "TopHeader",
        data() {
            return {
                staticInfo: GLOBALINFO
            }
        },
        mounted() {
            this.searchFunctionality();
        },
        methods: {
            changeLangAr() {
                this.$ml.change('ar')
            },
            changeLangEn() {
                this.$ml.change('en')
            },
            searchFunctionality() {

                $('.search-btn').on('click', function () {
                    $('#nav-search').toggleClass('active');
                });

                $('.search-close').on('click', function () {
                    $('#nav-search').removeClass('active');
                });

            }
        }
    }
</script>

<style scoped>

</style>