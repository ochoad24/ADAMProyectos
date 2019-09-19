webpackJsonp([135],{

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1441);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("5a8415ff", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a31a8a6\",\"scoped\":false,\"hasInlineConfig\":true}!./simple-line-icons.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a31a8a6\",\"scoped\":false,\"hasInlineConfig\":true}!./simple-line-icons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(28);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: 'simple-line-icons';\n  src: url(" + escape(__webpack_require__(575)) + ");\n  src: url(" + escape(__webpack_require__(575)) + "#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(616)) + ") format('woff2'), url(" + escape(__webpack_require__(617)) + ") format('truetype'), url(" + escape(__webpack_require__(618)) + ") format('woff'), url(" + escape(__webpack_require__(619)) + "#simple-line-icons) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n Use the following CSS code if you want to have a class per icon.\n Instead of a list of all class selectors, you can use the generic [class*=\"icon-\"] selector, but it's slower:\n*/\n.icon-user,\n.icon-people,\n.icon-user-female,\n.icon-user-follow,\n.icon-user-following,\n.icon-user-unfollow,\n.icon-login,\n.icon-logout,\n.icon-emotsmile,\n.icon-phone,\n.icon-call-end,\n.icon-call-in,\n.icon-call-out,\n.icon-map,\n.icon-location-pin,\n.icon-direction,\n.icon-directions,\n.icon-compass,\n.icon-layers,\n.icon-menu,\n.icon-list,\n.icon-options-vertical,\n.icon-options,\n.icon-arrow-down,\n.icon-arrow-left,\n.icon-arrow-right,\n.icon-arrow-up,\n.icon-arrow-up-circle,\n.icon-arrow-left-circle,\n.icon-arrow-right-circle,\n.icon-arrow-down-circle,\n.icon-check,\n.icon-clock,\n.icon-plus,\n.icon-minus,\n.icon-close,\n.icon-event,\n.icon-exclamation,\n.icon-organization,\n.icon-trophy,\n.icon-screen-smartphone,\n.icon-screen-desktop,\n.icon-plane,\n.icon-notebook,\n.icon-mustache,\n.icon-mouse,\n.icon-magnet,\n.icon-energy,\n.icon-disc,\n.icon-cursor,\n.icon-cursor-move,\n.icon-crop,\n.icon-chemistry,\n.icon-speedometer,\n.icon-shield,\n.icon-screen-tablet,\n.icon-magic-wand,\n.icon-hourglass,\n.icon-graduation,\n.icon-ghost,\n.icon-game-controller,\n.icon-fire,\n.icon-eyeglass,\n.icon-envelope-open,\n.icon-envelope-letter,\n.icon-bell,\n.icon-badge,\n.icon-anchor,\n.icon-wallet,\n.icon-vector,\n.icon-speech,\n.icon-puzzle,\n.icon-printer,\n.icon-present,\n.icon-playlist,\n.icon-pin,\n.icon-picture,\n.icon-handbag,\n.icon-globe-alt,\n.icon-globe,\n.icon-folder-alt,\n.icon-folder,\n.icon-film,\n.icon-feed,\n.icon-drop,\n.icon-drawer,\n.icon-docs,\n.icon-doc,\n.icon-diamond,\n.icon-cup,\n.icon-calculator,\n.icon-bubbles,\n.icon-briefcase,\n.icon-book-open,\n.icon-basket-loaded,\n.icon-basket,\n.icon-bag,\n.icon-action-undo,\n.icon-action-redo,\n.icon-wrench,\n.icon-umbrella,\n.icon-trash,\n.icon-tag,\n.icon-support,\n.icon-frame,\n.icon-size-fullscreen,\n.icon-size-actual,\n.icon-shuffle,\n.icon-share-alt,\n.icon-share,\n.icon-rocket,\n.icon-question,\n.icon-pie-chart,\n.icon-pencil,\n.icon-note,\n.icon-loop,\n.icon-home,\n.icon-grid,\n.icon-graph,\n.icon-microphone,\n.icon-music-tone-alt,\n.icon-music-tone,\n.icon-earphones-alt,\n.icon-earphones,\n.icon-equalizer,\n.icon-like,\n.icon-dislike,\n.icon-control-start,\n.icon-control-rewind,\n.icon-control-play,\n.icon-control-pause,\n.icon-control-forward,\n.icon-control-end,\n.icon-volume-1,\n.icon-volume-2,\n.icon-volume-off,\n.icon-calendar,\n.icon-bulb,\n.icon-chart,\n.icon-ban,\n.icon-bubble,\n.icon-camrecorder,\n.icon-camera,\n.icon-cloud-download,\n.icon-cloud-upload,\n.icon-envelope,\n.icon-eye,\n.icon-flag,\n.icon-heart,\n.icon-info,\n.icon-key,\n.icon-link,\n.icon-lock,\n.icon-lock-open,\n.icon-magnifier,\n.icon-magnifier-add,\n.icon-magnifier-remove,\n.icon-paper-clip,\n.icon-paper-plane,\n.icon-power,\n.icon-refresh,\n.icon-reload,\n.icon-settings,\n.icon-star,\n.icon-symbol-female,\n.icon-symbol-male,\n.icon-target,\n.icon-credit-card,\n.icon-paypal,\n.icon-social-tumblr,\n.icon-social-twitter,\n.icon-social-facebook,\n.icon-social-instagram,\n.icon-social-linkedin,\n.icon-social-pinterest,\n.icon-social-github,\n.icon-social-google,\n.icon-social-reddit,\n.icon-social-skype,\n.icon-social-dribbble,\n.icon-social-behance,\n.icon-social-foursqare,\n.icon-social-soundcloud,\n.icon-social-spotify,\n.icon-social-stumbleupon,\n.icon-social-youtube,\n.icon-social-dropbox,\n.icon-social-vkontakte,\n.icon-social-steam {\n  font-family: 'simple-line-icons';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-user:before {\n  content: \"\\E005\";\n}\n.icon-people:before {\n  content: \"\\E001\";\n}\n.icon-user-female:before {\n  content: \"\\E000\";\n}\n.icon-user-follow:before {\n  content: \"\\E002\";\n}\n.icon-user-following:before {\n  content: \"\\E003\";\n}\n.icon-user-unfollow:before {\n  content: \"\\E004\";\n}\n.icon-login:before {\n  content: \"\\E066\";\n}\n.icon-logout:before {\n  content: \"\\E065\";\n}\n.icon-emotsmile:before {\n  content: \"\\E021\";\n}\n.icon-phone:before {\n  content: \"\\E600\";\n}\n.icon-call-end:before {\n  content: \"\\E048\";\n}\n.icon-call-in:before {\n  content: \"\\E047\";\n}\n.icon-call-out:before {\n  content: \"\\E046\";\n}\n.icon-map:before {\n  content: \"\\E033\";\n}\n.icon-location-pin:before {\n  content: \"\\E096\";\n}\n.icon-direction:before {\n  content: \"\\E042\";\n}\n.icon-directions:before {\n  content: \"\\E041\";\n}\n.icon-compass:before {\n  content: \"\\E045\";\n}\n.icon-layers:before {\n  content: \"\\E034\";\n}\n.icon-menu:before {\n  content: \"\\E601\";\n}\n.icon-list:before {\n  content: \"\\E067\";\n}\n.icon-options-vertical:before {\n  content: \"\\E602\";\n}\n.icon-options:before {\n  content: \"\\E603\";\n}\n.icon-arrow-down:before {\n  content: \"\\E604\";\n}\n.icon-arrow-left:before {\n  content: \"\\E605\";\n}\n.icon-arrow-right:before {\n  content: \"\\E606\";\n}\n.icon-arrow-up:before {\n  content: \"\\E607\";\n}\n.icon-arrow-up-circle:before {\n  content: \"\\E078\";\n}\n.icon-arrow-left-circle:before {\n  content: \"\\E07A\";\n}\n.icon-arrow-right-circle:before {\n  content: \"\\E079\";\n}\n.icon-arrow-down-circle:before {\n  content: \"\\E07B\";\n}\n.icon-check:before {\n  content: \"\\E080\";\n}\n.icon-clock:before {\n  content: \"\\E081\";\n}\n.icon-plus:before {\n  content: \"\\E095\";\n}\n.icon-minus:before {\n  content: \"\\E615\";\n}\n.icon-close:before {\n  content: \"\\E082\";\n}\n.icon-event:before {\n  content: \"\\E619\";\n}\n.icon-exclamation:before {\n  content: \"\\E617\";\n}\n.icon-organization:before {\n  content: \"\\E616\";\n}\n.icon-trophy:before {\n  content: \"\\E006\";\n}\n.icon-screen-smartphone:before {\n  content: \"\\E010\";\n}\n.icon-screen-desktop:before {\n  content: \"\\E011\";\n}\n.icon-plane:before {\n  content: \"\\E012\";\n}\n.icon-notebook:before {\n  content: \"\\E013\";\n}\n.icon-mustache:before {\n  content: \"\\E014\";\n}\n.icon-mouse:before {\n  content: \"\\E015\";\n}\n.icon-magnet:before {\n  content: \"\\E016\";\n}\n.icon-energy:before {\n  content: \"\\E020\";\n}\n.icon-disc:before {\n  content: \"\\E022\";\n}\n.icon-cursor:before {\n  content: \"\\E06E\";\n}\n.icon-cursor-move:before {\n  content: \"\\E023\";\n}\n.icon-crop:before {\n  content: \"\\E024\";\n}\n.icon-chemistry:before {\n  content: \"\\E026\";\n}\n.icon-speedometer:before {\n  content: \"\\E007\";\n}\n.icon-shield:before {\n  content: \"\\E00E\";\n}\n.icon-screen-tablet:before {\n  content: \"\\E00F\";\n}\n.icon-magic-wand:before {\n  content: \"\\E017\";\n}\n.icon-hourglass:before {\n  content: \"\\E018\";\n}\n.icon-graduation:before {\n  content: \"\\E019\";\n}\n.icon-ghost:before {\n  content: \"\\E01A\";\n}\n.icon-game-controller:before {\n  content: \"\\E01B\";\n}\n.icon-fire:before {\n  content: \"\\E01C\";\n}\n.icon-eyeglass:before {\n  content: \"\\E01D\";\n}\n.icon-envelope-open:before {\n  content: \"\\E01E\";\n}\n.icon-envelope-letter:before {\n  content: \"\\E01F\";\n}\n.icon-bell:before {\n  content: \"\\E027\";\n}\n.icon-badge:before {\n  content: \"\\E028\";\n}\n.icon-anchor:before {\n  content: \"\\E029\";\n}\n.icon-wallet:before {\n  content: \"\\E02A\";\n}\n.icon-vector:before {\n  content: \"\\E02B\";\n}\n.icon-speech:before {\n  content: \"\\E02C\";\n}\n.icon-puzzle:before {\n  content: \"\\E02D\";\n}\n.icon-printer:before {\n  content: \"\\E02E\";\n}\n.icon-present:before {\n  content: \"\\E02F\";\n}\n.icon-playlist:before {\n  content: \"\\E030\";\n}\n.icon-pin:before {\n  content: \"\\E031\";\n}\n.icon-picture:before {\n  content: \"\\E032\";\n}\n.icon-handbag:before {\n  content: \"\\E035\";\n}\n.icon-globe-alt:before {\n  content: \"\\E036\";\n}\n.icon-globe:before {\n  content: \"\\E037\";\n}\n.icon-folder-alt:before {\n  content: \"\\E039\";\n}\n.icon-folder:before {\n  content: \"\\E089\";\n}\n.icon-film:before {\n  content: \"\\E03A\";\n}\n.icon-feed:before {\n  content: \"\\E03B\";\n}\n.icon-drop:before {\n  content: \"\\E03E\";\n}\n.icon-drawer:before {\n  content: \"\\E03F\";\n}\n.icon-docs:before {\n  content: \"\\E040\";\n}\n.icon-doc:before {\n  content: \"\\E085\";\n}\n.icon-diamond:before {\n  content: \"\\E043\";\n}\n.icon-cup:before {\n  content: \"\\E044\";\n}\n.icon-calculator:before {\n  content: \"\\E049\";\n}\n.icon-bubbles:before {\n  content: \"\\E04A\";\n}\n.icon-briefcase:before {\n  content: \"\\E04B\";\n}\n.icon-book-open:before {\n  content: \"\\E04C\";\n}\n.icon-basket-loaded:before {\n  content: \"\\E04D\";\n}\n.icon-basket:before {\n  content: \"\\E04E\";\n}\n.icon-bag:before {\n  content: \"\\E04F\";\n}\n.icon-action-undo:before {\n  content: \"\\E050\";\n}\n.icon-action-redo:before {\n  content: \"\\E051\";\n}\n.icon-wrench:before {\n  content: \"\\E052\";\n}\n.icon-umbrella:before {\n  content: \"\\E053\";\n}\n.icon-trash:before {\n  content: \"\\E054\";\n}\n.icon-tag:before {\n  content: \"\\E055\";\n}\n.icon-support:before {\n  content: \"\\E056\";\n}\n.icon-frame:before {\n  content: \"\\E038\";\n}\n.icon-size-fullscreen:before {\n  content: \"\\E057\";\n}\n.icon-size-actual:before {\n  content: \"\\E058\";\n}\n.icon-shuffle:before {\n  content: \"\\E059\";\n}\n.icon-share-alt:before {\n  content: \"\\E05A\";\n}\n.icon-share:before {\n  content: \"\\E05B\";\n}\n.icon-rocket:before {\n  content: \"\\E05C\";\n}\n.icon-question:before {\n  content: \"\\E05D\";\n}\n.icon-pie-chart:before {\n  content: \"\\E05E\";\n}\n.icon-pencil:before {\n  content: \"\\E05F\";\n}\n.icon-note:before {\n  content: \"\\E060\";\n}\n.icon-loop:before {\n  content: \"\\E064\";\n}\n.icon-home:before {\n  content: \"\\E069\";\n}\n.icon-grid:before {\n  content: \"\\E06A\";\n}\n.icon-graph:before {\n  content: \"\\E06B\";\n}\n.icon-microphone:before {\n  content: \"\\E063\";\n}\n.icon-music-tone-alt:before {\n  content: \"\\E061\";\n}\n.icon-music-tone:before {\n  content: \"\\E062\";\n}\n.icon-earphones-alt:before {\n  content: \"\\E03C\";\n}\n.icon-earphones:before {\n  content: \"\\E03D\";\n}\n.icon-equalizer:before {\n  content: \"\\E06C\";\n}\n.icon-like:before {\n  content: \"\\E068\";\n}\n.icon-dislike:before {\n  content: \"\\E06D\";\n}\n.icon-control-start:before {\n  content: \"\\E06F\";\n}\n.icon-control-rewind:before {\n  content: \"\\E070\";\n}\n.icon-control-play:before {\n  content: \"\\E071\";\n}\n.icon-control-pause:before {\n  content: \"\\E072\";\n}\n.icon-control-forward:before {\n  content: \"\\E073\";\n}\n.icon-control-end:before {\n  content: \"\\E074\";\n}\n.icon-volume-1:before {\n  content: \"\\E09F\";\n}\n.icon-volume-2:before {\n  content: \"\\E0A0\";\n}\n.icon-volume-off:before {\n  content: \"\\E0A1\";\n}\n.icon-calendar:before {\n  content: \"\\E075\";\n}\n.icon-bulb:before {\n  content: \"\\E076\";\n}\n.icon-chart:before {\n  content: \"\\E077\";\n}\n.icon-ban:before {\n  content: \"\\E07C\";\n}\n.icon-bubble:before {\n  content: \"\\E07D\";\n}\n.icon-camrecorder:before {\n  content: \"\\E07E\";\n}\n.icon-camera:before {\n  content: \"\\E07F\";\n}\n.icon-cloud-download:before {\n  content: \"\\E083\";\n}\n.icon-cloud-upload:before {\n  content: \"\\E084\";\n}\n.icon-envelope:before {\n  content: \"\\E086\";\n}\n.icon-eye:before {\n  content: \"\\E087\";\n}\n.icon-flag:before {\n  content: \"\\E088\";\n}\n.icon-heart:before {\n  content: \"\\E08A\";\n}\n.icon-info:before {\n  content: \"\\E08B\";\n}\n.icon-key:before {\n  content: \"\\E08C\";\n}\n.icon-link:before {\n  content: \"\\E08D\";\n}\n.icon-lock:before {\n  content: \"\\E08E\";\n}\n.icon-lock-open:before {\n  content: \"\\E08F\";\n}\n.icon-magnifier:before {\n  content: \"\\E090\";\n}\n.icon-magnifier-add:before {\n  content: \"\\E091\";\n}\n.icon-magnifier-remove:before {\n  content: \"\\E092\";\n}\n.icon-paper-clip:before {\n  content: \"\\E093\";\n}\n.icon-paper-plane:before {\n  content: \"\\E094\";\n}\n.icon-power:before {\n  content: \"\\E097\";\n}\n.icon-refresh:before {\n  content: \"\\E098\";\n}\n.icon-reload:before {\n  content: \"\\E099\";\n}\n.icon-settings:before {\n  content: \"\\E09A\";\n}\n.icon-star:before {\n  content: \"\\E09B\";\n}\n.icon-symbol-female:before {\n  content: \"\\E09C\";\n}\n.icon-symbol-male:before {\n  content: \"\\E09D\";\n}\n.icon-target:before {\n  content: \"\\E09E\";\n}\n.icon-credit-card:before {\n  content: \"\\E025\";\n}\n.icon-paypal:before {\n  content: \"\\E608\";\n}\n.icon-social-tumblr:before {\n  content: \"\\E00A\";\n}\n.icon-social-twitter:before {\n  content: \"\\E009\";\n}\n.icon-social-facebook:before {\n  content: \"\\E00B\";\n}\n.icon-social-instagram:before {\n  content: \"\\E609\";\n}\n.icon-social-linkedin:before {\n  content: \"\\E60A\";\n}\n.icon-social-pinterest:before {\n  content: \"\\E60B\";\n}\n.icon-social-github:before {\n  content: \"\\E60C\";\n}\n.icon-social-google:before {\n  content: \"\\E60D\";\n}\n.icon-social-reddit:before {\n  content: \"\\E60E\";\n}\n.icon-social-skype:before {\n  content: \"\\E60F\";\n}\n.icon-social-dribbble:before {\n  content: \"\\E00D\";\n}\n.icon-social-behance:before {\n  content: \"\\E610\";\n}\n.icon-social-foursqare:before {\n  content: \"\\E611\";\n}\n.icon-social-soundcloud:before {\n  content: \"\\E612\";\n}\n.icon-social-spotify:before {\n  content: \"\\E613\";\n}\n.icon-social-stumbleupon:before {\n  content: \"\\E614\";\n}\n.icon-social-youtube:before {\n  content: \"\\E008\";\n}\n.icon-social-dropbox:before {\n  content: \"\\E00C\";\n}\n.icon-social-vkontakte:before {\n  content: \"\\E618\";\n}\n.icon-social-steam:before {\n  content: \"\\E620\";\n}\n", ""]);

// exports


/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1443);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("17df9bd1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a31a8a6\",\"scoped\":false,\"hasInlineConfig\":true}!./fonts.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a31a8a6\",\"scoped\":false,\"hasInlineConfig\":true}!./fonts.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.icon_set > .row > div {\n    font-size : 18px;\n    padding   : 20px 15px;\n}\n.icon_group {\n    position         : relative;\n    background-color : #ffffff;\n}\n.icon_set,\n.icon_cover {\n    height : 330px;\n    width  : 100%;\n}\n.right-side.strech .icon_set ul li {\n    padding : 20px 35px;\n}\n.icon_cover a {\n    position  : relative;\n    top       : 50%;\n    transform : translateY(-50%);\n}\n.iconset_name {\n    padding-left : 15px;\n}\n.icon_set {\n    color : #6699cc;\n}\n.icon_set:hover + .icon_cover,\n.icon_cover:hover {\n    transform  : scale(1);\n    transition : all 0.5s;\n}\n.icon_cover {\n    position         : absolute;\n    top              : 0;\n    left             : 0;\n    background-color : rgba(79, 193, 233, 0.2);\n    transition       : all 0.5s;\n    transform        : scale(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(526);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "font_icons", // Name is optional, When name isn’t specified use the filename as the component name.
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h4", [_vm._v("You can use different sets of icon fonts:")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-6" },
        [
          _c("card", { attrs: { title: "Themify Icons" } }, [
            _c("div", { staticClass: "icon_group" }, [
              _c("div", { staticClass: "icon_set text-center" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-wand icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-save icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-direction icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-link icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-unlink icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-target icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-spray icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-signal icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-shopping-cart-full icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-settings icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-back-left icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-facebook icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-map-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-bar-chart-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-vector icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-control-record icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-ink-pen icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-help-alt icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-face-sad icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-new-window icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-rss-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-control-stop icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-control-shuffle icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-paragraph icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-paragraph icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-underline icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-quote-right icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-layout-column2 icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-instagram icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-twitter icons" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon_cover text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/themify_icons" }
                    },
                    [_vm._v("View All\n                        ")]
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-6" },
        [
          _c("card", { attrs: { title: "Font Awesome Icons" } }, [
            _c("div", { staticClass: "icon_group" }, [
              _c(
                "div",
                { staticClass: "icon_set fontawesome_icons text-center" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-bolt" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-bullhorn" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-clock-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-cloud-upload" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-cog" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-compass" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-edit" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-female" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-frown-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-legal" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-mail-reply-all" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-mail-forward" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-phone-square" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-plus-circle" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rss-square" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-signal" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-smile-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-spinner" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-thumbs-o-up" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-ticket" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", {
                        staticClass: "fa fa-fw ti-close removecard clickable"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-toggle-down" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-trash-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-users" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-copy" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-ul" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-alt" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-arrow-circle-down" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", {
                        staticClass: "fa fa-fw fa-caret-square-o-down"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-chevron-right" })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon_cover text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/fontawesome_icons" }
                    },
                    [_vm._v("View All\n                        ")]
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-6 m-t-10" },
        [
          _c("card", { attrs: { title: "Simple Line Icons" } }, [
            _c("div", { staticClass: "icon_group" }, [
              _c("div", { staticClass: "icon_set text-center" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-compass icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-directions icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-earphones-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-equalizer icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-dislike icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-mustache icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-cursor-move icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-folder icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-ghost icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-present icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-grid icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-linkedin icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-symbol-female icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-behance icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-settings icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-paper-plane icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-lock icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-camrecorder icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-magnifier-remove icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-calendar icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-control-play icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-twitter icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-facebook icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-dropbox icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-vkontakte icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-google icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-cloud-upload icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-control-rewind icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-size-fullscreen icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-diamond icons" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon_cover text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/simple_line_icons" }
                    },
                    [_vm._v("View All\n                        ")]
                  )
                ],
                1
              )
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
    require("vue-hot-reload-api")      .rerender("data-v-1a31a8a6", module.exports)
  }
}

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1440)
  __webpack_require__(1442)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1444)
/* template */
var __vue_template__ = __webpack_require__(1445)
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
Component.options.__file = "resources/components/pages/font_icons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a31a8a6", Component.options)
  } else {
    hotAPI.reload("data-v-1a31a8a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(527)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(529)
/* template */
var __vue_template__ = __webpack_require__(530)
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

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
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

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 529:
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

/***/ 530:
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

/***/ 575:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/simple-line-icons/Simple-Line-Icons.eot?f33df365d6d0255b586f2920355e94d7";

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/simple-line-icons/Simple-Line-Icons.woff2?0cb0b9c589c0624c9c78dd3d83e946f6";

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/simple-line-icons/Simple-Line-Icons.ttf?d2285965fe34b05465047401b8595dd0";

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/simple-line-icons/Simple-Line-Icons.woff?78f07e2c2a535c26ef21d95e41bd7175";

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/simple-line-icons/Simple-Line-Icons.svg?2fe2efe63441d830b1acd106c1fe8734";

/***/ })

});