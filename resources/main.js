import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import App from './App'
import routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import "chart.js";
import "hchs-vue-charts";
import vuetify from 'vuetify'
import swal from 'sweetalert2';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import auth from './auth'
import 'es6-promise/auto'

Vue.use(window.VueCharts);
Vue.use(BootstrapVue)
Vue.use(vuetify)


Vue.use(VueRouter)

Vue.use(VueAxios, axios)
axios.defaults.baseURL='http://localhost:8000/api/v1';



window.swal = swal;

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})


router.beforeEach((to, from, next) => {
    store.commit("routeChange", "start");
    next()
})

router.afterEach((to, from) => {
    document.title = to.meta.title
    store.commit("routeChange", "end");
    if (window.innerWidth < 992) {
        store.commit('left_menu', "close");
    } else {
        store.commit('left_menu', "open");
    }
})


Vue.router = router;
Vue.use(VueAuth, auth);
new Vue({
    el:"#app",
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')


