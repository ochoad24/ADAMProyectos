webpackJsonp([44],{

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("366d5d5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6360cc14\",\"scoped\":false,\"hasInlineConfig\":true}!./fileinput.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6360cc14\",\"scoped\":false,\"hasInlineConfig\":true}!./fileinput.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(28);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * bootstrap-fileinput v4.5.1\r\n * http://plugins.krajee.com/file-input\r\n *\r\n * Krajee default styling for bootstrap-fileinput.\r\n *\r\n * Author: Kartik Visweswaran\r\n * Copyright: 2014 - 2018, Kartik Visweswaran, Krajee.com\r\n *\r\n * Licensed under the BSD 3-Clause\r\n * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md\r\n */\n.btn-file input[type=file],.file-caption-icon,.file-no-browse,.file-preview .fileinput-remove,.file-zoom-dialog .btn-navigate,.file-zoom-dialog .floating-buttons,.krajee-default .file-thumb-progress{position:absolute\n}\n.file-loading input[type=file],input[type=file].file-loading{width:0;height:0\n}\n.file-no-browse{left:50%;bottom:20%;width:1px;height:1px;font-size:0;opacity:0;border:none;background:0 0;outline:0;box-shadow:none\n}\n.file-caption-icon,.file-input-ajax-new .fileinput-remove-button,.file-input-ajax-new .fileinput-upload-button,.file-input-ajax-new .no-browse .input-group-btn,.file-input-new .close,.file-input-new .file-preview,.file-input-new .fileinput-remove-button,.file-input-new .fileinput-upload-button,.file-input-new .glyphicon-file,.file-input-new .no-browse .input-group-btn,.file-zoom-dialog .modal-header:after,.file-zoom-dialog .modal-header:before,.hide-content .kv-file-content,.kv-hidden{display:none\n}\n.btn-file,.file-caption,.file-input,.file-loading:before,.file-preview,.file-zoom-dialog .modal-dialog,.krajee-default .file-thumbnail-footer,.krajee-default.file-preview-frame{position:relative\n}\n.file-error-message pre,.file-error-message ul,.krajee-default .file-actions,.krajee-default .file-other-error{text-align:left\n}\n.file-error-message pre,.file-error-message ul{margin:0\n}\n.krajee-default .file-drag-handle,.krajee-default .file-upload-indicator{float:left;margin:5px 0 -5px;width:16px;height:16px\n}\n.krajee-default .file-thumb-progress .progress,.krajee-default .file-thumb-progress .progress-bar{height:11px;font-family:Verdana,Helvetica,sans-serif;font-size:9px\n}\n.krajee-default .file-caption-info,.krajee-default .file-size-info{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:160px;height:15px;margin:auto\n}\n.file-zoom-content>.file-object.type-flash,.file-zoom-content>.file-object.type-image,.file-zoom-content>.file-object.type-video{max-width:100%;max-height:100%;width:auto\n}\n.file-zoom-content>.file-object.type-flash,.file-zoom-content>.file-object.type-video{height:100%\n}\n.file-zoom-content>.file-object.type-default,.file-zoom-content>.file-object.type-html,.file-zoom-content>.file-object.type-pdf,.file-zoom-content>.file-object.type-text{width:100%\n}\n.file-loading:before{content:\" Loading...\";display:inline-block;padding-left:20px;line-height:16px;font-size:13px;font-variant:small-caps;color:#999;background:url(" + escape(__webpack_require__(700)) + ") top left no-repeat\n}\n.file-object{margin:0 0 -5px;padding:0\n}\n.btn-file{overflow:hidden\n}\n.btn-file input[type=file]{top:0;left:0;min-width:100%;min-height:100%;text-align:right;opacity:0;background:none;cursor:inherit;display:block\n}\n.btn-file ::-ms-browse{font-size:10000px;width:100%;height:100%\n}\n.file-caption .file-caption-name{width:100%;margin:0;padding:0;box-shadow:none;border:none;background:0 0;outline:0\n}\n.file-caption.icon-visible .file-caption-icon{display:inline-block\n}\n.file-caption.icon-visible .file-caption-name{padding-left:15px\n}\n.file-caption-icon{left:8px\n}\n.file-error-message{color:#a94442;background-color:#f2dede;margin:5px;border:1px solid #ebccd1;border-radius:4px;padding:15px\n}\n.file-error-message pre{margin:5px 0\n}\n.file-caption-disabled{background-color:#eee;cursor:not-allowed;opacity:1\n}\n.file-preview{border-radius:5px;border:1px solid #ddd;padding:8px;width:100%;margin-bottom:5px\n}\n.file-preview .btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px\n}\n.file-preview .fileinput-remove{top:1px;right:1px;line-height:10px\n}\n.file-preview .clickable{cursor:pointer\n}\n.file-preview-image{font:40px Impact,Charcoal,sans-serif;color:green\n}\n.krajee-default.file-preview-frame{margin:8px;border:1px solid rgba(0,0,0,.2);box-shadow:0 0 10px 0 rgba(0,0,0,.2);padding:6px;float:left;text-align:center\n}\n.krajee-default.file-preview-frame .kv-file-content{width:213px;height:160px\n}\n.krajee-default.file-preview-frame .kv-file-content.kv-pdf-rendered{width:400px\n}\n.krajee-default.file-preview-frame .file-thumbnail-footer{height:70px\n}\n.krajee-default.file-preview-frame:not(.file-preview-error):hover{border:1px solid rgba(0,0,0,.3);box-shadow:0 0 10px 0 rgba(0,0,0,.4)\n}\n.krajee-default .file-preview-text{display:block;color:#428bca;border:1px solid #ddd;font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace;outline:0;padding:8px;resize:none\n}\n.krajee-default .file-preview-html{border:1px solid #ddd;padding:8px;overflow:auto\n}\n.krajee-default .file-other-icon{font-size:6em\n}\n.krajee-default .file-footer-buttons{float:right\n}\n.krajee-default .file-footer-caption{display:block;text-align:center;padding-top:4px;font-size:11px;color:#777;margin-bottom:15px\n}\n.krajee-default .file-preview-error{opacity:.65;box-shadow:none\n}\n.krajee-default .file-thumb-progress{height:11px;top:37px;left:0;right:0\n}\n.krajee-default.kvsortable-ghost{background:#e1edf7;border:2px solid #a1abff\n}\n.krajee-default .file-preview-other:hover{opacity:.8\n}\n.krajee-default .file-preview-frame:not(.file-preview-error) .file-footer-caption:hover{color:#000\n}\n.kv-upload-progress .progress{height:20px;margin:10px 0;overflow:hidden\n}\n.kv-upload-progress .progress-bar{height:20px;font-family:Verdana,Helvetica,sans-serif\n}\n.file-zoom-dialog .file-other-icon{font-size:22em;font-size:50vmin\n}\n.file-zoom-dialog .modal-dialog{width:auto\n}\n.file-zoom-dialog .modal-header{display:flex;align-items:center;justify-content:space-between\n}\n.file-zoom-dialog .btn-navigate{padding:0;margin:0;background:0 0;text-decoration:none;outline:0;opacity:.7;top:45%;font-size:4em;color:#1c94c4\n}\n.file-zoom-dialog .btn-navigate:not([disabled]):hover{outline:0;box-shadow:none;opacity:.6\n}\n.file-zoom-dialog .floating-buttons{top:5px;right:10px\n}\n.file-zoom-dialog .btn-navigate[disabled]{opacity:.3\n}\n.file-zoom-dialog .btn-prev{left:1px\n}\n.file-zoom-dialog .btn-next{right:1px\n}\n.file-zoom-dialog .kv-zoom-title{font-weight:300;color:#999;max-width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis\n}\n.file-input-ajax-new .no-browse .form-control,.file-input-new .no-browse .form-control{border-top-right-radius:4px;border-bottom-right-radius:4px\n}\n.file-caption-main{width:100%\n}\n.file-thumb-loading{background:url(" + escape(__webpack_require__(700)) + ") center center no-repeat content-box!important\n}\n.file-drop-zone{border:1px dashed #aaa;border-radius:4px;height:100%;text-align:center;vertical-align:middle;margin:12px 15px 12px 12px;padding:5px\n}\n.file-drop-zone.clickable:hover{border:2px dashed #999\n}\n.file-drop-zone.clickable:focus{border:2px solid #5acde2\n}\n.file-drop-zone .file-preview-thumbnails{cursor:default\n}\n.file-drop-zone-title{color:#aaa;font-size:1.6em;padding:85px 10px;cursor:default\n}\n.file-highlighted{border:2px dashed #999!important;background-color:#eee\n}\n.file-uploading{background:url(" + escape(__webpack_require__(1347)) + ") center bottom 10px no-repeat;opacity:.65\n}\n.file-zoom-fullscreen .modal-dialog{min-width:100%;margin:0\n}\n.file-zoom-fullscreen .modal-content{border-radius:0;box-shadow:none;min-height:100vh\n}\n.file-zoom-fullscreen .modal-body{overflow-y:auto\n}\n.floating-buttons{z-index:3000\n}\n.floating-buttons .btn-kv{margin-left:3px;z-index:3000\n}\n.file-zoom-content{height:480px;text-align:center\n}\n.file-zoom-content .file-preview-image,.file-zoom-content .file-preview-video{max-height:100%\n}\n.file-zoom-content>.file-object.type-image{height:auto;min-height:inherit\n}\n.file-zoom-content>.file-object.type-audio{width:auto;height:30px\n}\n@media (min-width:576px){\n.file-zoom-dialog .modal-dialog{max-width:500px\n}\n}\n@media (min-width:992px){\n.file-zoom-dialog .modal-lg{max-width:800px\n}\n}\n@media (max-width:767px){\n.file-preview-thumbnails{display:flex;justify-content:center;align-items:center;flex-direction:column\n}\n.file-zoom-dialog .modal-header{flex-direction:column\n}\n}\n@media (max-width:350px){\n.krajee-default.file-preview-frame .kv-file-content{width:160px\n}\n}\n@media (max-width:420px){\n.krajee-default.file-preview-frame .kv-file-content.kv-pdf-rendered{width:100%\n}\n}\n.file-loading[dir=rtl]:before{background:url(" + escape(__webpack_require__(700)) + ") top right no-repeat;padding-left:0;padding-right:20px\n}\n.file-sortable .file-drag-handle{cursor:move;opacity:1\n}\n.file-sortable .file-drag-handle:hover{opacity:.7\n}\n.clickable .file-drop-zone-title{cursor:pointer\n}\n.kv-zoom-actions .btn-kv{margin-left:3px\n}\n.file-preview-initial.sortable-chosen{background-color:#d9edf7\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1347:
/***/ (function(module, exports) {

module.exports = "/images/vendor/bootstrap-fileinput/loading-sm.gif?e5ad074b7969cc386b387f08dba4fcec";

/***/ }),

/***/ 1348:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1349);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("fcbba6e8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6360cc14\",\"scoped\":false,\"hasInlineConfig\":true}!./formelements.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6360cc14\",\"scoped\":false,\"hasInlineConfig\":true}!./formelements.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.select2-container .select2-selection--single {\n    height: 34px;\n}\n.select2-container--default .select2-selection--multiple,\n.select2-container--default .select2-selection--single {\n    border-radius: 0;\n}\n.daterangepicker.opensleft:after {\n    display: none;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n    margin-left: 0;\n}\n.btn-file{\n    border-bottom-right-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n}\n.file-input .input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n    margin-left: -1px;\n}\n.file-error-message {\n    color: #FE5B5B;\n}\n.noresize {\n    resize: none;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n    margin-left: 0;\n}\nimg.flag {\n    height: 16px;\n    width: 28px;\n    padding-right: 10px;\n}\n.file-preview-image {\n    max-width: 100% !important;\n}\n.m-b-10 {\n    margin-bottom: 10px !important;\n}\n.m-t-ng-8 {\n    margin-top: -8px;\n}\n#kvFileinputModal.file-zoom-fullscreen {\n    z-index: 10009;\n}\n.input-group-sm > .input-group-addon {\n    padding: 3px 10px;\n}\n.input-group-lg > .input-group-addon {\n    padding: 9px 16px;\n}\n.has-success .form-control{\n    border:1px solid #66cc99 !important;\n}\n.has-warning .form-control {\n    border-color: #f0ad4e;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control {\n    border-color: #ff6666;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.input-sm{\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n.input-md{\n    height: 34px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n.input-lg{\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.33333;\n    border-radius: 6px;\n}\n.kv-upload-progress>.progress,.fileinput-cancel-button{\n    display: none;\n}\n.custom-checkbox,.custom-radio{\n    margin: 0;\n}\n.inline_radio .custom-radio,.inline_check .custom-checkbox{\n    padding-right: 50px;\n}\n.form-control:disabled{\n    cursor:not-allowed;\n}\n.content .card{\n    margin-top: 10px;\n}\n@media(min-width: 320px) and (max-width: 425px){\n.input-group,.file-input-new,.btn-modify{\n        margin-bottom: 10px;\n}\n.input-group-btn .hidden-xs{\n        display: none;\n}\n}\n@media (max-width:768px){\n.input-group{\n        margin-bottom: 10px;\n}\n}\n.inlineRadio .custom-radio{\n    margin-right: 10px !important;\n}\n.dropdown-menu.show{\n    margin-right: 20px;\n}\n#input-text-has-success:focus{\n    box-shadow: 0px 0px 5px 0.1px #66cc99;\n}\n#input-text-has-warning:focus{\n    box-shadow: 0px 0px 5px 0.1px #f0ad4e;\n}\n#input-text-has-error:focus{\n    box-shadow: 0px 0px 5px 0.1px #ff6666;\n}\n.kv-file-zoom,.file-upload-indicator{\n    display: none;\n}\n.file-caption-main .btn-default{\n    color: #333;\n}\n.btn:active{\n    color: #fff !important;\n}\n.input_height .btn-group.show .dropdown-toggle{\n    color: #fff;\n}\n#input-20{\n    margin-bottom: 10px;\n}\n.input-group-btn .dropdown-menu{\n    z-index: 99;\n}\n\n\n\n/*bootstrap3 ovverrides*/\n.file-input-section .input-group-append .btn-file,.file-input-section .file-input .btn-file{\n    border-top-right-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n}", ""]);

// exports


/***/ }),

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_fileinput_js_fileinput_min_js__ = __webpack_require__(1351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_fileinput_js_fileinput_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_fileinput_js_fileinput_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_fileinput_themes_fa_theme_min_js__ = __webpack_require__(1352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_fileinput_themes_fa_theme_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_fileinput_themes_fa_theme_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            selected: 'first',
            options: [{ text: 'First radio', value: 'first' }, { text: 'Second radio', value: 'second' }, { text: 'Third radio', value: 'third' }],
            radios: [{ text: 'First radio', value: 'first' }, { text: 'Second radio', value: 'second' }, { text: 'Third radio', value: 'third' }],
            stacked_check: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
            check: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3']
        };
    },

    name: "form-elements",
    mounted: function mounted() {
        "use strict";

        $("#input-43").fileinput({
            browseClass: "btn btn-info",
            showPreview: false,
            allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
            elErrorContainer: "#errorBlock43",
            theme: "fa"
            // you can configure `msgErrorClass` and `msgInvalidFileExtension` as well
        });
        $("#input-42").fileinput({
            browseClass: "btn btn-warning",
            maxFilesNum: 10,
            allowedFileExtensions: ["jpg", "gif", "png", "txt"],
            theme: "fa"
        });
        $("#input-41").fileinput({
            browseClass: "btn btn-danger",
            maxFileCount: 10,
            allowedFileTypes: ["image", "video"],
            theme: "fa"
        });
        $("#input-40,#input-22").fileinput({
            theme: "fa"
        });
        $(".btn-modify").on("click", function () {

            var $btn = $(this);
            if ($btn.text() == "Modify") {
                $("#input-40").fileinput("disable");
                $btn.html("Revert");
                alert("Hurray! I have disabled the input and hidden the upload button.");
            } else {
                $("#input-40").fileinput("enable");
                $btn.html("Modify");
                alert("Hurray! I have reverted back the input to enabled with the upload button.");
            }
        });
        $("#input-23").fileinput({
            browseClass: "btn btn-secondary",
            showUpload: false,
            mainTemplate: "{preview}\n" + "<div class='input-group {class}'>\n" + "   <div class='input-group-btn'>\n" + "       {browse}\n" + "       {upload}\n" + "       {remove}\n" + "   </div>\n" + "   {caption}\n" + "</div>",
            theme: "fa"
        });
        $("#input-21").fileinput({
            previewFileType: "image",
            browseClass: "btn btn-success",
            browseLabel: " Pick Image",

            removeClass: "btn btn-danger",
            removeLabel: "Delete",

            uploadClass: "btn btn-info",
            uploadLabel: " Upload",

            theme: "fa"
        });
        $("#input-20").fileinput({
            browseClass: "btn btn-info btn-block",
            showCaption: false,
            showRemove: false,
            showUpload: false,
            theme: "fa"
        });
        $("#input-4").fileinput({
            browseClass: "btn btn-success",
            showCaption: false
        });
        $("#input-5").fileinput({
            browseClass: "btn btn-warning",
            showUpload: false,
            maxFileCount: 10,
            mainClass: "input-group-lg"
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(527)))

/***/ }),

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * bootstrap-fileinput v4.5.1
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2018, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
!function(e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(527)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";var t,i;e.fn.fileinputLocales={},e.fn.fileinputThemes={},String.prototype.setTokens=function(e){var t,i,a=this.toString();for(t in e)e.hasOwnProperty(t)&&(i=new RegExp("{"+t+"}","g"),a=a.replace(i,e[t]));return a},t={FRAMES:".kv-preview-thumb",SORT_CSS:"file-sortable",OBJECT_PARAMS:'<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',DEFAULT_PREVIEW:'<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',MODAL_ID:"kvFileinputModal",MODAL_EVENTS:["show","shown","hide","hidden","loaded"],objUrl:window.URL||window.webkitURL,compare:function(e,t,i){return void 0!==e&&(i?e===t:e.match(t))},isIE:function(e){if("Microsoft Internet Explorer"!==navigator.appName)return!1;if(10===e)return new RegExp("msie\\s"+e,"i").test(navigator.userAgent);var t,i=document.createElement("div");return i.innerHTML="\x3c!--[if IE "+e+"]> <i></i> <![endif]--\x3e",t=i.getElementsByTagName("i").length,document.body.appendChild(i),i.parentNode.removeChild(i),t},canAssignFilesToInput:function(){var e=document.createElement("input");try{return e.type="file",e.files=null,!0}catch(e){return!1}},getDragDropFolders:function(e){var t,i,a=e.length,r=0;if(a>0&&e[0].webkitGetAsEntry())for(t=0;t<a;t++)(i=e[t].webkitGetAsEntry())&&i.isDirectory&&r++;return r},initModal:function(t){var i=e("body");i.length&&t.appendTo(i)},isEmpty:function(t,i){return null==t||0===t.length||i&&""===e.trim(t)},isArray:function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},ifSet:function(e,t,i){return i=i||"",t&&"object"==typeof t&&e in t?t[e]:i},cleanArray:function(e){return e instanceof Array||(e=[]),e.filter(function(e){return null!=e})},spliceArray:function(t,i,a){var r,n,s=0,o=[];if(!(t instanceof Array))return[];for(n=e.extend(!0,[],t),a&&n.reverse(),r=0;r<n.length;r++)r!==i&&(o[s]=n[r],s++);return a&&o.reverse(),o},getNum:function(e,t){return t=t||0,"number"==typeof e?e:("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?t:e)},hasFileAPISupport:function(){return!(!window.File||!window.FileReader)},hasDragDropSupport:function(){var e=document.createElement("div");return!t.isIE(9)&&(void 0!==e.draggable||void 0!==e.ondragstart&&void 0!==e.ondrop)},hasFileUploadSupport:function(){return t.hasFileAPISupport()&&window.FormData},hasBlobSupport:function(){try{return!!window.Blob&&Boolean(new Blob)}catch(e){return!1}},hasArrayBufferViewSupport:function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}},dataURI2Blob:function(e){var i,a,r,n,s,o,l=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,d=t.hasBlobSupport();if(!((d||l)&&window.atob&&window.ArrayBuffer&&window.Uint8Array))return null;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),a=new ArrayBuffer(i.length),r=new Uint8Array(a),n=0;n<i.length;n+=1)r[n]=i.charCodeAt(n);return s=e.split(",")[0].split(":")[1].split(";")[0],d?new Blob([t.hasArrayBufferViewSupport()?r:a],{type:s}):((o=new l).append(a),o.getBlob(s))},arrayBuffer2String:function(e){if(window.TextDecoder)return new TextDecoder("utf-8").decode(e);var t,i,a,r,n=Array.prototype.slice.apply(new Uint8Array(e)),s="",o=0;for(t=n.length;o<t;)switch((i=n[o++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(i);break;case 12:case 13:a=n[o++],s+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=n[o++],r=n[o++],s+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&r)<<0)}return s},isHtml:function(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes,a=i.length;a--;)if(1===i[a].nodeType)return!0;return!1},isSvg:function(e){return e.match(/^\s*<\?xml/i)&&(e.match(/<!DOCTYPE svg/i)||e.match(/<svg/i))},getMimeType:function(e,t,i){switch(e){case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":return"image/jpeg";case"89504E47":return"image/png";case"47494638":return"image/gif";case"49492a00":return"image/tiff";case"52494646":return"image/webp";case"66747970":return"video/3gp";case"4f676753":return"video/ogg";case"1a45dfa3":return"video/mkv";case"000001ba":case"000001b3":return"video/mpeg";case"3026b275":return"video/wmv";case"25504446":return"application/pdf";case"25215053":return"application/ps";case"504b0304":case"504b0506":case"504b0508":return"application/zip";case"377abcaf":return"application/7z";case"75737461":return"application/tar";case"7801730d":return"application/dmg";default:switch(e.substring(0,6)){case"435753":return"application/x-shockwave-flash";case"494433":return"audio/mp3";case"425a68":return"application/bzip";default:switch(e.substring(0,4)){case"424d":return"image/bmp";case"fffb":return"audio/mp3";case"4d5a":return"application/exe";case"1f9d":case"1fa0":return"application/zip";case"1f8b":return"application/gzip";default:return t&&!t.match(/[^\u0000-\u007f]/)?"application/text-plain":i}}}},addCss:function(e,t){e.removeClass(t).addClass(t)},getElement:function(i,a,r){return t.isEmpty(i)||t.isEmpty(i[a])?r:e(i[a])},uniqId:function(){return Math.round((new Date).getTime())+"_"+Math.round(100*Math.random())},htmlEncode:function(e,t){return void 0===e?t||null:e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},replaceTags:function(t,i){var a=t;return i?(e.each(i,function(e,t){"function"==typeof t&&(t=t()),a=a.split(e).join(t)}),a):a},cleanMemory:function(e){var i=e.is("img")?e.attr("src"):e.find("source").attr("src");t.objUrl.revokeObjectURL(i)},findFileName:function(e){var t=e.lastIndexOf("/");return-1===t&&(t=e.lastIndexOf("\\")),e.split(e.substring(t,t+1)).pop()},checkFullScreen:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},toggleFullScreen:function(e){var i=document,a=i.documentElement;a&&e&&!t.checkFullScreen()?a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.exitFullscreen?i.exitFullscreen():i.msExitFullscreen?i.msExitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.webkitExitFullscreen&&i.webkitExitFullscreen()},moveArray:function(t,i,a,r){var n=e.extend(!0,[],t);if(r&&n.reverse(),a>=n.length)for(var s=a-n.length;1+s--;)n.push(void 0);return n.splice(a,0,n.splice(i,1)[0]),r&&n.reverse(),n},cleanZoomCache:function(e){var t=e.closest(".kv-zoom-cache-theme");t.length||(t=e.closest(".kv-zoom-cache")),t.remove()},closeButton:function(e){return'<button type="button" class="'+(e=e?"close "+e:"close")+'" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n</button>'},getRotation:function(e){switch(e){case 2:return"rotateY(180deg)";case 3:return"rotate(180deg)";case 4:return"rotate(180deg) rotateY(180deg)";case 5:return"rotate(270deg) rotateY(180deg)";case 6:return"rotate(90deg)";case 7:return"rotate(90deg) rotateY(180deg)";case 8:return"rotate(270deg)";default:return""}},setTransform:function(e,t){e&&(e.style.transform=t,e.style.webkitTransform=t,e.style["-moz-transform"]=t,e.style["-ms-transform"]=t,e.style["-o-transform"]=t)},setImageOrientation:function(e,i,a){if(e&&e.length){var r="load.fileinputimageorient";e.off(r).on(r,function(){var r=e.get(0),n=i&&i.length?i.get(0):null,s=r.offsetHeight,o=r.offsetWidth,l=t.getRotation(a);if(e.data("orientation",a),n&&i.data("orientation",a),a<5)return t.setTransform(r,l),void t.setTransform(n,l);var d=Math.atan(o/s),c=Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),h=c?s/Math.cos(Math.PI/2+d)/c:1,p=" scale("+Math.abs(h)+")";t.setTransform(r,l+p),t.setTransform(n,l+p)})}}},(i=function(i,a){this.$element=e(i),this.$parent=this.$element.parent(),this._validate()&&(this.isPreviewable=t.hasFileAPISupport(),this.isIE9=t.isIE(9),this.isIE10=t.isIE(10),(this.isPreviewable||this.isIE9)&&(this._init(a),this._listen()),this.$element.removeClass("file-loading"))}).prototype={constructor:i,_cleanup:function(){this.reader=null,this.formdata={},this.uploadCount=0,this.uploadStatus={},this.uploadLog=[],this.uploadAsyncCount=0,this.loadedImages=[],this.totalImagesCount=0,this.ajaxRequests=[],this.clearStack(),this.fileBatchCompleted=!0,this.isPreviewable||(this.showPreview=!1),this.isError=!1,this.ajaxAborted=!1,this.cancelling=!1},_init:function(i,a){var r,n,s,o,l=this,d=l.$element;l.options=i,e.each(i,function(e,i){switch(e){case"minFileCount":case"maxFileCount":case"minFileSize":case"maxFileSize":case"maxFilePreviewSize":case"resizeImageQuality":case"resizeIfSizeMoreThan":case"progressUploadThreshold":case"initialPreviewCount":case"zoomModalHeight":case"minImageHeight":case"maxImageHeight":case"minImageWidth":case"maxImageWidth":l[e]=t.getNum(i);break;default:l[e]=i}}),l.rtl&&(o=l.previewZoomButtonIcons.prev,l.previewZoomButtonIcons.prev=l.previewZoomButtonIcons.next,l.previewZoomButtonIcons.next=o),a||l._cleanup(),l.$form=d.closest("form"),l._initTemplateDefaults(),l.uploadFileAttr=t.isEmpty(d.attr("name"))?"file_data":d.attr("name"),s=l._getLayoutTemplate("progress"),l.progressTemplate=s.replace("{class}",l.progressClass),l.progressCompleteTemplate=s.replace("{class}",l.progressCompleteClass),l.progressErrorTemplate=s.replace("{class}",l.progressErrorClass),l.isDisabled=d.attr("disabled")||d.attr("readonly"),l.isDisabled&&d.attr("disabled",!0),l.isClickable=l.browseOnZoneClick&&l.showPreview&&(l.dropZoneEnabled||!t.isEmpty(l.defaultPreviewContent)),l.isAjaxUpload=t.hasFileUploadSupport()&&!t.isEmpty(l.uploadUrl),l.dropZoneEnabled=t.hasDragDropSupport()&&l.dropZoneEnabled,l.isAjaxUpload||(l.dropZoneEnabled=l.dropZoneEnabled&&t.canAssignFilesToInput()),l.slug="function"==typeof i.slugCallback?i.slugCallback:l._slugDefault,l.mainTemplate=l.showCaption?l._getLayoutTemplate("main1"):l._getLayoutTemplate("main2"),l.captionTemplate=l._getLayoutTemplate("caption"),l.previewGenericTemplate=l._getPreviewTemplate("generic"),!l.imageCanvas&&l.resizeImage&&(l.maxImageWidth||l.maxImageHeight)&&(l.imageCanvas=document.createElement("canvas"),l.imageCanvasContext=l.imageCanvas.getContext("2d")),t.isEmpty(d.attr("id"))&&d.attr("id",t.uniqId()),l.namespace=".fileinput_"+d.attr("id").replace(/-/g,"_"),void 0===l.$container?l.$container=l._createContainer():l._refreshContainer(),n=l.$container,l.$dropZone=n.find(".file-drop-zone"),l.$progress=n.find(".kv-upload-progress"),l.$btnUpload=n.find(".fileinput-upload"),l.$captionContainer=t.getElement(i,"elCaptionContainer",n.find(".file-caption")),l.$caption=t.getElement(i,"elCaptionText",n.find(".file-caption-name")),t.isEmpty(l.msgPlaceholder)||(r=d.attr("multiple")?l.filePlural:l.fileSingle,l.$caption.attr("placeholder",l.msgPlaceholder.replace("{files}",r))),l.$captionIcon=l.$captionContainer.find(".file-caption-icon"),l.$previewContainer=t.getElement(i,"elPreviewContainer",n.find(".file-preview")),l.$preview=t.getElement(i,"elPreviewImage",n.find(".file-preview-thumbnails")),l.$previewStatus=t.getElement(i,"elPreviewStatus",n.find(".file-preview-status")),l.$errorContainer=t.getElement(i,"elErrorContainer",l.$previewContainer.find(".kv-fileinput-error")),l._validateDisabled(),t.isEmpty(l.msgErrorClass)||t.addCss(l.$errorContainer,l.msgErrorClass),a?l._errorsExist()||l.$errorContainer.hide():(l.$errorContainer.hide(),l.previewInitId="preview-"+t.uniqId(),l._initPreviewCache(),l._initPreview(!0),l._initPreviewActions(),l.$parent.hasClass("file-loading")&&(l.$container.insertBefore(l.$parent),l.$parent.remove())),l._setFileDropZoneTitle(),d.attr("disabled")&&l.disable(),l._initZoom(),l.hideThumbnailContent&&t.addCss(l.$preview,"hide-content")},_initTemplateDefaults:function(){var i,a,r,n,s,o,l,d,c,h=this;i=t.closeButton("fileinput-remove"),a='<div id="'+t.MODAL_ID+'" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="'+t.MODAL_ID+'Label"></div>',r='<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"',n='<video class="kv-preview-data file-preview-video" controls {style}>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</video>\n",s='\x3c!--suppress ALL --\x3e<audio class="kv-preview-data file-preview-audio" controls {style}>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</audio>\n",l='<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf" {style}>\n',o='<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}" {style}>\n<param name="movie" value="{caption}" />\n'+t.OBJECT_PARAMS+" "+t.DEFAULT_PREVIEW+"\n</object>\n",d='<div class="kv-preview-data file-preview-other-frame" {style}>\n'+t.DEFAULT_PREVIEW+"\n</div>\n",c={width:"100%",height:"100%","min-height":"480px"},h._isPdfRendered()&&(l=h.pdfRendererTemplate.replace("{renderer}",h.pdfRendererUrl)),h.defaults={layoutTemplates:{main1:'{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="input-group {class}">\n  {caption}\n<div class="input-group-btn input-group-append">\n      {remove}\n      {cancel}\n      {upload}\n      {browse}\n    </div>\n</div>',main2:'{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',preview:'<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',close:i,fileIcon:'<i class="glyphicon glyphicon-file"></i>',caption:'<div class="file-caption form-control {class}" tabindex="500">\n  <span class="file-caption-icon"></span>\n  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n</div>',modalMain:a,modal:'<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n',progress:'<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>',size:" <samp>({sizeText})</samp>",footer:'<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>',indicator:'<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>',actions:'<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>',actionDelete:'<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n',actionUpload:'<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>',actionDownload:'<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>',actionZoom:'<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>',actionDrag:'<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>',btnDefault:'<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>',btnLink:'<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>',btnBrowse:'<div tabindex="500" class="{css}" {status}>{icon} {label}</div>',zoomCache:'<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>'},previewMarkupTags:{tagBefore1:'<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"><div class="kv-file-content">\n',tagBefore2:'<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}" title="{caption}"><div class="kv-file-content">\n',tagAfter:"</div>{footer}\n</div>\n"},previewContentTemplates:{generic:"{content}\n",html:'<div class="kv-preview-data file-preview-html" title="{caption}" {style}>{data}</div>\n',image:'<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}" {style}>\n',text:'<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly {style}>{data}</textarea>\n',office:'<iframe class="kv-preview-data file-preview-office" src="https://view.officeapps.live.com/op/embed.aspx?src={data}" {style}></iframe>',gdocs:'<iframe class="kv-preview-data file-preview-gdocs" src="https://docs.google.com/gview?url={data}&embedded=true" {style}></iframe>',video:n,audio:s,flash:'<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash" {style}>\n',object:o,pdf:l,other:d},allowedPreviewTypes:["image","html","text","video","audio","flash","pdf","object"],previewTemplates:{},previewSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"213px",height:"160px"},text:{width:"213px",height:"160px"},office:{width:"213px",height:"160px"},gdocs:{width:"213px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"100%",height:"30px"},flash:{width:"213px",height:"160px"},object:{width:"213px",height:"160px"},pdf:{width:"100%",height:"160px"},other:{width:"213px",height:"160px"}},previewSettingsSmall:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"100%",height:"160px"},text:{width:"100%",height:"160px"},office:{width:"100%",height:"160px"},gdocs:{width:"100%",height:"160px"},video:{width:"100%",height:"auto"},audio:{width:"100%",height:"30px"},flash:{width:"100%",height:"auto"},object:{width:"100%",height:"auto"},pdf:{width:"100%",height:"160px"},other:{width:"100%",height:"160px"}},previewZoomSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:c,text:c,office:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},gdocs:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},video:{width:"auto",height:"100%","max-width":"100%"},audio:{width:"100%",height:"30px"},flash:{width:"auto",height:"480px"},object:{width:"auto",height:"100%","max-width":"100%","min-height":"480px"},pdf:c,other:{width:"auto",height:"100%","min-height":"480px"}},fileTypeSettings:{image:function(e,i){return t.compare(e,"image.*")&&!t.compare(e,/(tiff?|wmf)$/i)||t.compare(i,/\.(gif|png|jpe?g)$/i)},html:function(e,i){return t.compare(e,"text/html")||t.compare(i,/\.(htm|html)$/i)},office:function(e,i){return t.compare(e,/(word|excel|powerpoint|office)$/i)||t.compare(i,/\.(docx?|xlsx?|pptx?|pps|potx?)$/i)},gdocs:function(e,i){return t.compare(e,/(word|excel|powerpoint|office|iwork-pages|tiff?)$/i)||t.compare(i,/\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i)},text:function(e,i){return t.compare(e,"text.*")||t.compare(i,/\.(xml|javascript)$/i)||t.compare(i,/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)},video:function(e,i){return t.compare(e,"video.*")&&(t.compare(e,/(ogg|mp4|mp?g|mov|webm|3gp)$/i)||t.compare(i,/\.(og?|mp4|webm|mp?g|mov|3gp)$/i))},audio:function(e,i){return t.compare(e,"audio.*")&&(t.compare(i,/(ogg|mp3|mp?g|wav)$/i)||t.compare(i,/\.(og?|mp3|mp?g|wav)$/i))},flash:function(e,i){return t.compare(e,"application/x-shockwave-flash",!0)||t.compare(i,/\.(swf)$/i)},pdf:function(e,i){return t.compare(e,"application/pdf",!0)||t.compare(i,/\.(pdf)$/i)},object:function(){return!0},other:function(){return!0}},fileActionSettings:{showRemove:!0,showUpload:!0,showDownload:!0,showZoom:!0,showDrag:!0,removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",removeErrorClass:"btn btn-sm btn-kv btn-danger",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",uploadTitle:"Upload file",uploadRetryIcon:'<i class="glyphicon glyphicon-repeat"></i>',uploadRetryTitle:"Retry upload",downloadIcon:'<i class="glyphicon glyphicon-download"></i>',downloadClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",downloadTitle:"Download file",zoomIcon:'<i class="glyphicon glyphicon-zoom-in"></i>',zoomClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",zoomTitle:"View Details",dragIcon:'<i class="glyphicon glyphicon-move"></i>',dragClass:"text-info",dragTitle:"Move / Rearrange",dragSettings:{},indicatorNew:'<i class="glyphicon glyphicon-plus-sign text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hourglass text-muted"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ..."}},e.each(h.defaults,function(t,i){"allowedPreviewTypes"!==t?h[t]=e.extend(!0,{},i,h[t]):void 0===h.allowedPreviewTypes&&(h.allowedPreviewTypes=i)}),h._initPreviewTemplates()},_initPreviewTemplates:function(){var i,a=this,r=a.previewMarkupTags,n=r.tagAfter;e.each(a.previewContentTemplates,function(e,s){t.isEmpty(a.previewTemplates[e])&&(i=r.tagBefore2,"generic"!==e&&"image"!==e&&"html"!==e&&"text"!==e||(i=r.tagBefore1),a._isPdfRendered()&&"pdf"===e&&(i=i.replace("kv-file-content","kv-file-content kv-pdf-rendered")),a.previewTemplates[e]=i+s+n)})},_initPreviewCache:function(){var i=this;i.previewCache={data:{},init:function(){var e=i.initialPreview;e.length>0&&!t.isArray(e)&&(e=e.split(i.initialPreviewDelimiter)),i.previewCache.data={content:e,config:i.initialPreviewConfig,tags:i.initialPreviewThumbTags}},count:function(){return i.previewCache.data&&i.previewCache.data.content?i.previewCache.data.content.length:0},get:function(a,r){var n,s,o,l,d,c,h,p="init_"+a,u=i.previewCache.data,f=u.config[a],m=u.content[a],g=i.previewInitId+"-"+p,v=t.ifSet("previewAsData",f,i.initialPreviewAsData),w=function(e,a,r,n,s,o,l,d,c){return d=" file-preview-initial "+t.SORT_CSS+(d?" "+d:""),i._generatePreviewTemplate(e,a,r,n,s,!1,null,d,o,l,c)};return m?(r=void 0===r||r,o=t.ifSet("type",f,i.initialPreviewFileType||"generic"),d=t.ifSet("filename",f,t.ifSet("caption",f)),c=t.ifSet("filetype",f,o),l=i.previewCache.footer(a,r,f&&f.size||null),h=t.ifSet("frameClass",f),n=v?w(o,m,d,c,g,l,p,h):w("generic",m,d,c,g,l,p,h,o).setTokens({content:u.content[a]}),u.tags.length&&u.tags[a]&&(n=t.replaceTags(n,u.tags[a])),t.isEmpty(f)||t.isEmpty(f.frameAttr)||((s=e(document.createElement("div")).html(n)).find(".file-preview-initial").attr(f.frameAttr),n=s.html(),s.remove()),n):""},add:function(e,a,r,n){var s,o=i.previewCache.data;return t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),n?(s=o.content.push(e)-1,o.config[s]=a,o.tags[s]=r):(s=e.length-1,o.content=e,o.config=a,o.tags=r),i.previewCache.data=o,s},set:function(e,a,r,n){var s,o=i.previewCache.data;if(e&&e.length&&(t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),e.filter(function(e){return null!==e}).length)){if(void 0===o.content&&(o.content=[]),void 0===o.config&&(o.config=[]),void 0===o.tags&&(o.tags=[]),n){for(s=0;s<e.length;s++)e[s]&&o.content.push(e[s]);for(s=0;s<a.length;s++)a[s]&&o.config.push(a[s]);for(s=0;s<r.length;s++)r[s]&&o.tags.push(r[s])}else o.content=e,o.config=a,o.tags=r;i.previewCache.data=o}},unset:function(e){var a=i.previewCache.count(),r=i.reversePreviewOrder;if(a){if(1===a)return i.previewCache.data.content=[],i.previewCache.data.config=[],i.previewCache.data.tags=[],i.initialPreview=[],i.initialPreviewConfig=[],void(i.initialPreviewThumbTags=[]);i.previewCache.data.content=t.spliceArray(i.previewCache.data.content,e,r),i.previewCache.data.config=t.spliceArray(i.previewCache.data.config,e,r),i.previewCache.data.tags=t.spliceArray(i.previewCache.data.tags,e,r)}},out:function(){var e,t,a="",r=i.previewCache.count();if(0===r)return{content:"",caption:""};for(e=0;e<r;e++)t=i.previewCache.get(e),a=i.reversePreviewOrder?t+a:a+t;return{content:a,caption:i._getMsgSelected(r)}},footer:function(e,a,r){var n=i.previewCache.data||{};if(t.isEmpty(n.content))return"";(t.isEmpty(n.config)||t.isEmpty(n.config[e]))&&(n.config[e]={}),a=void 0===a||a;var s,o=n.config[e],l=t.ifSet("caption",o),d=t.ifSet("width",o,"auto"),c=t.ifSet("url",o,!1),h=t.ifSet("key",o,null),p=i.fileActionSettings,u=i.initialPreviewShowDelete||!1,f=o.downloadUrl||i.initialPreviewDownloadUrl||"",m=o.filename||o.caption||"",g=!!f,v=t.ifSet("showRemove",o,t.ifSet("showRemove",p,u)),w=t.ifSet("showDownload",o,t.ifSet("showDownload",p,g)),_=t.ifSet("showZoom",o,t.ifSet("showZoom",p,!0)),b=t.ifSet("showDrag",o,t.ifSet("showDrag",p,!0)),C=!1===c&&a;return w=w&&!1!==o.downloadUrl&&!!f,s=i._renderFileActions(!1,w,v,_,b,C,c,h,!0,f,m),i._getLayoutTemplate("footer").setTokens({progress:i._renderThumbProgress(),actions:s,caption:l,size:i._getSize(r),width:d,indicator:""})}},i.previewCache.init()},_isPdfRendered:function(){var e=this.usePdfRenderer;return("function"==typeof e?e():!!e)&&this.pdfRendererUrl},_handler:function(e,t,i){var a=this.namespace,r=t.split(" ").join(a+" ")+a;e&&e.length&&e.off(r).on(r,i)},_log:function(e){var t=this.$element.attr("id");t&&(e='"'+t+'": '+e),e="bootstrap-fileinput: "+e,void 0!==window.console.log?window.console.log(e):window.alert(e)},_validate:function(){var e="file"===this.$element.attr("type");return e||this._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.'),e},_errorsExist:function(){var t;return!!this.$errorContainer.find("li").length||((t=e(document.createElement("div")).html(this.$errorContainer.html())).find(".kv-error-close").remove(),t.find("ul").remove(),!!e.trim(t.text()).length)},_errorHandler:function(e,t){var i=this,a=e.target.error,r=function(e){i._showError(e.replace("{name}",t))};a.code===a.NOT_FOUND_ERR?r(i.msgFileNotFound):a.code===a.SECURITY_ERR?r(i.msgFileSecured):a.code===a.NOT_READABLE_ERR?r(i.msgFileNotReadable):a.code===a.ABORT_ERR?r(i.msgFilePreviewAborted):r(i.msgFilePreviewError)},_addError:function(e){var t=this,i=t.$errorContainer;e&&i.length&&(i.html(t.errorCloseButton+e),t._handler(i.find(".kv-error-close"),"click",function(){setTimeout(function(){t.showPreview&&!t.getFrames().length&&t.clear(),i.fadeOut("slow")},10)}))},_setValidationError:function(e){e=(e?e+" ":"")+"has-error",this.$container.removeClass(e).addClass("has-error"),t.addCss(this.$captionContainer,"is-invalid")},_resetErrors:function(e){var t=this.$errorContainer;this.isError=!1,this.$container.removeClass("has-error"),this.$captionContainer.removeClass("is-invalid"),t.html(""),e?t.fadeOut("slow"):t.hide()},_showFolderError:function(e){var t,i=this.$errorContainer;e&&(this.isAjaxUpload||this._clearFileInput(),t=this.msgFoldersNotAllowed.replace("{n}",e),this._addError(t),this._setValidationError(),i.fadeIn(800),this._raise("filefoldererror",[e,t]))},_showUploadError:function(e,t,i){var a=this.$errorContainer,r=i||"fileuploaderror",n=t&&t.id?'<li data-file-id="'+t.id+'">'+e+"</li>":"<li>"+e+"</li>";return 0===a.find("ul").length?this._addError("<ul>"+n+"</ul>"):a.find("ul").append(n),a.fadeIn(800),this._raise(r,[t,e]),this._setValidationError("file-input-new"),!0},_showError:function(e,t,i){var a=this.$errorContainer,r=i||"fileerror";return(t=t||{}).reader=this.reader,this._addError(e),a.fadeIn(800),this._raise(r,[t,e]),this.isAjaxUpload||this._clearFileInput(),this._setValidationError("file-input-new"),this.$btnUpload.attr("disabled",!0),!0},_noFilesError:function(e){var t=this.minFileCount>1?this.filePlural:this.fileSingle,i=this.msgFilesTooLess.replace("{n}",this.minFileCount).replace("{files}",t),a=this.$errorContainer;this._addError(i),this.isError=!0,this._updateFileDetails(0),a.fadeIn(800),this._raise("fileerror",[e,i]),this._clearFileInput(),this._setValidationError()},_parseError:function(t,i,a,r){var n,s=e.trim(a+""),o=void 0!==i.responseJSON&&void 0!==i.responseJSON.error?i.responseJSON.error:i.responseText;return this.cancelling&&this.msgUploadAborted&&(s=this.msgUploadAborted),this.showAjaxErrorDetails&&o&&(n=(o=e.trim(o.replace(/\n\s*\n/g,"\n"))).length?"<pre>"+o+"</pre>":"",s+=s?n:o),s||(s=this.msgAjaxError.replace("{operation}",t)),this.cancelling=!1,r?"<b>"+r+": </b>"+s:s},_parseFileType:function(e,i){var a,r,n,s=this.allowedPreviewTypes||[];if("application/text-plain"===e)return"text";for(n=0;n<s.length;n++)if(r=s[n],a=(0,this.fileTypeSettings[r])(e,i)?r:"",!t.isEmpty(a))return a;return"other"},_getPreviewIcon:function(t){var i,a=this,r=null;return t&&t.indexOf(".")>-1&&(i=t.split(".").pop(),a.previewFileIconSettings&&(r=a.previewFileIconSettings[i]||a.previewFileIconSettings[i.toLowerCase()]||null),a.previewFileExtSettings&&e.each(a.previewFileExtSettings,function(e,t){a.previewFileIconSettings[e]&&t(i)&&(r=a.previewFileIconSettings[e])})),r},_parseFilePreviewIcon:function(e,t){var i=this._getPreviewIcon(t)||this.previewFileIcon,a=e;return a.indexOf("{previewFileIcon}")>-1&&(a=a.setTokens({previewFileIconClass:this.previewFileIconClass,previewFileIcon:i})),a},_raise:function(t,i){var a=e.Event(t);if(void 0!==i?this.$element.trigger(a,i):this.$element.trigger(a),a.isDefaultPrevented()||!1===a.result)return!1;switch(t){case"filebatchuploadcomplete":case"filebatchuploadsuccess":case"fileuploaded":case"fileclear":case"filecleared":case"filereset":case"fileerror":case"filefoldererror":case"fileuploaderror":case"filebatchuploaderror":case"filedeleteerror":case"filecustomerror":case"filesuccessremove":break;default:this.ajaxAborted||(this.ajaxAborted=a.result)}return!0},_listenFullScreen:function(e){var t,i,a=this.$modal;a&&a.length&&(t=a&&a.find(".btn-fullscreen"),i=a&&a.find(".btn-borderless"),t.length&&i.length&&(t.removeClass("active").attr("aria-pressed","false"),i.removeClass("active").attr("aria-pressed","false"),e?t.addClass("active").attr("aria-pressed","true"):i.addClass("active").attr("aria-pressed","true"),a.hasClass("file-zoom-fullscreen")?this._maximizeZoomDialog():e?this._maximizeZoomDialog():i.removeClass("active").attr("aria-pressed","false")))},_listen:function(){var i=this,a=i.$element,r=i.$form,n=i.$container;i._handler(a,"click",function(e){a.hasClass("file-no-browse")&&(a.data("zoneClicked")?a.data("zoneClicked",!1):e.preventDefault())}),i._handler(a,"change",e.proxy(i._change,i)),i.showBrowse&&i._handler(i.$btnFile,"click",e.proxy(i._browse,i)),i._handler(n.find(".fileinput-remove:not([disabled])"),"click",e.proxy(i.clear,i)),i._handler(n.find(".fileinput-cancel"),"click",e.proxy(i.cancel,i)),i._initDragDrop(),i._handler(r,"reset",e.proxy(i.clear,i)),i.isAjaxUpload||i._handler(r,"submit",e.proxy(i._submitForm,i)),i._handler(i.$container.find(".fileinput-upload"),"click",e.proxy(i._uploadClick,i)),i._handler(e(window),"resize",function(){i._listenFullScreen(screen.width===window.innerWidth&&screen.height===window.innerHeight)}),i._handler(e(document),"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",function(){i._listenFullScreen(t.checkFullScreen())}),i._autoFitContent(),i._initClickable(),i._refreshPreview()},_autoFitContent:function(){var t,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=this,r=i<400?a.previewSettingsSmall||a.defaults.previewSettingsSmall:a.previewSettings||a.defaults.previewSettings;e.each(r,function(e,i){t=".file-preview-frame .file-preview-"+e,a.$preview.find(t+".kv-preview-data,"+t+" .kv-preview-data").css(i)})},_scanDroppedItems:function(e,t,i){i=i||"";var a,r,n,s=this,o=function(e){s._log("Error scanning dropped files!"),s._log(e)};e.isFile?e.file(function(e){t.push(e)},o):e.isDirectory&&(r=e.createReader(),(n=function(){r.readEntries(function(r){if(r&&r.length>0){for(a=0;a<r.length;a++)s._scanDroppedItems(r[a],t,i+e.name+"/");n()}return null},o)})())},_initDragDrop:function(){var t=this.$dropZone;this.dropZoneEnabled&&this.showPreview&&(this._handler(t,"dragenter dragover",e.proxy(this._zoneDragEnter,this)),this._handler(t,"dragleave",e.proxy(this._zoneDragLeave,this)),this._handler(t,"drop",e.proxy(this._zoneDrop,this)),this._handler(e(document),"dragenter dragover drop",this._zoneDragDropInit))},_zoneDragDropInit:function(e){e.stopPropagation(),e.preventDefault()},_zoneDragEnter:function(i){var a=e.inArray("Files",i.originalEvent.dataTransfer.types)>-1;if(this._zoneDragDropInit(i),this.isDisabled||!a)return i.originalEvent.dataTransfer.effectAllowed="none",void(i.originalEvent.dataTransfer.dropEffect="none");t.addCss(this.$dropZone,"file-highlighted")},_zoneDragLeave:function(e){this._zoneDragDropInit(e),this.isDisabled||this.$dropZone.removeClass("file-highlighted")},_zoneDrop:function(e){var i,a=this,r=a.$element,n=e.originalEvent.dataTransfer,s=n.files,o=n.items,l=t.getDragDropFolders(o),d=function(){a.isAjaxUpload?a._change(e,s):(a.changeTriggered=!0,r.get(0).files=s,setTimeout(function(){a.changeTriggered=!1,r.trigger("change"+a.namespace)},10)),a.$dropZone.removeClass("file-highlighted")};if(e.preventDefault(),!a.isDisabled&&!t.isEmpty(s))if(l>0){if(!a.isAjaxUpload)return void a._showFolderError(l);for(s=[],i=0;i<o.length;i++){var c=o[i].webkitGetAsEntry();c&&a._scanDroppedItems(c,s)}setTimeout(function(){d()},500)}else d()},_uploadClick:function(e){var i,a=this.$container.find(".fileinput-upload"),r=!a.hasClass("disabled")&&t.isEmpty(a.attr("disabled"));e&&e.isDefaultPrevented()||(this.isAjaxUpload?(e.preventDefault(),r&&this.upload()):r&&"submit"!==a.attr("type")&&((i=a.closest("form")).length&&i.trigger("submit"),e.preventDefault()))},_submitForm:function(){return this._isFileSelectionValid()&&!this._abort({})},_clearPreview:function(){var i=this.$preview;(this.showUploadedThumbs?this.getFrames(":not(.file-preview-success)"):this.getFrames()).each(function(){var a=e(this);a.remove(),t.cleanZoomCache(i.find("#zoom-"+a.attr("id")))}),this.getFrames().length&&this.showPreview||this._resetUpload(),this._validateDefaultPreview()},_initSortable:function(){var i,a=this,r=a.$preview,n="."+t.SORT_CSS,s=a.reversePreviewOrder;window.KvSortable&&0!==r.find(n).length&&(i={handle:".drag-handle-init",dataIdAttr:"data-preview-id",scroll:!1,draggable:n,onSort:function(i){var r=i.oldIndex,n=i.newIndex,o=0;a.initialPreview=t.moveArray(a.initialPreview,r,n,s),a.initialPreviewConfig=t.moveArray(a.initialPreviewConfig,r,n,s),a.previewCache.init(),a.getFrames(".file-preview-initial").each(function(){e(this).attr("data-fileindex","init_"+o),o++}),a._raise("filesorted",{previewId:e(i.item).attr("id"),oldIndex:r,newIndex:n,stack:a.initialPreviewConfig})}},r.data("kvsortable")&&r.kvsortable("destroy"),e.extend(!0,i,a.fileActionSettings.dragSettings),r.kvsortable(i))},_setPreviewContent:function(e){this.$preview.html(e),this._autoFitContent()},_initPreview:function(e){var i,a=this.initialCaption||"";if(!this.previewCache.count())return this._clearPreview(),void(e?this._setCaption(a):this._initCaption());i=this.previewCache.out(),a=e&&this.initialCaption?this.initialCaption:i.caption,this._setPreviewContent(i.content),this._setInitThumbAttr(),this._setCaption(a),this._initSortable(),t.isEmpty(i.content)||this.$container.removeClass("file-input-new")},_getZoomButton:function(e){var t=this.previewZoomButtonIcons[e],i=this.previewZoomButtonClasses[e],a=' title="'+(this.previewZoomButtonTitles[e]||"")+'" '+("close"===e?' data-dismiss="modal" aria-hidden="true"':"");return"fullscreen"!==e&&"borderless"!==e&&"toggleheader"!==e||(a+=' data-toggle="button" aria-pressed="false" autocomplete="off"'),'<button type="button" class="'+i+" btn-"+e+'"'+a+">"+t+"</button>"},_getModalContent:function(){return this._getLayoutTemplate("modal").setTokens({rtl:this.rtl?" kv-rtl":"",zoomFrameClass:this.frameClass,heading:this.msgZoomModalHeading,prev:this._getZoomButton("prev"),next:this._getZoomButton("next"),toggleheader:this._getZoomButton("toggleheader"),fullscreen:this._getZoomButton("fullscreen"),borderless:this._getZoomButton("borderless"),close:this._getZoomButton("close")})},_listenModalEvent:function(e){var i=this,a=i.$modal;a.on(e+".bs.modal",function(r){var n=a.find(".btn-fullscreen"),s=a.find(".btn-borderless");i._raise("filezoom"+e,function(e){return{sourceEvent:e,previewId:a.data("previewId"),modal:a}}(r)),"shown"===e&&(s.removeClass("active").attr("aria-pressed","false"),n.removeClass("active").attr("aria-pressed","false"),a.hasClass("file-zoom-fullscreen")&&(i._maximizeZoomDialog(),t.checkFullScreen()?n.addClass("active").attr("aria-pressed","true"):s.addClass("active").attr("aria-pressed","true")))})},_initZoom:function(){var i,a=this,r=a._getLayoutTemplate("modalMain"),n="#"+t.MODAL_ID;a.showPreview&&(a.$modal=e(n),a.$modal&&a.$modal.length||(i=e(document.createElement("div")).html(r).insertAfter(a.$container),a.$modal=e(n).insertBefore(i),i.remove()),t.initModal(a.$modal),a.$modal.html(a._getModalContent()),e.each(t.MODAL_EVENTS,function(e,t){a._listenModalEvent(t)}))},_initZoomButtons:function(){var t,i,a=this.$modal.data("previewId")||"",r=this.getFrames().toArray(),n=r.length,s=this.$modal.find(".btn-prev"),o=this.$modal.find(".btn-next");if(r.length<2)return s.hide(),void o.hide();s.show(),o.show(),n&&(t=e(r[0]),i=e(r[n-1]),s.removeAttr("disabled"),o.removeAttr("disabled"),t.length&&t.attr("id")===a&&s.attr("disabled",!0),i.length&&i.attr("id")===a&&o.attr("disabled",!0))},_maximizeZoomDialog:function(){var t=this.$modal,i=t.find(".modal-header:visible"),a=t.find(".modal-footer:visible"),r=t.find(".modal-body"),n=e(window).height();t.addClass("file-zoom-fullscreen"),i&&i.length&&(n-=i.outerHeight(!0)),a&&a.length&&(n-=a.outerHeight(!0)),r&&r.length&&(n-=r.outerHeight(!0)-r.height()),t.find(".kv-zoom-body").height(n)},_resizeZoomDialog:function(e){var i=this.$modal,a=i.find(".btn-fullscreen"),r=i.find(".btn-borderless");if(i.hasClass("file-zoom-fullscreen"))t.toggleFullScreen(!1),e?a.hasClass("active")||(i.removeClass("file-zoom-fullscreen"),this._resizeZoomDialog(!0),r.hasClass("active")&&r.removeClass("active").attr("aria-pressed","false")):a.hasClass("active")?a.removeClass("active").attr("aria-pressed","false"):(i.removeClass("file-zoom-fullscreen"),this.$modal.find(".kv-zoom-body").css("height",this.zoomModalHeight));else{if(!e)return void this._maximizeZoomDialog();t.toggleFullScreen(!0)}i.focus()},_setZoomContent:function(i,a){var r,n,s,o,l,d,c,h,p=this,u=i.attr("id"),f=p.$modal,m=f.find(".btn-prev"),g=f.find(".btn-next"),v=f.find(".btn-fullscreen"),w=f.find(".btn-borderless"),_=f.find(".btn-toggleheader"),b=p.$preview.find("#zoom-"+u);n=b.attr("data-template")||"generic",s=(r=b.find(".kv-file-content")).length?r.html():"",o=(i.data("caption")||"")+" "+(i.data("size")||""),f.find(".kv-zoom-title").attr("title",e("<div/>").html(o).text()).html(o),l=f.find(".kv-zoom-body"),f.removeClass("kv-single-content"),a?(h=l.addClass("file-thumb-loading").clone().insertAfter(l),l.html(s).hide(),h.fadeOut("fast",function(){l.fadeIn("fast",function(){l.removeClass("file-thumb-loading")}),h.remove()})):l.html(s),(c=p.previewZoomSettings[n])&&(d=l.find(".kv-preview-data"),t.addCss(d,"file-zoom-detail"),e.each(c,function(e,t){d.css(e,t),(d.attr("width")&&"width"===e||d.attr("height")&&"height"===e)&&d.removeAttr(e)})),f.data("previewId",u),p._handler(m,"click",function(){p._zoomSlideShow("prev",u)}),p._handler(g,"click",function(){p._zoomSlideShow("next",u)}),p._handler(v,"click",function(){p._resizeZoomDialog(!0)}),p._handler(w,"click",function(){p._resizeZoomDialog(!1)}),p._handler(_,"click",function(){var e,t=f.find(".modal-header"),i=f.find(".modal-body .floating-buttons"),a=t.find(".kv-zoom-actions"),r=function(e){var i=p.$modal.find(".kv-zoom-body"),a=p.zoomModalHeight;f.hasClass("file-zoom-fullscreen")&&(a=i.outerHeight(!0),e||(a-=t.outerHeight(!0))),i.css("height",e?a+e:a)};t.is(":visible")?(e=t.outerHeight(!0),t.slideUp("slow",function(){a.find(".btn").appendTo(i),r(e)})):(i.find(".btn").appendTo(a),t.slideDown("slow",function(){r()})),f.focus()}),p._handler(f,"keydown",function(e){var t=e.which||e.keyCode;37!==t||m.attr("disabled")||p._zoomSlideShow("prev",u),39!==t||g.attr("disabled")||p._zoomSlideShow("next",u)})},_zoomPreview:function(e){var i,a=this.$modal;if(!e.length)throw"Cannot zoom to detailed preview!";t.initModal(a),a.html(this._getModalContent()),i=e.closest(t.FRAMES),this._setZoomContent(i),a.modal("show"),this._initZoomButtons()},_zoomSlideShow:function(t,i){var a,r,n,s=this.$modal.find(".kv-zoom-actions .btn-"+t),o=this.getFrames().toArray(),l=o.length;if(!s.attr("disabled")){for(r=0;r<l;r++)if(e(o[r]).attr("id")===i){n="prev"===t?r-1:r+1;break}n<0||n>=l||!o[n]||((a=e(o[n])).length&&this._setZoomContent(a,!0),this._initZoomButtons(),this._raise("filezoom"+t,{previewId:i,modal:this.$modal}))}},_initZoomButton:function(){var t=this;t.$preview.find(".kv-file-zoom").each(function(){var i=e(this);t._handler(i,"click",function(){t._zoomPreview(i)})})},_inputFileCount:function(){return this.$element.get(0).files.length},_refreshPreview:function(){var e;this._inputFileCount()&&this.showPreview&&this.isPreviewable&&(this.isAjaxUpload?(e=this.getFileStack(),this.filestack=[],e.length?this._clearFileInput():e=this.$element.get(0).files):e=this.$element.get(0).files,e&&e.length&&(this.readFiles(e),this._setFileDropZoneTitle()))},_clearObjects:function(t){t.find("video audio").each(function(){this.pause(),e(this).remove()}),t.find("img object div").each(function(){e(this).remove()})},_clearFileInput:function(){var t,i,a,r=this.$element;this._inputFileCount()&&(t=r.closest("form"),i=e(document.createElement("form")),a=e(document.createElement("div")),r.before(a),t.length?t.after(i):a.after(i),i.append(r).trigger("reset"),a.before(r).remove(),i.remove())},_resetUpload:function(){this.uploadCache={content:[],config:[],tags:[],append:!0},this.uploadCount=0,this.uploadStatus={},this.uploadLog=[],this.uploadAsyncCount=0,this.loadedImages=[],this.totalImagesCount=0,this.$btnUpload.removeAttr("disabled"),this._setProgress(0),this.$progress.hide(),this._resetErrors(!1),this.ajaxAborted=!1,this.ajaxRequests=[],this._resetCanvas(),this.cacheInitialPreview={},this.overwriteInitial&&(this.initialPreview=[],this.initialPreviewConfig=[],this.initialPreviewThumbTags=[],this.previewCache.data={content:[],config:[],tags:[]})},_resetCanvas:function(){this.canvas&&this.imageCanvasContext&&this.imageCanvasContext.clearRect(0,0,this.canvas.width,this.canvas.height)},_hasInitialPreview:function(){return!this.overwriteInitial&&this.previewCache.count()},_resetPreview:function(){var e,t;this.previewCache.count()?(e=this.previewCache.out(),this._setPreviewContent(e.content),this._setInitThumbAttr(),t=this.initialCaption?this.initialCaption:e.caption,this._setCaption(t)):(this._clearPreview(),this._initCaption()),this.showPreview&&(this._initZoom(),this._initSortable())},_clearDefaultPreview:function(){this.$preview.find(".file-default-preview").remove()},_validateDefaultPreview:function(){this.showPreview&&!t.isEmpty(this.defaultPreviewContent)&&(this._setPreviewContent('<div class="file-default-preview">'+this.defaultPreviewContent+"</div>"),this.$container.removeClass("file-input-new"),this._initClickable())},_resetPreviewThumbs:function(e){var t;if(e)return this._clearPreview(),void this.clearStack();this._hasInitialPreview()?(t=this.previewCache.out(),this._setPreviewContent(t.content),this._setInitThumbAttr(),this._setCaption(t.caption),this._initPreviewActions()):this._clearPreview()},_getLayoutTemplate:function(e){var i=this.layoutTemplates[e];return t.isEmpty(this.customLayoutTags)?i:t.replaceTags(i,this.customLayoutTags)},_getPreviewTemplate:function(e){var i=this.previewTemplates[e];return t.isEmpty(this.customPreviewTags)?i:t.replaceTags(i,this.customPreviewTags)},_getOutData:function(e,t,i){return e=e||{},t=t||{},i=i||this.filestack.slice(0)||{},{form:this.formdata,files:i,filenames:this.filenames,filescount:this.getFilesCount(),extra:this._getExtraData(),response:t,reader:this.reader,jqXHR:e}},_getMsgSelected:function(e){var t=1===e?this.fileSingle:this.filePlural;return e>0?this.msgSelected.replace("{n}",e).replace("{files}",t):this.msgNoFilesSelected},_getFrame:function(t){var i=e("#"+t);return i.length?i:(this._log('Invalid thumb frame with id: "'+t+'".'),null)},_getThumbs:function(e){return e=e||"",this.getFrames(":not(.file-preview-initial)"+e)},_getExtraData:function(e,t){var i=this.uploadExtraData;return"function"==typeof this.uploadExtraData&&(i=this.uploadExtraData(e,t)),i},_initXhr:function(e,t,i){var a=this;return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,n=e.total,s=e.loaded||e.position;e.lengthComputable&&(r=Math.floor(s/n*100)),t?a._setAsyncUploadStatus(t,r,i):a._setProgress(r)},!1),e},_initAjaxSettings:function(){this._ajaxSettings=e.extend(!0,{},this.ajaxSettings),this._ajaxDeleteSettings=e.extend(!0,{},this.ajaxDeleteSettings)},_mergeAjaxCallback:function(e,t,i){var a,r=this._ajaxSettings,n=this.mergeAjaxCallbacks;"delete"===i&&(r=this._ajaxDeleteSettings,n=this.mergeAjaxDeleteCallbacks),a=r[e],r[e]=n&&"function"==typeof a?"before"===n?function(){a.apply(this,arguments),t.apply(this,arguments)}:function(){t.apply(this,arguments),a.apply(this,arguments)}:t},_ajaxSubmit:function(t,i,a,r,n,s){var o,l=this;l._raise("filepreajax",[n,s])&&(l._uploadExtra(n,s),l._initAjaxSettings(),l._mergeAjaxCallback("beforeSend",t),l._mergeAjaxCallback("success",i),l._mergeAjaxCallback("complete",a),l._mergeAjaxCallback("error",r),o=e.extend(!0,{},{xhr:function(){var t=e.ajaxSettings.xhr();return l._initXhr(t,n,l.getFileStack().length)},url:s&&l.uploadUrlThumb?l.uploadUrlThumb:l.uploadUrl,type:"POST",dataType:"json",data:l.formdata,cache:!1,processData:!1,contentType:!1},l._ajaxSettings),l.ajaxRequests.push(e.ajax(o)))},_mergeArray:function(e,i){var a=t.cleanArray(this[e]),r=t.cleanArray(i);this[e]=a.concat(r)},_initUploadSuccess:function(i,a,r){var n,s,o,l,d,c,h,p,u,f=this;f.showPreview&&"object"==typeof i&&!e.isEmptyObject(i)&&void 0!==i.initialPreview&&i.initialPreview.length>0&&(f.hasInitData=!0,c=i.initialPreview||[],h=i.initialPreviewConfig||[],p=i.initialPreviewThumbTags||[],n=void 0===i.append||i.append,c.length>0&&!t.isArray(c)&&(c=c.split(f.initialPreviewDelimiter)),f._mergeArray("initialPreview",c),f._mergeArray("initialPreviewConfig",h),f._mergeArray("initialPreviewThumbTags",p),void 0!==a?r?(u=a.attr("data-fileindex"),f.uploadCache.content[u]=c[0],f.uploadCache.config[u]=h[0]||[],f.uploadCache.tags[u]=p[0]||[],f.uploadCache.append=n):(o=f.previewCache.add(c,h[0],p[0],n),s=f.previewCache.get(o,!1),(d=(l=e(document.createElement("div")).html(s).hide().insertAfter(a)).find(".kv-zoom-cache"))&&d.length&&d.insertAfter(a),a.fadeOut("slow",function(){var e=l.find(".file-preview-frame");e&&e.length&&e.insertBefore(a).fadeIn("slow").css("display:inline-block"),f._initPreviewActions(),f._clearFileInput(),t.cleanZoomCache(f.$preview.find("#zoom-"+a.attr("id"))),a.remove(),l.remove(),f._initSortable()})):(f.previewCache.set(c,h,p,n),f._initPreview(),f._initPreviewActions()))},_initSuccessThumbs:function(){var i=this;i.showPreview&&i._getThumbs(t.FRAMES+".file-preview-success").each(function(){var a=e(this),r=i.$preview,n=a.find(".kv-file-remove");n.removeAttr("disabled"),i._handler(n,"click",function(){var e=a.attr("id"),n=i._raise("filesuccessremove",[e,a.attr("data-fileindex")]);t.cleanMemory(a),!1!==n&&a.fadeOut("slow",function(){t.cleanZoomCache(r.find("#zoom-"+e)),a.remove(),i.getFrames().length||i.reset()})})})},_checkAsyncComplete:function(){var t,i;for(i=0;i<this.filestack.length;i++)if(this.filestack[i]&&(t=this.previewInitId+"-"+i,-1===e.inArray(t,this.uploadLog)))return!1;return this.uploadAsyncCount===this.uploadLog.length},_uploadExtra:function(t,i){var a=this,r=a._getExtraData(t,i);0!==r.length&&e.each(r,function(e,t){a.formdata.append(e,t)})},_uploadSingle:function(i,a){var r,n,s,o,l,d,c,h,p,u,f,m=this,g=m.getFileStack().length,v=new FormData,w=m.previewInitId+"-"+i,_=m.filestack.length>0||!e.isEmptyObject(m.uploadExtraData),b=e("#"+w).find(".file-thumb-progress"),C={id:w,index:i};m.formdata=v,m.showPreview&&(n=e("#"+w+":not(.file-preview-initial)"),o=n.find(".kv-file-upload"),l=n.find(".kv-file-remove"),b.show()),0===g||!_||o&&o.hasClass("disabled")||m._abort(C)||(f=function(e,t){d||m.updateStack(e,void 0),m.uploadLog.push(t),m._checkAsyncComplete()&&(m.fileBatchCompleted=!0)},s=function(){var e,i,a,r=m.uploadCache,n=0,s=m.cacheInitialPreview;m.fileBatchCompleted&&(s&&s.content&&(n=s.content.length),setTimeout(function(){var o=0===m.getFileStack(!0).length;if(m.showPreview){if(m.previewCache.set(r.content,r.config,r.tags,r.append),n){for(i=0;i<r.content.length;i++)a=i+n,s.content[a]=r.content[i],s.config.length&&(s.config[a]=r.config[i]),s.tags.length&&(s.tags[a]=r.tags[i]);m.initialPreview=t.cleanArray(s.content),m.initialPreviewConfig=t.cleanArray(s.config),m.initialPreviewThumbTags=t.cleanArray(s.tags)}else m.initialPreview=r.content,m.initialPreviewConfig=r.config,m.initialPreviewThumbTags=r.tags;m.cacheInitialPreview={},m.hasInitData&&(m._initPreview(),m._initPreviewActions())}m.unlock(o),o&&m._clearFileInput(),e=m.$preview.find(".file-preview-initial"),m.uploadAsync&&e.length&&(t.addCss(e,t.SORT_CSS),m._initSortable()),m._raise("filebatchuploadcomplete",[m.filestack,m._getExtraData()]),m.uploadCount=0,m.uploadStatus={},m.uploadLog=[],m._setProgress(101),m.ajaxAborted=!1},100))},c=function(s){r=m._getOutData(s),m.fileBatchCompleted=!1,a||(m.ajaxAborted=!1),m.showPreview&&(n.hasClass("file-preview-success")||(m._setThumbStatus(n,"Loading"),t.addCss(n,"file-uploading")),o.attr("disabled",!0),l.attr("disabled",!0)),a||m.lock(),m._raise("filepreupload",[r,w,i]),e.extend(!0,C,r),m._abort(C)&&(s.abort(),a||(m._setThumbStatus(n,"New"),n.removeClass("file-uploading"),o.removeAttr("disabled"),l.removeAttr("disabled"),m.unlock()),m._setProgressCancelled())},h=function(s,l,c){var h=m.showPreview&&n.attr("id")?n.attr("id"):w;r=m._getOutData(c,s),e.extend(!0,C,r),setTimeout(function(){t.isEmpty(s)||t.isEmpty(s.error)?(m.showPreview&&(m._setThumbStatus(n,"Success"),o.hide(),m._initUploadSuccess(s,n,a),m._setProgress(101,b)),m._raise("fileuploaded",[r,h,i]),a?f(i,h):m.updateStack(i,void 0)):(d=!0,m._showUploadError(s.error,C),m._setPreviewError(n,i,m.filestack[i],m.retryErrorUploads),m.retryErrorUploads||o.hide(),a&&f(i,h),m._setProgress(101,e("#"+h).find(".file-thumb-progress"),m.msgUploadError))},100)},p=function(){setTimeout(function(){m.showPreview&&(o.removeAttr("disabled"),l.removeAttr("disabled"),n.removeClass("file-uploading")),a?s():(m.unlock(!1),m._clearFileInput()),m._initSuccessThumbs()},100)},u=function(t,r,s){var l=m.ajaxOperations.uploadThumb,c=m._parseError(l,t,s,a&&m.filestack[i].name?m.filestack[i].name:null);d=!0,setTimeout(function(){a&&f(i,w),m.uploadStatus[w]=100,m._setPreviewError(n,i,m.filestack[i],m.retryErrorUploads),m.retryErrorUploads||o.hide(),e.extend(!0,C,m._getOutData(t)),m._setProgress(101,b,m.msgAjaxProgressError.replace("{operation}",l)),m._setProgress(101,e("#"+w).find(".file-thumb-progress"),m.msgUploadError),m._showUploadError(c,C)},100)},v.append(m.uploadFileAttr,m.filestack[i],m.filenames[i]),v.append("file_id",i),m._ajaxSubmit(c,h,p,u,w,i))},_uploadBatch:function(){var i,a,r,n,s,o=this,l=o.filestack,d=l.length,c=o.filestack.length>0||!e.isEmptyObject(o.uploadExtraData);o.formdata=new FormData,0!==d&&c&&!o._abort({})&&(s=function(){e.each(l,function(e){o.updateStack(e,void 0)}),o._clearFileInput()},i=function(i){o.lock();var a=o._getOutData(i);o.ajaxAborted=!1,o.showPreview&&o._getThumbs().each(function(){var i=e(this),a=i.find(".kv-file-upload"),r=i.find(".kv-file-remove");i.hasClass("file-preview-success")||(o._setThumbStatus(i,"Loading"),t.addCss(i,"file-uploading")),a.attr("disabled",!0),r.attr("disabled",!0)}),o._raise("filebatchpreupload",[a]),o._abort(a)&&(i.abort(),o._getThumbs().each(function(){var t=e(this),i=t.find(".kv-file-upload"),a=t.find(".kv-file-remove");t.hasClass("file-preview-loading")&&(o._setThumbStatus(t,"New"),t.removeClass("file-uploading")),i.removeAttr("disabled"),a.removeAttr("disabled")}),o._setProgressCancelled())},a=function(i,a,r){var n=o._getOutData(r,i),l=0,d=o._getThumbs(":not(.file-preview-success)"),c=t.isEmpty(i)||t.isEmpty(i.errorkeys)?[]:i.errorkeys;t.isEmpty(i)||t.isEmpty(i.error)?(o._raise("filebatchuploadsuccess",[n]),s(),o.showPreview?(d.each(function(){var t=e(this);o._setThumbStatus(t,"Success"),t.removeClass("file-uploading"),t.find(".kv-file-upload").hide().removeAttr("disabled")}),o._initUploadSuccess(i)):o.reset(),o._setProgress(101)):(o.showPreview&&(d.each(function(){var t=e(this),i=t.attr("data-fileindex");t.removeClass("file-uploading"),t.find(".kv-file-upload").removeAttr("disabled"),t.find(".kv-file-remove").removeAttr("disabled"),0===c.length||-1!==e.inArray(l,c)?(o._setPreviewError(t,i,o.filestack[i],o.retryErrorUploads),o.retryErrorUploads||(t.find(".kv-file-upload").hide(),o.updateStack(i,void 0))):(t.find(".kv-file-upload").hide(),o._setThumbStatus(t,"Success"),o.updateStack(i,void 0)),t.hasClass("file-preview-error")&&!o.retryErrorUploads||l++}),o._initUploadSuccess(i)),o._showUploadError(i.error,n,"filebatchuploaderror"),o._setProgress(101,o.$progress,o.msgUploadError))},n=function(){o.unlock(),o._initSuccessThumbs(),o._clearFileInput(),o._raise("filebatchuploadcomplete",[o.filestack,o._getExtraData()])},r=function(t,i,a){var r=o._getOutData(t),n=o.ajaxOperations.uploadBatch,s=o._parseError(n,t,a);o._showUploadError(s,r,"filebatchuploaderror"),o.uploadFileCount=d-1,o.showPreview&&(o._getThumbs().each(function(){var t=e(this),i=t.attr("data-fileindex");t.removeClass("file-uploading"),void 0!==o.filestack[i]&&o._setPreviewError(t)}),o._getThumbs().removeClass("file-uploading"),o._getThumbs(" .kv-file-upload").removeAttr("disabled"),o._getThumbs(" .kv-file-delete").removeAttr("disabled"),o._setProgress(101,o.$progress,o.msgAjaxProgressError.replace("{operation}",n)))},e.each(l,function(e,i){t.isEmpty(l[e])||o.formdata.append(o.uploadFileAttr,i,o.filenames[e])}),o._ajaxSubmit(i,a,n,r))},_uploadExtraOnly:function(){var e,i,a,r,n=this,s={};n.formdata=new FormData,n._abort(s)||(e=function(e){n.lock();var t=n._getOutData(e);n._raise("filebatchpreupload",[t]),n._setProgress(50),s.data=t,s.xhr=e,n._abort(s)&&(e.abort(),n._setProgressCancelled())},i=function(e,i,a){var r=n._getOutData(a,e);t.isEmpty(e)||t.isEmpty(e.error)?(n._raise("filebatchuploadsuccess",[r]),n._clearFileInput(),n._initUploadSuccess(e),n._setProgress(101)):n._showUploadError(e.error,r,"filebatchuploaderror")},a=function(){n.unlock(),n._clearFileInput(),n._raise("filebatchuploadcomplete",[n.filestack,n._getExtraData()])},r=function(e,t,i){var a=n._getOutData(e),r=n.ajaxOperations.uploadExtra,o=n._parseError(r,e,i);s.data=a,n._showUploadError(o,a,"filebatchuploaderror"),n._setProgress(101,n.$progress,n.msgAjaxProgressError.replace("{operation}",r))},n._ajaxSubmit(e,i,a,r))},_deleteFileIndex:function(i){var a=i.attr("data-fileindex"),r=this.reversePreviewOrder;"init_"===a.substring(0,5)&&(a=parseInt(a.replace("init_","")),this.initialPreview=t.spliceArray(this.initialPreview,a,r),this.initialPreviewConfig=t.spliceArray(this.initialPreviewConfig,a,r),this.initialPreviewThumbTags=t.spliceArray(this.initialPreviewThumbTags,a,r),this.getFrames().each(function(){var t=e(this),i=t.attr("data-fileindex");"init_"===i.substring(0,5)&&(i=parseInt(i.replace("init_","")))>a&&(i--,t.attr("data-fileindex","init_"+i))}),this.uploadAsync&&(this.cacheInitialPreview=this.getPreview()))},_initFileActions:function(){var i=this,a=i.$preview;i.showPreview&&(i._initZoomButton(),i.getFrames(" .kv-file-remove").each(function(){var r,n,s,o=e(this),l=o.closest(t.FRAMES),d=l.attr("id"),c=l.attr("data-fileindex");i._handler(o,"click",function(){if(!1===i._raise("filepreremove",[d,c])||!i._validateMinCount())return!1;r=l.hasClass("file-preview-error"),t.cleanMemory(l),l.fadeOut("slow",function(){t.cleanZoomCache(a.find("#zoom-"+d)),i.updateStack(c,void 0),i._clearObjects(l),l.remove(),d&&r&&i.$errorContainer.find('li[data-file-id="'+d+'"]').fadeOut("fast",function(){e(this).remove(),i._errorsExist()||i._resetErrors()}),i._clearFileInput();var o=i.getFileStack(!0),h=i.previewCache.count(),p=o.length,u=i.showPreview&&i.getFrames().length;0!==p||0!==h||u?(s=(n=h+p)>1?i._getMsgSelected(n):o[0]?i._getFileNames()[0]:"",i._setCaption(s)):i.reset(),i._raise("fileremoved",[d,c])})})}),i.getFrames(" .kv-file-upload").each(function(){var a=e(this);i._handler(a,"click",function(){var e=a.closest(t.FRAMES),r=e.attr("data-fileindex");i.$progress.hide(),e.hasClass("file-preview-error")&&!i.retryErrorUploads||i._uploadSingle(r,!1)})}))},_initPreviewActions:function(){var i=this,a=i.$preview,r=i.deleteExtraData||{},n=t.FRAMES+" .kv-file-remove",s=i.fileActionSettings,o=s.removeClass,l=s.removeErrorClass,d=function(){var e=i.isAjaxUpload?i.previewCache.count():i._inputFileCount();a.find(t.FRAMES).length||e||(i._setCaption(""),i.reset(),i.initialCaption="")};i._initZoomButton(),a.find(n).each(function(){var n,s,c,h=e(this),p=h.data("url")||i.deleteUrl,u=h.data("key");if(!t.isEmpty(p)&&void 0!==u){var f,m,g,v,w=h.closest(t.FRAMES),_=i.previewCache.data,b=w.attr("data-fileindex");b=parseInt(b.replace("init_","")),g=t.isEmpty(_.config)&&t.isEmpty(_.config[b])?null:_.config[b],"function"==typeof(v=t.isEmpty(g)||t.isEmpty(g.extra)?r:g.extra)&&(v=v()),m={id:h.attr("id"),key:u,extra:v},n=function(e){i.ajaxAborted=!1,i._raise("filepredelete",[u,e,v]),i._abort()?e.abort():(h.removeClass(l),t.addCss(w,"file-uploading"),t.addCss(h,"disabled "+o))},s=function(e,r,n){var s,c;if(!t.isEmpty(e)&&!t.isEmpty(e.error))return m.jqXHR=n,m.response=e,i._showError(e.error,m,"filedeleteerror"),w.removeClass("file-uploading"),h.removeClass("disabled "+o).addClass(l),void d();w.removeClass("file-uploading").addClass("file-deleted"),w.fadeOut("slow",function(){b=parseInt(w.attr("data-fileindex").replace("init_","")),i.previewCache.unset(b),i._deleteFileIndex(w),s=i.previewCache.count(),c=s>0?i._getMsgSelected(s):"",i._setCaption(c),i._raise("filedeleted",[u,n,v]),t.cleanZoomCache(a.find("#zoom-"+w.attr("id"))),i._clearObjects(w),w.remove(),d()})},c=function(e,t,a){var r=i.ajaxOperations.deleteThumb,n=i._parseError(r,e,a);m.jqXHR=e,m.response={},i._showError(n,m,"filedeleteerror"),w.removeClass("file-uploading"),h.removeClass("disabled "+o).addClass(l),d()},i._initAjaxSettings(),i._mergeAjaxCallback("beforeSend",n,"delete"),i._mergeAjaxCallback("success",s,"delete"),i._mergeAjaxCallback("error",c,"delete"),f=e.extend(!0,{},{url:p,type:"POST",dataType:"json",data:e.extend(!0,{},{key:u},v)},i._ajaxDeleteSettings),i._handler(h,"click",function(){if(!i._validateMinCount())return!1;i.ajaxAborted=!1,i._raise("filebeforedelete",[u,v]),i.ajaxAborted instanceof Promise?i.ajaxAborted.then(function(t){t||e.ajax(f)}):i.ajaxAborted||e.ajax(f)})}})},_hideFileIcon:function(){this.overwriteInitial&&this.$captionContainer.removeClass("icon-visible")},_showFileIcon:function(){t.addCss(this.$captionContainer,"icon-visible")},_getSize:function(t){var i,a,r,n=parseFloat(t),s=this.fileSizeGetter;return e.isNumeric(t)&&e.isNumeric(n)?("function"==typeof s?r=s(n):0===n?r="0.00 B":(i=Math.floor(Math.log(n)/Math.log(1024)),a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=1*(n/Math.pow(1024,i)).toFixed(2)+" "+a[i]),this._getLayoutTemplate("size").replace("{sizeText}",r)):""},_generatePreviewTemplate:function(i,a,r,n,s,o,l,d,c,h,p){var u,f=this,m=f.slug(r),g="",v="",w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<400?f.previewSettingsSmall[i]||f.defaults.previewSettingsSmall[i]:f.previewSettings[i]||f.defaults.previewSettings[i],_=c||f._renderFileFooter(m,l,"auto",o),b=f._getPreviewIcon(r),C="type-default",y=b&&f.preferIconicPreview,x=b&&f.preferIconicZoomPreview;return w&&e.each(w,function(e,t){v+=e+":"+t+";"}),u=function(a,o,l,c){var u=l?"zoom-"+s:s,g=f._getPreviewTemplate(a),w=(d||"")+" "+c;return f.frameClass&&(w=f.frameClass+" "+w),l&&(w=w.replace(" "+t.SORT_CSS,"")),g=f._parseFilePreviewIcon(g,r),"text"===a&&(o=t.htmlEncode(o)),"object"!==i||n||e.each(f.defaults.fileTypeSettings,function(e,t){"object"!==e&&"other"!==e&&t(r,n)&&(C="type-"+e)}),g.setTokens({previewId:u,caption:m,frameClass:w,type:n,fileindex:h,typeCss:C,footer:_,data:o,template:p||i,style:v?'style="'+v+'"':""})},h=h||s.slice(s.lastIndexOf("-")+1),f.fileActionSettings.showZoom&&(g=u(x?"other":i,a,!0,"kv-zoom-thumb")),g="\n"+f._getLayoutTemplate("zoomCache").replace("{zoomContent}",g),u(y?"other":i,a,!1,"kv-preview-thumb")+g},_addToPreview:function(e,t){return this.reversePreviewOrder?e.prepend(t):e.append(t)},_previewDefault:function(i,a,r){var n=this.$preview;if(this.showPreview){var s,o=i?i.name:"",l=i?i.type:"",d=i.size||0,c=this.slug(o),h=!0===r&&!this.isAjaxUpload,p=t.objUrl.createObjectURL(i);this._clearDefaultPreview(),s=this._generatePreviewTemplate("other",p,o,l,a,h,d),this._addToPreview(n,s),this._setThumbAttr(a,c,d),!0===r&&this.isAjaxUpload&&this._setThumbStatus(e("#"+a),"Error")}},_previewFile:function(e,t,i,a,r,n){if(this.showPreview){var s,o=t?t.name:"",l=n.type,d=n.name,c=this._parseFileType(l,o),h=this.allowedPreviewTypes,p=this.allowedPreviewMimeTypes,u=this.$preview,f=t.size||0,m=h&&h.indexOf(c)>=0,g=p&&-1!==p.indexOf(l),v="text"===c||"html"===c||"image"===c?i.target.result:r;if("html"===c&&this.purifyHtml&&window.DOMPurify&&(v=window.DOMPurify.sanitize(v)),m||g){s=this._generatePreviewTemplate(c,v,o,l,a,!1,f),this._clearDefaultPreview(),this._addToPreview(u,s);var w=u.find("#"+a+" img");this._validateImageOrientation(w,t,a,d,l,f,v)}else this._previewDefault(t,a);this._setThumbAttr(a,d,f),this._initSortable()}},_setThumbAttr:function(t,i,a){var r=e("#"+t);r.length&&(a=a&&a>0?this._getSize(a):"",r.data({caption:i,size:a}))},_setInitThumbAttr:function(){var e,i,a,r,n=this.previewCache.data,s=this.previewCache.count();if(0!==s)for(var o=0;o<s;o++)e=n.config[o],r=this.previewInitId+"-init_"+o,i=t.ifSet("caption",e,t.ifSet("filename",e)),a=t.ifSet("size",e),this._setThumbAttr(r,i,a)},_slugDefault:function(e){return t.isEmpty(e)?"":String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,"_")},_updateFileDetails:function(e){var i=this.$element,a=this.getFileStack(),r=t.isIE(9)&&t.findFileName(i.val())||i[0].files[0]&&i[0].files[0].name||a.length&&a[0].name||"",n=this.slug(r),s=this.isAjaxUpload?a.length:e,o=this.previewCache.count()+s,l=1===s?n:this._getMsgSelected(o);this.isError?(this.$previewContainer.removeClass("file-thumb-loading"),this.$previewStatus.html(""),this.$captionContainer.removeClass("icon-visible")):this._showFileIcon(),this._setCaption(l,this.isError),this.$container.removeClass("file-input-new file-input-ajax-new"),1===arguments.length&&this._raise("fileselect",[e,n]),this.previewCache.count()&&this._initPreviewActions()},_setThumbStatus:function(e,t){if(this.showPreview){var i="indicator"+t,a=i+"Title",r="file-preview-"+t.toLowerCase(),n=e.find(".file-upload-indicator"),s=this.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-loading"),"Success"===t&&e.find(".file-drag-handle").remove(),n.html(s[i]),n.attr("title",s[a]),e.addClass(r),"Error"!==t||this.retryErrorUploads||e.find(".kv-file-upload").attr("disabled",!0)}},_setProgressCancelled:function(){this._setProgress(101,this.$progress,this.msgCancelled)},_setProgress:function(e,i,a){var r,n=Math.min(e,100),s=this.progressUploadThreshold,o=e<=100?this.progressTemplate:this.progressCompleteTemplate,l=n<100?this.progressTemplate:a?this.progressErrorTemplate:o;i=i||this.$progress,t.isEmpty(l)||(r=s&&n>s&&e<=100?l.setTokens({percent:s,status:this.msgUploadThreshold}):l.setTokens({percent:n,status:e>100?this.msgUploadEnd:n+"%"}),i.html(r),a&&i.find('[role="progressbar"]').html(a))},_setFileDropZoneTitle:function(){var e,i=this.$container.find(".file-drop-zone"),a=this.dropZoneTitle;this.isClickable&&(e=t.isEmpty(this.$element.attr("multiple"))?this.fileSingle:this.filePlural,a+=this.dropZoneClickTitle.replace("{files}",e)),i.find("."+this.dropZoneTitleClass).remove(),!this.showPreview||0===i.length||this.getFileStack().length>0||!this.dropZoneEnabled||!this.isAjaxUpload&&this.$element.files||(0===i.find(t.FRAMES).length&&t.isEmpty(this.defaultPreviewContent)&&i.prepend('<div class="'+this.dropZoneTitleClass+'">'+a+"</div>"),this.$container.removeClass("file-input-new"),t.addCss(this.$container,"file-input-ajax-new"))},_setAsyncUploadStatus:function(t,i,a){var r=0;this._setProgress(i,e("#"+t).find(".file-thumb-progress")),this.uploadStatus[t]=i,e.each(this.uploadStatus,function(e,t){r+=t}),this._setProgress(Math.floor(r/a))},_validateMinCount:function(){var e=this.isAjaxUpload?this.getFileStack().length:this._inputFileCount();return!(this.validateInitialCount&&this.minFileCount>0&&this._getFileCount(e-1)<this.minFileCount)||(this._noFilesError({}),!1)},_getFileCount:function(e){return this.validateInitialCount&&!this.overwriteInitial&&(e+=this.previewCache.count()),e},_getFileId:function(e){var t,i=this.generateFileId;return"function"==typeof i?i(e,event):e&&(t=String(e.webkitRelativePath||e.fileName||e.name||null))?e.size+"-"+t.replace(/[^0-9a-zA-Z_-]/gim,""):null},_getFileName:function(e){return e&&e.name?this.slug(e.name):void 0},_getFileIds:function(e){return this.fileids.filter(function(t){return e?void 0!==t:null!=t})},_getFileNames:function(e){return this.filenames.filter(function(t){return e?void 0!==t:null!=t})},_setPreviewError:function(e,t,i,a){void 0!==t&&this.updateStack(t,i),this.showPreview&&(!this.removeFromPreviewOnError||a?(this._setThumbStatus(e,"Error"),this._refreshUploadButton(e,a)):e.remove())},_refreshUploadButton:function(e,t){var i=e.find(".kv-file-upload"),a=this.fileActionSettings,r=a.uploadIcon,n=a.uploadTitle;i.length&&(t&&(r=a.uploadRetryIcon,n=a.uploadRetryTitle),i.attr("title",n).html(r))},_checkDimensions:function(e,i,a,r,n,s,o){var l,d,c,h=this[("Small"===i?"min":"max")+"Image"+s];!t.isEmpty(h)&&a.length&&(c=a[0],d="Width"===s?c.naturalWidth||c.width:c.naturalHeight||c.height,("Small"===i?d>=h:d<=h)||(l=this["msgImage"+s+i].setTokens({name:n,size:h}),this._showUploadError(l,o),this._setPreviewError(r,e,null)))},_getExifObj:function(e){var t=null;try{t=window.piexif?window.piexif.load(e):null}catch(e){t=null}return t||this._log("Error loading the piexif.js library."),t},_validateImageOrientation:function(e,i,a,r,n,s,o){var l,d;(d=(l=e.length&&this.autoOrientImage?this._getExifObj(o):null)?l["0th"][piexif.ImageIFD.Orientation]:null)?(t.setImageOrientation(e,this.$preview.find("#zoom-"+a+" img"),d),this._raise("fileimageoriented",{$img:e,file:i}),this._validateImage(a,r,n,s,o,l)):this._validateImage(a,r,n,s,o,l)},_validateImage:function(t,i,a,r,n,s){var o,l,d,c=this,h=c.$preview,p=h.find("#"+t),u=p.attr("data-fileindex"),f=p.find("img");i=i||"Untitled",f.one("load",function(){l=p.width(),d=h.width(),l>d&&f.css("width","100%"),o={ind:u,id:t},c._checkDimensions(u,"Small",f,p,i,"Width",o),c._checkDimensions(u,"Small",f,p,i,"Height",o),c.resizeImage||(c._checkDimensions(u,"Large",f,p,i,"Width",o),c._checkDimensions(u,"Large",f,p,i,"Height",o)),c._raise("fileimageloaded",[t]),c.loadedImages.push({ind:u,img:f,thumb:p,pid:t,typ:a,siz:r,validated:!1,imgData:n,exifObj:s}),p.data("exif",s),c._validateAllImages()}).one("error",function(){c._raise("fileimageloaderror",[t])}).each(function(){this.complete?e(this).trigger("load"):this.error&&e(this).trigger("error")})},_validateAllImages:function(){var e,t,i,a={val:0},r=this.loadedImages.length,n=this.resizeIfSizeMoreThan;if(r===this.totalImagesCount&&(this._raise("fileimagesloaded"),this.resizeImage))for(e=0;e<this.loadedImages.length;e++)(t=this.loadedImages[e]).validated||((i=t.siz)&&i>1e3*n&&this._getResizedImage(t,a,r),this.loadedImages[e].validated=!0)},_getResizedImage:function(i,a,r){var n,s,o,l,d,c,h=this,p=e(i.img)[0],u=p.naturalWidth,f=p.naturalHeight,m=1,g=h.maxImageWidth||u,v=h.maxImageHeight||f,w=!(!u||!f),_=h.imageCanvas,b=h.imageCanvasContext,C=i.typ,y=i.pid,x=i.ind,T=i.thumb,E=i.exifObj;if(d=function(e,t,i){h.isAjaxUpload?h._showUploadError(e,t,i):h._showError(e,t,i),h._setPreviewError(T,x)},h.filestack[x]&&w&&!(u<=g&&f<=v)||(w&&h.filestack[x]&&h._raise("fileimageresized",[y,x]),a.val++,a.val===r&&h._raise("fileimagesresized"),w)){C=C||h.resizeDefaultImageType,s=u>g,o=f>v,m="width"===h.resizePreference?s?g/u:o?v/f:1:o?v/f:s?g/u:1,h._resetCanvas(),u*=m,f*=m,_.width=u,_.height=f;try{b.drawImage(p,0,0,u,f),l=_.toDataURL(C,h.resizeQuality),E&&(c=window.piexif.dump(E),l=window.piexif.insert(c,l)),n=t.dataURI2Blob(l),h.filestack[x]=n,h._raise("fileimageresized",[y,x]),a.val++,a.val===r&&h._raise("fileimagesresized",[void 0,void 0]),n instanceof Blob||d(h.msgImageResizeError,{id:y,index:x},"fileimageresizeerror")}catch(e){a.val++,a.val===r&&h._raise("fileimagesresized",[void 0,void 0]),d(h.msgImageResizeException.replace("{errors}",e.message),{id:y,index:x},"fileimageresizeexception")}}else d(h.msgImageResizeError,{id:y,index:x},"fileimageresizeerror")},_initBrowse:function(e){var i=this.$element;this.showBrowse?this.$btnFile=e.find(".btn-file").append(i):(i.appendTo(e).attr("tabindex",-1),t.addCss(i,"file-no-browse"))},_initClickable:function(){var i,a,r=this;r.isClickable&&(i=r.$dropZone,r.isAjaxUpload||(a=r.$preview.find(".file-default-preview")).length&&(i=a),t.addCss(i,"clickable"),i.attr("tabindex",-1),r._handler(i,"click",function(t){var a=e(t.target);e(r.elErrorContainer+":visible").length||a.parents(".file-preview-thumbnails").length&&!a.parents(".file-default-preview").length||(r.$element.data("zoneClicked",!0).trigger("click"),i.blur())}))},_initCaption:function(){var e=this.initialCaption||"";return this.overwriteInitial||t.isEmpty(e)?(this.$caption.val(""),!1):(this._setCaption(e),!0)},_setCaption:function(i,a){var r,n,s,o,l,d=this.getFileStack();if(this.$caption.length){if(this.$captionContainer.removeClass("icon-visible"),a)r=e("<div>"+this.msgValidationError+"</div>").text(),l=(o=d.length)?1===o&&d[0]?this._getFileNames()[0]:this._getMsgSelected(o):this._getMsgSelected(this.msgNo),n=t.isEmpty(i)?l:i,s='<span class="'+this.msgValidationErrorClass+'">'+this.msgValidationErrorIcon+"</span>";else{if(t.isEmpty(i))return;n=r=e("<div>"+i+"</div>").text(),s=this._getLayoutTemplate("fileIcon")}this.$captionContainer.addClass("icon-visible"),this.$caption.attr("title",r).val(n),this.$captionIcon.html(s)}},_createContainer:function(){var t={class:"file-input file-input-new"+(this.rtl?" kv-rtl":"")},i=e(document.createElement("div")).attr(t).html(this._renderMain());return i.insertBefore(this.$element),this._initBrowse(i),this.theme&&i.addClass("theme-"+this.theme),i},_refreshContainer:function(){var e=this.$container;this.$element.insertAfter(e),e.html(this._renderMain()),this._initBrowse(e),this._validateDisabled()},_validateDisabled:function(){this.$caption.attr({readonly:this.isDisabled})},_renderMain:function(){var e=this.dropZoneEnabled?" file-drop-zone":"file-drop-disabled",t=this.showClose?this._getLayoutTemplate("close"):"",i=this.showPreview?this._getLayoutTemplate("preview").setTokens({class:this.previewClass,dropClass:e}):"",a=this.isDisabled?this.captionClass+" file-caption-disabled":this.captionClass,r=this.captionTemplate.setTokens({class:a+" kv-fileinput-caption"});return this.mainTemplate.setTokens({class:this.mainClass+(!this.showBrowse&&this.showCaption?" no-browse":""),preview:i,close:t,caption:r,upload:this._renderButton("upload"),remove:this._renderButton("remove"),cancel:this._renderButton("cancel"),browse:this._renderButton("browse")})},_renderButton:function(e){var i=this._getLayoutTemplate("btnDefault"),a=this[e+"Class"],r=this[e+"Title"],n=this[e+"Icon"],s=this[e+"Label"],o=this.isDisabled?" disabled":"",l="button";switch(e){case"remove":if(!this.showRemove)return"";break;case"cancel":if(!this.showCancel)return"";a+=" kv-hidden";break;case"upload":if(!this.showUpload)return"";this.isAjaxUpload&&!this.isDisabled?i=this._getLayoutTemplate("btnLink").replace("{href}",this.uploadUrl):l="submit";break;case"browse":if(!this.showBrowse)return"";i=this._getLayoutTemplate("btnBrowse");break;default:return""}return a+="browse"===e?" btn-file":" fileinput-"+e+" fileinput-"+e+"-button",t.isEmpty(s)||(s=' <span class="'+this.buttonLabelClass+'">'+s+"</span>"),i.setTokens({type:l,css:a,title:r,status:o,icon:n,label:s})},_renderThumbProgress:function(){return'<div class="file-thumb-progress kv-hidden">'+this.progressTemplate.setTokens({percent:"0",status:this.msgUploadBegin})+"</div>"},_renderFileFooter:function(e,i,a,r){var n,s=this.fileActionSettings,o=s.showRemove,l=s.showDrag,d=s.showUpload,c=s.showZoom,h=this._getLayoutTemplate("footer"),p=this._getLayoutTemplate("indicator"),u=r?s.indicatorError:s.indicatorNew,f=r?s.indicatorErrorTitle:s.indicatorNewTitle,m=p.setTokens({indicator:u,indicatorTitle:f});return i=this._getSize(i),n=this.isAjaxUpload?h.setTokens({actions:this._renderFileActions(d,!1,o,c,l,!1,!1,!1),caption:e,size:i,width:a,progress:this._renderThumbProgress(),indicator:m}):h.setTokens({actions:this._renderFileActions(!1,!1,!1,c,l,!1,!1,!1),caption:e,size:i,width:a,progress:"",indicator:m}),n=t.replaceTags(n,this.previewThumbTags)},_renderFileActions:function(e,t,i,a,r,n,s,o,l,d,c){if(!(e||t||i||a||r))return"";var h,p=!1===s?"":' data-url="'+s+'"',u=!1===o?"":' data-key="'+o+'"',f="",m="",g="",v="",w="",_=this._getLayoutTemplate("actions"),b=this.fileActionSettings,C=this.otherActionButtons.setTokens({dataKey:u,key:o}),y=n?b.removeClass+" disabled":b.removeClass;return i&&(f=this._getLayoutTemplate("actionDelete").setTokens({removeClass:y,removeIcon:b.removeIcon,removeTitle:b.removeTitle,dataUrl:p,dataKey:u,key:o})),e&&(m=this._getLayoutTemplate("actionUpload").setTokens({uploadClass:b.uploadClass,uploadIcon:b.uploadIcon,uploadTitle:b.uploadTitle})),t&&(g=(g=this._getLayoutTemplate("actionDownload").setTokens({downloadClass:b.downloadClass,downloadIcon:b.downloadIcon,downloadTitle:b.downloadTitle,downloadUrl:d||this.initialPreviewDownloadUrl})).setTokens({filename:c,key:o})),a&&(v=this._getLayoutTemplate("actionZoom").setTokens({zoomClass:b.zoomClass,zoomIcon:b.zoomIcon,zoomTitle:b.zoomTitle})),r&&l&&(h="drag-handle-init "+b.dragClass,w=this._getLayoutTemplate("actionDrag").setTokens({dragClass:h,dragTitle:b.dragTitle,dragIcon:b.dragIcon})),_.setTokens({delete:f,upload:m,download:g,zoom:v,drag:w,other:C})},_browse:function(e){e&&e.isDefaultPrevented()||!this._raise("filebrowse")||(this.isError&&!this.isAjaxUpload&&this.clear(),this.$captionContainer.focus())},_filterDuplicate:function(e,t,i){var a=this._getFileId(e);a&&i&&i.indexOf(a)>-1||(i||(i=[]),t.push(e),i.push(a))},_change:function(i){var a=this;if(!a.changeTriggered){var r,n,s,o,l,d,c,h,p,u,f,m=a.$element,g=arguments.length>1,v=a.isAjaxUpload,w=[],_=g?arguments[1]:m.get(0).files,b=!v&&t.isEmpty(m.attr("multiple"))?1:a.maxFileCount,C=a.filestack.length,y=t.isEmpty(m.attr("multiple"))&&C>0,x=a._getFileIds();if(a.reader=null,a._resetUpload(),a._hideFileIcon(),a.dropZoneEnabled&&a.$container.find(".file-drop-zone ."+a.dropZoneTitleClass).remove(),v?e.each(_,function(e,t){a._filterDuplicate(t,w,x)}):(_=i.target&&void 0===i.target.files?i.target.value?[{name:i.target.value.replace(/^.+\\/,"")}]:[]:i.target.files||{},w=_),t.isEmpty(w)||0===w.length)return v||a.clear(),void a._raise("fileselectnone");if(a._resetErrors(),n=w.length,r=a._getFileCount(v?a.getFileStack().length+n:n),b>0&&r>b){if(!a.autoReplace||n>b)return s=a.autoReplace&&n>b?n:r,o=b,f=a.msgFilesTooMany.replace("{m}",o).replace("{n}",s),a.isError=(l=f,d=null,c=null,h=null,p=e.extend(!0,{},a._getOutData({},{},_),{id:c,index:h}),u={id:c,index:h,file:d,files:_},v?a._showUploadError(l,p):a._showError(l,u)),a.$captionContainer.removeClass("icon-visible"),a._setCaption("",!0),void a.$container.removeClass("file-input-new file-input-ajax-new");r>b&&a._resetPreviewThumbs(v)}else!v||y?(a._resetPreviewThumbs(!1),y&&a.clearStack()):!v||0!==C||a.previewCache.count()&&!a.overwriteInitial||a._resetPreviewThumbs(!0);a.isPreviewable?a.readFiles(w):a._updateFileDetails(1)}},_abort:function(t){var i;return this.ajaxAborted&&"object"==typeof this.ajaxAborted&&void 0!==this.ajaxAborted.message?((i=e.extend(!0,{},this._getOutData(),t)).abortData=this.ajaxAborted.data||{},i.abortMessage=this.ajaxAborted.message,this._setProgress(101,this.$progress,this.msgCancelled),this._showUploadError(this.ajaxAborted.message,i,"filecustomerror"),this.cancel(),!0):!!this.ajaxAborted},_resetFileStack:function(){var i=this,a=0,r=[],n=[],s=[];i._getThumbs().each(function(){var o=e(this),l=o.attr("data-fileindex"),d=i.filestack[l],c=o.attr("id");"-1"!==l&&-1!==l&&(void 0!==d?(r[a]=d,n[a]=i._getFileName(d),s[a]=i._getFileId(d),o.attr({id:i.previewInitId+"-"+a,"data-fileindex":a}),a++):o.attr({id:"uploaded-"+t.uniqId(),"data-fileindex":"-1"}),i.$preview.find("#zoom-"+c).attr({id:"zoom-"+o.attr("id"),"data-fileindex":o.attr("data-fileindex")}))}),i.filestack=r,i.filenames=n,i.fileids=s},_isFileSelectionValid:function(e){return e=e||0,this.required&&!this.getFilesCount()?(this.$errorContainer.html(""),this._showUploadError(this.msgFileRequired),!1):!(this.minFileCount>0&&this._getFileCount(e)<this.minFileCount)||(this._noFilesError({}),!1)},clearStack:function(){return this.filestack=[],this.filenames=[],this.fileids=[],this.$element},updateStack:function(e,t){return this.filestack[e]=t,this.filenames[e]=this._getFileName(t),this.fileids[e]=t&&this._getFileId(t)||null,this.$element},addToStack:function(e){return this.filestack.push(e),this.filenames.push(this._getFileName(e)),this.fileids.push(this._getFileId(e)),this.$element},getFileStack:function(e){return this.filestack.filter(function(t){return e?void 0!==t:null!=t})},getFilesCount:function(){var e=this.isAjaxUpload?this.getFileStack().length:this._inputFileCount();return this._getFileCount(e)},readFiles:function(i){this.reader=new FileReader;var a,r=this,n=r.$element,s=r.$preview,o=r.reader,l=r.$previewContainer,d=r.$previewStatus,c=r.msgLoading,h=r.msgProgress,p=r.previewInitId,u=i.length,f=r.fileTypeSettings,m=r.filestack.length,g=r.allowedFileTypes,v=g?g.length:0,w=r.allowedFileExtensions,_=t.isEmpty(w)?"":w.join(", "),b=r.maxFilePreviewSize&&parseFloat(r.maxFilePreviewSize),C=s.length&&(!b||isNaN(b)),y=function(t,n,s,o){var l,d=e.extend(!0,{},r._getOutData({},{},i),{id:s,index:o}),c={id:s,index:o,file:n,files:i};r._previewDefault(n,s,!0),r.isAjaxUpload?(r.addToStack(void 0),setTimeout(function(){a(o+1)},100)):u=0,r._initFileActions(),(l=e("#"+s)).find(".kv-file-upload").hide(),r.removeFromPreviewOnError&&l.remove(),r.isError=r.isAjaxUpload?r._showUploadError(t,d):r._showError(t,c),r._updateFileDetails(u)};r.loadedImages=[],r.totalImagesCount=0,e.each(i,function(e,t){var i=r.fileTypeSettings.image;i&&i(t.type)&&r.totalImagesCount++}),(a=function(x){if(t.isEmpty(n.attr("multiple"))&&(u=1),x>=u)return r.isAjaxUpload&&r.filestack.length>0?r._raise("filebatchselected",[r.getFileStack()]):r._raise("filebatchselected",[i]),l.removeClass("file-thumb-loading"),void d.html("");var T,E,S,k,F,P,I,A,D,z,$,j,U=p+"-"+(m+x),B=i[x],R=f.text,O=f.image,L=f.html,M=B&&B.name?r.slug(B.name):"",Z=(B&&B.size||0)/1e3,N="",H=B?t.objUrl.createObjectURL(B):null,W=0,q="",V=0,K=function(){var e=h.setTokens({index:x+1,files:u,percent:50,name:M});setTimeout(function(){d.html(e),r._updateFileDetails(u),a(x+1)},100),r._raise("fileloaded",[B,U,x,o])};if(B){if(v>0)for(E=0;E<v;E++)P=g[E],I=r.msgFileTypes[P]||P,q+=0===E?I:", "+I;if(!1!==M){if(0===M.length)return S=r.msgInvalidFileName.replace("{name}",t.htmlEncode(B.name,"[unknown]")),void y(S,B,U,x);if(t.isEmpty(w)||(N=new RegExp("\\.("+w.join("|")+")$","i")),T=Z.toFixed(2),r.maxFileSize>0&&Z>r.maxFileSize)return S=r.msgSizeTooLarge.setTokens({name:M,size:T,maxSize:r.maxFileSize}),void y(S,B,U,x);if(null!==r.minFileSize&&Z<=t.getNum(r.minFileSize))return S=r.msgSizeTooSmall.setTokens({name:M,size:T,minSize:r.minFileSize}),void y(S,B,U,x);if(!t.isEmpty(g)&&t.isArray(g)){for(E=0;E<g.length;E+=1)k=g[E],W+=(A=f[k])&&"function"==typeof A&&A(B.type,B.name)?1:0;if(0===W)return S=r.msgInvalidFileType.setTokens({name:M,types:q}),void y(S,B,U,x)}if(0===W&&!t.isEmpty(w)&&t.isArray(w)&&!t.isEmpty(N)&&(F=t.compare(M,N),0===(W+=t.isEmpty(F)?0:F.length)))return S=r.msgInvalidFileExtension.setTokens({name:M,extensions:_}),void y(S,B,U,x);if(!r.showPreview)return r.isAjaxUpload&&r.addToStack(B),setTimeout(function(){a(x+1),r._updateFileDetails(u)},100),void r._raise("fileloaded",[B,U,x,o]);if(!C&&Z>b)return r.addToStack(B),l.addClass("file-thumb-loading"),r._previewDefault(B,U),r._initFileActions(),r._updateFileDetails(u),void a(x+1);s.length&&void 0!==FileReader?(D=R(B.type,M),z=L(B.type,M),$=O(B.type,M),d.html(c.replace("{index}",x+1).replace("{files}",u)),l.addClass("file-thumb-loading"),o.onerror=function(e){r._errorHandler(e,M)},o.onload=function(i){var a,n,s,l,d,c,h,p,u=[];if(n={name:M,type:B.type},e.each(f,function(e,t){"object"!==e&&"other"!==e&&t(B.type,M)&&V++}),0===V){for(s=new Uint8Array(i.target.result),E=0;E<s.length;E++)l=s[E].toString(16),u.push(l);if(a=u.join("").toLowerCase().substring(0,8),c=t.getMimeType(a,"",""),t.isEmpty(c)&&(d=t.arrayBuffer2String(o.result),c=t.isSvg(d)?"image/svg+xml":t.getMimeType(a,d,B.type)),n={name:M,type:c},D=R(c,""),z=L(c,""),$=O(c,""),(j=D||z)||$)return h=j,(p=new FileReader).onerror=function(e){r._errorHandler(e,M)},p.onload=function(e){r._previewFile(x,B,e,U,H,n),r._initFileActions(),K()},void(h?p.readAsText(B,r.textEncoding):p.readAsDataURL(B))}r._previewFile(x,B,i,U,H,n),r._initFileActions(),K()},o.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100,i=Math.ceil(t);S=h.setTokens({index:x+1,files:u,percent:i,name:M}),setTimeout(function(){d.html(S)},100)}},D||z?o.readAsText(B,r.textEncoding):$?o.readAsDataURL(B):o.readAsArrayBuffer(B)):(r._previewDefault(B,U),setTimeout(function(){a(x+1),r._updateFileDetails(u)},100),r._raise("fileloaded",[B,U,x,o])),r.addToStack(B)}else a(x+1)}})(0),r._updateFileDetails(u,!1)},lock:function(){return this._resetErrors(),this.disable(),this.showRemove&&this.$container.find(".fileinput-remove").hide(),this.showCancel&&this.$container.find(".fileinput-cancel").show(),this._raise("filelock",[this.filestack,this._getExtraData()]),this.$element},unlock:function(e){return void 0===e&&(e=!0),this.enable(),this.showCancel&&this.$container.find(".fileinput-cancel").hide(),this.showRemove&&this.$container.find(".fileinput-remove").show(),e&&this._resetFileStack(),this._raise("fileunlock",[this.filestack,this._getExtraData()]),this.$element},cancel:function(){var t,i=this,a=i.ajaxRequests,r=a.length;if(r>0)for(t=0;t<r;t+=1)i.cancelling=!0,a[t].abort();return i._setProgressCancelled(),i._getThumbs().each(function(){var t=e(this),a=t.attr("data-fileindex");t.removeClass("file-uploading"),void 0!==i.filestack[a]&&(t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"),t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")),i.unlock()}),i.$element},clear:function(){var i,a=this;if(a._raise("fileclear"))return a.$btnUpload.removeAttr("disabled"),a._getThumbs().find("video,audio,img").each(function(){t.cleanMemory(e(this))}),a._clearFileInput(),a._resetUpload(),a.clearStack(),a._resetErrors(!0),a._hasInitialPreview()?(a._showFileIcon(),a._resetPreview(),a._initPreviewActions(),a.$container.removeClass("file-input-new")):(a._getThumbs().each(function(){a._clearObjects(e(this))}),a.isAjaxUpload&&(a.previewCache.data={}),a.$preview.html(""),i=!a.overwriteInitial&&a.initialCaption.length>0?a.initialCaption:"",a.$caption.attr("title","").val(i),t.addCss(a.$container,"file-input-new"),a._validateDefaultPreview()),0===a.$container.find(t.FRAMES).length&&(a._initCaption()||a.$captionContainer.removeClass("icon-visible")),a._hideFileIcon(),a._raise("filecleared"),a.$captionContainer.focus(),a._setFileDropZoneTitle(),a.$element},reset:function(){if(this._raise("filereset"))return this._resetPreview(),this.$container.find(".fileinput-filename").text(""),t.addCss(this.$container,"file-input-new"),(this.getFrames().length||this.dropZoneEnabled)&&this.$container.removeClass("file-input-new"),this.clearStack(),this.formdata={},this._setFileDropZoneTitle(),this.$element},disable:function(){return this.isDisabled=!0,this._raise("filedisabled"),this.$element.attr("disabled","disabled"),this.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),this.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",!0),t.addCss(this.$container.find(".btn-file"),"disabled"),this._initDragDrop(),this.$element},enable:function(){return this.isDisabled=!1,this._raise("fileenabled"),this.$element.removeAttr("disabled"),this.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),this.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"),this.$container.find(".btn-file").removeClass("disabled"),this._initDragDrop(),this.$element},upload:function(){var i,a,r,n=this.getFileStack().length,s=!e.isEmptyObject(this._getExtraData());if(this.isAjaxUpload&&!this.isDisabled&&this._isFileSelectionValid(n))if(this._resetUpload(),0!==n||s)if(this.$progress.show(),this.uploadCount=0,this.uploadStatus={},this.uploadLog=[],this.lock(),this._setProgress(2),0===n&&s)this._uploadExtraOnly();else{if(r=this.filestack.length,this.hasInitData=!1,!this.uploadAsync)return this._uploadBatch(),this.$element;for(a=this._getOutData(),this._raise("filebatchpreupload",[a]),this.fileBatchCompleted=!1,this.uploadCache={content:[],config:[],tags:[],append:!0},this.uploadAsyncCount=this.getFileStack().length,i=0;i<r;i++)this.uploadCache.content[i]=null,this.uploadCache.config[i]=null,this.uploadCache.tags[i]=null;for(this.$preview.find(".file-preview-initial").removeClass(t.SORT_CSS),this._initSortable(),this.cacheInitialPreview=this.getPreview(),i=0;i<r;i++)this.filestack[i]&&this._uploadSingle(i,!0)}else this._showUploadError(this.msgUploadEmpty)},destroy:function(){var t=this.$form,i=this.$container,a=this.$element,r=this.namespace;return e(document).off(r),e(window).off(r),t&&t.length&&t.off(r),this.isAjaxUpload&&this._clearFileInput(),this._cleanup(),this._initPreviewCache(),a.insertBefore(i).off(r).removeData(),i.off().remove(),a},refresh:function(i){var a=this.$element;return i="object"!=typeof i||t.isEmpty(i)?this.options:e.extend(!0,{},this.options,i),this._init(i,!0),this._listen(),a},zoom:function(e){var i=this._getFrame(e),a=this.$modal;i&&(t.initModal(a),a.html(this._getModalContent()),this._setZoomContent(i),a.modal("show"),this._initZoomButtons())},getExif:function(e){var t=this._getFrame(e);return t&&t.data("exif")||null},getFrames:function(i){var a;return i=i||"",a=this.$preview.find(t.FRAMES+i),this.reversePreviewOrder&&(a=e(a.get().reverse())),a},getPreview:function(){return{content:this.initialPreview,config:this.initialPreviewConfig,tags:this.initialPreviewThumbTags}}},e.fn.fileinput=function(a){if(t.hasFileAPISupport()||t.isIE(9)){var r=Array.apply(null,arguments),n=[];switch(r.shift(),this.each(function(){var s,o=e(this),l=o.data("fileinput"),d="object"==typeof a&&a,c=d.theme||o.data("theme"),h={},p={},u=d.language||o.data("language")||e.fn.fileinput.defaults.language||"en";l||(c&&(p=e.fn.fileinputThemes[c]||{}),"en"===u||t.isEmpty(e.fn.fileinputLocales[u])||(h=e.fn.fileinputLocales[u]||{}),s=e.extend(!0,{},e.fn.fileinput.defaults,p,e.fn.fileinputLocales.en,h,d,o.data()),l=new i(this,s),o.data("fileinput",l)),"string"==typeof a&&n.push(l[a].apply(l,r))}),n.length){case 0:return this;case 1:return n[0];default:return n}}},e.fn.fileinput.defaults={language:"en",showCaption:!0,showBrowse:!0,showPreview:!0,showRemove:!0,showUpload:!0,showCancel:!0,showClose:!0,showUploadedThumbs:!0,browseOnZoneClick:!1,autoReplace:!1,autoOrientImage:!1,required:!1,rtl:!1,hideThumbnailContent:!1,generateFileId:null,previewClass:"",captionClass:"",frameClass:"krajee-default",mainClass:"file-caption-main",mainTemplate:null,purifyHtml:!0,fileSizeGetter:null,initialCaption:"",initialPreview:[],initialPreviewDelimiter:"*$$*",initialPreviewAsData:!1,initialPreviewFileType:"image",initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:!0,initialPreviewDownloadUrl:"",removeFromPreviewOnError:!1,deleteUrl:"",deleteExtraData:{},overwriteInitial:!0,previewZoomButtonIcons:{prev:'<i class="glyphicon glyphicon-triangle-left"></i>',next:'<i class="glyphicon glyphicon-triangle-right"></i>',toggleheader:'<i class="glyphicon glyphicon-resize-vertical"></i>',fullscreen:'<i class="glyphicon glyphicon-fullscreen"></i>',borderless:'<i class="glyphicon glyphicon-resize-full"></i>',close:'<i class="glyphicon glyphicon-remove"></i>'},previewZoomButtonClasses:{prev:"btn btn-navigate",next:"btn btn-navigate",toggleheader:"btn btn-sm btn-kv btn-default btn-outline-secondary",fullscreen:"btn btn-sm btn-kv btn-default btn-outline-secondary",borderless:"btn btn-sm btn-kv btn-default btn-outline-secondary",close:"btn btn-sm btn-kv btn-default btn-outline-secondary"},previewTemplates:{},previewContentTemplates:{},preferIconicPreview:!1,preferIconicZoomPreview:!1,allowedPreviewTypes:void 0,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:"file-other-icon",previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:"hidden-xs",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',browseClass:"btn btn-primary",removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-default btn-secondary",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:"btn btn-default btn-secondary",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-default btn-secondary",uploadUrl:null,uploadUrlThumb:null,uploadAsync:!0,uploadExtraData:{},zoomModalHeight:480,minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:!1,resizePreference:"width",resizeQuality:.92,resizeDefaultImageType:"image/jpeg",resizeIfSizeMoreThan:0,minFileSize:0,maxFileSize:0,maxFilePreviewSize:25600,minFileCount:0,maxFileCount:0,validateInitialCount:!1,msgValidationErrorClass:"text-danger",msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:"file-error-message",progressThumbClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressCompleteClass:"progress-bar bg-success progress-bar-success",progressErrorClass:"progress-bar bg-danger progress-bar-danger",progressUploadThreshold:99,previewFileType:"image",elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:t.closeButton("kv-error-close"),slugCallback:null,dropZoneEnabled:!0,dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{},otherActionButtons:"",textEncoding:"UTF-8",ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:!0,mergeAjaxCallbacks:!1,mergeAjaxDeleteCallbacks:!1,retryErrorUploads:!0,reversePreviewOrder:!1},e.fn.fileinputLocales.en={fileSingle:"file",filePlural:"files",browseLabel:"Browse &hellip;",removeLabel:"Remove",removeTitle:"Clear selected files",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",uploadLabel:"Upload",uploadTitle:"Upload selected files",msgNo:"No",msgNoFilesSelected:"No files selected",msgCancelled:"Cancelled",msgPlaceholder:"Select {files}...",msgZoomModalHeading:"Detailed Preview",msgFileRequired:"You must select a file to upload.",msgSizeTooSmall:'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:"You must select at least <b>{n}</b> {files} to upload.",msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileName:'Invalid or unsupported characters in file name "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgFileTypes:{image:"image",html:"HTML",text:"text",video:"video",audio:"audio",flash:"flash",pdf:"PDF",object:"object"},msgUploadAborted:"The file upload was aborted",msgUploadThreshold:"Processing...",msgUploadBegin:"Initializing...",msgUploadEnd:"Done",msgUploadEmpty:"No valid data available for upload.",msgUploadError:"Error",msgValidationError:"Validation Error",msgLoading:"Loading file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} {files} selected",msgFoldersNotAllowed:"Drag & drop files only! {n} folder(s) dropped were skipped.",msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:"Could not get the image dimensions to resize.",msgImageResizeException:"Error while resizing the image.<pre>{errors}</pre>",msgAjaxError:"Something went wrong with the {operation} operation. Please try again later!",msgAjaxProgressError:"{operation} failed",ajaxOperations:{deleteThumb:"file delete",uploadThumb:"file upload",uploadBatch:"batch file upload",uploadExtra:"form data upload"},dropZoneTitle:"Drag & drop files here &hellip;",dropZoneClickTitle:"<br>(or click to select {files})",previewZoomButtonTitles:{prev:"View previous file",next:"View next file",toggleheader:"Toggle header",fullscreen:"Toggle full screen",borderless:"Toggle borderless mode",close:"Close detailed preview"},usePdfRenderer:function(){return!!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i)},pdfRendererUrl:"",pdfRendererTemplate:'<iframe class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}></iframe>'},e.fn.fileinput.Constructor=i,e(document).ready(function(){var t=e("input.file[type=file]");t.length&&t.fileinput()})});

