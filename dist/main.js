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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n\n\n(0,_linked_list__WEBPACK_IMPORTED_MODULE_0__.createList)()\n\n//# sourceURL=webpack://computer-science-js/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createList: () => (/* binding */ createList)\n/* harmony export */ });\nclass Node {\n    constructor(value) {\n        this.value = value;\n        this.next = null;\n    }\n}\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n    }\n\n    append(value) {\n        const newNode = new Node(value);\n        if (!this.head) {\n            this.head = newNode;\n            this.tail = newNode;\n        } else {\n            this.tail.next = newNode;\n            this.tail = newNode;\n        }\n        this.length++;\n        return this;\n    }\n\n    prepend(value) {\n        const newNode = new Node(value);\n        if (!this.head) {\n            this.head = newNode;\n            this.tail = newNode;\n        } else {\n            newNode.next = this.head;\n            this.head = newNode;\n        }\n        this.length++;\n        return this;\n    }\n\n    insertAt(value, index) {\n        const newNode = new Node(value);\n        if (index === 1) {\n            newNode.next = this.head;\n            this.head = newNode;\n            return;\n        }\n        let current = this.head;\n        let i = 1;\n        while (i < index -1 && current) {\n            current = current.next;\n            i++\n        }\n        if (current) {\n            newNode.next = current.next;\n            current.next = newNode\n        }\n    }\n\n    removeAt(index) {\n        if (index < 0 || index >= this.length) return null;\n        if (index === 0) return this.remove();\n        let current = this.head;\n        for (let i = 0; i < index - 1; i++) {\n           current = current.next;\n        }\n        current.next = current.next.next;\n        this.length--;\n        return this;\n     }\n\n    size() {\n        if (!this.head) return null\n        console.log(this.length);\n    }\n\n    printHead() {\n        console.log(`Head value is ${this.head.value}`)\n    }\n\n    printTail() {\n        console.log(`Tail value is ${this.tail.value}`)\n    }\n\n    printAll() {\n        let current = this.head;\n        while (current) {\n            console.log(current.value);\n            current = current.next\n        }\n    }\n}\n\n\nfunction createList() {\n    const list = new LinkedList();\n\n    list.prepend(\"node1\");\n    list.prepend(\"node2\");\n    list.prepend(\"node3\");\n    list.prepend(\"node4\");\n    console.log(\"Initial List:\");\n    list.printAll();\n\n    list.size()\n    list.printTail()\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://computer-science-js/./src/linked-list.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;