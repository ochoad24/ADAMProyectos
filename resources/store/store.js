import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '../store/mutations';
Vue.use(Vuex);

//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        left_open: true,
        right_open: false,
        preloader: true,
        user: {
            nombre: "Daniel",
            apellido:"Ochoa",
            picture: require('../img/authors/man.png'),
            job: "Administrador",
            role:0,
            id:0,
            email:"",
        },
        proyecto:{
            id:0,
            nombre:''
        },
        notificacion:false
    },
    mutations,
    getters:{
        seleccion(state){
            return state.proyecto;
        }
    }
});

//=======vuex store end===========
export default store
