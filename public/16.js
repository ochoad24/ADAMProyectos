webpackJsonp([16],{

/***/ 2056:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2057);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("4bfe5a5f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5fecd88c\",\"scoped\":false,\"hasInlineConfig\":true}!./imagehover.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5fecd88c\",\"scoped\":false,\"hasInlineConfig\":true}!./imagehover.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2057:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\r\n/*!\r\n * ImageHover.css - http://www.imagehover.io\r\n * Version 1.0\r\n * Author: Ciarán Walsh\r\n\r\n * Made available under a MIT License:\r\n * http://www.opensource.org/licenses/mit-license.php\r\n\r\n */\n[class^='imghvr-'], [class*=' imghvr-'] {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin: 0;\r\n    max-width: 100%;\r\n    background-color: #2266a5;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-transform: translateZ(0);\r\n    -moz-transform: translateZ(0);\r\n    -ms-transform: translateZ(0);\r\n    -o-transform: translateZ(0);\r\n    transform: translateZ(0);\n}\n[class^='imghvr-'] > img, [class*=' imghvr-'] > img {\r\n    vertical-align: top;\r\n    max-width: 100%;\n}\n[class^='imghvr-'] figcaption, [class*=' imghvr-'] figcaption {\r\n    background-color: #135796;\r\n    padding: 30px;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    color: #ffffff;\n}\n[class^='imghvr-'] figcaption h1, [class^='imghvr-'] figcaption h2, [class^='imghvr-'] figcaption h3, [class^='imghvr-'] figcaption h4, [class^='imghvr-'] figcaption h5, [class^='imghvr-'] figcaption h6, [class*=' imghvr-'] figcaption h1, [class*=' imghvr-'] figcaption h2, [class*=' imghvr-'] figcaption h3, [class*=' imghvr-'] figcaption h4, [class*=' imghvr-'] figcaption h5, [class*=' imghvr-'] figcaption h6 {\r\n    color: #ffffff;\n}\n[class^='imghvr-'] a, [class*=' imghvr-'] a {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\n}\n[class^='imghvr-'], [class*=' imghvr-'], [class^='imghvr-']:before,\r\n[class^='imghvr-']:after, [class*=' imghvr-']:before, [class*=' imghvr-']:after,\r\n[class^='imghvr-'] *, [class*=' imghvr-'] *, [class^='imghvr-'] *:before,\r\n[class^='imghvr-'] *:after, [class*=' imghvr-'] *:before, [class*=' imghvr-'] *:after {\r\n    box-sizing: border-box;\r\n    -webkit-transition: all 0.35s ease;\r\n    -moz-transition: all 0.35s ease;\r\n    transition: all 0.35s ease;\n}\r\n\r\n/* imghvr-fade-*\r\n   ----------------------------- */\n[class^='imghvr-fade'] figcaption, [class*=' imghvr-fade'] figcaption {\r\n    opacity: 0;\n}\n[class^='imghvr-fade']:hover > img, [class*=' imghvr-fade']:hover > img {\r\n    opacity: 0;\n}\n[class^='imghvr-fade']:hover figcaption, [class*=' imghvr-fade']:hover figcaption {\r\n    opacity: 1;\n}\n[class^='imghvr-fade']:hover > img, [class^='imghvr-fade']:hover figcaption, [class*=' imghvr-fade']:hover > img, [class*=' imghvr-fade']:hover figcaption {\r\n    -webkit-transform: translate(0, 0);\r\n    -moz-transform: translate(0, 0);\r\n    -ms-transform: translate(0, 0);\r\n    -o-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\r\n\r\n/* imghvr-fade\r\n   ----------------------------- */\r\n/* imghvr-fade-in-up\r\n   ----------------------------- */\n.imghvr-fade-in-up figcaption {\r\n    -webkit-transform: translate(0, 15%);\r\n    -moz-transform: translate(0, 15%);\r\n    -ms-transform: translate(0, 15%);\r\n    -o-transform: translate(0, 15%);\r\n    transform: translate(0, 15%);\n}\r\n\r\n/* imghvr-fade-in-down\r\n   ----------------------------- */\n.imghvr-fade-in-down figcaption {\r\n    -webkit-transform: translate(0, -15%);\r\n    -moz-transform: translate(0, -15%);\r\n    -ms-transform: translate(0, -15%);\r\n    -o-transform: translate(0, -15%);\r\n    transform: translate(0, -15%);\n}\r\n\r\n/* imghvr-fade-in-left\r\n   ----------------------------- */\n.imghvr-fade-in-left figcaption {\r\n    -webkit-transform: translate(-15%, 0);\r\n    -moz-transform: translate(-15%, 0);\r\n    -ms-transform: translate(-15%, 0);\r\n    -o-transform: translate(-15%, 0);\r\n    transform: translate(-15%, 0);\n}\r\n\r\n/* imghvr-fade-in-right\r\n   ----------------------------- */\n.imghvr-fade-in-right figcaption {\r\n    -webkit-transform: translate(15%, 0);\r\n    -moz-transform: translate(15%, 0);\r\n    -ms-transform: translate(15%, 0);\r\n    -o-transform: translate(15%, 0);\r\n    transform: translate(15%, 0);\n}\r\n\r\n/* imghvr-push-*\r\n   ----------------------------- */\n[class^='imghvr-push-']:hover figcaption, [class*=' imghvr-push-']:hover figcaption {\r\n    -webkit-transform: translate(0, 0);\r\n    -moz-transform: translate(0, 0);\r\n    -ms-transform: translate(0, 0);\r\n    -o-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\r\n\r\n/* imghvr-push-up\r\n   ----------------------------- */\n.imghvr-push-up figcaption {\r\n    -webkit-transform: translateY(100%);\r\n    -moz-transform: translateY(100%);\r\n    -ms-transform: translateY(100%);\r\n    -o-transform: translateY(100%);\r\n    transform: translateY(100%);\n}\n.imghvr-push-up:hover > img {\r\n    -webkit-transform: translateY(-100%);\r\n    -moz-transform: translateY(-100%);\r\n    -ms-transform: translateY(-100%);\r\n    -o-transform: translateY(-100%);\r\n    transform: translateY(-100%);\n}\r\n\r\n/* imghvr-push-down\r\n   ----------------------------- */\n.imghvr-push-down figcaption {\r\n    -webkit-transform: translateY(-100%);\r\n    -moz-transform: translateY(-100%);\r\n    -ms-transform: translateY(-100%);\r\n    -o-transform: translateY(-100%);\r\n    transform: translateY(-100%);\n}\n.imghvr-push-down:hover > img {\r\n    -webkit-transform: translateY(100%);\r\n    -moz-transform: translateY(100%);\r\n    -ms-transform: translateY(100%);\r\n    -o-transform: translateY(100%);\r\n    transform: translateY(100%);\n}\r\n\r\n/* imghvr-push-left\r\n   ----------------------------- */\n.imghvr-push-left figcaption {\r\n    -webkit-transform: translateX(100%);\r\n    -moz-transform: translateX(100%);\r\n    -ms-transform: translateX(100%);\r\n    -o-transform: translateX(100%);\r\n    transform: translateX(100%);\n}\n.imghvr-push-left:hover > img {\r\n    -webkit-transform: translateX(-100%);\r\n    -moz-transform: translateX(-100%);\r\n    -ms-transform: translateX(-100%);\r\n    -o-transform: translateX(-100%);\r\n    transform: translateX(-100%);\n}\r\n\r\n/* imghvr-push--right\r\n   ----------------------------- */\n.imghvr-push-right figcaption {\r\n    -webkit-transform: translateX(-100%);\r\n    -moz-transform: translateX(-100%);\r\n    -ms-transform: translateX(-100%);\r\n    -o-transform: translateX(-100%);\r\n    transform: translateX(-100%);\n}\n.imghvr-push-right:hover > img {\r\n    -webkit-transform: translateX(100%);\r\n    -moz-transform: translateX(100%);\r\n    -ms-transform: translateX(100%);\r\n    -o-transform: translateX(100%);\r\n    transform: translateX(100%);\n}\r\n\r\n/* imghvr-slide-*\r\n   ----------------------------- */\n[class^='imghvr-slide-']:hover figcaption, [class*=' imghvr-slide-']:hover figcaption {\r\n    -webkit-transform: translate(0, 0);\r\n    -moz-transform: translate(0, 0);\r\n    -ms-transform: translate(0, 0);\r\n    -o-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\r\n\r\n/* imghvr-slide-up\r\n   ----------------------------- */\n.imghvr-slide-up figcaption {\r\n    -webkit-transform: translateY(100%);\r\n    -moz-transform: translateY(100%);\r\n    -ms-transform: translateY(100%);\r\n    -o-transform: translateY(100%);\r\n    transform: translateY(100%);\n}\r\n\r\n/* imghvr-slide-down\r\n   ----------------------------- */\n.imghvr-slide-down figcaption {\r\n    -webkit-transform: translateY(-100%);\r\n    -moz-transform: translateY(-100%);\r\n    -ms-transform: translateY(-100%);\r\n    -o-transform: translateY(-100%);\r\n    transform: translateY(-100%);\n}\r\n\r\n/* imghvr-slide-left\r\n   ----------------------------- */\n.imghvr-slide-left figcaption {\r\n    -webkit-transform: translateX(100%);\r\n    -moz-transform: translateX(100%);\r\n    -ms-transform: translateX(100%);\r\n    -o-transform: translateX(100%);\r\n    transform: translateX(100%);\n}\r\n\r\n/* imghvr-slide-right\r\n   ----------------------------- */\n.imghvr-slide-right figcaption {\r\n    -webkit-transform: translateX(-100%);\r\n    -moz-transform: translateX(-100%);\r\n    -ms-transform: translateX(-100%);\r\n    -o-transform: translateX(-100%);\r\n    transform: translateX(-100%);\n}\r\n\r\n/* imghvr-slide-top-left\r\n   ----------------------------- */\n.imghvr-slide-top-left figcaption {\r\n    -webkit-transform: translate(-100%, -100%);\r\n    -moz-transform: translate(-100%, -100%);\r\n    -ms-transform: translate(-100%, -100%);\r\n    -o-transform: translate(-100%, -100%);\r\n    transform: translate(-100%, -100%);\n}\r\n\r\n/* imghvr-slide-top-right\r\n   ----------------------------- */\n.imghvr-slide-top-right figcaption {\r\n    -webkit-transform: translate(100%, -100%);\r\n    -moz-transform: translate(100%, -100%);\r\n    -ms-transform: translate(100%, -100%);\r\n    -o-transform: translate(100%, -100%);\r\n    transform: translate(100%, -100%);\n}\r\n\r\n/* imghvr-slide-bottom-left\r\n   ----------------------------- */\n.imghvr-slide-bottom-left figcaption {\r\n    -webkit-transform: translate(-100%, 100%);\r\n    -moz-transform: translate(-100%, 100%);\r\n    -ms-transform: translate(-100%, 100%);\r\n    -o-transform: translate(-100%, 100%);\r\n    transform: translate(-100%, 100%);\n}\r\n\r\n/* imghvr-slide-bottom-right\r\n   ----------------------------- */\n.imghvr-slide-bottom-right figcaption {\r\n    -webkit-transform: translate(100%, 100%);\r\n    -moz-transform: translate(100%, 100%);\r\n    -ms-transform: translate(100%, 100%);\r\n    -o-transform: translate(100%, 100%);\r\n    transform: translate(100%, 100%);\n}\r\n\r\n/* imghvr-reveal-*\r\n   ----------------------------- */\n[class^='imghvr-reveal-']:before, [class*=' imghvr-reveal-']:before {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    content: '';\r\n    background-color: #135796;\n}\n[class^='imghvr-reveal-'] figcaption, [class*=' imghvr-reveal-'] figcaption {\r\n    opacity: 0;\n}\n[class^='imghvr-reveal-']:hover:before, [class*=' imghvr-reveal-']:hover:before {\r\n    -webkit-transform: translate(0, 0);\r\n    -moz-transform: translate(0, 0);\r\n    -ms-transform: translate(0, 0);\r\n    -o-transform: translate(0, 0);\r\n    transform: translate(0, 0);\n}\n[class^='imghvr-reveal-']:hover figcaption, [class*=' imghvr-reveal-']:hover figcaption {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.21s;\r\n    -moz-transition-delay: 0.21s;\r\n    transition-delay: 0.21s;\n}\r\n\r\n/* imghvr-reveal-up\r\n   ----------------------------- */\n.imghvr-reveal-up:before {\r\n    -webkit-transform: translateY(100%);\r\n    -moz-transform: translateY(100%);\r\n    -ms-transform: translateY(100%);\r\n    -o-transform: translateY(100%);\r\n    transform: translateY(100%);\n}\r\n\r\n/* imghvr-reveal-down\r\n   ----------------------------- */\n.imghvr-reveal-down:before {\r\n    -webkit-transform: translateY(-100%);\r\n    -moz-transform: translateY(-100%);\r\n    -ms-transform: translateY(-100%);\r\n    -o-transform: translateY(-100%);\r\n    transform: translateY(-100%);\n}\r\n\r\n/* imghvr-reveal-left\r\n   ----------------------------- */\n.imghvr-reveal-left:before {\r\n    -webkit-transform: translateX(100%);\r\n    -moz-transform: translateX(100%);\r\n    -ms-transform: translateX(100%);\r\n    -o-transform: translateX(100%);\r\n    transform: translateX(100%);\n}\r\n\r\n/* imghvr-reveal-right\r\n   ----------------------------- */\n.imghvr-reveal-right:before {\r\n    -webkit-transform: translateX(-100%);\r\n    -moz-transform: translateX(-100%);\r\n    -ms-transform: translateX(-100%);\r\n    -o-transform: translateX(-100%);\r\n    transform: translateX(-100%);\n}\r\n\r\n/* imghvr-reveal-top-left\r\n   ----------------------------- */\n.imghvr-reveal-top-left:before {\r\n    -webkit-transform: translate(-100%, -100%);\r\n    -moz-transform: translate(-100%, -100%);\r\n    -ms-transform: translate(-100%, -100%);\r\n    -o-transform: translate(-100%, -100%);\r\n    transform: translate(-100%, -100%);\n}\r\n\r\n/* imghvr-reveal-top-right\r\n   ----------------------------- */\n.imghvr-reveal-top-right:before {\r\n    -webkit-transform: translate(100%, -100%);\r\n    -moz-transform: translate(100%, -100%);\r\n    -ms-transform: translate(100%, -100%);\r\n    -o-transform: translate(100%, -100%);\r\n    transform: translate(100%, -100%);\n}\r\n\r\n/* imghvr-reveal-bottom-left\r\n   ----------------------------- */\n.imghvr-reveal-bottom-left:before {\r\n    -webkit-transform: translate(-100%, 100%);\r\n    -moz-transform: translate(-100%, 100%);\r\n    -ms-transform: translate(-100%, 100%);\r\n    -o-transform: translate(-100%, 100%);\r\n    transform: translate(-100%, 100%);\n}\r\n\r\n/* imghvr-reveal-bottom-right\r\n   ----------------------------- */\n.imghvr-reveal-bottom-right:before {\r\n    -webkit-transform: translate(100%, 100%);\r\n    -moz-transform: translate(100%, 100%);\r\n    -ms-transform: translate(100%, 100%);\r\n    -o-transform: translate(100%, 100%);\r\n    transform: translate(100%, 100%);\n}\r\n\r\n/* imghvr-hinge-*\r\n   ----------------------------- */\n[class^='imghvr-hinge-'], [class*=' imghvr-hinge-'] {\r\n    -webkit-perspective: 50em;\r\n    -moz-perspective: 50em;\r\n    perspective: 50em;\n}\n[class^='imghvr-hinge-'] figcaption, [class*=' imghvr-hinge-'] figcaption {\r\n    opacity: 0;\r\n    z-index: 1;\n}\n[class^='imghvr-hinge-']:hover img, [class*=' imghvr-hinge-']:hover img {\r\n    opacity: 0;\n}\n[class^='imghvr-hinge-']:hover figcaption, [class*=' imghvr-hinge-']:hover figcaption {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.21s;\r\n    -moz-transition-delay: 0.21s;\r\n    transition-delay: 0.21s;\n}\r\n\r\n/* imghvr-hinge-up\r\n   ----------------------------- */\n.imghvr-hinge-up img {\r\n    -webkit-transform-origin: 50% 0%;\r\n    -moz-transform-origin: 50% 0%;\r\n    -ms-transform-origin: 50% 0%;\r\n    -o-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\n}\n.imghvr-hinge-up figcaption {\r\n    -webkit-transform: rotateX(90deg);\r\n    -moz-transform: rotateX(90deg);\r\n    -ms-transform: rotateX(90deg);\r\n    -o-transform: rotateX(90deg);\r\n    transform: rotateX(90deg);\r\n    -webkit-transform-origin: 50% 100%;\r\n    -moz-transform-origin: 50% 100%;\r\n    -ms-transform-origin: 50% 100%;\r\n    -o-transform-origin: 50% 100%;\r\n    transform-origin: 50% 100%;\n}\n.imghvr-hinge-up:hover > img {\r\n    -webkit-transform: rotateX(-90deg);\r\n    -moz-transform: rotateX(-90deg);\r\n    -ms-transform: rotateX(-90deg);\r\n    -o-transform: rotateX(-90deg);\r\n    transform: rotateX(-90deg);\n}\n.imghvr-hinge-up:hover figcaption {\r\n    -webkit-transform: rotateX(0);\r\n    -moz-transform: rotateX(0);\r\n    -ms-transform: rotateX(0);\r\n    -o-transform: rotateX(0);\r\n    transform: rotateX(0);\n}\r\n\r\n/* imghvr-hinge-down\r\n   ----------------------------- */\n.imghvr-hinge-down img {\r\n    -webkit-transform-origin: 50% 100%;\r\n    -moz-transform-origin: 50% 100%;\r\n    -ms-transform-origin: 50% 100%;\r\n    -o-transform-origin: 50% 100%;\r\n    transform-origin: 50% 100%;\n}\n.imghvr-hinge-down figcaption {\r\n    -webkit-transform: rotateX(-90deg);\r\n    -moz-transform: rotateX(-90deg);\r\n    -ms-transform: rotateX(-90deg);\r\n    -o-transform: rotateX(-90deg);\r\n    transform: rotateX(-90deg);\r\n    -webkit-transform-origin: 50% -50%;\r\n    -moz-transform-origin: 50% -50%;\r\n    -ms-transform-origin: 50% -50%;\r\n    -o-transform-origin: 50% -50%;\r\n    transform-origin: 50% -50%;\n}\n.imghvr-hinge-down:hover > img {\r\n    -webkit-transform: rotateX(90deg);\r\n    -moz-transform: rotateX(90deg);\r\n    -ms-transform: rotateX(90deg);\r\n    -o-transform: rotateX(90deg);\r\n    transform: rotateX(90deg);\r\n    opacity: 0;\n}\n.imghvr-hinge-down:hover figcaption {\r\n    -webkit-transform: rotateX(0);\r\n    -moz-transform: rotateX(0);\r\n    -ms-transform: rotateX(0);\r\n    -o-transform: rotateX(0);\r\n    transform: rotateX(0);\n}\r\n\r\n/* imghvr-hinge-left\r\n   ----------------------------- */\n.imghvr-hinge-left img {\r\n    -webkit-transform-origin: 0% 50%;\r\n    -moz-transform-origin: 0% 50%;\r\n    -ms-transform-origin: 0% 50%;\r\n    -o-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\n}\n.imghvr-hinge-left figcaption {\r\n    -webkit-transform: rotateY(-90deg);\r\n    -moz-transform: rotateY(-90deg);\r\n    -ms-transform: rotateY(-90deg);\r\n    -o-transform: rotateY(-90deg);\r\n    transform: rotateY(-90deg);\r\n    -webkit-transform-origin: 100% 50%;\r\n    -moz-transform-origin: 100% 50%;\r\n    -ms-transform-origin: 100% 50%;\r\n    -o-transform-origin: 100% 50%;\r\n    transform-origin: 100% 50%;\n}\n.imghvr-hinge-left:hover > img {\r\n    -webkit-transform: rotateY(90deg);\r\n    -moz-transform: rotateY(90deg);\r\n    -ms-transform: rotateY(90deg);\r\n    -o-transform: rotateY(90deg);\r\n    transform: rotateY(90deg);\n}\n.imghvr-hinge-left:hover figcaption {\r\n    -webkit-transform: rotateY(0);\r\n    -moz-transform: rotateY(0);\r\n    -ms-transform: rotateY(0);\r\n    -o-transform: rotateY(0);\r\n    transform: rotateY(0);\n}\r\n\r\n/* imghvr-hinge-right\r\n   ----------------------------- */\n.imghvr-hinge-right img {\r\n    -webkit-transform-origin: 100% 50%;\r\n    -moz-transform-origin: 100% 50%;\r\n    -ms-transform-origin: 100% 50%;\r\n    -o-transform-origin: 100% 50%;\r\n    transform-origin: 100% 50%;\n}\n.imghvr-hinge-right figcaption {\r\n    -webkit-transform: rotateY(90deg);\r\n    -moz-transform: rotateY(90deg);\r\n    -ms-transform: rotateY(90deg);\r\n    -o-transform: rotateY(90deg);\r\n    transform: rotateY(90deg);\r\n    -webkit-transform-origin: 0 50%;\r\n    -moz-transform-origin: 0 50%;\r\n    -ms-transform-origin: 0 50%;\r\n    -o-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\n}\n.imghvr-hinge-right:hover > img {\r\n    -webkit-transform: rotateY(-90deg);\r\n    -moz-transform: rotateY(-90deg);\r\n    -ms-transform: rotateY(-90deg);\r\n    -o-transform: rotateY(-90deg);\r\n    transform: rotateY(-90deg);\n}\n.imghvr-hinge-right:hover figcaption {\r\n    -webkit-transform: rotateY(0);\r\n    -moz-transform: rotateY(0);\r\n    -ms-transform: rotateY(0);\r\n    -o-transform: rotateY(0);\r\n    transform: rotateY(0);\n}\r\n\r\n/* imghvr-flip-*\r\n   ----------------------------- */\n[class^='imghvr-flip-'], [class*=' imghvr-flip-'] {\r\n    -webkit-perspective: 50em;\r\n    -moz-perspective: 50em;\r\n    perspective: 50em;\n}\n[class^='imghvr-flip-'] img, [class*=' imghvr-flip-'] img {\r\n    backface-visibility: hidden;\n}\n[class^='imghvr-flip-'] figcaption, [class*=' imghvr-flip-'] figcaption {\r\n    opacity: 0;\n}\n[class^='imghvr-flip-']:hover > img, [class*=' imghvr-flip-']:hover > img {\r\n    opacity: 0;\n}\n[class^='imghvr-flip-']:hover figcaption, [class*=' imghvr-flip-']:hover figcaption {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.14s;\r\n    -moz-transition-delay: 0.14s;\r\n    transition-delay: 0.14s;\n}\r\n\r\n/* imghvr-flip-horiz\r\n   ----------------------------- */\n.imghvr-flip-horiz figcaption {\r\n    -webkit-transform: rotateX(90deg);\r\n    -moz-transform: rotateX(90deg);\r\n    -ms-transform: rotateX(90deg);\r\n    -o-transform: rotateX(90deg);\r\n    transform: rotateX(90deg);\r\n    -webkit-transform-origin: 0% 50%;\r\n    -moz-transform-origin: 0% 50%;\r\n    -ms-transform-origin: 0% 50%;\r\n    -o-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\n}\n.imghvr-flip-horiz:hover img {\r\n    -webkit-transform: rotateX(-180deg);\r\n    -moz-transform: rotateX(-180deg);\r\n    -ms-transform: rotateX(-180deg);\r\n    -o-transform: rotateX(-180deg);\r\n    transform: rotateX(-180deg);\n}\n.imghvr-flip-horiz:hover figcaption {\r\n    -webkit-transform: rotateX(0deg);\r\n    -moz-transform: rotateX(0deg);\r\n    -ms-transform: rotateX(0deg);\r\n    -o-transform: rotateX(0deg);\r\n    transform: rotateX(0deg);\n}\r\n\r\n/* imghvr-flip-vert\r\n   ----------------------------- */\n.imghvr-flip-vert figcaption {\r\n    -webkit-transform: rotateY(90deg);\r\n    -moz-transform: rotateY(90deg);\r\n    -ms-transform: rotateY(90deg);\r\n    -o-transform: rotateY(90deg);\r\n    transform: rotateY(90deg);\r\n    -webkit-transform-origin: 50% 0%;\r\n    -moz-transform-origin: 50% 0%;\r\n    -ms-transform-origin: 50% 0%;\r\n    -o-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\n}\n.imghvr-flip-vert:hover > img {\r\n    -webkit-transform: rotateY(-180deg);\r\n    -moz-transform: rotateY(-180deg);\r\n    -ms-transform: rotateY(-180deg);\r\n    -o-transform: rotateY(-180deg);\r\n    transform: rotateY(-180deg);\n}\n.imghvr-flip-vert:hover figcaption {\r\n    -webkit-transform: rotateY(0deg);\r\n    -moz-transform: rotateY(0deg);\r\n    -ms-transform: rotateY(0deg);\r\n    -o-transform: rotateY(0deg);\r\n    transform: rotateY(0deg);\n}\r\n\r\n/* imghvr-flip-diag-1\r\n   ----------------------------- */\n.imghvr-flip-diag-1 figcaption {\r\n    -webkit-transform: rotate3d(1, -1, 0, 100deg);\r\n    -moz-transform: rotate3d(1, -1, 0, 100deg);\r\n    -ms-transform: rotate3d(1, -1, 0, 100deg);\r\n    -o-transform: rotate3d(1, -1, 0, 100deg);\r\n    transform: rotate3d(1, -1, 0, 100deg);\n}\n.imghvr-flip-diag-1:hover > img {\r\n    -webkit-transform: rotate3d(-1, 1, 0, 100deg);\r\n    -moz-transform: rotate3d(-1, 1, 0, 100deg);\r\n    -ms-transform: rotate3d(-1, 1, 0, 100deg);\r\n    -o-transform: rotate3d(-1, 1, 0, 100deg);\r\n    transform: rotate3d(-1, 1, 0, 100deg);\n}\n.imghvr-flip-diag-1:hover figcaption {\r\n    -webkit-transform: rotate3d(0, 0, 0, 0deg);\r\n    -moz-transform: rotate3d(0, 0, 0, 0deg);\r\n    -ms-transform: rotate3d(0, 0, 0, 0deg);\r\n    -o-transform: rotate3d(0, 0, 0, 0deg);\r\n    transform: rotate3d(0, 0, 0, 0deg);\n}\r\n\r\n/* imghvr-flip-diag-2\r\n   ----------------------------- */\n.imghvr-flip-diag-2 figcaption {\r\n    -webkit-transform: rotate3d(1, 1, 0, 100deg);\r\n    -moz-transform: rotate3d(1, 1, 0, 100deg);\r\n    -ms-transform: rotate3d(1, 1, 0, 100deg);\r\n    -o-transform: rotate3d(1, 1, 0, 100deg);\r\n    transform: rotate3d(1, 1, 0, 100deg);\n}\n.imghvr-flip-diag-2:hover > img {\r\n    -webkit-transform: rotate3d(-1, -1, 0, 100deg);\r\n    -moz-transform: rotate3d(-1, -1, 0, 100deg);\r\n    -ms-transform: rotate3d(-1, -1, 0, 100deg);\r\n    -o-transform: rotate3d(-1, -1, 0, 100deg);\r\n    transform: rotate3d(-1, -1, 0, 100deg);\n}\n.imghvr-flip-diag-2:hover figcaption {\r\n    -webkit-transform: rotate3d(0, 0, 0, 0deg);\r\n    -moz-transform: rotate3d(0, 0, 0, 0deg);\r\n    -ms-transform: rotate3d(0, 0, 0, 0deg);\r\n    -o-transform: rotate3d(0, 0, 0, 0deg);\r\n    transform: rotate3d(0, 0, 0, 0deg);\n}\r\n\r\n/* imghvr-shutter-out-*\r\n   ----------------------------- */\n[class^='imghvr-shutter-out-']:before, [class*=' imghvr-shutter-out-']:before {\r\n    background: #135796;\r\n    position: absolute;\r\n    content: '';\r\n    -webkit-transition-delay: 0.105s;\r\n    -moz-transition-delay: 0.105s;\r\n    transition-delay: 0.105s;\n}\n[class^='imghvr-shutter-out-'] figcaption, [class*=' imghvr-shutter-out-'] figcaption {\r\n    opacity: 0;\r\n    -webkit-transition-delay: 0s;\r\n    -moz-transition-delay: 0s;\r\n    transition-delay: 0s;\n}\n[class^='imghvr-shutter-out-']:hover:before, [class*=' imghvr-shutter-out-']:hover:before {\r\n    -webkit-transition-delay: 0s;\r\n    -moz-transition-delay: 0s;\r\n    transition-delay: 0s;\n}\n[class^='imghvr-shutter-out-']:hover figcaption, [class*=' imghvr-shutter-out-']:hover figcaption {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.105s;\r\n    -moz-transition-delay: 0.105s;\r\n    transition-delay: 0.105s;\n}\r\n\r\n/* imghvr-shutter-out-horiz\r\n   ----------------------------- */\n.imghvr-shutter-out-horiz:before {\r\n    left: 50%;\r\n    right: 50%;\r\n    top: 0;\r\n    bottom: 0;\n}\n.imghvr-shutter-out-horiz:hover:before {\r\n    left: 0;\r\n    right: 0;\n}\r\n\r\n/* imghvr-shutter-out-vert\r\n   ----------------------------- */\n.imghvr-shutter-out-vert:before {\r\n    top: 50%;\r\n    bottom: 50%;\r\n    left: 0;\r\n    right: 0;\n}\n.imghvr-shutter-out-vert:hover:before {\r\n    top: 0;\r\n    bottom: 0;\n}\r\n\r\n/* imghvr-shutter-out-diag-1\r\n   ----------------------------- */\n.imghvr-shutter-out-diag-1:before {\r\n    top: 50%;\r\n    bottom: 50%;\r\n    left: -35%;\r\n    right: -35%;\r\n    -webkit-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    transform: rotate(45deg);\n}\n.imghvr-shutter-out-diag-1:hover:before {\r\n    top: -35%;\r\n    bottom: -35%;\n}\r\n\r\n/* imghvr-shutter-out-diag-2\r\n   ----------------------------- */\n.imghvr-shutter-out-diag-2:before {\r\n    top: 50%;\r\n    bottom: 50%;\r\n    left: -35%;\r\n    right: -35%;\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg);\r\n    -o-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\n}\n.imghvr-shutter-out-diag-2:hover:before {\r\n    top: -35%;\r\n    bottom: -35%;\n}\r\n\r\n/* imghvr-shutter-in-*\r\n   ----------------------------- */\n[class^='imghvr-shutter-in-']:after, [class^='imghvr-shutter-in-']:before, [class*=' imghvr-shutter-in-']:after, [class*=' imghvr-shutter-in-']:before {\r\n    background: #135796;\r\n    position: absolute;\r\n    content: '';\n}\n[class^='imghvr-shutter-in-']:after, [class*=' imghvr-shutter-in-']:after {\r\n    top: 0;\r\n    left: 0;\n}\n[class^='imghvr-shutter-in-']:before, [class*=' imghvr-shutter-in-']:before {\r\n    right: 0;\r\n    bottom: 0;\n}\n[class^='imghvr-shutter-in-'] figcaption, [class*=' imghvr-shutter-in-'] figcaption {\r\n    opacity: 0;\r\n    z-index: 1;\n}\n[class^='imghvr-shutter-in-']:hover figcaption, [class*=' imghvr-shutter-in-']:hover figcaption {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.21s;\r\n    -moz-transition-delay: 0.21s;\r\n    transition-delay: 0.21s;\n}\r\n\r\n/* imghvr-shutter-in-horiz\r\n   ----------------------------- */\n.imghvr-shutter-in-horiz:after, .imghvr-shutter-in-horiz:before {\r\n    width: 0;\r\n    height: 100%;\n}\n.imghvr-shutter-in-horiz:hover:after, .imghvr-shutter-in-horiz:hover:before {\r\n    width: 50%;\n}\r\n\r\n/* imghvr-shutter-in-vert\r\n   ----------------------------- */\n.imghvr-shutter-in-vert:after, .imghvr-shutter-in-vert:before {\r\n    height: 0;\r\n    width: 100%;\n}\n.imghvr-shutter-in-vert:hover:after, .imghvr-shutter-in-vert:hover:before {\r\n    height: 50%;\n}\r\n\r\n/* imghvr-shutter-in-out-horiz\r\n   ----------------------------- */\n.imghvr-shutter-in-out-horiz:after, .imghvr-shutter-in-out-horiz:before {\r\n    width: 0;\r\n    height: 100%;\r\n    opacity: 0.75;\n}\n.imghvr-shutter-in-out-horiz:hover:after, .imghvr-shutter-in-out-horiz:hover:before {\r\n    width: 100%;\n}\r\n\r\n/* imghvr-shutter-in-out-vert\r\n   ----------------------------- */\n.imghvr-shutter-in-out-vert:after, .imghvr-shutter-in-out-vert:before {\r\n    height: 0;\r\n    width: 100%;\r\n    opacity: 0.75;\n}\n.imghvr-shutter-in-out-vert:hover:after, .imghvr-shutter-in-out-vert:hover:before {\r\n    height: 100%;\n}\r\n\r\n/* imghvr-shutter-in-out-diag-1\r\n   ----------------------------- */\n.imghvr-shutter-in-out-diag-1:after, .imghvr-shutter-in-out-diag-1:before {\r\n    width: 200%;\r\n    height: 200%;\r\n    -webkit-transition: all 0.6s ease;\r\n    -moz-transition: all 0.6s ease;\r\n    transition: all 0.6s ease;\r\n    opacity: 0.75;\n}\n.imghvr-shutter-in-out-diag-1:after {\r\n    -webkit-transform: skew(-45deg) translateX(-150%);\r\n    -moz-transform: skew(-45deg) translateX(-150%);\r\n    -ms-transform: skew(-45deg) translateX(-150%);\r\n    -o-transform: skew(-45deg) translateX(-150%);\r\n    transform: skew(-45deg) translateX(-150%);\n}\n.imghvr-shutter-in-out-diag-1:before {\r\n    -webkit-transform: skew(-45deg) translateX(150%);\r\n    -moz-transform: skew(-45deg) translateX(150%);\r\n    -ms-transform: skew(-45deg) translateX(150%);\r\n    -o-transform: skew(-45deg) translateX(150%);\r\n    transform: skew(-45deg) translateX(150%);\n}\n.imghvr-shutter-in-out-diag-1:hover:after {\r\n    -webkit-transform: skew(-45deg) translateX(-50%);\r\n    -moz-transform: skew(-45deg) translateX(-50%);\r\n    -ms-transform: skew(-45deg) translateX(-50%);\r\n    -o-transform: skew(-45deg) translateX(-50%);\r\n    transform: skew(-45deg) translateX(-50%);\n}\n.imghvr-shutter-in-out-diag-1:hover:before {\r\n    -webkit-transform: skew(-45deg) translateX(50%);\r\n    -moz-transform: skew(-45deg) translateX(50%);\r\n    -ms-transform: skew(-45deg) translateX(50%);\r\n    -o-transform: skew(-45deg) translateX(50%);\r\n    transform: skew(-45deg) translateX(50%);\n}\r\n\r\n/* imghvr-shutter-in-out-diag-2\r\n   ----------------------------- */\n.imghvr-shutter-in-out-diag-2:after, .imghvr-shutter-in-out-diag-2:before {\r\n    width: 200%;\r\n    height: 200%;\r\n    -webkit-transition: all 0.6s ease;\r\n    -moz-transition: all 0.6s ease;\r\n    transition: all 0.6s ease;\r\n    opacity: 0.75;\n}\n.imghvr-shutter-in-out-diag-2:after {\r\n    -webkit-transform: skew(45deg) translateX(-100%);\r\n    -moz-transform: skew(45deg) translateX(-100%);\r\n    -ms-transform: skew(45deg) translateX(-100%);\r\n    -o-transform: skew(45deg) translateX(-100%);\r\n    transform: skew(45deg) translateX(-100%);\n}\n.imghvr-shutter-in-out-diag-2:before {\r\n    -webkit-transform: skew(45deg) translateX(100%);\r\n    -moz-transform: skew(45deg) translateX(100%);\r\n    -ms-transform: skew(45deg) translateX(100%);\r\n    -o-transform: skew(45deg) translateX(100%);\r\n    transform: skew(45deg) translateX(100%);\n}\n.imghvr-shutter-in-out-diag-2:hover:after {\r\n    -webkit-transform: skew(45deg) translateX(0%);\r\n    -moz-transform: skew(45deg) translateX(0%);\r\n    -ms-transform: skew(45deg) translateX(0%);\r\n    -o-transform: skew(45deg) translateX(0%);\r\n    transform: skew(45deg) translateX(0%);\n}\n.imghvr-shutter-in-out-diag-2:hover:before {\r\n    -webkit-transform: skew(45deg) translateX(0%);\r\n    -moz-transform: skew(45deg) translateX(0%);\r\n    -ms-transform: skew(45deg) translateX(0%);\r\n    -o-transform: skew(45deg) translateX(0%);\r\n    transform: skew(45deg) translateX(0%);\n}\r\n\r\n/* imghvr-fold*\r\n   ----------------------------- */\n[class^='imghvr-fold'], [class*=' imghvr-fold'] {\r\n    -webkit-perspective: 50em;\r\n    -moz-perspective: 50em;\r\n    perspective: 50em;\n}\n[class^='imghvr-fold'] img, [class*=' imghvr-fold'] img {\r\n    -webkit-transform-origin: 50% 0%;\r\n    -moz-transform-origin: 50% 0%;\r\n    -ms-transform-origin: 50% 0%;\r\n    -o-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\n}\n[class^='imghvr-fold'] figcaption, [class*=' imghvr-fold'] figcaption {\r\n    z-index: 1;\r\n    opacity: 0;\n}\n[class^='imghvr-fold']:hover > img, [class*=' imghvr-fold']:hover > img {\r\n    opacity: 0;\r\n    -webkit-transition-delay: 0;\r\n    -moz-transition-delay: 0;\r\n    transition-delay: 0;\n}\n[class^='imghvr-fold']:hover figcaption, [class*=' imghvr-fold']:hover figcaption {\r\n    -webkit-transform: rotateX(0) translate3d(0, 0%, 0) scale(1);\r\n    -moz-transform: rotateX(0) translate3d(0, 0%, 0) scale(1);\r\n    -ms-transform: rotateX(0) translate3d(0, 0%, 0) scale(1);\r\n    -o-transform: rotateX(0) translate3d(0, 0%, 0) scale(1);\r\n    transform: rotateX(0) translate3d(0, 0%, 0) scale(1);\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.21s;\r\n    -moz-transition-delay: 0.21s;\r\n    transition-delay: 0.21s;\n}\r\n\r\n/* imghvr-fold-up\r\n   ----------------------------- */\n.imghvr-fold-up > img {\r\n    -webkit-transform-origin: 50% 0%;\r\n    -moz-transform-origin: 50% 0%;\r\n    -ms-transform-origin: 50% 0%;\r\n    -o-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\n}\n.imghvr-fold-up figcaption {\r\n    -webkit-transform: rotateX(-90deg) translate3d(0%, -50%, 0) scale(0.6);\r\n    -moz-transform: rotateX(-90deg) translate3d(0%, -50%, 0) scale(0.6);\r\n    -ms-transform: rotateX(-90deg) translate3d(0%, -50%, 0) scale(0.6);\r\n    -o-transform: rotateX(-90deg) translate3d(0%, -50%, 0) scale(0.6);\r\n    transform: rotateX(-90deg) translate3d(0%, -50%, 0) scale(0.6);\r\n    -webkit-transform-origin: 50% 100%;\r\n    -moz-transform-origin: 50% 100%;\r\n    -ms-transform-origin: 50% 100%;\r\n    -o-transform-origin: 50% 100%;\r\n    transform-origin: 50% 100%;\n}\n.imghvr-fold-up:hover > img {\r\n    -webkit-transform: rotateX(90deg) scale(0.6) translateY(50%);\r\n    -moz-transform: rotateX(90deg) scale(0.6) translateY(50%);\r\n    -ms-transform: rotateX(90deg) scale(0.6) translateY(50%);\r\n    -o-transform: rotateX(90deg) scale(0.6) translateY(50%);\r\n    transform: rotateX(90deg) scale(0.6) translateY(50%);\n}\r\n\r\n/* imghvr-fold-down\r\n   ----------------------------- */\n.imghvr-fold-down > img {\r\n    -webkit-transform-origin: 50% 100%;\r\n    -moz-transform-origin: 50% 100%;\r\n    -ms-transform-origin: 50% 100%;\r\n    -o-transform-origin: 50% 100%;\r\n    transform-origin: 50% 100%;\n}\n.imghvr-fold-down figcaption {\r\n    -webkit-transform: rotateX(90deg) translate3d(0%, 50%, 0) scale(0.6);\r\n    -moz-transform: rotateX(90deg) translate3d(0%, 50%, 0) scale(0.6);\r\n    -ms-transform: rotateX(90deg) translate3d(0%, 50%, 0) scale(0.6);\r\n    -o-transform: rotateX(90deg) translate3d(0%, 50%, 0) scale(0.6);\r\n    transform: rotateX(90deg) translate3d(0%, 50%, 0) scale(0.6);\r\n    -webkit-transform-origin: 50% 0%;\r\n    -moz-transform-origin: 50% 0%;\r\n    -ms-transform-origin: 50% 0%;\r\n    -o-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\n}\n.imghvr-fold-down:hover > img {\r\n    -webkit-transform: rotateX(-90deg) scale(0.6) translateY(-50%);\r\n    -moz-transform: rotateX(-90deg) scale(0.6) translateY(-50%);\r\n    -ms-transform: rotateX(-90deg) scale(0.6) translateY(-50%);\r\n    -o-transform: rotateX(-90deg) scale(0.6) translateY(-50%);\r\n    transform: rotateX(-90deg) scale(0.6) translateY(-50%);\n}\r\n\r\n/* imghvr-fold-left\r\n   ----------------------------- */\n.imghvr-fold-left > img {\r\n    -webkit-transform-origin: 0% 50%;\r\n    -moz-transform-origin: 0% 50%;\r\n    -ms-transform-origin: 0% 50%;\r\n    -o-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\n}\n.imghvr-fold-left figcaption {\r\n    -webkit-transform: rotateY(90deg) translate3d(-50%, 0%, 0) scale(0.6);\r\n    -moz-transform: rotateY(90deg) translate3d(-50%, 0%, 0) scale(0.6);\r\n    -ms-transform: rotateY(90deg) translate3d(-50%, 0%, 0) scale(0.6);\r\n    -o-transform: rotateY(90deg) translate3d(-50%, 0%, 0) scale(0.6);\r\n    transform: rotateY(90deg) translate3d(-50%, 0%, 0) scale(0.6);\r\n    -webkit-transform-origin: 100% 50%;\r\n    -moz-transform-origin: 100% 50%;\r\n    -ms-transform-origin: 100% 50%;\r\n    -o-transform-origin: 100% 50%;\r\n    transform-origin: 100% 50%;\n}\n.imghvr-fold-left:hover > img {\r\n    -webkit-transform: rotateY(-90deg) scale(0.6) translateX(50%);\r\n    -moz-transform: rotateY(-90deg) scale(0.6) translateX(50%);\r\n    -ms-transform: rotateY(-90deg) scale(0.6) translateX(50%);\r\n    -o-transform: rotateY(-90deg) scale(0.6) translateX(50%);\r\n    transform: rotateY(-90deg) scale(0.6) translateX(50%);\n}\r\n\r\n/* imghvr-fold-right\r\n   ----------------------------- */\n.imghvr-fold-right > img {\r\n    -webkit-transform-origin: 100% 50%;\r\n    -moz-transform-origin: 100% 50%;\r\n    -ms-transform-origin: 100% 50%;\r\n    -o-transform-origin: 100% 50%;\r\n    transform-origin: 100% 50%;\n}\n.imghvr-fold-right figcaption {\r\n    -webkit-transform: rotateY(-90deg) translate3d(50%, 0%, 0) scale(0.6);\r\n    -moz-transform: rotateY(-90deg) translate3d(50%, 0%, 0) scale(0.6);\r\n    -ms-transform: rotateY(-90deg) translate3d(50%, 0%, 0) scale(0.6);\r\n    -o-transform: rotateY(-90deg) translate3d(50%, 0%, 0) scale(0.6);\r\n    transform: rotateY(-90deg) translate3d(50%, 0%, 0) scale(0.6);\r\n    -webkit-transform-origin: 0 50%;\r\n    -moz-transform-origin: 0 50%;\r\n    -ms-transform-origin: 0 50%;\r\n    -o-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\n}\n.imghvr-fold-right:hover > img {\r\n    -webkit-transform: rotateY(90deg) scale(0.6) translateX(-50%);\r\n    -moz-transform: rotateY(90deg) scale(0.6) translateX(-50%);\r\n    -ms-transform: rotateY(90deg) scale(0.6) translateX(-50%);\r\n    -o-transform: rotateY(90deg) scale(0.6) translateX(-50%);\r\n    transform: rotateY(90deg) scale(0.6) translateX(-50%);\n}\r\n\r\n/* imghvr-zoom-in\r\n   ----------------------------- */\n.imghvr-zoom-in figcaption {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.5);\r\n    -moz-transform: scale(0.5);\r\n    -ms-transform: scale(0.5);\r\n    -o-transform: scale(0.5);\r\n    transform: scale(0.5);\n}\n.imghvr-zoom-in:hover figcaption {\r\n    -webkit-transform: scale(1);\r\n    -moz-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    -o-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1;\n}\r\n\r\n/* imghvr-zoom-out*\r\n   ----------------------------- */\n[class^='imghvr-zoom-out'] figcaption, [class*=' imghvr-zoom-out'] figcaption {\r\n    -webkit-transform: scale(0.5);\r\n    -moz-transform: scale(0.5);\r\n    -ms-transform: scale(0.5);\r\n    -o-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n    -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50% 50%;\r\n    -ms-transform-origin: 50% 50%;\r\n    -o-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    opacity: 0;\n}\n[class^='imghvr-zoom-out']:hover figcaption, [class^='imghvr-zoom-out'].hover figcaption, [class*=' imghvr-zoom-out']:hover figcaption, [class*=' imghvr-zoom-out'].hover figcaption {\r\n    -webkit-transform: scale(1);\r\n    -moz-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    -o-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.35s;\r\n    -moz-transition-delay: 0.35s;\r\n    transition-delay: 0.35s;\n}\r\n\r\n/* imghvr-zoom-out\r\n   ----------------------------- */\n.imghvr-zoom-out:hover > img {\r\n    -webkit-transform: scale(0.5);\r\n    -moz-transform: scale(0.5);\r\n    -ms-transform: scale(0.5);\r\n    -o-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n    opacity: 0;\n}\r\n\r\n/* imghvr-zoom-out-up\r\n   ----------------------------- */\n.imghvr-zoom-out-up:hover > img, .imghvr-zoom-out-up.hover > img {\r\n    -webkit-animation: imghvr-zoom-out-up 0.4025s linear;\r\n    -moz-animation: imghvr-zoom-out-up 0.4025s linear;\r\n    animation: imghvr-zoom-out-up 0.4025s linear;\r\n    -webkit-animation-iteration-count: 1;\r\n    -moz-animation-iteration-count: 1;\r\n    animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: forwards;\r\n    -moz-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes imghvr-zoom-out-up {\n50% {\r\n        -webkit-transform: scale(0.8) translateY(0%);\r\n        -moz-transform: scale(0.8) translateY(0%);\r\n        -ms-transform: scale(0.8) translateY(0%);\r\n        -o-transform: scale(0.8) translateY(0%);\r\n        transform: scale(0.8) translateY(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateY(-150%);\r\n        -moz-transform: scale(0.8) translateY(-150%);\r\n        -ms-transform: scale(0.8) translateY(-150%);\r\n        -o-transform: scale(0.8) translateY(-150%);\r\n        transform: scale(0.8) translateY(-150%);\r\n        opacity: 0.5;\n}\n}\n@keyframes imghvr-zoom-out-up {\n50% {\r\n        -webkit-transform: scale(0.8) translateY(0%);\r\n        -moz-transform: scale(0.8) translateY(0%);\r\n        -ms-transform: scale(0.8) translateY(0%);\r\n        -o-transform: scale(0.8) translateY(0%);\r\n        transform: scale(0.8) translateY(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateY(-150%);\r\n        -moz-transform: scale(0.8) translateY(-150%);\r\n        -ms-transform: scale(0.8) translateY(-150%);\r\n        -o-transform: scale(0.8) translateY(-150%);\r\n        transform: scale(0.8) translateY(-150%);\r\n        opacity: 0.5;\n}\n}\r\n\r\n/* imghvr-zoom-out-down\r\n   ----------------------------- */\n.imghvr-zoom-out-down:hover > img, .imghvr-zoom-out-down.hover > img {\r\n    -webkit-animation: imghvr-zoom-out-down 0.4025s linear;\r\n    -moz-animation: imghvr-zoom-out-down 0.4025s linear;\r\n    animation: imghvr-zoom-out-down 0.4025s linear;\r\n    -webkit-animation-iteration-count: 1;\r\n    -moz-animation-iteration-count: 1;\r\n    animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: forwards;\r\n    -moz-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes imghvr-zoom-out-down {\n50% {\r\n        -webkit-transform: scale(0.8) translateY(0%);\r\n        -moz-transform: scale(0.8) translateY(0%);\r\n        -ms-transform: scale(0.8) translateY(0%);\r\n        -o-transform: scale(0.8) translateY(0%);\r\n        transform: scale(0.8) translateY(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateY(150%);\r\n        -moz-transform: scale(0.8) translateY(150%);\r\n        -ms-transform: scale(0.8) translateY(150%);\r\n        -o-transform: scale(0.8) translateY(150%);\r\n        transform: scale(0.8) translateY(150%);\r\n        opacity: 0.5;\n}\n}\n@keyframes imghvr-zoom-out-down {\n50% {\r\n        -webkit-transform: scale(0.8) translateY(0%);\r\n        -moz-transform: scale(0.8) translateY(0%);\r\n        -ms-transform: scale(0.8) translateY(0%);\r\n        -o-transform: scale(0.8) translateY(0%);\r\n        transform: scale(0.8) translateY(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateY(150%);\r\n        -moz-transform: scale(0.8) translateY(150%);\r\n        -ms-transform: scale(0.8) translateY(150%);\r\n        -o-transform: scale(0.8) translateY(150%);\r\n        transform: scale(0.8) translateY(150%);\r\n        opacity: 0.5;\n}\n}\r\n\r\n/* imghvr-zoom-out-left\r\n   ----------------------------- */\n.imghvr-zoom-out-left:hover > img, .imghvr-zoom-out-left.hover > img {\r\n    -webkit-animation: imghvr-zoom-out-left 0.4025s linear;\r\n    -moz-animation: imghvr-zoom-out-left 0.4025s linear;\r\n    animation: imghvr-zoom-out-left 0.4025s linear;\r\n    -webkit-animation-iteration-count: 1;\r\n    -moz-animation-iteration-count: 1;\r\n    animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: forwards;\r\n    -moz-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes imghvr-zoom-out-left {\n50% {\r\n        -webkit-transform: scale(0.8) translateX(0%);\r\n        -moz-transform: scale(0.8) translateX(0%);\r\n        -ms-transform: scale(0.8) translateX(0%);\r\n        -o-transform: scale(0.8) translateX(0%);\r\n        transform: scale(0.8) translateX(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateX(-150%);\r\n        -moz-transform: scale(0.8) translateX(-150%);\r\n        -ms-transform: scale(0.8) translateX(-150%);\r\n        -o-transform: scale(0.8) translateX(-150%);\r\n        transform: scale(0.8) translateX(-150%);\r\n        opacity: 0.5;\n}\n}\n@keyframes imghvr-zoom-out-left {\n50% {\r\n        -webkit-transform: scale(0.8) translateX(0%);\r\n        -moz-transform: scale(0.8) translateX(0%);\r\n        -ms-transform: scale(0.8) translateX(0%);\r\n        -o-transform: scale(0.8) translateX(0%);\r\n        transform: scale(0.8) translateX(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateX(-150%);\r\n        -moz-transform: scale(0.8) translateX(-150%);\r\n        -ms-transform: scale(0.8) translateX(-150%);\r\n        -o-transform: scale(0.8) translateX(-150%);\r\n        transform: scale(0.8) translateX(-150%);\r\n        opacity: 0.5;\n}\n}\r\n\r\n/* imghvr-zoom-out-right\r\n   ----------------------------- */\n.imghvr-zoom-out-right:hover > img, .imghvr-zoom-out-right.hover > img {\r\n    -webkit-animation: imghvr-zoom-out-right 0.4025s linear;\r\n    -moz-animation: imghvr-zoom-out-right 0.4025s linear;\r\n    animation: imghvr-zoom-out-right 0.4025s linear;\r\n    -webkit-animation-iteration-count: 1;\r\n    -moz-animation-iteration-count: 1;\r\n    animation-iteration-count: 1;\r\n    -webkit-animation-fill-mode: forwards;\r\n    -moz-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes imghvr-zoom-out-right {\n50% {\r\n        -webkit-transform: scale(0.8) translateX(0%);\r\n        -moz-transform: scale(0.8) translateX(0%);\r\n        -ms-transform: scale(0.8) translateX(0%);\r\n        -o-transform: scale(0.8) translateX(0%);\r\n        transform: scale(0.8) translateX(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateX(150%);\r\n        -moz-transform: scale(0.8) translateX(150%);\r\n        -ms-transform: scale(0.8) translateX(150%);\r\n        -o-transform: scale(0.8) translateX(150%);\r\n        transform: scale(0.8) translateX(150%);\r\n        opacity: 0.5;\n}\n}\n@keyframes imghvr-zoom-out-right {\n50% {\r\n        -webkit-transform: scale(0.8) translateX(0%);\r\n        -moz-transform: scale(0.8) translateX(0%);\r\n        -ms-transform: scale(0.8) translateX(0%);\r\n        -o-transform: scale(0.8) translateX(0%);\r\n        transform: scale(0.8) translateX(0%);\r\n        opacity: 0.5;\n}\n100% {\r\n        -webkit-transform: scale(0.8) translateX(150%);\r\n        -moz-transform: scale(0.8) translateX(150%);\r\n        -ms-transform: scale(0.8) translateX(150%);\r\n        -o-transform: scale(0.8) translateX(150%);\r\n        transform: scale(0.8) translateX(150%);\r\n        opacity: 0.5;\n}\n}\r\n\r\n/* imghvr-zoom-out-flip-horiz\r\n   ----------------------------- */\n.imghvr-zoom-out-flip-horiz {\r\n    -webkit-perspective: 50em;\r\n    -moz-perspective: 50em;\r\n    perspective: 50em;\n}\n.imghvr-zoom-out-flip-horiz figcaption {\r\n    opacity: 0;\r\n    -webkit-transform: rotateX(90deg) translateY(-100%) scale(0.5);\r\n    -moz-transform: rotateX(90deg) translateY(-100%) scale(0.5);\r\n    -ms-transform: rotateX(90deg) translateY(-100%) scale(0.5);\r\n    -o-transform: rotateX(90deg) translateY(-100%) scale(0.5);\r\n    transform: rotateX(90deg) translateY(-100%) scale(0.5);\n}\n.imghvr-zoom-out-flip-horiz:hover > img, .imghvr-zoom-out-flip-horiz.hover > img {\r\n    -webkit-transform: rotateX(-100deg) translateY(50%) scale(0.5);\r\n    -moz-transform: rotateX(-100deg) translateY(50%) scale(0.5);\r\n    -ms-transform: rotateX(-100deg) translateY(50%) scale(0.5);\r\n    -o-transform: rotateX(-100deg) translateY(50%) scale(0.5);\r\n    transform: rotateX(-100deg) translateY(50%) scale(0.5);\r\n    opacity: 0;\r\n    -webkit-transition-delay: 0;\r\n    -moz-transition-delay: 0;\r\n    transition-delay: 0;\n}\n.imghvr-zoom-out-flip-horiz:hover figcaption, .imghvr-zoom-out-flip-horiz.hover figcaption {\r\n    -webkit-transform: rotateX(0) translateY(0%) scale(1);\r\n    -moz-transform: rotateX(0) translateY(0%) scale(1);\r\n    -ms-transform: rotateX(0) translateY(0%) scale(1);\r\n    -o-transform: rotateX(0) translateY(0%) scale(1);\r\n    transform: rotateX(0) translateY(0%) scale(1);\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.35s;\r\n    -moz-transition-delay: 0.35s;\r\n    transition-delay: 0.35s;\n}\r\n\r\n/* imghvr-zoom-out-flip-vert\r\n   ----------------------------- */\n.imghvr-zoom-out-flip-vert {\r\n    -webkit-perspective: 50em;\r\n    -moz-perspective: 50em;\r\n    perspective: 50em;\n}\n.imghvr-zoom-out-flip-vert figcaption {\r\n    opacity: 0;\r\n    -webkit-transform: rotateY(90deg) translate(50%, 0) scale(0.5);\r\n    -moz-transform: rotateY(90deg) translate(50%, 0) scale(0.5);\r\n    -ms-transform: rotateY(90deg) translate(50%, 0) scale(0.5);\r\n    -o-transform: rotateY(90deg) translate(50%, 0) scale(0.5);\r\n    transform: rotateY(90deg) translate(50%, 0) scale(0.5);\n}\n.imghvr-zoom-out-flip-vert:hover > img, .imghvr-zoom-out-flip-vert.hover > img {\r\n    -webkit-transform: rotateY(-100deg) translateX(50%) scale(0.5);\r\n    -moz-transform: rotateY(-100deg) translateX(50%) scale(0.5);\r\n    -ms-transform: rotateY(-100deg) translateX(50%) scale(0.5);\r\n    -o-transform: rotateY(-100deg) translateX(50%) scale(0.5);\r\n    transform: rotateY(-100deg) translateX(50%) scale(0.5);\r\n    opacity: 0;\r\n    -webkit-transition-delay: 0;\r\n    -moz-transition-delay: 0;\r\n    transition-delay: 0;\n}\n.imghvr-zoom-out-flip-vert:hover figcaption, .imghvr-zoom-out-flip-vert.hover figcaption {\r\n    -webkit-transform: rotateY(0) translate(0, 0) scale(1);\r\n    -moz-transform: rotateY(0) translate(0, 0) scale(1);\r\n    -ms-transform: rotateY(0) translate(0, 0) scale(1);\r\n    -o-transform: rotateY(0) translate(0, 0) scale(1);\r\n    transform: rotateY(0) translate(0, 0) scale(1);\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.35s;\r\n    -moz-transition-delay: 0.35s;\r\n    transition-delay: 0.35s;\n}\r\n\r\n/* imghvr-blur\r\n   ----------------------------- */\n.imghvr-blur figcaption {\r\n    opacity: 0;\n}\n.imghvr-blur:hover > img {\r\n    -webkit-filter: blur(30px);\r\n    filter: blur(30px);\r\n    -webkit-transform: scale(1.2);\r\n    -moz-transform: scale(1.2);\r\n    -ms-transform: scale(1.2);\r\n    -o-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    opacity: 0;\n}\n.imghvr-blur:hover figcaption {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.21s;\r\n    -moz-transition-delay: 0.21s;\r\n    transition-delay: 0.21s;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 2058:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2059);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("39a98fa5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5fecd88c\",\"scoped\":false,\"hasInlineConfig\":true}!./img_hover.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5fecd88c\",\"scoped\":false,\"hasInlineConfig\":true}!./img_hover.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2059:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n[class^='imghvr-'],\n[class*=' imghvr-'] {\n    background-color : #66cc99;\n    height           : 200px;\n}\n[class*=' imghvr-'] figcaption,\n[class^=imghvr-] figcaption {\n    background-color : #6699cc;\n    height           : 200px;\n}\n[class*=' imghvr-'] img,\n[class^=imghvr-] img {\n    height : 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 2060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(566);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "image_hover",
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 2061:
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
          _c(
            "card",
            { attrs: { title: "<i class='ti-image'></i> Image Hover" } },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-fade" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(744),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Fade\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-push-up" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(606),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Push-up\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-push-down" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(745),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Push-down\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-slide-right" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(669),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Slide-right\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-slide-left" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(616),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Slide-left\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-reveal-up" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(672),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Reveal-up\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-reveal-left" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(617),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Reveal-left\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-reveal-down" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(645),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Reaveal-down\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-hinge-up" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(746),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Hinge-up\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-hinge-right" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(607),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Hinge-right\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-flip-horiz" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(646),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Flip-horizontal\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-flip-vert" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(747),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Flip-vertical\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-flip-diag-1" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(608),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Flip-diagonal\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-shutter-out-vert" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(669),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Shutter-out-vertical\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-fold-right" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(672),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Fold-right\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-sm-6 col-12 text-center" },
                  [
                    _c("figure", { staticClass: "imghvr-zoom-out-down" }, [
                      _c("img", {
                        staticClass: "img-responsive",
                        attrs: {
                          src: __webpack_require__(616),
                          width: "295",
                          height: "185"
                        }
                      }),
                      _vm._v(" "),
                      _c("figcaption", [
                        _vm._v(
                          "\n                                Zoom out down\n                            "
                        )
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5fecd88c", module.exports)
  }
}

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2056)
  __webpack_require__(2058)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(2060)
/* template */
var __vue_template__ = __webpack_require__(2061)
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
Component.options.__file = "resources/components/pages/image_hover.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fecd88c", Component.options)
  } else {
    hotAPI.reload("data-v-5fecd88c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(567)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(569)
/* template */
var __vue_template__ = __webpack_require__(570)
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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(568);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("d6b775a8", content, false, {});
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

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 569:
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

/***/ 570:
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

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "/images/8.jpg?ea2b6d40598c6861a574cdef28bee95e";

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "/images/29.jpg?dba7e72ffb341c2682464560c98b1788";

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "/images/30.jpg?2002855a1fb468b267975e83697f0eeb";

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "/images/17.jpg?6d3cc3fd9122d4f52d698096733ec37b";

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "/images/20.jpg?07b859bc73b54be32996cc610504505a";

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "/images/24.jpg?9ab5a6f8d08b10ff992c033457ecde05";

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "/images/32.jpg?1a676da167dfc017310a39f20f320476";

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "/images/14.jpg?cce4f8209982954c63a2dd299d1024da";

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "/images/19.jpg?7ab7fd40b414501e98d85ee5bbb607dd";

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "/images/7.jpg?cfa7e806ed911865ffcfaf121c318617";

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "/images/11.jpg?c18e3cce9d29762663b7244b39003334";

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "/images/28.jpg?8eb46f5017f2549bc46564826f7aa008";

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "/images/33.jpg?d10aa242caba201d241185f8a2c74133";

/***/ })

});