webpackJsonp([78],{

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1488);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("0d394800", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-86fcc26e\",\"scoped\":true,\"hasInlineConfig\":true}!./alertmessage.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-86fcc26e\",\"scoped\":true,\"hasInlineConfig\":true}!./alertmessage.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.alert-message[data-v-86fcc26e] {\n    margin      : 13px 0;\n    padding     : 20px;\n    border-left : 3px solid #eee;\n}\n.alert-message h4[data-v-86fcc26e] {\n    margin-top    : 0;\n    margin-bottom : 5px;\n}\n.alert-message p[data-v-86fcc26e]:last-child {\n    margin-bottom : 0;\n}\n.alert-message code[data-v-86fcc26e] {\n    background-color : #fff;\n    border-radius    : 3px;\n}\n.alert-message-success[data-v-86fcc26e] {\n    background-color : #F4FDF0;\n    border-color     : #22d69d;\n}\n.alert-message-success h4[data-v-86fcc26e] {\n    color : #22d69d;\n}\n.alert-message-danger[data-v-86fcc26e] {\n    background-color : #fdf7f7;\n    border-color     : #fb8678;\n}\n.alert-message-danger h4[data-v-86fcc26e] {\n    color : #fb8678;\n}\n.alert-message-warning[data-v-86fcc26e] {\n    background-color : #fcf8f2;\n    border-color     : #ffb65f;\n}\n.alert-message-warning h4[data-v-86fcc26e] {\n    color : #ffb65f;\n}\n.alert-message-info[data-v-86fcc26e] {\n    background-color : #f4f8fa;\n    border-color     : #4fc1e9;\n}\n.alert-message-info h4[data-v-86fcc26e] {\n    color : #4fc1e9;\n}\n.alert-message-default[data-v-86fcc26e] {\n    background-color : #EEE;\n    border-color     : #dcdcdc;\n}\n.alert-message-notice[data-v-86fcc26e] {\n    background-color : #FCFCDD;\n    border-color     : #BDBD89;\n}\n.alert-message-notice h4[data-v-86fcc26e] {\n    color : #444;\n}\n/*list styles*/\n.styled-ul[data-v-86fcc26e] {\n    list-style: disc;\n}\n.styled-ul li ul[data-v-86fcc26e] {\n    list-style-type: circle;\n}\n/*breadcrumbs*/\n.breadcrumb1 > li + li[data-v-86fcc26e]:before {\n    content: \"\\BB\";\n}\n.breadcrumb2 > li + li[data-v-86fcc26e]:before {\n    content: \"\\203A\";\n}\n.breadcrumb3 > li + li[data-v-86fcc26e]:before {\n    content: \"\\2013   \";\n}\n/*progress bar*/\n.box-body .progress[data-v-86fcc26e] {\n    margin-top :4px;\n}\n/*card*/\n.card[data-v-86fcc26e]{\n    margin-bottom: 2rem;\n}", ""]);

// exports


/***/ }),