/***/ }),

/***/ 1352:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/*!
 * bootstrap-fileinput v4.5.1
 * http://plugins.krajee.com/file-input
 *
 * Font Awesome icon theme configuration for bootstrap-fileinput. Requires font awesome assets to be loaded.
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2018, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */!function(a){"use strict";a.fn.fileinputThemes.fa={fileActionSettings:{removeIcon:'<i class="fa fa-trash"></i>',uploadIcon:'<i class="fa fa-upload"></i>',uploadRetryIcon:'<i class="fa fa-repeat"></i>',downloadIcon:'<i class="fa fa-download"></i>',zoomIcon:'<i class="fa fa-search-plus"></i>',dragIcon:'<i class="fa fa-arrows"></i>',indicatorNew:'<i class="fa fa-plus-circle text-warning"></i>',indicatorSuccess:'<i class="fa fa-check-circle text-success"></i>',indicatorError:'<i class="fa fa-exclamation-circle text-danger"></i>',indicatorLoading:'<i class="fa fa-hourglass text-muted"></i>'},layoutTemplates:{fileIcon:'<i class="fa fa-file kv-caption-icon"></i> '},previewZoomButtonIcons:{prev:'<i class="fa fa-caret-left fa-lg"></i>',next:'<i class="fa fa-caret-right fa-lg"></i>',toggleheader:'<i class="fa fa-fw fa-arrows-v"></i>',fullscreen:'<i class="fa fa-fw fa-arrows-alt"></i>',borderless:'<i class="fa fa-fw fa-external-link"></i>',close:'<i class="fa fa-fw fa-remove"></i>'},previewFileIcon:'<i class="fa fa-file"></i>',browseIcon:'<i class="fa fa-folder-open"></i>',removeIcon:'<i class="fa fa-trash"></i>',cancelIcon:'<i class="fa fa-ban"></i>',uploadIcon:'<i class="fa fa-upload"></i>',msgValidationErrorIcon:'<i class="fa fa-exclamation-circle"></i> '}}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(527)))

