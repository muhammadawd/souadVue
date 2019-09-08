import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueJWT from 'vuejs-jwt'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: '#2195f3',
    failedColor: '#f00',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
});

import './bootstrap/bootstrap'
import './bootstrap/apiServiesRoutes'
import './bootstrap/appStaticInfo'
import './bootstrap/ml'

Vue.use(VueJWT, {});
Vue.config.productionTip = false;

const axios = require('axios');

let token = localStorage.getItem('auth_token');
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

new Vue({
    router,
    watch: {
        '$route': function (to, from) {
            let token = localStorage.getItem('auth_token');
            if (token) {
                window.axios.defaults.headers.common['Accept'] = 'application/json';
                window.axios.defaults.headers.common['Content-Type'] = 'application/json';
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
        }
    },
    render: h => h(App)
}).$mount('#app');
