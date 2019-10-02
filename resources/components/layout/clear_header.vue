<template>
    <header class="header">

        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link to="/" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
                <!-- <img :src='require("../../img/logo7.png")' alt="logo"/> -->
                <img :src='require("../../img/logo10.png")' alt="logo" />
                <!-- <h1 class="text-white">ADAM</h1> -->
            </router-link>
            <div class="navbar-collapse">
                <!-- Sidebar toggle button -->
                <div class="d-inline">
                    <a href="javascript:void(0)" class="navbar-btn sidebar-toggle" @click="toggle_left" role="button">
                        <i class="fa fa-fw fa-bars"></i>
                    </a>
                    <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                            <i class="navbar-btn sidebar-toggle fa fa-fw fa-search" v-on="on"></i>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Seleccione un Proyecto</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm12 md12>
                                                <multiselect v-model="proyecto" :options="proyectos" placeholder="Seleccione un Proyecto" label="nombre" track-by="nombre"></multiselect>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="close">Cerrar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    
                </div>
            </div>
            <div class="nav">
                <ul class="ul"><h1>{{ this.$store.state.proyecto.nombre }}</h1></ul>
            </div>
            <!-- <h1 v-text="this.$store.state.proyecto"></h1>  -->
            <!-- <v-flex xs4 sm4 md4>
                <multiselect v-model="proyecto" :options="proyectos" placeholder="Seleccione un Proyecto" label="nombre" track-by="nombre"></multiselect>
            </v-flex> -->
            <ul class="navbar-nav mr-auto">
                <b-dd class="user-dropdown">
                    <template slot="button-content">
                        <a href="#">
                            <img :src="this.$store.state.user.picture" width="35"
                                class="rounded-circle img-responsive float-left" height="35" alt="User Image">
                            <span class="user_name_max">
                                {{ this.$store.state.user.name }}
                            </span>
                        </a>
                    </template>
                    <div class="dropdown-profile">
                        <li class="user-header">
                            <img :src="this.$store.state.user.picture" class="rounded-circle" alt="User Image">
                            <p class="user_name_max" v-text="this.$store.state.user.name"></p>
                        </li>
                        <!-- Menu Body -->
                        <b-dropdown-item>
                            <router-link to="/user_profile" exact>
                                <i class="fa fa-fw ti-user"></i> My Profile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <router-link to="/edit_user" exact>
                                <i class="fa fa-fw ti-settings"></i> Account Settings
                            </router-link>
                        </b-dropdown-item>
                        <!-- Menu Footer-->
                        <b-dropdown-item class="dropdown-footer">
                            <!-- <div class="float-left">
                                <router-link to="/lockscreen" exact>
                                    <i class="fa fa-fw ti-lock"></i> Lock
                                </router-link>
                            </div> -->
                            <div class="float-right">
                                <router-link :to="to" @click.native="$auth.logout()">
                                    <i class="fa fa-fw ti-shift-right"></i> Cerrar Sesión
                                </router-link>
                            </div>
                        </b-dropdown-item>
                    </div>
                </b-dd>
                <!--User menu -->
            </ul>
        </nav>
    </header>
</template>
<script>
    import multiselect from 'vue-multiselect';
    import {mapGetters} from 'vuex';
    export default {
        name: "clear_header",
        components:{
            multiselect
        },
        data: () => ({
            to:'',
            search: '',
            dialog: false,
            proyectos: [],
            proyecto:{
                id:0,
                nombre:''
            },
            proyectoVacio:{
                id:0,
                nombre:''
            },
        }),
        computed:{
            ...mapGetters(["seleccion"])
        },
        watch: {
            dialog(val) {
                val || this.close()
                this.cargarProyecto();
            },
            proyecto(val) {
                if(val)
                {
                    // this.$root.$emit("SeleccionProyecto", val.id);
                    this.$store.commit('changeProject',val);
                    // console.log(val);
                }else{
                    this.$store.commit('changeProject',this.proyectoVacio);
                    swal.fire({
                        type: 'warning',
                        title: 'Advertencia',
                        text: 'Por favor seleccione un proyecto',
                    })
                }        
            },
            seleccion:{
                deep:true,
                handler(val){
                    this.proyecto=val;
                    this.cargarProyecto();
                }
            }
        },
        methods: {
            //Enable sidebar toggle
            close(){
              this.dialog=false;  
            },
            toggle_left() {
                this.$store.commit('left_menu', "toggle");
            },
            toggle_right() {
                this.$store.commit('rightside_bar', "toggle");
            },
            abrirModal() {

            },
            cargarProyecto() {
                let me=this;
                fetch('api/v1/proyecto/select')
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    me.proyectos=myJson;
                    // console.log(me.proyectos);
                });
            },
        },
        mounted(){
            this.cargarProyecto();
        }
        
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .nav{
    text-align: center;
    }
    .ul{
    display: inline-block;
    }
</style>
