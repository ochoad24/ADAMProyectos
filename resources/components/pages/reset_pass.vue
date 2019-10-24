<template>
    <div class="container-fluid reset">
        <div class="row">
            <div class="col-lg-4 col-sm-8 col-10 m-auto login-form">
                <h2 class="text-center">
                    <img :src='require("../../img/logo8.png")' alt="Logo">
                </h2>
                <div class="row">
                    <div class="col-xl-12">
                        <h4 class="text-center marginTB">Restablecer la contraseña</h4>
                    </div>
                    <div class="col-xl-12">
                        <form id="authentication" class="reset_validator" @submit.prevent="validateForm('form-1')"
                            data-vv-scope="form-1">
                            <div class="column is-12 row">
                                <p class="control has-icon has-icon-right col-sm-12">
                                    <input name="email" v-validate="'email'"
                                        class="form-control"
                                        :class="{'input': true, 'is-danger': errors.has('form-1.email') }"
                                        type="email" placeholder="Correo Electrónico" v-model="email">
                                    <i v-show="errors.has('form-1.email')"
                                        class="fa fa-warning text-danger"></i>
                                    <span v-show="errors.has('form-1.email')"
                                        class="help is-danger text-danger">{{ errors.first('form-1.email') }}</span>
                                </p>
                            </div>
                            <div class="column is-12 row">
                                <p class="control has-icon has-icon-right col-sm-12">
                                    <input name="password" v-validate="'required|min:6'" class="form-control"
                                        :class="{'input': true, 'is-danger': errors.has('form-1.password') }"
                                        type="password" placeholder="Contraseña" v-model="password">
                                    <i v-show="errors.has('form-1.password')" class="fa fa-warning text-danger"></i>
                                    <span v-show="errors.has('form-1.password')"
                                        class="help is-danger text-danger">{{ errors.first('form-1.password') }}</span>
                                </p>
                            </div>
                            <div class="column is-12 row">
                                <p class="control has-icon has-icon-right col-sm-12">
                                    <input name="confirmpassword" v-validate="'required|min:6|confirmed:password'"
                                        class="form-control"
                                        :class="{'input': true, 'is-danger': errors.has('form-1.confirmpassword') }"
                                        type="password" placeholder="Restablecer Contraseña" v-model="password_confirmation">
                                    <i v-show="errors.has('form-1.confirmpassword')"
                                        class="fa fa-warning text-danger"></i>
                                    <span v-show="errors.has('form-1.confirmpassword')"
                                        class="help is-danger text-danger">{{ errors.first('form-1.confirmpassword') }}</span>
                                </p>
                            </div>
                            <div class="col-12 text-center">
                                <div class="form-group">
                                    <input type="submit" value="Restablecer la contraseña"
                                        class="btn btn-primary center-block" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import es from 'vee-validate/dist/locale/es'
    import VeeValidate, { Validator } from "vee-validate";
    Vue.use(VeeValidate);
    Validator.localize("es", es);
    export default {
        name: "reset_password",
        data() {
            return {
                token: null,
                email: null,
                password: null,
                password_confirmation: null,
                has_error: false
            }
        },
        mounted() {
            console.log(this.$route.query.token);
        },
        methods: {

            validateForm(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        this.$http.post("/auth/reset/password/", {
                            token: this.$route.query.token,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        })
                            .then(result => {
                                swal.fire({
                                    position: 'center',
                                    type: 'success',
                                    title: 'Se ha cambiado la contraseña',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                                window.location.href="/#/";
                            }, error => {
                                swal.fire({
                                    position: 'center',
                                    type: 'error',
                                    title: 'Algo paso mal vuelva a intentarlo',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                                window.location.href="/#/";
                                window.location.href="/#/";
                            });
                    }
                });
            }
        },
        destroyed: function () {

        }
    }
</script>
<style src="../../css/login.css" scoped></style>
<style type="text/css" scoped>
    .container-fluid.reset {
        padding-top: 6.5%;
        width: 100%;
        top: 0;
        height: 100vh;
        bottom: 0;
        left: 0;
        right: 0;
        background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
        background-size: 100% 100%;
        overflow-y: auto;
    }

    .help.is-danger,
    .fa-warning {
        font-size: 13px;
    }

    .input.is-danger {
        border: 1px solid #ff6666;
    }

    .reset .btn {
        box-shadow: none;
    }

    #authentication .input:focus {
        border-color: #6699cc;
        box-shadow: none;
    }
</style>