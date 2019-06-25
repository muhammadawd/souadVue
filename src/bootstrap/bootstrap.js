window._ = require('lodash')

try {
  window.$ = window.jQuery = require('jquery')

} catch (e) {
  // console.error('jquery not found')
}

try {
  window.axios = require('axios')
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  let token = null
  if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token
  }

} catch (e) {
  // console.error('axios not found')
}