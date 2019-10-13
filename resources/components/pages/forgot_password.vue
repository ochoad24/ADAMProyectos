<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-10 col-sm-6 m-auto  box animated fadeInUp">
                    <div class="text-center ">
                        <img :src='require("../../img/logo8.png")' class="img-fluid" alt="Clear logo" @click="redireccionar">
                    </div>
                    <h3 class="text-center">Se te olvidó tu contraseña
                    </h3>
                    <p class="text-center enter_email">
                        Ingrese su correo electrónico registrado
                    </p>
                    <form class="forgot_Form text-center" method="POST" @submit.prevent="requestResetPassword"
                        autocomplete="off">
                        <div class="form-group">
                            <input type="email" class="form-control email pl-3" v-model="email" id="email" required>
                        </div>
                        <!-- <v-btn class="ma-2" :loading="loading" :disabled="loading" color="success"
                            @click="loader = 'loading'">
                            Recuperar Contraseña
                        </v-btn> -->
                        <v-btn class="ma-2" :loading="loading" :disabled="loading" color="success"
                            type="submit">
                            Recuperar Contraseña
                        </v-btn>
                        <v-btn class="ma-2" color="warning" @click="redireccionar">
                            Regresar
                        </v-btn>
                    </form>
                    
                </div>
            </div>
        </div>
        <!--row-->
    </div>
</template>
<script>
    import magnify from "bootstrap-magnify/js/bootstrap-magnify.min.js"
    import sweet from 'sweetalert2'
    export default {
        name: "image_magnifier",
        data() {
            return {
                email: null,
                has_error: false,
                loader: null,
                loading: false
            }
        },
        watch: {
            // loader() {
            //     const l = this.loader
            //     this[l] = !this[l]
            //     this.$http.post("/auth/reset-password", { email: this.email }).then(result => {
            //             this.response = result.data;
            //             this[l] = false
            //             swal.fire({
            //                 position: 'center',
            //                 type: 'success',
            //                 title: result.data.message,
            //                 showConfirmButton: false,
            //                 timer: 3000
            //             });

            //             // console.log(result.data);
            //         }, error => {
            //             // console.error(error);
            //             swal.fire({
            //                 position: 'center',
            //                 type: 'error',
            //                 title: 'Algo paso mal vuelva a intentarlo',
            //                 showConfirmButton: r.respontrue
            //             });
            //         });
            //     this.loader = null;
            //     this.loading=false;
            // },
        },
        methods: {
            requestResetPassword() {
                this.loader = 'loading';
                this.loading=true;
                this.$http.post("/auth/reset-password", { email: this.email }).then(result => {
                    this.response = result.data;
                    console.log(result.data);
                    swal.fire({
                        position: 'center',
                        type: 'success',
                        title: result.data.message,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    this.loader=null;
                    this.loading=false;
                    window.location.href="/#/";
                }, error => {
                    swal.fire({
                        position: 'center',
                        type: 'error',
                        title: 'Algo paso mal vuelva a intentarlo',
                        showConfirmButton: r.respontrue
                    });
                });
            },
            redireccionar(){
                window.location.href="/#/";
            }
        }
    }
</script>
<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>