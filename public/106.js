webpackJsonp([106],{

/***/ 1300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1301);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("50c609a7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ce3af26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_details.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ce3af26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_details.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ecommerce_product_component_vue__ = __webpack_require__(1303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ecommerce_product_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ecommerce_product_component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ecommerce_payment_vue__ = __webpack_require__(1308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ecommerce_payment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ecommerce_payment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ecommerce_product_preview_vue__ = __webpack_require__(1313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ecommerce_product_preview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ecommerce_product_preview_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ecommerce_product_description_vue__ = __webpack_require__(1325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ecommerce_product_description_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ecommerce_product_description_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ecommerce_recent_views_vue__ = __webpack_require__(1330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ecommerce_recent_views_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ecommerce_recent_views_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // ===Component name
    name: "product_details",
    // ===Components used by this component
    components: {
        preview: __WEBPACK_IMPORTED_MODULE_2__ecommerce_product_preview_vue___default.a, product_component: __WEBPACK_IMPORTED_MODULE_0__ecommerce_product_component_vue___default.a, payment: __WEBPACK_IMPORTED_MODULE_1__ecommerce_payment_vue___default.a, product_description: __WEBPACK_IMPORTED_MODULE_3__ecommerce_product_description_vue___default.a, recent_view: __WEBPACK_IMPORTED_MODULE_4__ecommerce_recent_views_vue___default.a
    },
    // ====component Data properties
    data: function data() {
        return {
            value: 75
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {},

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1304)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1306)
/* template */
var __vue_template__ = __webpack_require__(1307)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4865505c"
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
Component.options.__file = "resources/components/pages/ecommerce/product_component.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4865505c", Component.options)
  } else {
    hotAPI.reload("data-v-4865505c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("045ba69c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4865505c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_component.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4865505c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_component.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.product_desc li[data-v-4865505c]{\n    list-style: disc;\n}\n.price_size[data-v-4865505c]{\n    font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1306:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'product_component',
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h6", { staticClass: "text-secondary mt-5" }, [_vm._v("Cloth's")]),
      _vm._v(" "),
      _c("h3", [_c("b", [_vm._v("Men's Polo T-shirt")])]),
      _vm._v(" "),
      _c("span", [
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star-half-o star_icon text-warning" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ml-3" }, [
        _c("a", { attrs: { href: "/#/product_details" } }, [
          _vm._v("Read more reviews")
        ])
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "mt-2" }, [_vm._v("Product details")]),
      _vm._v(" "),
      _c("ul", { staticClass: "product_desc" }, [
        _c("li", [
          _vm._v(
            "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "price_size" }, [
        _vm._v("\n        Pirce :\n        "),
        _c("del", { staticClass: "price text-success" }, [
          _vm._v("\n            $99.00\n        ")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "text-primary ml-3 font-weight-bold" }, [
          _vm._v("$55.00")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4 col-xl-3" }, [
          _c("div", { staticClass: "product_size mt-3" }, [
            _c("div", [_c("h5", [_vm._v("Size ")])]),
            _vm._v(" "),
            _c("div", [
              _c(
                "select",
                {
                  staticClass: "bg-light form-control",
                  attrs: { name: "size", id: "productSize" }
                },
                [
                  _c("option", [_vm._v("S")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("M")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("L")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("xl")])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-5 col-xl-4" }, [
          _c("div", { staticClass: "product_quantity mt-3" }, [
            _c("div", [_c("h5", [_vm._v("Quantity")])]),
            _vm._v(" "),
            _c("div", [
              _c(
                "select",
                {
                  staticClass: "bg-light form-control",
                  attrs: { name: "quantity", id: "productQuantity" }
                },
                [
                  _c("option", [_vm._v("1")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("2")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("3")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("4")])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "offer" }, [
        _c("p", [
          _c("span", { staticClass: "text-success" }, [_vm._v("Offer 1: ")]),
          _vm._v("Avail 30% chshback on Yes bank credit/ debit card's")
        ]),
        _vm._v(" "),
        _c("p", [
          _c("span", { staticClass: "text-success" }, [_vm._v("Offer 2: ")]),
          _vm._v("Avail 20% chshback on purchase of three T-shirts")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4865505c", module.exports)
  }
}

/***/ }),

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1309)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1311)
/* template */
var __vue_template__ = __webpack_require__(1312)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-df42a82a"
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
Component.options.__file = "resources/components/pages/ecommerce/payment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df42a82a", Component.options)
  } else {
    hotAPI.reload("data-v-df42a82a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1310);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("09a7c702", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df42a82a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./payment.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df42a82a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./payment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.textSuccess[data-v-df42a82a]{\n    color: #66cc99;\n}\n", ""]);

// exports


/***/ }),

/***/ 1311:
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
//
//
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
    name: 'payment',
    data: function data() {
        return {
            cod: ''
        };
    }
});

/***/ }),

/***/ 1312:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "check_pin mt-3 mb-3" }, [
          _c("label", { staticClass: "mb-1", attrs: { for: "cod" } }, [
            _vm._v("Check COD")
          ]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.cod,
                expression: "cod"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "cod", placeholder: "Enter pin code" },
            domProps: { value: _vm.cod },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.cod = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _c("span", {
            staticClass: "fa fa-check",
            class: { textSuccess: _vm.cod.length == 6 }
          }),
          _vm._v("\n                Cash on delivery available")
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-info btn-block font-weight-bold mt-3 text-white"
          },
          [_vm._v("Buy now")]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
              }
            }
          },
          [
            _c("b-form-checkbox", [
              _vm._v(
                "\n                    Notify me When price drops\n                "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-warning btn-block text-white mb-5" },
              [_vm._v("Submit")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Payment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary btn-block font-weight-bold" },
      [
        _c("span", { staticClass: "fa fa-cart-arrow-down" }),
        _vm._v(" Add to cart")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-df42a82a", module.exports)
  }
}

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1314)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1316)
/* template */
var __vue_template__ = __webpack_require__(1324)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b6f4c5d"
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
Component.options.__file = "resources/components/pages/ecommerce/product_preview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b6f4c5d", Component.options)
  } else {
    hotAPI.reload("data-v-6b6f4c5d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("a6093664", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b6f4c5d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_preview.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b6f4c5d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_preview.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n#preview[data-v-6b6f4c5d] {\n    position: absolute;\n    left: 85%;\n    top: 5%;\n}\n.slide-preview[data-v-6b6f4c5d] {\n    max-height: 100px;\n}\n.small_img[data-v-6b6f4c5d]{\n    border:none !important;\n    background-color: #fff !important;\n}\n.small_img[data-v-6b6f4c5d]:hover{\n     background-color: #fff !important;\n}\n.right_modal[data-v-6b6f4c5d] {\n    margin-top: 20px;\n}\n@media(max-width: 320px) {\n#preview[data-v-6b6f4c5d] {\n        position: absolute;\n        left: 5%;\n        top: 105%;\n}\n}\n@media (max-width: 768px){\n#preview[data-v-6b6f4c5d]{\n        left:77%;\n}\n}\n@media(max-width:1024px){\n.small_img[data-v-6b6f4c5d]{\n        padding: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_slider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_Magnifier_js__ = __webpack_require__(1317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_Event_js__ = __webpack_require__(1318);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__webpack_require__(1319);

/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "product_preview",

    // ===Components used by this component
    components: {
        vueSlider: __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default.a
    },
    // ====component Data properties
    data: function data() {
        return {
            thumbs: [__webpack_require__(578), __webpack_require__(1321), __webpack_require__(1322), __webpack_require__(1323)],
            mag_data: {
                thumb: '#thumb',
                large: __webpack_require__(578),
                largeWrapper: 'preview',
                mode: 'inside',
                zoom: 3,
                zoomable: false
            }
        };
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        var evt = new __WEBPACK_IMPORTED_MODULE_3__js_Event_js__["a" /* default */](),
            m = new __WEBPACK_IMPORTED_MODULE_2__js_Magnifier_js__["a" /* default */](evt);
        m.attach(this.mag_data);
    },

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {
        openPictureModal: function openPictureModal(ref) {
            this.$refs.pictureModal[ref].show();
        },
        addTag: function addTag(newTag) {
            var tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
            };
            this.object_options.push(tag);
            this.tag_value.push(tag);
        }
    }
});

/***/ }),

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Magnifier.js is a Javascript library enabling magnifying glass effect on an images.
 *
 * Features
 *
 * Zoom in / out functionality using mouse wheel
 * Setting options via Javascript or data attributes
 * Magnified image can be displayed in the lens itself or outside of it in a wrapper
 * Attachment to multiple images with single call
 * Attachment of user defined functions for thumbnail entering, moving and leaving and image zooming events
 * Display loading text while the large image is being loaded, and switch to lens once its loaded
 *
 * Magnifier.js uses Event.js as a cross-browser event handling wrapper, which is available at
 * Github and JSClasses.org:
 *
 * Github - https://github.com/mark-rolich/Event.js
 * JS Classes - http://www.jsclasses.org/package/212-JavaScript-Handle-events-in-a-browser-independent-manner.html
 *
 * Works in Chrome, Firefox, Safari, IE 7, 8, 9 & 10.
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Magnifier = function Magnifier(evt, options) {
    "use strict";

    var gOptions = options || {},
        curThumb = null,
        curData = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        lensW: 0,
        lensH: 0,
        lensBgX: 0,
        lensBgY: 0,
        largeW: 0,
        largeH: 0,
        largeL: 0,
        largeT: 0,
        zoom: 2,
        zoomMin: 1.1,
        zoomMax: 5,
        mode: 'outside',
        largeWrapperId: gOptions.largeWrapper !== undefined ? gOptions.largeWrapper.id || null : null,
        status: 0,
        zoomAttached: false,
        zoomable: gOptions.zoomable !== undefined ? gOptions.zoomable : false,
        onthumbenter: gOptions.onthumbenter !== undefined ? gOptions.onthumbenter : null,
        onthumbmove: gOptions.onthumbmove !== undefined ? gOptions.onthumbmove : null,
        onthumbleave: gOptions.onthumbleave !== undefined ? gOptions.onthumbleave : null,
        onzoom: gOptions.onzoom !== undefined ? gOptions.onzoom : null
    },
        pos = {
        t: 0,
        l: 0,
        x: 0,
        y: 0
    },
        gId = 0,
        status = 0,
        curIdx = '',
        curLens = null,
        curLarge = null,
        gZoom = gOptions.zoom !== undefined ? gOptions.zoom : curData.zoom,
        gZoomMin = gOptions.zoomMin !== undefined ? gOptions.zoomMin : curData.zoomMin,
        gZoomMax = gOptions.zoomMax !== undefined ? gOptions.zoomMax : curData.zoomMax,
        gMode = gOptions.mode || curData.mode,
        data = {},
        inBounds = false,
        isOverThumb = 0,
        getElementsByClass = function getElementsByClass(className) {
        var list = [],
            elements = null,
            len = 0,
            pattern = '',
            i = 0,
            j = 0;

        if (document.getElementsByClassName) {
            list = document.getElementsByClassName(className);
        } else {
            elements = document.getElementsByTagName('*');
            len = elements.length;
            pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");

            for (i, j; i < len; i += 1) {
                if (pattern.test(elements[i].className)) {
                    list[j] = elements[i];
                    j += 1;
                }
            }
        }

        return list;
    },
        $ = function $(selector) {
        var idx = '',
            type = selector.charAt(0),
            result = null;

        if (type === '#' || type === '.') {
            idx = selector.substr(1, selector.length);
        }

        if (idx !== '') {
            switch (type) {
                case '#':
                    result = document.getElementById(idx);
                    break;
                case '.':
                    result = getElementsByClass(idx);
                    break;
            }
        }

        return result;
    },
        createLens = function createLens(thumb, idx) {
        var lens = document.createElement('div');

        lens.id = idx + '-lens';
        lens.className = 'magnifier-loader';

        thumb.parentNode.appendChild(lens);
    },
        updateLensOnZoom = function updateLensOnZoom() {
        curLens.style.left = pos.l + 'px';
        curLens.style.top = pos.t + 'px';
        curLens.style.width = curData.lensW + 'px';
        curLens.style.height = curData.lensH + 'px';
        curLens.style.backgroundPosition = '-' + curData.lensBgX + 'px -' + curData.lensBgY + 'px';

        curLarge.style.left = '-' + curData.largeL + 'px';
        curLarge.style.top = '-' + curData.largeT + 'px';
        curLarge.style.width = curData.largeW + 'px';
        curLarge.style.height = curData.largeH + 'px';
    },
        updateLensOnLoad = function updateLensOnLoad(idx, thumb, large, largeWrapper) {
        var lens = $('#' + idx + '-lens'),
            textWrapper = null;

        if (data[idx].status === 1) {
            textWrapper = document.createElement('div');
            textWrapper.className = 'magnifier-loader-text';
            lens.className = 'magnifier-loader hidden';

            textWrapper.appendChild(document.createTextNode('Loading...'));
            lens.appendChild(textWrapper);
        } else if (data[idx].status === 2) {
            lens.className = 'magnifier-lens hidden';
            lens.removeChild(lens.childNodes[0]);
            lens.style.background = 'url(' + thumb.src + ') no-repeat 0 0 scroll';

            large.id = idx + '-large';
            large.style.width = data[idx].largeW + 'px';
            large.style.height = data[idx].largeH + 'px';
            large.className = 'magnifier-large hidden';

            if (data[idx].mode === 'inside') {
                lens.appendChild(large);
            } else {
                largeWrapper.appendChild(large);
            }
        }

        lens.style.width = data[idx].lensW + 'px';
        lens.style.height = data[idx].lensH + 'px';
    },
        getMousePos = function getMousePos() {
        var xPos = pos.x - curData.x,
            yPos = pos.y - curData.y,
            t = 0,
            l = 0;

        inBounds = xPos < 0 || yPos < 0 || xPos > curData.w || yPos > curData.h ? false : true;

        l = xPos - curData.lensW / 2;
        t = yPos - curData.lensH / 2;

        if (curData.mode !== 'inside') {
            if (xPos < curData.lensW / 2) {
                l = 0;
            }

            if (yPos < curData.lensH / 2) {
                t = 0;
            }

            if (xPos - curData.w + curData.lensW / 2 > 0) {
                l = curData.w - (curData.lensW + 2);
            }

            if (yPos - curData.h + curData.lensH / 2 > 0) {
                t = curData.h - (curData.lensH + 2);
            }
        }

        pos.l = Math.round(l);
        pos.t = Math.round(t);

        curData.lensBgX = pos.l + 1;
        curData.lensBgY = pos.t + 1;

        if (curData.mode === 'inside') {
            curData.largeL = Math.round(xPos * (curData.zoom - curData.lensW / curData.w));
            curData.largeT = Math.round(yPos * (curData.zoom - curData.lensH / curData.h));
        } else {
            curData.largeL = Math.round(curData.lensBgX * curData.zoom * (curData.largeWrapperW / curData.w));
            curData.largeT = Math.round(curData.lensBgY * curData.zoom * (curData.largeWrapperH / curData.h));
        }
    },
        zoomInOut = function zoomInOut(e) {
        var delta = e.wheelDelta > 0 || e.detail < 0 ? 0.1 : -0.1,
            handler = curData.onzoom,
            multiplier = 1,
            w = 0,
            h = 0;

        if (e.preventDefault) {
            e.preventDefault();
        }

        e.returnValue = false;

        curData.zoom = Math.round((curData.zoom + delta) * 10) / 10;

        if (curData.zoom >= curData.zoomMax) {
            curData.zoom = curData.zoomMax;
        } else if (curData.zoom >= curData.zoomMin) {
            curData.lensW = Math.round(curData.w / curData.zoom);
            curData.lensH = Math.round(curData.h / curData.zoom);

            if (curData.mode === 'inside') {
                w = curData.w;
                h = curData.h;
            } else {
                w = curData.largeWrapperW;
                h = curData.largeWrapperH;
                multiplier = curData.largeWrapperW / curData.w;
            }

            curData.largeW = Math.round(curData.zoom * w);
            curData.largeH = Math.round(curData.zoom * h);

            getMousePos();
            updateLensOnZoom();

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y,
                    zoom: Math.round(curData.zoom * multiplier * 10) / 10,
                    w: curData.lensW,
                    h: curData.lensH
                });
            }
        } else {
            curData.zoom = curData.zoomMin;
        }
    },
        onThumbEnter = function onThumbEnter() {
        curData = data[curIdx];
        curLens = $('#' + curIdx + '-lens');

        if (curData.status === 2) {
            curLens.className = 'magnifier-lens';

            if (curData.zoomAttached === false) {
                if (curData.zoomable !== undefined && curData.zoomable === true) {
                    evt.attach('mousewheel', curLens, zoomInOut);

                    if (window.addEventListener) {
                        curLens.addEventListener('DOMMouseScroll', function (e) {
                            zoomInOut(e);
                        });
                    }
                }

                curData.zoomAttached = true;
            }

            curLarge = $('#' + curIdx + '-large');
            curLarge.className = 'magnifier-large';
        } else if (curData.status === 1) {
            curLens.className = 'magnifier-loader';
        }
    },
        onThumbLeave = function onThumbLeave() {
        if (curData.status > 0) {
            var handler = curData.onthumbleave;

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y
                });
            }

            if (curLens.className.indexOf('hidden') === -1) {
                curLens.className += ' hidden';
                curThumb.className = curData.thumbCssClass;

                if (curLarge !== null) {
                    curLarge.className += ' hidden';
                }
            }
        }
    },
        move = function move() {
        if (status !== curData.status) {
            onThumbEnter();
        }

        if (curData.status > 0) {
            curThumb.className = curData.thumbCssClass + ' opaque';

            if (curData.status === 1) {
                curLens.className = 'magnifier-loader';
            } else if (curData.status === 2) {
                curLens.className = 'magnifier-lens';
                curLarge.className = 'magnifier-large';
                curLarge.style.left = '-' + curData.largeL + 'px';
                curLarge.style.top = '-' + curData.largeT + 'px';
            }

            curLens.style.left = pos.l + 'px';
            curLens.style.top = pos.t + 'px';
            curLens.style.backgroundPosition = '-' + curData.lensBgX + 'px -' + curData.lensBgY + 'px';

            var handler = curData.onthumbmove;

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y
                });
            }
        }

        status = curData.status;
    },
        setThumbData = function setThumbData(thumb, thumbData) {
        var thumbBounds = thumb.getBoundingClientRect(),
            w = 0,
            h = 0;

        thumbData.x = thumbBounds.left;
        thumbData.y = thumbBounds.top;
        thumbData.w = Math.round(thumbBounds.right - thumbData.x);
        thumbData.h = Math.round(thumbBounds.bottom - thumbData.y);

        thumbData.lensW = Math.round(thumbData.w / thumbData.zoom);
        thumbData.lensH = Math.round(thumbData.h / thumbData.zoom);

        if (thumbData.mode === 'inside') {
            w = thumbData.w;
            h = thumbData.h;
        } else {
            w = thumbData.largeWrapperW;
            h = thumbData.largeWrapperH;
        }

        thumbData.largeW = Math.round(thumbData.zoom * w);
        thumbData.largeH = Math.round(thumbData.zoom * h);
    };

    this.attach = function (options) {
        if (options.thumb === undefined) {
            throw {
                name: 'Magnifier error',
                message: 'Please set thumbnail',
                toString: function toString() {
                    return this.name + ": " + this.message;
                }
            };
        }

        var thumb = $(options.thumb),
            i = 0;

        if (thumb.length !== undefined) {
            for (i; i < thumb.length; i += 1) {
                options.thumb = thumb[i];
                this.set(options);
            }
        } else {
            options.thumb = thumb;
            this.set(options);
        }
    };

    this.setThumb = function (thumb) {
        curThumb = thumb;
    };

    this.set = function (options) {
        if (data[options.thumb.id] !== undefined) {
            curThumb = options.thumb;
            return false;
        }

        var thumbObj = new Image(),
            largeObj = new Image(),
            thumb = options.thumb,
            idx = thumb.id,
            zoomable = null,
            largeUrl = null,
            largeWrapper = $('#' + options.largeWrapper) || $('#' + thumb.getAttribute('data-large-img-wrapper')) || $('#' + curData.largeWrapperId),
            zoom = options.zoom || thumb.getAttribute('data-zoom') || gZoom,
            zoomMin = options.zoomMin || thumb.getAttribute('data-zoom-min') || gZoomMin,
            zoomMax = options.zoomMax || thumb.getAttribute('data-zoom-max') || gZoomMax,
            mode = options.mode || thumb.getAttribute('data-mode') || gMode,
            onthumbenter = options.onthumbenter !== undefined ? options.onthumbenter : curData.onthumbenter,
            onthumbleave = options.onthumbleave !== undefined ? options.onthumbleave : curData.onthumbleave,
            onthumbmove = options.onthumbmove !== undefined ? options.onthumbmove : curData.onthumbmove,
            onzoom = options.onzoom !== undefined ? options.onzoom : curData.onzoom;

        if (options.large === undefined) {
            largeUrl = options.thumb.getAttribute('data-large-img-url') !== null ? options.thumb.getAttribute('data-large-img-url') : options.thumb.src;
        } else {
            largeUrl = options.large;
        }

        if (largeWrapper === null && mode !== 'inside') {
            throw {
                name: 'Magnifier error',
                message: 'Please specify large image wrapper DOM element',
                toString: function toString() {
                    return this.name + ": " + this.message;
                }
            };
        }

        if (options.zoomable !== undefined) {
            zoomable = options.zoomable;
        } else if (thumb.getAttribute('data-zoomable') !== null) {
            zoomable = thumb.getAttribute('data-zoomable') === 'true';
        } else if (curData.zoomable !== undefined) {
            zoomable = curData.zoomable;
        }

        if (thumb.id === '') {
            idx = thumb.id = 'magnifier-item-' + gId;
            gId += 1;
        }

        createLens(thumb, idx);

        data[idx] = {
            zoom: zoom,
            zoomMin: zoomMin,
            zoomMax: zoomMax,
            mode: mode,
            zoomable: zoomable,
            thumbCssClass: thumb.className,
            zoomAttached: false,
            status: 0,
            largeUrl: largeUrl,
            largeWrapperId: mode === 'outside' ? largeWrapper.id : null,
            largeWrapperW: mode === 'outside' ? largeWrapper.offsetWidth : null,
            largeWrapperH: mode === 'outside' ? largeWrapper.offsetHeight : null,
            onzoom: onzoom,
            onthumbenter: onthumbenter,
            onthumbleave: onthumbleave,
            onthumbmove: onthumbmove
        };

        evt.attach('mouseover', thumb, function (e, src) {
            if (curData.status !== 0) {
                onThumbLeave();
            }

            curIdx = src.id;
            curThumb = src;

            onThumbEnter(src);

            setThumbData(curThumb, curData);

            pos.x = e.clientX;
            pos.y = e.clientY;

            getMousePos();
            move();

            var handler = curData.onthumbenter;

            if (handler !== null) {
                handler({
                    thumb: curThumb,
                    lens: curLens,
                    large: curLarge,
                    x: pos.x,
                    y: pos.y
                });
            }
        }, false);

        evt.attach('mousemove', thumb, function (e, src) {
            isOverThumb = 1;
        });

        evt.attach('load', thumbObj, function () {
            data[idx].status = 1;

            setThumbData(thumb, data[idx]);
            updateLensOnLoad(idx);

            evt.attach('load', largeObj, function () {
                data[idx].status = 2;
                updateLensOnLoad(idx, thumb, largeObj, largeWrapper);
            });

            largeObj.src = data[idx].largeUrl;
        });

        thumbObj.src = thumb.src;
    };

    evt.attach('mousemove', document, function (e) {
        pos.x = e.clientX;
        pos.y = e.clientY;

        getMousePos();

        if (inBounds === true) {
            move();
        } else {
            if (isOverThumb !== 0) {
                onThumbLeave();
            }

            isOverThumb = 0;
        }
    }, false);

    evt.attach('scroll', window, function () {
        if (curThumb !== null) {
            setThumbData(curThumb, curData);
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Magnifier);

/***/ }),

