webpackJsonp([101],{

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1058);
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

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.arrow {\n    float       : right;\n    line-height : 1.42857;\n}\n.glyphicon.arrow:before {\n    content : \"\\E079\";\n}\n.active > a > .glyphicon.arrow:before {\n    content : \"\\E114\";\n}\n/*\n * Require Font-Awesome\n * http://fortawesome.github.io/Font-Awesome/\n*/\n.fa.arrow:before {\n    content : \"+\";\n}\n.active > a > .fa.arrow:before {\n    content : \"\";\n}\n.plus-times {\n    float : right;\n}\n.fa.plus-times:before {\n    content : \"\\F067\";\n}\n.active > a > .fa.plus-times {\n    filter            : progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n    -webkit-transform : rotate(45deg);\n    -moz-transform    : rotate(45deg);\n    -ms-transform     : rotate(45deg);\n    -o-transform      : rotate(45deg);\n    transform         : rotate(45deg);\n}\n.plus-minus {\n    float : right;\n}\n.fa.plus-minus:before {\n    content : \"\\F067\";\n}\n.active > a > .fa.plus-minus:before {\n    content : \"\\F068\";\n}\n", ""]);

// exports


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1060);
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

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*\nCreated by: Jyostna Designs\n\n[TABLE OF CONTENTS]\n\n1.  RESET STYLES\n2.  HEADER STYLES\n    2.1 HEADER LEFT\n    2.2 HEADER RIGHT SIDE DROPDOWNS\n3. LEFT SIDE BAR\n4. MAIN WRAPPER STYLES\n5. LEFT MENU COLLAPSE STYLES\n6. CUSTOM STYLES\n7. MEDIA QUERIES\n\n*/\n/*****  1.RESET STYLES  *****/\nhtml {\n  background: none repeat scroll 0 0 #EEE;\n  overflow-x: hidden;\n  transition: all 0.25s ease-out;\n  font-size: small;\n}\nbody {\n  background: none repeat scroll 0 0 #FFF;\n  transition: all 0.25s ease-out;\n  font-size: small;\n  letter-spacing: 0.5px;\n  overflow-x: hidden;\n}\n.modal-open, .swal2-in {\n  padding-right: 0 !important;\n}\nul {\n  list-style: none;\n}\np {\n  line-height: 20px;\n}\nlabel {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\n/******  2.HEADER STYLES   ******/\nbody > #app .header {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1030;\n  /*********LEFT MENU COLLAPSE STYLES *********/\n  /********* END LEFT MENU COLLAPSE STYLES *********/\n  /***** HEADER DROPDOWNS *****/\n  /***** END HEADER DROPDOWNS *****/\n}\nbody > #app .header .navbar {\n    padding: 0;\n}\nbody > #app .header .btn-secondary:focus,\n  body > #app .header .show > .btn-secondary {\n    box-shadow: none;\n}\nbody > #app .header .logo {\n    height: 40px;\n    text-align: center;\n    width: 240px;\n}\n@media (max-width: 560px) {\nbody > #app .header .logo {\n        padding-top: 12px;\n}\n}\nbody > #app .header .logo img {\n      vertical-align: middle;\n}\nbody > #app .header .navbar-collapse {\n    flex-basis: 0;\n}\nbody > #app .header .sidebar-toggle {\n    display: inline-block;\n    color: #fff;\n    font-size: 23px;\n    font-weight: bold;\n}\nbody > #app .header .navbar-nav {\n    flex-direction: row;\n    /* allicons DROPDOWN start */\n    /* allicons DROPDOWN end  */\n    /* MESSAGES DROPDOWN */\n    /* MESSAGES DROPDOWN */\n    /* USER PROFILE DROPDOWN */\n}\nbody > #app .header .navbar-nav .dropdown-menu,\n    body > #app .header .navbar-nav .dropdown-menu .dropdown-item:focus {\n      outline: none;\n}\nbody > #app .header .navbar-nav .dropdown-toggle::after {\n      border: none;\n}\nbody > #app .header .navbar-nav .dropdown-toggle img {\n      margin-top: 3px;\n}\nbody > #app .header .navbar-nav .dropdown-menu {\n      margin: 0;\n}\nbody > #app .header .navbar-nav > div > button {\n      background: transparent;\n      border: none;\n      cursor: pointer;\n      padding-top: 8px;\n}\nbody > #app .header .navbar-nav > div > button > i {\n        font-size: 17px;\n}\nbody > #app .header .navbar-nav > div > button .badge {\n        color: #fff;\n        top: -14px;\n        left: -7px;\n        border-radius: 50%;\n        font-size: 8px;\n        padding: 2px 4px;\n}\nbody > #app .header .navbar-nav > div > button:hover .badge {\n        top: -16px;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .dropdown-menu.show {\n      transform: translate3d(-86px, 46px, 0) !important;\n      -moz-transform: translate3d(-78px, 46px, 0) !important;\n      padding: 0;\n      width: 340px;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .dropdown-menu.show > a:first-child {\n        padding: 1rem;\n        background-color: #6699cc;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .dropdown-menu.show > a:first-child .allicon-header {\n          color: #fff;\n          padding-left: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n          background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list .list-group-item {\n      width: 49%;\n      border: 0;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list .list-group-item:hover {\n      background-color: rgba(0, 0, 0, 0.04);\n      cursor: pointer;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list .list-group-item:hover span {\n      color: #5d92f4;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .allicons-list {\n      margin: 10px 15px;\n}\nbody > #app .header .navbar-nav .allicon_dropdown .fa-th {\n      font-size: 20px;\n      margin-top: 10px;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link {\n      cursor: pointer;\n      margin-top: 10px;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link i {\n        font-size: 17px;\n        text-decoration: none;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link .badge {\n        color: #fff;\n        top: -14px;\n        left: -7px;\n        border-radius: 50%;\n        font-size: 8px;\n        padding: 2px 4px;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link:hover {\n      text-decoration: none;\n}\nbody > #app .header .navbar-nav .message_dropdown .btn-link:hover .badge {\n        top: -15px;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show {\n      transform: translate3d(-86px, 46px, 0) !important;\n      -moz-transform: translate3d(-78px, 46px, 0) !important;\n      margin-top: 7px;\n      padding: 0;\n      width: 340px;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show > a:first-child {\n        padding: 1rem;\n        background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show > a:first-child .messages-header {\n          color: #fff;\n          padding-left: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n          background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show .dropdown-item.message:nth-child(even) {\n        background-color: #eee;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show .messages-footer {\n        padding: 1rem;\n        background-color: #2E576B;\n}\nbody > #app .header .navbar-nav .message_dropdown .dropdown-menu.show .messages-footer a {\n          color: #fff;\n}\nbody > #app .header .navbar-nav .message_dropdown .message .message-image {\n      width: 45px;\n      height: 45px;\n      display: inline-block;\n      margin-top: -40px;\n      margin-right: 10px;\n}\nbody > #app .header .navbar-nav .message_dropdown .message .message-body {\n      display: inline-block;\n}\nbody > #app .header .navbar-nav .right-toggle .badge {\n      padding: 2px 5px 3px 4px;\n}\nbody > #app .header .navbar-nav .user-dropdown {\n      /* USER PROFILE DROPDOWN */\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle {\n        concer: pointer;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle {\n        background-color: transparent !important;\n        padding: 0.75rem;\n        cursor: pointer;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle .user_name_max {\n          color: #fff;\n          font-size: 14px;\n          display: inline-block;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle img {\n          margin-right: 15px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle:after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: .255em;\n        vertical-align: .120em;\n        content: \"\";\n        border-top: .3em solid #fff;\n        border-right: .3em solid transparent;\n        border-bottom: 0;\n        border-left: .3em solid transparent;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-menu.show {\n        padding: 0;\n        transform: translate3d(-54px, 50px, 0) !important;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile {\n        min-width: 185px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile a {\n          padding: 5px 8px;\n          color: #333;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .user-header {\n          padding: 10px 0;\n          text-align: center;\n          background-color: #2E576B;\n          color: #fff;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .user-header .user_name_max {\n            margin-bottom: 0;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .user-header img {\n            height: 90px;\n            width: 90px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .dropdown-footer {\n          padding: 8px 0 26px 8px;\n          border-top: 1px solid #eee;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-profile .dropdown-footer a {\n            color: #6699CC;\n}\nbody > #app .header .navbar-nav .user-dropdown .user_name_max {\n        margin-top: 10px;\n}\n.skin-default .navbar {\n  background-color: #4B6E82;\n}\n.striped-col:hover {\n  background-color: #eee !important;\n}\n\n/* right side bar css start */\n#right {\n  transition: all .3s ease-in-out;\n  width: 270px;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  overflow-y: auto;\n  right: -270px;\n  box-shadow: 0 0 15px #CCC;\n  background: #FAFAFA;\n}\n#right.open {\n    right: 0;\n}\n#right .nav-tabs > li > a:hover {\n    border: 1px solid transparent;\n}\n#right .card-body {\n    padding: 0;\n}\n.rightsidebar-right {\n  padding-top: 50px;\n}\n@media (min-width: 320px) and (max-width: 560px) {\n.rightsidebar-right {\n      padding-top: 100px !important;\n}\n}\n.rightsidebar-right .nav-tabs {\n    border-bottom: 0;\n}\n.rightsidebar-right .text-muted {\n    color: #555;\n}\n.rightsidebar-right .rightsidebar-right-heading, .rightsidebar-right .rightside-right-heading {\n    background: #FFF;\n    color: #555;\n    border-bottom: 1px solid #DDD;\n    border-top: 1px solid #DDD;\n    margin: 0px -20px 0;\n    font-size: 15px;\n    padding: 15px 20px 15px 15px;\n}\n.rightslider-p-t {\n  padding-top: 0 !important;\n}\n.margin-none {\n  margin: 0;\n}\n.rightsidebar-contact-wrapper {\n  margin: 1px -20px;\n  transition: all 0.5s ease;\n}\n.rightsidebar-contact-wrapper:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.rightsidebar-contact-wrapper:hover .rightsidebar-contact {\n    margin-left: 12px;\n    transition: 300ms;\n}\n.rightsidebar-contact-wrapper .rightsidebar-contact {\n  padding: 15px 20px;\n  display: block;\n  color: #2E576B;\n}\n.rightsidebar-contact-wrapper .rightsidebar-contact:hover {\n  text-decoration: none;\n}\n.rightsidebar-notification {\n  transition: all 0.5s ease;\n}\n.rightsidebar-notification a {\n  padding: 15px 0;\n  display: block;\n  color: #2E576B;\n}\n.sidebar-right-opened {\n  right: 250px;\n}\n.sidebar-right-opened #right {\n  right: 0;\n}\n.sidebar-right-opened .background-overlay {\n  position: fixed;\n  display: block;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.12);\n  z-index: 998;\n  transition: background-color .3s;\n}\n.scrollable-content {\n  height: 100%;\n}\n\n/*rightside bar tabs*/\n#right .nav-tabs > li > a {\n  padding: 10px 19px 4px 19px;\n  font-size: 23px;\n}\n#right .nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  border: 1px solid #DDD;\n  color: #555;\n  background-color: #FFF;\n  border-bottom-color: transparent;\n  margin-top: -2px;\n}\n.rightsidebar-right .card-header-tabs .nav-link.active {\n  border-top: 0 !important;\n}\n#slim_t1,\n#slim_t2 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n#right #slim_t1 img {\n  width: 20px;\n  height: 20px;\n}\n\n/*tab 3 settings*/\n/*to hide default skin picker*/\n#slim_t3 ul {\n  padding: 0;\n}\n.setting-color {\n  padding: 0 2px;\n  margin-bottom: 5px;\n}\n.setting-color > label {\n  display: block;\n  position: relative;\n  margin: 10px;\n  padding: 0;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 0;\n  box-shadow: 2px 4px 5px #CCC;\n  cursor: pointer;\n  width: 53px;\n  float: left;\n}\n.setting-color > label.active-color .split .bg-default-clear:after,\n.setting-color > label.active-color .split .bg-mint:after,\n.setting-color > label.active-color .split .bg-grape:after,\n.setting-color > label.active-color .split .bg-lavender:after,\n.setting-color > label.active-color .split .bg-pink:after,\n.setting-color > label.active-color .split .bg-sunflower:after {\n  content: '';\n  position: absolute;\n  top: 12px;\n  left: 14px;\n  height: 22px;\n  width: 26px;\n  border-radius: 16px;\n  border-top: 13px solid #fafafa;\n}\n.setting-color > label.active-color .split .bg-default-clear:after {\n  border-bottom: 13px solid #2E576B;\n}\n.setting-color > label.active-color .split .bg-mint:after {\n  border-bottom: 13px solid #37BC9B;\n}\n.setting-color > label.active-color .split .bg-grape:after {\n  border-bottom: 13px solid #E76F7C;\n}\n.setting-color > label.active-color .split .bg-lavender:after {\n  border-bottom: 13px solid #AC92EC;\n}\n.setting-color > label.active-color .split .bg-pink:after {\n  border-bottom: 13px solid #EC87C0;\n}\n.setting-color > label.active-color .split .bg-sunflower:after {\n  border-bottom: 13px solid #FFCE54;\n}\n.setting-color > label:first-child {\n  margin-left: 10px;\n}\n.setting-color > label:last-child {\n  margin-right: 0;\n}\n.setting-color > label > .color {\n  display: block;\n  height: 18px;\n}\n.setting-color > label > .split {\n  display: block;\n}\n.setting-color > label > .split:after,\n.setting-color > label > .split:before {\n  content: \" \";\n  display: table;\n}\n.setting-color > label > .split:after {\n  clear: both;\n}\n.setting-color > label > .split > .color {\n  display: block;\n  height: 25.5px;\n}\n.setting-color > label > .split > .color:first-child {\n  float: left;\n  width: 70%;\n}\n.setting-color > label > .split > .color:last-child {\n  float: right;\n  width: 30%;\n}\n.setting-color > label > input[type=radio] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n.bg-default-light {\n  background-color: #2E576B;\n  color: #FFF;\n}\n.bg-default-clear {\n  background-color: #2E576B;\n  color: #EBF4E4;\n}\n.bg-mint-light {\n  background-color: #56CCAE;\n  color: #FFF;\n}\n.bg-mint {\n  background-color: #37BC9B;\n  color: #EBF4E4;\n}\n.bg-grape-light {\n  background-color: #F4929D;\n  color: #FFF;\n}\n.bg-grape {\n  background-color: #E76F7C;\n  color: #EBF4E4;\n}\n.bg-lavender-light {\n  background-color: #B6A0EC;\n  color: #FFF;\n}\n.bg-lavender {\n  background-color: #AC92EC;\n  color: #EBF4E4;\n}\n.bg-pink-light {\n  background-color: #EE98C8;\n  color: #FFF;\n}\n.bg-pink {\n  background-color: #EC87C0;\n  color: #EBF4E4;\n}\n.bg-gray {\n  background-color: #2E576B;\n}\n.bg-gray-light {\n  background-color: #EFEFEF;\n}\n.bg-sunflower {\n  background-color: #FFCE54;\n}\n.bg-sunflower-light {\n  background-color: #FFDD87;\n}\n\n/*rightside bar tabs ends*/\n#slim_t1 a {\n  text-decoration: none;\n}\n\n/* Define 2 column template */\n.left-aside,\n.right-aside {\n  padding: 0;\n  display: table-cell;\n  vertical-align: top;\n}\n.wrapper.hide_menu > .left-aside {\n  display: none;\n}\n@media (max-width: 992px) {\n.wrapper > .right-aside {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n@media (min-width: 320px) and (max-width: 425px) {\n.wrapper > .right-aside {\n    padding-top: 0;\n}\n}\n\n/******* 2.1 HEADER LEFT ******/\n/*side bar nav */\n.sidebar {\n  display: block;\n  width: 240px;\n}\n.content {\n  display: block;\n  width: auto;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  padding: 0 15px;\n}\n\n/* left side profile css */\n.nav_profile {\n  margin-bottom: 4px;\n}\n.nav_profile .profile-left {\n  padding: 7px 15px 9px;\n  min-height: 85px;\n  border-bottom: 1px solid #EEE;\n}\n.nav_profile .profile-left .profile-thumb {\n  border-radius: 50px;\n  display: inline-block;\n  padding-top: 15px !important;\n}\n.nav_profile .profile-left .media-heading {\n  line-height: 20px;\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 15px;\n  color: #2E576B;\n}\n.nav_profile .profile-left .profile-thumb img {\n  width: 54px;\n}\nbody > #app .header .navbar-nav .dropdown-toggle img {\n  margin-top: 5px;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle {\n  padding-top: 5px;\n}\n.user-dropdown .dropdown-menu.show {\n  top: -2px !important;\n}\n\n/******* 2.2 HEADER RIGHT SIDE DROPDOWNS  *****/\n/*\n   Dropdown menus\n----------------------------\n*/\n.dropdown-menu {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  z-index: 2300;\n}\n\n/*=== Left menu ===*/\n/****** 3.LEFT SIDEBAR ******/\n.left-aside {\n  width: 240px;\n  background: #FFF;\n  border-right: 5px solid #EEE;\n}\n.submenu-header:hover {\n  color: #33CC99 !important;\n}\n#menu .navigation {\n  padding-left: 0;\n}\n#menu .navigation .menu-item,\n  #menu .navigation .submenu {\n    list-style-type: none;\n}\n#menu .navigation .menu-item a,\n    #menu .navigation .submenu a {\n      text-align: left;\n      color: #666;\n      position: relative;\n      transition: all 0.2s;\n      display: block;\n      font-size: 13px;\n      line-height: 20px;\n      padding: 11px 20px;\n      text-decoration: none;\n}\n#menu .navigation .menu-item a.active,\n      #menu .navigation .submenu a.active {\n        border-right: 3px solid #68DEB7;\n        background: #EEEEEE;\n        color: #33CC99;\n}\n#menu .navigation .menu-item a:hover,\n    #menu .navigation .submenu a:hover {\n      color: #33CC99 !important;\n}\n#menu .navigation .submenu .submenu-header {\n    cursor: pointer;\n    user-select: none;\n}\n#menu .navigation .submenu .submenu-header .submenu_icon {\n      transition: all 0.3s;\n}\n#menu .navigation .submenu .submenu-header .submenu_icon i {\n        font-size: 10px;\n}\n#menu .navigation .submenu.active > .submenu-header {\n    border-right: 3px solid #68DEB7;\n    background: #EEEEEE;\n    color: #33CC99;\n}\n#menu .navigation .submenu.active > .submenu-header > .submenu_icon {\n      transform: rotate(90deg);\n}\n#menu .navigation .submenu .submenu-content {\n    padding-left: 0;\n}\n#menu .navigation .submenu .submenu-content li a {\n      padding-left: 30px;\n}\n.profile-left a {\n  text-decoration: none;\n}\n\n/******* END LEFT SIDEBAR *****/\n/********* 4. MAIN WRAPPER STYLES *********/\n.wrapper:after,\n.wrapper:before {\n  display: table;\n  content: \" \";\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper {\n  display: table;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n  min-height: 100vh !important;\n}\n\n/****** wrapper RIGHT SIDE  *******/\n.right-aside {\n  padding: 0 10px 10px 10px;\n  width: 100%;\n  max-width: 100%;\n}\n.right-aside > .content-header {\n  margin: -2px -10px 25px;\n  height: 65px;\n  background: #FAFAFA;\n  box-shadow: 0 0 18px #E5E5E5;\n}\n.right-aside > .content-header > h1 {\n    margin: 2px;\n    padding-left: 13px;\n    padding-top: 8px;\n}\n.right-aside > .content-header .breadcrumb {\n    background-color: #f9f9f9;\n    padding: 2px 15px 9px;\n}\n.right-aside > .content-header .breadcrumb .breadcrumb-item a {\n      color: #333;\n}\n@media (max-width: 320px) {\n.right-aside > .content-header {\n    padding: 0px 10px 79px 0;\n}\n}\n.content-header h1 {\n  font-size: 22px;\n  line-height: 1.5;\n}\n.view-port-height {\n  height: 100vh;\n}\n.sidebar-right-opened .background-overlay {\n  position: fixed;\n  display: block;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.12);\n  z-index: 998;\n  transition: background-color 0.3s;\n}\n\n/********* END MAIN WRAPPER STYLES *********/\n/*********7. CUSTOM STYLES *********/\n.progress_task {\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n.progress {\n  margin-bottom: 20px;\n}\n.progress-bar {\n  font-size: 10px;\n  line-height: 15px;\n}\n.progress-xs {\n  height: 5px;\n}\n.panel-heading small {\n  line-height: 23px;\n  font-size: 12px;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #555;\n  background-color: #FFF;\n  border-top: 3px solid #6699CC;\n  border-bottom-color: transparent;\n  cursor: default;\n  font-weight: 500;\n  margin-top: -2px;\n}\n.text-white {\n  color: #FFFFFF;\n}\n.input-group-addon {\n  padding: 5px 12px;\n}\n.checkbox label,\n.radio label,\n.radio-inline {\n  padding-left: 0;\n}\n.form-horizontal .checkbox-inline,\n.form-horizontal .radio-inline {\n  margin-left: 10px;\n}\na {\n  text-decoration: none !important;\n}\n.form-control.focus,\n.form-control:focus {\n  border-color: #7EC4E7;\n  box-shadow: none;\n}\n.rounded {\n  border-radius: 20px;\n  padding: 7px 20px;\n}\n.btn-white {\n  background-color: white;\n  border-color: #cccccc;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.alert-success {\n  background-color: #e0f4e9;\n  border-color: #75D1A3;\n  color: #75D1A3;\n}\n.alert-warning {\n  background-color: #fffdcc;\n  border-color: #FFCE56;\n  color: #FFBF23;\n}\n.swal2-modal.swal2-show {\n  border-radius: 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\n/*\nCustomized Bootstrap toastr\n*/\n.checkbox,\n.radio {\n  display: inline;\n  min-height: 0;\n}\ndiv.checker,\ndiv.radio {\n  margin-right: 0;\n  margin-left: 3px;\n}\ndiv.button,\ndiv.checker,\ndiv.selector,\ndiv.uploader {\n  display: inline-block;\n  zoom: 1;\n  vertical-align: middle;\n}\n.resize_vertical {\n  resize: vertical;\n}\n.input-group-addon {\n  border: 1px solid #CCC;\n}\n.nav-tabs .nav-link.active {\n  border-top: 3px solid #6699cc;\n}\n\n/* layout css ends*/\n/**** 7.MEDIA QUERIES ****/\n@media screen and (min-width: 993px) {\n.left-aside {\n    top: 60px;\n}\n}\n\n/*Give content full width on xs screens*/\n@media screen and (max-width: 992px) {\n.right-aside {\n    margin-left: 0;\n}\n}\n@media screen and (max-width: 560px) {\n.right-aside {\n    padding: 10px;\n}\n}\n@media screen and (max-width: 767px) {\n.navbar .navbar-nav > li {\n    float: left;\n}\n.navbar-nav {\n    margin: 0;\n    float: left;\n}\n.navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n}\n}\n\n/* Fix dropdown menu for small screens to display correctly on small screens */\n@media screen and (max-width: 767px) {\n.navbar-nav > .notifications-menu > .dropdown-menu,\n  .navbar-nav > .user-menu > .dropdown-menu {\n    position: absolute;\n    top: 100%;\n    right: -60px;\n    left: auto;\n    background: #FFFFFF;\n}\n.navbar-nav .open .dropdown-menu .dropdown-header,\n  .navbar-nav .open .dropdown-menu > li > a {\n    padding: 5px 15px;\n}\n.navbar-nav > .notifications-menu > .dropdown-menu {\n    width: 295px;\n}\n.navbar-nav > .user-menu > .dropdown-menu {\n    right: 7px;\n    margin-top: 8px;\n}\n.navbar-nav .user-menu .dropdown-menu > li > a {\n    padding: 4px 20px;\n}\n.navbar-right .nav > li > a {\n    padding: 13px 15px 14px;\n}\n.navbar-right .nav > li > a .black {\n    padding-top: 9px;\n}\n.navbar-right .nav > li.notifications-menu > a {\n    padding-top: 12px;\n    padding-bottom: 14px;\n}\nbody > #app .header .navbar .nav > li > a > .label {\n    top: 17px;\n    right: 13px;\n}\n.repeater-btn {\n    margin-top: 10px;\n}\n}\n\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media screen and (max-width: 480px) {\n.navbar-nav > .notifications-menu > .dropdown-menu > li.header:after {\n    border-width: 0;\n}\n}\n@media screen and (max-width: 560px) {\nbody > #app .header .logo,\n  body > #app .header .navbar {\n    width: 100%;\n    float: none;\n    position: relative;\n    height: initial;\n}\nbody > #app .header .navbar {\n    margin: 0;\n}\nbody > #app .header .navbar .sidebar-toggle {\n    padding-left: 25px;\n}\nbody > #app .header .navbar .allicon_dropdown {\n    padding-left: 10px;\n}\n}\n@media screen and (max-width: 350px) {\n.navbar-nav > .notifications-menu > .dropdown-menu {\n    right: -76px;\n    margin-top: 7px;\n}\n}\n@media (min-width: 1440px) and (max-width: 2560px) {\n#menu .menu-dropdown > ul,\n  #menu .menu-dropdown-open-ul {\n    margin-top: -1px;\n}\n}\n@media (min-width: 768px) {\n.label_padding {\n    padding-right: 32px;\n}\n.repeater-form {\n    text-align: center;\n}\n}\n\n/****** END MEDIA QUERIES ****/\n/*\n *\n * Layouts\n *\n */\n/**** Fixed header ****/\nbody.fixed-header #app .header {\n  margin-bottom: 53px;\n}\n@media screen and (max-width: 560px) {\nbody.fixed-header #app .header {\n      margin-bottom: 90px;\n}\n}\nbody.fixed-header #app .navbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media screen and (max-width: 560px) {\nbody.fixed-header #app .navbar {\n      position: fixed;\n}\n}\n\n/**** Boxed ****/\n@media (max-width: 992px) {\nbody.boxed .wrapper > .right-aside {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n@media screen and (min-width: 768px) {\nbody.boxed {\n    width: 100%;\n}\n}\n.fade {\n  opacity: 1;\n}\n#menu .navigation .submenu .submenu-content .submenu-content-box a {\n  padding: 11px 20px 11px 45px;\n}\n.submenu.active > .submenu-header {\n  background-color: #EEEEEE;\n  color: #33CC99 !important;\n}\n.collapse-item.active .vuemenu .submenu-header {\n  padding-left: 30px !important;\n}\n\n/*vue multi dropdown*/\n.mini_height {\n  min-height: 800px !important;\n}\n.user-dropdown .dropdown-menu a:active {\n  background-color: #fff;\n}\n.form-control:active, .input-group .form-control:hover {\n  z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1062);
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

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n@media(max-width: 320px){\n.message_dropdown .dropdown-menu.show{\n        left:15px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_clear_header__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_clear_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_clear_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_left_side_default_left_side__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_left_side_default_left_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_left_side_default_left_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_right_side__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_right_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_layout_right_side__);
//
//
//
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
        clear_header: __WEBPACK_IMPORTED_MODULE_1__components_layout_clear_header___default.a,
        left_side: __WEBPACK_IMPORTED_MODULE_2__components_layout_left_side_default_left_side___default.a,
        right_side: __WEBPACK_IMPORTED_MODULE_3__components_layout_right_side___default.a
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

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1065)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1067)
/* template */
var __vue_template__ = __webpack_require__(1068)
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

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1066);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("3e4ea3e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66818f43\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66818f43\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite\n}\n.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:1px 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:8px;white-space:nowrap\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:10px;display:inline-block\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@keyframes a{\n0%{transform:rotate(0)\n}\nto{transform:rotate(2turn)\n}\n}", ""]);

