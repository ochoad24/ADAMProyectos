webpackJsonp([182],{

/***/ 2226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("4d9512fe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d17cc0c\",\"scoped\":false,\"hasInlineConfig\":true}!./pricing_table.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d17cc0c\",\"scoped\":false,\"hasInlineConfig\":true}!./pricing_table.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*pricing table 1*/\n.span-btn, .span-btn:hover {\n    color: #666;\n    background-color: #DCDCDC;\n    border-color: #DCDCDC;\n}\n.span-btn.active, .span-btn.active:hover {\n    color: #fff;\n    background-color: #376ea4;\n    border-color: #2d5986;\n}\n/*table styles*/\n.modal-1 {\n    border         : 1px solid #B6D1CC;\n    border-radius  : 3px;\n    margin-top     : 20px;\n    margin-bottom  : 10px;\n    padding-bottom : 25px;\n}\n.modal-1 .pack-heading {\n    background-color : #E1EFEF;\n    padding          : 2px 0;\n    height           : 145px;\n}\n.pack-heading p {\n    color  : #555;\n    margin : 13px 0;\n}\n.modal-1 .pack-title {\n    font-size : 22px;\n    color     : #677777;\n}\n.modal-1 .pack-price {\n    font-size : 36px;\n    position  : relative;\n}\n.modal-1 .pack-price span {\n    font-size : 18px;\n    color     : #777;\n}\n.modal-1 .pack-price .dollar {\n    font-size : 22px;\n    color     : #777;\n    top       : -20px;\n    display   : inline;\n}\n.modal-1 .section-head {\n    font-size   : 15px;\n    font-weight : bold;\n    color       : #60B6A3;\n    margin      : 40px 0 15px;\n}\n.modal-1 .pack-details li {\n    line-height : 38px;\n    color       : #555;\n    font-size   : 14px;\n}\n.modal-1 .pack-details li.text-dummy {\n    color : #999;\n}\n.modal-1 .btn-getit {\n    -webkit-border-radius : 3px;\n    -moz-border-radius    : 3px;\n    border-radius         : 3px;\n    padding               : 5px 17px;\n    margin-top            : 30px;\n}\n.modal-1 .trending-tag {\n    height   : 79px;\n    overflow : hidden;\n    position : absolute;\n    left     : 15px;\n    top      : 20px;\n    width    : 80px;\n}\n.tag-design {\n    font              : bold 12px Noto Sans;\n    background-color  : #3AAE97;\n    padding-top       : 22px;\n    position          : relative;\n    text-align        : center;\n    top               : -12px;\n    left              : -40px;\n    -webkit-transform : rotate(-45deg);\n    -moz-transform    : rotate(-45deg);\n    -ms-transform     : rotate(-45deg);\n    -o-transform      : rotate(-45deg);\n    transform         : rotate(-45deg);\n    width             : 116px;\n    height            : 61px;\n}\n.pro-option {\n    font-size   : 24px;\n    line-height : 24px;\n    margin      : 25px 0;\n}\n.contact-info {\n    font-size     : 14px;\n    margin-bottom : 20px;\n}\n.btn-contact {\n    color         : #4080bf;\n    border        : 1px solid #4080bf;\n    padding       : 6px 25px;\n    border-radius : 20px;\n}\n.btn-contact:hover {\n    background-color : #4080bf;\n    color            : #fff;\n}\n@media screen and (max-width : 767px) {\n.modal-1 .trending-tag {\n        top :20px;\n}\n}\n@media(max-width: 320px){\n.modal-1 .trending-tag{\n        top:20px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 2228:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            isActive: 1,
            selected: "monthly"
        };
    },

    methods: {
        number: function number() {
            this.isActive = 1;
        },
        numbers: function numbers() {
            this.isActive = 0;
        }
    }
});

/***/ }),

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row text-center" }, [
      _c("div", { staticClass: "col-sm-12 col-lg-12" }, [
        _c(
          "div",
          { staticClass: "btn-group", attrs: { "data-toggle": "buttons" } },
          [
            _c(
              "label",
              {
                staticClass: "btn btn-default span-btn monthly ",
                class: { active: _vm.isActive == 1 },
                on: { click: _vm.number }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selected,
                      expression: "selected"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: {
                    type: "radio",
                    name: "options",
                    id: "option2",
                    autocomplete: "off",
                    value: "monthly",
                    checked: ""
                  },
                  domProps: { checked: _vm._q(_vm.selected, "monthly") },
                  on: {
                    change: function($event) {
                      _vm.selected = "monthly"
                    }
                  }
                }),
                _vm._v(" Monthly Tariff\n                ")
              ]
            ),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "btn btn-default span-btn yearly",
                class: { active: _vm.isActive == 0 },
                on: { click: _vm.numbers }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selected,
                      expression: "selected"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: {
                    type: "radio",
                    name: "options",
                    id: "option3",
                    autocomplete: "off",
                    value: "yearly"
                  },
                  domProps: { checked: _vm._q(_vm.selected, "yearly") },
                  on: {
                    change: function($event) {
                      _vm.selected = "yearly"
                    }
                  }
                }),
                _vm._v("  Yearly Tariff\n                ")
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(0),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("49"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("540"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$45/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(5),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("99"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("1104"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$92/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-danger center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6  col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(9),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("159"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("1788"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$149/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(10),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(11),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(12),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(13),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("399"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack " }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("4620"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$385/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(14),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(15),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(16),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(17)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Basic")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("5")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("300")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("250,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", { staticClass: "text-dummy" }, [_vm._v("No Branded Reports")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("5 Keywords Reports")])]),
      _vm._v(" "),
      _c("li", { staticClass: "text-dummy" }, [_vm._v("No Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("2")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "trending-tag" }, [
      _c("div", { staticClass: "tag-design bg-primary text-white" }, [
        _vm._v("Best\n                        "),
        _c("br"),
        _vm._v(" Package")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Econamic")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("10")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("750")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("500,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("Branded Reports")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [
        _c("strong", [_vm._v("5,000")]),
        _vm._v(" Full Keywords Reports")
      ]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("30")]), _vm._v(" Full Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("10")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Premium")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("25")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("1,700")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("1,125,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("Branded Reports")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [
        _c("strong", [_vm._v("12,000")]),
        _vm._v(" Full Keywords Reports")
      ]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("50")]), _vm._v(" Full Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("25")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Enterprise")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("100")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("7,500")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("1,250,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("Branded Reports")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [
        _c("strong", [_vm._v("30,000")]),
        _vm._v(" Full Keywords Reports")
      ]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("90")]), _vm._v(" Full Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("30")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12 col-lg-12" }, [
      _c("p", { staticClass: "pro-option" }, [
        _vm._v("Want to be a PRO User?")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "contact-info" }, [
        _vm._v("We have larger and the best plans designed for you.")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-contact",
          attrs: { href: "javascript:void(0)" }
        },
        [_vm._v("Contact Us")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6d17cc0c", module.exports)
  }
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2226)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2228)
/* template */
var __vue_template__ = __webpack_require__(2229)
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
Component.options.__file = "resources/components/pages/pricing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d17cc0c", Component.options)
  } else {
    hotAPI.reload("data-v-6d17cc0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});