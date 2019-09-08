<template>
    <!-- IMAGE HEADER -->
    <div class="fixed_bg">
        <div class="fixed_bg_overlay"></div>
        <h2 class="fixed_bg_text">{{title}}</h2>
    </div>
    <!-- /IMAGE HEADER -->
</template>

<script>
    export default {
        props:['title'],
        name: "HeaderTitle"
    }
</script>

<style scoped>

</style>