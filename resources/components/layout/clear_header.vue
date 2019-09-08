<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link to="/" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
                <!-- <img :src='require("../../img/logo7.png")' alt="logo"/> -->
                <img :src='require("../../img/logo10.png")' alt="logo"/>
                <!-- <h1 class="text-white">ADAM</h1> -->
            </router-link>
            <div class="navbar-collapse">
                <!-- Sidebar toggle button -->
                <div class="d-inline">
                    <a href="javascript:void(0)" class="navbar-btn sidebar-toggle" @click="toggle_left" role="button">
                        <i class="fa fa-fw fa-bars"></i>
                    </a>
                </div>
            </div>
            <div class="navbar-nav mr-auto" style="width: 60%;">
                <multiselect v-model="proyecto" :options="proyectos" placeholder="Seleccione un Proyecto" label="nombre" track-by="nombre"></multiselect>
            </div>
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
                            <div class="float-left">
                                <router-link to="/lockscreen" exact>
                                    <i class="fa fa-fw ti-lock"></i> Lock
                                </router-link>
                            </div>
                            <div class="float-right">
                                <router-link to="/login" exact>
                                    <i class="fa fa-fw ti-shift-right"></i> Logout
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
    import axios from 'axios';
    export default {
        name: "clear_header",
        components: {
        multiselect
        },
        data: () => ({
            proyectos: [],
            proyecto:{
                id:0,
                nombre:''
            }
        }),
        methods: {
            //Enable sidebar toggle
            toggle_left() {
                this.$store.commit('left_menu', "toggle");
            },
            toggle_right() {
                this.$store.commit('rightside_bar', "toggle");
            },
            cargarProyecto() {
                let me=this;
                fetch('/proyecto/select')
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    me.proyectos=myJson;
                    // console.log(me.proyectos);
                });
            },
        },
        mounted() {
            this.cargarProyecto();
            this.$root.$emit("SeleccionProyecto", 0);
        },
        watch: {
            proyecto(val) {
                if(val)
                {
                    this.$root.$emit("SeleccionProyecto", val.id);
                    console.log(val);
                }else{
                    this.$root.$emit("SeleccionProyecto", 0);
                    swal.fire({
                        type: 'warning',
                        title: 'Advertencia',
                        text: 'Por favor seleccione un proyecto',
                    })
                }
            }
        },
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
