webpackJsonp([13],{

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(662)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(664)
/* template */
var __vue_template__ = __webpack_require__(666)
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
Component.options.__file = "resources/components/pages/src/subir.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c7b2a9c", Component.options)
  } else {
    hotAPI.reload("data-v-2c7b2a9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function l(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function o(t,e,i,n){return t.filter(function(t){return l(n(t,i),e)})}function r(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(i){return i.reduce(function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i},[])}}function u(t,e,i,s,l){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=o(r[i],t,e,l);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=i(2),p=function(t){return t&&t.__esModule?t:{default:t}}(h),d=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}};e.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return s(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var t=this.search||"",e=t.toLowerCase(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):o(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&e.length&&!this.isExistingOption(e)&&i.unshift({isTag:!0,label:t}),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue[0]?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(t,e){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(t){this.internalValue=this.getInternalValue(t)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(t){return null===t||void 0===t?[]:this.multiple?(0,p.default)(t):(0,p.default)([t])},filterAndFlat:function(t,e,i){return d(u(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return d(a(this.groupValues,this.groupLabel),r)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isNotSelected:function(t){return!this.isSelected(t)},getOptionLabel:function(t){if(s(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return s(e)?"":e},select:function(t,e){if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isLabel||t.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.internalValue.push(t):this.internalValue=[t],this.$emit("select",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===t?"undefined":c(t))?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);this.internalValue.splice(i,1),this.$emit("remove",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t.map(n);if(t&&"object"===(void 0===t?"undefined":s(t))){for(var e={},i=Object.keys(t),l=0,o=i.length;l<o;l++){var r=i[l];e[r]=n(t[r])}return e}return t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,i){i(6);var n=i(7)(i(5),i(8),null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=e.pointerMixin=e.multiselectMixin=e.Multiselect=void 0;var s=i(3),l=n(s),o=i(0),r=n(o),a=i(1),u=n(a),c=i(2),h=n(c);e.default=l.default,e.Multiselect=l.default,e.multiselectMixin=r.default,e.pointerMixin=u.default,e.deepClone=h.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),l=n(s),o=i(1),r=n(o);e.default={name:"vue-multiselect",mixins:[l.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and "+t+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{display:"none"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,n){var s,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,l=t.default);var r="function"==typeof l?l.options:l;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var a=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}}),r.computed=a}return{esModule:s,exports:l,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)||!t._k(e.keyCode,"tab",9)?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValue,function(e){return[t._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]:t._e(),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.isOpen?t.search:t.currentOptionLabel},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.pointerBackward()},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46]))return null;e.stopPropagation(),t.removeLastElement()}]}}):t._e(),t._v(" "),t.searchable?t._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:t._s(t.currentOptionLabel)},on:{mousedown:function(e){e.preventDefault(),t.toggle(e)}}})],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:t.optionHighlight(n,e)},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(663);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("19ea259a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7b2a9c\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7b2a9c\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite\n}\n.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:1px 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:8px;white-space:nowrap\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:10px;display:inline-block\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@keyframes a{\n0%{transform:rotate(0)\n}\nto{transform:rotate(2turn)\n}\n}", ""]);

// exports


