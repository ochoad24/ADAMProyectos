webpackJsonp([93],{

/***/ 2326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
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
    name: "Organizacion",
    data: function data() {
        return {
            dialog: false,
            ornameRules: [function (v) {
                return !!v || 'El nombre de la organizacion no puede estar vacio';
            }, function (v) {
                return v && v.length <= 149 || 'El titulo del proyecto no puede ser mayor a 150';
            }],
            munnameRules: [function (v) {
                return !!v || 'El nombre del municipio no puede estar vacio';
            }, function (v) {
                return v && v.length <= 149 || 'El nombre del municipio no puede ser mayor a 150';
            }],
            error: 0,
            select: [],
            errorMsj: [],
            departamentos: [],
            search: '',
            IdOrganizacion: 0,
            IdDepartamento: -1,
            editar: 0,
            headers: [{ text: 'Nombre', align: 'left', value: 'nombre' }, { text: 'Departamento', align: 'right', value: 'departamento' }, { text: 'Municipio', align: 'right', value: 'municipio' }, { text: 'Comunidad', align: 'right', value: 'comunidad' }],
            municipio: '',
            nombre: '',
            comunidad: '',
            organizaciones: [],
            editedIndex: -1
        };
    },

    computed: {
        formTitle: function formTitle() {
            return this.editar === 0 ? 'Nuevo Proyecto' : 'Editar Proyecto';
        }
    },

    watch: {
        dialog: function dialog(val) {
            val || this.close();
        }
    },

    created: function created() {
        this.cargaDepartamentos();
        this.initialize();
    },


    methods: {
        initialize: function initialize() {
            this.dialog = false;
            var me = this;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/org').then(function (response) {
                console.log("busqueda");
                var respuesta = response.data;
                me.organizaciones = respuesta;
            }).catch(function (error) {
                console.log(error.response);
            });
        },
        cargaDepartamentos: function cargaDepartamentos() {
            var me = this;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/org/dept').then(function (response) {
                me.departamentos = response.data;
            }).catch(function (error) {
                console.log(error.response);
            });
        },
        validate: function validate() {
            this.error = 0;
            this.errorMsj = [];
            if (!this.nombre) this.errorMsj.push('El nombre de la organización no puede estar vacio');
            if (!this.municipio) this.errorMsj.push('El municipio no puede estar vacío');
            if (this.select.length > 0) this.errorMsj.push('Por favor seleccione un departamento');
            if (this.errorMsj.length) this.error = 1;else this.error = 0;
            return this.error;
        },
        registrarOrganizacion: function registrarOrganizacion() {
            var me = this;
            if (this.validate() === 1) {
                return;
            }
            this.IdDepartamento = this.select.id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('org/registrar', {
                'nombre': me.nombre,
                'municipio': me.municipio,
                'IdDepartamento': me.select.id,
                'comunidad': me.comunidad
            }).then(function (response) {
                console.log(response.data);
                swal.fire({
                    type: 'success',
                    title: 'Organización registrada!',
                    showConfirmButton: false,
                    timer: 1500
                });
                me.close();
                me.initialize();
            }).catch(function (error) {
                console.log(error.response);
                swal.fire({
                    type: 'error',
                    title: 'Se ha producido un error!',
                    text: 'Error al registrar organizaci\xF3n: ' + error.response.data.message
                });
                me.close();
            });
        },
        editarOrganizacion: function editarOrganizacion() {
            var me = this;
            if (this.validate() === 1) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/org/actualizar', {
                'id': me.IdOrganizacion,
                'nombre': me.nombre,
                'municipio': me.municipio,
                'comunidad': me.comunidad,
                'IdDepartamento': me.select.id
            }).then(function (response) {
                swal.fire({
                    type: 'success',
                    title: 'Organización editada!',
                    showConfirmButton: false,
                    timer: 1500
                });
                me.initialize();
                me.close();
            }).catch(function (error) {
                console.log(error.response);
                swal.fire({
                    type: 'error',
                    title: 'Se ha producido un error!',
                    text: 'Error al editar organizaci\xF3n: ' + error.response.data.message
                });
                me.close();
            });
        },
        abrirEditar: function abrirEditar(item) {
            this.editar = 1;
            this.IdOrganizacion = item.IdOrganizacion;
            this.dialog = true;
            this.nombre = item.nombre;
            this.comunidad = item.comunidad;
            this.municipio = item.municipio;
        },
        deleteItem: function deleteItem(id) {
            console.log(id);
            var me = this;
            swal.fire({
                title: '¿Quieres eliminar esta organización?',
                text: "Esta acción no se podrá revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('/org/delete', {
                        'id': id
                    }).then(function (response) {
                        console.log(response.data);
                        swal.fire({
                            type: 'success',
                            title: 'Organización Eliminada',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        me.initialize();
                    }).catch(function (error) {
                        console.log('catch encontrado');
                        console.log(error);
                        swal.fire({
                            type: 'error',
                            title: 'Error al eliminar organizaci\xF3n: ' + error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            });
        },
        close: function close() {
            this.dialog = false;
            this.editar = 0;
            this.IdDepartamento = 0;
            this.IdOrganizacion = 0;
            this.nombre = "";
            this.municipio = '';
            this.comunidad = '';
            this.select = [];
            this.error = 0;
            this.errorMsj = [];
        }
    }
});

/***/ }),

