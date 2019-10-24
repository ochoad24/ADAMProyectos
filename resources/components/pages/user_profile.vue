<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="text-center mbl m-t-10">

                                        <img :src='require("../../img/authors/man.png")' alt="img"
                                            class="rounded-circle img-bor" />
                                    </div>
                                </div>
                                <div class="profile_user">
                                    <h1 class="user_name_max">
                                        {{ this.$store.state.user.name }}
                                    </h1>


                                </div>
                                &nbsp;&nbsp;

                                <br />

                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <b-tabs ref="tabs" class="profile-tabs">
                                            <b-tab title="Perfil" active>
                                                <div id="tab-activity" class="tab-pane animated fadeInRight  active">
                                                    <div class="table-responsive">
                                                        <br>
                                                        <v-text-field label="Nombre" maxlength="50" required
                                                            :counter="50" v-model="user.nombre"></v-text-field>
                                                        <v-text-field label="Apellido" maxlength="50" required
                                                            :counter="50" v-model="user.apellido"></v-text-field>
                                                        <v-text-field label="Correo" maxlength="50" required
                                                            :counter="50" v-model="user.email"></v-text-field>
                                                        <v-btn color="#668c2d" class="ma-2" dark @click="guardarUsuario">
                                                            Guardar
                                                        </v-btn>
                                                    </div>
                                                </div>
                                            </b-tab>
                                            <b-tab title="Contraseña">
                                                <div class="row m-t-l-10">
                                                    <div class="col-md-6 col-lg-6 col-sm-6 bord">
                                                        <v-text-field label="Nueva Contraseña" maxlength="50" required
                                                            :counter="50" v-model="pass.password" type="password"></v-text-field>
                                                        <v-text-field label="Confirmar Contraseña" maxlength="50"
                                                            required :counter="50" v-model="pass.newpassword" type="password"></v-text-field>
                                                        <v-btn color="#668c2d" class="ma-2" dark @click="passwordUsuario">
                                                            Guardar
                                                        </v-btn>
                                                    </div>
                                                </div>
                                            </b-tab>
                                        </b-tabs>
                                        <!-- Tab panes -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                user: {
                    id:0,
                    nombre: '',
                    apellido: '',
                    email:'',
                },
                pass:{
                    oldpassword:'',
                    newpassword:'',
                    password:''
                }
            }
        },
        mounted() {
            this.user.id=this.$store.state.user.id;
            this.user.nombre=this.$store.state.user.nombre;
            this.user.apellido=this.$store.state.user.apellido;
            this.user.email=this.$store.state.user.email;
        },
        methods: {
            passwordUsuario(){
                let me=this;
                axios({
                        method: 'post',
                        url: '/EditarUsuario/CambiarContrasena',
                        data: {
                            id:me.user.id,
                            password:me.pass.password,
                            newPassword:me.pass.newpassword
                        }
                    }).then(function (response) {
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        me.$auth.logout();
                    }).catch(function (error) {
                        swal.fire({
                            position: 'top-end',
                            type: 'error',
                            title: error.response.data.error,
                            showConfirmButton: true
                        });
                    });
            },
            guardarUsuario(){
                let me=this;
                axios({
                        method: 'post',
                        url: '/EditarUsuario/CambiarUsuario',
                        data: {
                            id:me.user.id,
                            nombre:me.user.nombre,
                            apellido:me.user.apellido,
                            email:me.user.email
                        }
                    }).then(function (response) {
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        me.$auth.logout();
                    }).catch(function (error) {
                        swal.fire({
                            position: 'top-end',
                            type: 'error',
                            title: error.response.data.error,
                            showConfirmButton: true
                        });
                    });
            }
        },
        filters: {
            moment: function (date) {
                return moment(date).format("D [de] MMMM [de] YYYY ");
            }
        }
    }
</script>
<style src="simple-line-icons/css/simple-line-icons.css"></style>
<style src="../../css/custom_css/user_profile.css" scoped></style>