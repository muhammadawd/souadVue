<template>

    <div>
        <Loader/>
        <Header/>
        <Competitions/>
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
    import HeaderTitle from '../components/mainComponents/HeaderTitle'
    import Competitions from '../components/Competations/Competitions'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "Competations",
        components: {Loader, Header, HeaderTitle, Competitions, Footer},
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