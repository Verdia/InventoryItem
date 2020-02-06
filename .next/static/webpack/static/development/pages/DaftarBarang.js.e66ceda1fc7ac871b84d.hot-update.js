webpackHotUpdate("static/development/pages/DaftarBarang.js",{

/***/ "./pages/TableItem.jsx":
/*!*****************************!*\
  !*** ./pages/TableItem.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyHeadTable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var columns = [{
  id: 'name',
  label: 'Name Item',
  minWidth: 50
}, {
  id: 'code',
  label: "Code\xA0Item",
  minWidth: 50
}, {
  id: 'population',
  label: 'Location',
  minWidth: 170,
  align: 'right',
  format: function format(value) {
    return value.toLocaleString();
  }
}, {
  id: 'size',
  label: "Tanggal\xA0Peminjaman",
  minWidth: 170,
  align: 'right',
  format: function format(value) {
    return value.toLocaleString();
  }
}, {
  id: 'density',
  label: 'PIC',
  minWidth: 170,
  align: 'right',
  format: function format(value) {
    return value.toFixed(2);
  }
}];

function createData(name, code, population, size) {
  var density = population / size;
  return {
    name: name,
    code: code,
    population: population,
    size: size,
    density: density
  };
}

var rows = [createData('India', 'IN', 1324171354, 3287263), createData('China', 'CN', 1403500365, 9596961), createData('Italy', 'IT', 60483973, 301340), createData('United States', 'US', 327167434, 9833520), createData('Canada', 'CA', 37602103, 9984670), createData('Australia', 'AU', 25475400, 7692024), createData('Germany', 'DE', 83019200, 357578), createData('Ireland', 'IE', 4857000, 70273), createData('Mexico', 'MX', 126577691, 1972550), createData('Japan', 'JP', 126317000, 377973), createData('France', 'FR', 67022000, 640679), createData('United Kingdom', 'GB', 67545757, 242495), createData('Russia', 'RU', 146793744, 17098246), createData('Nigeria', 'NG', 200962417, 923768), createData('Brazil', 'BR', 210147125, 8515767)];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
});
function StickyHeadTable() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.container
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], null, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code
    }, columns.map(function (column) {
      var value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: column.id,
        align: column.align
      }, column.format && typeof value === 'number' ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}

/***/ })

})
//# sourceMappingURL=DaftarBarang.js.e66ceda1fc7ac871b84d.hot-update.js.map