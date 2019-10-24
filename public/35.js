webpackJsonp([35],{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(645)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(647)
/* template */
var __vue_template__ = __webpack_require__(648)
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
Component.options.__file = "resources/components/pages/src/tarea.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1dfcb6c", Component.options)
  } else {
    hotAPI.reload("data-v-b1dfcb6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function l(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function o(t,e,i,n){return t.filter(function(t){return l(n(t,i),e)})}function r(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(i){return i.reduce(function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i},[])}}function u(t,e,i,s,l){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=o(r[i],t,e,l);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=i(2),p=function(t){return t&&t.__esModule?t:{default:t}}(h),d=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}};e.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return s(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var t=this.search||"",e=t.toLowerCase(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):o(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&e.length&&!this.isExistingOption(e)&&i.unshift({isTag:!0,label:t}),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue[0]?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(t,e){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(t){this.internalValue=this.getInternalValue(t)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(t){return null===t||void 0===t?[]:this.multiple?(0,p.default)(t):(0,p.default)([t])},filterAndFlat:function(t,e,i){return d(u(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return d(a(this.groupValues,this.groupLabel),r)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isNotSelected:function(t){return!this.isSelected(t)},getOptionLabel:function(t){if(s(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return s(e)?"":e},select:function(t,e){if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isLabel||t.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.internalValue.push(t):this.internalValue=[t],this.$emit("select",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===t?"undefined":c(t))?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);this.internalValue.splice(i,1),this.$emit("remove",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t.map(n);if(t&&"object"===(void 0===t?"undefined":s(t))){for(var e={},i=Object.keys(t),l=0,o=i.length;l<o;l++){var r=i[l];e[r]=n(t[r])}return e}return t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,i){i(6);var n=i(7)(i(5),i(8),null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=e.pointerMixin=e.multiselectMixin=e.Multiselect=void 0;var s=i(3),l=n(s),o=i(0),r=n(o),a=i(1),u=n(a),c=i(2),h=n(c);e.default=l.default,e.Multiselect=l.default,e.multiselectMixin=r.default,e.pointerMixin=u.default,e.deepClone=h.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),l=n(s),o=i(1),r=n(o);e.default={name:"vue-multiselect",mixins:[l.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and "+t+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{display:"none"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,n){var s,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,l=t.default);var r="function"==typeof l?l.options:l;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var a=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}}),r.computed=a}return{esModule:s,exports:l,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)||!t._k(e.keyCode,"tab",9)?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValue,function(e){return[t._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]:t._e(),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.isOpen?t.search:t.currentOptionLabel},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.pointerBackward()},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46]))return null;e.stopPropagation(),t.removeLastElement()}]}}):t._e(),t._v(" "),t.searchable?t._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:t._s(t.currentOptionLabel)},on:{mousedown:function(e){e.preventDefault(),t.toggle(e)}}})],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:t.optionHighlight(n,e)},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(646);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("766684ea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b1dfcb6c\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b1dfcb6c\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite\n}\n.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:1px 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:8px;white-space:nowrap\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:10px;display:inline-block\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@keyframes a{\n0%{transform:rotate(0)\n}\nto{transform:rotate(2turn)\n}\n}", ""]);

