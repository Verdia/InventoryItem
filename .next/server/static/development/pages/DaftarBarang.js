module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/DaftarBarang.jsx":
/*!********************************!*\
  !*** ./pages/DaftarBarang.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class ListBarang extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("nav", {
      style: {
        display: "flex",
        width: "100%"
      },
      className: "jsx-1067134176" + " " + "nav"
    }, __jsx("div", {
      className: "jsx-1067134176"
    }, __jsx("a", {
      href: "../Dashboard",
      className: "jsx-1067134176"
    }, __jsx("img", {
      src: "static/src/Logo_petro.png",
      className: "jsx-1067134176" + " " + "logo"
    }))), __jsx("div", {
      style: {
        justifySelf: "flex-end",
        width: "50%"
      },
      className: "jsx-1067134176" + " " + "text"
    }, __jsx("a", {
      className: "jsx-1067134176" + " " + "login"
    }, "Daftar Barang"), __jsx("a", {
      href: "../InsertBarang",
      className: "jsx-1067134176" + " " + "daftarBarang"
    }, "Input Barang"), __jsx("a", {
      href: "../Panduan",
      className: "jsx-1067134176" + " " + "panduan"
    }, "Logout")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1067134176"
    }, "body{background:#3ec400;font-family:\"Open Sans\",sans-serif;margin:0 auto;}div{margin:0 auto;display:block;}main{display:grid;grid-template-columns:1fr 1fr;font-family:\"Open Sans\",sans-serif;}.logo{width:50%;margin:0;margin-left:25px;margin-top:3%;}.nav{background:white;margin:0;}.login{margin-left:15%;margin-right:5%;font-size:25px;margin-top:0%;-webkit-text-decoration:none;text-decoration:none;color:black;}.daftarBarang{font-size:25px;margin-right:5%;-webkit-text-decoration:none;text-decoration:none;color:black;}.text{background:white;margin:0;margin-top:4%;}.panduan{font-size:25px;margin-right:5%;-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL0RhZnRhckJhcmFuZy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYytCLEFBR29DLEFBTUwsQUFLRCxBQU1ELEFBT08sQUFLRCxBQVNELEFBT0UsQUFNSixVQWpDSixHQU5tQixDQUxoQixDQWdDSSxBQWFGLENBdEJFLENBTFAsQUFxQkEsRUE3Q3lCLEFBa0JqQixPQU9yQixBQXFCa0IsRUF2Q2xCLEdBZ0N5QixBQWFGLENBdEJKLElBWEQsSUE0QmxCLEdBbkNzQyxJQW1CcEIsR0FYbEIsSUFuQmdCLE9BK0JTLE9BOUJ6QixVQVdBLEdBMkJnQixBQWFGLFlBWmQsQUFhQSxrQkFyQmdCLFlBQ2hCIiwiZmlsZSI6Ii9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL0RhZnRhckJhcmFuZy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY2xhc3MgTGlzdEJhcmFuZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCJ9fSBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vRGFzaGJvYXJkXCI+PGltZyBzcmM9XCJzdGF0aWMvc3JjL0xvZ29fcGV0cm8ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlTZWxmOiBcImZsZXgtZW5kXCIsIHdpZHRoOiBcIjUwJVwifX0gY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luXCI+RGFmdGFyIEJhcmFuZzwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vSW5zZXJ0QmFyYW5nXCIgY2xhc3NOYW1lPVwiZGFmdGFyQmFyYW5nXCI+SW5wdXQgQmFyYW5nPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9QYW5kdWFuXCIgY2xhc3NOYW1lPVwicGFuZHVhblwiPkxvZ291dDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2VjNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgLmxvZ297XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAubmF2e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgLmxvZ2lue1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAuZGFmdGFyQmFyYW5ne1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgLnBhbmR1YW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgTGlzdEJhcmFuZzsiXX0= */\n/*@ sourceURL=/home/mazska/ReactKP/pages/DaftarBarang.jsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListBarang);

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/DaftarBarang.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mazska/ReactKP/pages/DaftarBarang.jsx */"./pages/DaftarBarang.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=DaftarBarang.js.map