/***/ 1318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Unifies event handling across browsers
 *
 * - Allows registering and unregistering of event handlers
 * - Injects event object and involved DOM element to listener
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Event = function Event() {
    "use strict";

    this.attach = function (evtName, element, listener, capture) {
        var evt = '',
            useCapture = capture === undefined ? true : capture,
            handler = null;

        if (window.addEventListener === undefined) {
            evt = 'on' + evtName;
            handler = function handler(evt, listener) {
                element.attachEvent(evt, listener);
                return listener;
            };
        } else {
            evt = evtName;
            handler = function handler(evt, listener, useCapture) {
                element.addEventListener(evt, listener, useCapture);
                return listener;
            };
        }

        return handler.apply(element, [evt, function (ev) {
            var e = ev || event,
                src = e.srcElement || e.target;

            listener(e, src);
        }, useCapture]);
    };

    this.detach = function (evtName, element, listener, capture) {
        var evt = '',
            useCapture = capture === undefined ? true : capture;

        if (window.removeEventListener === undefined) {
            evt = 'on' + evtName;
            element.detachEvent(evt, listener);
        } else {
            evt = evtName;
            element.removeEventListener(evt, listener, useCapture);
        }
    };

    this.stop = function (evt) {
        evt.cancelBubble = true;

        if (evt.stopPropagation) {
            evt.stopPropagation();
        }
    };

    this.prevent = function (evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Event);

/***/ }),

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1320);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(43)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./magnifier.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./magnifier.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".magnifier-thumb-wrapper {\n    position: relative;\n    display: block;\n    top: 0;\n    left: 0\n}\n\n.magnifier-lens {\n    position: absolute;\n    border: solid 1px #ccc;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    overflow: hidden\n}\n\n.magnifier-loader {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: solid 1px #ccc;\n    color: #fff;\n    text-align: center;\n    background: transparent;\n    background: rgba(50, 50, 50, 0.5);\n    z-index: 1000;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F323232,endColorstr=#7F323232)\";\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F323232,endColorstr=#7F323232)\n}\n\n.magnifier-loader-text {\n    font: 13px Arial;\n    margin-top: 10px\n}\n\n.magnifier-large {\n    position: absolute;\n    z-index: 100\n}\n\n.magnifier-preview {\n    padding: 0;\n    width: 100%;\n    height: 150px;\n    position: relative;\n    overflow: hidden\n}\n\n.magnifier-preview img {\n    position: absolute;\n    top: 0;\n    left: 0\n}\n\n.opaque {\n    opacity: .5;\n    filter: alpha(opacity=50);\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\n}\n\n.hidden {\n    display: none\n}\n", ""]);