// exports


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(229);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "Tarea",
    components: {
        Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a
    },
    data: function data() {
        return {
            tipo: {
                id: 0,
                nombre: ''
            },
            e1: 0,
            loader: null,
            loading: false,
            sActividad: false,
            sProyecto: false,
            estadisticas: [],
            estadistica: [],
            nameRules: [function (v) {
                return !!v || 'El nombre de la tarea no puede estar vacia';
            }, function (v) {
                return v && v.length <= 239 || 'El nombre de la tarea no puede ser mayor a 240';
            }],
            number: 0,
            users: [],
            tipos: [],
            fechaI: new Date().toISOString().substr(0, 10),
            fechaF: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            tarea: '',
            proyecto: {
                id: 0,
                nombre: ''
            },
            actividad: {
                id: 0,
                nombre: ''
            },
            actividades: [],
            empleado: [],
            empleados: [],
            search: '',
            dialog: false,
            dialog2: false,
            error: 0,
            errorMsj: [],
            headers: [{ text: 'Nombre', value: 'tarea', align: 'right' }, { text: 'Fecha Inicio', value: 'fechaInicio', align: 'right' }, { text: 'Fecha Final', value: 'fechaFinal', align: 'right' }, { text: 'Fecha Realizacion', value: 'fechaRealizacion', align: 'right' }, { text: 'Estado', value: 'estado', align: 'center' }],
            headers2: [{ text: 'Responsables', value: 'nombre', align: 'left' }],
            headersAct: [{ text: 'Actividad', value: 'nombre', align: 'center' }],
            headers3: [{ text: 'Estadistica', value: 'nombre', align: 'left' }, { text: 'Valor', value: 'valor', align: 'left' }],
            headersUsers: [{ text: 'Id', value: 'id', align: 'right' }, { text: 'Nombre', value: 'nombre', align: 'right' }, { text: 'Estado', value: 'estado', align: 'right' }, { text: 'Encargado', value: 'encargado', align: 'right' }],
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
            },
            descripcionShow: '',
            empleadoShow: [],
            estadisticaShow: [],
            fotoShow: [],
            cantidadShow: 0
        };
    },

    computed: _extends({
        formTitle: function formTitle() {
            return this.editedIndex === -1 ? 'Nueva Tarea' : 'Editar Tarea';
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])(["seleccion"])),

    watch: {
        dialog: function dialog(val) {
            val || this.close();
        },
        dialog2: function dialog2(val) {
            val || this.close2();
        },
        actividad: function actividad(val) {
            if (val != null) this.initialize();
        },

        seleccion: {
            deep: true,
            handler: function handler(val) {
                if (val.id === 0) {
                    this.sProyecto = false;
                } else {
                    this.sProyecto = true;
                    this.proyecto = val;
                    this.initialize();
                }
                // console.log(this.proyecto);
            }
        }
    },

    created: function created() {
        this.initialize();
    },
    mounted: function mounted() {
        // console.log(this.proyecto);
        if (this.$store.state.proyecto.id === 0) {
            this.sProyecto = false;
        } else {
            this.sProyecto = true;
            this.proyecto = this.$store.state.proyecto;
            this.initialize();
        }
    },

    methods: {
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
        Siguiente: function Siguiente(item) {
            this.e1 = 2;
            this.sActividad = true;
            this.actividad = item;
        },
        validate: function validate() {
            this.error = 0;
            this.errorMsj = [];
            if (!this.editedItem.nombre) this.errorMsj.push('El nombre de la estadistica no puede estar vacio');
            if (this.errorMsj.length) this.error = 1;
            return this.error;
        },
        initialize: function initialize() {
            var _this = this;

            var url = '/Tarea/' + this.actividad.id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (response) {
                _this.tareas = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
            this.getActividaes();
            this.getTipos();
            this.getEstadistica();
            this.getUsuario();
            this.estadistica = this.estadisticas;
        },
        getActividaes: function getActividaes() {
            var _this2 = this;

            var url = '/Actividad/' + this.proyecto.id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (response) {
                _this2.actividades = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        getEstadistica: function getEstadistica() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/Estadistica').then(function (response) {
                _this3.estadisticas = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        getTipos: function getTipos() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/TipoActividad').then(function (response) {
                _this4.tipos = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        getUsuario: function getUsuario() {
            var _this5 = this;

            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/User/select').then(function (response) {
                _this5.empleados = response.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        editItem: function editItem(item) {
            console.log(item);
            this.editedIndex = this.tareas.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        watchTask: function watchTask(id) {
            var _this6 = this;

            var url = '/Tarea/ver/' + id;
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (response) {
                _this6.descripcionShow = response.data.tarea[0].descripcion;
                _this6.empleadoShow = response.data.empleado;
                _this6.estadisticaShow = response.data.estadistica;
                _this6.fotoShow = response.data.foto;
                _this6.cantidadShow = response.data.tarea[0].participantes;
                _this6.dialog2 = true;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        deleteItem: function deleteItem(item) {
            var me = this;
            swal.fire({
                title: 'Quieres eliminar esta tarea?',
                text: "No podras revertir la eliminacion!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminalo!',
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('/tarea/delete/' + item.id).then(function (response) {
                        me.initialize();
                        console.log(response.data);
                        // swal.fire({
                        //     position: 'top-end',
                        //     type: 'success',
                        //     title: response.data,
                        //     showConfirmButton: false,
                        //     timer: 2500
                        // });
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
        close: function close() {
            var _this7 = this;

            this.error = 0;
            this.dialog = false;
            setTimeout(function () {
                _this7.editedItem = Object.assign({}, _this7.defaultItem);
                _this7.editedIndex = -1;
            }, 300);
        },
        close2: function close2() {
            this.dialog2 = false;
        },
        save: function save() {
            var me = this;
            this.loader = 'loading';
            this.loading = true;
            // if (this.validate()) {
            //     return;
            // }
            if (this.editedIndex > -1) {
                __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                    method: 'put',
                    url: '/Estadistica/editar',
                    data: {
                        id: this.editedItem.id,
                        nombre: this.editedItem.nombre
                    }
                }).then(function (response) {
                    swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 2500
                    });
                    me.initialize();
                    me.close();
                }).catch(function (error) {
                    swal.fire({
                        position: 'top-end',
                        type: 'error',
                        title: error.response.data.error,
                        showConfirmButton: true
                    });
                    me.initialize();
                    me.close();
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                    method: 'post',
                    url: '/Tarea/nuevo',
                    data: {
                        fechaInicio: this.fechaI,
                        fechaFinal: this.fechaF,
                        idActividad: this.actividad.id,
                        tarea: this.tarea,
                        estadisticas: this.estadistica,
                        numero: this.number,
                        usuarios: this.empleado
                    }
                }).then(function (response) {
                    me.loader = null;
                    me.loading = false;
                    swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    me.initialize();
                    me.close();
                }).catch(function (error) {
                    swal.fire({
                        position: 'top-end',
                        type: 'error',
                        title: error.response.data.error,
                        showConfirmButton: true
                    });
                    me.loader = null;
                    me.loading = false;
                    me.initialize();
                    me.close();
                });
            }
        }
    }
});

/***/ }),

/***/ 648:
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
        _vm.sProyecto === true
          ? _c(
              "b-card",
              {
                staticClass: "bg-primary-card",
                attrs: { header: "Tareas", "header-tag": "h4" }
              },
              [
                _c(
                  "v-flex",
                  { attrs: { xs12: "", sm12: "", md12: "" } },
                  [
                    _c(
                      "v-stepper",
                      {
                        model: {
                          value: _vm.e1,
                          callback: function($$v) {
                            _vm.e1 = $$v
                          },
                          expression: "e1"
                        }
                      },
                      [
                        _c(
                          "v-stepper-header",
                          [
                            _c(
                              "v-stepper-step",
                              {
                                attrs: {
                                  complete: _vm.e1 > 1,
                                  step: "1",
                                  color: "#668C2D"
                                }
                              },
                              [_vm._v("Seleccionar actividad")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-stepper-step",
                              {
                                attrs: {
                                  complete: _vm.e1 > 2,
                                  step: "2",
                                  color: "#668C2D"
                                }
                              },
                              [_vm._v("Editar tareas")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-stepper-items",
                          [
                            _c(
                              "v-stepper-content",
                              { attrs: { step: "1" } },
                              [
                                _c(
                                  "v-card",
                                  { staticClass: "mb-5" },
                                  [
                                    _c(
                                      "v-data-table",
                                      {
                                        staticClass: "elevation-1",
                                        attrs: {
                                          headers: _vm.headersAct,
                                          items: _vm.actividades,
                                          "hide-actions": ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "items",
                                              fn: function(props) {
                                                return [
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-xs-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.item.nombre
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "justify-center layout px-0"
                                                    },
                                                    [
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          staticClass:
                                                                            "mb-2",
                                                                          attrs: {
                                                                            icon:
                                                                              "",
                                                                            color:
                                                                              "#7CB342",
                                                                            dark:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.Siguiente(
                                                                                props.item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          [
                                                                            _vm._v(
                                                                              "done"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "Seleccionar"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          882746252
                                        )
                                      },
                                      [
                                        _c("v-progress-linear", {
                                          attrs: {
                                            indeterminate: true,
                                            color: "#668c2d"
                                          }
                                        })
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
                              "v-stepper-content",
                              { attrs: { step: "2" } },
                              [
                                _vm.sActividad === true
                                  ? _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "v-toolbar",
                                          {
                                            attrs: { flat: "", color: "white" }
                                          },
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
                                                  transition:
                                                    "dialog-bottom-transition"
                                                },
                                                model: {
                                                  value: _vm.dialog2,
                                                  callback: function($$v) {
                                                    _vm.dialog2 = $$v
                                                  },
                                                  expression: "dialog2"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-toolbar",
                                                  {
                                                    attrs: {
                                                      dark: "",
                                                      color: "#668c2d"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          icon: "",
                                                          dark: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.dialog2 = false
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              col: "white"
                                                            }
                                                          },
                                                          [_vm._v("clear")]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-toolbar-title", [
                                                      _vm._v(
                                                        "Detalles de la tarea"
                                                      )
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
                                                          {
                                                            attrs: {
                                                              "grid-list-md": ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-layout",
                                                              {
                                                                attrs: {
                                                                  wrap: ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-textarea",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Observaciones de la tarea",
                                                                          disabled:
                                                                            "",
                                                                          readonly:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.descripcionShow,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.descripcionShow = $$v
                                                                          },
                                                                          expression:
                                                                            "descripcionShow"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-card",
                                                                      [
                                                                        _c(
                                                                          "v-card-title",
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "title font-weight-light"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Responsables asignados a esta tarea"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-card-text",
                                                                          {
                                                                            staticClass:
                                                                              "headline font-weight-bold"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-data-table",
                                                                              {
                                                                                staticClass:
                                                                                  "elevation-1",
                                                                                attrs: {
                                                                                  headers:
                                                                                    _vm.headers2,
                                                                                  items:
                                                                                    _vm.empleadoShow,
                                                                                  "hide-actions":
                                                                                    ""
                                                                                },
                                                                                scopedSlots: _vm._u(
                                                                                  [
                                                                                    {
                                                                                      key:
                                                                                        "items",
                                                                                      fn: function(
                                                                                        props
                                                                                      ) {
                                                                                        return [
                                                                                          _c(
                                                                                            "td",
                                                                                            {
                                                                                              staticClass:
                                                                                                "text-xs-left"
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                _vm._s(
                                                                                                  props
                                                                                                    .item
                                                                                                    .nombre
                                                                                                )
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ]
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  null,
                                                                                  false,
                                                                                  142934874
                                                                                )
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-progress-linear",
                                                                                  {
                                                                                    attrs: {
                                                                                      indeterminate: true,
                                                                                      color:
                                                                                        "light-green accent-3"
                                                                                    }
                                                                                  }
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
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-card",
                                                                      [
                                                                        _c(
                                                                          "v-card-title",
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "title font-weight-light"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Estadísticas de esta tarea"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-card-text",
                                                                          {
                                                                            staticClass:
                                                                              "headline font-weight-bold"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-data-table",
                                                                              {
                                                                                staticClass:
                                                                                  "elevation-1",
                                                                                attrs: {
                                                                                  headers:
                                                                                    _vm.headers3,
                                                                                  items:
                                                                                    _vm.estadisticaShow,
                                                                                  "hide-actions":
                                                                                    ""
                                                                                },
                                                                                scopedSlots: _vm._u(
                                                                                  [
                                                                                    {
                                                                                      key:
                                                                                        "items",
                                                                                      fn: function(
                                                                                        props
                                                                                      ) {
                                                                                        return [
                                                                                          _c(
                                                                                            "td",
                                                                                            {
                                                                                              staticClass:
                                                                                                "text-xs-left"
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                _vm._s(
                                                                                                  props
                                                                                                    .item
                                                                                                    .nombre
                                                                                                )
                                                                                              )
                                                                                            ]
                                                                                          ),
                                                                                          _vm._v(
                                                                                            " "
                                                                                          ),
                                                                                          _c(
                                                                                            "td",
                                                                                            {
                                                                                              staticClass:
                                                                                                "text-xs-left"
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                _vm._s(
                                                                                                  props
                                                                                                    .item
                                                                                                    .valor
                                                                                                )
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ]
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  null,
                                                                                  false,
                                                                                  3678897126
                                                                                )
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-progress-linear",
                                                                                  {
                                                                                    attrs: {
                                                                                      indeterminate: true,
                                                                                      color:
                                                                                        "light-green accent-3"
                                                                                    }
                                                                                  }
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
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Total de participantes",
                                                                          type:
                                                                            "number",
                                                                          disabled:
                                                                            "",
                                                                          readonly:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.cantidadShow,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.cantidadShow = $$v
                                                                          },
                                                                          expression:
                                                                            "cantidadShow"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-layout",
                                                                  {
                                                                    attrs: {
                                                                      row: "",
                                                                      wrap: ""
                                                                    }
                                                                  },
                                                                  _vm._l(
                                                                    _vm.fotoShow,
                                                                    function(
                                                                      n
                                                                    ) {
                                                                      return _c(
                                                                        "v-flex",
                                                                        {
                                                                          key:
                                                                            n.url,
                                                                          attrs: {
                                                                            xs2:
                                                                              "",
                                                                            "d-flex":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-card",
                                                                            {
                                                                              staticClass:
                                                                                "d-flex",
                                                                              attrs: {
                                                                                flat:
                                                                                  "",
                                                                                tile:
                                                                                  ""
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "v-hover",
                                                                                {
                                                                                  scopedSlots: _vm._u(
                                                                                    [
                                                                                      {
                                                                                        key:
                                                                                          "default",
                                                                                        fn: function(
                                                                                          ref
                                                                                        ) {
                                                                                          var hover =
                                                                                            ref.hover
                                                                                          return _c(
                                                                                            "v-img",
                                                                                            {
                                                                                              staticClass:
                                                                                                "grey lighten-2",
                                                                                              attrs: {
                                                                                                src:
                                                                                                  n.url,
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
                                                                                              _vm._v(
                                                                                                " "
                                                                                              ),
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
                                                                                                                icon:
                                                                                                                  "",
                                                                                                                dark:
                                                                                                                  "",
                                                                                                                color:
                                                                                                                  "blue darken-1",
                                                                                                                href:
                                                                                                                  n.url,
                                                                                                                target:
                                                                                                                  "_blank"
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
                                                                                                                    "arrow_downward"
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
                                                                                }
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    }
                                                                  ),
                                                                  1
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
                                                      "v-card-actions",
                                                      [
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color:
                                                                "blue darken-1",
                                                              flat: ""
                                                            },
                                                            on: {
                                                              click: _vm.close2
                                                            }
                                                          },
                                                          [_vm._v("Cerrar")]
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
                                              "v-dialog",
                                              {
                                                attrs: {
                                                  fullscreen: "",
                                                  "hide-overlay": "",
                                                  transition:
                                                    "dialog-bottom-transition"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            _vm._g(
                                                              {
                                                                staticClass:
                                                                  "mb-2",
                                                                attrs: {
                                                                  color:
                                                                    "#668c2d",
                                                                  dark: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                "Nueva Tarea"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  304480696
                                                ),
                                                model: {
                                                  value: _vm.dialog,
                                                  callback: function($$v) {
                                                    _vm.dialog = $$v
                                                  },
                                                  expression: "dialog"
                                                }
                                              },
                                              [
                                                _vm._v(" "),
                                                _c(
                                                  "v-toolbar",
                                                  {
                                                    attrs: {
                                                      dark: "",
                                                      color: "#668c2d"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          icon: "",
                                                          dark: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.dialog = false
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              col: "white"
                                                            }
                                                          },
                                                          [_vm._v("clear")]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-toolbar-title", [
                                                      _vm._v(
                                                        _vm._s(_vm.formTitle)
                                                      )
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
                                                          {
                                                            attrs: {
                                                              "grid-list-md": ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-layout",
                                                              {
                                                                attrs: {
                                                                  wrap: ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Nombre de la tarea",
                                                                          maxlength:
                                                                            "240",
                                                                          required:
                                                                            "",
                                                                          rules:
                                                                            _vm.nameRules,
                                                                          counter: 240
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.tarea,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.tarea = $$v
                                                                          },
                                                                          expression:
                                                                            "tarea"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: "",
                                                                      sm12: "",
                                                                      md12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-slider",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "#668c2d",
                                                                          label:
                                                                            "Cantidad de Tareas",
                                                                          min:
                                                                            "1",
                                                                          max:
                                                                            "100",
                                                                          "thumb-label":
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.number,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.number = $$v
                                                                          },
                                                                          expression:
                                                                            "number"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: "",
                                                                      sm12: "",
                                                                      md6: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-menu",
                                                                      {
                                                                        ref:
                                                                          "menu",
                                                                        attrs: {
                                                                          "close-on-content-click": false,
                                                                          "nudge-right": 40,
                                                                          "return-value":
                                                                            _vm.fechaI,
                                                                          lazy:
                                                                            "",
                                                                          transition:
                                                                            "scale-transition",
                                                                          "offset-y":
                                                                            "",
                                                                          "full-width":
                                                                            "",
                                                                          "min-width":
                                                                            "290px"
                                                                        },
                                                                        on: {
                                                                          "update:returnValue": function(
                                                                            $event
                                                                          ) {
                                                                            _vm.fechaI = $event
                                                                          },
                                                                          "update:return-value": function(
                                                                            $event
                                                                          ) {
                                                                            _vm.fechaI = $event
                                                                          }
                                                                        },
                                                                        scopedSlots: _vm._u(
                                                                          [
                                                                            {
                                                                              key:
                                                                                "activator",
                                                                              fn: function(
                                                                                ref
                                                                              ) {
                                                                                var on =
                                                                                  ref.on
                                                                                return [
                                                                                  _c(
                                                                                    "v-text-field",
                                                                                    _vm._g(
                                                                                      {
                                                                                        attrs: {
                                                                                          label:
                                                                                            "Ingrese fecha de inicio",
                                                                                          "prepend-icon":
                                                                                            "event",
                                                                                          readonly:
                                                                                            ""
                                                                                        },
                                                                                        model: {
                                                                                          value:
                                                                                            _vm.fechaI,
                                                                                          callback: function(
                                                                                            $$v
                                                                                          ) {
                                                                                            _vm.fechaI = $$v
                                                                                          },
                                                                                          expression:
                                                                                            "fechaI"
                                                                                        }
                                                                                      },
                                                                                      on
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              }
                                                                            }
                                                                          ],
                                                                          null,
                                                                          false,
                                                                          3923800143
                                                                        ),
                                                                        model: {
                                                                          value:
                                                                            _vm.menu,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.menu = $$v
                                                                          },
                                                                          expression:
                                                                            "menu"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-date-picker",
                                                                          {
                                                                            attrs: {
                                                                              "no-title":
                                                                                "",
                                                                              scrollable:
                                                                                ""
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm.fechaI,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.fechaI = $$v
                                                                              },
                                                                              expression:
                                                                                "fechaI"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-spacer"
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-btn",
                                                                              {
                                                                                attrs: {
                                                                                  flat:
                                                                                    "",
                                                                                  color:
                                                                                    "#668c2d"
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    _vm.menu = false
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Cancelar\n                                                                    "
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-btn",
                                                                              {
                                                                                attrs: {
                                                                                  flat:
                                                                                    "",
                                                                                  color:
                                                                                    "#668c2d"
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.$refs.menu.save(
                                                                                      _vm.fechaI
                                                                                    )
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "\n                                                                        Guardar"
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
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: "",
                                                                      sm12: "",
                                                                      md6: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-menu",
                                                                      {
                                                                        ref:
                                                                          "menu2",
                                                                        attrs: {
                                                                          "close-on-content-click": false,
                                                                          "nudge-right": 40,
                                                                          "return-value":
                                                                            _vm.fechaF,
                                                                          lazy:
                                                                            "",
                                                                          transition:
                                                                            "scale-transition",
                                                                          "offset-y":
                                                                            "",
                                                                          "full-width":
                                                                            "",
                                                                          "min-width":
                                                                            "290px"
                                                                        },
                                                                        on: {
                                                                          "update:returnValue": function(
                                                                            $event
                                                                          ) {
                                                                            _vm.fechaF = $event
                                                                          },
                                                                          "update:return-value": function(
                                                                            $event
                                                                          ) {
                                                                            _vm.fechaF = $event
                                                                          }
                                                                        },
                                                                        scopedSlots: _vm._u(
                                                                          [
                                                                            {
                                                                              key:
                                                                                "activator",
                                                                              fn: function(
                                                                                ref
                                                                              ) {
                                                                                var on =
                                                                                  ref.on
                                                                                return [
                                                                                  _c(
                                                                                    "v-text-field",
                                                                                    _vm._g(
                                                                                      {
                                                                                        attrs: {
                                                                                          label:
                                                                                            "Ingrese fecha de finalización",
                                                                                          "prepend-icon":
                                                                                            "event",
                                                                                          readonly:
                                                                                            ""
                                                                                        },
                                                                                        model: {
                                                                                          value:
                                                                                            _vm.fechaF,
                                                                                          callback: function(
                                                                                            $$v
                                                                                          ) {
                                                                                            _vm.fechaF = $$v
                                                                                          },
                                                                                          expression:
                                                                                            "fechaF"
                                                                                        }
                                                                                      },
                                                                                      on
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              }
                                                                            }
                                                                          ],
                                                                          null,
                                                                          false,
                                                                          268879362
                                                                        ),
                                                                        model: {
                                                                          value:
                                                                            _vm.menu2,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.menu2 = $$v
                                                                          },
                                                                          expression:
                                                                            "menu2"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-date-picker",
                                                                          {
                                                                            attrs: {
                                                                              "no-title":
                                                                                "",
                                                                              scrollable:
                                                                                ""
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm.fechaF,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.fechaF = $$v
                                                                              },
                                                                              expression:
                                                                                "fechaF"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-spacer"
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-btn",
                                                                              {
                                                                                attrs: {
                                                                                  flat:
                                                                                    "",
                                                                                  color:
                                                                                    "#668c2d"
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    _vm.menu2 = false
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Cancelar\n                                                                    "
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-btn",
                                                                              {
                                                                                attrs: {
                                                                                  flat:
                                                                                    "",
                                                                                  color:
                                                                                    "#668c2d"
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.$refs.menu2.save(
                                                                                      _vm.fechaF
                                                                                    )
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "\n                                                                        Guardar"
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
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: "",
                                                                      sm12: "",
                                                                      md12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-subheader",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "black"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Configuracion de Estadisticas"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "multiselect",
                                                                      {
                                                                        attrs: {
                                                                          options:
                                                                            _vm.estadisticas,
                                                                          multiple: true,
                                                                          taggable: false,
                                                                          "close-on-select": false,
                                                                          "clear-on-select": false,
                                                                          "preserve-search": true,
                                                                          placeholder:
                                                                            "Seleccione...",
                                                                          label:
                                                                            "nombre",
                                                                          "track-by":
                                                                            "nombre"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.estadistica,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.estadistica = $$v
                                                                          },
                                                                          expression:
                                                                            "estadistica"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: "",
                                                                      sm12: "",
                                                                      md9: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-subheader",
                                                                      [
                                                                        _vm._v(
                                                                          "Asignacion de tareas"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "multiselect",
                                                                      {
                                                                        attrs: {
                                                                          options:
                                                                            _vm.empleados,
                                                                          multiple: true,
                                                                          taggable: false,
                                                                          "close-on-select": false,
                                                                          "clear-on-select": false,
                                                                          "preserve-search": true,
                                                                          placeholder:
                                                                            "Seleccione...",
                                                                          label:
                                                                            "nombre",
                                                                          "track-by":
                                                                            "nombre"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.empleado,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.empleado = $$v
                                                                          },
                                                                          expression:
                                                                            "empleado"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  {
                                                                    attrs: {
                                                                      xs12: "",
                                                                      sm12: "",
                                                                      md12: "",
                                                                      lg12: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-subheader",
                                                                      [
                                                                        _vm._v(
                                                                          "Responsables Asignados"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-flex",
                                                                  [
                                                                    _c(
                                                                      "v-data-table",
                                                                      {
                                                                        staticClass:
                                                                          "elevation-1",
                                                                        attrs: {
                                                                          headers:
                                                                            _vm.headersUsers,
                                                                          items:
                                                                            _vm.empleado,
                                                                          "hide-actions":
                                                                            ""
                                                                        },
                                                                        scopedSlots: _vm._u(
                                                                          [
                                                                            {
                                                                              key:
                                                                                "items",
                                                                              fn: function(
                                                                                props
                                                                              ) {
                                                                                return [
                                                                                  _c(
                                                                                    "td",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-xs-right"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          props
                                                                                            .item
                                                                                            .id
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "td",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-xs-right"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          props
                                                                                            .item
                                                                                            .nombre
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "td",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-xs-right"
                                                                                    },
                                                                                    [
                                                                                      [
                                                                                        _c(
                                                                                          "div",
                                                                                          {
                                                                                            staticClass:
                                                                                              "text-xs-right"
                                                                                          },
                                                                                          [
                                                                                            props
                                                                                              .item
                                                                                              .estado ==
                                                                                            1
                                                                                              ? _c(
                                                                                                  "v-chip",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      color:
                                                                                                        "green",
                                                                                                      "text-color":
                                                                                                        "white"
                                                                                                    }
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "\n                                                                                    Si"
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                              : _c(
                                                                                                  "v-chip",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      color:
                                                                                                        "red",
                                                                                                      "text-color":
                                                                                                        "white"
                                                                                                    }
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "No\n                                                                                "
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                          ],
                                                                                          1
                                                                                        )
                                                                                      ]
                                                                                    ],
                                                                                    2
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "td",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-xs-right"
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "v-btn",
                                                                                        {
                                                                                          staticClass:
                                                                                            "white--text",
                                                                                          attrs: {
                                                                                            color:
                                                                                              "blue"
                                                                                          },
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.superior(
                                                                                                props
                                                                                                  .item
                                                                                                  .id
                                                                                              )
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            "\n                                                                            Encargado\n                                                                            "
                                                                                          ),
                                                                                          _c(
                                                                                            "v-icon",
                                                                                            {
                                                                                              attrs: {
                                                                                                right:
                                                                                                  "",
                                                                                                dark:
                                                                                                  ""
                                                                                              }
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                "how_to_reg"
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ],
                                                                                        1
                                                                                      )
                                                                                    ],
                                                                                    1
                                                                                  )
                                                                                ]
                                                                              }
                                                                            }
                                                                          ],
                                                                          null,
                                                                          false,
                                                                          3565349664
                                                                        )
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-progress-linear",
                                                                          {
                                                                            attrs: {
                                                                              indeterminate: true,
                                                                              color:
                                                                                "light-green accent-3"
                                                                            }
                                                                          }
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
                                                          ],
                                                          1
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
                                                            {
                                                              staticClass:
                                                                "text-xs-center"
                                                            },
                                                            [
                                                              _vm._l(
                                                                _vm.errorMsj,
                                                                function(e) {
                                                                  return _c(
                                                                    "strong",
                                                                    {
                                                                      key: e,
                                                                      staticClass:
                                                                        "red--text text--lighten-1",
                                                                      domProps: {
                                                                        textContent: _vm._s(
                                                                          e
                                                                        )
                                                                      }
                                                                    }
                                                                  )
                                                                }
                                                              ),
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
                                                            attrs: {
                                                              color: "#668c2d",
                                                              flat: ""
                                                            },
                                                            on: {
                                                              click: _vm.close
                                                            }
                                                          },
                                                          [_vm._v("Cancelar")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color: "#668c2d",
                                                              flat: "",
                                                              loading:
                                                                _vm.loading,
                                                              disabled:
                                                                _vm.loading
                                                            },
                                                            on: {
                                                              click: _vm.save
                                                            }
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
                                        _c("v-data-table", {
                                          staticClass: "elevation-1",
                                          attrs: {
                                            headers: _vm.headers,
                                            items: _vm.tareas,
                                            search: _vm.search
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "items",
                                                fn: function(props) {
                                                  return [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-xs-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item.tarea
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-xs-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item
                                                              .fechaInicio
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-xs-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item
                                                              .fechaFinal
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-xs-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            props.item
                                                              .fechaRealizacion
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-xs-center"
                                                      },
                                                      [
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-xs-center"
                                                            },
                                                            [
                                                              props.item
                                                                .estado == 0
                                                                ? _c(
                                                                    "v-chip",
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "amber accent-4",
                                                                        "text-color":
                                                                          "white"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "En\n                                                        Proceso"
                                                                      )
                                                                    ]
                                                                  )
                                                                : props.item
                                                                    .estado == 1
                                                                ? _c(
                                                                    "v-chip",
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "green",
                                                                        "text-color":
                                                                          "white"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                        Completado"
                                                                      )
                                                                    ]
                                                                  )
                                                                : _c(
                                                                    "v-chip",
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "red",
                                                                        "text-color":
                                                                          "white"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Atrasado"
                                                                      )
                                                                    ]
                                                                  )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      ],
                                                      2
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "justify-center layout px-0"
                                                      },
                                                      [
                                                        props.item.estado == 1
                                                          ? _c(
                                                              "v-icon",
                                                              {
                                                                staticClass:
                                                                  "mr-2",
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.watchTask(
                                                                      props.item
                                                                        .id
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                visibility\n                                            "
                                                                )
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mr-2",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.deleteItem(
                                                                  props.item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                delete\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
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
                                                        attrs: {
                                                          color: "#668c2d",
                                                          dark: ""
                                                        },
                                                        on: {
                                                          click: _vm.initialize
                                                        }
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
                                                          '\n                                            No hay resultados de "' +
                                                            _vm._s(_vm.search) +
                                                            '".\n                                        '
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            false,
                                            454418005
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  : _c(
                                      "v-alert",
                                      {
                                        attrs: {
                                          value: true,
                                          color: "warning",
                                          icon: "priority_high",
                                          outline: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Seleccione una actividad\n                            "
                                        )
                                      ]
                                    ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "#668C2D", dark: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.e1 = 1
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Atrás\n                            "
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
                  ],
                  1
                )
              ],
              1
            )
          : _c(
              "v-alert",
              {
                attrs: {
                  value: true,
                  color: "warning",
                  icon: "priority_high",
                  outline: ""
                }
              },
              [
                _vm._v(
                  "\n            ¡Por favor seleccione proyecto! \n        "
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
    require("vue-hot-reload-api")      .rerender("data-v-b1dfcb6c", module.exports)
  }
}

/***/ })

});