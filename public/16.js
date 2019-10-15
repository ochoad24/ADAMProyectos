webpackJsonp([16],{

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(621)
/* template */
var __vue_template__ = __webpack_require__(622)
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
Component.options.__file = "resources/components/pages/src/usuario.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b81a092", Component.options)
  } else {
    hotAPI.reload("data-v-2b81a092", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    name: "Usuario",
    data: function data() {
        return _defineProperty({
            dialog: false,
            idRol: 0,
            repetir: '',
            search: '',
            headers: [{
                text: 'Id',
                align: 'left',
                value: 'id'
            }, { text: 'Nombre', value: 'nombre' }, { text: 'Apellido', value: 'apellido' }, { text: 'Email', value: 'email' }, { text: 'Rol', value: 'rol' }],
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
                rol: 0
            },
            defaultItem: {
                id: 0,
                nombre: '',
                apellido: '',
                usuario: '',
                rol: 0
            }
        }, 'roles', [{
            text: 'Admnistrador',
            value: 0
        }, {
            text: 'Técnico',
            value: 1
        }]);
    },

    computed: {
        formTitle: function formTitle() {
            return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario';
        }
    },

    watch: {
        dialog: function dialog(val) {
            val || this.close();
        }
    },
    mounted: function mounted() {
        this.initialize();
    },

    methods: {
        validate: function validate() {
            this.error = 0;
            this.errorMsj = [];
            if (!this.editedItem.nombre) this.errorMsj.push('El nombre no puede estar vacio');

            if (!this.editedItem.apellido) this.errorMsj.push('El apellido no puede estar vacio');

            if (!this.editedItem.nombre) this.errorMsj.push('El correo no puede estar vacio');

            if (!this.idRol) this.errorMsj.push('Se debe asignar un rol al usuario');

            if (this.errorMsj.length) this.error = 1;
            return this.error;
        },
        initialize: function initialize() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/User/load').then(function (response) {
                _this.usuarios = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        deleteItem: function deleteItem(item) {
            var me = this;
            swal.fire({
                title: 'Quieres eliminar este Usuario?',
                text: "No podras revertir la eliminacion!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminalo!',
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/User/' + item.id + '/delete').then(function (response) {
                        me.initialize();
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }).catch(function (error) {
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
        close: function close() {
            var _this2 = this;

            this.dialog = false;
            setTimeout(function () {
                _this2.editedItem = Object.assign({}, _this2.defaultItem);
                _this2.editedIndex = -1;
            }, 300);
        },
        save: function save() {
            var me = this;
            __WEBPACK_IMPORTED_MODULE_1_axios___default()({
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
});

/***/ }),

/***/ 622:
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
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "600px" },
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
                                      attrs: { color: "#668c2d", dark: "" }
                                    },
                                    on
                                  ),
                                  [_vm._v("Nuevo Usuario")]
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
                                _c("v-toolbar-title", [_vm._v("Nuevo Usuario")])
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
                                          {
                                            attrs: {
                                              xs12: "",
                                              sm6: "",
                                              md6: ""
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "Nombre" },
                                              model: {
                                                value: _vm.editedItem.nombre,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "nombre",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.nombre"
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
                                              sm6: "",
                                              md6: ""
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "Apellido" },
                                              model: {
                                                value: _vm.editedItem.apellido,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "apellido",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.apellido"
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
                                              sm6: "",
                                              md6: ""
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                type: "email",
                                                label: "Ingrese su email"
                                              },
                                              model: {
                                                value: _vm.editedItem.usuario,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "usuario",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.usuario"
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
                                              sm6: "",
                                              md6: ""
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.roles,
                                                label: "Seleccione un Rol"
                                              },
                                              model: {
                                                value: _vm.idRol,
                                                callback: function($$v) {
                                                  _vm.idRol = $$v
                                                },
                                                expression: "idRol"
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
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "#668c2d", flat: "" },
                                    on: { click: _vm.save }
                                  },
                                  [_vm._v("Guardar")]
                                )
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
                    items: _vm.usuarios,
                    search: _vm.search
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "items",
                      fn: function(props) {
                        return [
                          _c("td", { staticClass: "text-xs-left" }, [
                            _vm._v(_vm._s(props.item.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-left" }, [
                            _vm._v(_vm._s(props.item.nombre))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-left" }, [
                            _vm._v(_vm._s(props.item.apellido))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-left" }, [
                            _vm._v(_vm._s(props.item.email))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-left" }, [
                            _vm._v(
                              _vm._s(
                                props.item.role != 1
                                  ? "Admnistrador"
                                  : "Técnico"
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "justify-center" },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: { small: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteItem(props.item)
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
    require("vue-hot-reload-api")      .rerender("data-v-2b81a092", module.exports)
  }
}

/***/ })

});