<template>
    <div class="row user-list">
        <div class="col-lg-12">
            <b-card header="Tareas" header-tag="h4" class="bg-primary-card" v-if="sProyecto === true">
                <v-flex xs12 sm12 md12>
                    <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step :complete="e1 > 1" step="1" color="#668C2D">Seleccionar actividad
                            </v-stepper-step>
                            <v-stepper-step :complete="e1 > 2" step="2" color="#668C2D">Editar tareas</v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card class="mb-5">
                                    <v-data-table :headers="headersAct" :items="actividades" class="elevation-1"
                                        hide-actions>
                                        <v-progress-linear :indeterminate="true" color="#668c2d"></v-progress-linear>
                                        <template v-slot:items="props">
                                            <td class="text-xs-center">{{ props.item.nombre }}</td>
                                            <td class="justify-center layout px-0">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on }">
                                                        <v-btn icon v-on="on" @click="Siguiente(props.item)"
                                                            color="#7CB342" dark class="mb-2">
                                                            <v-icon>done</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Seleccionar</span>
                                                </v-tooltip>
                                            </td>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <div class="table-responsive" v-if="sActividad === true">
                                    <v-toolbar flat color="white">
                                        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line
                                            hide-details>
                                        </v-text-field>
                                        <v-spacer></v-spacer>
                                        <!-- Aqui Empieza el modal -->
                                        <v-dialog v-model="dialog2" fullscreen hide-overlay
                                            transition="dialog-bottom-transition">
                                            <v-toolbar dark color="#668c2d">
                                                <v-btn icon dark @click="dialog2 = false">
                                                    <v-icon col="white">clear</v-icon>
                                                </v-btn>
                                                <v-toolbar-title>Detalles de la tarea</v-toolbar-title>
                                            </v-toolbar>
                                            <v-card>
                                                <v-card-text>
                                                    <v-container grid-list-md>
                                                        <v-layout wrap>
                                                            <v-flex xs12>
                                                                <v-textarea v-model="descripcionShow"
                                                                    label="Observaciones de la tarea" disabled readonly>
                                                                </v-textarea>
                                                            </v-flex>
                                                            <v-flex xs12>
                                                                <v-card>
                                                                    <v-card-title>
                                                                        <span
                                                                            class="title font-weight-light">Responsables
                                                                            asignados a esta tarea</span>
                                                                    </v-card-title>

                                                                    <v-card-text class="headline font-weight-bold">
                                                                        <v-data-table :headers="headers2"
                                                                            :items="empleadoShow" class="elevation-1"
                                                                            hide-actions>
                                                                            <v-progress-linear :indeterminate="true"
                                                                                color="light-green accent-3">
                                                                            </v-progress-linear>
                                                                            <template v-slot:items="props">
                                                                                <td class="text-xs-left">
                                                                                    {{ props.item.nombre }}</td>
                                                                            </template>
                                                                        </v-data-table>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-flex>
                                                            <v-flex xs12>
                                                                <v-card>
                                                                    <v-card-title>
                                                                        <span
                                                                            class="title font-weight-light">Estadísticas
                                                                            de esta tarea</span>
                                                                    </v-card-title>

                                                                    <v-card-text class="headline font-weight-bold">
                                                                        <v-data-table :headers="headers3"
                                                                            :items="estadisticaShow" class="elevation-1"
                                                                            hide-actions>
                                                                            <v-progress-linear :indeterminate="true"
                                                                                color="light-green accent-3">
                                                                            </v-progress-linear>
                                                                            <template v-slot:items="props">
                                                                                <td class="text-xs-left">
                                                                                    {{ props.item.nombre }}</td>
                                                                                <td class="text-xs-left">
                                                                                    {{ props.item.valor }}</td>
                                                                            </template>
                                                                        </v-data-table>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-flex>
                                                            <v-flex xs12>
                                                                <v-text-field v-model="cantidadShow"
                                                                    label="Total de participantes" type="number"
                                                                    disabled readonly>
                                                                </v-text-field>
                                                            </v-flex>
                                                            <v-layout row wrap>
                                                                <v-flex v-for="n in fotoShow" :key="n.id" xs2 d-flex>
                                                                    <v-card flat tile class="d-flex">
                                                                        <v-hover>
                                                                            <v-img :src="n.url" :lazy-src="n.url"
                                                                                aspect-ratio="1" class="grey lighten-2"
                                                                                slot-scope="{ hover }">
                                                                                <template v-slot:placeholder>
                                                                                    <v-layout fill-height align-center
                                                                                        justify-center ma-0>
                                                                                        <v-progress-circular
                                                                                            indeterminate
                                                                                            color="grey lighten-5">
                                                                                        </v-progress-circular>
                                                                                    </v-layout>
                                                                                </template>
                                                                                <v-expand-transition>
                                                                                    <v-layout fill-height align-center
                                                                                        justify-center ma-0
                                                                                        v-if="hover">
                                                                                        <v-btn icon dark
                                                                                            color="blue darken-1"
                                                                                            v-bind:href="n.url"
                                                                                            target="_blank">
                                                                                            <v-icon dark>arrow_downward
                                                                                            </v-icon>
                                                                                        </v-btn>
                                                                                    </v-layout>
                                                                                </v-expand-transition>
                                                                            </v-img>
                                                                        </v-hover>
                                                                    </v-card>
                                                                </v-flex>
                                                               
                                                            </v-layout>
                                                        </v-layout>
                                                    </v-container>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" flat @click="close2">Cerrar</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                        <v-dialog v-model="dialog" fullscreen hide-overlay
                                            transition="dialog-bottom-transition">
                                            <template v-slot:activator="{ on }">
                                                <v-btn color="#668c2d" dark class="mb-2" v-on="on">Nueva Tarea</v-btn>
                                            </template>
                                            <v-toolbar dark color="#668c2d">
                                                <v-btn icon dark @click="dialog = false">
                                                    <v-icon col="white">clear</v-icon>
                                                </v-btn>
                                                <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                                            </v-toolbar>
                                            <v-card>
                                                <v-card-text>
                                                    <v-container grid-list-md>
                                                        <v-layout wrap>
                                                            <v-flex xs12>
                                                                <v-text-field v-model="tarea" label="Nombre de la tarea"
                                                                    maxlength="240" required :rules="nameRules"
                                                                    :counter="240">
                                                                </v-text-field>
                                                            </v-flex>
                                                            <v-flex xs12 sm12 md12>
                                                                <v-slider v-model="number" color="#668c2d"
                                                                    label="Cantidad de Tareas" min="1" max="100"
                                                                    thumb-label></v-slider>
                                                            </v-flex>
                                                            <v-flex xs12 sm12 md6>
                                                                <!-- DateTime Picker de Fecha Inicial -->
                                                                <v-menu ref="menu" v-model="menu"
                                                                    :close-on-content-click="false" :nudge-right="40"
                                                                    :return-value.sync="fechaI" lazy
                                                                    transition="scale-transition" offset-y full-width
                                                                    min-width="290px">
                                                                    <template v-slot:activator="{ on }">
                                                                        <v-text-field v-model="fechaI"
                                                                            label="Ingrese fecha de inicio"
                                                                            prepend-icon="event" readonly v-on="on">
                                                                        </v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="fechaI" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn flat color="#668c2d"
                                                                            @click="menu = false">Cancelar
                                                                        </v-btn>
                                                                        <v-btn flat color="#668c2d"
                                                                            @click="$refs.menu.save(fechaI)">
                                                                            Guardar</v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <!-- Fin del date Time Picker -->
                                                            </v-flex>

                                                            <v-flex xs12 sm12 md6>
                                                                <!-- DateTime Picker de Fecha Inicial -->
                                                                <v-menu ref="menu2" v-model="menu2"
                                                                    :close-on-content-click="false" :nudge-right="40"
                                                                    :return-value.sync="fechaF" lazy
                                                                    transition="scale-transition" offset-y full-width
                                                                    min-width="290px">
                                                                    <template v-slot:activator="{ on }">
                                                                        <v-text-field v-model="fechaF"
                                                                            label="Ingrese fecha de finalización"
                                                                            prepend-icon="event" readonly v-on="on">
                                                                        </v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="fechaF" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn flat color="#668c2d"
                                                                            @click="menu2 = false">Cancelar
                                                                        </v-btn>
                                                                        <v-btn flat color="#668c2d"
                                                                            @click="$refs.menu2.save(fechaF)">
                                                                            Guardar</v-btn>
                                                                    </v-date-picker>

                                                                </v-menu>
                                                                <!-- Fin del date Time Picker -->

                                                            </v-flex>
                                                            <v-switch :color="color" v-model="verificacion"
                                                                :label="`Estadisticas: ${verificacion=='1'?'Mostrar':'No Mostrar'}`">
                                                            </v-switch>
                                                            <v-flex xs12 sm12 md12 v-if="verificacion">
                                                                <v-subheader color="black">Configuracion de Estadisticas
                                                                </v-subheader>
                                                                <multiselect v-model="estadistica"
                                                                    :options="estadisticas" :multiple="true"
                                                                    :taggable="false" :close-on-select="false"
                                                                    :clear-on-select="false" :preserve-search="true"
                                                                    placeholder="Seleccione..." label="nombre"
                                                                    track-by="nombre">
                                                                </multiselect>
                                                            </v-flex>
                                                            <v-flex xs12 sm12 md12>
                                                                <v-subheader>Asignacion de tareas</v-subheader>
                                                                <multiselect v-model="empleado" :options="empleados"
                                                                    :multiple="true" :taggable="false"
                                                                    :close-on-select="false" :clear-on-select="false"
                                                                    :preserve-search="true" placeholder="Seleccione..."
                                                                    label="nombre" track-by="nombre">
                                                                </multiselect>
                                                            </v-flex>
                                                            <v-flex xs12 sm12 md12 lg12>
                                                                <v-subheader>Responsables Asignados</v-subheader>
                                                            </v-flex>
                                                            <v-flex>
                                                                <v-data-table :headers="headersUsers" :items="empleado"
                                                                    class="elevation-1" hide-actions>
                                                                    <v-progress-linear :indeterminate="true"
                                                                        color="light-green accent-3">
                                                                    </v-progress-linear>
                                                                    <template v-slot:items="props">
                                                                        <td class="text-xs-right">{{ props.item.id }}
                                                                        </td>
                                                                        <td class="text-xs-right">
                                                                            {{ props.item.nombre }}</td>
                                                                        <td class="text-xs-right">
                                                                            <template>
                                                                                <div class="text-xs-right">
                                                                                    <v-chip color="green"
                                                                                        text-color="white"
                                                                                        v-if="props.item.estado==1 || empleado.length==1">
                                                                                        Si</v-chip>
                                                                                    <v-chip color="red"
                                                                                        text-color="white" v-else>No
                                                                                    </v-chip>

                                                                                </div>
                                                                            </template>
                                                                        </td>
                                                                        <td class="text-xs-right">
                                                                            <v-btn color="blue" class="white--text"
                                                                                @click="superior(props.item.id)"
                                                                                v-if="empleado.length>1">
                                                                                Encargado
                                                                                <v-icon right dark>how_to_reg</v-icon>
                                                                            </v-btn>
                                                                            <!-- <v-icon small class="mr-2" >
                                                                                how_to_reg
                                                                            </v-icon> -->
                                                                        </td>
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
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="#668c2d" flat @click="close">Cancelar</v-btn>
                                                    <v-btn color="#668c2d" flat @click="save" :loading="loading"
                                                        :disabled="loading">Guardar</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                        <!-- Termina el modal -->
                                    </v-toolbar>
                                    <v-data-table :headers="headers" :items="tareas" class="elevation-1"
                                        :search="search">
                                        <template v-slot:items="props">
                                            <td class="text-xs-right">{{ props.item.tarea }}</td>
                                            <td class="text-xs-right">{{ props.item.fechaInicio }}</td>
                                            <td class="text-xs-right">{{ props.item.fechaFinal }}</td>
                                            <td class="text-xs-right">{{ props.item.fechaRealizacion }}</td>
                                            <td class="text-xs-center">
                                                <template>
                                                    <div class="text-xs-center">
                                                        <v-chip color="red" text-color="white" v-if="Date.parse(props.item.fechaFinal) < fechaActual">Atrasado</v-chip>
                                                        <v-chip color="amber accent-4" text-color="white"
                                                            v-else-if="props.item.estado==0">En
                                                            proceso</v-chip>
                                                        <v-chip color="green" text-color="white"
                                                            v-else-if="props.item.estado==1">
                                                            Completado</v-chip>
                                                    </div>
                                                </template>
                                            </td>

                                            <td class="justify-center layout px-0">
                                                <v-icon v-if="props.item.estado==1" class="mr-2"
                                                    @click="watchTask(props.item.id)">
                                                    visibility
                                                </v-icon>
                                                <v-icon class="mr-2" @click="deleteItem(props.item)">
                                                    delete
                                                </v-icon>
                                            </td>
                                        </template>
                                        <template v-slot:no-data>
                                            <v-btn color="#668c2d" dark class="mb-2" @click="initialize">Recargar
                                            </v-btn>
                                        </template>
                                        <template v-slot:no-results>
                                            <v-alert :value="true" color="error" icon="warning">
                                                No hay resultados de "{{ search }}".
                                            </v-alert>
                                        </template>
                                    </v-data-table>
                                </div>
                                <v-alert :value="true" color="warning" icon="priority_high" outline v-else>
                                    Seleccione una actividad
                                </v-alert>
                                <v-btn color="#668C2D" dark class="mb-2" @click="e1 = 1">
                                    Atrás
                                </v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-flex>
            </b-card>
            <v-alert :value="true" color="warning" icon="priority_high" outline v-else>
                ¡Por favor seleccione proyecto!
            </v-alert>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import axios from 'axios';
    import Multiselect from 'vue-multiselect';
    import { mapGetters } from 'vuex';
    export default {
        name: "Tarea",
        components: {
            Multiselect
        },
        data: () => ({
            tipo: {
                id: 0,
                nombre: ''
            },
            color: 'green',
            verificacion: true,
            verify:false,
            e1: 0,
            loader: null,
            loading: false,
            sActividad: false,
            sProyecto: false,
            estadisticas: [],
            estadistica: [],
            nameRules: [
                v => !!v || 'El nombre de la tarea no puede estar vacia',
                v => (v && v.length <= 239) || 'El nombre de la tarea no puede ser mayor a 240',

            ],
            number: 1,
            users: [],
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            tarea: '',
            proyecto: {
                id: 0,
                nombre: '',
            },
            actividad: {
                id: 0,
                nombre: ''
            },
            actividades: [],
            fechaActual: new Date(),
            empleado: [],
            empleados: [],
            search: '',
            dialog: false,
            dialog2: false,
            error: 0,
            errorMsj: [],
            headers: [
                { text: 'Nombre', value: 'tarea', align: 'right' },
                { text: 'Fecha Inicio', value: 'fechaInicio', align: 'right' },
                { text: 'Fecha Final', value: 'fechaFinal', align: 'right' },
                { text: 'Fecha Realizacion', value: 'fechaRealizacion', align: 'right' },
                { text: 'Estado', value: 'estado', align: 'center' },
            ],
            headers2: [
                { text: 'Responsables', value: 'nombre', align: 'left' }
            ],
            headersAct: [
                { text: 'Actividad', value: 'nombre', align: 'center' }
            ],
            headers3: [
                { text: 'Estadistica', value: 'nombre', align: 'left' },
                { text: 'Valor', value: 'valor', align: 'left' }
            ],
            headersUsers: [
                { text: 'Id', value: 'id', align: 'right' },
                { text: 'Nombre', value: 'nombre', align: 'right' },
                { text: 'Estado', value: 'estado', align: 'right' },
                { text: 'Encargado', value: 'encargado', align: 'right' },
            ],
            tareas: [],
            editedIndex: -1,
            editedItem: {
                id: 0,
                fechaInicio: '',
                fechaFinal: '',
                fechaRealizacion: '',
                estado: 0,
            },
            defaultItem: {
                id: 0,
                nombre: '',
                fechaInicio: '',
                fechaFinal: '',
                fechaRealizacion: '',
                estado: 0,
            },
            descripcionShow: '',
            empleadoShow: [],
            estadisticaShow: [],
            fotoShow: [],
            cantidadShow: 0,
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Nueva Tarea' : 'Editar Tarea'
            },
            ...mapGetters(["seleccion"])
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            dialog2(val) {
                val || this.close2()
            },
            actividad(val) {
                if (val != null)
                    this.initialize();
            },
            seleccion: {
                deep: true,
                handler(val) {
                    if (val.id === 0) {
                        this.sProyecto = false;
                    }
                    else {
                        this.sProyecto = true;
                        this.proyecto = val;
                        this.initialize();
                    }
                    // console.log(this.proyecto);
                }
            }
        },

        created() {
            this.initialize()
        },
        mounted() {
            // console.log(this.proyecto);
            if (this.$store.state.proyecto.id === 0) {
                this.sProyecto = false;
            }
            else {
                this.sProyecto = true;
                this.proyecto = this.$store.state.proyecto;
                this.initialize();
            }
        },
        methods: {
            superior(id) {
                this.verify=true;
                let me = this;
                this.users = [];
                this.empleado.forEach(element => {
                    if (id == element.id) {
                        element.estado = 1;
                    } else {
                        element.estado = 0;
                    }
                    me.users.push(element);
                });
                this.empleado = this.users;
            },
            Siguiente(item) {
                this.e1 = 2;
                this.sActividad = true;
                this.actividad = item;
            },
            validate() {
                this.error = 0;
                this.errorMsj = [];
                if (!this.tarea)
                    this.errorMsj.push('La tarea no puede estar vacia.');
                if (this.empleado.length < 1)
                    this.errorMsj.push('Debe almenos seleccionar a un encargado.');
                if ((this.empleado.length > 1) && (this.verify==false))
                    this.errorMsj.push('Uno de los responsables debe ser el encargado.');
                if (Date.parse(this.fechaI) > Date.parse(this.fechaF) || Date.parse(this.fechaI) === Date.parse(this.fechaF))
                    this.errorMsj.push('Formato de fechas incorrecto. Por favor revise las fechas ingresadas.');
                if (this.verificacion == true && this.estadistica.length  < 1)
                    this.errorMsj.push('Debe almenos seleccionar una estadistica.');
                if (this.errorMsj.length)
                    this.error = 1;
                return this.error;
            },
            initialize() {
                this.fechaActual = new Date;
                Date.parse(this.fechaActual);
                var url = '/Tarea/' + this.actividad.id;
                axios.get(url)
                    .then(response => {
                        this.tareas = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
                this.getActividaes();
                this.getEstadistica();
                this.getUsuario();
                this.estadistica = this.estadisticas;
            },
            getActividaes() {
                var url = '/Actividad/' + this.proyecto.id;
                axios.get(url)
                    .then(response => {
                        this.actividades = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            },
            getEstadistica() {
                axios.get('/Estadistica')
                    .then(response => {
                        this.estadisticas = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            },
            getUsuario() {
                axios.get('/User/select')
                    .then(response => {
                        this.empleados = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            },
            editItem(item) {
                console.log(item);
                this.editedIndex = this.tareas.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            watchTask(id) {
                var url = '/Tarea/ver/' + id;
                axios.get(url)
                    .then(response => {
                        this.descripcionShow = response.data.tarea[0].descripcion;
                        this.empleadoShow = response.data.empleado;
                        this.estadisticaShow = response.data.estadistica;
                        this.fotoShow = response.data.foto;
                        this.cantidadShow = response.data.tarea[0].participantes;
                        this.dialog2 = true;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            },
            deleteItem(item) {
                let me = this;
                swal.fire({
                    title: 'Quieres eliminar esta tarea?',
                    text: "No podras revertir la eliminacion!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminalo!',
                    cancelButtonText: "Cancelar"
                }).then((result) => {
                    if (result.value) {
                        axios.delete(`/tarea/delete/${item.id}`).then(response => {
                            me.initialize();
                            console.log(response.data);
                            swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: response.data,
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }).catch(error => {
                            swal.fire({
                                position: 'top-end',
                                type: 'error',
                                title: error.response.data.error,
                                showConfirmButton: true
                            });
                        });
                    }
                });
            },

            close() {
                this.error = 0;
                this.fechaI=new Date().toISOString().substr(0, 10),
                this.fechaF=new Date().toISOString().substr(0, 10),
                this.tarea='';
                this.verificacion=true;
                this.number=1;
                this.dialog = false;
                this.empleado=[];
                this.verify=false;
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            close2() {
                this.dialog2 = false;
            },

            save() {
                if (this.validate()) {
                    return;
                }
                let me = this;
                this.loader = 'loading';
                this.loading = true;
                axios({
                    method: 'post',
                    url: '/Tarea/nuevo',
                    data: {
                        fechaInicio: this.fechaI,
                        fechaFinal: this.fechaF,
                        idActividad: this.actividad.id,
                        tarea: this.tarea,
                        verificacion: this.verificacion,
                        estadisticas: this.estadistica,
                        numero: this.number,
                        usuarios: this.empleado
                    }
                }).then(function (response) {
                    me.loader = null;
                    me.loading = false;
                    swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    me.initialize();
                    me.close();
                }).catch(function (error) {
                    swal.fire({
                        position: 'top-end',
                        type: 'error',
                        title: error.response.data.error,
                        showConfirmButton: true
                    });
                    me.loader = null;
                    me.loading = false;
                    me.initialize();
                    me.close();
                });
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>