/***/ }),

/***/ 1353:
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
                title: "<i class='fa fa-fw ti-move'></i> General Elements"
              }
            },
            [
              _c(
                "form",
                { staticClass: "form-horizontal", attrs: { role: "form" } },
                [
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "input-text" }
                        },
                        [_vm._v("Input text")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "input-text",
                          placeholder: "Input text"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "inputPassword" }
                        },
                        [_vm._v("Password")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "inputPassword",
                          placeholder: "Password"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            " control-label float-md-right txt_media1",
                          attrs: { for: "input-text-disabled" }
                        },
                        [_vm._v("Disabled")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "input-text-disabled",
                          placeholder: "Input text",
                          disabled: ""
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "color" }
                        },
                        [_vm._v("Color")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9 form_control" }, [
                      _c("input", {
                        staticClass: "form-control form_control",
                        attrs: { type: "color", id: "color" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "url" }
                        },
                        [_vm._v("Url")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "url",
                          id: "url",
                          placeholder: "URL",
                          value: "http://getbootstrap.com"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "range" }
                        },
                        [_vm._v("Range")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control ",
                        attrs: { type: "range", id: "range", value: "50" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right m-t-ng-8 txt_media1"
                        },
                        [_vm._v("Radio Buttons")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-radio-group", {
                          staticClass: "inline_radio",
                          attrs: { options: _vm.options, stacked: "" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right m-t-ng-8 txt_media1"
                        },
                        [_vm._v("Checkbox")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-checkbox-group", {
                          attrs: { stacked: "", options: _vm.stacked_check }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\n                                Inline Radio\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-radio-group", {
                          staticClass: "inlineRadio",
                          attrs: { options: _vm.radios }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\n                                Inline Checkbox\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-checkbox-group", {
                          staticClass: "inline_check",
                          attrs: { options: _vm.check }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group has-success" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "form-control-label float-md-right text-success txt_media1",
                          attrs: { for: "input-text-has-success" }
                        },
                        [
                          _vm._v(
                            "\n                                Input Success\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control brdr_success",
                        attrs: { type: "text", id: "input-text-has-success" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group has-warning" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right text-warning txt_media1",
                          attrs: { for: "input-text-has-warning" }
                        },
                        [
                          _vm._v(
                            "\n                                Input Warning\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control brdr_warn",
                        attrs: { type: "text", id: "input-text-has-warning" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group has-error" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label text-danger float-md-right txt_media1",
                          attrs: { for: "input-text-has-error" }
                        },
                        [
                          _vm._v(
                            "\n                                Input Error\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control brdr_danger",
                        attrs: { type: "text", id: "input-text-has-error" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [_vm._v("Input Size")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control input-sm ipt_size",
                        attrs: { type: "text", placeholder: "input-sm" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control ipt_size1 input-md",
                        attrs: { type: "text", placeholder: "input-md" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control input-lg ipt_size2",
                        attrs: { type: "text", placeholder: "input-lg" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\n                                Input Group\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            {
                              staticClass: "input-group-text bg-white",
                              attrs: { id: "basic-addon1" }
                            },
                            [_vm._v("@")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Username",
                            "aria-label": "Username",
                            "aria-describedby": "basic-addon1"
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Currency" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_vm._v(".00")]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: " control-label float-md-right txt_media"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_vm._v("$")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Currency" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_vm._v(".00")]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 m-b-10" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c(
                                "div",
                                { staticClass: "input-group-text bg-white" },
                                [_c("b-form-checkbox")],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 m-b-10" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c(
                                "div",
                                { staticClass: "input-group-text bg-white" },
                                [
                                  _c("b-form-radio", {
                                    attrs: { checked: "false" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c(
                                "div",
                                { staticClass: "input-group-prepend" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-warning",
                                      attrs: { type: "button" }
                                    },
                                    [_vm._v("Go!")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning",
                                    attrs: { type: "button" }
                                  },
                                  [_vm._v("Go!")]
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: " control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c(
                                "div",
                                { staticClass: "input-group-prepend" },
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      attrs: { text: "Action", variant: "info" }
                                    },
                                    [
                                      _c("b-dropdown-item-button", [
                                        _vm._v("action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("another action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("something else here")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-divider"),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("seperated link here")
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "input-group-append" },
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      attrs: { text: "Action", variant: "info" }
                                    },
                                    [
                                      _c("b-dropdown-item-button", [
                                        _vm._v("action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("another action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("something else here")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-divider"),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("seperated link here")
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\n                                Text Area\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("textarea", {
                        staticClass: "form-control resize_vertical",
                        attrs: { rows: "4", placeholder: "Basic" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right txt_media"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("textarea", {
                        staticClass: "form-control resize_vertical",
                        attrs: { rows: "4", disabled: "" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("textarea", {
                        staticClass: "form-control noresize",
                        attrs: { rows: "4", placeholder: "No resize" }
                      })
                    ])
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
              attrs: {
                title:
                  "<i class='fa fa-fw ti-pencil'></i> Grid sizing of Form Elements"
              }
            },
            [
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("textarea", {
                      staticClass: "form-control resize_vertical"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("textarea", {
                      staticClass: "form-control resize_vertical"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("textarea", {
                      staticClass: "form-control resize_vertical"
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")])
                    ])
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
            {
              attrs: {
                title:
                  "<i class='fa fa-fw ti-pencil'></i> Height Sizing of Input Groups"
              }
            },
            [
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [_c("b-form-checkbox")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("b-form-radio", {
                                attrs: { checked: "false" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group mb-2" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group mb-2" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [_c("b-form-checkbox")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group mb-2" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("b-form-radio", {
                                attrs: { checked: "false" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [_c("b-form-checkbox")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("b-form-radio", {
                                attrs: { checked: "false" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
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
    _c("div", { staticClass: "row file-input-section" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  "<i class='fa fa-fw ti-download'></i> Advanced File Input"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-20" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-20", type: "file" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "alert alert-info small m-t-10 alert_pad mt-2 mt-sm-0"
                    },
                    [
                      _vm._v(
                        "\n                            Display the widget as a single block button\n                        "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-21" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-21", type: "file", accept: "image/*" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Show only image files for selection & preview. Control button labels, styles,\n                            and icons for the Pick Image, upload, and delete buttons.\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-22" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: {
                      id: "input-22",
                      type: "file",
                      accept: "text/plain",
                      "data-preview-file-type": "text",
                      "data-preview-class": "bg-warning"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Preview section control. Change preview background and display only text files\n                            content within the preview window.\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8 " }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-23" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: {
                      id: "input-23",
                      type: "file",
                      "data-show-preview": "false"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Advanced customization using templates. For example, Hide file preview\n                            thumbnails.\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-40" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-40", type: "file" }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning btn-modify",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Modify")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Using plugin methods to alter input at runtime. For example, click the Modify\n                            button to disable the plugin and change plugin options.\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-41" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-41", type: "file" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Allow only image and video file types to be uploaded. You can configure the\n                            condition for validating the file types using\n                            "
                    ),
                    _c("code", [_vm._v("fileTypeSettings")]),
                    _vm._v(" .\n                        ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-42" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-42", type: "file" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Allow only specific( jpg, gif, png, txt ) file extensions.\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-43" }
                    },
                    [
                      _vm._v(
                        "\n                            Select File\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-43", type: "file" }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "help-block",
                    attrs: { idfirst: "errorBlock43" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\n                            Disable preview and customize your own error container and messages.\n                        "
                    )
                  ])
                ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6360cc14", module.exports)
  }
}

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1345)
  __webpack_require__(1348)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(1350)
/* template */
var __vue_template__ = __webpack_require__(1353)
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
Component.options.__file = "resources/components/pages/form-elements.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6360cc14", Component.options)
  } else {
    hotAPI.reload("data-v-6360cc14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 527:
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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(530)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(532)
/* template */
var __vue_template__ = __webpack_require__(533)
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

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(531);
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

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 532:
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

/***/ 533:
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

/***/ 700:
/***/ (function(module, exports) {

module.exports = "/images/vendor/bootstrap-fileinput/loading.gif?13630905267b809161e71d0f8a0c017b";

/***/ })

});