webpackJsonp([74],{

/***/ 2245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2246);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("c62ee9b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d0fce8f0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./blank.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d0fce8f0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./blank.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.search[data-v-d0fce8f0]{\n    border: 1px solid #bdb3b3;\n}\n.contact-profile[data-v-d0fce8f0]{\n    width:50px;\n    height: 50px;\n}\n.box-shadow[data-v-d0fce8f0]{\n    box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.contact-pic[data-v-d0fce8f0]{\n    width: 50px;\n    height: 50px;\n}\n.table td[data-v-d0fce8f0]{\n    padding: 16px;\n    vertical-align: middle;\n}\n.contacts-box .custom-control-inline[data-v-d0fce8f0]{\n    margin-right: 0;\n}\n.custom-control-label[data-v-d0fce8f0]::before{\n    width: 100px;\n    height: 100px;\n}\n.contact-page[data-v-d0fce8f0]{\n    font-size: 14px;\n}\n.options a[data-v-d0fce8f0]:hover,.options2 a[data-v-d0fce8f0]:hover{\n    background-color: #eee;\n}\n.bg-title[data-v-d0fce8f0]{\n    background-color: #f5f5f5;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 2247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vddl__ = __webpack_require__(2248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vddl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vddl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_nestable_nested_list_vue__ = __webpack_require__(2249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_nestable_nested_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugins_nestable_nested_list_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vddl___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'blank',
    data: function data() {
        return {
            selectedItem: null,
            disable: false,
            itemMock: { type: "new element", id: 1 },
            containerMock: {
                "type": "container",
                "id": 4,
                "columns": []
            },
            dropzones: {
                "A": [{
                    "type": "container",
                    "id": 1,
                    "columns": [{
                        "type": "item",
                        "id": "1"
                    }, {
                        "type": "item",
                        "id": "2"
                    }, {
                        "type": "item",
                        "id": "3"
                    }]
                }, {
                    "type": "item",
                    "id": "4"
                }, {
                    "type": "item",
                    "id": "5"
                }, {
                    "type": "item",
                    "id": "6"
                }],
                "B": [{
                    "type": "item",
                    "id": 7
                }, {
                    "type": "item",
                    "id": "8"
                }, {
                    "type": "container",
                    "id": "2",
                    "columns": [{
                        "type": "item",
                        "id": "9"
                    }, {
                        "type": "item",
                        "id": "10"
                    }, {
                        "type": "container",
                        "id": "3",
                        "columns": [{
                            "type": "item",
                            "id": "13"
                        }, {
                            "type": "item",
                            "id": "14"
                        }]
                    }, {
                        "type": "item",
                        "id": "15"
                    }]
                }]
            }
        };
    },

    components: {
        list: __WEBPACK_IMPORTED_MODULE_2__plugins_nestable_nested_list_vue___default.a
    },
    mounted: function mounted() {},
    methods: {
        copied: function copied(item) {
            item.id++;
        },
        inserted: function inserted(data) {
            console.log(data);
        },
        toggleDisable: function toggleDisable() {
            this.disable = !this.disable;
        },
        handleSelected: function handleSelected(item) {
            this.selectedItem = item;
        },
        handleDrop: function handleDrop(data) {
            console.log(':v-list: drop');
            console.log(data);
            var index = data.index,
                list = data.list,
                item = data.item;
            // change the id

            item.id = new Date().getTime();
            list.splice(index, 0, item);
        },
        handleMoved: function handleMoved(item) {
            console.log(':v-draggable: moved');
            console.log(item);
            var index = item.index,
                list = item.list;

            list.splice(index, 1);
        }
    }
});

/***/ }),

