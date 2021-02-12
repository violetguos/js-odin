/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabInit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabInit.js */ \"./src/tabInit.js\");\n/* harmony import */ var _tabPopulate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabPopulate.js */ \"./src/tabPopulate.js\");\n\n\n\n\nObject(_tabInit_js__WEBPACK_IMPORTED_MODULE_0__[\"tab\"])();\nObject(_tabPopulate_js__WEBPACK_IMPORTED_MODULE_1__[\"tabPopulate\"])();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tabInit.js":
/*!************************!*\
  !*** ./src/tabInit.js ***!
  \************************/
/*! exports provided: tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tab\", function() { return tab; });\nconst tabFactory = (title, id) => {\n    \n    const inputTab1 = document.createElement(\"input\");\n    inputTab1.setAttribute(\"type\", \"radio\");\n    inputTab1.setAttribute(\"name\", \"tab\");\n    inputTab1.setAttribute(\"id\", \"tab\"+id);\n    inputTab1.checked = true;\n\n    const label = document.createElement(\"label\");\n    label.setAttribute(\"class\", \"tabButton\");\n    label.setAttribute(\"for\", \"tab1\");\n    const label_content = document.createTextNode(title);\n    label.appendChild(label_content);\n    \n    return [inputTab1, label];\n}; \n\nconst tab = (() => {\n    const contentDiv = document.querySelector(\"#content\");\n    const divElement = document.createElement(\"div\");\n    divElement.classList.add(\"tabsy\");\n\n    const tab1 = tabFactory(\"Resto\", 1);\n    // const tab2 = tabFactory(\"Contact\", 1);\n\n    for(let i=0; i<tab1.length; i++){\n        divElement.appendChild(tab1[i]);\n    }\n    contentDiv.appendChild(divElement);\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/tabInit.js?");

/***/ }),

/***/ "./src/tabPopulate.js":
/*!****************************!*\
  !*** ./src/tabPopulate.js ***!
  \****************************/
/*! exports provided: tabPopulate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabPopulate\", function() { return tabPopulate; });\nfunction tabDivs(){\n  const divTab = document.createElement(\"div\");\n  divTab.classList.add(\"tab\");\n\n\n  const divContent = document.createElement(\"div\");\n  divContent.classList.add(\"content\");\n  divContent.id=\"resto\";\n\n  divTab.appendChild(divContent);\n  return divTab;\n}\n\nfunction tabContent(){\n  const header = document.createElement(\"header\");\n  const h1 = document.createElement(\"h1\");\n  const head_content = document.createTextNode(\"pizza academy\");\n  h1.appendChild(head_content);\n  header.appendChild(h1);\n\n  const paragraph = document.createElement(\"p\");\n  const pDiv = document.createTextNode(\"the best\");\n  paragraph.appendChild(pDiv);\n\n  const img = document.createElement(\"img\");\n  img.src = \"img/restaurant.jpg\"; \n  \n  return [h1, header, paragraph, img];\n}\n\nconst tabPopulate = (() =>{\n  const contentDiv = document.querySelector(\".tabsy\");\n  const divTab = tabDivs();\n\n  const contentTab = tabContent();\n  for(var i = 0; i<contentTab.length; i++)\n    divTab.appendChild(contentTab[i]);\n  contentDiv.appendChild(divTab);\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/tabPopulate.js?");

/***/ })

/******/ });