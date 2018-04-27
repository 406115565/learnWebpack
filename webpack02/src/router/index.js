import VueRouter from 'vue-router'
import index from '../view/index.vue'
import pageA from '../view/pageA.vue'
import pageB from '../view/pageB.vue'
// const pageB = () => import('../view/pageB.vue')
import notFound from '../view/notFound.vue'



export default new VueRouter({
    routes: [
        { path: '*', component: notFound },
        { path: '/', component: index },
        { path: '/pageA', component: pageA },
        { path: '/pageB', component: pageB }
    ]
})