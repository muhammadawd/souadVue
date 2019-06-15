<template>
    <div class="loader-overlay">
        <div id='loader'>
            <div class='diamond'></div>
            <div class='diamond'></div>
            <div class='diamond'></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        mounted() {
            this.loaderFunctionality();
        },
        methods: {
            loaderFunctionality() {
                setTimeout(() => {
                    $('.loader-overlay').fadeOut();
                }, 300)
            }
        }
    }
</script>

<style scoped>

</style>