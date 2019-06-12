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

/***/ "./components/EckCard.js":
/*!*******************************!*\
  !*** ./components/EckCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EckCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_lib_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/lib/analytics */ "./static/lib/analytics.js");







var _jsxFileName = "/Users/youssoufdasilva/Projects/Web-Projects/next-eck-weekly-theme/components/EckCard.js";







var html2json = __webpack_require__(/*! html2json */ "html2json").html2json;

var sanitizeHtml = __webpack_require__(/*! sanitize-html */ "sanitize-html");

var corsProxyUrl = "https://pacific-harbor-53496.herokuapp.com/"; // const corsProxyUrl = "https://crossorigin.me/";

var targetUrl = "https://www.eck-ghana.org/eck_ws.php";

var EckCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EckCard, _Component);

  function EckCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EckCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EckCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleQuote", function () {
      _this.setState({
        showQuote: !_this.state.showQuote
      });
    });

    _this.state = {
      showQuote: false,
      eckData: null
    };
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(corsProxyUrl + targetUrl).then(function (res) {
      return res.text();
    }).then(function (data) {
      console.log("started work - state is null");
      var tab1 = data.lastIndexOf("tab1");
      var tab2 = data.lastIndexOf("tab2");
      console.log("tab1 is: " + tab1 + " and tab2 is: " + tab2);
      var data2 = data.slice(tab1, tab2);
      var data3 = data2.slice(6, data2.length - 32);
      var cleandata = sanitizeHtml(data3);
      var json = html2json(cleandata); // console.log(json);
      // console.log("date:   ",json.child[0].child[1].child[0].text);
      // console.log("theme:  ",json.child[0].child[2].child[1].child[0].child[0].text);
      // console.log("book:   ",json.child[0].child[3].child[1].child[0].child[0].text);
      // console.log("author: ",json.child[0].child[4].child[1].child[0].text);
      // console.log("quote:  ",json.child[0].child[5].child[1].child[0].child[0].text);
      // console.log("     by:",json.child[0].child[5].child[1].child[2].child[0].text);
      //

      var finalData;

      if (tab1 == -1 && tab2 == -1) {
        finalData = {
          "date": "~",
          "theme": "(>人<) Sorry! Please reload the page.",
          "quote": " ¯\_(ツ)_/¯",
          "by": "The server was asleep."
        };
      } else {
        finalData = {
          "date": json.child[0].child[1].child[0].text,
          "theme": json.child[0].child[2].child[1].child[0].child[0].text,
          "quote": json.child[0].child[5].child[1].child[0].child[0].text,
          "by": json.child[0].child[5].child[1].child[2].child[0].text
        };
      }

      _this.setState({
        eckData: finalData
      });

      console.log("finished work - state is ready");
    }).catch(function (err) {
      return console.error(err);
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EckCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Object(_static_lib_analytics__WEBPACK_IMPORTED_MODULE_11__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_static_lib_analytics__WEBPACK_IMPORTED_MODULE_11__["logPageView"])();
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-299478186" + " " + "halfWhite title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "ECK Light and Sound Service"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-299478186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-299478186" + " " + "halfWhite subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Theme and Quote Of The Week"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-299478186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-299478186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + ((this.state.showQuote ? "whiteBG hide" : "whiteBG") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-299478186" + " " + "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, this.state.eckData ? this.state.eckData.date : "Loading..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "themeContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "themeRightShift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-299478186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "THEME"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "themeLeftShift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-299478186" + " " + "noMargin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.state.eckData ? this.state.eckData.theme : "Loading...")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleQuote,
        className: "jsx-299478186" + " " + "eckButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Show Quote")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + ((this.state.showQuote ? "quoteBG" : "quoteBG hide") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-299478186" + " " + "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.eckData ? this.state.eckData.date : "Loading..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "themeContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "themeRightShift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-299478186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "QUOTE"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "themeLeftShift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-299478186" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-299478186" + " " + "noMargin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, this.state.eckData ? this.state.eckData.quote : "Loading..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "jsx-299478186" + " " + "noMargin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, this.state.eckData ? this.state.eckData.by : "Loading...")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleQuote,
        className: "jsx-299478186" + " " + "eckButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Show Theme"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "299478186",
        __self: this
      }, ".title.jsx-299478186{font-weight:bold;font-size:2rem;color:#343434;}.subtitle.jsx-299478186{font-weight:bold;font-size:1.2rem;color:#343434;}.content.jsx-299478186{height:200px;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:inset 0 0 10px rgba(0,0,0,.1);margin:20px 0;padding:0 10px;border-radius:5px;overflow:scroll;}.eckButton.jsx-299478186{background:#2178FF;padding:10px 20px;font-family:'Alegreya',serif;color:white;font-weight:bold;font-size:1.3rem;border:none;border-radius:50px;margin-bottom:10px;box-shadow:0px 4px 4px rgba(0,0,0,.2);}.eckButton.jsx-299478186:hover{background:none;padding:6px 16px;border:solid 4px #2178FF;color:#2178FF;box-shadow:none;}.quoteBG.jsx-299478186{position:absolute;background:#FFFFFF;box-shadow:0px 50px 400px rgba(0,0,0,.2);width:calc( 100% - 40px);height:auto;text-align:center;border-radius:15px 15px 30px 30px;border-bottom:solid 15px #2178FF;padding:0 20px;}.noMargin.jsx-299478186{margin:0 !important;}.hide.jsx-299478186{display:none !important;}.halfWhite.jsx-299478186{background:rgba(255,255,255,.5);color:#343434;font-family:'Alegreya',serif;}.date.jsx-299478186{display:inline-block;margin-bottom:10px;}.themeContainer.jsx-299478186{display:grid;background:#2178FF;color:white;width:50%;height:3em;margin:0 auto;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;position:relative;}.themeRightShift.jsx-299478186{position:absolute;width:3em;height:3em;background:white;right:-1.5em;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.themeLeftShift.jsx-299478186{position:absolute;width:3em;height:3em;background:white;left:-1.5em;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.card.jsx-299478186{display:grid;position:relative;margin:0 auto;max-width:500px;font-family:'Alegreya',serif;}.whiteBG.jsx-299478186{position:absolute;background:#FFFFFF;box-shadow:0px 50px 400px rgba(0,0,0,.2);width:calc( 100% - 40px);height:auto;text-align:center;border-radius:15px 15px 30px 30px;border-bottom:solid 15px #2178FF;padding:0 20px;}@media (max-width:430px){.card.jsx-299478186{margin:0 20px;}.themeContainer.jsx-299478186{width:75%;}.halfWhite.jsx-299478186{margin:0;}.title.jsx-299478186{font-size:1.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3Vzc291ZmRhc2lsdmEvUHJvamVjdHMvV2ViLVByb2plY3RzL25leHQtZWNrLXdlZWtseS10aGVtZS9jb21wb25lbnRzL0Vja0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhvQixBQUc4QixBQUtBLEFBS0osQUFVTSxBQVlILEFBT0UsQUFVUyxBQUNDLEFBQ1ksQUFFbkIsQUFJUixBQVVLLEFBUUEsQUFRTCxBQU9LLEFBV0MsQUFDTSxBQUNOLEFBQ0csU0FERixDQURNLEdBM0ZiLEFBK0NNLEFBMEJELENBaUJFLEVBcEVILENBaENGLEFBS0UsQUFrR00sQ0FoRUosQUE0QlQsQUFRQSxBQWVTLENBdEVELENBNEJVLENBS1QsR0FKVSxFQXRDVixFQXlEUixBQVFBLEdBUUcsQ0FuRkEsQUFpRHlDLEFBUTNDLENBekJhLENBM0JYLEdBZWdCLEFBbUJXLEFBbURBLEVBdEJ4QixBQVFBLENBdkJuQixJQUtZLENBMEJNLENBbkZsQixBQWdEdUYsRUEzQ3ZGLE1BcURhLEVBVUUsQUFRRCxFQTVDRSxHQW9EZ0IsSUF6QmhCLENBdkNGLEVBeURZLENBUkEsR0FwQ1IsR0Flc0UsR0EzQnJFLEFBa0JRLEFBbURBLENBOUJKLFNBMUJ2QixFQW1EQSxLQS9EbUIsUUFrQkwsQUFtREEsU0FwRUEsR0FrQk0sQUFtREEsSUFsRnVCLEtBY3RCLFNBa0JlLEFBbURBLFVBcEVmLFNBcURyQixDQVJBLEVBVG9CLEtBbERKLEVBZXdCLEtBaUJMLEFBbURBLE1BaENuQyxDQWxEaUIsZUFDRyxXQWNwQixBQWlCaUIsQUFtREEsT0FqRkMsUUErQmxCLEFBbURBLFFBakZBIiwiZmlsZSI6Ii9Vc2Vycy95b3Vzc291ZmRhc2lsdmEvUHJvamVjdHMvV2ViLVByb2plY3RzL25leHQtZWNrLXdlZWtseS10aGVtZS9jb21wb25lbnRzL0Vja0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vc3RhdGljL2xpYi9hbmFseXRpY3MnO1xuXG52YXIgaHRtbDJqc29uID0gcmVxdWlyZSgnaHRtbDJqc29uJykuaHRtbDJqc29uO1xudmFyIHNhbml0aXplSHRtbCA9IHJlcXVpcmUoJ3Nhbml0aXplLWh0bWwnKTtcblxuY29uc3QgY29yc1Byb3h5VXJsID0gXCJodHRwczovL3BhY2lmaWMtaGFyYm9yLTUzNDk2Lmhlcm9rdWFwcC5jb20vXCI7XG4vLyBjb25zdCBjb3JzUHJveHlVcmwgPSBcImh0dHBzOi8vY3Jvc3NvcmlnaW4ubWUvXCI7XG5jb25zdCB0YXJnZXRVcmwgPSBcImh0dHBzOi8vd3d3LmVjay1naGFuYS5vcmcvZWNrX3dzLnBocFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFY2tDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBzaG93UXVvdGU6IGZhbHNlLFxuICAgICAgICBlY2tEYXRhOiBudWxsXG4gICAgfTtcblxuICAgIGZldGNoKGNvcnNQcm94eVVybCt0YXJnZXRVcmwpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGVkIHdvcmsgLSBzdGF0ZSBpcyBudWxsXCIpO1xuICAgICAgICBjb25zdCB0YWIxID0gZGF0YS5sYXN0SW5kZXhPZihcInRhYjFcIik7XG4gICAgICAgIGNvbnN0IHRhYjIgPSBkYXRhLmxhc3RJbmRleE9mKFwidGFiMlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWIxIGlzOiBcIiArIHRhYjEgKyBcIiBhbmQgdGFiMiBpczogXCIgKyB0YWIyKTtcbiAgICAgICAgY29uc3QgZGF0YTIgPSBkYXRhLnNsaWNlKHRhYjEsdGFiMik7XG4gICAgICAgIGNvbnN0IGRhdGEzID0gZGF0YTIuc2xpY2UoNiwgKGRhdGEyLmxlbmd0aC0zMikpO1xuICAgICAgICB2YXIgY2xlYW5kYXRhID0gc2FuaXRpemVIdG1sKGRhdGEzKTtcbiAgICAgICAgY29uc3QganNvbiA9IGh0bWwyanNvbihjbGVhbmRhdGEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRlOiAgIFwiLGpzb24uY2hpbGRbMF0uY2hpbGRbMV0uY2hpbGRbMF0udGV4dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlbWU6ICBcIixqc29uLmNoaWxkWzBdLmNoaWxkWzJdLmNoaWxkWzFdLmNoaWxkWzBdLmNoaWxkWzBdLnRleHQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvb2s6ICAgXCIsanNvbi5jaGlsZFswXS5jaGlsZFszXS5jaGlsZFsxXS5jaGlsZFswXS5jaGlsZFswXS50ZXh0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhdXRob3I6IFwiLGpzb24uY2hpbGRbMF0uY2hpbGRbNF0uY2hpbGRbMV0uY2hpbGRbMF0udGV4dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVvdGU6ICBcIixqc29uLmNoaWxkWzBdLmNoaWxkWzVdLmNoaWxkWzFdLmNoaWxkWzBdLmNoaWxkWzBdLnRleHQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAgICAgYnk6XCIsanNvbi5jaGlsZFswXS5jaGlsZFs1XS5jaGlsZFsxXS5jaGlsZFsyXS5jaGlsZFswXS50ZXh0KTtcbiAgICAgICAgLy9cbiAgICAgICAgdmFyIGZpbmFsRGF0YTtcblxuICAgICAgICBpZiAodGFiMSA9PSAtMSAmJiB0YWIyID09IC0xKSB7XG4gICAgICAgICAgZmluYWxEYXRhID0ge1xuICAgICAgICAgICAgXCJkYXRlXCIgIDogXCJ+XCIsXG4gICAgICAgICAgICBcInRoZW1lXCIgOiBcIig+5Lq6PCkgU29ycnkhIFBsZWFzZSByZWxvYWQgdGhlIHBhZ2UuXCIsXG4gICAgICAgICAgICBcInF1b3RlXCIgOiBcIiDCr1xcXyjjg4QpXy/Cr1wiLFxuICAgICAgICAgICAgXCJieVwiICAgIDogXCJUaGUgc2VydmVyIHdhcyBhc2xlZXAuXCJcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmluYWxEYXRhID0ge1xuICAgICAgICAgICAgXCJkYXRlXCIgIDoganNvbi5jaGlsZFswXS5jaGlsZFsxXS5jaGlsZFswXS50ZXh0LFxuICAgICAgICAgICAgXCJ0aGVtZVwiIDoganNvbi5jaGlsZFswXS5jaGlsZFsyXS5jaGlsZFsxXS5jaGlsZFswXS5jaGlsZFswXS50ZXh0LFxuICAgICAgICAgICAgXCJxdW90ZVwiIDoganNvbi5jaGlsZFswXS5jaGlsZFs1XS5jaGlsZFsxXS5jaGlsZFswXS5jaGlsZFswXS50ZXh0LFxuICAgICAgICAgICAgXCJieVwiICAgIDoganNvbi5jaGlsZFswXS5jaGlsZFs1XS5jaGlsZFsxXS5jaGlsZFsyXS5jaGlsZFswXS50ZXh0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vja0RhdGE6IGZpbmFsRGF0YX0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWQgd29yayAtIHN0YXRlIGlzIHJlYWR5XCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuXG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgaW5pdEdBKClcbiAgICAgIHdpbmRvdy5HQV9JTklUSUFMSVpFRCA9IHRydWVcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKVxuICB9XG5cbiAgdG9nZ2xlUXVvdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1F1b3RlOiAhdGhpcy5zdGF0ZS5zaG93UXVvdGV9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYWxmV2hpdGUgdGl0bGVcIj5FQ0sgTGlnaHQgYW5kIFNvdW5kIFNlcnZpY2U8L3NwYW4+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbGZXaGl0ZSBzdWJ0aXRsZVwiPlRoZW1lIGFuZCBRdW90ZSBPZiBUaGUgV2Vlazwvc3Bhbj5cbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93UXVvdGU/XCJ3aGl0ZUJHIGhpZGVcIjpcIndoaXRlQkdcIn0+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZVwiPnt0aGlzLnN0YXRlLmVja0RhdGEgPyB0aGlzLnN0YXRlLmVja0RhdGEuZGF0ZSA6IFwiTG9hZGluZy4uLlwifTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVSaWdodFNoaWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxoMj5USEVNRTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVMZWZ0U2hpZnRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJub01hcmdpblwiPnt0aGlzLnN0YXRlLmVja0RhdGEgPyB0aGlzLnN0YXRlLmVja0RhdGEudGhlbWUgOiBcIkxvYWRpbmcuLi5cIn08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUXVvdGV9IGNsYXNzTmFtZT1cImVja0J1dHRvblwiPlNob3cgUXVvdGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dRdW90ZT9cInF1b3RlQkdcIjpcInF1b3RlQkcgaGlkZVwifT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkYXRlXCI+e3RoaXMuc3RhdGUuZWNrRGF0YSA/IHRoaXMuc3RhdGUuZWNrRGF0YS5kYXRlIDogXCJMb2FkaW5nLi4uXCJ9PC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZVJpZ2h0U2hpZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGgyPlFVT1RFPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZUxlZnRTaGlmdFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm9NYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVja0RhdGEgPyB0aGlzLnN0YXRlLmVja0RhdGEucXVvdGUgOiBcIkxvYWRpbmcuLi5cIn1cbiAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJub01hcmdpblwiPlxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZWNrRGF0YSA/IHRoaXMuc3RhdGUuZWNrRGF0YS5ieSA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVF1b3RlfSBjbGFzc05hbWU9XCJlY2tCdXR0b25cIj5TaG93IFRoZW1lPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjEpO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWNrQnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxNzhGRjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWNrQnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggIzIxNzhGRjtcbiAgICAgICAgICAgIGNvbG9yOiAjMjE3OEZGO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlQkcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1MHB4IDQwMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAzMHB4IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxNXB4ICMyMTc4RkY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub01hcmdpbnttYXJnaW46IDAgIWltcG9ydGFudDt9XG4gICAgICAgICAgLmhpZGUge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9XG4gICAgICAgICAgLmhhbGZXaGl0ZXtiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTsgY29sb3I6ICMzNDM0MzQ7Zm9udC1mYW1pbHk6ICdBbGVncmV5YScsIHNlcmlmO31cbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGhlbWVDb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxNzhGRjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGhlbWVSaWdodFNoaWZ0e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDNlbTtcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICByaWdodDogLTEuNWVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGhlbWVMZWZ0U2hpZnR7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogM2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xLjVlbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndoaXRlQkcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1MHB4IDQwMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAzMHB4IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxNXB4ICMyMTc4RkY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgICAgICAgICAgLmNhcmR7bWFyZ2luOiAwIDIwcHg7fVxuICAgICAgICAgICAgLnRoZW1lQ29udGFpbmVye3dpZHRoOiA3NSU7fVxuICAgICAgICAgICAgLmhhbGZXaGl0ZXttYXJnaW46IDA7fVxuICAgICAgICAgICAgLnRpdGxle2ZvbnQtc2l6ZTogMS41cmVtfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/youssoufdasilva/Projects/Web-Projects/next-eck-weekly-theme/components/EckCard.js */"));
    }
  }]);

  return EckCard;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EckCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EckCard */ "./components/EckCard.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/youssoufdasilva/Projects/Web-Projects/next-eck-weekly-theme/pages/index.js";