/***/ 2248:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vddl.js v0.7.1
 * (c) 2017 Hejx
 * Released under the MIT License.
 * https://github.com/hejianxian/vddl#readme
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DragAndDropList = factory());
}(this, (function () {

var Draggable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vddl-draggable",on:{"dragstart":function($event){$event.stopPropagation();_vm.handleDragstart($event);},"dragend":function($event){$event.stopPropagation();_vm.handleDragend($event);},"click":function($event){$event.stopPropagation();_vm.handleClick($event);},"selectstart":_vm.handleSelected}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'vddl-draggable',
  // css: vddl-dragging, vddl-dragging-source
  props: {
    draggable: [ Object, Array ],
    wrapper: Array,
    index: Number,

    effectAllowed: String,
    type: String,

    // diable
    disableIf: Boolean,

    // callback fn
    dragstart: Function,
    selected: Function,
    dragend: Function,
    moved: Function,
    copied: Function,
    canceled: Function,
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    handleDragstart: function handleDragstart(event) {
      var this$1 = this;

      var draggable = JSON.stringify(this.draggable);
      // Check whether the element is draggable, since dragstart might be triggered on a child.
      if (draggable == 'false' || this.disableIf) { return true; }

      // Serialize the data associated with this element. IE only supports the Text drag type
      event.dataTransfer.setData("Text", draggable);

      // Only allow actions specified in effect-allowed attribute
      event.dataTransfer.effectAllowed = this.effectAllowed || "move";

      // Add CSS classes. IE9 not support 'classList'
      this.$el.className = this.$el.className.trim() + " vddl-dragging";
      setTimeout(function () {
        this$1.$el.className = this$1.$el.className.trim() + " vddl-dragging-source";
      }, 0);

      // Workarounds for stupid browsers, see description below
      this.vddlDropEffectWorkaround.dropEffect = "none";
      this.vddlDragTypeWorkaround.isDragging = true;

      // Save type of item in global state. Usually, this would go into the dataTransfer
      // typename, but we have to use "Text" there to support IE
      this.vddlDragTypeWorkaround.dragType = this.type || undefined;

      // Try setting a proper drag image if triggered on a vddl-handle (won't work in IE).
      if (event._dndHandle && event.dataTransfer.setDragImage) {
        event.dataTransfer.setDragImage(this.$el, event._dndHandleLeft, event._dndHandleTop);
      }

      // Invoke callback
      if (typeof(this.dragstart) === 'function') {
        this.dragstart.call(this, event.target);
      }
    },

    handleDragend: function handleDragend(event) {
      var this$1 = this;

      var dropEffect = this.vddlDropEffectWorkaround.dropEffect;
      switch (dropEffect) {
        case "move":
          if (typeof(this.moved) === 'function') {
            this.$nextTick(function () {
              this$1.moved({
                index: this$1.index,
                list: this$1.wrapper,
                event: event.target,
                draggable: this$1.draggable,
              });
            });
          } else {
            this.$nextTick(function () {
              this$1.wrapper.splice(this$1.index, 1);
            });
          }
          break;
        case "copy":
          if (typeof(this.copied) === 'function') {
            this.copied(this.draggable, event.target);
          }
          break;
        case "none":
          if (typeof(this.canceled) === 'function') {
            this.canceled(event.target);
          }
          break;
      }
      if (typeof(this.dragend) === 'function') {
        this.dragend(dropEffect, event.target);
      }

      // Clean up
      this.$el.className = this.$el.className.replace("vddl-dragging", "").trim();
      setTimeout(function () {
        if (this$1.$el) { this$1.$el.className = this$1.$el.className.replace("vddl-dragging-source", "").trim(); }
      }, 0);
      this.vddlDragTypeWorkaround.isDragging = false;
    },

    handleClick: function handleClick(event) {
      if (!this.selected) { return; }

      if (typeof(this.selected) === 'function') {
        this.selected(this.wrapper[this.index], event.target);
      }
    },

    /**
     * Workaround to make element draggable in IE9
     * http://stackoverflow.com/questions/5500615/internet-explorer-9-drag-and-drop-dnd
     */
    handleSelected: function handleSelected() {
      if (this.dragDrop) { this.dragDrop(); }
      return false;
    },

    // init
    init: function init() {
      var status = true;
      if (this.disableIf) { status = false; }
      this.$el.setAttribute('draggable', status);
    },
  },
  watch: {
    disableIf: function disableIf(val) {
      this.$el.setAttribute('draggable', !val);
    },
  },
  // For Vue 1.0
  ready: function ready() {
    this.init();
  },
  mounted: function mounted() {
    this.init();
  },
};

var List = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vddl-list",on:{"dragenter":function($event){$event.preventDefault();_vm.handleDragenter($event);},"dragover":function($event){$event.stopPropagation();$event.preventDefault();_vm.handleDragover($event);},"drop":function($event){$event.stopPropagation();$event.preventDefault();_vm.handleDrop($event);},"dragleave":_vm.handleDragleave}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'vddl-list',
  // css: placeholder, dragover
  props: {
    list: Array,

    allowedTypes: Array,
    disableIf: Boolean,
    horizontal: Boolean,
    externalSources: Boolean,

    dragover: Function,
    inserted: Function,
    drop: Function,
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    handleDragenter: function handleDragenter(event) {
      if (!this.isDropAllowed(event)) { return true; }
    },

    handleDragover: function handleDragover(event) {
      var this$1 = this;

      if (!this.isDropAllowed(event)) { return true; }

      if (this.placeholderNode.parentNode != this.listNode) {
        this.listNode.appendChild(this.placeholderNode);
      }

      if (event.target !== this.listNode) {
        // Try to find the node direct directly below the list node.
        var listItemNode = event.target;
        while (listItemNode.parentNode !== this.listNode && listItemNode.parentNode) {
          listItemNode = listItemNode.parentNode;
        }
        if (listItemNode.parentNode === this.listNode && listItemNode !== this.placeholderNode) {
          // If the mouse pointer is in the upper half of the child element,
          // we place it before the child element, otherwise below it.
          if (this.isMouseInFirstHalf(event, listItemNode)) {
            this.listNode.insertBefore(this.placeholderNode, listItemNode);
          } else {
            this.listNode.insertBefore(this.placeholderNode, listItemNode.nextSibling);
          }
        }
      } else {
        // This branch is reached when we are dragging directly over the list element.
        // Usually we wouldn't need to do anything here, but the IE does not fire it's
        // events for the child element, only for the list directly. Therefore, we repeat
        // the positioning algorithm for IE here.
        if (this.isMouseInFirstHalf(event, this.placeholderNode, true)) {
          // Check if we should move the placeholder element one spot towards the top.
          // Note that display none elements will have offsetTop and offsetHeight set to
          // zero, therefore we need a special check for them.
          while (this.placeholderNode.previousElementSibling
                && (this.isMouseInFirstHalf(event, this.placeholderNode.previousElementSibling, true)
                || this.placeholderNode.previousElementSibling.offsetHeight === 0)) {
            this$1.listNode.insertBefore(this$1.placeholderNode, this$1.placeholderNode.previousElementSibling);
          }
        } else {
          // Check if we should move the placeholder element one spot towards the bottom
          while (this.placeholderNode.nextElementSibling &&
                !this.isMouseInFirstHalf(event, this.placeholderNode.nextElementSibling, true)) {
            this$1.listNode.insertBefore(this$1.placeholderNode,
                this$1.placeholderNode.nextElementSibling.nextElementSibling);
          }
        }
      }

      // At this point we invoke the callback, which still can disallow the drop.
      // We can't do this earlier because we want to pass the index of the placeholder.
      if (this.dragover && !this.invokeCallback('dragover', event, this.getPlaceholderIndex())) {
        return this.stopDragover(event);
      }

      if (this.$el.className.indexOf("vddl-dragover") < 0) { this.$el.className = this.$el.className.trim() + " vddl-dragover"; }
      return false;
    },
    handleDrop: function handleDrop(event) {
      if (!this.isDropAllowed(event)) { return true; }

      // The default behavior in Firefox is to interpret the dropped element as URL and
      // forward to it. We want to prevent that even if our drop is aborted.

      // Unserialize the data that was serialized in dragstart. According to the HTML5 specs,
      // the "Text" drag type will be converted to text/plain, but IE does not do that.
      var data = event.dataTransfer.getData("Text") || event.dataTransfer.getData("text/plain");
      var transferredObject;
      try {
        transferredObject = JSON.parse(data);
      } catch(e) {
        return this.stopDragover();
      }

      // Invoke the callback, which can transform the transferredObject and even abort the drop.
      var index = this.getPlaceholderIndex();
      if (this.drop) {
        transferredObject = this.invokeCallback('drop', event, index, transferredObject);
        if (!transferredObject) {
          return this.stopDragover();
        }
      }

      // Insert the object into the array, unless drop took care of that (returned true).
      if (transferredObject !== true) {
        this.list.splice(index, 0, transferredObject);
      }
      this.invokeCallback('inserted', event, index, transferredObject);

      // In Chrome on Windows the dropEffect will always be none...
      // We have to determine the actual effect manually from the allowed effects
      if (event.dataTransfer.dropEffect === "none") {
        if (event.dataTransfer.effectAllowed === "copy" ||
            event.dataTransfer.effectAllowed === "move") {
          this.vddlDropEffectWorkaround.dropEffect = event.dataTransfer.effectAllowed;
        } else {
          this.vddlDropEffectWorkaround.dropEffect = event.ctrlKey ? "copy" : "move";
        }
      } else {
        this.vddlDropEffectWorkaround.dropEffect = event.dataTransfer.dropEffect;
      }

      // Clean up
      this.stopDragover();
      return false;
    },
    handleDragleave: function handleDragleave(event) {
      var this$1 = this;

      this.$el.className = this.$el.className.replace("vddl-dragover", "").trim();
      setTimeout(function () {
        if (this$1.$el.className.indexOf("vddl-dragover") < 0) {
          this$1.placeholderNode.parentNode && this$1.placeholderNode.parentNode.removeChild(this$1.placeholderNode);
        }
      }, 100);
    },

    // Checks whether the mouse pointer is in the first half of the given target element.
    isMouseInFirstHalf: function isMouseInFirstHalf(event, targetNode, relativeToParent) {
      var mousePointer = this.horizontal ? (event.offsetX || event.layerX)
                                    : (event.offsetY || event.layerY);
      var targetSize = this.horizontal ? targetNode.offsetWidth : targetNode.offsetHeight;
      var targetPosition = this.horizontal ? targetNode.offsetLeft : targetNode.offsetTop;
      targetPosition = relativeToParent ? targetPosition : 0;
      return mousePointer < targetPosition + targetSize / 2;
    },

    /**
     * Tries to find a child element that has the 'vddl-placeholder' class set. If none was found, a
     * new div element is created.
     */
    getPlaceholderElement: function getPlaceholderElement() {
      var placeholder,
          oldPlaceholder = this.$el.parentNode.querySelectorAll('.vddl-placeholder');
      if (oldPlaceholder.length > 0) {
        placeholder = oldPlaceholder[0];
        return placeholder;
      }
      var newPlaceholder = document.createElement('div');
      newPlaceholder.setAttribute('class', 'vddl-placeholder');
      return newPlaceholder;
    },

    getPlaceholderIndex: function getPlaceholderIndex() {
      return Array.prototype.indexOf.call(this.listNode.children, this.placeholderNode);
    },

    /**
     * Checks various conditions that must be fulfilled for a drop to be allowed
     */
    isDropAllowed: function isDropAllowed(event) {
      // Disallow drop from external source unless it's allowed explicitly.
      if (!this.vddlDragTypeWorkaround.isDragging && !this.externalSources) { return false; }

      // Check mimetype. Usually we would use a custom drag type instead of Text, but IE doesn't
      // support that.
      if (!this.hasTextMimetype(event.dataTransfer.types)) { return false; }

      // Now check the allowed-types against the type of the incoming element. For drops from
      // external sources we don't know the type, so it will need to be checked via drop.
      if (this.allowedTypes && this.vddlDragTypeWorkaround.isDragging) {
        var allowed = this.allowedTypes;
        if (Array.isArray(allowed) && allowed.indexOf(this.vddlDragTypeWorkaround.dragType) === -1) {
          return false;
        }
      }

      // Check whether droping is disabled completely
      if (this.disableIf) { return false; }

      return true;
    },

    /**
     * Small helper function that cleans up if we aborted a drop.
     */
    stopDragover: function stopDragover() {
      this.placeholderNode.parentNode && this.placeholderNode.parentNode.removeChild(this.placeholderNode);
      this.$el.className = this.$el.className.replace("vddl-dragover", "").trim();
      return true;
    },

    /**
     * Invokes a callback with some interesting parameters and returns the callbacks return value.
     */
    invokeCallback: function invokeCallback(expression, event, index, item) {
      var fn = this[expression];
      if (fn) {
        fn({
          event: event,
          index: index,
          item: item || undefined,
          list: this.list,
          external: !this.vddlDragTypeWorkaround.isDragging,
          type: this.vddlDragTypeWorkaround.isDragging ? this.vddlDragTypeWorkaround.dragType : undefined
        });
      }
      return fn ? true : false;
    },

    /**
     * Check if the dataTransfer object contains a drag type that we can handle. In old versions
     * of IE the types collection will not even be there, so we just assume a drop is possible.
     */
    hasTextMimetype: function hasTextMimetype(types) {
      if (!types) { return true; }
        for (var i = 0; i < types.length; i += 1) {
          if (types[i] === "Text" || types[i] === "text/plain") { return true; }
        }

      return false;
    },
    init: function init() {
      this.placeholderNode = this.getPlaceholderElement();
      this.listNode = this.$el;
      this.placeholderNode.parentNode && this.placeholderNode.parentNode.removeChild(this.placeholderNode);
    },
  },
  ready: function ready() {
    this.init();
  },
  mounted: function mounted() {
    this.init();
  },
};

var Handle = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vddl-handle",on:{"dragstart":_vm.handle,"dragend":_vm.handle}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'vddl-handle',
  props: {
    handleLeft: Number,
    handleTop: Number,
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    handle: function handle(event) {
      event._dndHandle = true;
      event._dndHandleLeft = this.handleLeft || 0;
      event._dndHandleTop = this.handleTop || 0;
    },
    init: function init() {
      this.$el.setAttribute('draggable', true);
    },
  },
  ready: function ready() {
    this.init();
  },
  mounted: function mounted() {
    this.init();
  },
};

