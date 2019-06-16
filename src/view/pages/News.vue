<template>

    <div>
        <Loader/>
        <Header/>
        <NewsComponent/>
        <Footer/>
    </div>
</template>

<script>
    /* eslint-disable */

    // import css files
    import '@/assets/css/bootstrap.min.css';
    import '@/assets/css/bootstrap-rtl.css';
    import '@/assets/css/style.css';
    import '@/assets/css/ar.css';

    // register import components files
    import Loader from '../components/mainComponents/Loader'
    import Header from '../components/mainComponents/Header'
    import NewsComponent from '../components/newsComponents/News'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "News",
        components: {Loader, Header, NewsComponent, Footer},
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