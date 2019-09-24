<template>
    <div>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <!-- Pasos para la creacion del proyecto -->
                <v-stepper-step :complete="e1 > 1" step="1">Crear proyecto</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2">Crear actividades</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">Crear tareas</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <!-- CREACION DEL PROYECTO -->
                <v-stepper-content step="1">
                    <v-card
                    >
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field v-model="titulo" label="Titulo del proyecto">
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-textarea v-model="descripcion" label="Descripción del proyecto">
                                        </v-textarea>
                                    </v-flex>
                                    <!-- Date picker 1 -->
                                    <v-flex xs12 sm12 md6>
                                        <!-- DateTime Picker de Fecha Inicial -->
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                            :nudge-right="40" :return-value.sync="fechaI" lazy
                                            transition="scale-transition" offset-y full-width min-width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-model="fechaI" label="Ingrese fecha de inicio"
                                                    prepend-icon="event" readonly v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="fechaI" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="menu = false">Cancelar
                                                </v-btn>
                                                <v-btn flat color="primary" @click="$refs.menu.save(fechaI)">
                                                    Guardar</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <!-- Fin del date Time Picker -->
                                    </v-flex>
                                    <!-- Date picker 2 -->
                                    <v-flex xs12 sm12 md6>
                                        <!-- DateTime Picker de Fecha Inicial -->
                                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                                            :nudge-right="40" :return-value.sync="fechaF" lazy
                                            transition="scale-transition" offset-y full-width min-width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-model="fechaF"
                                                    label="Ingrese fecha de finalización" prepend-icon="event"
                                                    readonly v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="fechaF" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="menu2 = false">Cancelar
                                                </v-btn>
                                                <v-btn flat color="primary" @click="$refs.menu2.save(fechaF)">
                                                    Guardar</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <!-- Fin del date Time Picker -->
                                    </v-flex>
                                    <v-flex xs12 sm12 md12 lg12>
                                        <v-subheader color="black">Seleccione una o más organizaciones
                                        </v-subheader>
                                    </v-flex>
                                    <v-flex xs12 sm12 md9>
                                        <multiselect v-model="orgs" :options="organizaciones" :multiple="true"
                                            :taggable="false" :close-on-select="false" :clear-on-select="false"
                                            :preserve-search="true" placeholder="Seleccione..." label="nombre"
                                            track-by="nombre">
                                        </multiselect>
                                    </v-flex>
                                    <v-flex xs12 sm12 md3>
                                        <v-btn class="ma-2" color="green accent-3" dark @click="abrirOrg">
                                            <v-icon color="white" dark left>add_circle_outline</v-icon>Nueva
                                            Organización
                                        </v-btn>
                                    </v-flex>
                                    <v-flex xs12 sm12 md12 lg12>
                                        <v-subheader>Organizaciones seleccionadas</v-subheader>
                                    </v-flex>
                                    <v-flex>
                                        <v-data-table :headers="headersOrg" :items="orgs" class="elevation-1">
                                            <v-progress-linear :indeterminate="true"
                                                color="light-green accent-3"></v-progress-linear>
                                            <template v-slot:items="props">
                                                <td class="text-xs-right">{{ props.item.nombre }}</td>
                                                <td class="text-xs-right">{{ props.item.departamento }}</td>
                                                <td class="text-xs-right">{{ props.item.municipio }}</td>
                                            </template>
                                        </v-data-table>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>

                        <template v-if="error">
                            <v-divider></v-divider>
                            <div class="text-xs-center" v-for="e in errorMsj" :key="e">
                                <strong class="red--text text--lighten-1" v-text="e"></strong>
                                <br>
                            </div>
                            <v-divider></v-divider>
                        </template>
                    </v-card>
                     <!-- DIALOGO PARA CREAR ORGANIZACION -->
                    <v-dialog v-model="dialog_org" persistent max-width="650px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Nueva Organización</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field v-model="nombre" label="Nombre de la organización">
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-select v-model="select" :hint="`${select.departamento}`"
                                                :items="departamentos" item-text="departamento" item-value="id"
                                                label="Seleccionar departamento" persistent-hint return-object
                                                single-line>
                                            </v-select>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field v-model="municipio"
                                                label="Municipio de ubucación de la organización"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <template v-if="error1">
                                <v-divider></v-divider>
                                <div class="text-xs-center">
                                    <strong class="red--text text--lighten-1" v-for="e in errorMsj1" :key="e"
                                        v-text="e"></strong>
                                    <br>
                                </div>
                                <v-divider></v-divider>
                            </template>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="close_org">Cancelar</v-btn>
                                <v-btn color="blue darken-1" flat @click="registrarOrganizacion">Guardar Organización
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-btn
                        color="primary"
                        @click="validateProject()"
                    >
                        Continuar
                    </v-btn>
                </v-stepper-content>
                <!-- CREACION DE LAS ACTIVIDADES -->
                <v-stepper-content step="2">
                    <v-card>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field v-model="actividad"
                                            label="Ingrese nombre de la actividad"></v-text-field>
                                    </v-flex>
                                     <v-flex xs12>
                                        <v-textarea v-model="descripcionAct" label="Descripción del proyecto">
                                        </v-textarea>
                                    </v-flex>
                                    <v-flex xs12 sm12 md6>
                                        <!-- DateTime Picker de Fecha Inicial -->
                                        <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false"
                                            :nudge-right="40" :return-value.sync="fechaInicio" lazy
                                            transition="scale-transition" offset-y full-width min-width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-model="fechaInicio"
                                                    label="Ingrese fecha de inicio" prepend-icon="event"
                                                    readonly v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="fechaInicio" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="menu3 = false">Cancelar
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                    @click="$refs.menu3.save(fechaInicio)">Guardar</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <!-- Fin del date Time Picker -->
                                    </v-flex>
                                    <v-flex xs12 sm12 md6>
                                        <!-- DateTime Picker de Fecha Inicial -->
                                        <v-menu ref="menu4" v-model="menu4" :close-on-content-click="false"
                                            :nudge-right="40" :return-value.sync="fechaFinal" lazy
                                            transition="scale-transition" offset-y full-width min-width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-model="fechaFinal"
                                                    label="Ingrese fecha de finalización" prepend-icon="event"
                                                    readonly v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="fechaFinal" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="menu4 = false">Cancelar
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                    @click="$refs.menu4.save(fechaFinal)">Guardar</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <!-- Fin del date Time Picker -->
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-flex xs12 sm12 md12 lg12>
                            <v-subheader>Actividades Agregadas</v-subheader>
                        </v-flex>
                        <template v-if="errorAct">
                            <v-divider></v-divider>
                            <div class="text-xs-center" v-for="e in errorMsj2" :key="e">
                                <strong class="red--text text--lighten-1" v-text="e"></strong>
                                <br>
                            </div>
                            <v-divider></v-divider>
                        </template>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" @click="agregarActividad()">
                                Agregar Actividad
                            </v-btn>
                        </v-card-actions>
                        <v-flex>
                            <v-data-table :headers="headersActividades" :items="acts" class="elevation-1">
                                <v-progress-linear :indeterminate="true"
                                    color="light-green accent-3">
                                </v-progress-linear>
                                <template v-slot:items="props">
                                    <td class="text-xs-right">{{ props.item.actividad }}</td>
                                    <td class="text-xs-right">{{ props.item.descripcion }}</td>
                                    <td class="text-xs-right">{{ props.item.fechaInicio }}</td>
                                    <td class="text-xs-right">{{ props.item.fechaFinal }}</td>
                                    <td class="justify-left layout px-0">
                                        <v-icon small @click="deleteActividad(props.item.actividad)">
                                            delete
                                        </v-icon>
                                    </td>
                                </template>
                            </v-data-table>
                        </v-flex>
                    </v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                        Atrás
                    </v-btn>

                    <v-btn
                    color="primary"
                    @click="storeProyecto()"
                    >
                        Guardar
                    </v-btn>

                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
                ></v-card>

                <v-btn
                color="primary"
                @click="e1 = 1"
                >
                Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            </v-stepper-items>
  </v-stepper>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue';
    import axios from 'axios';
    export default {
        name: "CrearProyecto",
        components: {
            Multiselect
        },
        data: () => ({
            e1: 0,
            orgs: [],
            acts: [],
            organizaciones: [],
            departamentos: [],
            select: [],
            error1: 0,
            errorMsj1: [],
            error: 0,
            errorMsj: [],
            errorAct: 0,
            errorMsj2: [],
            dialog_org: false,
            IdOrganizacion: 0,
            nombre: '',
            municipio: '',
            IdDepartamento: -1,
            titulo: '',
            descripcion: '',
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            actividad: '',
            descripcionAct: '',
            fechaInicio: new Date().toISOString().substr(0, 10),
            fechaFinal: new Date().toISOString().substr(0, 10),
            estado: 0,
            menu: false,
            menu2: false,
            menu3: false,
            menu4: false,
            headersOrg: [
                { text: "Organizacion", value: 'nombre', align: 'right' },
                { text: "Departamento", value: 'departamento', align: 'right' },
                { text: "Municipio", value: 'municipio', align: 'right' }
            ],
            headersActividades: [
                { text: 'Actividad', value: 'actividad', align: 'right' },
                { text: 'Descripción', value: 'descripcion', align: 'right'},
                { text: 'Fecha de Inicio', value: 'fechaInicio', align: 'right' },
                { text: 'Fecha de Finalización', value: 'fechaFinal', align: 'right' }
            ],
        }),

        computed: {
            formTitle() {
                return this.editar === 0 ? 'Nuevo Proyecto' : 'Editar Proyecto'
            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            }
        },

        created() {
            this.initialize()
        },

        methods: {
            initialize() {
               this.getOrg();
            },
            getOrg() {
                let me = this;
                axios.get('/org')
                    .then(function (response) {
                        me.organizaciones = response.data;
                    })
                    .catch(function (error) {
                        console.log(error.response);
                    });
            },
            validate() {
                this.error = 0;
                this.errorMsj = [];
                if (!this.titulo)
                    this.errorMsj.push('El título del proyecto no puede estar vacio');
                if (!this.descripcion)
                    this.errorMsj.push('La descripción del proyecto no puede estar vacía');
                if (!this.fechaI)
                    this.errorMsj.push('La fecha de inicio del proyecto no puede estar vacía');
                if (!this.fechaF)
                    this.errorMsj.push('La fecha de finalización del proyecto no puede estar vacía');
                if (this.orgs.length <= 0)
                    this.errorMsj.push('Por favor seleccione una o más organizaciones');
                if (this.errorMsj.length)
                    this.error = 1;
                else
                    this.error = 0;
                return this.error;
            },
            validateProject() {
                if(this.validate() !== 1) {
                    this.e1 = 2;
                } else {
                    return;
                }
            },  
            abrirOrg() {
                this.dialog_org = true;
                this.cargaDepartamentos();
            },
            cargaDepartamentos() {
                let me = this;
                axios.get('/org/dept')
                    .then(function (response) {
                        me.departamentos = response.data;
                    })
                    .catch(function (error) {
                        console.log(error.response);
                    });
            },
            validate_org() {
                this.error1 = 0;
                this.errorMsj1 = [];
                if (!this.nombre)
                    this.errorMsj1.push('El nombre de la organización no puede estar vacio');
                if (!this.municipio)
                    this.errorMsj1.push('El municipio no puede estar vacío');
                if (this.select.length > 0)
                    this.errorMsj1.push('Por favor seleccione un departamento');
                if (this.errorMsj1.length)
                    this.error1 = 1;
                else
                    this.error1 = 0;
                return this.error1;
            },
            validate_actividad() {
                this.errorAct = 0;
                this.errorMsj2 = [];
                if (!this.actividad)
                    this.errorMsj.push('El nombre de la actividad no puede estar vacío');
                if (!this.descripcionAct)
                    this.errorMsj.push('La descripción de la actividad no puede estar vacía');
                if (!this.fechaInicio)
                    this.errorMsj.push('La fecha de inicio de la actividad no puede estar vacía');
                if (!this.fechaFinal)
                    this.errorMsj.push('La fecha de finalización de la actividad no puede estar vacía');
                if (this.errorMsj.length)
                    this.error = 1;
                else
                    this.error = 0;
                return this.error;
            },
            registrarOrganizacion() {
                let me = this;
                if (this.validate_org() === 1) {
                    return;
                }
                this.IdDepartamento = this.select.id;
                axios.post('org/registrar', {
                    'nombre': me.nombre,
                    'municipio': me.municipio,
                    'IdDepartamento': me.select.id
                })
                .then(function (response) {
                    swal.fire({
                        type: 'success',
                        title: 'Organización registrada!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    me.close_org();
                    me.getOrg();
                })
                .catch(function (error) {
                    console.log(error.response);
                    swal.fire({
                        type: 'error',
                        title: 'Se ha producido un error!',
                        text: `Error al ingresar organización: ${error.response.data.message}`
                    })
                    me.close_org();
                });
            },
            close_org() {
                this.dialog_org = false;
                this.IdDepartamento = 0;
                this.IdOrganizacion = 0;
                this.nombre = "";
                this.municipio = '';
                this.select = [];
                this.error1 = 0;
                this.errorMsj1 = [];
            },
            storeProyecto() {
                let me = this;
                axios.post('proyecto/storeProject', {
                    'Titulo': me.titulo,
                    'Descripcion': me.descripcion,
                    'FechaInicio': me.fechaI,
                    'FechaFin': me.fechaF,
                    'data1': me.orgs,
                    'data': me.acts
                })
                    .then(function (response) {
                        console.log(response.data);
                        if (!response.data) {
                            swal.fire({
                                type: 'success',
                                title: 'Proyecto registrado!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            swal.fire({
                                type: 'error',
                                title: 'Se ha producido un error!',
                                text: `Error al ingresar proyecto!`
                            });
                        }
                        me.initialize();
                    })
                    .catch(function (error) {
                        console.log(error.response);
                        swal.fire({
                            type: 'error',
                            title: 'Se ha producido un error!',
                            text: `Error al ingresar proyecto: ${error.response.data.message}`
                        });
                    });
            },
            agregarActividad() {
                let me = this;
                if(this.validate_actividad() === 1) {
                    return;
                } else {
                    let act = new Object();
                    act.actividad = me.actividad;
                    act.descripcion = me.descripcionAct;
                    act.fechaInicio = me.fechaInicio;
                    act.fechaFinal = me.fechaFinal;
                    me.acts.push(act);
                    this.actividad = '';
                    this.descripcionAct = '';
                    this.fechaInicio = new Date().toISOString().substr(0, 10);
                    this.fechaFinal = new Date().toISOString().substr(0, 10);
                }
            },
            deleteActividad(actividad) {
                console.log(actividad);
                //let index = this.acts.actividad.indexOf(actividad);
                this.acts = this.acts.filter(item => item.actividad !== actividad);
            }
        }
    }
</script>
    <style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>