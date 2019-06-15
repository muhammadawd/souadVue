<template>
    <div>
        <Loader/>
        <Header/>
        <HeaderTitle :title="$ml.get('about_us')"/>
        <!--<Footer/>-->
    </div>
</template>

<script>
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
    import HeaderTitle from '../components/mainComponents/HeaderTitle'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "AboutUs",
        components: {Loader, Header, HeaderTitle, Footer},
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