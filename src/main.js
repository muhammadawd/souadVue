import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueJWT from 'vuejs-jwt'


import './bootstrap/bootstrap'
import './bootstrap/apiServiesRoutes'
import './bootstrap/appStaticInfo'
import './bootstrap/ml'

Vue.use(VueJWT, {});
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
