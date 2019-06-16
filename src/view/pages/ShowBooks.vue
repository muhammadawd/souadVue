<template>

    <div>
        <Loader/>
        <Header/>
        <ViewBook/>
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
    import ViewBook from '../components/booksComponents/ViewBook'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "ShowBooks",
        components: {Loader, Header, ViewBook, Footer},
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