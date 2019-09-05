webpackJsonp([7],{

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1006);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("2ff10e98", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba724920\",\"scoped\":false,\"hasInlineConfig\":true}!./metisMenu.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba724920\",\"scoped\":false,\"hasInlineConfig\":true}!./metisMenu.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.arrow {\n    float       : right;\n    line-height : 1.42857;\n}\n.glyphicon.arrow:before {\n    content : \"\\E079\";\n}\n.active > a > .glyphicon.arrow:before {\n    content : \"\\E114\";\n}\n/*\n * Require Font-Awesome\n * http://fortawesome.github.io/Font-Awesome/\n*/\n.fa.arrow:before {\n    content : \"+\";\n}\n.active > a > .fa.arrow:before {\n    content : \"\";\n}\n.plus-times {\n    float : right;\n}\n.fa.plus-times:before {\n    content : \"\\F067\";\n}\n.active > a > .fa.plus-times {\n    filter            : progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n    -webkit-transform : rotate(45deg);\n    -moz-transform    : rotate(45deg);\n    -ms-transform     : rotate(45deg);\n    -o-transform      : rotate(45deg);\n    transform         : rotate(45deg);\n}\n.plus-minus {\n    float : right;\n}\n.fa.plus-minus:before {\n    content : \"\\F067\";\n}\n.active > a > .fa.plus-minus:before {\n    content : \"\\F068\";\n}\n", ""]);