/***/ 1489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(530);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "general_components",
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    data: function data() {
        return {
            items: [{
                text: 'Dashboard',
                href: '#'
            }, {
                text: 'UI Features',
                href: '#'
            }, {
                text: 'General Components',
                active: true
            }]
        };
    },

    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1490:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-layers'></i> Tabbed card" } },
            [
              _c(
                "b-tabs",
                [
                  _c("b-tab", { attrs: { title: "Tab 1", active: "" } }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            When an unknown printer took a galley of type and scrambled it to make a\n                            type specimenbook.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "It has survived not only five centuries, but also the leap into electronic\n                            typesetting, remaining essentially unchanged.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "It was popularised in the 1960s with the release of Letraset sheets\n                            containing Lorem Ipsum passages, and software like Aldus PageMaker.\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Tab 2" } }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            When an unknown printer took a galley of type and scrambled it to make a\n                            type specimenbook.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "It has survived not only five centuries, but also the leap into electronic\n                            typesetting, remaining essentially unchanged.\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "It was popularised in the 1960s with the release of Letraset sheets\n                            containing Lorem Ipsum passages, and software like Aldus PageMaker.\n                        "
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
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-menu'></i> Progress Bars" } },
            [
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _c("p", [_vm._v("Default")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-3",
                    attrs: { value: 25, max: 100 }
                  }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Striped")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-2",
                    attrs: { value: 50, variant: "success", striped: true }
                  }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Active")]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mb-3",
                    attrs: { value: 75, variant: "danger", animated: true }
                  })
                ],
                1
              )
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
            { attrs: { title: "<i class='ti-alert'></i> Alerts" } },
            [
              _c("div", { staticClass: "alert alert-success" }, [
                _c("p", { staticClass: "mt-1 mb-1" }, [
                  _vm._v(
                    "\n                        Well done! You are reading a default Alert message.\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "alert alert-danger" }, [
                _c("strong", [_vm._v("Oh! You can")]),
                _vm._v(" "),
                _c("a", { staticClass: "alert-link", attrs: { href: "#" } }, [
                  _vm._v(
                    "\n                        Redirect to me\n                    "
                  )
                ]),
                _vm._v(" clicking the link on the Alert.\n                ")
              ]),
              _vm._v(" "),
              _c(
                "b-alert",
                { attrs: { show: "", dismissible: "", variant: "primary" } },
                [
                  _c("strong", [_vm._v("Heads up!")]),
                  _vm._v(
                    " You are looking at a Dismissable Alert.\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                { attrs: { show: "", dismissible: "", variant: "warning" } },
                [
                  _vm._v(
                    "\n                    Hey! You are looking at Dismissable Alert with animation.\n                "
                  )
                ]
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
            { attrs: { title: " <i class='ti-notepad'></i> Notes" } },
            [
              _c(
                "div",
                { staticClass: "alert-message alert-message-success" },
                [
                  _c("h4", [
                    _vm._v(
                      "\n                        Alert Message Success\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "fnt_size" }, [
                    _vm._v(
                      "\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                        Ipsum has been the industry's standard dummy text ever since the 1500s.\n                        "
                    ),
                    _c("strong", [
                      _vm._v(
                        "\n                            strong message\n                        "
                      )
                    ]),
                    _vm._v(" .\n                    ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "alert-message alert-message-default" },
                [
                  _c("h4", [
                    _vm._v(
                      "\n                        Alert Message Default\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "fnt_size" }, [
                    _vm._v(
                      "\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                        Ipsum has been the industry's standard dummy text ever since the 1500s.\n                        "
                    ),
                    _c("strong", [
                      _vm._v(
                        "\n                            strong message\n                        "
                      )
                    ]),
                    _vm._v(" .\n                    ")
                  ])
                ]
              )
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
            {
              attrs: { title: "<i class='ti-settings'></i> Typography Heading" }
            },
            [
              _c("div", { staticClass: "box-body text-center" }, [
                _c("h1", [
                  _vm._v(
                    "\n                        h1. Bootstrap heading\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("h2", [
                  _vm._v(
                    "\n                        h2. Bootstrap heading\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(
                    "\n                        h3. Bootstrap heading\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(
                    "\n                        h4. Bootstrap heading\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("h5", [
                  _vm._v(
                    "\n                        h5. Bootstrap heading\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("h6", [
                  _vm._v(
                    "\n                        h6. Bootstrap heading\n                    "
                  )
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
            {
              attrs: {
                title: " <i class='ti-menu'></i> Horizontal Description"
              }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("dl", { staticClass: "row" }, [
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v(
                      "\n                            Description lists\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            A description list is perfect for defining terms.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v("Question")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            Vestibulum id ligula porta felis euismod semper eget lacinia odio.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v(
                      "\n                            Progress bar\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            Etiam porta sem malesuada magna mollis euismod.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v("Answer")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo\n                            sit amet risus.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v(
                      "\n                            Description lists\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            A description list is perfect for defining terms.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v("Question")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            Vestibulum id ligula porta felis euismod semper.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-4 text-right" }, [
                    _vm._v("Answer")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-8" }, [
                    _vm._v(
                      "\n                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo\n                            sit amet risus.\n                        "
                    )
                  ])
                ])
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
        { staticClass: "col-md-4" },
        [
          _c(
            "card",
            {
              attrs: { title: "<i class='ti-view-list-alt'></i> Unstyled List" }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("ul", { staticClass: "list-unstyled" }, [
                  _c("li", [
                    _vm._v(
                      "\n                            Lorem ipsum dolor sit amet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Consectetur adipiscing elit\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Integer molestie lorem at massa\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Facilisis in pretium nisl aliquet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Nulla volutpat aliquam velit\n                            "
                    ),
                    _c("ul", [
                      _c("li", [
                        _vm._v(
                          "\n                                    Phasellus iaculis neque\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Purus sodales ultricies\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Vestibulum laoreet porttitor sem\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Ac tristique libero volutpat at\n                                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Faucibus porta lacus fringilla vel\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Aenean sit amet erat nunc\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Eget porttitor lorem\n                        "
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
        { staticClass: "col-md-4" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-list'></i> Unordered List" } },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("ul", { staticClass: "styled-ul" }, [
                  _c("li", [
                    _vm._v(
                      "\n                            Lorem ipsum dolor sit amet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Consectetur adipiscing elit\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Integer molestie lorem at massa\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Facilisis in pretium nisl aliquet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Nulla volutpat aliquam velit\n                            "
                    ),
                    _c("ul", [
                      _c("li", [
                        _vm._v(
                          "\n                                    Phasellus iaculis neque\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Purus sodales ultricies\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Vestibulum laoreet porttitor sem\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Ac tristique libero volutpat at\n                                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Faucibus porta lacus fringilla vel\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Aenean sit amet erat nunc\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Eget porttitor lorem\n                        "
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
        { staticClass: "col-md-4" },
        [
          _c(
            "card",
            { attrs: { title: " <i class='ti-list-ol'></i> Ordered Lists" } },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("ol", [
                  _c("li", [
                    _vm._v(
                      "\n                            Lorem ipsum dolor sit amet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Consectetur adipiscing elit\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Integer molestie lorem at massa\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Facilisis in pretium nisl aliquet\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Nulla volutpat aliquam velit\n                            "
                    ),
                    _c("ol", [
                      _c("li", [
                        _vm._v(
                          "\n                                    Phasellus iaculis neque\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Purus sodales ultricies\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Vestibulum laoreet porttitor sem\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    Ac tristique libero volutpat at\n                                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Faucibus porta lacus fringilla vel\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Aenean sit amet erat nunc\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\n                            Eget porttitor lorem\n                        "
                    )
                  ])
                ])
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
            {
              attrs: {
                title: "<i class='ti-angle-double-right'></i> Breadcrumbs"
              }
            },
            [
              _c(
                "div",
                { staticClass: "bs-example" },
                [
                  _c("b-breadcrumb", { attrs: { items: _vm.items } }),
                  _vm._v(" "),
                  _c("ul", { staticClass: "breadcrumb breadcrumb1 brdr_mrg" }, [
                    _c("li", { staticClass: "next1" }, [
                      _c("a", { attrs: { href: "#" } }, [_vm._v("Dashboard")])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "next1" }, [
                      _c("a", { attrs: { href: "#" } }, [_vm._v("Charts")])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                            Flot Charts\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "breadcrumb breadcrumb2 brdr_mrg",
                      staticStyle: { "margin-bottom": "20px" }
                    },
                    [
                      _c("li", { staticClass: "next2" }, [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Dashboard")])
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "next2" }, [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Tables")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                            Data Tables\n                        "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "breadcrumb breadcrumb3 brdr_mrg",
                      staticStyle: { "margin-bottom": "15px" }
                    },
                    [
                      _c("li", { staticClass: "next" }, [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Dashboard")])
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "next1" }, [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Forms")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                            Form Elements\n                        "
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6 col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header bg-primary" }, [
            _c("h3", { staticClass: "card-title text-white" }, [
              _vm._v(
                "\n                        Card Primary\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header  bg-success" }, [
            _c("h3", { staticClass: "card-title text-white" }, [
              _vm._v(
                "\n                        Card Success\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header bg-warning" }, [
            _c("h3", { staticClass: "card-title text-white" }, [
              _vm._v(
                "\n                        Card Warning\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header bg-danger" }, [
            _c("h3", { staticClass: "card-title text-white" }, [
              _vm._v(
                "\n                        Card Danger\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header bg-info text-white" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Card Info")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [
              _vm._v(
                "\n                        Card Default\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-86fcc26e", module.exports)
  }
}

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1487)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1489)
/* template */
var __vue_template__ = __webpack_require__(1490)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86fcc26e"
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
Component.options.__file = "resources/components/pages/general_components.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86fcc26e", Component.options)
  } else {
    hotAPI.reload("data-v-86fcc26e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(531)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(533)
/* template */
var __vue_template__ = __webpack_require__(534)
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

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 533:
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

/***/ 534:
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