/***/ 2327:
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
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Usuarios", "header-tag": "h4" }
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
                    _c(
                      "v-dialog",
                      {
                        attrs: { persistent: "", "max-width": "650px" },
                        scopedSlots: _vm._u([
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
                                      attrs: { dark: "", color: "#668c2d" },
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
                                      "Agregar\n                                Organización"
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ]),
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
                                        _vm.dialog2 = false
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { col: "white" } }, [
                                      _vm._v("clear")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-toolbar-title", [
                                  _vm._v("Nueva Organizacion")
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
                                          { attrs: { xs12: "" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label:
                                                  "Nombre de la organización",
                                                maxlength: "150",
                                                required: "",
                                                rules: _vm.ornameRules,
                                                counter: 150
                                              },
                                              model: {
                                                value: _vm.nombre,
                                                callback: function($$v) {
                                                  _vm.nombre = $$v
                                                },
                                                expression: "nombre"
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
                                            _c("v-select", {
                                              attrs: {
                                                hint:
                                                  "" + _vm.select.departamento,
                                                items: _vm.departamentos,
                                                "item-text": "departamento",
                                                "item-value": "id",
                                                label:
                                                  "Seleccionar departamento",
                                                "persistent-hint": "",
                                                "return-object": "",
                                                "single-line": ""
                                              },
                                              model: {
                                                value: _vm.select,
                                                callback: function($$v) {
                                                  _vm.select = $$v
                                                },
                                                expression: "select"
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
                                            _c("v-text-field", {
                                              attrs: {
                                                label:
                                                  "Municipio de ubucación de la organización",
                                                maxlength: "150",
                                                required: "",
                                                rules: _vm.munnameRules,
                                                counter: 150
                                              },
                                              model: {
                                                value: _vm.municipio,
                                                callback: function($$v) {
                                                  _vm.municipio = $$v
                                                },
                                                expression: "municipio"
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
                                            _c("v-text-field", {
                                              attrs: {
                                                label: "Ingrese comunidad"
                                              },
                                              model: {
                                                value: _vm.comunidad,
                                                callback: function($$v) {
                                                  _vm.comunidad = $$v
                                                },
                                                expression: "comunidad"
                                              }
                                            })
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
                                  _c(
                                    "div",
                                    { staticClass: "text-xs-center" },
                                    [
                                      _vm._l(_vm.errorMsj, function(e) {
                                        return _c("strong", {
                                          key: e,
                                          staticClass:
                                            "red--text text--lighten-1",
                                          domProps: { textContent: _vm._s(e) }
                                        })
                                      }),
                                      _vm._v(" "),
                                      _c("br")
                                    ],
                                    2
                                  ),
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
                                    attrs: { color: "#668c2d", flat: "" },
                                    on: { click: _vm.close }
                                  },
                                  [_vm._v("Cancelar")]
                                ),
                                _vm._v(" "),
                                _vm.editar === 0
                                  ? _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "#668c2d", flat: "" },
                                        on: { click: _vm.registrarOrganizacion }
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
                                        attrs: { color: "#668c2d", flat: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editarOrganizacion()
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
                    items: _vm.organizaciones,
                    search: _vm.search
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "items",
                      fn: function(props) {
                        return [
                          _c("td", [_vm._v(_vm._s(props.item.nombre))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.departamento))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.municipio))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.comunidad))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "justify-center layout px-0" },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-2",
                                  attrs: { small: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.abrirEditar(props.item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                edit\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  attrs: { small: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteItem(
                                        props.item.IdOrganizacion
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                delete\n                            "
                                  )
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
                  ])
                })
              ],
              1
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
    require("vue-hot-reload-api")      .rerender("data-v-37061daa", module.exports)
  }
}

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(2326)
/* template */
var __vue_template__ = __webpack_require__(2327)
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
Component.options.__file = "resources/components/pages/src/organizacion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37061daa", Component.options)
  } else {
    hotAPI.reload("data-v-37061daa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});