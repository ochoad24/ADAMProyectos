webpackJsonp([29],{

/***/ 2165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("2b1661a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b51e472\",\"scoped\":false,\"hasInlineConfig\":true}!./jqvmap.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b51e472\",\"scoped\":false,\"hasInlineConfig\":true}!./jqvmap.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*!\n * jQVMap Version 1.0 \n *\n * http://jqvmap.com\n *\n * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>\n * Licensed under the MIT license.\n *\n * Fork Me @ https://github.com/manifestinteractive/jqvmap\n */\n.jqvmap-label\n{\n\tposition: absolute;\n\tdisplay: none;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n\tbackground: #292929;\n\tcolor: white;\n\tfont-family: sans-serif, Verdana;\n\tfont-size: smaller;\n\tpadding: 3px;\n}\n.jqvmap-zoomin, .jqvmap-zoomout\n{\n\tposition: absolute;\n\tleft: 10px;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n\tbackground: #000000;\n\tpadding: 3px;\n\tcolor: white;\n\twidth: 10px;\n\theight: 10px;\n\tcursor: pointer;\n\tline-height: 10px;\n\ttext-align: center;\n}\n.jqvmap-zoomin\n{\n\ttop: 10px;\n}\n.jqvmap-zoomout\n{\n\ttop: 30px;\n}\n.jqvmap-region\n{\n  cursor: pointer;\n}\n.jqvmap-ajax_response\n{\n  width: 100%;\n  height: 500px;\n}", ""]);

// exports


/***/ }),

/***/ 2167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("06c1a3b9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b51e472\",\"scoped\":false,\"hasInlineConfig\":true}!./custom_map.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b51e472\",\"scoped\":false,\"hasInlineConfig\":true}!./custom_map.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.jqvmap-zoomin,\n.jqvmap-zoomout {\n    box-sizing  : content-box;\n    padding-top : 5px;\n}\n.vmapsworld svg{\n    height: 500px !important;\n}", ""]);

// exports


/***/ }),

/***/ 2169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("92b3ad6c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b51e472\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./vector_maps.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b51e472\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./vector_maps.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.map_size{\n    min-height:350px;\n}\n", ""]);

// exports


/***/ }),

/***/ 2171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqvmap_jqvmap_jquery_vmap_min_js__ = __webpack_require__(2172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqvmap_jqvmap_jquery_vmap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jqvmap_jqvmap_jquery_vmap_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqvmap_jqvmap_maps_jquery_vmap_world_js__ = __webpack_require__(2173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqvmap_jqvmap_maps_jquery_vmap_world_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jqvmap_jqvmap_maps_jquery_vmap_world_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqvmap_jqvmap_maps_jquery_vmap_europe_js__ = __webpack_require__(2174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqvmap_jqvmap_maps_jquery_vmap_europe_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jqvmap_jqvmap_maps_jquery_vmap_europe_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqvmap_jqvmap_maps_jquery_vmap_germany_js__ = __webpack_require__(2175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqvmap_jqvmap_maps_jquery_vmap_germany_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jqvmap_jqvmap_maps_jquery_vmap_germany_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqvmap_jqvmap_maps_jquery_vmap_russia_js__ = __webpack_require__(2176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqvmap_jqvmap_maps_jquery_vmap_russia_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jqvmap_jqvmap_maps_jquery_vmap_russia_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqvmap_jqvmap_maps_continents_jquery_vmap_asia_js__ = __webpack_require__(2177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqvmap_jqvmap_maps_continents_jquery_vmap_asia_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jqvmap_jqvmap_maps_continents_jquery_vmap_asia_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqvmap_jqvmap_maps_continents_jquery_vmap_north_america_js__ = __webpack_require__(2178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqvmap_jqvmap_maps_continents_jquery_vmap_north_america_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jqvmap_jqvmap_maps_continents_jquery_vmap_north_america_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var sample_data = {
    "af": "16.63",
    "al": "11.58",
    "dz": "158.97",
    "ao": "85.81",
    "ag": "1.1",
    "ar": "351.02",
    "am": "8.83",
    "au": "1219.72",
    "at": "366.26",
    "az": "52.17",
    "bs": "7.54",
    "bh": "21.73",
    "bd": "105.4",
    "bb": "3.96",
    "by": "52.89",
    "be": "461.33",
    "bz": "1.43",
    "bj": "6.49",
    "bt": "1.4",
    "bo": "19.18",
    "ba": "16.2",
    "bw": "12.5",
    "br": "2023.53",
    "bn": "11.96",
    "bg": "44.84",
    "bf": "8.67",
    "bi": "1.47",
    "kh": "11.36",
    "cm": "21.88",
    "ca": "1563.66",
    "cv": "1.57",
    "cf": "2.11",
    "td": "7.59",
    "cl": "199.18",
    "cn": "5745.13",
    "co": "283.11",
    "km": "0.56",
    "cd": "12.6",
    "cg": "11.88",
    "cr": "35.02",
    "ci": "22.38",
    "hr": "59.92",
    "cy": "22.75",
    "cz": "195.23",
    "dk": "304.56",
    "dj": "1.14",
    "dm": "0.38",
    "do": "50.87",
    "ec": "61.49",
    "eg": "216.83",
    "sv": "21.8",
    "gq": "14.55",
    "er": "2.25",
    "ee": "19.22",
    "et": "30.94",
    "fj": "3.15",
    "fi": "231.98",
    "fr": "2555.44",
    "ga": "12.56",
    "gm": "1.04",
    "ge": "11.23",
    "de": "3305.9",
    "gh": "18.06",
    "gr": "305.01",
    "gd": "0.65",
    "gt": "40.77",
    "gn": "4.34",
    "gw": "0.83",
    "gy": "2.2",
    "ht": "6.5",
    "hn": "15.34",
    "hk": "226.49",
    "hu": "132.28",
    "is": "12.77",
    "in": "1430.02",
    "id": "695.06",
    "ir": "337.9",
    "iq": "84.14",
    "ie": "204.14",
    "il": "201.25",
    "it": "2036.69",
    "jm": "13.74",
    "jp": "5390.9",
    "jo": "27.13",
    "kz": "129.76",
    "ke": "32.42",
    "ki": "0.15",
    "kr": "986.26",
    "undefined": "5.73",
    "kw": "117.32",
    "kg": "4.44",
    "la": "6.34",
    "lv": "23.39",
    "lb": "39.15",
    "ls": "1.8",
    "lr": "0.98",
    "ly": "77.91",
    "lt": "35.73",
    "lu": "52.43",
    "mk": "9.58",
    "mg": "8.33",
    "mw": "5.04",
    "my": "218.95",
    "mv": "1.43",
    "ml": "9.08",
    "mt": "7.8",
    "mr": "3.49",
    "mu": "9.43",
    "mx": "1004.04",
    "md": "5.36",
    "mn": "5.81",
    "me": "3.88",
    "ma": "91.7",
    "mz": "10.21",
    "mm": "35.65",
    "na": "11.45",
    "np": "15.11",
    "nl": "770.31",
    "nz": "138",
    "ni": "6.38",
    "ne": "5.6",
    "ng": "206.66",
    "no": "413.51",
    "om": "53.78",
    "pk": "174.79",
    "pa": "27.2",
    "pg": "8.81",
    "py": "17.17",
    "pe": "153.55",
    "ph": "189.06",
    "pl": "438.88",
    "pt": "223.7",
    "qa": "126.52",
    "ro": "158.39",
    "ru": "1476.91",
    "rw": "5.69",
    "ws": "0.55",
    "st": "0.19",
    "sa": "434.44",
    "sn": "12.66",
    "rs": "38.92",
    "sc": "0.92",
    "sl": "1.9",
    "sg": "217.38",
    "sk": "86.26",
    "si": "46.44",
    "sb": "0.67",
    "za": "354.41",
    "es": "1374.78",
    "lk": "48.24",
    "kn": "0.56",
    "lc": "1",
    "vc": "0.58",
    "sd": "65.93",
    "sr": "3.3",
    "sz": "3.17",
    "se": "444.59",
    "ch": "522.44",
    "sy": "59.63",
    "tw": "426.98",
    "tj": "5.58",
    "tz": "22.43",
    "th": "312.61",
    "tl": "0.62",
    "tg": "3.07",
    "to": "0.3",
    "tt": "21.2",
    "tn": "43.86",
    "tr": "729.05",
    "tm": 0,
    "ug": "17.12",
    "ua": "136.56",
    "ae": "239.65",
    "gb": "2258.57",
    "us": "14624.18",
    "uy": "40.71",
    "uz": "37.72",
    "vu": "0.72",
    "ve": "285.21",
    "vn": "101.99",
    "ye": "30.02",
    "zm": "15.69",
    "zw": "5.57"
};
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "vector_maps",
    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__card_card_vue___default.a
    },
    mounted: function mounted() {
        'use strict';

        $(document).ready(function () {
            $('#vmapworld').vectorMap({
                map: 'world_en',
                backgroundColor: 'rgba(204,204,204,0.4)',
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#22bc9d', '#1baa7d'],
                normalizeFunction: 'polynomial'
            });
            $('#vmaprussia').vectorMap({
                map: 'russia_en',
                backgroundColor: 'rgba(204,204,204,0.4)',
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#428bca', '#3071a9'],
                normalizeFunction: 'polynomial'
            });
            $('#vmapgermany').vectorMap({
                map: 'germany_en',
                backgroundColor: 'rgba(204,204,204,0.4)',
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#fb8678', '#fa5a46'],
                normalizeFunction: 'polynomial'
            });
            $('#vmapeurope').vectorMap({
                map: 'europe_en',
                backgroundColor: 'rgba(204,204,204,0.4)',
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#ffb65f', '#ff9f2c'],
                normalizeFunction: 'polynomial'
            });
            $('#vmapnamerica').vectorMap({
                map: 'north-america_en',
                backgroundColor: 'rgba(204,204,204,0.4)',
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#4fc1e9', '#22b1e3'],
                normalizeFunction: 'polynomial'
            });
            $('#vmapasian').vectorMap({
                map: 'asia_en',
                backgroundColor: 'rgba(204,204,204,0.4)',
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#428bca', '#3071a9'],
                normalizeFunction: 'polynomial'
            });
            $('.map_size').closest('.card-body').on('resize', function () {
                $(window).trigger('resize');
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(528)))

/***/ }),

/***/ 2172:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQVMap Version 1.0 
 *
 * http://jqvmap.com
 *
 * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
 * Copyright 2011-2012, Kirill Lebedev
 * Licensed under the MIT license.
 *
 * Fork Me @ https://github.com/manifestinteractive/jqvmap
 */
(function($){var apiParams={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegion:1};var apiEvents={onLabelShow:'labelShow',onRegionOver:'regionMouseOver',onRegionOut:'regionMouseOut',onRegionClick:'regionClick'};$.fn.vectorMap=function(options){var defaultParams={map:'world_en',backgroundColor:'#a5bfdd',color:'#f4f3f0',hoverColor:'#c9dfaf',selectedColor:'#c9dfaf',scaleColors:['#b6d6ff','#005ace'],normalizeFunction:'linear',enableZoom:true,showTooltip:true,borderColor:'#818181',borderWidth:1,borderOpacity:0.25,selectedRegion:null},map;if(options==='addMap'){WorldMap.maps[arguments[1]]=arguments[2]}else if(options==='set'&&apiParams[arguments[1]]){this.data('mapObject')['set'+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(this.data('mapObject'),Array.prototype.slice.call(arguments,2))}else{$.extend(defaultParams,options);defaultParams.container=this;this.css({position:'relative',overflow:'hidden'});map=new WorldMap(defaultParams);this.data('mapObject',map);for(var e in apiEvents){if(defaultParams[e]){this.bind(apiEvents[e]+'.jqvmap',defaultParams[e])}}}};var VectorCanvas=function(width,height,params){this.mode=window.SVGAngle?'svg':'vml';this.params=params;if(this.mode=='svg'){this.createSvgNode=function(nodeName){return document.createElementNS(this.svgns,nodeName)}}else{try{if(!document.namespaces.rvml){document.namespaces.add("rvml","urn:schemas-microsoft-com:vml")}this.createVmlNode=function(tagName){return document.createElement('<rvml:'+tagName+' class="rvml">')}}catch(e){this.createVmlNode=function(tagName){return document.createElement('<'+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}if(this.mode=='svg'){this.canvas=this.createSvgNode('svg')}else{this.canvas=this.createVmlNode('group');this.canvas.style.position='absolute'}this.setSize(width,height)};VectorCanvas.prototype={svgns:"http://www.w3.org/2000/svg",mode:'svg',width:0,height:0,canvas:null,setSize:function(width,height){if(this.mode=='svg'){this.canvas.setAttribute('width',width);this.canvas.setAttribute('height',height)}else{this.canvas.style.width=width+"px";this.canvas.style.height=height+"px";this.canvas.coordsize=width+' '+height;this.canvas.coordorigin="0 0";if(this.rootGroup){var pathes=this.rootGroup.getElementsByTagName('shape');for(var i=0,l=pathes.length;i<l;i++){pathes[i].coordsize=width+' '+height;pathes[i].style.width=width+'px';pathes[i].style.height=height+'px'}this.rootGroup.coordsize=width+' '+height;this.rootGroup.style.width=width+'px';this.rootGroup.style.height=height+'px'}}this.width=width;this.height=height},createPath:function(config){var node;if(this.mode=='svg'){node=this.createSvgNode('path');node.setAttribute('d',config.path);if(this.params.borderColor!==null){node.setAttribute('stroke',this.params.borderColor)}if(this.params.borderWidth>0){node.setAttribute('stroke-width',this.params.borderWidth);node.setAttribute('stroke-linecap','round');node.setAttribute('stroke-linejoin','round')}if(this.params.borderOpacity>0){node.setAttribute('stroke-opacity',this.params.borderOpacity)}node.setFill=function(color){this.setAttribute("fill",color);if(this.getAttribute("original")===null){this.setAttribute("original",color)}};node.getFill=function(color){return this.getAttribute("fill")};node.getOriginalFill=function(){return this.getAttribute("original")};node.setOpacity=function(opacity){this.setAttribute('fill-opacity',opacity)}}else{node=this.createVmlNode('shape');node.coordorigin="0 0";node.coordsize=this.width+' '+this.height;node.style.width=this.width+'px';node.style.height=this.height+'px';node.fillcolor=WorldMap.defaultFillColor;node.stroked=false;node.path=VectorCanvas.pathSvgToVml(config.path);var scale=this.createVmlNode('skew');scale.on=true;scale.matrix='0.01,0,0,0.01,0,0';scale.offset='0,0';node.appendChild(scale);var fill=this.createVmlNode('fill');node.appendChild(fill);node.setFill=function(color){this.getElementsByTagName('fill')[0].color=color};node.getFill=function(color){return this.getElementsByTagName('fill')[0].color};node.setOpacity=function(opacity){this.getElementsByTagName('fill')[0].opacity=parseInt(opacity*100,10)+'%'}}return node},createGroup:function(isRoot){var node;if(this.mode=='svg'){node=this.createSvgNode('g')}else{node=this.createVmlNode('group');node.style.width=this.width+'px';node.style.height=this.height+'px';node.style.left='0px';node.style.top='0px';node.coordorigin="0 0";node.coordsize=this.width+' '+this.height}if(isRoot){this.rootGroup=node}return node},applyTransformParams:function(scale,transX,transY){if(this.mode=='svg'){this.rootGroup.setAttribute('transform','scale('+scale+') translate('+transX+', '+transY+')')}else{this.rootGroup.coordorigin=(this.width-transX)+','+(this.height-transY);this.rootGroup.coordsize=this.width/scale+','+this.height/scale}}};VectorCanvas.pathSvgToVml=function(path){var result='';var cx=0,cy=0,ctrlx,ctrly;return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(segment,letter,coords,index){coords=coords.replace(/(\d)-/g,'$1,-').replace(/\s+/g,',').split(',');if(!coords[0]){coords.shift()}for(var i=0,l=coords.length;i<l;i++){coords[i]=Math.round(100*coords[i])}switch(letter){case'm':cx+=coords[0];cy+=coords[1];return't'+coords.join(',');break;case'M':cx=coords[0];cy=coords[1];return'm'+coords.join(',');break;case'l':cx+=coords[0];cy+=coords[1];return'r'+coords.join(',');break;case'L':cx=coords[0];cy=coords[1];return'l'+coords.join(',');break;case'h':cx+=coords[0];return'r'+coords[0]+',0';break;case'H':cx=coords[0];return'l'+cx+','+cy;break;case'v':cy+=coords[0];return'r0,'+coords[0];break;case'V':cy=coords[0];return'l'+cx+','+cy;break;case'c':ctrlx=cx+coords[coords.length-4];ctrly=cy+coords[coords.length-3];cx+=coords[coords.length-2];cy+=coords[coords.length-1];return'v'+coords.join(',');break;case'C':ctrlx=coords[coords.length-4];ctrly=coords[coords.length-3];cx=coords[coords.length-2];cy=coords[coords.length-1];return'c'+coords.join(',');break;case's':coords.unshift(cy-ctrly);coords.unshift(cx-ctrlx);ctrlx=cx+coords[coords.length-4];ctrly=cy+coords[coords.length-3];cx+=coords[coords.length-2];cy+=coords[coords.length-1];return'v'+coords.join(',');break;case'S':coords.unshift(cy+cy-ctrly);coords.unshift(cx+cx-ctrlx);ctrlx=coords[coords.length-4];ctrly=coords[coords.length-3];cx=coords[coords.length-2];cy=coords[coords.length-1];return'c'+coords.join(',');break;default:return false;break}return''}).replace(/z/g,'')};var WorldMap=function(params){params=params||{};var map=this;var mapData=WorldMap.maps[params.map];this.container=params.container;this.defaultWidth=mapData.width;this.defaultHeight=mapData.height;this.color=params.color;this.hoverColor=params.hoverColor;this.setBackgroundColor(params.backgroundColor);this.width=params.container.width();this.height=params.container.height();this.resize();jQuery(window).resize(function(){map.width=params.container.width();map.height=params.container.height();map.resize();map.canvas.setSize(map.width,map.height);map.applyTransform()});this.canvas=new VectorCanvas(this.width,this.height,params);params.container.append(this.canvas.canvas);this.makeDraggable();this.rootGroup=this.canvas.createGroup(true);this.index=WorldMap.mapIndex;this.label=jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body'));if(params.enableZoom){jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container)}map.countries=[];for(var key in mapData.pathes){var path=this.canvas.createPath({path:mapData.pathes[key].path});path.setFill(this.color);path.id='jqvmap'+map.index+'_'+key;map.countries[key]=path;jQuery(this.rootGroup).append(path);path.setAttribute('class','jqvmap-region');if(params.selectedRegion!==null){if(key.toLowerCase()==params.selectedRegion.toLowerCase()){path.setFill(params.selectedColor)}}}jQuery(params.container).delegate(this.canvas.mode=='svg'?'path':'shape','mouseover mouseout',function(e){var path=e.target,code=e.target.id.split('_').pop(),labelShowEvent=$.Event('labelShow.jqvmap'),regionMouseOverEvent=$.Event('regionMouseOver.jqvmap');if(e.type=='mouseover'){jQuery(params.container).trigger(regionMouseOverEvent,[code,mapData.pathes[code].name]);if(!regionMouseOverEvent.isDefaultPrevented()){if(params.hoverOpacity){path.setOpacity(params.hoverOpacity)}else if(params.hoverColor){path.currentFillColor=path.getFill()+'';path.setFill(params.hoverColor)}}if(params.showTooltip){map.label.text(mapData.pathes[code].name);jQuery(params.container).trigger(labelShowEvent,[map.label,code]);if(!labelShowEvent.isDefaultPrevented()){map.label.show();map.labelWidth=map.label.width();map.labelHeight=map.label.height()}}}else{path.setOpacity(1);if(path.currentFillColor){path.setFill(path.currentFillColor)}map.label.hide();jQuery(params.container).trigger('regionMouseOut.jqvmap',[code,mapData.pathes[code].name])}});jQuery(params.container).delegate(this.canvas.mode=='svg'?'path':'shape','click',function(e){for(var key in mapData.pathes){map.countries[key].currentFillColor=map.countries[key].getOriginalFill();map.countries[key].setFill(map.countries[key].getOriginalFill())}var path=e.target;var code=e.target.id.split('_').pop();jQuery(params.container).trigger('regionClick.jqvmap',[code,mapData.pathes[code].name]);path.currentFillColor=params.selectedColor;path.setFill(params.selectedColor)});if(params.showTooltip){params.container.mousemove(function(e){if(map.label.is(':visible')){map.label.css({left:e.pageX-15-map.labelWidth,top:e.pageY-15-map.labelHeight})}})}this.setColors(params.colors);this.canvas.canvas.appendChild(this.rootGroup);this.applyTransform();this.colorScale=new ColorScale(params.scaleColors,params.normalizeFunction,params.valueMin,params.valueMax);if(params.values){this.values=params.values;this.setValues(params.values)}this.bindZoomButtons();WorldMap.mapIndex++};WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1,setColors:function(key,color){if(typeof key=='string'){this.countries[key].setFill(color);this.countries[key].setAttribute("original",color)}else{var colors=key;for(var code in colors){if(this.countries[code]){this.countries[code].setFill(colors[code]);this.countries[code].setAttribute("original",colors[code])}}}},setValues:function(values){var max=0,min=Number.MAX_VALUE,val;for(var cc in values){val=parseFloat(values[cc]);if(val>max){max=values[cc]}if(val&&val<min){min=val}}this.colorScale.setMin(min);this.colorScale.setMax(max);var colors={};for(cc in values){val=parseFloat(values[cc]);if(val){colors[cc]=this.colorScale.getColor(val)}else{colors[cc]=this.color}}this.setColors(colors);this.values=values},setBackgroundColor:function(backgroundColor){this.container.css('background-color',backgroundColor)},setScaleColors:function(colors){this.colorScale.setColors(colors);if(this.values){this.setValues(this.values)}},setNormalizeFunction:function(f){this.colorScale.setNormalizeFunction(f);if(this.values){this.setValues(this.values)}},resize:function(){var curBaseScale=this.baseScale;if(this.width/this.height>this.defaultWidth/this.defaultHeight){this.baseScale=this.height/this.defaultHeight;this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)}else{this.baseScale=this.width/this.defaultWidth;this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)}this.scale*=this.baseScale/curBaseScale;this.transX*=this.baseScale/curBaseScale;this.transY*=this.baseScale/curBaseScale},reset:function(){this.countryTitle.reset();for(var key in this.countries){this.countries[key].setFill(WorldMap.defaultColor)}this.scale=this.baseScale;this.transX=this.baseTransX;this.transY=this.baseTransY;this.applyTransform()},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;if(this.defaultWidth*this.scale<=this.width){maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale);minTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale)}else{maxTransX=0;minTransX=(this.width-this.defaultWidth*this.scale)/this.scale}if(this.defaultHeight*this.scale<=this.height){maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale);minTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale)}else{maxTransY=0;minTransY=(this.height-this.defaultHeight*this.scale)/this.scale}if(this.transY>maxTransY){this.transY=maxTransY}else if(this.transY<minTransY){this.transY=minTransY}if(this.transX>maxTransX){this.transX=maxTransX}else if(this.transX<minTransX){this.transX=minTransX}this.canvas.applyTransformParams(this.scale,this.transX,this.transY)},makeDraggable:function(){var mouseDown=false;var oldPageX,oldPageY;var self=this;this.container.mousemove(function(e){if(mouseDown){var curTransX=self.transX;var curTransY=self.transY;self.transX-=(oldPageX-e.pageX)/self.scale;self.transY-=(oldPageY-e.pageY)/self.scale;self.applyTransform();oldPageX=e.pageX;oldPageY=e.pageY}return false}).mousedown(function(e){mouseDown=true;oldPageX=e.pageX;oldPageY=e.pageY;return false}).mouseup(function(){mouseDown=false;return false})},bindZoomButtons:function(){var map=this;var sliderDelta=(jQuery('#zoom').innerHeight()-6*2-15*2-3*2-7-6)/(this.zoomMaxStep-this.zoomCurStep);this.container.find('.jqvmap-zoomin').click(function(){if(map.zoomCurStep<map.zoomMaxStep){var curTransX=map.transX;var curTransY=map.transY;var curScale=map.scale;map.transX-=(map.width/map.scale-map.width/ (map.scale * map.zoomStep)) /2;map.transY-=(map.height/map.scale-map.height/ (map.scale * map.zoomStep)) /2;map.setScale(map.scale*map.zoomStep);map.zoomCurStep++;jQuery('#zoomSlider').css('top',parseInt(jQuery('#zoomSlider').css('top'),10)-sliderDelta)}});this.container.find('.jqvmap-zoomout').click(function(){if(map.zoomCurStep>1){var curTransX=map.transX;var curTransY=map.transY;var curScale=map.scale;map.transX+=(map.width/(map.scale/ map.zoomStep) - map.width/map.scale)/2;map.transY+=(map.height/(map.scale/ map.zoomStep) - map.height/map.scale)/2;map.setScale(map.scale/map.zoomStep);map.zoomCurStep--;jQuery('#zoomSlider').css('top',parseInt(jQuery('#zoomSlider').css('top'),10)+sliderDelta)}})},setScale:function(scale){this.scale=scale;this.applyTransform()},getCountryPath:function(cc){return jQuery('#'+cc)[0]}};WorldMap.xlink="http://www.w3.org/1999/xlink";WorldMap.mapIndex=1;WorldMap.maps={};var ColorScale=function(colors,normalizeFunction,minValue,maxValue){if(colors){this.setColors(colors)}if(normalizeFunction){this.setNormalizeFunction(normalizeFunction)}if(minValue){this.setMin(minValue)}if(minValue){this.setMax(maxValue)}};ColorScale.prototype={colors:[],setMin:function(min){this.clearMinValue=min;if(typeof this.normalize==='function'){this.minValue=this.normalize(min)}else{this.minValue=min}},setMax:function(max){this.clearMaxValue=max;if(typeof this.normalize==='function'){this.maxValue=this.normalize(max)}else{this.maxValue=max}},setColors:function(colors){for(var i=0;i<colors.length;i++){colors[i]=ColorScale.rgbToArray(colors[i])}this.colors=colors},setNormalizeFunction:function(f){if(f==='polynomial'){this.normalize=function(value){return Math.pow(value,0.2)}}else if(f==='linear'){delete this.normalize}else{this.normalize=f}this.setMin(this.clearMinValue);this.setMax(this.clearMaxValue)},getColor:function(value){if(typeof this.normalize==='function'){value=this.normalize(value)}var lengthes=[];var fullLength=0;var l;for(var i=0;i<this.colors.length-1;i++){l=this.vectorLength(this.vectorSubtract(this.colors[i+1],this.colors[i]));lengthes.push(l);fullLength+=l}var c=(this.maxValue-this.minValue)/fullLength;for(i=0;i<lengthes.length;i++){lengthes[i]*=c}i=0;value-=this.minValue;while(value-lengthes[i]>=0){value-=lengthes[i];i++}var color;if(i==this.colors.length-1){color=this.vectorToNum(this.colors[i]).toString(16)}else{color=(this.vectorToNum(this.vectorAdd(this.colors[i],this.vectorMult(this.vectorSubtract(this.colors[i+1],this.colors[i]),(value)/(lengthes[i]))))).toString(16)}while(color.length<6){color='0'+color}return'#'+color},vectorToNum:function(vector){var num=0;for(var i=0;i<vector.length;i++){num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1)}return num},vectorSubtract:function(vector1,vector2){var vector=[];for(var i=0;i<vector1.length;i++){vector[i]=vector1[i]-vector2[i]}return vector},vectorAdd:function(vector1,vector2){var vector=[];for(var i=0;i<vector1.length;i++){vector[i]=vector1[i]+vector2[i]}return vector},vectorMult:function(vector,num){var result=[];for(var i=0;i<vector.length;i++){result[i]=vector[i]*num}return result},vectorLength:function(vector){var result=0;for(var i=0;i<vector.length;i++){result+=vector[i]*vector[i]}return Math.sqrt(result)}};ColorScale.arrayToRgb=function(ar){var rgb='#';var d;for(var i=0;i<ar.length;i++){d=ar[i].toString(16);rgb+=d.length==1?'0'+d:d}return rgb};ColorScale.rgbToArray=function(rgb){rgb=rgb.substr(1);return[parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]}})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2173:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {"width":950,"height":550,"pathes":{"id":{"path":"M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z","name":"Indonesia"},"pg":{"path":"M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z","name":"Papua New Guinea"},"mx":{"path":"M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z","name":"Mexico"},"ee":{"path":"M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z","name":"Estonia"},"dz":{"path":"M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z","name":"Algeria"},"ma":{"path":"M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z","name":"Morocco"},"mr":{"path":"M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z","name":"Mauritania"},"sn":{"path":"M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z","name":"Senegal"},"gm":{"path":"M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z","name":"Gambia"},"gw":{"path":"M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z","name":"Guinea-Bissau"},"gn":{"path":"M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z","name":"Guinea"},"sl":{"path":"M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z","name":"Sierra Leone"},"lr":{"path":"M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z","name":"Liberia"},"ci":{"path":"M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z","name":"Cote d'Ivoire"},"ml":{"path":"M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z","name":"Mali"},"bf":{"path":"M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z","name":"Burkina Faso"},"ne":{"path":"M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z","name":"Niger"},"gh":{"path":"M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z","name":"Ghana"},"tg":{"path":"M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z","name":"Togo"},"bj":{"path":"M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z","name":"Benin"},"ng":{"path":"M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z","name":"Nigeria"},"tn":{"path":"M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z","name":"Tunisia"},"ly":{"path":"M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z","name":"Libya"},"eg":{"path":"M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z","name":"Egypt"},"td":{"path":"M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z","name":"Chad"},"sd":{"path":"M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z","name":"Sudan"},"cm":{"path":"M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z","name":"Cameroon"},"er":{"path":"M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z","name":"Eritrea"},"dj":{"path":"M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z","name":"Djibouti"},"et":{"path":"M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z","name":"Ethiopia"},"so":{"path":"M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z","name":"Somalia"},"ye":{"path":"M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z","name":"Yemen"},"cf":{"path":"M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z","name":"Central African Republic"},"st":{"path":"M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z","name":"Sao Tome and Principe"},"gq":{"path":"M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z","name":"Equatorial Guinea"},"ga":{"path":"M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z","name":"Gabon"},"cg":{"path":"M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z","name":"Congo"},"ao":{"path":"M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z","name":"Angola"},"cd":{"path":"M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z","name":"Congo"},"rw":{"path":"M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z","name":"Rwanda"},"bi":{"path":"M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z","name":"Burundi"},"ug":{"path":"M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z","name":"Uganda"},"ke":{"path":"M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z","name":"Kenya"},"tz":{"path":"M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z","name":"Tanzania"},"zm":{"path":"M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z","name":"Zambia"},"mw":{"path":"M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z","name":"Malawi"},"mz":{"path":"M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z","name":"Mozambique"},"zw":{"path":"M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z","name":"Zimbabwe"},"na":{"path":"M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z","name":"Namibia"},"bw":{"path":"M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z","name":"Botswana"},"sz":{"path":"M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z","name":"Swaziland"},"ls":{"path":"M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z","name":"Lesotho"},"za":{"path":"M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z","name":"South Africa"},"gl":{"path":"M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z","name":"Greenland"},"au":{"path":"M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z","name":"Australia"},"nz":{"path":"M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z","name":"New Zealand"},"nc":{"path":"M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z","name":"New Caledonia"},"my":{"path":"M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z","name":"Malaysia"},"bn":{"path":"M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z","name":"Brunei Darussalam"},"tl":{"path":"M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z","name":"Timor-Leste"},"sb":{"path":"M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z","name":"Solomon Islands"},"vu":{"path":"M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z","name":"Vanuatu"},"fj":{"path":"M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z","name":"Fiji"},"ph":{"path":"M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z","name":"Philippines"},"cn":{"path":"M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z","name":"China"},"tw":{"path":"M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z","name":"Taiwan"},"jp":{"path":"M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z","name":"Japan"},"ru":{"path":"M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z","name":"Russian Federation"},"us":{"path":"M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z","name":"United States of America"},"mu":{"path":"M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z","name":"Mauritius"},"re":{"path":"M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z","name":"Reunion"},"mg":{"path":"M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z","name":"Madagascar"},"km":{"path":"M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z","name":"Comoros"},"sc":{"path":"M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z","name":"Seychelles"},"mv":{"path":"M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z","name":"Maldives"},"pt":{"path":"M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z","name":"Portugal"},"es":{"path":"M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z","name":"Spain"},"cv":{"path":"M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z","name":"Cape Verde"},"pf":{"path":"M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z","name":"French Polynesia"},"kn":{"path":"M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z","name":"Saint Kitts and Nevis"},"ag":{"path":"M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z","name":"Antigua and Barbuda"},"dm":{"path":"M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z","name":"Dominica"},"lc":{"path":"M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z","name":"Saint Lucia"},"bb":{"path":"M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z","name":"Barbados"},"gd":{"path":"M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z","name":"Grenada"},"tt":{"path":"M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z","name":"Trinidad and Tobago"},"do":{"path":"M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z","name":"Dominican Republic"},"ht":{"path":"M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z","name":"Haiti"},"fk":{"path":"M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z","name":"Falkland Islands"},"is":{"path":"M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z","name":"Iceland"},"no":{"path":"M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z","name":"Norway"},"lk":{"path":"M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z","name":"Sri Lanka"},"cu":{"path":"M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z","name":"Cuba"},"bs":{"path":"M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z","name":"Bahamas"},"jm":{"path":"M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z","name":"Jamaica"},"ec":{"path":"M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z","name":"Ecuador"},"ca":{"path":"M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z","name":"Canada"},"gt":{"path":"M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z","name":"Guatemala"},"hn":{"path":"M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z","name":"Honduras"},"sv":{"path":"M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z","name":"El Salvador"},"ni":{"path":"M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z","name":"Nicaragua"},"cr":{"path":"M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z","name":"Costa Rica"},"pa":{"path":"M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z","name":"Panama"},"co":{"path":"M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z","name":"Colombia"},"ve":{"path":"M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z","name":"Venezuela"},"gy":{"path":"M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z","name":"Guyana"},"sr":{"path":"M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z","name":"Suriname"},"gf":{"path":"M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z","name":"French Guiana"},"pe":{"path":"M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z","name":"Peru"},"bo":{"path":"M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z","name":"Bolivia"},"py":{"path":"M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z","name":"Paraguay"},"uy":{"path":"M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z","name":"Uruguay"},"ar":{"path":"M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z","name":"Argentina"},"cl":{"path":"M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z","name":"Chile"},"br":{"path":"M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z","name":"Brazil"},"bz":{"path":"M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z","name":"Belize"},"mn":{"path":"M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z","name":"Mongolia"},"kp":{"path":"M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z","name":"North Korea"},"kr":{"path":"M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z","name":"South Korea"},"kz":{"path":"M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z","name":"Kazakhstan"},"tm":{"path":"M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z","name":"Turkmenistan"},"uz":{"path":"M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z","name":"Uzbekistan"},"tj":{"path":"M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z","name":"Tajikistan"},"kg":{"path":"M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z","name":"Kyrgyz Republic"},"af":{"path":"M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z","name":"Afghanistan"},"pk":{"path":"M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z","name":"Pakistan"},"in":{"path":"M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z","name":"India"},"np":{"path":"M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z","name":"Nepal"},"bt":{"path":"M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z","name":"Bhutan"},"bd":{"path":"M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z","name":"Bangladesh"},"mm":{"path":"M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z","name":"Myanmar"},"th":{"path":"M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z","name":"Thailand"},"kh":{"path":"M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z","name":"Cambodia"},"la":{"path":"M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z","name":"Lao People's Democratic Republic"},"vn":{"path":"M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z","name":"Vietnam"},"ge":{"path":"M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z","name":"Georgia"},"am":{"path":"M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z","name":"Armenia"},"az":{"path":"M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z","name":"Azerbaijan"},"ir":{"path":"M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z","name":"Iran"},"tr":{"path":"M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z","name":"Turkey"},"om":{"path":"M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z","name":"Oman"},"ae":{"path":"M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z","name":"United Arab Emirates"},"qa":{"path":"M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z","name":"Qatar"},"kw":{"path":"M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z","name":"Kuwait"},"sa":{"path":"M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z","name":"Saudi Arabia"},"sy":{"path":"M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z","name":"Syrian Arab Republic"},"iq":{"path":"M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z","name":"Iraq"},"jo":{"path":"M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z","name":"Jordan"},"lb":{"path":"M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z","name":"Lebanon"},"il":{"path":"M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z","name":"Israel"},"cy":{"path":"M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z","name":"Cyprus"},"gb":{"path":"M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z","name":"United Kingdom"},"ie":{"path":"M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z","name":"Ireland"},"se":{"path":"M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z","name":"Sweden"},"fi":{"path":"M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z","name":"Finland"},"lv":{"path":"M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z","name":"Latvia"},"lt":{"path":"M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z","name":"Lithuania"},"by":{"path":"M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z","name":"Belarus"},"pl":{"path":"M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z","name":"Poland"},"it":{"path":"M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z","name":"Italy"},"fr":{"path":"M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z","name":"France"},"nl":{"path":"M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z","name":"Netherlands"},"be":{"path":"M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z","name":"Belgium"},"de":{"path":"M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z","name":"Germany"},"dk":{"path":"M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z","name":"Denmark"},"ch":{"path":"M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z","name":"Switzerland"},"cz":{"path":"M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z","name":"Czech Republic"},"sk":{"path":"M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z","name":"Slovakia"},"at":{"path":"M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z","name":"Austria"},"hu":{"path":"M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z","name":"Hungary"},"si":{"path":"M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z","name":"Slovenia"},"hr":{"path":"M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z","name":"Croatia"},"ba":{"path":"M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z","name":"Bosnia and Herzegovina"},"mt":{"path":"M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z","name":"Malta"},"ua":{"path":"M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z","name":"Ukraine"},"md":{"path":"M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z","name":"Moldova"},"ro":{"path":"M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z","name":"Romania"},"rs":{"path":"M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z","name":"Serbia"},"bg":{"path":"M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z","name":"Bulgaria"},"al":{"path":"M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z","name":"Albania"},"mk":{"path":"M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z","name":"Macedonia"},"gr":{"path":"M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z","name":"Greece"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2174:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add Europe Map Data Points */
jQuery.fn.vectorMap('addMap', 'europe_en', {"width":680,"height":520,"pathes":{"gl":{"path":"M13.47,93.57C12.35,92.52 12.34,90 10.44,89.14 10.62,88.14 13.84,87.66 11.35,86.39 10.05,87.17 9.25,86.92 8.71,87.58 6.27,88.12 8.6,85.09 6.17,85.17 5.23,84.47 10.33,84.75 9.98,83.14 11.32,83.4 14.67,82.04 12.37,81.03 11.23,81.19 6.54,82.06 10.06,81.32 13.04,80.64 9.92,76.6 8.71,79.05 9.24,77.06 11.03,78.05 12.88,77.78 14.68,74.59 9.38,77.17 8.23,75.54 7.26,73.61 12.43,77.09 11.48,74.6c2.44,-0.76 -0.97,1.23 1.21,1.43 1,0.07 3.06,0.24 1.26,-0.8C15.39,74.51 14.27,73.05 14.04,72.76 16.26,70.08 9.73,69.39 11.65,72.54 9.43,70.77 7.4,69.72 5.62,68.37 4.84,67.27 3.62,65.14 5.75,64.54 6.27,63.17 3.83,63.23 6.08,62.64 8.52,60.62 3.8,58.38 3.79,56.87 4.78,56.07 3.39,53.57 4.92,55.82c2,1.48 -1.5,0.05 -0.41,1.67 0.7,1.18 4.94,4.58 4.09,1.22C7.96,57.37 6.11,57.21 8.09,56.47 5.75,56.14 4.83,52.58 8.11,53.61c1.58,0.65 2.17,-1 2.13,-1.24 1.86,-0.56 0.99,-3.89 0.14,-5.02 -2.29,-0.92 1.59,-2.34 -1.23,-2.91 0.6,-3.73 4.98,-2.29 7.51,-3.37 2.78,-1.33 -1.33,-1.73 -1.69,-3.06 -3.07,-1.99 2.8,-0.5 3.28,-2.76 2.87,0.22 -2.67,-2.82 -1.49,-3.84 1.34,0.59 4.57,3.1 4.27,-0.2C20.58,29.48 17.09,31.14 17.33,29.6c1.78,1.02 0.79,-3.69 2.33,-1.12 1.76,1.21 4.05,-0.81 1.11,-1.21 -0.72,-0.16 1.96,-1.91 2.18,-0.31 2.04,0.89 2.39,3.26 4.86,3.29 1.12,-1.58 -2.89,-2.38 -0.16,-2.31 1.35,-1.83 -5.03,-0.94 -1.14,-2.29 1.39,-1.55 1.81,4.29 2.64,1.36 -0.57,-1.39 -0.41,-4.67 1.53,-2.59 0.16,2.02 -2.74,3.73 -1.03,6.23 2.7,1.13 0.11,-4.85 3.69,-4.25 2.74,-0.7 0.37,-3.01 -1.39,-3.16 0.93,-1.59 -0.48,-0.52 -0.91,-1.1 -1.26,0.42 -2.63,-0.27 -1.15,-1.19 -0.81,-1.9 -3.85,0.74 -5.54,0.53 -3.44,0.64 1.14,-2.76 2.36,-3.3 2.28,-0.77 4.66,2.97 6.55,0.04C34.81,17.14 33.04,17.79 32.17,17.97 30.61,18.81 30.38,17.32 30.54,16.77 29.14,17.79 26.4,16.27 29.42,16.34 29.89,14.12 31.85,14.39 33.58,13.44c0.27,-2.21 -3.96,0.03 -1.92,-1.94 2.34,1.37 5.29,0.49 7.37,1.6 0.49,1.25 2.93,3.07 2.07,0.58C40.16,10.86 37.07,10.79 34.89,10.94 32.01,10.71 38.39,8.92 36.45,6.69 35.49,6.8 33.31,6.65 34.75,5.53c1.74,0.57 3.45,1.31 2.13,3.63 0.97,-0.77 3.6,0.14 4.92,-0.01C42.62,6.51 37.36,8.29 39.31,5.97 39.94,4.69 35.39,5.71 36.07,3.41c2.18,-0.52 6.21,0.1 8.48,1.64 1.78,-0.72 2.84,-0.23 4.07,0.55 1.73,-0.23 3.46,0.06 2.78,2.25C52.75,9.86 54.51,8.35 52.72,6.73 52.71,4.07 54.56,10.07 55.78,8.98 56.01,5.87 52.57,4.02 49.87,3.57 48.45,2.66 43.96,4.29 45.02,2.48 44.96,1.07 43.75,0.16 45.71,1.28 47.56,3.52 50.55,-0.47 53.01,0.78 55.13,-0.05 52.02,4.62 54.57,4.07 55.09,3.62 56.43,7.62 57.26,5.53 57.36,3.28 54.5,4.61 54.71,2.93 54.66,0.68 56.28,0.89 57.93,0.78 59.1,1.36 57.92,5.72 60.98,5.64 61.74,4.33 57.63,0.17 61.09,2.11 61.53,3.09 65.18,3.43 63.42,2.17 61.88,1.53 60.02,-0.12 62.69,1.24c1.18,0.74 1.27,-0.27 2.37,-0.09 0.49,-0.8 2.06,-0.17 3.01,-0.37 45.89,0 91.78,0 137.67,0 0.61,1.21 1.15,3.04 -0.24,1.09 -2.48,-0.7 1.23,2.94 1.58,3.94 1.63,2.86 -1.86,0.67 -3.36,1.88 1.28,-1.72 -2.26,-4.24 -1.57,-1.36 0.03,2.25 1.64,3.73 3.68,2.39 1.03,0.77 -1.42,2.8 -1.62,3.53 -3.09,0.12 0.02,1.62 1.04,2.22 0.66,2.09 4.04,0.64 2.3,3.22 -1.05,1.95 -3.92,1.82 -3.21,-0.86 0.14,-3.28 -4.67,-1.36 -4.04,-5.02 -2.02,-0.71 -0.18,3.84 -2.96,2.48 -0.73,0.74 0.41,1.75 -1.42,1.32 -2.61,0.54 1.71,4.84 -0.38,4.25 -1.39,0.66 -1.21,4.72 0.33,2.08 -0.04,-1.13 1.18,-4.09 2.39,-2.05 0.43,1.69 3.14,3.16 0.34,3.59 0.86,3.33 -3.29,2.48 -4.22,0.42 -0.56,1.42 -4.92,2.25 -4.96,-1.01 -1.09,-1.09 -0.61,-6.28 0.38,-2.79 -0.38,2.15 4.88,3.94 3.74,1.34 -3.75,0.99 -2.13,-7.24 -6.06,-4.79 -0.93,1.3 -1.66,1.94 -1.57,-0.09 0.87,-1.48 -0.65,-6.36 -1.62,-2.76 -0.29,1.71 1.87,5.7 -1.38,4.23 -1.61,0.79 -3.43,1.95 -3.68,-0.56 -1.68,-1 0.16,-4.48 -2.68,-3.04 -0.67,1.11 2.68,6.25 0.02,3.71 -0.94,-1.89 -3.02,-1.6 -4.56,-0.77 1.83,0.09 2.37,0.85 0.57,2.18 0.59,2.05 2.81,-2.2 3.66,0.12 1.38,0.4 3.13,-0.11 3.81,2.17 2.43,3.24 -2.95,0.83 -4.01,1.04 -0.05,-1.82 -4.79,-3.3 -3.23,-1.13 1.49,0.95 1.71,0.82 0.15,1.51 -1.1,2.37 1.53,3.48 2.9,1.87 3.12,-1.53 5.02,4.79 1.15,3.53 -2.62,-0.97 -1.48,2.05 -3.89,2.7 -0.43,2.18 2.56,-0.04 2.88,-0.79 2.47,-0.74 2.4,2.46 3.26,3.28 -2.41,2.08 2.06,1.61 0.72,3.86 0.87,0.94 2.37,2.01 0.05,2.28 -2.05,0.35 -0.86,2.02 0.59,1.45 -1.67,-0.11 -1.69,1.85 -1.36,2.27 -1.73,0.52 -2.08,4.37 -0.55,3.78 -0.25,-2.23 4.33,-2.23 2.08,-0.24 -2.82,-0.46 -0.7,2.99 -3.43,2.2 2.08,0.81 0.22,1 -1.03,1.19 -1.32,0.16 3.49,1.1 1.39,1.26 -1.9,0.07 -0.29,1.99 -2.31,1.42 1.18,0.54 1.34,1.84 1.35,2.8 -2.18,2.04 -4.44,-0.74 -2.18,-2.64 1.63,-0.69 0.76,-4.19 -0.17,-2.1 -0.64,2.71 -4.66,4.66 -4.98,0.68 -0.13,-3.43 1.98,-6.57 2.12,-10.01 -0.26,-1.47 -2.38,-1.12 -1.92,-3.26 0.2,-2.67 -2.43,-4.09 -3.97,-4.66 0.54,-2.82 0.04,-5.39 -1.15,-7.72 0.49,-2.96 -3.2,-2.36 -2.3,0.29 0.39,1.99 2.16,3.98 1.82,5.79 -0.98,-1.18 -4.72,-2.37 -4.53,0.09 1.53,0.74 4.96,0.32 3.23,3.09 -0.36,0.92 2.65,-0.97 2.92,1.14 1.39,1.16 4.2,3.13 1.09,4.33 -2.3,0.81 -7.78,0.76 -7.23,-2.79 1.56,-1.72 -2.19,-2.27 -1.32,0.16 -1.72,-2.55 -3.53,-0.09 -1.9,1.66 -2.13,2.01 -4.41,0.62 -6.81,0.57 -2.19,2.71 4.76,1.16 2.08,3.05 0.58,1.9 4.08,1.91 5.81,2.83 1.96,1.43 -0.47,2.15 -1.35,0.46 -1.82,-1.08 -3.45,2.21 -4.74,-0.62 -0.64,-2.28 -4.68,1.1 -2.47,0.81 1.98,0.42 2.27,5.38 5.07,2.98 1.84,-3.35 3.57,2.14 6.26,0.44 1.29,-0.17 2.13,-0.02 0.67,0.65 1.09,1.24 2.33,0.17 2.6,1.96 1.19,2.8 4.25,5.41 6.32,6.4 -0.65,1.36 -3.26,-1.74 -3.14,1.07 -0.24,-1.71 -1.8,-0.78 -1.41,0.45 -1.2,-0.78 -1.84,-2.07 -1.82,0.08 -0.39,2.77 -2.92,-1.74 -2.76,-0.46 0.55,1.51 -0.55,2.28 -0.85,0.45 -2.38,-1.66 -2.14,3.66 -3.7,0.79 -1.88,-0.98 -0.85,3.28 -2.38,0.99 -2,-0.69 -1.48,2.95 -3.73,1.98 -1.43,0.57 -1.73,-1.87 -2.48,0.33 -1.28,0.15 -2.02,-1.77 -3.67,-0.49 -1.51,-0.59 -3.89,-0.69 -5.18,-1.79 -1.83,0.4 -3.94,-2.71 -4.99,0.05 -1.52,0.2 0.6,-5.44 -2.51,-2.84 -0.5,1.46 -2.44,2.79 -1.46,0.41 -0.04,-2.08 -3.47,-2.35 -1.81,-0.01 -0.33,2.95 -2.47,-1.46 -3.31,-2.22 2.66,-0.66 -1.9,-3.4 0.58,-4.85 0.98,-1.25 -0.43,-3.9 -1.29,-1.57 -2.2,1.2 0.59,4.8 -2.3,3.1 0.07,1.58 0.73,2.33 -0.49,2.37 -0.31,3.19 -2.4,-0.77 -3.7,1.08 -1.26,-0.57 -3.86,-0.58 -3.24,0.73 -1.86,1.54 -5.17,-0.4 -5.06,3.18 -2.02,-0.95 -3.43,1.13 -4.24,1.49 -0.67,-0.74 -1.24,2.48 -2,1.23 2.12,-2.45 -2.15,-1.8 -1.8,0.58 -2.16,1.39 -3.92,0.18 -2.08,-1.7 -1.67,0.05 -3.09,2.47 -2.5,-0.4 -0.88,-2.96 -1.92,-0.22 -2,1.13 -1.96,-0.26 -4.27,2.16 -3.76,-0.97 -0.78,-1.12 -2.93,1.49 -3.4,-0.02 1.83,-0.91 0.7,-3.4 -0.63,-1.07 -0.78,1.04 -1.78,1.59 -1.04,-0.05 -2.35,-3.54 3.85,-1.66 4.59,-3.73 -0.17,-1.96 -2.75,-5.32 -4.26,-2.64 1.79,0.66 -1.44,2.8 -2.07,2.43 -1.51,-3.02 -4.63,-0.57 -2.13,1.56 0.17,1.83 -2.38,1.81 -1.85,-0.14 -1.36,-2.38 -2.64,3.42 -2.69,-0.09 0.92,-1.47 0.05,-4.47 -1.39,-1.81 0.69,-2.4 -1.59,-1.67 -2.42,-0.69 -1.63,-2.6 -2.81,-0.08 -1.32,1.39 -0.12,2.09 -5.82,3.27 -3.43,0.33 -0.7,-1.39 -2.14,-1.09 -2.9,-2.54 -1.31,0.12 -1.87,1.12 -2.63,1.96 -0.18,2.43 -0.75,4.74 -2.05,6.98 -0.56,-1.99 -3.06,-1.81 -4.45,-3.2 -2.37,1.32 0.55,4.85 0.85,5.51 -2.93,-1.09 -0.49,5.23 -3.18,2.66C53.03,69.44 53.8,64.37 51.35,66.72c-0.01,1.25 1.67,5.14 1.03,4.67 -0.53,-2.51 -2.88,0.37 -2.61,-2.21 -1.56,-2.63 -4.32,1.46 -2.75,2.77 0.01,1.17 -1.56,2.39 -0.5,0.42 0.86,-3.51 -4.59,-2.97 -3.27,0.28 1.49,1.65 -0.07,2.95 -1.09,0.84 -1.55,-1.63 -4.28,0.31 -4.69,-2.84 -1.38,-1.87 -1.94,1.56 -0.77,2.26 -0.06,1.31 -0.47,2.49 -0.74,0.56 -1.54,-2.22 -1.58,2.78 -0.86,3.53 1.64,2.36 -5.86,1.67 -2.64,3.82 2.3,1.03 -2.22,1.12 -2.82,0.61 -1.74,0.43 1.87,2.58 -0.75,1.83C27.52,82.87 27.84,78.97 25.72,81.05c-0.33,1.79 3.97,2.08 0.81,3.67C24.18,85.6 27.77,81.48 24.7,81.96c-1.65,-0.58 -3.25,0.94 -2.07,2.52 -0.13,-1.56 -3.34,-2.97 -2.3,-0.65 0.92,1 3.65,4.19 0.68,3.11 -0.39,-1.36 -2.18,-3.54 -2.55,-1.53 -2.1,0.36 1.98,3.44 0.79,3.95 -0.52,-1.87 -2.86,-1.68 -1.64,0.35 -0.16,0.51 -2.67,-2.78 -2.9,-4.29 -1.64,-2.64 -1.84,0.81 -1.4,1.86 -0.78,1.52 2.24,0.79 1.57,2.42 -1.75,-0.73 -3.2,1.28 -0.75,1.28 -0.16,0.78 0.34,2.28 -0.65,2.59z M34.12,18.3c-1.05,0.6 -2.47,3.81 -0.57,3.47 1.95,-0.22 4.06,-4.82 0.57,-3.47z m-22.97,56.17c-2.31,-0.35 -0.79,-1.58 0,0z M2.14,66.59c-1.38,-1.11 -0.95,-1.35 0.46,-0.36 -0.18,-0.08 -0.27,0.6 -0.46,0.36z m168.23,-6.32c-0.28,-1.85 2.85,0.02 0.03,0l-0.03,0z M7.85,51.96c-0.57,-0.92 1.55,0.27 0,0z m1.18,-1.63C7.41,50.26 7.17,48.77 8.95,49.87 10,50.07 10.77,49.96 9.03,50.33z M184.09,37.53c-0.77,-1.48 -1.43,-4.23 -2.73,-6.24 -2.01,-2.67 1.21,-6.02 3.05,-2.64 0.95,1.04 0.93,3.38 1.44,4.42 -4.98,-0.16 0.39,3.51 -1.76,4.46z M23.01,25.35c-1.12,-0.81 -0.79,-3.25 0.17,-0.92 0.17,0.37 -0.49,0.58 -0.17,0.92z M209.99,8.88c0.65,-1.41 0.2,-3.29 -1.61,-3.21 -0.07,-1.5 -1.95,-5.46 0.62,-4.89 1.44,0 2.88,0 4.31,0 1.06,2.38 -1.6,4.58 -1.58,7.24 -0.32,0.7 -1.06,0.8 -1.74,0.86z M44.32,3.05c-1.74,-0.98 -6.31,0.12 -6.14,-2.09 1.47,1.81 3.05,0.95 2.25,-0.17 2.2,-0.52 2.82,0.46 3.89,2.27z","name":"Greenland"},"is":{"path":"m151.61,141.44c-2.42,-0.05 -4.73,-1.12 -5.95,-3.36 -0.71,-2.06 -4.34,-1.68 -3.81,-4.38 0.8,-0.95 3.4,-0.95 1.03,-1.6 -1.69,0.92 -0.37,-1.61 -2.18,-0.86 -0.88,-0.03 -1.32,-2.12 -2.96,-2.05 -1.43,-1.13 -6,-1.27 -4.53,-3.48 1.4,1.45 5.16,1.15 5.29,-1.63 0.95,-0.08 4.39,1.14 2.46,-0.91 -1.28,-0.31 -3.16,-1.27 -0.58,-1.35 2.41,0.51 2.39,-2.69 -0.02,-1.57 -1.25,0.39 -2.36,1.06 -1.66,-0.43 -0.34,-1.62 1.57,-4.11 -1.54,-3.94 -1.49,-1.7 -3.83,-2.36 -5.98,-2.91 1.9,-1.43 2.13,2 4.45,0.36 0.58,-0.11 0.84,1.82 1.93,0.36 1.45,0.02 2.12,1.75 4.12,1.85 1.57,1.88 4.72,-0.08 2.56,-1.73 -1.13,0.23 -4.71,-0.08 -2.41,-1.51 1.13,0.1 5.66,-0.35 3.94,-1.58 -2.53,-0.05 -1.4,-0.83 -0.29,-1.63 0.84,-2.83 -2.64,-1.96 -3.34,-1.81 -1.47,-0.72 -2,-0.85 -1.64,-2.44 2.52,0.42 0.64,-2.75 -0.27,-3.56 -0.04,-0.34 1.76,2 1.91,-0.11 -0.65,-3.43 1.88,0.34 1.11,2 -0.95,4.21 5.86,2.44 3.19,-0.73 -1.94,-1.31 0.11,-2.67 -1.13,-4.2 1.13,0.42 1.67,1.6 2.04,1.18 1.98,0.31 -0.01,2.5 1.33,3.37 0.86,1.89 -0.77,4.19 1.64,5.57 -1.28,0.64 -3.87,-0.52 -2.63,1.99 -0.4,1.18 -1.92,2.25 -0.42,2.93 -1.31,1.46 -1.09,4.59 1.22,2.7 0.49,-1.4 2.89,-6.12 2.22,-2.37 2.69,2.22 4.53,-3.04 4.48,-5.25 2.58,0.03 -0.68,6.63 3.51,5.53 -0.01,-0.74 0.05,-5.1 1.81,-2.72 1.08,-2.01 3.5,-0.36 1.83,1.62 2.1,1.36 -0.53,3.45 0.95,5.46 2.69,-0.06 0.02,-7.39 2.92,-6.07 -0.32,2.52 1.49,4.92 3.27,1.85 1.68,-2.37 1.62,3.33 3.69,1.28 1.71,-0.8 1.1,-6.38 3.47,-3.02 -0.81,1.5 1.32,1.54 -0.24,3.29 -0.5,2.17 2.82,1.16 2.36,3.29 2.02,0.52 2.1,1.62 0.19,2.57 -2.6,1.53 3.45,1.86 0.49,3.25 -0.74,0.55 -3.68,1.15 -1.27,1.34 1.72,-0.23 4.34,-1.28 4.35,1.54 -0.04,2.17 -4.93,1.21 -2.47,3.09 1.83,0.33 2.75,2.38 0.41,2.2 -1.18,-0.56 -1.74,-0.63 -0.71,0.56 -0.6,-0.3 -3.92,0.12 -2.06,0.55 2.71,0.87 -0.55,1.36 -1.7,1.52 -1.06,0.04 -2.49,1.02 -2.87,2.69 -1.35,-0.83 -1.72,1.98 -2.29,-0.35 -0.72,-2.57 -2.1,-0.68 -2.71,0.31 -2.09,-0.1 -4.17,0.18 -5.78,1.63 -1.89,0.57 -3.52,-3.04 -3.52,0.21 -2.4,-1.75 -5.62,-1.53 -6.88,1.4l-0.35,0.08 0,0z m24.31,-7.94c-1.58,1.64 1.17,1.65 0.84,-0.23 -0.28,0.08 -0.56,0.15 -0.84,0.23z M147.49,99.76c-2.33,0.02 -1.42,1.38 0.2,1.79 0.14,-0.38 0.69,-1.97 -0.2,-1.79z m33.62,15.99c1.19,-0.59 1.6,-0.17 0,0z m-44.05,-9.09c-1.62,-0.01 -0.68,-1.6 0.37,-0.74 1.34,-0.47 -0.84,-4.6 0.49,-2.48 -0.6,1.82 2.54,3.42 -0.86,3.22z m-1.42,-1.5c-1.66,0.2 -1.5,-3.06 -0.29,-0.86 -0.05,0.3 1.22,0.95 0.29,0.86z m4.48,-1.49c-0.86,-0.96 -0.83,-1.57 0,0z","name":"Iceland"},"pt":{"path":"m126.31,476.79c-3.11,-0.89 -5.74,-4.21 -9.28,-3.12 -1.78,0.38 1.76,-2.58 1.47,-3.95 0.39,-1.92 1.56,-3.11 1.18,-4.56 -0.46,-1.65 0.47,-3.6 1.4,-5.27 -0.61,-1.65 3.07,-0.14 2.33,-1.74 -1.59,-1.17 -2.48,-2.71 -4.71,-1.61 -1.89,-0.04 -2.12,-3.1 -2.67,-4.46 0.27,-2.21 3.57,-4.27 2.21,-6.5 2.42,0.37 3.47,-2.17 4.77,-3.81 0.98,-1.71 1.87,-3.43 3.16,-4.47 -0.79,-1.76 1.02,-5.31 3.28,-5.87 1.59,-1.26 -0.95,-2.63 0.8,-4.09 0.23,-2.53 -1.05,-5.19 -0.11,-7.75 2.54,0.06 0.15,-1.87 0.17,-2.24 1.59,-1.44 4.74,-3.3 6.49,-1.31 -3.35,1.53 -0.16,3.98 2.09,3.19 1.85,-0.17 3.87,2.53 6.45,0.97 1.56,-0.13 6.26,-0.07 4.22,3.05 0.22,1.77 4.81,2.08 1.88,3.98 -2.66,0.33 -4.02,2.88 -6.33,3.35 -0.97,1.66 1.09,4.53 -0.81,6.49 -1.07,1.01 0.55,2.39 -1.62,2.77 -2.6,1.54 1.62,6.06 -2.82,6.49 -1.74,-0.37 -5.6,-2.08 -3.57,1.31 1.07,1.89 -0.41,4.57 2.03,6.2 1.92,2.91 -3.81,2.81 -3.68,5.95 -1.09,1.6 0.5,5.45 2.67,5.41 -1.19,1.2 -4.31,1 -5,3.34 -3.07,2.07 -0.28,7.22 -4.25,7.62 -0.55,0.29 -1.11,0.63 -1.75,0.65z","name":"Portugal"},"ma":{"path":"m114.26,519.26c5.38,-1.06 11.75,-0.39 15.9,-4.63 5.26,-4.88 8.22,-11.54 11.83,-17.6 2.3,-1.64 3.11,0.89 3.7,2.43 3.25,0.06 3.27,5.03 6.51,6.18 2.01,2.4 5.02,1.6 7.69,1.35 1.26,1.84 3.78,-0.68 5.41,1.5 1.48,1.09 4.97,-1.46 5.09,1.72 1.76,1.07 3.75,0.97 5.94,1.12 1.21,2.49 5.27,4 3.5,6.77 1.55,1.82 -0.97,1 -2.11,1.18 -21.15,0 -42.31,0 -63.46,0z","name":"Morocco"},"es":{"path":"m170.08,507.95c-0.69,-0.45 0.64,-1.19 0,0z m-23.1,-9.15c-1.89,-0.27 -1.23,-3.36 0.81,-2.76 -1.01,0.61 -0.28,2.16 -0.81,2.76z m-1.53,-5.41c-1.92,-1.84 -4.81,-3.55 -4.78,-6.5 1.74,-1.65 -3.05,-2.72 0.06,-3.62 1.8,0.08 1.95,-2.62 0.29,-1.71 -1.68,1.92 -1.49,-3.2 -3.57,-3.37 -1.21,-2.54 -5.06,-1.7 -6.26,-3.7 0.08,-2.72 1.22,-5.37 3.58,-6.95 1.91,0.46 5.66,-3.3 1.98,-3.27 -1.9,-2.17 -1.67,-5.74 1.14,-6.99 3.7,-0.95 1.1,-4.57 -0.28,-6.35 0.58,-1.68 0.45,-3.01 -0.84,-4.53 2.46,2.34 7.45,0.07 6.4,-3.43 -2.26,-2.56 3.15,-2.71 1.97,-5.34 1.81,-1.67 0.28,-5.41 1.17,-6.21 1.77,-2.14 4.99,-2.46 6.88,-4.55 1.92,-2.79 -4.07,-2.45 -2.2,-4.91 0.43,-3.16 -4.07,-2.3 -5.69,-3.2 -1.8,2.37 -3.89,-1.02 -6.23,-0.51 -0.28,-1.34 -3.49,1.05 -2.42,-0.88 2.82,-1.19 -0.75,-4.5 -2.73,-2.96 -2.11,1.45 -3.86,-0.78 -1.34,-1.64 0.94,0.28 2.32,-1.98 0.72,-1.58 2.23,-1.63 -2.16,-0.92 -0.24,-2.66 2.41,-1.99 0.28,-4.66 -2.06,-3.75 -2.26,-1.66 -0.12,-3.23 1.07,-4.13 3.66,0.29 6.76,-2.08 9.92,-3.51 1.78,-2.19 1.34,2.22 3.29,-0.21 3.33,-0.27 2.62,6.64 6.6,4.09 2.47,1.16 5.51,0.94 8.02,1.44 1.9,-1.24 3.14,2.45 5.32,2.3 2.35,0.57 4.3,2.34 6.75,2.93 2.65,1.41 5.29,-0 7.84,-0 2.13,0.65 4.69,5.39 6.5,1.98 2.5,1.32 5.04,3.91 8.46,3.08 1.39,-0.01 3.8,0.79 4.14,1.8 -1.87,1.22 0.06,2.67 1.22,2.4 1.66,1.57 5.29,1.19 5.34,4 1.46,0.54 4.43,-0.57 4.33,1.92 1.41,-0.29 3.73,0.98 4.54,0.5 1.54,0.01 3.53,0.67 3.72,-1.35 1.63,1.02 3.94,2.12 5.05,3.3 -0.62,2.48 1.62,2.94 3.4,2.37 1.23,1.43 2.74,2.23 4.47,1.42 1.62,0.92 3.85,2.1 4.94,-0.04 1.38,-0.43 5.47,1.31 2.5,2.25 -0.52,2.49 0.35,5.62 -3.02,6.24 -3.95,0.65 -6.55,3.99 -10.24,4.85 -4,0.26 -8.86,0.24 -11.41,3.91 0.64,1.13 2.06,1.75 -0.08,1.82 -2.98,1.35 -3.8,5 -6.55,6.72 -2.04,2.09 -4.6,4.27 -5.09,7.29 -0.14,3.13 0.72,6.8 3.86,8.19 -0.28,2.13 -4.94,1.61 -6.14,3.93 -1.51,0.81 -1.84,2.35 -3.08,3.65 0.22,1.68 -4.27,3.01 -1.46,5.03 -0.94,1.1 -4.96,-1.49 -6.88,0.41 -2.79,1.13 -4.55,3.71 -5.69,6.37 -2.11,3.74 -4.63,-2.34 -7.31,0.69 -2.28,0.2 -4.7,-1.72 -7.4,-1.1 -2.51,-0.92 -5.12,-1.75 -7.89,-1.82 -2.99,0.03 -4.54,3.25 -7.74,1.83 -3.45,-0.48 -3.73,3.46 -6.83,4.06z M229.67,469.73c-3.03,-0.94 2.34,-1.17 0,0z m-3.28,-1.86c-1.31,-1.98 3.63,-2.8 0.96,-0.55 -0.28,0.23 -0.58,0.51 -0.96,0.55z m8.15,-0.95c-0.99,-1.19 -3.24,-1.21 -2.69,-3.07 -1.57,-0.61 -4.43,-0.57 -1.44,-1.83 1.82,-0.69 5.61,-3.6 5.15,-0.13 1.01,1.13 4.03,0.64 1.76,2.77 -0.83,0.87 -1.8,1.58 -2.78,2.26z m11.67,-5.53c-0.43,-1.32 -5.6,-1.9 -2.47,-2.15 1.42,0.04 2.4,0.66 2.47,2.15z","name":"Spain"},"tn":{"path":"m284.9,519.26c-2.21,-1.12 0.73,-3.64 -0.95,-5.51 -1.46,-3.16 2.15,-6.93 -0.12,-9.45 -0.67,-0.73 2.93,-1.29 1.98,-2.95 2.23,-0.03 1.46,-2.58 3.74,-2.85 2.52,-1.83 5.41,-3.02 8.35,-3.78 1.3,0.18 -1.34,3.29 1.51,2.64 0.71,-1.15 1.1,-2.15 2.08,-1.26 -0.76,0.27 1.03,1.6 0.03,2.09 1.72,0.55 2.13,5.46 4.03,3.7 1.46,-0.73 4.4,-5.15 5.37,-2.71 -0.9,2.37 -2.28,5.07 -4.51,6.35 -3.22,1.82 -2.27,6.37 0.87,7.67 1.26,0.82 1.66,2.08 3.04,2.36 -0.15,1.99 1.01,4.41 -1.79,3.68 -7.88,0 -15.77,-0.01 -23.63,0.01z","name":"Tunisia"},"dz":{"path":"m181.84,519.26c-2.16,-1 0.09,-2.29 0.05,-3.03 -0.8,-1.48 -5.28,-4.37 -1.47,-3.7 2.83,-0.51 5.98,-1.33 7.84,-3.67 1.17,-2.46 3.66,-2.95 5.89,-2.07 1.44,-0.79 2.77,-2.77 3.38,-0.29 3.67,1.9 4.38,-3.05 7.15,-3.91 3.27,-1.17 6.41,-3.1 10.01,-2.8 3.04,0.05 6.13,0.57 9.13,-0.19 2.74,1.56 5.53,-0.24 7.63,-1.26 2.46,0.75 5.2,0.79 7.75,-0.34 2.83,-0.67 5.62,0.67 8.61,0.23 3.35,0.17 5.17,6.05 8.94,3.1 1.43,-2.77 7.09,0.3 7.33,-3.88 2.03,-1.62 1.87,1.59 2.96,1.23 1.79,0.05 6.14,2.99 6.01,-0.61 2.5,-2 5.17,3.33 8.12,2.16 1.57,-1.13 4.46,-0.6 5.35,-0.15 -1.62,-0.02 -2.54,1.2 -1.93,2.18 -1.87,0.63 -3.58,2.5 -1.04,3.3 0.38,2.87 -2.09,5.94 -0.27,8.63 -0.06,1.4 0.31,4.98 -0.86,5.05 -33.52,0 -67.05,0 -100.57,0z","name":"Algeria"},"be":{"path":"m265.32,343.64c-0.99,-1.16 -1.81,-2.49 -3.73,-3.37 -2.08,-0.35 -0.28,-1.85 -1.25,-2.79 1.47,-1.88 -0.53,-2.73 -1.47,-0.87 -1.28,2.32 -4.46,0.99 -3.2,-0.74 -0.78,-0.74 1.11,-3.63 -1.62,-3.19 -2.17,0.83 -2.23,-1.41 -2.67,-2.1 -3.94,1.05 -1.51,-5.53 -5.39,-3.71 -2.36,1.07 -3.02,-4.27 -0.45,-4.53 1.73,-0.62 4.14,-3.17 4.52,-0.63 2.42,-0.22 3.66,2.56 5.83,0.13 1.3,-0.02 1.88,1.91 1.96,-0.36 0.89,-2.95 2.67,0.31 4.45,-0.43 0.58,-0.7 1.45,3.34 3.54,2.07 2.55,0.01 1.99,1.94 1.4,3.06 -1.22,1.97 -0.15,4.06 2.13,3.5 1.5,1.19 1.36,3.16 2.63,4.39 -1.48,2.22 -4.2,1.28 -5.1,4.2 -1.39,2.28 2.74,5.98 -1.59,5.37z","name":"Belgium"},"it":{"path":"m350.4,500.36c-1.75,-1.38 -4.77,0.56 -6.21,-2.11 -0.98,-3.12 -4.25,-2.35 -6.74,-3.12 -2.11,-1.47 -4.61,-1.93 -6.58,-3.76 -2.2,-1.23 -6.25,0.31 -6.1,-3.66 0.15,-1.98 2.31,-4.17 3.5,-1.8 2.52,0.49 3.53,-4.85 5.24,-0.9 2.01,0.26 4.02,2.27 5.97,0.45 2.63,-0.1 5.81,0.01 7.46,-2.47 1.45,0.01 4.12,1.89 4.36,-0.76 1.1,1.6 3.69,-2.6 2.02,0.26 -1.4,3.25 -4.08,7.31 -3.12,10.66 1.21,0.69 0.93,2.35 2.17,3.37 -1.93,0.14 -1.88,2.41 -1.97,3.84z m7.22,-15.37c-2.78,-0.14 -2.87,-3.99 -0.28,-4.55 1.37,-2.08 -1.36,-4.79 2.17,-5.13 3.25,-2.22 -1.35,-4.63 -1.21,-7.46 -1.16,-2.63 -2.56,-4.66 -3.09,-7.45 -1.59,-2.98 -4.91,-0.29 -6.78,-2.73 -1.65,-0.84 -0.12,-5.17 -3.33,-5.63 -1.56,-0.37 -4.03,2.8 -2.57,0.22 0.06,-2.91 -3.33,-1.3 -4.25,-2.37 -0.69,-2.23 -3.26,-6.17 -5.36,-4.2 -1.73,-2.18 -4.5,1.85 -5.25,-1.44 -2.69,-0.65 -4.1,-2.62 -6.18,-4.28 -0.73,-3.32 -5.19,-3.11 -5.74,-6.57 -1.05,-1.9 -5.27,-0.02 -4.05,-2.26 -1.1,-2.38 -3.86,-3.39 -4.73,-5.46 -3.13,0.51 0.07,-2.73 -1.71,-4.47 -2.14,-2.56 -1.2,-6.42 -3.6,-8.63 -2.19,-1.12 -4.5,-0.88 -6.03,-3.28 -2.22,-0.9 -4.82,-2.51 -7.33,-1.86 -1.74,1.89 -3.46,3.3 -4.61,5.48 -1.55,2.14 -5.91,2.59 -3.27,-0.76 1.07,-4.25 -4.16,-0.46 -5.52,-3.08 -2.08,-1.9 -1.08,-4.02 0.62,-5.53 0.76,-2.12 -4.77,-3.84 -2.88,-4.68 2.55,0.23 5.53,-3.6 2.83,-5.28 -0.93,-1.94 -2.92,-4.5 0.7,-3.9 2.4,0.04 4.29,-1.2 6.65,-0.24 1.85,-1.05 2.45,-2.98 2.51,-4.87 1.03,-0.35 2.29,-2.18 1.57,0.13 -0.67,2.56 4.99,2.17 2.47,4.45 0.19,0.08 2.08,0.32 2.23,1.7 1.41,1.01 2.54,-1.65 0.98,-2.25 0.53,-2.02 3.41,-3.57 2.37,-5.9 0.68,2.09 2.82,3.69 4.41,1.42 0.81,0.91 2.52,3.75 3.07,0.97 -0.97,-1.55 1.29,-1.81 -0.84,-2.7 -0.29,-2.99 3.05,2.3 3.43,-1.02 -1.77,-2.29 0.88,-4.07 2.84,-1.92 2.41,1.34 1.9,-4.15 4.64,-2.65 2.33,0.51 5.21,-2.28 6.13,0.74 1.38,2.34 4.22,3.29 6.93,3.47 1.41,0.44 5.26,-0.07 4.99,0.93 -2.13,0.92 -2.35,3.92 0.43,3.72 -1.26,1.22 -1.47,2.53 -0.57,3.56 0.79,3.16 -4.05,-1.16 -3.93,2.42 -2.22,1.73 -5.54,2.13 -7.33,4.03 -0.52,1.97 1.06,2.99 1.39,4.46 3.61,0.71 -1.06,2.87 -0.87,4.28 0.35,2.85 0.62,6.32 3.48,7.85 2.75,2.1 5.47,4.43 8.75,5.58 2.03,1.86 2.11,4.88 3.12,7.29 0.93,3.7 3.47,6.75 6.72,8.67 2.2,2.52 5.18,4.19 8.71,3.54 1.79,0.5 5.88,-2.59 5.92,0.29 -0.8,1.53 -3.65,2.89 -1.29,4.86 4.13,2.94 10.13,1.81 13.75,5.65 1.89,1.55 5.85,0.5 6.34,3.52 1.71,1.18 6.04,2.73 4.13,5.37 0.4,1.63 -0.95,3.55 -2.34,1.36 -0.96,-2.97 -3.23,-5.68 -6.54,-4.48 -2.32,-1.32 -6.05,-2.69 -6.78,1.09 -1.28,2.2 -1.32,4.97 -2.42,7.17 0.64,2.84 4.59,1.65 5.83,3.73 1.59,0.26 0.35,2.98 1.81,3.8 -0.21,3.1 -5.83,1.6 -5.88,5 0.28,1.92 0.81,4.68 -1.72,5.06 -1.23,1.65 -1.39,4.64 -3.63,5.25z m-35.56,-71.98c1.98,1.43 0.5,-2.39 0,0z m-33.54,62.41c-0.72,-1.6 -3.1,-3.35 -3.37,-5.68 1.54,-2 1.07,-4.81 2.16,-7.03 -3.26,0.28 0.82,-2.8 -0.89,-4.55 -0.02,-1.96 -1.35,-4.24 -2.94,-4.22 0.19,-1.55 0.4,-3.39 2.06,-1.78 3.1,0.15 5.25,-2.55 7.52,-4.29 0.91,-0.84 5.63,1.48 2.53,2.55 -0.36,1.47 2.3,1.33 1.41,2.66 3.07,1.36 0.3,4.08 -0.53,6.16 1.23,2.67 0.22,5.65 0.3,8.76 -0.33,1.29 -0.37,5.73 -2.35,3.37 -1.49,-1.18 -4.61,-1.6 -3.46,1.11 -0.38,1.17 -0.94,2.88 -2.43,2.94z","name":"Italy"},"by":{"path":"m402.72,308.87c0.99,-3.18 0.27,-7 -3.79,-7.04 -0.71,-2.3 3.14,-4.07 4.34,-6.18 -0.26,-5.15 -3.83,-9.19 -5.74,-13.77 2.18,-0.83 4.01,-0.87 5.95,-0.9 0.86,-1.84 2.51,-1.83 3.98,-0.84 -1.05,-1.12 -2.37,-3.07 0.28,-3.17 1.9,0.02 -0.71,-2.58 2.17,-2.24 -1.28,2.76 4.76,1.14 2.24,-1.38 -2.85,-0.47 0.33,-3.89 -1.4,-5.76 0.96,-1.56 2.7,-3.08 2.72,-4.65 2.53,0.76 4.43,-4.49 0.94,-3.47 -1.1,-1.17 0.25,-4.78 1.91,-6.11 2.45,0.48 4.37,-0.43 4.51,-3.22 0.17,-2.25 2.08,-1.78 3.18,-1.85 2.02,-2.32 2.15,2.85 3.69,0.14 1.75,-1.51 3.73,-0.83 3.53,1.45 2.17,2.99 3.24,-2.73 5.87,-2.54 1.93,0.2 3.24,2.17 5.04,1.95 0.25,2.02 -0.47,3.85 1.8,5.15 0.82,1.65 -1.87,4.51 1.47,4.95 2.1,-0.08 0.99,1.32 1.56,1.96 1.72,2.18 3.98,3.94 6.71,3.73 0,1.84 0.71,4.69 2.92,2.85 2.09,-1.22 3.09,0.78 3.28,1.76 2.02,-0.38 3.13,1.46 1.26,2.31 -0.06,3.07 -3.04,4.09 -5.35,2.65 -3.54,0.27 -2.85,5.57 0.51,5.52 0.97,2.55 1.33,5.72 3.91,7.42 -2.66,1.35 -6.88,2 -6.85,5.76 -1.23,2.53 1.43,5.57 1.33,7.2 -1.16,-1.33 -5.51,-3.73 -5.13,-0.77 -2.24,-2.52 -3.75,4.16 -4.59,0.03 -1.77,-2.65 -4.04,1.4 -4.28,1.56 -1.22,-2.58 -2.82,1.6 -3.58,-0.67 -1.01,0.66 -2.93,1.68 -4.34,1.01 -1.39,0.16 -1.96,2.41 -2.67,0.56 -2.3,-2.34 -5.69,0.72 -8.43,-0.73 -2.87,-0.21 -5.7,0.69 -8.51,0.87 -1.69,1.51 -4.3,1.17 -5.72,2.79 -0.82,1.63 -1.2,4.18 -3.37,2.88 -0.54,-0.03 -1.11,0.27 -1.34,0.78z","name":"Belarus"},"pl":{"path":"m378.8,342.69c0.85,-2.71 -2.77,-1.44 -3.2,-3.81 -2.16,-0.74 -2.68,4.74 -4.1,1.6 -1.34,-0.42 -0.38,-2.05 -2.3,-2.3 -1.38,-1.23 -0.72,-3.2 -2.99,-2.63 -1.39,-1.14 -3.17,-0.83 -4.08,-0.27 -2.65,-1 1.12,-2.8 -1.66,-3.95 -1.04,2.08 -3.71,0.51 -5.13,-0.34 -2.56,-1.21 -1.29,2 -1.13,2.64 -1.27,1.67 -2.44,1.3 -2.92,-0.65 -1.25,-0.75 -2.67,-1.29 -0.72,-2.16 1.16,-2.1 -2.17,-2.93 -3.11,-1.63 -1.5,-2.25 -5.49,-1.16 -6.45,-4 -1.21,-1.39 -2.59,1.06 -1.9,-1.41 0.23,-2.18 -0.48,-4.58 -2.34,-5.49 -1.37,-2.65 0.61,-5.37 -0.78,-8.1 -2.17,-1.37 0.53,-5.96 -3.41,-5.97 -3.09,-2.11 2.9,-5.25 0.3,-8.13 -0.64,-1.64 -2.11,-4.93 -1.01,-5.69 2.39,-0.86 4.49,-2.6 7.02,-3.34 1.88,-0.91 4.34,-1.13 5.97,-2.18 0.73,-2.97 3.72,-4.13 6.19,-5.25 2.44,-1.51 5.22,-3.64 8.26,-2.74 0.34,2.92 2.37,6.29 5.83,5.11 2.32,-0.46 3.66,-2.87 6.19,-1.88 5.94,0.22 12.06,0.04 17.77,-1.75 2.19,-1.89 4.37,-0.56 6.59,0.69 0.91,5.68 5.67,10 6.52,15.73 -0.74,2.77 -4.55,3.76 -4.71,6.89 0.95,2.08 5.51,0.97 4.43,4.48 -0.75,3.1 1.11,5.48 1.99,8.14 0.77,2 4.89,2.48 3.07,4.57 1.18,1.35 3.03,3.77 0.15,4.64 -2.63,0.49 -3.02,4.28 -4.54,6.17 -0.82,2.29 -3.04,4.17 -2.56,6.78 1.11,1.72 -0.12,4.53 2.39,4.91 -2.96,0.2 -5.66,-0.81 -7.88,-2.64 -2.12,-1.23 -4.34,-0.31 -6.37,0.12 -1.06,0.6 -0.02,2.66 -2.03,1.15 -2.7,-1.27 -4.67,0.77 -6.02,2.87 -0.44,-0.92 -1.49,0.48 -1.34,-0.18z","name":"Poland"},"jo":{"path":"m566.3,519.26c-0.01,-4.69 -2.26,-8.97 -3.12,-13.51 1.51,-3.32 4.45,-0.15 6.76,0.1 3.02,0.33 6.94,0.22 8.51,-2.87 4.44,-5.57 8.37,-11.53 12.83,-17.08 1.86,2.51 3.76,5 5.38,7.68 -2.06,2.03 2.19,4.71 3.12,1.72 0.91,2.72 -2.48,4.53 -4.03,6.38 -4,3.47 -8.47,6.39 -12.72,9.51 -2.44,0.61 -3.15,3.3 -0.46,3.9 2.58,1.36 5.17,2.72 7.71,4.17 -7.99,0 -15.99,-0 -23.98,0z","name":"Jordan"},"gr":{"path":"m449.88,508.26c-1.41,-0.44 -0.91,-2.43 -2.98,-2.05 -2.92,-1.02 -4.66,0.87 -7.49,-0.12 -2.89,2.86 -3.34,-3.03 -1.84,-3.28 2.13,1.48 4.85,0.78 6.99,2.27 2.66,-1.89 5.67,-2.41 8.68,-1.61 1.64,-0.07 3.7,-0.37 4.57,-0.83 -1.03,2.5 2.95,2.63 3.64,0.39 1.59,-1.01 2.86,-0.15 1.23,1.36 -4.14,0.67 -8.27,1.86 -12.04,3.72l-0.39,0.1 -0.37,0.03 0,0z m-26.29,-13.55c-0.61,-2.64 -1.46,-5.84 -4.37,-6.76 -3.02,-0.62 -1.68,2.8 -1.92,4.11 -2.48,0.25 -0.03,-2.58 -2.33,-3.13 -1.56,-1.69 2.11,-3.33 -0.42,-5.29 -1.75,-1.46 -3.48,-2.23 -4.88,-3.8 -1.71,-0.32 1.67,-2.18 0.95,-3.89 1.31,0.41 3.43,-0.58 4.2,-2.4 2.31,-0.03 5.27,1.8 8.03,2.01 1.1,0.72 3.08,0.98 3.24,1.46 1.77,0.36 1.5,3.47 4.29,3.78 1.97,0.86 -3.33,1.22 -3.75,-0.39 -3.29,-1.87 -3.6,3.04 -0.88,3.97 1.42,2.4 3.54,4.49 2.98,7.25 0.93,1.21 1.93,2.16 0.11,0.68 -1.13,-1.37 -3.59,-4.36 -5,-1.33 -0.38,1.2 -0.28,2.48 -0.25,3.72z m12.62,-17.67c-0.61,-1.76 -3.37,-2.18 -4.61,-3.83 -1.54,-1.35 -1.12,2.07 -3.22,1.63 -1.32,1.11 -3.33,0.37 -1.06,-0.31 2.53,-1.38 -0.23,-3.22 -1.98,-2.17 -2.19,0.64 -2.76,-3.59 -4.29,-0.5 0.28,-1.81 -1.78,-2.98 -1.95,-0.63 -1.85,0.67 -5.66,-0.17 -7.42,2.31 -1.43,-1.51 -2.69,-1.73 -3.58,0.32 -0.06,-3.13 -3.02,-4.71 -4.64,-5.97 -0.05,-3.03 -3.45,-4.15 -5.3,-5.69 0.58,-2.13 -4.66,-2.22 -1.22,-2.7 1.45,0.13 1.31,-1.81 1.97,-2.79 -2.74,-2.59 4.57,-2.51 2.29,-5.81 0.57,-2.27 3.93,-4.04 1.77,-6.57 2.29,-1.19 5.68,-0.59 7.21,-3.12 0.92,-4.2 5.51,-0.91 7.7,-3.66 0.88,-0.81 0.03,-3.12 2.26,-2.13 2.68,-1.49 5.94,-1.98 8.75,-3.4 1.35,-1.69 4.25,-2.43 5.72,-0.71 1.88,0.93 3.48,-0.95 5.39,0.66 2.83,0.48 5.06,-1.99 7.75,-2.56 2.63,-1.48 -0.92,-3.81 -0.19,-4.93 2.53,-0.82 6.54,2.78 3.07,4.45 -2.66,1.03 1.16,6.08 -1.92,6.2 -2.59,-1.16 -5.58,1.42 -8.08,-0.62 -2.31,-0.06 -3.98,4.61 -5.94,1.87 -2.75,-0.21 -2.93,5.39 -5.82,3.29 -2.56,0.13 -2.19,2.87 -0.61,3.88 1.51,1.31 -0.02,1.67 -0.46,3.12 -2.01,-0.91 -2.94,1.12 -4.72,-0.3 -3.05,1.25 -3.01,-2.2 -1.76,-3.97 -0.09,-0.54 -2.81,1.81 -3.44,2.49 -1.02,1.92 0.18,3.87 -0.21,6.03 1.55,1.98 3.8,3.4 4.84,5.84 0.92,0.8 4.25,2.4 3.42,2.64 -2.14,-2.19 -4.85,-0.02 -3.78,2.46 1.31,0.13 3.2,1.7 0.6,2.21 -1.13,0.04 -4.23,2.36 -2.68,2.49 2.62,-1.25 4.96,1.17 7.41,0.98 0.52,2.36 2.91,0.77 3.98,2.53 2.06,0.36 4.93,0.25 3.64,2.95 0.1,1.33 1.96,3.02 1.13,4.05z m-32.41,-12.35c-2.66,1.97 2.35,4.76 3.65,1.72 0.88,-3.08 -2.48,0.37 -3.25,-1.63l-0.4,-0.09 0,0z m1.2,12.17c-2.12,0.67 -3.94,-2.49 -2.24,-3.05 -0.52,2.11 1.79,2.11 2.24,3.05z m35.21,-4.75c-1.33,-0.45 -3.15,-2.25 -0.48,-1.45 1.91,-0.84 2.27,1.01 0.48,1.45z m-3.1,-3.76c-1.98,-1.68 -5.22,0.85 -5.86,-2.11 -1.43,-1.48 -5.05,-2.2 -5.77,-2.78 2.78,-2.67 4.14,2.1 7.15,1.68 1.66,0.78 3.06,-0.62 3.9,1.22 0.4,0.59 0.43,1.32 0.58,1.99z m-10.1,-17.81c-3.53,-1.73 2.32,0.07 0,0z m3.59,-1.57c-2.32,-1.62 -0.44,-1.62 0.45,0.12l-0.11,0.22 -0.34,-0.34z","name":"Greece"},"tm":{"path":"m679.06,344.59c-1.21,-0.72 -0.78,-2.05 -2.51,-2.48 -0.91,-2.53 -0.44,-5.74 -2.11,-7.9 1.43,2.3 3.65,0.44 4.81,-0.09 -0.04,3.47 0.02,6.95 -0.03,10.42l-0.16,0.04z m-9.11,-14.43c-1.83,0.29 -2,-1.85 -2.97,-2.07 -2.67,-0.77 0.57,-4.63 0.48,-6.52 1.65,-3.13 3.89,-6.16 6.88,-8.09 1.36,-0.18 5.09,-1.73 4.9,0.43 0,2.65 0,5.3 0,7.95 -2.35,-1.52 -3.83,-5.43 -6.79,-5.11 -2.41,2.22 -6.24,4.38 -5.17,8.26 -0.05,1.27 0.71,3.09 1.95,2.4 0.34,0.89 0.41,1.85 0.72,2.75z m9.29,-40.46c-2.98,-4.77 -6.29,-9.32 -9.41,-14 0.44,-3.11 3.69,-4.89 4.74,-7.82 1.56,-2.45 3.21,-4.85 4.68,-7.37 0,9.73 0,19.46 0,29.19z","name":"Turkmenistan"},"kz":{"path":"m665.18,326.25c-2.97,-1.86 -1.2,-5.67 -2.65,-8.21 0.53,-3.17 -3.51,-2.8 -4.88,-0.83 -1.79,-1.67 -2.48,2.95 -4.91,0.84 -1.43,-2.21 -3.22,-0.68 -4.76,0.52 -0.4,-3.09 -3.28,-5.18 -6.16,-5.75 -2.02,-1.36 -4.24,-5.19 -6.86,-2.37 -2.9,1.87 -4.15,-4.1 -0.51,-3.35 1.06,-1.32 1.8,-1.79 3.42,-0.84 1.53,-0.78 2.76,-2.24 4.06,-3.11 -1.44,-2.18 -5.78,0.43 -7.07,-2.22 0.12,-1.34 3.47,-2.2 0.83,-3.45 -1.26,-2.14 2.16,-2.43 1.45,-4.52 2.51,-0.62 4.01,-2.7 6.42,-3.67 1.55,-0.68 5.82,-1.56 4.27,-3.73 -2.44,0.42 -5.53,1.2 -4.64,-2.51 0.27,-3.12 -0.67,-6.7 -3.34,-8.56 -1.46,-0.11 0.78,-3.59 -1.86,-3.15 -1.5,-2.77 -4.84,0.02 -6.51,0.7 0.1,2.2 -0.93,4.69 -3.45,3.61 -2.4,0.56 -6.57,-0.38 -7.49,3.29 -0,2.58 -2.65,3.31 -2.68,6 -1.27,1.57 -1.07,5.37 -3.43,5.36 -2.12,-0.08 -2.2,2.62 -2.46,3.63 -1.26,0.74 -5.86,0.39 -4.64,-0.82 3.5,0.56 3.47,-4.4 0.06,-4.32 -3.14,-1.51 -5.73,-4.02 -8.93,-5.36 -2.47,-0.32 -4.25,2.11 -6.54,2.07 -0.12,1.28 0.37,2.59 -1.35,1.17 -1.8,-0.93 0.01,-2.79 -2.21,-3.3 0,-2.52 -4.2,-0.23 -5.74,-0.66 -0.96,-2.72 -0.8,-5.85 -0.41,-8.82 0.73,-3.23 -4.34,-1.07 -3.74,-4.61 -1.48,-2.21 -1.17,-5.16 0.32,-7.28 -2.58,-1.5 -1.53,-6.73 1.82,-4.04 2.29,0.54 4.78,3.98 7.13,1.98 1.97,-1.65 2.09,-5.06 -0.41,-5.79 -0.5,-2.08 -4.31,-2.93 -1.9,-4.7 0.1,-1.7 1.79,-4.1 2.05,-4.93 -2.7,-0.86 -1.25,-3.39 0.39,-3.59 0.3,-2.73 3.83,-4.97 2.24,-7.88 -1.16,-1.26 2.12,-0.49 0.87,-2.37 -0.73,-0.82 1.71,-0.82 1.99,-1.86 2.14,-0.45 -1.05,2.08 1.69,2.02 1.48,-0.55 1.41,-1.96 2.93,-1.7 0.29,-1.63 -1.06,-3.26 1.01,-4 0.5,-1.63 0.88,-2.2 1.87,-0.46 3.2,2.4 4.8,-3.1 7.46,-3.43 1.62,1.55 3.73,2.04 5.43,0.37 1.27,1.42 3.01,1.43 4.62,1.61 -0.26,2.56 4.05,4.44 3.68,0.87 -0.11,-2.04 -2.23,-3.06 -3.52,-3.49 2.49,-1.89 5.28,1.44 8.06,-0.13 2.65,1.71 2.89,-3.09 2.88,-4.82 -0.94,-1.46 1.32,-2.87 0.36,-4.29 1.64,0.4 1.75,-1.1 1.34,-1.85 1.08,-2.25 2.79,-1.39 4.44,-0.52 1,-0.8 1.78,-2.46 2.98,-2.01 -1.89,-1.21 -2.16,-3.64 0.61,-3.9 -0.26,-1.23 0.14,-1.29 1.28,-1.45 1.06,-0.94 2.07,2.58 4.01,1.26 1.98,1.74 4.96,-3.12 5.37,-1.36 0.29,1.89 3.37,-0.99 2.39,-2.55 -0.11,-1.94 -1.41,-4.21 1.46,-3.17 2.91,-0.36 4.26,-3.79 5.34,-6.17 1.47,-2.93 -2.47,-4.1 -2.09,-6.64 -1.36,-2.25 -4.48,-0.11 -5.91,0.2 -2.22,-2.09 -4.58,3.81 -4.91,0.16 -1.29,-0.68 -2.71,2.23 -3.65,0.73 1.29,-1.47 1.19,-4.25 2.39,-6.18 1.51,-3.13 -2.02,-3.28 -3.58,-4.22 -3.1,0.97 0.81,-3.99 -1.61,-4.03 1.01,-2.42 4.84,-2.6 5.47,-5.2 -0.01,-2.9 -4.66,-1.68 -5.74,0.02 -1.13,1.71 -4.5,-0.24 -1.75,-0.92 2.16,-2.49 -2.77,-3.66 -2.05,-1.2 -2.33,3.55 -0.85,-4.14 -3.83,-1.64 1.26,-0.48 -0.31,-3.76 1.92,-2.68 1.3,1.04 0.21,-2.26 2.14,-1.3 2.74,-0.21 -1.15,-2.68 1.49,-3.26 1.26,2.1 3.9,-0.29 1.53,-1.19 0.54,-2.35 2.7,-4.74 3.28,-7.51 1.48,-0.31 3.12,-1.58 1.37,-2.69 1.12,-2.77 3.18,-4.87 5.44,-6.15 -0.1,-1.8 -3.04,-1.6 -1.06,-3.51 0.73,-2.38 2.55,-3.81 3.48,-6.49 2.08,-2.53 2.36,-5.49 3.47,-8.34 0.29,-1.69 3.72,-3.96 0.35,-4.97 -1.01,-0.43 2.31,-2.04 0.29,-3.41 -1.75,-1.68 3.22,-0.78 0.65,-2.37 -1.73,-0.49 3.06,-0.82 1.8,-2.5 2.25,-1.54 6.79,-0.26 5.35,-4.64 -0.2,-2.91 3.08,-0.72 4.32,0.28 1.69,1.75 4.12,-0.2 4.78,2.52 1.5,0.9 1.01,3.62 3.74,3.35 2.67,0.01 -0.81,-3.38 2.11,-2.14 1.93,-0.51 -0.97,-4.41 1.41,-3.27 0,52.65 0,105.3 0,157.95 -2.28,4.16 -5.07,8.03 -7.49,12.09 -2.11,1.94 -4.29,5.26 -1.49,7.58 3.01,4.53 6.37,8.91 8.98,13.65 0.02,6.62 -0.04,13.29 0.04,19.87 -3.05,0.34 -6.58,0.54 -8.5,3.49 -2.48,2.8 -4.81,5.91 -5.35,9.73 -0.09,0.46 -0.18,0.92 -0.25,1.38z","name":"Kazakhstan"},"fi":{"path":"m382.62,208.07c0.7,-3.07 -2.78,1.32 -3.86,-1.32 0.05,-0.96 1.56,-3.75 -0.71,-2.21 -1.13,1.69 -1.33,-1.45 -2.92,-0.68 -0.94,0.89 -2.97,-0.9 -3.55,-0.42 -0.14,-2.36 -1.97,-0.15 -2.25,-0.03 -0.63,-1.67 -0.91,-3.6 -2.08,-5.17 1.86,-0.74 1.72,-4.06 0.26,-5.25 -0.34,-1.47 3.17,-0.38 1.07,-2.02 -1.2,-2.15 -2.78,-4.06 -3.52,-6.25 0.62,-2.08 -0.63,-3.97 -1.49,-4.42 0.49,-1.2 -0.5,-2.29 -0.95,-2.29 0.13,-1.71 3.82,-4.59 2.52,-5.52 -3.07,-0.18 0.32,-3.17 1.17,-0.45 1.02,-1.23 3.05,-2.66 2.12,-4.84 0.01,-1.7 0.15,-2.94 1.36,-1.21 0.12,-2.42 1.26,-4.91 3.64,-5.85 -0.72,-2.45 1.54,-4.8 2.24,-7.01 -0.27,-2.84 0.9,-5.24 3.71,-6.24 1.6,-1.13 1.77,-3.36 -0.51,-2.84 -0.44,-2.27 -0.12,-5.32 -2.74,-6.02 -2.3,1.99 -2.43,-3.68 -4.97,-1.88 -1.75,-2.03 -4.37,-4.52 -3.48,-7.48 1.52,-3.03 -0.83,-5.16 -2.34,-7.18 -0.2,-1.46 0.87,-4.46 -1.6,-3.74 -0.01,-2.39 -0.15,-4.83 -1.27,-7.01 -2.48,-1.84 -4.57,-4.14 -8.05,-4.18 -1.93,-1.7 -6.43,-2.88 -5.46,-6.12 -0.41,-2.16 1.14,-3.53 2.73,-1.48 2.59,1.31 1.85,6.17 5.39,5.44 2.27,0.35 4.34,-0.45 4.98,-2.51 2.4,-0.26 6.27,3.96 5.78,-0.87 -0.39,-2.02 3.32,-1.43 1.97,-3.98 -1.32,-3.02 -2.11,-7.03 -0.35,-9.99 -0.31,-2.74 4.21,-0.11 4.22,-3.35 1.47,-1.91 3.36,2.08 5.49,1.78 2.95,0.9 3.14,3.84 1.7,6.03 1.41,1.64 0.21,2.38 -0.46,3.84 1.14,0.8 2.75,1.02 1.72,2.87 -0.47,3.13 2.02,6.77 5.45,6.28 1.67,2.35 6.13,3.59 3.92,7.14 -0.75,2.27 -1.97,4.85 -0.96,7.21 3.59,3.29 6.5,7.25 9.05,11.36 0.06,1.49 -2.83,0.38 -0.84,2.06 -0.22,2.17 0.21,4.77 1.29,6.07 -1.26,3.74 5.08,3.34 3.58,6.82 0.48,3.1 6.13,1.5 4.41,5.52 -0.25,1.99 -2.95,4.48 0.53,5.03 2.93,1.69 6.43,2.67 8.87,5.07 1.06,2.48 -0.3,5.24 -0.57,7.75 -2.26,6.49 -4.21,13.14 -7.27,19.3 -1.55,2.69 -3.59,5.26 -4.3,8.32 -1.76,0.21 -3.5,-1.24 -4.38,1.19 1.52,0.77 -3.01,1.75 -1.49,-0.16 -0.76,-2.31 -1.99,0.16 -1.56,1.47 -1.82,-2.09 -4.5,1.44 -1.45,2.01 0.62,2.53 -3.67,-2.15 -3.14,-0.28 0.89,2.06 -2.52,3.25 -2.85,3.52 -2.72,0.33 -4.14,2.39 -6.64,3.79l-0.57,0.27 -0.58,0.1 0,0z","name":"Finland"},"de":{"path":"m302.45,372.15c0.39,-0.91 1.99,-2.77 0.16,-1.49 -1.57,0.93 -2.11,-2.91 -4.19,-2.08 -2.04,1.85 -3.44,-2.27 -6.01,-1.15 -2.15,0.46 -2.02,-2.87 -4.5,-1.23 -1.72,0.52 0.38,3.76 -1.44,1.73 -1.84,0.2 -4.84,0.84 -5.69,-0.07 -0.64,-1 1.16,-4.13 0.65,-5.99 1.9,-2.36 0.91,-6.25 3.86,-7.87 2.56,-1.63 0.59,-4.12 -1.86,-3.67 -2.56,0.2 -2.84,-3.15 -5.48,-1.32 -1.23,0.08 -2.11,-2.54 -3.28,-1.12 -0.17,-2.33 -4.09,-3.23 -1.38,-5.35 1.81,-3.01 -5.32,-3.18 -1.88,-6.63 1.67,-1.33 2.21,-2.89 0.22,-4.22 1.95,-2 -1.2,-0.75 -1.34,-2.77 1.01,-1.22 0.18,-2.51 -0.16,-3.21 1.78,-1.86 2.88,-5.05 1.22,-7.64 -2.19,-2.06 0.71,-2.52 2.29,-1.67 2.39,0.34 3.33,-2.08 3.64,-3.33 2.38,-1.19 2.15,-5.11 -0.59,-5.64 -0.03,-1.55 3.42,0.08 2.83,-2.66 0.31,-2.54 1.52,-4.9 2.38,-7.37 -0.34,-0.18 -3.53,0.96 -2.22,-1.41 0.9,-2.9 4.25,-1.28 6.2,-2.15 0.16,2.03 2.57,6.54 4.4,3.34 0.14,-1.85 -1,-6.59 2.18,-4.76 1.27,0.28 4.88,-0.75 2.09,-1.66 -3.15,0.44 1.18,-4.81 -1.98,-5.31 4.2,-1.72 -2.92,-4.5 -0.43,-6.3 2.37,1.37 6.56,0.38 7.64,2.55 -0.45,0.53 1.55,0.68 -0.04,1.71 -1.46,1.22 0.47,2.21 1.51,1.23 -1.09,2.31 1.04,2.07 1.81,0.68 1.67,1.18 3.81,1.56 5.14,0.49 0.21,1.77 -4.56,3.93 -2.04,5 1.38,0.2 3.65,-1.17 3.27,1.31 2.66,-0.01 2.46,-4.21 4.91,-4.12 1.43,1.57 3,-1.39 3.56,-2.49 0.61,-2.1 3.54,-0.7 4.16,-0.17 0.88,1.8 2.57,3.83 4.93,3.32 -0.95,4 4.51,3.57 4.6,6.93 3.14,3.28 -3.49,6.24 0.16,9.19 2.04,0.76 2.91,2.01 2.23,4.17 0.93,1.99 2.9,4.81 0.48,6.79 1.68,1.23 1.03,4.11 3.18,4.83 0.68,1.92 0.82,5.65 -0.66,6.5 -0.87,-1.78 -4.46,-3.53 -3.95,-0.41 1.16,0.88 -2.8,1.08 -3.3,2.22 -2.5,0.18 -3.71,2.69 -5.8,3.41 -0.73,-0.12 -0.57,1.65 -2.06,0.72 -2.78,-0.99 -2.28,4.11 -4.17,1.96 -3.51,0.44 1.56,4.5 2.19,5.46 -2.26,2.79 1.42,6 3.88,7.15 1.53,1.88 3.04,3.44 5.43,4.44 2.44,1.22 2.24,4.86 -1.02,3.8 -0.57,1.52 -0.37,3.53 -2.79,3.73 -3.29,0.46 -2.9,3.65 -1.01,5.5 0.76,1.93 -3,3.3 -3.36,1.75 -0.45,-0 -3.6,-1.29 -2.93,0.98 -3.48,-0.65 -5.56,1.87 -8.47,2.95 -1.59,-0.45 -2.06,-3.03 -4.27,-1.95 -2.85,-1.05 -0.37,3.13 -2.89,3.37z m-6.7,-79.27c-0.21,2.06 4.44,6.44 3.78,2.2 -1.59,0.14 -2.26,-2.95 -3.66,-2.25L295.75,292.88z m29,76.43c-1.59,-1.17 -0.3,-3.24 0.69,-1.13 -0.04,0.43 -0.23,0.99 -0.69,1.13z m-0.01,-83.07c-2.42,-0.16 -2.07,-4.22 0.32,-2.83 -1.17,-1.29 -0.5,-0.74 0.89,-0.58 -1.82,1.06 2.32,2.92 -0.86,3.34l-0.35,0.07 0,0z","name":"Germany"},"se":{"path":"m323.06,272.38c-2.85,0.68 -1.5,-2.92 -0.88,-3.47 -1.34,-1.73 -2.37,-3.77 -4.04,-5.01 0.79,-1.22 -1.53,-2.8 1.01,-1.48 2.77,0.18 -2.19,-2.84 0.98,-2.65 2.38,-2.15 -2.21,-3.59 -2.38,-5.5 -2.18,-0.93 -1.38,-4.24 -3.57,-5.03 -0.5,-2.35 -1.05,-4.69 -2.37,-6.57 0.36,-2.06 3.34,-6.36 -0.08,-6.96 -1.38,2.23 -3.39,1.39 -2.89,-1.18 0.66,-1.66 -0.9,-5.32 -0.3,-5.55 1.22,1.95 2.5,1.63 3.29,-0.5 0.91,-2.52 -0.9,-5.03 -0.38,-7.57 2.08,-1.14 -0.02,-3.96 3.05,-4 2.39,-1.51 1.37,-4.54 1.71,-6.85 0.8,-2.58 -4.53,-6.31 0,-6.91 1.04,-0.81 1.22,-3.31 1.37,-4.79 -1.12,-2.38 -6.01,-2.81 -4.1,-6.25 1.84,-3.74 -1.45,-6.92 -1.02,-10.47 0.52,-2.44 0.53,-5.73 -0.14,-7.32 0.64,-2.96 1.19,-6.43 4.34,-7.91 2.35,-0.49 6.23,1.31 6.51,-2.71 0.96,-3.43 -4.73,-4.28 -1.85,-7.71 0.9,-2.93 3.32,-5.66 2.42,-8.87 0.15,-1.92 0.67,-3.87 -0.11,-5.73 -1.01,-2.32 3.73,-0.74 3.99,-3.33 -0.13,-2.25 -0.54,-4.21 1.52,-5.81 2.69,-2.56 2.7,-6.48 0.46,-8.94 2.93,-1.39 1.66,-4.89 3.52,-7.09 1.35,-0.88 5.1,1.96 4.84,-1.65 -0.51,-1.95 -1.78,-6.23 1.75,-4.92 2.24,0.45 5.5,2.66 7.12,-0.07 1.29,-1.53 -2.75,-1.44 -0.66,-3.53 0.95,-1.42 0.76,-3.57 -0.83,-4.28 3.02,-0.52 2.64,2.5 5.35,3.5 2.17,2.8 6.24,2.01 8.45,4.17 1.81,1.26 3.78,2.76 3.22,5.22 1.03,1.27 -0.68,4.42 1.98,4.24 -0.85,2.83 1.11,4.63 2.62,6.51 0.04,2.86 -1.49,6.25 1.05,8.57 1.6,1.29 3.31,4.27 -0.1,3.45 -1.76,0.14 -2.91,-0.92 -2.17,1.42 -0.95,1.6 -5.22,-2.83 -4.14,0.58 0.84,1.65 -2.05,2.45 -1.57,1.13 -2.06,-0.65 -0.53,1.54 0.66,1.49 -0.6,0.2 -1.52,0.57 -0.3,1.82 -1.49,0.26 -4.7,1.58 -1.68,2.64 2.32,2.25 -3.2,4.64 -1.02,7.19 1.54,0.9 4.4,2.82 1.64,4.33 -1.68,2.21 -0.66,5.89 -3.12,7.17 -0.94,1.59 -3.16,2.96 -4.81,3.45 -0.21,1.34 -1.22,2.8 -1.35,4.54 -1.77,-1.72 -2.61,0.56 -2.76,1.85 -1.12,0.81 -2.56,2.13 0.01,2.01 -0.44,1.31 -4.33,0.73 -2.47,3.43 -0.06,0.73 -0.49,2.94 -1.88,1.95 -2.76,-0.24 -2.07,3.37 0.06,3.69 -0.77,1.95 -1.46,4.89 0.24,6.81 -3.74,-1.85 -2.36,2.41 -0.94,3.91 0.18,1.27 -3.07,0.5 -0.73,1.44 0.84,1.85 1.12,4.66 1.43,6.67 -0.32,2.79 5.02,-0.22 4.86,2.53 0.7,1.96 4.04,1.71 4.48,1.82 -3.19,-0.43 -0.28,3.53 1.17,3.32 1.13,1.08 3.55,2.93 0.69,3.17 -0.96,1.32 -2.08,3.54 -3.42,3.71 1.54,1.27 -2.79,1.25 -1.63,-0.68 0.49,-2.21 -4.13,-4.8 -3.64,-1.69 1.43,0.51 0.2,2.21 2.13,2.69 -1.79,0.21 -3.94,-2.79 -5.52,-0.41 -0.59,-1.15 -2.36,-1.3 -1.99,0.35 -2.53,-0.76 -3.68,2.49 -1.03,1.96 1.95,-0.49 4.14,0.17 6.05,0.67 -0.71,2.97 4.28,-1.28 2.88,1.93 -0.14,2.13 -0.95,4.88 -3.12,4.77 0.18,1.44 -0.14,1.56 -2.15,1.24 -1.48,-0.93 -5.69,1.16 -2.24,1.59 0.93,-0.93 4.88,0.08 2.51,0.95 -1.3,-0.74 -2.65,-1.15 -1.6,0.7 1.1,0.49 3.58,1.85 1.37,2.42 -0.48,1.93 2.49,4.34 -0.83,3.78 -1.22,1.55 3.46,2.55 0.79,3.59 -0.59,1.57 1.8,1.83 -0.1,3.07 -0.36,1.71 1.22,3.68 -0.24,4.3 0.8,1.29 0.72,4.62 -0.49,4.51 -0.92,1.99 -0.01,8.09 -3.9,5.74 -0.75,-0.04 -1.2,1.04 -1.28,-0.03 -1.81,1.13 -4.91,0.3 -5.24,2.54 -3.47,0.86 -2.77,5.15 -1.48,7.22 -1.25,2.12 -3.78,-0.71 -5.21,1.44 -0.58,0.2 -1.19,0.28 -1.8,0.28z m21.76,-13.69c-0.6,-1.64 -0.03,-5.51 0.58,-5.62 -0.47,1.84 -0.07,3.79 -0.58,5.62z m11.16,-10.28c-1.47,-2.04 -0.57,-3.97 -1.15,-6.17 0.13,-1.54 3.5,-5.82 3.93,-3.32 -1.59,1.67 -1.23,4.3 -0.42,5.29 -0.56,1.58 -2.33,2.58 -2.36,4.21z m-6.04,-22.62c-0.58,-0.9 -1.01,-2.64 0.37,-3.19 0.51,-2.57 3.62,1.5 0.73,1.06 -0.71,0.44 -0.93,1.57 -1.1,2.14z m3.41,-4.74c-1.71,-0.56 1.15,-0.98 0,0z","name":"Sweden"},"no":{"path":"m283.92,239.69c-2.05,0.82 -1.04,-2.38 -3.04,-0.45 -2.25,0.63 -2.45,-1.19 -0.48,-1.71 1.16,-1.98 -1.94,-1.69 -2.54,-0.89 -1.88,-1.69 -4.73,-3.13 -5.46,-5.54 0.16,-1.17 0.04,-2.84 1.26,-1.53 2.45,-0.31 0.5,-3.28 2.63,-3.15 -0.92,-1.74 3.6,-1.24 2.16,-3.19 -1.49,-0.01 -3.77,0.75 -1.5,-1.08 1.07,-1.87 -4.03,-2.48 -3.95,0.31 -0.43,1.99 -1.31,-1.27 0.03,-1.59 -0.59,-1.71 3.37,0.46 2.3,-1.73 2.11,-0.09 3.7,-3.31 0.62,-1.92 -2.12,1.06 -0.9,-1.62 0.69,-0.69 -1.77,-1.8 3.78,-2.21 0.57,-3.6 -0.56,-4.05 -3.61,3.53 -2.9,-0.4 -0.09,-1.07 2.45,-2.14 0.56,-2.38 1.23,-1.75 0.14,-1.45 -1.12,-1.67 -0.48,-2.03 3.39,-0.54 1.29,-2.62 -1.57,-0.11 -2.3,1.01 -2.92,1.83 0.23,-1.47 -0.96,-1.1 0.71,-1.97 1.17,-0.81 3,-0.92 0.68,-1.9 -1.68,1.41 -3.48,-0.55 -1.63,-1.27 2.35,2.15 4.25,-2.5 6.35,0.43 1.83,1.86 1.2,0.18 2.05,-1.15 2.54,-0.3 -0.18,4.44 3.17,3.6 2.08,-1.21 -0.36,-4.05 -1.72,-4.82 -1.87,-1.19 -2.86,1.17 -4.77,-0.24 -1.71,-0.32 -5.74,2.24 -5.21,-1.12 1.24,-0.84 -1.48,-1.91 1.02,-1.63 0.93,-0.21 -1.41,2 0.86,1.55 1.15,0.42 4.11,-2.74 2.32,-2.56 -1.17,0.24 -3.58,0.07 -2.04,-0.78 0.01,-1.15 -2.86,-0.72 -1.37,-2.6 1.92,-1.21 1.67,-2.06 2.44,-3.76 1.13,0.7 1.55,1.95 2.59,0.89 1.71,1.83 3.67,-1.21 0.78,-1.26 -1.72,-1.7 2.02,-2.98 1.47,-0.81 -0.08,1.94 2.1,2.28 1.49,0.15 -1.54,-0.73 -0.39,-3.26 1.26,-2.04 -0.9,2.54 1.99,2.46 3.2,1.29 -0.57,-1.07 -3.07,-0.84 -2.76,-2.61 -1.93,-0.78 -0.88,-1.18 0.63,-1.75 -0.31,2.53 1.54,0.84 1.46,0.89 0.76,2.66 4.97,0.16 2.35,-0.64 -1.68,1.13 0.97,-2.47 -1.62,-1.35 -1.33,0.1 -1.92,0.19 -0.62,-0.55 0.77,-1.45 -3.3,-3.11 -0.25,-2.56 1.36,2.34 4.5,0.23 4.77,-0.42 0.76,1.21 1.99,4.78 3.9,2.5 -0.19,-1.38 -1.61,-1.13 -0.15,-1.91 -0.52,-0.88 -3.96,-0.82 -1.31,-0.98 2.56,1.07 3.94,-2.68 1.6,-3.22 -2.38,3 -0.29,-2.57 1.23,-0.79 -1.13,2.54 3.47,1.05 2.52,-0.37 0.79,-1.1 1.41,-2.4 1.63,-0.68 1.42,0.16 -1.15,3.34 1.22,2.27 1.23,1.9 3.05,-0.32 1.25,-1.45 2.02,0.81 5.84,0.23 4.08,-2.68 2.55,-0.11 3.44,-2.71 1.89,-3.48 2.7,-0.44 1.04,-4.25 -0.61,-2.47 -0.94,0.99 -4.98,3.53 -3.32,4.59 1.36,-0.14 -3.55,4.36 -3.84,1.11 1.8,-0.4 1.59,-2.97 -0.14,-1.47 -1.54,1.59 -1.58,-0.15 0.05,-0.55 1.29,-0.12 3.11,-2.23 0.74,-1.96 0.49,-1.84 0.69,-1.57 2.55,-2.66 -0.01,-1.8 3.87,-1.75 1.44,-3.46 1.6,-3.11 2.62,3.25 4.94,0.36 -0.07,-0.91 1.83,-2.92 -0.44,-2.32 -1.97,0.37 0.51,-3.35 0.91,-3.77 2.46,-0.4 5.23,-2.14 6.04,-4.52 -0.69,-1.41 -1.97,0.46 -0.84,-1.25 0.83,-2.9 -4.58,-0.06 -1.84,-2.23 2.88,-0.42 -1.2,-4.08 2.2,-4.17 1.93,2.26 1.6,-1.88 -0.02,-2.41 1.79,-0.55 2.5,-1.55 4.25,-0.42 0.51,-2.76 -3.45,-2.33 -4.43,-3.58 -0.26,-3.01 2.59,-3.12 4.58,-3.67 0.29,-0.78 -0.81,-3.13 0.47,-2.48 2.46,0.65 2.45,-2.36 2.11,-3.23 1.27,-0.62 3.06,1.08 2.81,-1.49 0.06,-2.75 -4.88,2.23 -2.7,-0.53 -0.33,-1.84 3.17,-2.65 3.79,-1 0.44,2.38 2.69,0.96 0.74,-0.53 -0.37,-0.19 2.89,-3.12 0.16,-2.12 -1.52,1.62 -2.69,-1.67 -0.67,-0.49 2.18,0.6 1.78,-2.26 0.1,-2.63 1.64,-0.99 1.76,-1.25 3.09,0.31 2.65,0.05 -0.04,3.53 -1.13,3.83 -0.13,2.43 3.49,4.78 1.03,6.94 -1.52,2.38 -4.26,5.02 -2.96,8.1 -1.03,2.23 -5.62,0.34 -3.97,3.87 1.08,2.24 -0.41,4.62 0.29,6.91 -0.21,2.4 -1.5,4.65 -2.48,6.84 -1.89,2.33 -0.64,4.78 1.42,6.24 1.36,2.71 -1.06,4.75 -3.56,3.4 -3.47,0.13 -6.05,3.54 -6.55,6.75 -0.09,2.61 -2.39,4.76 -0.87,7.58 1.7,0.33 -0.26,3.51 0.65,5.09 0.93,2.11 2.11,4.27 1.04,6.66 -1.85,3.6 1.33,5.61 3.87,7.28 0.34,1.26 -0.49,2.52 -0.69,3.78 -4.37,0.5 -1.64,4.45 -0.68,6.73 -0.19,2.39 0.87,5.69 -1.37,7.29 -2.33,-0.08 -2.37,2.05 -2.44,3.42 -2.81,2.64 1.45,6.5 -0.89,9.33 -0.63,-0.51 -0.86,-4.28 -3.41,-3.07 -1.98,0.66 -1.1,-2.02 -2.18,-2.85 0.06,-1.66 0.25,-4.8 -1.34,-6.05 -1.51,0.96 0.6,3.37 -1.47,1.82 -1.6,1.08 1.29,3.05 0.43,4.75 1.82,1.57 -1.36,1.57 -0.61,3.28 -0.57,0.33 -1.78,3.28 -2.33,0.68 -1.69,-2.25 -3.03,0.06 -1.93,1.1 -2.37,0.2 -1.22,2.58 -3.27,2.72 0.26,1.74 0.63,2.15 -0.66,0.4 -0.55,-0.29 -0.31,3.24 -1.72,3.89 -1.13,1.13 -2.53,1.14 -2.96,2.81 -1.25,-1.4 -1.53,-2.14 -2.1,0.08 -0.58,1.07 -1.97,0.9 -2.97,1.19z m1.79,-42.62c-2.02,0.59 -1.81,3.69 -1.92,5.35 2.29,1.58 5.16,-1.56 2.82,-2.47 -2.51,1.62 -0.41,-2.26 1.2,-2.22 -0.69,-0.24 -1.35,-0.63 -2.1,-0.66z m-8.26,-3.48c1.26,1.05 1.96,-0.59 3.75,0.18 2.86,-0.7 0.32,-3.31 -1.23,-1.63 -0.54,1.11 -4.66,-2.16 -3.53,0.83 -0.64,0.74 0.98,1.54 1.01,0.63z m-1.56,-1.31c1.64,-1.54 -2.29,-0.9 0,0l0,0z m-3.39,20.54c-1.15,-1.48 -0.79,-2.31 1.27,-2.09 -0.5,0.65 -0.76,1.45 -1.27,2.09z m20.58,-43.12c1.89,-0.99 1.05,0.09 0,0z m18.74,-19.12c-0.11,-1.35 1.21,-2.72 0.71,-0.65l-0.24,0.29 -0.47,0.36 0,0z m7.46,-19.18c-1.61,-0.55 0.1,-1.14 0,0l0,0z m3.95,-10.61c-1.42,-0.85 2.16,-3.22 0.98,-0.56 -0.23,0.31 -0.59,0.56 -0.98,0.56z m8.03,-3.21c-0.35,-1.4 -4.22,-5.53 -0.69,-3.55 1.98,-0.66 -2.87,-2.41 0.24,-2.21 2.34,-1.07 1.29,3.96 3.81,2.24 0.12,-1.58 -1.95,-2.83 0.76,-2.09 1.98,-2.01 2.51,5.82 -0.36,3.01 -2.2,-1.1 -3.01,1.06 -3.76,2.6z m-5.57,-1.57c-2.14,-0.36 2.05,-0.11 0,0z m-7.93,-1.09c-0.6,-2.04 2.47,-0.64 0,0z m7.12,-4.13c0.59,-2.37 4.58,-1.01 4.01,-4.46 0.66,-1.69 0.95,3.05 2.77,1.99 1.53,1.25 -2.5,3.06 -1.7,0.6 -1.05,-1.01 -2.27,1.66 -3.77,0.7 -0.56,0.22 -0.96,0.7 -1.3,1.17z m7.58,-0.78c-1.19,-2.28 3.86,-0.43 2.34,-2.88 -3.7,-0.04 1.43,-1.56 0.6,-2.56 -2.52,-1.2 0.41,-2.37 1.15,-2.81 0.41,-3.22 -2.85,-1.84 -4.06,-0.47 -1.59,-2.04 2.26,-2.36 2.32,-4.57 0.14,1.33 0.46,2.85 1.65,2.42 0.8,1.52 3.32,1.84 3.24,-0.37 1.68,1.68 2.77,1.67 2.31,-0.48 0.79,-1.17 0.35,-2.79 1.61,-3.02 -0.4,-0.66 -1.42,-3.92 0.2,-3.31 0.95,2.39 -0.14,5.28 -0.89,7.26 2.94,1.88 1.55,-3.57 4.12,-3.05 0.22,-1.76 -3.3,-2.79 -1.17,-4.59 1.11,2.64 2.9,-1.39 2.9,-1.08 0.95,0.44 4.33,3.19 2.86,0.58 0.52,-1.54 -0.4,-5.86 -2.92,-3.36 -3.05,-0.22 1.04,-4.05 2.23,-1.43 1.8,-0.47 3.36,-0.55 3.65,1.78 1.6,2.82 3.68,-1.17 2.1,-1.52 0.07,-0.51 -0.69,-2.47 -0.41,-3.71 -0.86,-0.45 -2.21,1.67 -1.86,-0.59 0.28,-1.23 2.77,-3.11 1.94,-0.75 0.94,1.47 4.41,-0.15 2,-1.03 0.6,-1.49 3.48,0.04 1.97,-2.16 -0.79,-0.71 -2.04,-3.95 0.25,-3.13 1.93,-0.42 3.84,0.45 2.02,2.21 -1.75,1.98 -0.56,3.61 -0.42,5.65 -2.28,2.68 3.1,3.87 2.24,0.45 -0.18,-2.74 0.93,-5.32 1.76,-8.05 1.89,-3.05 -1.06,3.6 0.33,2.81 1.3,-1.62 0.64,3.35 2.9,1.4 2.12,-1.22 -1.68,-4.46 1.77,-4.91 0.72,-1.47 -2.34,-1.18 -0.57,-2.18 -0.51,-2.17 4.79,-1.62 2.39,1.11 -1.65,1.09 -1.95,4.14 -0.56,3.08 -0.4,2.24 2.84,0.85 3.62,0.4 -0.89,-1.13 -1.79,-4.79 0.32,-4.87 0.09,2.52 4.6,3.29 3.84,0.25 1.3,0.25 1.81,0.78 0.68,1.44 0.12,2.4 2.78,-0.68 3.9,1.46 2.08,1.26 -1.72,0.74 -1.03,2.68 -0.51,3.31 -7.08,0.08 -6.25,3.51 1.53,-0.19 4.57,0.06 4.67,1.27 -0.73,2.54 2.28,1.63 2.62,2.01 1.41,2.24 -3.5,3.67 -1.9,6.17 0.12,3.04 -1.51,0.49 -0.35,-1.03 0.73,-2.35 -0.61,-5.22 -3.22,-5.51 -2.52,-0.23 -4.95,-4.8 -6.83,-0.86 -0.98,2.59 -3.07,-0.98 -3.73,2.03 -1.82,2.85 -1.43,6.39 -0.81,9.47 1.12,1.85 1.17,3.38 -0.82,4.1 -0.7,1.31 0.29,4.41 -1.67,2.5 -2.14,-1.69 -5.02,-0.86 -5.85,1.4 -2.54,0.85 -4.72,0.04 -5.34,-2.66 -0.99,-2.14 -5.91,-6.2 -6.14,-1.61 0.57,2.13 -0.39,0.96 -1.13,1.23 -0.7,0.99 -4.96,0.92 -2.14,2.3 2.85,1.94 -1.88,4.5 0.34,5.92 1.59,3.24 -4.12,0.39 -5.68,0.21 -2.06,-1.04 -3.15,2.55 -4.42,0.38 -1.01,-0.36 -2.16,1.19 -2.67,1.07z m-9.01,-1c0.11,-2.56 2.91,0.13 0,0z m-1.13,-1.28c-0.8,-1.29 3.49,-1.49 0.69,-0.52l-0.34,0.34 -0.36,0.18 0,0z m4.3,-0.48c-1.71,-0.47 -0.9,-2.93 0.17,-2.2 -0,0.74 -0.11,1.47 -0.17,2.2z m4.79,-4.64c0.18,-0.78 1.29,-1.07 0,0z m7.64,-3.83c-2.24,0.29 -1.11,-3.47 -0.22,-0.75 0.06,0.35 1.74,0.98 0.22,0.75z m2.2,-0.62c-2.38,-0.91 -2.84,-5.4 0.1,-4.68 0.37,1.54 -0.1,3.12 -0.1,4.68z m-1.72,-6.1c-4,-0.97 3.45,-2.52 1.03,-0.52 -0.42,0.05 -0.59,0.56 -1.03,0.52z m5.27,-4.48c-0.27,-0.28 0.7,-0.67 0,0z m42.25,-2.91c-1.73,0.39 -2.88,-3.16 -0.45,-1.74 1.34,-0.78 2.3,1.96 0.45,1.74z m-35.9,-2.93c0.17,-2 2.33,-0.17 0,0z m1.12,-1.12c1.6,0.69 0.37,-2.16 2.16,-2.14 -0.43,0.5 -1.9,3.93 -2.16,2.14z m20.87,-4.79c0.68,-1.68 0.54,-0.43 0,0z m-9.67,-2.21c-2.58,-0.52 -0.4,-3.09 0.65,-0.8 -0.07,0.3 -0.24,0.8 -0.65,0.8z M319.32,12.08c-0.3,-1.14 -1.45,-2.77 -2.39,-2.03 -1.57,-1.66 3.97,-2.79 -0.11,-4.02 -1.19,0.78 -1.7,1.41 -2.54,-0.32 -1.8,0.29 -3.52,-4 -2,-4.15 0.28,2.4 2.41,-1.85 3.57,0.39 1.62,1.46 1.99,-0.61 1.81,-1.03 1.1,0 2.2,0 3.3,0 -1.65,1.5 0.79,4.98 -1.45,5.97 1.81,0.96 -0.87,3.73 0.84,4.72 -0.27,0.27 -0.64,0.46 -1.03,0.47z M334.56,1.41c-0.71,-0.78 1.26,-0.59 0,0z","name":"Norway"},"ua":{"path":"m458.88,376.43c-1.65,0.13 -4.78,-1.76 -1.5,-2.12 1.11,-0.94 -0.88,-2.9 1.02,-4.06 0.62,-1.77 2.75,-4.95 1.17,-6.55 -2.35,-0.6 0.77,-4.92 0.58,-1.37 1.22,0.09 1.33,-0.46 2.29,-1.4 1.42,1.03 2.11,1.68 2.01,-0.49 0.8,-0.31 0.98,2.31 1.91,0.48 2.09,-0.77 2.07,-2.38 0.02,-2.62 0.48,-3.05 -2.01,-4.08 -4.34,-4.76 -1.03,-1.35 0.14,-4.1 -2.32,-4.58 -0.19,2.48 -3.85,-0.68 -2.94,-2.62 0.58,-1.57 -1.58,-5.77 -2.62,-3.02 -1.32,-0.9 -3.45,-3.78 -4.76,-1.05 -0.61,-1.26 -0.31,-1.31 -2.39,-0.85 -1.59,-0.19 -3.7,-2.91 -5.96,-1.05 -1.9,1.41 -4.52,1.99 -6.34,2.49 -0.3,1.21 -2.98,2.87 -3.26,4.06 0.69,2.88 -3.92,2.94 -5.88,3.36 -1.91,1.06 -2.85,5.5 -5.12,2.22 -2.55,-1.4 -4.85,1.16 -7.45,0.17 -2.78,0.68 -6.22,-1.81 -7.42,1.27 -1.7,-1.79 -4.36,-1.99 -6.08,-3.8 -1.69,-1.99 1.67,-4.76 1.1,-7.32 0.71,-2.08 3.89,1.72 3.03,-0.71 -0.43,-1.86 -2.14,-2.21 -2.09,-4.41 -1.6,-2.52 1.02,-5.01 1.85,-7.4 1.48,-2.09 2.06,-5.46 4.76,-6.09 3,-1.14 0.85,-4.79 0.14,-5.51 2.5,-2.1 -3.76,-3.23 -3.93,-5.84 -0.3,-1.41 -1.88,-4.75 0.96,-3.25 2.78,-0.65 2.08,-4.77 5.31,-4.83 2.44,-2.13 5.65,-1.09 8.41,-2.29 2.86,0.12 5.82,0.8 8.71,-0.13 1.44,0.02 2.96,3.43 4.46,0.67 0.48,-0.61 1.02,3.11 2.27,0.92 -0.68,-2.01 1.68,-0.28 2.33,-1.83 1.72,1.64 3.14,-2.06 4.36,1.19 0.98,-0.83 1.53,-5.36 3.12,-2.13 0.91,1.83 2.9,1.59 3.18,-0.37 1.11,-0.89 4.84,0.77 2.92,-1.35 2.22,-0.55 3.94,4.29 5.74,0.82 -0.53,-2.27 -3.24,-4.21 -1.65,-7.03 0.3,-2.91 3.55,-3.36 5.73,-4.62 2.8,0.98 5.55,-1.1 4.6,-3.99 2.15,-0.59 4.74,-0.01 5.62,-2.79 1.28,-1.72 2.08,2.03 2.83,-0.54 3.15,-1.7 3.09,3.74 6.17,3.78 2.69,0.81 -2.77,1.83 -0.06,3.34 0.97,1.1 0.27,1.92 1.66,2.64 0.13,1.93 0.76,2.76 1.8,0.93 1.75,0.21 3.63,-0.42 4.86,-1.04 1.22,1.6 2.86,1.33 3.58,3.44 0.66,2.12 2.97,6.38 5.86,3.86 0.95,-2.66 2.98,0.62 4.61,-0.26 2.96,0.38 3.76,-3.58 5.99,-4.66 2.15,1.36 3.87,3.07 6.32,3.78 2.39,1.73 1.46,-2.06 1.83,-2.22 2.04,0.83 3.63,-0.35 5.65,0.78 1.64,-1.06 3.29,-0.67 5.4,-0.98 -0.34,2.96 3.78,0.35 3.93,-0.21 -1.54,1.79 2.89,1.91 1.36,4.34 -0.91,1.71 -3.3,4.32 0.42,4.36 1.34,-0.17 -2.51,1.76 -0.87,3.22 0.73,1.16 4.31,0.82 2.94,3.4 -1.12,2.14 2.56,-1.79 1.05,1.32 0.04,1.92 1.74,4.67 -1.56,4.6 -2.59,0.04 -5.57,1.58 -4.88,4.34 -1.93,1.59 -3.46,4.3 -2.04,6.74 1.21,-0.9 1.4,3.27 -0.48,2.33 -2.61,-0.17 -4.34,2.86 -4.47,4.25 -3.32,-0.37 -1.93,5.58 -4.94,3.83 -1.97,0.68 -1.55,3.31 -3.9,2.83 -2.31,2.16 -4.28,4.87 -4.46,8.16 0.05,2.37 -1.89,1.63 -2.69,0.94 -1.43,2.66 1.92,4.83 3.49,6.52 1.72,1.52 4.3,4.21 6.67,2.42 1.12,-1.05 0.41,-2.57 2.09,-1.56 1.41,-0.15 1,-2.82 3.17,-2.37 1.15,-0 0.13,2.98 0.5,4.21 -1.72,0.79 -3.13,2.24 -5.41,1.17 -2.72,0.19 -1.51,3.05 -3.33,4.45 -1.46,1.36 -5.27,2.16 -5.39,5.34 -0.65,2.52 -2.91,5.33 -5.63,3.62 -2.92,-0.52 2.13,-0.53 -0.45,-1.77 -0.6,-1.76 -0.24,-6.9 -3.31,-5.63 -2.51,0.74 -5.09,-2.4 -7.49,-0.19 -0.84,-1.11 2.17,-2.44 2.5,-3.9 1.15,-2.11 4.76,-3.17 5,-5.4 -1.21,-0.47 -1.1,-4.45 -2.98,-2.14 -0.01,2.53 -3.55,-2.55 -3,-0.06 -1.18,1.35 -4.02,3.26 -6.29,3.26 -0.55,-2.41 -5.82,0.8 -2.84,-2.01 -2.07,-2.11 3.13,-0.37 2.51,-2.12 0.43,-0.87 2.54,-3.83 0.04,-2.33 -1.67,2.49 -5.64,0.74 -4.34,-2.2 -3.44,-0.71 0.17,4.67 -3.05,4.35 -0.95,0.4 -1.24,-2.89 -2.18,-0.81 1.19,3.1 -5.65,1.69 -4.31,5.43 -0.19,2.64 -0.71,6.16 -2.65,8.5 -1.92,0.15 -2.28,-0.37 -1.97,1.56 1.06,2.6 -1.47,1.65 -1.44,-0.04 -3.03,0.54 1.86,5.97 -1.63,4.84 -1.69,1.04 -2.76,2.58 -4.85,3.23 -0.33,0.68 0.22,1.06 -0.9,0.94z m8.84,-3.13c-1.24,-0.5 0.31,-1.59 0,0z M480,354.71c-2.02,-0.24 1.4,-0.94 0,0z","name":"Ukraine"},"il":{"path":"m564.91,519.32c-2.79,-0.13 -5.59,-0.02 -8.39,-0.06 1.03,-3 0.55,-6.35 0.36,-9.47 -0.77,-1.89 -0.08,-3.97 0.69,-5.38 -2.21,-3.68 3.62,-1.36 3.34,-4.63 0.16,-2.5 0.5,0.45 0.78,1.3 0.41,1.74 0.97,3.45 0.64,5.26 0.64,4.15 2.85,8.05 2.93,12.32 -0.33,0.17 0.28,0.88 -0.36,0.66z","name":"Israel"},"sa":{"path":"m593.15,519.31c-2.83,-0.62 -5.1,-2.77 -7.77,-3.86 -1.58,-0.98 -5.22,-1.86 -2.02,-3.26 5.2,-3.81 10.77,-7.23 15.26,-11.9 1.43,-2.99 4.63,-3.12 7.49,-3.98 3.73,-1.26 7.76,-1.54 11.57,-0.41 3.34,1.04 6.79,1.79 10.32,1.49 3.1,-0.23 6.16,0.27 9.07,1.36 7.05,2.14 14.23,3.86 21.25,6.06 3.22,1.22 7.13,2.8 10.33,0.7 3.47,-1.54 7.12,-2.66 10.59,-4.19 0,5.98 0,11.96 0,17.94 -28.52,0 -57.04,0 -85.55,0l-0.54,0.05z","name":"Saudi Arabia"},"iq":{"path":"m665.09,505.54c-3.93,-0.14 -7.37,-2.41 -11.2,-3.08 -6.98,-1.9 -13.93,-3.92 -20.88,-5.88 -4.51,-0.55 -9.21,0.46 -13.56,-1.25 -4.06,-1.23 -8.45,-1.67 -12.53,-0.27 -2.28,0.01 -6.14,3.28 -6.23,-0.28 -1.25,-1.52 -3.9,2.58 -3.26,-0.38 2.09,0.09 -1.51,-3.02 -1.67,-4.04 -1.32,-2.57 -5.49,-5.02 -2.13,-7.49 4.5,-5.84 9.16,-11.56 13.6,-17.45 2.04,-3.07 2.39,-7.4 0.02,-10.4 -1.41,-3.28 0.38,-7.66 -2.62,-10.31 -3.09,-2.29 -2.71,-6.73 0.85,-8.16 2.5,-2.92 2.33,-7.04 4.39,-10.19 0.66,-2.04 0.93,-3.47 3.19,-3.89 2.1,-2.75 5.72,-0.13 8.03,-2.44 0.9,-1.04 2.2,-3.85 2.95,-0.99 0.24,2.01 2.47,2.98 2.75,0.39 0.38,-1.99 1.84,-3.41 3.5,-1.73 2.25,0.16 -1.13,2.67 1.73,2.71 2.42,-0.18 1.65,4.3 5.21,2.73 1.14,1.18 1.93,5.76 4.16,3.01 2.6,0.76 5.25,0.47 7.14,-1.59 0.61,0.22 -3.19,2.13 -1.4,3.83 1.09,1.94 5.9,4.19 1.79,5.59 0.41,2.25 -2.38,5.11 0.78,6.65 -2.86,-0.58 -2.74,5.86 0.16,4.24 -0.52,2.48 -0.45,5.39 2.6,5.52 0.99,0.71 1.98,1.43 2.96,2.14 0.34,-1.31 1.06,-1.78 0.88,-0.17 1.65,-0.62 3.99,0.32 4.03,2.59 0.12,1.35 0.91,3.75 2.75,1.76 3.33,-1.46 6.61,1.38 9.97,1.03 2.56,-1.77 4.83,0.86 6.18,2.91 0,13.19 0,26.38 0,39.57 -4.3,1.87 -8.8,3.32 -13.06,5.23 -0.36,0.05 -0.72,0.08 -1.09,0.08z","name":"Iraq"},"az":{"path":"m625.84,392.01c-2.29,-1.74 -6.12,-1.39 -7.67,-4.17 -2.87,-0.9 2.82,-3.1 1.5,0.21 -0.29,2.16 0.66,-0.38 1.38,-0.86 1.98,0.67 2.99,-0.38 4.14,-1.97 0.78,0.36 1.17,3.12 3.09,2.25 0.41,1.86 5.4,3.6 1.25,3.88 -1.24,0.15 -2.44,0.52 -3.69,0.66z m9.25,-4.53c-1.22,-1.31 -1.37,-1.74 -0.58,-3.22 -0.7,-1.79 -4.05,0.28 -2.18,-2.45 -0.71,-3.07 -3.86,1.6 -5.74,-0.73 -1.12,-1.04 -4.8,-0.64 -2.24,-1.72 1.66,-3.91 -3.46,-4.05 -5.96,-4.45 -3.06,-0.54 1.31,-0.13 -0.04,-1.79 -1.74,-0.11 0.76,-3.32 -2.15,-2.78 -1.13,-2.07 -3.77,1.24 -3.43,-1.3 -3.83,0.78 -1.14,-4.07 1.25,-3.79 1.55,-0.11 2.45,2.19 4.64,1.11 1.17,-0.47 1.66,-2.32 3.53,-1.24 4.04,0.44 2.81,-5.63 -0.82,-5.09 -1.19,-0.23 -4.57,-0.92 -2.6,-1.97 -1.03,-3.22 2.59,-2.79 4.29,-1.55 1.8,0.76 4.71,-0.66 4.29,1.94 2.3,1.27 5.96,-0.02 6.83,-2.57 -0.51,-2.81 0.78,-5.44 1.5,-8.17 0.77,-1.87 3.93,1.21 5.57,1.75 2.04,2.28 4.63,3.86 7.4,4.84 2.72,2.9 5,-2.29 8.05,-0.66 2.42,0.7 -1.69,0.86 -2.16,1.8 -1.58,1 -0.94,2.98 -2.64,4.05 -0.87,2.65 2.35,4.7 1.48,7.28 0.01,2.24 2,3.06 1.53,5.18 2.05,2.31 -2.94,0.21 -1.67,3.07 0.41,2.71 2.06,5.63 2.66,7.96 -1.4,1.58 -3.89,-2.8 -4.72,-0.12 -0.51,-2.33 -5.01,-0.05 -2.24,-2.75 1.89,-2.25 -0.89,-2.79 -2.14,-3.4 -0.39,-1.7 3.13,-2.19 0.43,-2.98 -2.55,-2.17 -6.8,-1.82 -7.18,2.01 -1.56,2.2 -2.45,4.87 -3.2,7.25 -1.02,1.28 -1.42,2.9 -1.76,4.47z","name":"Azerbaijan"},"ir":{"path":"m679.21,458.81c-1.85,-0.64 -2.96,-4.67 -5.07,-2.4 -2.51,1.13 -4.99,-0.69 -7.5,-0.94 -1.54,-1.25 -4.65,1.4 -4.88,0.3 -0.35,-2 -1.76,-5.08 -4.31,-4.59 -0.55,-2.48 -2.8,0.93 -4,-1.28 -1.15,-1.36 -3.82,-0.5 -2.7,-3.18 1.2,-2.24 -1.18,-2.93 -1.92,-2.92 -0.76,-2.14 0.85,-1.8 1.93,-2.95 -0.87,-1.54 -2.25,-2.23 -1.18,-3.98 1.41,-1.22 -0.93,-2.74 1.62,-3.12 2.22,-2.84 -3.32,-4.02 -3.44,-6.68 1.23,-0.62 3.69,-3.96 0.62,-3.5 -2.16,1.88 -4.6,2.34 -7.4,1.61 -2.13,2.68 -1.52,-4.01 -4.35,-3.02 -2.59,1.12 -1.74,-3.71 -4.6,-2.9 0.47,-2.81 -2.6,-2.62 -3.34,-4.74 -3.51,-0.37 -2.73,-5.88 -6.79,-4.9 -2.43,-0.23 0.88,-4.74 -1.15,-6.42 -2.63,1.81 -2.65,-3.09 -4,-4.32 -2.26,0.51 -1.17,-4.01 -3.82,-4.01 -1.08,-1.34 3.43,-0.98 2.24,-3.41 -0.62,-1.73 -1.46,-4.27 1.42,-2.93 2.06,1.49 5.14,2.91 7.63,3.88 2.25,1.24 5.18,-0.04 7.5,-0.74 2.07,-1.71 5.07,-2.61 4.75,-5.97 2.3,-2.33 1.71,-5.53 3.7,-8.09 0.98,-2.61 2.58,-5.68 5.71,-3.44 1.82,0.32 -1.95,3.66 1.08,3.95 4.06,-0.35 -2.73,4.32 1.52,4.83 1.27,-1.49 2.59,2.44 3.8,0.15 1.45,1.58 3.99,1.1 4.87,0.71 1.82,2.85 3.68,6.92 7.62,6.9 3.17,0.36 5.34,-2.56 8.13,-3.02 2.01,0.9 4.99,2.01 6.34,2.88 -0.02,22.74 0.03,45.49 -0.03,68.23z","name":"Iran"},"ge":{"path":"m581.92,380.27c-2.26,-0.5 1.41,-3.83 -0.72,-5.4 -1.82,-2.3 -4.05,-4.17 -5.45,-6.77 -1.72,-2.18 -4.46,-0.36 -5.95,-2.58 -2.48,-1.15 -5.99,1.77 -7.69,-0.38 -1.24,-0.61 -3.4,-1.34 -1.11,-2.52 2.92,-1.18 5.31,-0.74 8.31,-1.17 2.62,-0.64 4.81,0.81 7.27,-1.05 1.64,-1.03 2.03,-2.53 4.37,-2.32 3.09,-1.55 5.23,0.93 8.34,0.23 1.97,-0.34 3.8,-1.06 3.76,1.37 3.33,1.16 4.09,-3.43 6.09,-4.97 1.82,1.19 3.56,0.44 3.29,-1.84 2.38,1.1 4.89,0.94 6.98,-0.29 0.1,2.19 0.6,4.52 3.44,3.9 1.82,0.87 6.7,-2.08 4.44,1.62 -1.04,4.09 6.18,1.33 6.51,4.88 -0.55,2.71 -3.63,-0.63 -4.78,1.93 -2.42,2.07 -3.95,-2.25 -6.59,-0.28 -2.88,0.84 -1.75,4.15 -4.11,5.26 -2.15,1.64 -6.02,2.97 -7.99,5.72 -1.4,1.55 -3.24,0.61 -4.57,1.11 -0.32,-2.7 -4.41,-0.39 -5.08,-2.59 -2.74,0.39 -1.4,4.41 -4.46,3.55 -2.08,-0.04 -2.63,2.5 -4.3,2.58z","name":"Georgia"},"sy":{"path":"m570.98,505.1c-2.37,-0.06 -4.22,-2.23 -6.66,-1.9 -1.76,1.54 -0.95,-3.61 -2.17,-4.66 0.26,-2.1 3.06,-4.25 2.48,-6.23 -2.86,0.37 -0.12,-3.18 1.61,-2.81 1.41,-1.1 -2.08,-2 0.23,-3.24 2.46,-1.85 0.82,-6.41 -2.32,-5.73 1.74,-2.54 -3.41,-1.48 -4.52,-0.5 -2.16,-1.45 -1.71,-4.59 -2.2,-6.89 -0.72,-2.13 -3.63,-2.2 -2.69,-4.95 -1.91,-3.07 4.61,0.44 2.96,-3.37 1.96,-1.34 -0.54,-4.12 2.56,-4.37 1.92,-1.95 -2.9,-3.08 -1.96,-5.67 -0.17,-2.68 3.53,-1.88 4.07,-0.24 2.8,-1.4 6.26,-2.87 7.96,-6.08 1.77,-3.87 6.01,-0.57 8.96,-1.32 4.89,-1.98 9.3,-5.28 12.15,-9.78 2.06,-3.09 5.52,-4.42 8.88,-5.51 3.15,-0.62 4.71,-4.01 6.68,-5.54 2.16,2.06 -0.35,4.49 -0.71,6.75 -0.34,2.94 -3.64,3.54 -4.67,5.93 -0.77,2.72 0.96,5.34 2.92,7.06 1.91,2.86 0.25,6.61 2.05,9.52 1.43,2.7 2.07,6.08 0.11,8.71 -2.41,4.04 -5.84,7.35 -8.54,11.19 -6.92,8.84 -13.8,17.72 -20.31,26.87 -1.64,2.62 -4.19,2.66 -6.86,2.76z","name":"Syrian Arab Republic"},"tr":{"path":"m494.91,482.2c-2.64,-0.83 -6.61,0.7 -6.69,-3.38 -0.28,-2.26 -4.06,-2.7 -3.32,0.14 -2.13,0.72 -2.01,-4.36 -4.24,-2.06 -1.1,1.64 -1.71,4.09 -2.75,1.3 -0.06,-0.7 3.87,-0.84 1.58,-2.85 -2.66,-0.75 -4.9,2.05 -7.56,2.3 -3.22,0.12 2.63,-2.09 -0.16,-3.58 -1.02,-1.26 -2.59,-1.78 -3.85,-0.25 0.8,-2.14 -2.11,-2.59 -0.3,-4.42 0.7,-2.91 -3.46,-4.14 -4.72,-3.08 -0.35,-2.13 -2.41,-1.66 -2.94,-0.12 -0.96,-0.52 -4.49,-1.13 -1.65,-1.67 1.95,-1.12 -0.35,-1.93 -0.64,-2.3 -0.1,-2.91 1.76,1.21 2.44,2.3 1.21,0.53 0.61,-1.54 2.32,-0.91 2.14,0.31 3.08,-4.19 0.9,-2.3 -2.98,0.71 -3.35,-2.88 -0.63,-3.63 1.42,-2.31 -2.41,-1.49 -2.02,-3.47 -1.48,-1.26 -3.08,-1.7 -1.12,-3.61 1.88,-4.06 -3.41,-1.44 -4.89,-0.21 -3.22,2.13 -1.41,-2.71 -2.53,-4.43 0.27,-1.5 2.4,-1.02 1.65,-3 1.08,-2.79 3.49,-3.54 5.85,-4.95 1.33,-0.2 3.18,2.13 5.06,0.5 2.19,-0.32 0.53,-4.12 2.21,-2.66 -1.01,2.78 3.65,-0.5 5.07,-0.34 1.73,-0.22 7.01,-0.13 5.15,-2.97 -1.48,-0.21 -3.18,0.39 -0.99,-0.95 1.96,-1.62 4.19,-2.4 6.66,-2.8 2.77,-0.54 1.2,-2.91 -0.89,-1.86 -1.93,1.45 -3.4,0.81 -4.38,0.32 -3.58,0.35 -2.31,-4.79 0.81,-3.52 2.71,0.01 5.57,-0.39 7.64,-2.28 2.46,-0.32 5.31,1.16 7.39,-0.69 2.9,-0.41 1.41,-4.52 4.23,-5.54 2.71,-2.98 4.61,-6.84 8.39,-8.68 2.29,-1.78 4.29,-3.83 7.39,-4.02 3.16,-0.7 6.47,-1.22 9.26,-2.97 -0.18,-2.01 2.92,-3.03 2.12,-0.46 1.09,2.77 5.37,3.22 7.04,0.72 1.14,-1.37 -0.27,2.45 1.16,0.14 2.04,-1.94 2.88,3.79 5.57,2.83 1.27,-1.86 4.62,-3.78 5.67,-1.09 1.67,-0.99 4.1,0.27 5.52,-0.17 -0.07,-1.45 1.44,-1.93 0.76,-0.72 3.48,0.31 7.66,-0.08 9.71,-3.32 2.34,-1.18 4.33,-4.18 7.15,-3.36 2.71,-0.07 6.67,-0.67 7.5,-3.83 1.38,-2.88 4.81,-4.34 5.49,-7.63 0.34,-3.02 3.69,-0.01 3.89,-2.79 0.79,-1.71 6.06,-0.8 5.2,-2.54 -0.27,-1.98 1.64,-2.11 0.91,-0.61 1.97,-1.13 4.24,-0.33 5.11,0.95 0.95,1.76 2.34,-1.7 3.43,0.93 2.07,0.94 4.5,1.8 3.64,4.81 0.12,2.83 2.56,6.38 5.64,4.35 1.45,-1.61 6.05,-1.12 6.12,-0.28 -2.87,1.25 2.28,4.65 -1.45,5.76 -2.31,0.86 -1.86,1.74 0.02,2.55 2.07,1.41 1.16,4.02 3.6,4.69 1.23,1.57 1.59,5.71 3.8,4.2 0.43,2.37 -1.79,7.52 2.74,6.05 2.64,-0.44 0.94,3.97 3.94,4.02 3.58,1.02 -1.74,2.3 -1.12,4.76 -1.2,0.98 -0.5,-3.85 -3.12,-2.67 -1.98,1.2 -2.57,4.14 -5.61,3.29 -2.88,-0.31 -4.84,1.72 -7.02,2.7 -0.69,1.88 -0.86,5.21 -2.91,2.44 -2.75,-0.22 -2.61,4.46 -5.58,4.92 -2.98,1.72 -6.75,1.93 -9.15,4.66 -2.61,2.66 -4.36,6.14 -7.61,8.16 -2.25,1.32 -4.52,3.36 -7.26,3.28 -3.54,-1.52 -7.49,-0.78 -9.08,3.03 -1.68,2.28 -5.43,4.75 -7.39,2.82 -3.82,-1.14 -4.64,3.62 -2.75,6 0.73,1.14 2.5,1.57 0.17,2.12 -3,0.1 0.83,3.76 -2.09,4.07 1.59,1.89 -1.39,2.48 -1.35,0.31 -1.32,-1.73 -3.85,-3.07 -1.43,-5.18 3.46,-2.09 -0.87,-8.48 -3.12,-4.45 -0.21,1.09 -4.52,4.06 -1.07,3.29 -0.14,0.32 -3.7,3.62 -5.39,1.57 -3.14,-1.5 -6.7,0.91 -7.75,3.93 -2.31,1.12 0.64,5.77 -2.52,4.44 -0.89,2.68 -3.25,3.27 -5.84,4.06 -1.96,1.06 -3.83,3.65 -6.37,2.47 -2.84,-1.55 -5.07,-4.65 -8.7,-4.14 -2.94,-0.38 -6,-0.94 -8.9,-0.06 -3.48,-0.29 -3.26,3.57 -2.85,5.62 -0.19,1.75 1.15,3.5 -1.34,2.67 -2.13,0.36 -2.94,2.88 -4.85,3.38z m-22.48,-0.92c1.54,-1.56 1.67,0.46 0,0z m4.91,-2.51c-0.79,-0.93 0.97,-1.15 0,0z m-7.81,-0.87c-2.21,-0.79 -0.04,-1.14 0.54,-0.39 -0.12,0.2 -0.29,0.4 -0.54,0.39z m-17.07,-35.78c-2.05,-1.66 3.84,-4.8 1.02,-1.64 -0.17,0.27 -1.7,3.54 -1.02,1.64z m-2.5,-4.63c-2.27,-0.95 2.99,-3.59 0.8,-5.77 -1.18,-2.59 4.67,-3.55 1.64,-6.24 -1.25,-1.27 -3.7,-1.75 -1.56,-3.41 0.31,-2.43 2.93,-0.92 3.7,-3.21 1.99,-1.8 4.08,2.49 6.12,-0.22 3,-2.82 1.8,3.03 4.59,3.75 2.54,1.72 5.71,1.31 8.59,1.46 1.59,1.71 -1.83,5.17 -3.31,2.87 -1.59,0.83 -4.21,-0.49 -5.46,2.07 -2.23,0.06 -4.36,0.17 -4.68,3.06 -0.43,2.55 -2.87,5.66 -5.23,3.75 -1.9,0.1 -3.3,1.78 -5.2,1.9z","name":"Turkey"},"am":{"path":"m631.96,389.85c-1.96,-0.78 -2.5,-4.05 -4.9,-3.4 0,-2.98 -2.99,-2.85 -3.89,-0.42 -0.72,0.59 -2.05,-1 -2.73,0.47 -1.44,-4.24 -3.82,2.15 -6.08,-0.34 -2.43,-1.36 -5.05,-0.13 -7.33,0.88 -1.6,1.02 -2.24,-1.35 -3.25,-2.19 -0.22,-2.63 -0.35,-6.8 -3.95,-6.8 -1.56,-1.33 3.34,-2.22 3.67,-4.1 2.01,-1.81 4.84,-2.17 7,-3.75 -1.93,-0.72 2.92,-0.35 0.29,0.72 0.12,2.73 3.55,-1.6 5.25,0.33 2.07,0.17 -1.51,3.12 1.09,4.06 1.57,1.97 7.78,-0.09 6.04,3.56 -1.81,0.88 -2.21,2.81 0.36,2.27 2.62,0.26 4.73,3.06 7.3,0.67 1.25,-0.38 -1.56,2.52 0.95,2.4 1.37,0.14 2.22,0.32 0.58,1.07 -0.16,1.55 3.78,3 0.58,4.04l-0.53,0.37 -0.44,0.16 0,0z","name":"Armenia"},"cy":{"path":"m527.35,491.44c-2,0.03 -5.42,-2.87 -2.34,-3.85 0.27,-2.84 4.77,-0.45 3.78,-3.88 -1.1,-2.02 2.82,-0.4 4.03,-1.67 3.21,-1.08 5.34,-3.84 7.9,-5.9 -1.85,1.69 -5.66,5.67 -1.55,7.09 -1.16,0.96 -4.02,1.69 -3.88,3.92 -1.79,0.94 -4.14,2.55 -4.75,3.95 -1.18,-1.33 -2.1,0.23 -3.19,0.34z","name":"Cyprus"},"ie":{"path":"m160.13,300.45c-1.94,-0.73 -5.41,-0.29 -5.93,-1.1 2.68,-0.96 1.02,-3.47 -1.27,-2.29 -2.17,-0.03 4.61,-0.27 1.86,-1.87 -1.29,0.35 -5.82,0.84 -4.6,-0.88 0.33,-2.41 5.15,0.07 4.57,-2.91 -1.5,-0.99 -3.62,0.6 -3.81,-1.26 1.2,-0.91 6.26,2.54 3.91,-0.67 0.38,-1.38 3.44,-1.82 5,-1.34 1.1,0.96 5.65,0.21 3.16,-0.84 -0.11,-2.83 -2.54,-0.03 -3.01,-0.47 -0.23,-0.23 -3.43,-0.5 -1.1,-1.34 2.22,-1.01 0.54,-4 2.82,-3.42 2.56,1.02 3.91,-3.17 0.52,-2.46 -1.68,0.14 -2.56,-0.23 -2,-1.83 -0.18,-2.01 -5.12,-1.21 -3.94,-2.82 2.15,0.5 2.19,-2.65 4.57,-1.69 2.67,-0.16 1.13,-2.7 -0.21,-3.26 0.29,-1.31 0.02,-3.18 -0.75,-3.28 2.65,-0.82 4.91,0.87 5.93,2.56 1.46,-1.86 3.2,1.45 5.23,1.05 -1.45,-1.4 -1.04,-3.03 1.32,-2.78 1.21,-0.78 -0.05,1.72 1.32,2.45 1.11,1.84 4.55,5.05 6.16,2.17 -0.49,-1.92 2.26,-1.77 1.43,0.13 0.94,1.15 1.06,2.27 0.8,3.26 0.63,1.48 4.47,-0.64 2.75,0.86 -2.34,0.42 -0.05,3.2 -0.77,4.83 0.46,1.62 -0.08,2.98 -1.28,2.32 1.02,2.41 1.46,5.54 -0.48,7.61 -1.25,2.01 -3.34,4.38 -4.14,6.02 -2.56,-0.85 -5.09,-0.34 -7.67,-1.06 -1.16,0.41 -0.62,2.52 -2.3,1.42 -1.5,0.14 -2.91,2.49 -3.4,0.19 -2.29,-1.05 -1.04,2.27 -2.69,2.29 -0.11,0.95 -1.6,-1.12 -2.01,0.4z m13.73,-33.46c2.33,-2.06 -0.9,-1.95 -2,-2.14 -1.29,-0.53 -2.55,-1.96 -0.25,-1.08 1.89,0.69 2.47,-1.66 2.15,-3.1 -1.16,-1.71 7.03,-1.16 4.23,1.31 -0.31,1.85 2.66,-0.08 1.09,1.63 -0.53,1.73 -5.09,0.69 -2.83,2.72 -0.77,0.31 -1.61,0.36 -2.38,0.64z m6.45,-5.05c0.02,-0.88 0.61,0.23 0,0z","name":"Ireland"},"gb":{"path":"m182.64,325.46c0.06,-1.95 -4.47,-2.09 -0.74,-2.3 2.67,-0.61 3.94,-3.31 6.49,-4.14 2.12,-0.77 1.4,-4.5 3.94,-3.31 1.45,-3.67 5.43,-1.45 8.06,-0.26 2.91,0.6 2.6,-3.72 5.07,-4.06 1.35,-0.1 4.35,-3.93 1.42,-2.57 -1.86,1.99 -5.05,0.84 -6.82,2.84 -2.27,-0.51 -2.72,-5.62 -5.77,-3.31 0.24,-2.37 -1.53,-4.27 -3.69,-2.44 -0.87,0.75 -2.94,0.79 -1.58,-0.17 0.16,-1.27 -3.6,-0.88 -1.52,-2.98 1.52,-0.74 3.44,0.29 4.82,-1.36 2.13,0.95 4.49,-1.92 5.83,-3.38 1.68,-2.26 0.05,-8.36 -3.37,-5.58 -1.46,1.33 -0.19,-1.41 0.97,-0.91 1.28,-1.84 2.91,-2.79 5,-2.8 1.2,0.32 4.62,-0.54 5.23,2.01 0.71,1.84 0.61,0.28 0.62,-0.81 -0.49,-1.45 0.01,-1.88 0.83,-1.63 -1.44,-2.21 1.58,-2.99 1.67,-4.6 -1.45,-0.49 -1.63,-2.14 0.09,-1.51 0.69,-1.16 0.79,-2.38 1.37,-3.56 -0.63,-2.27 -3.62,2.01 -2.38,-1.12 -0.36,-1.35 -2.39,0.41 -1.46,-1.51 -2.08,-2.31 0.12,-6.19 3.07,-5.98 2.74,-1.73 -0.83,-1.86 -2.08,-2.37 -0.92,0.48 -3.28,2.29 -4.42,1.19 -1.32,1.2 -1.79,-3.4 -3.43,-0.83 0.32,2.13 0.14,1.46 -0.76,0.01 -1.33,-0.68 -2.66,-1.39 -1.32,-3.18 1.13,-2.26 5.13,-4.6 2.33,-7.17 0.52,-2.42 1.47,-4.31 0.99,-6.83 -1.19,-2.25 -5.91,3.7 -3.96,0.19 -1.17,-1.95 1,-2.29 1.54,-3.39 -1.93,-1.31 3.92,-1.92 1.97,-3.06 1.93,-2.14 -1.4,-1.12 -1.91,0.17 -2.64,0.37 -2.78,2.95 -5.17,3.25 1.64,-1.88 1.56,-3.32 4.36,-3.1 0.45,-1.67 -5.98,-1.25 -1.81,-1.19 1.82,-0.7 -1.08,-3.69 1.83,-2.58 2.2,1.18 2.55,-1.86 1.62,-2.28 3.21,-0.32 0.94,-5 -0.12,-6.67 -1.49,-3.19 1.62,1.59 1.66,-1.31 -0.16,-0.99 3.11,1.17 2.06,-1.21 -1.02,-1.19 -0.29,-1.17 0.73,-0.82 0.07,-1.49 0.01,-1.71 1.64,-1.31 1.56,-1.15 -0.74,-2.21 0.86,-3.26 -0.88,-3.08 1.49,-0.59 1.87,-0.27 0.74,0.04 0.92,2.92 2,0.79 2.21,-0.9 6.43,0.18 7.86,0.3 -1.51,1.12 -1.16,3.83 -3.76,4.28 -1.25,1.24 -5.25,2.21 -4.45,4.19 2.02,-0.77 1.46,0.73 0.51,0.2 -2.65,-1.31 -3.91,3.83 -0.65,3.27 1.6,-1 4.76,-1.27 6.96,-0.43 2.15,0.77 9,0.4 6.36,4.13 -2.17,1.32 -1.95,4.3 -3.79,5.88 -1.36,2.24 -3.73,4.99 -6.67,3.85 -2.54,0.88 -0.66,2.52 1.1,1.38 0.78,-0.5 3.15,3.35 0.84,1.99 -2.07,-0.28 -3.16,1.31 -5.18,1.63 -0.02,2.53 4.56,1.95 5.82,1.47 2.3,1.2 3.8,3.55 4.55,5.85 2,2.23 0.13,5.79 1.35,8.49 -0.45,3.02 1.26,4.86 3.81,6.01 1.66,1.49 2.34,4.19 3.57,5.37 -2.57,1.95 1.1,5.12 0.44,6.31 -2.04,-0.08 1.34,3.78 1.3,5.11 0.78,2.24 -5.08,2.32 -2.09,4.71 1.56,2.69 3.3,0.05 4.83,-1 2.51,1.1 6.37,1.79 6.61,5.25 -0.28,2.6 -1.71,7.67 -4.87,6.84 -2.14,0.29 1.39,3.23 -1.35,2.01 -1.64,-1.62 -4.38,2.64 -1.7,1.39 1.98,0.5 -1.21,2.23 -2.35,1.41 -3.04,0.03 -0.52,3.18 1.11,2.57 2.13,-1.55 -0.82,1.67 1.85,1 1.37,0.01 4.16,-1.13 2.4,1.04 0.18,1.94 -3.04,1.77 -3.79,3.01 -3.03,-0.26 -5.14,2.46 -7.81,0.22 -2.14,-0.87 -5.12,1.06 -5.71,-1.04 -0.97,0.35 -1.61,-1.39 -2.37,0.11 -0.34,-1.96 -3.3,-2.15 -1.9,0.13 -1.76,0.29 -4.97,-1.2 -5.38,0.98 -2.03,-0.7 -3.26,-0.69 -4.99,-2.14 -2.67,-1.4 -6.68,-1.13 -6.68,2.71 -0.68,3.61 -3.23,0.34 -4.72,-0.57 -1.81,-0.09 -4.28,-1.13 -5.91,0.19 -1.52,-0.34 -2.18,1.47 -2.78,2.5z m18.76,-70.13c1.65,1.54 3.03,-0.19 0.57,-0.92 -0.47,-0.23 -0.39,0.68 -0.57,0.92z m-3.12,31.93c0.55,0.53 0.27,0.88 0,0z m-1.17,-10.07c0.02,-1.53 3.39,-4.02 1.66,-1.22 -0.39,0.58 -0.96,1.08 -1.66,1.22z m-10.63,-1.73c-1.59,-0.31 -2.08,-2.29 -3.03,-0.36 -1.91,-0.73 1.49,-2.2 -1,-2.29 0.13,-2.31 -2.8,-4.88 -3.79,-2.04 0.08,3.32 -3.97,-0.09 -4.6,-1.78 -1.85,-2.46 4.1,-0.54 2.7,-3.31 3.07,0.55 2.59,-4.32 5.36,-2.92 1.06,-1.19 2,-1.61 3.15,-1.03 2.23,-0.98 4.88,1.21 3.52,3.35 -0.19,2.26 3.15,1.24 0.87,3.27 -2.06,1.44 -0.04,2.03 1.25,1.47 1.84,1.95 -0.91,4.87 -2.77,3.75 -0.28,0.8 -0.67,1.84 -1.67,1.88z m10.61,-7.92c-1.67,-0.09 0.88,-0.41 0,0z m-4.29,-6.97c1.08,-0.83 2.3,-4.85 2.33,-3.8 -0.86,1.14 -0.52,3.62 -2.33,3.8z m2.73,-6.13c0.35,-1.24 0.97,-0.17 0,0l0,0z m-3.97,-25.03c-1.05,-1.04 1.79,-1.33 0,0z m1.85,-1.48c-0.51,-1.01 -1.32,-1.32 -0.4,-1.6 -1.54,-1.3 0.12,-2.32 1.22,-0.9 1.22,-0.53 0.35,-2.59 1.9,-1.78 0.84,-0.86 3.02,-1.98 1.27,-0.28 -1.41,1.61 -1.17,5.41 -3.42,2.95 -0.74,0.32 -0.1,1.35 -0.58,1.61z m38.33,-20.76c-1.93,-1.65 4.17,-0.89 0.99,-0.51l-0.47,0.12 -0.53,0.39 0,0z","name":"United Kingdom"},"ch":{"path":"m292.05,389.98c-1.12,-2.03 -1.49,-3.96 -4.14,-4.68 0.24,-1.27 0.28,-4.19 -2.02,-2.48 -2.76,1.07 -0.98,6.19 -4.8,5.6 -1.34,-2.05 -4.35,2.18 -5.85,-0.49 -0.66,-1.9 -1.54,-2.82 -1.22,-5.23 -0.26,-1.58 -4.49,-1.34 -5.35,0.35 0,0.96 -0.92,3.04 -1.36,2.14 2.08,-0.65 -0.4,-3.99 1.78,-5.21 1.94,-0.57 2.18,-1.6 2.3,-3.5 2.42,-0.82 3.23,-3.53 5.4,-5.02 0.92,-1.36 3.51,-0.53 3.7,-1.93 2.51,-0.36 5.31,-0.33 7.48,-0.01 1.57,-0.63 0.5,-2.03 0.36,-2.23 1.31,-1.57 1.36,1.33 2.5,0.98 1.1,0.96 4.91,-0.68 5.97,2.04 0.36,1.7 -2.95,6.33 1.28,6.08 1.9,0.87 4.09,3.47 5.78,0.3 -0.28,1.18 -0.17,4.33 -0.42,4.42 -1.87,-2.39 -4.17,0.79 -2.27,2.33 0.4,3.64 -0.7,-1.85 -2.69,-0.06 -1.62,2.46 -2.25,-1.46 -3.43,-1.76 -2.43,0.76 -0.07,4.33 -2.78,4.97 -1.02,0.89 -0.72,2.33 -0.22,3.4z M275.63,370.8c0.49,-1.83 2.92,0.14 0.45,0.04l-0.53,0.11 0.08,-0.14 0,0z","name":"Switzerland"},"at":{"path":"m338.89,381.72c-2.92,-0.37 -5.68,-0.8 -8.68,-1.29 -3.41,-0.44 -7.47,0 -10.13,-2.59 -0.49,-1.79 -2.01,-0.99 -0.74,-2.9 -1.54,-1.34 -4.15,1.63 -6.36,0.74 -2.58,-0.56 -3.71,1.14 -4.67,3.02 -0.77,-1.61 -4.07,-0.58 -3.15,-2.45 -2.02,-1.72 -4.43,3.34 -5.34,-0.45 -2.71,0.05 -3.32,-2.5 -1.76,-4.48 -0.11,-1.92 0.65,-1.26 2.03,-1.24 0.77,2.34 2.91,4.54 4.57,1.3 -0.46,-2.13 1.09,-1.56 2.51,-1.62 1.01,3.44 4.52,1.32 6.34,0.3 1.07,-2.1 5.55,-0.39 5.96,-2.32 1.02,0.88 3.01,0.37 3.69,0.59 0.18,3.89 5.07,0.73 2.69,-1.53 -0.2,-1.43 -1.39,-3.39 -2.11,-5.03 1.93,-1.47 5.36,-2.58 5.54,-5.05 1.88,0.9 2.55,-1.98 3.13,-1.73 2,1.9 4.33,0.91 6.33,0.45 0.7,-1.97 2.92,-2.39 2.31,-5.03 1.96,0.92 4.91,0.17 6.97,1.75 1.9,2.39 4.37,-0.77 6.11,0.38 1.43,-0.03 2.77,1.31 1.21,2.94 -0.45,2.79 3.86,4.35 2.35,7.1 1.97,3.48 -4.51,0.08 -4.56,2.79 1.63,1.11 3.27,1.96 0.42,2.95 -0.98,1.81 1.97,4.01 -0.88,5.49 -1.01,1.14 -3.1,1.64 -2.24,3.63 -2.75,-0.79 -4.87,2.27 -7.7,0.89 -1.89,0.31 -2.39,2.61 -3.87,3.38z","name":"Austria"},"cz":{"path":"m335.18,355.05c-3.65,-0.41 -4.96,-4.57 -8.41,-5.66 -1.31,-1.75 -2.19,-2.91 -4.32,-3.66 -1.8,-1.56 -2.64,-3.53 -1.6,-5.57 -0.16,-1.57 -4.02,-3.53 -3.2,-4.17 1.42,3.2 2.44,-2.24 4.26,-2.25 1.35,1.3 3.09,-0.63 3.77,-1.12 1.58,-1.86 4.18,-2.74 6.59,-3.91 1.63,-0.69 3.11,-2.35 4.59,-0.56 2.65,1.13 2.61,-4.69 4.17,-1.06 1.38,1.66 3.64,0.69 5.11,2.36 0.67,1.75 5.33,-1.17 2.84,1.24 -1.67,2.06 2.09,2.81 2.61,4.74 2.09,1.86 2.12,-0.93 3.96,-1.42 0.43,-1.39 -1.9,-2.7 0.65,-1.55 1.23,1.3 3.29,0.96 4.4,0.53 -3.27,0.95 2.17,5.16 3.09,2.65 2.93,0.44 4.53,2.63 6.07,4.63 -2.15,1.71 -4.92,3.04 -5,6.15 -1.22,2.56 -3.35,3.75 -6.24,3.67 -1.85,1 -3.16,2.67 -5.05,0.79 -2.11,1.83 -4.69,0.96 -6.9,-0.42 -1.92,-1.1 -4.07,-0.45 -5.85,-0.93 -0.34,2.31 -2.03,3.48 -2.87,5.34 -1.07,-1.47 -1.28,0.34 -2.66,0.17z m-0.68,-28.45c-2.43,-2.03 2.32,0.24 0,0z","name":"Czech Republic"},"sk":{"path":"m364.44,362.94c-2.39,-2.37 -6.56,-2.63 -7.73,-6.02 -0.46,-2.43 0.4,-6.56 3.64,-6.16 3.23,0.29 4.91,-3 5.9,-5.48 0.17,-1.96 3.95,-5.08 5.19,-3.02 2.43,1.82 3.49,-4.97 4.66,-0.89 1.56,0.35 1.91,0.85 1.91,2.52 2.64,1.02 3.89,-1.84 5.57,-3.22 1.58,-0.07 4.26,1.88 5.1,-0.34 0.99,-1.59 4.74,-1.57 6.47,-0.13 1.28,2.35 6.24,0.73 4.22,4.32 -1.5,2.17 -0.53,7.67 -4.43,6.22 -0.53,-3.18 -3.88,-1.31 -5.83,-0.46 -2.77,-2.02 -4.98,0.68 -5.07,3.51 -1.08,0.67 -2.09,-0.14 -2.29,1.79 -1.29,1.17 -3.96,-2.16 -4.46,1.1 -0.72,2.43 -5.78,-0.07 -5.66,3.66 1.11,2.54 -4.04,1.94 -5.84,2.51 -0.44,0.04 -0.88,0.07 -1.32,0.1z","name":"Slovakia"},"hu":{"path":"m369.77,387.01c-2.75,-0.58 -5.39,-1.37 -7.78,-2.73 -2.27,-2.63 -5.77,-3.91 -7.5,-7.04 -1.21,-1.85 -2.06,-2.65 0.1,-3.74 1.43,-1.97 -1.64,-4.55 1.32,-5.48 2.04,-1.7 -3.3,-3.48 -0.09,-2.71 2.81,1.04 3.86,-1.91 3.11,-3.93 1.93,-1.05 3.43,2.43 5.44,2.58 3.24,-0.18 6.53,-0.68 9.48,-2.09 -2.94,-1.84 0.68,-3.88 2.85,-2.99 1.75,-0.27 1.26,-4.31 3.33,-2 2.26,0.8 3.01,-1.99 4.8,-2.5 0.41,-2.48 1.52,-4.92 4.25,-3.08 1.93,-0.18 4.28,-2.95 5.05,0.14 2.1,1.7 4.8,-1.81 6.38,0.84 2.12,-0.07 1.45,3.23 3.34,1.35 3.46,3.21 -4.18,3.49 -4.55,6.38 0.35,2.87 -2.65,4.72 -2.5,7.52 0.37,3.17 -2.46,5.43 -2.51,8.54 0.01,3.02 -4.16,0.17 -4.1,3.12 -3.14,1.57 -7.09,0.21 -9.73,1.82 -1.24,2.36 -3.12,1.16 -4.53,3 -2.57,0.36 -3.31,3.42 -6.16,3.01z","name":"Hungary"},"lt":{"path":"m397.76,280.99c-1.28,-1.32 -1.63,-4.58 -4.11,-3.7 -1.13,-2.07 -4.01,-0.28 -3.26,-3.14 1.62,-3.48 -2.4,-7.19 -5.64,-5.13 -2.28,0.26 -5.13,-1.48 -6.05,-2.17 -0.51,-2.23 -1.53,-3.51 -2.2,-5.4 -1.37,-2.68 1.24,-5.63 3.5,-7 1.88,-1.44 4.85,-0.65 6.6,-1.37 0.56,-1.26 2.33,2.09 2.82,-0.31 2.06,-0.86 4.97,0.1 6.62,-0.3 1.76,-0.28 3.35,-0.61 3.78,-2.83 1.19,2.4 3.3,3.12 5.7,2.26 2.79,0.52 4.16,3.86 7.04,4.08 1.64,1.42 -0.82,5.15 2.39,4.69 0.41,1.84 -3.75,0.79 -2.82,3.52 -2.05,1.6 -2.93,3.79 -1.88,6.23 -0.12,2.13 -0.68,3.69 -2.75,4.26 -0.43,1.13 -0.04,1.82 -1.97,2.11 -0.51,1.51 -1.38,2.09 -2.67,3.35 -1.72,-1.32 -3.41,0.53 -5.09,0.87z m13.27,-5.67c-0.11,-1.17 -1.77,-2.09 0.31,-1.22 0.43,0.34 0.36,1.19 -0.31,1.22z","name":"Lithuania"},"lv":{"path":"m375.49,257.31c-1.25,-2.79 -1.57,-6.54 -0.19,-9.24 2.63,-2.07 -0.8,-6.67 2.34,-8.6 1.69,0.07 4.11,-4.27 4.4,-1.32 2.44,1.48 4.79,3.19 5.76,5.78 2.55,1.96 6.17,0.07 7.13,-2.71 1.39,-2.75 -1.14,-5.3 -1.86,-7.82 1.34,-1.86 3.66,-3.57 5.64,-3.47 0.08,-0.9 1.63,1.08 2.69,0.67 1.72,0.06 3.13,2.25 4.97,3.22 2.21,0.36 3.53,-2.11 5.72,-1.12 1.76,-0.72 2.78,1.38 4.4,2.33 -0.55,1.5 -1.61,1.77 0.06,2.4 -0.17,1.1 -0.46,3.72 1.44,2.57 1.53,2.66 6.04,5.32 2.65,8.5 -1.42,1.56 -0.49,4.51 -3.48,3.69 -2.28,0.64 -3.94,4.9 -6.51,1.93 -2.03,-2.26 -5.06,-3.95 -7.91,-2.78 -1.1,-1.49 -3.6,-4.26 -4.46,-0.94 -1.47,1.77 -5.35,0.57 -7.87,1.17 -1.87,0.26 -2.16,0.89 -3.44,-0.06 -2.37,1.98 -6.1,0.17 -8.37,2.54 -1.6,0.14 -2,4.17 -3.11,3.25z","name":"Latvia"},"md":{"path":"m454.92,374.42c-0.33,-2.09 -1.86,-4.78 -2.23,-7.4 0.38,-3.56 0.07,-7.47 -2.96,-9.91 -3.2,-3.43 -7.96,-5.44 -9.93,-9.93 -0.24,-2.34 -6.31,-3.34 -2.39,-4.03 2.67,0.33 3.73,-3.48 6.57,-2.14 1.32,0.97 1.83,2.54 3.78,1.18 -0.02,0.82 2.42,2.73 2.56,0.37 1.33,-1.44 3.96,3.6 4.43,1.55 1.2,-1.55 0.65,3.03 1.22,3.93 0.07,2.32 4.57,4.13 4.42,2.59 -0.43,1.81 0.64,4.31 3.01,4.64 2.61,-0.41 1.35,4.32 2.84,4.34 -0.24,1.12 -3.35,-2.1 -2.5,0.78 -1.04,0.18 -2.3,-2.64 -2.02,-0.03 -1.22,0.21 -2.31,-1.71 -3.62,0.36 -1.34,1.85 1.39,3.73 0.77,5.48 -0.5,2.25 -2.95,4.34 -2.23,7.32 -0.82,-0.46 -1.48,0.35 -1.72,0.91z","name":"Moldova"},"ro":{"path":"m414.71,404.53c-2.94,-0.37 2.3,-2.82 -0.89,-3.86 -1.36,-0.38 -6.12,-1.72 -3.63,-3.39 3.62,-1.4 -2.29,-3.42 -3.82,-3.63 -1.25,0.73 1.78,4.33 -1.06,3.46 -0.47,-2.42 -4.24,0.23 -4.49,-2.27 -1.54,0.07 -1.87,0.1 -0.31,-0.74 0.46,-1.41 -2.15,-1.17 -0.71,-2.27 0.07,-4.02 -6.25,-1.24 -6.86,-4.86 0.56,-2.93 -2.25,-4.23 -4.45,-5.46 -1.23,-1.35 3.36,-1.23 3.59,-2.71 4.37,0.45 2.54,-4.6 4.68,-6.55 1.28,-2.95 0.7,-6.3 2.76,-8.97 0.62,-2.75 1.58,-5.21 4.69,-5.79 2.24,-1.25 2.4,-5.8 5.34,-3.67 2.44,-0.6 4.8,0.38 7.17,-0.21 2.51,-1.94 3.7,1.15 5.91,1.18 2.03,-1.31 2.68,-4.39 5.67,-3.96 2.31,-0.28 4.86,-1.95 4.49,-4.32 1.75,-2.97 4.98,-1.01 6.29,1.29 1.93,4.74 7.06,6.72 10.28,10.39 2.93,2.37 2.34,6.09 2.36,9.35 0.53,2.52 1.69,4.86 1.92,7.13 1.82,1.67 4.12,3.74 6.83,2.36 1.37,-1.24 4.51,-5.35 6.51,-2.84 1.18,1.97 2.1,5.63 -1.2,6.33 -1.85,1.04 -1.42,-3.67 -3.88,-1.61 -1.51,1.92 1.84,2.51 -0.11,4.51 -0.61,2.57 2.04,-0.86 0.82,1.98 -2.28,2.63 -0.38,5.59 -0.04,8.5 -1.15,2.51 -5.2,-0 -6.02,-1.11 -1.09,1.46 -1.67,-0.92 -3.54,0.54 -1.82,0.49 -3.31,-1.46 -5.44,0.01 -3.08,1.35 -6.52,2.81 -8.17,5.95 -1.31,3.55 -4.97,3.29 -8.01,2.77 -2.75,-0.48 -4.92,1.71 -7.44,1.75 -2.74,-0.25 -5.83,-1.37 -8.31,0.42l-0.52,0.24 -0.43,0.06 0,0z","name":"Romania"},"bg":{"path":"m419.98,434.43c-0.77,-1.6 0.33,-5.03 -1.67,-6.74 -1.14,-2.34 -7.05,-2.04 -4.41,-5.19 -0.49,-1.45 -2.46,-4.37 -1,-5.23 2.16,0.54 4.75,-3.78 2.92,-5.59 -2.57,-1.55 -5.66,-2.78 -5.98,-6.24 -0.97,-2.47 2.74,-1.99 1.69,-4.32 2.08,-0.06 3.2,1.11 1.22,2.59 -0.15,3.28 3.83,0.6 5.65,0.71 2.58,-0.64 5.13,0.94 7.65,0.08 2.61,-1.18 5.46,-2.28 8.27,-1.01 3.32,0.37 5.6,-2.51 6.93,-5.13 2.16,-2.35 5.29,-3.61 8.27,-4.56 1.69,0.75 3.92,0.92 5.2,0.32 0.77,1.61 2.46,-1.39 3.17,1.07 1.58,2.18 6.09,-1.71 5.26,2.45 0.21,2.63 -4.48,0.38 -4.02,3.94 -1.88,1.85 1.39,5.32 -0.17,7.14 -1.24,1.25 -1.7,3.03 -2.93,4.26 0.82,1.66 4.27,-0.37 3.64,2.02 1.44,0.86 3.71,1.89 1.23,2.18 -1.9,3.08 -4.18,-1.08 -6.49,0.5 -1.52,1.95 -4.37,1.58 -4.82,4.55 -1.37,1.04 -4.43,1.49 -2.91,4.13 3.08,3.26 -3.78,2.7 -5.13,4.68 -1.95,0.62 -4.22,-2.41 -5.93,-0.29 -2.04,-2.63 -5.18,-1.43 -7.46,0.15 -2.06,2.52 -5.54,1.17 -7.76,3.47l-0.43,0.06 0,0z","name":"Bulgaria"},"al":{"path":"m396.5,458.88c-2.16,0.08 -0.81,-2.55 -2.74,-3.41 -0.91,-2.13 -5.81,-2.06 -5.48,-3.81 2.36,-1.04 -1.62,-3.19 -0.48,-4.99 0.36,-1.26 2.66,-2.2 0.57,-3.3 1.39,-2.49 -3.57,-5.96 0.77,-6.52 2.37,-0.03 -1.92,-0.89 -0.55,-2.51 -0.14,-2.15 -3.24,-0.23 -2.21,-2.9 -1.48,-2.28 0.07,-4.41 1.36,-6.71 1.01,3.42 4.23,-2.13 4.66,1.78 1.21,1.69 4.6,1.07 3.88,4.25 -0.33,2.87 -0.02,5.6 0.51,8.19 0.21,1.77 2.38,5.51 4.15,4.74 1.69,-0.32 2.5,4.45 0.05,5.02 -0.86,1.75 -0.27,5.37 -3.24,5.56 -2.01,1.26 1.3,2.75 -0.81,3.98l-0.23,0.5 -0.19,0.12 0,0z","name":"Albania"},"ee":{"path":"m378.18,234.33c-0.29,-1.42 0.77,-0.85 0,0z m29.34,-1.46c-2.55,-0.18 -3.15,-3.15 -5.39,-3.23 -0.21,-1.76 -1.21,1.44 -2.27,-0.65 -2.12,-1.63 -4.52,1.21 -6.27,2.48 -1.26,-0.67 1.67,-5.98 -1.81,-5.74 -1.1,1.92 -1.82,2.36 -3.83,1.3 -0.08,-2.54 -3.43,-2.95 -2.01,-5.67 0.96,-2.03 -3.8,-2.6 -0.62,-3.95 1.35,-0.61 4.23,-0.97 2.3,-2.67 2.82,-0.9 4.5,-2.4 7.47,-2.41 1.66,-0.56 1.5,-2.75 3.42,-1.67 0.91,-1.72 4.64,0.07 6.63,-0.66 2.13,-0.1 4.26,0.22 6.03,-1.29 -1.43,2.67 -1.02,5.84 -2.24,8.62 2.11,2.2 1.2,5.64 3.15,7.83 0.24,0.52 1.89,2.24 1.35,2.38 -0.73,0.83 -0.81,2.27 -1.35,2.68 1.66,2.85 -2.28,0.25 -2.89,1.26 -0.29,0.68 -0.83,1.4 -1.65,1.38z m-28.89,-1.28c-1.29,-0.43 -2.59,-1.4 -0.92,-2.29 -0.22,-0.67 0.59,-1.5 0.99,-0.78 -0.53,-2.4 4.69,-3.37 4.19,-1.27 0.07,2.48 -3,2.5 -4.26,4.33z m1.02,-7.14c-0.54,-0.34 -0.96,-2.14 -1.01,-2.27 0.8,-1.29 0.79,-1.32 2,-0.55 1.89,-0.4 1.35,1.06 -0.17,0.69 0.83,0.84 0.55,2.1 -0.81,2.14z","name":"Estonia"},"lb":{"path":"m557.2,501.39c0.58,-2.8 0.32,-5.88 1.17,-8.53 -0.92,-2.02 1.77,-3.87 0.09,-5.88 -0.28,-2.6 2.65,-3.83 2.23,-6.01 1.03,-0.93 3.35,-2.1 2.42,0.09 1.64,0.57 3.96,0.89 3.49,3.25 -1.11,1.34 -2.61,3.51 -1.84,4.51 -2.48,0.69 -2.89,3.8 -1.53,5.08 -0.04,2.15 -2.43,3.34 -3.12,4.26 0.57,1.87 -1.28,3.1 -2.91,3.25z","name":"Lebanon"},"ad":{"path":"m225.99,427.08c-4.4,2.06 -0.81,-5.33 0.49,-0.98l-0.2,0.53 -0.29,0.45z","name":"Andorra"},"sm":{"path":"m321.66,413.68c0.71,-2.83 1.59,1.21 0,0z","name":"San Marino"},"mc":{"path":"m273.92,416.64c-2.8,-1.65 2.23,-1.64 0.39,-0.13l-0.39,0.13 0,0z","name":"Monaco"},"lu":{"path":"m268.7,344.38c-1.34,-0.37 0.48,-2.79 -0.9,-3.99 -1.47,-1.94 2.76,-5.38 1.98,-1.49 0.37,1.78 4.79,2.33 1.84,4.09 -0.47,1.66 -1.49,1.22 -2.93,1.39z","name":"Luxembourg"},"fr":{"path":"m292.72,444.55c-0.12,-2 -3.86,-0.94 -2.75,-2.99 -2.34,-0.62 -0.11,-2.51 0.75,-3.57 0.35,-0.55 -3.76,1.07 -1.24,-0.63 0.32,-1.34 -2.6,-2.05 -0.51,-3.01 -0.25,-1.14 -1.13,-1.51 -0.02,-1.71 -0.89,-2.66 3.14,-1.71 3.48,-3.51 1.94,0.96 2.98,-0.2 2.33,-2.11 1.79,-2.18 -0.99,3.51 1.02,4.43 1.2,3.29 -2.09,6.35 -1.33,9.73 -0.95,0.89 -1.15,2.64 -1.75,3.36z m-58.87,-15.16c-2.27,-2.01 -5.59,-0.28 -7.2,-2.87 1.48,-2.11 -2.14,-2.13 -2.92,-2.19 -1.78,-1.34 -3.82,-2.36 -5.67,-3.53 -1.54,0.58 -1.53,2.27 -3.51,1.46 -1.54,0.07 -2.66,-0.59 -3.93,-0.35 -0.8,-2.33 -2.93,-1.69 -4.53,-2.09 -1.06,-2 -2.81,-3.32 -5.06,-3.18 -1.57,-1.15 -1.33,-1.7 -1.45,-3.5 -1.23,-0.24 -3.44,-0.96 -1.02,-1.55 3.04,-3.75 2.96,-8.84 4.5,-13.21 0.85,-1.4 2.99,0.68 2.08,-1.85 -1.2,-1.06 -2.14,-0.84 -1.15,-2.81 1.1,-1.59 0.63,-5.99 2.35,-6.1 1.89,1.55 0.82,3.87 1.88,5.79 -0.05,2.01 2.7,3.12 1.93,0.38 -2.25,-2.11 -0.08,-5.11 -2.23,-7.23 -1.52,-1.07 -0.74,-1.21 -0.52,-2.39 -2.12,-1.87 0.87,-2.79 -0.3,-5.08 -0.91,-0.78 2.06,-4.15 0.31,-2.92 -1.7,1.58 -2.8,-0.99 -4.34,-1.54 -1.66,-0.48 -1.34,-4.04 -3.07,-5.27 1.45,-1.37 2.03,-3.5 -0.17,-4.21 -1.28,-1.38 -1.85,-1.7 -0.64,-3.42 1.28,-3.05 -5.85,-0.88 -2.14,-2.3 -0.4,-2.26 -4.49,0.28 -3.4,-2.31 -0.36,-2.67 -3.56,0.62 -4,-1.74 -2.28,-0.09 -2.42,-4.2 -4.81,-1.84 -1.78,1.57 -0.33,-2.39 -2.37,-2.56 1.59,0.62 3.87,-0.51 1.92,-2.13 1.84,1.1 2.88,-0.7 0.65,-1.01 0.13,0.05 1.59,-2.28 -0.46,-1.5 -1.34,1.45 -4.19,-0.07 -1.73,-1.25 1.3,-0.76 2.79,-0.81 2.95,-0 1.4,-0.85 2.87,-0.97 3.66,0.09 0.65,-1.02 3.21,1.35 3.19,-1.26 2.43,-1.62 2.22,2.03 2.47,2.06 1.69,-2.75 1.86,2.19 3.17,3.11 1.26,-0.74 3.83,-3.16 3.73,-0.14 1.62,2.63 2.82,-1.65 4.78,0.11 0.83,-0.47 4.32,1.06 3.36,-0.07 -1.65,-1.65 -2.42,-4.02 -1.35,-6.19 0.76,-2.4 -2.42,-4.6 -1.19,-7.04 1.21,1.81 5.2,-0.98 3.31,2.03 -0.19,2.43 1.93,3.76 3.68,2.84 2.59,0.56 5.12,3.56 7.68,1.11 2.16,-0.17 1.32,-1.39 0.53,-2.64 1.54,-3 5.41,-2.03 8.05,-3.16 1.81,-0.67 4.58,-1.88 5.31,-3.4 -1.75,-1.03 0.04,-4.18 -0.3,-6.15 0.44,-3.1 4.2,-2.36 6.44,-2.8 0.98,0.77 1.49,6.24 4.58,4.17 1.46,-0.35 0.7,4.82 3.67,3.62 -0.14,3.07 3.12,1.53 4.18,2.82 -0.64,1.44 -0.56,1.83 -0.25,2.78 -0.88,2.67 3.93,2.4 4.83,0.49 0.88,1.69 -1.1,3.55 1.66,3.61 2.55,0.29 2.49,4.49 5.21,3.37 2.65,1.52 6.43,-0.33 7.5,3.53 0.45,0.9 2.96,3.41 2.01,0.96 0.54,-1.16 0.79,1.42 0.5,1.49 1.47,-0.3 3.92,-1.81 4.53,0.32 1.92,0.28 7.08,0.84 3.22,2.94 -2.39,2.02 -1.66,5.55 -3.51,7.88 -0.4,2.45 -0.29,5.21 -1.25,7.67 -1.85,0.33 -4.65,-1.22 -4.94,2.33 0.2,1.24 -1.59,3.49 -3.64,4.12 -0.97,0.48 0.4,3.01 -1.75,3.44 -3.21,1.4 -0.53,4.69 -2.87,6.5 1.14,2.08 4.46,-0.29 3.63,-2.44 2.64,-1.79 4.27,0.65 3.32,3.02 0.97,1.33 2.7,2.42 0.16,3.24 -1.7,2.56 4.01,4.8 1.9,7.11 -0.78,1.84 -6.17,0.54 -3.47,3.57 1.68,1.38 4.39,3.16 1.43,4.85 -1.24,3.13 2.12,7 5.6,6.15 2.64,-0.69 -0.62,4.28 -2,4.64 -1.17,-0.72 -4.03,-3.03 -4.38,0.05 0.55,1.28 1.71,2.84 -0.72,3.26 -2.25,0.54 -0.87,3.61 -3.15,2.9 -1.62,1.27 -2.66,0.82 -4.12,0.04 -1.35,1.82 -1.33,-1.1 -3.38,-0.87 -2.84,0.75 -0.64,-3.44 -1.53,-2.84 -0.63,0.89 -3.09,1.3 -1.09,0.56 1.49,-2.74 -3.49,-2.8 -2.54,-0.31 -2.24,0.5 -1.46,-2.79 -1.57,-3.36 -1.08,1.05 -1.96,2.65 -0.52,3.91 -1.04,-0.28 -1.31,-2.83 -3.36,-2.08 -2.5,-1.7 -5.52,-1.71 -6.96,1.2 -2.68,0.79 -5.03,2.02 -5.69,4.77 0.13,1.89 -0.47,3.75 0.65,5.49 -1.42,-0.84 -3.32,-0.38 -4.33,0.88z","name":"France"},"li":{"path":"m296.51,373.48c1.45,1.4 -0.83,3.11 -0.11,0.58 0.04,-0.19 0.08,-0.38 0.11,-0.58z","name":"Liechtenstein"},"nl":{"path":"m269.04,328.72c-2.4,0.87 -0.84,-4.47 0.3,-2.01 0.8,0.23 0,1.75 -0.3,2.01z m-0.07,-3.78c0.6,-3.32 -5.02,-1.6 -5.27,-4.51 -0.12,-2.74 -3.14,1.24 -2.06,-1.29 -0.99,-0.79 -2.22,1.2 -3.22,-0.45 -0.9,0.27 -1.14,2.68 -1.08,0.81 0.68,-2.17 -1.32,-2.87 -3.53,-3.17 2.34,0.11 2.58,-2.07 3,-3.35 2.89,-2.17 4.59,-5.57 4.61,-9.18 -0.19,-3.29 4.06,-0.89 5.3,-3.43 1.14,-2.76 4.56,-2.87 7.04,-3.65 2.21,-0.91 4.28,0.51 5.07,2.25 2.56,1.19 -1.21,4.26 -0.45,6.54 -1.09,0.31 -2.87,-0.17 -2.83,1.81 -1.46,0.58 -1.58,0.91 0.09,0.93 3.35,-0.05 2.57,4.59 -0.38,4.58 -2.35,0.19 2.62,1.25 -0.12,2.19 -2.05,1.07 -3.43,-1.35 -5.33,0.59 -1.38,2.19 2.97,4.39 0.94,6.8 -0.8,0.77 -1.72,1.2 -0.27,1.66 -0.44,0.36 -0.82,1.02 -1.51,0.87z m-14.99,-3c-0.33,-1.2 -5.07,-0.99 -2.8,-1.87 1.14,1.13 2.85,1.22 3.93,0.81 -0.06,0.56 -0.57,1.04 -1.13,1.06z m0.03,-2.7c-1.37,-0.05 -4.02,-1.94 -1,-1.43 0.49,-0.33 2.23,1.73 1,1.43z","name":"Netherlands"},"ba":{"path":"m376.75,425.9c-1.98,-1.6 -4.83,-1.93 -6.41,-4.05 -1.67,0.65 -0.52,0.38 -0.54,-0.48 -1.09,-2.31 -4.84,-2.74 -4.68,-5.7 -3.06,-0.33 -4.09,-3.71 -6.36,-5.29 -1.63,-1.9 -4.06,-2.19 -3.82,-4.87 -1.04,-2.44 -3.06,-3.46 -4.21,-5.63 -0.7,-2.04 0.84,-4.87 2.73,-2.36 1.15,1.84 2.68,1.49 3.04,-0.59 0.75,-2.51 2.6,0.54 3.87,-1.57 1.61,1.11 3.76,0.32 5.58,0.98 1.67,0.69 2.8,0.63 3.98,-0.64 1.28,0.32 2.43,1.79 1.94,-0.33 2.34,0.41 3.8,0.76 5.26,2.77 1.51,0.59 4.58,-2.46 3.33,0.9 -1.48,2.62 -1.55,6.27 2.2,6.4 -0.16,1.48 3,1.5 0.7,2.04 -2.41,-1.63 -1.77,2 -0.04,2.77 1.22,1.2 1.32,2.1 -0.54,1.97 -0.8,1.43 -2.82,1.15 -3.55,0.9 0.15,1.26 1.77,2.85 -0.32,2.67 -1.22,1.98 -1.74,4.24 -3.03,5.92 0.2,1.48 1.25,2.79 0.88,4.2z","name":"Bosnia and Herzegovina"},"si":{"path":"m332.96,393.93c-2.25,0.07 3.69,-1.78 0.33,-3.25 -2.05,-0.05 -1.39,-3.19 -2.18,-3.5 2.21,-1.77 -0.2,-2.6 -1.36,-3.11 1.58,-3.35 4.85,-1.64 7.7,-1.58 3.3,1.9 3.73,-4.65 7.02,-2.86 2.43,0.1 4.45,-1.78 6.8,-1.33 -0.07,-1.25 0.26,-3.28 1.79,-1.82 0.58,1.34 2.29,2.96 -0.11,2.97 0.07,3.17 -6.44,2.43 -4.97,6.04 0.89,1.87 0.62,3.86 -1.85,3.13 -2.37,0.85 1.33,6.35 -2.15,4.17 -1.76,0.02 -2.78,0.57 -3.81,-1.48 -1.83,-1 -1.59,2.92 -3.88,1.76 -1.41,-0.46 -2.2,0.65 -3.34,0.85z","name":"Slovenia"},"mk":{"path":"m403.18,443.19c-1.28,-0.84 -1.77,-0.72 -3.14,-0.4 -2.27,-2.33 -2.73,-5.58 -2.85,-8.64 -1.26,-2.44 2.39,-0.6 1.33,-3.13 0.23,-2.42 3.43,-3.85 5.06,-1.8 1.38,1.18 -1.35,-3.28 1.33,-2.73 2.83,0.6 4.67,-2.89 7.49,-1.79 1.51,2.18 4.77,1.95 5.79,4.72 1.29,2.63 0.37,4.95 -1.12,7.01 -1.05,2.69 -5.33,0.11 -7.05,2.7 -0.97,2.88 -4.09,3.39 -6.84,4.04z","name":"Macedonia"},"hr":{"path":"m375.93,426.49c-1.17,-0.64 -1.03,-0.77 0,0z m-5.08,-2.9c-0.73,0.27 -1.25,-2.08 0,0z m-2.28,-1.81c-3.23,-1.04 -5.06,-4.7 -8.53,-5.08 -1.74,-1.23 -4.13,-1.36 -6.19,-0.38 -0.54,-3.7 -5.51,-3.9 -7.37,-6.92 -1.68,-2.86 2.16,-0.38 2.91,-1.43 -1.18,-2.05 -5.06,-2.05 -5.62,-5.05 0.07,-2.45 -0.12,-5.23 -2.77,-6.41 -1.46,-3.02 -5.35,-1.33 -4.75,1.8 -0.1,1.22 -1.81,1.15 -1.78,3.18 -0.42,-0.02 -2.43,-3.25 -2.8,-4.77 0.5,-1.41 -1.33,-2.59 0.97,-1.85 1.93,-0.05 3.32,-1.26 5.49,-0.87 1.75,-0.28 1.19,-2.99 2.55,-0.54 1.83,1.65 2.98,0.1 5.14,0.7 1.63,-0.59 0.6,-2.35 1.05,-3.41 -2.13,-1.84 3.84,-0.57 2.93,-3.42 -1.1,-1.62 -1.88,-3.53 0.82,-4.04 1.16,-1.26 3.54,-0.9 3.14,-3.3 3.59,0.79 6.21,3.61 8.62,6.19 2.91,-0.18 5.33,2.55 8.31,1.69 2.32,0.95 5.06,-5.2 5.33,-0.4 0.15,1.9 1.2,2.64 1.4,4.46 1.55,0.76 2.24,0.37 1.04,2.01 -0.17,1.69 1.08,1.86 -0.44,2.99 -1.42,0.96 -2.53,-3.66 -4.34,-2.06 -2.98,-1.4 -5.14,1.63 -8.13,0.38 -2.22,0.17 -4.52,-1.28 -6.44,-0.34 -1.8,-0.84 -3.54,0.72 -3.99,2.64 -1.51,-1.59 -4.97,-3.78 -5.35,0.02 -1.16,3.92 2.99,5.58 4.38,8.58 -0.13,1.41 -1.05,2.05 0.83,2.59 2.9,1.5 4.8,4.21 6.98,6.53 2.65,1.59 3.98,4.49 6.78,6.28l-0.16,0.23 0,0z","name":"Croatia"},"dk":{"path":"m311.37,281.37c-1.81,-0.13 -3.63,-2.95 -0.99,-2.75 0.71,0.89 2.21,0.72 1.2,1.27 0.93,0.68 0.95,1.07 -0.21,1.48z m2.12,-1.04c1.35,-0.18 -0.34,1.13 0,0z m0.84,-0.24c-0.07,-1 -2.35,-2.59 0.16,-1.62 2.08,0.28 -0.51,1.71 -0.16,1.62z m-17.99,-0.84c-2.31,-0.88 -6.15,-0.22 -4.5,-3.71 0.81,-2.84 -1.69,-4.3 -3.84,-4.7 -1.19,-2.12 0.77,-2.92 1.79,-2.7 1.1,-1.9 -0.71,-4.04 -1.69,-4.68 0.35,-1.37 0.2,-5.41 0.68,-4.97 1.59,3.78 6.34,-5.25 4.96,-0.56 0.24,2.86 4.45,-0.07 2.01,-1.61 0.04,-2.03 -0.06,-3.57 2.27,-2.05 0.18,-1.79 3.93,-0.45 2.6,-2.4 -2.36,-1.07 -4.97,1.4 -7.44,0.51 -0.9,0.41 -2.06,0.6 -1.03,-0.46 2.89,0.74 6.43,-0.56 7.07,-3.76 0.42,-1.7 4.2,-3.59 3.75,-0.9 2.01,1.66 -0.21,4.73 -1.55,6.01 0.4,0.87 0.32,2.52 0.39,3.1 -1.16,1.34 2.36,4.31 4.12,3.09 1.32,1.67 -1.85,5.56 -2.69,2.65 -3.21,0.21 -0.77,4.74 -2.69,6.35 -0.74,1.02 -5.24,-0.82 -2.77,1.37 1.61,1.85 3.89,1.32 5.37,0.39 1.04,1.32 2.66,0.54 1.88,1.61 2.2,1.44 0.71,6.32 -1.89,3.8 -0.99,-0.9 -2.97,-2.42 -3.55,-4.38 -0.8,-2.14 -4.39,1.02 -3.28,1.06 2.19,-0.86 -0.04,1.87 1.38,2.68 -1.87,1.01 -1.25,3.06 -0.58,3.35 -0.3,0.27 -0.55,0.59 -0.78,0.92z m18.96,-2.29c-1.92,-0.02 -1.04,-3.7 -3.92,-2.81 -3.51,-0.09 0.22,-3.64 -2.76,-5.02 -1.79,-1.21 3.2,0.15 3.13,-2.28 0.04,-2.46 4.91,0.23 1.92,1.9 1.06,2.45 3.33,-0.76 2,-2.36 -0.51,-1.34 -2.25,-2.02 0.21,-1.96 2.33,-0.37 1.21,1.23 1.29,2.13 2.22,2.03 -1.98,3.78 -1.88,4.86 2.05,0.87 2.04,2.76 -0.28,2.66 -0.97,0.83 0.11,2.08 0.29,2.88z m-25.23,-19.54c-1.89,-1.51 1.09,-5.6 1.21,-4.99 -1.52,1.21 -1.11,3.3 -1.21,4.99z","name":"Denmark"},"ru":{"path":"m558.98,364.3c-2.56,-0.91 -4.97,-2.14 -7.36,-3.43 -2.39,-1.15 -4.94,-2.06 -7.59,-2.35 -2.81,2.28 -5.5,-0.94 -8.06,-1.85 -1.23,0.3 0.78,2.15 -1.52,1.8 -2.42,-0.25 -3.69,-3.69 -6.4,-2.82 -1.31,0.16 -4.41,0.18 -1.55,-0.66 1.64,-0.7 0.81,-3.34 -0.75,-1.74 0.37,-1.63 2.93,0.94 3.87,-1 1.25,-0.31 2.74,-1.24 3.63,-1.06 1.16,-2.32 -3.44,-3.39 -1.08,-5.92 0.57,-0.81 -0.94,-4.08 0.12,-2.72 0.39,2.37 2.24,1.11 1.25,-0.78 -1.26,-3.41 3.86,0.53 3.04,-2.81 -1.97,-1.81 -4.99,-1.7 -7.55,-2.54 -2.06,-0.94 2.06,-1.24 1.86,-3.16 2.06,1.7 4.87,-1.76 1.32,-1.4 -0.21,-1.02 3.11,-2.69 3.56,-4.64 3.16,0.27 3.03,-5.1 -0.28,-4.48 -2.62,0.21 -2.08,3.91 -4.95,4.14 -2.31,1.85 -0.59,-0.97 -1.26,-1.15 -2.27,0.02 -1.28,-3.82 0.48,-4.34 1.4,-2.13 0.73,-5.08 4.3,-4.68 2.91,0.1 4.24,-2.66 2.99,-5.05 -0.44,-0.81 1.31,-4.54 -0.5,-3.12 -0.89,0.38 -1.08,-3.79 -3.06,-2.28 -2.61,-1.85 3.34,-2.5 1.03,-4.59 -1.03,0.14 -4.3,0.91 -2.02,-0.74 1.96,-2.14 1.02,-4.53 -0.68,-6.4 1.16,-2.59 -2.93,-0.35 -3.64,0.61 0.41,-2.95 -3.61,-0.32 -4.74,-2.01 -1.3,0.69 -2.17,2.73 -3.44,0.57 -1.62,0.46 -2.9,0.42 -4.52,-0.03 -1.18,0.97 0.35,3.57 -1.91,1.94 -2.66,-0.03 -3.84,-4.48 -6.19,-3.24 -2.12,0.99 -3.16,6.03 -6.01,3.79 -0.55,1.88 -3.23,-1.75 -4.12,0.93 -2.26,2.15 -4.17,-0.6 -4.14,-2.64 -1.31,-0.74 -1.67,-2.47 -1.76,-3.17 -1.84,0.68 -2.55,-1.54 -3.04,-1.81 -1.53,1.29 -5.9,2.64 -6.27,0.53 -0.46,-1.43 -3.35,-2.71 -0.58,-3.43 0.87,-2.91 -3.85,-2.55 -4.29,-5.27 -1.34,-1.28 -2.82,-2.7 -4.07,-0.62 -2.6,-1.29 -3.34,1.16 -4.86,2.57 -2.29,-0.64 -4.88,0.47 -3.99,3.28 -1.64,3.09 -5.33,-1.16 -5.28,-3.38 0.29,-1.54 -1.99,-0.85 -0.93,-2.73 -1.04,-1.23 -5.06,-2.53 -2.44,-4.58 2.85,1.31 6.86,-0.11 6.98,-3.34 2.36,-1.51 -0.16,-3.89 -1.6,-4.2 -0.58,-2.91 -4.71,-0.88 -5.61,-1.07 0.65,-2.69 -1.62,-3.41 -3.71,-3.4 -2.11,-1.16 -3.32,-2.8 -3.81,-4.83 -2.42,0.17 -3.41,-1.67 -2.18,-3.83 -0.02,-1.71 -2.9,-2.44 -1.99,-4.84 -0.01,-1.79 -0.45,-2.87 -2.15,-2.08 -2.12,-2.07 -5.85,-2.66 -7.51,0.31 -0.95,2.92 -2.17,-0.33 -1.92,-1.55 -1.94,-2.34 -4.43,2.65 -5.64,-0.22 -1.71,0.04 -3.09,1.26 -3.28,-1.31 -0.9,-2.65 -2.85,-5.01 -4.71,-6.53 -1.83,-1.02 1.04,-5.27 -2.45,-5.76 -1.67,-0.51 -0.04,-2.71 -2.19,-1.57 0.05,-1.42 0.26,-2.99 1.68,-3.72 -0.54,-0.99 -1.34,-2.16 -1.45,-2.96 -2.84,-0.69 -1.01,-4.26 -2.77,-5.86 -2.08,-2.24 0.85,-4.53 0.39,-6.92 -1.01,-2.41 3.22,-2.6 0.55,-4.16 -0.83,-1.3 -2.35,-4.31 0.18,-2.28 1.51,-0.56 0.02,-3.79 2.55,-2.16 2.03,-0.4 0.55,-4.34 3.6,-3.39 1.61,0.41 6.06,0.64 4.72,-1.87 -2.47,0.38 -3.46,-3.31 -5.66,-1.7 -1.73,1.59 -3.35,0.22 -4.28,-0.75 -2.83,1.04 -0.5,-5.97 -3.43,-3.33 -0.79,1.95 -3.72,3.09 -1.67,0.48 4.94,-7.07 7.08,-15.55 9.98,-23.55 0.44,-3.03 2.51,-7.51 -0.31,-9.8 -2.38,-1.89 -5.29,-2.93 -7.96,-4.32 -3.88,-1.06 2.38,-6.07 -1.12,-8.02 -2.45,-0.36 -4.96,-1.94 -3.33,-4.47 -1.48,-1.21 -6.02,-2.28 -3.05,-4.86 0.42,-0.7 -3.23,-0.64 -2.08,-2.79 0.39,-2.06 -0.85,-2.94 1.09,-3.89 -0.82,-2.4 -2.73,-4.51 -4.14,-6.68 -1.51,-2.32 -3.78,-4.06 -5.41,-6.21 -0.98,-3.34 2.21,-6.3 1.62,-9.59 -0.91,-2.31 -3.95,-2.73 -4.86,-5.04 -3.1,0.98 -6.11,-2.82 -4.58,-5.63 1.26,-2.13 -3.52,-2.39 -0.66,-3.49 1.51,-2.49 0.64,-5.59 3.12,-7.72 -0.6,-2.56 3.46,0.62 3.16,-2.41 -2.11,-2.17 1.85,-1.54 2.99,-1.35 2.03,1.63 4.11,1.29 6.52,0.08 0.37,0.23 -0.76,2.57 1.13,2.81 -1.22,0.77 -1.32,4.65 0.4,2.88 0.2,-1.73 1.36,-3.42 1.9,-5.04 3.21,0.08 6.07,-1.95 9.29,-1.34 2.75,0.76 5.58,1.26 8.28,2.2 2.14,0.82 4.03,2.32 6.18,3.01 2,-1.35 5.54,1.61 7.21,-0.07 2.23,0.7 3.31,3.46 5.54,1.69 1.16,1.01 0.65,2.43 2.18,2.82 1.01,2.1 3.8,2.21 3.29,5.21 -0.09,3.44 0.15,7.2 -2.11,10.07 -2.26,3.09 -6,5.79 -10.02,4.97 -2.84,-0.74 -5.34,0.99 -8.08,1.16 -2.01,0.97 -5.49,-2.15 -6.54,-0.13 -1.33,0.97 -2.24,-0.89 -2.89,-1.46 -1,2.57 -7.21,1.52 -6.06,-1.62 -0.53,-0.64 -4.07,0.19 -5.44,0.48 -1.33,1.22 -0,2.41 1.25,1.32 2.16,-0.38 0.62,2.19 3.06,2.74 1.23,1.53 6.57,0.25 5.42,2.51 -1.91,3.1 2.22,0.91 3.81,1.72 2.09,0.58 5.78,2.19 4.56,4.13 2.75,1.59 0.23,3.96 -0.48,5.25 2.3,-0.18 4.43,1.99 4.35,4.27 2,-0.84 0.78,1.8 1.68,2.47 0.1,3.23 4.49,3.53 6.69,2.22 2.28,0.22 3.06,3.83 6.02,2.68 3.14,0.7 6.51,-0.4 7.17,-3.81 0.24,-2.71 -4.02,-6.69 -5.49,-3.3 -2.65,0.34 -5.44,-2.93 -6.7,-4.13 2.45,-0.62 0.68,-2.65 0.87,-3.74 2.98,-0.53 5.18,2.7 8.25,1.24 2.42,-0.59 5.57,1.81 7.6,-0.26 0.47,-1.42 5.9,0.3 3.69,-2.76 -1.12,-2.61 -3.65,-4.39 -6.37,-5.3 -3.26,-1.55 -1.48,-4.68 -0.67,-7 0.13,-2.98 3,-4.72 3.48,-7.44 -0.29,-1.95 -0.01,-6.22 2.42,-3.58 1.94,-2.25 5.82,-1.29 7.83,0.68 1.2,2.1 3.32,0.53 1.22,-1.06 -2.48,-1.87 -1.81,-4.87 -2.24,-7.47 -1.88,-1.57 -2.53,-5.38 -5.87,-5.07 -3.66,0.72 -1.05,-5.18 -3.4,-6.67 -1.19,-0.92 0.46,-3.75 -1.48,-3.55 -1.01,-2.39 -5.64,-2.94 -6.17,-3.55 2.64,0.97 4.98,-0.76 6.95,-2.52 2.55,-2.21 4.69,1.32 7.17,1.82 2.66,0.14 2.98,2.58 0.58,3.55 -1.44,1.01 -3.37,2.5 -1.86,4.15 -2.05,2.82 1.45,5.04 4.18,4.46 2.24,0.66 3.9,4.74 5.89,0.83 -0.45,2.74 1.7,0.82 1.6,-0.76 0.67,-1.92 4.97,-2.44 2.12,-4.7 -0.88,-2.08 -0.93,-5.08 -2.83,-6.29 1.51,-0.41 1.74,-3.36 4.33,-3.14 0.74,-1.52 -4.26,-0.47 -1.65,-2.01 1.38,-2.03 1.95,-4.13 2.25,-6.48 -0.71,-3 2.32,-4.04 2.61,-6.78 0.79,-1.07 0.87,-3.3 2.02,-0.85 0.37,3.39 3.79,-1.54 1.28,-2.71 -2.87,-0.55 -1.44,-3.38 -0.47,-5.41 0.59,0.58 1.75,-1.54 1.49,0.66 0.07,2.26 4.9,2.03 2.07,4.51 -3.06,1.89 2.52,2.73 3.16,0.29 0.8,-0.58 2.28,-0.85 1.45,-2.12 2.18,1.11 3.08,-1.11 1.14,-2.24 -0.63,-3.15 1.27,-6.2 4.04,-7.12 3.15,-0.33 1.76,-4.5 2.46,-6.7 2.68,1.91 1.44,-1.23 0.17,-1.57 -0.24,-1.73 3.07,-1.64 3.49,-0.99 -0.52,3.68 4.93,5.45 5.98,1.6 -0.74,-2.19 -4.02,-2.52 -1.51,-4.94 1.37,-2.71 -0.97,-5.14 -3.64,-5.47 -2.06,-0.69 -6.98,-0.83 -4,-3.86 -2.84,-2.24 1.77,-2.66 3.14,-4.1 2.67,-3.27 6.84,-5.01 10.97,-5.41 2.08,0.66 3.04,-0.42 5.04,-0.78 3.26,-0.69 5.53,-2.7 8.88,-1.89 1.83,0.09 3.72,-0.92 5.18,-0.23 3.3,-0.51 -0.59,-3.78 0.31,-4.05 7.13,0.01 14.26,-0.01 21.38,0.01 2.09,0.14 -2,3.01 0.93,2.93 1.33,0.5 2.97,0.39 1.78,1.28 0.04,1.2 -0.09,5.95 -1.36,3.75 0.88,-1.97 -1.47,-3.03 -1.4,-0.65 -0.13,1.49 -3.77,0.21 -3.69,2.55 -3.37,1.5 0.23,4.73 2.72,4.05 3.82,-0.71 6.21,-3.84 8.09,-6.94 1.84,-0.32 4.98,-2.24 2.66,-4.31C557.34,3.94 555.66,1.55 558.62,2.18c40.17,0 80.35,0 120.52,0 0,32.42 0,64.83 0,97.25 -2.09,0.36 -2.95,2.3 -1.54,3.74 -2.44,-1.53 -2.16,1.82 -2.17,2.03 -1.83,-0.06 -0.41,-2.79 -2.86,-3.06 -0.55,-1.54 -1.56,-2.65 -3.54,-1.77 -1.52,-1.23 -4.42,-2.86 -6,-3.08 -2.3,1.54 0.4,6.71 -3.71,5.55 -1.63,0.21 -3.74,1.9 -3.4,2.86 -1.22,-0.25 -2.92,1.14 -1.43,2.07 -2.82,1.19 1.7,2.9 -0.94,4.55 -2.72,2.09 2.48,0.44 1.29,3.06 -2.53,0.4 -0.3,2.61 -2.09,4 -0.4,3.26 -2.41,5.93 -3.86,8.82 0.28,0.79 -3.1,0.12 -1.27,1.6 -1.02,2.01 -3.11,4.53 -0.2,6.39 -2.52,0.22 -3.43,3.38 -5,5.17 -0.91,1.5 1.12,2.54 -1.32,2.93 -1.23,2.37 -2.15,5.27 -3.97,7.32 1.46,1.7 -3.54,1.33 -2.2,4 0.89,0.84 -2.06,0.35 -2,1.51 -2.16,-0.19 -3.58,4.12 -1.57,4.8 2.75,-1.67 -0.46,5.07 2.92,2.57 1.47,-1.64 1.11,3.68 3.89,2.06 1.15,-1.3 4.64,-3.43 5.55,-1.97 -0.97,2.34 -5.83,2.91 -5.32,5.59 1.65,1.51 -1.67,5.32 2.05,4.87 0.58,1.25 3.67,-0.2 3.17,2.56 -0.46,2.07 -2.09,3.57 -1.96,5.92 -2.28,1.79 1.99,3.07 3.27,1.27 1.22,3.88 3.54,-2.53 5.73,-0.07 1.71,0.15 3.48,-3.04 4.82,-0.75 0.7,2.54 3.93,4.85 1.33,7.39 -0.96,2.05 -3.49,5.21 -5.83,2.98 -2.18,1.39 0.8,4.71 -0.35,6.74 -1.64,-3.35 -4.19,2.67 -7,1.13 -1.58,0.37 -1.77,-1.65 -2.62,-1.81 -0.7,0.72 -4.76,0.36 -3.34,1.66 -0.36,0.87 -3.77,2.22 -1.73,4.23 -0.31,2.89 -2.88,-1.51 -4.31,1.09 -1.46,1.61 -3.55,2.49 -3.46,4.75 -0.41,1.43 -0.54,3.48 -0.05,5.34 -0.27,1.74 -0.64,1.81 -2.46,1.7 -2.35,1.24 -5.67,-2 -7.94,0.36 -1.02,1.19 0.11,2.72 -2.11,2.54 -1.91,-2.74 -5.13,1.42 -6.94,-1.53 -3.68,-1.24 -4.83,6.16 -8.08,2.91 -0.68,-0.31 -3.05,-3.22 -2.23,-1.07 0.44,2 -3.21,4.32 -1.91,5.59 -1.58,-0.54 -1.24,3.52 -1.64,0.7 -1.39,-2.07 -3.9,0.94 -5.63,0.87 0.37,1.37 0.82,0.9 -0.34,1.77 -0.21,2.03 1.56,4.11 -0.43,6.09 -0.26,2.82 -3.85,3.15 -3.39,6.04 1.82,1.79 -0.1,4.43 -1.07,6.43 -3.76,0.87 1.99,2.12 2.03,4.1 0.89,1.78 3.76,2.19 1.71,4.57 -2.3,2.9 -5.15,-1.81 -7.83,-2.01 -3.78,-1.12 -4.32,3.77 -2.19,5.82 -2.31,2.78 -0.33,6.19 0.38,9.1 0.77,1.86 4.43,0.77 3.16,3.54 -0.62,2.49 -0.11,4.99 0.21,7.43 1.17,3.44 5.88,-1.22 6.9,2.2 0.63,0.39 -1.33,1.3 0.64,1.71 0.61,2 4.71,2.89 4.1,0.07 2.42,-0.19 4.16,-3.38 6.65,-1.26 2.61,1.3 4.67,3.68 7.51,4.49 2.44,-0.41 2.29,3.63 -0.15,2.17 -3.16,1.33 0.69,4.72 2.95,3.33 2.69,-1.74 4.67,2.16 2.98,3.28 -1.53,-1.48 -3.23,1.37 -1.51,2.46 -1.66,0.09 -1.17,4.59 -3.15,5.57 -2.16,-0.57 -0.01,3.21 -2.03,1.18 -1.51,-0.51 -1.63,0.74 -2.82,1.17 0.46,1.78 3.76,-0.82 2.44,1.78 0.45,1.46 -0.73,2.48 0.5,3.94 -0.91,1.42 1.06,4.29 -0.87,5.01 0.89,2.05 -1.39,4.46 -0.11,6.57 1.6,2.36 2.84,-1.08 4.63,0.84 2.19,0.61 6.36,2.5 5.42,5.48 1.51,1.9 3.6,2.8 3.89,5.79 1.08,1.98 3.28,1.24 4.3,3.24 2.25,0.68 4.45,1.39 6.37,2.79 1.16,1.48 3.78,2.23 4.69,2.86 -0.38,2.65 -2.37,5.25 -1.49,7.93 0.05,2.46 -6.1,4.34 -5.15,1.14 -2.52,-0.74 -5.24,-0.5 -7.55,-1.88 -1.49,0.54 -3.24,0.69 -4.5,0.55 -1.71,1.13 -6.19,1.11 -5.4,-1.84 -0.88,-3.94 -4.63,1.38 -6.95,-0.97 -1.81,-1.22 -2.73,1 -2.64,2.13 -3.4,-2.47 -4.1,3.12 -6.37,4.33 -1.56,1.14 -0.42,-3.07 -2.75,-1.69 -2.4,0.37 -5.28,1.01 -7,-0.66 -2.78,0.67 -5.63,0.98 -8.42,1.61 1.94,1.66 -2.76,2.56 -3.79,2.43 -2.67,-0.72 -5.06,0.99 -7.69,0.02 -2.34,1.37 -6.27,0.31 -6.05,4.11l-0.04,0.01 0,0z m57.81,-33.85c-0.89,-1.57 0.49,-2.17 0,0z m-241.23,-51.26c-1.5,-0.26 -4.88,0.4 -5.3,-0.46 2.59,-1.58 -0.9,-5.56 2.71,-5.44 2.09,-0.97 5.31,1.36 6.88,-1.15 -0.17,-1.75 -1.39,-4.59 1.04,-3 2.58,1.66 5.83,-0.05 8.09,1.03 2.4,1.17 -0.19,4.14 1.51,6.12 -0.91,2.05 -4.72,1.7 -6.85,2.38 -2.67,0.39 -5.38,0.53 -8.08,0.53z m245.17,-54.27c-0.96,-0.5 -1.79,-4.14 -0.7,-1.7 0.41,0.34 1.1,1.13 0.7,1.7z m15.47,-62.08c-0.5,-1.68 1.86,0.26 0,0z M392.43,81.96c-1.18,-1.24 -0.52,-3.74 1,-1.58 0.97,0.64 4.51,-0.85 3.11,1.22 -1.28,-0.1 -4.06,-2.2 -4.11,0.36z m69.72,-22.48c-3.13,-0.37 -5.18,-4.96 -3.51,-7.6 1.49,-0.95 5.9,-1.19 6.08,0.31 -0.75,2.23 0.93,5.01 -1.2,6.83 -0.37,0.32 -0.88,0.46 -1.36,0.46z m1.2,-32.66c0.64,-1.98 -0.94,-1.7 -1.81,-2.37 0.83,-0.97 3.57,-1.76 1.01,-2.23 -1.29,0.52 -2.78,0.7 -3.28,0.14 -1.2,0.89 -3.04,-4.18 -2.96,-0.9 1.94,3.97 -3.66,-2.01 -2.98,1.25 2.3,2.87 -2.86,2.37 -3.53,0.29 -1.84,-1.41 -2.9,-5.04 0.07,-4.98 -0.36,-1.21 -1.52,-2.86 -0.18,-4.45 -3.01,0.94 -0.61,-2.79 -2.49,-3.65 -1.26,2.21 -4.03,0.25 -1.58,-1.13 2.3,-1.91 -4.09,-1.91 -1.43,-4.6 0.66,-1.81 2.03,-2.29 3.79,-2.01 1.73,-0.33 3.25,0.66 4.85,0.17 2.53,-1.3 -3.03,3.08 0.48,2.2 3.11,-1.44 -1.22,5.41 2.65,3.83 2.34,0.52 1.33,4.72 3.21,4.64 2.81,0.65 4.59,3.49 7.55,3.98 2.95,1.5 6.52,1.02 9.42,1.43 -0.95,0.85 -5.31,2.46 -4.34,3.45 -1.86,0.24 -4.2,1.89 -2.01,3.36 -1.56,0.82 -3.63,-0.42 -4.9,1.06 -0.87,-0.61 -1.05,-0.3 -1.52,0.53z m23.35,-5.93c-1.68,-0.42 -4.33,-0.5 -2.76,-2.36 -1.89,0.07 -1.65,-3.14 0.36,-1.62 2.48,0.8 5.12,0.27 7.63,0.6 2.21,1.62 -2.46,4.83 -3.16,1.83 -0.45,0.12 -0.96,1.84 -2.07,1.55z","name":"Russian Federation"},"mt":{"path":"m343.65,509.08c-1.52,-0.23 -1.75,-0.24 0,0z m1.95,2.72c-1.32,-0.63 -1.5,-0.7 0,0z","name":"Malta"},"me":{"path":"m385.29,433.13c-1.98,-1.45 -3.12,-5.3 -6.16,-4.27 -0.68,-0.6 -0.46,-1.87 -1.44,-2.17 0.16,-1.66 0.06,-3.3 -0.89,-4.86 1.96,-1.05 1.28,-4.74 3.12,-5.09 1.81,3.01 2.14,-1.15 0.71,-2.43 2.24,-0.2 3.4,-2.11 5.57,-0.36 3.49,0.56 2.95,4.72 6.22,5.9 -2.5,0.45 -0.84,6.17 -3.72,4.67 0.19,-3.37 -2.81,0.5 -2.99,1.87 -0.8,1.83 -2.3,3.26 -0.46,4.87 0.08,0.47 0.4,1.59 0.03,1.87z","name":"Montenegro"},"rs":{"path":"m397.48,431.57c-0.16,-2.49 -1.05,-5.46 -3.99,-5.18 -0.83,-1.86 -3.16,-3.89 -0.74,-5.1 2.42,-2.35 -3,-3.15 -2.73,-5.8 -1.28,-2.34 -5.16,-1.7 -5.47,-5.07 -0.61,-1.48 -2.43,-2.36 0.08,-2.14 2.37,-1.69 -1.79,-3.25 -2.79,-4.49 -3.49,-0.35 0.76,-4.99 -0.07,-7.08 -1.54,-0.41 -2.38,-0.6 -2.22,-2.53 -0.29,-0.9 3.52,-0.03 1.84,-1.89 -1.99,-0.46 -4.18,-1.03 -2.61,-2.61 0.5,-1.92 -2.64,0.29 -1.69,-2.2 -0.12,-1.58 -1.93,-2.81 0.65,-3.27 2.64,-1.35 4.3,-3.64 7.52,-3.04 2.34,-0.11 4.56,2.67 6.11,3.82 1,0.92 0.22,4.94 3.24,4.94 1.65,0.3 5.5,0.5 3.47,2.78 1.27,1.27 0.97,1.07 -0.4,2.22 0.32,1.47 3.21,0.4 3.09,2.01 1.78,0.14 4.21,-0.13 4.93,1.74 2.85,0.45 1.17,-3.79 1.99,-3.56 1.66,0.7 3.37,1 1.04,1.99 -1.64,2.21 4.19,3.86 0.86,5.71 -2.2,2.75 0.34,6.72 2.98,8.19 2.92,0.51 3.82,2.98 1.52,5.06 -0.82,0.05 -2.7,-0.25 -2.65,1.85 -1.23,2.37 3.66,5.04 -0.48,5.54 -2.42,1.11 -4.61,2.18 -7.35,2.39 -1.32,2.74 -6.31,0.55 -6.16,5.74z","name":"Serbia"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2175:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add Germany Map Data Points */
jQuery.fn.vectorMap('addMap', 'germany_en', {"width":592,"height":801,"pathes":{"th":{"path":"m312.19,352.19c-2.73,0.22 -2.22,4.11 -3.64,5.97 -1.01,2.7 -4.71,2.26 -7.13,2.91 -2.52,0.84 -2.65,-2.93 -5,-3.11 -2.02,-1.67 -5.36,0.2 -4.98,2.55 -0.62,4.82 -6.22,6.91 -9.72,9.65 -2.98,3.28 -7.8,2.07 -11.1,4.73 -2.55,1.59 -5.81,3.14 -7.87,5.03 0.64,3.74 1.96,8.43 6.44,8.84 3.41,0.33 2.07,4.91 5.71,5.17 2.12,1.11 4.61,1.57 6.04,3.67 2.61,-0.18 1.95,2.83 0.13,3.41 -0.75,1.55 1.21,2.98 -0.06,4.88 -2.65,1.33 -1.59,-4.91 -4.58,-2.96 -2.15,1.14 2.24,4.28 1.18,6.62 -0.73,2.87 3.35,2.38 3.93,4.97 0.22,2.4 -1.82,4.2 -4.4,4.04 -1.89,0.05 -3.04,-2.14 -5.19,-1.69 -2.29,-1.13 -3.6,1.4 -2.29,3.19 0.92,3.27 2.06,6.86 1.64,10.24 -1.04,2.07 -1.35,6.09 -4.56,5.07 -2.5,-0.54 -3.05,2.78 -2.17,4.43 0.33,2.11 -1.94,1.58 -0.64,3.71 0.2,3.37 -2.96,5.74 -4.05,8.57 -1.46,3 3.1,3.73 4.61,2.61 -1.8,-1.67 -0.95,-4.04 1.83,-4.18 2.21,-0.46 5.52,-0.43 5.9,2.47 2.29,2.61 -2.68,2.96 -1.96,5.59 0.5,1.86 -0.79,8.31 0.95,7 1.72,-3.38 5.8,-2.18 8.88,-2.88 2.69,0.85 3.11,5.24 6.43,5.5 3.89,0.66 4.77,4.88 6.09,7.93 -0.55,3.14 2.45,3.82 4.54,1.98 0.31,5.02 5.89,6.45 10.06,7.19 -0.2,3.63 -1.27,7.43 0.53,10.84 2.35,0.1 5.18,2.71 7.07,1.85 0.03,-1.3 -1.32,-4.82 1.27,-4.26 2.07,-0.06 5.3,2.5 6.66,0.25 0.29,-2.71 -3.43,-1.58 -4.54,-3.52 -1.94,-1.64 -5.47,-2.54 -4.67,-5.79 -0.91,-3.55 3.89,-3.37 6.02,-4.77 2.87,-1.54 6.27,-0.65 9.38,-0.79 1.61,1.84 2.4,4.9 5.49,4.49 2.33,1.02 3.21,-1.38 4.71,-2.1 2.52,-0.39 4.79,2.85 4.64,5.17 -2.32,0.34 -2,2.87 -0.04,3.79 1.25,1.09 4.62,-1.62 5.78,-2.97 1.07,-2.95 1.98,-5.92 0.84,-9.01 0.33,-2.69 -1.49,-4.1 -2.06,-6.05 -0.35,-1.26 0.15,-3.52 1.89,-2.72 2.51,-0.54 3.16,-3.11 5.03,-4.31 2.41,-0.31 6.41,-0.25 6.75,2.81 -1.09,1.47 -1.71,2.75 -1.31,4.94 2.04,1.91 4.67,0.65 4.88,4.5 0.54,1.96 3.79,3.19 4.05,0.56 1.06,-1.74 3.34,-0.66 4.25,0.63 6.13,-1.07 12.67,-0.94 18.25,-3.97 -1.68,-0.65 -2.19,-2.46 -0.38,-3.31 1.4,-0.73 5.24,-2.7 2.32,-4.13 -1.1,-2.24 -4.24,-0.26 -4.55,-3.08 -1.3,-2.44 2.29,-4.28 3.11,-6.33 2.98,-0.71 2.97,-4.68 5.91,-5.31 1.95,1.54 1.58,4.54 1.16,6.72 1.66,-0.64 6.6,0.71 6.33,-0.74 -3.05,-0.17 -0.61,-3 1.2,-3.1 2.57,-1.22 5.33,-2.23 7.87,-3.14 1.72,-1.51 4.46,-4.54 0.25,-4.48 -1.74,-1.64 -3.31,-4.12 -3.69,-6.5 0.38,-2.82 0.28,-5.87 1.72,-8.41 0.89,2.58 5.82,0.77 5.81,-1.09 0.71,-1.83 4.18,-2.99 5.41,-0.97 2.56,-0.68 0.59,-4.69 3.44,-5.44 3.25,-1.87 7.85,-0.32 10.53,-2.97 -2.57,-1.55 -0.79,-6.34 -4.47,-6.16 -2.74,-0.84 -6.28,-2.6 -5.42,-6.03 0.8,-2.88 -3.5,-2.46 -5.15,-3.47 -2.87,-0.81 -6.3,-2.89 -8.61,0.02 -2.54,2.1 0.01,3.58 1.21,5.21 -0.17,3.21 -2.39,6.03 -3.68,8.9 -1.08,1.71 -2.42,1.35 -2.66,-0.64 -2.24,-4.02 -1.09,1.94 -3.66,-0.66 -2.71,-1.39 -5.95,-1.32 -8.59,0.19 -0.02,-4.6 -5.04,-6.77 -8.31,-9 -2.72,-0.06 -5.6,1.79 -8.33,0.1 -2.65,-0.52 -5.05,-1.27 -4.7,-4.45 -2.02,-1.11 -5.86,-2.21 -7.53,-1.16 -1.29,1.98 -3.84,1.06 -5.84,1.31 -1.81,-1.01 -2.04,-3.39 -2.5,-5.41 3.14,0.3 2.23,-3.59 0.51,-4.83 -1.37,-2.03 -4.15,0.89 -5.53,-1.6 -1.69,-0.96 1.02,-5.32 2.36,-2.94 1.62,-1.63 2.76,-3.73 4,-5.66 -0.78,-1.58 -4.12,-2.02 -3.47,-4.09 -2.15,-0.17 -2.01,-2.77 -1.75,-4.31 -4.91,-2.77 -10.54,-0.91 -15.84,-1.69 -2.69,-0.42 -5.41,-2.8 -8.03,-1.28 -1.99,0.45 -4.28,-1.52 -3.68,-3.5 0.86,-2.86 -0.76,-4.88 -2.35,-7.1 -1.55,-2.64 -4.98,-6.28 -2.16,-9.19 -2.47,-3.43 -7.17,-3.03 -10.89,-3.21 -0.41,0.09 -0.82,0.18 -1.23,0.27z m95.09,106.63c0.36,0.47 0.77,-0.65 0,0z","name":"ThÃ¼ringen"},"sh":{"path":"m173.41,0.78c-1.96,2.02 -2.32,5.26 -3.72,7.72 0.61,-2.46 2.87,-3.44 4.94,-4.31 1.37,-2.31 1.87,-2.9 -1.22,-3.41z m-4.63,9.69c-1.37,3.14 -2.78,7.11 -2.63,10.16 1.42,-1.81 3.12,-2.33 4.66,-0.67 1.41,1.35 2.9,1.87 4.52,0.27 2.61,-1.53 -0.74,-0.41 -1.92,-1.16 -2.06,-1.81 -4.59,-3.55 -3.89,-6.71 -0.29,-0.68 0.25,-4.89 -0.73,-1.88z m16.78,8.5c-1.27,2.96 0.71,4.89 2.59,6.89 3.39,3 2.55,7.98 4.79,11.67 0.62,3.55 5.38,3.23 6.46,6.57 3.09,5.18 8.01,9.55 9.53,15.49 -0.32,3.65 -4.55,4.93 -6.72,7.41 -1.75,1.07 -3.73,2 -5.62,0.78 -2.44,0.59 -7.26,-0.45 -7.37,2.95 0.9,2.44 -1.97,3.88 -3.95,4.18 -1.94,-2.13 -2.52,-1.01 -2.77,1.45 -0.87,2.9 3.21,3.7 4.93,4.64 1.92,-3.3 6.38,-1.94 9.56,-2.06 2.21,2.21 1.18,5.9 0.57,8.61 -1.14,2.05 -2.44,4.23 -0.74,6.43 0.5,2.36 2.45,2.12 4.01,1.08 3.24,-0.45 3.19,4.26 4.78,6.16 2.07,2.16 -0.11,6.53 -3.11,5.16 -1.14,-1.75 -5.79,-1.46 -5.26,0.73 2.63,2.93 2.85,7.1 5.04,10.2 1.56,1.12 3.1,3.53 5.09,1.5 1.43,0.34 0.36,3.67 3.4,2.47 5.03,0.4 10.67,-0.76 14.8,2.92 4.21,3.5 4.64,9.55 8.23,13.45 3.79,1.81 5.25,6.01 5.59,9.84 1.82,3.22 5.7,4.78 8.7,6.74 2.98,1.76 2.45,-2.04 3.3,-3.87 0.32,-3.07 2.7,-3.68 2.95,-0.51 1.97,4.21 4.12,0.09 5.74,-1.98 1.13,-1.81 1.09,-3.61 3.84,-2.85 2.75,1.63 4.73,-1.94 6.94,-3.16 -0.04,-2.48 1.02,-3.47 3.73,-4.47 1.51,-1.18 4,-1.93 4.95,0.16 -0.92,3.02 -1.41,6.74 1.26,9.04 1.1,1.47 -0.59,3.76 -1.58,5.02 -3.72,1.55 -2.94,7.3 0.6,8.57 3.05,0.71 1.81,2.28 4.18,4.34 1.9,2.3 3.7,4.33 6.71,5.17 4.24,1.47 7.8,5.01 12.4,5.13 1.57,-2.96 0.71,-7.47 3.24,-9.94 1.76,-0.99 3.85,1.15 5.23,-1.34 4.78,-3.66 7.65,-9.11 11.5,-13.72 0.07,-2.89 2.79,-4.69 1.09,-7.69 -1.21,-2.36 -3.12,-1.39 -5.13,-1.38 -2.37,-1.11 -4.33,-3.37 -5.88,-5.25 0.57,-2.78 0.94,-5.55 -0.72,-8.01 -1.68,-4.33 3.4,-6.71 6.26,-8.75 2.76,0.39 4.62,-1.55 2.8,-4.28 -2.57,0.04 -0.18,-3.45 -2.47,-3.84 -2.6,1.03 -5.44,-0.16 -6.16,-2.94 -1.95,-2.52 -0.1,-5.31 2.05,-6.91 1.09,-2.74 3.32,0.44 5.2,-0.9 2.94,-4.13 6.93,-7.19 11.06,-10.05 2.63,-1.56 0.21,-5.06 0.5,-7.57 -0.21,-3.63 -1.2,-7.39 -0.01,-10.84 0.18,-2.96 -5.24,-0.47 -7.49,-1.07 -5.13,1.62 -7.3,9.04 -13.4,8.34 -3.13,0.69 -4.64,-2.86 -6.1,-4.84 -4.97,-2.87 -10.19,-5.54 -15.47,-7.76 -2.99,-1.52 -6.08,0.55 -8.5,2.13 -0.97,2.39 -2.38,4.59 -2.88,7.13 -1.56,-1.44 -3.01,-3.67 -0.84,-5.3 1.62,-1.77 -1.68,-4.84 0.9,-6.58 0.02,-1.27 -2.39,-3.21 -3.97,-2.94 -4.31,0.8 -8.65,1.68 -12.59,3.47 -2.43,1.23 -4.15,-0.86 -4.81,-2.94 1.24,-1.68 2.97,0.32 4.34,-1.22 3.92,-1.6 8.22,-4.79 7.48,-9.56 -0.08,-4.17 0.91,-8.43 -1.14,-12.32 -1.21,-3.12 -1.73,-8.59 -5.28,-9.18 -0.59,1.71 -1.3,5.52 -3.94,3.91 -3.94,-2.44 -5.62,-7.87 -10.62,-8.75 -2.4,-0.95 -5.92,-1.49 -2.94,-4.34 -2.83,-1.32 -4.46,2.91 -6.75,4.06 -1.81,0.77 -3.7,1.77 -5.55,1.1 -2.17,-0.1 -2.78,3.34 -5.32,2.53 -2.44,-0.17 -5.39,0.15 -5.47,-3.04 1.26,-2.25 -1.79,-2.35 -3.37,-3.29 -2.69,-1.82 -6.3,0.87 -8.88,-1.52 -3,-2.97 -8.01,-2.63 -12.09,-2.77 -2.73,-0.05 -5.94,1.35 -8.19,-0.63 -2.53,-0.79 -2.34,1.14 -3.28,2.91z M165.38,30.69c0.26,2.81 0.4,-8.09 0.17,-2.47 -0.06,0.82 -0.12,1.65 -0.17,2.47z m13.5,1.44c-2.38,0.11 -5.93,-0.19 -6.48,2.95 -0.84,2.31 2.84,2.19 4.01,3.33 2.08,0.12 5.59,1.6 6.02,-1.46 1.83,-2.49 -0.07,-5.86 -3.55,-4.82z m-11.97,6.41c-1.92,2.44 0.88,5.14 2.25,6.97 3.61,0.13 0.82,-1.45 -0.03,-3.16 -0.91,-0.75 -0.95,-5.89 -2.22,-3.81z M181.53,44c-3.16,2.07 3.2,-1.05 4.68,-0.94 3.57,-2.86 -4.04,0.86 -4.68,0.94z m-1.31,6.22c-3.19,-0.54 3.33,2.8 0.63,-0.13 -0.17,-0.12 -0.42,0.08 -0.63,0.13z m8.44,2.63c-1.5,0.95 -5.02,0.69 -5.3,2.69 0.04,2.05 2.12,3.65 4.01,2.44 0.45,-0.74 3.48,-5.42 1.28,-5.13z m142.28,2.25c-2.22,2.09 -3.42,5.93 -2.84,8.5 1.81,-1.93 6.45,-1.17 5.53,2.13 0.75,2.01 5.23,1.5 7.53,1.68 3.9,0.79 4.95,-0.34 2.64,-3.56 -1.78,-3.59 -4.09,-7.7 -8.61,-7.85 -1.38,-0.32 -3.03,-0.37 -4.25,-0.9z m-134.34,2.94c-1.42,2.56 1.08,4.09 3.5,3.69 1.95,-0.37 3.87,-2.9 3.63,-4.91 -2.37,-0.51 -4.91,-1.04 -6.76,0.98l-0.36,0.24z M140.06,88.88c-0.28,2.81 2.92,0.39 0,0z m48.13,13.38c-1.61,1.32 0.69,2.85 0.06,-0.03l-0.06,0.03z","name":"Schleswig-Holstein"},"st":{"path":"m367.5,207.72c-2.53,0.49 -2.68,6.11 -5.69,3.88 -1.54,-0.27 -2,4.74 -0.62,6.28 -1.83,0.03 -4.69,1.23 -5.84,3.45 -2.16,1.75 -5.06,2.95 -7.73,3.81 -1.55,-0.32 -3.98,0.25 -4.38,-1.66 -3.96,-2.32 -9.18,-1.22 -13.69,-1.78 -0.82,1.11 0.07,3.08 -1.73,3.89 -1.82,3.69 -6.1,1.61 -9.28,2.54 -2.64,-0.11 -4.45,1.7 -3.62,4.38 -0.45,3.07 1.59,5.83 2.38,8.76 4.58,2.95 6.91,8.32 9.22,13.03 -1.02,4.14 2.73,7.03 5,9.88 -2.35,-0.75 -6.67,0.93 -4.41,3.78 2.13,2.7 4,5.66 7.03,7.25 2.19,1.61 0.12,4.97 -2.22,4.59 -1.88,2.15 -0.66,5.73 1.52,7.3 1.12,1.37 4.12,3.9 1.64,5.39 -1.82,-0.07 -4.08,1.44 -3.31,3.44 0.85,1.22 3.42,-0.32 2.88,2 0.05,3.3 -3.89,4.53 -5.42,6.71 -0.9,2.3 0.67,6.76 -2.83,4.48 -2.5,-0.5 -4.36,0.86 -6.64,1.31 -3.5,0.14 -7.17,-0.75 -10.56,0.56 0.56,2.46 -2.44,4.29 -4.71,3.94 -2.29,1.2 4.79,4.03 4.2,5.21 -3.3,0.45 -2.03,3.05 0.01,3.98 1.13,2.32 -0.87,4.55 -2.86,5.36 -2.94,1.53 -1.17,5.3 -1.3,7.86 2.06,2.6 4.65,5.37 5.72,8.78 -0.64,2.04 0.85,6.26 3.56,4.75 3.65,0.5 8.21,-0.2 10.69,3.16 4.64,-2.48 0.38,1.08 -0.35,3.49 0.67,3.87 3.9,7.06 5.79,10.42 0.02,2.22 -1.14,5.56 1.78,6.09 2.2,-1.04 4.22,-0.48 6.44,0.45 5.84,2.46 12.54,-0.89 18.17,2.38 2.32,0.62 -0.45,4.34 2.28,4.54 1.79,0.31 -0.33,2.19 2.35,3 1.69,0.92 2.02,2.61 0.5,3.94 -1.45,1.35 -2.21,4.99 -4.56,4.59 -2.63,-0.91 0.09,3.99 2.28,1.66 2.83,0.66 5.62,4.8 3.25,7.41 -2.57,1.08 1.05,5.18 3.56,3.71 1.96,-0.79 2.91,-2.94 5.65,-1.43 2.6,0.08 6.05,0.91 5.78,4.15 1.33,1.52 4.58,2.03 6.72,2.37 2.49,-0.44 5.14,-1.91 7.2,0.43 2.77,1.74 6.17,3.82 6.94,7.21 2.79,-1.13 5.73,-0.73 8.41,0.53 1.23,-2 2.73,-1.49 3.69,0.66 0.59,3.07 2,-0.72 2.48,-1.83 0.83,-2.27 3.92,-5.75 0.2,-7.01 -1.99,-2.12 2.54,-4.35 -0.47,-5.52 -3.54,-1.32 0.06,-3.71 -3.77,-3.68 -1.13,-1.82 -0.14,-5.31 -0.45,-7.77 0.09,-3.62 -2.36,-6.17 -3.27,-9.5 -2.24,-2.8 3.78,-1.95 2.18,-4.77 -0.27,-3.83 -1.97,-7.24 -2.66,-10.91 1.12,-2.57 2.7,-5.07 2.75,-7.88 2.68,-2.78 6.09,-4.94 9.75,-6.06 4.81,0.08 9.58,-1.34 13.94,-3.25 0.29,-3.17 3.92,1.99 5.64,-1.8 0.58,-1.59 1.27,-4.54 3.8,-3.39 2.22,1.16 4.46,1.71 7.03,1.3 4.79,-0.31 9.85,0.27 14.45,-1.01 2.63,-2.16 7.03,-3.34 7.55,-7.13 -2.51,-3.21 -2.57,-7.84 -4.05,-11.66 -1.56,-2.32 0.46,-2.56 1.11,-3.49 -1.21,-1.69 -2.84,1.88 -4.93,0.87 -3.35,0.33 -4.21,-4.14 -7.34,-4.73 -1.95,-1.81 -4.21,-0.39 -6.46,-1.61 -1.95,-1.37 -5.09,-1.98 -5.86,-4.32 -2.25,-0.71 -4.5,-3.34 -6.75,-2.88 0.04,3.1 -4.02,3.62 -6.31,2.65 -6.29,-1.76 -13.04,-4.4 -16.59,-10.25 -1.82,-2.88 -4.27,-5.73 -5.88,-8.53 1.69,-2.65 1.92,-5.52 1.61,-8.56 0.08,-3.49 1.94,-6.54 3.57,-9.44 -0.44,-3.76 -2.35,-8 0.31,-11.34 1.69,-3.42 -2.77,-5.17 -4.84,-4.84 -0.77,1.84 -4.03,2.12 -4.73,-0.07 -3.16,-2.02 -0.66,-5.45 -0.28,-8.33 0.25,-2.72 1.68,-3.75 3.82,-4.6 0.52,-2.45 0.69,-5 -1.29,-6.86 -2,-2.13 -0.72,-5.29 -0.24,-7.76 2.19,-2.1 2.75,-4.3 1.28,-7.4 -0.37,-2.87 -3.52,-1.27 -5.2,-0.49 -2.2,0.23 -1.98,-4.35 -5.66,-2.08 -3.04,0.71 -6,0.64 -8.83,-0.79 -2.04,-1.1 -6.47,-1.05 -6.16,-4.18 0.48,-0.96 2.72,-2.17 0.45,-2.84 -2.36,-0.92 -4.97,-4.41 -7.35,-1.78 -2.26,0.12 -3.78,-2.34 -5.44,-3.56 -1.33,-1.14 2.25,-2.99 -0.03,-2.78z m-35.72,88.19c-0.1,0.03 0.04,0.06 0,0z","name":"Sachsen-Anhalt"},"sn":{"path":"m438.91,347.22c-0.71,1.7 -1.23,3.74 -3.22,4.5 -2.58,1.63 -3.52,-1.1 -5.94,1.53 -4.3,1.22 -8.55,2.77 -13.09,2.53 -3.01,1.74 -7.34,3.17 -8.45,6.62 0.03,3.26 -3.77,5.91 -1.75,9.19 1.33,3.2 1.78,6.8 2.19,10.31 -4.06,0.29 -2.18,3.87 -0.74,6.17 2.24,3.72 1.36,8.42 1.53,12.58 2.6,-0.28 2.73,2.06 3.18,3.2 1.51,2.44 3.44,1.13 5.41,0.39 3.7,1.5 8.18,1.88 11.41,4.16 0.74,1.94 -0.81,4.85 2,5.77 1.72,1.99 6.37,0.62 6.03,4.01 -0.35,2.66 3.75,3.98 1.22,5.97 -3.58,1.98 -8.34,0.37 -11.41,3.34 -0.07,2.05 -0.66,4.73 -3.19,4.69 -0.84,-2.38 -4.84,-0.74 -3.91,1.56 -2.16,0.55 -4.73,2.38 -6.75,1.41 -0.26,3.26 -1.99,6.93 0.66,9.67 0.13,3.51 6.2,1.64 4.46,5.11 -1.54,2.13 -3.26,4.42 -6.11,4.51 -2.19,1.15 -4.93,1.82 -6.85,3.17 1.14,0.4 3.92,-0.58 2.97,1.81 -1.3,0.56 -2.71,1.18 -4.15,1.04 -1.87,-0.95 -6.83,1.68 -5.71,-1.56 0.5,-1.28 0.39,-7.08 -1.74,-3.97 -0.56,2.99 -4.53,3.58 -5.56,6.44 -1.97,1.1 -1.24,4.78 1.19,3.64 1.33,1.03 5.21,3.22 2.79,5.13 -0.59,1.68 -5.69,2.39 -2.69,4 2.14,0.67 3.79,2.61 5.05,4.37 -0.72,2.68 -0.54,4.28 2.54,4.44 2.89,0.5 5.02,2.48 7.96,1.72 3.8,-1.14 4.85,3.42 6.85,5.61 1.23,2.16 4.76,5.08 2.59,7.58 -0.49,1.72 3.93,3.14 3.09,0.38 -2.48,-2.46 -0.08,-6.44 1.28,-8.97 2.86,-4.57 6.53,-8.74 9.94,-12.84 4.56,-2.02 9.99,-0.84 14.06,-4.03 2.14,-0.66 4.2,-3.73 6.38,-3.05 2.63,1.52 5.07,3.45 7.78,4.83 2.07,-1.12 5.11,-3.24 4.13,-5.91 0.2,-2.04 -0.2,-5.69 2.84,-5.24 2.59,-0.29 5.2,-0.72 7.63,0.55 2.91,-0.54 1.72,-4.96 3.88,-6.45 2.35,-2.97 5.63,-5.26 8.68,-7.26 2.67,-0.81 5.51,3.8 7.01,0.39 1.65,-1.64 3.72,-4.3 2.58,-6.74 3.93,-2.17 7.47,-5.47 12.25,-5.22 2.33,-0.49 4.94,-0.78 7,0.62 2.41,-0.15 5.15,-2.09 4.01,-4.81 -1.95,-3.53 3.27,-1.43 5.18,-3.05 2.77,-1.08 6.09,-1.25 7.96,-3.69 5.86,-2.9 11.49,-6.39 17.78,-8.32 1.88,-3.11 -0.76,-3.48 -3.2,-3.83 -2.51,-0.45 -4.28,-2.72 -5.9,-4.48 1.17,-2.33 1.01,-5.72 3,-7.44 2.01,-0.54 2.32,2.64 4.53,2.3 2.11,1.26 6.52,1.34 7.5,-0.58 -0.17,-3.74 3.64,0.67 5,1.7 3.7,2.16 4.3,6.67 5.45,10.42 1.49,2.62 -2.09,6.06 2.42,6.33 2.67,0.89 5.37,2.57 8.28,1.87 0.47,-3.78 1.26,-7.7 4.06,-10.39 2.84,-3.18 3.04,-7.91 3.71,-11.62 2.05,-4.17 1.85,-9.14 2.71,-13.74 0.26,-3.07 0.84,-6.1 1.99,-8.91 0.22,-5.15 -3.62,-9.39 -5.25,-14.09 -0.63,-2.47 0.48,-5.37 -1.69,-7.4 -2.96,-2 -6.81,-2.81 -10.16,-4.16 -2.63,0.45 -5.28,-0.92 -5.64,-3.77 -0.41,-2.32 0.72,-4.39 -0.77,-0.54 -0.78,2.23 -4.07,1.99 -5.91,1.44 -0.89,-2.72 -3.76,-2.22 -5.89,-1.05 -2.43,0.03 -4.2,1.93 -3.78,3.04 -2.98,-1.35 -5.85,1.55 -8.48,2.42 -3.55,-1.67 -7.51,-1.35 -11.28,-1.56 -3.58,3.73 -3.22,9.41 -5.54,13.67 -1.24,3.16 -4.34,3.42 -7.26,3.89 -3.26,1.02 -6.88,-0.1 -9.67,2.35 -1.59,0.79 -4,-0.13 -5.49,-0.56 -4.01,0.9 -8.8,0.36 -12.18,-2.44 -2.57,-1.34 -4.55,-3.47 -6.76,-5.28 -2.23,1.37 -5.63,2.37 -6.56,4.87 -0.02,1.86 -4.09,1.87 -5.44,1.29 -1.42,-2.13 -2.64,-3.94 -1.26,-6.61 0.56,-3.54 0.3,-7.09 -1.63,-10.2 -0.72,-1.89 -2.32,-5.98 -4.72,-4.31 -2.79,1.33 -2.48,-5.48 -5.68,-3.53 -5.59,0.15 -11.31,0.77 -16.84,0.31 -1.25,-0.57 -2.44,-1.63 -3.94,-1.22z","name":"Sachsen"},"sl":{"path":"m63.72,553.88c-2.9,2.18 -6.1,2.82 -9.5,4.44 -3.47,4.51 -10,4.1 -15.06,5.38 -4.6,0.18 -8.97,-1.26 -13.22,-2.78 -2.47,1.73 -0.51,5.04 -0.84,7.5 1.8,0.96 4.08,-1.32 5.97,0.4 2.44,1.62 5.28,3.2 6.78,5.81 -3.49,0.44 0.05,4.79 -0.09,6.94 1.05,3.41 4.13,4.95 6.56,7.16 1.79,1.94 0.3,5.34 3.04,6.13 2.43,1.92 -2.53,4.66 1.39,5.86 2.37,0.12 6.25,2.27 7.13,-1.09 -0.35,-2.25 -3.03,-3.71 0.38,-4.78 4.42,0.26 10.1,1.27 11.81,5.94 0.51,1.58 -0.22,5.5 1.56,5.84 2.33,-0.7 1.95,-7.32 3.65,-3.1 1.02,1.94 2.67,2.87 4.44,1.6 2.61,-0.08 5.35,0.47 7.44,1.84 0.63,-1.3 5.37,-2.76 3.56,-3.91 -1.62,-2.52 -4.36,-5.17 -3.81,-8.41 1.42,-2.72 5.03,-3.05 6.69,-5.31 0.32,-2.19 -0.19,-4.41 0.63,-6.91 -2.49,1.08 -4.55,-2.01 -6.84,-2.72 1.25,-2.57 -1.08,-3.33 -2.41,-4.88 -1.38,-2.57 3.05,-1.81 2.04,-4.46 0.15,-3.03 0.9,-7.08 -0.66,-9.48C81.13,563.37 78.01,559.23 75,558.25c-1.82,-1.1 -4.05,-5.12 -6.16,-3.76 -1.8,1.27 -2.93,1.15 -3.06,-0.42 -0.68,-0.01 -1.4,-0.33 -2.06,-0.19z","name":"Saarland"},"rp":{"path":"m124.22,422c-3.08,1.37 -2.76,4.11 -2.15,6.91 -0.74,2.27 -2.92,4.57 -5.35,5.28 1.82,2.98 -1.68,6.02 -4.55,6.28 -3.87,1.42 -8.15,2.76 -11.74,4.31 -2.53,-1.67 -5.28,-0.25 -4.24,2.84 0.38,2.78 -1.77,4.53 -4.33,4.8 -2.21,0.9 -4.57,1.03 -6.93,0.89 0.24,-3.01 0.16,-2.77 -0.66,-0.16 -2.61,2.5 -6.78,2.21 -10.16,3.14 -1.7,1.36 -3.59,4.13 -6.33,3.09 -1.84,0.93 -1.47,5.36 -2.5,7.61 -0.31,2 -3.88,3.46 -5.32,1.71 -2.49,-2.13 -5.07,1.92 -3.92,4.39 -1.32,2.14 3.87,6.32 1.33,6.03 -2.57,-0.38 -4.98,1.47 -7.53,-0.25 -1.87,-0.86 -4.14,-1.17 -5.28,-3.06 -3.07,1.11 -6.64,2.41 -9.75,2.06 -1.18,-2.88 -5.27,-3.74 -3.13,0.21 0.06,1.85 3.77,4.69 0.04,3.72 -2.34,1.34 -4.33,-0.2 -6.47,-0.11 -0.71,2.72 -2.48,4.43 -4.99,5.59 -1.73,1.37 -5.12,2.04 -4.14,4.93 1.73,3.46 -1.97,4.26 -2.68,6.98 -1.38,4.14 -2.64,8.53 -0.77,12.73 1.47,5.09 3.95,10.18 7.71,13.93 3.19,1.73 6.27,3.8 8.6,6.49 1.94,2.68 4.29,-1.39 6.06,0.93 1.74,1.25 1.47,4.34 1.36,6.37 -1,5.55 -4.71,9.97 -7.61,14.63 -1.1,1.62 -3.21,1.58 -3.81,3.7 1.32,3.4 5.62,2.86 8.44,4.25 6.02,0.99 12.25,-0.27 17.78,-2.55 1.84,-1.13 2.94,-3.18 5.35,-3.48 2.7,-0.62 4.85,-2.4 7.33,-3.4 2.47,-0.56 3.3,1.96 4.66,0.63 1.69,-1.87 4.4,2.01 6.06,3.12 2.19,1.85 4.96,3.22 7.6,4.23 2.08,-1.3 3.07,-1.77 3.74,1 0.63,3.7 0.2,7.6 -0.21,11.34 -3.62,0.15 -1.02,2.73 0.84,3.34 -0.88,3.1 1.79,3.86 4.18,5.17 2.7,-0.99 3.7,-0.04 2.19,2.5 -0.63,2.28 0.81,4.56 -1.1,6.61 -1.8,1.77 -5.4,2.25 -6.16,5.03 0.5,2.47 2.45,5.22 3.88,6.72 0.53,-2.07 4.25,-1.3 6.09,-2.06 2.18,0.88 4.73,2.02 3.59,4.81 0.57,4.16 4.15,6.47 7.58,8.3 4.06,2.82 9.28,1.81 13.75,1.03 5.57,0.87 11.49,1.89 16.04,5.46 1.5,1.92 4.34,2.91 6.75,3.03 1.44,0.1 3.88,-0.46 4.75,1.03 2.73,-1.42 4.25,-4.04 4.38,-7.03 0.97,-3.35 4.62,-5.13 4.47,-8.92 0.59,-3.28 2.22,-6.72 1.35,-9.86 0.74,-2.94 4.48,-3.42 5.84,-6.03 2.45,-0.61 0.47,-2.16 -0.81,-2.44 -2.02,-2.71 2.93,-3.58 2.9,-6.17 0.3,-2.2 -0.42,-4.5 0.69,-6.55 -1.31,-0.77 -4.55,0.38 -4.34,-2.22 1.3,-2.38 -0.67,-5.57 -0.94,-8.16 -1.05,-1.55 -0.56,-3.22 -0.06,-4.81 -2.06,-3.14 -3.58,-6.56 -4.31,-10.28 -0,-3.21 3.88,-3.16 5.84,-4.38 1.83,-1.95 0.9,-4.67 -1.26,-6.04 -2.48,-3.08 -4.3,-6.94 -4.99,-10.83 0.78,-1.71 1.4,-3.41 0.25,-5.25 -0.12,-3.38 -3.6,-5.04 -5.13,-7.75 -2.86,-3.27 -7.52,-1.08 -10.66,0.56 -4.69,1.79 -9.52,4.51 -14.68,3.47 -2.44,-2.49 -4.42,-5.7 -6.29,-8.66 -2.19,-2.94 2.65,-2.19 3.79,-4.33 1.44,-3.52 5.56,-1 5.95,-3.31 1.05,-2.62 -4.12,-2.88 -2.51,-5.79 1.38,-2.83 4.79,-3.85 7.44,-4.63 1.92,2.63 5.73,-0.22 2.09,-1.81 -1.3,-2.26 2.57,-3.89 4.23,-2.24 3.08,0.46 1.96,-3.71 0.96,-5.33 -1.37,-3.08 -3.17,-5.78 -6.33,-7.23 -3.79,-0.63 -1.12,-3.37 -0.49,-6.08 0.24,-1.88 -1.87,-3.91 -0.43,-6.13 1.19,-2.18 3.39,-6.07 6.28,-3.97 1.67,3.39 3.78,0.05 4.16,-2.21 1.81,-2.05 -0.69,-2.3 -1.07,-3.97 -0.17,-2.37 -1.93,-5.43 0.13,-7.42 -0.88,-3.78 -6.22,1.19 -5.36,-1.83 1.28,-4.22 -5.99,-5.38 -4.53,-9.85 1.32,-2 0.84,-5.3 -1.94,-5.86 -1.78,-2.03 -5.71,-1.54 -6.82,-3.48 -0.21,-1.96 2.71,-4.06 -0.25,-4.94C125.29,422.08 124.64,421.87 124.22,422z","name":"Rheinland-Pfalz"},"nw":{"path":"m177.25,263.34c-2.1,-1.63 -5.7,-1.31 -6.06,1.91 0.19,3.63 -4.48,4.11 -7,3.66 -1.11,-1.64 -4.06,-2.21 -2.35,0.66 0.52,3.14 4.56,4.05 6.57,6.26 1.92,1.46 2.52,4.49 2.62,6.8 0.18,2.64 0.19,5.1 -0.9,7.58 -1.32,1.99 0.48,3.83 2.46,3.92 3.25,0.58 0.3,2.71 -0.78,3.97 -1.55,0.88 -3.89,0.86 -4.75,2.84 1.66,2.95 -2.56,1.58 -4.29,1.1 -2.41,-0.95 -5.38,-1.98 -7.02,0.74 -2.16,1.92 -4.56,3.57 -7.26,4.5 -1.87,2.2 -2.96,-0.94 -5.46,-0.31 -2.18,0.39 -2.63,4.37 -4.84,2.75 -2.6,-0.41 -3.41,-2.28 -4.46,-4.35 -2.31,-1 2.21,-2.81 3.55,-2.98 3.51,0.2 5.07,-3.48 2.41,-5.69 -1.71,-1 -4.92,-1.05 -5.1,-3.81 -0.4,-2.56 2.07,-4.87 2.81,-7.19 0.91,-0.72 -1.83,-2.26 -0.5,-3.69 3.14,-1.64 1.45,-5.72 -1.26,-6.8 -2.05,-1.15 -4.05,1.71 -6.33,0.21 -2.51,-1.72 -6.07,-2.59 -6.27,-6.18 -0.22,-2.85 -2.57,-3.65 -4.96,-4.34 -1.35,-0.64 -3.78,3.65 -1.27,3.96 1.72,1.12 -0.74,4.19 -1.92,5.19 -4.58,2.06 -9.39,4.71 -12.83,8.28 -0.91,2.09 -3.91,0.71 -4.63,3.16 -3.68,0.16 -7.44,-1.07 -11.03,-0.19 -1.13,2.36 -3.53,1.5 -5.41,2.92 -3.3,2.56 -8.23,3.82 -10.15,7.67 -0.16,4.41 -5.85,3.29 -8.27,5.42 -1.07,1.95 -3.97,5.3 -0.36,6.02 2.12,2 6.43,3.97 4.59,7.5 -2.07,2.76 -4.18,5.76 -7.59,6.94 -1.43,-2.65 -3.58,-2.35 -5.97,-1.09 -2.93,0.68 -5.59,2.43 -8.37,3.24 -1.83,0.92 -6.4,-1.52 -6.2,0.14 1.25,2.44 1.32,5.11 -1.64,2.71 -2.84,-2.65 -6.23,-5.14 -10.34,-4.5 -2.26,1.13 -4.86,1.79 -7.57,1.91 -2.94,-0.3 -6.47,1.11 -7.66,3.97 0.91,4.49 1.78,9.09 3.5,13.31 3.65,0.48 3.87,3.28 3.59,6.38 -0.03,2.95 4.03,4.36 4.95,7.23 3.16,3.93 2.85,9.32 1.32,13.83 -1.07,2.64 2.37,5.59 -1.15,7.3 -2.71,3.53 -6.04,6.82 -8.16,10.71 -0.6,1.66 -1.81,5.57 0.42,6.15 1.79,-1.07 4.45,-3.48 6.03,-0.89 -1.83,0.74 -3.77,2.52 -4.63,4.79 -4.06,2.72 -7.88,5.86 -12.82,6.75 -2.54,0.57 -4.87,1.7 -3.17,4.63 0.65,3.73 2.86,3.68 5.9,3.34 1.73,-0.12 4.7,0.11 2.92,2.43 -1.62,2.73 0.97,3.7 3.18,4.3 2.89,0.68 -1.54,3.27 0.66,4.81 0.17,1.78 -1.03,5.56 -2.97,3.06 -2.7,0.41 -2.86,4.47 -3.11,6.49 1.25,3.17 3.86,4.98 6.86,6.32 1.73,2.64 2.03,6.34 4.88,8.31 -3.91,1.75 5.55,0.78 2.22,4.39 0.29,3.25 -5.37,3.94 -3.38,7.37 0.76,1.42 1.86,4.52 3.66,2.67 3.25,-0.44 6.22,1.26 7.36,4.35 2.36,2.77 -0.08,6.31 -0.45,9.15 2.56,4.82 -0.8,-1.03 2.06,-1.07 2.71,-1.06 3.44,4.11 6.19,2.53 2.75,0.37 5.82,-2.69 8.02,-1.5 1.92,2.23 5.39,3.01 8.14,3.37 3.72,-0.21 2.3,-1.41 1.51,-3.82 0.04,-2.95 -1.16,-6.55 2.63,-7.5 2,-1.69 3.89,3.12 6.16,0.31 1.15,-2.86 1.77,-6.3 2.41,-9.46 2.7,1.12 5.4,-0.08 6.75,-2.56 3.27,-1.13 7.52,-0.86 10.35,-2.91 0.37,-1.12 0.98,-4.32 2.62,-2.66 -0.82,3.1 2.33,2.44 4.39,1.84 2.3,-0.53 5.31,-1.22 4.81,-4.28 -0.51,-2.22 0.4,-5.33 3.3,-4.47 2.78,1.45 5.46,-1.31 8.27,-1.76 3.1,-1.68 7.91,-1.4 9.45,-5.05 -0.47,-2.98 -4.28,-3.7 0.44,-3.18 2.74,-1.08 5.31,-3.89 4.08,-6.99 -1.04,-2.52 1.87,-4.26 3.71,-5.24 2.21,0.36 5.37,2.16 3.03,4.28 -1.84,2.46 1.06,2.47 2.69,2.94 2.57,1.6 7.18,2.77 6.12,6.74 -0.22,1.83 -1.49,3.93 0.54,5.35 1.58,1.78 4.44,3.29 3.47,6.09 1.92,-1.91 4.28,0.75 5.25,0.78 1.15,-1.97 2.94,-4.17 0.84,-6.13 -1.97,-2.33 -1.27,-4.35 1.26,-5.9 2.67,-2.21 4.81,-5.42 7.75,-7.15 2.53,-0.53 5,4.12 6.81,1 1.81,-2.99 4.43,-5.63 4.94,-9.19 1.73,-1.11 2.77,-3.4 4.66,-4.63 0.39,-1.91 -1.57,-4.12 -1.75,-6.25 0.73,-3.23 4.88,-3.7 7.64,-2.9 1.98,0.85 4.51,0.77 5.94,-0.93 1.31,-3.2 3.81,-6.24 2.52,-9.88 -0.64,-1.84 0.53,-6.24 -2.48,-5.85 -2.48,0.46 -4.55,3.29 -7.13,2.53 -1.37,-1.68 -3.72,-3.65 -1.3,-5.48 2.34,-4.53 6.76,-7.46 11.73,-8.41 3.83,-1.47 7.94,-1.54 11.98,-1.11 1.92,-2.78 -0.9,-3.85 -1.9,-6.19 -1.82,-1.61 -1.41,-4.36 1.19,-4.68 3.14,-1.44 7.01,-2.83 10,-0.32 2.4,1.63 -0.27,3.86 1.25,5.59 1.92,0.62 4.04,0.65 4.63,-1.66 3.98,-3.61 9.19,-6.08 11.4,-11.26 1.23,-2.28 4.7,-5.14 4.82,-6.65 -1.68,0.55 -4.34,-0.05 -3.2,-2.36 0.05,-5.23 2.13,-10.09 3.74,-14.92 1,-2.69 -2.16,-5.66 -4.66,-4.72 -3.16,2.83 -0.64,-2.27 -0.81,-4.06 -0.05,-2.72 -2.54,-1.8 -3.99,-2.62 -2.61,-2.3 -7.4,-3.71 -6.62,-8.03 0.39,-2.34 -1.28,-5.79 0.83,-7.47 -2.23,-1.73 -1.62,-3.85 -2.5,-6.03 -2.65,-0.77 -5.5,-0.87 -7.39,-3.23 -1.18,-0.94 -5.31,-5.84 -2.07,-3.89 2.92,3.3 5.04,-1.41 4.58,-3.56 -1.6,-1.73 -4.39,-1.61 -6.02,-2.94 -1.48,-2.41 1.21,-4.72 1.94,-6.91 1.84,-2.01 5.4,-1.29 6.16,-4.38 1.42,-2.09 2.16,-4.3 0.81,-6.53 1.2,-2.26 2.95,-5.17 -0.91,-5.56 -3.17,-1.51 -3.6,3.21 -5.58,4.74 -1.93,2.12 -2.98,5.59 -6.39,5.38 -3.28,0.88 -6.88,0.85 -10.18,0.44 -3.79,-0.66 -2.03,-5.2 -2.58,-7.89 -0.63,-2.02 1.28,-4.76 -1.4,-5.81 -1.68,-1.96 -4.73,1.64 -6.71,2.05z m32.09,14.69c-0.04,0.06 0.1,0.03 0,0z","name":"Nordrhein-Westfalen"},"ni":{"path":"m186.44,120.91c-5.6,0.51 -6.88,7.11 -8.44,11.54 -1.55,4.84 -4.41,10.19 -1.33,15.08 0.62,2.76 4.51,0.93 6.62,1.66 3.74,-0.55 1.44,3.37 1.28,5.34 -0.09,2.27 2.07,5.17 -0.81,6.68 -0.57,2.01 -4.6,1.89 -4.47,0.01 0.2,-1.62 -2.19,-2.79 -1,-4.38 -2.39,-2.05 -5.8,-0.88 -8.29,-2.92 -3.19,-0.55 -3.1,-6.58 -7,-4.9 -3.25,1.5 -2.87,5.42 -3.31,8.39 1.73,1.09 4.31,-1.81 5,0.84 0.65,4.51 -0.3,10.35 -4.66,12.69 -2.05,0.33 -4.01,-0.7 -4.44,-2.75 -1.01,-1.99 -2.84,-4.1 -4.91,-2.06 -2.51,-1.99 -2.84,-5.26 -2.69,-8.25 1.7,2.41 4.86,0.82 6.63,-0.53 1,-2.85 -1.94,-5.58 -2.55,-8.38 -0.35,-2.68 -2.75,-3.1 -4.67,-3.53 -0.88,-2.07 -1.59,-4.78 -0.56,-6.72 -5.56,-1.98 -11.61,-0.89 -17.16,0.47 -4.67,-1.16 -9.01,2.41 -13.75,2.56 -2.64,-2.27 -6.36,-1.45 -9.63,-2 -6.44,-0.16 -11.29,4.48 -15.23,9 -2.96,1.82 0.86,2.65 1.75,4.06 2.29,2.26 -1.66,3.67 -2.74,5.44 -1.44,-2.96 -5.14,-3.8 -4.27,0.54 -0.65,3.9 -0.71,8.05 -1.52,11.83 -1.87,1.87 0.95,4.14 2.97,3.58 5.28,0.29 10.96,-0.24 15.72,2.42 -2.08,0.69 -5.45,-0.97 -5.28,2.53 -1.3,3.55 -0.88,7.6 -1.89,11.2 -1.02,2.31 -3.53,5.58 -0.77,7.39 -1.04,4.96 1.43,10.17 -1.09,14.86 -1.44,6.42 -8.35,10.37 -8.34,17.29 -0.73,5.37 -0.65,11.06 -2.02,16.22 -1.54,2.43 -4.12,-1.19 -6.18,-0.78 -4.31,-0.59 -8.85,-1.62 -13.15,-0.5 -3.28,1.5 -0.59,5.19 -1.65,7.89 0.05,2.71 -1.96,5.6 -1.13,7.99 3.96,3.35 9.48,3.72 14.25,5.18 1.32,-0.55 1.98,-4.64 3.66,-2.59 1.6,4.04 5.43,7.78 4.44,12.38 -1.84,2.71 -4.41,6.49 -1.89,9.57 1.86,2.89 3.08,-1.11 5.12,-1.16 3.32,-0.74 7.21,1.07 10.28,0.08 0.77,-2.08 3.82,-0.65 4.33,-3.02 3.95,-3.24 8.34,-6.11 13.06,-8 3.49,-2.99 -0.93,-3.55 0.23,-6.31 0.69,-1.71 1.95,-4.41 4.07,-2.55 2.19,0.59 4.44,1.49 4.69,4.05 0.24,3.46 3.25,4.66 5.87,6.2 2.49,1.33 5.1,-2.32 7.3,0.36 2.1,0.86 2.8,3.79 2.88,5.66 -2.14,1.36 -2.99,3.7 -0.25,5 -2.47,1.24 -2.71,4.41 -4.06,6.59 -0.13,3.3 3.86,2.19 5.28,4.24 1.61,1.34 2.29,6.23 -0.56,6.24 -2.12,1.03 -7.72,1.03 -4.44,4.18 0.32,1.52 3.77,3.35 4.41,1.19 1.64,-2.26 4.29,-2.15 6.63,-1.31 1.36,-0.07 3.99,-1.2 5.52,-2.37 2.72,-1.18 4.39,-5.59 7.79,-3.97 1.75,0 5.6,2.6 5.94,0.72 0.62,-2.2 3.26,-3.09 5.19,-3.63 2.15,-1.43 1.31,-2.65 -0.91,-2.81 -3.46,-2.11 -0.12,-6.05 -0.14,-8.9 -0.15,-3.52 0.05,-8 -3.58,-9.88 -2.14,-2.11 -6.14,-3.08 -5.9,-6.7 -1.51,-2.43 0.6,-3.29 2.77,-2.04 1.45,1.42 4.2,1.38 5.98,0.03 1.26,-1.81 0.54,-4.61 3.46,-5.43 2.32,-1.11 5.18,2.05 7.68,-1.07 2.13,-2.24 4.04,-0.2 5.66,1.43 0.57,2.57 -0.21,5.4 0.22,8.09 -0.93,3.21 1.85,4.85 4.75,4.17 3.21,-0.08 7.22,0.09 9.7,-1.99 2.54,-2.97 4.51,-6.31 6.89,-9.36 2.02,0.69 5.86,0.77 5.97,3.44 -1.73,2.35 -1.52,4.54 -0.97,7.06 -1.39,2.86 -2.39,6.91 -6.2,7.13 -2.4,1.05 -3.91,4.28 -3.71,6.63 1.97,1.04 4.71,1.6 6.53,3.33 0.07,1.63 -1.12,5.59 -2.84,6.05 -3.41,-0.73 1.6,2.55 2.84,3.1 2.26,0.15 6.09,0.95 5.15,4.09 -0.68,1.53 3.99,3.73 1.27,4.76 -0.76,2.74 -0.13,6 0.12,8.84 1.43,2.32 4.36,3.6 6.57,5.25 3.31,-0.99 4.48,3.42 3.35,5.85 0.3,0.17 2.48,-0.22 3.34,0.68 2.41,1.16 3.09,3.45 2.56,5.97 -2.13,4.96 -3.82,10.38 -3.75,15.72 2.51,0.18 4.77,-1.21 7.34,-1.06 0.61,1.51 -0.65,3.85 2.25,3.24 3.59,-0.55 6.83,1.47 9.03,4.14 1.86,0.23 1.58,3.6 -0.22,2.84 -1.35,2.17 -4.02,2.06 -5.22,4.59 1.78,2.73 3.46,5.34 3.51,8.74 1.02,2.35 -1.28,3.79 -3.38,3.42 -2.32,0.54 -3.56,5.32 -0.53,5.96 3.22,1.18 6.33,2.54 9.36,4.13 4.29,-2.82 0.47,-2.05 -1.06,-3.89 -2.77,-2.53 1.66,-4.59 3.28,-6.24 2.15,-2.54 5.98,-1.9 8.84,-2.34 2.08,1.35 1.61,5.72 4.21,2.64 3.91,-2.4 7.72,-5.21 12.48,-5.45 3.97,-2.72 8.84,-4.93 11.78,-8.85 1.12,-1.78 0.33,-3.88 2.39,-5.63 3.16,-1.67 6.79,0.6 8.47,3.25 2.88,-0.58 7.14,-0.26 7.76,-3.87 -0.05,-2.88 3.65,-4.47 1.75,-6.24 -1.57,-2.46 -0.32,-5.67 -2.8,-7.78 -1.09,-2.4 -4.13,-3.43 -3.79,-6.44 -0.16,-2.66 -0.99,-6.17 2.11,-7.49 1.53,-0.76 3.52,-2.56 1.95,-4.3 -2.69,0.07 -2.43,-3.84 -0.41,-4.53 -1.85,-1.14 -5.14,-4 -4.75,-5.49 2.09,-0.39 4.95,0.22 5.97,-2.13 -0.9,-2.87 3.5,-2.65 5.41,-2.71 2.87,-0.48 6.16,1.13 8.63,-0.98 1.86,-0.84 5.77,1.14 5.58,-1.56 -0.39,-2.88 1.81,-4.27 3.9,-5.7 0.91,-0.47 3.07,-3.7 1.17,-3.53 -3.44,0 -2.76,-5.19 0.13,-5.66 3.82,-0.08 0.19,-3.6 -1.09,-4.81 -2.24,-1.37 -1.88,-4.21 -1.94,-6.38 0.35,-2.73 4.31,-1.12 3.91,-4.03 -1.37,-1.84 -4.07,-2.33 -5.04,-4.76 -1.41,-2.15 -5.08,-4.85 -2.74,-7.55 3.42,-1.12 3.06,-1.7 0.77,-4.08 -1.69,-1.79 -1.55,-4.29 -1.69,-6.46 -2.28,-4.45 -4.68,-9.22 -8.86,-12.09 -1.05,-3.33 -3.02,-6.48 -2.57,-9.99 -0.32,-2.09 0.44,-4.42 2.92,-4.26 2.85,-1.12 6.27,-0.08 8.93,-1.09 1.55,-1.38 2.76,-2.68 2.6,-4.79 1.69,-2.11 5.13,-0.16 7.46,-0.64 2.96,0.35 7.54,-0.38 8.88,2.86 3.56,1.21 6.67,-1.39 9.63,-2.75 1.37,-1.79 3.07,-3.85 5.5,-3.97 -1.07,-2.07 -0.03,-4.66 0.75,-6.72 2.37,0.04 3.51,1.16 4.74,-2.15 -3.03,-0.57 -6.18,-1.13 -7.93,-4.01 -2.99,-1.28 -5.04,3.32 -7.81,2.09 -1.68,-2.2 -4.97,-3.78 -4.59,-6.94 -1.58,-2.26 -4.54,-2.52 -6.84,-3.72 3.01,-0.21 2.65,-3.1 -0.2,-2.77 -6.07,-2.31 -7.72,-9.29 -10.33,-14.6 -2.42,-1.1 -4.9,-1.16 -5.92,1.34 -1.84,1.96 -4.18,1.97 -6.29,0.43 -2.67,-1.78 -3.79,-6.4 -7.79,-5.36 -2.51,-0.77 -4.24,2.4 -6.66,0.76 -4.42,-0.95 -7.78,-4.07 -12.05,-5.47 -1.87,-1.32 -3.8,-1.77 -5.52,0.17 -0.27,2.44 -2.51,2.71 -4.5,2.22 -3.65,-0.29 -5.04,-4.84 -7.84,-6.5 -1.55,0.25 -1.89,4.05 -4.47,4.49 -2.08,0.15 -3.58,-2.52 -5.1,-3.8 -1.02,-1.09 -2.8,3.74 -4.07,0.89 -2.45,-1.59 -2.98,-4.24 -4.53,-6.41 -0.49,-1.9 1.56,-6.03 -2.15,-5.31 -4.45,-0.29 -7.84,-3.81 -11.28,-6.28 -1.97,-2.7 -0.94,-6.7 -3.64,-9.09 -3.37,-1.87 -5.18,-5.18 -6.46,-8.69 -1.64,-4.08 -4.33,-8.01 -8.9,-9 -3.99,-0.41 -8.13,-0.36 -12.15,-0.37 -3.37,0.14 1.11,4.61 0.44,4.78 -2.24,-0.97 -4.59,-0.85 -6.63,0.19 -3.12,0.32 -6.61,0.16 -9.54,-0.98 -2.08,-1.54 -4.86,-2.91 -5.69,-5.53l-0.44,0.03z m-49.34,8.94c-0.03,1.09 0.83,-0.73 0,0z m-9.69,0.88c-1.79,0.64 -2,2.84 -0.28,0.69 1.15,0.39 7.48,0.12 5.09,-0.5 -1.6,-0.1 -3.21,-0.36 -4.81,-0.19z m18.53,1.06c0.45,3.21 0.81,1.46 0,0z m-31.41,1c-2.03,0.59 -1.28,4.28 0.3,1.19 1.64,-1.6 4.48,-0.97 6.64,-1.09 -2.3,-0.17 -4.65,-0.31 -6.94,-0.09z M108.19,134.75c-2.3,1.14 5.75,0.85 0.38,-0.03 -0.12,0.04 -0.27,-0.05 -0.38,0.03z m-12.13,0.84c-3.52,0.44 -2.54,2.25 0.41,1.38 2.85,-0.48 5.82,-0.48 8.59,-1.28 -2.97,-0.23 -6.02,-0.18 -9,-0.09z m-32.28,11.06c-1.1,1.27 2.99,3.13 2.5,3.16 1.33,-1.35 0.17,-2.16 3.86,-2.62 3.23,0.07 0.14,-2.1 -1.3,-2.1 -1.69,0.52 -3.38,1.04 -5.06,1.56z M174.25,186.75c0.36,2.67 4.51,2.84 6.35,4.51 3.41,1.6 7.66,0.4 10.79,2.95 3.11,1.84 7.08,3.66 10.49,1.79 1.4,0.19 3.63,2.7 2.89,3.67 -2.99,0.4 -0.11,3.94 -0.78,6.22 0.86,2.85 -2.01,3.95 -3.7,5.61 -3.46,-0.92 -6.93,-3.62 -10.57,-2.86 -2.23,0.9 -3.13,-2.21 -2.65,-3.92 -0.64,-2.4 -4,-3.06 -3.74,-5.78 -0.67,-2.42 -1.42,-4.7 -4.2,-4.81 -3.28,-1.01 -7.24,-4.77 -5.34,-8.44 0.16,0.35 0.31,0.71 0.47,1.06z","name":"Niedersachsen"},"mv":{"path":"m468.38,35.5c-3.45,0.91 -7.31,1.41 -8.93,5.06 -0.26,1.49 -3.68,7.61 -2.06,6.34 1.83,-1.19 3.02,-3.21 2.21,-5.18 0.53,-1.31 3.04,-4.63 4,-2.16 0.98,2.93 -2.17,4.94 -1.91,7.78 2.5,-1.15 4.75,-3.34 7.37,-1.07 2.42,1.29 5.16,2.48 7.7,0.7 1.54,0.46 0.47,5.05 0.71,7.19 0.58,3.31 -4.03,1.68 -5.65,1 -1.59,-1.22 -4.83,-1.69 -5.19,-3.75 1.7,-4.11 -3.26,-1.94 -5.53,-2.31 -2.04,0.6 -6.23,0.55 -4.31,3.72 1.26,1.16 4.35,-0.42 5.38,2.04 2.76,1.44 -0.43,4.39 -2.54,4.37 -2.75,-0.56 -4.74,4.2 -0.71,3.48 2.64,0.57 6.65,0.82 2.18,2.56 -1.86,1.21 -4.55,1.66 -6,3.25 -1.1,2.82 0.47,5.48 1.28,8.13 5.01,1.69 10.02,3.38 15.03,5.06 2.12,-0.23 1.09,-3.14 0.16,-2.97 -0.76,1.88 -3.98,1.99 -3.25,-0.63 2.8,-3.12 5.65,-6.81 9.31,-9 3.6,-0.24 7.24,-1.3 10.81,-1.09 1.21,1.32 2.75,4.02 0.25,4.94 -1.68,2.68 3.83,-2.34 2.14,-4.14 -1.15,-2.6 -3.19,-5.78 -6.42,-4.67 -2.75,-1.52 -4.42,-5.28 -3.91,-8.38 1.26,-2.37 3.94,-3.83 5.78,-5.54 1.61,-2.97 -1.68,-6.36 -4.75,-5.02 -3.75,0.66 -8.71,3.63 -11.63,-0.19 -1.83,-1.92 -3.2,-6.71 0.31,-7.56 2.78,-1.63 0.58,-2.73 -1.84,-1.94z m-11.72,12.09c-0.08,-0.04 -0.09,0.18 0,0z m-4.56,2.28c1.4,-3.26 1.29,-4.92 0.11,-0.61l-0.09,0.49 -0.02,0.12z M457,55.72c-1,0.46 -3.54,5.14 -1.38,3.6 1.48,-0.87 6.21,-2.64 2.44,-3.69 -0.36,-0.17 -0.71,0.02 -1.06,0.09z m-41.09,7c-0.25,1.57 -4.9,6.97 -0.87,4.76 3.72,-1.22 7.4,-2.58 10.67,-4.69 2.93,-0.95 5.29,-0.58 1.12,-0.91 -3,-0.7 -6.71,0.09 -8.98,-2.44 -0.65,1.09 -1.29,2.19 -1.94,3.28z m31.25,-1.97c0.11,0.78 4.7,-2.13 0,0z m-5.81,0.66c-3.54,0.47 -7.66,0.41 -10.88,0.66 0.67,2.11 2.68,1.92 4.62,1.67 3.01,-0.17 6.3,-0.07 8.66,-2.29 -0.79,-0.19 -1.6,-0.03 -2.41,-0.03z m1.56,3.03c-2.88,1.13 -1.21,5.18 -4.19,6.34 -3.6,2.14 -6.72,-2.29 -10.47,-2.06 -3.01,-0.89 -5.76,1.74 -8.35,3.01 -2.71,2.18 -6.52,4.43 -7.27,7.96 0.18,1.51 4.13,0.67 2.84,2.66 -2.29,1.22 -5.24,-0.3 -6.59,-2.13 -0.64,-1.13 1.18,-6.54 -0.53,-3.19 -3.22,4.08 -9.79,4.87 -11.29,10.52 -1.07,2.64 -1.85,5.58 -5.3,3.89 -4.59,-1.7 -8.52,1.77 -12.84,2.72 -3.31,0.47 -6.17,-1.62 -9.5,-0.72 -2.97,1.63 -5.73,4.31 -8.33,6.62 -1.96,2.01 -2.68,5.33 -0.14,1.47 1.06,-1.2 2.41,-4.78 4.19,-3.41 2.37,2.62 -1.24,5.31 -2.34,7.63 -1.89,1.4 -5.07,1.98 -4.85,5.06 -0.11,3.13 -0.5,6.25 -2.62,8.72 -1.16,-0.88 -3.68,-1.23 -3.47,-3.09 -1.92,-1.17 -4.21,-1.95 -5.89,0 -2.35,1.65 -4.97,-1.81 -3.77,-4.13 -1.91,-1.96 -3.3,-5.2 -6.59,-3.87 -5.1,-0.35 -9.02,3.11 -13.04,5.78 1.53,2.15 0.81,6.74 -2.56,5.38 -2.64,1.41 -7.07,3.37 -6.72,7.09 1.31,2.5 2.06,5.12 1.15,7.92 0.24,2.24 3.08,3.96 4.95,5.27 1.49,-0.13 2.88,-0.94 4.38,0.28 1.77,1.48 2.91,4.8 1.54,6.72 -1.07,2.51 -1.74,5.18 -3.94,7.19 -3.45,4.41 -6.57,9.53 -11.63,12.13 -2.85,-1.67 -4.12,1.25 -4.21,3.8 -1.04,3.05 -1.35,4.72 2.28,3.81 4.38,-1.22 5.62,3.97 8.63,5.73 2.06,1.71 4.79,0.13 5.56,-2.03 1.66,-2.26 4.66,-0.28 6.53,0.28 2.66,5.4 4.35,13.11 11.13,14.56 1.97,-0.26 2.54,2.31 1.09,3.34 1.98,0.75 4.2,1.46 5.28,3.41 2.92,0.33 5.86,0.78 7.88,-1.84 2.53,-1.04 4.17,0.11 6.2,0.92 3.41,1.17 3.57,-3.72 2.91,-5.91 -1.19,-2.85 2.75,-4.04 4.19,-5.91 2.26,-0.57 6.06,-0.68 6.92,2.18 2.22,-0.82 7.58,-0.29 4.18,-3.52 1.89,-0.52 5.64,-0.7 8.01,-2.08 1.84,-1.16 5.37,-2.23 4.75,-4.82 0.89,-1.93 2.17,-4.64 4.7,-3.27 2.88,0.17 5.85,-1.68 8.79,-1.42 2.69,2.85 6.38,3.54 9.59,5.47 2.1,1.42 2.54,5.89 5.86,4.62 1.42,-1.54 4.52,-1.23 6.97,-0.84 2.64,0.11 5.42,0.12 6.99,2.65 1.76,1.23 2.9,3.74 4.81,4.36 3.51,-2.08 7.9,-1.79 11.85,-1.57 1.87,0.92 -0.02,2.26 -1.2,2.88 2.73,2.02 3.96,-3.02 6.01,-4.14 1.85,-2.5 5.05,-5.4 8.21,-4.51 0.4,1.63 2.6,4.73 2.69,1.53 -0.18,-4.03 4.85,-6.14 8.16,-4.72 0.92,1.02 1.13,4.66 2.78,2.25 1.94,-2.52 5.64,-4.66 5.83,-7.92 -0.98,-3.87 1.53,-7.87 4.55,-10.15 2.94,-2.19 5.03,-6.55 9.2,-6.14 3.13,-1.46 0.88,-2.47 0.94,-4.94 -0.47,-2.01 1.66,-5.18 3.04,-2.12 2.09,2.5 4.8,4.66 5.08,8.15 0.55,3.39 3.31,3.78 6.08,2.65 2.41,-0.3 6.44,1.78 7.55,-1.21 2.62,0.79 6.91,-0.99 8.25,2.06 1.49,6.11 -3.45,10.78 -7.19,14.78 -1.98,3.1 3.33,1.46 5.03,1.98 3.6,0.68 6.06,-2.53 6.41,-5.79 1,-1.79 6.72,-1.16 5.01,-3.95 -1.75,-4.35 -2.83,-9 -3.99,-13.46 -2.18,-2.83 -4,-6.6 -2.87,-10.22 -0.22,-5.43 -3.03,-10.29 -3.44,-15.72 -0.42,-2.28 -2.57,-2.04 -3.28,-0.22 -1.81,2.36 -5.39,1.17 -7.84,0.59 -3.37,-1.38 -7.23,-1.87 -9.74,-4.72 -2.44,-2.52 -7.36,-2.95 -8.1,-6.78 1.68,-2.2 3.24,-5.36 5.94,-6.13 0.44,-2.04 -2.63,-3.55 -3.67,-5.18 -2.27,-2.24 -3.02,-5.61 -4.55,-8.32 0.21,-2.8 0.27,-5.88 -2.37,-7.5 -1.78,-3.54 -4.86,-2.15 -7.78,-0.99 -2.53,1.08 -5.51,1.39 -7.79,2.9 0.14,1.21 2.98,3.43 0.56,3.84 -3.2,0.18 -3.78,-3.49 -4.59,-5.69 -0.99,-1.26 -3.18,1.08 -3.03,-1.66 3.36,-2.44 -2.45,-0.94 -3.09,-2.5 -1.56,-2.33 -1.97,-5.95 -5.39,-6.49 -2.15,-2.65 -4.68,-0.2 -6.44,-0.76 -2.83,-2.27 -3.42,-6.13 -4.17,-9.38 1.49,-2.52 -2.16,-5.5 -3.62,-7.17 -1.75,-0.48 -3.25,0.75 -4.88,1.21z m52.69,22.19c-3.16,0.36 -1.48,4.22 0.37,5.25 1.73,2.04 0.07,5.76 2.48,7.75 1.23,2.84 2.71,4.73 5.49,2.07 1.56,-1.43 -2.24,-3.39 -0.78,-5.26 2.84,0.22 4.58,0.55 1.09,-0.38 -3.78,-1.63 -6.46,-4.91 -7.63,-8.84 -0.21,-0.29 -0.58,-0.78 -1.03,-0.59z M508.81,98.25c2.29,2.13 4.59,4.76 3.68,8.19 1.29,3.82 -2.55,2.56 -4.59,1.72 -1.01,-1.74 -1.1,-5.02 -3.97,-3.22 -1.8,2.49 2.15,3.83 2.07,6.36 1.37,2.89 -1.67,5.12 -4.12,5.88 -2.51,0.31 -1.55,2.32 0.67,2.35 4.16,0.13 7.86,-2 11.53,-3.58 2.18,-0.69 5.82,0.22 7.3,-1.22 1.43,-3.32 1.05,-6.01 -2.4,-7.65 -4.01,-3.08 -7.07,-7.49 -11.49,-9.99 0.44,0.39 0.88,0.77 1.31,1.16z m-153.22,8.91c-2.07,0.65 -6.19,2.56 -3.84,5.09 3.14,1.72 4.9,-0.57 5.38,-3.56 0.63,-1.6 0.03,-1.86 -1.53,-1.53z","name":"Mecklenburg-Vorpommern"},"he":{"path":"m231.91,351.28c-2.52,4.22 -6.22,7.61 -8.38,12.09 -3.47,2.99 -7.81,5.31 -10.28,9.09 -2.28,0.4 -5.74,0.13 -5.5,-3 2,-3.26 -3.47,-5.21 -5.91,-3.76 -1.41,0.82 -5.95,0.93 -4.65,3.28 0.64,2.39 3.13,3.23 3.37,5.4 0.17,2.42 -1.34,4.44 -3.94,3.29 -5.15,-0.39 -10.41,1.05 -14.95,3.35 -3.17,1.4 -4.72,4.59 -6.61,7.28 0.84,1.05 2.01,4.06 3.59,2.09 2.37,-0.9 6.57,-4.19 7.88,-0.28 0.22,4.19 2.13,8.77 -0.72,12.51 -0.71,2.75 -2.31,4.62 -5.22,4.99 -3.14,-0.43 -7.52,-2.41 -9.63,1.09 0.39,2.15 1.85,4.24 2.13,6.19 -1,1.73 -3.4,2.91 -4,4.63 3.11,2.85 -2.97,-1.27 -1.76,3.31 -1.97,2.72 -3.4,6.11 -5.96,8.25 -2.51,0.68 -5.22,-4.25 -7.23,-1.05 -2.7,2.64 -5.41,5.28 -8.11,7.92 0.49,2.48 3.93,4.74 1.63,7.26 -0.76,2.71 -4.3,4.36 -2.78,7.49 -0.8,2.92 2.77,3.49 2.12,5.75 -1.13,1.85 -1.06,5.6 -3.44,5.9 -1.97,0.22 -2.63,-1.53 -4.06,-2.13 -2.8,1.41 -5.48,6.02 -2.56,8.66 -0.49,2.46 -3.67,5.82 0.27,6.82 3.67,1.53 5.25,5.3 6.61,8.75 0.92,2.04 1.08,4.85 -1.7,5.37 -1.07,-0.93 -5.7,-1.33 -3.5,1.11 2.47,0.99 0.89,3.49 -1,3.99 -2.32,-1.08 -4.25,-1.29 -6.55,0.33 -2.11,0.73 -3.8,3.88 -1.08,4.86 2.02,1.08 1.39,4.09 0.28,5.59 -2.84,-2.01 -4.64,0.94 -6.72,2.5 -3.14,0.7 -2.62,2.78 -0.67,4.69 1.7,1.7 2.49,4.75 4.7,5.72 7.32,0.54 13.26,-4.85 20.19,-5.97 3.41,-0.25 5.55,2.38 7.21,4.9 2.7,2.09 3.72,5.69 3.75,8.95 -2.21,2.91 0.93,6.19 1.75,9.06 1.22,3.02 5.3,4.54 4.69,8.16 -0.83,2.19 -2.69,3.5 -5.03,3.69 -3.67,1.29 -0.58,5.33 -0.19,7.78 1.19,1.23 1.73,4.58 3.56,3.47 2.87,-0.09 4.72,3.15 6.02,5.29 0.45,2.46 3.64,2.83 4.61,0.44 0.84,-1.91 -0.18,-4.52 -1.35,-5.64 -0.49,-3.07 3.89,-2.29 5.74,-3.3 2.12,-0.86 2.95,1.54 1.33,2.77 -0.13,1.19 0.36,6.2 2.44,7.44 3.73,1.71 7.96,2.48 12.06,2.41 0.3,2.37 -0.95,4.21 -3.22,5.14 -2.12,0.41 -4.13,4.05 -2.97,5.83 3.16,0.98 4.62,-3.02 6.97,-4.37 2.62,-1.23 -1.27,-2.95 1.23,-4.7 1.83,-3.04 5.68,-3.23 8.67,-4.31 2.07,1.28 4.67,2.3 1.65,-0.28 -2.77,-0.69 1.28,-2 0.17,-4.09 -1.83,-2.61 0.09,-5.95 0,-8.84 0.67,-3.72 4.45,-6.62 2.87,-10.6 0.27,-3.23 -3.17,-2.82 -4.5,-5.35 -1.88,-1.31 -2.94,-3.09 -2.59,-5.43 1.25,-0.49 -0.57,-3.68 -0.1,-5.19 -0.37,-2.39 0.26,-5.26 -1.15,-7.31 2.19,-0.29 2.3,-4.03 0.75,-4.91 -3.55,0.11 -2.06,-3.18 -1.51,-5.43 1.26,-3.72 6.02,-2.87 8.99,-4.29 3.44,-0.94 6.85,-2.48 10.38,-0.98 2.53,1.03 6.93,-0.17 7.36,3.51 0.22,3.77 3.72,2.22 6.1,1.81 3.18,-0.12 0.4,-3.63 0.68,-5.44 -0.84,-3.13 -0.37,-6.51 1.38,-9.24 2.02,0.57 4.63,1.89 6.47,0.94 0.86,-2.28 1.78,-5.61 4.88,-5.28 3,-1.1 4.77,-5.15 2.22,-7.63 2.46,-1.43 0.46,-5.9 4.2,-5.65 2.35,-1.65 4.24,2.19 6.72,0.64 3.67,-2.12 7.61,-4.88 9.17,-8.99 0.87,-4.15 -0.43,-8.59 0.34,-12.69 1.59,-1.67 2.87,-3.11 0.88,-5.25 -1.95,-0.3 -4.67,-0.51 -5.91,1.03 2.68,1.72 0.06,4.83 -2.4,3.41 -3.4,0.47 -3.73,-2.19 -3.1,-4.85 1.64,-2.54 4.97,-5.54 3.53,-8.77 -2.61,-1.88 3.02,-1.21 0.62,-3.76 -0.39,-2.4 1.7,-5.24 4.25,-4.19 2.32,-0.16 2.52,-3.78 3.13,-5.59 -0.42,-3.72 -1.44,-7.39 -2.41,-10.94 0.58,-3.37 4.7,-2.07 6.91,-1.42 1.33,1.43 3.54,1.27 4.93,0.14 1.65,-2.01 -0.8,-4 -2.88,-4.28 -0.73,-2.4 -0.28,-5.7 -2.15,-8.05 -1.81,-2.17 3.2,-3.84 4.13,-1.92 0.85,2.09 2.04,3.15 0.8,0.19 -0.79,-1.77 1.55,-2.57 1.81,-3.75 -2.16,-0.34 -3.1,-3.03 -5.47,-3.13 -2.41,-1.32 -5.66,-1.92 -5.69,-5.28 -2.73,-1.26 -6.43,-1.62 -7.14,-5.14 -0.93,-2.28 -2.35,-5.29 -0.96,-7.39 -0.41,-3.77 -4.2,-2.41 -6.91,-2.04 -2.44,0.91 -4.65,3.07 -6.27,5.16 0.26,3.75 3.81,-0.17 4,2.53 0.6,2.43 -1.31,3.7 -3.35,4.44 -2.57,-2.31 -6.46,-3.25 -9.7,-4.62 -2.11,-0.64 -2.73,-3.33 -1.64,-5.16 0.52,-2.33 2.7,-3.11 4.88,-2.75 1.13,-2.01 -0.13,-5.09 -0.97,-7.03 -0.84,-1.85 -3.71,-4.21 -0.9,-5.87 1.12,-2.04 3.33,-1.71 4.5,-3.66 2.57,-0.35 -1.93,-2.01 -2.09,-3.38 -2.42,-2.04 -5.4,-1.51 -8.28,-1.84 -2.56,-0.15 0.13,-3.78 -1.82,-2.9 -0.65,0.13 -1.3,0.26 -1.96,0.4z m48.47,53.75c-0.2,0.03 0.16,0.35 0,0z","name":"Hessen"},"hh":{"path":"m273.31,139.16c-1.5,1.09 -0.93,4.3 -3.67,5.06 -1.61,1.47 -3.71,3.26 -5.89,1.85 -2.33,-0.78 -1.81,2.21 -3.43,3.24 -1.3,1.52 -3.26,5.5 -5.37,2.78 -1.64,-2.73 -2.78,-2.89 -3.11,0.48 -1.95,3.52 3.88,1.56 2.16,5.63 -0.89,2.25 0.93,3.48 1.47,5.56 1.11,1.96 3.5,5.01 5.03,1.63 1.82,-0.66 3.1,2.78 4.87,3.63 1.74,1.19 3.59,-1.92 4.1,-3.57 1.25,-2.32 3.61,0.86 4.66,2.15 1.9,2.2 3.93,4.76 7.21,3.97 1.13,-0.62 1.01,-2.97 2.91,-3.07 2.93,-1.45 -2.65,-3.59 -2.97,-5.78 -1.42,-2.02 -5.31,-2.65 -5.35,-5.94 -0.83,-2.64 0.75,-4.88 3,-6.12 2.02,-2.17 0.93,-4.31 -0.94,-5.97 0.01,-2.33 -0.49,-4.73 0.53,-6.88 -1.59,-1.66 -3.52,1.07 -5.22,1.34z","name":"Hamburg"},"hb":{"path":"m177.13,149.91c-1.02,1.81 2,3.93 2.44,6 0.78,1.49 -1.36,2.66 0.47,3.7 0.36,2.05 1.77,2.73 3.27,0.5 2.31,-1.97 -1.15,-5.18 0.62,-7.7 1.79,-3.68 -3.69,-1.91 -5.73,-2.54 -0.36,-0.05 -0.71,0.02 -1.07,0.05z m-2.34,39.47c1.3,3.24 5.12,3.63 7.78,4.94 1.52,2.61 1.31,5.93 3.86,7.69 2.1,1.22 1.38,3.71 2.04,5.46 1.64,0.31 3.99,-0.68 5.77,0.73 2.5,0.16 5.45,3.63 7.38,0.87 2.63,-1.56 0.74,-5.04 0.98,-7.51 -2.78,-1.97 1.76,-2.01 0.87,-3.11 -1.26,-2.73 -3.93,0.26 -6.25,-0.86 -4.35,-0.36 -7.69,-4.63 -12.29,-4.36 -3.91,0.3 -6.92,-2.67 -10.15,-3.86z","name":"Bremen"},"bb":{"path":"m499.25,149.81c-0.84,1.88 -0.81,4.34 1.28,5.34 -1.74,2.06 -3.79,3.29 -6.37,3.46 -3.18,2.74 -6.61,5.55 -9.05,8.91 -1.36,2.25 -1.54,4.68 -0.87,7.16 -2.28,3.16 -4.83,6.45 -8.06,8.63 -2.41,-0.12 -1.19,-4.5 -3.97,-3.53 -3,-0.61 -5.44,2.28 -5,5.15 -0.4,2.7 -4.01,1.19 -3.97,-1.02 -0.57,-1.97 -3.52,0.03 -4.56,0.75 -2.74,2.49 -4.73,6.13 -7.88,8 -1.99,-0.23 -3.86,-2.04 -1.25,-3.16 1.45,-1.47 -4.76,-0.14 -6.18,-0.46 -2.13,-0.19 -5.04,3.22 -6.6,0.49 -2.73,-2.51 -5.01,-6.52 -9.27,-5.91 -2.13,0.04 -5.13,-1.3 -6.45,0.69 -2.87,1.21 -4.79,-0.3 -6.25,-2.72 -1.52,-3.98 -6.92,-3.25 -9.48,-6.32 -1.8,-2.15 -4.65,0.11 -6.93,0.1 -2.38,1.26 -5.39,-1.14 -6.32,2.55 0.99,3.09 -2.96,4.01 -4.77,5.61 -2.15,1.15 -6.11,1.77 -7.27,2.46 2,2.09 -1.36,2.73 -2.94,2.85 -3.43,2.16 -3.88,-1.29 -6.73,-1.81 -3.03,-0.86 -4.57,2.1 -6.63,3.69 0.64,2.72 1.23,7.08 -1.72,8.53 -1.68,-0.03 -3.77,-0.05 -4.75,-1.47 -3.21,-0.91 -4.58,3.15 -7.53,2.47 -2.88,-1 -5.03,0.48 -2.09,2.67 1.36,1.69 3.08,4 5.08,1.55 1.94,-1.5 5.34,-2.28 6.7,0.42 1.5,2.04 4.32,1.65 6.53,2.39 1.23,-1.43 4.73,-0.25 2.95,1.62 -1.67,1.72 2.21,2.59 2.91,3.81 1.43,1.12 2.93,-2.01 4.58,-0.33 1.76,1.64 5.48,1.89 6.03,4.47 0.12,1.23 -2.72,2.23 -0.94,3.16 4.27,1.68 8.68,4.08 13.38,2.66 2.5,1.2 6.82,-4.08 4.61,0.18 -0.35,3.68 2.96,0.6 4.61,0.47 3.29,0.55 2.92,4.31 3.72,6.78 0.37,2.84 -3.59,3.22 -2.84,6.46 -1.66,3.81 3.69,5.99 2.3,9.81 0.77,2.86 -2.32,3.27 -3.45,4.66 -0.54,2.65 -2.13,5.71 -1.65,8.26 0.83,2.24 4.39,3.7 4.36,0.28 2.12,1.42 6.84,0.74 6.61,4.02 1.02,3.09 -2.67,5.39 -1.23,8.53 0.24,2.83 1.88,6.06 -0.69,8.26 -2.05,3.4 -2.35,7.41 -1.88,11.28 -2.17,2.79 -1.48,5.22 1.03,7.44 3.11,5.22 7.1,10.36 13.17,12.16 3.29,1.01 7.58,3.94 10.7,1.22 -0.29,-3.23 3.4,-2.12 4.94,-0.75 2.81,1.03 3.99,2.78 6.11,4.39 2.08,1.33 4.66,2.82 7.04,1.98 3.14,1.39 6,3.2 8.16,5.88 3.11,1.39 3.63,-2.03 5.78,-1.38 1.85,0.64 2.36,3.88 -0.16,3.41 1.53,4.44 1.98,9.42 4.53,13.28 -0.28,4.36 -5.19,5.81 -8.13,8.16 1.38,4.17 2.89,2.17 5.54,3.45 2.71,1.73 3.05,5.69 4.55,8.42 0.92,3.28 0.16,6.97 -0.56,10.28 1.12,1.84 2.33,3.34 4.61,2.31 0.97,-1.14 2.38,-3.45 4.49,-4.31 2.22,-1.43 4.58,-3.03 6.29,-0.12 4.07,3.53 9.06,7.27 14.8,6.16 2.09,-1.58 2.79,0.71 5.58,0.52 2.7,-0.23 5.1,-3 8.17,-1.96 3.29,-1.1 7.81,-0.26 9.47,-3.95 2.24,-4.34 2.1,-9.97 5.65,-13.77 1.52,-0.92 3.97,-0 5.84,-0.31 2.67,-0.5 5.34,2.24 7.62,0.72 1.65,-1.85 4.86,-1.52 6.32,-2.54 1.7,-2.16 5.35,-2.05 7.75,-3.38 2.31,-0.33 2.58,2.04 4.09,2.56 2.19,0.22 4.28,-0.47 4.14,-3.06 1.18,-2.26 3.58,-0.39 3.55,-4.22 -0.1,-2.81 -0.47,-5.99 -3.36,-7.26 -3.75,-2.16 -4.56,-6.65 -6.42,-10.21 -2.9,-0.63 -3.35,-5.09 -0.55,-6.35 3.76,-2.93 5.89,-7.61 5.36,-12.4 -0.5,-2.47 -0,-3.76 1.5,-6 1.18,-2.51 -0.13,-5.99 -3.13,-5.94 -2.3,-1.74 -2.72,-5.61 -0.53,-7.63 -0.28,-2.81 1.52,-6.55 -1.09,-8.56 -2.6,-1.24 -6.3,-0.29 -7.81,-3.19 -1.11,-3.05 -1.39,-6.47 -2.42,-9.42 -1.68,-2.31 -0.63,-6.4 2.17,-7.48 1.98,-2.33 3.3,-5.1 2.57,-8.22 0.38,-2.83 -0.31,-5.28 -2.51,-7.19 -3.54,-2.79 -8.55,-3.73 -11.34,-7.59 -2.56,-5.3 -8.11,-8.18 -12.88,-11.28 -2.02,-1.42 -4.87,-0.97 -6.69,-2.38 -2.03,-2.63 3.01,-4.81 1.15,-7.48 -0.64,-2.66 -2.69,-6.39 0.67,-8.11 3.25,-1.9 6.37,-3.89 8.77,-6.91 3.06,-2.56 2.89,-6.96 3.39,-10.59 -1.83,-1.72 -1.71,-4.98 -0.47,-6.84 1.2,-1.67 4.41,-4.79 3.03,-6.69 -2.15,0.19 -2.35,-3.69 -2.22,-5.41 -2.44,1.01 -5.3,1.53 -5.5,4.63 -1.15,2.4 -3.02,3.91 -5.78,3.72 -2.22,-0.47 -6.15,0.62 -7.41,-0.9 0.47,-4.6 5.82,-6.58 7.23,-10.78 0.81,-2.01 1.54,-5.13 -0.2,-6.73 -3.16,-0.57 -5.69,-0.28 -7.87,1.03 -3.28,0.28 -6.64,-0.73 -9.75,0.5 -4.23,-1.06 -2.75,-6.98 -5.95,-9.24 -1.05,-1.15 -2.07,-2.54 -3.15,-3.54z M484.13,240.25c2.62,1.78 3.22,5.59 5.07,8.15 1.73,3.05 5.13,4.94 5.9,8.6 -0.13,3.15 2.96,3.88 5.31,4.97 3.02,1.16 1.5,3.96 0.62,6.15 -2.11,1.18 -0.3,2.41 -1.81,3.94 -3.37,1.44 -6.8,-1.31 -10.22,-1.72 -2.61,0.29 -4.02,-2.66 -5.44,-2.59 -3.39,0.13 0.93,5.86 -3.25,4.2 -2.15,-1.56 -3.93,-2.85 -6.03,-2.56 -2.2,-2.21 -6.14,-1.55 -8.26,0.46 3.07,1.05 -3.31,1.77 -4.27,0.08 -2.48,-1.03 -0.87,-2.57 0.43,-3.73 -0.55,-1.26 -1.2,-3.36 0.31,-4.63 3.03,-2.14 1.73,-3.7 -0.71,-3.56 0.04,-2.5 -0.02,-5.34 0.62,-7.66 1.31,-1.47 2.88,-1.58 4.41,-0.5 1.08,0.35 -1.33,-2.46 0.8,-3.32 1.36,-1.61 4.71,-0.61 6.85,-0.8 2.24,1.02 3.85,-0.76 4.63,-2.66 1.77,2.37 2.44,0.08 3.29,-1.66 0.36,-0.52 1.13,-1.47 1.74,-1.16z","name":"Brandenburg"},"be":{"path":"m483.38,241.69c-1,1.58 -1.61,5.27 -4.03,2.88 -0.91,2.64 -3.81,2.59 -6.06,2.05 -1.91,-0.31 -7.28,0.09 -4.84,2.79 1.38,2.14 -2.25,1.68 -3.34,0.78 -3.18,-0.15 -1.8,4.36 -2.36,6.45 -0.09,0.87 5.17,1.04 2.51,3.18 -1.16,1.75 -4.04,3.69 -1.89,5.83 0.53,1.82 -3.82,2.76 -0.54,3.7 2.29,1.61 3.52,-2 6.07,-2.2 2.07,-0.34 5.08,-0.28 6.25,1.69 2.29,-3.28 5.18,4.71 6.09,1.16 -1.15,-2.62 1.9,-3.14 3.66,-3.85 0.63,3.56 5.17,2.88 7.8,4.18 1.96,0.26 4.94,2.32 6.26,0.28 -2.5,-1.19 2.5,-2.95 2,-5.26 1.05,-2.66 -3.24,-2.9 -4.77,-4.37 -2.69,-0.38 -1.4,-4.38 -3.15,-6.05 -1.61,-3.03 -4.93,-4.88 -5.94,-8.38 -1.14,-0.99 -1.96,-6.07 -3.71,-4.88z","name":"Berlin"},"by":{"path":"m273.66,464.44c-1.31,1.91 -3.76,2.78 -3.5,5.34 -1.83,4.59 -6.12,7.95 -10.5,9.94 -2.67,1.02 -4.62,-2.49 -7.15,-0.61 -1.54,0.74 -0.64,3.49 -2.13,4.58 2.4,3.04 -0.04,7.53 -3.44,8.47 -3.38,-0.45 -3.01,4.07 -4.66,5.5 -2.16,0.47 -4.23,-0.33 -6.28,-0.91 -2.54,3.91 -0.46,8.53 0,12.63 -0.53,2.87 -4.66,1.74 -6.9,2.55 -3.16,0.27 -1.64,-5.68 -4.98,-5.22 -4.19,-0.72 -8.41,-2.46 -12.49,-0.42 -2.97,1.16 -6.84,1.23 -9.32,2.99 -0.59,1.48 -2.41,4.44 -0.69,5.28 3.02,-0.37 2.55,4.03 2.28,5.63 -2.37,0.86 0.17,4.18 -0.45,6.12 0.28,2.66 -0.27,5.78 1.89,7.78 -3.88,-0.85 0.14,3.73 1.52,4.58 0.84,1.94 3.96,0.92 3.59,3.64 1.27,2.88 0.6,5.62 -0.78,8.31 -2.26,2.93 -2.47,7.6 -2.42,11.23 1.24,2.27 4.6,0.89 6.75,1.12 2.16,0.04 4.75,-2.13 4.73,-4.03 -0.34,-2.04 2.18,-5.23 4.72,-3.63 1.87,0.74 5.34,1.32 4.23,-1.45 1.6,-1.24 -0.63,-7.5 -0.96,-4.79 0.79,2.49 -3.31,2.3 -3.52,0.13 -0.83,-1.56 -3.4,-4.82 -1.19,-6.09 3.07,-0.15 6.37,-1.05 9.34,-0.19 0.41,-2.46 4.94,-2.22 3.88,0.41 0.59,1.49 3.45,3.68 4.43,1.04 1.16,-1.1 4.96,-5.66 4.94,-1.88 -0.59,2.44 0.18,5.72 -1.59,7.45 0.33,2.92 3.79,0.57 5.16,-0.39 2.48,-0.32 5.61,-3.48 7.29,-0.3 2.99,3.39 2.07,8.94 5.01,12.52 2.18,0.31 2.43,3.58 2.41,5.6 0.45,1.81 -0.72,3.89 -0.34,5.16 2.77,0.82 6.24,0.65 7.69,-2.25 -0.15,-1.12 -1.91,-2.61 0.74,-3.68 2.83,-1.31 3.76,2.79 4.2,4.84 -1.95,1.56 1.87,3.4 1.31,5.57 0.26,2.1 4.02,5.65 0.6,6.68 -2.91,-0.9 -2.81,3.3 -1.87,5.04 0.96,2.51 3.11,4.68 1.16,7.27 0.44,2.52 -1.72,6.37 1.65,7.44 1.89,1.55 4.82,1.6 5.41,4.43 1.71,2.58 1.5,5.88 2.31,8.79 -2.03,1.94 3.23,2.14 4.31,3.59 2.13,2.06 5.86,2.95 6.29,6.28 3.84,2.87 1.91,8.3 2.08,12.46 0.25,2.64 -0.94,5.5 -2.07,7.44 -0.04,3.1 4.34,2.42 3.61,6.41 2.49,1.05 0.06,3.97 -1.86,4.33 -1.61,1.16 -4.23,0.12 -2.18,-1.56 2.29,-3.25 -3.46,-0.68 -4.81,-0.69 -2.23,0.84 -5.79,-3.18 -5.97,0.9 -0.14,3 3.91,4.63 3.42,7.93 0.53,2.67 0.99,5.81 0.27,8.32 -1.49,1.89 -3.93,-0.58 -5.06,1.19 0.32,2.29 -3.52,3.66 -4.94,5.41 -3.13,1.93 -4.28,-3.47 -7.13,-0.01 -2.35,0.12 -0.74,3.36 -2.58,4.82 -1.74,2.44 -2.43,5.75 -0.16,8.06 1.31,2.7 4.08,4.51 3.75,7.78 0.56,4.38 1.13,8.84 2.71,12.9 2.91,1.82 1.6,5.52 2,8.41 0.45,2.66 -1.86,4.17 -1.66,6.72 0.19,1.55 -3.47,0.81 -1.84,3.13 2.61,1.07 0.38,3.66 0.87,5.81 0.2,2.47 -0.14,5.78 2.07,7.38 0.5,2.56 -3.74,2.92 -1.81,6.18 1.02,3.01 3.86,6.55 1.16,9.46 -1.18,1.16 -3.19,0.63 -3.38,2.95 -1.52,3.81 -0.35,-4.27 -2.92,-3.81 -1.88,-0.93 -3.51,0.34 -4.08,2.09 -3.48,0.28 -7.46,-0.44 -10.66,0.7 -2.62,1.93 -4.17,6.22 -7.96,5.49 -1.72,0.26 -2.84,-2.34 -4.53,-0.51 -3.88,1.61 -1.7,3.37 1.37,4.04 3.22,2.32 4.79,-0.35 6.38,-2.97 2.19,-2.61 6.67,0.35 5.03,3.47 -1.46,1.59 3.12,2.56 4.5,2.46 2.2,0.75 5.22,-2.54 5.71,-2.37 -1.26,2.65 0.2,5.16 1.79,7.23 3.74,-0.93 5.96,3.27 7.63,5.97 -1.64,1.92 -2.48,3.42 -1,5.94 0.03,1.72 5.17,0.51 4.35,-1.56 0.81,-1.86 3.6,-1.1 5.09,-0.53 2.05,2.24 -1.68,3.98 -1.81,6.26 -0.21,1.48 -3.48,5.59 -1.04,5.45 5.9,-0.28 10.64,-4.27 13.65,-9.1 1.68,-2.49 4.2,-4.8 5.23,-7.51 -0.27,-1.73 0.37,-4.61 -1.96,-4.47 -1.78,-2.98 -0.76,-6.77 -1.03,-10.06 0.59,-1.59 4.6,-2.06 3.97,0.09 -1.67,2.23 -0.39,3.45 2.34,3.77 2.31,0.63 4.34,0.47 4.81,-2.09 1.65,-2.51 5.13,-0.08 7.59,-0.22 0.5,2.03 3.14,2.52 5.19,3.38 2.99,1.48 5.86,-2.19 8.72,-1.09 3.48,2.5 -1.05,3.09 -0.97,5.59 2.55,0.29 4.83,1.11 6.25,3.38 2.96,1.58 0.77,3.77 1.16,5.09 4.01,0.78 8.16,-0.05 11.5,-2.41 2.24,-1.08 5.28,-2.46 7.66,-1.16 -0.63,2.06 -2.84,4.65 1.39,2.92 0.99,-2.2 2.51,-4.2 4.63,-5.64 2.78,-1.69 3.97,-4.98 6.66,-6.66 2.2,2.25 6,0.82 8.75,0.25 1.72,-1.5 -0.11,-4.24 1.75,-6 1.27,-3.31 5.21,-1.69 7.87,-2.01 3.14,-0.06 6.26,-0.02 9.34,0.6 1.3,-3.59 5.97,-3.64 9.18,-3.87 2.61,1.43 5.36,-1.54 7.57,0.5 2.56,0.03 5.94,1.12 8.03,-0.19 -0.56,-3.08 -2.75,-5.66 -1.81,-8.97 1.68,-1.6 3.23,-4.06 5.5,-4.97 2.05,1.73 -0.97,3.82 0.9,5.81 0.74,1.55 6.18,-3.23 5.07,-0.41 2.78,1.55 7.13,-0.47 8.4,3.24 1.5,2.9 4.05,3.71 6.55,1.34 2.39,-0.55 1.97,-4.34 4.92,-3.93 3.45,-1.43 7.22,-0.35 10.38,1.04 0.63,2.57 4.26,5.4 1.53,7.59 -1.91,3.64 3.48,5.29 5.61,7.15 2.86,2.07 5.93,3.86 9.26,5.04 1.6,-1.29 3.65,-3.83 2,-5.66 -1.98,-1.39 0.16,-4.42 -0.13,-6.41 0.81,-2.05 3.05,-3.55 3.5,-5.53 -1.37,-2.88 -2.02,-7.29 -5.72,-7.94 -0.69,2.59 -4.42,1.51 -6.31,1.34 -1.86,-0.73 -2.16,-2.62 -0.73,-4.04 1.53,-3.69 4.03,-7.15 5.39,-10.77 -2.14,-3.41 -3.7,-7.7 -6.59,-10.34 -2.88,0.4 -3.64,-2.11 -3.9,-4.41 -1.24,-4.49 -8.32,-5.42 -8.04,-10.73 0.04,-2.8 4.04,-3.87 5.63,-5.89 1.81,-1.22 1.17,-3.89 2.78,-4.97 2.57,-0.91 6.07,0.24 7.47,-2.89 1.29,-1.84 2.29,-3.74 4.7,-4.4 2.08,-2 5.15,-0.22 7.17,-2.39 2.7,-1.73 6.58,0.63 8.88,-2.3 3.06,-1.95 5.85,-4.79 7.85,-7.65 0.43,-2.52 2.26,-5.13 0.38,-7.38 0.45,-3.1 3.3,-6.59 0.44,-9.38 -0.61,-1.41 4.07,-1.2 4.41,-3.5 -0.1,-4.04 4.08,-0.04 6.17,0.11 3.24,1.6 5.97,4.3 9.52,5.26 3.15,-4.15 7.21,-9.07 5.25,-14.64 0.5,-2.8 -3.41,-5.03 -1.06,-7.39 1.18,-2.53 1.51,-5.28 -0.56,-7.48 -1.75,-2.45 -3.35,-5.1 -5.19,-7.42 -2,1.56 -5.42,0.69 -5.99,-1.97 -0.86,-2.58 -2.84,-4.62 -4.76,-6.5 -2.32,-0.51 -5.25,-0.27 -4.06,2.66 -1.49,2 -4.02,-1.61 -5.78,-2.26 -3.51,-1.84 -1.34,-7.26 -4.67,-9.54 -1.77,-2.1 -3.92,-4.14 -6.4,-5.23 -2.11,1.09 -4.33,0.73 -6.1,-0.79 -2.35,-0.65 -1.29,-3.34 -2.28,-4.52 -5.62,-4.34 -8.22,-11.7 -13.85,-16.05 -0.96,-0.66 -5.12,-1.7 -4.56,-0.67 1,2.66 -3.26,0.86 -4.59,0.92 -2.67,0.16 -4.59,-1.69 -5.1,-4.2 0.33,-2.99 -3.95,-3.91 -5.58,-5.98 -1.3,-1.16 -4.06,-3.42 -2.45,-4.96 0.01,-2.41 0.31,-4 -2.29,-4.05 -2.07,-0.53 -1.46,-1.98 -2.8,-3.5 -2.08,-3.55 -3.13,-7.39 -3.48,-11.47 -1,-2.47 -5.61,-0.9 -6.56,-3.96 -1.46,-1.68 -3.4,-4.99 -0.08,-5.91 3.24,-0.92 2.39,-4.05 3.21,-6.53 0.88,-3.28 4.17,-5.56 3.4,-9.15 -1.69,-2.78 -3.02,-7.24 -7.16,-6.34 -2.89,-1.46 -5.43,-3.31 -7.5,-5.81 -4.37,0.47 -3.42,-1.95 -5.22,-4.41 -1.08,-0.95 -3.08,-0.2 -3.19,-2.3 -0.69,-1.94 -0.29,-3.97 0.91,-5.48 -1.13,-3.44 -4.24,-5.4 -7.25,-6.96 -2.59,-1.3 0.21,-3.74 1.9,-4.17 -1.15,-4.86 -6.38,-5.68 -10.5,-6.63 -1.66,-1.44 1.51,-4.7 -1.45,-5.85 -1.47,-2.96 -3.98,-0.6 -6.15,-0.03 -4.99,1.83 -10.54,1.94 -15.74,2.63 -0.77,-0.67 -2.77,-2.61 -3.03,-0.5 -0.96,2.08 -4.29,1.95 -5.15,-0.33 -1.46,-1.7 -1.05,-3.98 -3.62,-3.71 -2.87,-0.72 -2.28,-4.47 -1.51,-6.47 2.3,-1.83 -2.65,-2.89 -4.3,-2.43 -1.7,1.3 -2.92,3.72 -5.37,4.41 -1.61,-1.19 -1.85,2.9 -0.04,2.88 0.66,3.05 1.58,6.38 1.39,9.48 -1.36,2.21 -0.38,7.05 -3.72,7.01 -1.95,0.12 -2.86,4.45 -5,1.12 -2.19,-1.15 -2.98,-4.4 -0.24,-5.3 -0.32,-1.92 -3.58,-5.33 -4.44,-2.09 -2.92,1.68 -7.59,1.16 -8.96,-2.28 -0.97,-2.98 -4.83,-0.87 -7.1,-1.48 -2.57,0.83 -5.91,1.76 -7.83,3.43 -0.82,2.98 1.43,4.47 3.69,5.77 1.52,2.24 6.27,1.22 5.55,4.87 -1.22,3.47 -5.4,0.77 -7.88,0.59 -0.91,0.73 1.13,4.84 -1.63,4.69 -2.37,-0.99 -5.13,-1.74 -7.34,-2.66 -1.81,-3.33 -1.13,-7.07 -0.75,-10.66 -3.86,-0.79 -8.92,-2.08 -9.69,-6.56 -1.65,1.27 -4.99,0.71 -4.64,-1.87 -0.45,-2.76 -1.64,-5.72 -3.61,-7.69 -2.74,-0.99 -5.53,-1.93 -6.83,-4.79 -1.25,-3.09 -5.32,-0.4 -7.74,-0.8z m46.75,26.38c-0.1,0.03 0.04,0.06 0,0z","name":"Bayern"},"bw":{"path":"m233,542.31c-1,3.03 -3.8,0.55 -6.25,1.41 -1.85,0.3 -6.11,-0.67 -4.1,2.56 0.5,1.4 3.45,5.79 2.97,1.91 0.74,-2.88 3.54,0.29 3.5,2.12 -0.05,2.12 0.13,4.28 -0.67,5.91 -2.21,2.88 -6.93,-2.7 -8.36,1.34 0.26,1.89 -0.96,3.78 -2.66,5.38 -2.87,1.47 -6.48,1.36 -9.56,0.91 -0.14,1.71 -1.09,2.75 0.88,3.56 2.16,2.43 -1.84,4.61 -2.82,1.5 -2.24,-0.41 -4.9,0.87 -7.01,1.83 -1.86,1.31 -3.21,3.14 -1.07,4.79 -2.58,2.03 -4.76,4.93 -7.53,6.53 -2.28,0.77 -4.85,-1.67 -3.07,-3.7 0.44,-3.45 3.31,-3.76 5.49,-5.64 2.15,-2.77 -2.95,-1.33 -4.33,-2.33 -3.36,-0.68 -8.66,-1.27 -8.78,-5.66 -0.37,-2.27 -2.39,-6.18 0.16,-6.35 -1.56,0.22 -6.19,0.51 -5.66,2.03 1.02,1.01 1.63,3.91 1.34,5.81 -0.91,2.56 -4.61,4.01 -6.17,1.22 -1.23,-2.27 -2.8,-5.47 -5.58,-5.87 -1.35,0.5 -2.27,2.96 -1.13,4.34 0.64,2.82 1.72,5.99 1.41,8.75 -1.19,1.47 2.13,0.8 2.94,1.09 2.56,1.28 -0.68,4.01 0.44,6.03 0.58,2.78 -1.68,4.86 -3.44,6.5 -0.2,1.61 2.95,0.95 2.5,3.03 -0.5,1.7 -2.89,2.29 -3.8,3.97 -1.51,1 -4.09,2.21 -3,4.19 -0,4.19 -1.63,8.4 -2.57,12.44 -1.88,2.38 -4.07,4.74 -4.06,8 -0.94,3.32 -4.33,5.15 -7.25,6.25 -3.09,4.3 -5.58,9.02 -6.75,14.19 -2.02,2.94 -5.4,5.15 -8.91,5.69 -0.21,2.82 -1.4,5.14 -3.56,6.99 -1.36,2.17 -3.49,3.53 -5.66,4.61 -1.15,2.67 -3.64,5.13 -2.5,8.22 0.36,2.98 -0.28,5.69 -1.97,8.15 -1.95,4.34 -4.99,8.87 -3.01,13.76 0.98,2.33 -1.6,3.46 -3.29,4.06 -1.58,3.35 -1.03,7.85 -3.97,10.71 -3.45,3.81 -5.74,8.63 -5.57,13.85 -1.32,3.83 3.9,5.48 3.32,9.25 -1.3,3.08 -3.94,5.46 -4.57,8.93 -0.87,1.91 1.04,3.96 -0.54,5.81 -1.06,2.51 -2.87,5.19 -1.04,7.86 1.18,2.15 -0.92,4.15 -2.35,5.35 -0.31,3.89 3.1,6.22 5,9.16 2.34,1.03 6.63,0.35 6.5,3.84 -1.16,1.4 -4.38,2.08 -0.94,3.62 2.67,0.19 5.38,-1.24 7.85,-2.15 1.44,-1.71 2.81,-3.83 5.44,-3.09 2.67,-0.79 2.95,2.96 5.54,2.9 3.15,1.3 6.81,1.64 9.99,0.41 0.13,-3.3 4.53,-3.63 6.59,-5.48 2.38,-1.41 5.39,0.37 7.78,0.98 0.79,1.29 -0,3.08 2.19,3.78 3.61,0.25 7.37,1.32 10.72,-0.47 -3.18,-2.2 -0.41,-3.55 1.74,-5.09 1.44,-1.37 5.34,0.59 4.6,2.72 0.03,1.73 2.81,-2.43 2.91,-3.66 0.99,-2.17 -2.08,-3.31 -3.78,-2.38 -2.21,0.79 -3.16,2.58 -5.97,3.13 -1.88,-0.81 -4.32,-2.21 -5.31,-4.16 0.59,-3.61 2.99,-6.72 5.06,-9.63 1.63,-2.24 5.73,-0.38 6.44,-3.38 2.06,-2.35 5.55,0.44 4.49,3.47 2.07,0.67 0.21,-4.19 4.06,-1.25 1.57,1.2 4.32,3.45 2.25,5.23 0.1,2.76 1.41,4.58 4.22,5.01 1.74,-2.24 3.46,-0.92 5.76,1.59 2.1,2.97 5.8,0.78 7.96,-0.93 3.82,-2.7 8.65,-0.24 12.27,1.62 3.55,2.04 4.43,-1.99 2.13,-4.27 -0.59,-2.2 -2.12,-3.67 -4.12,-4.07 -2.4,-1.85 -6.01,-3.5 -6.96,-6.5 0.3,-2.1 3.03,-1.62 3.78,-0.16 3.5,2.46 7.48,4.47 10.66,7.31 -0.21,3.96 4.69,5.62 7.5,7.39 1.67,0.53 3.72,-1.14 5.59,-0.11 2.75,0.87 6.81,1.33 7.03,4.97 0.46,3.2 4.49,4.9 6.69,2.27 1.24,-1.5 4.61,-2.56 5.4,-0.7 4.17,1.33 6.15,-3.91 8.97,-5.72 3.32,-0.45 7.13,0.12 10.19,-0.66 1,-2.57 4.28,-2.37 6.22,-1.28 0.84,2.31 0.58,2.71 2.56,1.13 2.97,-0.39 2.03,-4.58 0.76,-6.39 -1.17,-2.02 -2,-5.8 -0.79,-7.3 3.32,-0.17 0.06,-2.21 -0,-3.93 -0.63,-3.04 -0.86,-6.31 0,-9.32 -2.23,-0.74 -2.32,-4.76 0.44,-4.66 -0.41,-2.68 2.08,-4.21 1.66,-6.88 -0.15,-2.82 0.59,-6.09 -1.94,-7.94 -2.26,-5.15 -1.96,-11.11 -3.49,-16.32 -1.93,-2.69 -4.53,-5.55 -4.67,-9 0.46,-2.92 3.93,-5.48 2.72,-8.47 0.1,-0.35 4.87,-3.47 6.42,-2.05 2,3.2 4.93,-0.95 6.82,-2.36 0.33,-1.38 1,-2.91 3.14,-2.96 3.03,1.76 2.98,-2.24 2.69,-4.25 -0.32,-3.5 -1.14,-6.78 -3.64,-9.37 -0.98,-1.42 0.15,-4.75 1.23,-5.16 3.02,1.48 6.11,1.47 9.25,0.41 2.37,-0.94 3.55,1.55 1.82,3.19 0.08,1.06 5.19,-1.87 2.3,-2.88 -0.25,-2.1 -0.85,-4.44 -3.47,-3.91 -1,-3.13 0.42,-4.65 1.54,-7.33 0.09,-4.38 1.32,-9.19 -0.13,-13.38 -2.03,-1.38 -1.82,-4.46 -4.4,-5.39 -2.47,-2.1 -5.26,-3.59 -8.29,-4.72 -0.45,-2.63 0.5,-4.11 -0.61,-6.97 -0.35,-3.23 -2.39,-5.85 -5.43,-6.81 -1.8,-1.05 -4.02,-2.25 -3.05,-4.75 -0.53,-2.57 0.99,-5.27 0.62,-7.5 -1.67,-2.84 -3.08,-6.33 -1.5,-9.56 2.72,0.17 4.05,-1.19 2,-3.69 -1.12,-2.08 -1.1,-4.65 -2.84,-6.37 -0.05,-1.52 1.05,-2.79 -0.28,-4.24 -1.33,-3.13 -3.46,0.38 -1.36,0.89 -1.36,2.26 -3.18,4.9 -6.23,4.2 -1.84,0.68 -5.99,-0.78 -4,-3.06 0.32,-2.43 0.8,-5.95 -0.91,-7.66 -1.91,-0.49 -2.69,-3.58 -3.13,-5.51 -1.12,-3.07 -1.07,-6.84 -4.03,-8.84 -3.37,0.71 -6.2,2.77 -9.34,3.81 -2.15,-0.26 -3.2,-3.12 -1.25,-4.19 -0.15,-1.71 1.98,-8.34 -1.11,-4.8 -1.56,1.02 -3.09,4.67 -5.17,2.44 -1.38,-0.64 -3.13,-1.84 -2.32,-3.58 -0.34,-0.5 -0.91,-0.09 -1.41,-0.13z m-57.69,212.03c0.26,4.67 5.28,-0.76 0,0z","name":"Baden-WÃ¼rttemberg"}}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2176:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add Russia Map Data Points */
jQuery.fn.vectorMap('addMap','russia_en',{"width":959,"height":593,"pathes":{"da":{"path":"m34.939,403.74,2.6516,1.2627,3.6618,0.50507,1.7678-2.0203,2.1466,2.0203,2.3991-1.6415,0.25254-1.7678,1.6415-2.1466,3.0305,0.50508,3.7881-2.9042-0.50508-1.894-4.7982-0.50508,0.75762-3.1567-1.0102-0.63134,0.63135-2.2728-3.1567-2.7779,1.5152-0.50508,3.9143,0.88388,0-1.389-1.0102-1.2627,8.3338-0.25254,4.9245,5.4296,1.2627,1.894-0.37881,2.2728-5.3033-0.3788,0.50508,2.5254,1.5152,3.0304-1.0102,3.5355-2.3991,2.7779-1.2627,0.25254,4.5457,0.75761-5.5558,2.1466-0.50508,2.0203-0.75762,0.50508-3.0305,0.50507-0.25254,4.7982-1.2627,0.88388-1.1364,13.132-9.0914-0.12627-3.6618-2.2728-1.389-0.88388,0-11.617-3.283-5.9346,0.37881-2.9042,1.2627-0.37881z","name":"Republic of Dagestan"},"sa":{"path":"M671.25,126.75l-1.44,1.06-1.25,1.63s1.44,0.87,2.16,0.87c0.71,0,2.69-1.97,2.69-1.97l-2.16-1.59zm18.47,12.09c-0.18-0.01-0.4,0.02-0.63,0.07-1.78,0.35-4.81,1.93-4.81,1.93s-1.41,1.1-2.12,1.1c-0.72,0-2.35-0.38-2.35-0.38-0.71,0-2.5,1.25-2.5,1.25l-1.4,1.78s-1.1-0.51-1.1,0.38-0.35,1.96,0.72,2.5c1.07,0.53,1.61,1.06,2.5,1.06s3.22-0.72,3.22-0.72l1.97-0.87,1.97,1.06s0.51-0.9,1.4-1.44c0.9-0.53,3.4-2.31,3.75-3.03,0.36-0.71,0.72-3.22,0.72-3.22s-0.11-1.36-1.34-1.47zm-19.81,7.1c-0.15,0.01-0.29,0.05-0.44,0.09-1.25,0.36-2.85,0.19-3.56,0.19-0.72,0-0.91,0.19-0.91,0.19s-0.88,1.58-1.59,1.93c-0.72,0.36-1.99,0.74-3.07,0.57-1.07-0.18-3.75-1.25-3.75-1.25s-1.93-0.02-1.93,1.59,3.03,3.41,3.03,3.41l1.06,1.4s-2.51,0.73-3.41,0.38c-0.89-0.36-2.65-2.16-2.65-2.16l-3.22-0.72s-2.88,0.2-2.88,1.1c0,0.89-0.68,2.67-0.68,3.56s-0.9,3.04,0.53,3.94c1.43,0.89,1.79,3.03,1.97,3.75,0.17,0.71,0.7,1.77,2.84,2.31,2.14,0.53,4.29,0.53,5,1.06,0.71,0.54,1.77,1.07,2.84,0.53,1.08-0.53,1.82-2.65,1.82-2.65l2.12-1.97s1.61-1.44,2.5-2.16c0.89-0.71,2.7-0.54,4.13-1.44,1.42-0.89,2.31-3.75,2.31-3.75v-5l-0.38-4.43s-0.68-0.58-1.68-0.47zm106.25,5.62c-0.45,0.09-0.75,4.1-0.75,4.1l-7.32,1.65-3.28,0.63-4.53-6.06-7.84-0.13-0.38,0.87-5.68,1.66-1.76,2.13-6.06,6.31v2.78l-2.15,1.91-3.29,5.03-4.93-2.38-3.41-0.37-1.75,2h-4.56l-3.41,1.78-1.75-1.53,4.28-2.91-2.28-1.62-3.03-0.13-8.84,4.03,1.9,5.44-0.87,4.78-2.66,2.91-1.65-2.13,3.03-7.47-1.75-0.37-2.66,4.03-3.03,2.03-1-0.75,1-3.16,2.28-0.74,2.91-2.66-7.1,1.75-9.22,5.31-6.68,0.25,3.65,3.66-3.65,3.4-0.5,3.03,0.37,1.16,3.91-1.78-1,4.03,4.81,2.91-0.91,2.9-2-1.37-3.68,1,1.28,3.41,2.4-0.26-1.03,2.66-3.9-0.5-4.28-1.66-3.53,0.26-2.41,3.15-0.63,4.06h-6.46l-1.76-1.53-2.4-2-0.5,4.41,0.87,0.87-0.12,1.41,1.65,0.87-0.9,2.54,1.66,6.18-3.29-1.4-1,1.15-9.87-5.31v-4.94l-2.25,0.13-1.78,2.41-2-3.41,3.65-0.63-0.5-2.9-4.43-1.66,0.75-0.87,0.12-2.53-5.28-4.04-5.31-2.53-1,3.66-7.35,0.65-2.37-1.65-4.19,2.15v2.13l4.19,4.69-10.94,5.31-10.28-1.16,0.44-4.4-12.07,0.19-3.96,3.78h-2.85l-1.09,1.09,2.66,2.87h-2.13l-2.91-2.06,1.19-2.09-0.87-1.38-1.54-1.78,0.07,2.28-1.5,1.07-3.85-1.32s-2.9,3.53-2.84,3.78c0.06,0.26,2.66,3.29,2.66,3.29l-1.41,3.34,1.59,2.09,0.19,2.78,7.38,5.82-0.32,5.47,2.53,1.9,1.63,2.53-2.53,2.72-4.41,3.03-0.69,2.63-4.81,2.78,0.25,6.12-2.25,1.1-2.97-1.28-5.65,4.75-4.44,0.09,0.06,1.97,5.38,6.59,1.78,20.1-6.35,1.97,4.19,3.4-1.78,4.19v1.25l7.16,8.84-4.57,6.69,0.97,1.6-2.4,1.87,0.09,2.25,5.63,0.34,0.71,0.72,9.1,0.19,3.31,3.31-0.53,1.6-3.31,0.34,0.19,3.94,4.03-1.06,5.06,6.59-0.53,5.53,3.84,5.19-1.97,3.4,0.53,2.13,7.69,6.53v4.37l-3.75,6.44,0.28,10.78,3.85,4.13,3.37-3.94,3.75,0.09,1.88-1.34,2.68-0.62,2.41-2.07,3.56,3.85,0.38,2.31,4-5.06,0.09-4.13,5.38-2.75-0.29-6.25,2.32-4.12,3.84-1.5,4.91,1.06,6.15,4.91,0.57,3.84,1.31,0.87,4.03-1.4,2.5-2.06,2.69,1.06,0.87,4.47,3.13,4.56,2.15,1.78v3.03l2.32,1.35,0.71,4.71,3.94,0.19,0.97,1.35,1.53,4.09,8.38-0.25,3.31-1.97,5.53,1.16,3.56,1.97,11-0.72,5.54,3.75,2.21,0.53,5.19-2.6h2.6l3.03,2.26,2.78-0.19,3.22-3.94,5.68-0.06,2.5-1.97h7.88l0.19-3.75,10.68-5.09,0.82-3.04-4.28-4.12,2.31-1.69,0.62-4.03-1.34-1.69-2.41,0.38-2.03-1.44,2.75-4.03-2.84-1.6,0.25-1.87,1.53-1.97-1.44-1.44-3.47-1.15-0.53-1.6,3.38-1.43-1.88-0.91-0.19-5.25-0.87-0.62-0.19-1.88,2.78-1.25-1.62-1.25v-2.94l5.47-1.97,3.12,0.16,0.25-1.78,6.53,0.09v-2.75l-1.25-1.53,1.16-1.25,3.47-0.62,3.31-2.22,1.34-6,5-0.44,0.1-2.06s-5.29-4.9-5.47-5.25c-0.18-0.36-0.88-3.94-0.88-3.94l-3.56-2.59v-5.97l2.94-7.16-1.69-9.19,0.78-3.12,13.5,0.72,0.25-5.28,5.19-1.16,3.47,1.87,0.81-2.31-2.41-3.69,1.69-0.62,0.19-2.75-7.16-8.5,0.1-4.37-3.13-1.5-0.09-4.04-1.78-1.15,1.09-2.13,3.81-0.47,1.35-1.78,4.28,0.38,0.09-2.44-3.37-1.5,0.15-3.31,5.47-0.53v-3.57l5.63,0.44,5.62-8.03,0.44-2.5-6.06-6.06-0.19-1.88,2.31-3.4-0.97-1.79-3.31,0.19-1.5-2.34,4.72-1.41-0.09-1.53-2.07-0.97-0.25-1.34,2.13-3.75,5.72-1.97-0.78-3.56,5.15,0.68-0.62-5.43,1.34,0.28,0.19-3.59-2.69-0.63-2.94-4.53-7.59-0.28-4.19-1.88,0.72-3.47h-3.12l-0.19-1.62,8.12-10.44,1.07-7.84s-9.81-5.72-10.25-5.63zm-135.1,8.56c-0.12,0.03-0.23,0.08-0.34,0.19-0.89,0.9-1.07,1.79-0.53,2.5,0.53,0.72,1.06,1.63,1.78,2.35,0.71,0.71,2.31,1.25,2.31,1.25s0.71-1.1,0.53-1.82c-0.18-0.71-1.97-2.84-1.97-2.84s-0.94-1.78-1.78-1.63zm28.94,7.35l-2.31,0.34s-1.07,0.91-1.25,1.63c-0.18,0.71-0.9,1.24,0,1.78,0.89,0.53,3.75,1.25,3.75,1.25s1.6-0.02,1.78,0.87c0.18,0.9,0.18,1.8,0,2.69s-0.53,1.78-0.53,1.78l0.72,0.72,1.93-0.53s0.74-0.72,1.82-0.72h2.65s1.44-0.53,1.97-1.25c0.54-0.71,1.97-1.25,1.97-1.25h2.69s1.41-0.52,0.87-1.59c-0.53-1.07-1.76-1.62-2.65-2.16-0.9-0.53-3.22-2.31-3.22-2.31h-2.5l-3.6,0.34-2.84,0.38-1.25-1.97zm-17,10.15c-0.12,0-0.22,0.01-0.31,0.04-0.72,0.17-1.44,1.4-1.44,1.4s0.37,1.78,2.16,1.78c1.78,0,2.3,0.55,2.65-0.34,0.36-0.89-0.87-2.31-0.87-2.31s-1.37-0.55-2.19-0.57z","name":"Sakha Republic"},"so":{"path":"m45.583,387.43-2.2728,2.6516-4.1669-2.6516-2.0203,1.1364-0.37881,5.8084-1.1364,1.389-2.2728-0.12627-5.9346-2.6516-3.0305-3.283,0.12627-4.9245,4.672,0.75761,0.37881-0.88388,2.5254-0.12627,3.283,1.5152,4.0406-1.894s-0.12627-3.5355,0.75761-2.7779c0.88388,0.75762,1.389,1.2627,1.389,1.2627l0.25254,3.5355z","name":"Republic of North Ossetia–Alania"},"kb":{"path":"m20.982,375.86c0.26786,0.35715,2.5893,4.7322,2.5893,4.7322l0.98214,3.9286,4.6429,1.1607,2.8571-1.0714,3.2143,1.5179,4.375-1.875,0.26786-3.125-5.9821-2.3214-1.875-5.0893-2.2321-1.1607-4.375,0.71429z","name":"Kabardino-Balkar Republic"},"kc":{"path":"m13.482,361.39,2.2321,8.4821,5.0893,6.25,4.375-2.6786,5.3571-0.89286,0.08929-3.3928,3.75-1.0714-6.6964-7.2321-2.2321,2.4107-2.8571,0.26786-1.6071-4.5536,0.44643-2.1429z","name":"Karachay–Cherkess Republic"},"st":{"path":"m33.929,367.73-3.4821,0.98215,0.17857,3.75,1.5179,1.25,1.7857,4.6428,6.5179,3.0357,1.3393,1.3393,0.08929,3.0357,3.8393,1.7857,1.6071,2.5893,3.2143,0.625,0.71429-1.4286-2.8571-3.125,1.5179-0.53572,3.5714,0.80357,0.17857-1.1607-0.98214-1.3393,7.7679-0.0893,1.6964-1.5179,0.26786-3.5714-5.2679-7.5-0.17857-9.4643-3.4821-6.0714-4.9107-0.98214-1.5179-2.7679-5.0893-5.7143-0.98214-0.625-1.5179,1.3393-2.7679-2.0536-1.4286,0.80357-0.80357,1.0714-0.08929,1.6071,0.35714,1.3393,0.35714,1.1607-0.71429,1.6071-0.98214,1.4286-1.9643,2.2322-1.875,1.0714-0.71428,0.98214-0.98214,2.3214z","name":"Stavropol Krai"},"ks":{"path":"m21.607,356.48-0.08929,2.0536,0.98214,3.8393,0.35714,0.80357,2.2321,0.0893,3.75-4.5536,1.4286-1.9643,1.9643-1.0714,2.6786-4.0178-0.26786-3.3929,0.17857-1.6964,0.89286-1.5179,1.3393,0,1.7857,1.5179,1.3393,0,2.5893-3.0357,0.08929-1.9643-0.89286-0.98214-2.2321-1.3393,0.17857-2.9464,2.8571-3.125,0.08929-1.4286-2.7679-2.9464-3.75-0.71428-0.80357-0.89286,1.6071-1.25,0.17857-2.4107-2.1429-1.6072-2.5893-0.80357-1.6071-1.6964-1.25-0.98214-0.89286-0.0893-1.3393,2.2322-0.625,0.98214,1.0714,1.4286-0.35714,1.5179-0.80357,0.625-2.7679-0.26786-0.89286-0.89286-1.9643,0.0893-1.875,0.71429-3.0357,1.7857-1.6964,0-1.3393-1.4286-1.6071-0.625-1.1607-1.4286,0-2.6786-2.2321-0.26786-1.25,0.625-0.35714,2.9464-0.089286,13.214,0.71429,5.8929,0.98214,3.6607-0.089286,2.3214-0.625,2.7679-0.089286,2.4107,0.17857,2.0536,1.5179,0.89285,0.71429,0.625,1.6071,1.5179,0.89286,1.0714,0.89286,0.89286l7.947-4.27-0.804-1.25-0.357-1.43-5.089,2.68h-1.875l-1.25-1.875,0.35714-3.5714,6.25-1.4286,2.7679-2.3214,0.71429-2.5893-1.3393-0.80357-1.9643,0.44642-1.1607-1.5178-0.71429-2.6786-1.3393-1.7857-0.17857-1.25,0.08929-1.1607,1.3393-0.80357,1.3393,0.625,1.0714,1.3393,1.0714,1.9643,1.3393,1.7857,2.3214,1.3393,1.6964,0.89285s0.625,0.26786,0.71429,0.625c0.08929,0.35715,0.89286,2.6786,0.89286,2.6786v4.0178l-0.08929,1.3393-1.0714,1.0714-1.875,1.5178-1.6071,1.4286z","name":"Krasnodar Krai"},"ro":{"path":"m37.5,323.45,2.0536,0.98214,1.4286-0.17857,0.625-0.89286-0.44643-1.1607-1.25-0.89286-1.9643-1.3393-0.89286-1.1607-0.35714-0.71428,1.0714-1.4286l2.231-1.08,1.6071-0.26786,1.0714,0.35714,1.4286,1.3393,1.5179,0.35714,1.6964-0.89286,0.89286,0.44643,1.072,1.06,1.339,1.79,0.268,1.33,1.607-0.08,1.3393-0.80358,1.6964-0.0893,1.3393-0.0893,0.35714-1.5178,0.53571-1.4286,1.25-1.6071,1.3393-1.0714,1.6964,1.0714,0.71429,0.35714,0.89286-1.875,0.44643-0.71428,2.6786-0.26786,1.875-1.6964,2.3214-0.17857,2.0536,1.1607,2.1429,1.25,0.98214,0.53571,3.9286,0.0893h2.2321l1.5179-0.98215h1.3393l0.71429,0.625,0.26786,1.6964-0.08929,1.9643v1.875l-0.08929,1.0714-0.981,1.34-1.25,0.98214-1.25,0.71429-0.80357,0.35714-0.35714,1.25-0.44643,1.6072-0.08929,1.4286-0.44643,1.1607-0.625,1.4286-1.4286,1.5179-1.6964,0.53571h-3.125l-1.608-0.36-1.518,0.53-0.625,1.97-0.982,0.62-0.80357,0.53572,0.17857,0.89285,1.3393,1.4286,0.71429,1.4286-1.1607,1.4286-1.3393,0.89285-0.80357,1.7857-0.08929,0.80357,0.98214,0.53571,1.1607,1.1607,0.625,1.0714,0.80357,0.80357,0.71429,1.3393v1.0714l-0.71429,0.80357,0.53572,0.625,1.4286,0.35715,0.625-0.53572,0.71429-0.0893,0.35714,0.98214v1.4286l-1.3393,1.3393-2.1429,1.0714-2.0536,1.1607-3.3929,0.0893-0.80357,0.80357-1.3393,0.80357-1.696,0.46-1.429-0.71-1.696-0.71-0.893-0.9-0.178-2.23-0.179-1.52-1.696-2.14-1.1607-0.80357-0.17857-1.25-0.80357-0.89286-1.7857-0.0893h-2.7679l-2.8571-0.0893-1.3393-0.17857-1.6071-1.7857-0.98214-0.71429v-0.89286l1.3393-1.5178v-1.5179l-0.625-1.25-1.875-1.4286-0.71429-0.625,0.26786-2.2322,2.7679-3.2143,0.08928-1.6071-1.9643-2.2322-1.3393-0.89285-2.411-0.55-1.0714-0.35714-0.08929-0.71429,1.0714-1.0714,0.26786-1.1607z","name":"Rostov Oblast"},"kk":{"path":"m44.554,348.71,0.98214,1.6071,1.1607,1.0714,1.1607,1.6964,0.80357,1.1607,1.1607,0.71429,2.5893,0.44643,1.3393,0.625,0.98214,1.6071s0.98214,1.7857,1.25,2.2321c0.26786,0.44643,0.98214,2.4107,0.98214,2.4107l0.17857,4.9107v3.2143l0.89286,2.2321,3.3036,4.1964,1.25,2.0536-0.17857,2.5893-1.4286,1.875,0.89286,1.3393,4.375,4.7321,0.53571,1.25,0.35714,0.98215,0.89286,0.53571,1.4286,0.0893,1.6071-0.26786,1.7857-0.53572,2.2321-0.89285,2.3214-0.26786,0.713-0.71,0.625-2.15-0.268-1.16-2.232-1.34-0.982-0.71,0.08928-1.3393,1.0714-0.625,1.7857,0.0893,1.4286-1.25-0.53572-0.71428-0.71428-2.0536-0.268-1.7-0.179-1.16h1.0714l1.6964,1.25,1.7857,0.80357,2.6786-0.17857h0.89286l0.53571-1.1607-0.17857-2.4107-0.08929-3.8393v-6.3393-0.98214l-0.08929-2.2321,2.9464-2.8572,0.17857-1.3393-1.4286-0.625v-3.2143l-1.0714-1.1607-1.1607-0.35715-2.5-0.17857-0.625-1.4286-0.17857-0.80357-1.25,0.26786-0.625,1.0714h-1.3393l-1.25-0.0893-1.071-0.98-0.804-0.71-2.321-0.27-0.98214,0.35715-0.71429,0.80357-0.71429,0.35714-0.26786,1.1607-0.35714,0.80357,0.35714,0.625,1.0714,0.35714,1.0714-0.44643,0.89286,0.35714,0.08929,0.98215-0.44643,1.5178-5,3.125-3.3929,0.26786-2.3214,1.3393-1.5179,0.53571-3.8393-1.7857-0.53571-0.35715-0.08929-3.3928-0.71429-1.4286-2.3214-2.2322-0.625-1.25-1.9643-0.80357h-3.5714z","name":"Republic of Kalmykia"},"as":{"path":"m86.873,350.94,1.6415-1.389,1.1364-0.63135,1.7678,1.2627,2.0203,0.63135,2.2728,0.50508,0.88388,1.0102,2.1466,0.88388,0.75761,1.1364,0.63134,1.1364,0,1.389,0,0.88389-1.5152,0.3788-1.1364,1.389-0.12627,1.0102,0.63134,1.389,1.0102,1.1364-0.37881,2.1466-0.75762,1.0102-1.7678,0.88389-0.25254,1.1364,0.50508,0.88388,1.7678,1.1364,2.2728,1.5152,1.389,1.6415,0.63134,1.0102,0,1.5152-1.0102,1.1364-0.25254,2.0203-1.0102,1.0102,0,2.2728,0,2.7779-0.75761,0.3788-1.7678-0.3788-1.894-0.75762-0.63134,0.37881-0.37881,2.1466,1.6415,2.1466,1.1364,1.2627,0.88388,1.0102,0.50508,0.63134,0.12627,1.2627-3.9143,0.25253-3.0305,0.63135-2.1466,0-1.894-1.2627-2.0203-1.5152-5.4296,0-1.0102-0.37881-1.1364-1.1364,0.37881-2.9042-0.88388-1.0102-2.2728-1.6415,0-1.6415,1.0102-0.3788,1.5152,0,1.389-1.0102-0.63134-1.389-0.75761-4.0406,0.63134-0.3788,1.2627,0.75761,2.9042,1.389,2.0203-0.25254,1.2627-0.12627,0.50508-1.6415-0.25254-5.4296,0.12627-5.0508-0.25254-4.2931,2.1466-2.2728,1.0102-1.1364,0.12627-1.389-1.2627-0.50508-0.25254-2.1466z","name":"Astrakhan Oblast"},"ad":{"path":"m21.786,356.21,2.4107-1.4286,2.5-2.6786,0.35714-2.1428-0.26786-3.9286-1.0714-2.7679-2.9464-0.98214l-2.412-1.78-2.232-3.75-1.5179-1.1607-1.3393,0.71428-0.17857,2.1429,1.6071,1.875,0.80357,2.5893,1.1607,1.6964,1.6071-0.35714,1.5179,0.44643-0.44643,2.9464-2.9464,2.3214-3.394,0.71-2.8571,0.35715-0.17857,3.8393,1.0714,1.7857h1.7857l5.3571-2.9464,0.35714,1.7857z","name":"Republic of Adygea"},"vl":{"path":"m85.893,313.18,1.5179-0.98214,1.875-0.0893,1.1607-1.0714,1.1607-1.6072,0-1.25,1.1607-0.98214,1.9643,1.25,2.5,1.9643,3.3036,2.1428,3.9286,1.5179,1.4286,1.5179,0.625,2.1428,0.44643,1.4286,2.8571,0.35714,0.44643,1.4286,2.5893,0.80357,1.7857,1.7857,1.6964,1.6964,0.17857,2.2322-1.5179,1.25-1.6071,2.2321-1.4286,1.3393-0.26786,1.25,0.89286,2.2321,2.9464,1.875,1.6964,1.875,1.7857,1.1607,1.25,3.3036,1.0714,1.875,0.0893,1.25-0.71428,0.53572-1.3393,0.44643-0.71429,0.53571-2.8571,0.26786-4.6429-0.0893-1.6964,0.26786-0.71429,1.6071,0,2.8572-0.17857,1.1607-1.6964,1.25-1.3393,0.98214-4.0178-0.0893-1.0714-0.0893-1.3393-3.0357-1.4286-1.0714-1.875-1.0714-1.0714-0.625l-2.256-0.46-2.054-1.25-1.071-0.18-1.1607,0.625-0.98214,0.71429-1.25,0.26785-2.1429-0.0893-0.89286-1.1607-0.35714-1.25-1.4286,0.26786-0.89286,1.1607h-1.25l-1.875-0.71428-1.25-0.80357-1.3393-0.35715-1.4286,0.17858-1.4286,1.25h-0.89286l-1.4286-2.5-1.25-1.4286-1.0714-0.71428,0.448-1.44,0.893-1.52,1.607-1.43,0.179-0.89-1.6964-2.1429-0.44643-1.0714,1.4286-0.80358,0.625-1.875,0.625-0.53571,1.25-0.35714,1.6071,0.0893h3.0357l1.7857-0.625,1.9643-2.5893,0.89286-4.0179,0.625-1.4286,2.8571-2.0536,1.1607-1.6964,0.35714-3.3036v-2.2322z","name":"Volgograd Oblast"},"vn":{"path":"m70.089,310.77,0-6.0714,0.08929-1.1607,3.75-3.2143,2.5-3.6607,1.3393-1.4286,0.35714-1.875,2.4107-0.71428,0.35714-2.5893,0.625-1.7857,1.0714-0.35714,0.625-2.0536,1.3393-1.7857,1.1607-1.0714,0.98214-0.53571,0.89286,1.1607,0.44643,0,0.71429-1.0714,0.53571-0.71428,1.1607-0.17857,0.89286,0.89285,1.25,1.1607,1.4286,1.4286,1.1607,1.5179,0.80357,0.89285-0.26786,2.1429,0,1.6071,1.875,1.0714,2.3214,1.3393,0.80357,1.3393-0.0893,1.7857-0.89285,1.5178-0.44643,0.98215,1.5179,1.25,1.875,1.7857,1.9643,2.2321,1.3393,1.6964,1.1607,1.9643-0.26786,2.3214,0,2.0536-2.1429,1.0714-0.71428,0.17857-4.2857-1.875-2.6786-1.7857-2.1429-1.4286-1.6964-1.1607-0.53571-0.17857-0.71429,0.80357-0.44643,1.25-1.4286,1.9643-1.6964,0.44643-2.8571,0.80357-3.5714,1.1607-3.2143,0.0893-2.5-0.17857-2.3214-1.25-2.3214-1.0714z","name":"Voronezh Oblast"},"bl":{"path":"m63.304,272.29-5.4464,3.3036,0.08928,2.6786,1.6964,1.875,0.08929,3.125,0.44643,1.6964,2.8571,1.6071,2.8571,0.44643l1.608,2.23-2.5,3.3036-0.35714,2.1429,1.0714,1.6071,2.3214,1.5179,0.17857,2.9464,1.1607,1.5179,0.71428,0.89285,4.7321-4.375,3.75-5.4464,2.0536-0.89285,0.80357-4.1072,1.0714-0.89285,0.53571-1.3393-2.5-2.8571-3.5714-4.1071-2.7679-0.26786-2.9464-1.1607-2.6786-1.6964-2.5893-1.6072-1.9643-1.6071z","name":"Belgorod Oblast"},"ky":{"path":"m63.482,271.84,0-4.6429l-0.357-1.61-1.786-1.97-0.714-1.07,1.3393-1.0714,3.75-1.3393,2.7679-1.3393,2.6786,0.0893,0.53571,1.0714,1.25-0.0893,1.7857-1.1607h0.80357l0.98214,0.44643,1.4286,1.6071,0.53571,0.80357,0.08929,1.6964,1.0714,0.89286,1.0714,0.71428h0.89286l1.0714,1.25,0.17857,3.2143v2.4107l-0.89286,0.98214v1.5179,1.1607l1.0714,1.25,1.1607,0.98214,0.89286,0.17857,1.5179,0.53571,1.0714,1.6072,1.6071,1.5178-0.71429,1.1607-0.80357,0.89286-0.89286-0.80358-1.9643,1.25-1.4286,1.1607-0.53571,0.80357-3.4821-4.1071-2.2321-2.3214-0.98214-0.53572-3.3036-0.625-2.8571-1.5178-3.6607-2.1429-2.4107-1.9643z","name":"Kursk Oblast"},"or":{"path":"m74.732,258.27,1.0714-1.875,2.2321-0.26786,0.89286-1.6071,0.89286-0.53572,1.9643,0.89286,1.6964-0.0893,1.6071-0.71429,1.0714-1.5179,0.89286-0.53571,0.98214,0.17857,1.3393,0.98214,1.9643,0.89286,1.1607,0.89286,0.35714,0.89285,0.71429,1.3393,0.17857,2.0536,0,3.6607,0.98214,1.7857,1.4286,1.875,0.80357,1.25,0.71429,1.7857-0.26786,1.5179-3.9286,1.875-1.9643,0.98214-1.0714,2.1429-1.875,1.0714-1.875,1.0714-2.4107-0.89286-1.9643-1.6071-0.44643-1.6964,0.44643-1.9643,0.44643-0.89285,0.08928-4.4643-0.89286-1.6964-1.7857-0.53571-1.7857-1.4286-0.08929-1.6072-1.3393-1.5178-1.6071-1.6964z","name":"Oryol Oblast"},"lp":{"path":"m86.875,278.45,1.5179,1.875,1.0714,0.89286,1.1607,0.71428,1.1607,1.0714,2.5,2.2321,1.25,1.5179,0.625,1.4286-0.44643,2.5893,0.53572,0.625,2.5,1.3393,1.875,1.7857,1.0714-0.17857,1.0714-0.625,0.44643-0.80357,0.0893-5.8036,0.35714-0.71428,1.4286-0.80357,2.3214-0.17857,2.0536-1.1607,1.3393-0.44643,0.17857-1.6964,0.625-1.3393,1.25-1.5179-0.80357-1.1607-2.6786-0.98215-0.53571-0.53571-0.17858-0.71429,1.0714-1.3393,0-1.6071-2.1428-0.35715-1.0714,0.44643-1.6072,0.80357-0.98214,0.89286-1.1607,0.625-1.4286,0.0893-1.3393-1.5179-1.6964-1.6964-0.80357-0.98214-2.4107,0.89285-3.125,1.6964-1.1607,1.6072-1.6071,1.4286z","name":"Lipetsk Oblast"},"tl":{"path":"m93.482,256.3,3.2143-2.0536,0.98214-0.17857,1.6071,0.80357,0.98215-0.80357,0.71428-1.0714,3.125,0,1.6072,0.625,2.0536,0.35714,1.4286,0.80358,2.4107,0.35714,1.4286,0.71428,0.53572,1.0714,0.98214,1.0714,1.25,1.4286,0.71429,1.6072-0.35715,1.6964-0.98214,1.1607-0.71428,1.6964-1.3393,1.9643-1.6964,2.0536-1.0714,1.875-0.71428,0.98215-0.53572,0.35714-1.7857,0-2.5,0.89286-1.5179,1.0714-1.3393,0.26785-2.0536-1.3393-2.0536-2.5893-0.26786-2.0536-0.53571-1.4286-1.6071-2.5l-1.413-2.14-0.179-2.23z","name":"Tula Oblast"},"bn":{"path":"m67.679,258.62,0.26786-1.7857,2.3214-1.5179,0.44643-1.1607,0-1.4286-1.6071-1.9643-1.7857-2.1429-1.6964-1.9643-2.3214-1.875-1.5179-0.89286-1.6964-0.26786-0.89286-1.1607,0.17857-2.3214,1.3393-1.6071,3.125-2.1429,2.6786-1.875,0.89286-1.7857,0.98214-0.71428,1.6964,0.26786,0.625,1.25,0.625,1.5178,1.0714,2.2322,1.1607,0.80357,5.8929,0.26785,2.1429-0.35714,1.4286,0.53572,3.125,0.89285,2.3214,0,0.71429,1.9643,0,2.2321-0.17857,1.1607-0.98214,1.5178-0.71429,0.53572-0.26786,1.4286,0.26786,1.5179,0,1.25-0.80357,1.4286-1.4286,1.5178-1.7857,0.71429-1.6964,0.17857-1.7857-0.71428-1.4286,0.71428-0.26786,0.89286-2.4107,0.80357-1.0714,1.4286-1.3393,1.25-1.4286,0.17857-1.4286-0.71428z","name":"Bryansk Oblast"},"kj":{"path":"m89.196,239.61,1.6071-1.25,1.6071-1.3393l1.161-0.27,1.429,0.63,0.80357,1.4286,1.0714,1.25,1.7857,0.80357,1.7857,0.35715,3.125,0.0893,1.875-0.0893,1.6071-1.0714,2.4107-0.0893,1.4286,0.44643,0.98214,2.0536,0.26786,1.4286,1.25,0.625,1.6071,0.98215,0.98214,0.80357,0.53572,1.25-0.53572,2.0536-1.0714,1.7857-1.4286,1.9643-1.1607,1.25-0.89286,0.44643-3.75-1.25-2.6786-1.0714-2.6786,0.0893-1.875,0.44642-1.0714,1.25-1.5179-0.44642-1.0714,0.0893-1.0714,0.80357-2.0536,1.0714-0.89286-0.89286-1.0714-0.80357-1.9643-1.25-1.5179-0.89285-0.89286-0.44643v-1.0714-2.4107l-0.08929-0.625,1.1607-1.6964,1.0714-1.875v-1.7857l-0.26786-1.6071z","name":"Kaluga Oblast"},"sm":{"path":"M79.375,237.55,80,235.95,80.179,234.52,79.732,233l-0.08928-1.4286,1.5179-1.3393,0.71429-1.6071,0.08929-3.125,0.35714-1.875,2.4107-2.5,2.5-1.9643,1.875-1.7857s1.875-1.3393,2.2321-1.5179c0.35714-0.17857,2.5-1.5178,2.5-1.5178l2.5,0.0893,3.0357,3.4822,1.875,3.4821,2.5,3.6607,1.4286,0.89286,2.7679,0.53571h2.0536l0.80357,0.71429,1.1607,1.875,1.1607,1.3393,1.25,1.6071,1.0714,1.4286,0.17857,1.3393-0.98214,1.25-1.875,0.89285-1.875,0.53572-0.89286,1.25-0.44643,0.89285-1.875,0.44643-1.7857,0.625-1.6072,0.35715h-3.0357l-3.75-0.80358-1.7857-1.7857-1.4286-1.3393-1.1607-0.26785-1.1607,0.71428-2.2321,1.5179-1.1607,0.44643-1.7857-0.44643-4.1071-0.98214-2.4107-0.35715z","name":"Smolensk Oblast"},"mc":{"path":"m116.07,234.16,3.5714,0.26785,2.3214-0.89285,1.4286-0.44643,0.53571,0.625,0.0893,1.7857,0,1.1607-0.17857,1.3393,1.5178,0.89286,2.9464,0.44643,1.7857,0.89285,2.0536,0.89286,2.7678,0.89286,1.7857,0.26786,1.25,0.53571,0.26786,1.6071-0.0893,1.5179-0.44643,1.6964-1.5179,0.625-2.1428,1.1607-1.6072,1.3393-0.0893,1.25-0.625,1.7857-1.1607,1.5179-0.35714,1.6071,0.17857,1.6072,0.0893,0.89285,1.1607,1.0714,1.0714,0.625,1.1607-1.0714,0.625,0.44643,0,1.5179-0.0893,3.2143-0.44643,1.1607-1.3393-0.44643-1.875-0.17857-1.6072,0.17857-0.80357,0.89286-2.0536,0.0893-1.6071-0.35714-1.25-0.71429-1.0714-1.1607-1.6071-0.625-1.6964,0-0.44643,0.80357-0.17857,1.1607-1.0714,0.53571-1.4286,0.0893-0.80357-0.80358-0.17858-0.625,1.1607-2.4107,0.26786-1.9643-0.53572-1.6964-1.1607-1.5179-1.1607-1.5179-1.0714-0.89286,0.625-1.25,2.5-2.9464,1.1607-2.6786-0.71429-1.7857-1.6071-1.6071-1.6071-0.98215-0.53572-0.35714-0.625-1.875-0.80357-1.25-0.80357-0.80357,0.625-1.5179,2.5893-1.3393z","name":"Moscow Oblast"},"rz":{"path":"m114.55,265.59-1.9643,2.6786-2.1429,3.125-0.625,2.7679-0.80357,1.7857,0.17857,0.80357,1.6964,0.71429,1.9643,1.3393,0.44643,1.5179-0.26786,0.89286,1.4286,1.1607,1.9643,0,1.1607,0.71429,0.0893,1.875,0.44643,1.1607,1.25,0.44643,1.5179-0.625,1.9643,0,1.5179,0.98214,0.625,1.7857,1.0714,1.1607,2.6786-0.17857,3.125,0,2.9464-2.0536,3.0357-2.9464,1.5179-2.2321,1.0714-1.7857-0.98214-2.2321-0.53572-3.125-2.0536-2.0536-1.25-1.6964-0.44643-2.8571-0.53571-1.6072-0.35715-0.98214-2.1428-0.35714-3.4822,0.26786-0.625,0.80357-2.1428-0.17857-1.875-0.71429-1.875-1.0714-1.9643-0.89286-1.0714,0.35715-0.80357,1.4286-1.4286,0.89286-1.6071-0.44643z","name":"Ryazan Oblast"},"tb":{"path":"m112.77,279.43-1.6964,2.1429-0.35714,1.7857-0.80358,0.89286-2.6786,0.98214-1.875,0.44643-1.5178,0.71429-0.71429,1.4286,0,2.1429,0.26786,2.3214-0.71429,1.875-1.5179,0.53571-0.44642,1.4286-0.44643,1.6964-0.625,1.1607,0.08928,0.625,2.3214,2.1429,2.2321,2.1429,1.6072,2.2321,1.4286,2.0536,0.98214,0,2.1429,0,1.9643-1.25,2.5-1.25,1.6964-1.0714,4.0179-0.26785,1.0714-0.98215v-3.6607c0-0.35714,0.0893-2.3214,0.0893-2.3214l1.5179-1.1607s0.71429-0.71429,0.80357-1.0714c0.0893-0.35714-0.26785-4.6429-0.26785-4.6429l1.4286-1.0714-0.80357-2.1428-1.7857-1.4286-2.3214,0.26786-0.89285,0.625-1.1607-0.80357-0.89286-1.3393v-1.3393l-1.875-0.80357h-1.3393l-0.89286-1.0714-0.26786-1.3393z","name":"Tambov Oblast"},"kn":{"path":"m44.107,152.55,0,2.2322,0.53571,2.5,2.0536,5.1786,1.4286,3.4821,1.9643,3.6607,2.5,1.0714,3.75-0.44642,1.9643-1.3393,0.625-1.7857-0.44643-4.2857-0.89286-2.8571-1.5179-1.6071-2.4107-0.53572-0.98214-0.71428,0-3.0357-0.80357-1.4286-1.6964-1.6071-1.6071-0.26786-0.35714,1.25-0.625,1.3393-0.625,0.89285-1.4286-0.35714z","name":"Kaliningrad Oblast"},"ps":{"path":"m95.268,213.98,0.35714-2.1428-0.26786-2.1429-1.4286-1.875-1.3393-1.4286-0.08929-1.6964,0.98214-0.71429,0.17857-1.6964-0.89286-0.98215-1.25-1.875,0-4.1964,1.5179-0.89285,3.75-2.2322,0.80357-2.4107,0.53572-1.7857,1.875-1.25,2.4107-0.0893,1.3393-1.6071,0.98214-1.6964s1.25-0.625,1.6072-0.80357c0.35714-0.17857,2.8571-0.71429,2.8571-0.71429l1.5179-0.0893,1.0714,0.53571-0.625,1.5179-0.71428,0.89285-0.17857,0.98215,1.6071,0.26785,1.25-1.7857,0.98214-2.0536,1.1607-1.5179,1.6071-0.71428h1.6071l1.5179-1.5179,1.1607-0.625h1.4286l0.98214,0.98214,0.625,1.5179,0.98214,1.6071-0.26786,1.6964-0.89285,0.98214-0.35715,1.3393-0.80357,1.6071-0.17857,1.1607h-1.4286-0.80357l-0.71429-0.53572-0.80357,0.53572-0.625,0.80357-0.53571,1.5178-0.53572,2.1429-0.0893,2.5-0.35715,1.875-1.1607,1.25-1.3393,0.98214h-1.7857l-1.5179,1.3393-0.53571,1.7857-1.3393,0.53572-0.44643,1.0714-0.17857,1.4286-1.7857,0.89286-1.7857,0.80357-0.625,1.6964,0.625,1.5178,0.625,0.625-0.26785,1.4286s-0.0893,0.44643-0.44643,0.80358c-0.35714,0.35714-1.1607,1.3393-1.1607,1.3393l-1.4286,0.80357-2.3214,0.89286-1.0714,0.0893-1.1607-0.89286-0.89286-0.89286z","name":"Pskov Oblast"},"no":{"path":"m123.12,188.27,1.5179,1.25,2.1428,0.35714,2.1429,0.17857,1.25,1.1607,2.5,0.53571,2.3214-0.0893,1.0714-0.89286,0.44643,0.625,0.0893,1.7857,2.1429-0.53571,2.3214,0.0893,0.80357,0.80358,0.17857,2.5,0.17857,2.5,0.53572,1.0714,1.3393,0.17858,1.3393,0.44642,0.26785,2.1429,0.71429,1.6964,0.98214,0.80357,0.44643,2.9464,0.0893,2.2321,0.89285,1.4286-0.53571,0.98215-0.71429,0.53571,0,1.6071,0.17858,1.5179,1.4286,1.3393,0.625,0.53571,0.0893,1.9643,0,1.9643-0.17857,1.3393-1.25,0.53571-0.71428-0.26785-0.625-0.80358-0.71429-0.80357-0.17857-1.1607-0.98214-0.80357-0.80358-0.625-2.0536,0-1.5178-0.53572-0.53572-0.35714-1.5178-0.53571-0.71429-0.26786,0-0.44643s-0.26786-1.25-0.26786-1.6964c0-0.44643-0.0893-2.0536-0.0893-2.0536l-0.625-0.98214h-1.7857l-0.89285-0.44643-0.44643-0.98214-0.98215-0.625-0.53571,0.625-0.89286,1.0714-1.6964,1.4286h-2.1428c-0.35715,0-1.5179,0.0893-1.5179,0.0893l-0.71429-1.0714-1.0714-0.71428-2.3214-0.17857-2.6786-0.0893-1.5179-0.44643-1.3393-0.98214-2.3214-0.44643h-2.1428l-0.89286-1.1607-1.25-1.0714-0.53571-0.71429-1.1607-0.71428,0.98214-2.7679,0.71429-0.44643,1.1607-1.5179,1.0714-1.0714,2.0536-0.625,2.5-1.9643,0.625-1.9643,0.0893-3.5714,0.98214-2.5893,1.0714-1.25,1.1607,0.26786z","name":"Novgorod Oblast"},"tr":{"path":"m98.661,216.66,3.2143-0.625,2.2321-1.6072,1.3393-1.6071,0.17857-1.4286-0.80357-1.4286-0.26786-1.3393,0.35714-0.89286,1.4286-0.89285,1.6964-0.625,1.1607,0.44643,1.5179,1.5178,1.0714,0.98215,0.98215,0.53571,1.6964,0.17857,2.4107,0.35714,1.3393,0.98215,1.3393,0.26785,3.2143,0.44643,1.5178,0,1.25,0.71429,0.80358,0.71428,1.875,0.35715,1.7857-0.17857,1.875-1.6072,1.25-1.25,0.71429,0.44643,0.625,0.80357,1.4286,0.44643,1.4286,0.17857,0.53571,1.5179,0.17857,2.4107,0.35715,0.80358,1.1607,0.71428,1.4286,0.80357,1.0714,0.26786,1.875,0.35714,0.98214,0.26786,1.25,1.0714,0.44643,1.3393,0.98214,1.0714,0.80358,0.53572,1.7857-0.35715,1.3393,0.0893,1.25,0.71429,1.6071,0.89285,0,1.5179-0.625,1.6964-1.25,1.6071-1.6071,0.44643-1.25,0.98214-1.5179,1.3393-0.89286,1.0714-0.44643,0.71428-0.26785,1.5179-0.44643,1.0714-1.25,1.4286-0.53572,1.4286-0.35714,2.0536-2.0536,1.9643-2.0536,1.3393-1.0714,0.17858-0.53571-0.71429-0.26786-1.7857-1.6964-0.71429-3.8393-0.89286-3.8393-1.6071-3.0357-0.80357-1.5178-1.0714-0.0893-3.0357-0.35714-1.6964-3.3036,0.80357-3.4822,0.26786-1.3393-0.89286-3.4821-4.4643-1.5179-2.0536-3.3036-0.625-2.7679-0.53571-1.4286-1.7857z","name":"Tver Oblast"},"vm":{"path":"m137.41,247.73,1.6072,1.7857,2.0536,1.25,1.1607,1.0714,1.3393,0.35714,0.80357,0.89286,0.0893,1.5178-0.89285,1.7857-0.35715,1.0714,1.25,0.625,1.7857,0.26785,1.0714,1.1607,0.17857,1.9643,0.98214,1.875,1.0714,1.25,1.3393,1.25,1.3393,1.3393,1.3393,1.1607,1.7857,1.875,0.89286,1.3393-0.17857,0.98214-0.89286,0.71429l-0.18,0.98,0.53571,0.71429,0.44643,0.71428,0.0893,1.6072-1.7857,0.53571-2.2321-0.0893-1.1607-1.0714-4.4643-0.0893h-5.1786l-1.7857,0.53571-0.71429-1.6964-1.6964-1.9643-1.6071-2.6786-0.80357-4.1964-0.0893-4.1071-0.17857-2.0536-0.44643-0.44643-0.71428,0.44643-1.1607,0.26785-1.4286-1.25-0.26786-2.5893,0.71429-2.0536,1.1607-2.0536,0.44643-1.7857,1.3393-1.0714z","name":"Vladimir Oblast"},"pz":{"path":"m127.05,289.96,1.6964,1.7857,2.0536,1.5179,1.25,0.98214,1.6964,0.625,1.25,1.875,0.71429,1.6071,0.26785,1.9643,0.98215,0.98214,1.0714,1.0714,2.6786,0.17857,1.6964,0.0893,0.625,2.1429,0.89286,1.7857,1.6964,0.71429,2.1429,0.26785,1.4286,1.0714,0.625,1.0714-1.5179,0.89286-0.89286,0.98214,0.0893,4.1071-0.26786,3.4822-2.7679,1.25-1.0714-0.0893-0.89286,1.6071-1.9643,0.98215-1.1607-1.7857-0.98214-0.98214-5.9822-0.0893-1.1607-1.875-0.89286-0.89285-3.125-0.71429-0.98214-1.6071-1.25-1.6964-2.1429-0.71429-2.4107-1.3393-1.6071-1.0714-2.5,0.0893-0.71429-1.875,0.26786-2.5,1.1607-0.89285,3.8393-0.80357,0.89285-2.4107,0-3.4821,1.3393-1.6964,1.3393-1.6071-0.26786-2.5893,0-1.9643,1.1607-0.89286z","name":"Penza Oblast"},"sr":{"path":"m107.23,308.27-0.17857,3.0357-0.26786,1.25-2.2321,1.1607,1.4286,1.6964,1.0714,3.2143,2.2321,0.71429,0.98215,0.80357,0.89285,1.0714,1.7857,0.625,2.5893,2.5,0.89286,1.0714,0,1.875-1.5179,2.0536-2.4107,2.8571-0.44643,1.25,0.44643,1.6964,0.71429,0.89286,2.1428,1.1607,4.0179,3.9286,1.7857,4.5536,1.25,1.4286,1.25,1.3393,0.26786,1.9643-0.71428,2.5-0.53572,2.4107,0.26786,1.7857,0.89286,1.0714,1.6071,0.44643,1.6964,0,1.6964-1.1607,1.25-1.0714,0.44642-2.6786,0.0893-1.875,2.2321-0.625,3.3036,1.25,1.6964,0.35714,1.6072,0,1.3393-1.5179,0.44643-0.53571,1.6071,0.35714,1.3393,1.0714,1.5178,0.89286,4.6429,0,1.1607-1.1607,1.3393,0.17857,0.89286,0.80358,1.6071-0.53572,0-1.7857-0.89286-1.9643-0.35714-1.3393-0.17857-3.9286-0.0893-2.0536-0.71428-1.25,0.0893-2.8571-0.35714-1.6071,0-2.5-0.80357-1.3393-1.1607-1.6071-2.5-1.0714-1.6072-2.0536-2.5893-0.0893-1.0714-0.35714-1.7857-1.6964-0.625-1.25-0.44642-0.89286-1.7857-2.4107-5.625-0.26786-0.53571-0.17857-1.9643-2.5893-3.125-0.89286-2.2321-2.9464-6.1607-3.3036-2.3214,0-1.0714-1.6964,0.44643-2.5-0.80357-0.35714-3.8393,2.1428-1.5179,0.35715z","name":"Saratov Oblast"},"mr":{"path":"m127.59,290.05,1.875,2.1429,2.6786,1.7857,1.7857,1.1607,1.7857,2.7679,0.44642,2.4107,2.0536,2.1429,2.5893,0.0893,1.6071,0.26786,0.89286,2.2321,0.71429,1.4286,2.0536,0.89286,1.7857,0.35714,1.25,0.625,0.53572,0.80358,5.8928,0.17857,2.6786-3.5714,0.35715-0.53572,0.71428-1.3393,0.0893-2.1429-0.0893-1.9643-1.7857-0.98215-0.35714-2.5-0.0893-0.80357-1.6964,0,0,0.17857-0.80357,0.89286-1.3393,0.80357-5.2678,0-2.5893-2.3214,0.17857-3.5714-1.1607-1.0714-0.17857-0.80358,1.0714-1.0714,0-1.6072-2.5893-0.53571-1.7857-0.0893-0.80357-1.25-0.71429-1.6964-1.25,1.1607-2.1429,2.3214-2.4107,1.5178-1.5179,0.98215-2.9464,0.26785z","name":"Republic of Mordovia"},"cu":{"path":"m159.11,299.07,1.3393-0.89286,2.9464,0.44643,1.3393,0.44643,1.0714-1.3393,0.26786-1.7857,2.2321-1.1607,2.2321-2.2322,3.125,0.0893,2.6786,0,1.25,1.5179,0.35715,2.9464-0.17857,1.5179,0.35714,1.25,0.71428,1.1607-0.0893,0.71428-1.3393,0.625-4.1071-0.0893-1.3393,0.53571-0.80357,0.80357,0,0.89286,1.1607,0.71428-0.17857,0.89286-1.3393,1.1607-1.7857,1.25-2.1429,0.98214-1.3393,0.44643-1.3393-1.3393-2.5-0.44643-0.98215-0.625-0.98214-1.3393-0.80357-0.80357,0.80357-3.5714z","name":"Chuvash Republic"},"ul":{"path":"m158.57,305.32-1.875,2.6786-0.98215,1.4286-4.8214-0.26785-0.80358,0.26785-1.7857,1.4286-0.80357,1.1607,0,2.3214,0,2.5893,0,1.6964-1.7857,1.4286-1.0714,0.26786-0.89286,0-1.25,1.25-1.25,1.0714-0.625,0.26786,0.89286,1.9643,1.6071,1.6071,2.3214,0.44643,1.5178,0.17857,1.25,1.6072,1.5179,0.80357,2.1429,0.17857,0.89286-0.625,0.0893-1.875,0.17857-1.6964,1.0714-1.6964,0.35714-1.3393,1.3393-0.26786,0.80357,0.53571,1.3393,0.625,1.875-0.17857,1.3393-0.98214,1.0714,0.17857,1.6964,1.4286,2.0536,1.875,1.5179,1.6072,0.80357,1.4286,2.3214,0.17857,1.1607-1.5179,2.8572-2.0536,2.0536-1.1607,0.26785-2.3214,0-3.5714-1.875-1.1607-3.6607-0.0893-2.0536-1.4286-0.98214-1.1607-2.5-0.26785-0.98215-1.5179-3.0357-1.5179-0.80357-1.5179-0.625-2.0536z","name":"Ulyanovsk Oblast"},"ss":{"path":"m150.98,329.96,1.3393,2.1428,0.71428,2.8572,0.44643,2.8571,0,2.1429,0.625,2.3214-0.0893,2.8571,0.35714,2.4107,0.53571,2.1429,0.625,1.9643,0.71429,0.98214,5.8929,0.0893,3.0357-1.6071,1.25-1.9643,1.9643-0.35715,1.6964-0.0893,2.1429-1.4286,1.4286-0.89286,1.25-0.17857,1.6072,0.625,1.7857-0.17857,0.80357-1.875,1.0714-2.3214,4.375-2.5893,1.7857-1.4286,1.1607-2.0536-0.625-1.5179-0.80357-1.7857-0.35715-2.5-1.1607-1.25-0.71429-2.4107-3.6607-0.26785-2.3214-1.6964-1.4286-0.80357-3.5714,2.3214-1.9643,2.2322-2.4107,0.0893-0.98214-0.98214-2.2321-2.4107-2.4107-1.875-1.0714-1.0714-0.89285,0.26785-1.6072,0.71429-1.6964-0.0893-1.5178-0.80357-1.0714,0-0.625,0.98215-0.53572,1.0714-0.80357,1.5179-0.17857,1.3393,0,0.98214-0.0893,0.71429z","name":"Samara Oblast"},"ob":{"path":"m155.89,352.82,0.53571,1.4286,0.71429,1.6071-1.0714,1.6072,1.0714,1.4286,3.0357,0.17857,1.9643-0.35714,2.5,0,0.17857,2.3214-0.89286,2.6786,0.35714,1.0714,3.5714,1.6071,2.1429,1.4286,0.17857,3.5714,0,4.1071,0,1.4286-1.25,0.89286,0,1.9643,0,0.71428,0.71429,1.0714,1.0714,0.89286,1.7857-2.5,0-1.4286,0.89286-0.89286,1.4286,0,1.0714,2.3214-0.17858,1.4286-0.71428,1.25-0.35714,1.4286l0.36,1.43,1.25,0.89286,2.3214,1.25,1.7857,0.89286h1.9643,2.5l1.4286-1.0714,1.6071,0.17857,1.9643,1.0714,0.89285,1.6071,0.35715,1.7857,1.0714,1.25h1.7857l0.89286-0.89285h1.25l1.6071,0.53571,1.25,1.4286,0.53571,2.6786-0.17857,3.5714,1.7857,1.6072,1.4286,0.89285,1.0714,1.6072,1.0714,0.53571,1.6071-0.71429,1.4286-0.17857,1.6071,1.4286v1.25l1.9643,1.7857,1.25,0.71428,2.1429,0.35715h2.6786l1.4286-0.17857,1.25-0.89286,1.25-1.0714,0.89286-0.89286-0.17858-1.25-2.3214-3.2143-1.0714-1.25v-3.75l-0.71429-2.1429-0.17857-2.1429,1.0714-2.3214,1.9643-1.4286-1.4286-1.7857-3.0357-2.8571-1.9643,0.35714-1.4286-0.17857-0.89286-1.25h-2.3214l-1.4286,1.25-1.0714,1.25-0.53572,1.0714h-2.5l-1.0714-2.5-3.2143-0.17858-2.8572-0.35714-0.89285-2.5-1.08,0.33-1.79,0.89h-1.4286l-0.17857-1.0714,1.4286-1.7857,2.5-2.5-0.53-1.78-0.71-0.36v-0.89286l2.5-1.9643,0.35715-1.0714v-2.1429h-1.7857l-2.1429,0.71429-1.6071,0.17857-1.4286-1.9643-0.53571-2.3214,1.25-1.7857,1.0714-0.89286v-1.6071l-0.35714-2.3214,1.0714-0.89285,0.17857-3.0357-1.25-1.9643-1.7857-1.7857-0.17857-1.6071,1.0714-2.8571,1.6072-2.5,0.89285-1.7857-0.53571-1.25-2.1429-1.6071-1.4286-2.1429-1.25-1.4286-1.6071,1.7857-1.4286,1.4286-4.1072,2.5-1.4286,1.9643-0.35714,1.9643-0.53571,0.35714-1.9643,0.17857-2.1429-0.35714-1.9643,0.53571-1.9643,1.4286-2.8571,0.53572-1.0714,0.71428-1.4286,1.7857-2.1429,1.25h-2.5z","name":"Orenburg Oblast"},"nn":{"path":"m156.25,271.57,4.2857-0.53571,2.5-1.4286,3.5714-0.71428,2.6786-1.0714,1.25-0.17857,2.3214,1.25,1.7857,1.0714,2.6786-0.17857,1.4286,0,2.6786-1.0714,1.25,0.17857,1.4286,1.9643,1.0714,2.1429,2.5,0.17857,2.5,1.7857,1.0714,1.25,0.89286,2.5,1.25,1.4286-0.17858,1.6071-1.25,0.89286-1.7857,0.17857-0.71429,0.89286-1.6071,0-0.71428-0.89286-1.7857-1.0714-1.6071,0.71429,0,1.6071-1.25,1.4286-1.25,0.53572-2.1429-0.89286-2.1429-1.6071-3.0357-0.89286-1.7857,0-1.0714,0.89286-0.71429,1.7857,0,2.8571-0.17857,2.8572,0.53571,1.0714-1.0714,1.4286-2.3214,1.4286-1.4286,0.89285,0,1.4286-0.35715,0.89285-0.89285,0.71429-2.8572-0.35714-1.0714-0.17858-0.89285,0-0.71429,0.53572-0.38692,0.34215-0.69448-0.12626-0.44194-0.50508-0.50508-3.0936-1.5784-0.12627-1.5784,1.4521-2.2097,0.44194-3.9775-0.25253-2.0834-2.0203,0.1894-3.3461-1.2627-1.389-0.0631-0.75761,1.0102-1.4521-0.0631-1.0733-3.7249-0.63135-1.1996-0.75761-1.0733-2.7148,1.1364-2.336-1.1996-3.3461,2.0203-0.50507,3.283-0.12627,5.9978,0.12627,1.2627,0.88388,2.0203,0.1894,2.0203-0.75761,0.12627-1.5152-0.94702-1.4521,0.63135-1.0733z","name":"Nizhny Novgorod Oblast"},"ml":{"path":"m181.51,286.29,2.2728,2.336,2.4622,2.0834,2.7779,1.1364,2.9673,0.0631,2.4622,2.0834,1.5784,1.6415,0.44194,1.3258,0.63134,0.94702-0.3788,1.6415-0.56821,1.1364-0.0631,1.8309-1.5152,1.389-0.88388,0.56821-1.4521-0.12627-1.1996-1.5152-1.1996-0.44194-1.389-0.82075-1.7046-0.12627-0.50508,0.88389-1.7046,0.88388-2.5885,0.12627-1.9572-0.82075-1.1364-0.69448-0.88388-3.0305-0.37881-4.7351-1.1996-1.4521-4.0406-0.0631-1.3258-0.1894-0.63134-1.0733,0-2.0834,0.0631-3.0936,0.37881-1.8309,1.0102-1.0733,0.82075-0.63134,2.5885,0.3788,2.2728,0.88389,2.9673,1.7678z","name":"Mari El Republic"},"ta":{"path":"m160.93,308.14,0.0631,1.1364,0.44194,1.0733,0.88389,1.0102,1.5152,0.63134,1.8309,1.4521,1.5152,0.75762,1.389,0.44194,1.4521,1.0733,1.389,1.0102,2.4622,0.44194,1.4521,0.0631,1.7046,0.88388,0.12627,2.2097-0.37881,2.9042,0.44195,1.4521,2.0834,1.1996,1.0733,0.75761,2.9042,0.18941,0.82075,0.69448,0.56821,1.7046,1.3258,2.1466,0.63134,2.5885,0.88389,1.7678,1.6415,1.894,1.389,2.2728,1.6415,1.1364,0.88388,0.88388,1.1996,0.0631,2.9042-1.8309,2.9042-2.7148,0.44194-0.63135,0-1.894-1.0102-1.0102-0.0631-0.88388,1.8309-0.25254,1.2627,0.31567,0.75762,0.56822,1.3258,0.3788,1.6415-0.31567,1.1996-0.69448,2.9042-0.12627,1.5152-0.37881,0-0.94701-0.37881-1.2627-1.1996-1.5784-0.63134-1.2627-1.5152-0.44194-0.88389-1.2627s1.2627-1.0102,1.5784-1.1364c0.31567-0.12627,2.2728-0.75762,2.2728-0.75762l0.0631-1.4521s-1.1364-0.18941-1.389-0.50508c-0.25254-0.31567-0.69448-0.94702-0.69448-0.94702l2.0203-1.3258,2.0203-1.389,0.12626-1.1364-0.69447-0.82075h-1.5152l-0.69448,0.0631-1.1364,1.3258-0.56821,0.69448h-1.894l-0.12627,0.88388-0.12627,1.3258-0.82075,1.1364-1.5152-0.12627-0.75761-1.4521-1.1364-0.94702-0.82075,1.0102-1.7678-0.31567-0.56821-2.2728-1.4521-0.88388-0.63135-1.2627,0.12627-1.3258-1.1364-1.3258,0.0631-2.6516,0.12627-3.0936,0.63135-0.94702-0.25254-1.0102-0.69448-1.0733-0.56821-0.56821-1.0102,0.44194-0.88388,0.37881-1.0102-0.12627-1.0733-0.88389-0.88388-0.82074-1.8309-0.69448-1.4521-0.44195-0.94702,0.94702-1.8309,0.75762-1.8309,0.1894-1.6415-0.31567-1.9572-1.0733-1.389,0.50508h-2.7148l-2.0834,0.0631-1.389,1.1364-0.0631,0.88389,0.69448,0.50507,0.12627,0.82075-0.82075,1.0733-1.5152,1.2627-2.6516,1.0733-1.5784,0.69448-1.1364-0.75762-2.0834-0.82075z","name":"Republic of Tatarstan"},"iv":{"path":"m144.26,252.7,2.0203-1.1364s0.94702-0.50507,1.1996-0.50507c0.25254,0,2.5885,0.31567,2.5885,0.31567l2.7148,1.1364,2.3991,1.1364,1.2627,1.1996s1.4521,1.0102,1.7046,1.1996c0.25254,0.18941,1.4521,1.2627,1.4521,1.2627l1.7046,0.63135,1.1364-0.88388h0.88388l0.50508,0.82074,0.1894,1.1996,1.0102,0.75762,1.5152,0.82074,1.0102,0.63135,0.44194,1.0102-0.69448,1.0733-0.12626,0.88388,0.75761,0.37881,0.88388-0.56821,1.389,0.63134,0.69448,0.94702,0.25254,1.2627-0.25254,0.50508-1.894,0.69448-2.9673,0.82075-3.0936,0.50507-2.3991,1.5152-3.4724,0.50508-0.94702-0.12627-1.7678-2.3991-3.5987-3.4724-2.7148-3.3461-0.82075-2.7779-0.88388-1.0102-2.1466-0.44195-0.69448-0.56821,0.50507-1.4521,0.56821-1.3258z","name":"Ivanovo Oblast"},"yr":{"path":"m154.11,228.33,1.7678,1.5784,1.9572,0.50507,1.7678,0.50508,1.3258,1.6415,1.9572,1.5784,1.5784,0.0631,1.0733-0.69448,0.82075,0.31568,0.3788,1.4521,0.12627,3.4093-0.0631,2.6516,0.25254,1.5152,0.88388,1.0102,0.56821,0.94702-0.37881,1.0733-1.7046,1.1364-2.7148,1.3258-3.283,2.2097-1.6415,1.0733-3.3461,0.88388-2.4622-0.1894-2.1466-0.63135-2.6516-0.69448-2.1466,0.63135-1.8309,1.0733-1.7046-0.88388-1.4521-1.0102-1.894-1.1364-1.1364-1.1996-0.25254-1.3258,0.56821-1.4521,2.0203-0.88388,2.2097-1.1996,1.6415-2.7779,1.0102-2.9673,1.1996-1.2627,0.75762-2.4622,1.6415-1.8309,1.9572-1.8309,2.7148-1.5152z","name":"Yaroslavl Oblast"},"kt":{"path":"m168.7,245,1.389,0.12627,1.2627-0.75762,1.5152-1.389,1.894-0.75762,1.894,1.1364,1.894,1.5152,2.5254,0.12627,0.63135-0.75761,0.75761,0.50507,1.2627,2.1466,2.2728,2.2728,1.5152,1.5152,1.1364,1.894,0.3788,2.2728,1.2627,1.7678,1.5152,1.6415,2.5254,1.389,1.7678,1.5152,1.7678,1.894,2.0203,0.88388,1.894,0.12627,2.0203-2.0203,1.6415-0.3788,0.63135,1.894,1.1364,1.0102-0.12627,1.6415-1.6415,1.5152-0.12627,1.894-0.3788,2.5254s-1.7678,0.75761-2.3991,0.75761c-0.63134,0-6.3134-0.12626-6.3134-0.12626l-3.1567,0.12626-1.1364,1.1364-1.2627,0.50507-2.0203-0.75761-1.5152-0.75762-2.0203-0.3788-1.0102-1.5152-0.88388-1.6415-0.75762-0.63135-1.1364-0.12627-0.88388,0.50508-2.1466,0.75762-3.283-0.25254-1.7678-0.50508-2.0203-1.2627-0.50508-0.50508,0.25254-0.63134v-1.1364l-1.389-1.2627-0.88389-0.50508-0.63134,0.37881-0.38556,0.10695-0.53571-0.35714,0.0893-0.89286,0.71429-0.625,0.0893-0.98214-0.89285-0.71429-1.7857-1.0714-0.98214-0.98215-0.26786-0.98214-0.71428-0.89286h-0.98215l-0.89285,0.625-0.625,0.0893-1.25-0.71429-1.4286-0.80357-1.3393-1.25-1.7857-1.3393-0.69-0.57,1.07-0.71,2.05-0.54,2.3214-0.71428,2.8571-2.0536,3.3036-1.6964z","name":"Kostroma Oblast"},"le":{"path":"m123.49,177.57,1.7678-1.6415,1.5152,0,2.2728-1.894,2.5254-0.50507,2.2728,0.63134,2.9042,2.1466,2.7779,1.5152,0.75761,2.5254,0.12627,1.389,1.0102,1.1364,1.1364-0.37881,0.75761-2.0203-0.12627-2.3991-0.88388-1.6415-0.88388-1.894,0.12626-2.0203,1.1364-1.2627-0.25254-1.894-0.75762-1.0102,0-0.37881,1.2627-0.25254,3.283,0.25254,3.5355,1.2627,2.2728,0.12627,1.894,0.12627,1.2627,1.1364,0.63135,1.2627,0,1.7678-0.37881,1.6415-0.25254,2.1466-0.63134,1.7678-2.1466,1.2627-0.75761,1.0102-1.0102,1.894-1.0102,1.1364-1.7678,1.1364-0.63135,1.2627,0.25254,1.1364,1.389,0.75762,2.1466,0.25253,1.0102,0.88389,0.25254,1.6415,1.0102,0.75762,2.1466,0.12627,1.1364-0.50508,3.4093-0.25254,1.7678-0.63134,2.0203-0.25254,1.5152,0.75761,1.0102,1.6415,1.1364-1.2627,1.389-1.7678,0.75762,0.88388,0.50507,2.0203,0.63135,2.2728,2.1466,0.50507,1.2627,0.75762,1.1364,1.0102,0.12626,1.2627,0.12627,1.6415-0.12627,1.7678-1.2627,0.75761-2.2728-0.25254-1.389-0.88388-1.389-0.25254-0.75761,0.88388-1.5152,1.0102-3.0305,0-1.5152,0.3788-2.7779,3.0305-1.0102,1.389-0.37881,2.1466-1.6415,1.0102-1.1364,0.12627-0.3788,1.2627-1.2627,0.63134-0.63135-1.0102-1.1364-1.1364-2.2728-0.12627-0.75761,0-1.1364-3.0305,0-2.9042-1.0102-1.5152-0.88389-1.894-0.12627-1.6415-2.2728-0.88388-0.88388-0.63135s-0.37881-1.0102-0.37881-1.5152c0-0.50507-0.25254-3.4093-0.25254-3.4093l-0.75761-1.1364-2.3991-0.25254-1.389,0.75761-0.75762-0.50507-0.12627-1.2627-0.63134-0.88389-1.0102,0.63135-2.1466,0.3788-2.7779-0.88388-1.5152-0.88388-3.283-0.37881-1.2627-0.88388-1.0102-0.75762,0.63135-1.2627,0.88388-2.1466,0.88388-1.389,0.12627-1.2627z","name":"Leningrad Oblast"},"ki":{"path":"m207.59,265.33,1.2627-0.88388,0.12627-2.0203,0-2.0203-1.0102-1.389-0.12627-1.6415,1.5152-0.37881,3.9143,0.25254,2.5254-0.88388,2.6516-1.1364,0.63134-1.389,1.1364-0.63134,2.7779,0.25254,1.389,1.7678,0.12627,2.7779-0.63134,3.0305-1.0102,1.389-0.75761,2.7779-1.894,0.75762-2.0203,0.12626-1.6415,1.7678-0.63134,1.6415-1.0102,0.63134-0.75761,0.88389,0.75761,1.389,1.6415,0.88388,1.0102,1.389-1.6415,1.894,0.12626,1.894,1.1364,0.88389,1.2627,0.50507,0.88388-1.389,0.88388-1.894,2.7779,0,3.1567,0.3788,4.2932,1.2627,1.7678,2.2728,2.1466-0.12627,2.1466-1.6415,1.6415,0.37881,1.2627,1.0102,0.75762,1.894s1.0102,1.5152,1.389,1.7678c0.3788,0.25254,2.5254,1.894,2.5254,1.894l0.25254,1.5152-0.88389,2.0203-2.0203,1.1364-3.5355,0.25253-1.2627,0.63135-1.2627,1.5152-0.25254,1.389,1.0102,1.389,0.12627,1.1364-1.5152,1.1364-0.75762,1.389-0.12627,2.1466-1.2627,1.0102-2.7779,0.12627-1.1364-1.2627-1.0102-2.5254-2.0203-0.12627-1.389-0.3788v-1.894l-2.0203-1.1364-3.1567,0.75761-1.7678,1.389s-1.2627,1.0102-1.2627,1.5152c0,0.50508-0.3788,2.2728-0.50507,2.7779-0.12627,0.50508-1.6415,1.5152-1.6415,1.5152l-2.5254,1.1364-1.894-0.50507-1.2627-1.389-1.5152,0.25253s-0.75761,0.50508-1.0102,1.389c-0.25254,0.88389-0.12627,2.7779-0.12627,2.7779l0.12627,1.894-2.0203,0.63135-3.4093,0.3788-0.25254,1.1364v1.389l-0.3788,1.389-1.7678,0.88389h-0.63135l-0.63134-1.5152-0.50508-0.37881,0.12627-2.5254,0.25254-2.5254,0.50508-1.5152-0.88389-1.6415-0.25254-1.2627,0.75762-2.9042,0.63134-2.5254-1.0102-1.5152-1.6415-2.5254-2.1466-1.5152-0.88388-0.63134-3.9144-0.12627-1.7678-1.2627-1.6415-1.5152-1.6415-1.5152-0.50507-0.50508,0.50507-1.0102,1.2627-1.6415,0.25254-1.0102,1.1364-0.75761,1.5152,0.50507,1.894,1.389,1.389-0.75761,2.1466-0.63135,1.389-1.2627v-1.5152l-1.2627-1.894-0.63135-1.5152s-0.78918-1.1049-0.85231-1.2627c-0.0631-0.15784,0.56821-0.69448,0.56821-0.69448l0.97858-0.63135,0.75762-0.75761s2.2728-0.0316,2.8095-0.0316c0.53664,0,3.1567,0.0631,3.8828,0.0631,0.72605,0,3.7881-0.44194,3.7881-0.44194l1.4521-0.59978s0.12626-1.5784,0.15783-1.7993c0.0316-0.22097,0.47351-2.4938,0.47351-2.4938l2.0203-2.3991z","name":"Kirov Oblast"},"bs":{"path":"m211.5,329.86,2.3991-1.6415,2.5254-1.6415,1.5152-0.25254,1.894,2.6516,2.2728,2.2728,2.9042,0,2.6516,2.5254,1.7678,2.5254,1.1364,1.7678,1.7678,0,1.2627,2.1466,2.6517,2.3991,2.2728,1.6415,2.0203,1.7678,1.2627,1.1364,0.88389,1.389-0.37881,1.1364-1.6415,0.63134-0.88388,1.2627,0.25254,1.389,1.389,0.63135-0.63135,1.2627-1.5152,0.50508-1.2627-0.75762-2.3991,0.37881,0,1.0102-1.5152-0.25254-0.50508-0.88388-1.5152-1.0102-4.5457,0-1.1364-0.37881,0-1.2627,1.7678-1.2627,0.12627-1.389-1.0102-0.88389-1.6415-1.1364-2.5254,0.25254-1.0102,2.1466-1.7678,2.6516-0.88388,2.0203,0.50508,3.0305,1.894,1.0102,2.0203-0.75761,1.6415,0.75761,1.0102,2.0203,2.5254,0.12627,2.0203,0.75761,2.7779,0,1.7678-0.50508,1.5152,1.1364-0.63135,1.389-1.894,1.5152-1.2627,1.1364-1.0102,1.389-1.2627,0-1.2627-0.63134-2.1466-0.75762-1.6415-0.3788-1.6415,1.2627-0.3788,1.5152-0.63135,1.389-2.3991,2.6516-1.6415,2.3991-3.9143,3.6618-1.894,1.5152-0.25254,2.0203-0.63134,1.5152-2.9042-0.25254-1.6415,1.7678-1.2627,1.389-0.50507,0.63135-2.0203,0-1.1364-2.0203-0.50508-0.63134-5.4296-0.63135-1.389-2.1466-2.7779,0.88388-1.2627-0.12627,0-0.50507,3.4093-4.4194,0-1.6415-0.88389-0.63134,0-1.1364,1.7678-1.1364,1.0102-1.389,0-2.0203-0.25253-0.50508-1.894-0.12627-2.2728,1.2627-1.7678-1.1364-1.1364-2.3991,1.2627-2.3991,1.0102-1.894-0.25254-2.5254,0-0.75761,0.88389-1.5152,0-3.1567-2.5254-2.9042-0.12627-2.0203,1.0102-2.6516,2.0203-4.1669,2.9042-2.1466,3.9143-3.1567,1.0102-2.1466-0.88389-1.389-0.12627-0.12627,0-0.75761,1.389-0.25254,2.3991,0.75762,1.389,0.12626,1.7678-0.63134,2.6516-0.25254,1.7678-0.12627,0.88388-0.63134,0-1.7678z","name":"Republic of Bashkortostan"},"cl":{"path":"m242.18,347.66,1.7678-0.88388,2.7779,0.50507,2.3991,2.1466,2.3991,1.7678,3.0305,1.894,2.9042,0,1.5152,1.6415,1.6415,2.3991,0.75761,1.894-0.63135,3.1567,0,2.7779-0.88388,1.389-1.7678,0.63135-1.6415,1.1364-0.75762,1.2627-2.0203,0.63135-1.894,1.5152,0,1.1364,1.5152,1.5152,2.0203,2.0203,1.1364,2.3991-0.37881,2.7779-0.75762,1.7678-2.3991-0.63135-2.6516-0.50507-3.283-0.37881-2.0203-0.50508-1.5152-1.7678-2.0203-1.7678-1.1364-1.1364-1.1364,0.50508-1.5152,1.1364-0.88388,1.0102,0,1.894,1.6415,1.2627-0.37881,0.75761-2.2728,0.63135v1.0102c0,0.50508,0.75761,2.0203,0.75761,2.0203l2.0203,1.7678,0.12627,1.894-1.5152,0.63134-1.5152-1.5152-1.389-1.2627-2.2728-0.63134-3.283,0.12627-1.5152,0.25253-0.63134,1.2627,1.0102,1.389-0.37881,1.894-1.0102,1.6415-4.5457,0.25254-1.6415-0.88389-1.6415-0.63134,0.50507-2.0203,1.6415-0.88388-0.75761-1.7678-2.0203-2.3991-1.6415-1.0102-1.894,0.12627-1.389-0.63135,0.63134-2.7779,1.7678-2.6516,4.4194-4.1669,3.7881-4.672,1.2627-2.9042,1.389-0.88389,2.5254,0.25254,2.0203,1.0102h2.0203l1.894-2.2728,2.2728-1.894,0.50508-1.389-1.5152-1.2627-2.1466,0.50507h-3.0304l-2.7779-0.88388h-1.5152l-0.88388-1.894-1.389-0.50507-1.7678,0.63134-1.0102-0.37881-0.88389-0.63134-0.63134-1.894-0.12627-1.6415,3.6618-5.6821,0.75762-0.63135,1.7678,0.37881,1.7678,0.88388,0.63134,1.1364-0.3788,0.75762-1.2627,1.1364v1.1364l-0.12627,0.12627,0.75761,0.63135,2.6516,0.12627h2.2728l1.5152,1.0102,1.2627,1.1364,1.1364-0.63135,0.50507-0.75761,2.0203,0.12627,1.7678,0.37881,1.1364-1.2627-0.37881-1.0102-0.75761-0.88388,0.25253-1.5152,1.5152-1.0102,0.63135-1.1364z","name":"Chelyabinsk Oblast"},"ud":{"path":"m231.7,302.33-0.12627,1.389-2.0203,2.7779-1.5152,1.389,0.12626,1.389-1.6415,1.0102-1.1364,1.5152-1.5152,2.3991-0.50508,1.894-0.50508,3.1567-2.0203,1.0102-2.2728,0.12627-0.63135,1.1364-0.37881,3.0304-0.12627,1.389-3.0304,2.0203-2.2728,1.389-1.0102,0-1.2627-1.5152-1.7678-0.75762-0.63134-1.2627,1.389-1.1364,2.0203-0.75761,0.50508-1.1364-0.37881-0.50508-1.5152-0.88388,0.25254-0.88389,2.7779-1.7678,1.0102-1.1364-0.50507-1.0102-0.75762-0.63134-2.0203,0.63134-1.1364,1.389-1.5152,0.63135-1.0102,0.25253-0.3788,1.5152-0.63135,0.75762-0.88388,0.25254-0.75762-1.0102-1.389-1.2627-0.75761,0.37881-1.2627,0.37881-0.88388-0.88389-0.63135-1.1364-1.0102-1.0102-0.63135-1.0102,0-1.1364,1.6415-0.88389,1.1364-1.1364,0.25254-2.0203,0.25254-1.0102,3.1567-0.50507,1.6415-0.50508,0.37881-4.4194s0-1.2627,0.63135-1.5152c0.63134-0.25253,1.2627-0.3788,1.2627-0.3788l1.2627,0.63134s1.6415,1.894,2.3991,1.389c0.75761-0.50507,1.894-0.88388,1.894-0.88388s2.3991-1.0102,2.2728-1.6415c-0.12627-0.63134,0.25254-1.6415,0.25254-1.6415l0.3788-1.389,2.1466-2.2728,1.2627-0.75761,2.2728-0.50508,1.6415,0.37881,0.88388,1.1364v0.75761l0.25254,0.63135,1.0102,0.12627,1.6415,0.3788,0.63135,0.50508,0.63134,1.6415,0.75762,0.75761z","name":"Udmurt Republic"},"pe":{"path":"M242.06,274.03l-2.28,1.16,0.5,1.5-0.5,3.53,0.5,1.28,1.41,2.41,2.25,1.62,0.65,1.66-1.4,2.12-2.41,1.03-2.87,0.63-1.66,0.87-1.13,1.54,0.5,1.24,0.63,1.38-0.13,1.03-1.9,1.63-0.38,2.4-0.87,1.6-0.13-0.19-1,0.12-1.28,2.5-2,2.29-0.15,1.53-0.88,0.87-2,2.03-1.91,3.41-0.62,3.9-1.28,0.88-2.25,0.38-1.28,0.78-0.63,4.9,2.53,2.66,2.13,2.28,2.53,0.25,2.28,1.5,3.41,4.94,1,0.37,1.28-0.12,1.12-1.25,0.88-1.28,1.03-1.75,1.25-1.66,1.28,0.88,1.5,1.28h2.41l2.03-0.91,0.5-1.75,0.25-1.91,0.87-0.75,0.88-1,0.78-0.5,2.5,2.75h3.69l0.87-1,0.5-1.5,0.25-1.65,0.88-1.25,4.69-0.38,2.15-0.78,0.63-1.5-0.63-0.62-0.12-1.41,1.12-1.38,0.75-1.03v-1.37l-0.5-0.88-0.62-1.03,0.25-1.75,1-1.53,2.03-1.5,3.15-0.5,1.88-1.91,2.28-1.62,2.28-1.66,2.28-1.65,0.88-0.75,0.5-1.25,1-1.78s0.9-1.12,1.53-1.75c0.63-0.64,1.62-1.91,1.62-1.91l1.16-1.37,0.25-1.66-2.41-0.38-2.65-0.75-2.66-1.65-2.75-1.38-2.66-1.28-2.53,0.66-3.15,0.12-3.66-0.9-2.9-1.63-1.63,0.85-0.41-0.22-1.9-1.25-1.38-2.03-1.12-1.13-2.28-0.78-0.13-1.63-1.12-1.28-1.41-1.5-1.91-0.5-2.62-0.25-2.41-0.78z","name":"Perm Krai"},"sv":{"path":"m286.13,291.72,1.7678-1.1364,1.1364,1.389,0.88388,2.3991,2.6516,1.5152,2.9042,2.1466,1.2627,2.3991,2.2728,2.7779,0.12627,1.7678,0.63135,2.0203,0.75761,1.5152-0.63134,1.7678-1.894,1.894-0.63135,1.7678-0.25253,4.7982,0.3788,2.7779,0.63135,1.0102-1.0102,2.9042-1.5152,1.7678-0.37881,2.3991,2.0203,1.2627,2.3991,2.0203,0.75761,2.0203,0.12627,2.6516-0.63134,1.6415,0,2.9042,0.75761,2.3991-0.25254,1.894s-0.88388,0.88388-0.88388,1.389c0,0.50508-0.50508,2.7779-0.50508,2.7779l-1.2627,1.2627-2.0203,0.12627-1.1364,0.88388h-3.0304l-1.5152-0.88388-2.1466,0.25254-1.389,1.1364-0.88388,1.389-0.25254,2.9042-0.75761,1.1364-1.1364,1.0102-1.7678,0.50508-3.0305,0.25254-2.0203,0.25254-1.0102,0.88388-1.894-0.37881-1.389-1.1364-1.894-1.894-2.5254-1.6415-1.5152-0.63135-2.2728,0.37881-1.894,0.3788-1.389-0.12626-1.6415-1.389-1.894-2.2728h-2.2728c-0.50508,0-1.6415-0.75761-1.6415-0.75761l-4.672-3.1567-1.6415-1.7678-2.9042-0.3788-1.389,0.12627-0.88389,0.12627-1.2627-1.2627-3.9143-3.283-3.1567-3.0305-0.50507-1.389,2.0203-2.9042,1.389-2.7779,0.75762-0.25253,1.6415,1.1364,1.1364,0.75761h2.7779l1.5152-1.389,0.50507-1.7678,0.12627-1.7678,2.5254-1.7678,1.7678,2.0203,1.2627,0.63134h2.3991l1.6415-1.1364,0.75761-2.0203,0.50508-1.894,3.7881-0.75762,2.5254-0.3788,1.389-1.2627v-1.0102l-0.88388-1.389,1.7678-2.1466,0.25254-1.1364v-1.389l-1.0102-1.6415,1.0102-2.5254,2.1466-1.6415,3.283-0.88388,1.1364-0.75762,8.0812-6.1872,0.88388-1.6415,1.6415-2.7779,2.1466-2.5254z","name":"Sverdlovsk Oblast"},"ku":{"path":"m255.69,383.01,2.3991,1.894,3.283,0.88388,4.2932,1.2627,3.1567,0.75762,4.1669-0.50508,2.5254,0.25254,2.9042,1.0102,3.5355,1.1364,3.5355,0.88388,3.283,1.0102,3.4093-0.12627,2.3991-1.2627,3.6618,0,1.0102-1.5152,0-1.894-1.5152-2.1466-1.389-2.7779s-1.5152-0.12627-2.1466-0.37881c-0.63135-0.25254-2.2728-1.6415-2.2728-1.6415l-0.75761-3.1567-1.389-1.7678-2.6516-1.2627-1.5152-1.6415-1.2627-2.2728-1.6415-1.5152-1.389-1.2627-1.0102-1.389,0.50508-2.3991,1.389-1.2627,1.1364-1.894-2.5254,0.37881-3.0305,0.12627-1.389,0.50507-0.75762,0.50508-1.2627-0.37881-2.0203-1.0102-1.7678-1.7678-2.0203-1.389-1.7678-0.75761h-1.2627l-3.0305,0.63134-1.7678-0.12627v1.1364l0.63135,0.88388-0.50508,2.2728v2.2728l-0.25253,2.1466-0.88389,1.1364-2.5254,1.1364-1.389,1.1364-1.5152,1.2627-1.7678,0.88388-0.50507,1.2627,0.63134,1.1364,1.894,1.894,1.389,1.389,0.63134,1.7678v1.894l-0.50507,1.7678z","name":"Kurgan Oblast"},"ko":{"path":"m224.63,259.27,2.1466-0.63134,0.63134-0.88388,1.894,0.12627,1.6415,1.894,2.1466,0.25254,2.1466-0.50508,1.5152-1.894,0.50508-1.5152-0.63135-0.88389,0.63135-1.5152,2.1466-1.2627,4.5457-1.894,2.6516-1.1364,0.25254-1.5152-0.50508-2.5254-2.1466-0.88389-3.283,0.12627-2.3991,1.6415-2.3991-0.75761s-0.50508-1.0102-1.2627-1.0102-1.5152-0.25253-1.5152-0.25253l0.50507-3.0305,1.7678-0.37881,1.389-1.5152,0.50508-1.894,2.1466-0.50508,2.2728,0.12627,0.63135-1.7678-0.63135-0.63134-0.63134-2.1466,0.63134-1.389,4.5457-2.0203v-1.2627l-1.0102-2.5254-0.63135-1.6415-1.6415-1.7678-0.63134-1.1364,0.25254-1.6415,1.2627-0.63134,1.7678,0.75761,1.5152,2.1466,1.6415,1.5152,2.2728,1.894,2.6516,1.2627,1.7678,1.1364,0.50508,1.7678,1.5152,1.5152,3.1567,0.3788,1.894,1.2627,2.9042,0.50507,0.88388,1.2627h2.0203l1.0102-0.63134-0.25254-1.5152-0.75761-1.5152,0.50507-1.0102,0.88389-1.5152s0.25253-1.1364-0.12627-1.6415c-0.37881-0.50508-1.1364-1.1364-1.1364-1.1364v-0.88388l2.7779-3.283,3.1567-2.1466,1.894-2.0203,1.0102-0.88388,2.3991,0.63134,3.4093,0.12627,2.5254,0.75762,4.2932,0.50507,2.1466,0.63135,3.283,0.12627,2.3991-0.50508,1.5152,0.12627,0.12627,1.894,1.2627,1.0102,2.1466,2.1466,5.3033,4.672,7.4499,4.672,6.4397,3.7881,5.177,3.0305,5.5558,3.283,2.7779,1.894,2.2728,0.25254h3.283l2.1466-1.0102,2.5254-2.3991,1.6415-1.2627,2.7779,0.25253,2.3991-0.12626,2.0203-0.63135,1.5152-0.88388,1.6415-0.37881,3.1567,0.12627,1.6415,0.25254-0.50508,1.5152-0.88388,1.1364-1.1364,0.63134-0.50508,1.894,1.2627,1.7678,1.2627,1.389,0.12627,1.894-1.1364,1.389-0.88388,0.25254-0.75762,1.389-2.0203,0.25254-2.3991-0.12627-2.1466,0.88388-2.5254,1.389-1.389,1.1364-3.0305-0.12627-2.1466-0.50507h-3.1567-2.0203l-1.0102,0.3788-1.389,1.5152-0.75762,0.88389-2.1466,1.6415-1.5152,0.50508h-2.3991l-2.3991-0.25254-1.5152,0.50508-2.9042,2.0203-2.2728,1.2627-1.5152,1.0102-1.5152,0.3788-1.2627-0.12626-1.2627-1.0102-0.12626-1.894-0.63135-1.389-1.6415,0.88388-1.5152,1.389-1.0102,1.2627-0.88388,0.50508-1.2627,0.50507-0.75762,0.37881-0.12627,1.7678-0.3788,1.7678-0.63135,1.389-0.88388,1.1364-1.0102,1.6415-1.894,1.6415-1.6415,1.389-1.2627,0.75762-2.7779,3.283-1.894,2.6516-1.1364,3.0305-0.50507,1.6415-1.5152,1.6415-2.0203,0.88388-1.5152,0.63134-1.7678,1.0102h-2.2728l-3.1567-1.0102-3.1567-1.6415-4.4194-2.1466-0.75761-0.3788-2.5254,0.50507h-3.283l-3.0305-0.88388-2.9042-1.389-1.0102,0.25254-1.6415-0.12627-1.5152-1.2627-2.2728-2.3991-1.894-0.88388-0.63135-1.5152-2.2728-3.0305-5.8084-1.1364-1.389-0.63134-1.7678,0.63134-0.75761,0.75762v0.75761l0.37881,0.88389v1.6415,1.0102l-0.50508,0.3788-1.389-0.63134-0.88388-0.37881-1.1364,0.25254-1.5152,0.88388-1.5152,0.50508-1.1364-0.25254-0.88389-1.389-0.88388-0.63135-2.2728-0.88388-6.0609-1.1364-1.2627,0.25254-1.1364,1.1364-0.63135,1.5152-1.1364,0.37881-1.6415-1.389v-1.1364l1.0102-1.389,0.50507-0.75761-0.50507-1.0102-1.1364-1.0102-1.1364-1.0102-0.3788-0.75761,1.5152-1.2627,1.1364-2.5254,1.6415-1.0102,1.6415-0.3788,1.894-1.2627,0.88388-2.3991,1.2627-1.2627z","name":"Komi Republic"},"mu":{"path":"m217.31,136.92,1.1364-1.5152,1.5152-0.75761,2.9042,0,4.2932,0.12626,2.1466-0.50507,2.5254-1.6415,0.88388-2.0203,0.12627-3.5355,1.5152-3.4093,1.0102-1.0102,4.7982,0,2.3991-0.63134,1.0102-1.2627,1.7678-0.12627,2.3991,1.0102,3.0305,1.894,2.2728,1.894,2.6516,0,2.2728-0.25253,0.25254,2.3991,1.894,0.3788,1.7678,1.0102,0,2.2728,0,1.7678-1.0102,0.63134-1.5152-0.3788-0.75761-1.1364-0.25254-0.63134-0.88388,1.0102-0.25254,0.63135,0.50508,1.1364,1.1364,0.88388,0.50507,0.75762-0.3788,1.0102-1.0102,0.63134,0,0.75762,1.1364,1.2627,0.88388,1.5152,0.88388,1.7678,2.0203,2.1466,0.75761,1.7678,0,1.7678,0,1.1364-0.50507,1.1364-0.25254,2.0203-0.12627,5.5558,0,5.5558-0.75762,1.389-0.25253,1.894,0.63134,0.88389,0.63135,1.0102-0.12627,4.0406,0,3.5355-0.63135,1.389-1.7678,1.1364-0.88389,0.88388,0,1.0102-0.25254,0.88389-1.1364,0.88388-2.7779,0.75761-3.6618,0.12627-3.1567,0.50508-1.6415,0.37881-2.5254-0.50508-2.0203-0.75761-1.894-1.389-1.894-2.2728-1.7678-2.2728-1.1364-1.894-0.63135-2.2728-0.3788-2.3991-1.2627-2.6516-1.1364-2.0203-0.3788-1.6415-0.37881-3.9143,0-1.7678,0-1.389-0.88388-0.88389-0.12627-2.9042,0-2.1466,0.75761-1.5152,0.12627-1.1364,0-1.5152-0.88388,0-0.63135,0.88388-0.88388,1.389-0.75762,1.894-0.25253,0.63135-3.5355,0-2.6516-0.25254-0.75761-1.5152,1.389-2.0203,1.1364-0.75761,0.25254-1.0102-1.7678-2.2728-1.5152-1.7678-1.2627-2.7779-1.2627-1.2627z","name":"Murmansk Oblast"},"kl":{"path":"M216.94,136.91l-2.28,1.53,0.12,1.62-1,2.28-1.9,2.04-1.88,0.87-4.31-0.13-0.88,1-2.28,2.16h-2.91l-2.4,0.38-0.13,4.03-0.62,1.9-2.91,0.38-1.87,0.25,0.12,1.4,0.88,1.5-1.78,1.29-1.25,0.5-3.41-0.91-1.66,1.16-0.37,2.9-0.13,4.16-1.25,2.28-2.65,1.62-3.41,1.16-8.72-0.12-3.53-0.91-5.19-0.75-4.28-0.75,0.88,1.87-0.13,1.54,0.07,0.53-0.94,5.65-2.53,1.5-2.03,3.32-2.91,1.87-0.13,1.66,2.66,1.25,1.91,0.75,1,2.4,2.9,0.25,5.07-0.75,1.65-0.9,2.25,0.53,1.78,1.37,1.38-1.62,1.12-0.78,1.78,4.69,1.5,0.62,2.91,1.53,0.06,0.69-0.12,2.69,0.06,1.78-1.63,1.53,1,1.12,2.29,0.5,1.75-0.62,2.53-1,0.62-0.5,1.91,1.5,1,1.9,1.03,1.88,3.16,0.25,3.28-3.03,0.75-1.5,1.25-1.38,2.4-1.28,2.03-1.75,0.5-1.15-0.37-1.25-1.91-0.63-1-1.03,0.13-1.63,1.37-2.4,1.78-1.91,1.66-1.87,1.25-2.16,1.38,0.25,1.78,1.53h1.9l0.88-0.53,0.12-2,1.5-2.03,0.25-1.75-0.25-3.16-0.5-1.53,0.63-1.78,1.4-0.87,1.38-0.63,3.03-2.53,0.5-1.13,0.53-1.28h1.38l3.4-0.62,2.16-1,1.5-1.28v-1.88-3.4l0.25-2.54,1.03-0.87v-1.16l-0.12-2-0.78-1.15-2-0.38-1.41-0.37-0.63-0.88v-0.75l0.63-1.15,1.28-1,0.75-0.63-0.38-1.03-1.65-2.37-1.88-2.29-1.4-2.15-1.75-2.53z","name":"Republic of Karelia"},"vo":{"path":"m185.36,208.76c0.12627,2.5254-1.389,5.0508-1.389,5.0508l-1.5152,1.894s-0.3788,1.0102-0.3788,1.7678c0,0.75762,0.12626,1.389,0.12626,1.389s0.63135,1.389,1.894,2.1466c1.2627,0.75761,2.0203,2.7779,2.0203,2.7779l1.0102,1.894,1.5152,1.2627,1.2627,1.0102,1.1364,1.894,1.2627,0.37881,3.1567,0.50508,1.5152,2.2728,1.0102,1.894,1.7678,0.63135,0.25254,0.63135,1.0102,2.2728,1.2627,0.75761,2.6516,0.25254,1.5152,0.12627,0.50507,2.7779,1.2627,2.0203,2.7779,1.389,1.389,0.12627,1.0102-0.63134,1.389,0.12627,1.0102,0.50507,0.75761,1.0102-0.63134,1.5152-0.75762,1.389,0.25254,0.75762,1.2627,1.1364,0.75761,0.50508,1.0102,0.50507,0.3788,0.63135v1.0102l-1.5152,1.5152-2.0203,0.63135-2.0203,0.75761-4.2931-0.25254-1.2627,0.88389,0.25253,1.1364,0.88389,1.2627v2.6516,1.1364l-1.0102,1.1364-0.75761-0.63134-1.1364-1.0102-0.37881-1.5152-1.0102-0.12626-1.6415,1.0102-1.0102,1.0102h-1.7678l-3.0305-1.5152-2.1466-2.1466-2.0203-1.1364-1.894-1.6415-2.0203-2.7779v-1.894l-1.894-2.7779-2.5254-2.2728-1.5152-2.0203-1.2627-1.7678-0.63135,0.75761-1.6415,0.12627-1.6415-0.25254-2.2728-1.894-0.88388-0.50508-1.2627,0.63135-2.7779,1.7678-0.63135,0.37881-1.2627,0.12627-0.88388-0.50508-0.50508-1.2627-0.63134-1.894,0.25254-4.0406-0.50508-2.5254-0.50508-1.2627-1.2627,0.12627-1.2627,0.37881-0.88388-0.25254-1.389-1.2627-1.6415-1.7678-4.0406-1.0102-1.2627-1.1364-0.50508-1.0102,0.63135-2.0203-0.50508-0.88388-1.0102-0.75761-1.1364-0.63135-1.894-0.37881-0.25254-0.12627,0.50508-2.7779-0.50508-1.6415-0.63134-1.2627-0.88388-0.88389-0.37881-0.50507-0.12627-1.0102-0.25254-1.5152,0.63135-0.88388,0.75761-0.88388,1.389-0.25254h1.6415l0.88388,1.2627,1.0102,0.88388,1.1364-0.50507,0.25253-1.1364,1.2627-0.25254,1.1364-0.63135,0.75761-1.1364,0.12627-1.5152,3.283-3.6618,1.2627-0.88388h1.7678l2.0203-0.37881,1.389-0.75762,0.88388-0.63134h1.1364l1.5152,0.88388h1.2627l0.88389,0.75762,0.50507,0.88388,1.389,0.63134h1.1364l1.389-0.3788,1.5152-0.50508,1.1364-0.37881,0.63135-0.25253,0.88388,0.12627,1.0102,0.88388,1.2627,1.6415,0.50507,1.2627z","name":"Vologda Oblast"},"ar":{"path":"M391.06,151.03l-3.56,1.06-2.16,0.91-3.56,0.19-1.59,0.87s-1.26-1.07-1.97-1.25c-0.72-0.18-0.91,1.1-0.91,1.1l-1.78,2.65-2.69,1.63-3.03,0.87-2.31,1.78s-2.15,0.37-3.22,0.72c-1.07,0.36-2.5,0.19-2.5,0.19l-1.59,0.72,1.06,1.78-2.16,1.25,0.38,0.72,1.25,1.44,1.78,1.59,1.78,1.78,0.91,1.63,1.4-0.72,0.91-1.97,2.16-0.72,1.25-0.53,1.93-0.19,0.91-1.59h1.97l1.25,0.87,1.59-1.25,1.1-1.25,2.65-0.15,0.72-0.57,3.41,0.72,1.78-1.06,0.34-1.44,2.69-0.34s1.07-0.01,2.5-1.44l0.72,1.06,2.84-0.68s1.98-0.19,2.69-0.19,3.03-0.38,3.03-0.38h2.31l2.35,1.25,1.78,0.91,1.25-0.72,0.72-0.87,4.28,1.06,1.97-1.44,3.22,0.19,4.09-0.72,1.25-1.59,1.97-2.88s-1.26-0.89-1.97-1.25-2.69-1.44-2.69-1.44l-3.22,0.57-4.43,1.59-4.32-0.91-2.5-0.15-3.18-0.72-1.63-0.91-1.59-1.78-1.44,0.72-1.97,1.06-2.5-0.15-3.22-0.91-2.5-0.72zm-35.53,14.47l-2.5,0.53-1.78,1.63-2.5-0.38s-1.44-1.06-1.44-0.34v1.78l0.72,1.59-2.12,1.25-2.88,1.1-1.06,1.25h-2.16l-0.72-1.1-1.59-0.87-2.69,2.12-0.15,3.03,1.93,2.69,1.44,2.16s1.26,2.14,0.91,3.03c-0.36,0.89-4.28,2.5-4.28,2.5l1.06,2.5,1.25,1.59v1.97l2.31,0.53,2.88,1.97,2.12,2.31,1.97,0.38s1.06-1.07,1.06-1.78c0-0.72-0.15-4.48-0.15-5.38,0-0.89,1.59-8.37,1.59-8.37l0.34-1.44,4.13-2.69s0.88-1.07,2.31-1.97c1.43-0.89,4.66-3.03,4.66-3.03l1.78-1.4s0.71-1.64,0-1.82c-0.72-0.17-1.62-0.53-2.16-1.25-0.53-0.71-3.03-2.65-3.03-2.65l-1.25-1.44zm-132.28,14.34l-0.63,0.63-2.28,0.25-0.87-0.13-1.78,0.91v1.38l-0.63,1.65-1.15,0.75-0.13,1.38,0.91,0.78,0.87,0.87-0.12,1.25-1.25,1.28-1.66,1.5-1.65,0.13-1.38-1-0.62-1.53-1.41-2-1.25-1.03-2.03,0.53h-1l-2.41-1.66-1,0.38-1.66,2.15-1.37,2-1.66,1.78-1.25,2.66,0.38,1,1,1.28,1.78,0.25,0.12,1-0.12,1-2.78,2.41-2.16,0.87-1.87,3.03-2.53,2.53-2.91,0.5-1.13,0.13-0.5,0.91-0.28,1.87-0.87,2.16-1.75,2.03-0.13,1.87,1.25,2.79,1.5,1.28,2.04,3.53,3.78,4.15,1.28,0.75,3.15,0.38,0.38,0.65,1.37,1.38,1.66,2.53,1.38,0.5,0.5,1.66,0.9,1.5,3.28,0.5,1.63,0.25,0.78,1.4,0.37,2.13,0.75,1.15,2.41,0.88,1.5,0.75,1.28-0.5,1.13-0.25,1.37,0.75,0.91,1.66-1.03,1.25-0.13,1.53,0.66,1,1.25,0.75,1,1.03,1.03,0.62,0.75-0.37,1.25-0.25,1.41,0.5,1,1.37,0.5,0.91,0.24,2,0.26,1.03h0.65l0.88-0.16,0.87-0.5,0.63-0.37h1.03l0.75,0.75,0.62,0.91,0.88,0.25,1.4,0.25,1.88-0.5,1.41-0.5,1.37-1.79v-0.87l-0.37-0.66-0.26-0.5,0.26-1,0.5-0.5,2.78-1.28,2.4-1,1.66-1.12,1.87-0.78,0.5-0.75,0.13-1.38-0.75-1.53-1.13-0.87-2.15-0.13h-1.5l-1.53,0.5-1,0.75h-1.28l-0.63-0.12-1-1.13-1.53-0.37-0.75-0.38,0.25-1.53v-1.13l1.66-0.5,0.74-0.78,0.76-0.87,0.62-1.63,0.53-0.37,1.5-0.53,1.78,0.25,1-0.5-0.12-1.38-0.5-0.87-0.5-1.66,0.25-0.88,0.87-0.62,1-0.53,1.41-0.63,1.37-0.75,0.38-0.75v-0.5l-0.88-1.9-0.75-1.41-0.9-1.62-1-0.75-0.63-1.28,0.38-1.88,0.62-0.5h1.28l0.88,0.38,1,0.87,1.41,2.16,2.65,2.37,1,0.91s1.65,0.49,2.28,0.75c0.63,0.25,1.38,1,1.38,1l0.5,0.62,0.37,1.03,0.53,1,1,0.63,1.38,0.37h1.41l1.12,0.53,0.88,0.88,2.03,0.5h1.37l0.28,0.88,1,0.53,1,0.25,0.88-0.54,0.78-0.74-0.13-1.26-1.03-1.03,0.38-0.87,0.78-1,0.37-1.53-0.25-1-1.15-0.75-0.13-1.28,0.91-0.88,3.15-3.28,1.88-1.12,1.91-1.79,0.25-1.25-0.63-0.5-1.65-0.9-1.63-1-2.16-0.25-1.25,0.62h-1.4l-1.5-1.12-1.03-1.78-0.75-1.75-1.5-3.16-1.41-2.28-0.75-1.41-0.88-2.25-0.12-1.15-2.41,0.25-0.75-0.63-1.53-1.12s0.25-0.5,0.88-0.5,1.02-0.41,1.53-0.66c0.5-0.25,0.25-0.87,0.25-0.87s-0.37-1-0.88-1.76c-0.5-0.75-0.77-0.77-1.28-1.15-0.5-0.38-0.75-1.75-0.75-1.75l-1.25-0.41-2.03-0.5-1.66,0.13-1.5,0.53-1.9,0.12-0.88-0.65-1.62-1-2.03-0.13h-2.78-2.53l-1.63,0.75-0.91,0.75-0.37,1.66-1.13,1.37-1.12,2.04-1.28,0.87h-2.41c-0.63,0-1.75-1-1.75-1l-1.03-1c-0.51-0.51,0-2.03,0-2.03s0.13-1.53,0-2.16-1.5-1-1.5-1l-2.03-0.87s1.65-0.78,2.16-1.16c0.5-0.38,0.37-1,0.37-1v-2.28c0-0.63-0.25-2-0.25-2l-0.75-1.91zm110.16,1l-0.19,1.1,0.53,1.78,1.44,0.72,0.53-0.72v-1.63l-0.38-1.25h-1.93zm-28.22,6.19l-2.35,0.78-1.4,2.07-2.88,1.43-0.25,1.07,1.78,1.43,2.13,0.97,3.22-0.44,3.5-0.9,0.25-1.6-0.78-1.96-1.1-1.88-2.12-0.97z","name":"Arkhangelsk Oblast"},"tu":{"path":"m299.02,389.7,2.0536,0.80357,2.1428,1.1607,1.6072,1.3393,1.6071,1.5179,1.7857,0.71428,2.3214,0.17858,0.89286-1.0714,1.6071-1.875,0.53572-2.3214,0.625-2.1429,2.2321-1.7857,1.875-0.44643,1.25-2.5,1.6964-1.0714,2.9464,0.26786,1.6071-1.6072s0.625-2.3214,0.53571-2.6786c-0.0893-0.35714-0.80357-2.5893-0.80357-2.5893l-0.89285-1.875-0.625-3.3036-0.71429-2.2322v-1.7857l1.5179-1.9643,2.2321-2.5,1.4286-1.4286,3.125-0.26786,0.35714,1.4286-0.89285,1.6071-1.6964,1.6964-0.17857,1.25,2.5,0.35714,4.0178,0.35714,1.9643,1.6072,3.0357,1.7857,1.5179-1.25,2.9464-0.17857,2.1429,1.4286,3.3928,1.0714s2.5-0.98214,2.9464-1.1607c0.44643-0.17857,3.5714-0.44642,3.5714-0.44642l0.89286-0.98215-0.53572-1.0714-1.6964-1.25-2.9464-2.2321-1.0714-1.4286s-1.6964-0.44643-2.3214-0.44643-2.6786-0.80357-2.6786-0.80357l-0.17857-2.6786-0.26786-2.4107-1.3393-1.3393-0.44642-2.2321-0.53572-3.5714-0.35714-0.89286-2.4107-2.7679-1.1607-0.71428s-2.6786-0.26786-2.9464-0.26786h-5.0893l-0.98215-0.26786s-0.625-1.5178-0.625-1.875c0-0.35714-0.98214-1.5178-0.98214-1.5178l-1.875-0.35715-1.25,1.25-2.4107,1.875-2.1429,0.89286h-3.0357l-4.6428,0.0893-2.9464,0.26785s-1.4286,0.53572-1.7857,0.625c-0.35714,0.0893-4.375,0.0893-4.375,0.0893l-3.0357-0.0893-1.4286,0.35715-0.89286,1.5178-0.53571,2.3214-0.89286,1.3393-2.3214,0.71428-1.6071,0.53572-1.5179,0.35714-1.7857-0.17857-1.3393-0.625-1.4286,0.17857c-0.35714,0.17857-1.6964,1.0714-1.6964,1.0714l-1.1607,2.1429-0.35715,2.4107-1.6071,2.3214-2.1429,2.5893-0.98214,1.5179,0.26786,1.25,0.71428,1.3393,1.5179,1.25,1.25,1.6071,1.6964,1.875,1.0714,1.6964s3.0357,0.98214,3.0357,1.5179c0,0.53571,1.6964,2.9464,1.6964,2.9464l0.625,1.875,1.6071,1.4286,1.875,0.71428,1.0714,0.80357,1.4286,2.3214,1.0714,1.4286v1.6072z","name":"Tyumen Oblast"},"ne":{"path":"m260.27,198.54,1.6071-0.89286,1.4286-1.1607,2.0536-1.0714,1.1607-1.25,0.625-3.3929,1.1607-1.6071s1.4286-0.80358,2.4107-1.0714c0.98215-0.26786,2.3214-0.26786,2.6786-0.26786,0.35714,0,1.5178-0.98214,2.0536-1.5179,0.53571-0.53571,3.0357-2.5,3.0357-2.5l0.71429-1.0714v-2.2321l1.25-1.9643s0.89285,0.17857,0.98214,0.625c0.0893,0.44642,0.26786,1.5178,0.625,1.6964,0.35714,0.17858,1.875,1.4286,1.875,1.4286l1.6964,1.1607,0.98214,0.89286-0.0893,1.3393-0.625,1.4286-0.44643,1.7857v1.6964l-0.26786,1.0714-0.44643,0.80357-0.26786,1.25-1.25,0.71428-1.3393-0.625-1.25-0.98214-0.625-0.80357-2.3214-0.53572h-3.0357c-0.44643,0-2.1429,1.1607-2.1429,1.1607l-0.80357,1.4286,0.17857,1.0714s0.53571,0.89286,0.625,1.25c0.0893,0.35714-0.71429,1.1607-0.71429,1.1607l-0.89285,1.6072s-0.26786,1.1607-0.0893,1.4286c0.17857,0.26785,0.625,0.80357,1.1607,1.25,0.53572,0.44643,1.875,1.5178,2.1429,1.6964,0.26786,0.17857,1.875,0.89285,1.875,0.89285s2.3214,0.17857,2.8571,0.17857c0.53572,0,1.9643-0.26785,1.9643-0.26785s1.5179-0.98215,1.875-1.1607c0.35714-0.17857,1.9643-1.1607,1.9643-1.1607s1.0714-0.44643,1.4286-0.35714c0.35714,0.0893,1.3393,0.98214,1.3393,0.98214l2.3214,0.17857s0.35714-0.44643,0.71429-0.80357c0.35714-0.35714,0.53571-0.71429,0.98214-0.35714,0.44643,0.35714,1.875,1.3393,1.875,1.3393l1.7857,0.44643h5.0893l2.5893,0.0893s0.80357,0.80357,1.25,0.89285c0.44642,0.0893,3.3928,0.53572,3.3928,0.53572l1.5179,1.4286,0.71429,1.9643,1.1607,0.17858,0.71429-1.5179,0.89285-1.0714,1.875-0.17857,0.89286,0.53571,2.1429,0.17857,2.5893,0.44643-0.44643,0.80357-0.98214,0.80358-1.6964,0.625-0.80357,0.98214-0.71428,0.98214-1.6964,0.71429-0.26786,1.0714,1.3393,0.98214,1.25,0.53571,0.625,2.0536,0.71428,0.35715,1.6964-0.80357s1.3393-0.89286,1.6071-0.89286c0.26786,0,3.3036,0.53571,3.3036,0.53571l2.6786,1.3393,1.5178,1.3393,1.4286,0.89286,4.4643,0.17857,0.71429,0.71429,1.5178-0.26786,2.5893-0.35714,1.7857-1.3393,0.625-1.7857s0.53572,0.625,0.53572,1.1607c0,0.53572-1.6964,2.7679-1.6964,2.7679l-0.71429,1.7857v1.0714l-1.1607,1.1607-0.89286,0.625-0.44643,0.98214,0.44643,0.80357h1.4286l0.80357-1.6071,0.17858-0.53572,1.5178-0.0893,1.5179,1.25,2.3214,0.35714,1.1607-0.89286,1.3393-1.1607,0.53571-0.89286-0.71428-1.0714-0.35715-1.4286,1.5179-1.1607,0.71429-1.875-0.53572-1.6964-1.25-0.80357-0.71428-3.3929-0.26786-3.125s-0.26786-0.89286,0.0893-1.25c0.35714-0.35714,2.2321-1.6964,2.2321-1.6964l1.3393,0.17857,1.1607,1.4286,1.0714,1.9643,0.35714,2.1429-0.89286,3.3036,0.89286,1.0714,2.8571,2.4107,2.7679,2.8572,3.3929,2.5893,2.1428,3.3036,1.6964,3.3929,0.80357,1.875,0.17858,1.6071-1.0714,1.1607-0.98215,2.0536-0.98214,1.5179h-2.5c-0.44643,0-3.6607-0.17858-3.6607-0.17858l-2.1429,0.98215-2.7679,0.71428h-3.0357l-1.7857-0.17857-2.4107,1.875-3.0357,2.4107-1.6072,0.53571-2.7678-0.0893-2.0536-0.53571-4.2857-2.4107-23.036-13.929-7.6786-6.875-1.25-1.1607v-1.3393l-0.98214-0.625-2.4107,0.625-5.0893-0.44642-5.625-0.98215-5.1786-0.80357-3.125-0.26786-4.1071-2.3214-2.0536-0.44643-1.7857,0.625-1.7857-0.26786-1.5179-1.7857-4.2857-8.4822-0.98215-2.4107z","name":"Nenets Autonomous Okrug"},"om":{"path":"m358.39,368.89,0.71428,2.5-1.25,1.6071-1.25,1.9643,0.53572,1.6071,0.71428,1.9643-1.25,1.9643s-1.0714,1.25-1.0714,2.1429c0,0.89286,0.17857,3.0357,0.17857,3.0357l1.7857,1.6072,0.35714,2.3214-0.53571,3.3929-1.9643,0.89286-1.25,1.6071,0.71429,2.3214-0.35715,1.9643-3.9286,0.17857s-1.4286-0.89286-2.3214-1.0714c-0.89285-0.17857-3.3928,2.8571-3.3928,2.8571l-2.5,2.1429-0.89286,4.2857,0.53571,0.89286,1.9643,2.1429,0.35714,2.6786-1.6071,2.6786-1.0714,1.7857-0.17857,3.0357-2.5,2.1429s-2.3214,1.0714-3.0357,1.0714h-4.8214l-1.6072-0.71428c-2.1428,1.4286-3.75,0-3.75,0l-1.6071-0.71429-1.9643-0.35714h-1.0714l0.35714-1.7857,1.7857-1.0714,0.71429-1.4286-2.3214-1.25-2.1429-2.3214-1.9643,0.89285-0.89286-0.71428v-3.75l-1.4286-0.89286-2.8571,0.35714-2.8572-0.89285-0.89285-0.53572-0.17857-2.1428,2.1428-2.6786,0.71429-2.3214,0.35714-2.6786v-4.1071l0.71429-2.1429,1.4286-3.9286,1.6071-2.5,2.3214-0.53571,1.0714-1.25,1.0714-1.7857,1.6071-0.89285h2.6786l1.6071-1.4286,0.89286-3.9286-1.4286-3.2143-0.71429-3.0357-1.25-3.3928,0.35715-1.6072,4.4643-4.6428,1.0714-0.89286h2.6786l0.17857,1.6071-1.25,1.6072-1.7857,1.25-0.17857,1.4286,1.4286,0.35714,3.2143,0.35714,2.3214,0.17857,2.1429,1.4286,1.9643,1.4286,1.0714,0.35714,1.0714-0.71429,1.9643-0.35714,2.3214,0.35714,3.5714,1.6072h2.5l2.1428-1.0714h2.1429z","name":"Omsk Oblast"},"ht":{"path":"m329.64,260.32,0,3.75-0.53572,3.2143-1.6071,2.3214-2.3214,2.3214-0.89286,1.25,1.9643,1.9643,1.7857,2.3214,5,1.9643,4.8214,0.17857,3.5714,1.4286,2.3214,2.6786,0,1.4286-2.1429,1.7857,1.4286,1.4286,2.3214,2.8572,1.9643,1.0714,2.1428-1.0714,1.7857-0.89286s1.6071,0.71429,1.9643,0c0.35715-0.71429,0.89286-2.1429,0.89286-2.1429l1.6071,2.1429,1.4286,2.8571,1.9643,1.6072s0.35714,2.1428,0.35714,2.8571v4.6429l1.9643,3.3928s0.35714,0.17857,0.71429,0.89286c0.35714,0.71429,0,2.1429,0,2.1429l1.0714,1.25,2.5,0.53571,3.75,0.71429,1.4286,0.89285s2.8571,2.1429,3.5714,2.6786c0.71429,0.53571,1.25,1.6071,2.1429,1.9643,0.89286,0.35714,3.5714,0.53572,3.5714,0.53572l2.8571,0.35714,0.89286,1.0714s0.35714,1.6071,0.71428,2.6786c0.35715,1.0714,1.4286,1.7857,1.4286,1.7857l3.0357,0.17857,1.7857,0.53572,0.35715,1.9643,0.35714,1.4286,1.0714,2.5c1.9643,0.17857,2.5,0.17857,3.5714,0.17857s3.3928,1.0714,3.3928,1.0714l1.9643,0.71428,2.8571,0.35714,2.8572-1.0714,3.2143-1.9643,3.0357,0.53571,1.9643,2.6786s0.35714,1.7857,1.0714,2.1428c0.71429,0.35715,2.8571,0.53572,2.8571,0.53572l2.3214,1.6071,0.71429,2.3214,1.9643,0.71428,2.6786-0.89285,1.9643,1.6071,1.0714,3.0357v2.3214l-0.35714,1.6072-0.53572,1.9643,3.0357,1.9643,2.5,1.7857,0.35714,2.3214v1.0714l-3.75,1.7857-2.6786,0.53572-3.2143,0.17857-3,0.15-1.61-1.07-1.7857-0.71428-2.3214,0.35714-2.3214,1.6071-2.6786,1.0714-2.1429-1.9643s-2.8571-0.35714-3.5714-0.35714c-0.71429,0-2.3214-1.7857-2.3214-1.7857l-0.89286-1.25-3.9286,0.17857h-3.5714l-1.6071-2.5s-1.25-0.89286-2.1429-0.89286c-0.89286,0-4.4643-1.25-4.4643-1.25l-2.5-2.3214h-1.25c-0.71428,0-2.3214,1.25-2.3214,1.25l-2.5,2.1429-1.7857,2.6786-2.8571,2.5-1.6071,3.3929-4.4643,1.6071-3.5714,0.89286-0.35714,2.1429-0.71429,2.1428-2.6786,1.25h-2.8571l-5.8929-5.5357-3.9286-0.89286-1.0714-1.4286-0.53571-4.1071-1.0714-1.25-1.0714-5.3572-0.53571-1.7857-3.5714-3.2143h-5.5357l-3.0357-0.35714-1.9643-2.8571-1.6071-0.53572-4.4643,3.0357-3.3929,0.71428h-5.1786l-5,0.71429-4.2857,0.53571h-3.5714l-1.4286-0.17857-0.53571-2.8571-0.35714-3.2143,0.89285-3.2143-0.89285-3.2143-2.3214-2.1428-1.0714-0.89286-1.0714-1.0714,1.25-2.6786,1.4286-2.3214-0.17857-2.1429-0.71429-3.2143,0.71429-5.5357,1.4286-1.7857,1.4286-2.1429-0.71428-2.3214-1.0714-3.5714-1.9643-2.6786-2.3214-3.3928-3.3928-2.1429-1.7857-1.9643-1.0714-2.6786,3.3929-2.1429,1.6071-2.6786,2.3214-4.8214,2.1429-2.6786,2.5-1.9643,3.5714-3.3929,1.6071-1.7857,1.7857-3.3929-0.17858-1.7857,0.89286-1.0714,2.1429-1.0714,1.4286-1.9643,1.6071-1.0714,1.25,0.17857,0.89286,2.3214,0.35714,1.0714,1.4286,0.35714,2.5-0.71428,3.0357-1.6071,1.4286-1.25,1.25-1.0714,2.5-0.53572z","name":"Khanty–Mansi Autonomous Okrug"},"ya":{"path":"m366.25,234.25,1.4286,2.6786,1.6071,1.7857,1.6072,2.6786,1.0714,3.0357,0.89286,2.8572,3.0357,0.17857,1.7857-1.6072,1.4286-1.25-0.53571-3.2143s-0.89286-1.4286-0.53572-2.3214c0.35715-0.89286,1.7857-2.5,1.7857-2.5v-2.3214l-2.1429-1.6071-1.25-2.5s0.71429-1.6071,1.4286-1.9643c0.71429-0.35714,3.75-2.3214,3.75-2.3214s1.6071-3.75,1.9643-4.4643c0.35714-0.71429,0.35714-4.8214,0.35714-4.8214l0.89286-1.4286,7.5-2.1429,4.8214-3.5714,5.7143-6.0714,3.2143-2.1429,2.1428-0.71429,1.7857,2.3214,3.3928,0.35714,1.7857,1.25,1.0714,2.6786,0.17857,1.7857-0.89286,3.75-2.1429,2.6786-2.3214,2.8571-3.0357,1.6072-1.25,1.0714-0.35714,1.9643,1.0714,2.1429,0.17857,2.8571-0.89286,2.8571-2.1429,2.6786-1.7857,3.2143-2.6786,4.4643-1.25,3.5714-0.89286,2.1429-0.17857,2.5,0.35714,2.6786,0.71429,2.3214-0.71429,1.4286-3.0357,2.1429-1.0714,3.2143-0.89286,3.2143h-3.2143l-2.3214,1.25-2.1429,3.3929-3.5714,0.53571-2.3214,1.25-1.4286,1.4286h-3.5714l-1.4286-1.0714-1.0714-2.6786-0.71429,0.53572v1.6071l-1.9643-1.4286-0.71428-1.9643-1.0714,0.71429-0.17857,1.9643,1.7857,2.1428,2.5,2.1429,2.5,1.25,3.2143,1.0714,2.1429,1.25,2.1428-0.89286,3.5714-1.7857,3.0357-0.71429,3.75-1.0714,2.3214-3.0357,3.2143-2.6786,3.3929-1.6072,2.1428-1.7857-0.17857-2.1429-0.89286-2.3214-0.17857-1.7857,2.1429-2.1429,4.2857-0.89285h3.3929l1.4286,1.4286,1.25,3.0357v2.8571,3.0357l-1.6071,1.4286-1.25,2.5,0.17857,3.5714,1.7857,1.25,3.2143,0.71428,2.1429,2.8572,1.9643,3.2143,0.53572-0.71428-0.53572-4.1072-2.5-3.2143-3.75-1.0714v-2.8571l2.3214-3.0357s1.7857-0.35714,1.9643-1.0714c0.17857-0.71428,0.17857-3.5714,0.17857-3.5714l-0.89286-3.9286-2.6786-2.6786-2.6786-3.2143-0.89286-1.4286h-2.1428s-0.53572,1.25-1.4286,1.25c-0.89285,0-2.6786-1.25-2.6786-1.25l-1.6071-1.0714-0.53571-2.5,1.4286-3.75,2.3214-3.2143,2.1428-2.6786,3.0357-1.25,0.17857-4.4643-0.17857-3.0357v-3.0357l0.17857-2.3214,1.7857-2.3214,1.4286-1.4286,2.1429-0.35715,3.2143-0.53571,2.3214-2.5,1.7857-1.0714,1.25,2.1429-1.9643,2.3214-0.89285,1.4286-1.0714,4.4643-1.25,2.5,1.25,1.7857,2.6786,2.1429h2.8571l1.4286,2.1428,2.3214,2.5,1.7857,0.35715-1.4286-2.1429v-2.5s-1.25-1.25-1.9643-1.6071c-0.71429-0.35715-3.5714-2.8572-3.5714-2.8572l-1.25-3.5714-0.17857-1.4286s1.9643-0.71428,2.6786-0.71428c0.71429,0,3.2143,0.89285,3.2143,0.89285l0.89285,1.7857,1.6072,0.17857,1.25-0.71429-0.35715-1.9643,0.17858-1.9643,1.4286-0.35714,1.6071,0.71429,1.7857,1.4286,1.25,1.0714,0.89286,1.7857-0.35714,1.7857-2.3214,2.5-3.0357,1.25,1.0714,1.4286,2.6786,2.1428,0.35714,2.8572,0.17857,3.3928-0.71429,2.6786-2.5,1.4286-2.6786,1.4286-3.5714,1.7857-2.1428,2.1429,0.35714,2.6786,1.4286,2.5,1.25,2.5,1.6071,1.0714h3.3929,2.5l1.7857,1.6071,0.53571,3.0357,0.17857,3.3928v2.8572l-1.9643,3.2143-1.7857,2.5h-2.6786l-0.71429,0.53572,0.53572,1.9643,0.71428,1.7857-0.53571,2.5-0.89286,1.25,2.3214,3.3928,0.53572,1.7857,0.35714,1.7857-1.25,1.7857-1.0714,1.25,0.89286,2.1428-0.17857,2.5-1.6072,1.6072,1.6072,1.7857,2.1428,1.9643,1.6072,1.4286-0.17858,3.3928-1.4286,2.3214-0.17857,2.6786,2.3214,2.1429,4.6429,0.89286,0.89285,1.4286-1.4286,2.1429-0.53571,3.3928-0.89286,2.3214-2.6786,1.4286s-0.89286,0.53572-1.6071,1.0714c-0.71429,0.53572-1.7857,2.8572-1.7857,2.8572l1.9643,1.7857,0.17857,2.3214-1.4286,2.1429-1.25,2.5-2.6786,2.3214-2.8572,2.8572-0.89285-1.7857-1.6072-2.1428-1.7857-1.0714-1.9643,0.71428-1.9643-0.71428-0.71429-1.6072-1.25-1.25-2.5-0.89285-2.1428-0.89286-0.71429-1.6071-0.89286-1.7857-1.4286-1.4286-2.8571-0.17857-2.5,1.4286-2.5,1.0714-2.6786,0.17857-4.1072-1.6071-3.5714-0.35714-2.1429-0.17858-0.89286-1.9643-1.0714-2.3214v-1.4286l-3.3928-0.71429-2.3214-0.53571-0.89286-2.5-0.71429-2.3214s1.4286-0.17857-1.0714-0.35714-5.5357-1.0714-5.5357-1.0714l-1.4286-0.53572-3.2143-2.5-2.5-1.6071-2.8572-1.0714-3.2143-1.25-1.25-0.89285-0.17857-2.1429-2.8572-3.9286,0.17857-6.7857-1.25-1.7857-2.3214-2.8571-1.0714-2.1429-0.53572-0.53572-1.0714,1.25-0.53571,0.71429h-1.4286l-2.6786,0.89286-1.25,0.35714-1.6072-0.35714-2.1428-2.3214-1.7857-1.6071,0.53572-0.89286,1.4286-1.6071-0.35714-1.7857-2.5-2.3214-3.0357-1.4286-4.2857,0.35714-3.0357-1.25-2.6786-0.89285-3.3929-4.2857,2.3214-2.5,2.5-3.75,0.17857-5.3571,0.35715-1.4286,3.75-1.0714,2.6786-2.5,1.4286-1.4286h3.75,3.3929l3.9286,0.53571,1.7857-1.25,3.5714-1.6071,3.3929-0.53571,2.5-1.25,2.3214-1.25,0.35714-2.8572-2.1429-2.3214-0.71428-1.25,0.53571-1.6071,2.3214-1.4286,0.35714-1.25,1.92-2.87z","name":"Yamalo-Nenets Autonomous Okrug"},"kr":{"path":"M501.66,122.41c-0.45,0.04-1,0.37-1,0.37-0.9,0.72-1.25,0.77-0.94,1.13,0.31,0.35,0.19,0.55,0.9,0.78,0.72,0.22,0.91,0.49,1.44,0,0.54-0.49,0.77-1.24,0.41-1.69s-0.37-0.64-0.81-0.59zm11.56,0.65c-0.22,0.02-0.44,0.11-0.6,0.38-0.31,0.53-0.49,1.57-0.62,1.84s-0.2,0.74-0.78,0.88c-0.58,0.13-1.39,0.54-1.75,0.09s-1.03-1.51-1.25-1.69-1.04-0.74-1.13-0.03c-0.09,0.72,0.19,1.51,0.19,1.91s-0.18,0.99-0.4,1.12c-0.23,0.14-1.06,0.25-1.29,0.56-0.22,0.32-0.62,0.49-0.62,1.16s-0.27,1.67-0.31,1.94c-0.05,0.27-0.32,0.26-0.63,0.75s-1.09,1.87-1.09,1.87,0.89,0.62,1.15,0.85c0.27,0.22,0.42,0.77,0.38,1-0.05,0.22-0.13,1.05-0.53,1.19-0.4,0.13-1.43,0-1.78-0.13-0.36-0.13-1.01-0.48-1.5-0.44-0.49,0.05-1.01,0.23-1.19,0.63s-0.71,0.38-0.13,1.18c0.58,0.81,0.87,1.53,1,1.76,0.14,0.22,0.29,1.51,0.07,1.87-0.23,0.36-1,1.13-1.22,1.53-0.23,0.4-0.44,0.71-0.22,1.16,0.22,0.44,0.66,0.8,1.15,0.94,0.5,0.13,3.66,0.71,3.66,0.71s0.28-0.36,0.81-0.71c0.54-0.36,1.36-0.77,1.85-0.41s0.52,0.8,0.65,1.25c0.14,0.45,0.41,2.02,0.5,2.37,0.09,0.36,0.49,0.58,0.94,1.16s1.59,1.37,2.22,1.59c0.63,0.23,1.05,0.55,1.72,0.6,0.67,0.04,2.85,0.82,2.94,1.09s0.31,1,0.31,1,0.54,0.52,0.81,0.56c0.27,0.05,2.22,0.19,2.22,0.19,1.38-0.76,2.23-0.8,2.5-0.94,0.27-0.13,0.84-0.03,1.37-1.06,0.54-1.03,0.76-1.35,0.63-2.06-0.13-0.72-0.34-0.93-0.87-1.6-0.54-0.66-1.5-1.24-1.1-1.56,0.4-0.31,1.56-0.8,1.88-1.15,0.31-0.36,0.54-1.32,0.4-2.35-0.13-1.02-0.15-2.5-0.47-2.9-0.31-0.41-0.73-0.92-1.4-1.19s-1.23-0.67-1.81-0.53c-0.59,0.13-1.92,0.25-2.19,0.03s-0.62-0.83-0.85-1.5c-0.22-0.67-0.5-1.13-0.5-1.53s1.16-3.63,1.16-3.63,0.71-0.29,0.84-0.56c0.14-0.27,0.36-0.76,0.22-1.66-0.13-0.89-0.39-1.55-1.28-2.09s-2.09-1.72-2.09-1.72v-0.97c0-0.35-0.15-1.73-0.28-2-0.14-0.27-0.48-0.72-0.97-0.72-0.25,0-0.5-0.05-0.72-0.03zm17.72,22.91c-0.13,0.02-0.25,0.07-0.35,0.19-0.4,0.44-0.72,1.12-0.9,1.34s-0.51,0.09-0.91,0-0.89-0.43-1.16-0.03c-0.26,0.4-0.67,0.74-0.71,1.19-0.05,0.44,0.09,1.75,0.09,2.46,0,0.72,0.09,1.8,0,2.6s-0.2,1.3-0.78,1.66c-0.58,0.35-0.91,0.4-1.31,0.93-0.41,0.54-1.13,1.25-1.13,1.88,0,0.62,0.06,1.45-0.66,2.03-0.71,0.58-1.14,0.56-0.96,1.4,0.17,0.85,0.22,0.93,0.84,1.38s2.79,0.63,3.28,0.5,1.26-0.77,1.66-1.22,1.61-0.99,2.28-1.12c0.67-0.14,1.17-0.08,2.16-0.13,0.98-0.04,1.54-0.39,2.03-0.65,0.49-0.27,0.54-0.54,1.43-0.54,0.9,0,1.74,0,2.1-0.31,0.35-0.31,1.35-1.19,1.62-1.5s0.88-1.05,0.97-1.5,0.18-1.3,0-1.75,0.15-1.15-1.19-1.28-1.57,0.07-1.84-0.38c-0.27-0.44-1.03-0.88-1.03-1.37s0.08-1.02-0.19-1.37c-0.27-0.36-0.79-0.81-1.28-0.72s-1.31,0.58-1.53,0.62c-0.22,0.05-0.71-0.09-0.85-0.4-0.13-0.32-0.21-1.11-0.21-1.91s-0.25-1.63-0.25-1.63c-0.34-0.13-0.83-0.43-1.22-0.37zm5.22,20.03c-0.62,0.05-1.16,0.75-1.16,0.75s-1.62,1.95-2.16,2.84c-0.53,0.9-0.86,1.08-1.93,1.25-1.08,0.18-1.82,1.63-1.82,1.63s-0.51,1.23-0.68,2.12c-0.18,0.9-1.25,3.07-1.25,3.07v1.93l0.87,1.63s1.6,1.05,1.78,2.12c0.18,1.08-2.12-0.68-2.12-0.68s-2.14-0.73-3.03-0.91c-0.9-0.18-1.64,0.01-3.07,0.19-1.42,0.18-1.25,0.34-1.25,0.34l0.72,1.63s1.61,1.4,1.25,2.65c-0.35,1.25-1.4-0.53-1.4-0.53l-1.97-0.87s-1.98,0.16-2.88,0.87c-0.89,0.72-1.25,0.91-1.97,0.91-0.71,0-1.59-0.71-2.12-1.78-0.54-1.08-0.91-0.91-1.63-1.44-0.71-0.54-3.2,0-4.09,0s-2.32,1.79-3.75,1.97-1.78,0.53-1.78,0.53l0.34,2.12-1.97,1.1-2.12,0.53-2.16,0.53c-0.71,0.18-2.12-0.19-2.12-0.19l-1.97-0.34-1.44,0.87-0.53,0.57-2.84,0.15-2.16,0.91s-2.49,2.13-4.09,2.31c-1.61,0.18-0.19,0.53-0.19,0.53s1.06,0.91,1.06,1.63c0,0.71-0.7,0.87-0.87,1.4-0.18,0.54-1.45-0.33-2.35-0.68-0.89-0.36-1.25,0-1.25,0s0.2,1.04,0.38,1.93c0.18,0.9,1.06,1.28,1.06,2.35s-0.19,2.12-0.19,2.12,0.53,2.69,0.53,3.41v2.69c0,0.89-0.87,1.59-0.87,1.59s-1.25,0.72-3.03,0.72c-1.79,0-0.91-0.72-0.91-0.72l0.72-0.91-0.53-1.4-1.97-0.38-2.31,1.25-1.78-0.53h-3.22-3.94c-1.43,0-1.95-1.07-2.84-1.25-0.9-0.18-2.88-0.34-2.88-0.34s-2.14-0.02-3.03,0.34-1.97,1.06-1.97,1.06v3.07,3.03s-1.6,0.69-1.78,1.4c-0.18,0.72,0.01,2.68,0.19,3.75,0.18,1.08,1.05,0.72,2.12,1.25,1.07,0.54,2.16,1.25,2.16,1.25l0.53,0.57,0.34,1.78s0.57,1.94,0.57,2.65c0,0.72,1.25,1.97,1.25,1.97s0.68,1.63,0.68,2.35c0,0.71-0.51,1.22-0.87,1.93-0.36,0.72-0.73,1.61-0.91,2.5-0.18,0.9,0,2.16,0,2.16l0.38,2.84s-0.2,2.88-0.38,3.6c-0.18,0.71-0.89,1.42-1.78,1.78s-1.25,2.12-1.25,2.12,0.01,2.7,0.19,3.6c0.18,0.89,0.88,1.42,1.59,1.78,0.72,0.36,1.25,1.78,1.25,1.78l-0.87,1.78-1.78-0.34-1.44-1.78-0.91-1.82v-2.5s-0.54-1.76-1.97-2.65c-1.42-0.9,0.19-1.63,0.19-1.63s1.08-1.25,1.44-1.97c0.36-0.71,1.06-1.78,1.06-1.78s1.8-1.6,2.16-2.5c0.35-0.89-0.38-1.4-0.38-1.4l-1.06,0.68-1.78,1.82-1.78-0.91s0.69-1.25,0.87-1.78c0.18-0.54,0.54-1.79,0.72-2.5,0.18-0.72,0.35-1.6,1.06-2.31,0.72-0.72,2.35-0.19,2.35-0.19l1.25-1.25v-1.63l-1.1-1.59s-1.4-0.17-3.9-0.34c-2.5-0.18-0.72-1.25-0.72-1.25l-0.72-1.82s-0.72-1.76-1.44-2.12c-0.71-0.36-1.94-3.04-2.65-3.75-0.72-0.72-1.1-1.44-1.82-2.16-0.71-0.71-2.11-1.78-3.18-2.5-1.08-0.71-1.97-1.4-1.97-1.4l-1.63,0.34s-1.05,1.07-0.15,2.5c0.89,1.43,1.06,1.44,1.06,1.44l1.25-0.28,0.97,0.18,1.22,0.5,1.15,1.07,1.06,0.71,0.91,1.07,0.53,0.9,0.1,0.94-0.6,1.63-1.68,1.84-1.29,0.81-1.93,0.88,0.81,1.15s2.04,1.71,2.22,1.85c0.18,0.13,0.69,0.9,0.69,0.9l0.31,2.85,0.09,2.59s-0.33,2.1-0.37,2.28c-0.05,0.18-0.63,0.88-0.63,0.88l-7.09,3.97-1.44,0.9-1.25,0.94-0.66,0.81s0.3,2.37,0.35,2.6c0.04,0.22,0.64,1.18,0.69,1.4,0.04,0.23,1.28,2.69,1.28,2.69s1.15,1.2,1.46,1.69c0.32,0.49,2.16,0.31,2.16,0.31h3.44c0.4,0,1.34,0.5,1.34,0.5s1.3,0.98,1.35,1.16c0.04,0.17,0.37,1.31,0.37,1.31l0.38,3.34s0.09,3.42,0.09,3.69-0.5,1.56-0.5,1.56l-0.34,1.22c-0.04-0.01-0.07-0.03-0.1-0.06l-1.15,2.06-1.82,1.69-1.68,0.28-1.6,0.28,0.16,1.41s1,1.98,1,2.34-0.01,1.68-0.19,2.13c-0.18,0.44-0.81,1.68-0.81,1.68l0.47,1.19,1.15,1.69,0.88,2.41,0.47,1.68-1.16,1.97-1,1.63,0.72,1.93s0.08,1.53-0.09,1.97c-0.18,0.45-1.07,1.16-1.07,1.16l-0.43,1.19s4.1,3.63,5,4.53c0.89,0.89,0.15,1.52,0.15,2.06s-0.72,2.5-0.72,2.5l-1.25,2.22,0.1,1.87s1.54,1.46,1.72,1.82c0.17,0.35,1.68,0.78,2.22,0.87,0.53,0.09,2.78,0.38,2.78,0.38l1.25,1.31-0.19,0.81-1.16,1.63-0.72,3.28s-0.8,2.07-1.15,2.34c-0.36,0.27-1.44,1.16-1.44,1.16l-2.22,1.15-1.72,2.41,0.38,0.97,1.34,1,0.25,1.78-0.81,1.78-1.25,2.78-1.5,1.41-2.31,2.34-1.72,1.6-1.5,2.25s-0.9,2.92-0.81,4c0.08,1.07,0.96,0.72,0.96,0.72s1.62,1.07,2.16,1.34,1.51,0.99,1.78,1.34c0.27,0.36,1,1.24,1,1.69v1.53l-0.81,0.88-1.25,0.81-3.41,1.25-1.69,0.34-2.4-0.25s-1,0.43-0.91,0.78c0.09,0.36,0.72,1.63,0.72,1.63s0.45,1.24,0.63,1.69c0.17,0.44,0.27,0.88,0.72,1.06,0.44,0.18,0.09,2.97,0.09,2.97s-0.89,2.3-1.16,2.75c-0.27,0.44-0.46,1.25-0.37,1.87,0.09,0.63,0.72,1,0.72,1s1.7,0.69,2.06,0.78,2.94,1.1,2.94,1.1,3.13,0.72,3.84,0.72,2.58,0.06,3.56,0.15,2.5,1,2.5,1,1,0.87,1.53,1.41c0.54,0.53,0.25,4.64,0.25,5s2.88,0.19,3.5,0.28c0.63,0.09,2.32,0.81,2.32,0.81s0.43,1.33,0.43,1.69-0.43,1.88-0.43,1.88l-1.78,0.9-3.47,1.5-0.57,1.06s-1.13,4.74-1.4,5.19,0.53,1.88,0.53,1.88l1.5,0.62,2.25,1.06s3.47,2.25,4.09,2.79c0.63,0.53-0.09,0.96-0.09,0.96l-0.97,1.82-5.44,4.72-0.72,1.96-0.18,1.5s-0.44,3.58-0.44,3.94,0.34,1.53,0.34,1.53,1.81,1.15,2.25,1.5c0.45,0.36,1.88,1,1.88,1l0.72,1.41s0.79,1.54,1.06,2.34c0.27,0.81-0.72,0.97-0.72,0.97l-3.56,2.94-1.97,0.91s-1.35,1.33-1.44,1.87,0.81,0.97,0.81,0.97l0.97,1.44,1,1.34s1.95,0.73,2.75,0.91c0.81,0.17,1.63-0.57,1.63-0.57s1.42-1.95,2.4-2.22c0.99-0.26,0.53,0.46,1.07,0.72,0.53,0.27,1.96,0.61,2.59,0.88s2.22,1.34,2.22,1.34l0.81,2.06,1.78,7.41,0.82,2.5-1.26,4.13s0.1,2.05,0.19,2.4c0.09,0.36,0.8,1.24,1.07,1.6,0.26,0.35,0.43,2.15,0.43,2.15l-0.97,1.35-2.4,1.5-1.1,1.78s-2.3,3.32-2.65,3.59c-0.36,0.27-2.06,1.14-2.6,1.41-0.53,0.27-2.06,1.44-2.06,1.44s0.27,1.06,0.63,1.15c0.35,0.09,0.53,2.16,0.53,2.16l0.81,1.06,1.88-0.44,3.21,0.78,2.5,0.91s1.25,0.88,1.79,1.06c0.53,0.18,3.4-0.44,3.4-0.44s5.87-2.32,6.31-2.59c0.45-0.27,1.72-1.06,1.72-1.06s2.5-1.89,3.03-2.25c0.54-0.36,3.74-2.14,4.1-2.41,0.35-0.27,1.44-1.78,1.44-1.78l0.9-2.12s0.16-1.99,0.25-2.44,0.53-1.5,0.53-1.5l0.72-1.25,2.16-0.19,3.12,0.44,2.32,0.19s3.57,0.1,4.37-0.35c0.8-0.44,0.45-0.72,0.63-1.34,0.17-0.63-0.27-0.9-0.63-1.35-0.36-0.44-1-1.33-1.53-1.78-0.54-0.44-1.25-1.15-1.25-1.15s-2.31-4.22-2.31-4.75c0-0.54,0.81-1.15,2.15-1.69s3.91-0.97,3.91-0.97l2.06-1.19-0.09-2.65,0.47-1.78s1.16-2.8,1.25-3.07c0.09-0.26,1.51-2.93,1.68-3.56,0.18-0.62,0.62-1.79,1.07-2.59,0.44-0.81,1.62-1.68,2.15-2.03,0.54-0.36,1.68-1.91,2.13-2.44,0.44-0.54,1.09-2.22,1.09-2.22l-0.19-4.09s-2.13-2.42-2.4-3.22c-0.27-0.81,0.07-1.43,0.34-1.78,0.27-0.36,1.61-1.88,1.97-2.5,0.36-0.63,0.81-2.53,0.81-2.97,0-0.45,0.98-1.5,1.88-2.13,0.89-0.62,2.83-0.18,3.28,0s1.09,0.81,1.72,1.35c0.62,0.53,3.28,0.68,3.28,0.68s1.07-1.42,1.25-1.87,0.98-1.77,1.25-2.22,1.53-1.07,2.25-1.16c0.71-0.09,1.69,0.63,1.69,0.63s0.97,1.78,1.15,2.31c0.18,0.54,1.18,1.61,1.53,1.97,0.36,0.36,1.26,1.8,1.35,2.16,0.09,0.35,1.06,0.33,2.22,0.15s0.09-1.4,0.09-1.4v-2.16s-0.62-2.16-0.62-2.78c0-0.63,0.71-1.78,0.71-1.78s2.5-0.8,3.03-1.06c0.54-0.27-0.08-1.17,0.1-1.97,0.18-0.81,1.33-1.7,1.69-1.88,0.35-0.18,2.96-0.61,3.4-0.87,0.45-0.27,1.41-1.25,1.41-1.25l0.62-2.69,0.28-2.88s-0.02-0.11-0.03-0.12c0.09-0.06,0.32-0.22,0.32-0.22l1.31,0.19s0.6-0.58,1.31-0.94c0.72-0.36,0.79,0.03,0.97,0.03s0.68,1.11,0.81,1.47c0.14,0.36,0.36,1.26,0.41,1.53,0.04,0.27,1.38,0.68,1.56,0.72s1.55,0.47,1.81,0.56c0.27,0.09,1.66,1.08,1.97,1.44,0.32,0.36,1.04,0.45,2.38,0.94s1.53-0.28,1.53-0.28l0.65-0.63s0.23-1.4,0.32-1.94c0.09-0.53,0.72-0.87,0.72-0.87s1.51-1.22,1.87-1.63c0.36-0.4,0.5-0.87,0.5-0.87s0.34-2.99,0.16-3.13c-0.18-0.13-1.38-0.71-1.78-0.84-0.41-0.13-1.6-1.46-2-2.13-0.41-0.66,0.3-1.16,0.43-1.43,0.14-0.27,1.41-1.06,1.63-1.28,0.22-0.23,1.06-0.78,1.59-1,0.54-0.23,0.27-2.9,0.22-3.35-0.04-0.44-0.7-0.44-1.81-0.62-1.12-0.18-1.97-0.85-1.97-0.85s-1.52-1.52-2.19-2.28-0.22-2.76-0.22-3.03,0.17-4.1,0.13-4.9c-0.05-0.81,0.54-1.63,0.72-1.85s2.37-0.49,2.59-0.53,1.9-0.99,2.35-1.34c0.44-0.36,0.59-1.19,0.59-1.19s-0.37-1.3-0.5-1.75c-0.14-0.45,0.72-1.65,1.03-1.88,0.31-0.22,1.91-1.37,1.91-1.37s1.07-6.86,1.25-7.13c0.17-0.26-0.32-1.59-0.32-1.59s-1.19-3.62-1.28-3.84c-0.09-0.23-0.68-1.65-0.5-2.32s1.27-1.02,1.41-1.25c0.13-0.22,0.07-0.97-0.16-1.15-0.22-0.18-1.03-1.16-1.03-1.16s0.58-3.41,0.63-3.81c0.04-0.4,0.28-1.69,0.28-1.69l1.22-0.84s3.79-0.07,4.06-0.07,2.03-0.79,2.44-1.06c0.4-0.27,0.13-1.66,0-1.84-0.14-0.18-1.19-1.94-1.19-1.94h-2.28l-2.5,0.06-2.1-0.43-1.03-0.41s-2.49-0.25-2.72-0.25c-0.22,0-1.5-0.16-1.5-0.16l-0.65-0.25s-0.13-1.6-0.13-1.87,0.48-0.55,1.07-0.91c0.58-0.35,0.93-0.94,0.93-0.94s-0.17-0.98-0.43-1.34c-0.27-0.36-0.1-0.97-0.1-0.97s2.29-2.76,2.38-2.93c0.09-0.18,0.62-1.04,0.62-1.04s0.89-1.56,1.06-2.18c0.18-0.63-0.59-1.16-0.59-1.16s-3.42-4.04-3.78-4.44-1.14-1.64-1.31-1.9c-0.18-0.27-0.91-1.24-1-1.69s0.31-1.41,0.31-1.41l1.09-3.47-0.56-1.06s-1.07-0.96-1.16-1.09c-0.09-0.14-1-0.75-1-0.75s-0.63-0.55-0.5-0.91c0.14-0.36,1.36-0.56,1.63-0.56s2.31-0.69,2.31-0.69,1.39-0.56,1.56-0.78c0.18-0.22-0.03-1.16-0.03-1.16s-1.56-17.7-1.56-18.06-0.65-1.56-0.78-1.78c-0.14-0.22-2.19-2.34-2.19-2.34l-0.72-5.16h0.06s1.85,0.06,2.47,0.06c0.63,0,0.97-0.84,0.97-0.84l2.5-2.06,1.53-1.38s0.57-0.52,0.88-0.56c0.31-0.05,1.26,0.58,1.44,0.62,0.17,0.05,1.47,0.6,1.47,0.6s0.99-0.52,1.43-0.66c0.45-0.13,0.75-0.62,0.75-0.62l-0.31-5.94,4.16-2.16s0.93-1.1,0.93-1.28,0.57-1.87,0.57-1.87l4.47-3.1s1.78-2.23,2.18-2.5-0.03-0.62-0.03-0.62l-1.25-1.85s-1.07-1.29-1.78-1.47c-0.71-0.17-0.91-1.09-0.91-1.09l0.29-5-0.6-0.47-2.84-2.31-3.41-2.69-0.72-1.97-0.34-1.4-1.06-1.78,0.15-0.91,1.25-2.69-1.4-1.4-1.63-1.97-0.72,1.59s-1.43-0.53-2.5-0.53-1.06,1.44-1.06,1.44-1.95,0.71-2.84,1.25c-0.9,0.53-1.25,1.78-1.25,1.78s-1.45,1.25-2.16,1.25-2.14,0.01-3.03,0.19c-0.89,0.17-1.43,1.41-1.97,2.12-0.54,0.72-1.44,2.33-2.16,2.69-0.71,0.36-0.71,0.34-1.78,0.34s-0.16-0.7,0.38-2.31c0.53-1.61,1.95-1.79,2.31-2.5s0.72-1.78,0.72-1.78l2.5-0.91s0.54-3.02,1.44-3.37c0.89-0.36,3.75-0.53,3.75-0.53s1.22-1.63,1.4-2.35c0.18-0.71,1.44-1.58,1.97-2.65,0.54-1.08,0.72-1.79,0.72-2.5,0-0.72,0.91-1.82,0.91-1.82l2.5-2.12s1.58-1.6,1.93-2.31c0.36-0.72,2.16-1.97,2.16-1.97l2.16-1.97,2.31-2.5s0.19-1.44,0.19-2.16c0-0.71-0.72-1.78-0.72-1.78s-1.26-0.9-1.97-1.44c-0.72-0.53-1.78-0.7-1.78-1.59s0.16-0.72,0.34-1.44c0.18-0.71,0.72,0,0.72,0l1.44,1.1,0.15-1.25-0.15-2.35-0.53-1.97-2.69-0.68-1.78-1.1h-2.16c-0.71,0-0.52-0.69-0.87-1.4-0.36-0.72-0.37-1.62-0.91-2.69s-2.31-0.19-2.31-0.19l-1.78,0.91c-0.72,0.35-0.73,0.52-1.44,1.06-0.72,0.54-1.61-0.37-3.22-0.91-1.61-0.53-1.77,0.02-2.84,0.38-1.08,0.36,0.17,0.88,0.53,1.59,0.35,0.72,0,1.44,0,1.44l-2.35-0.19s-1.06-0.35-1.78-1.25c-0.71-0.89,0.19-1.06,0.19-1.06s1.25-1.43,1.25-2.5-0.72-1.25-0.72-1.25h-2.69c-1.25,0-1.96-0.17-3.03-0.34-1.07-0.18-1.25-0.37-1.97-1.44-0.71-1.07,0.57-0.53,0.57-0.53l1.4-1.25,1.25-0.72,2.69,0.34s0.9,0.56,1.97,0.38,0.19-0.72,0.19-0.72l-1.63-1.06s-1.77,0.34-2.84,0.34-2.16-0.72-2.16-0.72l-1.97-0.87s-1.41-1.45-2.12-1.63c-0.09-0.02-0.2-0.04-0.28-0.03zm-45.94,3.34c-0.85,0.32-1.23-0.03-1.5,0.82-0.27,0.84-0.34,0.96,0.16,1.18,0.49,0.23,0.87,0.53,1.4,0.44,0.54-0.09,1.24-0.47,1.06-1.09-0.17-0.63-1.12-1.35-1.12-1.35zm20.84,3.82c-0.33,0-0.47,0.12-0.94,0.56-0.62,0.58-1.62,1.37-1.71,1.9-0.09,0.54,0.12,0.96-0.19,1.54s-1.55,1.81-2,2.12-2.51,0.16-2.6,0.47c-0.08,0.31-0.37,0.52,0.04,0.87,0.4,0.36,2.91,0.63,3.72,0.54,0.8-0.09,3.3-0.3,3.74-0.35,0.45-0.04,0.71,0.28,0.66-0.43-0.04-0.72-0.72-1.36-0.4-1.85,0.31-0.49,0.6-0.65,0.78-0.97,0.17-0.31,0.49-1.06,0.31-1.47-0.18-0.4-0.72-0.95-0.72-1.53s-0.28-1.37-0.28-1.37c-0.18-0.01-0.3-0.04-0.41-0.03zm-45.53,6.62c-0.49,0-2.1,0.86-2.19,1.13-0.09,0.26-0.56,0.38,0.07,0.97,0.62,0.58,0.39,0.88,1.15,0.84,0.76-0.05,1.55-0.67,2.22-0.63,0.67,0.05,1,0.79,1.31,0.79,0.32,0,0.62-0.23,0.66-0.72s-0.42-0.89-0.59-1.07c-0.18-0.17-0.54-0.18-0.54-0.18-0.31-0.45-1.6-1.13-2.09-1.13zm-2.06,6.25c-0.54,0.18-1.01,0.45-1.5,0.63-0.49,0.17-0.81,0.17-1.13,0.43-0.31,0.27-0.72,0.46-0.72,0.82,0,0.35,0.15,0.5,0.6,0.81s0.52,0.62,1.19,0.62,1.89-0.5,2.03-0.81c0.13-0.31,0.48-0.94,0.53-1.25,0.04-0.31-1-1.25-1-1.25zm-51.31,9.13l-2.35,2.12-0.34,1.78,1.97,0.38,1.25,0.87h2.5l1.25-0.87v-1.78l-1.63-2.16-2.65-0.34zm59.09,4.4c-0.49,0.14-1.47,0.59-1.25,1.03,0.22,0.45,0.5,0.8,0.91,0.75,0.4-0.04,0.74-0.01,0.87-0.5,0.14-0.49-0.22-1.25-0.22-1.25l-0.31-0.03zm97.34,1.78c-0.09,0.01-0.18,0.07-0.28,0.22-0.38,0.6-0.53,1.69-0.4,2.1,0.12,0.41-0.42,0.87,0.12,1.31s0.62,1.22,1.53,1.25c0.92,0.03,1.9,0.47,2.63-0.06,0.72-0.54,1.43-1.69,1.65-2.19,0.22-0.51,0.32-1.22,0.07-1.53-0.26-0.32-0.62-0.81-1.13-0.88-0.5-0.06-1.19,0.16-1.19,0.16-1.07,0.31-0.99,0.66-1.78,0.31-0.59-0.26-0.92-0.72-1.22-0.69zm-135.37,0.22l-1.97,0.19-1.44,1.44,0.53,1.06,1.63-0.91,1.44,0.57,0.34,1.59,1.25,0.34,0.72-0.87-0.53-1.06-1.97-2.35zm27.09,1.13c-0.49,0.01-1.04,0.1-0.9,0.5,0.17,0.53,1.09,0.75,2.03,0.75s2.97,0.08,3.06,0.44c0.09,0.35,0.68,1.56,0.91,1.65,0.22,0.09,0.92,0.13,0.97-0.41,0.04-0.53-0.44-1.13-0.76-1.4-0.31-0.27-2.09-1.25-2.09-1.25-0.45-0.09-2.24-0.28-2.78-0.28-0.13,0-0.27-0.01-0.44,0zm10.31,1.12c-0.71,0.23-0.93,0.25-0.93,0.88,0,0.62-0.1,1.06,0.43,1.15,0.54,0.09,0.85,0.33,1.26,0.07,0.4-0.27,0.59-0.91,0.37-1.22s-1.13-0.88-1.13-0.88zm-44.71,1.16l-1.44,1.25,0.72,0.87,1.78-1.06-1.06-1.06zm6.4,2.31v1.78l2.35-0.53v-1.25h-2.35zm133.35,1.5c-1.05,0.29-1.25,0.28-2.07,0.6-0.82,0.31-1.49,0.24-1.87,0.74-0.38,0.51-0.44,0.28-0.66,1.29s-0.69,0.99,0.1,1.31c0.79,0.31,1.39,0.29,2.31-0.41,0.91-0.69,1.71-1.09,2.19-1.65,0.47-0.57,0.84-1.19,0.84-1.35s-0.84-0.53-0.84-0.53zm-122.41,0.5c-0.4,0.63-0.65,1.16-0.87,1.56-0.23,0.41-0.68,0.77-1.13,1.66s-0.81,1.32-0.81,2.03c0,0.72,0.24,1.18,0.68,1.41,0.45,0.22,0.34,0.5,0.57,0.5,0.22,0,0.82,0.09,1.31,0s1.03-0.19,1.03-0.5v-1.88c0-0.53-0.31-3.37-0.31-3.59s-0.47-1.19-0.47-1.19zm-16.47,0.69l-1.06,0.87v1.25l1.44,0.57,0.87-1.25-1.25-1.44z","name":"Krasnoyarsk Krai"},"tm":{"path":"m424.64,359.43,1.25,3.2143,1.25,2.3214s-0.53571,2.3214-0.71428,3.0357c-0.17857,0.71429-1.6071,3.0357-1.6071,3.0357s0.53571,1.25,1.6071,1.9643c1.0714,0.71429,5.8929,1.7857,5.8929,1.7857l5.3571,0.17857s3.75,0.89285,4.1071,1.6071c0.35714,0.71429,0.89286,1.0714,0.89286,2.1429,0,1.0714,0.35714,4.2857,0.35714,4.2857s1.25,0.35714,2.6786,0.35714,3.0357,0.35715,3.0357,0.35715,0.35714,2.1428,0.35714,2.6786c0,0.53571-0.89286,1.7857-1.9643,1.7857s-3.75,1.6072-3.75,1.6072-1.25,2.6786-1.25,3.75-0.89285,3.5714-0.53571,4.2857c0.35714,0.71429,4.4643,1.7857,5.1786,2.1429,0.71429,0.35714,3.2143,2.6786,3.2143,2.6786s-0.71429,1.6071-1.6072,2.6786c-0.89285,1.0714-4.1071,3.0357-5.3571,4.6429-1.25,1.6071-0.35714,2.8571-0.35714,2.8571l-0.71429,1.6071-3.2143,0.53572-3.2143,0.35714-1.4286-1.6071-1.9643-0.17857-4.66-0.57h-2.3214l-1.25,1.0714s-2.1429,1.0714-3.2143,1.25c-1.0714,0.17857-5.3571,1.25-6.0714,1.25-0.71428,0-6.4286,0.71429-6.4286,0.71429l-3.3928,1.4286h-2.3214l-0.35715-1.9643,0.71429-2.1429-0.35714-2.3214,1.7857-2.3214-0.53571-1.4286s-1.0714-0.17858-1.9643,0.53571c-0.89286,0.71429-4.4643,1.0714-4.4643,1.0714l-4.2857-0.17857-1.9643-2.3214-0.89286-3.0357s-1.25-1.0714-2.6786-0.71428c-1.4286,0.35714-1.6072,1.25-2.6786,1.25s-2.5,0-3.0357-0.89286c-0.53571-0.89286-0.89285-3.0357-0.89285-3.0357l-0.9-2.33s-1.6071-0.89286-2.5-1.6071c-0.89286-0.71429-3.2143-2.3214-3.2143-2.3214l-5.1786-2.3214-4.2857-1.9643-4.6429-1.7857-2.6786-1.0714-1.7857-2.5v-3.0357l1.6072-2.8572,0.35714-1.7857-0.53571-2.3214,1.25-3.0357,0.71428-3.3929,1.9643-1.0714,3.3928-2.8571s0-2.1429,0.71429-2.3214c0.71429-0.17857,5.7143-1.6071,5.7143-1.6071l1.9643-1.7857,1.25-2.6786,2.5-1.6071,1.6071-3.2143s1.0714-1.0714,1.7857-1.7857c0.71428-0.71429,2.1428-1.4286,2.1428-1.4286l1.9643-0.35715,2.1429,1.7857,2.1428,1.0714,2.5,0.35714,2.8572,1.4286,1.0714,1.6071,3.0357,0.89286h3.3929l2.1428,0.35714,1.25,1.6072,2.6786,0.71428,2.3214,0.71429,2.1429,1.7857,1.25-0.89286,1.7857-0.53571,2.1428-1.4286,2.1429-0.17857,1.6071,0.71428,1.7857,0.89286z","name":"Tomsk Oblast"},"nv":{"path":"m341.43,421.57,4.1071,0.71429l4.4643-0.17858c1.25-0.17857,2.1429-0.71428,2.1429-0.71428l-2.14,3.4h-3.0357l-0.89285,2.1428s1.0714,1.9643,1.7857,2.5c0.71429,0.53572,2.6786,3.0357,2.6786,3.0357l0.53572,2.1428,2.3214,0.35715h1.4286s2.6786,0.35714,3.3928,0.35714c0.71429,0,0.89286,0,1.9643-0.35714,1.0714-0.35715,3.2143-0.71429,4.6429-0.71429h3.5714s2.6786,0.17857,3.5714-0.35714c0.89286-0.53572,0.89286-1.0714,2.3214-1.25,1.4286-0.17857,3.0357-0.17857,3.9286-0.17857,0.89286,0,1.9643-0.17857,1.9643-0.17857s0,1.6071,0.89286,2.1428c0.89285,0.53572,4.1071,2.6786,4.1071,2.6786l0.71428,0.71429c0.17858,0.71429-0.17857,2.5-0.17857,3.2143,0,0.71428-1.0714,0.71428-0.17857,1.6071,0.89286,0.89286,1.9643,1.4286,1.9643,1.4286l2.3214-1.9643,2.3214-2.3214s2.1429-0.53572,2.8572-0.53572c0.71428,0,3.0357,0,3.75-0.17857,0.71428-0.17857,1.4286-0.71429,2.6786-0.17857,1.25,0.53571,2.3214,0.71428,3.3929,0.71428,1.0714,0,3.5714-1.25,3.5714-1.25s1.7857-2.1428,1.9643-2.8571c0.21-0.7-0.33-4.45-0.33-4.45v-3.75c0-0.71429,0.71428-2.3214,1.25-2.6786,0.53571-0.35714,1.7857-0.89285,1.7857-1.7857,0-0.89286-0.89286-1.6071-0.89286-1.6071s-0.89285-0.53572-0.89285-1.4286c0-0.89286,0.35714-3.2143-0.53572-3.0357-0.89285,0.17857-4.1071,1.7857-4.1071,1.7857s0,0.17857-1.4286,0.17857-2.5,0-2.6786-0.71429c-0.17857-0.71428,0.35714-5,0.35714-5l0.53571-2.6786,0.17858-2.1429-2.8572,1.4286s-1.6071,0.53572-2.5,0.71429c-0.9,0.18-4.47-0.71-4.47-0.71l-2.1429-0.71428-1.4286-2.1429-1.4286-2.8571s-2.5,0.53571-3.2143,0.71428c-0.71428,0.17858-1.9643,0.53572-1.9643,0.53572l-2.3214-1.25-1.0714-3.3929v-1.25l-3.0357-1.7857s-1.9643-1.6072-2.6786-2.1429c-0.71428-0.53571-3.3928-1.7857-3.3928-1.7857s-3.3929-1.25-4.1072-1.6072c-0.71428-0.35714-1.9643-1.25-2.6786-1.6071-0.71428-0.35714-3.9286-1.4286-3.9286-1.4286l-1.9643,0.17857s-0.35715,1.0714-0.53572,1.9643c-0.17857,0.89285-1.0714,2.3214-1.0714,2.3214l-1.4286,1.0714-0.89286,1.6072,0.17858,2.1428-0.71429,1.4286h-3.2143l-2.5-0.35714-2.1428,0.89286-2.1429,2.3214-1.4286,1.9643-0.71429,2.6786,0.71429,1.9643,1.7857,2.6786v1.7857l-2.1428,3.5714z","name":"Novosibirsk Oblast"},"al":{"path":"m351.25,435.14,1.7857,5,1.7857,5.1786,1.6071,6.7857,0.89286,8.5714,0.35714,8.2143,0.35714,2.8571,2.3214-0.53571,1.7857-0.53572,0.89285-0.53571,0.17857-1.9643,1.25-1.6071,1.25-0.35714,1.7857,0.53571,0.89286,1.9643,0.89285,2.8571,2.3214,2.8571,1.9643,1.6071,4.6428,0,3.3929-0.35714,2.5-0.89286,2.3214,0,3.3929,1.4286,1.0714,1.9643,2.3214,0.53572,2.3214-0.53572-0.17857-1.4286-1.6071-1.0714-1.0714-0.89286,0.35714-1.6071,0.71429-0.35714,2.5-0.35714,4.4643-0.71429,3.75-0.17857,2.6786-0.71429,2.3214-1.9643,1.0714-1.9643s0.53572-0.71428,1.25-0.71428c0.71429,0,3.3929-0.17858,3.3929-0.17858l1.9643-0.17857,1.0714-1.7857s0.53572-2.1429,1.25-2.5c0.71429-0.35714,0.89286-2.3214,0.89286-2.3214l0.71429-2.1429-0.35715-1.0714-0.71428-1.0714,0.71428-0.89286,1.25-0.53571-0.17857-1.0714-1.4286-1.6072-1.0714-1.0714c-0.17857-0.71429-0.89286-2.8572-0.89286-2.8572l-1.7857-1.7857-0.17857-0.89286-0.53572-2.1429-1.6071-1.4286-2.5-1.9643-1.74-1.79s-1.6072,1.0714-2.3214,1.4286c-0.71429,0.35715-1.7857,0.71429-1.7857,0.71429l-2.5,0.17857-2.5-0.35714-3.0357-0.17857-4.8214,0.71428-2.5,1.6072-1.6071,1.7857-1.0714,0.71429-0.89286,0.35714-1.4286-1.25-0.35714-0.89286,0.35714-0.89286,0.17857-1.7857-0.17857-1.4286-2.3214-1.6071-1.9643-1.25-1.0714-1.25-0.17857-0.89286-1.9643-0.17857-4.2857,0.17857-1.25,1.25-2.1429,0.53571-3.75-0.53571-4.2857,0.17857-2.6786,1.25h-2.5l-3.3929-0.17857z","name":"Altai Krai"},"km":{"path":"m442.14,414.79-0.71428,2.3214,0.89286,1.6072,2.5,1.4286,1.7857,1.6071,1.25,2.5,0.17857,0.89286s-0.89286,1.4286-1.6071,2.1429c-0.71429,0.71428-4.2857,2.3214-4.2857,2.3214l-1.7857,1.7857-1.7857,1.7857v1.6072l1.0714,1.7857,0.17858,1.7857-1.9643,2.5s-1.25,1.0714-1.0714,1.7857c0.17857,0.71428,1.0714,1.4286,1.7857,1.6071,0.71428,0.17857,2.8571,0.89286,2.8571,0.89286l-0.71429,1.4286-1.25,1.7857-0.53571,1.6072-1.7857,0.71428-1.4286,1.6072,0.71429,1.25,1.25,1.25-0.89286,2.5-1.25,1.6071,0.53572,1.25,1.7857,1.7857-0.35714,1.6072-1.6072,1.9643-2.5,2.1429h-1.9643l-0.71429-1.7857-1.9643-1.25-2.6786-0.35714-1.4286,1.0714-2.1428-1.4286-0.71429-2.3214-1.0714-0.71429,0.17857-2.5-0.53571-2.5,0.89286-1.9643,0.71428-1.6071-2.1428-2.6786-1.6072-2.6786-1.25-1.4286-0.71428-2.3214-0.89286-1.7857-2.3214-2.1429-1.7857-1.6071-0.71429-1.25v-1.7857l-0.35714-4.6428,0.17857-2.5,0.71429-2.3214,1.25-1.4286,0.71428-1.25-1.4286-1.9643v-0.89286l-0.35714-2.5,1.6071-0.35714,4.4643-0.53571,2.5-0.89286,3.0357-0.89286,1.0714-0.35714,0.71428-0.89286h1.6072,1.9643,2.5l1.7857,0.35715,1.4286,0.35714,0.89286,0.89286,1.9643,0.53571,1.6071-0.17857,2.5-0.71429z","name":"Kemerovo Oblast"},"lt":{"path":"m392.32,478.89-0.44643,2.1428s-0.17857,1.875,0,2.5893c0.17857,0.71429,1.1607,2.3214,1.1607,2.3214l3.3036,0.89286s0.98215,1.1607,1.0714,1.6071c0.0893,0.44643,0.0893,3.3036,0.0893,3.3036s0.17857,0.89286,0.53571,1.6071c0.35715,0.71429,1.25,1.875,1.7857,2.2322,0.53571,0.35714,1.6071,1.25,2.4107,1.3393,0.80357,0.0893,3.125,0.0893,3.5714,0.0893,0.44643,0,4.0179,0.0893,4.0179,0.0893s1.0714,0.53572,1.6071,0.89286c0.53571,0.35714,1.4286,1.25,1.7857,1.875,0.35715,0.625,1.5179,1.6964,2.0536,1.9643,0.53571,0.26785,1.1607,0.80357,1.7857,1.1607,0.625,0.35714,1.6964,0.71429,2.4107,0.80357,0.71429,0.0893,2.9464-0.44643,3.3929-0.71428,0.44643-0.26786,2.3214-0.89286,3.4821-0.89286s4.7322-0.35714,5-0.44643c0.26786-0.0893,3.5714-1.3393,4.1964-1.3393s1.4286-0.89285,1.6071-1.25c0.17858-0.35714,0.625-1.9643,0.17858-2.7678-0.44643-0.80357-0.80358-1.0714-1.4286-1.4286-0.625-0.35715-1.4286-1.25-1.25-1.7857,0.17858-0.53571,1.9643-1.1607,2.4107-1.1607,0.44643,0,2.5,1.0714,2.5,0.26785,0-0.80357-1.6964-2.2321-1.6964-2.2321s-0.98214-1.3393-1.25-1.7857c-0.26786-0.44643-1.875-1.9643-1.875-1.9643s-2.2321-2.7679-2.0536-4.1071c0.17857-1.3393-0.0893-3.3929-0.0893-3.3929s-0.625-1.3393-0.71428-1.6964c-0.0893-0.35714-1.3393-0.17857-1.3393-0.17857l-1.5179,1.5179s-1.4286-0.26786-1.5178-0.80357c-0.0893-0.53572-0.71429-2.5893-0.71429-2.5893s-0.35714-1.7857-0.44643-2.1429c-0.0893-0.35714-0.17857-1.9643-0.17857-1.9643l1.6964-1.3393,2.8571-1.3393,0.35715-1.1607-1.3393-1.6071-0.80357-0.625-2.1429-0.53571-1.9643,0.98214s-1.0714-0.625-1.4286-0.80357c-0.35714-0.17857-1.0714-0.89286-1.0714-0.89286l-0.89286-1.7857s0-1.0714-0.71429-0.89286c-0.71428,0.17857-0.89285,0.71428-0.89285,0.71428s-1.1607,1.1607-1.1607,1.5179c0,0.35714-0.625,1.4286-0.625,1.4286l-0.98214,1.0714s-1.6071,0.44643-1.9643,0.44643h-3.0357c-0.35714,0-1.1607,0.71429-1.5179,1.0714-0.35714,0.35714-1.1607,1.9643-1.1607,1.9643l-1.5179,1.0714-0.98214,0.625-2.3214,0.71429h-2.3214l-4.1071,0.71428-4.1071,0.625-1.0714,0.625-0.0893,0.98215s0.0893,0.89285,0.53572,0.98214c0.44642,0.0893,1.6071,0.80357,1.6071,0.80357l0.44643,0.89286-0.0893,0.89286-1.875,0.625z","name":"Altai Republic"},"tv":{"path":"m431.96,477.02,0.26786-1.6964s0.89286-0.625,1.6071-0.625c0.71429,0,1.6964,0.71428,2.4107,0.89286,0.71428,0.17857,2.7678,0.71428,3.0357,0.71428,0.26786,0,1.0714-0.80357,1.3393-1.25,0.26785-0.44643,1.9643-2.6786,1.9643-2.6786s0-1.25,0.625-1.6071c0.625-0.35715,1.875-0.35715,2.3214-0.35715,0.44643,0,1.6071-0.17857,2.3214,0.26786,0.71429,0.44643,1.1607,3.0357,1.1607,3.0357s0.89286,0.89285,1.1607,0.89285c0.26786,0,2.1429-0.80357,2.1429-0.80357s1.4286,0.17857,1.7857,0.44643c0.35714,0.26786,3.0357,0.89286,3.0357,0.89286s1.6964,1.6071,2.2322,1.6071c0.53571,0,1.6964,0.26786,2.6786-0.0893,0.98214-0.35714,2.8571-0.80357,3.3929-1.25,0.53571-0.44642,5.5357-1.9643,5.9821-2.5,0.44643-0.53571,7.0536-5.9821,7.0536-5.9821l2.1429-2.8571s-0.17857-1.875-0.17857-2.9464,1.0714-2.3214,1.4286-2.5893c0.35714-0.26785,2.8571,0.0893,3.3036,0.17858,0.44643,0.0893,4.375,0.89285,4.7321,0.80357,0.35714-0.0893,4.2857-0.44643,4.2857-0.44643l2.4107-2.2321s1.5179-0.35715,2.4107,0.0893c0.89286,0.44643,3.6607,2.5,4.1964,2.7679,0.53572,0.26786,3.75,2.3214,3.75,2.3214l1.6072,1.5178s1.25,0.71429,1.7857,0.44643c0.53571-0.26785,2.3214-0.89285,2.3214-0.89285l1.6071,0.53571,0.35714,1.25s0.53572,0.89286,0.53572,1.25-0.89286,1.6071-0.89286,1.6071-0.71428,0.53572-0.80357,1.1607c-0.0893,0.625-0.26786,4.1071-0.26786,4.1071s-0.0893,2.3214-0.0893,2.7679c0,0.44643-0.71429,2.1428-0.71429,2.1428l-1.4286,2.4107s-1.5179,1.3393-1.875,1.875c-0.35714,0.53571-2.2321,1.3393-2.4107,1.6964-0.17858,0.35714-0.71429,1.875-0.71429,1.875s-0.71429,1.875-0.71429,2.4107c0,0.53572-0.0893,3.3929-0.0893,3.9286,0,0.53572,0.53571,2.5,1.0714,3.2143,0.53571,0.71428,1.25,1.6071,1.25,2.0536,0,0.44643-0.80357,2.3214-1.1607,2.7679-0.35714,0.44643-4.8214,4.1964-4.8214,4.1964l-2.0536,1.25-2.1428,0.17857s-1.7857-0.98215-2.1429-0.89286c-0.35714,0.0893-2.3214,0.17857-2.6786,0.17857-0.35715,0-1.7857-0.89286-1.7857-0.89286s-1.6964-0.35714-2.1428-0.625c-0.44643-0.26785-1.7857-1.1607-1.7857-1.1607s-2.7679-0.26786-3.2143-0.26786c-0.44643,0-2.8572-0.17857-3.2143-0.53571l-2.0536-2.0536s-0.71429-1.4286-0.80357-1.9643c-0.0893-0.53571-0.17857-2.5-0.17857-2.5s-0.80358-0.80357-1.3393-1.25c-0.53571-0.44643-2.1429-0.89286-2.9464-0.89286-0.80357,0-3.9286,0.17858-3.9286,0.17858s-1.9643,0.53571-2.2321,0.625c-0.26786,0.0893-1.25,0.71428-1.875,0.80357-0.625,0.0893-2.0536,0.0893-1.9643-0.80357,0.0893-0.89286,1.25-1.6964,1.3393-2.0536,0.0893-0.35714-0.0893-1.0714-0.71429-1.3393-0.625-0.26786-2.1429-0.17857-3.0357,0.0893-0.89286,0.26786-2.3214,0.80358-2.8572,0.89286-0.53571,0.0893-3.3928,0.71429-3.3928,0.71429s-2.1429,0.89285-2.6786,1.0714c-0.53572,0.17857-3.8393,1.1607-3.8393,1.1607l-3.0357,1.5179-2.4107,1.1607-2.5893-0.26786-2.1429-0.98214-1.5179-0.71428-1.25-1.25c0-0.44643,0.35714-0.98215,0.35714-0.98215l2.4107-0.44643,1.7857,0.53572s1.25-0.35714,0.17857-1.0714c-1.0714-0.71429-4.4643-5.0893-4.4643-5.0893l-1.48-2.44s-1.0714-1.4286-1.0714-1.7857v-2.5893z","name":"Tuva Republic"},"hk":{"path":"m440.27,432.11c0.53572,0.35715,1.9643,1.875,1.9643,1.875l1.3393,1.6072s0.26785,0.625,1.1607,0.80357c0.89286,0.17857,2.0536,0.17857,2.0536,0.17857s0.35714-0.35714,0.80357-0.80357,0.625-0.98214,0.98215-1.25c0.35714-0.26786,0.89285-0.89286,1.3393-0.80357,0.44643,0.0893,0.71429,0.26785,1.3393,0.71428,0.625,0.44643,1.3393,1.25,2.2321,1.25,0.89286,0,2.5,0.80357,2.5,0.80357s0.44643,1.875,0.625,2.3214c0.17857,0.44643,0.53571,2.9464,0.53571,2.9464s0.35715,1.5179,0.71429,2.4107c0.35714,0.89285,0.98214,2.0536,1.0714,2.4107,0.0893,0.35714-0.0893,3.125-0.17857,3.3929-0.0893,0.26785-0.80357,1.875-0.89286,2.2321-0.0893,0.35714,0,2.5893,0,2.5893l1.5179,1.5179,0.625,1.875s-1.25,1.4286-1.4286,1.6964c-0.17858,0.26786-2.2322,1.3393-2.5893,1.875-0.35714,0.53571-1.4286,3.0357-1.4286,3.0357s-1.6071,1.9643-2.1429,2.2322c-0.53571,0.26785-2.8571,1.0714-3.125,1.5178-0.26786,0.44643-1.6964,1.6964-1.6964,1.6964l-2.7678,0.0893s-1.3393,0.17857-1.6072,0.625c-0.26785,0.44643-0.53571,1.4286-1.0714,1.875-0.53571,0.44643-1.0714,1.25-1.1607,1.6071-0.0893,0.35714-0.89286,1.0714-0.89286,1.0714s0.0893,0.71429-1.0714,0.625c-1.1607-0.0893-2.9464-0.35714-2.9464-0.35714l-1.7857-1.1607-1.6071,0.44643-0.625,0.80357-0.26786,0.89286-2.5,1.0714s-0.625,0.89286-1.1607,0.35714c-0.53572-0.53571-1.25-2.3214-1.25-2.3214l-0.625-2.5893v-1.5179s0.17857-1.0714,0.53571-1.25c0.35714-0.17857,2.5-1.6071,2.5-1.6071s1.3393-0.98215,1.6964-1.0714c0.35714-0.0893,2.1429-0.44643,2.1429-0.44643l1.9643-1.0714,1.5179-2.0536,1.3393-1.0714-0.44643-1.6071s-1.25-1.25-1.4286-1.6071c-0.17858-0.35715-0.44643-1.25-0.44643-1.25l1.6071-2.2322,0.0893-1.875s-1.0714-1.1607-1.1607-1.5178c-0.0893-0.35715-0.0893-1.25-0.0893-1.25l2.5893-1.5179,1.0714-1.875,1.1607-1.9643,0.53572-1.6964-3.5714-1.1607s-0.89286-1.25-0.71429-1.7857c0.17858-0.53572,1.7857-2.4107,1.7857-2.4107s0.89286-1.875,0.89286-2.3214c0-0.44642-1.0714-2.8571-1.0714-2.8571s0-0.71428,0.26785-1.1607c0.26786-0.44643,1.25-0.98215,1.25-0.98215z","name":"Republic of Khakassia"},"ir":{"path":"M569.41,325.78c-0.12,0.03-0.22,0.12-0.22,0.34,0,0.45,0.53,1.54,0.53,1.54l0.37,1.06s-0.26,0.88-0.62,1.06-1.78,0.63-1.78,0.63l-2.69,0.09s-1.61,0.26-1.88,0.44c-0.26,0.18-0.9,0.73-0.9,1.09s-0.44,1.96-0.53,2.31c-0.09,0.36-0.16,1.97-0.16,1.97s0.18,0.78,0.63,1.41c0.44,0.62,0.43,1.81,0.43,1.81l-1.25,1.16s0.26,1.67,0.35,2.03,1,3.4,1,3.4l0.43,2.5s-0.28,1.42-0.28,1.69-0.96,4.57-0.96,4.57-0.09,0.98-0.54,1.24c-0.44,0.27-2.06,1.88-2.06,1.88s-0.19,0.99-0.19,1.34c0,0.36,0.37,1.06,0.19,1.5-0.18,0.45-1.97,1.72-1.97,1.72l-2.59,0.72-1.31,0.88-0.29,3.84-0.09,2.22v1.81c0,0.36,0.27,1.34,0.72,1.78,0.45,0.45,2.16,1.97,2.16,1.97l2.21,0.53,1.16,0.78,0.1,2.25s-0.37,1.33-0.82,1.5c-0.44,0.18-2.75,1.82-2.75,1.82l-0.53,1.15,0.97,1.16,1.97,1.59s0.78,0.1,0.87,0.72c0.09,0.63-0.15,2.6-0.15,2.6l-0.47,1.43-1.25,1.07-1.41,1.43-0.19,1.6-1.24,0.81-2.79-0.28-1.59-1.35-1.78-0.68-2.25-0.63s-0.45-0.74-0.63-1.19c-0.17-0.44-0.34-1.68-0.34-1.68l-1.25-0.72-1.87,1-1.26,0.09-0.18,1.69-0.35,2.41-0.53,1.53-0.9,0.97-1.6,0.53s-1.89,0.28-2.25,0.37c-0.35,0.09-1.34,1.41-1.34,1.41s-0.53,0.8-0.44,1.15c0.09,0.36,0.19,1.25,0.19,1.25l-1.16,0.91-2.06,0.81s-0.44,0.9-0.44,1.25c0,0.36,0.16,1.97,0.16,1.97l0.37,1.5,0.1,1.63s0.7,0.7,0.43,1.06c-0.26,0.36-2.78,0.62-2.78,0.62l-1.93-2.78-1-1.5-1.07-2.34-1.06-0.69h-1.72l-1.59,1.69s-0.89,0.81-1.16,1.44c-0.27,0.62,0.01,1.78-1.15,1.78s-3.22-0.38-3.22-0.38l-1.25-1.15-1.97-0.44-1.34-0.19s-0.62,0.64-0.97,0.91c-0.36,0.27-1.35,1.25-1.35,1.25v0.62l-0.72,1.88-1.15,2.22-0.81,0.9-0.29,1.35,0.63,1.68s0.45,0.9,0.81,1.25c0.36,0.36,0.63,0.35,0.72,0.97,0.09,0.63,0.19,2.6,0.19,2.6l-0.38,2.4-0.97,1.88s-1.88,1.79-2.15,2.06-2.13,1.61-2.13,1.97-1.62,4.19-1.62,4.19l-1.25,2.25s-0.69,2.11-0.78,2.56-0.63,3.59-0.63,3.59-0.09,1.33-0.62,1.6c-0.54,0.26-3.69,0.81-3.69,0.81s-2.12,1.07-2.56,1.34c-0.45,0.27-0.72,0.63-0.72,0.63s-0.19,0.52-0.1,0.87c0.09,0.36,1.16,2.25,1.16,2.25l1.44,2.66,1.06,0.56,0.97,1.06,1.09,1.69v0.81l1.25-0.43s0.9-0.91,1.25-1c0.36-0.09,1.78,0.28,1.78,0.28l1.44,0.87s1.43,0.91,1.78,1c0.36,0.09,2.03,1.41,2.03,1.41l4.32,2.87s0.34,0.82,1.06,0.82c0.71,0,2.41-0.38,2.41-0.38l1.78-0.34,1.06,1.15,0.28,1.16,0.28,1.53,2.56-0.81,2.44-2.41s2.14-2.16,3.13-2.34c0.98-0.18,2.12,1.19,2.12,1.19s0.72,1.58,1.25,2.03c0.54,0.44,2.43,2.32,2.78,2.59,0.36,0.27,3.03,1.53,3.03,1.53l2.22,2.66c0.45,0.53,2.52,3.22,2.97,3.22s2.84,0.18,3.38,0.09c0.53-0.09,1.96,0.63,2.5,1.25,0.53,0.63,1.78,2.69,1.78,2.69s1.27,1.69,1.62,1.78c0.36,0.09,1.16,1.88,1.16,1.88s0.89,1.62,1.25,1.53,2.31-0.63,2.31-0.63,0.73,0.15,0.91,0.69c0.18,0.53,0.87,2.59,0.87,2.59s1.18,0.62,1.53,0.53c0.36-0.09,1.88-1.25,1.88-1.25s1.77-0.26,2.12-0.43c0.36-0.18,1.44-0.82,0.82-1.44-0.05-0.04-0.11-0.06-0.16-0.09,0.05-0.01,0.34-0.07,0.34-0.07l1.69-0.62,8.75-2.88s1-1.76,1-2.03,0.63-2.06,0.63-2.06l0.06-2.06,0.81-0.82,1.78-0.96,2.25-0.82,1.16-1.68,1.06-0.82,5.44-2.59,1.62-1.31,0.82-1.1,0.62-2.5,1.94-1.15s1.27-0.9,1.62-1.35c0.36-0.44,0.35-0.97,0.35-0.97l-0.63-0.81-1.25-1.25-0.34-0.81s0.18-0.96,0.62-1.41c0.45-0.44,0.71-0.63,1.07-0.72,0.35-0.09,1.25,0.35,1.25,0.35l1,1.09,0.87-0.47,0.63-1.78s0.81-2.14,0.9-2.5,0.25-1.69,0.25-1.69-0.25-3.05-0.25-3.5v-2.5s0.44-4.01,0.53-4.37,0.35-2.13,0.35-2.13l-0.1-1.87s-0.44-1.17-0.62-1.44-0.16-0.81-0.16-0.81,0.63-1.05,0.72-1.41c0.09-0.35-0.37-0.81-0.37-0.81s-0.54-0.71-0.72-1.06c-0.18-0.36-0.88,0.15-0.88,0.15l-1.44,0.91s-0.79,1.26-1.15,1.53-0.44,1.31-0.44,1.31l-0.28,4.38-0.81,1.34-1.53-0.09c-0.34-0.63-0.73-1.32-0.79-1.6-0.08-0.44-0.43-2.67-0.34-3.65s0.97-4.38,0.97-4.38l1.25-1.25s0.09-1.52-0.53-2.06c-0.63-0.53-1.87-1.07-2.41-1.34-0.53-0.27-1.72-1.35-1.72-1.97,0-0.63,0.92-1.77,1.19-2.13,0.27-0.35,3.93-1.51,4.28-1.78,0.36-0.27,3.57-2.15,3.57-2.15l3.65-1.07,2.78,0.25,2.13-0.34,1.34-2.5,2.88-0.81s1.87,1.25,2.4,1.25c0.54,0,2.22-0.72,2.22-0.72s1.07,0.64,1.25,1,1.63,1.34,1.63,1.34l1.93-0.37s1.35-0.44,2.07-0.35c0.71,0.09,1.7,0.98,2.06,1.07s2.75-0.72,2.75-0.72l1.09-1.5,2.5-1.16s1.35-1.08,1.35-1.53,0.15-3.22,0.15-3.22,1.25-0.61,1.88-0.97c0.62-0.35,2.15-0.18,2.15-0.18s0.17-1.34,0.35-1.79c0.18-0.44,1.33-1.34,1.78-1.43s2.44,0.37,2.44,0.37l1.15,0.97-1.34,1.44-0.72,1.15,0.72,0.72s2.31-0.45,2.94-0.72c0.62-0.26,2.24-0.44,2.78-0.53,0.53-0.09,2.84-1.15,2.84-1.15s0.91-1.08,0.91-1.44-0.2-1.71-0.38-2.16c-0.18-0.44-2.21-1.14-2.65-1.59-0.45-0.45-0.54-2.58-0.72-2.94s-0.9-1.9-0.63-2.44c0.27-0.53,1.06-1.78,1.06-1.78l-0.62-2.5s-0.01-2.48,0.34-2.84c0.36-0.36,2.07-1,2.07-1l2.93,0.81s0.9,1.15,1.35,1.06c0.44-0.09,2.15-0.53,2.15-0.53l0.25-3.56-0.87-1.16s-1.27-1.42-1.63-1.68c-0.35-0.27-1.25-1.25-1.25-1.25l-1.68-2.97-0.25-2.6-0.72-1.68-2.25-0.54-1.78,0.97-3.13,1.53-1.97,0.44-0.72-0.72-0.78-2.84-1-1.59-2.75-2.35-2.34-1.68-2.66-0.91-2.78-0.06s-2.49,0.8-2.84,1.15c-0.36,0.36-1.45,1.52-1.72,1.88-0.27,0.35-0.88,2.5-0.88,2.5l-0.28,2.12v2.5s-0.17,1.36-0.43,1.72c-0.27,0.36-3.94,2.03-3.94,2.03l-1.16,1.72-0.19,2.66-0.97,2.25-2.15,2.22s-0.6,0.63-0.69,0.09-0.62-2.22-0.62-2.22l-2.16-2.34s-0.44-1.23-1.06-0.78c-0.63,0.44-1.63,1.31-1.63,1.31l-3.28,1s-0.89,0.43-1.25,0.87c-0.36,0.45-2.97,0.72-2.97,0.72l-2.03,0.28-2.16,2.5s-0.62,1.26-1.24,0.82c-0.63-0.45-2.22-2.35-2.22-2.35l-0.82-1.59-0.53-2.94,0.16-5.56-0.06-2.56,1.5-2.6,1.87-3.03s0.44-1.61,0.44-2.06-0.53-3.03-0.53-3.03l-2.03-2.25-4.94-3.66s-0.63-0.71-0.63-1.25c0-0.53,0.1-2.31,0.1-2.31l1.15-1.97s0.63-0.35,0-1.06c-0.62-0.72-3.18-4.57-3.18-4.57l0.15-5.34s0.02-0.65-0.34-1.09c-0.36-0.45-2.59-3.28-2.59-3.28l-1.54-1.88s-0.24-0.62-0.68-0.62c-0.45,0-2.16,0.68-2.16,0.68s-1.17,0.82-1.44,0.29c-0.27-0.54-0.25-2.6-0.25-2.6s-0.29-1.16,0.16-1.25,1.62-0.44,1.62-0.44h1.5l0.29-1.43-1.79-1.97-1.53-1.35-1.4-0.06s-0.14-0.03-0.25,0z","name":"Irkutsk Oblast"},"br":{"path":"m513.39,476.39s1.6072,0.98214,2.3214,1.1607c0.71429,0.17857,2.8572,1.25,3.3929,1.3393,0.53571,0.0893,1.7857,0.71428,2.5,0.98214,0.71429,0.26786,1.875,0.98214,2.5893,1.3393,0.71428,0.35714,2.2321,0.53571,3.2143,0.625,0.98214,0.0893,2.8571,0.89285,3.4821,1.0714,0.625,0.17858,2.1429,1.0714,2.9464,1.1607,0.80357,0.0893,1.5179,0,2.7679,0.625s2.7679,1.3393,3.125,1.5179c0.35714,0.17857,0.71429,0.26785,0.80357,0.98214,0.0893,0.71428,0,2.6786,0.0893,3.0357,0.0893,0.35715,0.26785,1.6964,0.625,2.0536,0.35714,0.35715,1.6071,1.9643,2.5893,2.5893,0.98215,0.625,1.4286,1.6964,1.9643,2.1429,0.53571,0.44643,2.3214,1.875,2.8571,1.9643,0.53572,0.0893,2.3214,0.625,2.7679,0.625,0.44643,0,5.0893,0.44643,5.0893,0.44643s1.7857-0.80357,2.7679-1.25c0.98214-0.44643,4.0179-1.25,4.4643-1.5179,0.44643-0.26785,1.5178-0.98214,2.6786-1.0714,1.1607-0.0893,4.1964-0.0893,5.0893-0.0893,0.89286,0,4.1072,0.0893,4.1072,0.0893s2.3214-0.0893,3.125,0.44642c0.80357,0.53572,1.6071,1.6072,1.9643,2.1429,0.35715,0.53572,0.625,1.4286,1.0714,1.6071,0.44643,0.17858,1.4286,0.35715,1.875,0.35715,0.44643,0,2.1429-0.26786,2.5-0.35715,0.35714-0.0893,2.2321-0.44642,2.2321-0.44642l0.0893-2.6786s-0.0893-1.7857,0.53571-2.0536c0.625-0.26785,4.4643-1.5178,4.8214-1.6964,0.35715-0.17857,1.25-1.6071,1.25-1.6071s-2.5-0.625-3.3036-0.625c-0.80357,0-1.25-1.4286-1.25-1.4286l1.0714-1.5179,0.17857-1.9643,0.98214-1.0714,0.80358-1.3393s-0.625-0.98214-0.80358-1.3393c-0.17857-0.35715-0.0893-1.4286-0.0893-1.4286l2.2321-1.1607,3.125-0.35714,2.4107-1.1607,3.4821-2.4107,1.7857-0.625s1.4286,0.0893,1.875,0.26786c0.44643,0.17857,2.4107,0.53571,2.5893,0.17857,0.17857-0.35714,1.6071-1.9643,2.0536-2.3214,0.44643-0.35714,2.6786-2.1429,2.6786-2.1429l1.4286-1.1607s0.98215-1.25,1.4286-1.5179c0.44643-0.26786,1.875-1.0714,2.4107-1.0714,0.53571,0,0.98214,0,1.3393-0.26785,0.35715-0.26786,1.1607-1.25,1.3393-1.6072,0.17857-0.35714,1.0714-0.80357,1.6071-0.89285,0.53572-0.0893,5-1.3393,5-1.3393l2.6786-1.5179s1.875-1.5178,2.0536-1.875c0.17857-0.35714,1.6071-2.8571,1.6071-2.8571l0.98214-1.875s-0.26786-1.4286-0.71428-1.7857c-0.44643-0.35715-2.1429-1.6072-2.1429-1.6072l-2.5-1.25s-1.25-0.80357-1.1607-1.6071c0.0893-0.80357,7.5-5.625,7.5-5.625s0.98215-1.6964,1.0714-2.0536c0.0893-0.35714,0.89286-1.9643,1.25-2.3214,0.35715-0.35714,2.5-2.0536,2.5-2.0536s1.4286-0.625,1.875-0.71429c0.44643-0.0893,3.5714-1.5178,3.5714-1.5178l1.25-0.98215s0.44643-2.0536,0.44643-2.5893c0-0.53572-0.80357-3.8393-0.80357-3.8393s-1.0714-0.53571-1.4286-0.89285c-0.35715-0.35715-1.25-0.80358-2.1429-0.80358-0.89286,0-2.6786,0-3.125-0.625-0.44643-0.625-1.3393-1.25-1.6964-1.875-0.35714-0.625-1.1607-1.7857-1.25-2.2321-0.0893-0.44643-0.80357-2.4107-0.98214-2.7679-0.17857-0.35714-1.0714-2.3214-1.0714-2.3214l-2.0536-3.5714-1.0714-2.7679,0.26786-2.0536,1.0714-0.625,0.80357-1.25,1.4286-1.875,0.625-0.98214-2.3214-1.25s-1.875,0.44642-2.2321,0.71428c-0.35715,0.26786-0.98215,1.3393-0.98215,1.3393s0.35715,0.625,0,0.80357c-0.35714,0.17857-2.3214,0.44643-2.3214,0.44643l-1.25,0.89285-0.71429,1.9643v1.6071l-0.98214,0.98215-2.0536,1.0714-1.3393,0.98215-1.1607,1.3393s-1.6964,0.0893-2.0536,0.0893c-0.35714,0-2.0536-0.625-2.0536-0.625l-2.6786,0.17857-2.3214-0.0893-1.9643-1.4286-1.4286,0.26786-2.0536-0.35714s-0.80357-0.71429-1.1607-0.71429c-0.35714,0-2.1429,0.625-2.1429,0.625l-1.5178,1.3393-0.98215,1.0714-2.6786,0.26785-1.9643-0.0893-2.3214,0.44643-2.2322,1.1607-3.3928,1.7857-2.3214,0.98215-1.3393,0.89285-0.89285,1.1607s-0.0893,0.35714,0.0893,0.71428c0.17857,0.35715,0.98214,1.4286,0.98214,1.4286l1.6072,0.80357,0.98214,0.89285,0.83,0.91,0.0893,1.1607-1.6071,2.1428-0.35714,2.2322-0.35715,1.875v2.6786l0.80358,1.6071,1.1607,1.4286s0.26786-0.44643,0.71429-0.80357c0.44642-0.35714,1.1607-2.3214,1.1607-2.3214v-2.0536l0.0893-2.0536,0.98214-1.875,1.6964-1.25,1.1607-0.17857,0.89286,1.1607s-0.0893,1.25-0.26786,1.6964c-0.17857,0.44643-0.53571,0.98214-0.35714,1.3393,0.17857,0.35714,0.89286,1.4286,0.89286,1.4286l-0.17858,2.7678s-0.35714,2.3214-0.35714,2.6786c0,0.35714-0.26786,2.5893-0.26786,3.0357v2.5893c0,0.89285,0,1.5178,0.0893,2.1428s0.0893,1.6964-0.0893,2.1429c-0.17857,0.44643-0.44642,1.25-0.71428,1.9643-0.26786,0.71428-0.35714,1.25-0.44643,1.9643-0.0893,0.71429-1.0714,1.6964-1.0714,1.6964s-0.71428,0.26786-0.98214-0.625-1.6071-0.98214-1.6071-0.98214-0.71429,0.44642-1.0714,0.98214c-0.35715,0.53571-0.89286,1.25-0.35715,1.6964,0.53572,0.44643,1.5179,1.6071,1.5179,1.6071s0.625,0.35714,0.26786,1.1607c-0.35714,0.80358-1.1607,1.0714-1.6964,1.4286-0.53571,0.35714-1.5179,0.89285-1.6964,1.25-0.17857,0.35714-0.71428,1.4286-0.71428,1.7857,0,0.35714-0.44643,2.0536-0.44643,2.0536l-1.3393,0.98214-1.875,1.3393s-2.2321,0.71429-2.6786,0.98214c-0.44643,0.26786-2.5,1.4286-2.8571,1.7857-0.35715,0.35714-0.53572,1.25-1.4286,1.6071-0.89286,0.35714-3.125,1.3393-3.125,1.3393l-0.98215,0.26785s-0.35714,0.80357-0.35714,1.1607c0,0.35714-0.26786,2.2321-0.26786,2.7678,0,0.53572-0.26785,0.98215-0.625,1.6964-0.35714,0.71429-0.98214,1.6964-1.6071,1.7857-0.625,0.0893-2.7679,0.71428-3.2143,0.89285-0.44642,0.17858-2.5,0.89286-3.0357,0.98215-0.53571,0.0893-2.8571,1.0714-2.8571,1.0714l-0.71429,0.80357-1.5179,1.1607-2.0536,0.71429-1.4286,0.80357-1.6964-1.0714-0.35714-0.98214-0.44643-1.25s-0.35714-0.35715-1.25-0.26786c-0.89286,0.0893-2.0536,0.44643-2.0536,0.44643s-1.3393-1.4286-1.6071-1.875c-0.26786-0.44643-1.875-3.125-1.875-3.125l-1.54-1.99-1.34-1.61s-1.1607-0.71429-1.6964-0.71429c-0.53571,0-2.6786-0.17857-3.0357-0.17857-0.35715,0-1.6072-0.89285-1.7857-1.1607-0.17857-0.26786-3.4821-4.2857-3.4821-4.2857l-1.875-0.89285-2.8571-1.9643-1.9643-2.2321-1.0714-1.6964-0.89286-0.625s-0.89285-0.26786-1.25,0.0893c-0.35714,0.35714-0.80357,0.53571-1.3393,0.89285-0.53572,0.35715-1.875,1.4286-1.875,1.4286l-1.3393,1.25-1.9643,1.1607-1.4286,0.89286s-0.89286,1.0714-0.98215,1.6071c-0.0893,0.53571-0.26785,1.1607-0.26785,2.0536,0,0.89286-0.35715,3.3036-0.35715,3.3036z","name":"Buryat Republic"},"zb":{"path":"m588.41,500.07s1.1364,1.1364,1.6415,1.5152c0.50508,0.3788,1.6415,1.6415,2.2728,1.894,0.63134,0.25254,2.6516,1.6415,2.6516,1.6415s2.9042,1.0102,3.4093,1.0102h5.5558c1.1364,0,3.283,0.75762,3.283,0.75762s0.88388,0.63134,2.0203-0.25254c1.1364-0.88389,2.3991-1.6415,2.3991-1.6415s0.75762,0.25254,1.6415,0.63135c0.88388,0.3788,1.5152,1.2627,2.1466,1.2627,0.63135,0,3.4093-1.7678,3.4093-1.7678s2.6516-2.2728,3.1567-2.7779c0.50507-0.50508,2.5254-0.88388,3.5355-1.2627,1.0102-0.37881,5.4296-0.50508,5.4296-0.50508s1.894-1.2627,2.2728-1.894c0.37881-0.63135,1.7678-3.4093,1.894-3.9143,0.12627-0.50508,2.7779-2.3991,3.4093-2.9042,0.63135-0.50508,4.9245-2.5254,5.177-3.0305,0.25253-0.50508,2.0203-1.5152,2.0203-1.5152l3.1567,1.2627,2.9042,1.2627s2.2728,0.25254,2.9042,0.25254c0.63135,0,2.2728-0.50508,2.7779-0.88388,0.50508-0.37881,3.1567-1.7678,3.1567-1.7678s3.283,0.25254,3.7881,0.50508c0.50508,0.25253,1.7678,0.88388,2.3991,1.1364,0.63135,0.25254,3.9144,1.389,3.9144,1.389s3.6618,0.3788,4.4194,0.25254c0.75762-0.12627,2.5254-1.7678,2.7779-2.3991,0.25254-0.63134,0.75762-2.3991,1.6415-2.9042,0.88388-0.50507,4.2932-1.5152,4.2932-1.5152s1.389-0.12627,1.5152-1.6415c0.12627-1.5152,0.37881-2.9042-0.25254-3.5355-0.63135-0.63134-1.389-0.88388-1.7678-1.7678-0.3788-0.88389,0.88389-8.9651,0.88389-8.9651l1.6415-3.7881,1.2627-4.2932s1.389-2.2728,1.2627-2.9042c-0.12627-0.63134-0.37881-3.9143-0.37881-3.9143l-1-2.41s-1.1364-0.88388-1.5152-1.389c-0.37881-0.50507-1.0102-0.37881-1.5152-1.0102-0.50508-0.63135-1.7678-1.1364-1.7678-1.7678,0-0.63134-0.25254-1.5152,0.37881-2.0203,0.63134-0.50508,3.0305-3.0305,3.7881-3.4093,0.75761-0.37881,4.5457-2.5254,4.9245-3.0305,0.37881-0.50507,1.389-1.6415,1.7678-2.1466,0.37881-0.50508,0.88388-0.50508,0.63135-1.6415-0.25254-1.1364-2.6516-3.5355-2.6516-3.5355s-0.63135-0.88389-1.5152-0.88389c-0.88389,0-3.1567-0.3788-3.1567-1.0102,0-0.63134-0.37881-1.2627-0.12627-2.0203,0.25254-0.75762,2.0203-2.2728,2.2728-2.9042,0.25254-0.63135,0.37881-1.894,0.37881-1.894l-2.3991-1.6415-2.6516,0.12627s-0.25254-0.25253-0.25254-0.88388c0-0.63134,0.63135-2.7779,0.88388-3.283,0.25254-0.50507,0.50508-1.5152,0.63135-2.1466,0.12627-0.63134-0.25254-1.7678-0.75761-2.3991-0.50508-0.63135-1.5152-1.389-1.5152-1.389s-1.1364-0.50508-1.6415,0.12627c-0.50508,0.63134-1.1364,1.5152-1.1364,1.5152s-1.1364,0.12627-1.6415-0.25254c-0.50508-0.37881-0.88388-4.1669-0.88388-4.1669s-0.88389-1.2627-1.6415-1.389c-0.75762-0.12627-1.6415-0.12627-2.1466,0.50508-0.50507,0.63134-1.0102,1.0102-1.7678,1.5152-0.75762,0.50508-1.2627,1.1364-1.894,0.75762-0.63134-0.37881-1.389-0.75762-1.2627-1.389,0.12627-0.63135,0.75761-1.6415,0.88388-2.1466,0.12627-0.50507-1.7678-2.1466-1.7678-2.1466l-3.283-0.12627-1.1364-1.1364c-0.12627-0.75761,0.25254-2.5254,0.25254-2.5254l-1.389-1.5152-2.7779-4.0406-1.2627-1.894-3.1567-0.3788-1.1364-2.0203-0.25254-2.9042-1.2627-0.3788h-1.2627l-1.6415,0.63134-1.6415-1.0102-3.0304-0.63135-1.894,0.75762-0.37881,1.0102-0.12627,1.894,0.37881,1.894-0.25254,1.5152-0.50507,2.0203,0.75761,2.0203,0.50508,1.389,1.7678,1.5152,0.88389,0.88388,0.25254,1.894s-0.25254,1.0102-0.75762,1.389c-0.50507,0.37881-3.0305,1.2627-3.0305,1.2627s-2.3991,0.63134-2.9042,0.75761c-0.50508,0.12627-3.4093,0.75762-3.4093,0.75762l-1.389,1.5152-0.25254,1.6415,0.75762,2.5254,1.7678,3.283,1.6415,3.7881,0.75762,2.9042,2.0203,2.2728,1.2627,1.1364,2.1466,0.25254,2.2728,0.50507,1.7678,1.389,0.50507,1.6415,0.12627,1.894v2.3991l-1.894,1.6415-3.0305,1.2627-2.5254,1.2627-2.1466,2.0203-1.0102,1.7678-0.75761,2.1466-2.6516,1.6415-1.894,1.389-2.0203,1.5152-0.88388,0.88388v0.75762l0.88388,0.88388c0.50508,0.12627,2.1466,1.2627,2.1466,1.2627l1.894,1.0102s0.75762,0.88389,0.88389,1.389c0.12627,0.50508,0,1.5152-0.12627,2.1466-0.12627,0.63134-2.0203,3.6618-2.0203,3.6618l-1.894,1.6415-3.6618,2.0203-3.1567,0.63135-2.1466,1.0102s-0.75761,0.37881-1.1364,1.0102c-0.3788,0.63135-1.6415,1.2627-1.6415,1.2627l-2.2728,0.50507-1.0102,0.88388s-1.2627,0.88389-1.6415,1.389c-0.37881,0.50508-3.5355,2.9042-3.5355,2.9042l-0.88389,1.389s-0.75761,1.1364-1.389,1.2627c-0.63134,0.12627-2.2728,0.12627-2.2728,0.12627l-2.3991-0.88388-1.6415,1.389s-1.6415,0.37881-2.1466,0.88388c-0.50508,0.50508-2.7779,1.7678-2.7779,1.7678l-2.3991,0.63134s-1.894-0.25253-2.5254,0.12627c-0.63134,0.37881-1.2627,1.5152-1.2627,1.5152l0.63135,1.5152,0.25254,0.88388-0.88389,1.894s-1.0102,0.75762-1.0102,1.2627-0.88388,2.0203-0.88388,2.0203-0.50508,0.88388,0.25253,1.389c0.75762,0.50507,2.5254,0.88388,2.5254,0.88388s1.389-0.12627,1.5152,0.50508c0.12627,0.63134-1.1364,1.6415-1.1364,1.6415l-2.6516,0.75762-2.0203,1.2627-0.88389,1.6415z","name":"Zabaykalsky Krai"},"am":{"path":"m662.32,397.46,4.6429-0.17857,2.3214-0.17858,3.5714-1.7857,2.6786,0.35714,3.5714,1.0714,2.1429,1.0714,2.6786,0.53571,4.4643-0.53571,3.0357,0,2.3214,0.53571,2.8571,2.1429,2.1429,0.89286,2.8571,0.35714,2.3214-1.7857,2.3214-0.71429,1.9643,0,2.1429,1.4286,2.1429,0.71429,2.5-0.71429,1.7857-1.9643,1.7857-1.25,4.1072,0,2.5-1.4286,2.1428-0.89286,3.75,0,1.4286,0,1.25-0.71429,0.53571-2.5,1.6071-1.0714,4.2857-2.3214,2.3214-0.89286,3.5714-1.9643,2.8572-1.4286,5-0.89286,3.0357,0,1.6071,1.4286l-0.37,3.2s-1.25,1.6071-1.9643,2.6786c-0.71429,1.0714-1.6072,2.6786-1.9643,3.3929-0.35714,0.71429-1.25,2.1429-1.25,2.1429s-0.53571,2.8571-0.71429,3.5714c-0.17857,0.71428-1.0714,2.8571-1.0714,2.8571s-1.25,1.7857-1.0714,2.5c0.17857,0.71428,1.25,1.25,1.25,1.25l0.89285,0.71428,3.2143-0.71428s1.7857-0.17857,2.6786-0.17857c0.89286,0,2.5,0.89285,2.5,0.89285l0.53572,1.9643,0.89285,2.6786s0.17857,0.53572,1.6072,0.53572,2.6786-1.4286,2.6786-1.4286l0.17857-2.3214s1.0714-0.89286,1.9643-0.89286c0.89286,0,2.5-0.53572,2.5-0.53572l1.25-2.1428,0.35715-2.5,1.9643-1.7857,2.3214,0.17857c0.71,0.19,3.03-1.6,3.03-1.6l1.4286-1.4286s0.89285-1.0714,1.9643-0.35714c1.0714,0.71428,2.3214,2.5,2.3214,2.5v2.8571l0.53572,1.6071,1.9643,1.7857s1.6071,0.71428,1.25,1.6071c-0.35714,0.89286-2.8571,1.9643-3.5714,1.9643-0.71428,0-3.5714,0.89285-3.5714,0.89285l-1.6071,0.17857-1.96,0.89s-0.71429,0.17857-0.17858,1.0714c0.53572,0.89286,1.9643,1.7857,1.9643,1.7857l1.25,0.89286,0.35714,1.9643-3.2143,2.3214-1.6072,3.0357-0.17857,2.1429-1.6071,2.3214-2.6786,0.89285-1.6071,1.4286,1.9643,1.9643,0.35714,1.7857-2.3214,2.3214-1.25,3.5714,1.6071,2.8571s3.5714,1.4286,4.2857,1.6072c0.71429,0.17857,4.8214,0.71428,4.8214,0.71428s1.4286,0.71429,1.9643,1.25c0.53571,0.53572,0.71428,3.2143,0.71428,3.2143l0.35715,2.5s0,0.53571,0.71428,1.0714c0.71429,0.53571,0,3.5714,0,3.5714l-0.71428,2.8571-0.53572,1.7857-1.25,1.7857-3.2143,0.35714-4.1072-0.17857-2.8571-1.4286-1.77-0.53-3.04,1.07h-3.3929-2.5l-3.2143,0.89286s-2.6786-0.35714-3.5714-0.53572c-0.89286-0.17857-3.5714-2.1428-3.5714-2.1428l-3.22-2.67-1.07-2.15-1.43-2.14-1.7857-1.0714-1.0714-1.9643s0-1.0714-0.71428-1.6072c-0.71429-0.53571-2.6786-0.71428-2.6786-0.71428l-0.89286-1.25-1.7857-2.8571-1.9643-2.5s-1.25-1.4286-1.9643-1.6072c-0.72-0.18-1.79-0.36-2.15-1.43-0.35715-1.0714-2.3214-2.6786-2.3214-2.6786l-2.8572-1.4286-2.6786-1.4286-3.0357-0.17857-2.6786-0.17858s-0.71429,0.89286-1.6072,1.0714c-0.89285,0.17857-4.4643-0.35714-4.4643-0.35714l-3.5714-1.25-2.3214,0.35714-1.9643,0.89286-1.6072,1.4286-3.75,0.71429s-3.2143,0.71428-3.3928,0c-0.17858-0.71429-2.8572-4.1072-2.8572-4.1072l-1.7857-1.4286h-1.6071l-1.0714-1.0714v-2.1428l2.1428-2.1429,0.17858-1.4286-0.89286-1.4286-1.25-0.89286-2.1429-0.17857s-0.71428,1.0714-0.71428,0,0.71428-3.3929,0.71428-3.3929l0.89286-2.3214-0.35714-1.9643-1.25-1.7857-1.7857-0.71428-1.25,0.71428-1.25,0.71429-1.25-0.17857s-0.35714-0.71429-0.35714-1.4286c0-0.71429-1.25-2.6786-1.25-2.6786l-0.71429-0.71428-1.7857-0.17857-0.89286,0.89285-1.4286,0.89286-2.5,0.53572s-0.35714-0.35715-0.17857-1.0714c0.17857-0.71429,0.71428-2.5,0.71428-2.5l-1.25-1.4286-0.51-0.52-1.79-0.18h-2.1429l-0.35714-1.0714v-2.1429z","name":"Amur Oblast"},"ch":{"path":"M876.72,53.094c-0.34,0-0.66,0.094-0.66,0.094l-1.78,2.124-4.47,1.969s-6.05,2.853-7.12,3.031c-1.07,0.179-1.44,1.969-1.44,1.969s0.37,2.514,0.19,3.407c-0.18,0.892-1.44,1.406-1.44,1.406s-2.32,1.428-2.5,2.5c-0.18,1.071,0.91,2.156,0.91,2.156s2.66,0.906,3.37,0.906c0.72,0,2.85-0.375,3.56-0.375,0.72,0-0.34,1.625-0.34,1.625l-0.91,1.782-2.31-0.907-3.03-0.719s-2.14,0.554-3.03,0.376c-0.89-0.179-2.31-1.438-2.31-1.438l-2.69,0.531-2.88,0.375h-1.06s-0.53,2.656-1.25,2.656c-0.71,0-2.12,1.782-2.12,1.782l-3.41,0.187-2.84,2.875s-2.86,2.496-3.75,3.032c-0.9,0.535-1.61,0.531-2.5,0.531-0.9,0-2.5,1.062-2.5,1.062l-4.85,3.219-5.15,1.062-3.07,0.907s-1.04,2.861-1.93,3.219c-0.9,0.357-2.88,1.968-2.88,1.968l-3.22,1.938-2.12,1.966-2.16,3.03-1.25,1.97-1.06,2.5v3.22s-0.91,0.72-1.63,0.72c-0.71,0-2.84,1.25-2.84,1.25s-0.9,2.51-1.44,3.41c-0.53,0.89-2.85,1.76-3.56,2.12s0.34,1.25,0.34,1.25l2.35,0.53,0.53,2.16,2.69,0.53h2.65,3.75s1.44,1.07,1.97,1.78c0.54,0.72,1.63,1.78,1.63,1.78l-1.82,2.5-2.5,1.1-2.31-0.72s-1.6,1.25-2.31,1.25c-0.72,0-2.16,1.59-2.16,1.59s-1.42-0.71-2.31-1.25c-0.89-0.53-1.96,0-3.03,0s-1.26,1.26-1.44,1.97-0.87,2.84-0.87,2.84-1.09,1.79-1.63,2.5c-0.53,0.72-2.66,2.69-3.37,3.22-0.72,0.54-1.81,0.54-4.13,0.72s-1.07,1.26-1.25,2.16c-0.18,0.89-1.06,3.03-1.06,3.03s-2.15,1.24-2.69,2.31c-0.53,1.07-0.53,2.67-0.53,3.56,0,0.9,0.53,1.82,0.53,1.82h1.06l0.19-0.72,0.19-1.97,0.72-1.06,0.72,0.53,3.9,1.59,5,3.41,0.38,0.87-0.38,5.19-1.06,2.84-4.09,4.47-2.88,3.94-0.34,2.5,1.25,0.19h1.59s-0.17,1.42-0.53,2.31,0.34,1.59,0.34,1.59l2.88,1.25,3.75,0.38,4.62-0.19,2.69,3.41,2.16,1.78h4.47c1.25,0,1.06,2.5,1.06,2.5l1.06,1.59,3.94-0.34s5.36-1.44,6.25-1.44,3.2-0.53,3.56-1.25c0.36-0.71,2.69-1.59,2.69-1.59l1.97-0.91h3.75s2.66-1.24,3.37-1.59c0.72-0.36,0.74-1.98,1.1-2.69,0.35-0.71,0.87-3.03,0.87-3.03l1.25-2.5h1.63l1.78-1.06,1.06-1.63,1.44-0.34,2.31-1.44,1.06-1.25s0.91-0.89,1.63-1.78c0.71-0.89,0.87-1.6,1.4-2.31,0.54-0.72,2.51-1.44,3.22-1.97,0.72-0.54,2.15-2.14,2.5-3.03,0.36-0.9,1.63,0,1.63,0l4.09,0.68s3.22-1.04,5.72-1.93c2.5-0.9,1.08,1.06,0.91,1.78-0.18,0.71,0,3.2,0,4.09s0.88,3.22,1.78,4.47c0.89,1.25,3.9-1.44,3.9-1.44s3.05-1.78,3.94-2.5c0.89-0.71,3.94,0,3.94,0h6.06v-2.84c0-0.72,1.43-3.23,1.97-4.13,0.54-0.89,1.25-3.56,1.25-3.56l0.72-2.5-0.19-4.81s1.79-1.97,3.22-1.97,2.69,1.59,2.69,1.59l4.28,0.91,1.44-0.53s-0.19-3.22-0.19-3.94c0-0.71-0.19-2.84-0.19-2.84l-0.53-3.22s-0.54-2.51-0.72-3.41c-0.18-0.89-0.87-2.12-0.87-2.12l-2.5-1.63,1.25-0.87,4.09-0.38s1.96-2.66,2.5-3.37c0.54-0.72,2.84-2.35,2.84-2.35v-2.5s-1.04-2.13-1.93-3.03c-0.9-0.89-2.35,0.18-3.07,0.53-0.71,0.36-3.03-0.34-3.03-0.34s-1.41-0.88-2.12-0.34c-0.72,0.53-1.63,1.06-1.63,1.06l-1.4-1.06-1.97,1.78-1.44-0.72s-2.84-1.79-4.09-1.25c-1.25,0.53-1.97-0.72-1.97-0.72h-2.5s-0.56,1.25-1.1,1.97c-0.53,0.71-3.03,0.87-3.03,0.87l-2.84,0.91-2.69,3.75-2.69,0.53,1.25-2.5,0.19-1.59-3.03-0.38s2.13-0.88,2.84-1.06c0.72-0.18,3.41-1.06,3.41-1.06l1.97-0.91,0.34-1.59s1.78-3.41,1.78-4.13c0-0.71-0.68-3.22-0.68-3.22l-0.91-2.31s-2.5-4.63-3.22-5.34c-0.71-0.72-1.05-1.78-2.12-1.78-1.08,0-3.07,0.68-3.07,0.68l-1.4,0.91-1.25-1.06s-2.17-1.98-3.6-2.159c-1.42-0.178,0.38-0.719,0.38-0.719l0.87-1.593s-0.16-1.973,0.38-2.688c0.53-0.714,1.97,1.25,1.97,1.25s2.67,1.438,3.56,1.438,1.78,0.531,1.78,0.531,3.41-0.371,4.13-0.906c0.71-0.536,0.68-2.313,0.68-2.313l0.19-2.687,0.72-1.25,1.25-1.782s0.36-1.964,1.25-2.5c0.89-0.535,1.79,0,2.69,0,0.89,0,2.31,1.626,2.31,1.626l1.59,0.718,2.5-1.437s1.28-2.139,1.82-3.031c0.53-0.893,2.84-1.782,2.84-1.782l2.84-2.156,1.44-3.219s2.14-1.973,2.5-2.687c0.36-0.715-0.34-1.782-1.59-1.782h-1.78l-1.82-1.062-1.93-0.188-3.07-1.781-3.18-0.187h-3.75c-0.9,0,0-0.875,0-0.875l2.5-1.625,0.68-2.5-1.06-1.25-2.5-0.532,1.78-1.25,0.53-1.25-2.31-0.531v-2.5s-0.35-1.785-0.53-2.5c-0.09-0.357-0.45-0.437-0.78-0.437zm-77.19,16.062c-0.22-0.01-0.48,0.081-0.78,0.282-1.61,1.071-3.94,2.312-3.94,2.312-1.07,0.357-1.79,1.42-1.97,2.312-0.17,0.893-0.53,2.88-0.53,3.594,0,0.715,0.2,2.496,1.1,3.032,0.89,0.535,3.03,1.598,3.03,2.312s-0.56,2.321,0.15,2.5c0.72,0.179,1.44-0.522,1.97-1.594,0.54-1.071,0.36-3.419,0.72-4.312s1.45-2.491,1.63-3.563c0.17-1.071-0.19-5.187-0.19-5.187s-0.24-1.644-1.19-1.688z","name":"Chukotka Autonomous Okrug"},"ha":{"path":"m779.82,276.93c0.53572-0.71428,1.4286-1.4286,1.9643-2.3214,0.53571-0.89285,1.7857-2.5,1.7857-2.5s1.7857-0.17857,4.1072,0.17858c2.3214,0.35714,4.4643,1.4286,5.7143,2.1428,1.25,0.71429,2.6786,1.25,3.0357,2.3214,0.35714,1.0714,1.6071,2.1429,1.6071,3.3929s-1.4286,3.5714-1.4286,4.2857c0,0.71429-0.17857,2.5,0.71428,3.3929,0.89286,0.89286,0.71429,1.6071,1.7857,1.4286,1.0714-0.17857,3.9286-1.0714,5-1.25,1.0714-0.17857,3.3929,0,5,0.53572,1.6071,0.53571,2.8571,0.89285,3.2143,1.6071,0.35715,0.71428,1.0714,1.4286,0.89286,2.5-0.17857,1.0714-2.5,2.8571-2.5,2.8571l0.17857,1.4286,0.89286,1.6072s1.6071,0.71428-0.35714,0.89285c-1.9643,0.17857-3.0357-0.71428-3.0357-0.71428s0.17857-0.17857,0-1.0714c-0.17857-0.89286-0.71428-1.7857-1.7857-1.4286-1.0714,0.35714-2.3214,1.9643-3.0357,2.5-0.71428,0.53571-2.8571,3.0357-2.8571,3.0357s-1.9643,0.71429-2.8571,1.7857c-0.89286,1.0714-4.1071,4.6428-4.1071,4.6428s-0.17858,1.25-1.0714,2.5c-0.89286,1.25-2.3214,2.3214-2.5,3.5714-0.17857,1.25,0,4.1071,0,4.1071s1.4286,1.0714,1.6071,2.3214c0.17857,1.25-0.89286,1.9643-1.25,2.8572-0.35714,0.89285-1.4286,0.53571-1.4286,1.7857s0.17857,5.7143,0.17857,5.7143l-0.35714,4.8214-0.35715,4.1072s-1.0714,1.9643-1.25,3.2143c-0.17857,1.25-0.35714,2.6786-0.35714,3.3929,0,0.71429-0.17857,3.0357-0.17857,3.75,0,0.71429-0.71429,1.9643-0.89286,2.6786-0.17857,0.71429-1.0714,1.25-0.17857,1.9643,0.89286,0.71428,1.9643,1.9643,1.9643,1.9643l-1.7857,3.3929-0.17857,1.9643-1.7857,3.3928-1.25,3.75-0.35715,4.1072-0.71428,1.6071-3.2143,4.1071,0.35715,2.6786s2.1428,1.0714,2.8571,1.0714c0.71428,0,3.3929,0.53572,4.4643-0.17857s2.5-1.4286,3.2143-1.7857c0.71429-0.35715,1.6071-0.89286,2.8571,0.35714s2.5,4.4643,2.5,4.4643,0.17857,1.4286,1.4286,1.0714c1.25-0.35714,1.9643-2.1428,1.9643-2.1428l-1.0714-2.1429,0.53572-2.6786-0.53572-1.7857-1.6071-2.5s-1.7857-1.4286-2.5-1.4286c-0.71429,0-3.75,1.4286-3.75,1.4286s-1.9643,2.3214-1.6071,1.4286c0.35714-0.89285,1.9643-3.3928,1.9643-3.3928l1.6071-0.35715,1.25-1.7857s0.89286-0.71429,1.9643-0.71429,3.2143-1.25,3.2143-1.25,1.25-2.6786,1.0714-0.89285c-0.12,1.78-1.72,4.28-1.72,4.28l1.0714,2.1429,1.9643,2.1429,0.53572,1.7857-0.17857,2.6786,2.3214,1.4286v1.6072,2.8571l1.7857-0.71429c0.71429-0.71428,2.1429-4.2857,2.1429-4.2857l0.89285-3.2143v-2.1428s-1.6071-1.7857-0.89285-1.9643c0.71428-0.17857,4.6428-2.1429,4.6428-2.1429s2.1429-0.53571,3.0357-0.53571c0.89286,0,4.1071,0.17857,4.8214,0.35714,0.71428,0.17857,4.4643,1.6071,4.4643,1.6071s4.4643,1.25,5.1786,1.25c0.71429,0,1.9643,1.7857,1.9643,1.7857s-0.89286,1.9643,0.53571,2.8571c1.4286,0.89286,4.8214,3.0357,4.8214,3.0357l3.75,2.1428s1.4286,3.3929,1.4286,4.2857c0,0.89285-0.17857,4.6428-0.17857,5.7143,0,1.0714,0,5,0.53572,5.7143,0.53571,0.71428,1.0714,2.3214,2.1428,3.2143,1.0714,0.89286,3.2143,4.2857,3.2143,4.2857l2.5,1.25,3.0357,6.9643s1.4286,1.4286,1.6072,2.3214c0.17857,0.89286,1.6071,3.0357,1.7857,3.75,0.17857,0.71429,1.6071,5,1.7857,5.7143,0.17857,0.71428-0.53572,8.5714-0.53572,8.5714l0.53572,3.3928s0,1.25-0.89286,1.9643c-0.89286,0.71429-3.5714,1.6071-3.5714,1.6071l-1.4286,0.17857-1.4286-1.7857-0.53572-2.6786-3.0357-3.0357s-1.9643-1.25-2.6786-0.71428c-0.71429,0.53571-2.3214,1.9643-2.3214,1.9643s-0.89286,1.7857-1.25,2.5c-0.35714,0.71429-1.4286,1.25-0.89286,2.3214,0.53572,1.0714,1.9643,2.6786,1.9643,2.6786s0.35714-0.71428,2.1428-0.53571c1.79,0.18,2.14,2.68,2.14,2.68l-0.89286,3.2143s-1.9643,1.25-2.6786,1.6071c-0.71428,0.35714-2.8571,1.25-1.7857,2.1429,1.0714,0.89285,2.3214,1.25,2.3214,1.25s0.71428,1.25,0,1.9643c-0.71429,0.71429-2.3214,2.1429-2.3214,2.1429s-1.7857,0.35714-3.0357,1.25-3.2143,1.4286-4.2857,1.6071c-1.0714,0.17857-2.8571,1.25-4.1071,0s-2.1429-0.89285-2.5,0.17857c-0.35715,1.0714-1.6072,0.89286-1.7857,1.9643-0.17857,1.0714,0,2.8571,0.35715,3.5714,0.35714,0.71428,0,3.0357,0,3.0357s-2.3214,1.9643-2.5,1.25c-0.17858-0.71428,0.17857-2.3214-0.35715-3.2143-0.53571-0.89286-2.3214-2.5-2.3214-2.5s-2.8571-1.4286-1.7857-2.3214c1.0714-0.89286,2.8571-2.6786,3.2143-3.2143,0.35714-0.53571,0.35714-3.0357,0.35714-3.0357s-2.1429-0.89286-2.6786-1.7857c-0.53572-0.89285-1.0714-3.3928-1.0714-4.1071,0-0.71428-0.71429-3.3929,0.17857-3.75,0.89286-0.35714,2.8571-1.9643,2.8571-1.9643l0.53572-1.9643s-0.53572-0.35714-2.1429-0.35714c-1.6071,0-2.5-0.17857-3.9286,0.89285s-1.4286,1.0714-2.5,2.5-2.1429,2.6786-3.2143,3.2143c-1.0714,0.53571-2.6786,0.71429-2.6786,0.71429s-4.1071-0.71429-4.2857-1.4286c-0.17857-0.71428-1.6072-1.9643-2.5-1.9643-0.89286,0-2.1429,0.35714-3.2143,0.89286-1.06,0.55-1.95,0.73-2.84,0.73-0.89286,0-4.2857,1.0714-4.2857,1.0714s-2.1428,1.7857-3.2143,1.7857c-1.0714,0-2.1014,0.40945-2.28-0.66198-0.17857-1.0714-1.0823-3.4216-1.0823-3.4216l-1.5332-4.3507s-2.6677-0.69261-3.7392-0.87119c-1.0714-0.17857-3.8221-0.85138-3.8221-0.85138l-2.4892-1.1525s-2.1249-2.2078-1.7678-2.9221c0.35714-0.71428,1.7028-4.0044,2.4171-4.5401,0.71428-0.53572,1.2608-1.4069,1.2608-1.4069l-1.25-2.3214s-1.7965-1.2085-0.90368-1.7442c0.89286-0.53571,3.7608-2.0058,3.7608-2.0058l2.0906-4.0892,1.5025-3.2341,3.5498-2.6767-0.89285-1.9643-2.4171-1.7118-0.11357-1.6288,2.5306-1.1237,4.1071-0.71428,2.6786-0.89286,1.0714-1.25-0.53571-1.6071-1.986-1.47-1.0083-2.5108-0.0631-2.4477-1.47-2.0058-1.7226-0.67282-2.2583,1.7442s-1.6703,1.0823-2.3846,1.4394c-0.73,0.34-2.87,0.19-2.87,0.19l-2.3214,1.25-0.44008,2.5-0.80992,2.3214-2.5,1.0714-2.1429,0.53571-0.53571,2.4585-1.4809,1.4286-2.3431-0.17857-0.99746-2.4585-1.0714-2.5s-1.2608-0.51404-1.9751-0.69262c-0.71428-0.17857-4.4534,0.51405-4.4534,0.51405l-1.7857-0.17857-1.7857-1.25,1.9643-5.5357,0.89286-4.1072s1.25-2.3214,1.9643-3.0357c0.71428-0.71429,3.0357-5,3.0357-5l0.35714-2.6786s-0.53571-1.25-1.6071-1.6072c-1.0714-0.35714-5.3571,0.17858-5.3571,0.17858l-2.6786,0.53571s-3.3424,2.5325-4.0567,1.8182c-0.71428-0.71429-1.1219-3.9611-1.1219-3.9611s-3.0376-1.6288-3.0376-2.5217c0-0.89286,1.9662-1.5855,1.9662-1.5855s0.53571-1.0714,0.71428-2.1429c0.17857-1.0714-0.20024-2.8138-0.20024-2.8138l-2.6281-0.77741s-1.4069-0.89472-2.1212-1.0733c-0.71428-0.17857,1.1996-2.2998,1.1996-2.2998l0.89286-1.6072-0.35714-1.0714s-2.2493-0.54655-2.2493-1.2608c0-0.71429,1.6505-3.3604,1.6505-3.3604l-1.5873-1.6703-2.5415-0.82971-0.80806-1.618s0.69262-0.73594,1.5855-1.0931c0.89286-0.35714,1.0498-0.61866,1.0498-0.61866l-1.3852-0.89286v-2.4062c0-0.71429-0.074-2.3304-0.074-2.3304s-1.2718-1.1078-1.4502-2.345c-0.1894-1.3131,2.6371-1.7532,2.6371-1.7532l-0.93619-0.82972-0.49238-1.4917,0.2417-2.1339,2.7525-0.86037,2.9094-0.89285,2.4477,0.1371,0.70345-1.8922,3.2034,0.21106,2.9203,0.0108s0.35715-1.7749,0.35715-2.4892c0-0.71428-1.8705-1.618-1.4286-2.2691,0.40112-0.59101,1.5657-0.89285,2.4585-1.0714,0.89286-0.17858,3.9286-0.71429,4.1072-1.4286,0.17857-0.71428,2.5829-6.1562,2.5829-6.1562s0.96683-1.0083,1.6811-1.1869c0.71429-0.17857,3.9286-0.93432,3.9286-0.93432l-1.764-2.794-3.0051-2.8246-1.6378-4.8539-2.3214-2.1428-1.4286-1.7857v-5.3571l3.0357-6.7857-1.0714-3.2143-0.72512-5.8585,0.81889-2.85s3.5498,0.11543,4.264,0.29401c0.71428,0.17857,7.7634,0.22004,7.7634,0.22004s0.95599-4.0152,1.3131-4.7295c0.35714-0.71428,1.3871-0.826,2.28-1.0046,0.89286-0.17857,3.3495-0.62051,3.3495-0.62051l2.5433,1.1562,1.6071-1.0714z","name":"Khabarovsk Krai"},"eu":{"path":"m781.96,462.82c0.98214,1.875,1.1607,1.875,1.875,2.5893l2.6786,2.6786s0.80357,1.1607,1.0714,1.7857c0.26786,0.625-0.0893,1.6964,0.625,1.9643,0.71429,0.26785,2.3214,0.53571,2.7679,0.625,0.44643,0.0893,1.4286,1.0714,2.3214,1.1607,0.89285,0.0893,1.6071,0.0893,2.1428-0.35714,0.53572-0.44643,1.0714-1.25,1.6964-1.7857,0.625-0.53571,2.5893-1.4286,3.125-1.6964,0.53572-0.26785,1.875-0.625,2.3214-1.0714,0.44643-0.44643,1.1607-0.98215,1.1607-2.0536s0.26785-2.7678,0.71428-3.125c0.44643-0.35714,2.9464-1.9643,3.5714-2.5,0.625-0.53571,1.6964-2.2321,2.1429-2.8571,0.44643-0.625,1.875-2.6786,2.2321-3.2143,0.35714-0.53572,2.1429-2.0536,2.1429-2.0536l2.0536-2.3214,0.98214-1.0714,2.6786-1.875,0.71429-0.80357,0.17857-1.1607,0.0893-0.35714-1.5179-0.17857-1.875-0.0893-1.6964,0.44643-1.6964,1.1607-1.3393,1.25-0.80358,1.0714-1.25,1.6072-1.4286,0.98214-1.7857,0.625s-1.25,0.17857-1.7857,0c-0.53571-0.17857-2.1428-0.71429-2.1428-0.71429l-1.4286-0.625-0.80358-0.98214-0.89285-0.625s-0.80357-0.26786-1.1607-0.17857c-0.35714,0.0893-1.7857,0.625-1.7857,0.625l-2.0536,0.71429-2.4107,0.17857s-1.0714,0.44643-1.7857,0.625c-0.71429,0.17857-2.4107,0.80357-2.4107,0.80357l-1.4286,0.89285-1.875,0.26786-0.80357,0.17857-0.35714,0.98215-0.0893,1.4286s-0.44643,1.1607-0.44643,1.5178c0,0.35715-0.53571,1.875-0.53571,1.875l-0.53571,1.1607-0.71429,1.4286z","name":"Jewish Autonomous Oblast"},"pr":{"path":"m822.68,473.71c0,0.53571,0.53571,1.25,0.53571,1.25l1.4286,1.4286s0.35715,1.0714,0.44643,1.4286c0.0893,0.35714-0.625,2.0536-0.625,2.0536l-1.1607,2.7679s-0.0893,2.2321,0,2.5893c0.0893,0.35715,0.625,1.0714,0.89285,1.5179,0.26786,0.44643,0.80358,1.1607,0.80358,1.5179,0,0.35714-0.80358,1.9643-0.80358,1.9643v1.9643c0,0.44643-0.44642,1.9643-0.44642,1.9643s-0.17858,0.0893-0.17858,1.0714v2.7679c0,0.71429-0.26785,3.0357-0.35714,3.3929-0.0893,0.35714-1.9643,0.53571-2.3214,0.53571-0.35714,0-1.3393-0.98214-1.3393-0.98214s-0.98215-1.6071-1.1607-2.0536c-0.17857-0.44643-1.3393-1.5179-1.3393-1.875,0-0.35715-0.26786-1.6072-0.89286-1.7857-0.625-0.17857-1.5179,0.26786-1.5179,0.26786s-0.53571,0.89286-0.625,1.25c-0.0893,0.35714,0,0.98214-0.0893,1.4286-0.0893,0.44643-0.71429,2.5-0.71429,2.5s-0.625,0.625-1.1607,0.89286c-0.53572,0.26786-2.2322,1.0714-2.2322,1.6071,0,0.53572,1.0714,0.71429,2.1429,2.0536,1.0714,1.3393,3.125,4.6429,3.125,4.6429l2.5,4.2857,1.4286,4.9107s0.44643,1.6071,0.625,2.1429c0.17857,0.53571,0.89286,1.1607,0.98215,1.9643,0.0893,0.80357,0.53571,2.5-0.35715,2.8571-0.89285,0.35715-4.0178,1.0714-4.0178,1.0714l-0.71429,0.625,1.1607,0.71429s0.625,0.44643,1.0714,0.53571c0.44643,0.0893,0.53572,1.4286,0.98215,1.4286,0.44642,0,1.875-0.35714,2.4107-0.71428,0.53571-0.35714,1.3393-0.625,2.1429-0.625,0.80357,0,1.4286-0.44643,1.4286-1.0714,0-0.625-0.625-3.3929-0.625-3.8393,0-0.44642,1.5179-2.5893,1.5179-2.5893v-2.1429c0-0.35714-0.17858-1.4286,0.35714-1.5179,0.53571-0.0893,2.9464-0.71428,2.9464-0.71428s0-1.1607,1.0714-0.26786c1.0714,0.89286,1.5178,2.9464,1.5178,2.9464s1.875,0.35714,2.2322,0.17857c0.35714-0.17857,0.98214-0.625,1.5178-0.98214,0.53572-0.35714,2.5893-0.53572,3.3929-0.53572,0.80357,0,2.1429-0.44642,2.1429-0.44642l-0.26786-1.1607s2.0536-1.25,2.5-1.5179c0.44643-0.26785,2.2321-1.1607,2.8571-1.7857s1.5179-1.4286,1.9643-2.4107c0.44643-0.98215,1.3393-3.125,1.5179-3.4822,0.17857-0.35714,1.1607-2.5,1.4286-3.2143,0.26785-0.71429,0.89285-2.3214,1.3393-3.125,0.44643-0.80357,1.5179-2.8572,1.5179-2.8572s-0.0893-2.3214-0.0893-2.8571c0-0.53571-0.26785-1.875-0.625-2.8571-0.35714-0.98214-0.53571-1.1607-0.44642-2.1429,0.0893-0.98214,0.98214-1.6071,1.6071-2.0536,0.625-0.44643,1.0714-1.4286,1.0714-1.9643,0-0.53571-1.25-2.9464-1.25-2.9464s0.0893-1.1607,0.35714-1.6964c0.26786-0.53572,1.5179-1.7857,1.5179-1.7857l0.17857-2.9464s0.80357-2.2321,0.80357-2.6786c0-0.44643,0.26786-3.9286,0.26786-3.9286l0.89285-2.1429s0.26786-3.3928,0.26786-3.9286c0-0.53571-0.53571-5-0.53571-5.5357,0-0.53572-0.17857-4.1071-0.17857-4.7321s-0.71429-2.1429-0.71429-2.5893c0-0.44643,0.0893-2.1429,0.26786-2.5893,0.17857-0.44643,0.98214-1.9643,0.98214-1.9643s-0.0893-2.0536-0.0893-2.5893c0-0.53571,0.17858-1.6964-0.44642-1.7857s-2.3214,0.80357-2.3214,0.80357l-1.7857,0.71429-1.5178,0.17857-0.71429-0.44643-1.0714-1.4286s-0.26786-1.4286-0.26786-1.7857c0-0.35714-0.53571-1.1607-0.53571-1.1607l-1.25-1.3393-1.3393-1.3393-1.4286-0.71429-1.0714,0.17857s-0.98214,0.17858-1.0714,0.53572c-0.0893,0.35714-0.53572,0.44643-0.80358,0.80357-0.26785,0.35714-1.1607,1.3393-1.1607,1.3393l-0.53571,1.0714-0.44643,1.0714-0.80357,0.80357-0.17858,0.71429,0.35715,0.80357,0.89285,0.98214s0,0.71429,0.53572,0.80358c0.53571,0.0893,1.0714,0.0893,1.0714,0.0893h1.3393l1.25,0.625,0.71429,0.80357,0.0893,1.3393-0.26785,1.4286-0.44643,1.25-0.53572,0.71429-1.5178,0.89285-1.7857,0.89286-0.89285,0.89286,0.26785,0.80357,1.9643,0.80357,0.80357,0.98214-0.0893,0.71429-0.80357,1.0714-1.0714,1.0714-1.875,0.89286-1.7857,0.98214-3.64,1.44-1.6964,0.44643-1.9643,0.26786-0.89286-0.44643-1.25-0.71429s-0.53571-0.26786-0.89285,0c-0.35715,0.26786-0.625,0.98214-0.625,0.98214l-1.5179,1.0714-0.53571,1.6964,0.0893,1.3393s0.35714,0.71428,0.44643,1.1607c0.08,0.44,0.08,1.33,0.08,1.33l-0.0893,1.6071-0.98214,1.0714z","name":"Primorsky Krai"},"ma":{"path":"m829.64,182.46s1.0714,0.71428,2.1429,1.25c1.0714,0.53571,3.0357,2.1429,3.2143,2.8571,0.17857,0.71429,0.17857,2.3214,1.0714,2.8571,0.89286,0.53572,3.5714,1.0714,3.5714,1.0714l1.9643,0.89286,1.0714,1.7857,3.0357,1.6072s0.71429,1.0714,0.17857,1.9643c-0.53571,0.89286,0,2.6786,0,2.6786l2.5-0.35714,2.8572,0.35714,1.6071,2.3214,1.9643,2.6786,2.1429,1.0714,1.9643,2.1429,1.0714,1.9643,0.17857,2.5s-0.35715,2.5,0,3.2143c0.35714,0.71429,1.0714,3.75,1.0714,3.75l1.0714,1.7857s0.53572,1.0714,0.53572,1.7857c0,0.71428-0.89286,2.1429-0.89286,2.1429l0.17857,1.7857-1.9643-0.53571-0.35715-1.9643s0.35715-0.71429-0.53571-0.35714c-0.89286,0.35714-1.7857,1.4286-1.7857,1.4286s-0.35715,0.89286-1.0714-0.53572c-0.71429-1.4286-1.7857-1.9643-1.7857-1.9643s-1.6071-0.71429-1.6071-1.9643-1.7857-2.3214-1.7857-2.3214l-1.6072-1.4286s-0.35714,1.7857-0.35714,2.5c0,0.71429,1.4286,1.4286-0.35714,1.4286s-4.1072,0.71429-4.1072,0.71429l-0.89285,1.0714-0.35715,2.6786-1.25,1.25-2.6786,2.8571-0.35714,2.3214-1.0714,1.9643,0.53572,2.3214,1.4286,1.4286s0.53571,0.71428,0.53571,1.4286v2.6786l0.17857,1.6071,1.6072,1.4286,0.17857,4.4643v4.4643l0.17857,3.0357,1.7857,2.6786,1.0714,3.0357,0.35714,0.89285,1.9643,0.35715,1.0714-1.25,1.9643-1.0714s1.6072-0.17857,2.3214-0.17857c0.71429,0,1.6072,0.89285,1.6072,0.89285l0.17857,0.89286-1.7857,1.4286-1.7857,0.71429v1.0714l-0.71429,0.89285-1.7857,0.89286-1.25,0.53571-0.53572,0.71429-0.17857,2.6786v2.3214l-0.89285,0.71429-1.7857-0.89286-0.71428,1.4286-0.53572,2.5-1.0714,1.25-3.2143,0.71429-1.25-0.17858-0.53572-1.6071,2.5-1.6071,1.25-1.9643s1.9643-1.7857,0.53572-1.7857-2.6786,1.0714-2.6786,1.0714l-0.89286,1.25-0.89286,0.53571s-0.89286,0.35714-1.7857-0.17857c-0.89286-0.53571-2.3214-0.71429-2.3214-0.71429s-1.25,0.89286-1.25,1.4286c0,0.53571,0.35714,1.4286-0.53572,1.4286-0.89285,0-3.2143,0.17857-3.2143,0.17857l-2.5,1.6071-2.5,0.89286-1.0714,2.1429,0.35714,1.7857,0.53572,1.9643,0.35714,0.89285,1.6071,1.0714s0.17857,0.89286-1.7857,0.89286h-4.4643l-1.0714,2.1429-1.0714,1.25-2.5,0.35714-2.1429-2.8571-2.6786-1.25s-1.9643-0.71429-2.6786-0.71429c-0.71429,0-3.3929,0.17857-3.3929,0.17857l-2.1429,0.89286-1.7857,0.17857-1.25-0.89286-1.0714-1.7857-0.17857-2.3214,1.25-1.9643,0.17857-2.5-2.5-3.9286-2.3214-1.4286-2.3214-1.25-2.6786-0.71428-2.6786-0.71429-2.1429,0.71429-1.0714,1.4286-1.0714,1.9643-0.89285,1.25h-1.25l-1.25-1.9643-0.17857-0.89286,1.25-0.71429,0.35714-1.4286v-1.25l-1.25-1.25-5.7143-6.7857s-0.35714-1.0714-0.35714-1.7857v-3.2143l-1.78-0.88-0.89286-0.35714-0.17857-3.0357-0.53572-1.4286-1.0714-0.35714-0.35714-1.25,1.6071-1.4286,2.1429-0.17857,1.0714-0.53572,1.0714-1.0714,2.1429-0.17857,1.9643,0.17857,0.53572-1.0714-1.25-1.9643-1.4286-1.25-0.35714-2.1429s1.25-0.53571,1.9643-0.53571c0.71428,0,3.5714-1.0714,3.5714-1.0714l-0.17858-2.6786s0.53572-0.35714,1.25-0.35714c0.71429,0,3.9286,0.35714,3.9286,0.35714l2.1428-1.7857,4.1072-6.4286-0.17858-3.0357-1.4286-1.4286-2.6786-2.8572s-1.25-0.89285-1.4286-1.6071c-0.17857-0.71428-0.35714-1.7857-0.35714-1.7857l2.1428-2.3214,0.17858-1.6071-1.25-1.25-2.5,0.17857-0.71429-0.53572-1.0714-1.0714v-0.71429l3.06-0.86,1.25-1.0714-0.53572-1.4286-1.25-0.89285-0.17857-1.6072,2.1429-3.0357,3.75-1.25,2.1428-1.25-1.25-2.5s0.17858-0.35714,0.89286-0.35714c0.71429,0,3.3929,0.71428,3.3929,0.71428l1.0714-0.17857-0.53572-3.5714v-1.6071l1.4286-0.53572,0.2-2.66-0.17858-0.53571h2.5l1.6072,0.53571,0.53571,1.9643,1.0714,1.0714s0.53571,0.53571,1.25,0.53571,3.75-0.71428,3.75-0.71428l3.5714-0.71429,2.3214-0.35714,2.6786-1.0714,2.3214-1.4286,2.3214-0.89286,1.9643-0.17857,2.8571-0.35714,2.5-1.6072z","name":"Magadan Oblast"},"sh":{"path":"M943.16,321.59c-0.45,0.19-0.81,0.37-1.19,0.94s-0.31,1.53-0.5,1.85c-0.19,0.31-1.53,1.12-1.53,1.12-0.51,0.51-0.87,1.06-2,1.25-1.14,0.19-2.59-0.23-2.85,0.66-0.25,0.88,0.06,2.12,0.69,2.25,0.63,0.12,1.53,0.44,2.1,0.25,0.56-0.19,1.56-1.25,1.56-1.25s0.62,0.3,1,0.93c0.38,0.64,0.97,1.78,0.97,2.03,0,0.26,0.19,1.06-0.07,1.57-0.25,0.5-0.81,2.78-0.56,3.03s1.24,0.9,1.94,0.9c0.69,0,1.09,0.17,1.78-0.78,0.69-0.94,0.93-1.74,1.25-2.56s0.78-1.9,1.09-2.16c0.32-0.25,0.48-1.02-0.22-1.65-0.69-0.63-0.93-1.75-1-2.06-0.06-0.32-0.56-1.09-0.24-1.53,0.31-0.45,1.12-1.31,1-1.69-0.13-0.38-1.38-1.09-1.82-1.47s-0.96-1.82-1.4-1.63zm2.15,20.44s-0.43,0.15-0.69,0.85c-0.25,0.69-0.5,1.74-0.31,2.31s0.56,1.4,0.81,1.78c0.26,0.38,0.75,1.31,0.88,1.62,0.13,0.32,0.53,0.72,1.03,0.91,0.51,0.19,1.12,0.07,1.25-0.44,0.13-0.5,0.19-1.4,0.19-2.03s-0.19-2.15-0.19-2.53,0.07-0.87-0.31-1.31-2.66-1.16-2.66-1.16zm2.53,9.22c-0.56,0.19-1.9,0.5-2.15,0.69-0.26,0.19-0.63,0.52-0.5,1.03,0.12,0.5-0.2,1.24,0.5,1.69,0.69,0.44,2.15,0.96,2.53,1.09s0.55,0.44,1.19,0.13c0.63-0.32,1.09-0.59,1.03-1.41-0.07-0.82-0.59-1.62-0.78-1.88-0.19-0.25-1.5-1.34-1.5-1.34h-0.32zm-117,4.5l-1.87,1.25s0.5,1.12,0,1.12h-1.78s-1.26,0.78-0.5,1.29c0.76,0.5,2.4,0.87,3.03,1,0.63,0.12,1.52,0.65,2.16,1.15,0.63,0.51,1.49,0.87,1.74,1.63,0.26,0.76,0.63,2.28,0.63,2.28l0.91,1.62-0.54,2.16-1.74,0.13s-0.91-1.14-1.41-0.13c-0.51,1.01-0.5,1.77-0.5,2.41,0,0.63,0.27,1.24,0.91,1.37,0.63,0.13,1.48,0.4,2.74,1.41,1.27,1.01,2.03,2.9,2.29,3.53,0.25,0.63,0.24,2.65,0.5,3.41,0.25,0.75,1.4,2.02,2.03,2.53,0.63,0.5,2.03,2.52,2.28,3.03,0.25,0.5,1.25,2.4,1.5,2.9,0.25,0.51,1.78,1.75,1.78,1.75s1.24,1.15,2,1.66,3.8,1.37,4.56,1.37,3.03,0.66,3.28,1.16c0.26,0.51,2.78,5.66,2.78,5.66l5.57,8.34s2.52,2.15,3.15,2.66c0.64,0.5,2.4,3.9,2.91,4.65,0.51,0.76,2.12,4.44,2.5,4.94,0.38,0.51,3.69,5.06,3.69,5.06s2.77,1.88,3.4,2c0.64,0.13,3.41,1.91,3.41,1.91s2.65,2.9,2.78,3.41c0.13,0.5,0.75,3.53,0.75,3.53l2.16,3.4,3.15,2.66,2.5,5.19,0.53,2.25s0,2.15,0.5,2.53c0.51,0.38,5.29,4.06,5.29,4.06l1.65,0.88,1.78,0.25v-2.54s-0.9-1.65-1.15-2.15c-0.26-0.51-0.88-3.03-0.88-3.03s-0.5-0.74-0.5-1.63c0-0.88,0.75-2.4,0.75-2.4s1.53-0.25,2.16-0.25,1.24-0.12,2.25-0.63c1.01-0.5,2.41-0.37,2.41-0.37l2.28,2,1.37,0.78s0.5-1.4,0.5-2.03c0-0.64,0.01-1.53-0.62-2.41-0.64-0.88-1.63-1.88-1.63-1.88l-2.03-1.65s-0.99-1.38-1.75-1.25-1.15,0.24-1.41,0.75c-0.25,0.5,1.52,2.66,0,2.28-1.51-0.38-2.4-0.9-2.78-1.41-0.38-0.5-1.62-1.87-1.62-1.87s-2.4-1.28-3.03-1.53c-0.64-0.26-2.4-0.88-3.04-0.88-0.63,0-4.06-1.15-4.06-1.15l-2.12-2.38-2.41-6.31s-1.12-1.65-1.25-2.41-1.03-3.15-1.16-3.65c-0.12-0.51-0.37-2.28-0.62-2.78-0.25-0.51-1-2.29-1-2.29l-0.53-3.28,1.78-1.62s2.77-1.03,3.41-1.03c0.63,0,5.06-0.13,5.06-0.13l2.4,0.63s2,0.25,2.5,0.25c0.51,0,1.03,0.51,1.16-0.5s-1.53-2-1.53-2l-3.53-0.53-3.66-1.26-2.4-1.78-18.57-15.25-1.5-1.28-1.78-0.12s-0.87,0.13-1.25-0.63-0.4-1.27-1.15-1.9c-0.76-0.64-2.5-1.88-2.5-1.88s-1.52-0.25-2.66-0.5-3.66-1.4-3.66-1.4l-0.4-2.79-1.38-1.25-0.62-1.28,1.25-1.62-0.25-1.91-2.53-2.12-3.54-0.79s-2.4-0.99-2.65-1.5c-0.25-0.5,0.12-2.15,0.12-2.15s-0.62-1.12-1.12-1.5c-0.51-0.38-4.28-1.91-4.28-1.91l-2.91-1.9-1.03-2.63s0.01-1.91-0.63-1.91c-0.63,0-2.78-0.87-2.78-0.87zm119.16,7.94c-0.88,0.25-1.53,0.4-1.72,0.97-0.19,0.56,0.06,1.24,0.31,1.43,0.26,0.19,0.84,0.69,1.47,0.57,0.63-0.13,1.56-0.19,1.82-0.57,0.25-0.38-1.13-1.46-1.32-1.78-0.19-0.31-0.56-0.62-0.56-0.62zm1.75,4.06c-0.51,0.25-1.19,0.56-1.37,1.06-0.19,0.51,0.36,1.37,1,1.75,0.63,0.38,1.05,0.63,1.56,0.06,0.5-0.56,1.09-1.62,1.03-1.93-0.06-0.32-2.22-0.94-2.22-0.94zm0.19,6.97c-0.18,0.01-0.34,0.06-0.5,0.16-0.63,0.37-0.82,1.18-0.82,1.56s0.88,3.09,0.88,3.47-0.87,2.4-1,2.9c-0.13,0.51-0.01,1.33,0.62,2.6,0,0,1.13-0.25,1.38-0.25s1.72-0.94,1.84-1.19c0.13-0.25,0.44-2.28,0.44-2.91s-0.06-2.02-0.12-2.47c-0.07-0.44-0.63-1.4-0.63-1.78s-0.31-1.43-0.69-1.69c-0.28-0.18-0.87-0.44-1.4-0.4zm-4.41,14.53s-1.28,0.03-1.53,0.16c-0.25,0.12-0.69,0.49-0.81,0.75-0.13,0.25-0.57-0.07,0.06,0.62,0.63,0.7,1.02,1.38,1.66,1.38,0.63,0,2.06,0.65,2.31,0.65s1.03-0.21,1.22-0.47c0.19-0.25,0.75-0.49,0.31-1.18-0.44-0.7-0.97-1.06-1.22-1.19s-2-0.72-2-0.72zm1.81,6.47c-0.19,0.31-1.37,1.18-1.43,1.44-0.07,0.25-0.32,0.74-0.38,1.25-0.06,0.5-0.31,1.77-0.31,2.09s-0.53,1.59-0.78,2.16c-0.26,0.56-0.5,1.49-0.44,2.12s-0.07,1.09,0.19,1.66c0.25,0.57,0.24,1.18,0.56,1.37s-0.04,1.29,1.09,0.6c1.14-0.7,1.63-1.34,1.82-1.79,0.19-0.44,0.53-2.09,0.72-2.34,0.18-0.25,0.56-1.43,0.68-1.81,0.13-0.38,0.63-1.9,0.63-2.22s0.06-1.59-0.25-2.22c-0.32-0.63-1.19-1.31-1.19-1.31l-0.91-1zm-4.9,15.4c-0.26,0.07-0.97,0.19-1.28,0.44-0.32,0.26-0.63,0.56-0.69,0.75s-0.5,0.94-0.5,1.19,0.06,1.15,0,1.41c-0.06,0.25,0,0.56-0.56,0.81-0.57,0.25-1.22,0.43-1.6,0.56s-0.81,0.44-1.06,0.69-0.94,0.72-0.94,0.72-0.53,0.18-0.53,0.5c0,0.31,0.41,0.99,0.53,1.25,0.13,0.25,0.75,1.22,0.75,1.22l-0.18,0.75s-1.04,0.74-1.1,1.06c-0.06,0.31-0.12,1.59-0.12,1.97s0.06,1.74,0.06,2c0,0.25,0.19,1.84,0.19,2.09s0.15,1.34,0.28,1.97c0.12,0.63,0.12,1.06,0.43,1.44,0.32,0.38,0.56,1.03,0.88,1.22s0.5,0.68,0.88,0.62c0.37-0.06,1.71-1.03,1.71-1.03s0.63-0.62,0.75-1.06c0.13-0.44,0.44-2.16,0.44-2.16s0.19-1.37,0.13-1.69c-0.07-0.31-0.69-0.65-0.75-1.22-0.07-0.56-0.07-0.8,0-1.68,0.06-0.89,0.87-2.09,1.06-2.35,0.19-0.25,0.84-1.18,0.97-1.93,0.12-0.76-0.07-1.84,0.19-2.16,0.25-0.32,0.8-0.75,1.06-1.06,0.25-0.32,1.06-1.65,1.18-2.03,0.13-0.38,0.13-1.4,0.13-1.91s-0.31-1.37-0.56-1.56c-0.26-0.19-1.75-0.82-1.75-0.82zm-8.35,23.69c-0.31-0.01-0.62,0-0.75,0.03-0.25,0.07-0.56,0-0.81,0.32-0.25,0.31-0.78,0.71-1.22,0.84s-0.87,0-0.93,0.31c-0.07,0.32-0.26,0.87-0.26,1.13,0,0.25,0.06,0.74,0.32,1,0.25,0.25,0.62,0.21,0.75,0.78,0.12,0.57,0.19,1.18,0.12,1.44-0.06,0.25-0.31,1.12-0.37,1.43-0.07,0.32-0.19,0.4-0.38,1.03-0.19,0.64-0.31,1.38-0.31,1.76v1.15c0,0.38-0.06,1.19,0.13,1.44,0.18,0.25,0.62,0.56,0.87,0.81s1.47,0.47,1.72,0.47,0.5-0.28,0.75-0.66,0.56-0.99,0.56-1.56-0.12-2.96-0.06-3.28,1.12-0.84,1.19-1.41c0.06-0.56,0.03-1.74,0.09-2,0.06-0.25,0.31-1.15,0.31-1.15s0.75-0.44,0.88-0.81c0.12-0.38,0.25-1.13,0.25-1.5,0-0.38-0.19-1.54-0.19-1.54h-1.84c-0.19,0-0.5-0.02-0.82-0.03zm7.85,1.88c-0.57,1.01-0.72,0.99-0.78,1.75-0.07,0.76-0.88,1.53-0.88,1.53s-0.31,0.31-0.44,0.62c-0.12,0.32-0.69,0.81-0.06,1s1.72,0.19,1.97,0.07c0.25-0.13,0.75-0.69,1-0.82,0.25-0.12,0.44-0.49,0.44-1.37,0-0.89-0.19-1.9-0.31-2.16-0.13-0.25-0.94-0.62-0.94-0.62z","name":"Sakhalin Oblast"},"ka":{"path":"M888.56,146.75l-1.65,0.84c-0.26,0.13-1.25,0.88-1.25,0.88l-0.13,1,0.13,2.78,0.25,1.16-0.88,2.43-1.72,4.69-0.93,1.56-0.44,1.41-0.06,1.81s-0.22,1.03-0.47,1.22c-0.26,0.19-0.82,0.13-0.82,0.13h-1.81-2.59l-1.6-0.19-1.68-0.31s-0.53,0.25-0.85,0.25c-0.31,0-0.68,0.56-1,0.75-0.31,0.19-1.37,0.74-1.56,1-0.19,0.25-1.28,0.78-1.59,0.9-0.32,0.13-1.38,1-1.63,1.19s-0.78,0.56-1.22,0.63c-0.44,0.06-0.94-0.32-0.94-0.32s-0.62-0.99-0.74-1.25c-0.13-0.25-0.97-1.72-0.97-1.72s-0.07-1.31-0.13-1.62c-0.06-0.32-0.06-1.47-0.12-1.72-0.07-0.25-0.13-1.06-0.13-1.06s0.25-1.22,0.31-1.66c0.07-0.44,0.38-0.75,0.38-0.75s0-0.56-0.19-0.87c-0.19-0.32-0.81,0.06-0.81,0.06l-1.75,0.44-1.97,0.81-1.66,0.5-1.18,0.19-2.04-0.25s-1.62-0.38-1.87-0.57-1.03-0.12-1.03-0.12l-0.63,0.56-0.87,1.16-0.63,0.81-0.84,0.88s-1.31,0.74-1.56,0.87c-0.26,0.13-0.94,0.59-0.94,0.59l-1.22,1.32-1.44,2.28s-2.27,2.28-2.59,2.47-1.18,0.87-1.44,1.12c-0.25,0.25-1.34,0.38-1.72,0.44s-0.74,0.62-1,0.94c-0.25,0.31-1.15,1.28-1.15,1.28l-0.81,0.56s-0.75-0.31-1.13-0.31-0.44,0.31-0.44,0.31l-0.97,1.91-1,2.18s-0.5,1.59-0.5,1.91,0.63,0.44,0.88,0.63c0.25,0.18,1.65,0.8,2.03,1.06,0.38,0.25,1,0.84,1.31,1.15,0.32,0.32,1.41,1.32,1.41,1.32s-0.13,0.43-0.06,0.68c0.06,0.26,0.37,1.15,0.68,1.66,0.32,0.51,0.94,0.81,0.94,0.81s4.09,1.16,4.35,1.28c0.25,0.13,1.09,1.32,1.09,1.32l0.37,0.68s1.13,0.85,1.44,1.04c0.32,0.18,1.22,0.31,1.22,0.31l0.62,0.62,0.44,1.19s-0.31,1.59-0.37,1.97c-0.07,0.38-0.07,0.99,0,1.37,0.06,0.38,1.12-0.06,1.12-0.06s1.4-0.31,1.97-0.25,1.56,0.25,1.56,0.25,1.22,0.4,1.35,0.66c0.12,0.25,0.75,1.18,0.75,1.18l1.15,1.5,1.25,1.72,1.85,1.32,2,1.65,1,1.31s0.84-0.99,1.03-1.31c0.19-0.31,0-0.74,0-1.19,0-0.44-0.37-0.71-0.75-0.96-0.38-0.26-0.97-1.19-1.35-1.63-0.37-0.44-0.56-0.84-0.56-0.84s-0.81-1.06-1.06-1.31c-0.25-0.26-1.09-0.94-1.34-1.19-0.26-0.26-1.25-1.34-1.69-1.97s0-0.75,0-1.06c0-0.32,0.87-1.04,0.87-1.04s0.94-1.3,1.19-1.62,0.44-1.21,0.5-1.59,0.47-1.31,0.85-1.5c0.37-0.19,1.18-0.38,1.68-0.44,0.51-0.06,1.84,0.5,1.97,0.81,0.13,0.32-0.62,0.69-0.75,0.94-0.12,0.25,0,1.59-0.06,2.16-0.06,0.56,0.12,1.71,0.12,2.28,0,0.56,0.75,1.37,0.75,1.37s1.13,1.4,1.44,1.72c0.32,0.32,1.28,0.93,1.59,1.19,0.32,0.25,1.57,1.65,1.57,1.65l3.34,2.32,0.97,0.59s0.75,1.25,0.81,1.69c0.07,0.44,0.44,0.93,0.44,0.93s1.03,0.22,1.34,0.47c0.32,0.26,0.63,1.31,0.63,1.69s-0.12,1.03-0.44,1.47c-0.31,0.44-1.21,0.93-1.53,1.25s-0.69,0.75-0.69,0.75-0.06,5.68-0.06,6.25,0.75,1.78,1,2.16,1.21,2.14,1.72,2.9c0.5,0.76,0.69,1.12,0.69,1.44s0.25,1.66,0.25,1.66,0.56,10.46,0.62,11.09,0.59,1.03,0.78,1.41,0.75,0.93,1,1.18c0.26,0.26,0.75,0.84,0.88,1.16,0.12,0.32,0.97,1.62,0.97,1.62s0.74,2.78,0.87,3.54c0.13,0.75,0.13,1.72,0.13,1.72s1.31,3.96,1.31,4.4v1.47s-0.81,1.75-1.13,2.13c-0.31,0.37-0.06,1.77-0.06,2.09,0,0.31-1.34,2.46-1.84,2.84-0.51,0.38-1.31,1-1.44,1.38s0.25,1.03,0.25,1.03l1.81,0.87,2.28,0.94s1.09,2.15,1.47,2.66c0.38,0.5,0.56,1.59,0.56,1.9,0,0.32,0.32,3.47,0.44,4.16,0.13,0.69,0.38,1.65,0.56,2.09,0.19,0.45,1.79,1.5,1.79,1.5s2.21,3.94,2.34,4.25c0.13,0.32,0.81,1.69,1.06,2,0.08,0.1,0.29,0.25,0.53,0.41,0.62,0.78,3.07,1.94,3.07,1.94l0.93,0.62s4.63,4.25,4.69,4.5c0.06,0.26,2.78,2.32,2.78,2.32s2.34,0.84,2.6,1.03c0.25,0.19,1.68,0.75,1.68,0.75l14.91,10.22,2.03,1.21,3.03,0.94s1.19,1.59,1.44,1.72,3.15,1.19,3.59,1.19c0.45,0,1.47,1,1.47,1s2.59,2.78,2.97,3.03,2.56,1.91,2.56,1.91,2.09,1.18,2.47,1.18,2.85-0.5,2.85-0.5l0.68-0.62v-2.03s-0.06-1.69-0.06-1.88,0-1.21-0.25-1.53-0.81-0.88-0.81-0.88,0.18-1.52,0.44-1.96c0.25-0.45,0.43-0.69,0.43-1.07s-0.31-1.15-0.56-1.4c-0.25-0.26-0.5-1.19-0.5-1.19s-0.06-2.34-0.31-2.66c-0.25-0.31-1.09-0.99-1.28-1.62s-0.5-1.03-0.63-1.41c-0.12-0.38-1.37-1.62-1.62-2.06-0.26-0.44-1.53-1.59-1.72-1.84-0.19-0.26-0.31-1.28-0.5-2.1s-1.02-0.75-1.78-0.75-1.12-0.06-1.38-0.25c-0.25-0.19,0.5-0.43,0.75-0.56,0.26-0.13,1.09-0.9,1.28-1.22,0.19-0.31,0.5-1.37,0.5-1.37l0.69-4.22,1.91-1.6c0.38-0.31,0.25-0.93-0.19-1.31s-1.09-0.25-1.41-0.31c-0.31-0.06-0.8-0.84-1.31-1.16-0.5-0.31-0.84-0.81-1.28-1s-1.24-0.31-2.06-0.56-1.4-1.03-1.91-1.47c-0.5-0.44-0.44-1-0.5-1.25s-0.06-1.96-0.06-2.84v-1.22s-0.97-2.78-0.97-3.1c0-0.31,0.03-1.05,0.16-1.43,0.12-0.38,0.49-0.69,0.75-0.94,0.25-0.25,1.43-0.78,1.43-0.78l1.47-0.88s0.38-1.71,0.38-2.59-0.5-2.25-0.63-2.56c-0.12-0.32-1.34-0.72-1.34-0.72s-1.5-1.19-1.94-1.19-2.46-0.56-2.9-0.69c-0.45-0.12-1.6-0.78-1.85-0.9-0.25-0.13-1.71-1.25-2.09-1.56-0.38-0.32-1.25-1.1-1.5-1.41-0.26-0.32-0.75-1.44-0.88-1.75-0.12-0.32-0.84-1.66-0.84-1.66s0-0.55-0.13-1.12c-0.12-0.57-0.18-1.65-0.18-2.41s1.02-0.62,1.28-0.62c0.25,0,1.68-0.25,2-0.32,0.31-0.06,1.03-0.74,1.22-1,0.19-0.25,0.37-1.77,0.31-2.09s-0.65-0.81-1.22-1-0.94-0.78-1.12-0.84c-0.19-0.07-2.16-0.88-2.16-0.88s-2.06-0.69-2.5-0.75-0.59,0.44-0.84,0.63c-0.26,0.19-0.5,0.37-1.32,0.37s-1.22-0.44-1.22-0.44l-0.87-1.18s-1.18,0.06-1.81,0.06c-0.64,0-0.91-0.59-1.16-0.91-0.25-0.31-1.06-0.56-1.06-0.56s-0.47-0.19-0.69-0.28c0-0.06,0.19-3.44,0.13-3.69-0.07-0.25-0.66-1.21-0.91-1.47-0.25-0.25-1.37-0.44-1.94-0.44s-1.4,0.6-1.84,0.85-1.06,0.75-1.31,0.94c-0.26,0.19-0.13,1.12-0.13,1.68,0,0.57-0.34,1.03-0.72,1.35-0.38,0.31-0.68,0.25-1.31,0.25s-1.12-0.19-1.63-0.31c-0.5-0.13-0.77-0.56-1.03-0.82-0.25-0.25-1.06-0.96-1.37-1.47-0.32-0.5-0.19-1.05-0.25-1.62-0.07-0.57-0.84-1.65-1.1-2.16-0.25-0.5-1.24-2.34-1.37-2.59s-0.56-1.28-1-1.91-0.9-1.99-1.28-2.62-0.74-1.09-1.5-2.1-0.78-0.56-1.35-0.68c-0.56-0.13-0.99-0.78-1.5-1.35-0.5-0.57-0.84-0.93-1.15-1.75-0.32-0.82-0.37-0.83-0.94-2.15-0.57-1.33-0.07-1.09,0.19-1.66,0.25-0.57,1.06-0.62,1.06-0.62l0.47-0.88s-0.38-1.59-0.31-2.09c0.06-0.51,0.36-0.56,1.06-0.75,0.69-0.19,1.56,0.75,1.94,0.75s1.59-0.5,1.9-0.82c0.32-0.31,0.32-1.08,0.32-1.71,0-0.64-0.62-1-1.13-1.13s-0.94-0.56-0.94-1.06c0-0.51,0.25-1.21,0.25-1.91,0-0.69,0-0.74-0.06-1.25-0.06-0.5-0.12-0.53-0.25-0.91-0.13-0.37,0.06-1.18,0.19-1.68,0.12-0.51,0.56-0.44,0.94-0.38,0.37,0.07,1.24,0.69,1.62,0.94s0.65,0.62,0.84,1,1,1.09,1.63,1.16c0.63,0.06,1.15-0.38,1.15-0.38s-0.09-0.52-0.34-1.09-0.81-1.44-1-1.81c-0.19-0.38-0.5-1.22-0.75-1.6s-0.44-0.5-0.44-0.75,0.69-2.09,0.69-2.41v-3.78c0-0.82,0.19-1.4,0.38-1.72,0.19-0.31,0.87-1.24,1.25-2.06s0.84-1.15,1.09-1.9c0.25-0.76,0.87-1.4,1.44-2.16s0.77-1,1.15-1.12c0.38-0.13,2.91,0.06,3.29,0.06,0.37,0,1.96-0.44,2.65-0.56,0.7-0.13,2.71-0.31,3.41-0.57,0.69-0.25,0.25-0.59,0.18-0.84-0.06-0.25-1.27-0.94-1.65-1.06-0.38-0.13-1.12-0.69-1.38-0.94-0.25-0.25-0.5-1.16-0.5-1.16s-0.59-2.96-0.65-3.28c-0.07-0.31-0.75-1.56-0.75-1.56s-0.13-5.18-0.13-5.63c0-0.44-0.68-2.02-1.37-2.34-0.7-0.32-0.91-0.99-0.91-1.5s0-0.96-0.12-1.59c-0.13-0.64-0.75-1.37-1-1.88-0.26-0.5,0.12-0.78,0.12-1.22s-0.12-1.18-0.5-1.5c-0.38-0.31-0.68-0.49-0.94-0.75-0.25-0.25-0.46-0.9-0.46-1.53s0.28-1,0.34-1.31c0.06-0.32,0.06-1.09-0.06-1.53-0.13-0.44-0.35-1.06-0.41-1.31-0.06-0.26-0.37-1.22-0.37-1.22s-0.5-0.44-0.69-0.44-0.94-0.19-0.94-0.19l-1.78-0.31s-1.69-0.44-1.81-0.69c-0.13-0.25-1.04-0.69-1.04-0.69l-1.56-0.59zm7.25,70.22c-0.88,0.44-1.12,0.43-1.06,1s0.37,1.09,0.63,1.47c0.25,0.38,0.44,0.93,0,1.44-0.45,0.5-1.45,0.52-1.19,1.15,0.25,0.63,0.49,1.06,0.75,1.31,0.25,0.26,0.81,0.9,0.94,1.41,0.12,0.51-0.01,1.06,0.31,1.56,0.31,0.51,0.31,0.69,0.69,0.69,0.37,0,0.59,0.32,0.65-0.5s-0.06-0.95,0-2.84c0.06-1.9,0-2.84,0.06-3.41,0.07-0.57,0.26-1.37,0-1.75-0.25-0.38-1.28-0.9-1.4-1.22-0.13-0.31-0.38-0.31-0.38-0.31zm58.91,12.47c-1.07,0.71-1.16,0.62-1.16,1.15,0,0.54-0.18,0.9,0.53,0.72,0.72-0.18,0.91-0.18,1-0.62,0.09-0.45-0.37-1.25-0.37-1.25zm-10.97,4.53c-0.63,0.45-1.08,0.2-0.81,1.09,0.27,0.9,0.44,1.16,1.15,1.25,0.72,0.09,0.73,0.1,2.07,0.1s2.31,0.06,3.03,0.06c0.71,0,0.99,0.36,1.43,0,0.45-0.36,0.63-0.07,0.54-0.78-0.09-0.72-1.24-0.9-2.22-0.81-0.98,0.08-1.52,0.34-3.13-0.19-1.6-0.54-2.06-0.72-2.06-0.72z","name":"Kamchatka Krai"},"in":{"path":"m33.393,395.68,0.08929,5.2679,17.946-8.5714-1.3393-1.25-2.9464-1.25-1.5179-1.9643-2.4107,2.4107-4.1071-2.6786-1.875,1.0714,0.08929,5.8929-1.5179,1.0714z","name":"Republic of Ingushetia"},"cc":{"path":"m33.482,401.04,1.0714,2.5,3.125,1.6964,3.4821,0.44642,2.1429-1.9643,2.1429,1.7857,2.5-1.5178-0.08929-1.6072,1.875-2.1428,2.8571,0.44642,3.8393-2.8571-0.625-1.9643-4.4643-0.53572,0.44643-2.7679z","name":"Chechen Republic"}}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2177:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'asia_en', {"width":950,"height":550,"pathes":{"id":{"path":"m 615.27242,460.80117 -3.29462,12.37981 -17.87084,6.03301 -5.34842,-6.27548 -2.59577,0.71313 4.84924,18.71232 7.25958,0.81296 9.6842,3.66545 v 3.66545 l 4.43562,-0.81296 6.46089,-8.94255 v -7.31664 l 3.63692,-7.31663 4.03627,0.81296 -4.84923,-10.16912 -0.74165,-6.54647 -5.66219,0.58476 0,0 m -84.43367,-9.74124 -0.39934,3.25183 9.6842,16.27345 h 2.82396 l 20.18136,33.75921 8.07254,0.81296 4.03627,-11.79505 -6.46088,-4.06479 -1.21231,-6.50368 -36.7258,-31.73393 0,0 m 95.62969,44.98374 3.22331,3.9507 -2.09658,5.93318 v 1.12673 h 4.76366 l 1.68297,-14.83294 1.54034,0.42787 2.79544,13.54932 2.66708,0.71313 2.52445,-5.79056 -2.52445,-8.75714 -2.09658,-3.80807 6.58925,-4.80644 -1.54035,-2.12511 -6.304,4.09332 h -1.68296 l -3.08069,-4.52119 0.98411,-1.98248 5.19153,-2.53872 7.84434,2.3961 2.38183,-0.14263 5.89039,-5.5053 -2.38183,-2.39609 -5.46252,4.23594 h -3.50856 l -5.31989,-2.53871 -3.77955,0.14262 -4.20742,6.77466 -2.66707,11.72373 -1.42625,4.67808 0,0 m 35.17119,-26.5424 -2.66708,6.48941 4.20742,5.5053 h 1.39772 l 1.82559,-3.66545 0.98411,-1.26935 -1.82559,-1.98248 -2.66708,-0.98411 -1.25509,-4.09332 0,0 m 8.27222,21.32235 -5.74777,1.26936 -1.68297,1.83985 1.39772,2.39609 3.77955,-1.41198 2.38183,-1.41198 3.50856,2.82396 1.54034,-1.26935 -2.79544,-3.39447 -2.38182,-0.84148 0,0 m -95.30166,18.35576 -3.92217,2.68134 0.84149,2.25347 12.47964,2.82396 6.304,1.12674 2.66707,2.82396 7.14549,0.5705 3.36593,2.82396 3.08069,-0.71312 2.8097,-2.53871 -5.19153,-2.39609 -4.4784,-3.80808 -11.63816,-2.82396 -13.46375,-2.82397 0,0 m 40.79059,12.27997 -3.08068,1.69723 1.82559,1.98248 4.47841,-1.69723 -3.22332,-1.98248 0,0 m 5.3199,-1.26936 0.55623,2.68134 3.22331,0.84149 1.2551,-1.55461 -1.39772,-2.12511 -3.63692,0.15689 0,0 m 7.71598,7.05991 -3.92217,0.5705 3.50856,2.96659 h 2.79544 l -2.38183,-3.53709 0,0 m 1.11247,-4.66382 -0.84149,1.69723 6.30401,0.98411 4.90628,-2.82396 -2.79544,-0.84149 -4.47841,1.26936 -1.68297,-1.41198 -1.41198,1.12673 0,0 m 57.39207,-40.47681 -5.94744,0.67033 -3.82233,2.79544 1.58313,3.19479 6.47515,1.19804 v 1.19805 l -4.09332,3.32315 1.98248,6.91728 1.98248,0.12836 1.71149,-6.78892 h 3.16626 l 1.32641,6.6463 15.44623,12.77915 0.39935,9.98371 5.2771,5.71924 2.38183,-0.12836 0.52771,-35.25676 -8.97108,-6.24695 -8.45763,5.71924 -3.0379,1.86838 -5.02038,-3.19479 -0.12836,-10.11207 -2.78118,-0.41361 0,0 z","name":"Indonesia"},"ye":{"path":"m 355.61037,425.50163 3.0379,3.39446 4.10758,-2.48167 1.4833,-0.49918 -1.88265,-1.8256 -3.6084,1.06969 -3.13773,0.3423 0,0 m -39.40714,-14.86147 2.0538,6.10433 v 5.9617 l 4.9348,4.4784 34.77184,-14.1626 0.32804,-3.89365 -5.57662,-10.01224 -13.99146,4.46415 -8.02975,7.90139 -9.31338,-5.5053 -5.17727,4.66382 0,0 z","name":"Yemen"},"my":{"path":"m 590.2561,472.95278 4.30725,4.97759 16.51591,-5.71924 3.2661,-12.608 7.35942,-0.52771 6.73188,-4.87776 -8.72862,-6.36105 -1.99674,-3.4943 -4.30726,7.94419 1.58313,4.56398 -2.62429,3.80807 -4.94906,-1.26936 -11.99472,8.79993 0.31377,5.09169 -5.47677,-0.32803 0,0 m -44.82687,-24.91649 2.86676,6.43236 0.64181,8.35779 3.83659,5.94744 9.25633,5.6194 3.50856,0.32804 -0.64181,-5.79055 -3.0379,-7.38795 -4.44988,-9.456 -0.37083,1.65444 -5.36268,-0.24246 -3.85086,-5.53382 -2.39609,0.0713 0,0 z","name":"Malaysia"},"bn":{"path":"m 612.5483,453.45602 -4.10759,4.97759 3.36594,1.05542 1.8969,-2.65281 -1.15525,-3.3802 0,0 z","name":"Brunei Darussalam"},"tl":{"path":"m 650.15836,523.58445 -7.28811,6.0758 0.69886,1.55461 3.08069,-0.5705 3.63692,-3.39446 7.14549,-0.98411 -1.39772,-2.39609 -5.87613,-0.28525 0,0 z","name":"Timor-Leste"},"ph":{"path":"m 626.24024,422.47799 -1.22657,2.33904 -0.6846,2.88101 -6.81744,8.65731 0.41361,1.7828 2.86675,-0.41361 8.85698,-9.89814 -3.40873,-5.34841 0,0 m 11.03913,-3.29463 -0.14262,7.14549 2.59576,2.61002 0.95559,5.07743 2.59576,0.55624 1.22657,-3.16626 -2.03953,-1.51182 -0.54197,-8.92829 -4.64956,-1.78281 0,0 m 7.37369,2.75265 -0.14263,6.31827 1.49756,2.4674 2.59576,-3.02364 -0.68459,-5.49104 -3.2661,-0.27099 0,0 m 1.62592,-5.5053 2.59576,3.43725 1.22657,3.29463 h 2.32478 l -0.41361,-5.63367 -2.59577,-1.78281 -3.13773,0.6846 0,0 m 5.0489,12.92178 0.54197,4.12184 -4.77791,3.85086 -3.9507,0.41361 -4.22169,4.53546 0.14263,2.06805 3.9507,-1.24083 2.72412,-1.7828 2.32478,5.90465 4.09332,2.88101 1.64018,-0.55623 1.49756,-1.78281 -3.2661,-3.29462 1.91117,-1.51182 2.18215,1.7828 1.49756,-2.4674 -1.49756,-3.02364 -0.27098,-6.73187 -4.5212,-3.16626 0,0 m -22.22089,-41.90306 -3.67971,2.61002 -0.41361,8.2437 5.7335,11.1247 1.91117,1.51182 2.45314,-1.65444 4.22169,0.68459 0.81295,3.70824 3.13774,0.27099 1.49756,-2.0538 -1.91117,-2.61002 -2.32478,-2.19642 -4.90628,-0.54197 -2.59576,-4.26447 2.99511,-4.53546 0.27099,-3.97922 -2.03953,-5.07743 -5.16301,-1.24083 0,0 m 1.91117,24.58845 1.08395,3.85086 1.91116,1.24083 1.3692,-1.7828 -2.18216,-3.02364 -2.18215,-0.28525 0,0 z","name":"Philippines"},"cn":{"path":"m 584.10898,383.45594 -3.40872,0.95558 -2.45314,3.02364 2.03953,3.97922 2.99511,0.27099 3.40872,-3.02364 0.81296,-3.97922 -3.39446,-1.22657 0,0 m -127.54903,-142.76706 -4.93481,12.40832 -6.80319,-0.35656 -7.174,15.70295 6.09006,7.75877 -12.55095,17.32887 -6.44663,-1.08394 -4.30725,5.41972 1.06968,3.25184 5.02038,0.35656 2.51019,5.77629 5.02038,1.08395 15.4177,19.86758 v 10.11208 l 7.53057,4.69234 8.24369,-1.44051 10.39733,6.13285 12.55095,3.6084 6.09006,-0.72738 6.81745,-0.72739 14.33375,-9.38469 4.66382,0.72739 1.78281,4.23595 3.9507,1.18378 5.37694,7.94418 -3.57988,7.94418 2.15363,5.41973 6.09007,2.16789 1.06968,6.50368 7.17401,0.72738 1.06968,-3.25184 10.39732,-5.41973 6.44663,0.35657 7.53057,8.30074 5.02038,-2.16789 3.22331,0.35656 1.44051,3.97922 2.51019,0.35656 3.57987,-5.04891 14.33376,-5.41972 12.90751,-15.53181 4.30726,-14.80441 -0.35656,-9.75551 -5.37694,-1.08395 3.22331,-3.6084 -0.71312,-5.77629 -13.62064,-13.72047 v -6.86023 l 3.93644,-5.04891 3.93643,-1.81133 0.35656,-3.97922 H 598.2288 l -1.79707,5.41973 -4.66382,-1.08395 -5.7335,-6.13285 3.57988,-9.38469 5.02038,-5.41973 4.66382,0.35656 -0.71313,8.30075 2.51019,2.16789 6.09007,-6.13285 2.15363,-0.35656 -0.71313,-4.69235 5.73351,-6.86023 4.30725,0.35656 2.51019,-7.94418 2.93807,-1.55461 0.29951,-4.94907 -2.85249,-2.99511 -0.24246,-7.81582 5.49104,-0.35656 -0.35656,-20.15284 -3.85086,2.31052 -1.44051,5.16301 -6.43236,-0.0143 -18.64101,-10.48289 -13.46375,-16.23066 -13.66342,-0.14263 -3.48004,3.02364 4.42136,10.12633 -1.54035,9.49879 -5.5053,2.28199 -3.09495,-0.24246 -0.2282,9.39895 3.22331,0.72739 5.73351,-2.52446 7.53057,3.6084 v 3.6084 l -5.37694,0.35656 -4.30726,9.38469 -3.93644,0.35656 -13.97719,18.41282 -14.69032,6.50367 -10.04076,0.72739 -6.80319,-4.69235 -9.6842,5.06317 -10.39732,-3.25184 -2.51019,-6.86023 -17.55707,-1.08395 -9.31337,-15.16098 h -3.93644 l -3.16626,-7.03138 -3.76528,-0.29951 z","name":"China"},"tw":{"path":"m 623.51612,352.27824 -5.04891,3.85086 -0.27099,7.41647 4.36431,5.07743 1.08395,-0.95558 -0.12836,-15.38918 0,0 z","name":"Taiwan"},"jp":{"path":"m 646.00799,306.7953 -2.32478,2.33905 0.95558,3.29462 2.03953,0.14262 1.3692,7.14549 1.64018,1.7828 2.86675,-2.61002 1.22657,-4.67808 -3.55135,-5.07743 -4.22168,-2.33905 0,0 m 12.55095,-4.66381 -3.9507,3.70823 -0.14262,4.26447 0.95558,1.24083 5.31989,-4.53545 -0.41361,-4.53546 -1.76854,-0.14262 0,0 m -5.46252,-8.79993 -6.96007,7.9727 1.22657,1.92543 3.40873,0.41361 6.40383,-4.94906 4.50694,-0.82723 4.09332,4.80645 3.13773,-1.09821 1.22657,-4.67808 5.86187,-0.14263 5.7335,-6.87449 -2.99511,-11.40996 -1.3692,-6.04728 2.99512,-2.4674 -6.81745,-10.29748 -1.76854,0.14262 -3.67971,4.12185 v 3.43725 l 1.64018,1.92543 0.54197,9.07091 -4.22168,5.22006 -2.45314,-1.51182 -1.91117,4.26447 -0.41361,3.97922 1.49755,2.33904 -0.95558,1.78281 -3.13774,-2.61003 h -2.18215 l -1.91117,1.09821 -1.49756,0.41361 0,0 m 11.738,-62.09868 -2.18216,1.92543 1.09821,4.12184 1.91117,1.92543 -0.14263,6.31827 -2.45314,0.95558 -1.91117,4.26447 5.59088,7.68746 3.67971,-1.24084 0.6846,-1.92543 -3.9507,-3.56561 2.45314,-3.16626 2.59577,0.41361 2.03953,2.19642 0.14262,-4.53546 5.59088,-4.53546 3.13774,-0.82722 -2.59577,-4.39283 -1.22657,-1.92543 -2.03953,1.36919 -1.76854,2.19642 -3.82233,-0.82722 -3.9507,-2.61003 -2.88101,-3.82233 0,0 z","name":"Japan"},"ru":{"path":"m 222.95538,214.51729 -2.13937,-0.21393 -3.85086,4.60676 v 2.15363 l 1.28362,0.49919 2.49593,0.0713 4.13611,-3.3802 0.57049,-1.15526 -2.49592,-2.5815 0,0 m 462.45974,12.45112 -3.82233,5.36267 0.27098,2.61003 1.91117,-0.82722 4.49267,-5.63367 -2.85249,-1.51181 0,0 m 5.04891,-7.83009 -1.3692,3.70824 0.14263,2.4674 2.32478,-1.51182 2.18215,-4.39283 v -1.64018 l -3.28036,1.36919 0,0 m 8.04402,-32.70378 -1.76855,2.19642 0.14263,3.43724 1.64018,-0.14262 2.72413,-4.80644 -2.73839,-0.6846 0,0 m -3.2661,8.38632 v 6.04727 l 1.91116,0.6846 1.3692,-2.19642 v -4.66382 l -3.28036,0.12837 0,0 m -55.78042,-21.85007 -0.12836,8.79993 11.03913,17.04362 3.95069,14.83294 6.96008,13.19276 2.72412,0.95559 2.32478,-1.92543 1.08395,-3.16627 -9.95519,-10.85372 0.27099,-5.63366 2.18215,-0.95558 0.54198,-3.29463 -19.49677,-27.61209 -1.49755,-1.38346 0,0 m 76.91736,-27.3411 -2.72413,0.27098 1.64018,2.33904 3.40873,2.33905 0.95558,-1.09821 -3.28036,-3.85086 0,0 m 5.30563,1.65444 0.41361,2.33904 4.22168,1.24083 0.41361,-1.65444 -5.0489,-1.92543 0,0 m -439.95361,-93.832618 2.45314,0.984108 -1.72576,2.966589 v 4.207421 l -3.67971,2.224941 h -3.92217 l -2.21068,-2.724127 0.24246,-2.966588 1.72576,-2.224942 h 3.43725 l 3.67971,-2.467402 0,0 m 9.32764,-2.724127 v 2.966588 l 2.45314,1.98248 3.43724,-0.242462 2.95233,-2.724126 v -1.98248 h -2.6956 l -2.21068,0.741647 -1.72576,-1.98248 -2.21067,1.240833 0,0 m 14.00572,0.256724 1.72575,3.708235 3.43725,0.242462 2.45314,-0.984109 -1.22657,-3.465774 -3.19479,-0.741647 -3.19478,1.240833 0,0 m 13.99145,-4.949068 -2.6956,-0.499186 -2.45314,2.481666 1.22657,2.224941 0.74165,3.465774 3.19479,-2.467403 0.74164,-2.724127 -0.75591,-2.481665 0,0 m 14.97557,26.228634 -0.74165,3.465774 -5.64793,4.949068 -12.0375,2.724127 -9.82682,16.330498 -1.72576,4.706608 9.82683,2.48166 1.46903,-5.93317 2.95232,-9.156492 7.61615,-3.964959 6.38957,-4.949068 4.66382,-1.98248 h 2.45314 v -6.674824 l -5.3912,-1.996742 0,0 m -31.67689,36.126775 6.63204,0.74164 2.21068,7.6732 5.64792,5.93317 -1.96821,3.96496 h -3.43725 l -3.19479,-3.70823 -7.11696,-0.24246 -2.95232,-3.96496 v -2.72413 l 4.42135,-1.24083 -0.24246,-6.43236 0,0 m 103.64518,-84.376623 -3.19479,-1.982479 h -3.67971 l -0.74164,2.224941 -3.92218,2.224941 -2.95232,0.984109 -0.48492,2.966588 6.87449,0.499186 8.10107,-6.917286 0,0 m 7.60188,0.741647 -1.72575,3.708236 -3.43725,-0.242462 -5.40547,3.96496 -1.46903,4.949068 h 3.43725 l 1.96822,-3.223313 4.66382,3.465774 4.42135,-1.982479 3.19479,-2.724127 -1.22657,-4.207421 -1.72575,-2.966589 -2.69561,-0.741647 0,0 m 7.13123,2.724127 1.72575,6.931548 2.6956,6.432362 2.95233,-5.191529 5.64793,-1.240833 v -3.708236 l -3.67971,-2.724126 -9.3419,-0.499186 0,0 m 134.75157,-11.096181 3.83659,3.223312 2.72413,-1.126733 0.7987,-4.521195 -5.59088,-3.865122 -3.67971,2.424615 -8.95681,0.81296 v 4.036271 l -9.44174,0.156887 v 6.603512 l 11.03913,8.215168 2.88101,-2.09658 -0.64181,-5.804814 7.04565,-1.768543 -1.44051,-2.73839 -2.55297,-2.581502 3.97922,-0.969846 0,0 m 10.24043,-3.865123 2.55298,4.834969 9.92666,-1.126733 2.72413,-3.551349 -0.64181,-3.0664252 -2.72413,-1.1267331 -2.55298,1.9396923 -7.35942,1.611656 -1.92543,0.484923 0,0 m -0.64181,18.854951 -4.96333,-1.28362 -2.86675,3.066426 -1.28362,4.193158 6.71761,-0.64181 5.12022,-2.581502 -2.72413,-2.752652 0,0 m 128.63298,-27.8830777 -4.16463,-1.2836199 -4.79218,1.768543 -2.39609,3.5513486 3.0379,4.036272 8.00123,-3.5513489 1.59739,-1.7685431 -1.28362,-2.7526517 0,0 m -26.68503,98.6533297 2.51019,8.67156 5.02038,1.44051 5.02038,-7.94418 -2.86675,-5.419732 1.06968,-4.692344 h 7.53058 l -1.79707,3.608399 0.71312,13.007347 -10.75388,26.72782 1.06968,5.77629 -0.35656,9.75551 20.06726,29.25228 3.93643,1.08394 0.35656,-23.83254 3.93644,-3.6084 -4.30726,-9.38469 3.57987,-3.97922 -7.88713,-10.46863 -4.30726,0.35656 -1.42624,-17.32887 11.11044,-2.89528 0.71313,-5.06317 5.7335,-1.4405 3.22331,2.89527 3.93643,-15.88836 6.80319,-11.55258 5.37694,-2.895276 4.66382,0.356561 v -5.419729 l -7.53057,-1.440506 -10.39732,-8.671566 5.02038,-5.77629 -4.30726,-9.755512 3.57987,-3.608398 4.30726,5.77629 10.75389,3.979221 11.82356,1.083946 1.44051,-5.048905 -6.09007,-6.132851 6.80319,-9.384688 -15.4177,-5.419729 -3.93644,7.944182 -5.02038,-6.503675 -28.31095,-9.755512 -26.8847,4.692344 -3.93644,2.167892 v 2.167891 l 5.7335,2.895277 -0.71312,6.860235 -10.39732,-4.335783 -22.93401,9.028127 -3.93644,-8.300742 h -15.77426 l -7.17401,7.58762 -25.4442,-5.77629 -23.29057,4.692344 -2.86675,7.216797 3.57987,1.083946 -0.35656,5.419728 -22.57745,2.524453 1.44051,7.216797 -20.79464,-3.608399 5.02038,-9.384688 -21.15121,-1.083946 1.79707,9.755512 -6.80318,3.251837 -5.73351,-5.419728 -23.29057,3.979221 -8.95681,8.300743 -0.35656,5.048905 -5.73351,0.356561 -0.71312,-5.77629 18.28445,-15.888362 V 44.380597 l -11.82356,-3.251837 -15.4177,5.048905 -6.44663,-6.503674 h -2.86675 l -3.57987,7.216796 2.86675,3.251838 -20.43808,11.196018 -17.55707,13.36391 -10.75389,14.804417 v 6.132851 l 11.46701,4.692349 -5.7335,4.33578 -12.18013,-4.33578 -5.02038,4.33578 -7.53057,-8.671568 -1.44051,3.251837 8.24369,26.000431 2.15363,0.72739 5.73351,-2.89528 2.86675,2.16789 v 4.69235 l -5.37694,-2.16789 -3.22332,2.52445 2.15363,4.69234 -1.79707,12.27997 -11.11044,1.08394 -0.71312,-3.97922 6.44662,-3.97922 1.44051,-10.83946 -7.17401,-9.38469 -2.51019,-16.24492 -11.467,-1.81133 -1.06969,5.77629 2.15363,2.89528 -4.66382,3.97922 1.79707,10.83946 6.80319,2.89527 1.4405,7.94418 -6.81745,-4.33578 -17.55706,-3.25184 -2.15363,5.77629 -13.9772,5.04891 -2.15363,-3.6084 -18.28445,10.11207 -0.35656,6.86024 -7.17401,1.08394 2.15363,-5.0489 v -5.04891 l -7.17401,-2.52445 -4.66382,1.81133 3.93643,7.58762 2.86676,5.04891 v 3.97922 l -5.37695,-1.08395 -1.06968,-1.08394 -5.37694,5.77629 2.86675,5.0489 -12.18013,-0.35656 3.93644,5.06317 -1.06969,2.16789 h -6.44662 l -4.66382,-3.25184 -1.06968,-9.02812 -7.53057,-2.89528 v -3.6084 l 15.77426,3.25184 8.60025,0.72738 3.57988,-5.41973 -3.22331,-5.77629 -22.93401,-9.02812 -7.91566,1.96821 -2.70987,2.32478 0.84149,5.34842 3.36594,0.58476 -0.78444,8.41484 10.38306,24.38878 -7.50205,11.89488 -0.51344,2.68134 3.80807,2.68134 -3.43725,2.26773 -2.28199,0.0428 0.42787,10.4829 3.152,4.46415 0.0428,4.33578 4.03627,0.37082 6.17564,2.35331 6.5322,8.98534 0.0713,2.36756 -2.1251,3.63692 4.87775,-0.27098 4.7494,1.36919 6.4181,9.08518 15.80278,1.44051 -0.68459,10.81093 -5.44826,4.66382 1.12674,1.82559 -5.37694,5.77629 -1.42625,5.41973 3.22331,4.69234 10.39733,3.6084 4.30725,-2.52445 27.59783,10.46863 1.06969,-2.89527 -5.73351,-5.41973 v -6.86024 l -3.57987,-1.08394 0.71312,-5.77629 5.7335,-6.86024 -10.28322,-7.70172 0.71312,-10.71109 10.99635,-7.23106 12.90751,0.72738 2.15363,3.97922 13.26407,0.72739 9.6842,-5.41973 -5.02038,-5.41973 1.06969,-10.11207 25.08763,-12.27997 19.29709,8.70009 6.44663,-5.77629 18.99757,18.05626 14.33376,-1.44051 5.02038,5.04891 13.62063,1.4405 8.95682,-12.27996 11.467,5.06317 6.09006,1.08394 6.09007,-5.41973 -5.37694,-3.60839 4.66382,-7.2168 13.26407,4.33578 2.86675,5.77629 5.7335,0.35656 3.57988,-2.52445 9.6842,-0.35656 1.06968,2.52445 11.11044,0.72739 7.53057,-7.94418 15.41771,1.81133 4.66381,-1.81133 1.42625,-8.67157 -4.66382,-10.46863 4.66382,-3.97923 h 14.69032 l 13.97719,16.61575 17.91363,10.11207 h 5.37694 l 0.71312,-4.33578 6.44663,-3.97922 0.71312,23.47598 -5.7335,0.35656 v 5.77629 l 3.22331,3.97922 -0.59902,5.16301 2.38183,0.98411 1.4405,-3.6084 2.15363,0.72738 1.42625,1.44051 6.44662,-1.44051 6.44663,-18.78363 0.71312,-23.47599 -8.24369,-18.78364 -10.39733,-12.63652 -5.02038,0.72738 v 3.97922 l -12.18012,-4.69234 4.66382,-10.11207 3.93643,-26.72782 16.48739,-5.04891 7.88713,-5.0489 h 8.60025 l -2.15363,2.89527 2.15363,3.6084 7.53057,-7.94418 4.30726,0.35656 -0.71312,-4.69234 -6.81745,-1.44051 4.66382,-16.97231 6.14711,-5.81907 0,0 z","name":"Russian Federation"},"mv":{"path":"m 436.59252,455.60965 0.42788,3.72249 2.38183,0.87001 0.42787,-3.28036 -3.23758,-1.31214 0,0 m 3.0379,7.87286 -0.21393,4.59251 1.74002,0.87001 1.52608,-3.06643 -3.05217,-2.39609 0,0 m 0.44214,8.97108 -1.52608,1.52608 1.74002,1.52608 2.16789,-1.52608 -2.38183,-1.52608 0,0 z","name":"Maldives"},"lk":{"path":"m 471.02206,437.48208 0.35657,3.87938 0.35656,2.82397 -2.09658,0.35656 1.05542,6.34679 3.152,1.76854 4.89202,-2.82396 -1.39772,-6.68909 0.35656,-2.4674 -4.54972,-4.22169 -2.12511,1.0269 0,0 z","name":"Sri Lanka"},"mn":{"path":"m 461.40918,240.8315 8.30074,-11.01061 9.96945,4.60677 6.77466,1.81133 8.30074,-7.61614 -5.63366,-4.15037 3.70823,-5.23432 11.06766,3.90791 3.83659,6.28974 6.93155,0.18541 3.62266,-2.6956 7.45926,-0.29951 1.62592,2.76691 12.39406,0.62755 7.84435,-8.00123 10.85372,1.14099 -0.62755,10.89651 4.74939,1.08395 5.83334,-2.65282 6.17564,3.05216 -0.14262,1.54035 -4.47841,0.12836 -4.66382,9.78404 -3.62266,0.35656 -14.09129,18.41281 -14.39081,6.34679 -8.9996,0.69886 -7.47352,-4.82071 -9.55584,5.10596 -9.41321,-2.9238 -2.66708,-6.83171 -17.82806,-1.2551 -9.12796,-15.47475 -4.43562,-0.28525 -2.29625,-5.49104 0,0 z","name":"Mongolia"},"kp":{"path":"m 610.42319,275.20399 2.62429,1.09821 0.7987,9.18501 5.20579,0.29951 4.90628,-5.74776 -1.69723,-1.51182 0.19967,-6.16138 4.50694,-5.44825 -2.29626,-4.13611 1.49756,-1.71149 0.82722,-4.27873 -2.61003,-1.18379 -2.22494,1.12674 -2.75265,8.35779 -4.44988,-0.38509 -5.14874,6.0758 0.61328,4.42136 0,0 z","name":"North Korea"},"kr":{"path":"m 624.77121,280.80913 8.81419,7.18827 1.49756,6.96008 -0.29951,3.73676 -4.30726,4.84923 -3.70824,0.19967 -4.20742,-9.08518 -1.59739,-4.33578 1.69723,-1.31214 -0.39935,-1.81133 -2.09658,-0.94132 4.60677,-5.44826 0,0 z","name":"South Korea"},"kz":{"path":"m 322.90658,267.14571 5.84761,-2.49593 6.53219,-0.2282 0.4564,9.98371 h -3.82233 l -2.9238,4.76366 3.82233,6.34679 5.63367,3.18052 0.51344,3.63693 2.06806,-0.6846 1.91117,-2.26773 3.152,0.6846 1.58313,3.18052 h 4.05053 v -4.07906 l -2.48166,-7.25958 -1.12674,-5.89039 7.20254,-3.18052 9.6842,1.58313 6.0758,6.11859 13.73473,-1.35494 7.65893,10.88225 8.99961,0.4564 2.48166,-4.07906 3.152,-0.6846 0.4564,-4.53546 4.72087,-0.2282 2.48166,2.95233 2.48167,-5.89039 21.3794,2.95233 3.59414,-4.76366 -6.0758,-7.48778 8.10107,-17.68543 6.5322,0.45639 4.50693,-10.88224 -8.9996,-0.9128 -5.17727,-4.99185 -14.26245,1.65444 -18.37002,-17.75674 -6.47515,5.74776 -19.63939,-8.91402 -24.08927,11.79504 -0.67033,8.38631 5.63366,6.57499 -10.98208,6.20416 -14.24818,-0.31377 -2.98085,-4.37857 -11.16749,-0.61329 -10.58274,6.80319 -0.2282,9.29911 9.85535,7.91566 0,0 z","name":"Kazakhstan"},"tm":{"path":"m 347.38094,294.20157 -0.88427,3.75102 h -5.91892 v 5.07743 l 6.36105,4.19316 -1.96822,5.74776 v 2.65282 l 2.63856,0.44213 3.50856,-4.63529 7.90139,-1.76854 16.88673,6.40383 0.21394,4.6353 9.42748,0.88427 10.52568,-11.0534 -1.31214,-3.53708 -7.01713,-1.54035 -19.73922,-12.82193 -0.88427,-4.6353 h -7.45926 l -3.29462,6.1899 h -3.29463 l -5.69071,0.0143 0,0 z","name":"Turkmenistan"},"uz":{"path":"m 397.39933,310.56059 4.39283,0.2282 v -7.51631 l -4.16463,-2.42461 7.01712,-8.84272 h 2.85249 l 2.85249,3.32315 7.45926,-2.86675 -10.31175,-3.53709 -0.39935,-2.13936 -2.45314,0.59902 -2.41035,4.19316 -10.39733,-0.3423 -7.6304,-10.79667 -13.4067,1.32641 -6.38957,-6.33253 -8.84272,-1.49756 -6.4181,2.61003 3.7225,12.3798 0.0428,4.16464 2.70986,0.0571 3.32315,-6.33253 8.84271,0.1141 1.31215,4.86349 18.95479,12.57948 7.33089,1.68297 2.01101,4.50693 0,0 z","name":"Uzbekistan"},"tj":{"path":"m 399.21066,300.26311 5.86186,-7.27385 h 2.21068 l 0.77017,1.62592 -2.70986,1.96821 v 1.62592 l 1.7828,1.28362 8.57173,0.51345 2.79544,-1.19804 1.26936,0.25672 0.85575,2.73839 5.09169,0.51345 2.55298,5.3912 -0.77018,1.62592 -1.01263,0.0856 -1.01263,-2.05379 -2.21068,-0.17115 -3.82234,0.51345 -0.25672,3.59414 -3.82233,-0.25673 0.17114,-4.53545 -2.79543,-2.73839 -4.25021,3.50856 0.0856,2.31051 -3.73676,1.28362 h -2.21068 l 0.17115,-7.95844 -3.57987,-2.65281 0,0 z","name":"Tajikistan"},"kg":{"path":"m 408.6524,282.24964 -0.44214,3.6084 0.35656,2.22494 12.40833,4.16463 -10.89651,4.39283 -1.24083,-1.02689 -2.35331,1.51182 0.1141,0.82722 1.2551,0.5705 7.64467,0.19967 3.87938,-1.16952 4.9776,-6.27547 6.23269,1.08394 7.5163,-10.41158 -20.11004,-2.73839 -2.78118,6.74613 -3.50856,-3.76528 -3.05216,0.0571 0,0 z","name":"Kyrgyz Republic"},"af":{"path":"m 376.29091,321.95628 2.26773,17.77101 5.64793,1.24083 0.52771,3.19479 -4.05054,3.3802 7.54484,6.09006 14.66179,-5.2771 1.16952,-6.24695 9.2278,-5.76203 3.53709,-13.34965 2.63855,-2.83823 -2.73839,-4.76365 8.92829,-5.51957 -1.141,-1.59739 -4.12184,0.25672 -0.37083,3.79381 -5.53382,-0.0571 -0.0998,-5.06316 -1.78281,-2.12511 -2.99511,2.72413 0.0856,2.49593 -4.52119,1.71149 -8.34353,-0.52771 -10.83946,11.3529 -9.69846,-0.88427 0,0 z","name":"Afghanistan"},"pk":{"path":"m 389.14137,354.46039 3.70824,5.50531 -0.35656,2.83822 -4.93481,1.95396 -0.35656,4.62103 h 5.64793 l 1.93969,-1.5974 h 10.75388 l 9.69847,8.52895 1.24083,-4.09332 h 7.23106 l 0.17115,-5.14875 -7.40221,-7.10269 1.58313,-3.90791 7.58762,-0.52771 10.22617,-21.32236 -5.64793,-4.43562 -2.11084,-7.45926 13.749,-1.24083 -8.11533,-11.55258 -4.32152,-1.16952 -1.76855,2.13937 -1.3264,0.0998 -8.11533,5.14875 2.65281,4.44988 -2.99511,3.19479 -3.70824,13.67768 -9.17075,5.86187 -1.24083,6.40383 -14.61901,5.13448 0,0 z","name":"Pakistan"},"in":{"path":"m 457.38717,444.55625 6.5322,-3.19479 3.87938,-14.03424 -0.17115,-17.22903 22.22089,-23.98943 v -5.69072 l 4.57824,-1.78281 -0.17114,-6.57498 -4.93481,-9.59863 2.82396,-5.14874 6.17564,5.69072 7.92992,0.35656 v 3.19478 l -2.4674,2.66708 0.52771,1.42625 4.23594,0.17115 0.88428,4.79218 h 1.24083 l 3.18052,-5.69072 1.58313,-14.91851 5.29137,-3.73677 0.17115,-5.14874 -2.11084,-4.09332 -3.35168,-0.17115 -13.12144,8.67157 0.82722,5.57661 -9.21354,-0.0285 -3.25184,-3.97922 -1.76854,0.2282 0.59902,5.53382 -19.92463,-1.42624 -12.35128,-5.5053 -0.65607,-6.77466 -8.22943,-5.10596 -0.0998,-10.51142 -5.64793,-6.46089 -12.97882,1.24083 1.41198,5.64793 6.36105,5.14874 -10.99634,22.50614 -7.35942,0.55624 -1.21231,2.70986 7.24532,6.70335 -0.35656,6.77466 -7.40221,-0.1141 -0.7987,3.36594 6.14712,-0.27099 0.17115,2.66708 -4.4071,2.31051 2.82396,5.33416 5.46252,1.7828 3.35167,-2.48166 1.58314,-4.43562 1.93969,-0.88427 2.29625,2.31051 -0.69886,5.69072 -1.58313,2.66708 0.35656,4.62103 23.4332,48.63493 0,0 z","name":"India"},"np":{"path":"m 457.68668,344.07733 0.65607,6.09007 11.52406,5.22005 18.46986,1.3692 -0.69886,-4.46415 -12.33701,-3.39446 -10.46864,-6.23269 -7.14548,1.41198 0,0 z","name":"Nepal"},"bt":{"path":"m 492.21606,351.9502 2.21067,3.02364 7.47353,0.0571 -0.75591,-4.13611 -8.92829,1.05542 0,0 z","name":"Bhutan"},"bd":{"path":"m 492.45852,359.12421 -1.86838,3.3802 4.84923,9.21354 0.14262,7.18827 0.88427,1.92543 5.69072,0.0998 3.22331,-3.09495 2.33904,1.41198 0.47066,4.37857 1.86838,-1.16952 0.1141,-5.59088 -1.56887,-0.18541 -0.9841,-4.74939 -3.96496,-0.14263 -0.98411,-2.63855 2.42461,-3.23758 0.0428,-1.59739 h -7.04565 l -5.63366,-5.19153 0,0 z","name":"Bangladesh"},"mm":{"path":"m 540.76542,431.2066 -3.9507,-6.33252 2.86675,-4.02201 -2.70986,-4.97759 -2.55298,-0.48493 -0.48493,-8.35779 -3.82233,-7.40221 -1.11247,1.76855 -2.55298,4.33578 -3.19479,0.48492 -1.59739,-2.09658 -0.7987,-5.63366 -2.39609,-4.50694 -9.75551,-9.19927 2.39609,-1.58313 0.44214,-6.66056 3.56561,-5.99023 1.54034,-14.90425 5.16301,-3.52283 0.17115,-5.43399 3.09495,1.0269 4.87775,7.05991 -3.62266,7.75877 2.43888,6.09006 6.03301,2.36756 1.09821,6.63204 8.10107,1.2551 -2.2392,3.86512 -10.21191,4.02201 -1.11247,6.58925 7.50204,9.64141 0.31377,5.14874 -1.75428,1.76854 0.15689,1.61166 5.59088,8.20091 0.15689,8.51468 -1.64018,2.96658 0,0 z","name":"Myanmar"},"th":{"path":"m 541.6069,383.88381 4.62103,5.94744 v 7.23106 l 1.59739,0.7987 7.34516,-3.53709 1.44051,0.48493 8.7714,10.12633 -0.31377,6.91729 -2.86675,-0.48493 -2.55298,-1.61165 -1.91117,0.15688 -3.35167,5.61941 0.64181,3.05216 2.70986,1.44051 -0.15688,3.3802 -1.91117,0.96984 -6.54646,-4.50693 v -4.02201 l -2.70987,-0.15689 -1.11247,1.76855 -0.5705,17.9992 4.23595,7.73025 7.50205,7.23106 -0.31378,2.09657 -3.99348,-0.15688 -3.66545,-5.46252 h -3.8366 l -4.79218,-3.86512 -1.44051,-4.02201 2.06806,-3.3802 0.71312,-3.05216 2.25347,-3.99349 -0.0998,-9.18501 -5.5053,-7.95844 -0.2282,-0.96985 1.7828,-1.79707 -0.41361,-6.31826 -7.33089,-9.28485 0.85574,-5.34842 9.08518,-3.8366 0,0 z","name":"Thailand"},"kh":{"path":"m 556.51115,425.2449 5.83334,6.23269 10.85372,-8.04402 0.95559,-12.69357 -5.60514,3.86512 -2.90954,-1.62592 -3.9507,-0.52771 -2.21068,-1.55461 -1.06968,0.0571 -2.89528,4.7494 0.47066,2.19641 2.93807,1.64018 -0.35656,4.46415 -2.0538,1.24083 0,0 z","name":"Cambodia"},"la":{"path":"m 549.36567,373.12993 -3.45151,1.75428 -2.86675,8.35779 4.79218,6.10433 -0.7987,6.74614 0.7987,0.32803 7.9727,-3.86512 10.69684,11.95193 -0.25673,7.53057 2.32478,1.25509 5.74777,-4.66382 -0.47066,-3.69397 -16.58723,-15.76 0.15689,-2.41035 2.06805,-1.44051 -1.4405,-4.02201 -6.86024,-1.12673 -1.82559,-7.04565 0,0 z","name":"Lao People's Democratic Republic"},"vn":{"path":"m 563.04335,432.3476 1.69723,2.66708 0.31378,3.05216 4.46414,0.48492 5.41973,-7.23106 5.10596,-1.4405 2.70986,-7.38795 -1.26936,-11.89488 -5.26284,-7.23106 -5.54809,-4.43562 -7.05991,-12.12307 5.06317,-8.4719 -7.24532,-8.315 -5.80482,-0.25673 -5.22005,2.80971 1.5546,6.71761 6.96008,1.22657 1.86838,5.17726 -2.45314,1.5974 0.15688,1.28362 16.3305,15.97394 0.64181,4.69234 -0.98411,14.83294 -11.43848,8.27222 0,0 z","name":"Vietnam"},"ir":{"path":"m 312.86582,308.97746 -1.74002,1.81133 0.17115,2.86675 2.1679,3.0379 7.68745,8.41484 -1.16952,3.36594 h -1.34067 l -0.67033,3.36594 4.35004,5.56235 4.00775,0.3423 8.02976,11.11044 4.50693,0.3423 3.50856,2.52445 0.17115,5.04891 13.87736,8.0868 h 5.17726 l 3.18053,-2.6956 4.00775,-0.17115 2.33904,5.39121 14.98982,2.08231 0.44214,-5.5053 4.96333,-1.79707 0.2282,-1.96822 -3.9507,-5.3912 -8.79992,-7.07417 4.62103,-4.20742 -0.32804,-1.85412 -5.79055,-0.89853 -2.45314,-19.53955 -0.28525,-4.49267 -15.70295,-6.00449 -6.96007,1.56887 -3.89365,4.77792 -3.45151,-0.2282 -0.99837,0.84148 -7.68746,-0.49918 -9.69846,-7.07418 -3.6084,-3.95069 -1.65444,0.39935 -2.98086,3.40872 -5.26284,-0.99837 0,0 z","name":"Iran"},"tr":{"path":"m 297.24845,296.48356 -3.18053,3.36593 -11.6952,-0.34229 -7.01713,-4.20743 -6.84597,-0.17114 -7.85861,5.56235 -7.35942,0.3423 -0.67033,4.20742 h -8.35779 l -3.33742,3.0379 v 1.68297 l 2.01101,1.68297 v 1.85411 l -0.84148,2.19642 0.84148,1.85412 2.68134,-1.34067 2.68134,2.86675 -0.67034,2.02527 -0.99837,1.35493 1.49756,1.68297 7.35942,1.51182 5.17727,-2.19642 v -3.19479 l 2.51019,0.49919 6.01875,3.53708 6.51794,-1.01263 2.83822,-2.6956 1.83986,0.67033 v 3.0379 h 2.51019 l 2.16789,-4.20742 19.05462,-2.02526 8.31501,-1.01264 -2.19642,-2.88101 -0.0428,-3.89365 1.6687,-1.99674 -6.0758,-4.87776 0.32804,-4.20742 h -3.33742 l -5.53382,-2.70986 0,0 m -50.8884,0.72738 -0.2282,5.06317 4.42135,-1.35493 2.02527,-1.35493 -0.59902,-2.19642 -2.09658,-1.66871 -3.52282,1.51182 0,0 z","name":"Turkey"},"om":{"path":"m 353.84182,398.67397 10.53995,-6.0758 1.86838,-8.91403 -2.31052,-1.32641 0.95559,-9.55583 2.011,-1.16953 2.15363,3.3802 12.82194,6.70335 v 3.7225 l -15.5318,22.8627 -7.14549,0.24246 -5.36268,-9.86961 0,0 z","name":"Oman"},"ae":{"path":"m 347.60914,375.99668 1.24083,4.96333 14.06277,1.24084 0.98411,-10.18339 2.70986,-1.48329 0.74165,-3.7225 -4.43562,1.24083 -4.93481,7.45926 -10.36879,0.48492 0,0 z","name":"United Arab Emirates"},"qa":{"path":"m 345.64092,367.55332 -0.74165,5.71924 2.19642,1.6687 1.99674,-0.18541 0.74165,-7.20253 -1.72576,-1.24084 -2.4674,1.24084 0,0 z","name":"Qatar"},"kw":{"path":"m 332.3198,350.65232 -3.20905,-1.74002 -2.22495,2.23921 0.24247,4.4784 5.17726,1.98248 0.0143,-6.96007 0,0 z","name":"Kuwait"},"sa":{"path":"m 333.33243,359.30962 9.99797,13.93441 3.22332,2.56724 1.4405,6.24695 15.38918,1.21231 1.74002,0.9128 -1.72576,7.70172 -10.11207,5.9617 -14.79016,4.4784 -7.88713,7.70172 -9.37042,-5.46251 -5.67646,4.96333 -7.90139,-12.90751 -5.41973,-2.48167 -1.96822,-2.98085 v -6.46089 l -19.72496,-23.8468 -0.74164,-4.22169 h 5.67645 l 6.90302,-5.9617 0.24246,-2.98085 -1.96821,-1.98248 3.95069,-3.22331 8.38632,0.49918 14.30523,11.92341 8.44337,-0.38509 0.54197,2.08232 7.04565,2.70986 0,0 z","name":"Saudi Arabia"},"sy":{"path":"m 280.09073,324.92287 -0.49919,3.62266 4.02201,1.68297 -0.17115,10.04076 4.02201,-0.0856 4.02201,-3.0379 1.51182,-0.25673 9.12796,-7.25958 1.83986,-10.53995 -18.24167,1.85412 -1.92543,4.22168 -3.70823,-0.24246 0,0 z","name":"Syrian Arab Republic"},"iq":{"path":"m 305.24968,319.07527 -2.22494,10.99634 -9.21354,7.6732 0.58476,3.62266 8.9996,0.61328 14.33376,11.66668 8.01549,-0.2282 0.21394,-2.6956 2.93806,-3.152 4.10758,2.32478 0.54198,-0.51345 -7.94419,-10.56847 -3.76528,-0.2282 -5.00612,-6.43236 0.99837,-4.73513 1.52608,-0.19968 0.52771,-2.09658 -6.81744,-7.174 -7.81582,1.12673 0,0 z","name":"Iraq"},"jo":{"path":"m 283.27125,341.53862 -3.50856,12.23717 -0.15689,1.86839 h 5.51957 l 6.17564,-5.44826 0.15688,-2.06805 -2.52445,-2.58151 4.5212,-3.75102 -0.65608,-3.48003 -1.24083,0.28524 -3.76528,2.69561 -4.5212,0.24246 0,0 z","name":"Jordan"},"lb":{"path":"m 279.42039,329.64374 0.0856,2.78118 -1.16952,4.22168 4.022,0.3423 0.25673,-5.99023 -3.19479,-1.35493 0,0 z","name":"Lebanon"},"il":{"path":"m 278.1653,337.65923 -2.25347,7.17401 2.9238,8.60026 3.35168,-12.56522 v -2.6956 l -4.02201,-0.51345 0,0 z","name":"Israel"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2178:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'north-america_en', {"width":950,"height":550,"pathes":{"mx":{"path":"m 330.70592,371.79351 8.52959,26.86025 -3.97341,2.22511 0.44149,5.3332 7.50533,5.77469 v 10.68406 l 9.27129,8.90044 -3.97341,-26.24217 -5.29788,-17.35939 1.32447,-12.00853 4.4149,0.44149 1.76596,4.00873 -1.76596,10.22491 22.95748,44.92603 v 16.01726 l 18.54259,21.79195 20.30854,9.34193 8.38831,-4.89171 11.92023,9.78342 7.06384,-7.11682 -3.09043,-8.01745 10.15428,-3.10809 3.09043,1.78361 3.09043,-3.10809 h 4.85639 l 8.8298,-15.57577 -4.4149,-4.00872 -17.21811,4.00872 -3.97342,11.56704 -10.15427,1.78362 -11.92023,-4.89171 -5.29788,-16.90024 4.00873,-21.31514 -8.19406,-5.10362 -3.90277,-20.46748 -3.26702,-1.39511 -5.96895,6.05724 -6.85193,-3.65553 -2.68426,-13.65088 -27.14281,-2.84319 -14.02172,-10.54279 -13.35066,0.68873 0,0 z","name":"Mexico"},"gl":{"path":"m 655.00687,62.11471 -2.40171,3.832134 4.32661,4.326603 -1.9249,4.326603 6.2515,8.158736 7.68193,-2.401706 10.08363,-0.953618 11.53172,12.485339 7.68193,20.644079 -6.23384,12.96215 8.63554,-1.44809 4.80342,2.87851 0.4768,6.2515 -10.56044,0.47681 5.75703,5.75703 7.20512,1.44809 -15.84066,21.12089 -1.9249,12.96214 3.35532,10.56045 -2.4017,6.2515 4.3266,13.43895 8.15874,9.13002 2.4017,-0.47681 5.28023,-1.44809 0.4768,7.68193 3.35533,4.80341 6.23384,-0.47681 4.80341,-17.76556 14.41024,-17.76556 21.61535,-8.63555 13.43896,-16.81194 6.23384,2.87852 h 12.96215 l 10.56044,-10.56044 12.96215,-5.28023 1.44809,-8.15873 -8.15874,-7.20512 -7.20512,-2.40171 -3.84979,-10.08363 9.13001,-5.28022 14.41024,7.68193 4.80341,-5.28023 -7.68193,-4.3266 16.33514,-22.092161 -2.87852,-9.606824 -7.68193,-0.47681 2.87852,-8.635545 9.60682,-4.326603 19.69046,-17.288752 -5.75703,-6.233839 -22.09216,1.924896 -11.53172,11.531721 6.7283,-14.887045 -7.68192,-1.924897 -4.32661,7.681927 -6.23384,-5.280221 -17.28875,1.924897 4.80342,-7.681928 28.326,-0.953618 -7.20512,-9.606824 -30.72771,-5.757031 -12.48534,1.924897 0.47681,6.251499 -12.96215,-4.326602 0.47681,-4.326603 -9.13001,1.924897 -1.9249,4.803412 9.60682,3.355324 -10.08363,7.205118 -7.20512,-8.158736 -10.08363,-2.878516 -1.44809,7.681928 h -10.08363 l -3.84979,-8.158737 -15.84067,-2.401706 -8.63554,4.326603 -0.47681,5.757031 -11.03726,-1.448088 -6.7283,2.878515 0.47681,6.728309 v 3.355325 l -12.48534,2.401706 -5.75703,-3.832134 -3.8498,6.23384 5.75703,6.251499 12.00853,-1.448087 0.95362,3.849793 -9.13001,4.326603 -8.14108,-3.885113 0,0 m 38.4273,74.91204 2.87851,4.3266 -1.44809,5.28022 h -2.87851 l -3.8498,-4.3266 0.95362,-3.35533 4.34427,-1.92489 0,0 m 120.04998,-12.00853 8.15873,2.4017 -0.47681,6.72831 -8.63554,-4.3266 -1.9249,-2.40171 2.87852,-2.4017 0,0 z","name":"Greenland"},"us":{"path":"m 210.05551,67.90706 6.11022,11.425763 3.92044,-0.88298 v -3.955751 l -10.03066,-6.587032 0,0 m -34.45388,100.5008 -0.30022,5.31554 3.81448,-0.88298 v -2.36639 l -3.51426,-2.06617 0,0 m -5.86299,2.36639 -7.62895,3.84979 1.18319,4.13235 2.9315,-2.36639 5.86299,-2.6666 -2.34873,-2.94915 0,0 m -31.69899,5.01532 -5.28022,-1.18319 -0.88298,2.36639 0.58277,4.43256 5.58043,-5.61576 0,0 m -11.16087,-0.28255 -4.99767,-2.06617 -1.76596,3.24936 3.23171,3.24937 3.53192,-4.43256 0,0 m -17.30641,-4.73277 -2.34873,-3.24937 -2.34872,0.88298 v 4.43256 l 2.64894,1.76596 2.04851,-3.83213 0,0 M 90.5,149.77698 l 2.931494,2.06617 -0.88298,2.36639 H 90.5 v -4.43256 l 0,0 m 15.06364,263.11042 -0.24723,4.11469 3.60256,2.41937 2.15447,-1.9249 -5.5098,-4.60916 0,0 m 9.34193,6.05725 -3.35532,2.41936 2.87851,3.62022 3.35533,-2.89617 -2.87852,-3.14341 0,0 m 6.72831,5.79235 -2.87852,3.86745 0.95362,2.41937 4.07937,-1.9249 -2.15447,-4.36192 0,0 m 4.78575,7.48767 -1.67766,9.6598 1.67766,3.62022 5.5098,-1.69532 2.87851,-4.83873 -6.00426,-5.56278 -2.38405,-1.18319 0,0 m 440.14795,37.80921 -4.66214,-1.5717 -3.74383,2.34872 1.87191,2.18979 6.37512,0.93596 0.15894,-3.90277 0,0 M 252.3326,52.967036 l -14.81641,3.514261 3.05512,16.688325 16.12321,4.397241 0.86532,3.514261 -23.96408,7.470012 -13.50959,22.392374 4.78575,23.71685 7.84086,5.26256 6.11023,-5.70405 1.7483,3.51426 -7.41704,8.77682 -28.76749,13.17407 -18.31301,4.39724 -0.44149,6.58703 42.27709,-12.29108 17.43003,-4.83874 16.12322,-19.76109 17.87151,-11.84959 -9.14767,15.36385 10.03065,1.32447 17.0062,-7.47001 3.05511,12.29108 11.7613,2.63128 12.20278,11.8496 0.86533,8.77682 -1.74831,2.18979 2.17214,8.33533 h 3.05511 l 0.44149,-14.05704 h 3.47894 l 0.86532,34.68346 8.72384,-7.47001 -6.11022,-36.00793 h -9.14767 L 316.80781,141.6359 366.06044,58.194278 317.2493,19.996557 262.76943,30.53934 l -2.17213,16.688325 11.76129,7.028522 -4.36192,11.425763 -15.66407,-12.714914 0,0 m 98.27569,200.348194 -1.76596,7.09916 -6.1632,-3.99107 h -3.07277 l -1.76596,7.54065 -21.56238,48.31668 5.72172,42.10049 7.04618,3.54958 1.32447,11.53172 h 14.51619 l 14.0747,10.63108 27.70792,2.6666 3.07277,14.18066 4.39724,3.10809 6.16321,-6.19852 4.83873,2.20745 4.39724,20.37918 7.47001,4.87406 6.1632,-11.53173 18.91344,-13.73917 12.30874,5.75703 10.56044,0.88298 0.44149,-6.64001 21.98621,0.44149 4.39724,4.87405 0.88298,11.07257 -2.63128,6.19853 3.07277,10.63108 h 6.60469 l 6.60469,-10.18959 -2.63128,-4.87405 -2.63128,-10.63109 3.95575,-11.97321 18.03046,-15.50513 13.63321,-3.99107 -1.76596,-12.85619 18.91343,-20.39684 18.91344,-3.10809 -3.07277,-10.61342 18.47194,-10.63108 v -14.18066 l -1.76596,-0.88298 -6.60469,2.20745 -0.88298,8.68852 -21.95089,0.26489 -17.20045,11.42577 -27.00153,8.8298 -4.30895,-5.28022 12.25577,-18.54259 -6.05724,-5.77469 -4.11469,-7.84086 -8.52959,-6.85193 -9.27129,-0.77702 -17.51833,-11.95555 -124.57084,-20.5028 0,0 z","name":"United States of America"},"bb":{"path":"m 586.02846,499.68435 -2.17213,1.57171 1.71298,3.14341 2.80788,-1.57171 -2.34873,-3.14341 0,0 z","name":"Barbados"},"tt":{"path":"m 586.32867,511.92246 -1.87191,1.73064 -2.03086,0.31787 v 2.50767 l 3.74384,3.44362 1.55404,-2.50767 0.93596,-2.82553 -0.31787,-2.34873 -2.0132,-0.31787 0,0 z","name":"Trinidad and Tobago"},"do":{"path":"m 552.54585,468.93898 -9.34193,-6.11022 -4.4149,-1.50106 -1.4834,10.59576 1.55404,2.98447 2.03085,-2.34873 5.91597,-1.5717 5.13895,1.09489 0.60042,-3.14341 0,0 z","name":"Dominican Republic"},"ht":{"path":"m 530.91284,460.00323 6.0749,0.63574 -0.72404,7.45235 -0.60043,3.92044 -7.0815,-0.38852 -1.25383,1.88958 -2.17213,-0.15893 -0.77702,-4.07937 7.47001,-0.61809 -0.45915,-4.2383 -3.42596,-1.41277 2.94915,-3.00213 0,0 z","name":"Haiti"},"cu":{"path":"m 477.91637,445.0632 v 2.24277 l 9.39491,0.1766 4.43256,-2.57831 0.68872,1.88958 9.21832,2.24277 8.19405,7.39938 -1.87192,2.5783 0.33554,2.93149 6.83426,1.71298 6.83427,-3.09043 3.07277,-3.09043 -4.43256,-2.24277 -22.86919,-13.4213 -8.01746,-0.86532 -11.81427,4.11469 0,0 z","name":"Cuba"},"bs":{"path":"m 511.04579,431.30637 -2.22511,-0.68872 -0.1766,4.29128 2.73724,2.7549 1.87192,-2.7549 -2.20745,-3.60256 0,0 m 4.43256,6.71065 -3.07278,1.71298 2.89618,4.13235 1.53639,-2.06618 -1.35979,-3.77915 0,0 m 9.90703,3.09043 -3.24936,-0.1766 0.33553,2.06618 2.38405,3.44362 2.04851,-2.24277 -1.51873,-3.09043 0,0 m -1.53638,-4.11469 -5.29788,-2.24277 -1.02426,-5.3332 2.04851,-0.86532 2.04852,4.13235 2.04851,1.55404 0.1766,2.7549 0,0 m -5.12129,-10.84299 -2.73724,-0.68873 -0.51212,-3.44362 -2.89618,-1.02426 1.87192,-1.88958 3.4083,1.20086 2.56064,1.55404 -1.69532,4.29129 0,0 z","name":"Bahamas"},"jm":{"path":"m 509.84493,467.43792 -6.14554,1.55404 v 1.71298 l 3.5849,2.06618 h 3.7615 l 2.38404,-2.7549 -3.5849,-2.5783 0,0 z","name":"Jamaica"},"ca":{"path":"m 447.68313,37.073393 0.38851,7.099161 -14.09236,14.604491 3.53192,11.831934 10.17193,-2.754898 5.88065,-8.688524 14.86938,-5.527456 12.13215,-0.794682 -9.39491,-10.26023 -4.69745,3.549581 -3.53192,-1.183194 -1.96022,-4.344262 -4.30894,-4.344263 -8.98874,0.812342 0,0 m 18.40131,-20.90897 -3.12575,5.527456 15.27555,5.527456 5.47448,-8.282354 2.34873,5.527456 h 3.92043 l 7.43469,-8.282354 -9.0064,-2.366387 -3.53192,-2.754898 -4.69745,4.732774 -14.09236,0.370851 0,0 m 26.63068,11.054912 -12.13215,5.121285 v 3.938091 l 15.66407,5.915967 -3.53192,3.938092 2.34872,5.121284 9.78342,-4.344262 h 8.22938 l 3.92043,6.304478 6.65767,-6.710649 -1.5717,-6.322138 -5.47448,1.977876 -0.77702,-7.893843 2.73724,-4.732773 h -2.73724 l -4.30895,2.754898 -1.96021,1.571704 1.18319,5.527456 -3.12575,2.366387 -4.69745,-0.388511 -1.1832,-7.099161 -9.02405,-7.046181 0,0 m 16.05258,-12.238105 -1.1832,3.938091 7.4347,3.54958 5.47447,-3.161068 -0.38851,-2.366387 -11.33746,-1.960216 0,0 m 5.86298,-6.7106493 -5.47447,1.9778753 0.38851,2.754898 12.13215,-0.794682 -0.38851,-2.7548979 -6.65768,-1.1831934 0,0 m 26.24217,6.7106493 -0.77702,2.754898 -1.96021,2.754898 v 3.938091 l 7.43469,-1.183193 7.8232,6.710649 h 2.73724 v -6.710649 l -7.8232,-8.688525 -7.4347,0.423831 0,0 m 19.97302,7.893842 3.12575,3.549581 -2.73724,4.732773 1.96021,5.121285 8.61789,-4.732774 v -3.54958 l -5.08597,-5.915967 -5.88064,0.794682 0,0 m 11.35512,-9.077036 0.38851,6.304479 h 10.5781 l 2.73724,2.366386 -0.38851,2.754899 -9.39491,1.183193 6.65767,9.077036 9.0064,1.571705 12.52066,-5.527456 -18.0128,-27.231108 -5.47447,3.5495802 0.38851,4.7327738 -6.26916,-2.366387 -2.73724,3.584899 0,0 m -91.22951,44.590498 -14.86938,3.938091 -8.61789,7.505332 0.77702,8.282354 15.66407,4.732773 -3.53192,7.893843 -11.35513,-7.099161 -3.12575,5.915967 7.4347,5.121285 -0.38851,8.282352 11.35512,3.16107 13.70385,-0.79468 2.34873,-4.34426 10.17193,11.44342 7.04618,-2.36639 1.1832,-7.89384 5.08596,3.54958 0.77702,-7.893843 -6.26915,-3.938091 0.38851,-24.847061 -5.47448,-4.344263 -5.86299,7.893843 -16.44109,-14.198321 0,0 m 47.76923,17.35939 -5.08597,-2.366387 -2.73724,3.54958 5.47448,8.688525 0.38851,8.282354 11.74364,-7.099161 V 76.542606 l 4.30894,-4.344262 -4.30894,-3.161069 h -7.04618 l -2.73724,6.710649 0,0 m 25.05897,-3.54958 -8.22937,6.710649 1.96022,8.282353 h 5.08596 l 2.34873,-4.344262 3.53192,3.54958 3.53192,-0.388511 9.39491,-7.893842 -17.62429,-5.915967 0,0 m -0.79468,-13.032787 -1.96021,3.938091 8.61788,3.161069 2.34873,-3.54958 -9.0064,-3.54958 0,0 m -5.08596,-14.993003 -8.61789,1.183193 -5.08597,4.732774 9.39491,0.388511 -2.73724,7.09916 1.96022,3.161069 2.73724,-0.388511 6.65767,-10.648741 -4.30894,-5.527455 0,0 m 14.88704,-2.754898 -4.69745,1.571704 0.77702,6.304478 7.8232,5.121285 0.38852,3.938092 -2.34873,2.366387 1.18319,7.893842 30.14494,9.854059 8.22938,2.754898 8.22937,-7.099161 -9.78342,-7.893842 -9.00639,2.366387 -12.52066,-1.183194 -4.69746,-4.732773 -1.18319,-13.015128 -7.8232,-3.938091 -4.71512,-4.308943 0,0 m 24.65281,41.040917 -8.61789,-0.794682 -10.17193,3.938091 -5.47448,7.487672 1.57171,20.520456 16.8296,0.79468 16.05258,7.89385 11.35512,13.01512 8.61789,-0.38851 -2.34873,12.22045 -7.8232,13.01513 -8.61789,3.93809 -6.26916,-1.1832 -3.12575,-2.75489 -4.69745,6.30447 1.96021,6.30448 6.65768,0.38851 8.22937,-3.93809 7.04618,18.15407 17.62429,11.44343 12.13214,-15.38152 -10.17193,-16.5647 5.88065,-6.71065 8.22937,13.80981 14.86939,-13.01513 -2.73724,-5.91597 -10.17193,3.16107 -7.04618,-19.33727 6.65767,-11.03725 -13.31534,-14.19832 -7.43469,5.12129 -7.04619,-15.38152 -14.86938,1.97788 -3.92043,-18.542585 -12.13215,8.282354 -1.18319,10.260231 h -6.65767 l 0.77702,-9.077038 9.34193,-13.809809 0,0 m 17.62428,7.09916 -3.12575,3.161069 2.73724,4.344263 12.92683,1.571704 -8.22938,-8.688524 -4.30894,-0.388512 0,0 M 592.56251,44.967236 v 3.54958 l -8.61788,1.977875 2.34872,3.938092 9.78342,3.938091 10.96662,1.183194 7.8232,5.527456 7.82321,-4.344263 -5.47448,-5.527456 h 7.04618 l 4.30894,-4.732773 10.57811,-1.571705 V 46.53894 l -5.88065,-3.938091 0.77702,-4.344262 16.44109,2.754898 24.28195,-9.465548 -9.00639,-2.754898 2.34872,-3.161069 h 18.78982 l 3.12575,-3.161069 -37.9858,-13.4212978 -9.0064,-3.1610689 -9.78342,7.0991607 -10.96662,-9.0770363 -5.88064,-0.3885112 -1.1832,7.5053315 -7.43469,-6.7106494 -8.61789,2.7548981 1.57171,4.3442623 12.92683,2.754898 -0.77702,6.304478 7.04618,4.344263 17.23577,-4.344263 0.38851,5.915967 -14.09236,6.710649 -8.61789,-6.710649 -7.8232,0.794682 7.8232,11.054912 -3.92043,1.977876 -5.88065,-5.121285 -4.30894,2.754898 3.92043,7.487671 h 6.65767 l -1.5717,7.099161 -5.47448,-0.794682 -7.04618,-7.505332 -4.66214,0.830002 0,0 m -34.89537,108.588894 -7.47001,9.39491 -0.45915,10.34853 6.53405,-3.76149 h 7.92916 l 5.59809,5.17426 5.13895,-4.23831 -17.27109,-16.9179 0,0 m 90.96461,122.20446 -18.6662,17.87152 1.87192,4.2383 22.85153,8.45895 3.26702,-5.63341 -1.87192,-9.39491 -7.47001,0.93596 -4.20298,-4.69746 6.9932,-7.04618 -2.77256,-4.73277 0,0 M 367.31428,59.624706 l 3.51426,5.315541 1.76596,7.09916 8.79448,2.20745 6.1632,-6.64001 5.28022,2.6666 14.95769,1.32447 10.56044,-4.43256 1.76596,14.622151 h 6.1632 v -6.198521 l 6.1632,0.44149 15.39918,18.171732 10.11895,6.198521 -5.28022,8.42363 2.20745,2.20745 19.76109,3.99107 0.44149,8.86512 5.28023,0.88298 1.32447,-13.29768 8.35299,-2.20745 6.1632,9.30661 13.19172,6.19852 6.60469,1.32447 4.39725,-5.31554 0.44149,-8.42363 7.9115,-4.87405 2.63128,7.09916 -7.04618,12.4147 0.88298,6.19852 3.95575,-6.19852 7.9115,-7.09916 0.44149,-9.30661 -4.39724,-7.09916 1.32447,-5.757031 10.56044,-5.31554 4.83873,3.54958 0.88298,31.027921 7.47002,-6.64001 4.39724,2.6666 -6.16321,10.63108 7.91151,1.76596 11.44342,-17.73024 9.67746,10.18959 -3.95575,18.17173 -9.67746,5.31554 -9.23597,-4.43256 -16.70599,3.54958 1.76596,5.75703 -4.39724,7.09916 -13.63321,3.10809 -15.39918,11.97322 -13.63321,18.17173 -1.76596,5.75703 9.23597,3.54958 3.51426,8.86512 12.75024,12.85619 20.2379,8.86512 -4.39724,20.37918 -0.44149,5.75703 5.28022,3.54958 7.04618,-9.30661 0.88298,-17.73024 11.00194,-0.44149 5.28022,-10.18959 0.88298,-15.50513 14.0747,-27.47834 17.58897,6.19852 9.23597,12.85619 -3.95575,12.85619 7.04618,3.99107 17.14747,-11.53172 4.83873,31.46941 15.84067,19.05471 0.44149,9.7481 -17.58897,4.43256 -8.35299,8.86512 -17.58896,-3.99107 -8.79449,-0.44149 -15.39917,11.97321 9.23597,-2.20745 11.44343,-2.20745 2.20745,2.6666 -3.07277,9.7481 0.44149,8.86513 5.28022,3.54958 5.28022,-1.32447 2.64894,-3.99107 h 3.51426 l -5.72171,10.63108 -11.00193,0.44149 -4.83874,7.09916 h -6.1632 l -1.76596,-5.31554 8.79448,-8.86512 -10.56044,3.54958 -0.47681,-15.06365 -3.03745,-1.76596 -9.23597,3.99107 -0.88298,7.54065 h -21.12089 l -18.03045,12.41471 -24.19366,7.98214 -2.63128,-3.54958 12.18513,-18.18939 -6.92257,-6.65768 -4.39724,-8.44129 -8.95342,-6.83426 -9.60682,-0.79468 -17.21811,-12.06151 -124.87106,-20.52046 -2.06617,-8.45895 -11.44342,-10.63108 v -8.86512 l 1.76596,-7.98214 -0.88298,-4.43256 -4.39724,-4.43256 -0.88298,-7.09916 11.44342,-7.98215 -7.04618,-38.10942 -9.67746,-0.44149 -8.79449,-11.53172 48.31668,-82.099494 0,0 m -43.07178,140.835334 -3.00213,5.75703 1.04192,4.07937 1.96021,1.21851 -0.45914,1.66 -2.1015,0.60043 0.60043,6.05724 2.26043,2.27809 1.80128,-1.96021 -2.26043,-5.89831 1.34213,-4.69745 3.30234,-4.39725 -2.4017,-4.07936 -2.08384,-0.61809 0,0 m 9.9247,34.50686 -2.70192,1.05958 4.96235,5.75703 1.20085,6.81661 4.96235,5.29788 4.20299,-0.75936 v -6.95789 l -5.10363,-3.17873 -7.52299,-8.03512 0,0 z","name":"Canada"},"gt":{"path":"m 432.05438,488.50582 10.47215,7.66427 10.56044,-13.12108 -1.80128,-2.71958 -3.60256,-0.12362 v -7.68193 l -2.70192,-1.64234 -8.1764,2.43703 3.12575,7.20511 -7.87618,7.98214 0,0 z","name":"Guatemala"},"hn":{"path":"m 454.4291,483.66709 16.31747,-0.61808 4.83873,5.75703 -3.01979,-0.68873 -5.81001,0.24724 -7.59363,7.13448 -3.24937,7.22278 -2.13681,-1.13022 -0.0177,-7.9115 -4.69745,-3.14341 5.36852,-6.86959 0,0 z","name":"Honduras"},"sv":{"path":"m 444.00993,496.89414 8.30002,4.13234 -0.12362,-6.55171 -4.25597,-2.59596 -3.92043,5.01533 0,0 z","name":"El Salvador"},"ni":{"path":"m 472.42423,489.54774 3.86746,0.77702 0.12361,7.92917 -4.50319,12.85619 -12.13215,-1.20086 -2.70192,-6.19852 3.60256,-7.52299 6.83426,-6.35746 4.90937,-0.28255 0,0 z","name":"Nicaragua"},"cr":{"path":"m 471.78849,512.27565 2.45468,4.80341 1.99554,2.64894 -2.68426,7.96448 -5.12129,-3.60256 -8.37065,-7.66426 v -5.06831 l 11.72598,0.9183 0,0 z","name":"Costa Rica"},"pa":{"path":"m 477.45722,520.45205 -2.5783,8.05278 8.51193,2.20745 5.28022,1.04191 0.90064,-6.23384 5.66873,-2.86085 5.03299,2.59596 1.97787,3.16107 2.40171,-0.28256 1.88958,-5.73937 -6.28682,-2.59596 -4.76809,-2.59596 -4.7681,3.24937 -5.66873,2.86085 -5.79235,-2.33107 -1.80128,-0.52978 0,0 z","name":"Panama"},"bz":{"path":"m 449.14888,472.40027 -0.0883,6.44575 h 1.48341 l 5.05064,-9.43023 h -3.42596 l -3.01979,2.98448 0,0 z","name":"Belize"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)))

/***/ }),

/***/ 2179:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c("card", { attrs: { title: "<i class='ti-map'></i> World" } }, [
            _c("div", { staticClass: "map_size", attrs: { id: "vmapworld" } })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c("card", { attrs: { title: "<i class='ti-map'></i> Asian" } }, [
            _c("div", { staticClass: "map_size", attrs: { id: "vmapasian" } })
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c("card", { attrs: { title: " <i class='ti-map'></i> Europe" } }, [
            _c("div", { staticClass: "map_size", attrs: { id: "vmapeurope" } })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-map'></i> North America" } },
            [
              _c("div", {
                staticClass: "map_size",
                attrs: { id: "vmapnamerica" }
              })
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
        { staticClass: "col-lg-6" },
        [
          _c("card", { attrs: { title: "<i class='ti-map'></i> Germany" } }, [
            _c("div", { staticClass: "map_size", attrs: { id: "vmapgermany" } })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c("card", { attrs: { title: "<i class='ti-map'></i> Russia" } }, [
            _c("div", { staticClass: "map_size", attrs: { id: "vmaprussia" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-6b51e472", module.exports)
  }
}

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2165)
  __webpack_require__(2167)
  __webpack_require__(2169)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(2171)
/* template */
var __vue_template__ = __webpack_require__(2179)
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
Component.options.__file = "resources/components/pages/vector_maps.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b51e472", Component.options)
  } else {
    hotAPI.reload("data-v-6b51e472", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 528:
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

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(531)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(533)
/* template */
var __vue_template__ = __webpack_require__(534)
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

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 533:
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

/***/ 534:
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