// exports


/***/ }),

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        multiselect: __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default.a
    },
    data: function data() {
        return {
            proyectos: [],
            proyecto: {
                id: 0,
                nombre: ''
            }
        };
    },
    methods: {
        //Enable sidebar toggle
        toggle_left: function toggle_left() {
            this.$store.commit('left_menu', "toggle");
        },
        toggle_right: function toggle_right() {
            this.$store.commit('rightside_bar', "toggle");
        },
        cargarProyecto: function cargarProyecto() {
            var me = this;
            fetch('/proyecto/select').then(function (response) {
                return response.json();
            }).then(function (myJson) {
                me.proyectos = myJson;
                // console.log(me.proyectos);
            });
        }
    },
    mounted: function mounted() {
        this.cargarProyecto();
        this.$root.$emit("SeleccionProyecto", 0);
    },

    watch: {
        proyecto: function proyecto(val) {
            if (val) {
                this.$root.$emit("SeleccionProyecto", val.id);
                // console.log(val);
            } else {
                this.$root.$emit("SeleccionProyecto", 0);
                swal.fire({
                    type: 'warning',
                    title: 'Advertencia',
                    text: 'Por favor seleccione un proyecto'
                });
            }
        }
    }
});

/***/ }),

/***/ 1068:
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
            attrs: { src: __webpack_require__(1069), alt: "logo" }
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
          "v-flex",
          { attrs: { xs8: "", sm8: "", md8: "" } },
          [
            _c("multiselect", {
              attrs: {
                options: _vm.proyectos,
                placeholder: "Seleccione un Proyecto",
                label: "nombre",
                "track-by": "nombre"
              },
              model: {
                value: _vm.proyecto,
                callback: function($$v) {
                  _vm.proyecto = $$v
                },
                expression: "proyecto"
              }
            })
          ],
          1
        ),
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

