webpackJsonp([92],{

/***/ 1516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "modals",
    data: function data() {
        return {
            stop_close: false
        };
    },

    methods: {
        stop: function stop(e) {
            if (!this.stop_close) {
                return e.cancel();
            }
        },
        shown: function shown() {
            alert("Modal opened");
        },
        open_modal: function open_modal() {
            console.log(this.$refs);
            this.$refs.modal21.show();
        },
        hidden: function hidden() {
            alert("Modal Hidden");
        },
        success: function success() {
            alert("OK Clicked");
        },
        cancel: function cancel() {
            alert("Close Clicked");
        }
    }

});

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "bg-primary-card",
          attrs: { header: "Modals", "header-tag": "h4" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c(
                  "b-card",
                  { staticClass: "bg-primary-card" },
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal1",
                            modifiers: { modal1: true }
                          }
                        ],
                        staticClass: "mt-3 mb-3"
                      },
                      [_vm._v("Launch demo modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        staticClass: "mt-3 mb-3",
                        on: { click: _vm.open_modal }
                      },
                      [_vm._v("Launch modal with ref")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modal1",
                        attrs: { id: "modal1", title: "Modal" }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modal21",
                        attrs: { id: "modal21", title: "Modal" }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-12 mt-3" },
              [
                _c(
                  "b-card",
                  { staticClass: "bg-info-card" },
                  [
                    _c("h4", [_vm._v("Stop closing on backdrop click")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal2",
                            modifiers: { modal2: true }
                          }
                        ]
                      },
                      [_vm._v("Launch demo modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modal2",
                        attrs: {
                          "no-close-on-backdrop": "",
                          id: "modal2",
                          title: "Modal"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal4",
                            modifiers: { modal4: true }
                          }
                        ]
                      },
                      [_vm._v("Launch small modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal4",
                          title: "Small Modal",
                          size: "sm"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal5",
                            modifiers: { modal5: true }
                          }
                        ]
                      },
                      [_vm._v("Launch Normal modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal5",
                          title: "Normal Modal",
                          size: "md"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal6",
                            modifiers: { modal6: true }
                          }
                        ]
                      },
                      [_vm._v("Launch Large modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal6",
                          title: "Large Modal",
                          size: "lg"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Primary Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal8",
                            modifiers: { modal8: true }
                          }
                        ]
                      },
                      [_vm._v("Primary modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal8",
                          title: "Priamry Modal",
                          "header-bg-variant": "primary",
                          "header-text-variant": "light",
                          "footer-bg-variant": "primary",
                          "footer-text-variant": "light",
                          size: "md"
                        }
                      },
                      [_c("h1", [_vm._v(" Primary modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Info Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal9",
                            modifiers: { modal9: true }
                          }
                        ]
                      },
                      [_vm._v("Info modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal9",
                          title: "Info Modal",
                          "header-bg-variant": "info",
                          "header-text-variant": "light",
                          "footer-bg-variant": "info",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v(" Info modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Warning Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal10",
                            modifiers: { modal10: true }
                          }
                        ]
                      },
                      [_vm._v("Warning modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal10",
                          title: "Warning Modal",
                          "header-bg-variant": "warning",
                          "header-text-variant": "light",
                          "footer-bg-variant": "warning",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v(" Warning modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Danger Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal11",
                            modifiers: { modal11: true }
                          }
                        ]
                      },
                      [_vm._v("Danger Modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal11",
                          title: "Danger Modal",
                          "header-bg-variant": "danger",
                          "header-text-variant": "light",
                          "footer-bg-variant": "danger",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v("Danger modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Success Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal12",
                            modifiers: { modal12: true }
                          }
                        ]
                      },
                      [_vm._v("Success Modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal12",
                          title: "Success Modal",
                          "header-bg-variant": "success",
                          "header-text-variant": "light",
                          "footer-bg-variant": "success",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v(" Success modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Secondary Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal13",
                            modifiers: { modal13: true }
                          }
                        ]
                      },
                      [_vm._v("Secondary modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal13",
                          title: "Deafult Modal",
                          "header-bg-variant": "secondary",
                          "header-text-variant": "light",
                          "footer-bg-variant": "secondary",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c978dd7", module.exports)
  }
}

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1516)
/* template */
var __vue_template__ = __webpack_require__(1517)
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
Component.options.__file = "resources/components/pages/advanced_modals.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c978dd7", Component.options)
  } else {
    hotAPI.reload("data-v-0c978dd7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});