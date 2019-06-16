<template>

    <div>
        <Loader/>
        <Header/>
        <HeaderTitle :title="$ml.get('poems_written')"/>

        <PeomsList/>
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
    import PeomsList from '../components/AAPComponents/PeomsList'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "PeomsWritten",
        components: {Loader, Header, HeaderTitle, PeomsList, Footer},
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