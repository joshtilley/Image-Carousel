/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/WorkSans-VariableFont_wght.ttf */ \"./src/fonts/WorkSans-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/WorkSans-Italic-VariableFont_wght.ttf */ \"./src/fonts/WorkSans-Italic-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: \"WorkSans\";\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"WorkSans\";\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  font-style: italic;\r\n}\r\n\r\n:root {\r\n  height: 100%;\r\n  /* breakpoints */\r\n  --small: 639px; /* max-width  */\r\n  --medium: 1047px; /* max-width  */\r\n  --large: 1048px; /* min-width  */\r\n  /* transitions */\r\n  --header-hover: 1.8s;\r\n  --button-hover: 0.5s ease;\r\n  --carousel-scroll: 1.2s ease;\r\n  /* image settings */\r\n  --img-width: 350px;\r\n  /* colours */\r\n  /* root */\r\n  --background-color: hsl(0, 0%, 12%);\r\n  --main-text-color: hsl(0, 0%, 90%);\r\n  /* gradient */\r\n  --g1: hsl(17, 100%, 70%);\r\n  --g2: hsl(241, 100%, 70%);\r\n}\r\n\r\n* {\r\n  background-color: transparent;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1,\r\np,\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\nbody {\r\n  height: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: var(--background-color);\r\n  font-family: \"WorkSans\";\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  font-size: 18px;\r\n  color: var(--main-text-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n/* header */\r\nheader {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 5;\r\n}\r\n\r\n.header-inner {\r\n  margin: 1.5em;\r\n  width: 550px;\r\n  height: 180px;\r\n  /* min-height: 146px; */\r\n  -webkit-box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.11);\r\n  -moz-box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.11);\r\n  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.11);\r\n}\r\n\r\n.header-border {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 4px;\r\n  background-image: linear-gradient(\r\n    150deg,\r\n    var(--g1) 0 10%,\r\n    var(--g2) 45% 60%,\r\n    var(--g1) 90% 100%\r\n  );\r\n  background-size: 150%;\r\n  background-position: 0%;\r\n  transition: var(--header-hover) background-position,\r\n    var(--header-hover) background-size;\r\n}\r\n\r\n.header-border-size-animation {\r\n  background-size: 200%;\r\n  transition: var(--header-hover);\r\n}\r\n\r\n.header-border-position-animation {\r\n  background-position: 50%;\r\n  transition: var(--header-hover);\r\n}\r\n\r\n.header-inner:hover .header-border {\r\n  background-position: 100%;\r\n  transition: var(--header-hover);\r\n}\r\n\r\n.header-content {\r\n  padding: 1em 1.1em;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1em;\r\n  background-color: var(--background-color);\r\n  text-align: center;\r\n}\r\n\r\n.header-title {\r\n  padding: 0.1em;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  text-decoration: underline transparent;\r\n  text-underline-offset: 0.2em;\r\n  transition: var(--header-hover);\r\n}\r\n\r\n.header-inner:hover .header-title {\r\n  text-decoration: underline;\r\n  transition: var(--header-hover);\r\n}\r\n\r\n.header-tagline {\r\n  text-transform: lowercase;\r\n  transition: var(--header-hover);\r\n}\r\n\r\n/* image carousel */\r\nmain {\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.carousel {\r\n  display: block;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel-image {\r\n  float: left;\r\n  width: 33%;\r\n  height: 500px;\r\n  top: calc(50% - 200px);\r\n  /* padding: 20px; */\r\n  position: absolute;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  /* left: -300%; */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /* gap: 20px; */\r\n}\r\n\r\n.offscreenL-image {\r\n  left: -33%;\r\n  scale: 33%;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: var(--carousel-scroll);\r\n}\r\n\r\n.left-image {\r\n  left: 0%;\r\n  scale: 65%;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: var(--carousel-scroll);\r\n}\r\n\r\n.center-image {\r\n  left: calc(100% / 3);\r\n  opacity: 1;\r\n  visibility: visible;\r\n  z-index: 3;\r\n  transition: var(--carousel-scroll);\r\n}\r\n\r\n.right-image {\r\n  left: 67%;\r\n  scale: 65%;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: var(--carousel-scroll);\r\n}\r\n\r\n.offscreenR-image {\r\n  left: 100%;\r\n  scale: 33%;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: var(--carousel-scroll);\r\n}\r\n\r\n.carousel-image img {\r\n  box-sizing: content-box;\r\n  width: 350px;\r\n  border: 3px solid var(--main-text-color);\r\n  object-fit: contain;\r\n}\r\n\r\n@media only screen and (max-width: 1047px) {\r\n  .offscreenL-image,\r\n  .left-image,\r\n  .right-image,\r\n  .offscreenR-image {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.carousel-fade {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-image: linear-gradient(\r\n    to left,\r\n    var(--background-color),\r\n    transparent 35% 65%,\r\n    var(--background-color)\r\n  );\r\n  z-index: 2;\r\n}\r\n\r\n/* scroll buttons */\r\nfooter {\r\n  width: 100%;\r\n  padding: 3em;\r\n  z-index: 5;\r\n  flex-grow: 0;\r\n}\r\n\r\n.carousel-controls {\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 30%;\r\n}\r\n\r\n#left:hover {\r\n  color: var(--g2);\r\n  transition: var(--button-hover);\r\n}\r\n\r\n#right:hover {\r\n  color: var(--g1);\r\n  transition: var(--button-hover);\r\n}\r\n\r\n.scroller i {\r\n  cursor: pointer;\r\n  font-size: 33px;\r\n  color: var(--main-text-color);\r\n  transition: var(--button-hover);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://placeholder/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://placeholder/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://placeholder/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://placeholder/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://placeholder/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://placeholder/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://placeholder/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://placeholder/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://placeholder/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://placeholder/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://placeholder/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/carouselScripts.js":
/*!********************************!*\
  !*** ./src/carouselScripts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createImgElement: () => (/* binding */ createImgElement),\n/* harmony export */   imagePositionTags: () => (/* binding */ imagePositionTags),\n/* harmony export */   scrollToLeft: () => (/* binding */ scrollToLeft),\n/* harmony export */   scrollToRight: () => (/* binding */ scrollToRight)\n/* harmony export */ });\n// render images as html elements\r\nconst imagePositionTags = {\r\n  0: \"offscreenL-image\",\r\n  1: \"left-image\",\r\n  2: \"center-image\",\r\n  3: \"right-image\",\r\n  4: \"offscreenR-image\",\r\n};\r\n\r\nfunction createImgElement(imgUrl, alt, imgSrc) {\r\n  let imageElement = document.createElement(\"a\");\r\n  //   imageElement.href = imgSrc;\r\n\r\n  let img = document.createElement(\"img\");\r\n  img.src = imgUrl;\r\n  img.alt = alt;\r\n  imageElement.className = \"carousel-image\";\r\n  imageElement.append(img);\r\n\r\n  return imageElement;\r\n}\r\n\r\n// carousel scrolling anims\r\nfunction scrollToLeft(imageElements) {\r\n  // selects image elements to move\r\n  let offscreenLeftImg = document.querySelector(\".offscreenL-image\");\r\n  let leftImg = document.querySelector(\".left-image\");\r\n  let centerImg = document.querySelector(\".center-image\");\r\n  let rightImg = document.querySelector(\".right-image\");\r\n  let offscreenRightImg = document.querySelector(\".offscreenR-image\");\r\n\r\n  // selects new offscreen image element\r\n  let currentOffScrIndex = Array.prototype.indexOf.call(\r\n    imageElements,\r\n    offscreenLeftImg\r\n  );\r\n  let newOffScrLeftImg =\r\n    imageElements[\r\n      currentOffScrIndex - 1 > 0\r\n        ? currentOffScrIndex - 1\r\n        : imageElements.length - 1\r\n    ];\r\n\r\n  // updates classlists for scrolling\r\n  newOffScrLeftImg.classList.add(\"offscreenL-image\");\r\n\r\n  offscreenLeftImg.classList.remove(\"offscreenL-image\");\r\n  offscreenLeftImg.classList.add(\"left-image\");\r\n\r\n  leftImg.classList.remove(\"left-image\");\r\n  leftImg.classList.add(\"center-image\");\r\n\r\n  centerImg.classList.remove(\"center-image\");\r\n  centerImg.classList.add(\"right-image\");\r\n\r\n  rightImg.classList.remove(\"right-image\");\r\n  rightImg.classList.add(\"offscreenR-image\");\r\n\r\n  offscreenRightImg.classList.remove(\"offscreenR-image\");\r\n}\r\n\r\nfunction scrollToRight(imageElements) {\r\n  // selects image elements to move\r\n  let offscreenLeftImg = document.querySelector(\".offscreenL-image\");\r\n  let leftImg = document.querySelector(\".left-image\");\r\n  let centerImg = document.querySelector(\".center-image\");\r\n  let rightImg = document.querySelector(\".right-image\");\r\n  let offscreenRightImg = document.querySelector(\".offscreenR-image\");\r\n\r\n  // selects new offscreen image element\r\n  let currentOffScrIndex = Array.prototype.indexOf.call(\r\n    imageElements,\r\n    offscreenRightImg\r\n  );\r\n  let newOffScrRightImg =\r\n    imageElements[\r\n      currentOffScrIndex + 1 === imageElements.length\r\n        ? 0\r\n        : currentOffScrIndex + 1\r\n    ];\r\n\r\n  // updates classlists for scrolling\r\n  offscreenLeftImg.classList.remove(\"offscreenL-image\");\r\n\r\n  leftImg.classList.remove(\"left-image\");\r\n  leftImg.classList.add(\"offscreenL-image\");\r\n\r\n  centerImg.classList.remove(\"center-image\");\r\n  centerImg.classList.add(\"left-image\");\r\n\r\n  rightImg.classList.remove(\"right-image\");\r\n  rightImg.classList.add(\"center-image\");\r\n\r\n  offscreenRightImg.classList.remove(\"offscreenR-image\");\r\n  offscreenRightImg.classList.add(\"right-image\");\r\n\r\n  newOffScrRightImg.classList.add(\"offscreenR-image\");\r\n}\r\n\n\n//# sourceURL=webpack://placeholder/./src/carouselScripts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carouselScripts.js */ \"./src/carouselScripts.js\");\n\r\n\r\n\r\nasync function populate() {\r\n  // functions to get data from json file.\r\n  const requestURL = \"/src/images.json\";\r\n  const request = new Request(requestURL);\r\n\r\n  const response = await fetch(request);\r\n  const imageData = await response.json();\r\n\r\n  // main function\r\n  const imageCarousel_div = document.querySelector(\".carousel\");\r\n\r\n  for (let i in imageData) {\r\n    let img = imageData[i];\r\n    let imageElement = (0,_carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__.createImgElement)(img.url, img.alt, img.src);\r\n    if (i < Object.keys(_carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__.imagePositionTags).length)\r\n      imageElement.classList.add(_carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__.imagePositionTags[i]);\r\n    imageCarousel_div.append(imageElement);\r\n  }\r\n}\r\n\r\npopulate();\r\n\r\n// carousel animations\r\nconst imageElements = document.querySelector(\".carousel\").children;\r\nconst scrollLeft_btn = document.querySelector(\"#left\");\r\nconst scrollRight_btn = document.querySelector(\"#right\");\r\n\r\nscrollLeft_btn.addEventListener(\"click\", () => (0,_carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__.scrollToLeft)(imageElements));\r\n\r\nscrollRight_btn.addEventListener(\"click\", () => (0,_carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__.scrollToRight)(imageElements));\r\n\r\nsetInterval(() => (0,_carouselScripts_js__WEBPACK_IMPORTED_MODULE_1__.scrollToRight)(imageElements), 8000);\r\n\r\n// header border animation\r\nconst headerBoxBorder_div = document.querySelector(\".header-border\");\r\nsetInterval(() => {\r\n  headerBoxBorder_div.classList.toggle(\"header-border-size-animation\");\r\n  headerBoxBorder_div.classList.toggle(\"header-border-position-animation\");\r\n}, 2500);\r\n\n\n//# sourceURL=webpack://placeholder/./src/index.js?");

/***/ }),

/***/ "./src/fonts/WorkSans-Italic-VariableFont_wght.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/WorkSans-Italic-VariableFont_wght.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"909e4faac8822880e462.ttf\";\n\n//# sourceURL=webpack://placeholder/./src/fonts/WorkSans-Italic-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/fonts/WorkSans-VariableFont_wght.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/WorkSans-VariableFont_wght.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0297787a1a192213b53.ttf\";\n\n//# sourceURL=webpack://placeholder/./src/fonts/WorkSans-VariableFont_wght.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;