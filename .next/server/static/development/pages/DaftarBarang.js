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
/* harmony import */ var _TableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableItem */ "./pages/TableItem.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { response } from "express";



class ListBarang extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
      style: {
        display: "flex",
        width: "100%"
      },
      className: "jsx-3286096549" + " " + "nav"
    }, __jsx("div", {
      className: "jsx-3286096549"
    }, __jsx("a", {
      href: "../Dashboard",
      className: "jsx-3286096549"
    }, __jsx("img", {
      src: "static/src/Logo_petro.png",
      className: "jsx-3286096549" + " " + "logo"
    }))), __jsx("div", {
      style: {
        justifySelf: "flex-end",
        width: "50%"
      },
      className: "jsx-3286096549" + " " + "text"
    }, __jsx("a", {
      className: "jsx-3286096549" + " " + "login"
    }, "Daftar Barang"), __jsx("a", {
      href: "../InsertBarang",
      className: "jsx-3286096549" + " " + "daftarBarang"
    }, "Input Barang"), __jsx("a", {
      href: "../Panduan",
      className: "jsx-3286096549" + " " + "panduan"
    }, "Logout"))), __jsx("div", {
      className: "jsx-3286096549" + " " + "greenStrip"
    }), __jsx("div", {
      className: "jsx-3286096549"
    }, __jsx(_TableItem__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3286096549"
    }, "body{background:#ffffff;font-family:\"Open Sans\",sans-serif;margin:0 auto;}.greenStrip{display:block;margin:0 auto;width:90%;background:#3ec400;height:2px;}div{margin:0 auto;display:block;}main{display:grid;grid-template-columns:1fr 1fr;font-family:\"Open Sans\",sans-serif;}.logo{width:50%;margin:0;margin-left:25px;margin-top:3%;}.nav{background:white;margin:0;}.login{margin-left:15%;margin-right:5%;font-size:25px;margin-top:0%;-webkit-text-decoration:none;text-decoration:none;color:black;}.daftarBarang{font-size:25px;margin-right:5%;-webkit-text-decoration:none;text-decoration:none;color:black;}.text{background:white;margin:0;margin-top:4%;}.panduan{font-size:25px;margin-right:5%;-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL0RhZnRhckJhcmFuZy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0IyQixBQUdnQyxBQU1MLEFBUUEsQUFLRCxBQU1ILEFBT08sQUFLRCxBQVNELEFBT0UsQUFNRixVQWpDTixHQU5xQixDQWJoQixBQVFBLENBZ0NFLEFBYUEsQ0F0QkEsQ0FMUCxBQXFCQSxFQXJEMkIsQUEwQm5CLE9BT25CLEFBcUJnQixFQS9DSixBQVFaLEdBZ0N1QixBQWFBLENBdEJOLElBWEQsRUFuQkssRUErQ3JCLEdBbkNzQyxJQW1CdEIsR0FYaEIsSUEzQmdCLEdBUUgsSUErQlUsT0F0Q3ZCLEFBUUEsVUFXQSxHQTJCYyxBQWFBLFlBWmQsQUFhQSxrQkFyQmMsWUFDZCIsImZpbGUiOiIvaG9tZS9tYXpza2EvUmVhY3RLUC9wYWdlcy9EYWZ0YXJCYXJhbmcuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgcmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IFN0aWNreUhlYWRUYWJsZSBmcm9tIFwiLi9UYWJsZUl0ZW1cIjtcblxuY2xhc3MgTGlzdEJhcmFuZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bmF2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9EYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvc3JjL0xvZ29fcGV0cm8ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sganVzdGlmeVNlbGY6IFwiZmxleC1lbmRcIiwgd2lkdGg6IFwiNTAlXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luXCI+RGFmdGFyIEJhcmFuZzwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9JbnNlcnRCYXJhbmdcIiBjbGFzc05hbWU9XCJkYWZ0YXJCYXJhbmdcIj5cbiAgICAgICAgICAgICAgSW5wdXQgQmFyYW5nXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiLi4vUGFuZHVhblwiIGNsYXNzTmFtZT1cInBhbmR1YW5cIj5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZWVuU3RyaXBcIj48L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U3RpY2t5SGVhZFRhYmxlLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ3JlZW5TdHJpcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZWM0MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kYWZ0YXJCYXJhbmcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYW5kdWFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEJhcmFuZztcbiJdfQ== */\n/*@ sourceURL=/home/mazska/ReactKP/pages/DaftarBarang.jsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListBarang);

/***/ }),

/***/ "./pages/TableItem.jsx":
/*!*****************************!*\
  !*** ./pages/TableItem.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyHeadTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "@material-ui/core/TablePagination");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const columns = [{
  id: 'name',
  label: 'Name Item',
  minWidth: 50
}, {
  id: 'code',
  label: 'Code\u00a0Item',
  minWidth: 50,
  align: 'center'
}, {
  id: 'population',
  label: 'Location',
  minWidth: 50,
  align: 'center',
  format: value => value.toLocaleString()
}, {
  id: 'size',
  label: 'Tanggal\u00a0Peminjaman',
  minWidth: 50,
  align: 'center',
  format: value => value.toLocaleString()
}, {
  id: 'density',
  label: 'PIC',
  minWidth: 50,
  align: 'center',
  format: value => value.toFixed(2)
}, {
  id: 'density',
  label: 'ID Bagian',
  minWidth: 50,
  align: 'center',
  format: value => value.toFixed(2)
}, {
  id: 'density',
  label: 'Status Item',
  minWidth: 50,
  align: 'center',
  format: value => value.toFixed(2)
}];

function createData(name, code, population, size) {
  const density = population / size;
  return {
    name,
    code,
    population,
    size,
    density
  };
}

const rows = [createData('India', 'IN', 1324171354, 3287263), createData('China', 'CN', 1403500365, 9596961), createData('Italy', 'IT', 60483973, 301340), createData('United States', 'US', 327167434, 9833520), createData('Canada', 'CA', 37602103, 9984670), createData('Australia', 'AU', 25475400, 7692024), createData('Germany', 'DE', 83019200, 357578), createData('Ireland', 'IE', 4857000, 70273), createData('Mexico', 'MX', 126577691, 1972550), createData('Japan', 'JP', 126317000, 377973), createData('France', 'FR', 67022000, 640679), createData('United Kingdom', 'GB', 67545757, 242495), createData('Russia', 'RU', 146793744, 17098246), createData('Nigeria', 'NG', 200962417, 923768), createData('Brazil', 'BR', 210147125, 8515767)];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
});
function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.container
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, null, columns.map(column => __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
    key: column.id,
    align: column.align,
    style: {
      minWidth: column.minWidth
    }
  }, column.label)))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default.a, null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code
    }, columns.map(column => {
      const value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
        key: column.id,
        align: column.align
      }, column.format && typeof value === 'number' ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8___default.a, {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/DaftarBarang.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mazska/ReactKP/pages/DaftarBarang.jsx */"./pages/DaftarBarang.jsx");


/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TablePagination":
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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