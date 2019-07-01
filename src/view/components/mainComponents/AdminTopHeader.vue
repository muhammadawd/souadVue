<template>
    <div id="nav">
        <!-- Top Nav -->
        <div id="nav-top">
            <div class="container">
                <!-- social -->
                <ul class="nav-social">
                    <li v-if="isAuth" style="cursor: pointer">
                        <a @click="triggerLogout">
                            <i class="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                    <li  style="cursor: pointer">
                        <a >

                        </a>
                    </li>
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
                    <button class="aside-btn" v-if="isAuth"><i class="fas fa-bars"></i></button>
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

        <!--        <div id="nav-bottom">-->
        <!--            <div class="container-fluid">-->
        <!--                &lt;!&ndash; nav &ndash;&gt;-->
        <!--                <ul class="nav-menu">-->
        <!--                    <li></li>-->
        <!--                </ul>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
    import GLOBALINFO from '../../../bootstrap/appStaticInfo'

    export default {
        name: "TopHeader",
        data() {
            return {
                staticInfo: GLOBALINFO,
                isAuth: false
            }
        },
        mounted() {
            this.searchFunctionality();
            let auth_user = localStorage.getItem('auth_token');
            if (auth_user) {
                this.isAuth = true;
            }
        },
        methods: {
            triggerLogout() {
                localStorage.removeItem('auth_token');
                this.$router.push({name: 'login'})
            },
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