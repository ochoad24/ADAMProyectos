webpackJsonp([130],{

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1406);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("5d376f71", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496556c0\",\"scoped\":false,\"hasInlineConfig\":true}!./wenk.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496556c0\",\"scoped\":false,\"hasInlineConfig\":true}!./wenk.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/**\n * wenk - Lightweight tooltip for the greater good\n * @version v1.0.6\n * (c) 2018 Tiaan du Plessis @tiaanduplessis |\n * @link https://tiaanduplessis.github.io/wenk/\n * @license MIT\n */\n[data-wenk]{position:relative\n}\n[data-wenk]:after{position:absolute;font-size:13px;border-radius:.4rem;content:attr(data-wenk);padding:12.8px;padding:.8rem;background-color:hsla(0,0%,7%,.8);-webkit-box-shadow:0 0 14px rgba(0,0,0,.1);box-shadow:0 0 14px rgba(0,0,0,.1);color:#fff;line-height:20px;line-height:1.25rem;text-align:left;z-index:1;pointer-events:none;display:block;visibility:hidden;-webkit-transition:all .3s;transition:all .3s;bottom:100%;left:50%;-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px);white-space:pre;width:auto;opacity:0\n}\n[data-wenk]:hover{overflow:visible\n}\n[data-wenk]:hover:after{display:block;opacity:1;visibility:visible;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)\n}\n[data-wenk].wenk--bottom:after,[data-wenk][data-wenk-pos=bottom]:after{bottom:auto;top:100%;left:50%;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)\n}\n[data-wenk].wenk--bottom:hover:after,[data-wenk][data-wenk-pos=bottom]:hover:after{-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px)\n}\n[data-wenk].wenk--left:after,[data-wenk][data-wenk-pos=left]:after{bottom:auto;left:auto;top:50%;right:100%;-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)\n}\n[data-wenk].wenk--left:hover:after,[data-wenk].wenk--right:after,[data-wenk][data-wenk-pos=left]:hover:after,[data-wenk][data-wenk-pos=right]:after{-webkit-transform:translate(-10px,-50%);transform:translate(-10px,-50%)\n}\n[data-wenk].wenk--right:after,[data-wenk][data-wenk-pos=right]:after{bottom:auto;top:50%;left:100%\n}\n[data-wenk].wenk--right:hover:after,[data-wenk][data-wenk-pos=right]:hover:after{-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)\n}\n[data-wenk].wenk-length--small:after,[data-wenk][data-wenk-length=small]:after{white-space:normal;width:80px\n}\n[data-wenk].wenk-length--medium:after,[data-wenk][data-wenk-length=medium]:after{white-space:normal;width:150px\n}\n[data-wenk].wenk-length--large:after,[data-wenk][data-wenk-length=large]:after{white-space:normal;width:260px\n}\n[data-wenk].wenk-length--fit:after,[data-wenk][data-wenk-length=fit]:after{white-space:normal;width:100%\n}\n[data-wenk].wenk-align--right:after,[data-wenk][data-wenk-align=right]:after{text-align:right\n}\n[data-wenk].wenk-align--center:after,[data-wenk][data-wenk-align=center]:after{text-align:center\n}\n[data-wenk=\"\"]:after{visibility:hidden!important\n}", ""]);

// exports


