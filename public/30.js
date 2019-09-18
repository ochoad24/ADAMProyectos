webpackJsonp([30],{

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1418);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("45664c5d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!./hover-min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!./hover-min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Hover.css (http://ianlunn.github.io/Hover/)\r\n * Version: 2.3.2\r\n * Author: Ian Lunn @IanLunn\r\n * Author URL: http://ianlunn.co.uk/\r\n * Github: https://github.com/IanLunn/Hover\r\n\r\n * Hover.css Copyright Ian Lunn 2017. Generated with Sass.\r\n */\n.hvr-grow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-grow:active,.hvr-grow:focus,.hvr-grow:hover{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n.hvr-shrink{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-shrink:active,.hvr-shrink:focus,.hvr-shrink:hover{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n@-webkit-keyframes hvr-pulse{\n25%{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n75%{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n@keyframes hvr-pulse{\n25%{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n75%{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n.hvr-pulse{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-pulse:active,.hvr-pulse:focus,.hvr-pulse:hover{-webkit-animation-name:hvr-pulse;animation-name:hvr-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-pulse-grow{\nto{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n}\n@keyframes hvr-pulse-grow{\nto{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n}\n.hvr-pulse-grow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-pulse-grow:active,.hvr-pulse-grow:focus,.hvr-pulse-grow:hover{-webkit-animation-name:hvr-pulse-grow;animation-name:hvr-pulse-grow;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-pulse-shrink{\nto{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n@keyframes hvr-pulse-shrink{\nto{-webkit-transform:scale(0.9);transform:scale(0.9)\n}\n}\n.hvr-pulse-shrink{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-pulse-shrink:active,.hvr-pulse-shrink:focus,.hvr-pulse-shrink:hover{-webkit-animation-name:hvr-pulse-shrink;animation-name:hvr-pulse-shrink;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-push{\n50%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n100%{-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes hvr-push{\n50%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n100%{-webkit-transform:scale(1);transform:scale(1)\n}\n}\n.hvr-push{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-push:active,.hvr-push:focus,.hvr-push:hover{-webkit-animation-name:hvr-push;animation-name:hvr-push;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-pop{\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n}\n@keyframes hvr-pop{\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n}\n.hvr-pop{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-pop:active,.hvr-pop:focus,.hvr-pop:hover{-webkit-animation-name:hvr-pop;animation-name:hvr-pop;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-bounce-in{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.5s;transition-duration:.5s\n}\n.hvr-bounce-in:active,.hvr-bounce-in:focus,.hvr-bounce-in:hover{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36);transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36)\n}\n.hvr-bounce-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.5s;transition-duration:.5s\n}\n.hvr-bounce-out:active,.hvr-bounce-out:focus,.hvr-bounce-out:hover{-webkit-transform:scale(0.8);transform:scale(0.8);-webkit-transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36);transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36)\n}\n.hvr-rotate{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-rotate:active,.hvr-rotate:focus,.hvr-rotate:hover{-webkit-transform:rotate(4deg);transform:rotate(4deg)\n}\n.hvr-grow-rotate{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-grow-rotate:active,.hvr-grow-rotate:focus,.hvr-grow-rotate:hover{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg)\n}\n.hvr-float{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-float:active,.hvr-float:focus,.hvr-float:hover{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n.hvr-sink{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-sink:active,.hvr-sink:focus,.hvr-sink:hover{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n@-webkit-keyframes hvr-bob{\n0%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n50%{-webkit-transform:translateY(-4px);transform:translateY(-4px)\n}\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n@keyframes hvr-bob{\n0%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n50%{-webkit-transform:translateY(-4px);transform:translateY(-4px)\n}\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n@-webkit-keyframes hvr-bob-float{\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n@keyframes hvr-bob-float{\n100%{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n}\n.hvr-bob{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-bob:active,.hvr-bob:focus,.hvr-bob:hover{-webkit-animation-name:hvr-bob-float,hvr-bob;animation-name:hvr-bob-float,hvr-bob;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n@-webkit-keyframes hvr-hang{\n0%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n50%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n@keyframes hvr-hang{\n0%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n50%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n@-webkit-keyframes hvr-hang-sink{\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n@keyframes hvr-hang-sink{\n100%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n}\n.hvr-hang{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-hang:active,.hvr-hang:focus,.hvr-hang:hover{-webkit-animation-name:hvr-hang-sink,hvr-hang;animation-name:hvr-hang-sink,hvr-hang;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n.hvr-skew{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-skew:active,.hvr-skew:focus,.hvr-skew:hover{-webkit-transform:skew(-10deg);transform:skew(-10deg)\n}\n.hvr-skew-forward{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transform-origin:0 100%;transform-origin:0 100%\n}\n.hvr-skew-forward:active,.hvr-skew-forward:focus,.hvr-skew-forward:hover{-webkit-transform:skew(-10deg);transform:skew(-10deg)\n}\n.hvr-skew-backward{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transform-origin:0 100%;transform-origin:0 100%\n}\n.hvr-skew-backward:active,.hvr-skew-backward:focus,.hvr-skew-backward:hover{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n@-webkit-keyframes hvr-wobble-vertical{\n16.65%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n33.3%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n@keyframes hvr-wobble-vertical{\n16.65%{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n33.3%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n.hvr-wobble-vertical{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-wobble-vertical:active,.hvr-wobble-vertical:focus,.hvr-wobble-vertical:hover{-webkit-animation-name:hvr-wobble-vertical;animation-name:hvr-wobble-vertical;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-horizontal{\n16.65%{-webkit-transform:translateX(8px);transform:translateX(8px)\n}\n33.3%{-webkit-transform:translateX(-6px);transform:translateX(-6px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n@keyframes hvr-wobble-horizontal{\n16.65%{-webkit-transform:translateX(8px);transform:translateX(8px)\n}\n33.3%{-webkit-transform:translateX(-6px);transform:translateX(-6px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n.hvr-wobble-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-wobble-horizontal:active,.hvr-wobble-horizontal:focus,.hvr-wobble-horizontal:hover{-webkit-animation-name:hvr-wobble-horizontal;animation-name:hvr-wobble-horizontal;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-to-bottom-right{\n16.65%{-webkit-transform:translate(8px,8px);transform:translate(8px,8px)\n}\n33.3%{-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px)\n}\n49.95%{-webkit-transform:translate(4px,4px);transform:translate(4px,4px)\n}\n66.6%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)\n}\n83.25%{-webkit-transform:translate(1px,1px);transform:translate(1px,1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n@keyframes hvr-wobble-to-bottom-right{\n16.65%{-webkit-transform:translate(8px,8px);transform:translate(8px,8px)\n}\n33.3%{-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px)\n}\n49.95%{-webkit-transform:translate(4px,4px);transform:translate(4px,4px)\n}\n66.6%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)\n}\n83.25%{-webkit-transform:translate(1px,1px);transform:translate(1px,1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n.hvr-wobble-to-bottom-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-wobble-to-bottom-right:active,.hvr-wobble-to-bottom-right:focus,.hvr-wobble-to-bottom-right:hover{-webkit-animation-name:hvr-wobble-to-bottom-right;animation-name:hvr-wobble-to-bottom-right;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-to-top-right{\n16.65%{-webkit-transform:translate(8px,-8px);transform:translate(8px,-8px)\n}\n33.3%{-webkit-transform:translate(-6px,6px);transform:translate(-6px,6px)\n}\n49.95%{-webkit-transform:translate(4px,-4px);transform:translate(4px,-4px)\n}\n66.6%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)\n}\n83.25%{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n@keyframes hvr-wobble-to-top-right{\n16.65%{-webkit-transform:translate(8px,-8px);transform:translate(8px,-8px)\n}\n33.3%{-webkit-transform:translate(-6px,6px);transform:translate(-6px,6px)\n}\n49.95%{-webkit-transform:translate(4px,-4px);transform:translate(4px,-4px)\n}\n66.6%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)\n}\n83.25%{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)\n}\n100%{-webkit-transform:translate(0,0);transform:translate(0,0)\n}\n}\n.hvr-wobble-to-top-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-wobble-to-top-right:active,.hvr-wobble-to-top-right:focus,.hvr-wobble-to-top-right:hover{-webkit-animation-name:hvr-wobble-to-top-right;animation-name:hvr-wobble-to-top-right;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-top{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n@keyframes hvr-wobble-top{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n.hvr-wobble-top{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transform-origin:0 100%;transform-origin:0 100%\n}\n.hvr-wobble-top:active,.hvr-wobble-top:focus,.hvr-wobble-top:hover{-webkit-animation-name:hvr-wobble-top;animation-name:hvr-wobble-top;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-bottom{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n@keyframes hvr-wobble-bottom{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n.hvr-wobble-bottom{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transform-origin:100% 0;transform-origin:100% 0\n}\n.hvr-wobble-bottom:active,.hvr-wobble-bottom:focus,.hvr-wobble-bottom:hover{-webkit-animation-name:hvr-wobble-bottom;animation-name:hvr-wobble-bottom;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-wobble-skew{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n@keyframes hvr-wobble-skew{\n16.65%{-webkit-transform:skew(-12deg);transform:skew(-12deg)\n}\n33.3%{-webkit-transform:skew(10deg);transform:skew(10deg)\n}\n49.95%{-webkit-transform:skew(-6deg);transform:skew(-6deg)\n}\n66.6%{-webkit-transform:skew(4deg);transform:skew(4deg)\n}\n83.25%{-webkit-transform:skew(-2deg);transform:skew(-2deg)\n}\n100%{-webkit-transform:skew(0);transform:skew(0)\n}\n}\n.hvr-wobble-skew{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-wobble-skew:active,.hvr-wobble-skew:focus,.hvr-wobble-skew:hover{-webkit-animation-name:hvr-wobble-skew;animation-name:hvr-wobble-skew;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n@keyframes hvr-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n.hvr-buzz{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-buzz:active,.hvr-buzz:focus,.hvr-buzz:hover{-webkit-animation-name:hvr-buzz;animation-name:hvr-buzz;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n@keyframes hvr-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n.hvr-buzz-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-buzz-out:active,.hvr-buzz-out:focus,.hvr-buzz-out:hover{-webkit-animation-name:hvr-buzz-out;animation-name:hvr-buzz-out;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-forward{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-forward:active,.hvr-forward:focus,.hvr-forward:hover{-webkit-transform:translateX(8px);transform:translateX(8px)\n}\n.hvr-backward{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-backward:active,.hvr-backward:focus,.hvr-backward:hover{-webkit-transform:translateX(-8px);transform:translateX(-8px)\n}\n.hvr-fade{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);overflow:hidden;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:color,background-color;transition-property:color,background-color\n}\n.hvr-fade:active,.hvr-fade:focus,.hvr-fade:hover{background-color:#2098D1;color:#fff\n}\n@-webkit-keyframes hvr-back-pulse{\n50%{background-color:rgba(32,152,209,.75)\n}\n}\n@keyframes hvr-back-pulse{\n50%{background-color:rgba(32,152,209,.75)\n}\n}\n.hvr-back-pulse{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);overflow:hidden;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:color,background-color;transition-property:color,background-color\n}\n.hvr-back-pulse:active,.hvr-back-pulse:focus,.hvr-back-pulse:hover{-webkit-animation-name:hvr-back-pulse;animation-name:hvr-back-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;background-color:#2098D1;background-color:#2098d1;color:#fff\n}\n.hvr-sweep-to-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-sweep-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-sweep-to-right:active,.hvr-sweep-to-right:focus,.hvr-sweep-to-right:hover{color:#fff\n}\n.hvr-sweep-to-right:active:before,.hvr-sweep-to-right:focus:before,.hvr-sweep-to-right:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n.hvr-sweep-to-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-sweep-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-sweep-to-left:active,.hvr-sweep-to-left:focus,.hvr-sweep-to-left:hover{color:#fff\n}\n.hvr-sweep-to-left:active:before,.hvr-sweep-to-left:focus:before,.hvr-sweep-to-left:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n.hvr-sweep-to-bottom{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-sweep-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-sweep-to-bottom:active,.hvr-sweep-to-bottom:focus,.hvr-sweep-to-bottom:hover{color:#fff\n}\n.hvr-sweep-to-bottom:active:before,.hvr-sweep-to-bottom:focus:before,.hvr-sweep-to-bottom:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)\n}\n.hvr-sweep-to-top{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-sweep-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-sweep-to-top:active,.hvr-sweep-to-top:focus,.hvr-sweep-to-top:hover{color:#fff\n}\n.hvr-sweep-to-top:active:before,.hvr-sweep-to-top:focus:before,.hvr-sweep-to-top:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)\n}\n.hvr-bounce-to-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.5s;transition-duration:.5s\n}\n.hvr-bounce-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-bounce-to-right:active,.hvr-bounce-to-right:focus,.hvr-bounce-to-right:hover{color:#fff\n}\n.hvr-bounce-to-right:active:before,.hvr-bounce-to-right:focus:before,.hvr-bounce-to-right:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition-timing-function:cubic-bezier(0.52,1.64,.37,.66);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-bounce-to-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.5s;transition-duration:.5s\n}\n.hvr-bounce-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-bounce-to-left:active,.hvr-bounce-to-left:focus,.hvr-bounce-to-left:hover{color:#fff\n}\n.hvr-bounce-to-left:active:before,.hvr-bounce-to-left:focus:before,.hvr-bounce-to-left:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition-timing-function:cubic-bezier(0.52,1.64,.37,.66);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-bounce-to-bottom{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.5s;transition-duration:.5s\n}\n.hvr-bounce-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-bounce-to-bottom:active,.hvr-bounce-to-bottom:focus,.hvr-bounce-to-bottom:hover{color:#fff\n}\n.hvr-bounce-to-bottom:active:before,.hvr-bounce-to-bottom:focus:before,.hvr-bounce-to-bottom:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition-timing-function:cubic-bezier(0.52,1.64,.37,.66);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-bounce-to-top{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.5s;transition-duration:.5s\n}\n.hvr-bounce-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-bounce-to-top:active,.hvr-bounce-to-top:focus,.hvr-bounce-to-top:hover{color:#fff\n}\n.hvr-bounce-to-top:active:before,.hvr-bounce-to-top:focus:before,.hvr-bounce-to-top:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition-timing-function:cubic-bezier(0.52,1.64,.37,.66);transition-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-radial-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden;background:#e1e1e1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-radial-out:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;border-radius:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-radial-out:active,.hvr-radial-out:focus,.hvr-radial-out:hover{color:#fff\n}\n.hvr-radial-out:active:before,.hvr-radial-out:focus:before,.hvr-radial-out:hover:before{-webkit-transform:scale(2);transform:scale(2)\n}\n.hvr-radial-in{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden;background:#2098D1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-radial-in:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#e1e1e1;border-radius:100%;-webkit-transform:scale(2);transform:scale(2);-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-radial-in:active,.hvr-radial-in:focus,.hvr-radial-in:hover{color:#fff\n}\n.hvr-radial-in:active:before,.hvr-radial-in:focus:before,.hvr-radial-in:hover:before{-webkit-transform:scale(0);transform:scale(0)\n}\n.hvr-rectangle-in{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;background:#2098D1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-rectangle-in:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#e1e1e1;-webkit-transform:scale(1);transform:scale(1);-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-rectangle-in:active,.hvr-rectangle-in:focus,.hvr-rectangle-in:hover{color:#fff\n}\n.hvr-rectangle-in:active:before,.hvr-rectangle-in:focus:before,.hvr-rectangle-in:hover:before{-webkit-transform:scale(0);transform:scale(0)\n}\n.hvr-rectangle-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;background:#e1e1e1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-rectangle-out:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098D1;-webkit-transform:scale(0);transform:scale(0);-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-rectangle-out:active,.hvr-rectangle-out:focus,.hvr-rectangle-out:hover{color:#fff\n}\n.hvr-rectangle-out:active:before,.hvr-rectangle-out:focus:before,.hvr-rectangle-out:hover:before{-webkit-transform:scale(1);transform:scale(1)\n}\n.hvr-shutter-in-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;background:#2098D1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-shutter-in-horizontal:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#e1e1e1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-shutter-in-horizontal:active,.hvr-shutter-in-horizontal:focus,.hvr-shutter-in-horizontal:hover{color:#fff\n}\n.hvr-shutter-in-horizontal:active:before,.hvr-shutter-in-horizontal:focus:before,.hvr-shutter-in-horizontal:hover:before{-webkit-transform:scaleX(0);transform:scaleX(0)\n}\n.hvr-shutter-out-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;background:#e1e1e1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-shutter-out-horizontal:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098D1;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-shutter-out-horizontal:active,.hvr-shutter-out-horizontal:focus,.hvr-shutter-out-horizontal:hover{color:#fff\n}\n.hvr-shutter-out-horizontal:active:before,.hvr-shutter-out-horizontal:focus:before,.hvr-shutter-out-horizontal:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n.hvr-shutter-in-vertical{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;background:#2098D1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-shutter-in-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#e1e1e1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-shutter-in-vertical:active,.hvr-shutter-in-vertical:focus,.hvr-shutter-in-vertical:hover{color:#fff\n}\n.hvr-shutter-in-vertical:active:before,.hvr-shutter-in-vertical:focus:before,.hvr-shutter-in-vertical:hover:before{-webkit-transform:scaleY(0);transform:scaleY(0)\n}\n.hvr-shutter-out-vertical{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;background:#e1e1e1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-shutter-out-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098D1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-shutter-out-vertical:active,.hvr-shutter-out-vertical:focus,.hvr-shutter-out-vertical:hover{color:#fff\n}\n.hvr-shutter-out-vertical:active:before,.hvr-shutter-out-vertical:focus:before,.hvr-shutter-out-vertical:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)\n}\n.hvr-border-fade{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:box-shadow;transition-property:box-shadow;box-shadow:inset 0 0 0 4px #e1e1e1,0 0 1px rgba(0,0,0,0)\n}\n.hvr-border-fade:active,.hvr-border-fade:focus,.hvr-border-fade:hover{box-shadow:inset 0 0 0 4px #2098D1,0 0 1px rgba(0,0,0,0)\n}\n.hvr-hollow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background;transition-property:background;box-shadow:inset 0 0 0 4px #e1e1e1,0 0 1px rgba(0,0,0,0)\n}\n.hvr-hollow:active,.hvr-hollow:focus,.hvr-hollow:hover{background:0 0\n}\n.hvr-trim{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-trim:before{content:'';position:absolute;border:#fff solid 4px;top:4px;left:4px;right:4px;bottom:4px;opacity:0;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity;transition-property:opacity\n}\n.hvr-trim:active:before,.hvr-trim:focus:before,.hvr-trim:hover:before{opacity:1\n}\n@-webkit-keyframes hvr-ripple-out{\n100%{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0\n}\n}\n@keyframes hvr-ripple-out{\n100%{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0\n}\n}\n.hvr-ripple-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-ripple-out:before{content:'';position:absolute;border:#e1e1e1 solid 6px;top:0;right:0;bottom:0;left:0;-webkit-animation-duration:1s;animation-duration:1s\n}\n.hvr-ripple-out:active:before,.hvr-ripple-out:focus:before,.hvr-ripple-out:hover:before{-webkit-animation-name:hvr-ripple-out;animation-name:hvr-ripple-out\n}\n@-webkit-keyframes hvr-ripple-in{\n100%{top:0;right:0;bottom:0;left:0;opacity:1\n}\n}\n@keyframes hvr-ripple-in{\n100%{top:0;right:0;bottom:0;left:0;opacity:1\n}\n}\n.hvr-ripple-in{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-ripple-in:before{content:'';position:absolute;border:#e1e1e1 solid 4px;top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0;-webkit-animation-duration:1s;animation-duration:1s\n}\n.hvr-ripple-in:active:before,.hvr-ripple-in:focus:before,.hvr-ripple-in:hover:before{-webkit-animation-name:hvr-ripple-in;animation-name:hvr-ripple-in\n}\n.hvr-outline-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-outline-out:before{content:'';position:absolute;border:#e1e1e1 solid 4px;top:0;right:0;bottom:0;left:0;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:top,right,bottom,left;transition-property:top,right,bottom,left\n}\n.hvr-outline-out:active:before,.hvr-outline-out:focus:before,.hvr-outline-out:hover:before{top:-8px;right:-8px;bottom:-8px;left:-8px\n}\n.hvr-outline-in{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-outline-in:before{pointer-events:none;content:'';position:absolute;border:#e1e1e1 solid 4px;top:-16px;right:-16px;bottom:-16px;left:-16px;opacity:0;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:top,right,bottom,left;transition-property:top,right,bottom,left\n}\n.hvr-outline-in:active:before,.hvr-outline-in:focus:before,.hvr-outline-in:hover:before{top:-8px;right:-8px;bottom:-8px;left:-8px;opacity:1\n}\n.hvr-round-corners{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border-radius;transition-property:border-radius\n}\n.hvr-round-corners:active,.hvr-round-corners:focus,.hvr-round-corners:hover{border-radius:1em\n}\n.hvr-underline-from-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-underline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;bottom:0;background:#2098D1;height:4px;-webkit-transition-property:right;transition-property:right;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-underline-from-left:active:before,.hvr-underline-from-left:focus:before,.hvr-underline-from-left:hover:before{right:0\n}\n.hvr-underline-from-center{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-underline-from-center:before{content:\"\";position:absolute;z-index:-1;left:51%;right:51%;bottom:0;background:#2098D1;height:4px;-webkit-transition-property:left,right;transition-property:left,right;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-underline-from-center:active:before,.hvr-underline-from-center:focus:before,.hvr-underline-from-center:hover:before{left:0;right:0\n}\n.hvr-underline-from-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-underline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;bottom:0;background:#2098D1;height:4px;-webkit-transition-property:left;transition-property:left;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-underline-from-right:active:before,.hvr-underline-from-right:focus:before,.hvr-underline-from-right:hover:before{left:0\n}\n.hvr-overline-from-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-overline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;top:0;background:#2098D1;height:4px;-webkit-transition-property:right;transition-property:right;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-overline-from-left:active:before,.hvr-overline-from-left:focus:before,.hvr-overline-from-left:hover:before{right:0\n}\n.hvr-overline-from-center{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-overline-from-center:before{content:\"\";position:absolute;z-index:-1;left:51%;right:51%;top:0;background:#2098D1;height:4px;-webkit-transition-property:left,right;transition-property:left,right;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-overline-from-center:active:before,.hvr-overline-from-center:focus:before,.hvr-overline-from-center:hover:before{left:0;right:0\n}\n.hvr-overline-from-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-overline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;top:0;background:#2098D1;height:4px;-webkit-transition-property:left;transition-property:left;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-overline-from-right:active:before,.hvr-overline-from-right:focus:before,.hvr-overline-from-right:hover:before{left:0\n}\n.hvr-reveal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;top:0;bottom:0;border-color:#2098D1;border-style:solid;border-width:0;-webkit-transition-property:border-width;transition-property:border-width;-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-reveal:active:before,.hvr-reveal:focus:before,.hvr-reveal:hover:before{-webkit-transform:translateY(0);transform:translateY(0);border-width:4px\n}\n.hvr-underline-reveal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-underline-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;bottom:0;background:#2098D1;height:4px;-webkit-transform:translateY(4px);transform:translateY(4px);-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-underline-reveal:active:before,.hvr-underline-reveal:focus:before,.hvr-underline-reveal:hover:before{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.hvr-overline-reveal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;overflow:hidden\n}\n.hvr-overline-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;top:0;background:#2098D1;height:4px;-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-overline-reveal:active:before,.hvr-overline-reveal:focus:before,.hvr-overline-reveal:hover:before{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.hvr-glow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:box-shadow;transition-property:box-shadow\n}\n.hvr-glow:active,.hvr-glow:focus,.hvr-glow:hover{box-shadow:0 0 8px rgba(0,0,0,.6)\n}\n.hvr-shadow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:box-shadow;transition-property:box-shadow\n}\n.hvr-shadow:active,.hvr-shadow:focus,.hvr-shadow:hover{box-shadow:0 10px 10px -10px rgba(0,0,0,.5)\n}\n.hvr-grow-shadow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:box-shadow,transform;transition-property:box-shadow,transform\n}\n.hvr-grow-shadow:active,.hvr-grow-shadow:focus,.hvr-grow-shadow:hover{box-shadow:0 10px 10px -10px rgba(0,0,0,.5);-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n.hvr-box-shadow-outset{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:box-shadow;transition-property:box-shadow\n}\n.hvr-box-shadow-outset:active,.hvr-box-shadow-outset:focus,.hvr-box-shadow-outset:hover{box-shadow:2px 2px 2px rgba(0,0,0,.6)\n}\n.hvr-box-shadow-inset{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:box-shadow;transition-property:box-shadow;box-shadow:inset 0 0 0 rgba(0,0,0,.6),0 0 1px rgba(0,0,0,0)\n}\n.hvr-box-shadow-inset:active,.hvr-box-shadow-inset:focus,.hvr-box-shadow-inset:hover{box-shadow:inset 2px 2px 2px rgba(0,0,0,.6),0 0 1px rgba(0,0,0,0)\n}\n.hvr-float-shadow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-float-shadow:before{pointer-events:none;position:absolute;z-index:-1;content:'';top:100%;left:5%;height:10px;width:90%;opacity:0;background:-webkit-radial-gradient(center,ellipse,rgba(0,0,0,.35) 0,rgba(0,0,0,0) 80%);background:radial-gradient(ellipse at center,rgba(0,0,0,.35) 0,rgba(0,0,0,0) 80%);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform,opacity;transition-property:transform,opacity\n}\n.hvr-float-shadow:active,.hvr-float-shadow:focus,.hvr-float-shadow:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)\n}\n.hvr-float-shadow:active:before,.hvr-float-shadow:focus:before,.hvr-float-shadow:hover:before{opacity:1;-webkit-transform:translateY(5px);transform:translateY(5px)\n}\n.hvr-shadow-radial{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-shadow-radial:after,.hvr-shadow-radial:before{pointer-events:none;position:absolute;content:'';left:0;width:100%;box-sizing:border-box;height:5px;opacity:0;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity;transition-property:opacity\n}\n.hvr-shadow-radial:before{bottom:100%;background:-webkit-radial-gradient(50% 150%,ellipse,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 80%);background:radial-gradient(ellipse at 50% 150%,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 80%)\n}\n.hvr-shadow-radial:after{top:100%;background:-webkit-radial-gradient(50% -50%,ellipse,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 80%);background:radial-gradient(ellipse at 50% -50%,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 80%)\n}\n.hvr-shadow-radial:active:after,.hvr-shadow-radial:active:before,.hvr-shadow-radial:focus:after,.hvr-shadow-radial:focus:before,.hvr-shadow-radial:hover:after,.hvr-shadow-radial:hover:before{opacity:1\n}\n.hvr-bubble-top{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-bubble-top:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;left:calc(50% - 10px);top:0;border-width:0 10px 10px;border-color:transparent transparent #e1e1e1\n}\n.hvr-bubble-top:active:before,.hvr-bubble-top:focus:before,.hvr-bubble-top:hover:before{-webkit-transform:translateY(-10px);transform:translateY(-10px)\n}\n.hvr-bubble-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-bubble-right:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;top:calc(50% - 10px);right:0;border-width:10px 0 10px 10px;border-color:transparent transparent transparent #e1e1e1\n}\n.hvr-bubble-right:active:before,.hvr-bubble-right:focus:before,.hvr-bubble-right:hover:before{-webkit-transform:translateX(10px);transform:translateX(10px)\n}\n.hvr-bubble-bottom{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-bubble-bottom:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;left:calc(50% - 10px);bottom:0;border-width:10px 10px 0;border-color:#e1e1e1 transparent transparent\n}\n.hvr-bubble-bottom:active:before,.hvr-bubble-bottom:focus:before,.hvr-bubble-bottom:hover:before{-webkit-transform:translateY(10px);transform:translateY(10px)\n}\n.hvr-bubble-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-bubble-left:before{pointer-events:none;position:absolute;z-index:-1;content:'';border-style:solid;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;top:calc(50% - 10px);left:0;border-width:10px 10px 10px 0;border-color:transparent #e1e1e1 transparent transparent\n}\n.hvr-bubble-left:active:before,.hvr-bubble-left:focus:before,.hvr-bubble-left:hover:before{-webkit-transform:translateX(-10px);transform:translateX(-10px)\n}\n.hvr-bubble-float-top{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-top:before{position:absolute;z-index:-1;content:'';left:calc(50% - 10px);top:0;border-style:solid;border-width:0 10px 10px;border-color:transparent transparent #e1e1e1;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-top:active,.hvr-bubble-float-top:focus,.hvr-bubble-float-top:hover{-webkit-transform:translateY(10px);transform:translateY(10px)\n}\n.hvr-bubble-float-top:active:before,.hvr-bubble-float-top:focus:before,.hvr-bubble-float-top:hover:before{-webkit-transform:translateY(-10px);transform:translateY(-10px)\n}\n.hvr-bubble-float-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-right:before{position:absolute;z-index:-1;top:calc(50% - 10px);right:0;content:'';border-style:solid;border-width:10px 0 10px 10px;border-color:transparent transparent transparent #e1e1e1;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-right:active,.hvr-bubble-float-right:focus,.hvr-bubble-float-right:hover{-webkit-transform:translateX(-10px);transform:translateX(-10px)\n}\n.hvr-bubble-float-right:active:before,.hvr-bubble-float-right:focus:before,.hvr-bubble-float-right:hover:before{-webkit-transform:translateX(10px);transform:translateX(10px)\n}\n.hvr-bubble-float-bottom{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-bottom:before{position:absolute;z-index:-1;content:'';left:calc(50% - 10px);bottom:0;border-style:solid;border-width:10px 10px 0;border-color:#e1e1e1 transparent transparent;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-bottom:active,.hvr-bubble-float-bottom:focus,.hvr-bubble-float-bottom:hover{-webkit-transform:translateY(-10px);transform:translateY(-10px)\n}\n.hvr-bubble-float-bottom:active:before,.hvr-bubble-float-bottom:focus:before,.hvr-bubble-float-bottom:hover:before{-webkit-transform:translateY(10px);transform:translateY(10px)\n}\n.hvr-bubble-float-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-left:before{position:absolute;z-index:-1;content:'';top:calc(50% - 10px);left:0;border-style:solid;border-width:10px 10px 10px 0;border-color:transparent #e1e1e1 transparent transparent;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform\n}\n.hvr-bubble-float-left:active,.hvr-bubble-float-left:focus,.hvr-bubble-float-left:hover{-webkit-transform:translateX(10px);transform:translateX(10px)\n}\n.hvr-bubble-float-left:active:before,.hvr-bubble-float-left:focus:before,.hvr-bubble-float-left:hover:before{-webkit-transform:translateX(-10px);transform:translateX(-10px)\n}\n.hvr-icon-back{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.1s;transition-duration:.1s\n}\n.hvr-icon-back .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-back:active .hvr-icon,.hvr-icon-back:focus .hvr-icon,.hvr-icon-back:hover .hvr-icon{-webkit-transform:translateX(-4px);transform:translateX(-4px)\n}\n.hvr-icon-forward{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.1s;transition-duration:.1s\n}\n.hvr-icon-forward .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-forward:active .hvr-icon,.hvr-icon-forward:focus .hvr-icon,.hvr-icon-forward:hover .hvr-icon{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n@-webkit-keyframes hvr-icon-down{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@keyframes hvr-icon-down{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n.hvr-icon-down{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-down .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-down:active .hvr-icon,.hvr-icon-down:focus .hvr-icon,.hvr-icon-down:hover .hvr-icon{-webkit-animation-name:hvr-icon-down;animation-name:hvr-icon-down;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n@-webkit-keyframes hvr-icon-up{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@keyframes hvr-icon-up{\n0%,100%,50%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n25%,75%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n.hvr-icon-up{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-up .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-up:active .hvr-icon,.hvr-icon-up:focus .hvr-icon,.hvr-icon-up:hover .hvr-icon{-webkit-animation-name:hvr-icon-up;animation-name:hvr-icon-up;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n.hvr-icon-spin{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-spin .hvr-icon{-webkit-transition-duration:1s;transition-duration:1s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out\n}\n.hvr-icon-spin:active .hvr-icon,.hvr-icon-spin:focus .hvr-icon,.hvr-icon-spin:hover .hvr-icon{-webkit-transform:rotate(360deg);transform:rotate(360deg)\n}\n@-webkit-keyframes hvr-icon-drop{\n0%{opacity:0\n}\n50%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n100%,51%{opacity:1\n}\n}\n@keyframes hvr-icon-drop{\n0%{opacity:0\n}\n50%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n100%,51%{opacity:1\n}\n}\n.hvr-icon-drop{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-drop .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-drop:active .hvr-icon,.hvr-icon-drop:focus .hvr-icon,.hvr-icon-drop:hover .hvr-icon{opacity:0;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-animation-name:hvr-icon-drop;animation-name:hvr-icon-drop;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.52,1.64,.37,.66);animation-timing-function:cubic-bezier(0.52,1.64,.37,.66)\n}\n.hvr-icon-fade{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-fade .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:color;transition-property:color\n}\n.hvr-icon-fade:active .hvr-icon,.hvr-icon-fade:focus .hvr-icon,.hvr-icon-fade:hover .hvr-icon{color:#0F9E5E\n}\n@-webkit-keyframes hvr-icon-float-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(-1em);transform:translateY(-1em)\n}\n}\n@keyframes hvr-icon-float-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(-1em);transform:translateY(-1em)\n}\n}\n.hvr-icon-float-away{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-float-away .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n.hvr-icon-float-away:active .hvr-icon,.hvr-icon-float-away:focus .hvr-icon,.hvr-icon-float-away:hover .hvr-icon{-webkit-animation-name:hvr-icon-float-away;animation-name:hvr-icon-float-away;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n@-webkit-keyframes hvr-icon-sink-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(1em);transform:translateY(1em)\n}\n}\n@keyframes hvr-icon-sink-away{\n0%{opacity:1\n}\n100%{opacity:0;-webkit-transform:translateY(1em);transform:translateY(1em)\n}\n}\n.hvr-icon-sink-away{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-sink-away .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n.hvr-icon-sink-away:active .hvr-icon,.hvr-icon-sink-away:focus .hvr-icon,.hvr-icon-sink-away:hover .hvr-icon{-webkit-animation-name:hvr-icon-sink-away;animation-name:hvr-icon-sink-away;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n.hvr-icon-grow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-grow .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-grow:active .hvr-icon,.hvr-icon-grow:focus .hvr-icon,.hvr-icon-grow:hover .hvr-icon{-webkit-transform:scale(1.3) translateZ(0);transform:scale(1.3) translateZ(0)\n}\n.hvr-icon-shrink{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-shrink .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-shrink:active .hvr-icon,.hvr-icon-shrink:focus .hvr-icon,.hvr-icon-shrink:hover .hvr-icon{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n@-webkit-keyframes hvr-icon-pulse{\n25%{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n75%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n@keyframes hvr-icon-pulse{\n25%{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n75%{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n.hvr-icon-pulse{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-pulse .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-pulse:active .hvr-icon,.hvr-icon-pulse:focus .hvr-icon,.hvr-icon-pulse:hover .hvr-icon{-webkit-animation-name:hvr-icon-pulse;animation-name:hvr-icon-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-icon-pulse-grow{\nto{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n}\n@keyframes hvr-icon-pulse-grow{\nto{-webkit-transform:scale(1.3);transform:scale(1.3)\n}\n}\n.hvr-icon-pulse-grow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-pulse-grow .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-pulse-grow:active .hvr-icon,.hvr-icon-pulse-grow:focus .hvr-icon,.hvr-icon-pulse-grow:hover .hvr-icon{-webkit-animation-name:hvr-icon-pulse-grow;animation-name:hvr-icon-pulse-grow;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-icon-pulse-shrink{\nto{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n@keyframes hvr-icon-pulse-shrink{\nto{-webkit-transform:scale(0.8);transform:scale(0.8)\n}\n}\n.hvr-icon-pulse-shrink{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0)\n}\n.hvr-icon-pulse-shrink .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-pulse-shrink:active .hvr-icon,.hvr-icon-pulse-shrink:focus .hvr-icon,.hvr-icon-pulse-shrink:hover .hvr-icon{-webkit-animation-name:hvr-icon-pulse-shrink;animation-name:hvr-icon-pulse-shrink;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n}\n@-webkit-keyframes hvr-icon-push{\n50%{-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n}\n@keyframes hvr-icon-push{\n50%{-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n}\n.hvr-icon-push{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-push .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-push:active .hvr-icon,.hvr-icon-push:focus .hvr-icon,.hvr-icon-push:hover .hvr-icon{-webkit-animation-name:hvr-icon-push;animation-name:hvr-icon-push;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-icon-pop{\n50%{-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n}\n@keyframes hvr-icon-pop{\n50%{-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n}\n.hvr-icon-pop{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-pop .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-pop:active .hvr-icon,.hvr-icon-pop:focus .hvr-icon,.hvr-icon-pop:hover .hvr-icon{-webkit-animation-name:hvr-icon-pop;animation-name:hvr-icon-pop;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-icon-bounce{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-bounce .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-bounce:active .hvr-icon,.hvr-icon-bounce:focus .hvr-icon,.hvr-icon-bounce:hover .hvr-icon{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36);transition-timing-function:cubic-bezier(0.47,2.02,.31,-.36)\n}\n.hvr-icon-rotate{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-rotate .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-rotate:active .hvr-icon,.hvr-icon-rotate:focus .hvr-icon,.hvr-icon-rotate:hover .hvr-icon{-webkit-transform:rotate(20deg);transform:rotate(20deg)\n}\n.hvr-icon-grow-rotate{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-grow-rotate .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-grow-rotate:active .hvr-icon,.hvr-icon-grow-rotate:focus .hvr-icon,.hvr-icon-grow-rotate:hover .hvr-icon{-webkit-transform:scale(1.5) rotate(12deg);transform:scale(1.5) rotate(12deg)\n}\n.hvr-icon-float{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-float .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-float:active .hvr-icon,.hvr-icon-float:focus .hvr-icon,.hvr-icon-float:hover .hvr-icon{-webkit-transform:translateY(-4px);transform:translateY(-4px)\n}\n.hvr-icon-sink{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-sink .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.hvr-icon-sink:active .hvr-icon,.hvr-icon-sink:focus .hvr-icon,.hvr-icon-sink:hover .hvr-icon{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n@-webkit-keyframes hvr-icon-bob{\n0%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n50%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@keyframes hvr-icon-bob{\n0%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n50%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@-webkit-keyframes hvr-icon-bob-float{\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n@keyframes hvr-icon-bob-float{\n100%{-webkit-transform:translateY(-6px);transform:translateY(-6px)\n}\n}\n.hvr-icon-bob{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-bob .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-bob:active .hvr-icon,.hvr-icon-bob:focus .hvr-icon,.hvr-icon-bob:hover .hvr-icon{-webkit-animation-name:hvr-icon-bob-float,hvr-icon-bob;animation-name:hvr-icon-bob-float,hvr-icon-bob;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n@-webkit-keyframes hvr-icon-hang{\n0%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n50%{-webkit-transform:translateY(2px);transform:translateY(2px)\n}\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@keyframes hvr-icon-hang{\n0%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n50%{-webkit-transform:translateY(2px);transform:translateY(2px)\n}\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@-webkit-keyframes hvr-icon-hang-sink{\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n@keyframes hvr-icon-hang-sink{\n100%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n}\n.hvr-icon-hang{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-hang .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-hang:active .hvr-icon,.hvr-icon-hang:focus .hvr-icon,.hvr-icon-hang:hover .hvr-icon{-webkit-animation-name:hvr-icon-hang-sink,hvr-icon-hang;animation-name:hvr-icon-hang-sink,hvr-icon-hang;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate\n}\n@-webkit-keyframes hvr-icon-wobble-horizontal{\n16.65%{-webkit-transform:translateX(6px);transform:translateX(6px)\n}\n33.3%{-webkit-transform:translateX(-5px);transform:translateX(-5px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n@keyframes hvr-icon-wobble-horizontal{\n16.65%{-webkit-transform:translateX(6px);transform:translateX(6px)\n}\n33.3%{-webkit-transform:translateX(-5px);transform:translateX(-5px)\n}\n49.95%{-webkit-transform:translateX(4px);transform:translateX(4px)\n}\n66.6%{-webkit-transform:translateX(-2px);transform:translateX(-2px)\n}\n83.25%{-webkit-transform:translateX(1px);transform:translateX(1px)\n}\n100%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n.hvr-icon-wobble-horizontal{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-wobble-horizontal .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-wobble-horizontal:active .hvr-icon,.hvr-icon-wobble-horizontal:focus .hvr-icon,.hvr-icon-wobble-horizontal:hover .hvr-icon{-webkit-animation-name:hvr-icon-wobble-horizontal;animation-name:hvr-icon-wobble-horizontal;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-icon-wobble-vertical{\n16.65%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n33.3%{-webkit-transform:translateY(-5px);transform:translateY(-5px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n@keyframes hvr-icon-wobble-vertical{\n16.65%{-webkit-transform:translateY(6px);transform:translateY(6px)\n}\n33.3%{-webkit-transform:translateY(-5px);transform:translateY(-5px)\n}\n49.95%{-webkit-transform:translateY(4px);transform:translateY(4px)\n}\n66.6%{-webkit-transform:translateY(-2px);transform:translateY(-2px)\n}\n83.25%{-webkit-transform:translateY(1px);transform:translateY(1px)\n}\n100%{-webkit-transform:translateY(0);transform:translateY(0)\n}\n}\n.hvr-icon-wobble-vertical{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-wobble-vertical .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-wobble-vertical:active .hvr-icon,.hvr-icon-wobble-vertical:focus .hvr-icon,.hvr-icon-wobble-vertical:hover .hvr-icon{-webkit-animation-name:hvr-icon-wobble-vertical;animation-name:hvr-icon-wobble-vertical;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n@-webkit-keyframes hvr-icon-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n@keyframes hvr-icon-buzz{\n50%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n100%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n}\n.hvr-icon-buzz{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-buzz .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-buzz:active .hvr-icon,.hvr-icon-buzz:focus .hvr-icon,.hvr-icon-buzz:hover .hvr-icon{-webkit-animation-name:hvr-icon-buzz;animation-name:hvr-icon-buzz;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n@-webkit-keyframes hvr-icon-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n@keyframes hvr-icon-buzz-out{\n10%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n20%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n30%{-webkit-transform:translateX(3px) rotate(2deg);transform:translateX(3px) rotate(2deg)\n}\n40%{-webkit-transform:translateX(-3px) rotate(-2deg);transform:translateX(-3px) rotate(-2deg)\n}\n50%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n60%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n70%{-webkit-transform:translateX(2px) rotate(1deg);transform:translateX(2px) rotate(1deg)\n}\n80%{-webkit-transform:translateX(-2px) rotate(-1deg);transform:translateX(-2px) rotate(-1deg)\n}\n90%{-webkit-transform:translateX(1px) rotate(0);transform:translateX(1px) rotate(0)\n}\n100%{-webkit-transform:translateX(-1px) rotate(0);transform:translateX(-1px) rotate(0)\n}\n}\n.hvr-icon-buzz-out{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:.3s;transition-duration:.3s\n}\n.hvr-icon-buzz-out .hvr-icon{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.hvr-icon-buzz-out:active .hvr-icon,.hvr-icon-buzz-out:focus .hvr-icon,.hvr-icon-buzz-out:hover .hvr-icon{-webkit-animation-name:hvr-icon-buzz-out;animation-name:hvr-icon-buzz-out;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1\n}\n.hvr-curl-top-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-curl-top-left:before{pointer-events:none;position:absolute;content:'';height:0;width:0;top:0;left:0;background:#fff;background:linear-gradient(135deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#ffffff', endColorstr='#000000');z-index:1000;box-shadow:1px 1px 1px rgba(0,0,0,.4);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:width,height;transition-property:width,height\n}\n.hvr-curl-top-left:active:before,.hvr-curl-top-left:focus:before,.hvr-curl-top-left:hover:before{width:25px;height:25px\n}\n.hvr-curl-top-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-curl-top-right:before{pointer-events:none;position:absolute;content:'';height:0;width:0;top:0;right:0;background:#fff;background:linear-gradient(225deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:-1px 1px 1px rgba(0,0,0,.4);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:width,height;transition-property:width,height\n}\n.hvr-curl-top-right:active:before,.hvr-curl-top-right:focus:before,.hvr-curl-top-right:hover:before{width:25px;height:25px\n}\n.hvr-curl-bottom-right{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-curl-bottom-right:before{pointer-events:none;position:absolute;content:'';height:0;width:0;bottom:0;right:0;background:#fff;background:linear-gradient(315deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:-1px -1px 1px rgba(0,0,0,.4);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:width,height;transition-property:width,height\n}\n.hvr-curl-bottom-right:active:before,.hvr-curl-bottom-right:focus:before,.hvr-curl-bottom-right:hover:before{width:25px;height:25px\n}\n.hvr-curl-bottom-left{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);position:relative\n}\n.hvr-curl-bottom-left:before{pointer-events:none;position:absolute;content:'';height:0;width:0;bottom:0;left:0;background:#fff;background:linear-gradient(45deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:1px -1px 1px rgba(0,0,0,.4);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:width,height;transition-property:width,height\n}\n.hvr-curl-bottom-left:active:before,.hvr-curl-bottom-left:focus:before,.hvr-curl-bottom-left:hover:before{width:25px;height:25px\n}", ""]);

