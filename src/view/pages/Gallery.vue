<template>
    <div>
        <Loader/>
        <Header/>
        <GalleryList/>
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
    import '@/assets/js/packages/core/main.css';
    import '@/assets/js/packages/daygrid/main.css';
    import '@/assets/css/ar.css';

    // register import components files
    import Loader from '../components/mainComponents/Loader'
    import Header from '../components/mainComponents/Header'
    import GalleryList from '../components/galleryComponents/GalleryList'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "Gallery",
        components: {Loader, Header, GalleryList, Footer},
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