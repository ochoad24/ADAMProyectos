webpackJsonp([190],{

/***/ 2324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(546);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Estadistica",
    data: function data() {
        return {
            search: '',
            dialog: false,
            nameRules: [function (v) {
                return !!v || 'El nombre de la estadistica no puede estar vacio';
            }, function (v) {
                return v && v.length <= 19 || 'El nombre de la estadistica no puede ser mayor a 20';
            }],
            error: 0,
            errorMsj: [],
            headers: [{
                text: 'Id',
                align: 'left',
                value: 'id'
            }, { text: 'Nombre', value: 'nombre' }],
            estadisticas: [],
            editedIndex: -1,
            editedItem: {
                id: 0,
                nombre: ''
            },
            defaultItem: {
                id: 0,
                nombre: ''
            }
        };
    },

    computed: {
        formTitle: function formTitle() {
            return this.editedIndex === -1 ? 'Nueva Estadistica' : 'Editar Estadistica';
        }
    },

    watch: {
        dialog: function dialog(val) {
            val || this.close();
        }
    },

    created: function created() {
        this.initialize();
    },


    methods: {
        validate: function validate() {
            this.error = 0;
            this.errorMsj = [];
            if (!this.editedItem.nombre) this.errorMsj.push('El nombre de la estadistica no puede estar vacio');
            if (this.errorMsj.length) this.error = 1;
            return this.error;
        },
        initialize: function initialize() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/Estadistica').then(function (response) {
                _this.estadisticas = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        editItem: function editItem(item) {
            this.editedIndex = this.estadisticas.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem: function deleteItem(item) {
            var me = this;
            swal.fire({
                title: 'Quieres eliminar esta estadistica?',
                text: "No podras revertir la eliminacion!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminalo!',
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/Estadistica/' + item.id + '/delete').then(function (response) {
                        me.initialize();
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500 });
                    }).catch(function (error) {
                        swal.fire({
                            position: 'top-end',
                            type: 'error',
                            title: error.response.data.error,
                            showConfirmButton: true });
                    });
                }
            });
        },
        close: function close() {
            var _this2 = this;

            this.error = 0;
            this.dialog = false;
            setTimeout(function () {
                _this2.editedItem = Object.assign({}, _this2.defaultItem);
                _this2.editedIndex = -1;
            }, 300);
        },
        save: function save() {
            var me = this;
            if (this.validate()) {
                return;
            }
            if (this.editedIndex > -1) {
                __WEBPACK_IMPORTED_MODULE_1_axios___default()({
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
                        timer: 1500 });
                    me.initialize();
                    me.close();
                }).catch(function (error) {
                    swal.fire({
                        position: 'top-end',
                        type: 'error',
                        title: error.response.data.error,
                        showConfirmButton: true });
                    me.initialize();
                    me.close();
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                    method: 'post',
                    url: '/Estadistica/nuevo',
                    data: {
                        nombre: me.editedItem.nombre
                    }
                }).then(function (response) {
                    swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500 });
                    me.initialize();
                    me.close();
                }).catch(function (error) {
                    swal.fire({
                        position: 'top-end',
                        type: 'error',
                        title: error.response.data.error,
                        showConfirmButton: true });
                    me.initialize();
                    me.close();
                });
            }
        }
    }
});

/***/ }),

/***/ 2325:
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
            attrs: { header: "Tipo de Actividades", "header-tag": "h4" }
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
                                  [_vm._v("Nueva Estadistica")]
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
                                  _vm._v("Nueva estadistica")
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
                                          {
                                            attrs: {
                                              xs12: "",
                                              sm12: "",
                                              md12: ""
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label:
                                                  "Nombre de la estadistica",
                                                maxlength: "20",
                                                required: "",
                                                rules: _vm.nameRules,
                                                counter: 20
                                              },
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
                    items: _vm.estadisticas,
                    search: _vm.search
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "items",
                      fn: function(props) {
                        return [
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.nombre))
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
                                      return _vm.editItem(props.item)
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
    require("vue-hot-reload-api")      .rerender("data-v-e6fdb9a2", module.exports)
  }
}

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2324)
/* template */
var __vue_template__ = __webpack_require__(2325)
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
Component.options.__file = "resources/components/pages/src/estadistica.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6fdb9a2", Component.options)
  } else {
    hotAPI.reload("data-v-e6fdb9a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});