/***/ 1069:
/***/ (function(module, exports) {

module.exports = "/images/logo10.png?44d2a7f60abc34524f43d5db344dac19";

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1071)
/* template */
var __vue_template__ = __webpack_require__(1089)
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

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile_vue__ = __webpack_require__(1085);
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

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

exports.vmenu = __webpack_require__(1073);
exports.vsubMenu = __webpack_require__(1076);
exports.vmenuItem = __webpack_require__(1082);

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1074)
/* template */
var __vue_template__ = __webpack_require__(1075)
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

/***/ 1074:
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

/***/ 1075:
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

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1077)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1079)
/* template */
var __vue_template__ = __webpack_require__(1081)
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

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1078);
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

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.collapse-item .submenu-header[data-v-b2beb1da] {\n  cursor: pointer;\n  color: #666;\n  padding: 11px 21px 11px 19px;\n}\n.collapse-item .submenu-header .submenu-header-title[data-v-b2beb1da] {\n    vertical-align: text-bottom;\n}\n.collapse-item .submenu-header .active .submenu-header-title[data-v-b2beb1da] {\n    font-weight: 600;\n}\n.collapse-item .submenu-content[data-v-b2beb1da] {\n  /*background-color: #F8F7F6;*/\n  overflow-y: hidden;\n  position: relative;\n}\n.collapse-item .submenu_icon[data-v-b2beb1da] {\n  transition: all 0.3s;\n  font-size: 10px;\n  margin-top: 5px;\n  /*color:#3e6174;*/\n}\n.collapse-item.active > .submenu-header[data-v-b2beb1da] {\n  /*background-color:#e6e6e6;*/\n  /*color: #3e6174;*/\n  font-weight: 500;\n}\n.collapse-item.active > .submenu-header > .submenu_icon[data-v-b2beb1da] {\n    transform: rotate(90deg);\n}\n.collapse-item.active > .submenu-header i[data-v-b2beb1da] {\n    /*color: #3e6174 !important;*/\n}\n.leftmenu_icon[data-v-b2beb1da] {\n  margin-right: 6px;\n  line-height: 20px;\n  height: 22px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  /*color:#e6e6e6;*/\n}\n", ""]);

// exports


/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(1080);
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

/***/ 1080:
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),

