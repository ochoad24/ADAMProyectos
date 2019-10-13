webpackJsonp([145],{

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1485);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("fc4199fc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11f2ea77\",\"scoped\":false,\"hasInlineConfig\":true}!./awesome-bootstrap-checkbox.css", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11f2ea77\",\"scoped\":false,\"hasInlineConfig\":true}!./awesome-bootstrap-checkbox.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.abc-checkbox {\n  cursor: default;\n  padding-left: 4px;\n}\n.abc-checkbox label {\n  cursor: pointer;\n  display: inline;\n  vertical-align: top;\n  position: relative;\n  padding-left: 5px;\n}\n.abc-checkbox label::before {\n  cursor: pointer;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  top: 2px;\n  left: 0;\n  margin-left: -1.25rem;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.abc-checkbox label::after {\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  top: 2px;\n  margin-left: -1.25rem;\n  padding-left: 3px;\n  padding-top: 1px;\n  font-size: 11px;\n  color: #495057;\n}\n.abc-checkbox input[type=\"checkbox\"],\n.abc-checkbox input[type=\"radio\"] {\n  position: static;\n  margin-left: 0;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 1;\n}\n.abc-checkbox input[type=\"checkbox\"]:focus + label::before,\n.abc-checkbox input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.abc-checkbox input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox input[type=\"radio\"]:checked + label::after {\n  font-family: \"FontAwesome\";\n  content: \"\\F00C\";\n}\n.abc-checkbox input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox input[type=\"radio\"]:indeterminate + label::after {\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 3px;\n  background-color: #555555;\n  border-radius: 2px;\n  margin-left: -16.5px;\n  margin-top: 7px;\n}\n.abc-checkbox input[type=\"checkbox\"]:disabled + label,\n.abc-checkbox input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.abc-checkbox input[type=\"checkbox\"]:disabled + label::before,\n.abc-checkbox input[type=\"radio\"]:disabled + label::before {\n  background-color: #e9ecef;\n  cursor: not-allowed;\n}\n.abc-checkbox input[type=\"checkbox\"]:disabled + label::after,\n.abc-checkbox input[type=\"radio\"]:disabled + label::after {\n  cursor: not-allowed;\n}\n.abc-checkbox.abc-checkbox-circle label::before {\n  border-radius: 50%;\n}\n.abc-checkbox.checkbox-inline {\n  margin-top: 0;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-primary input[type=\"radio\"]:checked + label::before {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-primary input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-danger input[type=\"radio\"]:checked + label::before {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-danger input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-info input[type=\"radio\"]:checked + label::before {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-info input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-warning input[type=\"radio\"]:checked + label::before {\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-warning input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-success input[type=\"radio\"]:checked + label::before {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-success input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-primary input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-primary input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-danger input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-danger input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-info input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-info input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-warning input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-warning input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-success input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-success input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-radio {\n  cursor: default;\n  padding-left: 4px;\n}\n.abc-radio label {\n  cursor: pointer;\n  display: inline;\n  vertical-align: top;\n  position: relative;\n  padding-left: 5px;\n}\n.abc-radio label::before {\n  cursor: pointer;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  top: 2px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid #ced4da;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out;\n}\n.abc-radio label::after {\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  content: \" \";\n  width: 11px;\n  height: 11px;\n  left: 3px;\n  top: 5px;\n  margin-left: -20px;\n  border-radius: 50%;\n  background-color: #495057;\n  transform: scale(0, 0);\n  transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n}\n.abc-radio input[type=\"radio\"] {\n  position: static;\n  margin-left: 0;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 1;\n}\n.abc-radio input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.abc-radio input[type=\"radio\"]:checked + label::after {\n  transform: scale(1, 1);\n}\n.abc-radio input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.abc-radio input[type=\"radio\"]:disabled + label::before {\n  cursor: not-allowed;\n}\n.abc-radio input[type=\"radio\"]:disabled + label::after {\n  cursor: not-allowed;\n}\n.abc-radio.radio-inline {\n  margin-top: 0;\n}\n.abc-radio-primary input[type=\"radio\"] + label::after {\n  background-color: #007bff;\n}\n.abc-radio-primary input[type=\"radio\"]:checked + label::before {\n  border-color: #007bff;\n}\n.abc-radio-primary input[type=\"radio\"]:checked + label::after {\n  background-color: #007bff;\n}\n.abc-radio-danger input[type=\"radio\"] + label::after {\n  background-color: #dc3545;\n}\n.abc-radio-danger input[type=\"radio\"]:checked + label::before {\n  border-color: #dc3545;\n}\n.abc-radio-danger input[type=\"radio\"]:checked + label::after {\n  background-color: #dc3545;\n}\n.abc-radio-info input[type=\"radio\"] + label::after {\n  background-color: #17a2b8;\n}\n.abc-radio-info input[type=\"radio\"]:checked + label::before {\n  border-color: #17a2b8;\n}\n.abc-radio-info input[type=\"radio\"]:checked + label::after {\n  background-color: #17a2b8;\n}\n.abc-radio-warning input[type=\"radio\"] + label::after {\n  background-color: #ffc107;\n}\n.abc-radio-warning input[type=\"radio\"]:checked + label::before {\n  border-color: #ffc107;\n}\n.abc-radio-warning input[type=\"radio\"]:checked + label::after {\n  background-color: #ffc107;\n}\n.abc-radio-success input[type=\"radio\"] + label::after {\n  background-color: #28a745;\n}\n.abc-radio-success input[type=\"radio\"]:checked + label::before {\n  border-color: #28a745;\n}\n.abc-radio-success input[type=\"radio\"]:checked + label::after {\n  background-color: #28a745;\n}\nlabel .was-validated .form-check-input:invalid .abc-checkbox:before, label\n.was-validated .form-check-input:invalid .abc-radio:before, label .form-check-input.is-invalid .abc-checkbox:before, label\n.form-check-input.is-invalid .abc-radio:before {\n  border-color: #dc3545;\n}\n", ""]);

