webpackJsonp([174],{

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("eac81e36", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb7d75b2\",\"scoped\":false,\"hasInlineConfig\":true}!./portlet.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb7d75b2\",\"scoped\":false,\"hasInlineConfig\":true}!./portlet.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/***Portlet custom css***/\n.portlet {\n    clear: both;\n    margin-top: 0;\n    margin-bottom: 25px;\n    padding: 0;\n}\n.ui-sortable-handle:not(.notsort),\n.portlet.box:not(.notsort) {\n    cursor: move;\n}\n.portlet > .portlet-body {\n    background-color: #fff;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n.portlet > .portlet-title {\n    padding: 10px 10px 4px 10px;\n    color: #fff;\n    font-size: 16px;\n}\n.portlet-placeholder {\n    border: 1px dotted #ccc;\n    background-color: #dcdcdc;\n    margin: 0 1em 1em 0;\n    height: 130px;\n}\n.sortable {\n    min-height: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("54e1b5b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb7d75b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./draggable_portlets.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb7d75b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./draggable_portlets.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\nbody{font-family:Helvetica,sans-serif\n}\n.playground {\n    display: flex;\n    margin-top: 4rem;\n}\n.color-item {\n    background: #f5f5f5;\n    padding: .5rem;\n    color: #5f5f5f;\n    transition: transform .3s;\n}\n.color-item.dragging {\n    background-color: #fff;\n}\n.color-show {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n}\n.color-box {\n    width: 31%;\n    /*background: #efefef;*/\n    text-align: center;\n    color: #fff;\n    transition: transform .3s;\n}\n@media (min-width: 320px) and (max-width: 425px) {\n.color-show .color-box{\n        width: 100% !important;\n}\n}\n.color-box.dragging {\n    transform: scale(1.1);\n}\n.in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {\n    transition: all .5s;\n}\n.in-out-translate-fade-enter, .in-out-translate-fade-leave-active {\n    opacity: 0;\n}\n.in-out-translate-fade-enter {\n    transform: translate3d(100%, 0, 0);\n}\n.in-out-translate-fade-leave-active {\n    transform: translate3d(-100%, 0, 0);\n}\n", ""]);

// exports


/***/ }),

/***/ 1609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awe_dnd__ = __webpack_require__(1610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awe_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_awe_dnd__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_awe_dnd___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            colors: [{
                text: "#6699cc",
                color_name: "Primary"
            }, {
                text: "#868e96",
                color_name: "Secondary"
            }, {
                text: "#66cc99",
                color_name: "Success"
            }, {
                text: "#66ccff",
                color_name: "Info"
            }, {
                text: "#f0ad4e",
                color_name: "Warning"
            }, {
                text: "#ff6666",
                color_name: "Danger"
            }, {
                text: "#343a40",
                color_name: "Dark"
            }]
        };
    },

    methods: {},
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1610:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Awe-dnd v0.3.0
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueDragging = factory());
}(this, (function () { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragData = function () {
    function DragData() {
        _classCallCheck(this, DragData);

        this.data = {};
    }

    _createClass(DragData, [{
        key: 'new',
        value: function _new(key) {
            if (!this.data[key]) {
                this.data[key] = {
                    className: '',
                    List: [],
                    KEY_MAP: {}
                };
            }
            return this.data[key];
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this.data[key];
        }
    }]);

    return DragData;
}();

var $dragging = {
    listeners: {},
    $on: function $on(event, func) {
        var events = this.listeners[event];
        if (!events) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(func);
    },
    $once: function $once(event, func) {
        var vm = this;
        function on() {
            vm.$off(event, on);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            func.apply(vm, args);
        }
        this.$on(event, on);
    },
    $off: function $off(event, func) {
        var events = this.listeners[event];
        if (!func || !events) {
            this.listeners[event] = [];
            return;
        }
        this.listeners[event] = this.listeners[event].filter(function (i) {
            return i !== func;
        });
    },
    $emit: function $emit(event, context) {
        var events = this.listeners[event];
        if (events && events.length > 0) {
            events.forEach(function (func) {
                func(context);
            });
        }
    }
};
var _ = {
    on: function on(el, type, fn) {
        el.addEventListener(type, fn);
    },
    off: function off(el, type, fn) {
        el.removeEventListener(type, fn);
    },
    addClass: function addClass(el, cls) {
        if (arguments.length < 2) {
            el.classList.add(cls);
        } else {
            for (var i = 1, len = arguments.length; i < len; i++) {
                el.classList.add(arguments[i]);
            }
        }
    },
    removeClass: function removeClass(el, cls) {
        if (arguments.length < 2) {
            el.classList.remove(cls);
        } else {
            for (var i = 1, len = arguments.length; i < len; i++) {
                el.classList.remove(arguments[i]);
            }
        }
    }
};

var vueDragging = function (Vue, options) {
    var isPreVue = Vue.version.split('.')[0] === '1';
    var dragData = new DragData();
    var isSwap = false;
    var Current = null;

    function handleDragStart(e) {
        var el = getBlockEl(e.target);
        var key = el.getAttribute('drag_group');
        var drag_key = el.getAttribute('drag_key');
        var DDD = dragData.new(key);
        var item = DDD.KEY_MAP[drag_key];
        var index = DDD.List.indexOf(item);
        _.addClass(el, 'dragging');

        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', JSON.stringify(item));
        }

        Current = {
            index: index,
            item: item,
            el: el,
            group: key
        };
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    function handleDragEnter(e) {
        var el = void 0;
        if (e.type === 'touchmove') {
            e.stopPropagation();
            e.preventDefault();
            el = getOverElementFromTouch(e);
            el = getBlockEl(el);
        } else {
            el = getBlockEl(e.target);
        }

        if (!el || !Current) return;

        var key = el.getAttribute('drag_group');
        if (key !== Current.group || !Current.el || !Current.item || el === Current.el) return;
        var drag_key = el.getAttribute('drag_key');
        var DDD = dragData.new(key);
        var item = DDD.KEY_MAP[drag_key];

        if (item === Current.item) return;

        var indexTo = DDD.List.indexOf(item);
        var indexFrom = DDD.List.indexOf(Current.item);

        swapArrayElements(DDD.List, indexFrom, indexTo);
        Current.index = indexTo;
        isSwap = true;
        $dragging.$emit('dragged', {
            draged: Current.item,
            to: item,
            value: DDD.value,
            group: key
        });
    }

    function handleDragLeave(e) {
        _.removeClass(getBlockEl(e.target), 'drag-over', 'drag-enter');
    }

    function handleDrag(e) {}

    function handleDragEnd(e) {
        var el = getBlockEl(e.target);
        _.removeClass(el, 'dragging', 'drag-over', 'drag-enter');
        Current = null;
        // if (isSwap) {
        isSwap = false;
        var group = el.getAttribute('drag_group');
        $dragging.$emit('dragend', { group: group });
        // }
    }

    function handleDrop(e) {
        e.preventDefault();
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        return false;
    }

    function getBlockEl(el) {
        if (!el) return;
        while (el.parentNode) {
            if (el.getAttribute && el.getAttribute('drag_block')) {
                return el;
                break;
            } else {
                el = el.parentNode;
            }
        }
    }

    function swapArrayElements(items, indexFrom, indexTo) {
        var item = items[indexTo];
        if (isPreVue) {
            items.$set(indexTo, items[indexFrom]);
            items.$set(indexFrom, item);
        } else {
            Vue.set(items, indexTo, items[indexFrom]);
            Vue.set(items, indexFrom, item);
        }
        return items;
    }

    function getOverElementFromTouch(e) {
        var touch = e.touches[0];
        var el = document.elementFromPoint(touch.clientX, touch.clientY);
        return el;
    }

    function addDragItem(el, binding, vnode) {
        var item = binding.value.item;
        var list = binding.value.list;
        var DDD = dragData.new(binding.value.group);

        var drag_key = isPreVue ? binding.value.key : vnode.key;
        DDD.value = binding.value;
        DDD.className = binding.value.className;
        DDD.KEY_MAP[drag_key] = item;
        if (list && DDD.List !== list) {
            DDD.List = list;
        }
        el.setAttribute('draggable', 'true');
        el.setAttribute('drag_group', binding.value.group);
        el.setAttribute('drag_block', binding.value.group);
        el.setAttribute('drag_key', drag_key);

        _.on(el, 'dragstart', handleDragStart);
        _.on(el, 'dragenter', handleDragEnter);
        _.on(el, 'dragover', handleDragOver);
        _.on(el, 'drag', handleDrag);
        _.on(el, 'dragleave', handleDragLeave);
        _.on(el, 'dragend', handleDragEnd);
        _.on(el, 'drop', handleDrop);

        _.on(el, 'touchstart', handleDragStart);
        _.on(el, 'touchmove', handleDragEnter);
        _.on(el, 'touchend', handleDragEnd);
    }

    function removeDragItem(el, binding, vnode) {
        var DDD = dragData.new(binding.value.group);
        var drag_key = isPreVue ? binding.value.key : vnode.key;
        DDD.KEY_MAP[drag_key] = undefined;
        _.off(el, 'dragstart', handleDragStart);
        _.off(el, 'dragenter', handleDragEnter);
        _.off(el, 'dragover', handleDragOver);
        _.off(el, 'drag', handleDrag);
        _.off(el, 'dragleave', handleDragLeave);
        _.off(el, 'dragend', handleDragEnd);
        _.off(el, 'drop', handleDrop);

        _.off(el, 'touchstart', handleDragStart);
        _.off(el, 'touchmove', handleDragEnter);
        _.off(el, 'touchend', handleDragEnd);
    }

    Vue.prototype.$dragging = $dragging;
    if (!isPreVue) {
        Vue.directive('dragging', {
            bind: addDragItem,
            update: function update(el, binding, vnode) {
                var DDD = dragData.new(binding.value.group);
                var item = binding.value.item;
                var list = binding.value.list;

                var drag_key = vnode.key;
                var old_item = DDD.KEY_MAP[drag_key];
                if (item && old_item !== item) {
                    DDD.KEY_MAP[drag_key] = item;
                }
                if (list && DDD.List !== list) {
                    DDD.List = list;
                }
            },

            unbind: removeDragItem
        });
    } else {
        Vue.directive('dragging', {
            update: function update(newValue, oldValue) {
                addDragItem(this.el, {
                    modifiers: this.modifiers,
                    arg: this.arg,
                    value: newValue,
                    oldValue: oldValue
                });
            },
            unbind: function unbind(newValue, oldValue) {
                removeDragItem(this.el, {
                    modifiers: this.modifiers,
                    arg: this.arg,
                    value: newValue ? newValue : { group: this.el.getAttribute('drag_group') },
                    oldValue: oldValue
                });
            }
        });
    }
};

return vueDragging;

})));


/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "color-show" },
      _vm._l(_vm.colors, function(color) {
        return _c(
          "div",
          {
            directives: [
              {
                name: "dragging",
                rawName: "v-dragging",
                value: { list: _vm.colors, item: color, group: "color" },
                expression: "{ list: colors, item: color, group: 'color' }"
              }
            ],
            key: color.text,
            staticClass: "color-box card m-2"
          },
          [
            _c(
              "div",
              {
                staticClass: "card-header ",
                style: { "background-color": color.text }
              },
              [
                _c("h3", { staticClass: "card-title text-light" }, [
                  _c("i", { staticClass: "ti-menu" }),
                  _vm._v(" " + _vm._s(color.color_name))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body text-dark" }, [
              _vm._v(
                "\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam cum cupiditate eius exercitationem harum hic laudantium molestiae nihil, officia, possimus praesentium quisquam quo recusandae rem unde voluptate voluptatem.\n            "
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bb7d75b2", module.exports)
  }
}

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1605)
  __webpack_require__(1607)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1609)
/* template */
var __vue_template__ = __webpack_require__(1611)
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
Component.options.__file = "resources/components/pages/draggable_portlets.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb7d75b2", Component.options)
  } else {
    hotAPI.reload("data-v-bb7d75b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});