/***/ 1081:
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

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1083)
/* template */
var __vue_template__ = __webpack_require__(1084)
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

/***/ 1083:
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

/***/ 1084:
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

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1086)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1088)
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

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1087);
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

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/* left side profile css */\n.profile-left[data-v-40f1c7db] {\n  padding: 15px;\n  min-height: 90px;\n  border-bottom: 1px solid #EEE;\n}\n.profile-left .profile-thumb[data-v-40f1c7db] {\n  border-radius: 50px;\n  display: inline-block;\n  padding-top: 9px;\n}\n.profile-left .media-heading[data-v-40f1c7db] {\n  line-height: 23px;\n  margin-top: 12px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #2E576B;\n}\n.profile-left .profile-thumb img[data-v-40f1c7db] {\n  width: 54px;\n}\n.content-profile[data-v-40f1c7db] {\n  padding-left: 15px;\n}\n.content-profile .icon-list[data-v-40f1c7db] {\n    padding-left: 0;\n}\n.content-profile .icon-list li[data-v-40f1c7db] {\n  display: inline-block;\n  padding: 0;\n  vertical-align: top;\n}\n.content-profile .icon-list[data-v-40f1c7db]:before {\n  content: '';\n}\n.content-profile .icon-list li i[data-v-40f1c7db] {\n  font-size: 13px;\n  color: #555;\n  padding-top: 5px;\n}\n.content-profile .icon-list li a[data-v-40f1c7db] {\n  display: block;\n  width: 30px;\n  height: 25px;\n  text-align: center;\n  line-height: 23px;\n  transition: all 300ms ease-in-out;\n}\n.content-profile .icon-list li a[data-v-40f1c7db] {\n  border: 1px solid #DDD;\n}\n.icon-list li a[data-v-40f1c7db] {\n  position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ 1088:
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

/***/ 1089:
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
              _c(
                "vmenu-item",
                { attrs: { link: "/", icon: "fa fa-fw fa-desktop" } },
                [_vm._v("\n                    Inicio\n                ")]
              ),
              _vm._v(" "),
              _c(
                "vsub-menu",
                {
                  staticClass: "menufold-bottom",
                  attrs: { title: "Usuarios", icon: "fa fa-fw fa-user" }
                },
                [
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/Roles", icon: "fa fa-fw fa-users" } },
                    [
                      _vm._v(
                        "\n                        Roles\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/Permisos", icon: "fa fa-fw fa-list" } },
                    [
                      _vm._v(
                        "\n                        Permisos\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/Usuarios", icon: "fa fa-fw fa-user" } },
                    [
                      _vm._v(
                        "\n                        Usuarios\n                    "
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
                  attrs: { title: "Proyectos", icon: "fa fa-fw fa-folder" }
                },
                [
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/Organizaciones",
                        icon: "fa fa-fw fa-globe"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Organizaciones\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/Proyectos", icon: "fa fa-fw fa-folder" }
                    },
                    [
                      _vm._v(
                        "\n                        Proyectos\n                    "
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
                  attrs: { title: "Actividades", icon: "fa fa-fw fa-code-fork" }
                },
                [
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/Actividades",
                        icon: "fa fa-fw fa-code-fork"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Actividades\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/Gantt", icon: "fa fa-fw fa-tasks" } },
                    [
                      _vm._v(
                        "\n                        Gantt\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/GanttProyecto",
                        icon: "fa fa-fw fa-tasks"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Progreso de proyectos\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    { attrs: { link: "/Tarea", icon: "fa fa-fw fa-tasks" } },
                    [
                      _vm._v(
                        "\n                        Tareas\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/Subir",
                        icon: "fa fa-fw fa-location-arrow"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Subir Reporte\n                    "
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
                  attrs: { title: "Ajustes", icon: "fa fa-fw fa-gear" }
                },
                [
                  _c(
                    "vmenu-item",
                    {
                      attrs: {
                        link: "/TipoActividad",
                        icon: "fa fa-fw fa-list"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Tipo Actividades\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vmenu-item",
                    {
                      attrs: { link: "/Estadistica", icon: "fa fa-fw fa-paste" }
                    },
                    [
                      _vm._v(
                        "\n                        Estadisticas\n                    "
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

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1091)
/* template */
var __vue_template__ = __webpack_require__(1095)
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

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__right_side_bar__ = __webpack_require__(1092);
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

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1093)
/* template */
var __vue_template__ = __webpack_require__(1094)
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

/***/ 1093:
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

/***/ 1094:
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
                                      src: __webpack_require__(606),
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
                                      src: __webpack_require__(561),
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
                                      src: __webpack_require__(562),
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
                                      src: __webpack_require__(563),
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
                                      src: __webpack_require__(566),
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
                                      src: __webpack_require__(580),
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
                                      src: __webpack_require__(598),
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

/***/ 1095:
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

/***/ 2371:
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

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1057)
  __webpack_require__(1059)
  __webpack_require__(1061)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1063)
/* template */
var __vue_template__ = __webpack_require__(2371)
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

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(535);
var isBuffer = __webpack_require__(541);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(525);
var normalizeHeaderName = __webpack_require__(545);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(536);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(536);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);
var settle = __webpack_require__(546);
var buildURL = __webpack_require__(548);
var parseHeaders = __webpack_require__(549);
var isURLSameOrigin = __webpack_require__(550);
var createError = __webpack_require__(537);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(551);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(552);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(547);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 541:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(543);

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);
var bind = __webpack_require__(535);
var Axios = __webpack_require__(544);
var defaults = __webpack_require__(534);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(539);
axios.CancelToken = __webpack_require__(558);
axios.isCancel = __webpack_require__(538);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(559);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(534);
var utils = __webpack_require__(525);
var InterceptorManager = __webpack_require__(553);
var dispatchRequest = __webpack_require__(554);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(537);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);
var transformData = __webpack_require__(555);
var isCancel = __webpack_require__(538);
var defaults = __webpack_require__(534);
var isAbsoluteURL = __webpack_require__(556);
var combineURLs = __webpack_require__(557);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(525);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(539);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function l(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function o(t,e,i,n){return t.filter(function(t){return l(n(t,i),e)})}function r(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(i){return i.reduce(function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i},[])}}function u(t,e,i,s,l){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=o(r[i],t,e,l);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=i(2),p=function(t){return t&&t.__esModule?t:{default:t}}(h),d=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}};e.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return s(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var t=this.search||"",e=t.toLowerCase(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):o(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&e.length&&!this.isExistingOption(e)&&i.unshift({isTag:!0,label:t}),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue[0]?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(t,e){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(t){this.internalValue=this.getInternalValue(t)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(t){return null===t||void 0===t?[]:this.multiple?(0,p.default)(t):(0,p.default)([t])},filterAndFlat:function(t,e,i){return d(u(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return d(a(this.groupValues,this.groupLabel),r)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isNotSelected:function(t){return!this.isSelected(t)},getOptionLabel:function(t){if(s(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return s(e)?"":e},select:function(t,e){if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isLabel||t.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.internalValue.push(t):this.internalValue=[t],this.$emit("select",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===t?"undefined":c(t))?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);this.internalValue.splice(i,1),this.$emit("remove",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t.map(n);if(t&&"object"===(void 0===t?"undefined":s(t))){for(var e={},i=Object.keys(t),l=0,o=i.length;l<o;l++){var r=i[l];e[r]=n(t[r])}return e}return t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,i){i(6);var n=i(7)(i(5),i(8),null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=e.pointerMixin=e.multiselectMixin=e.Multiselect=void 0;var s=i(3),l=n(s),o=i(0),r=n(o),a=i(1),u=n(a),c=i(2),h=n(c);e.default=l.default,e.Multiselect=l.default,e.multiselectMixin=r.default,e.pointerMixin=u.default,e.deepClone=h.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),l=n(s),o=i(1),r=n(o);e.default={name:"vue-multiselect",mixins:[l.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and "+t+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{display:"none"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,n){var s,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,l=t.default);var r="function"==typeof l?l.options:l;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var a=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}}),r.computed=a}return{esModule:s,exports:l,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)||!t._k(e.keyCode,"tab",9)?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValue,function(e){return[t._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]:t._e(),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.isOpen?t.search:t.currentOptionLabel},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.pointerBackward()},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46]))return null;e.stopPropagation(),t.removeLastElement()}]}}):t._e(),t._v(" "),t.searchable?t._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:t._s(t.currentOptionLabel)},on:{mousedown:function(e){e.preventDefault(),t.toggle(e)}}})],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:t.optionHighlight(n,e)},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "/images/avatar2.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "/images/avatar3.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "/images/avatar4.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "/images/avatar5.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "/images/avatar7.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "/images/avatar6.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ })

});