// exports


/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1420);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("c9ed49ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./buttons.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*\n* $ubtn prefix (reserved)\n*\n* This prefix stands for Unicorn Button - ubtn\n* We provide a prefix to the Sass Variables to\n* prevent namespace collisions that could occur if\n* you import buttons as part of your Sass build process.\n* We kindly ask you not to use the prefix $ubtn in your project\n* in order to avoid possilbe name conflicts. Thanks!\n*/\n/*\n* Button Namespace (ex .button or .btn)\n*\n*/\n/*\n* Button Defaults\n*\n* Some default settings that are used throughout the button library.\n* Changes to these settings will be picked up by all of the other modules.\n* The colors used here are the default colors for the base button (gray).\n* The font size and height are used to set the base size for the buttons.\n* The size values will be used to calculate the larger and smaller button sizes.\n*/\n/*\n* Button Colors\n*\n* $ubtn-colors is used to generate the different button colors.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, background, color)\n* The class is generated using the name: (ex .button-primary)\n*/\n/*\n* Button Shapes\n*\n* $ubtn-shapes is used to generate the different button shapes.\n* Edit or add shapes to the list below and recompile.\n* Each block contains the (name, border-radius).\n* The class is generated using the name: (ex .button-square).\n*/\n/*\n* Button Sizes\n*\n* $ubtn-sizes is used to generate the different button sizes.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, size multiplier).\n* The class is generated using the name: (ex .button-giant).\n*/\n/*! @license\n*\n* Buttons\n* Copyright 2012-2014 Alex Wolfe and Rob Levin\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\");\n* you may not use this file except in compliance with the License.\n* You may obtain a copy of the License at\n*\n*        http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software\n* distributed under the License is distributed on an \"AS IS\" BASIS,\n* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n* See the License for the specific language governing permissions and\n* limitations under the License.\n*/\n/*\n* Compass (optional)\n*\n* We recommend the use of autoprefixer instead of Compass\n* when using buttons. However, buttons does support Compass.\n* simply change $ubtn-use-compass to true and uncomment the\n* @import 'compass' code below to use Compass.\n*/\n/*\n* Required Files\n*\n* These files include the variables and options\n* and base css styles that are required to generate buttons.\n*/\n/*\n* $ubtn prefix (reserved)\n*\n* This prefix stands for Unicorn Button - ubtn\n* We provide a prefix to the Sass Variables to\n* prevent namespace collisions that could occur if\n* you import buttons as part of your Sass build process.\n* We kindly ask you not to use the prefix $ubtn in your project\n* in order to avoid possilbe name conflicts. Thanks!\n*/\n/*\n* Button Namespace (ex .button or .btn)\n*\n*/\n/*\n* Button Defaults\n*\n* Some default settings that are used throughout the button library.\n* Changes to these settings will be picked up by all of the other modules.\n* The colors used here are the default colors for the base button (gray).\n* The font size and height are used to set the base size for the buttons.\n* The size values will be used to calculate the larger and smaller button sizes.\n*/\n/*\n* Button Colors\n*\n* $ubtn-colors is used to generate the different button colors.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, background, color)\n* The class is generated using the name: (ex .button-primary)\n*/\n/*\n* Button Shapes\n*\n* $ubtn-shapes is used to generate the different button shapes.\n* Edit or add shapes to the list below and recompile.\n* Each block contains the (name, border-radius).\n* The class is generated using the name: (ex .button-square).\n*/\n/*\n* Button Sizes\n*\n* $ubtn-sizes is used to generate the different button sizes.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, size multiplier).\n* The class is generated using the name: (ex .button-giant).\n*/\n/*\n* Color Mixin\n*\n* Iterates through the list of colors and creates\n*\n*/\n/*\n* No Animation\n*\n* Sets animation property to none\n*/\n/*\n* Clearfix\n*\n* Clears floats inside the container\n*/\n/*\n* Base Button Style\n*\n* The default values for the .button class\n*/\n.button {\n  color: #666;\n  background-color: #DCDCDC;\n  border-color: #DCDCDC;\n  font-weight: regular;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif, verdana;\n  text-decoration: none;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  padding: 0 40px;\n  margin: 0;\n  display: inline-block;\n  appearance: none;\n  cursor: pointer;\n  border: none;\n  box-sizing: border-box;\n  transition-property: all;\n  transition-duration: .3s;\n  /*\n  * Disabled State\n  *\n  * The disabled state uses the class .disabled, is-disabled,\n  * and the form attribute disabled=\"disabled\".\n  * The use of !important is only added because this is a state\n  * that must be applied to all buttons when in a disabled state.\n  */\n}\n.button:visited {\n    color: #666;\n}\n.button:hover, .button:focus {\n    background-color: #e4e4e4;\n    text-decoration: none;\n    outline: none;\n}\n.button:active, .button.active, .button.is-active {\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);\n    text-decoration: none;\n    background-color: gainsboro;\n    border-color: #bdbdbd;\n    color: #c3c3c3;\n    transition-duration: 0s;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.button.disabled, .button.is-disabled, .button:disabled {\n    top: 0 !important;\n    background: #EEE !important;\n    border: 1px solid #DDD !important;\n    text-shadow: 0 1px 1px white !important;\n    color: #CCC !important;\n    cursor: default !important;\n    appearance: none !important;\n    box-shadow: none !important;\n    opacity: .8 !important;\n}\n\n/*\n* Base Button Tyography\n*\n*/\n.button-uppercase {\n  text-transform: uppercase;\n}\n.button-lowercase {\n  text-transform: lowercase;\n}\n.button-capitalize {\n  text-transform: capitalize;\n}\n.button-small-caps {\n  font-variant: small-caps;\n}\n.button-icon-txt-large {\n  font-size: 36px !important;\n}\n\n/*\n* Base padding\n*\n*/\n.button-width-small {\n  padding: 0 10px !important;\n}\n\n/*\n* Base Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-primary,\n.button-primary-flat {\n  background-color: #4080bf;\n  border-color: #4080bf;\n  color: #FFF;\n}\n.button-primary:visited,\n  .button-primary-flat:visited {\n    color: #FFF;\n}\n.button-primary:hover, .button-primary:focus,\n  .button-primary-flat:hover,\n  .button-primary-flat:focus {\n    background-color: #6699cc;\n    border-color: #6699cc;\n    color: #FFF;\n}\n.button-primary:active, .button-primary.active, .button-primary.is-active,\n  .button-primary-flat:active,\n  .button-primary-flat.active,\n  .button-primary-flat.is-active {\n    background-color: #4d80b2;\n    border-color: #4d80b2;\n    color: #336699;\n}\n.button-plain,\n.button-plain-flat {\n  background-color: #FFF;\n  border-color: #FFF;\n  color: #1B9AF7;\n}\n.button-plain:visited,\n  .button-plain-flat:visited {\n    color: #1B9AF7;\n}\n.button-plain:hover, .button-plain:focus,\n  .button-plain-flat:hover,\n  .button-plain-flat:focus {\n    background-color: white;\n    border-color: white;\n    color: #1B9AF7;\n}\n.button-plain:active, .button-plain.active, .button-plain.is-active,\n  .button-plain-flat:active,\n  .button-plain-flat.active,\n  .button-plain-flat.is-active {\n    background-color: white;\n    border-color: white;\n    color: #e6e6e6;\n}\n.button-inverse,\n.button-inverse-flat {\n  background-color: #222;\n  border-color: #222;\n  color: #EEE;\n}\n.button-inverse:visited,\n  .button-inverse-flat:visited {\n    color: #EEE;\n}\n.button-inverse:hover, .button-inverse:focus,\n  .button-inverse-flat:hover,\n  .button-inverse-flat:focus {\n    background-color: #3c3c3c;\n    border-color: #3c3c3c;\n    color: #EEE;\n}\n.button-inverse:active, .button-inverse.active, .button-inverse.is-active,\n  .button-inverse-flat:active,\n  .button-inverse-flat.active,\n  .button-inverse-flat.is-active {\n    background-color: #222222;\n    border-color: #222222;\n    color: #090909;\n}\n.button-action,\n.button-action-flat {\n  background-color: #4FC1E9;\n  border-color: #4FC1E9;\n  color: #FFF;\n}\n.button-action:visited,\n  .button-action-flat:visited {\n    color: #FFF;\n}\n.button-action:hover, .button-action:focus,\n  .button-action-flat:hover,\n  .button-action-flat:focus {\n    background-color: #7cd1ef;\n    border-color: #7cd1ef;\n    color: #FFF;\n}\n.button-action:active, .button-action.active, .button-action.is-active,\n  .button-action-flat:active,\n  .button-action-flat.active,\n  .button-action-flat.is-active {\n    background-color: #59bcdf;\n    border-color: #59bcdf;\n    color: #22b1e3;\n}\n.button-highlight,\n.button-highlight-flat {\n  background-color: #FFB65F;\n  border-color: #FFB65F;\n  color: #FFF;\n}\n.button-highlight:visited,\n  .button-highlight-flat:visited {\n    color: #FFF;\n}\n.button-highlight:hover, .button-highlight:focus,\n  .button-highlight-flat:hover,\n  .button-highlight-flat:focus {\n    background-color: #ffcd92;\n    border-color: #ffcd92;\n    color: #FFF;\n}\n.button-highlight:active, .button-highlight.active, .button-highlight.is-active,\n  .button-highlight-flat:active,\n  .button-highlight-flat.active,\n  .button-highlight-flat.is-active {\n    background-color: #f7b567;\n    border-color: #f7b567;\n    color: #ff9f2c;\n}\n.button-caution,\n.button-caution-flat {\n  background-color: #FB8678;\n  border-color: #FB8678;\n  color: #FFF;\n}\n.button-caution:visited,\n  .button-caution-flat:visited {\n    color: #FFF;\n}\n.button-caution:hover, .button-caution:focus,\n  .button-caution-flat:hover,\n  .button-caution-flat:focus {\n    background-color: #fcb2aa;\n    border-color: #fcb2aa;\n    color: #FFF;\n}\n.button-caution:active, .button-caution.active, .button-caution.is-active,\n  .button-caution-flat:active,\n  .button-caution-flat.active,\n  .button-caution-flat.is-active {\n    background-color: #f48b7f;\n    border-color: #f48b7f;\n    color: #fa5a46;\n}\n.button-royal,\n.button-royal-flat {\n  background-color: #22D69D;\n  border-color: #22D69D;\n  color: #FFF;\n}\n.button-royal:visited,\n  .button-royal-flat:visited {\n    color: #FFF;\n}\n.button-royal:hover, .button-royal:focus,\n  .button-royal-flat:hover,\n  .button-royal-flat:focus {\n    background-color: #49e2b2;\n    border-color: #49e2b2;\n    color: #FFF;\n}\n.button-royal:active, .button-royal.active, .button-royal.is-active,\n  .button-royal-flat:active,\n  .button-royal-flat.active,\n  .button-royal-flat.is-active {\n    background-color: #2eca98;\n    border-color: #2eca98;\n    color: #1baa7d;\n}\n\n/*\n* Base Layout Styles\n*\n* Very Miminal Layout Styles\n*/\n.button-block,\n.button-stacked {\n  display: block;\n  width: 100%;\n}\n\n/*\n* Button Types (optional)\n*\n* All of the files below represent the various button\n* types (including shapes & sizes). None of these files\n* are required. Simple remove the uneeded type below and\n* the button type will be excluded from the final build\n*/\n/*\n* Button Shapes\n*\n* This file creates the various button shapes\n* (ex. Circle, Rounded, Pill)\n*/\n.button-square {\n  border-radius: 0;\n}\n.button-box {\n  border-radius: 10px;\n}\n.button-rounded {\n  border-radius: 4px;\n}\n.button-pill {\n  border-radius: 200px;\n}\n.button-circle {\n  border-radius: 100%;\n}\n\n/*\n* Size Adjustment for equal height & widht buttons\n*\n* Remove padding and set a fixed width.\n*/\n.button-circle,\n.button-box,\n.button-square {\n  padding: 0 !important;\n  width: 40px;\n}\n.button-circle.button-giant,\n  .button-box.button-giant,\n  .button-square.button-giant {\n    width: 70px;\n}\n.button-circle.button-jumbo,\n  .button-box.button-jumbo,\n  .button-square.button-jumbo {\n    width: 60px;\n}\n.button-circle.button-large,\n  .button-box.button-large,\n  .button-square.button-large {\n    width: 50px;\n}\n.button-circle.button-normal,\n  .button-box.button-normal,\n  .button-square.button-normal {\n    width: 40px;\n}\n.button-circle.button-small,\n  .button-box.button-small,\n  .button-square.button-small {\n    width: 30px;\n}\n.button-circle.button-tiny,\n  .button-box.button-tiny,\n  .button-square.button-tiny {\n    width: 24px;\n}\n\n/*\n* Border Buttons\n*\n* These buttons have no fill they only have a\n* border to define their hit target.\n*/\n.button-border, .button-border-thin, .button-border-thick {\n  background: none;\n  border-width: 2px;\n  border-style: solid;\n  line-height: 36px;\n}\n.button-border:hover, .button-border-thin:hover, .button-border-thick:hover {\n    background-color: rgba(246, 246, 246, 0.9);\n}\n.button-border:active, .button-border-thin:active, .button-border-thick:active, .button-border.active, .active.button-border-thin, .active.button-border-thick, .button-border.is-active, .is-active.button-border-thin, .is-active.button-border-thick {\n    box-shadow: none;\n    text-shadow: none;\n    transition-property: all;\n    transition-duration: .3s;\n}\n\n/*\n* Border Optional Sizes\n*\n* A slight variation in border thickness\n*/\n.button-border-thin {\n  border-width: 1px;\n}\n.button-border-thick {\n  border-width: 3px;\n}\n\n/*\n* Border Button Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-border, .button-border-thin, .button-border-thick,\n.button-border-thin,\n.button-border-thick {\n  /*\n  * Border Button Size Adjustment\n  *\n  * The line-height must be adjusted to compinsate for\n  * the width of the border.\n  */\n}\n.button-border.button-primary, .button-primary.button-border-thin, .button-primary.button-border-thick,\n  .button-border-thin.button-primary,\n  .button-border-thick.button-primary {\n    color: #4080bf;\n}\n.button-border.button-primary:hover, .button-primary.button-border-thin:hover, .button-primary.button-border-thick:hover, .button-border.button-primary:focus, .button-primary.button-border-thin:focus, .button-primary.button-border-thick:focus,\n    .button-border-thin.button-primary:hover,\n    .button-border-thin.button-primary:focus,\n    .button-border-thick.button-primary:hover,\n    .button-border-thick.button-primary:focus {\n      background-color: rgba(102, 153, 204, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-primary:active, .button-primary.button-border-thin:active, .button-primary.button-border-thick:active, .button-border.button-primary.active, .button-primary.active.button-border-thin, .button-primary.active.button-border-thick, .button-border.button-primary.is-active, .button-primary.is-active.button-border-thin, .button-primary.is-active.button-border-thick,\n    .button-border-thin.button-primary:active,\n    .button-border-thin.button-primary.active,\n    .button-border-thin.button-primary.is-active,\n    .button-border-thick.button-primary:active,\n    .button-border-thick.button-primary.active,\n    .button-border-thick.button-primary.is-active {\n      background-color: rgba(77, 128, 178, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-plain, .button-plain.button-border-thin, .button-plain.button-border-thick,\n  .button-border-thin.button-plain,\n  .button-border-thick.button-plain {\n    color: #FFF;\n}\n.button-border.button-plain:hover, .button-plain.button-border-thin:hover, .button-plain.button-border-thick:hover, .button-border.button-plain:focus, .button-plain.button-border-thin:focus, .button-plain.button-border-thick:focus,\n    .button-border-thin.button-plain:hover,\n    .button-border-thin.button-plain:focus,\n    .button-border-thick.button-plain:hover,\n    .button-border-thick.button-plain:focus {\n      background-color: rgba(255, 255, 255, 0.9);\n      color: rgba(27, 154, 247, 0.9);\n}\n.button-border.button-plain:active, .button-plain.button-border-thin:active, .button-plain.button-border-thick:active, .button-border.button-plain.active, .button-plain.active.button-border-thin, .button-plain.active.button-border-thick, .button-border.button-plain.is-active, .button-plain.is-active.button-border-thin, .button-plain.is-active.button-border-thick,\n    .button-border-thin.button-plain:active,\n    .button-border-thin.button-plain.active,\n    .button-border-thin.button-plain.is-active,\n    .button-border-thick.button-plain:active,\n    .button-border-thick.button-plain.active,\n    .button-border-thick.button-plain.is-active {\n      background-color: rgba(255, 255, 255, 0.7);\n      color: rgba(27, 154, 247, 0.5);\n      opacity: .3;\n}\n.button-border.button-inverse, .button-inverse.button-border-thin, .button-inverse.button-border-thick,\n  .button-border-thin.button-inverse,\n  .button-border-thick.button-inverse {\n    color: #222;\n}\n.button-border.button-inverse:hover, .button-inverse.button-border-thin:hover, .button-inverse.button-border-thick:hover, .button-border.button-inverse:focus, .button-inverse.button-border-thin:focus, .button-inverse.button-border-thick:focus,\n    .button-border-thin.button-inverse:hover,\n    .button-border-thin.button-inverse:focus,\n    .button-border-thick.button-inverse:hover,\n    .button-border-thick.button-inverse:focus {\n      background-color: rgba(60, 60, 60, 0.9);\n      color: rgba(238, 238, 238, 0.9);\n}\n.button-border.button-inverse:active, .button-inverse.button-border-thin:active, .button-inverse.button-border-thick:active, .button-border.button-inverse.active, .button-inverse.active.button-border-thin, .button-inverse.active.button-border-thick, .button-border.button-inverse.is-active, .button-inverse.is-active.button-border-thin, .button-inverse.is-active.button-border-thick,\n    .button-border-thin.button-inverse:active,\n    .button-border-thin.button-inverse.active,\n    .button-border-thin.button-inverse.is-active,\n    .button-border-thick.button-inverse:active,\n    .button-border-thick.button-inverse.active,\n    .button-border-thick.button-inverse.is-active {\n      background-color: rgba(34, 34, 34, 0.7);\n      color: rgba(238, 238, 238, 0.5);\n      opacity: .3;\n}\n.button-border.button-action, .button-action.button-border-thin, .button-action.button-border-thick,\n  .button-border-thin.button-action,\n  .button-border-thick.button-action {\n    color: #4FC1E9;\n}\n.button-border.button-action:hover, .button-action.button-border-thin:hover, .button-action.button-border-thick:hover, .button-border.button-action:focus, .button-action.button-border-thin:focus, .button-action.button-border-thick:focus,\n    .button-border-thin.button-action:hover,\n    .button-border-thin.button-action:focus,\n    .button-border-thick.button-action:hover,\n    .button-border-thick.button-action:focus {\n      background-color: rgba(124, 209, 239, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-action:active, .button-action.button-border-thin:active, .button-action.button-border-thick:active, .button-border.button-action.active, .button-action.active.button-border-thin, .button-action.active.button-border-thick, .button-border.button-action.is-active, .button-action.is-active.button-border-thin, .button-action.is-active.button-border-thick,\n    .button-border-thin.button-action:active,\n    .button-border-thin.button-action.active,\n    .button-border-thin.button-action.is-active,\n    .button-border-thick.button-action:active,\n    .button-border-thick.button-action.active,\n    .button-border-thick.button-action.is-active {\n      background-color: rgba(89, 188, 223, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-highlight, .button-highlight.button-border-thin, .button-highlight.button-border-thick,\n  .button-border-thin.button-highlight,\n  .button-border-thick.button-highlight {\n    color: #FFB65F;\n}\n.button-border.button-highlight:hover, .button-highlight.button-border-thin:hover, .button-highlight.button-border-thick:hover, .button-border.button-highlight:focus, .button-highlight.button-border-thin:focus, .button-highlight.button-border-thick:focus,\n    .button-border-thin.button-highlight:hover,\n    .button-border-thin.button-highlight:focus,\n    .button-border-thick.button-highlight:hover,\n    .button-border-thick.button-highlight:focus {\n      background-color: rgba(255, 205, 146, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-highlight:active, .button-highlight.button-border-thin:active, .button-highlight.button-border-thick:active, .button-border.button-highlight.active, .button-highlight.active.button-border-thin, .button-highlight.active.button-border-thick, .button-border.button-highlight.is-active, .button-highlight.is-active.button-border-thin, .button-highlight.is-active.button-border-thick,\n    .button-border-thin.button-highlight:active,\n    .button-border-thin.button-highlight.active,\n    .button-border-thin.button-highlight.is-active,\n    .button-border-thick.button-highlight:active,\n    .button-border-thick.button-highlight.active,\n    .button-border-thick.button-highlight.is-active {\n      background-color: rgba(247, 181, 103, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-caution, .button-caution.button-border-thin, .button-caution.button-border-thick,\n  .button-border-thin.button-caution,\n  .button-border-thick.button-caution {\n    color: #FB8678;\n}\n.button-border.button-caution:hover, .button-caution.button-border-thin:hover, .button-caution.button-border-thick:hover, .button-border.button-caution:focus, .button-caution.button-border-thin:focus, .button-caution.button-border-thick:focus,\n    .button-border-thin.button-caution:hover,\n    .button-border-thin.button-caution:focus,\n    .button-border-thick.button-caution:hover,\n    .button-border-thick.button-caution:focus {\n      background-color: rgba(252, 178, 170, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-caution:active, .button-caution.button-border-thin:active, .button-caution.button-border-thick:active, .button-border.button-caution.active, .button-caution.active.button-border-thin, .button-caution.active.button-border-thick, .button-border.button-caution.is-active, .button-caution.is-active.button-border-thin, .button-caution.is-active.button-border-thick,\n    .button-border-thin.button-caution:active,\n    .button-border-thin.button-caution.active,\n    .button-border-thin.button-caution.is-active,\n    .button-border-thick.button-caution:active,\n    .button-border-thick.button-caution.active,\n    .button-border-thick.button-caution.is-active {\n      background-color: rgba(244, 139, 127, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-royal, .button-royal.button-border-thin, .button-royal.button-border-thick,\n  .button-border-thin.button-royal,\n  .button-border-thick.button-royal {\n    color: #22D69D;\n}\n.button-border.button-royal:hover, .button-royal.button-border-thin:hover, .button-royal.button-border-thick:hover, .button-border.button-royal:focus, .button-royal.button-border-thin:focus, .button-royal.button-border-thick:focus,\n    .button-border-thin.button-royal:hover,\n    .button-border-thin.button-royal:focus,\n    .button-border-thick.button-royal:hover,\n    .button-border-thick.button-royal:focus {\n      background-color: rgba(73, 226, 178, 0.9);\n      color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-royal:active, .button-royal.button-border-thin:active, .button-royal.button-border-thick:active, .button-border.button-royal.active, .button-royal.active.button-border-thin, .button-royal.active.button-border-thick, .button-border.button-royal.is-active, .button-royal.is-active.button-border-thin, .button-royal.is-active.button-border-thick,\n    .button-border-thin.button-royal:active,\n    .button-border-thin.button-royal.active,\n    .button-border-thin.button-royal.is-active,\n    .button-border-thick.button-royal:active,\n    .button-border-thick.button-royal.active,\n    .button-border-thick.button-royal.is-active {\n      background-color: rgba(46, 202, 152, 0.7);\n      color: rgba(255, 255, 255, 0.5);\n      opacity: .3;\n}\n.button-border.button-giant, .button-giant.button-border-thin, .button-giant.button-border-thick,\n  .button-border-thin.button-giant,\n  .button-border-thick.button-giant {\n    line-height: 66px;\n}\n.button-border.button-jumbo, .button-jumbo.button-border-thin, .button-jumbo.button-border-thick,\n  .button-border-thin.button-jumbo,\n  .button-border-thick.button-jumbo {\n    line-height: 56px;\n}\n.button-border.button-large, .button-large.button-border-thin, .button-large.button-border-thick,\n  .button-border-thin.button-large,\n  .button-border-thick.button-large {\n    line-height: 46px;\n}\n.button-border.button-normal, .button-normal.button-border-thin, .button-normal.button-border-thick,\n  .button-border-thin.button-normal,\n  .button-border-thick.button-normal {\n    line-height: 36px;\n}\n.button-border.button-small, .button-small.button-border-thin, .button-small.button-border-thick,\n  .button-border-thin.button-small,\n  .button-border-thick.button-small {\n    line-height: 26px;\n}\n.button-border.button-tiny, .button-tiny.button-border-thin, .button-tiny.button-border-thick,\n  .button-border-thin.button-tiny,\n  .button-border-thick.button-tiny {\n    line-height: 20px;\n}\n\n/*\n* Border Buttons\n*\n* These buttons have no fill they only have a\n* border to define their hit target.\n*/\n.button-borderless {\n  background: none;\n  border: none;\n  padding: 0 8px !important;\n  color: #DCDCDC;\n  font-size: 20.8px;\n  font-weight: 200;\n  /*\n  * Borderless Button Colors\n  *\n  * Create colors for buttons\n  * (.button-primary, .button-secondary, etc.)\n  */\n  /*\n  * Borderles Size Adjustment\n  *\n  * The font-size must be large to compinsate for\n  * the lack of a hit target.\n  */\n}\n.button-borderless:hover, .button-borderless:focus {\n    background: none;\n}\n.button-borderless:active, .button-borderless.active, .button-borderless.is-active {\n    box-shadow: none;\n    text-shadow: none;\n    transition-property: all;\n    transition-duration: .3s;\n    opacity: .3;\n}\n.button-borderless.button-primary {\n    color: #4080bf;\n}\n.button-borderless.button-plain {\n    color: #FFF;\n}\n.button-borderless.button-inverse {\n    color: #222;\n}\n.button-borderless.button-action {\n    color: #4FC1E9;\n}\n.button-borderless.button-highlight {\n    color: #FFB65F;\n}\n.button-borderless.button-caution {\n    color: #FB8678;\n}\n.button-borderless.button-royal {\n    color: #22D69D;\n}\n.button-borderless.button-giant {\n    font-size: 36.4px;\n    height: 52.4px;\n    line-height: 52.4px;\n}\n.button-borderless.button-jumbo {\n    font-size: 31.2px;\n    height: 47.2px;\n    line-height: 47.2px;\n}\n.button-borderless.button-large {\n    font-size: 26px;\n    height: 42px;\n    line-height: 42px;\n}\n.button-borderless.button-normal {\n    font-size: 20.8px;\n    height: 36.8px;\n    line-height: 36.8px;\n}\n.button-borderless.button-small {\n    font-size: 15.6px;\n    height: 31.6px;\n    line-height: 31.6px;\n}\n.button-borderless.button-tiny {\n    font-size: 12.48px;\n    height: 28.48px;\n    line-height: 28.48px;\n}\n\n/*\n* Raised Buttons\n*\n* A classic looking button that offers\n* great depth and affordance.\n*/\n.button-raised {\n  border-color: #cfcfcf;\n  border-style: solid;\n  border-width: 1px;\n  line-height: 38px;\n  background: linear-gradient(#e4e4e4, #cfcfcf);\n  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.button-raised:hover, .button-raised:focus {\n    background: linear-gradient(to bottom, #f0f0f0, #cacaca);\n}\n.button-raised:active, .button-raised.active, .button-raised.is-active {\n    background: gainsboro;\n    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;\n}\n\n/*\n* Raised Button Colors\n*\n* Create colors for raised buttons\n*/\n.button-raised.button-primary {\n  border-color: #3a73ac;\n  background: linear-gradient(#538dc5, #3a73ac);\n}\n.button-raised.button-primary:hover, .button-raised.button-primary:focus {\n    background: linear-gradient(to bottom, #5f94c9, #376ea4);\n}\n.button-raised.button-primary:active, .button-raised.button-primary.active, .button-raised.button-primary.is-active {\n    border-color: #336699;\n    background: #4d80b2;\n}\n.button-raised.button-plain {\n  border-color: #f2f2f2;\n  background: linear-gradient(white, #f2f2f2);\n}\n.button-raised.button-plain:hover, .button-raised.button-plain:focus {\n    background: linear-gradient(to bottom, white, #ededed);\n}\n.button-raised.button-plain:active, .button-raised.button-plain.active, .button-raised.button-plain.is-active {\n    border-color: #e6e6e6;\n    background: white;\n}\n.button-raised.button-inverse {\n  border-color: #151515;\n  background: linear-gradient(#2f2f2f, #151515);\n}\n.button-raised.button-inverse:hover, .button-raised.button-inverse:focus {\n    background: linear-gradient(to bottom, #363636, #101010);\n}\n.button-raised.button-inverse:active, .button-raised.button-inverse.active, .button-raised.button-inverse.is-active {\n    border-color: #090909;\n    background: #222222;\n}\n.button-raised.button-action {\n  border-color: #38b9e6;\n  background: linear-gradient(#66c9ec, #38b9e6);\n}\n.button-raised.button-action:hover, .button-raised.button-action:focus {\n    background: linear-gradient(to bottom, #73ceee, #2fb6e5);\n}\n.button-raised.button-action:active, .button-raised.button-action.active, .button-raised.button-action.is-active {\n    border-color: #22b1e3;\n    background: #59bcdf;\n}\n.button-raised.button-highlight {\n  border-color: #ffaa46;\n  background: linear-gradient(#ffc279, #ffaa46);\n}\n.button-raised.button-highlight:hover, .button-raised.button-highlight:focus {\n    background: linear-gradient(to bottom, #ffc988, #ffa63b);\n}\n.button-raised.button-highlight:active, .button-raised.button-highlight.active, .button-raised.button-highlight.is-active {\n    border-color: #ff9f2c;\n    background: #f7b567;\n}\n.button-raised.button-caution {\n  border-color: #fa705f;\n  background: linear-gradient(#fc9c91, #fa705f);\n}\n.button-raised.button-caution:hover, .button-raised.button-caution:focus {\n    background: linear-gradient(to bottom, #fcaaa0, #fa6755);\n}\n.button-raised.button-caution:active, .button-raised.button-caution.active, .button-raised.button-caution.is-active {\n    border-color: #fa5a46;\n    background: #f48b7f;\n}\n.button-raised.button-royal {\n  border-color: #1fc08d;\n  background: linear-gradient(#33dfa8, #1fc08d);\n}\n.button-raised.button-royal:hover, .button-raised.button-royal:focus {\n    background: linear-gradient(to bottom, #40e1ae, #1db786);\n}\n.button-raised.button-royal:active, .button-raised.button-royal.active, .button-raised.button-royal.is-active {\n    border-color: #1baa7d;\n    background: #2eca98;\n}\n\n/*\n* 3D Buttons\n*\n* These buttons have a heavy three dimensional\n* style that mimics the visual appearance of a\n* real life button.\n*/\n.button-3d {\n  position: relative;\n  top: 0;\n  box-shadow: 0 7px 0 darkgray, 0 8px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d:hover, .button-3d:focus {\n    box-shadow: 0 7px 0 darkgray, 0 8px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d:active, .button-3d.active, .button-3d.is-active {\n    top: 5px;\n    transition-property: all;\n    transition-duration: .15s;\n    box-shadow: 0 2px 0 darkgray, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* 3D Button Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-3d.button-primary {\n  box-shadow: 0 7px 0 #336699, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-primary:hover, .button-3d.button-primary:focus {\n    box-shadow: 0 7px 0 #316191, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-primary:active, .button-3d.button-primary.active, .button-3d.button-primary.is-active {\n    box-shadow: 0 2px 0 #264d73, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-plain {\n  box-shadow: 0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-plain:hover, .button-3d.button-plain:focus {\n    box-shadow: 0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-plain:active, .button-3d.button-plain.active, .button-3d.button-plain.is-active {\n    box-shadow: 0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-inverse {\n  box-shadow: 0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-inverse:hover, .button-3d.button-inverse:focus {\n    box-shadow: 0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-inverse:active, .button-3d.button-inverse.active, .button-3d.button-inverse.is-active {\n    box-shadow: 0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-action {\n  box-shadow: 0 7px 0 #22b1e3, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-action:hover, .button-3d.button-action:focus {\n    box-shadow: 0 7px 0 #1cacdf, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-action:active, .button-3d.button-action.active, .button-3d.button-action.is-active {\n    box-shadow: 0 2px 0 #1790bb, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-highlight {\n  box-shadow: 0 7px 0 #ff9f2c, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-highlight:hover, .button-3d.button-highlight:focus {\n    box-shadow: 0 7px 0 #ff9a22, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-highlight:active, .button-3d.button-highlight.active, .button-3d.button-highlight.is-active {\n    box-shadow: 0 2px 0 #f88700, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-caution {\n  box-shadow: 0 7px 0 #fa5a46, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-caution:hover, .button-3d.button-caution:focus {\n    box-shadow: 0 7px 0 #f9513d, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-caution:active, .button-3d.button-caution.active, .button-3d.button-caution.is-active {\n    box-shadow: 0 2px 0 #f82d15, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-royal {\n  box-shadow: 0 7px 0 #1baa7d, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-royal:hover, .button-3d.button-royal:focus {\n    box-shadow: 0 7px 0 #1aa176, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-royal:active, .button-3d.button-royal.active, .button-3d.button-royal.is-active {\n    box-shadow: 0 2px 0 #147e5c, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* Glowing Buttons\n*\n* A pulse like glow that appears\n* rythmically around the edges of\n* a button.\n*/\n/*\n* Glow animation mixin for Compass users\n*\n*/\n/*\n* Glowing Keyframes\n*\n*/\n@keyframes glowing {\nfrom {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(44, 154, 219, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n}\n\n/*\n* Glowing Keyframes for various colors\n*\n*/\n@keyframes glowing-primary {\nfrom {\n    box-shadow: 0 0 0 rgba(64, 128, 191, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(64, 128, 191, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(64, 128, 191, 0.3);\n}\n}\n@keyframes glowing-plain {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n}\n@keyframes glowing-inverse {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 34, 34, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n}\n@keyframes glowing-action {\nfrom {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(79, 193, 233, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n}\n@keyframes glowing-highlight {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 182, 95, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n}\n@keyframes glowing-caution {\nfrom {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(251, 134, 120, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n}\n@keyframes glowing-royal {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 214, 157, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n}\n\n/*\n* Glowing Buttons Base Styes\n*\n* A pulse like glow that appears\n* rythmically around the edges of\n* a button.\n*/\n.button-glow {\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-name: glowing;\n}\n.button-glow:active, .button-glow.active, .button-glow.is-active {\n    animation-name: none;\n}\n\n/*\n* Glowing Button Colors\n*\n* Create colors for glowing buttons\n*/\n.button-glow.button-primary {\n  animation-name: glowing-primary;\n}\n.button-glow.button-plain {\n  animation-name: glowing-plain;\n}\n.button-glow.button-inverse {\n  animation-name: glowing-inverse;\n}\n.button-glow.button-action {\n  animation-name: glowing-action;\n}\n.button-glow.button-highlight {\n  animation-name: glowing-highlight;\n}\n.button-glow.button-caution {\n  animation-name: glowing-caution;\n}\n.button-glow.button-royal {\n  animation-name: glowing-royal;\n}\n\n/*\n* Dropdown menu buttons\n*\n* A dropdown menu appears\n* when a button is pressed\n*/\n/*\n* Dropdown Container\n*\n*/\n.button-dropdown {\n  position: relative;\n  overflow: visible;\n  display: inline-block;\n}\n\n/*\n* Dropdown List Style\n*\n*/\n.button-dropdown-list {\n  display: none;\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  min-width: 100%;\n  list-style-type: none;\n  background: rgba(246, 246, 246, 0.95);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #c3c3c3;\n  font-family: \"Open Sans\", sans-serif, verdana;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  box-sizing: border-box;\n  /*\n  * Dropdown Below\n  *\n  */\n  /*\n  * Dropdown Above\n  *\n  */\n}\n.button-dropdown-list.is-below {\n    top: 100%;\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n}\n.button-dropdown-list.is-above {\n    bottom: 100%;\n    top: auto;\n    border-bottom: none;\n    border-radius: 3px 3px 0 0;\n    box-shadow: 0 -2px 7px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* Dropdown Buttons\n*\n*/\n.button-dropdown-list > li {\n  padding: 0;\n  margin: 0;\n  display: block;\n}\n.button-dropdown-list > li > a {\n    display: block;\n    line-height: 40px;\n    font-size: 12.8px;\n    padding: 5px 10px;\n    float: none;\n    color: #666;\n    text-decoration: none;\n}\n.button-dropdown-list > li > a:hover {\n      color: #5e5e5e;\n      background: #e4e4e4;\n      text-decoration: none;\n}\n.button-dropdown-divider {\n  border-top: 1px solid #d4d4d4;\n}\n\n/*\n* Dropdown Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-dropdown.button-dropdown-primary .button-dropdown-list {\n  background: rgba(64, 128, 191, 0.95);\n  border-color: #336699;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list .button-dropdown-divider {\n    border-color: #376ea4;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #3a73ac;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list {\n  background: rgba(255, 255, 255, 0.95);\n  border-color: #e6e6e6;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list .button-dropdown-divider {\n    border-color: #ededed;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list > li > a {\n    color: #1B9AF7;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list > li > a:hover {\n      color: #088ef0;\n      background: #f2f2f2;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list {\n  background: rgba(34, 34, 34, 0.95);\n  border-color: #090909;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list .button-dropdown-divider {\n    border-color: #101010;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list > li > a {\n    color: #EEE;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list > li > a:hover {\n      color: #e1e1e1;\n      background: #151515;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list {\n  background: rgba(79, 193, 233, 0.95);\n  border-color: #22b1e3;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list .button-dropdown-divider {\n    border-color: #2fb6e5;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #38b9e6;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list {\n  background: rgba(255, 182, 95, 0.95);\n  border-color: #ff9f2c;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list .button-dropdown-divider {\n    border-color: #ffa63b;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #ffaa46;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list {\n  background: rgba(251, 134, 120, 0.95);\n  border-color: #fa5a46;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list .button-dropdown-divider {\n    border-color: #fa6755;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #fa705f;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list {\n  background: rgba(34, 214, 157, 0.95);\n  border-color: #1baa7d;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list .button-dropdown-divider {\n    border-color: #1db786;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list > li > a {\n    color: #FFF;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list > li > a:hover {\n      color: #f2f2f2;\n      background: #1fc08d;\n}\n\n/*\n* Buton Groups\n*\n* A group of related buttons\n* displayed edge to edge\n*/\n.button-group {\n  position: relative;\n  display: inline-block;\n}\n.button-group:after {\n    content: \" \";\n    display: block;\n    clear: both;\n}\n.button-group .button,\n  .button-group .button-dropdown {\n    float: left;\n}\n.button-group .button:not(:first-child):not(:last-child),\n    .button-group .button-dropdown:not(:first-child):not(:last-child) {\n      border-radius: 0;\n      border-right: none;\n}\n.button-group .button:first-child,\n    .button-group .button-dropdown:first-child {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-right: none;\n}\n.button-group .button:last-child,\n    .button-group .button-dropdown:last-child {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n}\n\n/*\n* Button Wrapper\n*\n* A wrap around effect to highlight\n* the shape of the button and offer\n* a subtle visual effect.\n*/\n.button-wrap {\n  border: 1px solid #e3e3e3;\n  display: inline-block;\n  padding: 9px;\n  background: linear-gradient(#f2f2f2, #FFF);\n  border-radius: 200px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n\n/*\n* Long Shadow Buttons\n*\n* A visual effect adding a flat shadow to the text of a button\n*/\n/*\n* Long Shadow Function\n*\n* Loops $length times building a long shadow. Defaults downward right\n*/\n/*\n* LONG SHADOW MIXIN\n*\n*/\n/*\n* Shadow Right\n*\n*/\n.button-longshadow,\n.button-longshadow-right {\n  overflow: hidden;\n}\n.button-longshadow.button-primary,\n  .button-longshadow-right.button-primary {\n    text-shadow: 0px 0px #336699, 1px 1px #336699, 2px 2px #336699, 3px 3px #336699, 4px 4px #336699, 5px 5px #336699, 6px 6px #336699, 7px 7px #336699, 8px 8px #336699, 9px 9px #336699, 10px 10px #336699, 11px 11px #336699, 12px 12px #336699, 13px 13px #336699, 14px 14px #336699, 15px 15px #336699, 16px 16px #336699, 17px 17px #336699, 18px 18px #336699, 19px 19px #336699, 20px 20px #336699, 21px 21px #336699, 22px 22px #336699, 23px 23px #336699, 24px 24px #336699, 25px 25px #336699, 26px 26px #336699, 27px 27px #336699, 28px 28px #336699, 29px 29px #336699, 30px 30px #336699, 31px 31px #336699, 32px 32px #336699, 33px 33px #336699, 34px 34px #336699, 35px 35px #336699, 36px 36px #336699, 37px 37px #336699, 38px 38px #336699, 39px 39px #336699, 40px 40px #336699, 41px 41px #336699, 42px 42px #336699, 43px 43px #336699, 44px 44px #336699, 45px 45px #336699, 46px 46px #336699, 47px 47px #336699, 48px 48px #336699, 49px 49px #336699, 50px 50px #336699, 51px 51px #336699, 52px 52px #336699, 53px 53px #336699, 54px 54px #336699, 55px 55px #336699, 56px 56px #336699, 57px 57px #336699, 58px 58px #336699, 59px 59px #336699, 60px 60px #336699, 61px 61px #336699, 62px 62px #336699, 63px 63px #336699, 64px 64px #336699, 65px 65px #336699, 66px 66px #336699, 67px 67px #336699, 68px 68px #336699, 69px 69px #336699, 70px 70px #336699, 71px 71px #336699, 72px 72px #336699, 73px 73px #336699, 74px 74px #336699, 75px 75px #336699, 76px 76px #336699, 77px 77px #336699, 78px 78px #336699, 79px 79px #336699, 80px 80px #336699, 81px 81px #336699, 82px 82px #336699, 83px 83px #336699, 84px 84px #336699, 85px 85px #336699;\n}\n.button-longshadow.button-primary:active, .button-longshadow.button-primary.active, .button-longshadow.button-primary.is-active,\n    .button-longshadow-right.button-primary:active,\n    .button-longshadow-right.button-primary.active,\n    .button-longshadow-right.button-primary.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-plain,\n  .button-longshadow-right.button-plain {\n    text-shadow: 0px 0px #e6e6e6, 1px 1px #e6e6e6, 2px 2px #e6e6e6, 3px 3px #e6e6e6, 4px 4px #e6e6e6, 5px 5px #e6e6e6, 6px 6px #e6e6e6, 7px 7px #e6e6e6, 8px 8px #e6e6e6, 9px 9px #e6e6e6, 10px 10px #e6e6e6, 11px 11px #e6e6e6, 12px 12px #e6e6e6, 13px 13px #e6e6e6, 14px 14px #e6e6e6, 15px 15px #e6e6e6, 16px 16px #e6e6e6, 17px 17px #e6e6e6, 18px 18px #e6e6e6, 19px 19px #e6e6e6, 20px 20px #e6e6e6, 21px 21px #e6e6e6, 22px 22px #e6e6e6, 23px 23px #e6e6e6, 24px 24px #e6e6e6, 25px 25px #e6e6e6, 26px 26px #e6e6e6, 27px 27px #e6e6e6, 28px 28px #e6e6e6, 29px 29px #e6e6e6, 30px 30px #e6e6e6, 31px 31px #e6e6e6, 32px 32px #e6e6e6, 33px 33px #e6e6e6, 34px 34px #e6e6e6, 35px 35px #e6e6e6, 36px 36px #e6e6e6, 37px 37px #e6e6e6, 38px 38px #e6e6e6, 39px 39px #e6e6e6, 40px 40px #e6e6e6, 41px 41px #e6e6e6, 42px 42px #e6e6e6, 43px 43px #e6e6e6, 44px 44px #e6e6e6, 45px 45px #e6e6e6, 46px 46px #e6e6e6, 47px 47px #e6e6e6, 48px 48px #e6e6e6, 49px 49px #e6e6e6, 50px 50px #e6e6e6, 51px 51px #e6e6e6, 52px 52px #e6e6e6, 53px 53px #e6e6e6, 54px 54px #e6e6e6, 55px 55px #e6e6e6, 56px 56px #e6e6e6, 57px 57px #e6e6e6, 58px 58px #e6e6e6, 59px 59px #e6e6e6, 60px 60px #e6e6e6, 61px 61px #e6e6e6, 62px 62px #e6e6e6, 63px 63px #e6e6e6, 64px 64px #e6e6e6, 65px 65px #e6e6e6, 66px 66px #e6e6e6, 67px 67px #e6e6e6, 68px 68px #e6e6e6, 69px 69px #e6e6e6, 70px 70px #e6e6e6, 71px 71px #e6e6e6, 72px 72px #e6e6e6, 73px 73px #e6e6e6, 74px 74px #e6e6e6, 75px 75px #e6e6e6, 76px 76px #e6e6e6, 77px 77px #e6e6e6, 78px 78px #e6e6e6, 79px 79px #e6e6e6, 80px 80px #e6e6e6, 81px 81px #e6e6e6, 82px 82px #e6e6e6, 83px 83px #e6e6e6, 84px 84px #e6e6e6, 85px 85px #e6e6e6;\n}\n.button-longshadow.button-plain:active, .button-longshadow.button-plain.active, .button-longshadow.button-plain.is-active,\n    .button-longshadow-right.button-plain:active,\n    .button-longshadow-right.button-plain.active,\n    .button-longshadow-right.button-plain.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-inverse,\n  .button-longshadow-right.button-inverse {\n    text-shadow: 0px 0px #090909, 1px 1px #090909, 2px 2px #090909, 3px 3px #090909, 4px 4px #090909, 5px 5px #090909, 6px 6px #090909, 7px 7px #090909, 8px 8px #090909, 9px 9px #090909, 10px 10px #090909, 11px 11px #090909, 12px 12px #090909, 13px 13px #090909, 14px 14px #090909, 15px 15px #090909, 16px 16px #090909, 17px 17px #090909, 18px 18px #090909, 19px 19px #090909, 20px 20px #090909, 21px 21px #090909, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #090909, 44px 44px #090909, 45px 45px #090909, 46px 46px #090909, 47px 47px #090909, 48px 48px #090909, 49px 49px #090909, 50px 50px #090909, 51px 51px #090909, 52px 52px #090909, 53px 53px #090909, 54px 54px #090909, 55px 55px #090909, 56px 56px #090909, 57px 57px #090909, 58px 58px #090909, 59px 59px #090909, 60px 60px #090909, 61px 61px #090909, 62px 62px #090909, 63px 63px #090909, 64px 64px #090909, 65px 65px #090909, 66px 66px #090909, 67px 67px #090909, 68px 68px #090909, 69px 69px #090909, 70px 70px #090909, 71px 71px #090909, 72px 72px #090909, 73px 73px #090909, 74px 74px #090909, 75px 75px #090909, 76px 76px #090909, 77px 77px #090909, 78px 78px #090909, 79px 79px #090909, 80px 80px #090909, 81px 81px #090909, 82px 82px #090909, 83px 83px #090909, 84px 84px #090909, 85px 85px #090909;\n}\n.button-longshadow.button-inverse:active, .button-longshadow.button-inverse.active, .button-longshadow.button-inverse.is-active,\n    .button-longshadow-right.button-inverse:active,\n    .button-longshadow-right.button-inverse.active,\n    .button-longshadow-right.button-inverse.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-action,\n  .button-longshadow-right.button-action {\n    text-shadow: 0px 0px #22b1e3, 1px 1px #22b1e3, 2px 2px #22b1e3, 3px 3px #22b1e3, 4px 4px #22b1e3, 5px 5px #22b1e3, 6px 6px #22b1e3, 7px 7px #22b1e3, 8px 8px #22b1e3, 9px 9px #22b1e3, 10px 10px #22b1e3, 11px 11px #22b1e3, 12px 12px #22b1e3, 13px 13px #22b1e3, 14px 14px #22b1e3, 15px 15px #22b1e3, 16px 16px #22b1e3, 17px 17px #22b1e3, 18px 18px #22b1e3, 19px 19px #22b1e3, 20px 20px #22b1e3, 21px 21px #22b1e3, 22px 22px #22b1e3, 23px 23px #22b1e3, 24px 24px #22b1e3, 25px 25px #22b1e3, 26px 26px #22b1e3, 27px 27px #22b1e3, 28px 28px #22b1e3, 29px 29px #22b1e3, 30px 30px #22b1e3, 31px 31px #22b1e3, 32px 32px #22b1e3, 33px 33px #22b1e3, 34px 34px #22b1e3, 35px 35px #22b1e3, 36px 36px #22b1e3, 37px 37px #22b1e3, 38px 38px #22b1e3, 39px 39px #22b1e3, 40px 40px #22b1e3, 41px 41px #22b1e3, 42px 42px #22b1e3, 43px 43px #22b1e3, 44px 44px #22b1e3, 45px 45px #22b1e3, 46px 46px #22b1e3, 47px 47px #22b1e3, 48px 48px #22b1e3, 49px 49px #22b1e3, 50px 50px #22b1e3, 51px 51px #22b1e3, 52px 52px #22b1e3, 53px 53px #22b1e3, 54px 54px #22b1e3, 55px 55px #22b1e3, 56px 56px #22b1e3, 57px 57px #22b1e3, 58px 58px #22b1e3, 59px 59px #22b1e3, 60px 60px #22b1e3, 61px 61px #22b1e3, 62px 62px #22b1e3, 63px 63px #22b1e3, 64px 64px #22b1e3, 65px 65px #22b1e3, 66px 66px #22b1e3, 67px 67px #22b1e3, 68px 68px #22b1e3, 69px 69px #22b1e3, 70px 70px #22b1e3, 71px 71px #22b1e3, 72px 72px #22b1e3, 73px 73px #22b1e3, 74px 74px #22b1e3, 75px 75px #22b1e3, 76px 76px #22b1e3, 77px 77px #22b1e3, 78px 78px #22b1e3, 79px 79px #22b1e3, 80px 80px #22b1e3, 81px 81px #22b1e3, 82px 82px #22b1e3, 83px 83px #22b1e3, 84px 84px #22b1e3, 85px 85px #22b1e3;\n}\n.button-longshadow.button-action:active, .button-longshadow.button-action.active, .button-longshadow.button-action.is-active,\n    .button-longshadow-right.button-action:active,\n    .button-longshadow-right.button-action.active,\n    .button-longshadow-right.button-action.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-highlight,\n  .button-longshadow-right.button-highlight {\n    text-shadow: 0px 0px #ff9f2c, 1px 1px #ff9f2c, 2px 2px #ff9f2c, 3px 3px #ff9f2c, 4px 4px #ff9f2c, 5px 5px #ff9f2c, 6px 6px #ff9f2c, 7px 7px #ff9f2c, 8px 8px #ff9f2c, 9px 9px #ff9f2c, 10px 10px #ff9f2c, 11px 11px #ff9f2c, 12px 12px #ff9f2c, 13px 13px #ff9f2c, 14px 14px #ff9f2c, 15px 15px #ff9f2c, 16px 16px #ff9f2c, 17px 17px #ff9f2c, 18px 18px #ff9f2c, 19px 19px #ff9f2c, 20px 20px #ff9f2c, 21px 21px #ff9f2c, 22px 22px #ff9f2c, 23px 23px #ff9f2c, 24px 24px #ff9f2c, 25px 25px #ff9f2c, 26px 26px #ff9f2c, 27px 27px #ff9f2c, 28px 28px #ff9f2c, 29px 29px #ff9f2c, 30px 30px #ff9f2c, 31px 31px #ff9f2c, 32px 32px #ff9f2c, 33px 33px #ff9f2c, 34px 34px #ff9f2c, 35px 35px #ff9f2c, 36px 36px #ff9f2c, 37px 37px #ff9f2c, 38px 38px #ff9f2c, 39px 39px #ff9f2c, 40px 40px #ff9f2c, 41px 41px #ff9f2c, 42px 42px #ff9f2c, 43px 43px #ff9f2c, 44px 44px #ff9f2c, 45px 45px #ff9f2c, 46px 46px #ff9f2c, 47px 47px #ff9f2c, 48px 48px #ff9f2c, 49px 49px #ff9f2c, 50px 50px #ff9f2c, 51px 51px #ff9f2c, 52px 52px #ff9f2c, 53px 53px #ff9f2c, 54px 54px #ff9f2c, 55px 55px #ff9f2c, 56px 56px #ff9f2c, 57px 57px #ff9f2c, 58px 58px #ff9f2c, 59px 59px #ff9f2c, 60px 60px #ff9f2c, 61px 61px #ff9f2c, 62px 62px #ff9f2c, 63px 63px #ff9f2c, 64px 64px #ff9f2c, 65px 65px #ff9f2c, 66px 66px #ff9f2c, 67px 67px #ff9f2c, 68px 68px #ff9f2c, 69px 69px #ff9f2c, 70px 70px #ff9f2c, 71px 71px #ff9f2c, 72px 72px #ff9f2c, 73px 73px #ff9f2c, 74px 74px #ff9f2c, 75px 75px #ff9f2c, 76px 76px #ff9f2c, 77px 77px #ff9f2c, 78px 78px #ff9f2c, 79px 79px #ff9f2c, 80px 80px #ff9f2c, 81px 81px #ff9f2c, 82px 82px #ff9f2c, 83px 83px #ff9f2c, 84px 84px #ff9f2c, 85px 85px #ff9f2c;\n}\n.button-longshadow.button-highlight:active, .button-longshadow.button-highlight.active, .button-longshadow.button-highlight.is-active,\n    .button-longshadow-right.button-highlight:active,\n    .button-longshadow-right.button-highlight.active,\n    .button-longshadow-right.button-highlight.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-caution,\n  .button-longshadow-right.button-caution {\n    text-shadow: 0px 0px #fa5a46, 1px 1px #fa5a46, 2px 2px #fa5a46, 3px 3px #fa5a46, 4px 4px #fa5a46, 5px 5px #fa5a46, 6px 6px #fa5a46, 7px 7px #fa5a46, 8px 8px #fa5a46, 9px 9px #fa5a46, 10px 10px #fa5a46, 11px 11px #fa5a46, 12px 12px #fa5a46, 13px 13px #fa5a46, 14px 14px #fa5a46, 15px 15px #fa5a46, 16px 16px #fa5a46, 17px 17px #fa5a46, 18px 18px #fa5a46, 19px 19px #fa5a46, 20px 20px #fa5a46, 21px 21px #fa5a46, 22px 22px #fa5a46, 23px 23px #fa5a46, 24px 24px #fa5a46, 25px 25px #fa5a46, 26px 26px #fa5a46, 27px 27px #fa5a46, 28px 28px #fa5a46, 29px 29px #fa5a46, 30px 30px #fa5a46, 31px 31px #fa5a46, 32px 32px #fa5a46, 33px 33px #fa5a46, 34px 34px #fa5a46, 35px 35px #fa5a46, 36px 36px #fa5a46, 37px 37px #fa5a46, 38px 38px #fa5a46, 39px 39px #fa5a46, 40px 40px #fa5a46, 41px 41px #fa5a46, 42px 42px #fa5a46, 43px 43px #fa5a46, 44px 44px #fa5a46, 45px 45px #fa5a46, 46px 46px #fa5a46, 47px 47px #fa5a46, 48px 48px #fa5a46, 49px 49px #fa5a46, 50px 50px #fa5a46, 51px 51px #fa5a46, 52px 52px #fa5a46, 53px 53px #fa5a46, 54px 54px #fa5a46, 55px 55px #fa5a46, 56px 56px #fa5a46, 57px 57px #fa5a46, 58px 58px #fa5a46, 59px 59px #fa5a46, 60px 60px #fa5a46, 61px 61px #fa5a46, 62px 62px #fa5a46, 63px 63px #fa5a46, 64px 64px #fa5a46, 65px 65px #fa5a46, 66px 66px #fa5a46, 67px 67px #fa5a46, 68px 68px #fa5a46, 69px 69px #fa5a46, 70px 70px #fa5a46, 71px 71px #fa5a46, 72px 72px #fa5a46, 73px 73px #fa5a46, 74px 74px #fa5a46, 75px 75px #fa5a46, 76px 76px #fa5a46, 77px 77px #fa5a46, 78px 78px #fa5a46, 79px 79px #fa5a46, 80px 80px #fa5a46, 81px 81px #fa5a46, 82px 82px #fa5a46, 83px 83px #fa5a46, 84px 84px #fa5a46, 85px 85px #fa5a46;\n}\n.button-longshadow.button-caution:active, .button-longshadow.button-caution.active, .button-longshadow.button-caution.is-active,\n    .button-longshadow-right.button-caution:active,\n    .button-longshadow-right.button-caution.active,\n    .button-longshadow-right.button-caution.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-royal,\n  .button-longshadow-right.button-royal {\n    text-shadow: 0px 0px #1baa7d, 1px 1px #1baa7d, 2px 2px #1baa7d, 3px 3px #1baa7d, 4px 4px #1baa7d, 5px 5px #1baa7d, 6px 6px #1baa7d, 7px 7px #1baa7d, 8px 8px #1baa7d, 9px 9px #1baa7d, 10px 10px #1baa7d, 11px 11px #1baa7d, 12px 12px #1baa7d, 13px 13px #1baa7d, 14px 14px #1baa7d, 15px 15px #1baa7d, 16px 16px #1baa7d, 17px 17px #1baa7d, 18px 18px #1baa7d, 19px 19px #1baa7d, 20px 20px #1baa7d, 21px 21px #1baa7d, 22px 22px #1baa7d, 23px 23px #1baa7d, 24px 24px #1baa7d, 25px 25px #1baa7d, 26px 26px #1baa7d, 27px 27px #1baa7d, 28px 28px #1baa7d, 29px 29px #1baa7d, 30px 30px #1baa7d, 31px 31px #1baa7d, 32px 32px #1baa7d, 33px 33px #1baa7d, 34px 34px #1baa7d, 35px 35px #1baa7d, 36px 36px #1baa7d, 37px 37px #1baa7d, 38px 38px #1baa7d, 39px 39px #1baa7d, 40px 40px #1baa7d, 41px 41px #1baa7d, 42px 42px #1baa7d, 43px 43px #1baa7d, 44px 44px #1baa7d, 45px 45px #1baa7d, 46px 46px #1baa7d, 47px 47px #1baa7d, 48px 48px #1baa7d, 49px 49px #1baa7d, 50px 50px #1baa7d, 51px 51px #1baa7d, 52px 52px #1baa7d, 53px 53px #1baa7d, 54px 54px #1baa7d, 55px 55px #1baa7d, 56px 56px #1baa7d, 57px 57px #1baa7d, 58px 58px #1baa7d, 59px 59px #1baa7d, 60px 60px #1baa7d, 61px 61px #1baa7d, 62px 62px #1baa7d, 63px 63px #1baa7d, 64px 64px #1baa7d, 65px 65px #1baa7d, 66px 66px #1baa7d, 67px 67px #1baa7d, 68px 68px #1baa7d, 69px 69px #1baa7d, 70px 70px #1baa7d, 71px 71px #1baa7d, 72px 72px #1baa7d, 73px 73px #1baa7d, 74px 74px #1baa7d, 75px 75px #1baa7d, 76px 76px #1baa7d, 77px 77px #1baa7d, 78px 78px #1baa7d, 79px 79px #1baa7d, 80px 80px #1baa7d, 81px 81px #1baa7d, 82px 82px #1baa7d, 83px 83px #1baa7d, 84px 84px #1baa7d, 85px 85px #1baa7d;\n}\n.button-longshadow.button-royal:active, .button-longshadow.button-royal.active, .button-longshadow.button-royal.is-active,\n    .button-longshadow-right.button-royal:active,\n    .button-longshadow-right.button-royal.active,\n    .button-longshadow-right.button-royal.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n\n/*\n* Shadow Left\n*\n*/\n.button-longshadow-left {\n  overflow: hidden;\n}\n.button-longshadow-left.button-primary {\n    text-shadow: 0px 0px #336699, -1px 1px #336699, -2px 2px #336699, -3px 3px #336699, -4px 4px #336699, -5px 5px #336699, -6px 6px #336699, -7px 7px #336699, -8px 8px #336699, -9px 9px #336699, -10px 10px #336699, -11px 11px #336699, -12px 12px #336699, -13px 13px #336699, -14px 14px #336699, -15px 15px #336699, -16px 16px #336699, -17px 17px #336699, -18px 18px #336699, -19px 19px #336699, -20px 20px #336699, -21px 21px #336699, -22px 22px #336699, -23px 23px #336699, -24px 24px #336699, -25px 25px #336699, -26px 26px #336699, -27px 27px #336699, -28px 28px #336699, -29px 29px #336699, -30px 30px #336699, -31px 31px #336699, -32px 32px #336699, -33px 33px #336699, -34px 34px #336699, -35px 35px #336699, -36px 36px #336699, -37px 37px #336699, -38px 38px #336699, -39px 39px #336699, -40px 40px #336699, -41px 41px #336699, -42px 42px #336699, -43px 43px #336699, -44px 44px #336699, -45px 45px #336699, -46px 46px #336699, -47px 47px #336699, -48px 48px #336699, -49px 49px #336699, -50px 50px #336699, -51px 51px #336699, -52px 52px #336699, -53px 53px #336699, -54px 54px #336699, -55px 55px #336699, -56px 56px #336699, -57px 57px #336699, -58px 58px #336699, -59px 59px #336699, -60px 60px #336699, -61px 61px #336699, -62px 62px #336699, -63px 63px #336699, -64px 64px #336699, -65px 65px #336699, -66px 66px #336699, -67px 67px #336699, -68px 68px #336699, -69px 69px #336699, -70px 70px #336699, -71px 71px #336699, -72px 72px #336699, -73px 73px #336699, -74px 74px #336699, -75px 75px #336699, -76px 76px #336699, -77px 77px #336699, -78px 78px #336699, -79px 79px #336699, -80px 80px #336699, -81px 81px #336699, -82px 82px #336699, -83px 83px #336699, -84px 84px #336699, -85px 85px #336699;\n}\n.button-longshadow-left.button-primary:active, .button-longshadow-left.button-primary.active, .button-longshadow-left.button-primary.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-plain {\n    text-shadow: 0px 0px #e6e6e6, -1px 1px #e6e6e6, -2px 2px #e6e6e6, -3px 3px #e6e6e6, -4px 4px #e6e6e6, -5px 5px #e6e6e6, -6px 6px #e6e6e6, -7px 7px #e6e6e6, -8px 8px #e6e6e6, -9px 9px #e6e6e6, -10px 10px #e6e6e6, -11px 11px #e6e6e6, -12px 12px #e6e6e6, -13px 13px #e6e6e6, -14px 14px #e6e6e6, -15px 15px #e6e6e6, -16px 16px #e6e6e6, -17px 17px #e6e6e6, -18px 18px #e6e6e6, -19px 19px #e6e6e6, -20px 20px #e6e6e6, -21px 21px #e6e6e6, -22px 22px #e6e6e6, -23px 23px #e6e6e6, -24px 24px #e6e6e6, -25px 25px #e6e6e6, -26px 26px #e6e6e6, -27px 27px #e6e6e6, -28px 28px #e6e6e6, -29px 29px #e6e6e6, -30px 30px #e6e6e6, -31px 31px #e6e6e6, -32px 32px #e6e6e6, -33px 33px #e6e6e6, -34px 34px #e6e6e6, -35px 35px #e6e6e6, -36px 36px #e6e6e6, -37px 37px #e6e6e6, -38px 38px #e6e6e6, -39px 39px #e6e6e6, -40px 40px #e6e6e6, -41px 41px #e6e6e6, -42px 42px #e6e6e6, -43px 43px #e6e6e6, -44px 44px #e6e6e6, -45px 45px #e6e6e6, -46px 46px #e6e6e6, -47px 47px #e6e6e6, -48px 48px #e6e6e6, -49px 49px #e6e6e6, -50px 50px #e6e6e6, -51px 51px #e6e6e6, -52px 52px #e6e6e6, -53px 53px #e6e6e6, -54px 54px #e6e6e6, -55px 55px #e6e6e6, -56px 56px #e6e6e6, -57px 57px #e6e6e6, -58px 58px #e6e6e6, -59px 59px #e6e6e6, -60px 60px #e6e6e6, -61px 61px #e6e6e6, -62px 62px #e6e6e6, -63px 63px #e6e6e6, -64px 64px #e6e6e6, -65px 65px #e6e6e6, -66px 66px #e6e6e6, -67px 67px #e6e6e6, -68px 68px #e6e6e6, -69px 69px #e6e6e6, -70px 70px #e6e6e6, -71px 71px #e6e6e6, -72px 72px #e6e6e6, -73px 73px #e6e6e6, -74px 74px #e6e6e6, -75px 75px #e6e6e6, -76px 76px #e6e6e6, -77px 77px #e6e6e6, -78px 78px #e6e6e6, -79px 79px #e6e6e6, -80px 80px #e6e6e6, -81px 81px #e6e6e6, -82px 82px #e6e6e6, -83px 83px #e6e6e6, -84px 84px #e6e6e6, -85px 85px #e6e6e6;\n}\n.button-longshadow-left.button-plain:active, .button-longshadow-left.button-plain.active, .button-longshadow-left.button-plain.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-inverse {\n    text-shadow: 0px 0px #090909, -1px 1px #090909, -2px 2px #090909, -3px 3px #090909, -4px 4px #090909, -5px 5px #090909, -6px 6px #090909, -7px 7px #090909, -8px 8px #090909, -9px 9px #090909, -10px 10px #090909, -11px 11px #090909, -12px 12px #090909, -13px 13px #090909, -14px 14px #090909, -15px 15px #090909, -16px 16px #090909, -17px 17px #090909, -18px 18px #090909, -19px 19px #090909, -20px 20px #090909, -21px 21px #090909, -22px 22px #090909, -23px 23px #090909, -24px 24px #090909, -25px 25px #090909, -26px 26px #090909, -27px 27px #090909, -28px 28px #090909, -29px 29px #090909, -30px 30px #090909, -31px 31px #090909, -32px 32px #090909, -33px 33px #090909, -34px 34px #090909, -35px 35px #090909, -36px 36px #090909, -37px 37px #090909, -38px 38px #090909, -39px 39px #090909, -40px 40px #090909, -41px 41px #090909, -42px 42px #090909, -43px 43px #090909, -44px 44px #090909, -45px 45px #090909, -46px 46px #090909, -47px 47px #090909, -48px 48px #090909, -49px 49px #090909, -50px 50px #090909, -51px 51px #090909, -52px 52px #090909, -53px 53px #090909, -54px 54px #090909, -55px 55px #090909, -56px 56px #090909, -57px 57px #090909, -58px 58px #090909, -59px 59px #090909, -60px 60px #090909, -61px 61px #090909, -62px 62px #090909, -63px 63px #090909, -64px 64px #090909, -65px 65px #090909, -66px 66px #090909, -67px 67px #090909, -68px 68px #090909, -69px 69px #090909, -70px 70px #090909, -71px 71px #090909, -72px 72px #090909, -73px 73px #090909, -74px 74px #090909, -75px 75px #090909, -76px 76px #090909, -77px 77px #090909, -78px 78px #090909, -79px 79px #090909, -80px 80px #090909, -81px 81px #090909, -82px 82px #090909, -83px 83px #090909, -84px 84px #090909, -85px 85px #090909;\n}\n.button-longshadow-left.button-inverse:active, .button-longshadow-left.button-inverse.active, .button-longshadow-left.button-inverse.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-action {\n    text-shadow: 0px 0px #22b1e3, -1px 1px #22b1e3, -2px 2px #22b1e3, -3px 3px #22b1e3, -4px 4px #22b1e3, -5px 5px #22b1e3, -6px 6px #22b1e3, -7px 7px #22b1e3, -8px 8px #22b1e3, -9px 9px #22b1e3, -10px 10px #22b1e3, -11px 11px #22b1e3, -12px 12px #22b1e3, -13px 13px #22b1e3, -14px 14px #22b1e3, -15px 15px #22b1e3, -16px 16px #22b1e3, -17px 17px #22b1e3, -18px 18px #22b1e3, -19px 19px #22b1e3, -20px 20px #22b1e3, -21px 21px #22b1e3, -22px 22px #22b1e3, -23px 23px #22b1e3, -24px 24px #22b1e3, -25px 25px #22b1e3, -26px 26px #22b1e3, -27px 27px #22b1e3, -28px 28px #22b1e3, -29px 29px #22b1e3, -30px 30px #22b1e3, -31px 31px #22b1e3, -32px 32px #22b1e3, -33px 33px #22b1e3, -34px 34px #22b1e3, -35px 35px #22b1e3, -36px 36px #22b1e3, -37px 37px #22b1e3, -38px 38px #22b1e3, -39px 39px #22b1e3, -40px 40px #22b1e3, -41px 41px #22b1e3, -42px 42px #22b1e3, -43px 43px #22b1e3, -44px 44px #22b1e3, -45px 45px #22b1e3, -46px 46px #22b1e3, -47px 47px #22b1e3, -48px 48px #22b1e3, -49px 49px #22b1e3, -50px 50px #22b1e3, -51px 51px #22b1e3, -52px 52px #22b1e3, -53px 53px #22b1e3, -54px 54px #22b1e3, -55px 55px #22b1e3, -56px 56px #22b1e3, -57px 57px #22b1e3, -58px 58px #22b1e3, -59px 59px #22b1e3, -60px 60px #22b1e3, -61px 61px #22b1e3, -62px 62px #22b1e3, -63px 63px #22b1e3, -64px 64px #22b1e3, -65px 65px #22b1e3, -66px 66px #22b1e3, -67px 67px #22b1e3, -68px 68px #22b1e3, -69px 69px #22b1e3, -70px 70px #22b1e3, -71px 71px #22b1e3, -72px 72px #22b1e3, -73px 73px #22b1e3, -74px 74px #22b1e3, -75px 75px #22b1e3, -76px 76px #22b1e3, -77px 77px #22b1e3, -78px 78px #22b1e3, -79px 79px #22b1e3, -80px 80px #22b1e3, -81px 81px #22b1e3, -82px 82px #22b1e3, -83px 83px #22b1e3, -84px 84px #22b1e3, -85px 85px #22b1e3;\n}\n.button-longshadow-left.button-action:active, .button-longshadow-left.button-action.active, .button-longshadow-left.button-action.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-highlight {\n    text-shadow: 0px 0px #ff9f2c, -1px 1px #ff9f2c, -2px 2px #ff9f2c, -3px 3px #ff9f2c, -4px 4px #ff9f2c, -5px 5px #ff9f2c, -6px 6px #ff9f2c, -7px 7px #ff9f2c, -8px 8px #ff9f2c, -9px 9px #ff9f2c, -10px 10px #ff9f2c, -11px 11px #ff9f2c, -12px 12px #ff9f2c, -13px 13px #ff9f2c, -14px 14px #ff9f2c, -15px 15px #ff9f2c, -16px 16px #ff9f2c, -17px 17px #ff9f2c, -18px 18px #ff9f2c, -19px 19px #ff9f2c, -20px 20px #ff9f2c, -21px 21px #ff9f2c, -22px 22px #ff9f2c, -23px 23px #ff9f2c, -24px 24px #ff9f2c, -25px 25px #ff9f2c, -26px 26px #ff9f2c, -27px 27px #ff9f2c, -28px 28px #ff9f2c, -29px 29px #ff9f2c, -30px 30px #ff9f2c, -31px 31px #ff9f2c, -32px 32px #ff9f2c, -33px 33px #ff9f2c, -34px 34px #ff9f2c, -35px 35px #ff9f2c, -36px 36px #ff9f2c, -37px 37px #ff9f2c, -38px 38px #ff9f2c, -39px 39px #ff9f2c, -40px 40px #ff9f2c, -41px 41px #ff9f2c, -42px 42px #ff9f2c, -43px 43px #ff9f2c, -44px 44px #ff9f2c, -45px 45px #ff9f2c, -46px 46px #ff9f2c, -47px 47px #ff9f2c, -48px 48px #ff9f2c, -49px 49px #ff9f2c, -50px 50px #ff9f2c, -51px 51px #ff9f2c, -52px 52px #ff9f2c, -53px 53px #ff9f2c, -54px 54px #ff9f2c, -55px 55px #ff9f2c, -56px 56px #ff9f2c, -57px 57px #ff9f2c, -58px 58px #ff9f2c, -59px 59px #ff9f2c, -60px 60px #ff9f2c, -61px 61px #ff9f2c, -62px 62px #ff9f2c, -63px 63px #ff9f2c, -64px 64px #ff9f2c, -65px 65px #ff9f2c, -66px 66px #ff9f2c, -67px 67px #ff9f2c, -68px 68px #ff9f2c, -69px 69px #ff9f2c, -70px 70px #ff9f2c, -71px 71px #ff9f2c, -72px 72px #ff9f2c, -73px 73px #ff9f2c, -74px 74px #ff9f2c, -75px 75px #ff9f2c, -76px 76px #ff9f2c, -77px 77px #ff9f2c, -78px 78px #ff9f2c, -79px 79px #ff9f2c, -80px 80px #ff9f2c, -81px 81px #ff9f2c, -82px 82px #ff9f2c, -83px 83px #ff9f2c, -84px 84px #ff9f2c, -85px 85px #ff9f2c;\n}\n.button-longshadow-left.button-highlight:active, .button-longshadow-left.button-highlight.active, .button-longshadow-left.button-highlight.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-caution {\n    text-shadow: 0px 0px #fa5a46, -1px 1px #fa5a46, -2px 2px #fa5a46, -3px 3px #fa5a46, -4px 4px #fa5a46, -5px 5px #fa5a46, -6px 6px #fa5a46, -7px 7px #fa5a46, -8px 8px #fa5a46, -9px 9px #fa5a46, -10px 10px #fa5a46, -11px 11px #fa5a46, -12px 12px #fa5a46, -13px 13px #fa5a46, -14px 14px #fa5a46, -15px 15px #fa5a46, -16px 16px #fa5a46, -17px 17px #fa5a46, -18px 18px #fa5a46, -19px 19px #fa5a46, -20px 20px #fa5a46, -21px 21px #fa5a46, -22px 22px #fa5a46, -23px 23px #fa5a46, -24px 24px #fa5a46, -25px 25px #fa5a46, -26px 26px #fa5a46, -27px 27px #fa5a46, -28px 28px #fa5a46, -29px 29px #fa5a46, -30px 30px #fa5a46, -31px 31px #fa5a46, -32px 32px #fa5a46, -33px 33px #fa5a46, -34px 34px #fa5a46, -35px 35px #fa5a46, -36px 36px #fa5a46, -37px 37px #fa5a46, -38px 38px #fa5a46, -39px 39px #fa5a46, -40px 40px #fa5a46, -41px 41px #fa5a46, -42px 42px #fa5a46, -43px 43px #fa5a46, -44px 44px #fa5a46, -45px 45px #fa5a46, -46px 46px #fa5a46, -47px 47px #fa5a46, -48px 48px #fa5a46, -49px 49px #fa5a46, -50px 50px #fa5a46, -51px 51px #fa5a46, -52px 52px #fa5a46, -53px 53px #fa5a46, -54px 54px #fa5a46, -55px 55px #fa5a46, -56px 56px #fa5a46, -57px 57px #fa5a46, -58px 58px #fa5a46, -59px 59px #fa5a46, -60px 60px #fa5a46, -61px 61px #fa5a46, -62px 62px #fa5a46, -63px 63px #fa5a46, -64px 64px #fa5a46, -65px 65px #fa5a46, -66px 66px #fa5a46, -67px 67px #fa5a46, -68px 68px #fa5a46, -69px 69px #fa5a46, -70px 70px #fa5a46, -71px 71px #fa5a46, -72px 72px #fa5a46, -73px 73px #fa5a46, -74px 74px #fa5a46, -75px 75px #fa5a46, -76px 76px #fa5a46, -77px 77px #fa5a46, -78px 78px #fa5a46, -79px 79px #fa5a46, -80px 80px #fa5a46, -81px 81px #fa5a46, -82px 82px #fa5a46, -83px 83px #fa5a46, -84px 84px #fa5a46, -85px 85px #fa5a46;\n}\n.button-longshadow-left.button-caution:active, .button-longshadow-left.button-caution.active, .button-longshadow-left.button-caution.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-royal {\n    text-shadow: 0px 0px #1baa7d, -1px 1px #1baa7d, -2px 2px #1baa7d, -3px 3px #1baa7d, -4px 4px #1baa7d, -5px 5px #1baa7d, -6px 6px #1baa7d, -7px 7px #1baa7d, -8px 8px #1baa7d, -9px 9px #1baa7d, -10px 10px #1baa7d, -11px 11px #1baa7d, -12px 12px #1baa7d, -13px 13px #1baa7d, -14px 14px #1baa7d, -15px 15px #1baa7d, -16px 16px #1baa7d, -17px 17px #1baa7d, -18px 18px #1baa7d, -19px 19px #1baa7d, -20px 20px #1baa7d, -21px 21px #1baa7d, -22px 22px #1baa7d, -23px 23px #1baa7d, -24px 24px #1baa7d, -25px 25px #1baa7d, -26px 26px #1baa7d, -27px 27px #1baa7d, -28px 28px #1baa7d, -29px 29px #1baa7d, -30px 30px #1baa7d, -31px 31px #1baa7d, -32px 32px #1baa7d, -33px 33px #1baa7d, -34px 34px #1baa7d, -35px 35px #1baa7d, -36px 36px #1baa7d, -37px 37px #1baa7d, -38px 38px #1baa7d, -39px 39px #1baa7d, -40px 40px #1baa7d, -41px 41px #1baa7d, -42px 42px #1baa7d, -43px 43px #1baa7d, -44px 44px #1baa7d, -45px 45px #1baa7d, -46px 46px #1baa7d, -47px 47px #1baa7d, -48px 48px #1baa7d, -49px 49px #1baa7d, -50px 50px #1baa7d, -51px 51px #1baa7d, -52px 52px #1baa7d, -53px 53px #1baa7d, -54px 54px #1baa7d, -55px 55px #1baa7d, -56px 56px #1baa7d, -57px 57px #1baa7d, -58px 58px #1baa7d, -59px 59px #1baa7d, -60px 60px #1baa7d, -61px 61px #1baa7d, -62px 62px #1baa7d, -63px 63px #1baa7d, -64px 64px #1baa7d, -65px 65px #1baa7d, -66px 66px #1baa7d, -67px 67px #1baa7d, -68px 68px #1baa7d, -69px 69px #1baa7d, -70px 70px #1baa7d, -71px 71px #1baa7d, -72px 72px #1baa7d, -73px 73px #1baa7d, -74px 74px #1baa7d, -75px 75px #1baa7d, -76px 76px #1baa7d, -77px 77px #1baa7d, -78px 78px #1baa7d, -79px 79px #1baa7d, -80px 80px #1baa7d, -81px 81px #1baa7d, -82px 82px #1baa7d, -83px 83px #1baa7d, -84px 84px #1baa7d, -85px 85px #1baa7d;\n}\n.button-longshadow-left.button-royal:active, .button-longshadow-left.button-royal.active, .button-longshadow-left.button-royal.is-active {\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n\n/*\n* Button Sizes\n*\n* This file creates the various button sizes\n* (ex. .button-large, .button-small, etc.)\n*/\n.button-giant {\n  font-size: 28px;\n  height: 70px;\n  line-height: 70px;\n  padding: 0 70px;\n}\n.button-jumbo {\n  font-size: 24px;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 60px;\n}\n.button-large {\n  font-size: 20px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 50px;\n}\n.button-normal {\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 40px;\n}\n.button-small {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 30px;\n}\n.button-tiny {\n  font-size: 9.6px;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 24px;\n}\na:hover,\na:focus {\n  color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1422);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("b94321a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!./ladda-themeless.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!./ladda-themeless.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Ladda\r\n * http://lab.hakim.se/ladda\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\r\n */\n.ladda-button{position:relative\n}\n.ladda-button .ladda-spinner{position:absolute;z-index:2;display:inline-block;width:32px;height:32px;top:50%;margin-top:0;opacity:0;pointer-events:none\n}\n.ladda-button .ladda-label{position:relative;z-index:3\n}\n.ladda-button .ladda-progress{position:absolute;width:0;height:100%;left:0;top:0;background:rgba(0,0,0,0.2);visibility:hidden;opacity:0;-webkit-transition:0.1s linear all !important;-moz-transition:0.1s linear all !important;-ms-transition:0.1s linear all !important;-o-transition:0.1s linear all !important;transition:0.1s linear all !important\n}\n.ladda-button[data-loading] .ladda-progress{opacity:1;visibility:visible\n}\n.ladda-button,.ladda-button .ladda-spinner,.ladda-button .ladda-label{-webkit-transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;-moz-transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;-ms-transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;-o-transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important\n}\n.ladda-button[data-style=zoom-in],.ladda-button[data-style=zoom-in] .ladda-spinner,.ladda-button[data-style=zoom-in] .ladda-label,.ladda-button[data-style=zoom-out],.ladda-button[data-style=zoom-out] .ladda-spinner,.ladda-button[data-style=zoom-out] .ladda-label{-webkit-transition:0.3s ease all !important;-moz-transition:0.3s ease all !important;-ms-transition:0.3s ease all !important;-o-transition:0.3s ease all !important;transition:0.3s ease all !important\n}\n.ladda-button[data-style=expand-right] .ladda-spinner{right:-6px\n}\n.ladda-button[data-style=expand-right][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-right][data-size=\"xs\"] .ladda-spinner{right:-12px\n}\n.ladda-button[data-style=expand-right][data-loading]{padding-right:56px\n}\n.ladda-button[data-style=expand-right][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=expand-right][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-right][data-loading][data-size=\"xs\"]{padding-right:40px\n}\n.ladda-button[data-style=expand-left] .ladda-spinner{left:26px\n}\n.ladda-button[data-style=expand-left][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-left][data-size=\"xs\"] .ladda-spinner{left:4px\n}\n.ladda-button[data-style=expand-left][data-loading]{padding-left:56px\n}\n.ladda-button[data-style=expand-left][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=expand-left][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-left][data-loading][data-size=\"xs\"]{padding-left:40px\n}\n.ladda-button[data-style=expand-up]{overflow:hidden\n}\n.ladda-button[data-style=expand-up] .ladda-spinner{top:-32px;left:50%;margin-left:0\n}\n.ladda-button[data-style=expand-up][data-loading]{padding-top:54px\n}\n.ladda-button[data-style=expand-up][data-loading] .ladda-spinner{opacity:1;top:26px;margin-top:0\n}\n.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-up][data-loading][data-size=\"xs\"]{padding-top:32px\n}\n.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-up][data-loading][data-size=\"xs\"] .ladda-spinner{top:4px\n}\n.ladda-button[data-style=expand-down]{overflow:hidden\n}\n.ladda-button[data-style=expand-down] .ladda-spinner{top:62px;left:50%;margin-left:0\n}\n.ladda-button[data-style=expand-down][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-down][data-size=\"xs\"] .ladda-spinner{top:40px\n}\n.ladda-button[data-style=expand-down][data-loading]{padding-bottom:54px\n}\n.ladda-button[data-style=expand-down][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=expand-down][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-down][data-loading][data-size=\"xs\"]{padding-bottom:32px\n}\n.ladda-button[data-style=slide-left]{overflow:hidden\n}\n.ladda-button[data-style=slide-left] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-left] .ladda-spinner{left:100%;margin-left:0\n}\n.ladda-button[data-style=slide-left][data-loading] .ladda-label{opacity:0;left:-100%\n}\n.ladda-button[data-style=slide-left][data-loading] .ladda-spinner{opacity:1;left:50%\n}\n.ladda-button[data-style=slide-right]{overflow:hidden\n}\n.ladda-button[data-style=slide-right] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-right] .ladda-spinner{right:100%;margin-left:0;left:16px\n}\n.ladda-button[data-style=slide-right][data-loading] .ladda-label{opacity:0;left:100%\n}\n.ladda-button[data-style=slide-right][data-loading] .ladda-spinner{opacity:1;left:50%\n}\n.ladda-button[data-style=slide-up]{overflow:hidden\n}\n.ladda-button[data-style=slide-up] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-up] .ladda-spinner{left:50%;margin-left:0;margin-top:1em\n}\n.ladda-button[data-style=slide-up][data-loading] .ladda-label{opacity:0;top:-1em\n}\n.ladda-button[data-style=slide-up][data-loading] .ladda-spinner{opacity:1;margin-top:0\n}\n.ladda-button[data-style=slide-down]{overflow:hidden\n}\n.ladda-button[data-style=slide-down] .ladda-label{position:relative\n}\n.ladda-button[data-style=slide-down] .ladda-spinner{left:50%;margin-left:0;margin-top:-2em\n}\n.ladda-button[data-style=slide-down][data-loading] .ladda-label{opacity:0;top:1em\n}\n.ladda-button[data-style=slide-down][data-loading] .ladda-spinner{opacity:1;margin-top:0\n}\n.ladda-button[data-style=zoom-out]{overflow:hidden\n}\n.ladda-button[data-style=zoom-out] .ladda-spinner{left:50%;margin-left:32px;-webkit-transform:scale(2.5);-moz-transform:scale(2.5);-ms-transform:scale(2.5);-o-transform:scale(2.5);transform:scale(2.5)\n}\n.ladda-button[data-style=zoom-out] .ladda-label{position:relative;display:inline-block\n}\n.ladda-button[data-style=zoom-out][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(0.5);-moz-transform:scale(0.5);-ms-transform:scale(0.5);-o-transform:scale(0.5);transform:scale(0.5)\n}\n.ladda-button[data-style=zoom-out][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none\n}\n.ladda-button[data-style=zoom-in]{overflow:hidden\n}\n.ladda-button[data-style=zoom-in] .ladda-spinner{left:50%;margin-left:-16px;-webkit-transform:scale(0.2);-moz-transform:scale(0.2);-ms-transform:scale(0.2);-o-transform:scale(0.2);transform:scale(0.2)\n}\n.ladda-button[data-style=zoom-in] .ladda-label{position:relative;display:inline-block\n}\n.ladda-button[data-style=zoom-in][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(2.2);-moz-transform:scale(2.2);-ms-transform:scale(2.2);-o-transform:scale(2.2);transform:scale(2.2)\n}\n.ladda-button[data-style=zoom-in][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none\n}\n.ladda-button[data-style=contract]{overflow:hidden;width:100px\n}\n.ladda-button[data-style=contract] .ladda-spinner{left:50%;margin-left:0\n}\n.ladda-button[data-style=contract][data-loading]{border-radius:50%;width:52px\n}\n.ladda-button[data-style=contract][data-loading] .ladda-label{opacity:0\n}\n.ladda-button[data-style=contract][data-loading] .ladda-spinner{opacity:1\n}\n.ladda-button[data-style=contract-overlay]{overflow:hidden;width:100px;box-shadow:0px 0px 0px 2000px transparent\n}\n.ladda-button[data-style=contract-overlay] .ladda-spinner{left:50%;margin-left:0\n}\n.ladda-button[data-style=contract-overlay][data-loading]{border-radius:50%;width:52px;box-shadow:0px 0px 0px 2000px rgba(0,0,0,0.8)\n}\n.ladda-button[data-style=contract-overlay][data-loading] .ladda-label{opacity:0\n}\n.ladda-button[data-style=contract-overlay][data-loading] .ladda-spinner{opacity:1\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1424);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("3de2f043", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!./advbuttons.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!./advbuttons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/* flatbuttons */\nli {\n    list-style : none;\n}\n.flatbuttons {\n    padding-left : 4%;\n}\n.flatbuttons ul {\n    padding : 20px;\n}\n.flatbuttons ul li {\n    width      : 145px;\n    float      : left;\n    padding    : 5px;\n    list-style : none;\n}\n.flatbuttons div {\n    clear          : both;\n    padding-top    : 15px;\n    padding-bottom : 0;\n}\n.btn-rounded .button {\n    padding : 0 18px;\n}\n.flatbuttons .icon-btn {\n    padding : 0 29px;\n}\n/* flatbuttons for small width. */\n.flatbuttons_small ul li {\n    width   : 138px;\n    float   : left;\n    padding : 10px 20px 20px 0;\n}\n/*quick icons*/\n.panel-body .btn:not(.btn-block) {\n    margin-bottom : 10px;\n}\n/*Group buttons panel*/\n.ui-group-buttons .or {\n    position  : relative;\n    float     : left;\n    width     : .3em;\n    height    : 1.3em;\n    z-index   : 3;\n    font-size : 12px\n}\n.ui-group-buttons .or:before {\n    position           : absolute;\n    top                : 50%;\n    left               : 50%;\n    content            : 'or';\n    background-color   : #5a5a5a;\n    margin-top         : -.1em;\n    margin-left        : -.9em;\n    width              : 1.8em;\n    height             : 1.8em;\n    line-height        : 1.55;\n    color              : #fff;\n    font-style         : normal;\n    font-weight        : 400;\n    text-align         : center;\n    border-radius      : 500px;\n    -webkit-box-shadow : 0 0 0 1px rgba(0, 0, 0, 0.1);\n    box-shadow         : 0 0 0 1px rgba(0, 0, 0, 0.1);\n    -webkit-box-sizing : border-box;\n    -moz-box-sizing    : border-box;\n    box-sizing         : border-box\n}\n.ui-group-buttons .or:after {\n    position         : absolute;\n    top              : 0;\n    left             : 0;\n    content          : ' ';\n    width            : .3em;\n    height           : 2.84em;\n    background-color : rgba(0, 0, 0, 0);\n    border-top       : .6em solid #5a5a5a;\n    border-bottom    : .6em solid #5a5a5a\n}\n.ui-group-buttons .or.or-lg {\n    height    : 1.3em;\n    font-size : 16px\n}\n.ui-group-buttons .or.or-lg:after {\n    height : 2.85em\n}\n.ui-group-buttons .or.or-sm {\n    height : 1em\n}\n.ui-group-buttons .or.or-sm:after {\n    height : 2.5em\n}\n.ui-group-buttons .or.or-xs {\n    height : .25em\n}\n.ui-group-buttons .or.or-xs:after {\n    height  : 1.84em;\n    z-index : -1000\n}\n.ui-group-buttons {\n    display        : inline-block;\n    vertical-align : middle\n}\n.ui-group-buttons:after {\n    content    : \".\";\n    display    : block;\n    height     : 0;\n    clear      : both;\n    visibility : hidden\n}\n.ui-group-buttons .btn {\n    float         : left;\n    border-radius : 0\n}\n.ui-group-buttons .btn:first-child {\n    margin-left               : 0;\n    border-top-left-radius    : .25em;\n    border-bottom-left-radius : .25em;\n    padding-right             : 15px\n}\n.ui-group-buttons .btn:last-child {\n    border-top-right-radius    : .25em;\n    border-bottom-right-radius : .25em;\n    padding-left               : 15px\n}\n/*Group buttons panel ens here*/\n\n/*Buttons With Labels*/\n.btn-label {\n    position   : relative;\n    left       : -12px;\n    display    : inline-block;\n    padding    : 6px 15px;\n    background : rgba(0, 0, 0, 0.15);\n    /*border-radius: 3px 0 0 3px;*/\n}\n.btn-label.label-right {\n    left : 13px;\n}\n.btn-labeled {\n    padding-top    : 0;\n    padding-bottom : 0;\n}\n.btn_3d {\n    box-shadow : 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2) !important;\n}\n.button-circle {\n    width  : 115px;\n    height : 115px;\n}\n/*outline buttons*/\n.flatbuttons button {\n    margin-top : 20px;\n}\n.btn-up:before {\n    left                : 11%;\n    top                 : 373px;\n    margin-left         : -8px;\n    border-bottom-color : #6699cc;\n}\n.btn-direction:before {\n    position    : absolute;\n    line-height : 0;\n    content     : '';\n    border      : 8px solid transparent;\n}\n.btn-primary.btn-up:before {\n    border-bottom-color : #6699cc;\n}\n.btn-warning.btn-right:focus:before,\n.btn-warning.btn-right:hover:before {\n    border-left-color : #f0ad4e;\n}\n.btn-warning.btn-right:before {\n    border-left-color : #f0ad4e;\n}\n.btn-right:before {\n    top               : 56%;\n    left              : 33%;\n    margin-top        : -8px;\n    border-left-color : #e4eaec;\n}\n.btn-success.btn-bottom:before {\n    border-top-color : #66cc99;\n}\n.btn-bottom:before {\n    bottom           : 39.1%;\n    left             : 47%;\n    margin-left      : -8px;\n    border-top-color : #66cc99;\n}\n.btn-danger.btn-left:before {\n    border-right-color : #ff6666;\n}\n.btn-left:before {\n    top                : 56%;\n    left               : 58.8%;\n    margin-top         : -8px;\n    border-right-color : #ff6666;\n}\n/*animate button*/\n.btn-animate-side:hover span > .icon {\n    opacity : 1;\n}\n.btn-animate-side span > .icon {\n    position           : absolute;\n    top                : 91%;\n    left               : 90px;\n    display            : block;\n    opacity            : 0;\n    -webkit-transition : opacity .2s ease-out 0s;\n    -o-transition      : opacity .2s ease-out 0s;\n    transition         : opacity .2s ease-out 0s;\n    -webkit-transform  : translate(-20px, -50%);\n    -ms-transform      : translate(-20px, -50%);\n    -o-transform       : translate(-20px, -50%);\n    transform          : translate(-20px, -50%);\n}\n.btn-animate-vertical:hover span > .icon {\n    opacity : 1;\n}\n.btn-animate-vertical span > .icon {\n    position          : absolute;\n    top               : inherit;\n    left              : 33%;\n    display           : block;\n    font-size         : 24px;\n    -webkit-transform : translate(-50%, -100%);\n    -ms-transform     : translate(-50%, -100%);\n    -o-transform      : translate(-50%, -100%);\n    transform         : translate(-50%, -100%);\n}\n.btn .icon {\n    width       : 1em;\n    margin      : -1px 3px 0;\n    line-height : inherit;\n    text-align  : center;\n}\n.btn-animate span {\n    display : block;\n    width   : 100%;\n    height  : 100%;\n}\n.btn-animate-side span:hover {\n    -webkit-transition : -webkit-transform .2s ease-out 0s;\n    -o-transition      : -o-transform .2s ease-out 0s;\n    transition         : transform .2s ease-out 0s;\n}\n.btn-animate-side:hover {\n    padding : 8px 28px;\n}\n/* vertical animation code*/\n.btn-animate-vertical span {\n    -webkit-transition : all .2s ease-out 0s;\n    -o-transition      : all .2s ease-out 0s;\n    transition         : all .2s ease-out 0s;\n}\n.btn-animate-vertical:focus,\n.btn-animate-vertical:active,\n.btn-animate-vertical:hover {\n    outline : none;\n}\n.btn-animate-vertical span > .icon {\n    opacity           : 0;\n    position          : absolute;\n    top               : -2px;\n    left              : 50%;\n    display           : block;\n    font-size         : 24px;\n    -webkit-transform : translate(-50%, -100%);\n    -ms-transform     : translate(-50%, -100%);\n    -o-transform      : translate(-50%, -100%);\n    transform         : translate(-50%, -100%);\n}\n.btn-animate-vertical:hover span {\n    -webkit-transform : translate(0, 150%);\n    -ms-transform     : translate(0, 150%);\n    -o-transform      : translate(0, 150%);\n    transform         : translate(0, 150%)\n}\n.btn-animate-vertical.btn-xs span > .icon {\n    top       : -5px;\n    font-size : 18px\n}\n.btn-animate-vertical.btn-sm span > .icon {\n    top       : -3px;\n    font-size : 21px\n}\n.btn-animate-vertical.btn-lg span > .icon {\n    font-size : 37px\n}\n/*side animation code*/\n.btn-animate-side {\n    padding : 8px 28px\n}\n.btn-animate-side span {\n    -webkit-transition : -webkit-transform .2s ease-out 0s;\n    -o-transition      : -o-transform .2s ease-out 0s;\n    transition         : transform .2s ease-out 0s\n}\n.btn-animate-side span > .icon {\n    position           : absolute;\n    top                : 50%;\n    left               : 0;\n    display            : block;\n    opacity            : 0;\n    -webkit-transition : opacity .2s ease-out 0s;\n    -o-transition      : opacity .2s ease-out 0s;\n    transition         : opacity .2s ease-out 0s;\n    -webkit-transform  : translate(-20px, -50%);\n    -ms-transform      : translate(-20px, -50%);\n    -o-transform       : translate(-20px, -50%);\n    transform          : translate(-20px, -50%)\n}\n.btn-animate-side:hover span {\n    -webkit-transform : translate(10px, 0);\n    -ms-transform     : translate(10px, 0);\n    -o-transform      : translate(10px, 0);\n    transform         : translate(10px, 0)\n}\n.btn-animate-side:hover span > .icon {\n    opacity : 1\n}\n.btn-animate-side.btn-xs {\n    padding : 3px 14px\n}\n.btn-animate-side.btn-xs span > .icon {\n    left : 5px\n}\n.btn-animate-side.btn-xs:hover span {\n    -webkit-transform : translate(8px, 0);\n    -ms-transform     : translate(8px, 0);\n    -o-transform      : translate(8px, 0);\n    transform         : translate(8px, 0)\n}\n.btn-animate-side.btn-sm {\n    padding : 6px 22px\n}\n.btn-animate-side.btn-sm span > .icon {\n    left : 3px\n}\n.btn-animate-side.btn-sm:hover span {\n    -webkit-transform : translate(8px, 0);\n    -ms-transform     : translate(8px, 0);\n    -o-transform      : translate(8px, 0);\n    transform         : translate(8px, 0)\n}\n.btn-animate-side.btn-lg {\n    padding : 10px 33px\n}\n.btn-animate-side.btn-lg span > .icon {\n    left : -6px\n}\n.btn-animate-side.btn-lg:hover span {\n    -webkit-transform : translate(14px, 0);\n    -ms-transform     : translate(14px, 0);\n    -o-transform      : translate(14px, 0);\n    transform         : translate(14px, 0)\n}\n.btn-floating {\n    width              : 56px;\n    height             : 56px;\n    padding            : 0;\n    margin             : 0;\n    font-size          : 24px;\n    text-align         : center;\n    border-radius      : 100%;\n    -webkit-box-shadow : 0 6px 10px rgba(0, 0, 0, .15);\n    box-shadow         : 0 6px 10px rgba(0, 0, 0, .15);\n}\n.btn-floating.btn-sm {\n    width     : 40px;\n    height    : 40px;\n    padding   : 0;\n    font-size : 15px;\n}\n/*contract overlay button size*/\n.ladda-button[data-style=contract-overlay] {\n    width : 140px;\n}\n.pad_left {\n    padding-left : 40px;\n}\n.flatbuttons div {\n    padding-top : 10px;\n}\n.m-r-50 {\n    margin-right : 50px;\n}\n.btn-group.drop_btn {\n    padding-top : 0;\n}", ""]);

// exports


/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1426);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("c0d6d792", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=4!./buttons.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c1e435\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=4!./buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.ladda-spinner div {\n    top: 5px !important;\n    left: 5px !important;\n}\n.quick_shortcuts .btn-responsive,.quick_shortcuts .btn-block {\n    margin-top: 0.5rem;\n}\n.ui-group-buttons .btn-default{\n    background-color: #ccc;\n}\n.example-buttons .btn{\n    padding: 0.6rem 1.25rem;\n    font-size: 1.1rem;\n}\n.hvr-buzz{\n    padding-right: 40px;\n    padding-left: 40px;\n    color: #666;\n}\n.ui-group-buttons .or-lg:before{\n        width:1.5em;\n        height:1.5em;\n        top: 7px;\n        left:85%;\n}\n.ui-group-buttons .or-lg:after{\n        height:2.75rem !important;\n}\n.or-sm:after{\n        border-bottom: 2rem solid #5a5a5a !important;\n}\n.pad_left .ladda-button{\n        margin-bottom: 10px;\n}\n.flatbuttons  .hvr-buzz:hover{\n        color: #333;\n}\n.button:active,.btn:active,.btn-success:focus,.ui-group-buttons .btn-default,.ui-group-buttons a{\n        color:#fff !important;\n}\n.button-default:active,.hvr-buzz:active,.btn-default.text-dark:active{\n        color: #333 !important;\n}\n.btn-animate-vertical{\n        padding: 8px 12px;\n}\n.ui-group-buttons .or:after{\n        height:2.75em;\n}\n.ui-group-buttons .or.or-sm{\n        height: 1.4em;\n}\n@media(max-width: 1024px){\n.boxed .pad_left{\n            padding-left: 0;\n}\n.boxed .pad_left .text-left .col-md-2,.boxed .pad_left .text-left .col-sm-4{\n            padding-left: 13px;\n            padding-right: 13px;\n            margin-right: 10px;\n}\n.labled_buttons .col-md-6{\n            margin-right: 10px;\n}\n}\n.btn-labeled{\n        margin-bottom: 10px;\n}\n.flatbuttons ul{\n        padding-top: 0;\n}\n.flatbuttons button{\n        margin-top: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Buttons_js_buttons_js__ = __webpack_require__(1428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Buttons_js_buttons_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Buttons_js_buttons_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Ladda = __webpack_require__(1429);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "buttons",
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    mounted: function mounted() {
        "use strict";
        //INITIALIZE PAGE
        // Bind normal buttons

        Ladda.bind('.button_normal', {
            timeout: 3000
        });

        // Bind progress buttons and simulate loading progress
        Ladda.bind('.button_progress', {
            callback: function callback(instance) {
                var progress = 0;
                var interval = setInterval(function () {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance.setProgress(progress);

                    if (progress === 1) {
                        instance.stop();
                        clearInterval(interval);
                    }
                }, 200);
            }
        });
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! @license
*  Project: Buttons
*  Description: A highly customizable CSS button library built with Sass and Compass
*  Author: Alex Wolfe and Rob Levin
*  License: Apache License v2.0
*/


// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
  'use strict';

  // undefined is used here as the undefined global variable in ECMAScript 3 is
  // mutable (ie. it can be changed by someone else). undefined isn't really being
  // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
  // can no longer be modified.

  // window and document are passed through as local variable rather than global
  // as this (slightly) quickens the resolution process and can be more efficiently
  // minified (especially when both are regularly referenced in your plugin).

  // Create the defaults once
  var pluginName = "menuButton";
  var menuClass = ".button-dropdown";
  var defaults = {
    propertyName: "value"
  };

  // The actual plugin constructor
  function Plugin( element, options ) {

    //SET OPTIONS
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;

    //REGISTER ELEMENT
    this.$element = $(element);

    //INITIALIZE
    this.init();
  }

  Plugin.prototype = {
    constructor: Plugin,

    init: function() {
      // WE DON'T STOP PROPGATION SO CLICKS WILL AUTOMATICALLY
      // TOGGLE AND REMOVE THE DROPDOWN
      this.toggle();
    },

    toggle: function(el, options) {
      if(this.$element.data('dropdown') === 'show') {
        this.hideMenu();
      }
      else {
        this.showMenu();
      }
    },

    showMenu: function() {
      this.$element.data('dropdown', 'show');
      this.$element.find('ul').show();
      this.$element.find('.button:first').addClass('is-active');
    },

    hideMenu: function() {
      this.$element.data('dropdown', 'hide');
      this.$element.find('ul').hide();
      this.$element.find('.button:first').removeClass('is-active');
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {

      // TOGGLE BUTTON IF IT EXISTS
      if ($.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName).toggle();
      }
      // OTHERWISE CREATE A NEW INSTANCE
      else {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

  //CLOSE OPEN DROPDOWN MENUS IF CLICKED SOMEWHERE ELSE
  $(document).on('click', function(e) {
    $.each($('[data-buttons=dropdown]'), function(i, value) {
      if ($(e.target.offsetParent)[0] != $(this)[0]) {
        if ($.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName).hideMenu();
          $(this).find('ul').hide();
        }
      }
    });
  });

  //DELEGATE CLICK EVENT FOR DROPDOWN MENUS
  $(document).on('click', '[data-buttons=dropdown]', function(e) {
    var $dropdown = $(e.currentTarget);
    $dropdown.menuButton();
  });

  //IGNORE CLICK EVENTS FROM DISPLAY BUTTON IN DROPDOWN
  $(document).on('click', '[data-buttons=dropdown] > a', function(e) {
    e.preventDefault();
  });

})( jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(525)))

/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Ladda 1.0.6 (2018-02-04, 13:19)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */

!function(t,e){"use strict"; true?module.exports=e(__webpack_require__(1430)):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)}(this,function(t){"use strict";var e=[];function a(a){if(void 0!==a){if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var u=document.createElement("span");u.className="ladda-label",n=a,i=u,(r=document.createRange()).selectNodeContents(n),r.surroundContents(i),n.appendChild(i)}var n,i,r,d,o,s=a.querySelector(".ladda-spinner");s||((s=document.createElement("span")).className="ladda-spinner"),a.appendChild(s);var F={start:function(){return d||(d=function(e){var a,u,n=e.offsetHeight;0===n&&(n=parseFloat(window.getComputedStyle(e).height));n>32&&(n*=.8);e.hasAttribute("data-spinner-size")&&(n=parseInt(e.getAttribute("data-spinner-size"),10));e.hasAttribute("data-spinner-color")&&(a=e.getAttribute("data-spinner-color"));e.hasAttribute("data-spinner-lines")&&(u=parseInt(e.getAttribute("data-spinner-lines"),10));var i=.2*n;return new t({color:a||"#fff",lines:u||12,radius:i,length:.6*i,width:i<7?2:3,zIndex:"auto",top:"auto",left:"auto",className:""})}(a)),a.disabled=!0,a.setAttribute("data-loading",""),clearTimeout(o),d.spin(s),this.setProgress(0),this},startAfter:function(t){return clearTimeout(o),o=setTimeout(function(){F.start()},t),this},stop:function(){return F.isLoading()&&(a.disabled=!1,a.removeAttribute("data-loading")),clearTimeout(o),d&&(o=setTimeout(function(){d.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(t){t=Math.max(Math.min(t,1),0);var e=a.querySelector(".ladda-progress");0===t&&e&&e.parentNode?e.parentNode.removeChild(e):(e||((e=document.createElement("div")).className="ladda-progress",a.appendChild(e)),e.style.width=(t||0)*a.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),a.disabled=!0,this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(o),a.disabled=!1,a.removeAttribute("data-loading"),d&&(d.stop(),d=null),e.splice(e.indexOf(F),1)}};return e.push(F),F}console.warn("Ladda button target must be defined.")}function u(t,e){if("function"==typeof t.addEventListener){var u=a(t),n=-1;t.addEventListener("click",function(){var a,i,r=!0,d=function(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}(t,"FORM");if(void 0!==d&&!d.hasAttribute("novalidate"))if("function"==typeof d.checkValidity)r=d.checkValidity();else for(var o=(a=d,i=[],["input","textarea","select"].forEach(function(t){for(var e=a.getElementsByTagName(t),u=0;u<e.length;u++)e[u].hasAttribute("required")&&i.push(e[u])}),i),s=0;s<o.length;s++){var F=o[s],l=F.getAttribute("type");if(""===F.value.replace(/^\s+|\s+$/g,"")&&(r=!1),"checkbox"!==l&&"radio"!==l||F.checked||(r=!1),"email"===l&&(r=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(F.value)),"url"===l&&(r=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(F.value)),!r)break}r&&(u.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(n),n=setTimeout(u.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[u]))},!1)}}return{bind:function(t,e){var a;if("string"==typeof t)a=document.querySelectorAll(t);else{if("object"!=typeof t)throw new Error("target must be string or object");a=[t]}e=e||{};for(var n=0;n<a.length;n++)u(a[n],e)},create:a,stopAll:function(){for(var t=0,a=e.length;t<a;t++)e[t].stop()}}});

/***/ }),

/***/ 1430:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  "<i class='fa fa-fw ti-settings'></i> 2D Transforms Flat Buttons"
              }
            },
            [
              _c("div", { staticClass: "flatbuttons" }, [
                _c("div", { staticClass: "text-left" }, [
                  _c("h5", [_vm._v("Radiused Buttons")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default btn-lg hvr-buzz butn",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Buzz")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-primary-flat hvr-hang"
                        },
                        [_vm._v("Hang\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-action-flat hvr-sink"
                        },
                        [_vm._v("Sink\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-highlight-flat hvr-pop"
                        },
                        [_vm._v("Pop\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-caution-flat hvr-float"
                        },
                        [_vm._v("Float\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-royal-flat hvr-rotate"
                        },
                        [_vm._v("Rotate\n                                ")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left btn-rounded" }, [
                  _c("h5", [_vm._v("Rounded Buttons")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-default button-pill button-flat hvr-grow"
                        },
                        [
                          _vm._v(
                            "\n                                    Grow Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-primary-flat hvr-shrink"
                        },
                        [
                          _vm._v(
                            "\n                                    ShrinkButton\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-action-flat hvr-pulse"
                        },
                        [
                          _vm._v(
                            "\n                                    Pulse Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-highlight-flat hvr-pulse-grow"
                        },
                        [
                          _vm._v(
                            "\n                                    Pulse-grow\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-caution-flat hvr-pulse-shrink"
                        },
                        [
                          _vm._v(
                            "\n                                    Pulse-shrink\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-royal-flat hvr-push"
                        },
                        [
                          _vm._v(
                            "\n                                    Push Button\n                                "
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left" }, [
                  _c("h5", [_vm._v("Rectangle Box")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-default button-flat hvr-wobble-skew"
                        },
                        [_vm._v("Button")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-primary-flat hvr-wobble-bottom"
                        },
                        [_vm._v("Button")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-action-flat hvr-wobble-to-top-right"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-highlight-flat hvr-wobble-vertical"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-caution-flat hvr-wobble-horizontal"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-royal-flat hvr-skew-backward"
                        },
                        [_vm._v("Button")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left" }, [
                  _c("h5", [_vm._v("Cirlce Buttons")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-default button-circle button-flat hvr-wobble-top"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-primary-flat hvr-skew"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-action-flat hvr-wobble-to-top-right"
                        },
                        [
                          _vm._v(
                            "\n                                    Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-highlight-flat hvr-pulse-grow"
                        },
                        [
                          _vm._v(
                            "\n                                    Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-caution-flat hvr-grow"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-royal-flat hvr-buzz-out"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ])
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
                title:
                  "<i class='ti-bell'></i> Shadow and Glow Transitions Buttons"
              }
            },
            [
              _c("div", { staticClass: "flatbuttons_small" }, [
                _c("ul", [
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-default button-glow button-rounded button-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-primary-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-action-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-highlight-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-caution-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-royal-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
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
            { attrs: { title: "<i class='ti-rocket'></i> Quick Shortcuts" } },
            [
              _c("div", { staticClass: "quick_shortcuts" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-list-alt" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Apps\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-bookmark" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Bookmarks\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-signal" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Reports\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-comment" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Comments\n                                ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-user" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Users\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-file" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Notes\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-picture-o" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Photos\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-tag" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Tags\n                                ")
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-md-12 mt-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-lg btn-block",
                      attrs: { role: "button" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-globe" }),
                      _vm._v(" Website\n                            ")
                    ]
                  )
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-rocket'></i> 3-D Buttons" } },
            [
              _c("div", { staticClass: "flatbuttons" }, [
                _c("ul", [
                  _c("li", [
                    _c(
                      "button",
                      { staticClass: "button button-default button-3d" },
                      [_vm._v("Button")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-primary button-rounded btn_3d"
                      },
                      [_vm._v("Button\n                            ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-action button-pill btn_3d"
                      },
                      [_vm._v("Button\n                            ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-highlight button-circle btn_3d"
                      },
                      [_vm._v("Button\n                            ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-caution icon-btn btn_3d"
                      },
                      [
                        _c("i", { staticClass: "fa ti-instagram" }),
                        _vm._v(" Button\n                            ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      { staticClass: "button button-3d button-royal btn_3d" },
                      [_vm._v("Button")]
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='ti-arrow-circle-up'></i> Spinner Buttons"
              }
            },
            [
              _c("div", { staticClass: "pad_left" }, [
                _c("div", { staticClass: "text-left" }, [
                  _c("div", { staticClass: "row " }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("h5", [_vm._v("Buttons")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "expand-left" }
                        },
                        [
                          _vm._v(
                            "Expand-left\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "expand-right" }
                        },
                        [
                          _vm._v(
                            "Expand-right\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "expand-up" }
                        },
                        [_vm._v("Expand-up\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "slide-down" }
                        },
                        [_vm._v("Slide-down\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "contract" }
                        },
                        [_vm._v("Contract")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "zoom-in" }
                        },
                        [_vm._v("Zoom-in\n                                ")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row " }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("h5", [_vm._v("Icon Buttons")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "slide-left" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa ti-arrow-circle-left",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            " Slide-left\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "slide-right" }
                        },
                        [
                          _vm._v("Slide-right "),
                          _c("i", {
                            staticClass: "fa ti-arrow-circle-right",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "slide-up" }
                        },
                        [
                          _vm._v("Slide-up "),
                          _c("i", {
                            staticClass: "fa ti-arrow-circle-up",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "contract" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa ti-filter",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n                                    Contract\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "zoom-out" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa ti-zoom-out",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Zoom-out\n                                ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12 col-sm-6" }, [
                      _c("div", { staticClass: "row text-left" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("h5", [_vm._v("Button Sizes")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-warning btn-lg button_normal text-white",
                              attrs: { "data-style": "expand-right" }
                            },
                            [
                              _vm._v(
                                "Large\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-warning  button_normal text-white",
                              attrs: { "data-style": "expand-right" }
                            },
                            [
                              _vm._v(
                                "Small\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 col-sm-6" }, [
                      _c("div", { staticClass: "row text-left" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("h5", [_vm._v("Progress Button Spinners")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-success button_progress text-white",
                              attrs: { "data-style": "expand-right" }
                            },
                            [
                              _vm._v(
                                "Expand-right\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-success button_progress text-white",
                              attrs: { "data-style": "contract" }
                            },
                            [
                              _vm._v(
                                "contract\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ])
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: { title: "<i class='fa fa-fw ti-settings'></i> Buttons" }
            },
            [
              _c("div", { staticClass: "flatbuttons" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("h5", { staticClass: "example-title" }, [
                      _vm._v("Icon Button & Dropdown")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "example example-buttons" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-default m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-location-pin",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-primary m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-layout-grid3",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-success m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-bell",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-info m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-calendar",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-icon btn-warning btn-round m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-time",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-icon btn-danger btn-round m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-flag-alt-2",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn-group drop_btn",
                          attrs: { role: "group" }
                        },
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "pt-0",
                              attrs: {
                                right: "",
                                split: "",
                                variant: "primary"
                              }
                            },
                            [
                              _c("template", { slot: "button-content" }, [
                                _c("i", { staticClass: "ti-calendar more" })
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [_vm._v("Dropdown")]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [_vm._v("Dropdown")])
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 " }, [
                    _c("div", { staticClass: "example-wrap" }, [
                      _c("h5", { staticClass: "example-title" }, [
                        _vm._v("Button Animation")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn-group display_media",
                          attrs: { role: "group" }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-animate btn-animate-side btn-success m-r-50",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass: "icon fa fa-fw ti-import",
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _vm._v("Side Animation")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-animate btn-animate-vertical btn-lg btn-success m-r-50",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass: "icon fa fa-fw ti-import",
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _vm._v(
                                      "Vertical\n                                                                  Animation"
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    ])
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
                title: "<i class='ti-layout-column3'></i> Group buttons"
              }
            },
            [
              _c("div", [
                _c("div", { staticClass: "col-md-12 text-center" }, [
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-thumbs-up" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-thumbs-down" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-floppy-o" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-trash" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v(" Sign Up\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-remove" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-lg",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Large")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or or-lg" }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-lg",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Large")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Default")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Success")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary ",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n                                Small\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or or-sm" }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success ",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n                                Small\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br")
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
              staticClass: "labled-buttons",
              attrs: { title: "<i class='ti-save'></i> Buttons With Labels" }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12 col-md-12 col-12 col-sm-12" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-success",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-check" })
                          ]),
                          _vm._v(" Success\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-danger",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-remove" })
                          ]),
                          _vm._v(" Cancel\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-warning",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-bookmark" })
                          ]),
                          _vm._v(" Bookmark\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-primary",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-camera" })
                          ]),
                          _vm._v(" Camera\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-default text-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-chevron-left" })
                          ]),
                          _vm._v(" Left\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-default text-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _vm._v("\n                                Right "),
                          _c("span", { staticClass: "btn-label label-right" }, [
                            _c("i", { staticClass: "fa fa-chevron-right" })
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-success",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-fw ti-thumb-up" })
                          ]),
                          _vm._v(" Up\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-warning",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-fw ti-thumb-down" })
                          ]),
                          _vm._v(" Down\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-info",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-refresh" })
                          ]),
                          _vm._v(" Refresh\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-primary",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-trash" })
                          ]),
                          _vm._v(" Trash\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-warning btn-labeled text-white",
                          attrs: { role: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label butn_clr" }, [
                            _c("i", { staticClass: "fa fa-info-circle" })
                          ]),
                          _vm._v(" Info Web\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-success btn-labeled text-white",
                          attrs: { role: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-globe" })
                          ]),
                          _vm._v(" Web\n                            ")
                        ]
                      )
                    ])
                  ])
                ]
              )
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
    require("vue-hot-reload-api")      .rerender("data-v-04c1e435", module.exports)
  }
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1417)
  __webpack_require__(1419)
  __webpack_require__(1421)
  __webpack_require__(1423)
  __webpack_require__(1425)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1427)
/* template */
var __vue_template__ = __webpack_require__(1431)
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
Component.options.__file = "resources/components/pages/buttons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04c1e435", Component.options)
  } else {
    hotAPI.reload("data-v-04c1e435", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


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