<template>
    <div>
        <fade-transition origin="center" mode="out-in" :duration="150">
            <router-view/>
        </fade-transition>
    </div>
</template>

<script>
    import {FadeTransition} from "vue2-transitions";

    export default {
        name: "App",
        components: {
            FadeTransition
        }
    }
</script>

<style scoped>

</style>