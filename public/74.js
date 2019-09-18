webpackJsonp([74],{

/***/ 1557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1558);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("48ff5b68", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48d12674\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./simple_tables.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48d12674\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./simple_tables.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.table td{\n    vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ 1559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(527);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "simple_tables",
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },

    mounted: function mounted() {},
    methods: {
        hideModal: function hideModal() {
            this.$refs.myModalRef.hide();
            this.$refs.myModalRefTwo.hide();
        }
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1560:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "card",
              {
                attrs: {
                  title: "<i class='ti-layout-cta-left'></i> Basic Table"
                }
              },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table", attrs: { id: "table1" } },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("First Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Last Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("City")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Department")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("1")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Trey")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Armstrong")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Isadoreborough")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Jewelery")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("2")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Cecile")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Kirlin")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("North Reillyshire")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sports")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("3")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Murl")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Denesik")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Alvismouth")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Tools")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("4")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Allison")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Gleason")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("East Dinaton")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Electronics")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("5")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Mathilde")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Cassin")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("New Royce")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Home")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("6")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Maeve")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Gutkowski")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Lake Justynport")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Tools")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("7")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Hobart")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Marquardt")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Lake Martinefurt")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Kids")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("8")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Otha")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Legros")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("West Ameliaview")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Games")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("9")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Clint")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Metz")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Lake Rhianna")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Garden")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("10")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Patience")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Ferry")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Lake Veronica")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Games")])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "card",
              { attrs: { title: "<i class='ti-menu'></i> Bordered Table" } },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-hover" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("First Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Last Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Department")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Status")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("1")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Loyce")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Larson")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Industrial")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "badge badge-success p-1" },
                              [_vm._v("Approved")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("2")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Vincenzo")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Bashirian")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Baby")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Blocked")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("3")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Winona")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Hagenes")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Health")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "badge badge-success p-1" },
                              [_vm._v("Approved")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("4")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Clark")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Ebert")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Tools")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "badge badge-success p-1" },
                              [_vm._v("Approved")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("5")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Waino")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Labadie")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Music")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "badge badge-success p-1" },
                              [_vm._v("Suspended")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("6")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Jackson")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Abshire")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Shoes")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Blocked")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("7")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Erica")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Lehner")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Shoes")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-warning" }, [
                              _vm._v("Suspended")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("8")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Dorris")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Bins")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Outdoors")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "badge badge-success p-1" },
                              [_vm._v("Approved")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("9")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Norene")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Rolfson")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Baby")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Pending")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("10")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Katharina")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Kovacek")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Garden")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v("Suspended")
                            ])
                          ])
                        ])
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
          { staticClass: "col-lg-12" },
          [
            _c(
              "card",
              {
                attrs: {
                  title:
                    "<i class='ti-list'></i> Data Table with Action buttons"
                }
              },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-bordred table-striped",
                      attrs: { id: "mytable" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("email")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Edit")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Delete")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("Ambrose Schulist")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Ambrose.Schulist@hotmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("098-354-8863")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Bernadette Medhurst")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("Bernadette.Medhurst75@hotmail.com")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("258-452-3348")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Hoyt Franecki")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Hoyt.Franecki@yahoo.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("648-323-5530")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Kianna Lockman")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Kianna.Lockman@gmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("551-834-3163")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Sheldon Howe")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sheldon_Howe94@yahoo.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("704-582-5580")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Timmothy Mertz")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Timmothy72@gmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("641-915-3609")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Faye Mayer")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Faye34@gmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("786-093-2620")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Alfred Watsica")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Alfred34@gmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("294-242-3621")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Vella Hammes")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Vella.Hammes40@hotmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("063-136-5606")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Evans Trantow")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Evans90@yahoo.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("171-105-6990")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaledit",
                                        modifiers: { modaledit: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-pencil"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "p",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal.modaldelete",
                                        modifiers: { modaldelete: true }
                                      }
                                    ],
                                    attrs: { variant: "danger" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fa fa-fw ti-trash"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
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
      _c(
        "b-modal",
        {
          ref: "myModalRefTwo",
          attrs: { id: "modaledit", title: "Edit details", "ok-only": true }
        },
        [
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "form-control ",
                attrs: { type: "text", placeholder: "Joseph Lynch" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "form-control ",
                attrs: { type: "text", placeholder: "joseph34@testmail.com" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "form-control ",
                attrs: { type: "text", placeholder: "456-632-5687" }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "w-100",
              attrs: { slot: "modal-footer" },
              slot: "modal-footer"
            },
            [
              _c(
                "b-btn",
                {
                  staticClass: "float-right",
                  attrs: { size: "sm", variant: "success" },
                  on: { click: _vm.hideModal }
                },
                [
                  _c("span", { staticClass: "ti-check" }),
                  _vm._v("Update\n            ")
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: { id: "modaldelete", title: "Delete Details" }
        },
        [
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "alert alert-info" }, [
              _c("span", { staticClass: "glyphicon glyphicon-info-sign" }),
              _vm._v(
                "  Are you sure you want to\n                delete this record ?\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "float-right",
              attrs: { slot: "modal-footer" },
              slot: "modal-footer"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: { click: _vm.hideModal }
                },
                [
                  _c("span", { staticClass: "ti-check" }),
                  _vm._v(" Yes\n            ")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: { click: _vm.hideModal }
                },
                [
                  _c("span", { staticClass: "ti-close" }),
                  _vm._v(" No\n            ")
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c(
              "card",
              { attrs: { title: "<i class='ti-list-ol'></i> Basic Table 2" } },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-hover" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("User Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Phone")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", { staticClass: "bg-default" }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-default" }, [
                            _vm._v("Duncan Carroll")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-default" }, [
                            _vm._v("Duncan43")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-default" }, [
                            _vm._v("597-819-8431")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("Dewitt Cormier")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("Dewitt_Cormier99")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("741-099-5054")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("3")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Jarrod Gislason")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Jarrod4")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("834-470-1425")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("4")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Hailey Bruen")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Hailey.Bruen23")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("970-037-5586")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-danger" }, [_vm._v("5")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("Carmella Sanford")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("Carmella_Sanford54")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("833-679-6170")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("6")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Rafaela Reilly")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Rafaela.Reilly33")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("350-714-3505")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("7")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("Reta Beatty")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("Reta67")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-warning" }, [
                            _vm._v("489-997-1458")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("8")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Allene Wisozk")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Allene.Wisozk18")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("367-444-4071")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("9")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Mariela Corwin")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Mariela.Corwin")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("158-603-0375")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("10")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Katlyn Kovacek")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Katlyn.Kovacek")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("883-968-9177")
                          ])
                        ])
                      ])
                    ]
                  )
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
              { attrs: { title: "<i class='ti-list-ol'></i> Basic Table 3" } },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-hover" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Department")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Salary")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("1")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Joelle Ward")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Beauty")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$22777")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("2")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Sammie Bailey")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Movies")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$13132")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("3")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Kenton Tillman")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Grocery")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$6543")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("4")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Braxton Kohler")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Automotive")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$15224")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("5")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Delpha Durgan")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Automotive")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$21147")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("6")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Judy Abshire")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Tools")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$5690")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("7")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Ava Bogisich")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Games")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$33835")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("8")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Marta Osinski")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Toys")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$40918")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("9")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Salma Luettgen")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Shoes")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$47338")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("10")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-success" }, [
                            _vm._v("Breana Wolf")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-primary" }, [
                            _vm._v("Games")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "bg-danger" }, [
                            _vm._v("$14756")
                          ])
                        ])
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
          { staticClass: "col-lg-12" },
          [
            _c(
              "card",
              {
                attrs: {
                  title: "<i class='ti-layout-grid3'></i> Responsive Table"
                }
              },
              [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Company")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("email")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Department")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Salary")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("Durgan - Sauer")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Durgan-Sauer23@yahoo.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("032-563-1943")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Music")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("44631")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Hickle LLC")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("HickleLLC.Cremin62@hotmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("158-351-5915")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Garden")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("4669")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Padberg - Cronin")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("Padberg-Cronin.Kunde10@hotmail.com")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("265-460-4774")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Automotive")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("10214")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Lakin - Cronin")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Lakin-Cronin_Batz61@hotmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("443-924-7214")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Shoes")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("2949")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Bednar - Padberg")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Bednar-Padberg22@yahoo.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("700-808-9992")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Grocery")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("48239")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Gibson - DuBuque")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("Gibson-DuBuque_Buckridge@yahoo.com")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("372-126-7393")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sports")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("11656")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Huels - Schoen")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("Huels-Schoen_Lubowitz40@hotmail.com")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("408-586-4486")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Books")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("43464")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Harber and Sons")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("HarberandSons60@hotmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("506-397-7192")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Jewelery")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("10454")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Beer, Murray and Stracke")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("BeerMurrayandStracke.Mertz@gmail.com")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("202-293-9914")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Clothing")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("35082")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Schroeder Inc")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("SchroederInc_Grimes98@gmail.com")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("379-212-1752")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Baby")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("20828")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tfoot", [
                        _c("tr", [
                          _c("th", [_vm._v("Company")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("email")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Department")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Salary")])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "delete",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "edit",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-hidden": "true"
                  }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass: "modal-title custom_align",
                  attrs: { id: "Heading5" }
                },
                [_vm._v("Delete this entry")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "alert alert-info" }, [
                _c("span", { staticClass: "glyphicon glyphicon-info-sign" }),
                _vm._v(
                  "  Are you sure you want to\n                        delete this record ?\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer " }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [
                  _c("span", { staticClass: "glyphicon glyphicon-ok-sign" }),
                  _vm._v(" Yes\n                    ")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [
                  _c("span", { staticClass: "glyphicon glyphicon-remove" }),
                  _vm._v(" No\n                    ")
                ]
              )
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48d12674", module.exports)
  }
}

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1557)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1559)
/* template */
var __vue_template__ = __webpack_require__(1560)
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
Component.options.__file = "resources/components/pages/simple_tables.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48d12674", Component.options)
  } else {
    hotAPI.reload("data-v-48d12674", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(528)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(530)
/* template */
var __vue_template__ = __webpack_require__(531)
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

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(529);
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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 530:
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

/***/ 531:
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