<template>
    <div>
        <!-- Menu de opciones para los reportes -->
       <v-card height="200px" flat>
            <div class="display-2 text-xs-center pa-5" >
               <h1 style="color:#668c2d" > Reportes </h1>
            </div>
            <v-bottom-nav :value="true" absolute color="transparent">
                <v-btn color="teal" flat v-model="proy" @click="changeScreen(1)">
                    <span>Reporte por proyecto</span>
                    <v-icon>group_work</v-icon>
                </v-btn>

                <v-btn color="teal" flat @click="changeScreen(2)">
                    <span>Reporte por actividad</span>
                    <v-icon>account_tree</v-icon>
                </v-btn>

                <v-btn color="teal"  flat @click="changeScreen(3)">
                    <span>Reporte por responsable</span>
                    <v-icon>face</v-icon>
                </v-btn>
            </v-bottom-nav>
        </v-card>
        <!-- REPORTE POR PROYECTO -->
        <v-stepper v-model="e1" v-if="proy === true" vertical>
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" color="#668c2d">Seleccionar proyecto</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1">
                <v-card class="mb-5">
                    <v-divider></v-divider>
                    <br>
                     <multiselect v-model="proyecto" :options="proyectos" :multiple="true"
                        :taggable="false" :close-on-select="true" :clear-on-select="false"
                        :preserve-search="true" placeholder="Seleccione..." label="Titulo"
                        track-by="nombre">
                    </multiselect>
                </v-card>

                <v-btn
               color="#668c2d" dark class="mb-2"
                @click="generarReporteProyecto()"
                >
                Generar reporte
                </v-btn>

                <v-btn color="#668c2d"  flat @click="limpiarProyecto()">Cancelar</v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <!-- REPORTE POR RESPONSABLE -->
        <v-stepper v-model="e2" v-if="resp === true" vertical>
            <v-stepper-header>
                <v-stepper-step :complete="e2 > 1" step="1" color="#668c2d">Seleccionar responsable</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-5">
                        <v-divider></v-divider>
                        <br>
                        <multiselect v-model="responsable" :options="responsables" :multiple="true"
                            :taggable="false" :close-on-select="true" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione..." label="nombreEmp"
                            track-by="nombreEmp">
                        </multiselect>
                    </v-card>

                    <v-btn
                  color="#668c2d" dark class="mb-2"
                    @click="reporteResponsable()"
                    >
                    Generar reporte
                    </v-btn>

                    <v-btn color="#668c2d" flat >Cancelar</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <!-- REPORTES POR ACTIVIDAD -->
        <v-stepper v-model="e3" v-if="act === true">
            <v-stepper-header>
                <v-stepper-step :complete="e3 > 1" step="1" color="#668c2d">Seleccionar responsable</v-stepper-step>
                 <v-divider></v-divider>
                <v-stepper-step :complete="e3 > 2" step="2" color="#668c2d">Seleccionar actividades</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-5">
                        <v-divider></v-divider>
                        <br>
                        <multiselect v-model="proyecto" :options="proyectos" :multiple="true"
                            :taggable="false" :close-on-select="true" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione..." label="nombre"
                            track-by="nombre">
                        </multiselect>
                    </v-card>

                    <v-btn
                    color="#668c2d" dark class="mb-2"
                    @click="e3 = 2"
                    >
                    Continuar
                    </v-btn>

                    <v-btn color="#668c2d" flat >Cancelar</v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-card class="mb-5">
                        <v-divider></v-divider>
                        <br>
                        <multiselect v-model="proyecto" :options="proyectos" :multiple="true"
                            :taggable="false" :close-on-select="true" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione..." label="Titulo"
                            track-by="nombre">
                        </multiselect>
                    </v-card>
                    
                    <v-btn
                    color="primary"
                    @click="e3 = 1"
                    >
                        Atrás
                    </v-btn>    

                    <v-btn
                    color="primary"
                    >
                    Generar reporte
                    </v-btn>

                    <v-btn flat >Cancelar</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
    import '@ckeditor/ckeditor5-build-classic/build/translations/es'
    import Vue from 'vue';
    import axios from 'axios';
    export default {
        name: "Reportes",
        components: {
            Multiselect,
        },
        data: () => ({
            proy: false,
            act: false,
            resp: false,
            e1: 0,
            proyectos: [],
            proyecto: [],
            e2: 0,
            responsable: [],
            responsables: [],
            e3: 0,
        }),

        computed: {

        },

        watch: {
        },

        created() {
        },

        methods: {
            changeScreen(number) {
                let me = this;
                switch(number) {
                    case 1:
                        me.getProyectos();
                        me.proy = true;
                        me.act = false;
                        me.resp = false;
                        me.e1 = 1;
                        me.e2 = 0;
                        me.e3 = 0;
                        me.proyectos = [];
                        me.proyecto = [];
                        break;
                    case 2:
                        me.e1 = 0;
                        me.e2 = 0;
                        me.e3 = 1;
                        me.proyectos = [];
                        me.proyecto = [];
                        me.proy = false;
                        me.act = true;
                        me.resp = false;
                        break;
                    case 3:
                        me.getReponsables();
                        me.e1 = 0;
                        me.e2 = 1;
                        me.e3 = 0;
                        me.proyectos = [];
                        me.proyecto = [];
                        me.proy = false;
                        me.act = false;
                        me.resp = true;
                        break;
                }
            },
            getReponsables() {
                let me = this;
                axios.get('/User/getUsers')
                .then(function (response) {
                    me.responsables = response.data;
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            },
            getProyectos() {
                let me = this;
                axios.get('/proyecto')
                .then(function (response) {
                    me.proyectos = response.data;
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            },
            generarReporteProyecto() {
                let me = this;
                if(this.proyecto.length === 0) {
                    swal.fire({
                        type: 'warning',
                        title: 'Por favor seleccione un proyecto',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    window.open(window.location.origin + '/proyecto/pdf?id=' + me.proyecto[0].IdProyecto + ',' + '_blank')
                }
            },
            reporteResponsable() {
                let me = this;
                if(this.responsable.length === 0) {
                    swal.fire({
                        type: 'warning',
                        title: 'Por favor seleccione a un responsable',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    window.open(window.location.origin + '/User/pdf?id=' + me.responsable[0].id + ',' + '_blank')
                }
            },
            limpiarProyecto() {
                this.proy = false;
                this.act = false;
                this.resp = false;
                this.e1 = 0;
                this.proyectos = [];
                this.proyecto = [];
            },
        }
    }
</script>
    <style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>