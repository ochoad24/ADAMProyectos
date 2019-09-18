<template>
    <div class="row user-list">
        <div class="col-lg-12">
            <b-card header="Tareas" header-tag="h4" class="bg-primary-card">
                <v-flex xs12 sm12 md12>
                    <multiselect v-model="actividad" :options="actividades" placeholder="Seleccione una Actividad"
                        label="nombre" track-by="nombre">
                    </multiselect>
                </v-flex>
                <div class="table-responsive">
                    <v-toolbar flat color="white">
                        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details>
                        </v-text-field>
                        <v-spacer></v-spacer>
                        <!-- Aqui Empieza el modal -->
                        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                            <template v-slot:activator="{ on }">
                                <v-btn color="green darken-1" dark class="mb-2" v-on="on">Nueva Tarea</v-btn>
                            </template>
                            <v-toolbar dark color="green darken-1">
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon col="white">clear</v-icon>
                                </v-btn>
                                <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                            </v-toolbar>
                            <v-card>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm12 md12>
                                                <multiselect v-model="tipo" :options="tipos"
                                                    placeholder="Seleccione el tipo de tarea" label="nombre"
                                                    track-by="nombre">
                                                </multiselect>
                                            </v-flex>
                                            <v-flex xs12 sm12 md12>
                                                <v-slider v-model="number" color="green darken-1"
                                                    label="Cantidad de Tareas" min="1" max="100" thumb-label></v-slider>
                                            </v-flex>
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
                                            <v-flex xs12 sm12 md12>
                                                <v-subheader color="black">Configuracion de Estadisticas</v-subheader>
                                                <multiselect v-model="estadistica" :options="estadisticas"
                                                    :multiple="true" :taggable="false" :close-on-select="false"
                                                    :clear-on-select="false" :preserve-search="true"
                                                    placeholder="Seleccione..." label="nombre" track-by="nombre">
                                                </multiselect>
                                            </v-flex>
                                            <v-flex xs12 sm12 md9>
                                                <v-subheader>Asignacion de tareas</v-subheader>
                                                <multiselect v-model="empleado" :options="empleados" :multiple="true"
                                                    :taggable="false" :close-on-select="false" :clear-on-select="false"
                                                    :preserve-search="true" placeholder="Seleccione..." label="nombre"
                                                    track-by="nombre">
                                                </multiselect>
                                            </v-flex>
                                            <v-flex xs12 sm12 md12 lg12>
                                                <v-subheader>Empleado Asignados</v-subheader>
                                            </v-flex>
                                            <v-flex>
                                                <v-data-table :headers="headersUsers" :items="empleado"
                                                    class="elevation-1">
                                                    <v-progress-linear :indeterminate="true"
                                                        color="light-green accent-3"></v-progress-linear>
                                                    <template v-slot:items="props">
                                                        <td class="text-xs-right">{{ props.item.id }}</td>
                                                        <td class="text-xs-right">{{ props.item.nombre }}</td>
                                                        <td class="text-xs-left">
                                                            <template>
                                                                <div class="text-xs-left">
                                                                    <v-chip color="green" text-color="white"
                                                                        v-if="props.item.estado==1">
                                                                        Si</v-chip>
                                                                    <v-chip color="red" text-color="white"
                                                                        v-else>No</v-chip>
                                                                    
                                                                </div>
                                                            </template>
                                                        </td>
                                                        <td class="justify-center layout px-0">
                                                            <v-icon small class="mr-2" @click="superior(props.item.id)">
                                                                arrow_upward
                                                            </v-icon>
                                                        </td>
                                                    </template>
                                                </v-data-table>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>

                                <template v-if="error">
                                    <v-divider></v-divider>
                                    <div class="text-xs-center">
                                        <strong class="red--text text--lighten-1" v-for="e in errorMsj" :key="e"
                                            v-text="e"></strong>
                                        <br>
                                    </div>
                                    <v-divider></v-divider>
                                </template>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
                                    <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <!-- Termina el modal -->
                    </v-toolbar>
                    <v-data-table :headers="headers" :items="tareas" class="elevation-1" :search="search">
                        <template v-slot:items="props">
                            <td class="text-xs-right">{{ props.item.nombre }}</td>
                            <td class="text-xs-right">{{ props.item.fechaInicio }}</td>
                            <td class="text-xs-right">{{ props.item.fechaFinal }}</td>
                            <td class="text-xs-right">{{ props.item.fechaRealizacion }}</td>
                            <td class="text-xs-left">
                                <template>
                                    <div class="text-xs-left">
                                        <v-chip color="amber accent-4" text-color="white" v-if="props.item.estado==0">En
                                            Proceso</v-chip>
                                        <v-chip color="green" text-color="white" v-else-if="props.item.estado==1">
                                            Completado</v-chip>
                                        <v-chip color="red" text-color="white" v-else>Atrasado</v-chip>
                                    </div>
                                </template>
                            </td>

                            <td class="justify-center layout px-0">
                                <v-icon small class="mr-2" @click="editItem(props.item)">
                                    edit
                                </v-icon>
                                <v-icon small @click="deleteItem(props.item)">
                                    delete
                                </v-icon>
                            </td>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="primary" @click="initialize">Recargar</v-btn>
                        </template>
                        <template v-slot:no-results>
                            <v-alert :value="true" color="error" icon="warning">
                                No hay resultados de "{{ search }}".
                            </v-alert>
                        </template>
                    </v-data-table>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import axios from 'axios';
    import Multiselect from 'vue-multiselect';
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
            estadisticas: [],
            estadistica: [],
            number: 0,
            users: [],
            tipos: [],
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            proyecto: 0,
            actividad: {
                id: 0,
                nombre: ''
            },
            actividades: [],
            empleado: [],
            empleados: [],
            search: '',
            dialog: false,
            error: 0,
            errorMsj: [],
            headers: [
                { text: 'Nombre', value: 'nombre' },
                { text: 'Fecha Inicio', value: 'fechaInicio' },
                { text: 'Fecha Final', value: 'fechaFinal' },
                { text: 'Fecha Realizacion', value: 'fechaRealizacion' },
                { text: 'Estado', value: 'estado' },
            ],
            headersUsers: [
                { text: 'Id', value: 'id' },
                { text: 'Nombre', value: 'nombre' },
                { text: 'Estado', value: 'estado' },
                { text: 'Encargado', value: 'encargado' },
            ],
            tareas: [],
            editedIndex: -1,
            editedItem: {
                id: 0,
                tipo: '',
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
            }
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Nueva Tarea' : 'Editar Tarea'
            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            actividad(val) {
                if (val) {
                    this.initialize();
                } else {
                    this.actividad.id = 0;
                    swal.fire({
                        type: 'warning',
                        title: 'Advertencia',
                        text: 'Por favor seleccione una actividad',
                    })
                }
            }
        },

        created() {
            this.initialize()
        },
        mounted() {
            let me = this;
            this.$root.$on('SeleccionProyecto', data => {
                if (data) {
                    me.proyecto = data;
                    me.initialize();
                } else {
                    me.proyecto = 0;
                    me.initialize();
                    swal.fire({
                        type: 'warning',
                        title: 'Advertencia',
                        text: 'Por favor seleccione un proyecto',
                    })
                }
                // console.log(data);
            });
        },
        methods: {
            superior(id) {
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
                this.empleado=this.users;
            },
            validate() {
                this.error = 0;
                this.errorMsj = [];
                if (!this.editedItem.nombre)
                    this.errorMsj.push('El nombre de la estadistica no puede estar vacio');
                if (this.errorMsj.length)
                    this.error = 1;
                return this.error;
            },
            initialize() {
                var url = '/Tarea/' + this.actividad.id;
                axios.get(url)
                    .then(response => {
                        this.tareas = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
                this.getActividaes();
                this.getTipos();
                this.getEstadistica();
                this.getUsuario();
            },
            getActividaes() {
                var url = '/Actividad/' + this.proyecto;
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
            getTipos() {
                axios.get('/TipoActividad')
                    .then(response => {
                        this.tipos = response.data;
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
                        axios.delete(`/Estadistica/${item.id}/delete`).then(response => {
                            me.initialize();
                            swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: response.data,
                                showConfirmButton: false,
                                timer: 1500
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
                this.dialog = false;
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                let me = this;
                // if (this.validate()) {
                //     return;
                // }
                if (this.editedIndex > -1) {
                    axios({
                        method: 'put',
                        url: '/Estadistica/editar',
                        data: {
                            id: this.editedItem.id,
                            nombre: this.editedItem.nombre
                        }
                    }).then(function (response) {
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
                        me.initialize();
                        me.close();
                    });
                } else {
                    axios({
                        method: 'post',
                        url: '/Tarea/nuevo',
                        data: {
                            fechaInicio: this.fechaI,
                            fechaFinal: this.fechaF,
                            idActividad: this.actividad.id,
                            idTipoTarea: this.tipo.id,
                            estadisticas: this.estadistica,
                            numero: this.number,
                            usuarios:this.empleado
                        }
                    }).then(function (response) {
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
                        me.initialize();
                        me.close();
                    });
                }
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>