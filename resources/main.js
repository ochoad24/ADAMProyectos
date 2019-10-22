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

import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import auth from './auth'
import 'es6-promise/auto'

import alertify from 'alertifyjs';

Vue.use(window.VueCharts);
Vue.use(BootstrapVue)

Vue.use(VueRouter)

Vue.use(VueAxios, axios)
axios.defaults.baseURL='http://localhost:8000/api/v1';



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

var url = window.location.href;
var SwLocation='/sw.js';
var swReg;

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        SwLocation='/sw.js';    
    }
    window.addEventListener('load', function() {

        navigator.serviceWorker.register( SwLocation ).then( function(reg){

            swReg = reg;
            swReg.pushManager.getSubscription().then( (activo)=>{
                if(activo){
                    store.commit('changeNotificacion',true)
                }else{
                    store.commit('changeNotificacion',false)
                }
            });

        });

    });
}


// Ver si existe conexion a Internet
function isOnline() {

    if ( navigator.onLine ) {
        // tenemos conexión
        // console.log('online');
        alertify.success('Acceso a internet');

    } else{
        // No tenemos conexión
        alertify.error('Sin acceso a internet');
    }

}

window.addEventListener('online', isOnline );
window.addEventListener('offline', isOnline );

isOnline();

// Obtener GeoLocalizacion
navigator.geolocation.getCurrentPosition((pos)=>{
    console.log(pos);
});

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


