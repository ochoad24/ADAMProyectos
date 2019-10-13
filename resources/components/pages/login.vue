<template>
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
                                                            caracteres</div>
                                                        <div slot="maxlength">La contraseña debe tener como máximo 10
                                                            caracteres</div>
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
                            Usuario.name=this.$auth.user().nombre+' '+this.$auth.user().apellido;
                            Usuario.job=this.$auth.user().role === 1 ? 'Admnistrador' : 'Técnico';
                            Usuario.role=this.$auth.user().role;
                            Usuario.id=this.$auth.user().id;
                            this.$store.commit('changeUser',Usuario);
                            console.log(Usuario);
                            window.location.href="/#/";
                        },
                        error: function () {
                            app.has_error = true
                            app.error = res.response.data.error
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
        padding-top: 6.5%;
        padding-bottom: 2%;
        width: 100%;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
        /* background: url('../../img/pr.jpg'); */
        overflow-y: auto;
    }
</style>