var Nodrag = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vddl-nodrag",on:{"dragstart":_vm.handleDragstart,"dragend":_vm.handleDragend}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'vddl-nodrag',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    handleDragstart: function handleDragstart(event) {
      if (!event._dndHandle) {
        // If a child element already reacted to dragstart and set a dataTransfer object, we will
        // allow that. For example, this is the case for user selections inside of input elements.
        if (!(event.dataTransfer.types && event.dataTransfer.types.length)) {
          event.preventDefault();
        }
        event.stopPropagation();
      }
    },
    handleDragend: function handleDragend(event) {
      if (!event._dndHandle) {
        event.stopPropagation();
      }
    },
    init: function init() {
      this.$el.setAttribute('draggable', true);
    },
  },
  ready: function ready() {
    this.init();
  },
  mounted: function mounted() {
    this.init();
  },
};

var Placeholder = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vddl-placeholder"},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'vddl-placeholder',
};

var install = function (Vue) {
  /* eslint no-param-reassign: 0 */
  Vue.prototype.vddlDropEffectWorkaround = {};
  Vue.prototype.vddlDragTypeWorkaround = {};

  Vue.component(Draggable.name, Draggable);
  Vue.component(List.name, List);
  Vue.component(Handle.name, Handle);
  Vue.component(Nodrag.name, Nodrag);
  Vue.component(Placeholder.name, Placeholder);
};

