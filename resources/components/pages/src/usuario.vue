<template>
    <div class="row user-list">
        <div class="col-lg-12">
            <b-card header="Usuarios" header-tag="h4" class="bg-primary-card" >
                <div class="table-responsive">
                    <v-toolbar flat color="white">
                        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details>
                        </v-text-field>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="600px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="#668c2d" dark class="mb-2" v-on="on">Nuevo Usuario</v-btn>
                            </template>
                            <v-card>
                                <v-toolbar dark color="#668c2d">
                                <v-btn icon dark @click="dialog2 = false">
                                    <v-icon col="white">clear</v-icon>
                                </v-btn>
                                <v-toolbar-title>Nuevo Usuario</v-toolbar-title>
                            </v-toolbar>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6 md6>
                                                <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md6>
                                                <v-text-field v-model="editedItem.apellido" label="Apellido">
                                                </v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md6>
                                                <v-text-field :type="'email'" v-model="editedItem.usuario" label="Ingrese su email">
                                                </v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md6>
                                                <v-select :items="roles" label="Seleccione un Rol" v-model="idRol"></v-select>
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
                                    <v-btn color="#668c2d" flat @click="close">Cancelar</v-btn>
                                    <v-btn color="#668c2d" flat @click="save">Guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                    <v-data-table :headers="headers" :items="usuarios" class="elevation-1" :search="search">
                        <template v-slot:items="props">
                            <td class="text-xs-left">{{ props.item.id }}</td>
                            <td class="text-xs-left">{{ props.item.nombre }}</td>
                            <td class="text-xs-left">{{ props.item.apellido }}</td>
                            <td class="text-xs-left">{{ props.item.email }}</td>
                            <td class="text-xs-left">{{ props.item.role != 1 ? 'Admnistrador':'Técnico' }}</td>
                            <td class="justify-center">
                                <v-icon small @click="deleteItem(props.item)">
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
    export default {
        name: "Usuario",
        data: () => ({
            dialog: false,
            idRol:0,
            repetir: '',
            search: '',
            headers: [
                {
                    text: 'Id',
                    align: 'left',
                    value: 'id'
                },
                { text: 'Nombre', value: 'nombre' },
                { text: 'Apellido', value: 'apellido' },
                { text: 'Email', value: 'email' },
                { text: 'Rol', value: 'rol' },
            ],
            error: 0,
            errorMsj: [],
            usuarios: [],
            roles: [],
            editedIndex: -1,
            editedItem: {
                id: 0,
                nombre: '',
                apellido: '',
                usuario: '',
                rol: 0,
            },
            defaultItem: {
                id: 0,
                nombre: '',
                apellido: '',
                usuario: '',
                rol: 0,
            },
            roles:[
                {
                    text:'Admnistrador',
                    value:0
                },
                {
                    text:'Técnico',
                    value:1
                }]
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            }
        },
        mounted(){
            this.initialize();
        },
        methods: {
            validate() {
                this.error = 0;
                this.errorMsj = [];
                if (!this.editedItem.nombre)
                    this.errorMsj.push('El nombre no puede estar vacio');

                if (!this.editedItem.apellido)
                    this.errorMsj.push('El apellido no puede estar vacio');

                if (!this.editedItem.nombre)
                    this.errorMsj.push('El correo no puede estar vacio');

                if (!this.idRol)
                    this.errorMsj.push('Se debe asignar un rol al usuario');

                if (this.errorMsj.length)
                    this.error = 1;
                return this.error;
            },
            initialize() {
                axios.get('/User/load')
                    .then(response => {
                        this.usuarios = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            },
            deleteItem(item) {
                let me = this;
                swal.fire({
                    title: 'Quieres eliminar este Usuario?',
                    text: "No podras revertir la eliminacion!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminalo!',
                    cancelButtonText: "Cancelar"
                }).then((result) => {
                    if (result.value) {
                        axios.delete(`/User/${item.id}/delete`).then(response => {
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
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                let me = this;
                axios({
                    method: 'post',
                    url: '/User/nuevo',
                    data: {
                        nombre: me.editedItem.nombre,
                        apellido: me.editedItem.apellido,
                        email: me.editedItem.usuario,
                        role: me.idRol
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
                    console.log(error.response);
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
</script>
