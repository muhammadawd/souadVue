<template>
    <!-- HEADER -->
    <header id="header">
        <!-- NAV -->
        <div id="nav">
            <TopHeader/>
            <TopHeaderNav/>
            <TopHeaderSide/>
        </div>
        <!-- /NAV -->
    </header>
    <!-- /HEADER -->
</template>

<script>
    // register import components files
    import TopHeader from '../mainComponents/TopHeader'
    import TopHeaderNav from '../mainComponents/TopHeaderNav'
    import TopHeaderSide from '../mainComponents/TopHeaderSide'

    export default {
        name: "Header",
        components: {TopHeader, TopHeaderNav, TopHeaderSide},
    }
</script>

<style scoped>

</style>