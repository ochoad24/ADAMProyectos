webpackJsonp([53],{

/***/ 1259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("4951d9e7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25ee2c36\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_gallery.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-25ee2c36\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_gallery.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.view-icons{\n    font-size: medium;\n}\n.product_box{\n    width:23.7%\n}\n.sale-tag{\n    margin-top: 10px;\n    position: absolute;\n}\n.product_description{\n    display: none;\n}\n.sale-tag:after{\n    content: ' ';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 30px;\n    right: auto;\n    top: 0px;\n    bottom: auto;\n    border: 10px solid;\n    border-color: #ff6666  transparent transparent transparent;\n}\n.sale-tag:before{\n    content: ' ';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 30px;\n    right: auto;\n    top: -1px;\n    bottom: auto;\n    border: 10px solid;\n    border-color:  transparent transparent  #ff6666 transparent;\n}\n.fullwidth{\n    width: 100%;\n}\n.fullwidth .product_description{\n    display: block;\n}\n@media(min-width: 768px) and (max-width:1024px){\n.product_box{\n        width:31.5%;\n}\n.fullwidth {\n        width:100%;\n}\n}\n@media(min-width:320px) and (max-width:425px) {\n.product_box{\n        width: 96%;\n}\n.fullwidth .card-body{\n        padding: 2.5rem;\n}\n}\n@media(min-width: 426px) and (max-width:767px){\n.product_box{\n        width:46.5%;\n}\n}\n.boxed .product_box{\n    width:23.5%\n}\n@media(min-width:768px) and (min-width:768px){\n.boxed .product_box{\n        width:30%\n}\n}\n@media(max-width:425px){\n.boxed .product_box{\n        width:100%\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1261:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'product_gallery',
    data: function data() {
        return {
            search: '',
            isActive: '',
            list: [{
                src: __webpack_require__(573),
                price: "$800",
                mrp: "$1000",
                name: "US-Polo T-shirt",
                sale: "20%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(642),
                price: "$450.45",
                mrp: "$585",
                name: "US-Polo Red Shirt",
                sale: "23%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(687),
                price: "$280",
                mrp: "$350",
                name: "Gift box",
                sale: "20%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(688),
                price: "$1000",
                mrp: "1500",
                name: "Apple Macbook pro",
                sale: "33%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(691),
                price: "$1000",
                mrp: "1500",
                name: "Vintage classic camera",
                sale: "33%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(612),
                price: "$280",
                mrp: "$350",
                name: "Gray T-Shirt",
                sale: "20%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(692),
                price: "$450.45",
                mrp: "$585",
                name: "Stereo headset",
                sale: "23%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }, {
                src: __webpack_require__(690),
                price: "$800",
                mrp: "$1000",
                name: "Mobile phone",
                sale: "20%",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
            }]
        };
    },

    methods: {
        listType: function listType() {
            this.isActive = 1;
        },
        gridType: function gridType() {
            this.isActive = 0;
        }
    },
    computed: {
        filteredproduct: function filteredproduct() {
            var self = this;
            return this.list.filter(function (cust) {
                return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
        }
    }
});

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "view-icons" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-8 col-sm-7 col-xl-7 ml-auto" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control ml-2",
                attrs: { type: "text", placeholder: "Search here" },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 col-sm-3 col-xl-2" }, [
              _c("i", {
                staticClass: "ti-layout-grid3-alt m-2",
                on: { click: _vm.gridType }
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "ti-layout-list-thumb m-2",
                on: { click: _vm.listType }
              })
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "products mt-3" },
      _vm._l(_vm.filteredproduct, function(element, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "product_box d-inline-block m-2 card",
            class: { fullwidth: _vm.isActive == 1 }
          },
          [
            _c("div", { class: { row: _vm.isActive == 1 } }, [
              _c(
                "div",
                {
                  staticClass: "product_image",
                  class: { "col-sm-3": _vm.isActive == 1 }
                },
                [
                  _c(
                    "span",
                    { staticClass: "bg-danger text-white pl-2 pr-2 sale-tag" },
                    [_vm._v(_vm._s(element.sale))]
                  ),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: element.src, alt: "product image" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "card-body",
                  class: { "col-sm-9": _vm.isActive == 1 }
                },
                [
                  _c("div", { class: { row: _vm.isActive == 1 } }, [
                    _c(
                      "div",
                      {
                        staticClass: "product_description",
                        class: { "col-sm-9": _vm.isActive == 1 }
                      },
                      [
                        _c("h3", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(element.name))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(element.description))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "product_details",
                        class: { "col-sm-3": _vm.isActive == 1 }
                      },
                      [
                        _c("h4", { staticClass: "mt-2" }, [
                          _vm._v(_vm._s(element.price))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-secondary mb-0" }, [
                          _vm._v("M.R.P: "),
                          _c("del", [_vm._v(" " + _vm._s(element.mrp))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "mb-0",
                            class: { "d-none": _vm.isActive == 1 }
                          },
                          [_vm._v(_vm._s(element.name))]
                        ),
                        _vm._v(" "),
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c("button", { staticClass: "btn btn-primary" }, [
                          _vm._v(
                            "\n                        Add to cart\n                    "
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("div", [_c("h4", [_vm._v("All products")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star-half-o star_icon text-warning" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-25ee2c36", module.exports)
  }
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1259)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1261)
/* template */
var __vue_template__ = __webpack_require__(1262)
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
Component.options.__file = "resources/components/pages/product_gallery.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25ee2c36", Component.options)
  } else {
    hotAPI.reload("data-v-25ee2c36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "/images/product.png?921f475804236cccb1e348d8ea00ae2a";

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "/images/product7.png?f5f7429df68ef8bee2043875c2bb4586";

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "/images/product2.png?8d301375df448ee3e714523880e4068a";

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "/images/product3.png?8d301375df448ee3e714523880e4068a";

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "/images/product4.png?8d301375df448ee3e714523880e4068a";

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "/images/product6.png?006ad5deb285a23818d1c8fff0c28bf3";

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "/images/product5.png?e3c6ea40ba93e4b21feb50271e63d60b";

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "/images/product8.png?2b7f1e8d1e4168dcd54c27e15a633aac";

/***/ })

});