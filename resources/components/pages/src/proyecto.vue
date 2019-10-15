<template>
    <div class="row user-list">
        <div class="col-lg-12">
            <b-card header="Usuarios" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <v-toolbar flat color="white">
                        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details>
                        </v-text-field>
                        <v-spacer></v-spacer>
                        <!--    
                DIALOGO PARA LA CREACION DE PROYECTO    
            -->
                        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                            <template v-slot:activator="{ on }">
                            </template>
                            <v-card>
                                <v-toolbar dark color="#668c2d">
                                    <v-btn icon dark @click="dialog = false">
                                        <v-icon col="white">clear</v-icon>
                                    </v-btn>
                                    <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12>
                                                <v-text-field v-model="titulo" label="Titulo del proyecto" maxlength="100"  required :rules="nameRules" :counter="100" >
                                                </v-text-field>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-textarea v-model="descripcion" label="Descripción del proyecto" maxlength="1000"  required :rules="desRules" :counter="1000">
                                                </v-textarea>
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
                                                    <v-date-picker v-model="fechaI" no-title scrollable locale="gt">
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
                                                    <v-date-picker v-model="fechaF" no-title scrollable locale="gt">
                                                        <v-spacer></v-spacer>
                                                        <v-btn flat color="primary" @click="menu2 = false">Cancelar
                                                        </v-btn>
                                                        <v-btn flat color="primary" @click="$refs.menu2.save(fechaF)">
                                                            Guardar</v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                                <!-- Fin del date Time Picker -->
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card
                                                >
                                                    <v-card-title>
                                                        <v-icon
                                                            left
                                                        >
                                                            dns
                                                        </v-icon>
                                                        <span class="title font-weight-light">Objetivos</span>
                                                    </v-card-title>

                                                    <v-card-text class="headline font-weight-bold">
                                                        <ckeditor :editor="editor" v-model="objetivos" :config="editorConfig"></ckeditor>
                                                    </v-card-text>

                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card
                                                >
                                                    <v-card-title>
                                                        <v-icon
                                                            left
                                                        >
                                                            list
                                                        </v-icon>
                                                        <span class="title font-weight-light">Resultados por objetivo</span>
                                                    </v-card-title>

                                                    <v-card-text class="headline font-weight-bold">
                                                        <ckeditor :editor="editor2" v-model="resultados_objetivo" :config="editorConfig"></ckeditor>
                                                    </v-card-text>

                                                </v-card>
                                            </v-flex>
                                    <!-- Indicadores y resultados -->
                                            <v-flex xs6>
                                                <v-card
                                                >
                                                    <v-card-title>
                                                        <v-icon
                                                            left
                                                        >
                                                            search
                                                        </v-icon>
                                                        <span class="title font-weight-light">Indicadores</span>
                                                    </v-card-title>

                                                    <v-card-text class="headline font-weight-bold">
                                                        <ckeditor :editor="editor3" v-model="indicadores" :config="editorConfig"></ckeditor>
                                                    </v-card-text>

                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card
                                                >
                                                    <v-card-title>
                                                        <v-icon
                                                            left
                                                        >
                                                            list
                                                        </v-icon>
                                                        <span class="title font-weight-light">Resultados por indicador</span>
                                                    </v-card-title>

                                                    <v-card-text class="headline font-weight-bold">
                                                        <ckeditor :editor="editor4" v-model="resultados_indicadores" :config="editorConfig"></ckeditor>
                                                    </v-card-text>

                                                </v-card>
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
                                                <v-btn class="ma-2" color="#668c2d" dark @click="abrirOrg">
                                                    <v-icon color="white" dark left>add_circle_outline</v-icon>Nueva
                                                    Organización
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs12 sm12 md12 lg12>
                                                <v-subheader>Organizaciones seleccionadas</v-subheader>
                                            </v-flex>
                                            <v-flex>
                                                <v-data-table :headers="headersOrg" :items="orgs" class="elevation-1" hide-actions>
                                                    <v-progress-linear :indeterminate="true"
                                                        color="light-green accent-3"></v-progress-linear>
                                                    <template v-slot:items="props">
                                                        <td class="text-xs-right">{{ props.item.nombre }}</td>
                                                        <td class="text-xs-right">{{ props.item.departamento }}</td>
                                                        <td class="text-xs-right">{{ props.item.municipio }}</td>
                                                        <td class="text-xs-right">{{ props.item.comunidad }}</td>
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
                                    <v-btn color="#668c2d" v-if="editar===0" flat @click="registrarProyecto">
                                        Guardar
                                    </v-btn>
                                    <v-btn color="blue darken-1" v-if="editar===1" flat @click="editarProyecto()">
                                        Guardar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog><!-- Fin del dialogo crear proyecto -->
                    </v-toolbar>
                    <v-data-table :headers="headers" :items="proyectos" class="elevation-1" :search="search">
                        <template v-slot:items="props">
                            <td>{{ props.item.Titulo }}</td>
                            <td class="text-xs-right">{{props.item.Descripcion}}</td>
                            <td class="text-xs-right">{{ props.item.FechaInicio }}</td>
                            <td class="text-xs-right">{{ props.item.FechaFin }}</td>
                            <td class="text-xs-right">
                                <template>
                                    <div class="text-xs-right">
                                        <v-chip color="#668c2d" text-color="white" v-if="props.item.Estado==1">Activo
                                        </v-chip>
                                        <v-chip color="red" text-color="white" v-else>Inactivo</v-chip>
                                    </div>
                                </template>
                            </td>
                            <td class="text-xs-right"></td>
                            <td class="justify-center layout px-0">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon small class="mr-2" v-on="on" @click="abrirEditar(props.item)">
                                            edit
                                        </v-icon>
                                    </template>
                                    <span>Editar proyecto</span>
                                </v-tooltip>
                                 <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon small class="mr-2" v-on="on" v-if="props.item.Estado === 1"
                                            @click="desactivar(props.item.IdProyecto)">
                                            block
                                        </v-icon>
                                        <v-icon small class="mr-2" v-on="on" v-else @click="activar(props.item.IdProyecto)">
                                            check_circle
                                        </v-icon>
                                    </template>
                                    <span v-if="props.item.Estado === 1">Desactivar proyecto</span>
                                    <span v-else>Activar proyecto</span>
                                </v-tooltip>
                            </td>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="#668c2d" class="mb-2" dark @click="initialize">Recargar</v-btn>
                        </template>
                        <template v-slot:no-results>
                            <v-alert :value="true" color="error" icon="warning">
                                No hay resultados de "{{ search }}".
                            </v-alert>
                        </template>
                    </v-data-table>
                    <!-- DIALOGO PARA CREAR ORGANIZACION -->
                    <v-dialog v-model="dialog_org" persistent max-width="650px">
                        <v-card>
                           <v-toolbar dark color="#668c2d">
                                    <v-btn icon dark @click="dialog = false">
                                        <v-icon col="white">clear</v-icon>
                                    </v-btn>
                                    <v-toolbar-title >Nueva Organizacion</v-toolbar-title>
                                </v-toolbar>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field v-model="nombre" label="Nombre de la organización" maxlength="150"  required :rules="ornameRules" :counter="150">
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-select v-model="select" :hint="`${select.departamento}`"
                                                :items="departamentos" item-text="departamento" item-value="id"
                                                label="Seleccionar departamento" persistent-hint return-object
                                                single-line></v-select>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field v-model="municipio"
                                                label="Municipio de ubucación de la organización" maxlength="150"  required :rules="munnameRules" :counter="150"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field v-model="comunidad" label="Ingrese comunidad">
                                            </v-text-field>
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
                                <v-btn color="#668c2d" flat @click="close_org">Cancelar</v-btn>
                                <v-btn color="#668c2d" flat @click="registrarOrganizacion">Guardar Organización
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue';
    import axios from 'axios';
    import dayjs from "dayjs";
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import '@ckeditor/ckeditor5-build-classic/build/translations/es';
    export default {
        name: "Proyecto",
        components: {
            Multiselect,
            ckeditor: CKEditor.component
        },
        data: () => ({
            dialog: false,
            dialog_org: false,
               ornameRules: [
            v => !!v || 'El nombre de la organizacion no puede estar vacio',
            v => (v && v.length <= 149) || 'El titulo del proyecto no puede ser mayor a 150',

            ],
               munnameRules: [
            v => !!v || 'El nombre del municipio no puede estar vacio',
            v => (v && v.length <= 149) || 'El nombre del municipio no puede ser mayor a 150',

            ],
                  nameRules: [
            v => !!v || 'El titulo del proyecto no puede estar vacio',
            v => (v && v.length <= 99) || 'El titulo del proyecto no puede ser mayor a 100',

            ],
              desRules: [
           v => !!v || 'La descripcion del proyecto no puede estar vacio',
            v => (v && v.length <= 999) || 'La descripcion del proyecto no puede ser mayor a 1000',

            ],
               fechafRules:[
            v => !!v || 'Debe seleccionar una fecha final',
            ],
            fechaiRules:[
           v => !!v || 'Debe seleccionar una fecha inicial',
            ],
            orgs: [],
            error1: 0,
            select: [],
            editor: ClassicEditor,
            objetivos: '',
            editorConfig: {
                language: 'es'
            },
            editor2: ClassicEditor,
            resultados_objetivo: '',
            editor3: ClassicEditor,
            indicadores: '',
            editor4: ClassicEditor,
            resultados_indicadores: '',
            errorMsj1: [],
            org_temp: [],
            departamentos: [],
            IdOrganizacion: 0,
            comunidad: '',
            IdDepartamento: -1,
            municipio: '',
            nombre: '',
            error: 0,
            errorMsj: [],
            organizaciones: [],
            search: "",
            IdProyecto: 0,
            Estado: 1,
            editar: 0,
          
            headers: [
                { text: 'Titulo', value: 'Titulo', align: 'left' },
                { text: 'Descripcion', value: 'Descripcion', align: 'right' },
                { text: 'Fecha de inicio', value: 'FechaInicio', align: 'right' },
                { text: 'Fecha de finalización', value: 'FechaFin', align: 'right' },
                { text: 'Estado', value: 'Estado', align: 'right' },
                {text: 'Acciones'}
            ],
            headersOrg: [
                { text: "Organizacion", value: 'nombre', align: 'right' },
                { text: "Departamento", value: 'departamento', align: 'right' },
                { text: "Municipio", value: 'municipio', align: 'right' },
                { text: "Comunidad", value: 'comunidad', align: 'right' },
            ],
            menu: false,
            menu2: false,
            titulo: '',
            descripcion: '',
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            estado: 0,
            proyectos: []
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
                this.dialog = false;
                let me = this;
                axios.get('/proyecto')
                    .then(function (response) {
                        me.proyectos = response.data;
                        me.getOrg();
                    })
                    .catch(function (error) {
                        console.log(error.response);
                    });
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
            getOrgProyecto(id) {
                let me = this;
                axios.get(`/proyecto/orgs?id=${id}`)
                    .then(function (response) {
                        me.orgs = response.data;
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
                if (this.orgs.length <= 0)
                    this.errorMsj.push('Por favor seleccione una o más organizaciones');
                if(Date.parse(this.fechaI) > Date.parse(this.fechaF) || Date.parse(this.fechaI) === Date.parse(this.fechaF) || Date.parse(this.fechaF) < Date.parse(this.fechaI))
                    this.errorMsj.push('Formato de fechas incorrecto. Por favor revise las fechas ingresadas.')
                if (this.errorMsj.length)
                    this.error = 1;
                else
                    this.error = 0;
                return this.error;
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
            registrarProyecto() {
                let me = this;
                if (this.validate() === 1) {
                    return;
                }
                axios.post('proyecto/registrar', {
                    'Titulo': me.titulo,
                    'Descripcion': me.descripcion,
                    'FechaInicio': me.fechaI,
                    'FechaFin': me.fechaF,
                    'data': me.orgs
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
                            me.close();
                        }

                        me.close();
                        me.initialize();
                    })
                    .catch(function (error) {
                        console.log(error.response);
                        swal.fire({
                            type: 'error',
                            title: 'Se ha producido un error!',
                            text: `Error al ingresar proyecto: ${error.response.data.message}`
                        });
                        me.close();
                    });
            },
            editarProyecto() {
                let me = this;
                if (this.validate() === 1) {
                    return;
                }
                axios.put('/proyecto/actualizar', {
                    'id': me.IdProyecto,
                    'Titulo': me.titulo,
                    'Descripcion': me.descripcion,
                    'objetivos': me.objetivos,
                    'resultados_objetivo': me.resultados_objetivo,
                    'indicadores': me.indicadores,
                    'resultados_indicadores': me.resultados_indicadores,
                    'FechaInicio': me.fechaI,
                    'FechaFin': me.fechaF,
                    'Estado': me.Estado,
                    'data': me.orgs
                })
                    .then(function (response) {
                        console.log(response.data);
                        me.initialize();
                        me.close();
                    })
                    .catch(function (error) {
                        console.log(error.response);
                        me.close();
                    })
            },
            activar(id) {
                let me = this;
                const swalWithBootstrapButtons = swal.mixin({
                    customClass: {
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons.fire({
                    title: '¿Quieres activar este proyecto?',
                    type: 'warning',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    showConfirmButton: true,
                    reverseButtons: true
                }).then((result) => {
                    if (result.value) {
                        axios.put('proyecto/activate', {
                            'id': id
                        }).then(function (response) {
                            me.initialize();
                            swalWithBootstrapButtons.fire(
                                'Activado',
                                'El proyecto ha sido activado!',
                                'success'
                            )
                        }).catch(function (error) {
                            swalWithBootstrapButtons.fire(
                                'Error',
                                'Error al activar proyecto!',
                                'error'
                            )
                        });
                    } else {
                        swalWithBootstrapButtons.fire(
                            'Cancelado :('
                        )
                    }
                });
            },
            desactivar(id) {
                let me = this;
                const swalWithBootstrapButtons = swal.mixin({
                    customClass: {
                        ConfirmButton: 'btn btn-success',
                        CancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons.fire({
                    title: '¿Quieres desactivar este proyecto?',
                    type: 'warning',
                    showCancelButton: true,
                    ConfirmButtonText: 'Aceptar',
                    CancelButtonText: 'Cancelar',
                    reverseButtons: true
                }).then((result) => {
                    if (result.value) {
                        axios.put('proyecto/deactivate', {
                            'id': id
                        }).then(function (response) {
                            me.initialize();
                            swalWithBootstrapButtons.fire(
                                'Desactivado',
                                'El proyecto ha sido desactivado!',
                                'success'
                            )
                        }).catch(function (error) {
                            console.log(error.response);
                            swalWithBootstrapButtons.fire(
                                'Error',
                                'Error al desactivar proyecto!',
                                'error'
                            )
                        });
                    } else {
                        swalWithBootstrapButtons.fire(
                            'Cancelado :('
                        )
                    }
                });
            },
            abrirEditar(item) { 
                this.editar = 1;
                this.IdProyecto = item.IdProyecto;
                this.dialog = true;
                this.titulo = item.Titulo;
                this.descripcion = item.Descripcion;
                this.fechaI = item.FechaInicio.split("/").reverse().join("-");
                this.fechaF = item.FechaFin.split("/").reverse().join("-");
                this.objetivos = item.objetivos;
                this.resultados_objetivo = item.resultados_objetivo;
                this.indicadores = item.indicadores;
                this.resultados_indicadores = item.resultados_indicadores;
                this.Estado = item.Estado;
                this.orgs = this.getOrgProyecto(item.IdProyecto);
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
            abrirOrg() {
                this.dialog_org = true;
                this.cargaDepartamentos();
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
                    'IdDepartamento': me.select.id,
                    'comunidad': me.comunidad
                })
                    .then(function (response) {
                        console.log(response.data);
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
            close() {
                this.dialog = false;
                this.editar = 0;
                this.IdProyecto = 0;
                this.titulo = "";
                this.descripcion = '';
                this.objetivos = '';
                this.resultados_objetivo = '';
                this.indicadores = '';
                this.resultados_indicadores = '';
                this.fechaI = '';
                this.fechaF = '';
                this.Estado = 0;
                this.orgs = []
            },
            close_org() {
                this.dialog_org = false;
                this.IdDepartamento = 0;
                this.IdOrganizacion = 0;
                this.nombre = "";
                this.comunidad="";
                this.municipio = '';
                this.select = [];
                this.error1 = 0;
                this.errorMsj1 = [];
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>