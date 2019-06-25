<template>

    <div>
        <Loader/>
        <Header/>
        <HeaderTitle :title="$ml.get('activities')"/>

        <ActivityList/>
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
    import ActivityList from '../components/AAPComponents/ActivityList'
    import Footer from '../components/mainComponents/Footer'

    export default {
        name: "Activities",
        components: {Loader, Header, HeaderTitle, ActivityList, Footer},
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