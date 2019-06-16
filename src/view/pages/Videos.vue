<template>
    <div>
        <Loader/>
        <Header/>
        <VideosPlaylist/>

        <Footer/>
    </div>
</template>

<script>
    /* eslint-disable */

    // import css files
    import '@/assets/css/bootstrap.min.css';
    import '@/assets/css/bootstrap-rtl.css';
    import '@/assets/css/style.css';
    import '@/assets/css/swiper.min.css';
    import '@/assets/css/owl.carousel.min.css';
    import '@/assets/css/owl.theme.default.min.css';
    import '@/assets/css/owl.theme.green.min.css';
    import '@/assets/js/packages/core/main.css';
    import '@/assets/js/packages/daygrid/main.css';
    import '@/assets/css/ar.css';

    // register import components files
    import Loader from '../components/mainComponents/Loader'
    import Header from '../components/mainComponents/Header'
    import VideosPlaylist from '../components/videoComponents/VideosPlaylist'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "Videos",
        components: {Loader, Header, VideosPlaylist, Footer},
        mounted() {
        },
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>

</style>