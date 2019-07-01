<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5"></div>
            <div class="col-md-3"></div>
            <div class="col-md-6" style="padding-bottom:25px;box-shadow: 1px 2px 20px #6666;margin-top: 150px">
                <div class="form_contact ">
                    <form
                            id="form"
                            @submit="postLogin"
                            method="post">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h1 class="title title-custom bg-transparent"> {{$ml.get('login')}} </h1>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input class="input mt-2" name="username" v-model="username" required
                                       autocomplete="off"
                                       :placeholder="$ml.get('username')">
                            </div>
                            <div class="col-md-12">
                                <input class="input mt-2" type="password" name="password" v-model="password" required
                                       autocomplete="off"
                                       :placeholder="$ml.get('password')">
                            </div>

                            <div class="text-center">
                                <button class="primary-button mt-5"> {{$ml.get('login_btn')}}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // services imports
    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';

    import 'vue-toast-notification/dist/index.css';

    export default {

        name: "LoginForm",
        data() {
            return {
                username: 'testafgf',
                password: '',
            }
        },
        methods: {
            postLogin(e) {
                let vm = this;
                e.preventDefault();
                // console.log(this.$jwt.hasToken());
                // console.log(this.$jwt.getToken());
                // console.log(this.$jwt.decode());
                // console.log(this.$jwt)

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.LOGIN, {
                        username: vm.username,
                        password: vm.password
                    })
                    .then(response => {
                        let status = response.data.status;
                        let data = response.data.data;
                        // this.$router.push({name: '/home'});
                        // console.log(this.$jwt.hasToken());
                        // console.log(this.$jwt.getToken());
                        // console.log(this.$jwt.decode());
                        if (status) {

                            Vue.$toast.open({
                                message: vm.$ml.get('_success'),
                                type: 'info'
                            });

                            localStorage.setItem('auth_token', data.token);
                            vm.username = null;
                            vm.password = null;
                            vm.$router.push({name: 'dashboard'})
                            return;
                        } else {
                            data.validation_errors.forEach(function (item, index) {
                                Vue.$toast.open({
                                    message: item.message,
                                    type: 'error'
                                });
                            })
                        }
                    })
                    .catch(err => {
                        Vue.$toast.open({
                            message: vm.$ml.get('_error'),
                            type: 'error'
                        });
                    })
            }
        }
    }
</script>

<style scoped>

</style>