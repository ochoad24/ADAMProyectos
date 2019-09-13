webpackJsonp([64],{

/***/ 2183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("5ee8b098", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3933b1e1\",\"scoped\":false,\"hasInlineConfig\":true}!./invoice.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3933b1e1\",\"scoped\":false,\"hasInlineConfig\":true}!./invoice.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.invoice_bg {\n    margin  : 15px 0 30px;\n    padding : 20px;\n}\n.table {\n    border       : 1px solid #ccc;\n    table-layout : fixed;\n}\n.table tbody > tr {\n    height : 50px;\n}\n.table-responsive {\n    width : 100%;\n}\ntd,\nth {\n    width     : 40px;\n    word-wrap : break-word;\n}\n.terms_conditions {\n    list-style : initial;\n}\n.table-condensed > thead > tr > th {\n    padding : 15px 8px;\n    width   : 80px;\n}\n.table-condensed > thead > tr > th:first-child {\n    width : 180px;\n}\n.table-responsive > .table > tbody > tr > td,\n.table-responsive > .table > tfoot > tr > td {\n    padding     : 15px 8px;\n    white-space : normal;\n}\n#add_row i, .row_delete i {\n    cursor : pointer;\n}\n@media print {\n.btn-section,\n    .no-print,\n    .content-header,\n    .left-aside,\n    .header,\n    #customtable tr > td:last-child, #customtable tr > th:last-child {\n        display : none;\n}\n.table-responsive {\n        display : inline-table;\n        width   : 100%;\n}\n    /*#invoice-stmt {*/\n        /*width : 100%;*/\n    /*}*/\n.right-side {\n        margin-left : 0;\n}\n}\n#customtable thead tr th{\n    color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ 2185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_card_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "invoice",
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    data: function data() {
        return {
            tr: [{ itemname: "Samsung Galaxy Grand", cost: "$700", qunatity: "1", total: "$700" }, { itemname: " Samsung Galaxy Core", cost: "$1110", qunatity: "1", total: "$1110" }, { itemname: "Screen Protector", cost: "$7", qunatity: "4", total: "$28" }]
        };
    },

    methods: {
        addRow: function addRow() {
            this.tr.push({});
        },
        removeRow: function removeRow(index) {
            this.tr.splice(index, 1);
        }
    },
    mounted: function mounted() {
        "use strict";
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 2186:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content p-l-r-15", attrs: { id: "invoice-stmt" } },
    [
      _c(
        "card",
        { attrs: { title: "<i class='fa fa-fw ti-credit-card'></i> Invoice" } },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-md-6 col-sm-12 col-12 col-lg-6 col-xl-6 invoice_bg"
              },
              [
                _c("h4", [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(2187),
                      alt: "clear"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("h4", [_c("strong", [_vm._v("Billing Details:")])]),
                _vm._v(" "),
                _c("address", [
                  _vm._v(
                    "\n                    Lewis Doe\n                    "
                  ),
                  _c("br"),
                  _vm._v(" 6889 Lunette Street\n                    "),
                  _c("br"),
                  _vm._v(" Melbourne,Austria\n                    "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v("Phone:")]),
                  _vm._v("12-345-678\n                    "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v("Mail Id:")]),
                  _vm._v(" Adelle_Champlin@yahoo.com\n                ")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-md-6 col-sm-12 col-12 col-lg-6 col-xl-6 invoice_bg text-right"
              },
              [
                _c("div", { staticClass: "float-right" }, [
                  _c("h4", [_c("strong", [_vm._v("#678956 / 25 Sep 2016")])]),
                  _vm._v(" "),
                  _c("h4", [_c("strong", [_vm._v("Invoice Info:")])]),
                  _vm._v(" "),
                  _c("address", [
                    _vm._v(
                      "\n                        Tom Percy\n                        "
                    ),
                    _c("br"),
                    _vm._v(" 3946 Penn Street\n                        "),
                    _c("br"),
                    _vm._v(" Ohio,USA\n                        "),
                    _c("br"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Phone:")]),
                    _vm._v(" 32-666-756\n                        "),
                    _c("br"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Mail Id:")]),
                    _vm._v(" Lucy_Maggio16@yahoo.com\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("span")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                {
                  staticClass: "table table-striped table-condensed",
                  attrs: { id: "customtable" }
                },
                [
                  _c("thead", [
                    _c("tr", { staticClass: "bg-primary" }, [
                      _c("th", [_c("strong", [_vm._v("Item Name")])]),
                      _vm._v(" "),
                      _c("th", [_c("strong", [_vm._v("Unit Cost")])]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _c("strong", [
                          _vm._v(
                            "\n                                Quantity\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("th"),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-right" }, [
                        _c("strong", [_vm._v("Total")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          attrs: { id: "add_row" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-fw ti-plus",
                            on: { click: _vm.addRow }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.tr, function(input, index) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "emptyrow",
                            attrs: { contenteditable: "" }
                          },
                          [_vm._v(_vm._s(input.itemname))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "emptyrow",
                            attrs: { contenteditable: "" }
                          },
                          [_vm._v(_vm._s(input.cost))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "emptyrow text-center",
                            attrs: { contenteditable: "" }
                          },
                          [_vm._v(_vm._s(input.qunatity))]
                        ),
                        _vm._v(" "),
                        _c("td", {
                          staticClass: "emptyrow text-right",
                          attrs: { contenteditable: "" }
                        }),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "emptyrow text-right",
                            attrs: { contenteditable: "" }
                          },
                          [
                            _vm._v(
                              _vm._s(input.total) + "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center row_delete" }, [
                          _c("i", {
                            staticClass: "fa fa-fw ti-close",
                            on: {
                              click: function($event) {
                                return _vm.removeRow(index)
                              }
                            }
                          })
                        ])
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("td", { staticClass: "highrow" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "highrow" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "highrow text-center" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "highrow text-right" }, [
                        _c("strong", [
                          _vm._v(
                            "\n                                Sub Total:  \n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "highrow text-right" }, [
                        _c("strong", { attrs: { contenteditable: "" } }, [
                          _vm._v("$1838")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "emptyrow" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "emptyrow" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "emptyrow text-center" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "emptyrow text-right" }, [
                        _c("strong", [
                          _vm._v(
                            "\n                                Vat:  \n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "highrow text-right" }, [
                        _c("strong", { attrs: { contenteditable: "" } }, [
                          _vm._v("$20")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "emptyrow" }, [
                        _c("i", {
                          staticClass: "livicon",
                          attrs: {
                            "data-name": "barcode",
                            "data-size": "60",
                            "data-loop": "true"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "emptyrow" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "emptyrow text-center" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "emptyrow text-right" }, [
                        _c("strong", [
                          _vm._v(
                            "\n                                Total:  \n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "highrow text-right" }, [
                        _c("strong", { attrs: { contenteditable: "" } }, [
                          _vm._v("$1858")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("h4", [_c("Strong", [_vm._v("Terms and conditions:")])], 1),
            _vm._v(" "),
            _c("ul", { staticClass: "terms_conditions" }, [
              _c("li", [
                _vm._v(
                  "An invoice must accompany products returned for warantty"
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Balance due within 10 days of invoice date,1.5% interest/month thereafter."
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "All goods returned for replacement/credit must be saleable condition with original\n                    packaging.\n                "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btn-section" }, [
            _c("div", { staticClass: "col-md-12 col-sm-12 col-12" }, [
              _c("span", { staticClass: "float-right" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-responsive button-alignment btn-success mb-3",
                    attrs: { type: "button", "data-toggle": "button" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw ti-money" }),
                    _vm._v(" Pay Now\n                                        ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-responsive button-alignment btn-primary mb-3",
                    attrs: { type: "button", "data-toggle": "button" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: { color: "#fff" },
                        attrs: { onclick: "javascript:window.print();" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-fw ti-printer" }),
                        _vm._v(
                          "\n                                            Print\n                                        "
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "background-overlay" })
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
    require("vue-hot-reload-api")      .rerender("data-v-3933b1e1", module.exports)
  }
}

/***/ }),

/***/ 2187:
/***/ (function(module, exports) {

module.exports = "/images/logoblue.png?9b09dfcfe9e03feaf0f425b6dcfd3e62";

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2183)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2185)
/* template */
var __vue_template__ = __webpack_require__(2186)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/components/pages/invoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3933b1e1", Component.options)
  } else {
    hotAPI.reload("data-v-3933b1e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(525)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(527)
/* template */
var __vue_template__ = __webpack_require__(528)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/components/pages/card/card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15e33d3a", Component.options)
  } else {
    hotAPI.reload("data-v-15e33d3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(526);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("d6b775a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e33d3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e33d3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
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
    name: 'card',
    data: function data() {
        return {
            show: true,
            isActive: false
        };
    },

    methods: {
        hide: function hide() {
            this.isActive = true;
        }
    },
    mounted: function mounted() {},
    props: {
        title: {
            required: false
        }
    },
    destroy: function destroy() {}
});

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card", class: { dNone: _vm.isActive } }, [
    _c("div", { staticClass: "card-header" }, [
      _c("h3", {
        staticClass: "card-title",
        domProps: { innerHTML: _vm._s(_vm.title) }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "float-right" }, [
        _c("i", {
          staticClass: "fa fa-fw ti-angle-up",
          class: { rotate: _vm.show },
          on: {
            click: function($event) {
              _vm.show = !_vm.show
            }
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-fw ti-close removecard",
          on: { click: _vm.hide }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "card-body"
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15e33d3a", module.exports)
  }
}

/***/ })

});