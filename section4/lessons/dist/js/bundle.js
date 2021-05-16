/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/mymodule.js":
/*!************************************!*\
  !*** ./src/js/modules/mymodule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "two": () => (/* binding */ two),
/* harmony export */   "hello": () => (/* binding */ hello),
/* harmony export */   "default": () => (/* binding */ myModule)
/* harmony export */ });
// Обычных export может быть сколько угодно
let one = 1; // экспорт переменной

let two = 2;
 // именованный экспорт переменной

function hello() {
	console.log('Hello');
}

// export default может быть только один
function myModule() {
	this.hello = function() {
		console.log("Hello!");
	};

	this.goodbye = function() {
		console.log("Goodbye!");
	};
}


/***/ }),

/***/ "./src/js/modules/newmodule.js":
/*!*************************************!*\
  !*** ./src/js/modules/newmodule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newModule)
/* harmony export */ });
function newModule() {
	console.log('Module');
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mymodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mymodule */ "./src/js/modules/mymodule.js");
/* harmony import */ var _modules_newmodule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/newmodule */ "./src/js/modules/newmodule.js");
// import {default as myModule} from './modules/mymodule'; // Явная запись import default as myModule (синтаксис переименования) изнутри
 // Но используется сокращенная запись import default


 // import всего, как объекта data, из модуля
_modules_mymodule__WEBPACK_IMPORTED_MODULE_0__.hello();


const myModuleInstance = new _modules_mymodule__WEBPACK_IMPORTED_MODULE_0__.default();
myModuleInstance.hello();
myModuleInstance.goodbye();



(0,_modules_newmodule__WEBPACK_IMPORTED_MODULE_1__.default)();


 // деструктуризация объекта
console.log(_modules_mymodule__WEBPACK_IMPORTED_MODULE_0__.one, _modules_mymodule__WEBPACK_IMPORTED_MODULE_0__.two);
(0,_modules_mymodule__WEBPACK_IMPORTED_MODULE_0__.hello)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map