// exports


/***/ }),

/***/ 1321:
/***/ (function(module, exports) {

module.exports = "/images/product_4.png?b5daa9f180ed178a73ffc3ca14bbc807";

/***/ }),

/***/ 1322:
/***/ (function(module, exports) {

module.exports = "/images/product_2.png?a987ca4d68b2e8a2cc444ff2585971a9";

/***/ }),

/***/ 1323:
/***/ (function(module, exports) {

module.exports = "/images/product_3.png?b5daa9f180ed178a73ffc3ca14bbc807";

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12  mt-5" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "mx-auto" }, [
              _c(
                "a",
                {
                  staticClass: "magnifier-thumb-wrapper",
                  attrs: { href: "#/product_details" }
                },
                [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      id: "thumb",
                      src: __webpack_require__(578),
                      alt: "product"
                    }
                  })
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-12 col-md-12 text-center right_modal" },
          [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.thumbs, function(image, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-3 col-md-3 col-12" },
                  [
                    _c(
                      "b-btn",
                      {
                        staticClass: "mb-3 small_img",
                        on: {
                          click: function($event) {
                            return _vm.openPictureModal(index)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid slide-preview",
                          attrs: { src: image, alt: "phone image" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "pictureModal",
                        refInFor: true,
                        attrs: { title: "Modal" }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: image,
                            alt: "small phone image missing"
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b6f4c5d", module.exports)
  }
}

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1326)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1328)
/* template */
var __vue_template__ = __webpack_require__(1329)
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
Component.options.__file = "resources/components/pages/ecommerce/product_description.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ffd27de", Component.options)
  } else {
    hotAPI.reload("data-v-6ffd27de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("c2c005c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ffd27de\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_description.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ffd27de\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_description.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n@media(min-width:1440px){\n.product_desc_tabs .nav-link    {\n        padding: 0.6rem 1rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1328:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'product_descriptoin'
});

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row mt-4" }, [
      _c(
        "div",
        { staticClass: "col-12 mt-4" },
        [
          _c(
            "b-tabs",
            { staticClass: "product_desc_tabs" },
            [
              _c(
                "b-tab",
                { attrs: { title: "Product Description", active: "" } },
                [
                  _c("p", { staticClass: "mt-4" }, [
                    _vm._v(
                      "\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged\n                    "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Additional Informatoin" } }, [
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Material:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Cutton\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Sleve type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Half Sleeve\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Neck type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Polo\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Fit type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Regular type\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Color:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Black , Brown , white\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Sleve type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Half Sleeve\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Customer Reviews" } }, [
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-sm-2 col-xl-1 mb-3" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: __webpack_require__(564),
                        alt: "cust1"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10 col-xl-11" }, [
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("Charis Perter")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-secondary " }, [
                      _vm._v("20"),
                      _c("sup", [_vm._v("th")]),
                      _vm._v(" Jan 2018")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-2 mb-2" }, [
                      _vm._v("\n                                Rating:"),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star-half-o star_icon text-warning"
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                            "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-sm-2 col-xl-1 mb-3" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: __webpack_require__(567),
                        alt: "cust2"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10 col-xl-11" }, [
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("Lucis flowers")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-secondary " }, [
                      _vm._v("23"),
                      _c("sup", [_vm._v("th")]),
                      _vm._v(" Jan 2018")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-2 mb-2" }, [
                      _vm._v("\n                                Rating:"),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                            "
                      )
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr")
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-5" }, [
      _c("h4", { staticClass: "font-weight-bold text-primary" }, [
        _vm._v("Product Rating")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-2" }, [
          _c("div", { staticClass: "d-inline-block text-center pt-3" }, [
            _c("h2", [
              _vm._v("4.8 "),
              _c("span", { staticClass: "fa fa-star" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("2018 ratings")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: " ml-3" }, [
            _vm._v("\n                        5 "),
            _c("span", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-1" }, [
              _c("div", {
                staticClass: "progress-bar d-inline-block",
                staticStyle: { width: "89%" },
                attrs: { role: "progressbar" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " ml-3" }, [
            _vm._v("\n                        4 "),
            _c("span", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-1" }, [
              _c("div", {
                staticClass: "progress-bar d-inline-block",
                staticStyle: { width: "5%" },
                attrs: { role: "progressbar" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " ml-3" }, [
            _vm._v("\n                        3 "),
            _c("span", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-1" }, [
              _c("div", {
                staticClass: "progress-bar d-inline-block",
                staticStyle: { width: "2%" },
                attrs: { role: "progressbar" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-secondary mt-3 ml-3" }, [
            _vm._v("Rate us here")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ffd27de", module.exports)
  }
}

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1331)
/* template */
var __vue_template__ = __webpack_require__(1332)
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
Component.options.__file = "resources/components/pages/ecommerce/recent_views.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bcb74216", Component.options)
  } else {
    hotAPI.reload("data-v-bcb74216", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1331:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'recent_view'
});

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h5", { staticClass: "font-weight-bold text-primary" }, [
      _vm._v("Your recent views")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(620),
              alt: "item1"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("T-shirt")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$88")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-secondary" }, [
            _vm._v("sale ends at 6pm")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(696),
              alt: "item2"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("Mobile")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$450")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-secondary" }, [
            _vm._v("2 offers avilable")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(697),
              alt: "item3"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("Camera")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$1000")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-secondary" }, [
            _vm._v("2 offers avilable")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(698),
              alt: "item4"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("Head Phones")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$88")]),
          _vm._v(" "),
          _c("del", { staticClass: "text-secondary" }, [
            _vm._v("\n                        $99\n                    ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(620),
              alt: "item5"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("T-shirt")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$88")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-secondary" }, [
            _vm._v("2 offers avilable")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(620),
              alt: "item6"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("T-shirt")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$70")]),
          _vm._v(" "),
          _c("del", { staticClass: "text-secondary" }, [_vm._v("$88")])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bcb74216", module.exports)
  }
}

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c("b-card", [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-12 col-lg-4" },
                  [_c("preview")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-7 col-lg-5" },
                  [_c("product_component")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-5 col-lg-3" },
                  [_c("payment")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  [_c("product_description")],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [_c("recent_view")], 1)
              ])
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ce3af26", module.exports)
  }
}

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1300)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1302)
/* template */
var __vue_template__ = __webpack_require__(1333)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ce3af26"
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
Component.options.__file = "resources/components/pages/product_details.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ce3af26", Component.options)
  } else {
    hotAPI.reload("data-v-2ce3af26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "/images/avatar1.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "/images/product.png?921f475804236cccb1e348d8ea00ae2a";

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "/images/product7.png?f5f7429df68ef8bee2043875c2bb4586";

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("vue-slider-component",[],e):"object"==typeof exports?exports["vue-slider-component"]=e():t["vue-slider-component"]=e()}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){i(7);var s=i(5)(i(1),i(6),null,null);t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t="undefined"!=typeof window?window.devicePixelRatio||1:1;return function(e){return Math.round(e*t)/t}}();e.default={name:"VueSliderComponent",props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},dotWidth:{type:Number,required:!1},dotHeight:{type:Number,required:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:[Boolean,Array],default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1},value:{type:[String,Number,Array,Object],default:0},piecewiseLabel:{type:Boolean,default:!1},debug:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},minRange:{type:Number},maxRange:{type:Number},processDragable:{type:Boolean,default:!1},useKeyboard:{type:Boolean,default:!1},actionsKeyboard:{type:Array,default:function(){return[function(t){return t-1},function(t){return t+1}]}},tooltipMerge:{type:Boolean,default:!0},startAnimation:{type:Boolean,default:!1},enableCross:{type:Boolean,default:!0},sliderStyle:[Array,Object,Function],focusStyle:[Array,Object,Function],tooltipDir:[Array,String],formatter:[String,Function],mergeFormatter:[String,Function],piecewiseStyle:Object,disabledStyle:Object,piecewiseActiveStyle:Object,processStyle:Object,bgStyle:Object,tooltipStyle:[Array,Object,Function],disabledDotStyle:[Array,Object,Function],labelStyle:Object,labelActiveStyle:Object},data:function(){return{flag:!1,dragFlag:!1,crossFlag:!1,keydownFlag:null,focusFlag:!1,processFlag:!1,processSign:null,size:0,fixedValue:0,focusSlider:0,currentValue:0,currentSlider:0,isComponentExists:!0,isMounted:!1}},computed:{dotWidthVal:function(){return"number"==typeof this.dotWidth?this.dotWidth:this.dotSize},dotHeightVal:function(){return"number"==typeof this.dotHeight?this.dotHeight:this.dotSize},flowDirection:function(){return"vue-slider-"+this.direction+(this.reverse?"-reverse":"")},tooltipMergedPosition:function(){if(!this.isMounted)return{};var t=this.tooltipDirection[0];if(this.$refs.dot0){if("vertical"===this.direction){var e={};return e[t]="-"+(this.dotHeightVal/2-this.width/2+9)+"px",e}var i={};return i[t]="-"+(this.dotWidthVal/2-this.height/2+9)+"px",i.left="50%",i}},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},tooltipClass:function(){return["vue-slider-tooltip-"+this.tooltipDirection,"vue-slider-tooltip"]},disabledArray:function(){return Array.isArray(this.disabled)?this.disabled:[this.disabled,this.disabled]},boolDisabled:function(){return this.disabledArray.every(function(t){return!0===t})},isDisabled:function(){return"none"===this.eventType||this.boolDisabled},disabledClass:function(){return this.boolDisabled?"vue-slider-disabled":""},stateClass:function(){return{"vue-slider-state-process-drag":this.processFlag,"vue-slider-state-drag":this.flag&&!this.processFlag&&!this.keydownFlag,"vue-slider-state-focus":this.focusFlag}},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},currentIndex:function(){return this.isRange?this.data?this.currentValue:[this.getIndexByValue(this.currentValue[0]),this.getIndexByValue(this.currentValue[1])]:this.getIndexByValue(this.currentValue)},indexRange:function(){return this.isRange?this.currentIndex:[0,this.currentIndex]},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},isFixed:function(){return this.fixed||this.minRange},limit:function(){return this.isRange?this.isFixed?[[0,(this.total-this.fixedValue)*this.gap],[this.fixedValue*this.gap,this.size]]:[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?this.isFixed?[[this.minimum,this.maximum-this.fixedValue*(this.spacing*this.multiple)/this.multiple],[this.minimum+this.fixedValue*(this.spacing*this.multiple)/this.multiple,this.maximum]]:[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},idleSlider:function(){return 0===this.currentSlider?1:0},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:"function"==typeof this.sliderStyle?this.sliderStyle(this.val,this.currentIndex):this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},focusStyles:function(){return Array.isArray(this.focusStyle)?this.isRange?this.focusStyle:this.focusStyle[1]:"function"==typeof this.focusStyle?this.focusStyle(this.val,this.currentIndex):this.isRange?[this.focusStyle,this.focusStyle]:this.focusStyle},disabledDotStyles:function(){var t=this.disabledDotStyle;if(Array.isArray(t))return t;if("function"==typeof t){var e=t(this.val,this.currentIndex);return Array.isArray(e)?e:[e,e]}return t?[t,t]:[{backgroundColor:"#ccc"},{backgroundColor:"#ccc"}]},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:"function"==typeof this.tooltipStyle?this.tooltipStyle(this.val,this.currentIndex):this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",left:-(this.dotWidthVal-this.width)/2+"px"}:{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",top:-(this.dotHeightVal-this.height)/2+"px"}},piecewiseDotStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotWrap:function(){if(!this.piecewise&&!this.piecewiseLabel)return!1;for(var t=[],e=0;e<=this.total;e++){var i="vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:0}:{left:this.gap*e-this.height/2+"px",top:0},s=this.reverse?this.total-e:e,r=this.data?this.data[s]:this.spacing*s+this.min;t.push({style:i,label:this.formatter?this.formatting(r):r,inRange:s>=this.indexRange[0]&&s<=this.indexRange[1]})}return t}},watch:{value:function(t){this.flag||this.setValue(t,!0)},max:function(t){if(t<this.min)return this.printError("The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh()})},fixed:function(){this.computedFixedValue()},minRange:function(){this.computedFixedValue()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousedown",this.blurSlider),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),document.addEventListener("keydown",this.handleKeydown),document.addEventListener("keyup",this.handleKeyup),window.addEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.addEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.addEventListener("transitionend",this.handleOverlapTooltip))},unbindEvents:function(){document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousedown",this.blurSlider),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd),document.removeEventListener("keydown",this.handleKeydown),document.removeEventListener("keyup",this.handleKeyup),window.removeEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.removeEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.removeEventListener("transitionend",this.handleOverlapTooltip))},handleKeydown:function(t){if(!this.useKeyboard||!this.focusFlag)return!1;switch(t.keyCode){case 37:case 40:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[0]);break;case 38:case 39:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[1])}},handleKeyup:function(){this.keydownFlag&&(this.keydownFlag=!1,this.flag=!1)},changeFocusSlider:function(t){var e=this;if(this.isRange){var i=this.currentIndex.map(function(i,s){if(s===e.focusSlider||e.fixed){var r=t(i),o=e.fixed?e.valueLimit[s]:[0,e.total];if(r<=o[1]&&r>=o[0])return r}return i});i[0]>i[1]&&(this.focusSlider=0===this.focusSlider?1:0,i=i.reverse()),this.setIndex(i)}else this.setIndex(t(this.currentIndex))},blurSlider:function(t){var e=this.isRange?this.$refs["dot"+this.focusSlider]:this.$refs.dot;if(!e||e===t.target||e.contains(t.target))return!1;this.focusFlag=!1},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},mergeFormatting:function(t,e){return"string"==typeof this.mergeFormatter?this.mergeFormatter.replace(/\{(value1|value2)\}/g,function(i,s){return"value1"===s?t:e}):this.mergeFormatter(t,e)},getPos:function(t){return this.realTime&&this.getStaticData(),"vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},processClick:function(t){this.fixed&&t.stopPropagation()},wrapClick:function(t){var e=this;if(this.isDisabled||!this.clickable||this.processFlag||this.dragFlag)return!1;var i=this.getPos(t);if(this.isRange)if(this.disabledArray.every(function(t){return!1===t}))this.currentSlider=i>(this.position[1]-this.position[0])/2+this.position[0]?1:0;else if(this.disabledArray[0]){if(i<this.position[0])return!1;this.currentSlider=1}else if(this.disabledArray[1]){if(i>this.position[1])return!1;this.currentSlider=0}if(this.disabledArray[this.currentSlider])return!1;if(this.setValueOnPos(i),this.isRange&&this.tooltipMerge){var s=setInterval(function(){return e.handleOverlapTooltip()},16.7);setTimeout(function(){return window.clearInterval(s)},1e3*this.speed)}},moveStart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2];if(this.disabledArray[e])return!1;if(this.stopPropagation&&t.stopPropagation(),this.isRange){if(this.currentSlider=e,i){if(!this.processDragable)return!1;this.processFlag=!0,this.processSign={pos:this.position,start:this.getPos(t.targetTouches&&t.targetTouches[0]?t.targetTouches[0]:t)}}this.enableCross||this.val[0]!==this.val[1]||(this.crossFlag=!0)}!i&&this.useKeyboard&&(this.focusFlag=!0,this.focusSlider=e),this.flag=!0,this.$emit("drag-start",this)},moving:function(t){if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.processFlag?(this.currentSlider=0,this.setValueOnPos(this.processSign.pos[0]+this.getPos(t)-this.processSign.start,!0),this.currentSlider=1,this.setValueOnPos(this.processSign.pos[1]+this.getPos(t)-this.processSign.start,!0)):(this.dragFlag=!0,this.setValueOnPos(this.getPos(t),!0)),this.isRange&&this.tooltipMerge&&this.handleOverlapTooltip()},moveEnd:function(t){var e=this;if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,window.setTimeout(function(){e.crossFlag=!1,e.dragFlag=!1,e.processFlag=!1},0),this.setPosition()},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit,r=Math.round(t/this.gap);if(t>=i[0]&&t<=i[1]){var o=this.getValueByIndex(r);this.setTransform(t),this.setCurrentValue(o,e),this.isRange&&(this.fixed||this.isLessRange(t,r))&&(this.setTransform(t+this.fixedValue*this.gap*(0===this.currentSlider?1:-1),!0),this.setCurrentValue((o*this.multiple+this.fixedValue*this.spacing*this.multiple*(0===this.currentSlider?1:-1))/this.multiple,e,!0))}else{var n=t<i[0]?0:1,l=0===n?1:0;this.setTransform(i[n]),this.setCurrentValue(s[n]),this.isRange&&(this.fixed||this.isLessRange(t,r))?(this.setTransform(this.limit[this.idleSlider][n],!0),this.setCurrentValue(this.valueLimit[this.idleSlider][n],e,!0)):!this.isRange||!this.enableCross&&!this.crossFlag||this.isFixed||this.disabledArray[n]||this.currentSlider!==l||(this.focusSlider=n,this.currentSlider=n)}this.crossFlag=!1},isLessRange:function(t,e){if(!this.isRange||!this.minRange&&!this.maxRange)return!1;var i=0===this.currentSlider?this.currentIndex[1]-e:e-this.currentIndex[0];return this.minRange&&i<=this.minRange?(this.fixedValue=this.minRange,!0):this.maxRange&&i>=this.maxRange?(this.fixedValue=this.maxRange,!0):(this.computedFixedValue(),!1)},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e,i){var s=i?this.idleSlider:this.currentSlider;if(t<this.minimum||t>this.maximum)return!1;this.isRange?this.isDiff(this.currentValue[s],t)&&(this.currentValue.splice(s,1,t),this.lazy&&this.flag||this.syncValue()):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},getValueByIndex:function(t){return(this.spacing*this.multiple*t+this.minimum*this.multiple)/this.multiple},getIndexByValue:function(t){return Math.round((t-this.minimum)*this.multiple)/(this.spacing*this.multiple)},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.getValueByIndex(t[0]),this.getValueByIndex(t[1])],this.setValue(e)}else t=this.getValueByIndex(t),this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var r=this.limitValue(t);this.val=this.isRange?r.concat():r,this.computedFixedValue(),this.syncValue(e)}this.$nextTick(function(){return s.setPosition(i)})},computedFixedValue:function(){if(!this.isFixed)return this.fixedValue=0,!1;this.fixedValue=Math.max(this.fixed?this.currentIndex[1]-this.currentIndex[0]:0,this.minRange||0)},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t),this.isRange?(this.setTransform(this.position[0],1===this.currentSlider),this.setTransform(this.position[1],0===this.currentSlider)):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t,e){var i=e?this.idleSlider:this.currentSlider,r=s(("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1)),o="vertical"===this.direction?"translateY("+r+"px)":"translateX("+r+"px)",n=this.fixed?this.fixedValue*this.gap+"px":(0===i?this.position[1]-t:t-this.position[0])+"px",l=this.fixed?(0===i?t:t-this.fixedValue*this.gap)+"px":(0===i?t:this.position[0])+"px";this.isRange?(this.slider[i].style.transform=o,this.slider[i].style.WebkitTransform=o,this.slider[i].style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=n,this.$refs.process.style[this.reverse?"top":"bottom"]=l):(this.$refs.process.style.width=n,this.$refs.process.style[this.reverse?"right":"left"]=l)):(this.slider.style.transform=o,this.slider.style.WebkitTransform=o,this.slider.style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=t+"px",this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px",this.$refs.process.style[this.reverse?"right":"left"]=0))},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i=function(i){return i<e.min?(e.printError("The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i};return this.isRange?t.map(function(t){return i(t)}):i(t)},syncValue:function(t){var e=this.isRange?this.val.concat():this.val;this.$emit("input",e),this.keydownFlag&&this.$emit("on-keypress",e),t||this.$emit("callback",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.computedFixedValue(),this.setPosition())},printError:function(t){this.debug&&console.error("[VueSlider error]: "+t)},handleOverlapTooltip:function(){var t=this.tooltipDirection[0]===this.tooltipDirection[1];if(this.isRange&&t){var e=this.reverse?this.$refs.tooltip1:this.$refs.tooltip0,i=this.reverse?this.$refs.tooltip0:this.$refs.tooltip1,s=e.getBoundingClientRect(),r=i.getBoundingClientRect(),o=s.right,n=r.left,l=s.top,a=r.top+r.height,d="horizontal"===this.direction&&o>n,u="vertical"===this.direction&&a>l;d||u?this.handleDisplayMergedTooltip(!0):this.handleDisplayMergedTooltip(!1)}},handleDisplayMergedTooltip:function(t){var e=this.$refs.tooltip0,i=this.$refs.tooltip1,s=this.$refs.process.getElementsByClassName("vue-merged-tooltip")[0];t?(e.style.visibility="hidden",i.style.visibility="hidden",s.style.visibility="visible"):(e.style.visibility="visible",i.style.visibility="visible",s.style.visibility="hidden")}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),!0,t.startAnimation?t.speed:0),t.bindEvents(),t.isRange&&t.tooltipMerge&&!t.startAnimation&&t.$nextTick(function(){t.handleOverlapTooltip()}))}),this.isMounted=!0},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}}},function(t,e,i){"use strict";var s=i(0);t.exports=s},function(t,e,i){e=t.exports=i(4)(),e.push([t.i,'.vue-slider-component{position:relative;box-sizing:border-box;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none}.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-component.vue-slider-has-label{margin-bottom:15px}.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed}.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-component .vue-slider:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1}.vue-slider-component .vue-slider-process.vue-slider-process-dragable{cursor:pointer;z-index:3}.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0}.vue-slider-component .vue-slider-dot{position:absolute;transition:all 0s;will-change:transform;cursor:pointer;z-index:5}.vue-slider-component .vue-slider-dot .vue-slider-dot-handle{width:100%;height:100%;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32)}.vue-slider-component .vue-slider-dot.vue-slider-dot-focus .vue-slider-dot-handle{box-shadow:0 0 2px 1px #3498db}.vue-slider-component .vue-slider-dot.vue-slider-dot-dragging{z-index:5}.vue-slider-component .vue-slider-dot.vue-slider-dot-disabled{z-index:4}.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0}.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0}.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9}.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;transform:translate(-50%,-100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;transform:translate(-50%,100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;transform:translate(-100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;transform:translate(100%,-50%)}.vue-slider-component .vue-slider-tooltip-top .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-merged-tooltip{display:block;visibility:hidden}.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-left .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;transform:translateY(-50%)}.vue-slider-component .vue-slider-tooltip-right .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;transform:translateY(-50%)}.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important}.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px}.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;transform:translate(-50%,8px);visibility:visible}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;transform:translate(8px,-50%);visibility:visible}.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<e.length;r++){var n=e[r];"number"==typeof n[0]&&s[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(t,e){t.exports=function(t,e,i,s){var r,o=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(r=t,o=t.default);var l="function"==typeof o?o.options:o;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s){var a=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var e=s[t];a[t]=function(){return e}}),l.computed=a}return{esModule:r,exports:o,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrap",class:["vue-slider-component",t.flowDirection,t.disabledClass,t.stateClass,{"vue-slider-has-label":t.piecewiseLabel}],style:[t.wrapStyles,t.boolDisabled?t.disabledStyle:null],on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slider",style:[t.elemStyles,t.bgStyle],attrs:{"aria-hidden":"true"}},[t.isRange?[i("div",{key:"dot0",ref:"dot0",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider,"vue-slider-dot-disabled":!t.boolDisabled&&t.disabledArray[0]}],style:t.dotStyles,on:{mousedown:function(e){t.moveStart(e,0)},touchstart:function(e){t.moveStart(e,0)}}},[t._t("dot",[i("div",{staticClass:"vue-slider-dot-handle",style:[!t.boolDisabled&&t.disabledArray[0]?t.disabledDotStyles[0]:null,t.sliderStyles[0],t.focusFlag&&0===t.focusSlider?t.focusStyles[0]:null]})],{value:t.val[0],index:0,disabled:t.disabledArray[0]}),t._v(" "),i("div",{ref:"tooltip0",class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[0]},[t._v(t._s(t.formatter?t.formatting(t.val[0]):t.val[0]))])],{value:t.val[0],index:0,disabled:!t.boolDisabled&&t.disabledArray[0]})],2)],2),t._v(" "),i("div",{key:"dot1",ref:"dot1",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&1===t.focusSlider,"vue-slider-dot-dragging":t.flag&&1===t.currentSlider,"vue-slider-dot-disabled":!t.boolDisabled&&t.disabledArray[1]}],style:t.dotStyles,on:{mousedown:function(e){t.moveStart(e,1)},touchstart:function(e){t.moveStart(e,1)}}},[t._t("dot",[i("div",{staticClass:"vue-slider-dot-handle",style:[!t.boolDisabled&&t.disabledArray[1]?t.disabledDotStyles[1]:null,t.sliderStyles[1],t.focusFlag&&1===t.focusSlider?t.focusStyles[1]:null]})],{value:t.val[1],index:1,disabled:t.disabledArray[1]}),t._v(" "),i("div",{ref:"tooltip1",class:["vue-slider-tooltip-"+t.tooltipDirection[1],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[1]},[t._v(t._s(t.formatter?t.formatting(t.val[1]):t.val[1]))])],{value:t.val[1],index:1,disabled:!t.boolDisabled&&t.disabledArray[1]})],2)],2)]:[i("div",{key:"dot",ref:"dot",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider}],style:t.dotStyles,on:{mousedown:t.moveStart,touchstart:t.moveStart}},[t._t("dot",[i("div",{staticClass:"vue-slider-dot-handle",style:[t.sliderStyles,t.focusFlag&&0===t.focusSlider?t.focusStyles:null]})],{value:t.val,disabled:t.boolDisabled}),t._v(" "),i("div",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v(t._s(t.formatter?t.formatting(t.val):t.val))])],{value:t.val})],2)],2)],t._v(" "),i("ul",{staticClass:"vue-slider-piecewise"},t._l(t.piecewiseDotWrap,function(e,s){return i("li",{key:s,staticClass:"vue-slider-piecewise-item",style:[t.piecewiseDotStyle,e.style]},[t._t("piecewise",[t.piecewise?i("span",{staticClass:"vue-slider-piecewise-dot",style:[t.piecewiseStyle,e.inRange?t.piecewiseActiveStyle:null]}):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange}),t._v(" "),t._t("label",[t.piecewiseLabel?i("span",{staticClass:"vue-slider-piecewise-label",style:[t.labelStyle,e.inRange?t.labelActiveStyle:null]},[t._v("\n            "+t._s(e.label)+"\n          ")]):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange})],2)})),t._v(" "),i("div",{ref:"process",class:["vue-slider-process",{"vue-slider-process-dragable":t.isRange&&t.processDragable}],style:t.processStyle,on:{click:t.processClick,mousedown:function(e){t.moveStart(e,0,!0)},touchstart:function(e){t.moveStart(e,0,!0)}}},[i("div",{ref:"mergedTooltip",class:["vue-merged-tooltip","vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"],style:t.tooltipMergedPosition},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v("\n            "+t._s(t.mergeFormatter?t.mergeFormatting(t.val[0],t.val[1]):t.formatter?t.val[0]===t.val[1]?t.formatting(t.val[0]):t.formatting(t.val[0])+" - "+t.formatting(t.val[1]):t.val[0]===t.val[1]?t.val[0]:t.val[0]+" - "+t.val[1])+"\n          ")])],{value:t.val,merge:!0})],2)]),t._v(" "),t.isRange||t.data?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.val},on:{__r:function(e){t.val=e.target.value}}})],2)])},staticRenderFns:[]}},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(8)("743d98f5",s,!0)},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=u[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(o(i.parts[r]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{for(var n=[],r=0;r<i.parts.length;r++)n.push(o(i.parts[r]));u[i.id]={id:i.id,refs:1,parts:n}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function o(t){var e,i,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(f)return v;s.parentNode.removeChild(s)}if(m){var o=p++;s=c||(c=r()),e=n.bind(null,s,o,!1),i=n.bind(null,s,o,!0)}else s=r(),e=l.bind(null,s),i=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else i()}}function n(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function l(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(9),u={},h=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,f=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var r=d(t,e);return s(r),function(e){for(var i=[],o=0;o<r.length;o++){var n=r[o],l=u[n.id];l.refs--,i.push(l)}e?(r=d(t,e),s(r)):r=[];for(var o=0;o<i.length;o++){var l=i[o];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete u[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],s={},r=0;r<e.length;r++){var o=e[r],n=o[0],l=o[1],a=o[2],d=o[3],u={id:t+":"+r,css:l,media:a,sourceMap:d};s[n]?s[n].parts.push(u):i.push(s[n]={id:n,parts:[u]})}return i}}])});

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "/images/product6.png?006ad5deb285a23818d1c8fff0c28bf3";

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "/images/product5.png?e3c6ea40ba93e4b21feb50271e63d60b";

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "/images/product8.png?2b7f1e8d1e4168dcd54c27e15a633aac";

/***/ })

});