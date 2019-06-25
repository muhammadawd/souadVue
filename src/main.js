import Vue from 'vue'
import App from './App.vue'
import router from './router/router'


import './bootstrap/bootstrap'
import './bootstrap/apiServiesRoutes'
import './bootstrap/appStaticInfo'
import './bootstrap/ml'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
