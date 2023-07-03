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

/***/ "./src/binary-search-tree.js":
/*!***********************************!*\
  !*** ./src/binary-search-tree.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bstDriver: () => (/* binding */ bstDriver)\n/* harmony export */ });\nfunction bstDriver() {\n    const array = [5, 3, 7, 2, 4, 6, 8];\n    const tree = new Tree(array);\n\n    prettyPrint(tree.root)\n\n    console.log(`Tree balanced = ${tree.isBalanced()}`)\n\n    console.log('level order:')\n    tree.levelOrder((node) => {\n        console.log(node.data);\n    });\n  \n    const inOrderResult = tree.inOrder();\n    console.log(`In-order: ${inOrderResult}`);\n  \n    const preOrderResult = tree.preOrder();\n    console.log(`Pre-order: ${preOrderResult}`);\n\n    const postOrderResult = tree.postOrder();\n    console.log(`Post-order: ${postOrderResult}`);\n\n    console.log('Inserting 10, 1, 0')\n\n    tree.insert(10)\n    tree.insert(1)\n    tree.insert(0)\n\n    console.log(`Tree balanced = ${tree.isBalanced()}`)\n    console.log('Rebalancing tree')\n\n    tree.rebalance()\n\n    console.log(`Tree balanced = ${tree.isBalanced()}`)\n\n    prettyPrint(tree.root)\n\n    console.log('level order:')\n    tree.levelOrder((node) => {\n        console.log(node.data);\n    });\n  \n    const inOrderResult2 = tree.inOrder();\n    console.log(`In-order: ${inOrderResult2}`);\n  \n    const preOrderResult2 = tree.preOrder();\n    console.log(`Pre-order: ${preOrderResult2}`);\n\n    const postOrderResult2 = tree.postOrder();\n    console.log(`Post-order: ${postOrderResult2}`);\n}\n\n\n\nclass Node {\n    constructor(data) {\n      this.data = data;\n      this.left = null;\n      this.right = null;\n    }\n  }\n  \n  class Tree {\n    constructor(array) {\n      this.root = this.buildTree(array);\n    }\n  \n    buildTree(array) {\n      if (array.length === 0) {\n        return null;\n      }\n  \n      const sortedArray = array.sort((a, b) => a - b);\n  \n      const mid = Math.floor(sortedArray.length / 2);\n      const rootNode = new Node(sortedArray[mid]);\n  \n      rootNode.left = this.buildTree(sortedArray.slice(0, mid));\n      rootNode.right = this.buildTree(sortedArray.slice(mid + 1));\n  \n      return rootNode;\n    }\n  \n    insert(value) {\n      this.root = this.insertNode(this.root, value);\n    }\n  \n    insertNode(node, value) {\n      if (node === null) {\n        return new Node(value);\n      }\n  \n      if (value < node.data) {\n        node.left = this.insertNode(node.left, value);\n      } else if (value > node.data) {\n        node.right = this.insertNode(node.right, value);\n      }\n  \n      return node;\n    }\n  \n    delete(value) {\n      this.root = this.deleteNode(this.root, value);\n    }\n  \n    deleteNode(node, value) {\n      if (node === null) {\n        return null;\n      }\n  \n      if (value < node.data) {\n        node.left = this.deleteNode(node.left, value);\n      } else if (value > node.data) {\n        node.right = this.deleteNode(node.right, value);\n      } else {\n        // Case 1: Node with no children or one child\n        if (node.left === null) {\n          return node.right;\n        } else if (node.right === null) {\n          return node.left;\n        }\n  \n        // Case 2: Node with two children\n        const successor = this.findMinValueNode(node.right);\n        node.data = successor.data;\n        node.right = this.deleteNode(node.right, successor.data);\n      }\n  \n      return node;\n    }\n  \n    find(value) {\n      return this.findNode(this.root, value);\n    }\n  \n    findNode(node, value) {\n      if (node === null || node.data === value) {\n        return node;\n      }\n  \n      if (value < node.data) {\n        return this.findNode(node.left, value);\n      } else {\n        return this.findNode(node.right, value);\n      }\n    }\n  \n    findMinValueNode(node) {\n      let current = node;\n      while (current.left !== null) {\n        current = current.left;\n      }\n      return current;\n    }\n  \n    levelOrder(callback) {\n      const result = [];\n      if (!callback) {\n        callback = (node) => {\n          result.push(node.data);\n        };\n      }\n  \n      if (this.root === null) {\n        return result;\n      }\n  \n      const queue = [this.root];\n      while (queue.length > 0) {\n        const node = queue.shift();\n        callback(node);\n  \n        if (node.left !== null) {\n          queue.push(node.left);\n        }\n  \n        if (node.right !== null) {\n          queue.push(node.right);\n        }\n      }\n  \n      return result;\n    }\n  \n    inOrder(callback) {\n      const result = [];\n      if (!callback) {\n        callback = (node) => {\n          result.push(node.data);\n        };\n      }\n  \n      this.inOrderTraversal(this.root, callback);\n  \n      return result;\n    }\n  \n    inOrderTraversal(node, callback) {\n      if (node === null) {\n        return;\n      }\n  \n      this.inOrderTraversal(node.left, callback);\n      callback(node);\n      this.inOrderTraversal(node.right, callback);\n    }\n  \n    preOrder(callback) {\n      const result = [];\n      if (!callback) {\n        callback = (node) => {\n          result.push(node.data);\n        };\n      }\n  \n      this.preOrderTraversal(this.root, callback);\n  \n      return result;\n    }\n  \n    preOrderTraversal(node, callback) {\n      if (node === null) {\n        return;\n      }\n  \n      callback(node);\n      this.preOrderTraversal(node.left, callback);\n      this.preOrderTraversal(node.right, callback);\n    }\n  \n    postOrder(callback) {\n      const result = [];\n      if (!callback) {\n        callback = (node) => {\n          result.push(node.data);\n        };\n      }\n  \n      this.postOrderTraversal(this.root, callback);\n  \n      return result;\n    }\n  \n    postOrderTraversal(node, callback) {\n      if (node === null) {\n        return;\n      }\n  \n      this.postOrderTraversal(node.left, callback);\n      this.postOrderTraversal(node.right, callback);\n      callback(node);\n    }\n  \n    height(node) {\n      if (node === null) {\n        return -1;\n      }\n  \n      const leftHeight = this.height(node.left);\n      const rightHeight = this.height(node.right);\n  \n      return Math.max(leftHeight, rightHeight) + 1;\n    }\n  \n    depth(node) {\n      if (node === null) {\n        return -1;\n      }\n  \n      const parent = this.findParent(this.root, node);\n  \n      if (parent === null) {\n        return 0;\n      }\n  \n      return this.depth(parent) + 1;\n    }\n  \n    findParent(root, node) {\n      if (root === null || root === node) {\n        return null;\n      }\n  \n      if (\n        (root.left !== null && root.left === node) ||\n        (root.right !== null && root.right === node)\n      ) {\n        return root;\n      }\n  \n      const leftParent = this.findParent(root.left, node);\n      if (leftParent !== null) {\n        return leftParent;\n      }\n  \n      return this.findParent(root.right, node);\n    }\n  \n    isBalanced() {\n      return this.checkBalanced(this.root);\n    }\n  \n    checkBalanced(node) {\n      if (node === null) {\n        return true;\n      }\n  \n      const leftHeight = this.height(node.left);\n      const rightHeight = this.height(node.right);\n      const heightDiff = Math.abs(leftHeight - rightHeight);\n  \n      if (heightDiff > 1) {\n        return false;\n      }\n  \n      return this.checkBalanced(node.left) && this.checkBalanced(node.right);\n    }\n  \n    rebalance() {\n      const sortedArray = this.inOrder();\n      this.root = this.buildTree(sortedArray);\n    }\n  }\n  \n  \nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n    if (node === null) {\n        return;\n    }\n    if (node.right !== null) {\n        prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n    }\n    console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n    if (node.left !== null) {\n        prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n    }\n};\n\n//# sourceURL=webpack://computer-science-js/./src/binary-search-tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ \"./src/linked-list.js\");\n/* harmony import */ var _binary_search_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary-search-tree */ \"./src/binary-search-tree.js\");\n/* harmony import */ var _knights_travails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knights-travails */ \"./src/knights-travails.js\");\n\n\n\n\n// createList()\n// bstDriver()\n(0,_knights_travails__WEBPACK_IMPORTED_MODULE_2__.knightMoves)([3,3],[4,3])\n\n//# sourceURL=webpack://computer-science-js/./src/index.js?");

/***/ }),

/***/ "./src/knights-travails.js":
/*!*********************************!*\
  !*** ./src/knights-travails.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knightMoves: () => (/* binding */ knightMoves)\n/* harmony export */ });\nfunction knightMoves(start, finish) {\n    // console.log(start, finish)\n\n    const offset = [Math.abs(start[0]-finish[0]),Math.abs(start[1]-finish[1])]\n    const minMoves = minimumMoves[offset[0]][offset[1]]\n\n    console.log(availableMoves(start))\n}\n\n\nfunction availableMoves(node, result = []){\n    const validMoves = [[-2,-1], [-1,-2], [1,-2], [2,-1] ,[-2,1] ,[-1,2] ,[1,2] ,[2,1]]\n\n    for (let move of validMoves) {\n        let newArray = [node[0] + move[0], node[1] + move[1]];\n        if (newArray.every(coord => coord > 0 && coord <= 8)) {\n            result.push(newArray);\n        }\n    }\n    return result\n}\n\n\n\n\n\nconst minimumMoves = [\n    [0,3,2,3,2,3,4,5],\n    [3,4,1,2,3,4,3,4],\n    [2,1,4,3,2,3,4,5],\n    [3,2,3,2,3,4,3,4],\n    [2,3,2,3,4,3,4,5],\n    [3,4,3,4,3,4,5,4],\n    [4,3,4,3,4,5,4,5],\n    [5,4,5,4,5,4,5,6]\n    ]\n\n\n\nconst sixMoves = {\n    \"[1, 8]\": [[3, 7], [5, 6], [4, 4], [5, 2], [7, 3]], \n    \"[8, 8]\": [[6, 7], [4, 6], [5, 6], [4, 2], [2, 3]], \n    \"[8, 1]\": [[7, 3], [5, 2], [4, 4], [5, 6], [3, 7]], \n    \"[1, 1]\": [[2, 3], [4, 2], [5, 6], [4, 6], [6, 7]]\n}\n\n//# sourceURL=webpack://computer-science-js/./src/knights-travails.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createList: () => (/* binding */ createList)\n/* harmony export */ });\nclass Node {\n    constructor(value) {\n        this.value = value;\n        this.next = null;\n    }\n}\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n    }\n\n    append(value) {\n        const newNode = new Node(value);\n        if (!this.head) {\n            this.head = newNode;\n            this.tail = newNode;\n        } else {\n            this.tail.next = newNode;\n            this.tail = newNode;\n        }\n        this.length++;\n        return this;\n    }\n\n    prepend(value) {\n        const newNode = new Node(value);\n        if (!this.head) {\n            this.head = newNode;\n            this.tail = newNode;\n        } else {\n            newNode.next = this.head;\n            this.head = newNode;\n        }\n        this.length++;\n        return this;\n    }\n\n    insertAt(value, index) {\n        const newNode = new Node(value);\n        if (index === 1) {\n            newNode.next = this.head;\n            this.head = newNode;\n            return;\n        }\n        let current = this.head;\n        let i = 1;\n        while (i < index -1 && current) {\n            current = current.next;\n            i++\n        }\n        if (current) {\n            newNode.next = current.next;\n            current.next = newNode\n        }\n    }\n\n    removeAt(index) {\n        if (index < 0 || index >= this.length) return null;\n        if (index === 0) {\n            const removedNode = this.head;\n            this.head = this.head.next;\n            this.length--;\n            return removedNode;\n        }\n        let current = this.head;\n        for (let i = 0; i < index - 1; i++) {\n            current = current.next;\n        }\n        const removedNode = current.next;\n        current.next = current.next.next;\n        this.length--;\n        return removedNode;\n    }\n    \n\n    at(index) {\n        let current = this.head;\n        let count = 0;\n\n        while (current != null) {\n            if (count == index)\n                return current.value;\n            count++\n            current = current.next\n        }\n        return 0;\n    }\n\n    contains(value) {\n        let current = this.head;\n\n        while (current != null) {\n            if (current.value == value) {\n                return true\n            }\n            current = current.next\n        }\n        return false\n    }\n\n    find(value) {\n        let current = this.head;\n        let index = 0;\n\n        while (current != null) {\n            if (current.value == value) {\n                return index\n            }\n            index++\n            current = current.next\n        }\n        return null\n    }\n\n    pop(size) {\n        this.removeAt(size - 1)\n    }\n\n    size() {\n        if (!this.head) return null\n        return (this.length);\n    }\n\n    printHead() {\n        console.log(`Head value is ${this.head.value}`)\n    }\n\n    printTail() {\n        console.log(`Tail value is ${this.tail.value}`)\n    }\n\n    printAll() {\n        let current = this.head;\n        while (current) {\n            console.log(current.value);\n            current = current.next\n        }\n    }\n\n    toString() {\n        let current = this.head;\n        let string = \"\";\n    \n        while (current != null) {\n            string = string.concat(`( ${current.value} ) -> `);\n            current = current.next;\n        }\n        string = string.concat(\"null\");\n        console.log(string);\n    }\n}\n\n\nfunction createList() {\n    const list = new LinkedList();\n\n    list.prepend(\"node1\");\n    list.prepend(\"node2\");\n    list.prepend(\"node3\");\n    list.prepend(\"node4\");\n    console.log(\"Initial List:\");\n    list.toString();\n}\n\n//# sourceURL=webpack://computer-science-js/./src/linked-list.js?");

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