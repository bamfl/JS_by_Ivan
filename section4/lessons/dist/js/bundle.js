/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/module.js":
/*!**********************************!*\
  !*** ./src/js/modules/module.js ***!
  \**********************************/
/***/ ((module) => {

function myModule() {
	this.hello = function() {
		console.log("Hello!");
	};

	this.goodbye = function() {
		console.log("Goodbye!");
	};
}

module.exports = myModule;


/***/ }),

/***/ "./src/js/modules/newmodule.js":
/*!*************************************!*\
  !*** ./src/js/modules/newmodule.js ***!
  \*************************************/
/***/ ((module) => {

function newModule() {
	console.log('Module');
}

module.exports = newModule;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
const myModule = __webpack_require__(/*! ./modules/module */ "./src/js/modules/module.js"),
			newModule = __webpack_require__(/*! ./modules/newmodule */ "./src/js/modules/newmodule.js");

const myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();

newModule();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map