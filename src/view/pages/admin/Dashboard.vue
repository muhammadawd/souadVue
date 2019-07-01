<template>
    <div>
        <Loader/>
        <AdminTopHeader/>
        <AdminTopHeaderSide/>
        <MainPage/>
    </div>
</template>

<script>
    // import css files
    import '@/assets/css/bootstrap.min.css';
    import '@/assets/css/bootstrap-rtl.css';
    import '@/assets/css/style.css';
    import '@/assets/css/swiper.min.css';
    import '@/assets/js/packages/core/main.css';
    import '@/assets/js/packages/daygrid/main.css';
    import '@/assets/css/ar.css';

    // register import components files
    import Loader from '../../components/mainComponents/Loader'
    import AdminTopHeader from '../../components/mainComponents/AdminTopHeader'
    import AdminTopHeaderSide from '../../components/mainComponents/AdminTopHeaderSide'
    import MainPage from '../../components/adminComponents/MainPage'
    import Footer from '../../components/mainComponents/Footer'

    export default {
        name: "Dashboard",
        components: {Loader, AdminTopHeader, AdminTopHeaderSide, MainPage, Footer},
    }
</script>

<style scoped>

</style>