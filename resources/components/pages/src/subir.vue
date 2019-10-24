<template>
    <div class="row user-list">
        <div class="col-lg-12">
            <b-card header="Tareas Pendientes" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <v-toolbar flat color="white">
                        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details>
                        </v-text-field>
                        <v-spacer></v-spacer>
                        <!-- Aqui Empieza el modal -->
                        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                            <v-toolbar dark color="green darken-1">
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon col="white">clear</v-icon>
                                </v-btn>
                                <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                            </v-toolbar>
                            <v-card>
                                <v-card-text>
                                    <v-container grid-list-sm fluid>
                                        <v-flex xs12>
                                            <v-textarea v-model="descripcion"
                                                label="Agregue observaciones de la actividad (opcional)">
                                            </v-textarea>
                                        </v-flex>
                                        <v-flex xs12
                                            class="text-xs-center text-sm-center text-md-center text-lg-center">
                                            <v-text-field label="Seleccione Imagen" @click='pickFile'
                                                v-model='imageName' prepend-icon='photo' clearable></v-text-field>
                                            <input type="file" style="display: none" ref="image" accept="image/*"
                                                @change="onFilePicked">
                                        </v-flex>
                                        <v-layout row wrap>
                                            <v-flex v-for="n in fotos" :key="n.id" xs2 d-flex>
                                                <v-card flat tile class="d-flex">
                                                    <v-hover>
                                                        <v-img :src="n.url" :lazy-src="n.url" aspect-ratio="1"
                                                            class="grey lighten-2" slot-scope="{ hover }">
                                                            <template v-slot:placeholder>
                                                                <v-layout fill-height align-center justify-center ma-0>
                                                                    <v-progress-circular indeterminate
                                                                        color="grey lighten-5">
                                                                    </v-progress-circular>
                                                                </v-layout>
                                                            </template>
                                                            <v-expand-transition>
                                                                <v-layout fill-height align-center justify-center ma-0
                                                                    v-if="hover">
                                                                    <v-btn fab dark small color="red darken-1"
                                                                        @click="deleteFoto(n)">
                                                                        <v-icon dark>close</v-icon>
                                                                    </v-btn>
                                                                </v-layout>
                                                            </v-expand-transition>
                                                        </v-img>
                                                    </v-hover>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                        <v-flex xs12 v-for="n in estadisticas" :key="n.id">
                                            <v-text-field v-model="estadisticas[getIndex(estadisticas, n.id)].value"
                                                v-bind:label="n.nombre" type="number">
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field v-model="cantidad" label="Total de participantes"
                                                type="number" v-if="verificacion==1">
                                            </v-text-field>
                                        </v-flex>
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
                                    <v-btn color="#668c2d" flat @click="close">Cancelar</v-btn>
                                    <v-btn color="#668c2d" flat @click="save">Guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <!-- Termina el modal -->
                    </v-toolbar>
                    <v-btn color="#668c2d" flat @click="Reload">Recargar</v-btn>
                    <v-data-table :headers="headers" :items="tareas" class="elevation-1" :search="search">
                        <template v-slot:items="props">
                            <td class="text-xs-right">{{ props.item.tarea }}</td>
                            <td class="text-xs-right">{{ props.item.fechaInicio }}</td>
                            <td class="text-xs-right">{{ props.item.fechaFinal }}</td>
                            <td class="text-xs-right">{{ props.item.fechaRealizacion }}</td>
                            <td class="text-xs-right">
                                <template>
                                    <div class="text-xs-right">
                                        <v-chip color="amber accent-4" text-color="white" v-if="props.item.estado==0">En
                                            Proceso</v-chip>
                                        <v-chip color="green" text-color="white" v-else-if="props.item.estado==1">
                                            Completado</v-chip>
                                        <v-chip color="blue" text-color="white" v-else-if="props.item.estado==2">
                                            En Proceso de subida</v-chip>
                                        <v-chip color="red" text-color="white" v-else>Atrasado</v-chip>
                                    </div>
                                </template>
                            </td>

                            <td class="justify-center" v-if="props.item.Permiso==1 && props.item.estado==0" >
                                <v-icon large class="mr-2" @click="editItem(props.item)">
                                    cloud_upload
                                </v-icon>
                            </td>
                            <td class="justify-center" v-if="props.item.estado==1 && props.item.estado==1">
                                <v-icon large class="mr-2" @click="cancelReport(props.item)">
                                    delete
                                </v-icon>
                            </td>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="#668c2d" dark class="mb-2" @click="initialize">Recargar</v-btn>
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
    import uni from 'uniqid';
    import { mapGetters } from 'vuex';
    export default {
        name: "Subir",
        components: {
            Multiselect
        },
        data: () => ({
            index:0,
            item:{},
            verificacion:0,
            cantidad: 0,
            id: 0,
            imageName: '',
            imageUrl: '',
            imageFile: '',
            active: false,
            fotos: [],
            files: [],
            tipo: {
                id: 0,
                nombre: ''
            },
            descripcion: '',
            participantes: 0,

            estadisticas: [],
            estadistica: [],
            number: 0,
            users: [],
            tipos: [],
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            proyecto: {
                id: 0,
                nombre: ''
            },
            empleado: [],
            empleados: [],
            search: '',
            dialog: false,
            error: 0,
            errorMsj: [],
            headers: [
                { text: 'Nombre', value: 'tarea', align: 'right' },
                { text: 'Fecha Inicio', value: 'fechaInicio', align: 'right' },
                { text: 'Fecha Final', value: 'fechaFinal', align: 'right' },
                { text: 'Fecha Realizacion', value: 'fechaRealizacion', align: 'right' },
                { text: 'Estado', value: 'estado', align: 'center' },
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
            },
            ...mapGetters(["seleccion"])
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            actividad(val) {
                this.initialize();
            },
            seleccion: {
                deep: true,
                handler(val) {
                    this.proyecto = val;
                    this.initialize();
                    // console.log(this.proyecto);
                }
            }
        },

        created() {
            this.initialize()
        },
        mounted() {
            this.initialize();
        },
        methods: {
            Reload(){
                this.initialize();
            },
            cancelReport(item) {
                let me = this;
                swal.fire({
                    title: 'Quieres eliminar este reporte',
                    text: "No podras revertir la eliminacion!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminalo!',
                    cancelButtonText: "Cancelar"
                }).then((result) => {
                    if (result.value) {
                        axios.delete(`/Tarea/cancelar/${item.id}`).then(response => {
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
            getIndex(list, id) {
                return list.findIndex((e) => e.id == id)
            },
            deleteFoto(item) {
                var index = this.fotos.indexOf(item);
                this.item=item;
                if (index > -1) {
                    this.fotos.splice(index, 1);
                    this.files.splice(index, 1);
                }
            },
            pickFile() {
                this.$refs.image.click()
            },
            test() {
                this.active = !this.active;
            },
            onFilePicked(e) {
                const files = e.target.files
                if (files[0] !== undefined) {
                    this.imageName = files[0].name
                    if (this.imageName.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader()
                    fr.readAsDataURL(files[0])
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result
                        this.imageFile = files[0] // this is an image file that can be sent to server...

                        var id = uni.time();

                        var foto = new Object();
                        foto.id = id;
                        foto.url = this.imageUrl;
                        var fil = new Object();
                        fil.id = id;
                        fil.file = this.imageFile;

                        this.fotos.push(foto);
                        this.files.push(fil);

                        this.imageName = ''
                        this.imageFile = ''
                        this.imageUrl = ''
                    })
                } else {
                    this.imageName = ''
                    this.imageFile = ''
                    this.imageUrl = ''
                }
            },
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
                this.empleado = this.users;
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
                this.descripcion='';
                this.cantidad='';
                this.estadistica=[];
                var url = '/Tarea/select/usuario/' + this.$store.state.user.id;
                axios.get(url)
                    .then(response => {
                        this.tareas = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
                this.getEstadistica();
                this.getUsuario();
            },
            getEstadistica(id) {
                var url = '/Estadistica/select/' + id;
                axios.get(url)
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
                this.index=this.tareas.indexOf(item);
                this.item=item;
                this.id = item.id;
                this.getEstadistica(item.id);
                this.verificacion=this.item.verificacion;
                this.dialog = true;
            },
            close() {
                this.error = 0;
                this.dialog = false;
                this.descripcion='';
                this.cantidad='';
                this.files=[];
                this.fotos=[];
                this.estadisticas=[];
                this.estadistica=[];
            },

            save() {
                var lat='';
                var lng='';
                let me = this;
                var archivos = [];
                this.files.forEach(element => {
                    archivos.push(element.file);
                });

                navigator.geolocation.getCurrentPosition( pos => {
                    lat = pos.coords.latitude;
                    lng = pos.coords.longitude;
                    var form = new FormData();
                    form.append('id', me.id);
                    form.append('descripcion', me.descripcion);
                    form.append('participantes', me.cantidad);
                    form.append('latitud', lat);
                    form.append('longitud', lng);
                    for (var i = 0; i < me.files.length; i++) {
                        form.append('fotos[]', me.files[i].file);
                    }
                    me.estadisticas.forEach(element => {
                        var Esta=new Object();
                        Esta.id=element.id.toString();
                        Esta.nombre=element.nombre;
                        Esta.value=element.value;
                        me.estadistica.push(Esta);
                    });
                    form.append('estadisticas', JSON.stringify(me.estadistica));
                    const ajuste = { headers: { 'Content-Type': 'multipart/form-data' } };
                
                    axios.post('/Tarea/subir',form, ajuste).then(function (response) {
                        console.log(response.data);
                        let respuesta;
                        if(response.data.offline==true)
                            respuesta=response.data.data;
                        else
                            respuesta=response.data;
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: respuesta,
                            showConfirmButton: false,
                        });
                        console.log(respuesta);
                         if ( navigator.onLine ) {
                            me.initialize();
                         }else{
                             me.item.estado=2;
                             me.tareas.splice(me.index,1,me.item);
                         }
                        me.close();
                    });
                });
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>