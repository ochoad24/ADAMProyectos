webpackJsonp([85],{

/***/ 2383:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2384);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("5353e3eb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46d3e86c\",\"scoped\":false,\"hasInlineConfig\":true}!./404.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46d3e86c\",\"scoped\":false,\"hasInlineConfig\":true}!./404.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);", ""]);

// module
exports.push([module.i, "/*404 and 500 pages css*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\n/*404*/\n.error_img img {\n    width: 100%;\n}\n.error_img {\n    margin-top: 10%;\n}\n\n\n/*500*/\n.bg-500 {\n    background-color: #C79D6F;\n}\n.error_msg img {\n    width: 100%;\n}\n@media screen and (max-width: 470px) {\n.error_msg img {\n        margin-top: 7%;\n}\n}\n.seperator {\n    border: 0;\n    height: 1px;\n    margin: 20px 0;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));\n}\n.link-home {\n    border-radius: 30px;\n}\n\n\n/* ===== Preloader =====*/\n.preloader {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 100000;\n    backface-visibility: hidden;\n    background: #ffffff;\n}\n.loader_img {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    background-position: center;\n    margin: -25px 0 0 -25px;\n}\n.container{\n    min-height: 100vh;\n}", ""]);

// exports


/***/ }),

/***/ 2385:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "err404",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 2386:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6 mx-auto col-sm-8 col-sm-offset-2" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("div", { staticClass: "error_img" }, [
            _c("img", {
              attrs: {
                src: __webpack_require__(2387),
                alt: "404 error image"
              }
            })
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "seperator" }),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "btn btn-primary link-home", attrs: { href: "/" } },
            [_vm._v("Go Home")]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-46d3e86c", module.exports)
  }
}

/***/ }),

/***/ 2387:
/***/ (function(module, exports) {

module.exports = "/images/404.gif?62518dc1baaf8959c992559807c35ac3";

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2383)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(2385)
/* template */
var __vue_template__ = __webpack_require__(2386)
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
Component.options.__file = "resources/components/pages/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46d3e86c", Component.options)
  } else {
    hotAPI.reload("data-v-46d3e86c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});