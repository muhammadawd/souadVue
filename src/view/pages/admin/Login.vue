<template>
    <div>
        <Loader/>
        <AdminTopHeader/>
        <AdminTopHeaderSide/>
        <LoginForm/>
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
    import Loader from '../../components/mainComponents/Loader'
    import AdminTopHeader from '../../components/mainComponents/AdminTopHeader'
    import AdminTopHeaderSide from '../../components/mainComponents/AdminTopHeaderSide'
    import LoginForm from '../../components/authComponents/LoginForm'
    import Footer from '../../components/mainComponents/Footer'

    export default {
        name: "Home",
        components: {Loader, AdminTopHeader, AdminTopHeaderSide, LoginForm, Footer},
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