/* eslint no-undef:0 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var install$1 = { install: install };

return install$1;

})));


/***/ }),

/***/ 2249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2250)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2252)
/* template */
var __vue_template__ = __webpack_require__(2253)
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
Component.options.__file = "resources/components/plugins/nestable/nested-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1cb2f92", Component.options)
  } else {
    hotAPI.reload("data-v-f1cb2f92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("56099096", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1cb2f92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./nested-list.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1cb2f92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./nested-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 2252:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'list',
  props: ['item', 'list', 'index', 'selected', 'selectedItem', 'disable'],
  methods: {
    selectedEvent: function selectedEvent(item) {
      if (typeof this.selected === 'function') {
        this.selected(item);
      }
    }
  }
});

/***/ }),

/***/ 2253:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vddl-draggable",
    {
      staticClass: "panel__body--item",
      class: { selected: _vm.selectedItem === _vm.item },
      attrs: {
        draggable: _vm.item,
        index: _vm.index,
        "disable-if": _vm.disable,
        selected: _vm.selectedEvent,
        wrapper: _vm.list
      }
    },
    [
      _vm.item.type === "container"
        ? _c(
            "div",
            { staticClass: "card padding" },
            [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", [_vm._v("Container " + _vm._s(_vm.item.id))])
              ]),
              _vm._v(" "),
              _c(
                "vddl-list",
                {
                  staticClass: "card-body",
                  attrs: {
                    list: _vm.item.columns,
                    "disable-if": _vm.disable,
                    "external-sources": true
                  }
                },
                _vm._l(_vm.item.columns, function(col, number) {
                  return _c("list", {
                    key: col.id,
                    staticClass: "p-1 border border-f5 mt-2",
                    attrs: {
                      item: col,
                      list: _vm.item.columns,
                      index: number,
                      selected: _vm.selectedEvent,
                      "selected-item": _vm.selectedItem,
                      disable: _vm.disable
                    }
                  })
                }),
                1
              )
            ],
            1
          )
        : _c("p", [
            _vm._v(
              "\n    " +
                _vm._s(_vm.item.type) +
                " " +
                _vm._s(_vm.item.id) +
                "\n  "
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
    require("vue-hot-reload-api")      .rerender("data-v-f1cb2f92", module.exports)
  }
}

/***/ }),