/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1408);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("2e4db064", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496556c0\",\"scoped\":false,\"hasInlineConfig\":true}!./tab.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496556c0\",\"scoped\":false,\"hasInlineConfig\":true}!./tab.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.faq-cat-content {\n    margin-top : 25px;\n}\n.faq-cat-tabs li a {\n    padding          : 15px 10px 15px 10px;\n    background-color : #ffffff;\n    border           : 1px solid #dddddd;\n    color            : #777777;\n}\n.tab-content.faq-cat-content .panel {\n    box-shadow : 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n.nav-tabs li a:focus,\n.panel-heading a:focus {\n    outline : none;\n}\n.panel-heading a,\n.panel-heading a:hover,\n.panel-heading a:focus {\n    text-decoration : none;\n    color           : #777777;\n}\n.faq-cat-content .panel-heading:hover {\n    background-color : #efefef;\n}\n.active-faq {\n    border-left : 5px solid #888888;\n}\n.panel-faq .panel-heading .panel-title span {\n    font-size   : 13px;\n    font-weight : normal;\n}\n.nav-tabs-custom > .nav-tabs > li.active {\n    border-top-color : #6699cc;\n}\n/* tool bar */\n.btn-toolbar {\n    width   : 40px;\n    height  : 40px;\n    padding : 10px 6px;\n}\n.tool-item {\n    display        : block;\n    text-align     : center;\n    padding-bottom : 10px;\n    padding-right  : 17px;\n    transition     : none;\n}\n.tool-item:hover {\n    color      : #fff;\n    background : 0 !important;\n}\n.toolbar_animate {\n    padding : 25px;\n}\n.btn-toolbar-primary {\n    background-color : #6699cc !important;\n}\n.btn-toolbar-primary:hover {\n    background-color : #6699cc;\n}\n.btn-toolbar-danger {\n    background-color : #ff6666 !important;\n}\n.btn-toolbar-danger:hover {\n    background-color : #ff6666;\n}\n.btn-toolbar-warning {\n    background-color : #f0ad4e !important;\n}\n.btn-toolbar-warning:hover {\n    background-color : #f0ad4e;\n}\n.btn-toolbar-info {\n    background-color : #66ccff !important;\n}\n.btn-toolbar-info:hover {\n    background-color : #66ccff;\n}\n.btn-toolbar-success {\n    background-color : #66cc99 !important;\n}\n.btn-toolbar-success:hover {\n    background-color : #66cc99;\n}\n.toolbar-primary {\n    background : #6699cc;\n}\n.toolbar-primary .tool-item.selected,\n.toolbar-primary .tool-item:hover {\n    background : #6699cc;\n}\n.toolbar-danger {\n    background : #ff6666;\n}\n.toolbar-danger .tool-item.selected,\n.toolbar-danger .tool-item:hover {\n    background : #ff6666;\n}\n.toolbar-warning {\n    background : #f0ad4e;\n}\n.toolbar-danger .tool-item.selected,\n.toolbar-danger .tool-item:hover {\n    background : #f0ad4e;\n}\n.toolbar-info {\n    background : #66ccff;\n}\n.toolbar-info .tool-item.selected,\n.toolbar-info .tool-item:hover {\n    background : #66ccff;\n}\n.toolbar-success {\n    background : #66cc99;\n}\n.toolbar-success .tool-item.selected,\n.toolbar-success .tool-item:hover {\n    background : #66cc99;\n}\n.btn-toolbar-light,\n.toolbar-light {\n    background-color : #dcdcdc;\n}\n.btn-toolbar-light.pressed,\n.btn-toolbar-light:hover {\n    background-color : #e4e4e4;\n}\n.btn-toolbar-dark,\n.toolbar-dark {\n    background-color : #66ccff;\n}\n.btn-toolbar-dark.pressed,\n.btn-toolbar-dark:hover {\n    background-color : #66ccff;\n}\n.btn-toolbar-default i {\n    color : #fff;\n}\n.toolbar-info.tool-top .arrow {\n    border-color : #66ccff transparent transparent;\n}\n.toolbar-light.tool-top .arrow {\n    border-color : #dcdcdc transparent transparent;\n}\n.toolbar-dark.tool-top .arrow {\n    border-color : #66ccff transparent transparent;\n}\n.toolbar-primary.tool-top .arrow {\n    border-color : #6699cc transparent transparent;\n}\n.toolbar-warning.tool-top .arrow {\n    border-color : #f0ad4e transparent transparent;\n}\n.toolbar-success.tool-top .arrow {\n    border-color : #66cc99 transparent transparent;\n}\n.toolbar-success.tool-right .arrow {\n    border-color : transparent #66cc99 transparent transparent;\n}\n.toolbar-danger.tool-bottom .arrow {\n    border-color : transparent transparent #ff6666;\n}\n.toolbar-danger.tool-top .arrow {\n    border-color : #ff6666 transparent transparent;\n}\n.toolbar-warning.tool-left .arrow {\n    border-color : transparent transparent transparent #f0ad4e;\n}\n.toolbar-info.tool-right .arrow {\n    border-color : transparent #66ccff transparent transparent;\n}\n.toolbar-success.tool-bottom .arrow {\n    border-color : transparent transparent #66cc99;\n}\n.toolbar-danger.tool-left .arrow {\n    border-color : transparent transparent transparent #ff6666;\n}\n/*toolbar responsive*/\n@media only screen and (max-width : 768px) {\n.feature-toolbar {\n        margin-top : 10px;\n}\n}\n.wenk-area {\n    border: 1px solid #ccc;\n    padding: 3px 12px;\n    border-radius: 3px;\n    display: inline-block;\n    cursor: default;\n}\n[data-wenk].wenk-length--large:after, [data-wenk][data-wenk-length=large]:after{\n    left:120px;\n}\n@media(min-width:320px) and (max-width:425px){\n[data-wenk].wenk-length--large:after, [data-wenk][data-wenk-length=large]:after{\n        left:50px;\n}\n}\n.popover.show,.tooltip.show   {\n    z-index: 9;\n}\n.btn-warning:not([disabled]):not(.disabled):active{\n    color: #fff;\n}\n@media(max-width:320px){\n.tooltip-examples{\n     margin-right: 1.5rem;\n}\n}\n@media(max-width:425px){\n.tooltip-examples{\n        margin-right: 1rem;\n}\n}\n.disabled{\n    cursor: not-allowed;\n}", ""]);