var targetUrl = "https://www.eck-ghana.org/eck_ws.php";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1080046635" + " " + "eck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1080046635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "ECK LSS Theme")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1080046635" + " " + "cardArea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_EckCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1080046635" + " " + "love",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1080046635" + " " + "chelaMargin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Made with \u2764\uFE0F by a chela | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: targetUrl,
    target: "_blanc",
    className: "jsx-1080046635" + " " + "source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Source"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3085450703",
    __self: this
  }, ".source.jsx-1080046635{-webkit-text-decoration:none;text-decoration:none;color:#343434;cursor:pointer;}.chelaMargin.jsx-1080046635{margin:0 !important;padding-bottom:10px;}.eck.jsx-1080046635{display:grid;grid-template-rows:50vh 50vh;grid-template-areas: \"cardArea\" \"love\";}.cardArea.jsx-1080046635{grid-area:cardArea;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.love.jsx-1080046635{grid-area:love;justify-self:center;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;background:white;color:#343434;font-family:'Alegreya',serif;}@media (max-width:430px){.cardArea.jsx-1080046635{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3Vzc291ZmRhc2lsdmEvUHJvamVjdHMvV2ViLVByb2plY3RzL25leHQtZWNrLXdlZWtseS10aGVtZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBRW1DLEFBRU4sQUFJUCxBQU9NLEFBS0osQUFTSSxhQXBCVSxFQVlULElBTEYsQ0FYRSxlQWlCTCxLQWhCakIsRUFNVSxRQVZpQyxjQUFlLElBNEJ4RCxXQTVCeUQsRUFXM0QsU0FJb0IsT0FNRCxXQUxuQixNQU1nQixjQUNnQiw2QkFDaEMiLCJmaWxlIjoiL1VzZXJzL3lvdXNzb3VmZGFzaWx2YS9Qcm9qZWN0cy9XZWItUHJvamVjdHMvbmV4dC1lY2std2Vla2x5LXRoZW1lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVja0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9FY2tDYXJkJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IHRhcmdldFVybCA9IFwiaHR0cHM6Ly93d3cuZWNrLWdoYW5hLm9yZy9lY2tfd3MucGhwXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJlY2tcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5FQ0sgTFNTIFRoZW1lPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkQXJlYVwiPlxuICAgICAgPEVja0NhcmQvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG92ZVwiPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cImNoZWxhTWFyZ2luXCI+XG4gICAgICAgIE1hZGUgd2l0aCDinaTvuI8gYnkgYSBjaGVsYSB8IDxhIGNsYXNzTmFtZT1cInNvdXJjZVwiIGhyZWY9e3RhcmdldFVybH0gdGFyZ2V0PVwiX2JsYW5jXCI+U291cmNlPC9hPlxuICAgICAgPC9oND5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zb3VyY2V7dGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzM0MzQzNDtjdXJzb3I6IHBvaW50ZXI7fVxuICAgICAgLmNoZWxhTWFyZ2lue1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAuZWNre1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwdmggNTB2aDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICBcImNhcmRBcmVhXCJcbiAgICAgICAgICBcImxvdmVcIjtcbiAgICAgIH1cbiAgICAgIC5jYXJkQXJlYXtcbiAgICAgICAgZ3JpZC1hcmVhOiBjYXJkQXJlYTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubG92ZSB7XG4gICAgICAgIGdyaWQtYXJlYTogbG92ZTtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgICAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhJywgc2VyaWY7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgICAgICAgLmNhcmRBcmVhe1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJhY2tncm91bmQ6dXJsKCcuLi9zdGF0aWMvaW1hZ2VzL2Vja2JhY2tncm91bmQucG5nJyk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/youssoufdasilva/Projects/Web-Projects/next-eck-weekly-theme/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4175767725",
    __self: this
  }, "body{margin:0;background:url('../static/images/eckbackground.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3Vzc291ZmRhc2lsdmEvUHJvamVjdHMvV2ViLVByb2plY3RzL25leHQtZWNrLXdlZWtseS10aGVtZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHVCLEFBR2tCLFNBQzJDLHFEQUN0RCIsImZpbGUiOiIvVXNlcnMveW91c3NvdWZkYXNpbHZhL1Byb2plY3RzL1dlYi1Qcm9qZWN0cy9uZXh0LWVjay13ZWVrbHktdGhlbWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWNrQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Vja0NhcmQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgdGFyZ2V0VXJsID0gXCJodHRwczovL3d3dy5lY2stZ2hhbmEub3JnL2Vja193cy5waHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImVja1wiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkVDSyBMU1MgVGhlbWU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRBcmVhXCI+XG4gICAgICA8RWNrQ2FyZC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb3ZlXCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiY2hlbGFNYXJnaW5cIj5cbiAgICAgICAgTWFkZSB3aXRoIOKdpO+4jyBieSBhIGNoZWxhIHwgPGEgY2xhc3NOYW1lPVwic291cmNlXCIgaHJlZj17dGFyZ2V0VXJsfSB0YXJnZXQ9XCJfYmxhbmNcIj5Tb3VyY2U8L2E+XG4gICAgICA8L2g0PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNvdXJjZXt0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjMzQzNDM0O2N1cnNvcjogcG9pbnRlcjt9XG4gICAgICAuY2hlbGFNYXJnaW57XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIC5lY2t7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTB2aCA1MHZoO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgIFwiY2FyZEFyZWFcIlxuICAgICAgICAgIFwibG92ZVwiO1xuICAgICAgfVxuICAgICAgLmNhcmRBcmVhe1xuICAgICAgICBncmlkLWFyZWE6IGNhcmRBcmVhO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5sb3ZlIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBsb3ZlO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEnLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgICAgICAuY2FyZEFyZWF7XG4gICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZDp1cmwoJy4uL3N0YXRpYy9pbWFnZXMvZWNrYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/youssoufdasilva/Projects/Web-Projects/next-eck-weekly-theme/pages/index.js */"));
});

/***/ }),

/***/ "./static/lib/analytics.js":
/*!*********************************!*\
  !*** ./static/lib/analytics.js ***!
  \*********************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

var initGA = function initGA() {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-141905622-1");
};
var logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description: description,
      fatal: fatal
    });
  }
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youssoufdasilva/Projects/Web-Projects/next-eck-weekly-theme/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "html2json":
/*!****************************!*\
  !*** external "html2json" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html2json");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "sanitize-html":
/*!********************************!*\
  !*** external "sanitize-html" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map