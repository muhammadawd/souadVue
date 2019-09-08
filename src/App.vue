<template>
    <div>
        <fade-transition origin="center" mode="out-in" :duration="150">
            <router-view/>
        </fade-transition>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
    import {FadeTransition} from "vue2-transitions";
    import pace from 'pace-progress';

    export default {
        name: "App",
        components: {
            FadeTransition
        },
        mounted () {

            // require('pace-progress')

            // require('@/assets/js/pace.min.js')
            // pace.start({ /* opions */})
            // console.log(pace)
        }
    }
</script>

<style scoped>

</style>