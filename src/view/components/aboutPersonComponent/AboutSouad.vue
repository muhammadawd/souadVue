<template>
    <div class="container">
        <div class="row" v-if="about">
            <div class="col-md-12 mt-5" v-if="!about">
                <h1>{{this.$ml.get('no_data')}}</h1>
            </div>
            <div class="col-md-12 mt-5" v-if="about">
                <h3>{{about[currentLang].title}}</h3>
                <div v-html="about[currentLang].html">
                </div>
            </div>
            <div class="col-md-12 mt-5"></div>
        </div>
    </div>
</template>

<script>
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    export default {
        name: "AboutSouad",
        async created() {
            let vm = this;
            await vm.getAbout();
        },
        data() {
            return {
                isLoading: false,
                currentLang: this.$ml.current,
                about: null
            }
        },
        methods: {
            getAbout() {
                let vm = this;
                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.ABOUT_SOAUD, {
                    params: {
                        lang: vm.currentLang
                    }
                }).then(response => {
                    let about = null;
                    console.log(response)
                    if (response.data.status) {
                        vm.about = response.data.data.about;
                        vm.isLoading = false
                    }
                    return about;
                })

            }
        }
    }
</script>

<style scoped>

</style>