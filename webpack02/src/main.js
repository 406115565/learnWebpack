require('babel-polyfill')
import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store/index.js'

Vue.use(VueRouter)



new Vue({
    el: '#app',
    router,
    store,
    template: '<app></app>',
    components: { app }
})