// exports


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1008);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("3e7a92c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba724920\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!./custom.scss", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba724920\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!./custom.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "/*\nCreated by: Jyostna Designs\n\n[TABLE OF CONTENTS]\n\n1.  RESET STYLES\n2.  HEADER STYLES\n    2.1 HEADER LEFT\n    2.2 HEADER RIGHT SIDE DROPDOWNS\n3. LEFT SIDE BAR\n4. MAIN WRAPPER STYLES\n5. LEFT MENU COLLAPSE STYLES\n6. CUSTOM STYLES\n7. MEDIA QUERIES\n\n*/\n/*****  1.RESET STYLES  *****/\nhtml {\n  background: none repeat scroll 0 0 #EEE;\n  overflow-x: hidden;\n  transition: all 0.25s ease-out;\n  font-size: small;\n}\nbody {\n  background: none repeat scroll 0 0 #FFF;\n  transition: all 0.25s ease-out;\n  font-size: small;\n  letter-spacing: 0.5px;\n  overflow-x: hidden;\n}\n.modal-open, .swal2-in {\n  padding-right: 0 !important;\n}\nul {\n  list-style: none;\n}\np {\n  line-height: 20px;\n}\nlabel {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\n/******  2.HEADER STYLES   ******/\nbody > #app .header {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1030;\n  /*********LEFT MENU COLLAPSE STYLES *********/\n  /********* END LEFT MENU COLLAPSE STYLES *********/\n  /***** HEADER DROPDOWNS *****/\n  /***** END HEADER DROPDOWNS *****/\n}\nbody > #app .header .navbar {\n    padding: 0;\n}\nbody > #app .header .btn-secondary:focus,\n  body > #app .header .show > .btn-secondary {\n    box-shadow: none;\n}\nbody > #app .header .logo {\n    height: 40px;\n    text-align: center;\n    width: 240px;\n}\n@media (max-width: 560px) {\nbody > #app .header .logo {\n        padding-top: 12px;\n}\n}\nbody > #app .header .logo img {\n      vertical-align: middle;\n}\nbody > #app .header .navbar-collapse {\n    flex-basis: 0;\n}\nbody > #app .header .sidebar-toggle {\n    display: inline-block;\n    color: #fff;\n    font-size: 23px;\n    font-weight: bold;\n}\nbody > #app .header .navbar-nav {\n    flex-direction: row;\n    /* allicons DROPDOWN start */\n    /* allicons DROPDOWN end  */\n    /* MESSAGES DROPDOWN */\n    /* MESSAGES DROPDOWN */\n    /* USER PROFILE DROPDOWN */\n}\nbody > #app .header .navbar-nav .dropdown-menu,\n    body > #app .header .navbar-nav .dropdown-menu .dropdown-item:focus {\n      outline: none;\n}\nbody > #app .header .navbar-nav .dropdown-toggle::after {\n      border: none;\n}\nbody > #app .header .navbar-nav .dropdown-toggle img {\n      margin-top: 3px;\n}\nbody > #app .header .navbar-nav .dropdown-menu {\n      margin: 0;\n}\nbody > #app .header .navbar-nav > div > button {\n      background: transparent;\n      border: none;\n      cursor: pointer;\n      padding-top: 8px;\n}\nbody > #app .header .navbar-nav > div > button > i {\n        font-size: 17px;\n}\nbody > #app .header .navbar-nav > div > button .badge {\n        color: #fff;\n        top: -14px;\n        left: -7px;\n        border-radius: 50%;\n        font-size: 8px;\n        padding: 2px 4px;\n}\nbody > #app .header .navbar-nav > div > button:hover .badge {\n        top: -16px;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .dropdown-menu.show {\n      transform: translate3d(-86px, 46px, 0) !important;\n      -moz-transform: translate3d(-78px, 46px, 0) !important;\n      padding: 0;\n      width: 340px;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .dropdown-menu.show > a:first-child {\n        padding: 1rem;\n        background-color: #6699cc;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .dropdown-menu.show > a:first-child .allicon-header {\n          color: #fff;\n          padding-left: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n          background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list .list-group-item {\n      width: 49%;\n      border: 0;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list .list-group-item:hover {\n      background-color: rgba(0, 0, 0, 0.04);\n      cursor: pointer;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list .list-group-item:hover span {\n      color: #5d92f4;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list {\n      margin: 10px 15px;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .fa-th {\n      font-size: 20px;\n      margin-top: 10px;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link {\n      cursor: pointer;\n      margin-top: 10px;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link i {\n        font-size: 17px;\n        text-decoration: none;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link .badge {\n        color: #fff;\n        top: -14px;\n        left: -7px;\n        border-radius: 50%;\n        font-size: 8px;\n        padding: 2px 4px;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link:hover {\n      text-decoration: none;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link:hover .badge {\n        top: -15px;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show {\n      transform: translate3d(-86px, 46px, 0) !important;\n      -moz-transform: translate3d(-78px, 46px, 0) !important;\n      margin-top: 7px;\n      padding: 0;\n      width: 340px;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show > a:first-child {\n        padding: 1rem;\n        background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show > a:first-child .messages-header {\n          color: #fff;\n          padding-left: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n          background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show .dropdown-item.message:nth-child(even) {\n        background-color: #eee;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show .messages-footer {\n        padding: 1rem;\n        background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show .messages-footer a {\n          color: #fff;\n}\nbody > #app .header .navbar-nav .message_dropdown .message .message-image {\n      width: 45px;\n      height: 45px;\n      display: inline-block;\n      margin-top: -40px;\n      margin-right: 10px;\n}\nbody > #app .header .navbar-nav .message_dropdown .message .message-body {\n      display: inline-block;\n}\nbody > #app .header .navbar-nav .right-toggle .badge {\n      padding: 2px 5px 3px 4px;\n}\nbody > #app .header .navbar-nav .user-dropdown {\n      /* USER PROFILE DROPDOWN */\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle {\n        concer: pointer;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle {\n        background-color: transparent !important;\n        padding: 0.75rem;\n        cursor: pointer;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle .user_name_max {\n          color: #fff;\n          font-size: 14px;\n          display: inline-block;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle img {\n          margin-right: 15px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle:after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: .255em;\n        vertical-align: .120em;\n        content: \"\";\n        border-top: .3em solid #fff;\n        border-right: .3em solid transparent;\n        border-bottom: 0;\n        border-left: .3em solid transparent;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-menu.show {\n        padding: 0;\n        transform: translate3d(-54px, 50px, 0) !important;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile {\n        min-width: 185px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile a {\n          padding: 5px 8px;\n          color: #333;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .user-header {\n          padding: 10px 0;\n          text-align: center;\n          background-color: #2E576B;\n          color: #fff;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .user-header .user_name_max {\n            margin-bottom: 0;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .user-header img {\n            height: 90px;\n            width: 90px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .dropdown-footer {\n          padding: 8px 0 26px 8px;\n          border-top: 1px solid #eee;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .dropdown-footer a {\n            color: #6699CC;\n}\nbody > #app .header .navbar-nav .user-dropdown .user_name_max {\n        margin-top: 10px;\n}\n.skin-default .navbar {\n  background-color: #4B6E82;\n}\n.striped-col:hover {\n  background-color: #eee !important;\n}\n\n/* right side bar css start */\n#right {\n  transition: all .3s ease-in-out;\n  width: 270px;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  overflow-y: auto;\n  right: -270px;\n  box-shadow: 0 0 15px #CCC;\n  background: #FAFAFA;\n}\n#right.open {\n    right: 0;\n}\n#right .nav-tabs > li > a:hover {\n    border: 1px solid transparent;\n}\n#right .card-body {\n    padding: 0;\n}\n.rightsidebar-right {\n  padding-top: 50px;\n}\n@media (min-width: 320px) and (max-width: 560px) {\n.rightsidebar-right {\n      padding-top: 100px !important;\n}\n}\n.rightsidebar-right .nav-tabs {\n    border-bottom: 0;\n}\n.rightsidebar-right .text-muted {\n    color: #555;\n}\n.rightsidebar-right .rightsidebar-right-heading, .rightsidebar-right .rightside-right-heading {\n    background: #FFF;\n    color: #555;\n    border-bottom: 1px solid #DDD;\n    border-top: 1px solid #DDD;\n    margin: 0px -20px 0;\n    font-size: 15px;\n    padding: 15px 20px 15px 15px;\n}\n.rightslider-p-t {\n  padding-top: 0 !important;\n}\n.margin-none {\n  margin: 0;\n}\n.rightsidebar-contact-wrapper {\n  margin: 1px -20px;\n  transition: all 0.5s ease;\n}\n.rightsidebar-contact-wrapper:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.rightsidebar-contact-wrapper:hover .rightsidebar-contact {\n    margin-left: 12px;\n    transition: 300ms;\n}\n.rightsidebar-contact-wrapper .rightsidebar-contact {\n  padding: 15px 20px;\n  display: block;\n  color: #2E576B;\n}\n.rightsidebar-contact-wrapper .rightsidebar-contact:hover {\n  text-decoration: none;\n}\n.rightsidebar-notification {\n  transition: all 0.5s ease;\n}\n.rightsidebar-notification a {\n  padding: 15px 0;\n  display: block;\n  color: #2E576B;\n}\n.sidebar-right-opened {\n  right: 250px;\n}\n.sidebar-right-opened #right {\n  right: 0;\n}\n.sidebar-right-opened .background-overlay {\n  position: fixed;\n  display: block;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.12);\n  z-index: 998;\n  transition: background-color .3s;\n}\n.scrollable-content {\n  height: 100%;\n}\n\n/*rightside bar tabs*/\n#right .nav-tabs > li > a {\n  padding: 10px 19px 4px 19px;\n  font-size: 23px;\n}\n#right .nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  border: 1px solid #DDD;\n  color: #555;\n  background-color: #FFF;\n  border-bottom-color: transparent;\n  margin-top: -2px;\n}\n.rightsidebar-right .card-header-tabs .nav-link.active {\n  border-top: 0 !important;\n}\n#slim_t1,\n#slim_t2 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n#right #slim_t1 img {\n  width: 20px;\n  height: 20px;\n}\n\n/*tab 3 settings*/\n/*to hide default skin picker*/\n#slim_t3 ul {\n  padding: 0;\n}\n.setting-color {\n  padding: 0 2px;\n  margin-bottom: 5px;\n}\n.setting-color > label {\n  display: block;\n  position: relative;\n  margin: 10px;\n  padding: 0;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 0;\n  box-shadow: 2px 4px 5px #CCC;\n  cursor: pointer;\n  width: 53px;\n  float: left;\n}\n.setting-color > label.active-color .split .bg-default-clear:after,\n.setting-color > label.active-color .split .bg-mint:after,\n.setting-color > label.active-color .split .bg-grape:after,\n.setting-color > label.active-color .split .bg-lavender:after,\n.setting-color > label.active-color .split .bg-pink:after,\n.setting-color > label.active-color .split .bg-sunflower:after {\n  content: '';\n  position: absolute;\n  top: 12px;\n  left: 14px;\n  height: 22px;\n  width: 26px;\n  border-radius: 16px;\n  border-top: 13px solid #fafafa;\n}\n.setting-color > label.active-color .split .bg-default-clear:after {\n  border-bottom: 13px solid #2E576B;\n}\n.setting-color > label.active-color .split .bg-mint:after {\n  border-bottom: 13px solid #37BC9B;\n}\n.setting-color > label.active-color .split .bg-grape:after {\n  border-bottom: 13px solid #E76F7C;\n}\n.setting-color > label.active-color .split .bg-lavender:after {\n  border-bottom: 13px solid #AC92EC;\n}\n.setting-color > label.active-color .split .bg-pink:after {\n  border-bottom: 13px solid #EC87C0;\n}\n.setting-color > label.active-color .split .bg-sunflower:after {\n  border-bottom: 13px solid #FFCE54;\n}\n.setting-color > label:first-child {\n  margin-left: 10px;\n}\n.setting-color > label:last-child {\n  margin-right: 0;\n}\n.setting-color > label > .color {\n  display: block;\n  height: 18px;\n}\n.setting-color > label > .split {\n  display: block;\n}\n.setting-color > label > .split:after,\n.setting-color > label > .split:before {\n  content: \" \";\n  display: table;\n}\n.setting-color > label > .split:after {\n  clear: both;\n}\n.setting-color > label > .split > .color {\n  display: block;\n  height: 25.5px;\n}\n.setting-color > label > .split > .color:first-child {\n  float: left;\n  width: 70%;\n}\n.setting-color > label > .split > .color:last-child {\n  float: right;\n  width: 30%;\n}\n.setting-color > label > input[type=radio] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n.bg-default-light {\n  background-color: #2E576B;\n  color: #FFF;\n}\n.bg-default-clear {\n  background-color: #2E576B;\n  color: #EBF4E4;\n}\n.bg-mint-light {\n  background-color: #56CCAE;\n  color: #FFF;\n}\n.bg-mint {\n  background-color: #37BC9B;\n  color: #EBF4E4;\n}\n.bg-grape-light {\n  background-color: #F4929D;\n  color: #FFF;\n}\n.bg-grape {\n  background-color: #E76F7C;\n  color: #EBF4E4;\n}\n.bg-lavender-light {\n  background-color: #B6A0EC;\n  color: #FFF;\n}\n.bg-lavender {\n  background-color: #AC92EC;\n  color: #EBF4E4;\n}\n.bg-pink-light {\n  background-color: #EE98C8;\n  color: #FFF;\n}\n.bg-pink {\n  background-color: #EC87C0;\n  color: #EBF4E4;\n}\n.bg-gray {\n  background-color: #2E576B;\n}\n.bg-gray-light {\n  background-color: #EFEFEF;\n}\n.bg-sunflower {\n  background-color: #FFCE54;\n}\n.bg-sunflower-light {\n  background-color: #FFDD87;\n}\n\n/*rightside bar tabs ends*/\n#slim_t1 a {\n  text-decoration: none;\n}\n\n/* Define 2 column template */\n.left-aside,\n.right-aside {\n  padding: 0;\n  display: table-cell;\n  vertical-align: top;\n}\n.wrapper.hide_menu > .left-aside {\n  display: none;\n}\n@media (max-width: 992px) {\n.wrapper > .right-aside {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n@media (min-width: 320px) and (max-width: 425px) {\n.wrapper > .right-aside {\n    padding-top: 0;\n}\n}\n\n/******* 2.1 HEADER LEFT ******/\n/*side bar nav */\n.sidebar {\n  display: block;\n  width: 240px;\n}\n.content {\n  display: block;\n  width: auto;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  padding: 0 15px;\n}\n\n/* left side profile css */\n.nav_profile {\n  margin-bottom: 4px;\n}\n.nav_profile .profile-left {\n  padding: 7px 15px 9px;\n  min-height: 85px;\n  border-bottom: 1px solid #EEE;\n}\n.nav_profile .profile-left .profile-thumb {\n  border-radius: 50px;\n  display: inline-block;\n  padding-top: 15px !important;\n}\n.nav_profile .profile-left .media-heading {\n  line-height: 20px;\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 15px;\n  color: #2E576B;\n}\n.nav_profile .profile-left .profile-thumb img {\n  width: 54px;\n}\nbody > #app .header .navbar-nav .dropdown-toggle img {\n  margin-top: 5px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle {\n  padding-top: 5px;\n}\n.user-dropdown .dropdown-menu.show {\n  top: -2px !important;\n}\n\n/******* 2.2 HEADER RIGHT SIDE DROPDOWNS  *****/\n/*\n   Dropdown menus\n----------------------------\n*/\n.dropdown-menu {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  z-index: 2300;\n}\n\n/*=== Left menu ===*/\n/****** 3.LEFT SIDEBAR ******/\n.left-aside {\n  width: 240px;\n  background: #FFF;\n  border-right: 5px solid #EEE;\n}\n.submenu-header:hover {\n  color: #33CC99 !important;\n}\n#menu .navigation {\n  padding-left: 0;\n}\n#menu .navigation .menu-item,\n  #menu .navigation .submenu {\n    list-style-type: none;\n}\n#menu .navigation .menu-item a,\n    #menu .navigation .submenu a {\n      text-align: left;\n      color: #666;\n      position: relative;\n      transition: all 0.2s;\n      display: block;\n      font-size: 13px;\n      line-height: 20px;\n      padding: 11px 20px;\n      text-decoration: none;\n}\n#menu .navigation .menu-item a.active,\n      #menu .navigation .submenu a.active {\n        border-right: 3px solid #68DEB7;\n        background: #EEEEEE;\n        color: #33CC99;\n}\n#menu .navigation .menu-item a:hover,\n    #menu .navigation .submenu a:hover {\n      color: #33CC99 !important;\n}\n#menu .navigation .submenu .submenu-header {\n    cursor: pointer;\n    user-select: none;\n}\n#menu .navigation .submenu .submenu-header .submenu_icon {\n      transition: all 0.3s;\n}\n#menu .navigation .submenu .submenu-header .submenu_icon i {\n        font-size: 10px;\n}\n#menu .navigation .submenu.active > .submenu-header {\n    border-right: 3px solid #68DEB7;\n    background: #EEEEEE;\n    color: #33CC99;\n}\n#menu .navigation .submenu.active > .submenu-header > .submenu_icon {\n      transform: rotate(90deg);\n}\n#menu .navigation .submenu .submenu-content {\n    padding-left: 0;\n}\n#menu .navigation .submenu .submenu-content li a {\n      padding-left: 30px;\n}\n.profile-left a {\n  text-decoration: none;\n}\n\n/******* END LEFT SIDEBAR *****/\n/********* 4. MAIN WRAPPER STYLES *********/\n.wrapper:after,\n.wrapper:before {\n  display: table;\n  content: \" \";\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper {\n  display: table;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n  min-height: 100vh !important;\n}\n\n/****** wrapper RIGHT SIDE  *******/\n.right-aside {\n  padding: 0 10px 10px 10px;\n  width: 100%;\n  max-width: 100%;\n}\n.right-aside > .content-header {\n  margin: -2px -10px 25px;\n  height: 65px;\n  background: #FAFAFA;\n  box-shadow: 0 0 18px #E5E5E5;\n}\n.right-aside > .content-header > h1 {\n    margin: 2px;\n    padding-left: 13px;\n    padding-top: 8px;\n}\n.right-aside > .content-header .breadcrumb {\n    background-color: #f9f9f9;\n    padding: 2px 15px 9px;\n}\n.right-aside > .content-header .breadcrumb .breadcrumb-item a {\n      color: #333;\n}\n@media (max-width: 320px) {\n.right-aside > .content-header {\n    padding: 0px 10px 79px 0;\n}\n}\n.content-header h1 {\n  font-size: 22px;\n  line-height: 1.5;\n}\n.view-port-height {\n  height: 100vh;\n}\n.sidebar-right-opened .background-overlay {\n  position: fixed;\n  display: block;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.12);\n  z-index: 998;\n  transition: background-color 0.3s;\n}\n\n/********* END MAIN WRAPPER STYLES *********/\n/*********7. CUSTOM STYLES *********/\n.progress_task {\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n.progress {\n  margin-bottom: 20px;\n}\n.progress-bar {\n  font-size: 10px;\n  line-height: 15px;\n}\n.progress-xs {\n  height: 5px;\n}\n.panel-heading small {\n  line-height: 23px;\n  font-size: 12px;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #555;\n  background-color: #FFF;\n  border-top: 3px solid #6699CC;\n  border-bottom-color: transparent;\n  cursor: default;\n  font-weight: 500;\n  margin-top: -2px;\n}\n.text-white {\n  color: #FFFFFF;\n}\n.input-group-addon {\n  padding: 5px 12px;\n}\n.checkbox label,\n.radio label,\n.radio-inline {\n  padding-left: 0;\n}\n.form-horizontal .checkbox-inline,\n.form-horizontal .radio-inline {\n  margin-left: 10px;\n}\na {\n  text-decoration: none !important;\n}\n.form-control.focus,\n.form-control:focus {\n  border-color: #7EC4E7;\n  box-shadow: none;\n}\n.rounded {\n  border-radius: 20px;\n  padding: 7px 20px;\n}\n.btn-white {\n  background-color: white;\n  border-color: #cccccc;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.alert-success {\n  background-color: #e0f4e9;\n  border-color: #75D1A3;\n  color: #75D1A3;\n}\n.alert-warning {\n  background-color: #fffdcc;\n  border-color: #FFCE56;\n  color: #FFBF23;\n}\n.swal2-modal.swal2-show {\n  border-radius: 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\n/*\nCustomized Bootstrap toastr\n*/\n.checkbox,\n.radio {\n  display: inline;\n  min-height: 0;\n}\ndiv.checker,\ndiv.radio {\n  margin-right: 0;\n  margin-left: 3px;\n}\ndiv.button,\ndiv.checker,\ndiv.selector,\ndiv.uploader {\n  display: inline-block;\n  zoom: 1;\n  vertical-align: middle;\n}\n.resize_vertical {\n  resize: vertical;\n}\n.input-group-addon {\n  border: 1px solid #CCC;\n}\n.nav-tabs .nav-link.active {\n  border-top: 3px solid #6699cc;\n}\n\n/* layout css ends*/\n/**** 7.MEDIA QUERIES ****/\n@media screen and (min-width: 993px) {\n.left-aside {\n    top: 60px;\n}\n}\n\n/*Give content full width on xs screens*/\n@media screen and (max-width: 992px) {\n.right-aside {\n    margin-left: 0;\n}\n}\n@media screen and (max-width: 560px) {\n.right-aside {\n    padding: 10px;\n}\n}\n@media screen and (max-width: 767px) {\n.navbar .navbar-nav > li {\n    float: left;\n}\n.navbar-nav {\n    margin: 0;\n    float: left;\n}\n.navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n}\n}\n\n/* Fix dropdown menu for small screens to display correctly on small screens */\n@media screen and (max-width: 767px) {\n.navbar-nav > .notifications-menu > .dropdown-menu,\n  .navbar-nav > .user-menu > .dropdown-menu {\n    position: absolute;\n    top: 100%;\n    right: -60px;\n    left: auto;\n    background: #FFFFFF;\n}\n.navbar-nav .open .dropdown-menu .dropdown-header,\n  .navbar-nav .open .dropdown-menu > li > a {\n    padding: 5px 15px;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu {\n    width: 295px;\n}\n.navbar-nav > .user-menu > .dropdown-menu {\n    right: 7px;\n    margin-top: 8px;\n}\n.navbar-nav .user-menu .dropdown-menu > li > a {\n    padding: 4px 20px;\n}\n.navbar-right .nav > li > a {\n    padding: 13px 15px 14px;\n}\n.navbar-right .nav > li > a .black {\n    padding-top: 9px;\n}\n.navbar-right .nav > li.notifications-menu > a {\n    padding-top: 12px;\n    padding-bottom: 14px;\n}\nbody > #app .header .navbar .nav > li > a > .label {\n    top: 17px;\n    right: 13px;\n}\n.repeater-btn {\n    margin-top: 10px;\n}\n}\n\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media screen and (max-width: 480px) {\n.navbar-nav > .notifications-menu > .dropdown-menu > li.header:after {\n    border-width: 0;\n}\n}\n@media screen and (max-width: 560px) {\nbody > #app .header .logo,\n  body > #app .header .navbar {\n    width: 100%;\n    float: none;\n    position: relative;\n    height: initial;\n}\nbody > #app .header .navbar {\n    margin: 0;\n}\nbody > #app .header .navbar .sidebar-toggle {\n    padding-left: 25px;\n}\nbody > #app .header .navbar .allicon_dropdown {\n    padding-left: 10px;\n}\n}\n@media screen and (max-width: 350px) {\n.navbar-nav > .notifications-menu > .dropdown-menu {\n    right: -76px;\n    margin-top: 7px;\n}\n}\n@media (min-width: 1440px) and (max-width: 2560px) {\n#menu .menu-dropdown > ul,\n  #menu .menu-dropdown-open-ul {\n    margin-top: -1px;\n}\n}\n@media (min-width: 768px) {\n.label_padding {\n    padding-right: 32px;\n}\n.repeater-form {\n    text-align: center;\n}\n}\n\n/****** END MEDIA QUERIES ****/\n/*\n *\n * Layouts\n *\n */\n/**** Fixed header ****/\nbody.fixed-header #app .header {\n  margin-bottom: 53px;\n}\n@media screen and (max-width: 560px) {\nbody.fixed-header #app .header {\n      margin-bottom: 90px;\n}\n}\nbody.fixed-header #app .navbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media screen and (max-width: 560px) {\nbody.fixed-header #app .navbar {\n      position: fixed;\n}\n}\n\n/**** Boxed ****/\n@media (max-width: 992px) {\nbody.boxed .wrapper > .right-aside {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n@media screen and (min-width: 768px) {\nbody.boxed {\n    width: 100%;\n}\n}\n.fade {\n  opacity: 1;\n}\n#menu .navigation .submenu .submenu-content .submenu-content-box a {\n  padding: 11px 20px 11px 45px;\n}\n.submenu.active > .submenu-header {\n  background-color: #EEEEEE;\n  color: #33CC99 !important;\n}\n.collapse-item.active .vuemenu .submenu-header {\n  padding-left: 30px !important;\n}\n\n/*vue multi dropdown*/\n.mini_height {\n  min-height: 800px !important;\n}\n.user-dropdown .dropdown-menu a:active {\n  background-color: #fff;\n}\n.form-control:active, .input-group .form-control:hover {\n  z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1011);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("4434d5b5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba724920\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./fixed_header.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba724920\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./fixed_header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n@media(max-width: 320px){\n.message_dropdown .dropdown-menu.show{\n        left:15px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_clear_header__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_clear_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_clear_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_left_side_default_left_side__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_left_side_default_left_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_left_side_default_left_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_right_side__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_right_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_right_side__);
//
//
//
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
    name: 'layout',
    components: {
        clear_header: __WEBPACK_IMPORTED_MODULE_0__components_layout_clear_header___default.a,
        left_side: __WEBPACK_IMPORTED_MODULE_1__components_layout_left_side_default_left_side___default.a,
        right_side: __WEBPACK_IMPORTED_MODULE_2__components_layout_right_side___default.a
    },
    created: function created() {},
    methods: {
        right_close: function right_close() {
            this.$store.commit('rightside_bar', "close");
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1014)
/* template */
var __vue_template__ = __webpack_require__(1015)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/components/layout/clear_header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66818f43", Component.options)
  } else {
    hotAPI.reload("data-v-66818f43", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1014:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "clear_header",
    methods: {
        //Enable sidebar toggle
        toggle_left: function toggle_left() {
            this.$store.commit('left_menu', "toggle");
        },
        toggle_right: function toggle_right() {
            this.$store.commit('rightside_bar', "toggle");
        }
    }
});

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header" }, [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand-lg navbar-light" },
      [
        _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
          _c("img", {
            attrs: { src: __webpack_require__(2233), alt: "logo" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-collapse" }, [
          _c("div", { staticClass: "d-inline" }, [
            _c(
              "a",
              {
                staticClass: "navbar-btn sidebar-toggle",
                attrs: { href: "javascript:void(0)", role: "button" },
                on: { click: _vm.toggle_left }
              },
              [_c("i", { staticClass: "fa fa-fw fa-bars" })]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "navbar-nav mr-auto" },
          [
            _c(
              "b-dd",
              { staticClass: "user-dropdown" },
              [
                _c("template", { slot: "button-content" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("img", {
                      staticClass: "rounded-circle img-responsive float-left",
                      attrs: {
                        src: this.$store.state.user.picture,
                        width: "35",
                        height: "35",
                        alt: "User Image"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "user_name_max" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(this.$store.state.user.name) +
                          "\n\n                    "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-profile" },
                  [
                    _c("li", { staticClass: "user-header" }, [
                      _c("img", {
                        staticClass: "rounded-circle",
                        attrs: {
                          src: this.$store.state.user.picture,
                          alt: "User Image"
                        }
                      }),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "user_name_max",
                        domProps: {
                          textContent: _vm._s(this.$store.state.user.name)
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/user_profile", exact: "" } },
                          [
                            _c("i", { staticClass: "fa fa-fw ti-user" }),
                            _vm._v(" My Profile\n                        ")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/edit_user", exact: "" } },
                          [
                            _c("i", { staticClass: "fa fa-fw ti-settings" }),
                            _vm._v(
                              " Account Settings\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-dropdown-item", { staticClass: "dropdown-footer" }, [
                      _c(
                        "div",
                        { staticClass: "float-left" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/lockscreen", exact: "" } },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-lock" }),
                              _vm._v(" Lock\n                            ")
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "float-right" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/login", exact: "" } },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-shift-right"
                              }),
                              _vm._v(" Logout\n                            ")
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66818f43", module.exports)
  }
}

/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1017)
/* template */
var __vue_template__ = __webpack_require__(1035)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/components/layout/left-side/default/left-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b315b3ee", Component.options)
  } else {
    hotAPI.reload("data-v-b315b3ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile_vue__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "left-side",
    components: {
        vmenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenu"],
        vsubMenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vsubMenu"],
        vmenuItem: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenuItem"],
        profile: __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile_vue___default.a
    },
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

exports.vmenu = __webpack_require__(1019);
exports.vsubMenu = __webpack_require__(1022);
exports.vmenuItem = __webpack_require__(1028);

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1020)
/* template */
var __vue_template__ = __webpack_require__(1021)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/components/layout/left-side/default/menu/vueMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-221c0c59", Component.options)
  } else {
    hotAPI.reload("data-v-221c0c59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        $collapseItems: function $collapseItems() {
            return this.$children.filter(function (child) {
                return child._isCollapseItem;
            });
        }
    },
    methods: {
        openByIndex: function openByIndex(index) {
            this.$collapseItems.forEach(function (item, i) {
                if (i !== index) {
                    item.isActived = false;
                }
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on("closeall", function (index) {
            _this.openByIndex(index);
        });
    }
});

/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vuemenu navigation" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-221c0c59", module.exports)
  }
}

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1023)
}
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1025)
/* template */
var __vue_template__ = __webpack_require__(1027)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b2beb1da"
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
Component.options.__file = "resources/components/layout/left-side/default/menu/subMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2beb1da", Component.options)
  } else {
    hotAPI.reload("data-v-b2beb1da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1024);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("32861682", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2beb1da\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2beb1da\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.collapse-item .submenu-header[data-v-b2beb1da] {\n  cursor: pointer;\n  color: #666;\n  padding: 11px 21px 11px 19px;\n}\n.collapse-item .submenu-header .submenu-header-title[data-v-b2beb1da] {\n    vertical-align: text-bottom;\n}\n.collapse-item .submenu-header .active .submenu-header-title[data-v-b2beb1da] {\n    font-weight: 600;\n}\n.collapse-item .submenu-content[data-v-b2beb1da] {\n  /*background-color: #F8F7F6;*/\n  overflow-y: hidden;\n  position: relative;\n}\n.collapse-item .submenu_icon[data-v-b2beb1da] {\n  transition: all 0.3s;\n  font-size: 10px;\n  margin-top: 5px;\n  /*color:#3e6174;*/\n}\n.collapse-item.active > .submenu-header[data-v-b2beb1da] {\n  /*background-color:#e6e6e6;*/\n  /*color: #3e6174;*/\n  font-weight: 500;\n}\n.collapse-item.active > .submenu-header > .submenu_icon[data-v-b2beb1da] {\n    transform: rotate(90deg);\n}\n.collapse-item.active > .submenu-header i[data-v-b2beb1da] {\n    /*color: #3e6174 !important;*/\n}\n.leftmenu_icon[data-v-b2beb1da] {\n  margin-right: 6px;\n  line-height: 20px;\n  height: 22px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  /*color:#e6e6e6;*/\n}\n", ""]);

// exports


/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
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
        selected: Boolean,
        icon: String,
        title: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            isActived: this.selected
        };
    },

    computed: {
        index: function index() {
            return this.$parent.$collapseItems.indexOf(this);
        }
    },
    created: function created() {
        this._isCollapseItem = true;
    },
    mounted: function mounted() {
        var _this = this;

        function activate(self) {
            if (self.$refs.box) {
                self.isActived = self.$refs.box.querySelectorAll("a.active").length >= 1 ? true : false;
            }
        }
        //change when route changes
        this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "routeChange" && mutation.payload == "end") {
                setTimeout(function () {
                    activate(_this);
                }, 0);
            }
        });
        activate(this);
    },

    methods: {
        toggle: function toggle() {
            this.$parent.$emit('closeall', this.index);
            this.isActived = !this.isActived;
        },
        cancel: function cancel() {
            this.anime.pause();
        },
        before: function before(targets) {
            targets.removeAttribute('style');
        },
        enter: function enter(targets, done) {
            var height = targets.scrollHeight;
            targets.style.height = 0;
            targets.style.opacity = 0;
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [0, 1],
                height: height,
                complete: function complete() {
                    targets.removeAttribute('style');
                    done();
                }
            });
        },
        leave: function leave(targets, complete) {
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [1, 0],
                height: 0
            });
        }
    }
});

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "submenu collapse-item", class: { active: _vm.isActived } },
    [
      _c(
        "div",
        {
          staticClass: "submenu-header",
          attrs: {
            role: "tab",
            "aria-expanded": _vm.selected ? "true" : "fase"
          },
          on: { click: _vm.toggle }
        },
        [
          _c("i", { staticClass: "leftmenu_icon", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "submenu-header-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: { name: "collapsed-fade", css: false },
          on: {
            "before-appear": _vm.before,
            appear: _vm.enter,
            "appear-cancel": _vm.cancel,
            "before-enter": _vm.before,
            enter: _vm.enter,
            "enter-cancel": _vm.cancel,
            leave: _vm.leave,
            "leave-cancel": _vm.cancel
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isActived,
                  expression: "isActived"
                }
              ],
              staticClass: "submenu-content"
            },
            [
              _c(
                "div",
                { ref: "box", staticClass: "submenu-content-box" },
                [_vm._t("default")],
                2
              )
            ]
          )
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
    return _c("span", { staticClass: "submenu_icon float-right" }, [
      _c("i", { staticClass: "ti-angle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b2beb1da", module.exports)
  }
}

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1029)
/* template */
var __vue_template__ = __webpack_require__(1030)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/components/layout/left-side/default/menu/MenuItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21bb2e0e", Component.options)
  } else {
    hotAPI.reload("data-v-21bb2e0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1029:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["link", "icon"]
});

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "menu-item" },
    [
      _c("router-link", { attrs: { to: _vm.link, exact: "" } }, [
        _c("i", { staticClass: "leftmenu_icon", class: _vm.icon }),
        _vm._v(" "),
        _c("span", { staticClass: "name" }, [_vm._t("default")], 2)
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21bb2e0e", module.exports)
  }
}

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1032)
}
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1034)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40f1c7db"
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
Component.options.__file = "resources/components/layout/left-side/left-profile/user_profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40f1c7db", Component.options)
  } else {
    hotAPI.reload("data-v-40f1c7db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1033);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("2c829f1c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40f1c7db\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40f1c7db\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "/* left side profile css */\n.profile-left[data-v-40f1c7db] {\n  padding: 15px;\n  min-height: 90px;\n  border-bottom: 1px solid #EEE;\n}\n.profile-left .profile-thumb[data-v-40f1c7db] {\n  border-radius: 50px;\n  display: inline-block;\n  padding-top: 9px;\n}\n.profile-left .media-heading[data-v-40f1c7db] {\n  line-height: 23px;\n  margin-top: 12px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #2E576B;\n}\n.profile-left .profile-thumb img[data-v-40f1c7db] {\n  width: 54px;\n}\n.content-profile[data-v-40f1c7db] {\n  padding-left: 15px;\n}\n.content-profile .icon-list[data-v-40f1c7db] {\n    padding-left: 0;\n}\n.content-profile .icon-list li[data-v-40f1c7db] {\n  display: inline-block;\n  padding: 0;\n  vertical-align: top;\n}\n.content-profile .icon-list[data-v-40f1c7db]:before {\n  content: '';\n}\n.content-profile .icon-list li i[data-v-40f1c7db] {\n  font-size: 13px;\n  color: #555;\n  padding-top: 5px;\n}\n.content-profile .icon-list li a[data-v-40f1c7db] {\n  display: block;\n  width: 30px;\n  height: 25px;\n  text-align: center;\n  line-height: 23px;\n  transition: all 300ms ease-in-out;\n}\n.content-profile .icon-list li a[data-v-40f1c7db] {\n  border: 1px solid #DDD;\n}\n.icon-list li a[data-v-40f1c7db] {\n  position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nav_profile" }, [
    _c("div", { staticClass: "media profile-left" }, [
      _c(
        "a",
        {
          staticClass: "float-left profile-thumb",
          attrs: { href: "javascript:void(0)" }
        },
        [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: { src: this.$store.state.user.picture, alt: "User Image" }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content-profile" }, [
        _c("h4", {
          staticClass: "media-heading user_name_max",
          domProps: { textContent: _vm._s(this.$store.state.user.name) }
        }),
        _vm._v(" "),
        _c("ul", { staticClass: "icon-list" }, [
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: "/users_list", title: "user", exact: "" } },
                [_c("i", { staticClass: "ti-user" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: "/lockscreen", title: "lock", exact: "" } },
                [_c("i", { staticClass: "ti-lock" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: "/edit_user", title: "settings", exact: "" } },
                [_c("i", { staticClass: "ti-settings" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: "/login", title: "Logout", exact: "" } },
                [_c("i", { staticClass: "ti-shift-right" })]
              )
            ],
            1
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
    require("vue-hot-reload-api")      .rerender("data-v-40f1c7db", module.exports)
  }
}

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "left-aside sidebar-offcanvas" }, [
    _c("section", { staticClass: "sidebar" }, [
      _c(
        "div",
        { attrs: { id: "menu", role: "navigation" } },
        [
          _c("div", { staticClass: "nav_profile" }, [_c("profile")], 1),
          _vm._v(" "),
          _c(
            "vmenu",
            [
              _c("vmenu-item", { attrs: { link: "/", icon: "ti-desktop" } }, [
                _vm._v("\n                      Dashboard 1\n                ")
              ]),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "/index2", icon: "ti-layout" } },
                [
                  _vm._v(
                    "\n                      Dashboard 2\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "/index3", icon: "ti-layout" } },
                [
                  _vm._v(
                    "\n                                          Dashboard 3\n                                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                {
                  attrs: { title: "E-commerce", icon: "ti-shopping-cart-full" }
                },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/edashboard", icon: "ti-desktop" } },
                    [
                      _vm._v(
                        "\n                         E-Dashboard\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/product_gallery", icon: "ti-gallery" } },
                    [
                      _vm._v(
                        "\n                         Product gallery\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/product_details", icon: "ti-info-alt" }
                    },
                    [
                      _vm._v(
                        "\n                         Product details\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "task", icon: "ti-menu-alt" } },
                [_vm._v("\n                     Tasks\n                ")]
              ),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "contacts", icon: "ti-bookmark-alt" } },
                [_vm._v("\n                     Contacts\n                ")]
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                { attrs: { title: "Forms", icon: "ti-check-box" } },
                [
                  _c(
                    "vmenu",
                    [
                      _c(
                        "vsub-menu",
                        { attrs: { title: "Features", icon: "ti-receipt" } },
                        [
                          _c(
                            "vmenu-item",
                            {
                              attrs: { link: "/form-elements", icon: "ti-cup" }
                            },
                            [
                              _vm._v(
                                "\n                            Form Elements\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/realtime_form",
                                icon: "ti-write"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Realtime Form\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/form-validations",
                                icon: "ti-alert"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Form Validations\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/form_layouts",
                                icon: "ti-layout-width-default"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Form Layouts\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/complex_forms",
                                icon: "ti-layout-cta-left"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Complex Forms\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/radio_check",
                                icon: "ti-check-box"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Radio and Checkbox\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vsub-menu",
                        {
                          attrs: { title: "Components", icon: "ti-clipboard" }
                        },
                        [
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/form_editors",
                                icon: "ti-pencil"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Form Editors\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/form_wizards",
                                icon: "ti-settings"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Form Wizards\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/dropdowns",
                                icon: "ti-widget-alt"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Drop Downs\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/vue_multiselect",
                                icon: "ti-widget-alt"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Vue Multiselect\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            { attrs: { link: "/vue_slider", icon: "ti-bell" } },
                            [
                              _vm._v(
                                "\n                            Vue Slider\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/date_pickers",
                                icon: "ti-calendar"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Date pickers\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vmenu-item",
                            {
                              attrs: {
                                link: "/advanced_date_pickers",
                                icon: "ti-notepad"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Advanced Date pickers\n                        "
                              )
                            ]
                          )
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
                "vsub-menu",
                { attrs: { title: "UI Features", icon: "ti-desktop" } },
                [
                  _c(
                    "vmenu",
                    [
                      _c(
                        "vmenu-item",
                        {
                          attrs: {
                            link: "/general_components",
                            icon: "ti-plug"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        General Components\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vmenu-item",
                        {
                          attrs: {
                            link: "/buttons",
                            icon: "ti-layout-placeholder"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Buttons\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vmenu-item",
                        {
                          attrs: { link: "/tabs_accordions", icon: "ti-layers" }
                        },
                        [
                          _vm._v(
                            "\n                        Tabs & Accordions\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vmenu-item",
                        { attrs: { link: "/font_icons", icon: "ti-ink-pen" } },
                        [
                          _vm._v(
                            "\n                        Font Icons\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vmenu-item",
                        {
                          attrs: {
                            link: "/advanced_modals",
                            icon: "ti-brush-alt"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Advanced Modals\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vmenu-item",
                        { attrs: { link: "/timeline", icon: "ti-time" } },
                        [
                          _vm._v(
                            "\n                        Timeline\n                    "
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
                "vsub-menu",
                { attrs: { title: "UI Components", icon: "ti-briefcase" } },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/pickers", icon: "ti-brush" } },
                    [
                      _vm._v(
                        "\n                        Pickers\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/color_pickers", icon: "ti-paint-bucket" }
                    },
                    [
                      _vm._v(
                        "\n                       Color Pickers\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/grid_layout", icon: "ti-layout-grid2" }
                    },
                    [
                      _vm._v(
                        "\n                        Grid Layout\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/tags_input", icon: "ti-tag" } },
                    [
                      _vm._v(
                        "\n                        Tags Input\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/nestable_list", icon: "ti-view-list" } },
                    [
                      _vm._v(
                        "\n                        Nestable List\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/sweet_alert", icon: "ti-bell" } },
                    [
                      _vm._v(
                        "\n                        Sweet Alert\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/toastr_notifications",
                        icon: "ti-tablet"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Toastr Notifications\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/draggable_portlets",
                        icon: "ti-control-shuffle"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Draggable Portlets\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/jstree", icon: "ti-control-shuffle" } },
                    [
                      _vm._v(
                        "\n                        Jstree\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/transitions", icon: "ti-star" } },
                    [
                      _vm._v(
                        "\n                        Transitions\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/listjs", icon: "ti-list" } },
                    [
                      _vm._v(
                        "\n                        Listjs\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "/widgets", icon: "ti-widgetized" } },
                [_vm._v("\n                       Widgets\n                ")]
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                { attrs: { title: "DataTables", icon: "ti-layout-grid4" } },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/simple_tables", icon: "ti-layout" } },
                    [
                      _vm._v(
                        "\n                        Simple tables\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/advanced-tables", icon: "ti-server" } },
                    [
                      _vm._v(
                        "\n                        Advanced Tables\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/bootstrap_tables",
                        icon: "ti-layout-grid2"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Bootstrap Tables\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                { attrs: { title: "Charts", icon: "ti-bar-chart" } },
                [
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/flot_charts", icon: "ti-bar-chart-alt" }
                    },
                    [
                      _vm._v(
                        "\n                        Flot Charts\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/nvd3_charts", icon: "ti-stats-up" } },
                    [
                      _vm._v(
                        "\n                        NVD3 Charts\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/circle_sliders", icon: "ti-basketball" }
                    },
                    [
                      _vm._v(
                        "\n                        Circle Sliders\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/chartist", icon: "ti-bar-chart" } },
                    [
                      _vm._v(
                        "\n                        Chartist Charts\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/frappe_charts", icon: "ti-bar-chart" } },
                    [
                      _vm._v(
                        "\n                        Frappe Charts\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/trend_bar", icon: "ti-bar-chart" } },
                    [
                      _vm._v(
                        "\n                        Trend & Bar Charts\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "/calendar", icon: "ti-video-clapper" } },
                [
                  _vm._v("\n                      Calendar"),
                  _c(
                    "h5",
                    {
                      staticClass: "badge badge-success float-right mt-1 badge1"
                    },
                    [_vm._v("7")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                { attrs: { title: "Gallery", icon: "ti-gallery" } },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/masonry_gallery", icon: "ti-gallery" } },
                    [
                      _vm._v(
                        "\n                        Masonry Gallery\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/dropify", icon: "ti-dropbox" } },
                    [
                      _vm._v(
                        "\n                        Dropify\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/image_hover", icon: "ti-image" } },
                    [
                      _vm._v(
                        "\n                        Image Hover\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/image_filter", icon: "ti-filter" } },
                    [
                      _vm._v(
                        "\n                        Image Filter\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/image_magnifier", icon: "ti-zoom-in" } },
                    [
                      _vm._v(
                        "\n                        Image Magnifier\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                { attrs: { title: "Users", icon: "ti-user" } },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/users_list", icon: "ti-menu-alt" } },
                    [
                      _vm._v(
                        "\n                        Users List\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/addnew_user", icon: "ti-user" } },
                    [
                      _vm._v(
                        "\n                        Add New User\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/user_profile", icon: "ti-id-badge" } },
                    [
                      _vm._v(
                        "\n                        View Profile\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/deleted_users", icon: "ti-trash" } },
                    [
                      _vm._v(
                        "\n                        Deleted Users\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                { attrs: { title: "Maps", icon: "ti-location-pin" } },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/gmaps", icon: "ti-world" } },
                    [
                      _vm._v(
                        "\n                        Google Maps\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/vector_maps", icon: "ti-map" } },
                    [
                      _vm._v(
                        "\n                        Vector Maps\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                {
                  staticClass: "menufold-bottom",
                  attrs: { title: "Pages", icon: "ti-files" }
                },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/login", icon: "ti-shift-right" } },
                    [
                      _vm._v(
                        "\n                        Login\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/register", icon: "ti-check-box" } },
                    [
                      _vm._v(
                        "\n                        Register\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/forgot_password", icon: "ti-help" } },
                    [
                      _vm._v(
                        "\n                        Forgot Password\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/lockscreen", icon: "ti-lock" } },
                    [
                      _vm._v(
                        "\n                        Lockscreen\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                {
                  staticClass: "menufold-bottom",
                  attrs: { title: "Extra Pages", icon: "ti-face-smile" }
                },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/blank", icon: "ti-file" } },
                    [
                      _vm._v(
                        "\n                        Blank page\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/invoice", icon: "ti-layout-cta-left" } },
                    [
                      _vm._v(
                        "\n                        Invoice\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/pricing", icon: "ti-time" } },
                    [
                      _vm._v(
                        "\n                        Pricing Table\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/404", icon: "ti-unlink" } },
                    [
                      _vm._v(
                        "\n                        404 Error\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/500", icon: "ti-face-sad" } },
                    [
                      _vm._v(
                        "\n                        500 Error\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vmenu-item",
                { attrs: { link: "/test", icon: "ti-desktop" } },
                [_vm._v("\n                    Test\n                ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-b315b3ee", module.exports)
  }
}

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1037)
/* template */
var __vue_template__ = __webpack_require__(1041)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/components/layout/right-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a2e7928", Component.options)
  } else {
    hotAPI.reload("data-v-6a2e7928", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__right_side_bar__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__right_side_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__right_side_bar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import rightSideBar from './right-side_chatbox'


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "right-side",
    components: {
        rightSideBar: __WEBPACK_IMPORTED_MODULE_0__right_side_bar___default.a
    }
});

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1039)
/* template */
var __vue_template__ = __webpack_require__(1040)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/components/layout/right-side-bar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d905732", Component.options)
  } else {
    hotAPI.reload("data-v-2d905732", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1039:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "right_side_bar",
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    methods: {
        change_skin: function change_skin() {}
    }
});

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { open: this.$store.state.right_open }, attrs: { id: "right" } },
    [
      _c("div", { attrs: { id: "right-slim" } }, [
        _c(
          "div",
          { staticClass: "rightsidebar-right" },
          [
            _c(
              "b-tabs",
              { ref: "tabs", attrs: { card: "" } },
              [
                _c(
                  "b-tab",
                  { attrs: { active: "" } },
                  [
                    _c("template", { slot: "title" }, [
                      _c("i", { staticClass: "fa fa-user-o text-success" })
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "slim_t1" } }, [
                      _c("div", [
                        _c(
                          "h5",
                          {
                            staticClass:
                              "rightsidebar-right-heading text-uppercase text-white bg-success text-xs"
                          },
                          [
                            _vm._v(
                              "\n                                    Contacts\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("ul", { staticClass: "list-unstyled margin-none" }, [
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(560),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-primary"
                                  }),
                                  _vm._v(
                                    " Annette\n                                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(514),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-primary"
                                  }),
                                  _vm._v(
                                    " Jordan\n                                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(515),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-primary"
                                  }),
                                  _vm._v(
                                    " Stewart\n                                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(516),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-warning"
                                  }),
                                  _vm._v(
                                    " Alfred\n                                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(518),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-danger"
                                  }),
                                  _vm._v(
                                    " Eileen\n                                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(533),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-muted"
                                  }),
                                  _vm._v(
                                    " Robert\n                                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle float-right",
                                    attrs: {
                                      src: __webpack_require__(528),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-circle text-xs text-muted"
                                  }),
                                  _vm._v(
                                    " Cassandra\n                                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  [
                    _c("template", { slot: "title" }, [
                      _c("i", {
                        staticClass: "fa fa-upload text-danger",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "slim_t2" } }, [
                      _c("div", [
                        _c(
                          "h5",
                          {
                            staticClass:
                              "rightsidebar-right-heading text-uppercase text-xs bg-danger text-white"
                          },
                          [
                            _vm._v(
                              "\n                        Recent Updates\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c("ul", { staticClass: "list-unstyled " }, [
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-comments-smiley fa-fw text-primary"
                                    }),
                                    _vm._v(
                                      " New Comment\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-twitter-alt fa-fw text-success"
                                    }),
                                    _vm._v(
                                      " 3 New Followers\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa ti-email fa-fw text-info"
                                    }),
                                    _vm._v(
                                      " Message Sent\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-write fa-fw text-warning"
                                    }),
                                    _vm._v(
                                      " New Task\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-export fa-fw text-danger"
                                    }),
                                    _vm._v(
                                      " Server Rebooted\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-info-alt fa-fw text-primary"
                                    }),
                                    _vm._v(
                                      " Server Not Responding\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-shopping-cart fa-fw text-success"
                                    }),
                                    _vm._v(
                                      " New Order Placed\n                                "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "rightsidebar-notification rightsidebar-contact-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "rightsidebar-contact",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa ti-money fa-fw text-info"
                                    }),
                                    _vm._v(
                                      " Payment Received\n                                "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d905732", module.exports)
  }
}

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "right-aside" }, [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c("h1", { domProps: { innerHTML: _vm._s(this.$route.meta.title) } }, [
          _vm._v("Title")
        ]),
        _vm._v(" "),
        _c("b-breadcrumb", { attrs: { items: this.$route.meta.breadcrumb } })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "content" },
      [_vm._t("default"), _vm._v(" "), _c("right-side-bar")],
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
    require("vue-hot-reload-api")      .rerender("data-v-6a2e7928", module.exports)
  }
}

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("clear_header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "wrapper" },
        [
          _c("left_side", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: this.$store.state.left_open,
                expression: "this.$store.state.left_open"
              }
            ]
          }),
          _vm._v(" "),
          _c("right_side", [_c("router-view")], 1)
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "background-overlay",
        on: { click: _vm.right_close }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba724920", module.exports)
  }
}

/***/ }),

/***/ 2233:
/***/ (function(module, exports) {

module.exports = "/images/logo10.png?44d2a7f60abc34524f43d5db344dac19";

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1005)
  __webpack_require__(1007)
  __webpack_require__(1010)
}
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(1012)
/* template */
var __vue_template__ = __webpack_require__(1042)
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
Component.options.__file = "resources/fixed_header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba724920", Component.options)
  } else {
    hotAPI.reload("data-v-ba724920", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "/images/avatar2.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "/images/avatar3.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "/images/avatar4.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "/images/avatar7.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "/images/avatar5.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "/images/avatar6.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ })

});