// exports


/***/ }),

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(517);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    data: function data() {
        return {
            text: "\n         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n          brunch.\n           Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n          wes anderson cred nesciunt sapiente ea proident.\n\n           Ad vegan excepteur butcher\n          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven't heard of them accusamus labore VHS.\n\n        "
        };
    },

    name: "tabs_accordions",
    mounted: function mounted() {
        "use strict";
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: " <i class='ti-layout-tab-window'></i> Tabs" } },
            [
              _c(
                "b-tabs",
                [
                  _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                    _c("p", { staticClass: "mt-3" }, [
                      _vm._v(
                        "\n                            It is a long established fact that a reader will be distracted by the\n                            readable content of a page when looking at its layout. The point of using\n                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as\n                            opposed to using 'Content here, content here'.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Profile" } }, [
                    _c("p", { staticClass: "mt-3" }, [
                      _vm._v(
                        "\n                            There are many variations of passages of Lorem Ipsum available, but the\n                            majority have suffered alteration in some form, by injected humour, or\n                            randomised words which don't look even slightly believable.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Disabled", disabled: "" } }, [
                    _c("p", { staticClass: "mt-3" }, [
                      _vm._v(
                        "If you are going\n                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything\n                            embarrassing hidden in the middle of text. The generated Lorem Ipsum is\n                            therefore always free from repetition, injected humour, or\n                            non-characteristic\n                            words etc.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br")
                  ])
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
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-layout-tab'></i> Pills" } },
            [
              _c("div", { staticClass: "bs-example" }, [
                _c("ul", { staticClass: "nav nav-pills" }, [
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link active",
                        attrs: { href: "#/tabs_accordions" }
                      },
                      [_vm._v("Home")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: "#/tabs_accordions" }
                      },
                      [_vm._v("Profile")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link disabled",
                        attrs: { href: "#/tabs_accordions" }
                      },
                      [_vm._v("Disabled")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "bs-example" }, [
                _c(
                  "ul",
                  {
                    staticClass: "nav flex-column nav-pills bg-stacked",
                    staticStyle: { "max-width": "300px" }
                  },
                  [
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link active",
                          attrs: { href: "#/tabs_accordions" }
                        },
                        [_vm._v("Home")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: { href: "#/tabs_accordions" }
                        },
                        [_vm._v("Profile")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link disabled",
                          attrs: { href: "#/tabs_accordions" }
                        },
                        [_vm._v("Disabled")]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-comment'></i> Popover" } },
            [
              _c(
                "div",
                [
                  _c(
                    "b-btn",
                    {
                      ref: "primary",
                      attrs: { id: "exright", variant: "warning" }
                    },
                    [
                      _vm._v(
                        "\n                        Right\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      attrs: {
                        target: "exright",
                        triggers: "click",
                        placement: "right"
                      }
                    },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Popover title")
                      ]),
                      _vm._v(
                        "\n                        Popover on right\n                    "
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-btn",
                    { ref: "button", attrs: { id: "top", variant: "primary" } },
                    [
                      _vm._v(
                        "\n                        Top\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      ref: "popover",
                      attrs: {
                        target: "top",
                        triggers: "click",
                        placement: "top"
                      }
                    },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Popover title")
                      ]),
                      _vm._v(
                        "\n                        Popover on top\n                    "
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-btn",
                    {
                      ref: "success",
                      attrs: { id: "bottom", variant: "success" }
                    },
                    [
                      _vm._v(
                        "\n                        Bottom\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      attrs: {
                        target: "bottom",
                        triggers: "click",
                        placement: "bottom"
                      }
                    },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Popover title")
                      ]),
                      _vm._v(
                        "\n                        Popover on bottom\n                    "
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("b-btn", { attrs: { id: "left", variant: "secondary" } }, [
                    _vm._v(
                      "\n                        Left\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      attrs: {
                        target: "left",
                        triggers: "click",
                        placement: "left"
                      }
                    },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v("Popover title")
                      ]),
                      _vm._v(
                        "\n                        Popover on left\n                    "
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "card",
            { attrs: { title: "<i class='ti-comments'></i> Tool Tips" } },
            [
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover.right",
                      modifiers: { hover: true, right: true }
                    }
                  ],
                  staticClass: "mb-3 btn-lg text-white",
                  attrs: { variant: "info", title: "Tooltip in right " }
                },
                [_vm._v("Right ")]
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover.top",
                      modifiers: { hover: true, top: true }
                    }
                  ],
                  staticClass: "mb-3 btn-lg",
                  attrs: { variant: "primary", title: "Tooltip in top" }
                },
                [_vm._v("Top")]
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover.left",
                      modifiers: { hover: true, left: true }
                    }
                  ],
                  staticClass: "mb-3 btn-lg",
                  attrs: { variant: "success", title: "Tooltip in left" }
                },
                [_vm._v("Left")]
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover.bottom",
                      modifiers: { hover: true, bottom: true }
                    }
                  ],
                  staticClass: "mb-3 btn-lg",
                  attrs: { variant: "warning", title: "Tooltip in bottom" }
                },
                [_vm._v("Bottom")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "bs-example" }, [
                _c("ul", { staticClass: "tooltip-examples list-inline" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.top",
                          modifiers: { hover: true, top: true }
                        }
                      ],
                      staticClass: " ml-3 mr-2",
                      attrs: { title: "hi" }
                    },
                    [_vm._v("Tooltip")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.top",
                          modifiers: { hover: true, top: true }
                        }
                      ],
                      staticClass: " ml-3 mr-3",
                      attrs: { title: "Hello!!" }
                    },
                    [_vm._v("Small tooltip")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.top",
                          modifiers: { hover: true, top: true }
                        }
                      ],
                      staticClass: " ml-3 mr-3",
                      attrs: {
                        title:
                          "A much larger tooltip to demonstrate the max width of the Bootstrap tooltip"
                      }
                    },
                    [_vm._v("Large tooltip")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.top",
                          modifiers: { hover: true, top: true }
                        }
                      ],
                      staticClass: " ml-3 mr-3",
                      attrs: { title: "Bye!" }
                    },
                    [_vm._v("Last tooltip")]
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "card",
            { attrs: { title: " <i class='ti-comment-alt'></i> Popover" } },
            [
              _c("div", [
                _c(
                  "div",
                  { staticClass: "po-markup" },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: { href: "http://www.fifa.com/", id: "popoverr" }
                      },
                      [
                        _vm._v(
                          "\n                            fifa.com\n                        "
                        )
                      ]
                    ),
                    _vm._v(
                      "\n                        ← popover on link so you can get site information.\n                        "
                    ),
                    _c(
                      "b-popover",
                      {
                        attrs: {
                          target: "popoverr",
                          triggers: "hover",
                          placement: "right"
                        }
                      },
                      [
                        _c("template", { slot: "title" }, [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(1411),
                              alt: "Google",
                              width: "20",
                              height: "20"
                            }
                          }),
                          _vm._v(
                            " Foot Ball\n                                world cup\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                Football refers to a number of sports that involve, to varying degrees,\n                                kicking a ball with the foot to score a goal. The most popular of these\n                                sports worldwide is\n                                "
                          ),
                          _c("strong", [_vm._v("association football")]),
                          _vm._v(
                            ' , more commonly known as just\n                                "football" or "soccer".\n                            '
                          )
                        ])
                      ],
                      2
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "card",
            { attrs: { title: "<i class='ti-comment'></i> Wenk Tool tip" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("h4", [_vm._v("Wenk positions")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-area",
                        attrs: { "data-wenk": "Top!" }
                      },
                      [_vm._v("Wenk to the top!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-area",
                        attrs: { "data-wenk": "Left!", "data-wenk-pos": "left" }
                      },
                      [_vm._v("Wenk to the left!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-area",
                        attrs: {
                          "data-wenk": "Right!",
                          "data-wenk-pos": "right"
                        }
                      },
                      [_vm._v("Wenk to the right!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-area",
                        attrs: {
                          "data-wenk": "Bottom!",
                          "data-wenk-pos": "bottom"
                        }
                      },
                      [_vm._v("Wenk to the bottom!")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("h4", [_vm._v("Wenk Size")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-length--small wenk-area",
                        attrs: { "data-wenk": "I'm small!" }
                      },
                      [_vm._v("Small wenk!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-length--medium wenk-area",
                        attrs: { "data-wenk": "I'm medium!" }
                      },
                      [_vm._v("Medium wenk!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-length--large wenk-area",
                        attrs: { "data-wenk": "I'm large!" }
                      },
                      [_vm._v("Large wenk!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass: "wenk-length--fit wenk-area",
                        attrs: { "data-wenk": "I fit!" }
                      },
                      [_vm._v("I fit just right!")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("h4", [_vm._v("Wenk Alignment")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass:
                          "wenk-align--left wenk-length--large wenk-area",
                        attrs: { "data-wenk": "I'm left!" }
                      },
                      [_vm._v("Left wenk!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass:
                          "wenk-align--center wenk-length--large wenk-area",
                        attrs: { "data-wenk": "I'm center!" }
                      },
                      [_vm._v("center wenk!")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4 text-center" }, [
                  _c("p", [
                    _c(
                      "span",
                      {
                        staticClass:
                          "wenk-align--right wenk-length--large wenk-area",
                        attrs: { "data-wenk": "I'm right!" }
                      },
                      [_vm._v("Right wenk!")]
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-layout-menu-v'></i> Accordions" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": "" } },
                [
                  _c(
                    "b-tabs",
                    { ref: "tabs", attrs: { card: "" } },
                    [
                      _c("b-tab", { attrs: { title: "Tab 1" } }, [
                        _c(
                          "div",
                          { attrs: { role: "tablist" } },
                          [
                            _c(
                              "b-card",
                              { staticClass: "mb-1", attrs: { "no-body": "" } },
                              [
                                _c(
                                  "b-card-header",
                                  {
                                    staticClass: "p-0",
                                    attrs: {
                                      "header-tag": "header",
                                      role: "tab"
                                    }
                                  },
                                  [
                                    _c(
                                      "b-btn",
                                      {
                                        directives: [
                                          {
                                            name: "b-toggle",
                                            rawName: "v-b-toggle.accordion1",
                                            modifiers: { accordion1: true }
                                          }
                                        ],
                                        attrs: {
                                          block: "",
                                          href: "#",
                                          variant: "secondary"
                                        }
                                      },
                                      [_vm._v("Item Tab-1")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  {
                                    attrs: {
                                      id: "accordion1",
                                      accordion: "my-accordion",
                                      role: "tabpanel"
                                    }
                                  },
                                  [
                                    _c("b-card-body", [
                                      _c("p", { staticClass: "card-text" }, [
                                        _vm._v(
                                          "\n                                                I start opened because "
                                        ),
                                        _c("code", [_vm._v("visible")]),
                                        _vm._v(" is "),
                                        _c("code", [_vm._v("true")])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "card-text" }, [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.text) +
                                            "\n                                            "
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-card",
                              { staticClass: "mb-1", attrs: { "no-body": "" } },
                              [
                                _c(
                                  "b-card-header",
                                  {
                                    staticClass: "p-0",
                                    attrs: {
                                      "header-tag": "header",
                                      role: "tab"
                                    }
                                  },
                                  [
                                    _c(
                                      "b-btn",
                                      {
                                        directives: [
                                          {
                                            name: "b-toggle",
                                            rawName: "v-b-toggle.accordion2",
                                            modifiers: { accordion2: true }
                                          }
                                        ],
                                        attrs: {
                                          block: "",
                                          href: "#",
                                          variant: "secondary"
                                        }
                                      },
                                      [_vm._v("Item Tab-2")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  {
                                    attrs: {
                                      id: "accordion2",
                                      accordion: "my-accordion",
                                      role: "tabpanel"
                                    }
                                  },
                                  [
                                    _c("b-card-body", [
                                      _c("p", { staticClass: "card-text" }, [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.text) +
                                            "\n                                            "
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Tab 2" } }, [
                        _c(
                          "div",
                          { attrs: { role: "tablist" } },
                          [
                            _c(
                              "b-card",
                              { staticClass: "mb-1", attrs: { "no-body": "" } },
                              [
                                _c(
                                  "b-card-header",
                                  {
                                    staticClass: "p-0",
                                    attrs: {
                                      "header-tag": "header",
                                      role: "tab"
                                    }
                                  },
                                  [
                                    _c(
                                      "b-btn",
                                      {
                                        directives: [
                                          {
                                            name: "b-toggle",
                                            rawName: "v-b-toggle.accordion3",
                                            modifiers: { accordion3: true }
                                          }
                                        ],
                                        attrs: {
                                          block: "",
                                          href: "#",
                                          variant: "secondary"
                                        }
                                      },
                                      [_vm._v("Item Tab-1")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  {
                                    attrs: {
                                      id: "accordion3",
                                      accordion: "my-accordion",
                                      role: "tabpanel"
                                    }
                                  },
                                  [
                                    _c("b-card-body", [
                                      _c("p", { staticClass: "card-text" }, [
                                        _vm._v(
                                          "\n                                                I start opened because "
                                        ),
                                        _c("code", [_vm._v("visible")]),
                                        _vm._v(" is "),
                                        _c("code", [_vm._v("true")])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "card-text" }, [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.text) +
                                            "\n                                            "
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-card",
                              { staticClass: "mb-1", attrs: { "no-body": "" } },
                              [
                                _c(
                                  "b-card-header",
                                  {
                                    staticClass: "p-0",
                                    attrs: {
                                      "header-tag": "header",
                                      role: "tab"
                                    }
                                  },
                                  [
                                    _c(
                                      "b-btn",
                                      {
                                        directives: [
                                          {
                                            name: "b-toggle",
                                            rawName: "v-b-toggle.accordion4",
                                            modifiers: { accordion4: true }
                                          }
                                        ],
                                        attrs: {
                                          block: "",
                                          href: "#",
                                          variant: "secondary"
                                        }
                                      },
                                      [_vm._v("Item Tab-2")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  {
                                    attrs: {
                                      id: "accordion4",
                                      accordion: "my-accordion",
                                      role: "tabpanel"
                                    }
                                  },
                                  [
                                    _c("b-card-body", [
                                      _c("p", { staticClass: "card-text" }, [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.text) +
                                            "\n                                            "
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-496556c0", module.exports)
  }
}

/***/ }),

/***/ 1411:
/***/ (function(module, exports) {

module.exports = "/images/football.jpg?7a3f7a7b1ed0c1c4471260384c3e46e0";

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1405)
  __webpack_require__(1407)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1409)
/* template */
var __vue_template__ = __webpack_require__(1410)
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
Component.options.__file = "resources/components/pages/tabs_accordions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-496556c0", Component.options)
  } else {
    hotAPI.reload("data-v-496556c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(518)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(520)
/* template */
var __vue_template__ = __webpack_require__(521)
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

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
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

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 520:
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

/***/ 521:
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