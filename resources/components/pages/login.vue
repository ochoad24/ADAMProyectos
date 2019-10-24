<template>
    <div>
        <div id="bg">
            <span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Michiel Ton</span>
            <img src="img/login.jpg" alt="" class="image_full">
            <img src="img/mobile.jpg" alt="" class="image_mobile">
        </div>
        <div class="container-fluid login">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-10 col-sm-8 mx-auto login-form">

                        <h2 class="text-center logo_h2">
                            <img :src='require("../../img/logo8.png")' alt="Logo">
                        </h2>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <vue-form :state="formstate" @submit.prevent="onSubmit">
                                        <div class="row">
                                            <div class="col-sm-12 mt-3 ">
                                                <div class="form-group">
                                                    <validate tag="div">
                                                        <input v-model="model.email" name="email" id="email" type="email"
                                                            required autofocus placeholder="Ingrese su correo"
                                                            class="form-control" />
                                                        <field-messages name="email" show="$invalid && $submitted"
                                                            class="text-danger">
                                                            <div slot="required">El correo electrónico es un campo
                                                                obligatorio</div>
                                                            <div slot="email">El correo no es válido</div>
                                                        </field-messages>
                                                    </validate>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <validate tag="div">
                                                        <input v-model="model.password" name="password" id="password"
                                                            type="password" required placeholder="Ingrese su contraseña"
                                                            class="form-control" minlength="6" maxlength="10" />
                                                        <field-messages name="password" show="$invalid && $submitted"
                                                            class="text-danger">
                                                            <div slot="required">Se requiere contraseña</div>
                                                            <div slot="minlength">La contraseña debe tener al menos 6
                                                                caractéres</div>
                                                            <div slot="maxlength">La contraseña debe tener como máximo 10
                                                                caractéres</div>
                                                        </field-messages>
                                                    </validate>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group checkbox">
                                                    <label for="remember">
                                                        <input type="checkbox" name="remember" id="remember">&nbsp;
                                                        Recuerdame
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="alert alert-danger" v-if="has_error && !success">
                                                <p v-if="error == 'login_error'">Validation Errors.</p>
                                                <p v-else>Error, no se puede conectar con estas credenciales.</p>
                                            </div>
                                            <input type="submit" value="Iniciar Sesión"
                                                class="btn btn-primary btn-block mb-3" />
                                            <div class="col-sm-12">
                                                <router-link to="/forgot_password" class="float-left" exact>¿Olvide mi
                                                    contraseña? </router-link>
                                            </div>
                                        </div>
                                    </vue-form>
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
    import Vue from "vue"
    import VueForm from "vue-form";
    import options from "../../validations/validations.js";
    Vue.use(VueForm, options);
    export default {
        name: "login",
        data() {
            return {
                formstate: {},
                model: {
                    email: "",
                    password: ""

                },
                success: false,
                has_error: false,
                error: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    var redirect = this.$auth.redirect()
                    var app = this

                    this.$auth.login({
                        data: {
                            email: app.model.email,
                            password: app.model.password
                        },
                        success: function () {
                            // handle redirection
                            app.success = true
                            
                            const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === -1 ? '/' : '/'
                            // const redirectTo = 'dashboard'
                            // this.$router.push({ name: redirectTo })
                            var Usuario=new Object();
                            Usuario.nombre=this.$auth.user().nombre;
                            Usuario.apellido=this.$auth.user().apellido;
                            Usuario.job=this.$auth.user().role === 1 ? 'Administrador' : 'Técnico';
                            Usuario.role=this.$auth.user().role;
                            Usuario.id=this.$auth.user().id;
                            Usuario.email=this.$auth.user().email;
                            this.$store.commit('changeUser',Usuario);
                            window.location.href="/#/";
                        },
                        error: function () {
                            app.has_error = true
                            
                        },
                        rememberMe: true,
                        fetchUser: true
                    })
                }
            },
        },
        mounted: function () {
        },
        destroyed: function () {

        }
    }
</script>
<style src="bootstrapValidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../css/login.css" scoped></style>
<style type="text/css" scoped>
    .login {
        padding-top: 15%;
        padding-bottom: 2%;
        width: 100%;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
    }
    @media (min-width: 1001px) {
        #bg {
            position: fixed; 
            top: -50%; 
            left: -50%; 
            max-width: 100%; 
            max-height: auto;
            }
        #bg img {
            position: fixed; 
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0; 
            margin: auto; 
            max-width: 100%;
            max-height: auto;
        }
        .image_full{
            display:block;
        }

        .image_mobile{
            display:none;
        }   
    }

    @media (max-width: 1000px) and (min-width: 320px){
        .image_full{
            display:none;
        }

        .image_mobile{
            display:block;
        }
        #bg {
        position: fixed; 
        top: -50%; 
        left: -50%; 
        max-width: auto; 
        max-height: 100%;
        }
        #bg img {
            position: fixed; 
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0; 
            margin: auto; 
            max-width: auto;
            max-height: 100%;
        }
    }
</style>