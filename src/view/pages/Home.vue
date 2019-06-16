<template>
    <div>
        <Loader/>
        <Header/>
        <Slider/>
        <News/>
        <Calender/>
        <Books/>
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
    import Footer from '../components/mainComponents/Footer'

    import Slider from '../components/homeComponents/Slider'
    import News from '../components/homeComponents/News'
    import Calender from '../components/homeComponents/Calender'
    import Books from '../components/homeComponents/Books'

    export default {
        name: "Home",
        components: {Loader, Header, Slider, News, Calender, Books, Footer},
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