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
        className: "jsx-848995177"
      }, __jsx("div", {
        style: {
          display: "grid",
          background: "white"
        },
        className: "jsx-848995177" + " " + "divLogo"
      }, __jsx("img", {
        src: "static/src/Logo_petro.png",
        id: "logo_petro",
        className: "jsx-848995177"
      }), __jsx("text", {
        className: "jsx-848995177" + " " + "petro"
      }, "PT.PETROKIMIA GRESIK"), __jsx("text", {
        className: "jsx-848995177" + " " + "welcome"
      }, " SIGN UP "), __jsx("text", {
        className: "jsx-848995177" + " " + "sistem"
      }, " Sistem Monitoring Project"), __jsx("text", {
        className: "jsx-848995177" + " " + "dept"
      }, "DEPT. TEKNOLOGI DAN INFORMASI ")), __jsx("form", {
        method: "post",
        id: "formRegist",
        className: "jsx-848995177"
      }, __jsx("text", {
        className: "jsx-848995177" + " " + "name_txt"
      }, "Username"), __jsx("input", {
        type: "string",
        name: "name",
        id: "ed_name",
        className: "jsx-848995177"
      }), __jsx("text", {
        className: "jsx-848995177" + " " + "email_txt"
      }, "Email"), __jsx("input", {
        type: "email",
        name: "email",
        id: "ed_email",
        className: "jsx-848995177"
      }), __jsx("text", {
        className: "jsx-848995177" + " " + "password_txt"
      }, "Password"), __jsx("input", {
        type: "password",
        name: "password",
        id: "ed_password",
        className: "jsx-848995177"
      }), __jsx("text", {
        className: "jsx-848995177" + " " + "gender_txt"
      }, "Gender"), __jsx("select", {
        id: "genders",
        className: "jsx-848995177" + " " + "gender"
      }, __jsx("option", {
        value: "Male",
        className: "jsx-848995177"
      }, "Male"), __jsx("option", {
        value: "Female",
        className: "jsx-848995177"
      }, "Female")), __jsx("text", {
        className: "jsx-848995177" + " " + "date_txt"
      }, "Date of Birth"), __jsx("input", {
        type: "date",
        name: "bornDate",
        id: "ed_bornDate",
        placeholder: "Birth Date",
        className: "jsx-848995177"
      }), __jsx("button", {
        className: "jsx-848995177" + " " + "regist"
      }, "Register"), __jsx("form", {
        action: "http://localhost:3000/Login",
        className: "jsx-848995177"
      }, __jsx("input", {
        type: "submit",
        value: "Back to Login",
        className: "jsx-848995177" + " " + "loginBack"
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "848995177"
      }, ".petro{margin:0 auto;font-size:20px;margin-top:0%;font-family:'Open Sans',sans-serif;}.dept{font-size:20px;margin:0 auto;margin-bottom:10%;}.welcome{font-size:40px;margin:0 auto;margin-top:10%;}.sistem{font-size:20px;margin:0 auto;margin-top:10%;}body{background:#3EC400;font-family:'Open Sans',sans-serif;margin:0;}div{margin:0 auto;display:block;}main{display:grid;grid-template-columns:1fr 1fr;font-family:'Open Sans',sans-serif;}.ahref{font-size:13px;-webkit-text-decoration:none;text-decoration:none;}.divLogo{width:100%;margin:0 auto;height:646px;}.regist{width:37%;margin:0 auto;margin-top:4%;display:grid;font-size:30px;padding:5px 5px;}.loginBack{width:40%;margin:0 auto;margin-top:3%;display:grid;font-size:100%;padding:2px 2px;border-radius:10px;}#logo_petro{background:#FFFFFF;width:50%;margin:0 auto;margin-top:15%;}.email_txt{margin-top:2%;font-size:20px;display:block;color:white;margin-left:24%;}.gender_txt{margin-top:2%;font-size:20px;display:block;color:white;margin-left:24%;}.date_txt{margin-top:2%;font-size:20px;display:block;color:white;margin-left:24%;}.gender{width:53%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}#ed_bornDate{width:50%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}.name_txt{margin-top:7%;font-size:20px;display:block;color:white;margin-left:24%;}#ed_name{width:50%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}#ed_email{width:50%;margin:0 auto;margin-top:0.5%;display:block;border-radius:5px;font-size:20px;border:none;padding:10px 10px;background:orange;color:black;}.password_txt{margin-top:2%;font-size:20px;display:block;margin-left:24%;color:white;}#ed_password{width:50%;margin:0 auto;margin-top:1%;display:block;background:orange;border-radius:5px;font-size:20px;border:none;padding:10px 10px;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21henNrYS9SZWFjdEtQL3BhZ2VzL1JlZ2lzdHJhdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZtQixBQUl1QixBQU9DLEFBTUEsQUFNQSxBQU1JLEFBTUwsQUFLRCxBQU1FLEFBS0osQUFNRCxBQVNBLEFBVVMsQUFPTCxBQVFBLEFBUUEsQUFRSixBQWFBLEFBYUksQUFRSixBQWFBLEFBYUksQUFPSixVQXBISSxBQVNBLEFBeUNBLEFBYUEsQUFxQkEsQUFhQSxBQW9CQSxDQTNIQSxFQVhnQixDQXBDZixBQStCRCxBQWdEQyxBQVFBLEFBUUEsQUFrQ0EsQUFrQ0EsQ0E1SkQsQUFNQSxBQU1BLEFBdUJPLElBakJlLEFBK0MxQixLQWxCSSxBQVNBLEFBeUNFLEFBYUEsQUFxQkEsQUFhQSxBQW9CRixDQTNIRCxHQWhCakIsQ0EvQmtCLEFBT0ksQUFNSCxBQU1BLEFBcURELEFBT0EsQUFRQSxBQVFBLEFBa0NBLEFBa0NBLFNBbkhsQixBQU1pQixBQVNBLEFBNEdDLEVBbkVBLEFBYUEsQUFxQkEsQUFhQSxHQXRKc0IsQUFtQ0EsQUFxQ3JCLEFBT0gsQUFRQSxBQVFBLEFBa0NBLEFBa0NJLENBdEpwQixBQU1BLEdBWkEsSUErQ21CLEFBU0EsQ0E0R0csRUFuSlQsQUFnRlMsQUFhQSxBQXFCQSxBQWFBLENBdkVGLEFBUUEsQUFRQSxBQWtDQSxHQXpEcEIsQ0EyRmdCLElBM0loQixFQWdCQSxDQWNvQixBQVNBLElBNEdFLENBM0Z0QixBQVFBLEFBUUEsQUFrQ0EsQUFrQ0EsQ0E1RG1CLEFBYUEsQUFxQkEsQUFhQSxNQXZKbkIsQUFtQ0EsSUFvQkEsQUFTdUIsS0F5Q1AsQUFhQSxBQXFCQSxBQWFBLENBb0JHLFdBbEVHLEFBYUEsQUFxQkEsQUFhQSxFQXhGdEIsRUE0R2dCLFlBQ00sRUFuRUEsQUFhQSxBQXFCQSxBQWFBLGdCQXFCTixFQW5FQSxBQWFBLEFBcUJBLEFBYUEsVUFxQmhCLEVBbkVBLEFBYUEsQUFxQkEsQUFhQSIsImZpbGUiOiIvaG9tZS9tYXpza2EvUmVhY3RLUC9wYWdlcy9SZWdpc3RyYXRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNsYXNzIFJlZ2lzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1SZWdpc3QnKVxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkX2VtYWlsXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkX3Bhc3N3b3JkXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRfbmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkX2Jvcm5EYXRlXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZ2VuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5kZXJzXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbWFpbCA6IFwiLCBlbWFpbClcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgOiBcIiwgcGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdHJhdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBuYW1lPSR7bmFtZX0mZW1haWw9JHtlbWFpbH0mcGFzc3dvcmQ9JHtwYXNzd29yZH0mYm9ybkRhdGU9JHtkYXRlfSZnZW5kZXI9JHtnZW5kZXJ9YFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vayl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgUmVnaXN0ZXJlZFwiKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIFdyb25nXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG48bWFpbiA+XG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZ3JpZFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCJ9fSBjbGFzc05hbWU9XCJkaXZMb2dvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3NyYy9Mb2dvX3BldHJvLnBuZ1wiIGlkPVwibG9nb19wZXRyb1wiLz5cblxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9XCJwZXRyb1wiPlBULlBFVFJPS0lNSUEgR1JFU0lLPC90ZXh0PlxuXG4gICAgICAgIDx0ZXh0IGNsYXNzTmFtZT1cIndlbGNvbWVcIj4gU0lHTiBVUCA8L3RleHQ+XG5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPVwic2lzdGVtXCI+IFNpc3RlbSBNb25pdG9yaW5nIFByb2plY3Q8L3RleHQ+XG5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPVwiZGVwdFwiPkRFUFQuIFRFS05PTE9HSSBEQU4gSU5GT1JNQVNJIDwvdGV4dD5cbiAgICA8L2Rpdj5cblxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBpZD1cImZvcm1SZWdpc3RcIj5cblxuICAgIDx0ZXh0IGNsYXNzTmFtZT1cIm5hbWVfdHh0XCI+VXNlcm5hbWU8L3RleHQ+XG4gICAgXG4gICAgPGlucHV0XG4gICAgICB0eXBlID0gXCJzdHJpbmdcIlxuICAgICAgbmFtZSA9IFwibmFtZVwiXG4gICAgICBpZCA9IFwiZWRfbmFtZVwiLz5cblxuICAgIDx0ZXh0IGNsYXNzTmFtZT1cImVtYWlsX3R4dFwiPkVtYWlsPC90ZXh0PlxuICAgIFxuICAgIDxpbnB1dFxuICAgICAgdHlwZSA9IFwiZW1haWxcIlxuICAgICAgbmFtZSA9IFwiZW1haWxcIlxuICAgICAgaWQgPSBcImVkX2VtYWlsXCIvPlxuXG4gICAgPHRleHQgY2xhc3NOYW1lPVwicGFzc3dvcmRfdHh0XCI+UGFzc3dvcmQ8L3RleHQ+XG4gICAgPGlucHV0XG4gICAgICB0eXBlID0gXCJwYXNzd29yZFwiXG4gICAgICBuYW1lID0gXCJwYXNzd29yZFwiXG4gICAgICBpZCA9IFwiZWRfcGFzc3dvcmRcIi8+XG5cbiAgICA8dGV4dCBjbGFzc05hbWU9XCJnZW5kZXJfdHh0XCI+R2VuZGVyPC90ZXh0PlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZ2VuZGVyXCIgaWQ9XCJnZW5kZXJzXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWxlXCI+TWFsZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG5cbiAgICA8dGV4dCBjbGFzc05hbWU9XCJkYXRlX3R4dFwiPkRhdGUgb2YgQmlydGg8L3RleHQ+XG4gICAgPGlucHV0XG4gICAgICB0eXBlID0gXCJkYXRlXCJcbiAgICAgIG5hbWUgPSBcImJvcm5EYXRlXCJcbiAgICAgIGlkID0gXCJlZF9ib3JuRGF0ZVwiXG4gICAgICBwbGFjZWhvbGRlciA9IFwiQmlydGggRGF0ZVwiLz5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWdpc3RcIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgPGZvcm0gYWN0aW9uPSdodHRwOi8vbG9jYWxob3N0OjMwMDAvTG9naW4nPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWUgPSBcIkJhY2sgdG8gTG9naW5cIiBjbGFzc05hbWU9XCJsb2dpbkJhY2tcIi8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9mb3JtPlxuPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgIC5wZXRyb3tcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuZGVwdHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIH1cblxuICAgIC53ZWxjb21le1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgLnNpc3RlbXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cblxuICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM0VDNDAwO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgbWFpbntcbiAgICAgICAgZGlzcGxheTogZ3JpZDsgIFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuYWhyZWZ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5kaXZMb2dve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGhlaWdodDogNjQ2cHg7XG4gICAgfVxuXG4gICAgLnJlZ2lzdHtcbiAgICAgICAgd2lkdGg6IDM3JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgfVxuXG4gICAgLmxvZ2luQmFja3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDJweCAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgI2xvZ29fcGV0cm97XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgfVxuXG4gICAgLmVtYWlsX3R4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0JTtcbiAgICB9XG5cbiAgICAuZ2VuZGVyX3R4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0JTtcbiAgICB9XG5cbiAgICAuZGF0ZV90eHR7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNCU7XG4gICAgfVxuXG4gICAgLmdlbmRlcntcbiAgICAgICAgd2lkdGg6IDUzJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgICNlZF9ib3JuRGF0ZXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC5uYW1lX3R4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogNyU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0JTtcbiAgICB9XG5cbiAgICAjZWRfbmFtZXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgICNlZF9lbWFpbHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC5wYXNzd29yZF90eHR7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgICNlZF9wYXNzd29yZHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5gfTwvc3R5bGU+XG48L21haW4+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0OyJdfQ== */\n/*@ sourceURL=/home/mazska/ReactKP/pages/Registration.jsx */"));
    }
  }]);

  return Regist;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Regist);

/***/ })

})
//# sourceMappingURL=Registration.js.24087837dd06a657e2b4.hot-update.js.map