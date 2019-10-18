webpackJsonp([20],{

/***/ 2285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(219);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Multiselect: __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default.a
    },
    data: function data() {
        return {
            dialog: false,
            nameRules: [function (v) {
                return !!v || 'El nombre de la actividad no puede estar vacio';
            }, function (v) {
                return v && v.length <= 449 || 'El titulo del proyecto no puede ser mayor a 500';
            }],
            menu: false,
            menu2: false,
            idActividad: 0,
            editar: 0,
            proyectoSelect: false,
            actividad: '',
            codigo: '',
            descripcionAct: '',
            fechaInicio: new Date().toISOString().substr(0, 10),
            fechaFinal: new Date().toISOString().substr(0, 10),
            search: '',
            headers: [{ text: 'Código', value: 'codigo_actividad', align: 'right' }, { text: 'Actividad', value: 'actividad', align: 'right' }, { text: 'Completado', value: 'completado', align: 'right' }, { text: 'Fecha de Inicio', value: 'fechaInicio', align: 'right' }, { text: 'Fecha de Finalización', value: 'fechaFinal', align: 'right' }, { text: 'Estado', value: 'estado', align: 'center' }],
            error: 0,
            errorMsj: [],
            actividades: [],
            proyecto: {
                id: 0,
                nombre: ''
            },
            loader: null,
            loading: false,
            editedIndex: -1,
            editedItem: {
                id: 0,
                actividad: '',
                tareas: 0,
                tareasCompletadas: 0,
                tareasPendientes: 0,
                fechaInicio: new Date().toISOString().substr(0, 10),
                fechaFin: new Date().toISOString().substr(0, 10),
                estado: 0
            },
            defaultItem: {
                id: 0,
                actividad: '',
                tareas: 0,
                tareasCompletadas: 0,
                tareasPendientes: 0,
                fechaInicio: new Date().toISOString().substr(0, 10),
                fechaFin: new Date().toISOString().substr(0, 10),
                estado: 0
            }
        };
    },

    computed: _extends({
        formTitle: function formTitle() {
            return this.editedIndex === -1 ? 'Nueva Actividad' : 'Editar Actividad';
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(["seleccion"])),
    watch: {
        dialog: function dialog(val) {
            val || this.close();
        },

        seleccion: {
            deep: true,
            handler: function handler(val) {
                if (val.id === 0) {
                    this.proyectoSelect = false;
                } else {
                    this.proyectoSelect = true;
                    this.proyecto = val;
                    this.initialize();
                }
            }
        }

    },

    created: function created() {
        this.initialize();
    },
    mounted: function mounted() {
        if (this.$store.state.proyecto.id === 0) {
            this.proyectoSelect = false;
        } else {
            this.proyectoSelect = true;
            this.proyecto = this.$store.state.proyecto;
            this.initialize();
        }
    },

    methods: {
        validate: function validate() {
            this.error = 0;
            this.errorMsj = [];
            if (!this.proyecto) this.errorMsj.push('No ha seleccionado ningún proyecto. Por favor seleccione uno.');
            if (!this.actividad) this.errorMsj.push('El nombre de la actividad no puede estar vacío');
            if (!this.fechaInicio) this.errorMsj.push('La fecha de inicio de la actividad no puede estar vacía');
            if (!this.fechaFinal) this.errorMsj.push('La fecha de finalización de la actividad no puede estar vacía');
            if (Date.parse(this.fechaInicio) > Date.parse(this.fechaFinal) || Date.parse(this.fechaInicio) === Date.parse(this.fechaFinal)) this.errorMsj.push('Formato de fechas incorrecto. Por favor revise las fechas ingresadas.');
            if (this.errorMsj.length) this.error = 1;else this.error = 0;
            return this.error;
        },
        initialize: function initialize() {
            var _this = this;

            var url = '/actividad?proyecto=' + this.proyecto.id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (response) {
                // console.log(response.data);
                _this.actividades = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        registrarActividad: function registrarActividad() {
            var me = this;
            if (this.validate() === 1) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('actividad/registrar', {
                'actividad': me.actividad,
                'fechaInicio': me.fechaInicio,
                'fechaFinal': me.fechaFinal,
                'codigo': me.codigo,
                'descripcion': me.descripcionAct,
                'idProyecto': me.proyecto.id
            }).then(function (response) {
                if (!response.data) {
                    swal.fire({
                        type: 'success',
                        title: 'Actividad Registrada!',
                        text: 'Por favor crea tareas para la actividad.',
                        showConfirmButton: false,
                        timer: 2500
                    });
                    window.location.href = "/#/Tarea";
                } else {
                    swal.fire({
                        type: 'error',
                        title: 'Se ha producido un error!',
                        text: 'Error al registrar actividad!'
                    });
                    me.close();
                }

                me.close();
                me.initialize();
            }).catch(function (error) {
                console.log(error.response);
                swal.fire({
                    type: 'error',
                    title: 'Se ha producido un error!',
                    text: 'Error al ingresar proyecto: ' + error.response.data.message
                });
                me.close();
            });
        },
        editarActividad: function editarActividad() {
            var me = this;
            this.loader = 'loading';
            this.loading = true;
            if (this.validate() === 1) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('actividad/actualizar', {
                'actividad': me.actividad,
                'fechaInicio': me.fechaInicio,
                'fechaFinal': me.fechaFinal,
                'codigo': me.codigo,
                'descripcion': me.descripcionAct,
                'idProyecto': me.proyecto.id,
                'id': me.idActividad
            }).then(function (response) {
                // console.log(response.data);
                me.loader = null;
                me.loading = false;
                if (!response.data) {
                    swal.fire({
                        type: 'success',
                        title: 'Actividad editada!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    swal.fire({
                        type: 'error',
                        title: 'Se ha producido un error!',
                        text: 'Error al editar actividad!'
                    });
                    me.close();
                }
                me.close();
                me.initialize();
            }).catch(function (error) {
                me.loader = null;
                me.loading = false;
                console.log(error.response);
                swal.fire({
                    type: 'error',
                    title: 'Se ha producido un error!',
                    text: 'Error al ingresar proyecto: ' + error.response.data.message
                });
                me.close();
            });
        },
        activar: function activar(id) {
            var me = this;
            var swalWithBootstrapButtons = swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: '¿Quieres activar esta actividad?',
                type: 'warning',
                showCancelButton: true,
                confirmButton: 'Aceptar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('actividad/activate', {
                        'id': id
                    }).then(function (response) {
                        me.initialize();
                        swalWithBootstrapButtons.fire('Activado', 'La actividad ha sido activada!', 'success');
                    }).catch(function (error) {
                        swalWithBootstrapButtons.fire('Error', 'Error al activar actividad!', 'error');
                        console.log(error);
                    });
                } else {
                    swalWithBootstrapButtons.fire('Cancelado :(');
                }
            });
        },
        desactivar: function desactivar(id) {
            var me = this;
            var swalWithBootstrapButtons = swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: '¿Quieres desactivar esta actividad?',
                type: 'warning',
                showCancelButton: true,
                confirmButton: 'Aceptar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('actividad/deactivate', {
                        'id': id
                    }).then(function (response) {
                        me.initialize();
                        swalWithBootstrapButtons.fire('Desactivado', 'La actividad ha sido desactivada!', 'success');
                    }).catch(function (error) {
                        console.log(error.response);
                        swalWithBootstrapButtons.fire('Error', 'Error al desactivar actividad!', 'error');
                    });
                } else {
                    swalWithBootstrapButtons.fire('Cancelado :(');
                }
            });
        },
        deleteItem: function deleteItem(id) {
            var me = this;
            swal.fire({
                title: '¿Quieres eliminar esta actividad?',
                text: "Esta acción no se podrá revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/actividad/delete', {
                        'id': id
                    }).then(function (response) {
                        // console.log(response.data);
                        swal.fire({
                            type: 'success',
                            title: 'Actividad eliminada',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        me.initialize();
                    }).catch(function (error) {
                        console.log('catch encontrado');
                        console.log(error);
                        swal.fire({
                            type: 'error',
                            title: 'Error al eliminar actividad: ' + error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            });
        },
        abrirEditar: function abrirEditar(item) {
            this.editar = 1;
            this.dialog = true;
            this.actividad = item.actividad;
            this.descripcionAct = item.descripcion;
            this.codigo = item.codigo_actividad;
            this.fechaInicio = item.fechaInicio.split("/").reverse().join("-");
            this.fechaFinal = item.fechaFinal.split("/").reverse().join("-");
            this.idActividad = item.id;
        },
        close: function close() {
            this.editar = 0;
            this.dialog = false;
            this.fechaInicio = '';
            this.fechaFinal = '';
            this.actividad = '';
        },
        save: function save() {
            var me = this;
            __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                method: 'post',
                url: '/User/nuevo',
                data: {
                    nombre: me.editedItem.nombre,
                    apellido: me.editedItem.apellido,
                    usuario: me.editedItem.usuario,
                    password: me.editedItem.contrasena,
                    idRol: me.idRol.id
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
});

/***/ }),

/***/ 2286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row user-list" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _vm.proyectoSelect === true
          ? _c(
              "b-card",
              {
                staticClass: "bg-primary-card",
                attrs: { header: "Actividades", "header-tag": "h4" }
              },
              [
                _c(
                  "div",
                  { staticClass: "table-responsive" },
                  [
                    _c(
                      "v-toolbar",
                      { attrs: { flat: "", color: "white" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            "append-icon": "search",
                            label: "Buscar",
                            "single-line": "",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: {
                              persistent: "",
                              "max-width": "60%",
                              "max-height": "800"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "#668c2d",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.editar = 0
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _vm._v(
                                            "Nueva\n                                Actividad"
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              2653294978
                            ),
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-toolbar",
                                  { attrs: { dark: "", color: "#668c2d" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { icon: "", dark: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.dialog = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { col: "white" } },
                                          [_vm._v("clear")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-toolbar-title", [
                                      _vm._v(_vm._s(_vm.formTitle))
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-container",
                                      { attrs: { "grid-list-md": "" } },
                                      [
                                        _c(
                                          "v-layout",
                                          { attrs: { wrap: "" } },
                                          [
                                            _c(
                                              "v-flex",
                                              { attrs: { xs3: "" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Ingrese código de actividad"
                                                  },
                                                  model: {
                                                    value: _vm.codigo,
                                                    callback: function($$v) {
                                                      _vm.codigo = $$v
                                                    },
                                                    expression: "codigo"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs9: "" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Ingrese nombre de la actividad",
                                                    axlength: "500",
                                                    required: "",
                                                    rules: _vm.nameRules,
                                                    counter: 500
                                                  },
                                                  model: {
                                                    value: _vm.actividad,
                                                    callback: function($$v) {
                                                      _vm.actividad = $$v
                                                    },
                                                    expression: "actividad"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs12: "" } },
                                              [
                                                _c("v-textarea", {
                                                  attrs: {
                                                    label:
                                                      "Observaciones de la actividad   "
                                                  },
                                                  model: {
                                                    value: _vm.descripcionAct,
                                                    callback: function($$v) {
                                                      _vm.descripcionAct = $$v
                                                    },
                                                    expression: "descripcionAct"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs12: "",
                                                  sm12: "",
                                                  md6: ""
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-menu",
                                                  {
                                                    ref: "menu",
                                                    attrs: {
                                                      "close-on-content-click": false,
                                                      "nudge-right": 40,
                                                      "return-value":
                                                        _vm.fechaInicio,
                                                      lazy: "",
                                                      transition:
                                                        "scale-transition",
                                                      "offset-y": "",
                                                      "full-width": "",
                                                      "min-width": "290px"
                                                    },
                                                    on: {
                                                      "update:returnValue": function(
                                                        $event
                                                      ) {
                                                        _vm.fechaInicio = $event
                                                      },
                                                      "update:return-value": function(
                                                        $event
                                                      ) {
                                                        _vm.fechaInicio = $event
                                                      }
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Ingrese fecha de inicio",
                                                                      "prepend-icon":
                                                                        "event",
                                                                      readonly:
                                                                        ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm.fechaInicio,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.fechaInicio = $$v
                                                                      },
                                                                      expression:
                                                                        "fechaInicio"
                                                                    }
                                                                  },
                                                                  on
                                                                )
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      false,
                                                      622515981
                                                    ),
                                                    model: {
                                                      value: _vm.menu,
                                                      callback: function($$v) {
                                                        _vm.menu = $$v
                                                      },
                                                      expression: "menu"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-date-picker",
                                                      {
                                                        attrs: {
                                                          "no-title": "",
                                                          scrollable: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.fechaInicio,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.fechaInicio = $$v
                                                          },
                                                          expression:
                                                            "fechaInicio"
                                                        }
                                                      },
                                                      [
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              color: "primary"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.menu = false
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Cancelar\n                                                    "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              color: "primary"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.$refs.menu.save(
                                                                  _vm.fechaInicio
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Guardar")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs12: "",
                                                  sm12: "",
                                                  md6: ""
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-menu",
                                                  {
                                                    ref: "menu2",
                                                    attrs: {
                                                      "close-on-content-click": false,
                                                      "nudge-right": 40,
                                                      "return-value":
                                                        _vm.fechaFinal,
                                                      lazy: "",
                                                      transition:
                                                        "scale-transition",
                                                      "offset-y": "",
                                                      "full-width": "",
                                                      "min-width": "290px"
                                                    },
                                                    on: {
                                                      "update:returnValue": function(
                                                        $event
                                                      ) {
                                                        _vm.fechaFinal = $event
                                                      },
                                                      "update:return-value": function(
                                                        $event
                                                      ) {
                                                        _vm.fechaFinal = $event
                                                      }
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Ingrese fecha límite",
                                                                      "prepend-icon":
                                                                        "event",
                                                                      readonly:
                                                                        ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm.fechaFinal,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.fechaFinal = $$v
                                                                      },
                                                                      expression:
                                                                        "fechaFinal"
                                                                    }
                                                                  },
                                                                  on
                                                                )
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      false,
                                                      2115921780
                                                    ),
                                                    model: {
                                                      value: _vm.menu2,
                                                      callback: function($$v) {
                                                        _vm.menu2 = $$v
                                                      },
                                                      expression: "menu2"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-date-picker",
                                                      {
                                                        attrs: {
                                                          "no-title": "",
                                                          scrollable: ""
                                                        },
                                                        model: {
                                                          value: _vm.fechaFinal,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.fechaFinal = $$v
                                                          },
                                                          expression:
                                                            "fechaFinal"
                                                        }
                                                      },
                                                      [
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass: "mb-2",
                                                            attrs: {
                                                              flat: "",
                                                              color: "#668c2d",
                                                              dark: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.menu2 = false
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Cancelar\n                                                    "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass: "mb-2",
                                                            attrs: {
                                                              flat: "",
                                                              color: "#668c2d",
                                                              dark: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.$refs.menu2.save(
                                                                  _vm.fechaFinal
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Guardar")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.error
                                  ? [
                                      _c("v-divider"),
                                      _vm._v(" "),
                                      _vm._l(_vm.errorMsj, function(e) {
                                        return _c(
                                          "div",
                                          {
                                            key: e,
                                            staticClass: "text-xs-center"
                                          },
                                          [
                                            _c("strong", {
                                              staticClass:
                                                "red--text text--lighten-1",
                                              domProps: {
                                                textContent: _vm._s(e)
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("br")
                                          ]
                                        )
                                      }),
                                      _vm._v(" "),
                                      _c("v-divider")
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "mb-2",
                                        attrs: {
                                          color: "#668c2d",
                                          dark: "",
                                          flat: ""
                                        },
                                        on: { click: _vm.close }
                                      },
                                      [_vm._v("Cancelar")]
                                    ),
                                    _vm._v(" "),
                                    _vm.editar === 0
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "#668c2d",
                                              dark: "",
                                              flat: ""
                                            },
                                            on: {
                                              click: _vm.registrarActividad
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Guardar"
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.editar === 1
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "#668c2d",
                                              dark: "",
                                              flat: "",
                                              loading: _vm.loading,
                                              disabled: _vm.loading
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editarActividad()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Guardar"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.actividades,
                        search: _vm.search
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "items",
                            fn: function(props) {
                              return [
                                _c("td", { staticClass: "text-xs-right" }, [
                                  _vm._v(_vm._s(props.item.codigo_actividad))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-right" }, [
                                  _vm._v(_vm._s(props.item.actividad))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-right" }, [
                                  _vm._v(
                                    _vm._s(
                                      Math.round(props.item.completado, 2) +
                                        " %"
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-right" }, [
                                  _vm._v(_vm._s(props.item.fechaInicio))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-right" }, [
                                  _vm._v(_vm._s(props.item.fechaFinal))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-xs-center" },
                                  [
                                    [
                                      _c(
                                        "div",
                                        [
                                          props.item.estado
                                            ? _c(
                                                "v-chip",
                                                {
                                                  attrs: {
                                                    color: "green",
                                                    "text-color": "white"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Activo\n                                    "
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "v-chip",
                                                {
                                                  attrs: {
                                                    color: "red",
                                                    "text-color": "white"
                                                  }
                                                },
                                                [_vm._v("Desactivado")]
                                              )
                                        ],
                                        1
                                      )
                                    ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "justify-center" },
                                  [
                                    _c(
                                      "v-tooltip",
                                      {
                                        attrs: { bottom: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: { small: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.abrirEditar(
                                                              props.item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _vm._v(
                                                        "\n                                        edit\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Editar actividad")])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-tooltip",
                                      {
                                        attrs: { bottom: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  props.item.estado
                                                    ? _c(
                                                        "v-icon",
                                                        _vm._g(
                                                          {
                                                            staticClass: "mr-2",
                                                            attrs: {
                                                              small: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.desactivar(
                                                                  props.item.id
                                                                )
                                                              }
                                                            }
                                                          },
                                                          on
                                                        ),
                                                        [
                                                          _vm._v(
                                                            "\n                                        block\n                                    "
                                                          )
                                                        ]
                                                      )
                                                    : _c(
                                                        "v-icon",
                                                        _vm._g(
                                                          {
                                                            staticClass: "mr-2",
                                                            attrs: {
                                                              small: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.activar(
                                                                  props.item.id
                                                                )
                                                              }
                                                            }
                                                          },
                                                          on
                                                        ),
                                                        [
                                                          _vm._v(
                                                            "\n                                        check_circle\n                                    "
                                                          )
                                                        ]
                                                      )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        props.item.estado
                                          ? _c("span", [
                                              _vm._v("Desactivar actividad")
                                            ])
                                          : _c("span", [
                                              _vm._v("Activar actividad")
                                            ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-tooltip",
                                      {
                                        attrs: { bottom: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      {
                                                        attrs: { small: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteItem(
                                                              props.item.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _vm._v(
                                                        "\n                                        delete\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v("Eliminar actividad")
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "no-data",
                            fn: function() {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "#668c2d", dark: "" },
                                    on: { click: _vm.initialize }
                                  },
                                  [_vm._v("Recargar")]
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "no-results",
                            fn: function() {
                              return [
                                _c(
                                  "v-alert",
                                  {
                                    attrs: {
                                      value: true,
                                      color: "error",
                                      icon: "warning"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      '\n                            No hay resultados de "' +
                                        _vm._s(_vm.search) +
                                        '".\n                        '
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        1932917878
                      )
                    })
                  ],
                  1
                )
              ]
            )
          : _c(
              "v-alert",
              {
                attrs: {
                  value: true,
                  color: "warning",
                  icon: "priority_high",
                  outline: ""
                }
              },
              [
                _vm._v(
                  "\n            ¡Por favor seleccione proyecto! \n        "
                )
              ]
            )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-af4e55f4", module.exports)
  }
}

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2285)
/* template */
var __vue_template__ = __webpack_require__(2286)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/pages/src/actividad.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af4e55f4", Component.options)
  } else {
    hotAPI.reload("data-v-af4e55f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(536);
var isBuffer = __webpack_require__(548);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(527);
var normalizeHeaderName = __webpack_require__(553);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(540);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(540);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);
var settle = __webpack_require__(554);
var buildURL = __webpack_require__(537);
var parseHeaders = __webpack_require__(556);
var isURLSameOrigin = __webpack_require__(557);
var createError = __webpack_require__(541);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(558);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(555);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function l(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function o(t,e,i,n){return t.filter(function(t){return l(n(t,i),e)})}function r(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(i){return i.reduce(function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i},[])}}function u(t,e,i,s,l){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=o(r[i],t,e,l);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=i(2),p=function(t){return t&&t.__esModule?t:{default:t}}(h),d=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}};e.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return s(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var t=this.search||"",e=t.toLowerCase(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):o(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&e.length&&!this.isExistingOption(e)&&i.unshift({isTag:!0,label:t}),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue[0]?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(t,e){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(t){this.internalValue=this.getInternalValue(t)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(t){return null===t||void 0===t?[]:this.multiple?(0,p.default)(t):(0,p.default)([t])},filterAndFlat:function(t,e,i){return d(u(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return d(a(this.groupValues,this.groupLabel),r)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isNotSelected:function(t){return!this.isSelected(t)},getOptionLabel:function(t){if(s(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return s(e)?"":e},select:function(t,e){if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isLabel||t.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.internalValue.push(t):this.internalValue=[t],this.$emit("select",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===t?"undefined":c(t))?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);this.internalValue.splice(i,1),this.$emit("remove",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t.map(n);if(t&&"object"===(void 0===t?"undefined":s(t))){for(var e={},i=Object.keys(t),l=0,o=i.length;l<o;l++){var r=i[l];e[r]=n(t[r])}return e}return t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,i){i(6);var n=i(7)(i(5),i(8),null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=e.pointerMixin=e.multiselectMixin=e.Multiselect=void 0;var s=i(3),l=n(s),o=i(0),r=n(o),a=i(1),u=n(a),c=i(2),h=n(c);e.default=l.default,e.Multiselect=l.default,e.multiselectMixin=r.default,e.pointerMixin=u.default,e.deepClone=h.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),l=n(s),o=i(1),r=n(o);e.default={name:"vue-multiselect",mixins:[l.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and "+t+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{display:"none"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,n){var s,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,l=t.default);var r="function"==typeof l?l.options:l;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var a=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}}),r.computed=a}return{esModule:s,exports:l,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)||!t._k(e.keyCode,"tab",9)?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValue,function(e){return[t._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]:t._e(),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.isOpen?t.search:t.currentOptionLabel},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.pointerBackward()},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46]))return null;e.stopPropagation(),t.removeLastElement()}]}}):t._e(),t._v(" "),t.searchable?t._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:t._s(t.currentOptionLabel)},on:{mousedown:function(e){e.preventDefault(),t.toggle(e)}}})],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:t.optionHighlight(n,e)},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);
var bind = __webpack_require__(536);
var Axios = __webpack_require__(549);
var mergeConfig = __webpack_require__(542);
var defaults = __webpack_require__(539);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(543);
axios.CancelToken = __webpack_require__(561);
axios.isCancel = __webpack_require__(538);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(562);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 548:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);
var buildURL = __webpack_require__(537);
var InterceptorManager = __webpack_require__(550);
var dispatchRequest = __webpack_require__(551);
var mergeConfig = __webpack_require__(542);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);
var transformData = __webpack_require__(552);
var isCancel = __webpack_require__(538);
var defaults = __webpack_require__(539);
var isAbsoluteURL = __webpack_require__(559);
var combineURLs = __webpack_require__(560);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(541);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(527);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(543);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ })

});