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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Dashboard.jsx":
/*!*****************************!*\
  !*** ./pages/Dashboard.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  /*componentDidMount() {
    var form = document.getElementById("formLogin");
    form.addEventListener("submit", event => {
      const email = document.getElementById("ed_email").value,
        password = document.getElementById("ed_password").value;
       console.log("email : ", email);
      console.log("password : ", password);
      event.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${email}&password=${password}`
      }).then(response => {
          console.log("Password is",response.ok)
      });
    });
  }*/
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
      style: {
        display: "flex",
        width: "100%"
      },
      className: "jsx-4254375492" + " " + "nav"
    }, __jsx("div", {
      className: "jsx-4254375492"
    }, __jsx("a", {
      href: "../Dashboard",
      className: "jsx-4254375492"
    }, __jsx("img", {
      src: "static/src/Logo_petro.png",
      className: "jsx-4254375492" + " " + "logo"
    }))), __jsx("div", {
      style: {
        justifySelf: "flex-end",
        width: "50%"
      },
      className: "jsx-4254375492" + " " + "text"
    }, __jsx("a", {
      href: "../Login",
      className: "jsx-4254375492" + " " + "login"
    }, "Login"), __jsx("a", {
      href: "../DaftarBarang",
      className: "jsx-4254375492" + " " + "daftarBarang"
    }, "Daftar Barang"), __jsx("a", {
      href: "../Panduan",
      className: "jsx-4254375492" + " " + "panduan"
    }, "Panduan"))), __jsx("h1", {
      className: "jsx-4254375492" + " " + "welcome"
    }, "WELCOME TO"), __jsx("h1", {
      className: "jsx-4254375492" + " " + "sistem"
    }, "SISTEM INVENTARIS BARANG"), __jsx("h1", {
      className: "jsx-4254375492" + " " + "pt"
    }, "PT. PETROKIMIA GRESIK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4254375492"
    }, "body{background:#3ec400;font-family:\"Open Sans\",sans-serif;margin:0 auto;}div{margin:0 auto;display:block;}main{display:grid;grid-template-columns:1fr 1fr;font-family:\"Open Sans\",sans-serif;}.logo{width:50%;margin:0;margin-left:25px;margin-top:3%;}.welcome{margin:0 auto;margin-top:12%;font-size:50px;color:white;text-align:center;}.sistem{margin:0 auto;font-size:50px;color:white;text-align:center;}.pt{margin:0 auto;font-size:50px;color:white;text-align:center;}.nav{background:white;margin:0;}.login{margin-left:15%;margin-right:5%;font-size:25px;margin-top:0%;-webkit-text-decoration:none;text-decoration:none;color:black;}.daftarBarang{font-size:25px;margin-right:5%;-webkit-text-decoration:none;text-decoration:none;color:black;}.text{background:white;margin:0;margin-top:4%;}.panduan{font-size:25px;margin-right:5%;-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL0Rhc2hib2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QyQixBQUdnQyxBQU1MLEFBS0QsQUFNSCxBQU9JLEFBUUEsQUFPQSxBQU9HLEFBS0QsQUFTRCxBQU9FLEFBTUYsVUF2RE4sR0FOcUIsQ0FMaEIsQUFrQkMsQUFRQSxBQU9BLENBcUJDLEFBYUEsQ0F0QkEsQ0FMUCxBQXFCQSxFQW5FMkIsQUFrQm5CLE9BNkJuQixBQXFCZ0IsRUE3RGhCLENBa0JpQixBQVFILEFBT0EsRUFxQlMsQUFhQSxDQXRCTixJQWpDRCxJQWtEaEIsQ0FuQ29CLEFBT0EsRUE3QmtCLENBY3hCLEdBMkJFLEdBakNoQixJQW5CZ0IsRUEwQkksR0FRcEIsQUFPQSxFQVl1QixPQXBEdkIsTUEwQkEsSUFmQSxHQWlEYyxBQWFBLFlBWmQsQUFhQSxrQkFyQmMsWUFDZCIsImZpbGUiOiIvaG9tZS9tYXpza2EvUmVhY3RLUC9wYWdlcy9EYXNoYm9hcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKmNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtTG9naW5cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZF9lbWFpbFwiKS52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkX3Bhc3N3b3JkXCIpLnZhbHVlO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImVtYWlsIDogXCIsIGVtYWlsKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgOiBcIiwgcGFzc3dvcmQpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogYGVtYWlsPSR7ZW1haWx9JnBhc3N3b3JkPSR7cGFzc3dvcmR9YFxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQYXNzd29yZCBpc1wiLHJlc3BvbnNlLm9rKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0qL1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bmF2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9EYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvc3JjL0xvZ29fcGV0cm8ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sganVzdGlmeVNlbGY6IFwiZmxleC1lbmRcIiwgd2lkdGg6IFwiNTAlXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9Mb2dpblwiIGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiLi4vRGFmdGFyQmFyYW5nXCIgY2xhc3NOYW1lPVwiZGFmdGFyQmFyYW5nXCI+XG4gICAgICAgICAgICAgIERhZnRhciBCYXJhbmdcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9QYW5kdWFuXCIgY2xhc3NOYW1lPVwicGFuZHVhblwiPlxuICAgICAgICAgICAgICBQYW5kdWFuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+V0VMQ09NRSBUTzwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaXN0ZW1cIj5TSVNURU0gSU5WRU5UQVJJUyBCQVJBTkc8L2gxPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHRcIj5QVC4gUEVUUk9LSU1JQSBHUkVTSUs8L2gxPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlYzQwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndlbGNvbWV7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2lzdGVte1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnB0e1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9naW4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGFmdGFyQmFyYW5nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFuZHVhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdfQ== */\n/*@ sourceURL=/home/mazska/ReactKP/pages/Dashboard.jsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/Dashboard.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mazska/ReactKP/pages/Dashboard.jsx */"./pages/Dashboard.jsx");


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
//# sourceMappingURL=Dashboard.js.map