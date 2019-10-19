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
import es from 'vuetify/es5/locale/es';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';


Vue.use(window.VueCharts);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(vuetify, {
    lang: {
        locales: { es },
        current: 'es'
    }
})
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
new Vue({
    el:"#app",
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')