// exports


/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1487);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("3e4bee86", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11f2ea77\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./vscroll.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11f2ea77\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./vscroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.radio[data-v-11f2ea77],\n.checkbox[data-v-11f2ea77] {\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_plugins_scroll_vScroll_vue__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_plugins_scroll_vScroll_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "vscroll_demo",
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0__components_plugins_scroll_vScroll_vue___default.a
    },
    data: function data() {
        return {
            bar_color: "#428bca",
            height: "300px",
            bar_width: "10px",
            visible: false
        };
    }
});

/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Bar Color (Any valid css color)")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bar_color,
                  expression: "bar_color"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "color", placeholder: "Any valid css color" },
              domProps: { value: _vm.bar_color },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.bar_color = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Height")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.height,
                  expression: "height"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Height of container" },
              domProps: { value: _vm.height },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.height = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Bar Width")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bar_width,
                  expression: "bar_width"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "width of bar" },
              domProps: { value: _vm.bar_width },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.bar_width = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("label", { attrs: { for: "visible" } }, [
            _vm._v("Always Visible")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "checkbox checkbox-success" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.visible,
                  expression: "visible"
                }
              ],
              staticClass: "checkbox",
              attrs: { type: "checkbox", id: "visible" },
              domProps: {
                checked: Array.isArray(_vm.visible)
                  ? _vm._i(_vm.visible, null) > -1
                  : _vm.visible
              },
              on: {
                change: function($event) {
                  var $$a = _vm.visible,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.visible = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.visible = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.visible = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "visible" } })
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-scroll",
        {
          attrs: {
            height: _vm.height,
            color: _vm.bar_color,
            "max-height": "100%",
            "min-height": "120px",
            "bar-width": _vm.bar_width,
            alwaysvisible: _vm.visible
          }
        },
        [
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("p", [_vm._v("Available props")]),
      _vm._v(" "),
      _c("pre", [
        _vm._v(
          '"Height","min-height","max-height","color","bar-width","alwaysvisible"'
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11f2ea77", module.exports)
  }
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1484)
  __webpack_require__(1486)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1488)
/* template */
var __vue_template__ = __webpack_require__(1489)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11f2ea77"
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
Component.options.__file = "resources/components/pages/vscroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11f2ea77", Component.options)
  } else {
    hotAPI.reload("data-v-11f2ea77", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(676)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(678)
/* template */
var __vue_template__ = __webpack_require__(679)
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
Component.options.__file = "resources/components/plugins/scroll/vScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ba02bfe", Component.options)
  } else {
    hotAPI.reload("data-v-6ba02bfe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(677);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("58ec1348", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ba02bfe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ba02bfe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n.ss-content {\n    height: 100%;\n    width: 100%;\n    padding: 0 32px 0 0;\n    position: relative;\n    right: -18px;\n    overflow: auto;\n    box-sizing: border-box;\n}\n.ss-scroll {\n    position: relative;\n    background: rgba(0, 0, 0, 0.1);\n    width: 9px;\n    border-radius: 4px;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\n    display: none;\n}\n.ss-container:hover .ss-scroll,\n.ss-scroll.ss-grabbed,\n.ss-scroll.visible {\n    opacity: 1;\n}\n.ss-grabbed {\n    -o-user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 678:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        }
    }
});

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ba02bfe", module.exports)
  }
}

/***/ })

});