/***/ 2254:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "demo-content nested" }, [
      _c("div", { staticClass: "v-row" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _vm._l(_vm.dropzones, function(list, zone) {
              return _c("div", { staticClass: "col-4" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h3", [_vm._v("Dropzone " + _vm._s(zone))])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "vddl-list",
                        {
                          staticClass: "panel__body--list ",
                          attrs: {
                            list: list,
                            inserted: _vm.inserted,
                            "effect-allowed": "move",
                            "disable-if": _vm.disable,
                            drop: _vm.handleDrop,
                            "external-sources": true
                          }
                        },
                        _vm._l(list, function(item, index) {
                          return _c("list", {
                            key: item.id,
                            staticClass: "p-1 border border-f5 mt-2",
                            attrs: {
                              item: item,
                              list: list,
                              index: index,
                              moved: _vm.handleMoved,
                              selected: _vm.handleSelected,
                              "selected-item": _vm.selectedItem,
                              disable: _vm.disable
                            }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-4" }, [
              _c("div", { staticClass: "new-elements " }, [
                _c("div", { staticClass: "card panel--info" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "vddl-draggable",
                        {
                          staticClass: "button btn btn-success btn-block",
                          attrs: {
                            draggable: _vm.itemMock,
                            copied: _vm.copied,
                            "effect-allowed": "copy"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    Add Item\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "vddl-draggable",
                        {
                          staticClass: "button btn btn-primary btn-block mt-2",
                          attrs: {
                            draggable: _vm.containerMock,
                            copied: _vm.copied,
                            "effect-allowed": "copy"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    Add Container\n                                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "new-elements disable-element " }, [
                _c("div", { staticClass: "card panel--info" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "button btn btn-danger",
                        on: { click: _vm.toggleDisable }
                      },
                      [
                        _vm._v(
                          "\n                                    Disable: " +
                            _vm._s(_vm.disable) +
                            "\n                                "
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.selectedItem
                ? _c("div", { staticClass: "selected-item" }, [
                    _c("div", { staticClass: "card panel--info" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.selectedItem.type) +
                            " " +
                            _vm._s(_vm.selectedItem.id) +
                            "\n                            "
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "ashcan" }, [
                _c(
                  "div",
                  { staticClass: "card panel--info" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "vddl-list",
                      { staticClass: "card-body", attrs: { list: [] } },
                      [
                        _c("span", {
                          staticClass: "fa fa-trash fa-3x ashcan-logo"
                        })
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v("New Elements")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v("Toggle Disable")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v("Selected")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v("Ashcan")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d0fce8f0", module.exports)
  }
}

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2245)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2247)
/* template */
var __vue_template__ = __webpack_require__(2254)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d0fce8f0"
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
Component.options.__file = "resources/components/pages/blank.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d0fce8f0", Component.options)
  } else {
    hotAPI.reload("data-v-d0fce8f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});