/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uniqid__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uniqid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uniqid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(229);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "Subir",
    components: {
        Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a
    },
    data: function data() {
        return {
            index: 0,
            item: {},
            verificacion: '',
            cantidad: 0,
            id: 0,
            imageName: '',
            imageUrl: '',
            imageFile: '',
            active: false,
            fotos: [],
            files: [],
            tipo: {
                id: 0,
                nombre: ''
            },
            descripcion: '',
            participantes: 0,

            estadisticas: [],
            estadistica: [],
            number: 0,
            users: [],
            tipos: [],
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            proyecto: {
                id: 0,
                nombre: ''
            },
            empleado: [],
            empleados: [],
            search: '',
            dialog: false,
            error: 0,
            errorMsj: [],
            headers: [{ text: 'Nombre', value: 'tarea', align: 'right' }, { text: 'Fecha Inicio', value: 'fechaInicio', align: 'right' }, { text: 'Fecha Final', value: 'fechaFinal', align: 'right' }, { text: 'Fecha Realizacion', value: 'fechaRealizacion', align: 'right' }, { text: 'Estado', value: 'estado', align: 'center' }],
            tareas: [],

            editedIndex: -1,
            editedItem: {
                id: 0,
                tipo: '',
                fechaInicio: '',
                fechaFinal: '',
                fechaRealizacion: '',
                estado: 0
            },
            defaultItem: {
                id: 0,
                nombre: '',
                fechaInicio: '',
                fechaFinal: '',
                fechaRealizacion: '',
                estado: 0
            }
        };
    },

    computed: _extends({
        formTitle: function formTitle() {
            return this.editedIndex === -1 ? 'Nueva Tarea' : 'Editar Tarea';
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapGetters */])(["seleccion"])),

    watch: {
        dialog: function dialog(val) {
            val || this.close();
        },
        actividad: function actividad(val) {
            this.initialize();
        },

        seleccion: {
            deep: true,
            handler: function handler(val) {
                this.proyecto = val;
                this.initialize();
                // console.log(this.proyecto);
            }
        }
    },

    created: function created() {
        this.initialize();
    },
    mounted: function mounted() {
        this.initialize();
    },

    methods: {
        Reload: function Reload() {
            this.initialize();
        },
        cancelReport: function cancelReport(item) {
            var me = this;
            swal.fire({
                title: 'Quieres eliminar este reporte',
                text: "No podras revertir la eliminacion!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminalo!',
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/Tarea/cancelar/' + item.id).then(function (response) {
                        me.initialize();
                        swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: response.data,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }).catch(function (error) {
                        swal.fire({
                            position: 'top-end',
                            type: 'error',
                            title: error.response.data.error,
                            showConfirmButton: true
                        });
                    });
                }
            });
        },
        getIndex: function getIndex(list, id) {
            return list.findIndex(function (e) {
                return e.id == id;
            });
        },
        deleteFoto: function deleteFoto(item) {
            var index = this.fotos.indexOf(item);
            this.item = item;
            if (index > -1) {
                this.fotos.splice(index, 1);
                this.files.splice(index, 1);
            }
        },
        pickFile: function pickFile() {
            this.$refs.image.click();
        },
        test: function test() {
            this.active = !this.active;
        },
        onFilePicked: function onFilePicked(e) {
            var _this = this;

            var files = e.target.files;
            if (files[0] !== undefined) {
                this.imageName = files[0].name;
                if (this.imageName.lastIndexOf('.') <= 0) {
                    return;
                }
                var fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener('load', function () {
                    _this.imageUrl = fr.result;
                    _this.imageFile = files[0]; // this is an image file that can be sent to server...

                    var id = __WEBPACK_IMPORTED_MODULE_3_uniqid___default.a.time();

                    var foto = new Object();
                    foto.id = id;
                    foto.url = _this.imageUrl;
                    var fil = new Object();
                    fil.id = id;
                    fil.file = _this.imageFile;

                    _this.fotos.push(foto);
                    _this.files.push(fil);

                    _this.imageName = '';
                    _this.imageFile = '';
                    _this.imageUrl = '';
                });
            } else {
                this.imageName = '';
                this.imageFile = '';
                this.imageUrl = '';
            }
        },
        superior: function superior(id) {
            var me = this;
            this.users = [];
            this.empleado.forEach(function (element) {
                if (id == element.id) {
                    element.estado = 1;
                } else {
                    element.estado = 0;
                }
                me.users.push(element);
            });
            this.empleado = this.users;
        },
        validate: function validate() {
            this.error = 0;
            this.errorMsj = [];
            if (!this.editedItem.nombre) this.errorMsj.push('El nombre de la estadistica no puede estar vacio');
            if (this.errorMsj.length) this.error = 1;
            return this.error;
        },
        initialize: function initialize() {
            var _this2 = this;

            this.descripcion = '';
            this.cantidad = '';
            this.estadistica = [];
            var url = '/Tarea/select/usuario/' + this.$store.state.user.id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (response) {
                _this2.tareas = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
            this.getEstadistica();
            this.getUsuario();
        },
        getEstadistica: function getEstadistica(id) {
            var _this3 = this;

            var url = '/Estadistica/select/' + id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (response) {
                _this3.estadisticas = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        getUsuario: function getUsuario() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/User/select').then(function (response) {
                _this4.empleados = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        editItem: function editItem(item) {
            this.index = this.tareas.indexOf(item);
            item.estado = 2;
            this.id = item.id;
            this.getEstadistica(item.id);
            this.verificacion = item.verificacion;
            this.dialog = true;
        },
        close: function close() {
            this.error = 0;
            this.dialog = false;
            this.descripcion = '';
            this.cantidad = '';
            this.files = [];
            this.fotos = [];
            this.estadisticas = [];
            this.estadistica = [];
        },
        save: function save() {
            var _this5 = this;

            var lat = '';
            var lng = '';
            var me = this;
            var archivos = [];
            this.files.forEach(function (element) {
                archivos.push(element.file);
            });

            navigator.geolocation.getCurrentPosition(function (pos) {
                lat = pos.coords.latitude;
                lng = pos.coords.longitude;
                var form = new FormData();
                form.append('id', _this5.id);
                form.append('descripcion', _this5.descripcion);
                form.append('participantes', _this5.cantidad);
                form.append('latitud', lat);
                form.append('longitud', lng);
                for (var i = 0; i < _this5.files.length; i++) {
                    form.append('fotos[]', _this5.files[i].file);
                }
                _this5.estadisticas.forEach(function (element) {
                    var Esta = new Object();
                    Esta.id = element.id.toString();
                    Esta.nombre = element.nombre;
                    Esta.value = element.value;
                    me.estadistica.push(Esta);
                });
                form.append('estadisticas', JSON.stringify(_this5.estadistica));
                var ajuste = { headers: { 'Content-Type': 'multipart/form-data' } };

                __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/Tarea/subir', form, ajuste).then(function (response) {
                    console.log(response.data);
                    var respuesta = void 0;
                    if (response.data.offline == true) respuesta = response.data.data;else respuesta = response.data;
                    swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: respuesta,
                        showConfirmButton: false
                    });
                    console.log(respuesta);
                    me.initialize();
                    me.tareas.splice(me.index, 1, me.item);
                    me.close();
                });
            });
        }
    }
});

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* 
(The MIT License)
Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = process && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){
    var mac = '', networkInterfaces = require('os').networkInterfaces();
    for(interface_key in networkInterfaces){
        const networkInterface = networkInterfaces[interface_key];
        const length = networkInterface.length;
        for(var i = 0; i < length; i++){
            if(networkInterface[i].mac && networkInterface[i].mac != '00:00:00:00:00:00'){
                mac = networkInterface[i].mac; break;
            }
        }
    }
    address = mac ? parseInt(mac.replace(/\:|\D+/gi, '')).toString(36) : '' ;
} 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix){ return (prefix || '') + address + pid + now().toString(36); }
module.exports.process = function(prefix){ return (prefix || '') + pid + now().toString(36); }
module.exports.time    = function(prefix){ return (prefix || '') + now().toString(36); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row user-list" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Tareas Pendientes", "header-tag": "h4" }
          },
          [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        "append-icon": "search",
                        label: "Buscar",
                        "single-line": "",
                        "hide-details": ""
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: {
                          fullscreen: "",
                          "hide-overlay": "",
                          transition: "dialog-bottom-transition"
                        },
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _c(
                          "v-toolbar",
                          { attrs: { dark: "", color: "green darken-1" } },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", dark: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialog = false
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { col: "white" } }, [
                                  _vm._v("clear")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-toolbar-title", [
                              _vm._v(_vm._s(_vm.formTitle))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card",
                          [
                            _c(
                              "v-card-text",
                              [
                                _c(
                                  "v-container",
                                  { attrs: { "grid-list-sm": "", fluid: "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        _c("v-textarea", {
                                          attrs: {
                                            label:
                                              "Agregue observaciones de la actividad (opcional)"
                                          },
                                          model: {
                                            value: _vm.descripcion,
                                            callback: function($$v) {
                                              _vm.descripcion = $$v
                                            },
                                            expression: "descripcion"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        staticClass:
                                          "text-xs-center text-sm-center text-md-center text-lg-center",
                                        attrs: { xs12: "" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Seleccione Imagen",
                                            "prepend-icon": "photo",
                                            clearable: ""
                                          },
                                          on: { click: _vm.pickFile },
                                          model: {
                                            value: _vm.imageName,
                                            callback: function($$v) {
                                              _vm.imageName = $$v
                                            },
                                            expression: "imageName"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("input", {
                                          ref: "image",
                                          staticStyle: { display: "none" },
                                          attrs: {
                                            type: "file",
                                            accept: "image/*"
                                          },
                                          on: { change: _vm.onFilePicked }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-layout",
                                      { attrs: { row: "", wrap: "" } },
                                      _vm._l(_vm.fotos, function(n) {
                                        return _c(
                                          "v-flex",
                                          {
                                            key: n.id,
                                            attrs: { xs2: "", "d-flex": "" }
                                          },
                                          [
                                            _c(
                                              "v-card",
                                              {
                                                staticClass: "d-flex",
                                                attrs: { flat: "", tile: "" }
                                              },
                                              [
                                                _c("v-hover", {
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(ref) {
                                                          var hover = ref.hover
                                                          return _c(
                                                            "v-img",
                                                            {
                                                              staticClass:
                                                                "grey lighten-2",
                                                              attrs: {
                                                                src: n.url,
                                                                "lazy-src":
                                                                  n.url,
                                                                "aspect-ratio":
                                                                  "1"
                                                              },
                                                              scopedSlots: _vm._u(
                                                                [
                                                                  {
                                                                    key:
                                                                      "placeholder",
                                                                    fn: function() {
                                                                      return [
                                                                        _c(
                                                                          "v-layout",
                                                                          {
                                                                            attrs: {
                                                                              "fill-height":
                                                                                "",
                                                                              "align-center":
                                                                                "",
                                                                              "justify-center":
                                                                                "",
                                                                              "ma-0":
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-progress-circular",
                                                                              {
                                                                                attrs: {
                                                                                  indeterminate:
                                                                                    "",
                                                                                  color:
                                                                                    "grey lighten-5"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ]
                                                                    },
                                                                    proxy: true
                                                                  }
                                                                ],
                                                                null,
                                                                true
                                                              )
                                                            },
                                                            [
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-expand-transition",
                                                                [
                                                                  hover
                                                                    ? _c(
                                                                        "v-layout",
                                                                        {
                                                                          attrs: {
                                                                            "fill-height":
                                                                              "",
                                                                            "align-center":
                                                                              "",
                                                                            "justify-center":
                                                                              "",
                                                                            "ma-0":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                fab:
                                                                                  "",
                                                                                dark:
                                                                                  "",
                                                                                small:
                                                                                  "",
                                                                                color:
                                                                                  "red darken-1"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.deleteFoto(
                                                                                    n
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  attrs: {
                                                                                    dark:
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "close"
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _vm._e()
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.estadisticas, function(n) {
                                      return _c(
                                        "v-flex",
                                        { key: n.id, attrs: { xs12: "" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: n.nombre,
                                              type: "number"
                                            },
                                            model: {
                                              value:
                                                _vm.estadisticas[
                                                  _vm.getIndex(
                                                    _vm.estadisticas,
                                                    n.id
                                                  )
                                                ].value,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.estadisticas[
                                                    _vm.getIndex(
                                                      _vm.estadisticas,
                                                      n.id
                                                    )
                                                  ],
                                                  "value",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "estadisticas[getIndex(estadisticas, n.id)].value"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        _vm.verificacion == true
                                          ? _c("v-text-field", {
                                              attrs: {
                                                label: "Total de participantes",
                                                type: "number"
                                              },
                                              model: {
                                                value: _vm.cantidad,
                                                callback: function($$v) {
                                                  _vm.cantidad = $$v
                                                },
                                                expression: "cantidad"
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  2
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.error
                              ? [
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-xs-center" },
                                    [
                                      _vm._l(_vm.errorMsj, function(e) {
                                        return _c("strong", {
                                          key: e,
                                          staticClass:
                                            "red--text text--lighten-1",
                                          domProps: { textContent: _vm._s(e) }
                                        })
                                      }),
                                      _vm._v(" "),
                                      _c("br")
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider")
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "#668c2d", flat: "" },
                                    on: { click: _vm.close }
                                  },
                                  [_vm._v("Cancelar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "#668c2d", flat: "" },
                                    on: { click: _vm.save }
                                  },
                                  [_vm._v("Guardar")]
                                )
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
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "#668c2d", flat: "" },
                    on: { click: _vm.Reload }
                  },
                  [_vm._v("Recargar")]
                ),
                _vm._v(" "),
                _c("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    headers: _vm.headers,
                    items: _vm.tareas,
                    search: _vm.search
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "items",
                      fn: function(props) {
                        return [
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.tarea))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.fechaInicio))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.fechaFinal))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.fechaRealizacion))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-xs-right" },
                            [
                              [
                                _c(
                                  "div",
                                  { staticClass: "text-xs-right" },
                                  [
                                    props.item.estado == 0
                                      ? _c(
                                          "v-chip",
                                          {
                                            attrs: {
                                              color: "amber accent-4",
                                              "text-color": "white"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "En\n                                        Proceso"
                                            )
                                          ]
                                        )
                                      : props.item.estado == 1
                                      ? _c(
                                          "v-chip",
                                          {
                                            attrs: {
                                              color: "green",
                                              "text-color": "white"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Completado"
                                            )
                                          ]
                                        )
                                      : props.item.estado == 2
                                      ? _c(
                                          "v-chip",
                                          {
                                            attrs: {
                                              color: "blue",
                                              "text-color": "white"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        En Proceso de subida"
                                            )
                                          ]
                                        )
                                      : _c(
                                          "v-chip",
                                          {
                                            attrs: {
                                              color: "red",
                                              "text-color": "white"
                                            }
                                          },
                                          [_vm._v("Atrasado")]
                                        )
                                  ],
                                  1
                                )
                              ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          props.item.Permiso == 1 && props.item.estado == 0
                            ? _c(
                                "td",
                                { staticClass: "justify-center" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "mr-2",
                                      attrs: { large: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editItem(props.item)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                cloud_upload\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          props.item.estado == 1 && props.item.estado == 1
                            ? _c(
                                "td",
                                { staticClass: "justify-center" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "mr-2",
                                      attrs: { large: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.cancelReport(props.item)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                delete\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      }
                    },
                    {
                      key: "no-data",
                      fn: function() {
                        return [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mb-2",
                              attrs: { color: "#668c2d", dark: "" },
                              on: { click: _vm.initialize }
                            },
                            [_vm._v("Recargar")]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "no-results",
                      fn: function() {
                        return [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                value: true,
                                color: "error",
                                icon: "warning"
                              }
                            },
                            [
                              _vm._v(
                                '\n                            No hay resultados de "' +
                                  _vm._s(_vm.search) +
                                  '".\n                        '
                              )
                            ]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                })
              ],
              1
            )
          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-2c7b2a9c", module.exports)
  }
}

/***/ })

});