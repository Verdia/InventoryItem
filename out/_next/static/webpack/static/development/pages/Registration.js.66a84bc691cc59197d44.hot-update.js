webpackHotUpdate("static/development/pages/Registration.js",{

/***/ "./pages/Registration.jsx":
/*!********************************!*\
  !*** ./pages/Registration.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var Regist =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Regist, _React$Component);

  function Regist() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Regist);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Regist).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Regist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var form = document.getElementById('formRegist');
      form.addEventListener('submit', function (event) {
        var email = document.getElementById("ed_email").value,
            password = document.getElementById("ed_password").value,
            name = document.getElementById("ed_name").value,
            date = document.getElementById("ed_bornDate").value,
            gender = document.getElementById("genders").value;
        console.log("email : ", email);
        console.log("password : ", password);
        event.preventDefault();
        fetch("http://localhost:3000/registration", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: "name=".concat(name, "&email=").concat(email, "&password=").concat(password, "&bornDate=").concat(date, "&gender=").concat(gender)
        }).then(function (response) {
          console.log(response);

          if (response.ok) {
            console.log("User Registered");
          } else {
            console.log("Something Wrong");
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("main", {
        className: "jsx-1313065398"
      }, __jsx("div", {
        style: {
          display: "grid",
          background: "white"
        },
        className: "jsx-1313065398" + " " + "divLogo"
      }, __jsx("img", {
        src: "static/src/Logo_petro.png",
        id: "logo_petro",
        className: "jsx-1313065398"
      }), __jsx("text", {
        className: "jsx-1313065398" + " " + "petro"
      }, "PT.PETROKIMIA GRESIK"), __jsx("text", {
        className: "jsx-1313065398" + " " + "welcome"
      }, " SIGN UP "), __jsx("text", {
        className: "jsx-1313065398" + " " + "sistem"
      }, " Sistem Monitoring Project"), __jsx("text", {
        className: "jsx-1313065398" + " " + "dept"
      }, "DEPT. TEKNOLOGI DAN INFORMASI ")), __jsx("form", {
        method: "post",
        id: "formRegist",
        className: "jsx-1313065398"
      }, __jsx("text", {
        className: "jsx-1313065398" + " " + "name_txt"
      }, "Username"), __jsx("input", {
        type: "string",
        name: "name",
        id: "ed_name",
        className: "jsx-1313065398"
      }), __jsx("text", {
        className: "jsx-1313065398" + " " + "email_txt"
      }, "Email"), __jsx("input", {
        type: "email",
        name: "email",
        id: "ed_email",
        className: "jsx-1313065398"
      }), __jsx("text", {
        className: "jsx-1313065398" + " " + "password_txt"
      }, "Password"), __jsx("input", {
        type: "password",
        name: "password",
        id: "ed_password",
        className: "jsx-1313065398"
      }), __jsx("text", {
        className: "jsx-1313065398" + " " + "gender_txt"
      }, "Gender"), __jsx("select", {
        id: "genders",
        className: "jsx-1313065398" + " " + "gender"
      }, __jsx("option", {
        value: "Male",
        className: "jsx-1313065398"
      }, "Male"), __jsx("option", {
        value: "Female",
        className: "jsx-1313065398"
      }, "Female")), __jsx("text", {
        className: "jsx-1313065398" + " " + "date_txt"
      }, "Date of Birth"), __jsx("input", {
        type: "date",
        name: "bornDate",
        id: "ed_bornDate",
        placeholder: "Birth Date",
        className: "jsx-1313065398"
      }), __jsx("button", {
        className: "jsx-1313065398" + " " + "regist"
      }, "Register"), __jsx("form", {
        action: "http://localhost:3000/Login",
        className: "jsx-1313065398"
      }, __jsx("input", {
        type: "submit",
        value: "Back to Login",
        className: "jsx-1313065398" + " " + "loginBack"
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1313065398"
      }, ".petro{margin:0 auto;font-size:20px;margin-top:0%;font-family:'Open Sans',sans-serif;}.dept{font-size:20px;margin:0 auto;margin-bottom:10%;}.welcome{font-size:40px;margin:0 auto;margin-top:10%;}.sistem{font-size:20px;margin:0 auto;margin-top:10%;}body{background:#3EC400;font-family:'Open Sans',sans-serif;margin:0;}div{margin:0 auto;display:block;}main{display:grid;grid-template-columns:1fr 1fr;font-family:'Open Sans',sans-serif;}.ahref{font-size:13px;-webkit-text-decoration:none;text-decoration:none;}.divLogo{width:100%;margin:0 auto;height:646px;}.regist{width:37%;margin:0 auto;margin-top:4%;display:grid;font-size:30px;padding:5px 5px;border-radius:10px;}.loginBack{width:40%;margin:0 auto;margin-top:3%;display:grid;font-size:100%;padding:2px 2px;border-radius:10px;}#logo_petro{background:#FFFFFF;width:50%;margin:0 auto;margin-top:15%;}.email_txt{margin-top:2%;font-size:20px;display:block;color:white;margin-left:24%;}.gender_txt{margin-top:2%;font-size:20px;display:block;color:white;margin-left:24%;}.date_txt{margin-top:2%;font-size:20px;display:block;color:white;margin-left:24%;}.gender{width:53%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}#ed_bornDate{width:50%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}.name_txt{margin-top:7%;font-size:20px;display:block;color:white;margin-left:24%;}#ed_name{width:50%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}#ed_email{width:50%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}.password_txt{margin-top:2%;font-size:20px;display:block;margin-left:24%;color:white;}#ed_password{width:50%;margin:0 auto;margin-top:1%;display:block;background:orange;border-radius:5px;font-size:20px;border:none;padding:10px 10px;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL1JlZ2lzdHJhdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZtQixBQUl1QixBQU9DLEFBTUEsQUFNQSxBQU1JLEFBTUwsQUFLRCxBQU1FLEFBS0osQUFNRCxBQVVBLEFBVVMsQUFPTCxBQVFBLEFBUUEsQUFRSixBQWFBLEFBYUksQUFRSixBQWFBLEFBYUksQUFPSixVQXJISSxBQVVBLEFBeUNBLEFBYUEsQUFxQkEsQUFhQSxBQW9CQSxDQTVIQSxFQVhnQixDQXBDZixBQStCRCxBQWlEQyxBQVFBLEFBUUEsQUFrQ0EsQUFrQ0EsQ0E3SkQsQUFNQSxBQU1BLEFBdUJPLElBakJlLEFBZ0QxQixLQW5CSSxBQVVBLEFBeUNFLEFBYUEsQUFxQkEsQUFhQSxBQW9CRixDQTVIRCxHQWhCakIsQ0EvQmtCLEFBT0ksQUFNSCxBQU1BLEFBc0RELEFBT0EsQUFRQSxBQVFBLEFBa0NBLEFBa0NBLFNBcEhsQixBQU1pQixBQVVBLEFBNEdDLEVBbkVBLEFBYUEsQUFxQkEsQUFhQSxHQXZKc0IsQUFtQ0EsQUFzQ3JCLEFBT0gsQUFRQSxBQVFBLEFBa0NBLEFBa0NJLENBdkpwQixBQU1BLEdBWkEsSUErQ21CLEFBVUEsQ0E0R0csRUFwSlQsQUFpRlMsQUFhQSxBQXFCQSxBQWFBLENBdkVGLEFBUUEsQUFRQSxBQWtDQSxHQXpEcEIsQ0EyRmdCLElBNUloQixFQWdCQSxDQWNvQixBQVVBLElBNEdFLENBM0Z0QixBQVFBLEFBUUEsQUFrQ0EsQUFrQ0EsQ0E1RG1CLEFBYUEsQUFxQkEsQUFhQSxNQXhKbkIsQUFtQ0EsSUFvQnVCLEFBVUEsS0F5Q1AsQUFhQSxBQXFCQSxBQWFBLENBb0JHLFdBbEVHLEFBYUEsQUFxQkEsQUFhQSxFQWxHdEIsQUFVQSxFQTRHZ0IsWUFDTSxFQW5FQSxBQWFBLEFBcUJBLEFBYUEsZ0JBcUJOLEVBbkVBLEFBYUEsQUFxQkEsQUFhQSxVQXFCaEIsRUFuRUEsQUFhQSxBQXFCQSxBQWFBIiwiZmlsZSI6Ii9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL1JlZ2lzdHJhdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY2xhc3MgUmVnaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVJlZ2lzdCcpXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRfZW1haWxcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRfcGFzc3dvcmRcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZF9uYW1lXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRfYm9ybkRhdGVcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBnZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmRlcnNcIikudmFsdWVcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsIDogXCIsIGVtYWlsKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiLCBwYXNzd29yZClcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0cmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYG5hbWU9JHtuYW1lfSZlbWFpbD0ke2VtYWlsfSZwYXNzd29yZD0ke3Bhc3N3b3JkfSZib3JuRGF0ZT0ke2RhdGV9JmdlbmRlcj0ke2dlbmRlcn1gXG4gICAgICAgICAgICAgICAgfSkudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBSZWdpc3RlcmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgV3JvbmdcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbjxtYWluID5cbiAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJncmlkXCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIn19IGNsYXNzTmFtZT1cImRpdkxvZ29cIj5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvc3JjL0xvZ29fcGV0cm8ucG5nXCIgaWQ9XCJsb2dvX3BldHJvXCIvPlxuXG4gICAgICAgIDx0ZXh0IGNsYXNzTmFtZT1cInBldHJvXCI+UFQuUEVUUk9LSU1JQSBHUkVTSUs8L3RleHQ+XG5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPVwid2VsY29tZVwiPiBTSUdOIFVQIDwvdGV4dD5cblxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9XCJzaXN0ZW1cIj4gU2lzdGVtIE1vbml0b3JpbmcgUHJvamVjdDwvdGV4dD5cblxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9XCJkZXB0XCI+REVQVC4gVEVLTk9MT0dJIERBTiBJTkZPUk1BU0kgPC90ZXh0PlxuICAgIDwvZGl2PlxuXG4gICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGlkPVwiZm9ybVJlZ2lzdFwiPlxuXG4gICAgPHRleHQgY2xhc3NOYW1lPVwibmFtZV90eHRcIj5Vc2VybmFtZTwvdGV4dD5cbiAgICBcbiAgICA8aW5wdXRcbiAgICAgIHR5cGUgPSBcInN0cmluZ1wiXG4gICAgICBuYW1lID0gXCJuYW1lXCJcbiAgICAgIGlkID0gXCJlZF9uYW1lXCIvPlxuXG4gICAgPHRleHQgY2xhc3NOYW1lPVwiZW1haWxfdHh0XCI+RW1haWw8L3RleHQ+XG4gICAgXG4gICAgPGlucHV0XG4gICAgICB0eXBlID0gXCJlbWFpbFwiXG4gICAgICBuYW1lID0gXCJlbWFpbFwiXG4gICAgICBpZCA9IFwiZWRfZW1haWxcIi8+XG5cbiAgICA8dGV4dCBjbGFzc05hbWU9XCJwYXNzd29yZF90eHRcIj5QYXNzd29yZDwvdGV4dD5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcbiAgICAgIG5hbWUgPSBcInBhc3N3b3JkXCJcbiAgICAgIGlkID0gXCJlZF9wYXNzd29yZFwiLz5cblxuICAgIDx0ZXh0IGNsYXNzTmFtZT1cImdlbmRlcl90eHRcIj5HZW5kZXI8L3RleHQ+XG4gICAgPHNlbGVjdCBjbGFzc05hbWU9XCJnZW5kZXJcIiBpZD1cImdlbmRlcnNcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hbGVcIj5NYWxlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZW1hbGVcIj5GZW1hbGU8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cblxuICAgIDx0ZXh0IGNsYXNzTmFtZT1cImRhdGVfdHh0XCI+RGF0ZSBvZiBCaXJ0aDwvdGV4dD5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGUgPSBcImRhdGVcIlxuICAgICAgbmFtZSA9IFwiYm9ybkRhdGVcIlxuICAgICAgaWQgPSBcImVkX2Jvcm5EYXRlXCJcbiAgICAgIHBsYWNlaG9sZGVyID0gXCJCaXJ0aCBEYXRlXCIvPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlZ2lzdFwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICA8Zm9ybSBhY3Rpb249J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9Mb2dpbic+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZSA9IFwiQmFjayB0byBMb2dpblwiIGNsYXNzTmFtZT1cImxvZ2luQmFja1wiLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Zvcm0+XG48c3R5bGUganN4IGdsb2JhbD57YFxuXG4gICAgLnBldHJve1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5kZXB0e1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgfVxuXG4gICAgLndlbGNvbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG5cbiAgICAuc2lzdGVte1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzRUM0MDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBtYWlue1xuICAgICAgICBkaXNwbGF5OiBncmlkOyAgXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5haHJlZntcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgLmRpdkxvZ297XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgaGVpZ2h0OiA2NDZweDtcbiAgICB9XG5cbiAgICAucmVnaXN0e1xuICAgICAgICB3aWR0aDogMzclO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAubG9naW5CYWNre1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMnB4IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAjbG9nb19wZXRyb3tcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB9XG5cbiAgICAuZW1haWxfdHh0e1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xuICAgIH1cblxuICAgIC5nZW5kZXJfdHh0e1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xuICAgIH1cblxuICAgIC5kYXRlX3R4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0JTtcbiAgICB9XG5cbiAgICAuZ2VuZGVye1xuICAgICAgICB3aWR0aDogNTMlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMC41JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgI2VkX2Jvcm5EYXRle1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMC41JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLm5hbWVfdHh0e1xuICAgICAgICBtYXJnaW4tdG9wOiA3JTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xuICAgIH1cblxuICAgICNlZF9uYW1le1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMC41JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgI2VkX2VtYWlse1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMC41JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnBhc3N3b3JkX3R4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgI2VkX3Bhc3N3b3Jke1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbmB9PC9zdHlsZT5cbjwvbWFpbj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3Q7Il19 */\n/*@ sourceURL=/home/mazska/ReactKP/pages/Registration.jsx */"));
    }
  }]);

  return Regist;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Regist);

/***/ })

})
//# sourceMappingURL=Registration.js.66a84bc691cc59197d44.hot-update.js.map