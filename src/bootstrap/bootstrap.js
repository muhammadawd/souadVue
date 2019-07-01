window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery')

} catch (e) {
    // console.error('jquery not found')
}

try {
    window.axios = require('axios');
    // window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    // window.axios.defaults.headers.common['Content-Type'] = 'application/json';
    let token = localStorage.getItem('auth_token');
    if (token) {
        window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

} catch (e) {
    // console.error('axios not found')
}