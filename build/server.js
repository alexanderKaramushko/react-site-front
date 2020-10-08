/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst header_container_1 = __importDefault(__webpack_require__(/*! ./components/organisms/Header/header.container */ \"./src/client/components/organisms/Header/header.container.ts\"));\r\nconst store_1 = __importDefault(__webpack_require__(/*! ./store/store */ \"./src/client/store/store.ts\"));\r\nconst routes_1 = __webpack_require__(/*! ./routes/routes */ \"./src/client/routes/routes.tsx\");\r\nconst App = () => (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },\r\n    react_1.default.createElement(react_router_dom_1.StaticRouter, null,\r\n        react_1.default.createElement(header_container_1.default, null),\r\n        react_1.default.createElement(react_router_dom_1.Switch, null, routes_1.createRoutes(routes_1.routesArr)))));\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack:///./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/api/BaseService.ts":
/*!***************************************!*\
  !*** ./src/client/api/BaseService.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nclass BaseService {\r\n    constructor(path) {\r\n        this.path = path;\r\n    }\r\n}\r\nBaseService.axios = axios_1.default.create({ baseURL: 'api/' });\r\nexports.default = BaseService;\r\n\n\n//# sourceURL=webpack:///./src/client/api/BaseService.ts?");

/***/ }),

/***/ "./src/client/api/CrudService.ts":
/*!***************************************!*\
  !*** ./src/client/api/CrudService.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst BaseService_1 = __importDefault(__webpack_require__(/*! ./BaseService */ \"./src/client/api/BaseService.ts\"));\r\nclass CrudService extends BaseService_1.default {\r\n    read() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const response = yield BaseService_1.default.axios.request({\r\n                    method: 'GET',\r\n                    url: this.path,\r\n                });\r\n                return response.data;\r\n            }\r\n            catch (error) {\r\n                throw new Error(`Request failed: ${error}`);\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.default = CrudService;\r\n\n\n//# sourceURL=webpack:///./src/client/api/CrudService.ts?");

/***/ }),

/***/ "./src/client/api/MainService.ts":
/*!***************************************!*\
  !*** ./src/client/api/MainService.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst CrudService_1 = __importDefault(__webpack_require__(/*! ./CrudService */ \"./src/client/api/CrudService.ts\"));\r\nclass MainService extends CrudService_1.default {\r\n    constructor() {\r\n        super('main');\r\n    }\r\n}\r\nexports.default = MainService;\r\n\n\n//# sourceURL=webpack:///./src/client/api/MainService.ts?");

/***/ }),

/***/ "./src/client/api/sagas/fetchUsers.ts":
/*!********************************************!*\
  !*** ./src/client/api/sagas/fetchUsers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\r\nconst MainService_1 = __importDefault(__webpack_require__(/*! ../MainService */ \"./src/client/api/MainService.ts\"));\r\nconst types_1 = __webpack_require__(/*! ../../store/reducers/users/types */ \"./src/client/store/reducers/users/types.ts\");\r\nconst actions_1 = __webpack_require__(/*! ../../store/reducers/users/actions */ \"./src/client/store/reducers/users/actions.ts\");\r\nconst mainService = new MainService_1.default();\r\nfunction* fetchUsers() {\r\n    try {\r\n        const response = yield effects_1.call(mainService.read.bind(mainService));\r\n        yield effects_1.put(actions_1.getUsersAsync.success(response));\r\n    }\r\n    catch (error) {\r\n        yield effects_1.put(actions_1.getUsersAsync.failure(error));\r\n    }\r\n}\r\nexports.fetchUsers = fetchUsers;\r\nfunction* watchUsersFetch() {\r\n    yield effects_1.takeEvery(types_1.USERS_TYPES.GET_USERS_ASYNC_REQUEST, fetchUsers);\r\n}\r\nexports.watchUsersFetch = watchUsersFetch;\r\n\n\n//# sourceURL=webpack:///./src/client/api/sagas/fetchUsers.ts?");

/***/ }),

/***/ "./src/client/api/sagas/rootSaga.ts":
/*!******************************************!*\
  !*** ./src/client/api/sagas/rootSaga.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\r\nconst fetchUsers_1 = __webpack_require__(/*! ./fetchUsers */ \"./src/client/api/sagas/fetchUsers.ts\");\r\nfunction* rootSaga() {\r\n    yield effects_1.all([effects_1.fork(fetchUsers_1.watchUsersFetch)]);\r\n}\r\nexports.default = rootSaga;\r\n\n\n//# sourceURL=webpack:///./src/client/api/sagas/rootSaga.ts?");

/***/ }),

/***/ "./src/client/assets/icons/close.svg":
/*!*******************************************!*\
  !*** ./src/client/assets/icons/close.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"circle\", {\n  cx: 227.556,\n  cy: 227.556,\n  r: 227.556,\n  fill: \"#e24c4b\"\n});\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M455.111 227.556c0 125.156-102.4 227.556-227.556 227.556-72.533 0-136.533-32.711-177.778-85.333 38.4 31.289 88.178 49.778 142.222 49.778 125.156 0 227.556-102.4 227.556-227.556 0-54.044-18.489-103.822-49.778-142.222 52.623 41.243 85.334 105.243 85.334 177.777z\",\n  fill: \"#d1403f\"\n});\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M331.378 331.378c-8.533 8.533-22.756 8.533-31.289 0l-72.533-72.533-72.533 72.533c-8.533 8.533-22.756 8.533-31.289 0-8.533-8.533-8.533-22.756 0-31.289l72.533-72.533-72.533-72.533c-8.533-8.533-8.533-22.756 0-31.289 8.533-8.533 22.756-8.533 31.289 0l72.533 72.533 72.533-72.533c8.533-8.533 22.756-8.533 31.289 0 8.533 8.533 8.533 22.756 0 31.289l-72.533 72.533 72.533 72.533c8.533 8.533 8.533 22.755 0 31.289z\",\n  fill: \"#fff\"\n});\n\nfunction SvgClose(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 455.111 455.111\"\n  }, props), _ref, _ref2, _ref3);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgClose);\n\n//# sourceURL=webpack:///./src/client/assets/icons/close.svg?");

/***/ }),

/***/ "./src/client/assets/icons/design.svg":
/*!********************************************!*\
  !*** ./src/client/assets/icons/design.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"style\", null, \"@keyframes monitor-animation{0%{fill:#29abe2}25%{fill:#df5c5c}50%{fill:#51bd3b}75%{fill:#ddcf54}}.design_svg__file-component{transition:.5s all ease;transform:translateY(25px)}.design_svg__animated:hover .design_svg__file-component{transform:translateY(0)}.design_svg__animated:hover .design_svg__left-arrow{transform:translateX(-15px)}.design_svg__animated:hover .design_svg__right-arrow{transform:translateX(15px)}.design_svg__animated:hover .design_svg__monitor{animation:monitor-animation 2.5s ease infinite}\");\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"design_svg__animated\"\n});\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M448 440V120c0-13.255-10.745-24-24-24H40c-13.255 0-24 10.745-24 24v320h432z\",\n  fill: \"#ccc\"\n});\n\nvar _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M464 416v24c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-24h160l16 16h112l16-16h160z\",\n  fill: \"#999\"\n});\n\nvar _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  fill: \"#29ABE2\",\n  className: \"design_svg__monitor\",\n  d: \"M48 128h368v240H48V128z\"\n});\n\nvar _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M224 392h16v16h-16v-16z\",\n  fill: \"#f2f2f2\"\n});\n\nvar _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M144 328h-24c-13.255 0-24-10.745-24-24V24c0-13.255 10.745-24 24-24h224c13.255 0 24 10.745 24 24v280c0 13.255-10.745 24-24 24H144z\",\n  fill: \"#e6e6e6\"\n});\n\nvar _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M128 248h208v16H128v-16zm0 32h192v16H128v-16zm48-64h160v16H176v-16zm-32 0h16v16h-16v-16z\",\n  fill: \"#999\"\n});\n\nvar _ref9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component design_svg__left-arrow\",\n  d: \"M195.2 174.4l-32-24a8 8 0 010-12.8l32-24 9.6 12.8-23.464 17.6 23.464 17.6-9.6 12.8z\",\n  fill: \"#da4836\"\n});\n\nvar _ref10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component design_svg__right-arrow\",\n  d: \"M268.8 174.4l-9.6-12.8 23.464-17.6-23.464-17.6 9.6-12.8 32 24a8 8 0 010 12.8l-32 24z\",\n  fill: \"#da4836\"\n});\n\nvar _ref11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M208.574 181.025l32.007-79.994 14.862 5.947-32.007 79.994-14.862-5.947z\",\n  fill: \"#da4836\"\n});\n\nvar _ref12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M120 0h224c13.255 0 24 10.745 24 24v40H96V24c0-13.255 10.745-24 24-24z\",\n  fill: \"#0071bc\"\n});\n\nvar _ref13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M120 24h16v16h-16V24z\",\n  fill: \"#da4836\"\n});\n\nvar _ref14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M152 24h16v16h-16V24z\",\n  fill: \"#f8cf26\"\n});\n\nvar _ref15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"design_svg__file-component\",\n  d: \"M184 24h16v16h-16V24z\",\n  fill: \"#3dbf50\"\n});\n\nfunction SvgDesign(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    className: \"design_svg__svg\",\n    id: \"design_svg__Capa_1\",\n    x: 0,\n    y: 0,\n    viewBox: \"0 0 464 464\",\n    xmlSpace: \"preserve\"\n  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgDesign);\n\n//# sourceURL=webpack:///./src/client/assets/icons/design.svg?");

/***/ }),

/***/ "./src/client/assets/icons/hourglass.svg":
/*!***********************************************!*\
  !*** ./src/client/assets/icons/hourglass.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M336.655 309.197C313.884 288.436 301 275.729 301 256s12.884-32.436 35.655-53.197C372.251 170.349 421 125.903 421 15H91c0 110.903 48.749 155.349 84.345 187.803C198.116 223.564 211 236.271 211 256s-12.884 32.436-35.655 53.197C139.749 341.651 91 386.097 91 497h330c0-110.903-48.749-155.349-84.345-187.803z\",\n  fill: \"#ccefff\"\n});\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M336.655 309.197C313.884 288.436 301 275.729 301 256s12.884-32.436 35.655-53.197C372.251 170.349 421 125.903 421 15H256v482h165c0-110.903-48.749-155.349-84.345-187.803z\",\n  fill: \"#ace3fc\"\n});\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"g\", {\n  fill: \"#7d8aff\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M61 0h390v30H61zM61 482h390v30H61z\"\n}));\n\nvar _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M219.734 402.939a24946.983 24946.983 0 01-38.368 6.014c-25.038 3.75-45.466 20.537-54.56 43.046h258.387c-9.094-22.509-29.522-39.296-54.56-43.046 0 0-21.239-3.312-38.368-6.014C280.019 401.007 271 390.451 271 378.053V256c0-33.935 22.073-54.06 45.443-75.367 15.053-13.724 31.771-28.974 45.555-50.633H150.001c13.785 21.659 30.502 36.91 45.555 50.633C218.927 201.94 241 222.065 241 256v122.053c0 12.398-9.019 22.954-21.266 24.886z\",\n  fill: \"#ffdc40\"\n});\n\nvar _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M316.443 180.633c15.053-13.724 31.771-28.974 45.555-50.633H256v322h129.193c-9.094-22.509-29.522-39.296-54.56-43.046 0 0-21.239-3.312-38.368-6.014C280.019 401.007 271 390.451 271 378.053V256c0-33.935 22.073-54.06 45.443-75.367z\",\n  fill: \"#ffab15\"\n});\n\nvar _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"g\", {\n  fill: \"#6e76e5\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M256 0h195v30H256zM256 482h195v30H256z\"\n}));\n\nfunction SvgHourglass(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 512 512\"\n  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgHourglass);\n\n//# sourceURL=webpack:///./src/client/assets/icons/hourglass.svg?");

/***/ }),

/***/ "./src/client/assets/icons/pencil.svg":
/*!********************************************!*\
  !*** ./src/client/assets/icons/pencil.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M28.06 363.046L9.317 423.983.554 452.451c-2.859 9.288 5.842 17.989 15.13 15.129l28.467-8.763 60.939-18.743-77.03-77.028z\",\n  fill: \"#dc8744\"\n});\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M44.151 458.817l-28.467 8.763c-9.288 2.859-17.988-5.841-15.129-15.129l8.763-28.468 34.833 34.834z\",\n  fill: \"#3a556a\"\n});\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  fill: \"#fcd462\",\n  d: \"M387.507 80.626l-320.93 320.93-38.513-38.512 320.93-320.93z\"\n});\n\nvar _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  fill: \"#f6c358\",\n  d: \"M426.019 119.137l-320.93 320.93-38.512-38.512 320.93-320.93z\"\n});\n\nvar _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M426.039 119.122L349.01 42.094l38.436-38.436c4.877-4.877 12.784-4.877 17.66 0l59.368 59.368c4.877 4.877 4.877 12.784 0 17.66l-38.435 38.436z\",\n  fill: \"#e56353\"\n});\n\nvar _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"g\", {\n  fill: \"#ebf0f3\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M406.227 138.932l-12.839 12.838-77.029-77.029 12.839-12.839zM380.539 164.596L367.7 177.435l-77.03-77.03 12.84-12.839z\"\n}));\n\nfunction SvgPencil(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 468.134 468.134\"\n  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgPencil);\n\n//# sourceURL=webpack:///./src/client/assets/icons/pencil.svg?");

/***/ }),

/***/ "./src/client/assets/icons/pointer.svg":
/*!*********************************************!*\
  !*** ./src/client/assets/icons/pointer.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M94.335 109.896c-11.826.276-23.253 6.521-29.576 17.473a34.72 34.72 0 00-4.312 12.5H5.071a5.001 5.001 0 10-.001 10h55.396c1.495 10.25 7.474 19.752 17.102 25.311 16.689 9.635 38.177 3.878 47.812-12.811a34.72 34.72 0 004.312-12.5h100.709v25a4.667 4.667 0 007.068 4.002l50-30a4.667 4.667 0 000-8.002l-50-30a4.665 4.665 0 00-7.069 4v25H129.67c-1.495-10.25-7.476-19.752-17.104-25.311a34.733 34.733 0 00-18.231-4.662zm.184 9.949c4.418-.093 8.923.99 13.051 3.373a24.918 24.918 0 0112.51 20.779 5.012 5.012 0 000 1.719 25.002 25.002 0 01-3.357 11.652 24.925 24.925 0 01-34.152 9.15 24.914 24.914 0 01-12.506-20.77c.101-.574.1-1.162-.002-1.736a25.014 25.014 0 013.357-11.645 24.926 24.926 0 0121.099-12.522zm145.218 3.266l36.264 21.758-36.264 21.76v-43.518zm-134.086 8.627a2.5 2.5 0 00-1.743 4.293 12.464 12.464 0 010 17.678 2.5 2.5 0 103.535 3.535c6.813-6.813 6.813-17.935 0-24.748a2.492 2.492 0 00-1.792-.758zm139.321.613a2.5 2.5 0 00-1.227 4.639l16 10a2.5 2.5 0 102.675-4.225l-.025-.015-16-10a2.49 2.49 0 00-1.423-.399z\"\n});\n\nfunction SvgPointer(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 289.736 289.736\"\n  }, props), _ref);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgPointer);\n\n//# sourceURL=webpack:///./src/client/assets/icons/pointer.svg?");

/***/ }),

/***/ "./src/client/assets/icons/settings.svg":
/*!**********************************************!*\
  !*** ./src/client/assets/icons/settings.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"style\", null, \".settings_svg__screwdriver,.settings_svg__wrench{transition:.6s all ease;transform-origin:256px 256px;transform:translateY(100px)}svg.settings_svg__animated:hover .settings_svg__wrench{transform:rotate(-90deg) translateY(0) translateX(-100px)}svg.settings_svg__animated:hover .settings_svg__screwdriver{transform:rotate(90deg) translateY(0) translateX(100px)}\");\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"settings_svg__animated\"\n});\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__wrench\",\n  d: \"M186.526 377.196l200.67-200.67c32.81 12.855 71.538 6.046 98.047-20.464 26.502-26.502 33.312-65.231 20.464-98.047l-46.294 46.294-40.793-10.925-10.925-40.793 46.294-46.294C421.172-6.551 382.444.258 355.942 26.761c-26.509 26.509-33.319 65.238-20.464 98.047l-200.67 200.67c-35.299-14.878-77.619-7.941-106.377 20.817-37.908 37.908-37.908 99.37 0 137.278s99.37 37.908 137.278 0c28.758-28.758 35.695-71.079 20.817-106.377zM71.211 440.793c-14.284-14.284-14.277-37.441 0-51.718 14.284-14.284 37.434-14.283 51.718 0s14.284 37.434 0 51.718c-14.277 14.276-37.434 14.283-51.718 0z\",\n  fill: \"#60e2f4\"\n});\n\nvar _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__wrench\",\n  d: \"M165.709 483.573c-37.908 37.908-99.37 37.908-137.278 0l42.78-42.78c14.284 14.284 37.441 14.277 51.718 0 14.284-14.284 14.283-37.434 0-51.718l295.69-295.691 40.793 10.925 46.294-46.294c12.848 32.817 6.039 71.545-20.464 98.047-26.509 26.509-65.238 33.319-98.047 20.464l-200.67 200.67c14.879 35.298 7.942 77.619-20.816 106.377z\",\n  fill: \"#29c5ec\"\n});\n\nvar _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__screwdriver\",\n  d: \"M372.279 351.065L96.175 74.961l19.014-19.014L44.21.001.001 44.209l55.947 70.98 19.014-19.015 276.104 276.104z\",\n  fill: \"#cddbf9\"\n});\n\nvar _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__screwdriver\",\n  d: \"M361.672 361.672L22.105 22.105.001 44.209l55.947 70.98 19.014-19.015 276.104 276.104z\",\n  fill: \"#f3f6ff\"\n});\n\nvar _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__screwdriver\",\n  d: \"M304.439 376.96l51.718 51.717 22.465-.304 50.098-50.098-.042-22.119-51.718-51.717z\",\n  fill: \"#3c4a83\"\n});\n\nvar _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__screwdriver\",\n  d: \"M304.439 376.96l51.718 51.717 22.465-.304 24.876-24.876-62.798-62.798z\",\n  fill: \"#48588b\"\n});\n\nvar _ref9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__screwdriver\",\n  d: \"M356.157 428.677l68.299 68.299c10.02 10.02 23.144 15.026 36.268 15.026s26.248-5.006 36.26-15.019c20.025-20.025 20.025-52.496-.007-72.528l-68.299-68.299z\",\n  fill: \"#ea0016\"\n});\n\nvar _ref10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"settings_svg__screwdriver\",\n  d: \"M356.157 428.677l68.299 68.299c10.02 10.02 23.144 15.026 36.268 15.026s26.248-5.006 36.26-15.019L392.417 392.417z\",\n  fill: \"#ff641a\"\n});\n\nfunction SvgSettings(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    id: \"settings_svg__Capa_1\",\n    height: 512,\n    viewBox: \"0 0 712.004 712.004\",\n    width: 512,\n    cursor: \"pointer\"\n  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgSettings);\n\n//# sourceURL=webpack:///./src/client/assets/icons/settings.svg?");

/***/ }),

/***/ "./src/client/assets/icons/tick.svg":
/*!******************************************!*\
  !*** ./src/client/assets/icons/tick.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"circle\", {\n  cx: 253.6,\n  cy: 253.6,\n  r: 253.6,\n  fill: \"#32ba7c\"\n});\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M188.8 368l130.4 130.4c108-28.8 188-127.2 188-244.8v-7.2L404.8 152l-216 216z\",\n  fill: \"#0aa06e\"\n});\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"g\", {\n  fill: \"#fff\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M260 310.4c11.2 11.2 11.2 30.4 0 41.6l-23.2 23.2c-11.2 11.2-30.4 11.2-41.6 0L93.6 272.8c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0L260 310.4z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M348.8 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6l-176 175.2c-11.2 11.2-30.4 11.2-41.6 0l-23.2-23.2c-11.2-11.2-11.2-30.4 0-41.6l176-175.2z\"\n}));\n\nfunction SvgTick(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 507.2 507.2\"\n  }, props), _ref, _ref2, _ref3);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgTick);\n\n//# sourceURL=webpack:///./src/client/assets/icons/tick.svg?");

/***/ }),

/***/ "./src/client/common/animations.ts":
/*!*****************************************!*\
  !*** ./src/client/common/animations.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Animations;\r\n(function (Animations) {\r\n    Animations[\"BURST\"] = \"burst\";\r\n    Animations[\"DEFAULT\"] = \"default\";\r\n    Animations[\"FORWARD\"] = \"forward\";\r\n})(Animations = exports.Animations || (exports.Animations = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/common/animations.ts?");

/***/ }),

/***/ "./src/client/common/settings.ts":
/*!***************************************!*\
  !*** ./src/client/common/settings.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Themes;\r\n(function (Themes) {\r\n    Themes[\"LIGHT\"] = \"light\";\r\n    Themes[\"DARK\"] = \"dark\";\r\n})(Themes = exports.Themes || (exports.Themes = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/common/settings.ts?");

/***/ }),

/***/ "./src/client/components/Errors/DefaultError/DefaultError.component.tsx":
/*!******************************************************************************!*\
  !*** ./src/client/components/Errors/DefaultError/DefaultError.component.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst close_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/close.svg */ \"./src/client/assets/icons/close.svg\"));\r\nconst styles = __importStar(__webpack_require__(/*! ./styles.scss */ \"./src/client/components/Errors/DefaultError/styles.scss\"));\r\nconst Fade_1 = __importDefault(__webpack_require__(/*! ../../transitions/Fade/Fade */ \"./src/client/components/transitions/Fade/Fade.tsx\"));\r\nexports.DefaultError = (props) => {\r\n    const { error } = props;\r\n    return (react_1.default.createElement(Fade_1.default, { renderChildren: (handleClose) => (react_1.default.createElement(\"div\", { className: styles.errorPopup },\r\n            react_1.default.createElement(\"div\", { className: styles.close },\r\n                react_1.default.createElement(close_svg_1.default, { onClick: handleClose, className: styles.closeIcon, width: \"20px\" })),\r\n            react_1.default.createElement(\"div\", { className: styles.title }, error.name),\r\n            react_1.default.createElement(\"div\", { className: styles.message }, error.message))) }));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/Errors/DefaultError/DefaultError.component.tsx?");

/***/ }),

/***/ "./src/client/components/Errors/DefaultError/styles.scss":
/*!***************************************************************!*\
  !*** ./src/client/components/Errors/DefaultError/styles.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"errorPopup\":\"_3N_JtIK1B8KfXFDiVRUofi\",\"title\":\"_2wCdqKsFjCYuzSBZhs3yt4\",\"close\":\"_1IRKNZYsRTEkN1F1jrzTwo\",\"closeIcon\":\"_1K6gvNDIA4zLW0-nyM7HxL\",\"message\":\"_15qmIzs1xHGbH6tFlI1pQm\"};\n\n//# sourceURL=webpack:///./src/client/components/Errors/DefaultError/styles.scss?");

/***/ }),

/***/ "./src/client/components/Errors/ErrorHandler/ErrorHandler.component.tsx":
/*!******************************************************************************!*\
  !*** ./src/client/components/Errors/ErrorHandler/ErrorHandler.component.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nconst DefaultError_component_1 = __webpack_require__(/*! ../DefaultError/DefaultError.component */ \"./src/client/components/Errors/DefaultError/DefaultError.component.tsx\");\r\nclass ErrorHandler extends react_1.default.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        // check for ssr\r\n        this.portal = typeof document !== 'undefined' && document.querySelector('#modal');\r\n        this.state = {\r\n            error: null,\r\n            hasError: false,\r\n        };\r\n    }\r\n    static getDerivedStateFromError(error) {\r\n        return { error, hasError: true };\r\n    }\r\n    render() {\r\n        const { ErrorComponent, children } = this.props;\r\n        const { error, hasError } = this.state;\r\n        if (hasError) {\r\n            // check for ssr\r\n            if (!this.portal) {\r\n                return react_1.default.createElement(ErrorComponent, null);\r\n            }\r\n            if (ErrorComponent) {\r\n                return react_dom_1.createPortal(react_1.default.createElement(ErrorComponent, null), this.portal);\r\n            }\r\n            return react_dom_1.createPortal(react_1.default.createElement(DefaultError_component_1.DefaultError, { error: error }), this.portal);\r\n        }\r\n        return (react_1.default.createElement(react_1.default.Fragment, null, children));\r\n    }\r\n}\r\nexports.default = ErrorHandler;\r\n\n\n//# sourceURL=webpack:///./src/client/components/Errors/ErrorHandler/ErrorHandler.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Button/Button.component.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/components/atoms/Button/Button.component.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/atoms/Button/style.scss\"));\r\nconst Button_types_1 = __webpack_require__(/*! ./Button.types */ \"./src/client/components/atoms/Button/Button.types.ts\");\r\nconst defaultProps = {\r\n    primary: true,\r\n    shape: Button_types_1.ButtonShapes.ROUNDED,\r\n    size: Button_types_1.ButtonSizes.MEDIUM,\r\n    type: Button_types_1.ButtonTypes.BUTTON,\r\n};\r\nconst Button = (props) => {\r\n    const { children, Icon, onClick, primary, secondary, shape, size, theme, type, } = props;\r\n    const classProps = classnames_1.default([\r\n        styles.button,\r\n        styles[size],\r\n        styles[shape],\r\n        styles[theme],\r\n        {\r\n            [styles.primary]: primary && !secondary,\r\n            [styles.secondary]: secondary,\r\n        },\r\n    ]);\r\n    return (\r\n    /* eslint-disable react/button-has-type */\r\n    react_1.default.createElement(\"button\", { onClick: onClick, type: type, className: classProps },\r\n        children,\r\n        Icon && react_1.default.createElement(Icon, null)));\r\n};\r\nButton.defaultProps = defaultProps;\r\nButton.displayName = 'Button';\r\nexports.default = Button;\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Button/Button.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Button/Button.container.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/components/atoms/Button/Button.container.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nconst Button_component_1 = __importDefault(__webpack_require__(/*! ./Button.component */ \"./src/client/components/atoms/Button/Button.component.tsx\"));\r\nexports.default = react_redux_1.connect((state) => ({\r\n    theme: selectors_1.getActiveTheme(state),\r\n}))(Button_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Button/Button.container.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Button/Button.types.ts":
/*!************************************************************!*\
  !*** ./src/client/components/atoms/Button/Button.types.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ButtonSizes;\r\n(function (ButtonSizes) {\r\n    ButtonSizes[\"SMALL\"] = \"small\";\r\n    ButtonSizes[\"MEDIUM\"] = \"medium\";\r\n    ButtonSizes[\"LARGE\"] = \"large\";\r\n})(ButtonSizes = exports.ButtonSizes || (exports.ButtonSizes = {}));\r\nvar ButtonShapes;\r\n(function (ButtonShapes) {\r\n    ButtonShapes[\"STRAIGHT\"] = \"straight\";\r\n    ButtonShapes[\"ROUNDED\"] = \"rounded\";\r\n})(ButtonShapes = exports.ButtonShapes || (exports.ButtonShapes = {}));\r\nvar ButtonTypes;\r\n(function (ButtonTypes) {\r\n    ButtonTypes[\"SUBMIT\"] = \"submit\";\r\n    ButtonTypes[\"RESET\"] = \"reset\";\r\n    ButtonTypes[\"BUTTON\"] = \"button\";\r\n})(ButtonTypes = exports.ButtonTypes || (exports.ButtonTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Button/Button.types.ts?");

/***/ }),

/***/ "./src/client/components/atoms/Button/style.scss":
/*!*******************************************************!*\
  !*** ./src/client/components/atoms/Button/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"button\":\"hrPSfpne9AdJFqYQe69xb\",\"small\":\"_1cxqU-EZqN40AW1-MxDl0C\",\"medium\":\"_1OWu0FG9xrTHC9Do7kQXpa\",\"large\":\"AS_5rKlzjpcd7MvDim5FW\",\"rounded\":\"_3EiuiCCNjF9MfiCoDR8QEk\",\"straight\":\"Zg8pkaEXxaKYn419ZyoXB\",\"light\":\"_1MybHKSNN99IBTmqHOEvap\",\"primary\":\"_1uV13srxGZCozwW2zM2o5G\",\"dark\":\"_2AZ-uG1J7VXyrqjxdfCCQ1\",\"secondary\":\"_2AcyQyvGcC8SDu77lm3RUu\"};\n\n//# sourceURL=webpack:///./src/client/components/atoms/Button/style.scss?");

/***/ }),

/***/ "./src/client/components/atoms/Clickable/Clickable.component.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/components/atoms/Clickable/Clickable.component.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/* eslint-disable jsx-a11y/click-events-have-key-events */\r\n/* eslint-disable jsx-a11y/no-static-element-interactions */\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nconst style_scss_1 = __importDefault(__webpack_require__(/*! ./style.scss */ \"./src/client/components/atoms/Clickable/style.scss\"));\r\nexports.Clickable = (props) => {\r\n    const { children } = props;\r\n    const [x, setX] = react_1.useState(0);\r\n    const [y, setY] = react_1.useState(0);\r\n    const [visible, setVisible] = react_1.useState(false);\r\n    const clickableArea = react_1.useRef();\r\n    const clickableSpawn = react_1.useRef();\r\n    const clickableSpawnClasses = classnames_1.default(style_scss_1.default.clickableSpawn);\r\n    const style = {\r\n        left: `${x}px`,\r\n        top: `${y}px`,\r\n    };\r\n    function handleClick(event) {\r\n        const clickableAreaRect = clickableArea.current.getBoundingClientRect();\r\n        setX(event.clientX - clickableAreaRect.x);\r\n        setY(event.clientY - clickableAreaRect.y);\r\n        setVisible(true);\r\n    }\r\n    function hideClickableSpawn() {\r\n        setVisible(false);\r\n    }\r\n    return (react_1.default.createElement(\"div\", { ref: clickableArea, onClick: handleClick, className: style_scss_1.default.clickableArea },\r\n        react_1.default.createElement(react_transition_group_1.CSSTransition, { classNames: Object.assign({}, style_scss_1.default), in: visible, timeout: 100, onEntered: hideClickableSpawn, unmountOnExit: true, mountOnEnter: true },\r\n            react_1.default.createElement(\"div\", { ref: clickableSpawn, className: clickableSpawnClasses, style: style })),\r\n        children));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Clickable/Clickable.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Clickable/style.scss":
/*!**********************************************************!*\
  !*** ./src/client/components/atoms/Clickable/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"clickableArea\":\"_28nxdJTLQ7S7rXFA0joWJI\",\"clickableSpawn\":\"_1Iam28dVavuMfVmeGxxuW-\",\"enter\":\"m2a6YtW6Lo4byWv-Hc_Rv\",\"enterActive\":\"_2hvjKh9J_4Dr0oVMirLMK2\",\"exit\":\"_3pkD_8ywSgggY3j44BTcAq\"};\n\n//# sourceURL=webpack:///./src/client/components/atoms/Clickable/style.scss?");

/***/ }),

/***/ "./src/client/components/atoms/Label/Label.component.tsx":
/*!***************************************************************!*\
  !*** ./src/client/components/atoms/Label/Label.component.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst settings_1 = __webpack_require__(/*! ../../../common/settings */ \"./src/client/common/settings.ts\");\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/atoms/Label/style.scss\"));\r\nexports.LabelTheme = {\r\n    DARK: settings_1.Themes.DARK,\r\n    LIGHT: settings_1.Themes.LIGHT,\r\n};\r\nexports.LabelSize = {\r\n    LARGE: 'large',\r\n    MEDIUM: 'medium',\r\n    SMALL: 'small',\r\n};\r\nconst defaultProps = {\r\n    children: 'label',\r\n    size: 'medium',\r\n    theme: settings_1.Themes.LIGHT,\r\n};\r\nconst Label = (props) => {\r\n    const { size, children, theme } = props;\r\n    const classProps = classnames_1.default(styles.label, styles[theme], styles[size]);\r\n    return react_1.default.createElement(\"span\", { className: classProps }, children);\r\n};\r\nLabel.defaultProps = defaultProps;\r\nLabel.displayName = 'Label';\r\nexports.default = Label;\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Label/Label.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Label/Label.container.ts":
/*!**************************************************************!*\
  !*** ./src/client/components/atoms/Label/Label.container.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst Label_component_1 = __importDefault(__webpack_require__(/*! ./Label.component */ \"./src/client/components/atoms/Label/Label.component.tsx\"));\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nexports.default = react_redux_1.connect((state) => ({\r\n    theme: selectors_1.getActiveTheme(state),\r\n}))(Label_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Label/Label.container.ts?");

/***/ }),

/***/ "./src/client/components/atoms/Label/style.scss":
/*!******************************************************!*\
  !*** ./src/client/components/atoms/Label/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"small\":\"_2HrRyy2yJFKb2WZbMFAP1Y\",\"medium\":\"_30j4jsn62AFzOZWIsz3243\",\"large\":\"_3vB0PF0Fn3irfgN5zUoZO7\",\"dark\":\"_1sy-C8jKhXQVTvkaS_seFI\"};\n\n//# sourceURL=webpack:///./src/client/components/atoms/Label/style.scss?");

/***/ }),

/***/ "./src/client/components/atoms/ListItem/ListItem.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/atoms/ListItem/ListItem.component.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst settings_1 = __webpack_require__(/*! ../../../common/settings */ \"./src/client/common/settings.ts\");\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/atoms/ListItem/style.scss\"));\r\nexports.ListItemTheme = {\r\n    DARK: settings_1.Themes.DARK,\r\n    LIGHT: settings_1.Themes.LIGHT,\r\n};\r\nexports.ListItemSize = {\r\n    LARGE: 'large',\r\n    MEDIUM: 'medium',\r\n    SMALL: 'small',\r\n};\r\nconst defaultProps = {\r\n    children: '',\r\n    size: 'medium',\r\n    theme: settings_1.Themes.LIGHT,\r\n};\r\nconst ListItem = (props) => {\r\n    const { children, size, theme } = props;\r\n    const classProps = classnames_1.default(styles.listItem, styles[theme], styles[size]);\r\n    return (react_1.default.createElement(\"li\", { className: classProps }, children));\r\n};\r\nListItem.defaultProps = defaultProps;\r\nListItem.displayName = 'ListItem';\r\nexports.default = ListItem;\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/ListItem/ListItem.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/ListItem/ListItem.container.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/atoms/ListItem/ListItem.container.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nconst ListItem_component_1 = __importDefault(__webpack_require__(/*! ./ListItem.component */ \"./src/client/components/atoms/ListItem/ListItem.component.tsx\"));\r\nexports.default = react_redux_1.connect((state) => ({\r\n    theme: selectors_1.getActiveTheme(state),\r\n}))(ListItem_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/ListItem/ListItem.container.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/ListItem/style.scss":
/*!*********************************************************!*\
  !*** ./src/client/components/atoms/ListItem/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"listItem\":\"_2ddAHvqqvG_hqN2AGyhvsY\",\"small\":\"_2j54lmFCkkcLExz57vwhft\",\"medium\":\"_3kKGEaVlkcpZ2FSNgeWLFY\",\"large\":\"_25LgOKpHPROvlT-lgp6K-\",\"dark\":\"_18VKDaRLXd14FjUssbOT3z\"};\n\n//# sourceURL=webpack:///./src/client/components/atoms/ListItem/style.scss?");

/***/ }),

/***/ "./src/client/components/atoms/Paragraph/Paragraph.component.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/components/atoms/Paragraph/Paragraph.component.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/atoms/Paragraph/style.scss\"));\r\nconst settings_1 = __webpack_require__(/*! ../../../common/settings */ \"./src/client/common/settings.ts\");\r\nexports.ParagraphSize = {\r\n    LARGE: 'large',\r\n    MEDIUM: 'medium',\r\n    SMALL: 'small',\r\n};\r\nexports.ParagraphTheme = {\r\n    DARK: settings_1.Themes.DARK,\r\n    LIGHT: settings_1.Themes.LIGHT,\r\n};\r\nconst defaultProps = {\r\n    size: exports.ParagraphSize.MEDIUM,\r\n    theme: exports.ParagraphTheme.LIGHT,\r\n};\r\nconst Paragraph = (props) => {\r\n    const { children, size, theme } = props;\r\n    const paragraphClass = classnames_1.default(styles.paragraph, styles[size], styles[theme]);\r\n    return (react_1.default.createElement(\"p\", { className: paragraphClass }, children));\r\n};\r\nParagraph.defaultProps = defaultProps;\r\nParagraph.displayName = 'Paragraph';\r\nexports.default = Paragraph;\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/Paragraph/Paragraph.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/Paragraph/style.scss":
/*!**********************************************************!*\
  !*** ./src/client/components/atoms/Paragraph/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"small\":\"gORJwc8_pp_zk5UPLftnk\",\"medium\":\"_2057kQuBoJr-xPBLjZgizD\",\"large\":\"_14Ht9VZaZa43ffA-knsDD4\",\"light\":\"InwbiP3BeM44uGfWnBA6N\",\"dark\":\"_3xzvsc6nbaBN6HyCDOy2r\"};\n\n//# sourceURL=webpack:///./src/client/components/atoms/Paragraph/style.scss?");

/***/ }),

/***/ "./src/client/components/atoms/TextSize/TextSize.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/atoms/TextSize/TextSize.component.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/atoms/TextSize/style.scss\"));\r\nconst TextSize = (props) => {\r\n    const { size, changeSize } = props;\r\n    const classProps = classnames_1.default(styles['text-size']);\r\n    react_1.useEffect(() => {\r\n        // check for ssr\r\n        if (typeof document !== 'undefined') {\r\n            document.body.parentElement.style.fontSize = `${size}%`;\r\n        }\r\n    }, [size]);\r\n    const dec = () => {\r\n        const newSize = size === 60 ? 60 : size - 20;\r\n        changeSize(newSize);\r\n    };\r\n    const inc = () => {\r\n        const newSize = size === 200 ? 200 : size + 20;\r\n        changeSize(newSize);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: classProps },\r\n        react_1.default.createElement(\"button\", { type: \"button\", onClick: dec, className: styles.dec }, \"\\u2212\"),\r\n        react_1.default.createElement(\"p\", null,\r\n            size,\r\n            \"%\"),\r\n        react_1.default.createElement(\"button\", { type: \"button\", onClick: inc, className: styles.inc }, \"+\")));\r\n};\r\nexports.default = TextSize;\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/TextSize/TextSize.component.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/TextSize/TextSize.container.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/atoms/TextSize/TextSize.container.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst TextSize_component_1 = __importDefault(__webpack_require__(/*! ./TextSize.component */ \"./src/client/components/atoms/TextSize/TextSize.component.tsx\"));\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nconst actions_1 = __webpack_require__(/*! ../../../store/reducers/settings/actions */ \"./src/client/store/reducers/settings/actions.ts\");\r\nexports.default = react_redux_1.connect((state) => ({\r\n    size: selectors_1.getTextSize(state),\r\n    theme: selectors_1.getActiveTheme(state),\r\n}), (dispatch) => ({\r\n    changeSize: (newSize) => {\r\n        dispatch(actions_1.toggleTextSizeAction(newSize));\r\n    },\r\n}))(TextSize_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/atoms/TextSize/TextSize.container.tsx?");

/***/ }),

/***/ "./src/client/components/atoms/TextSize/style.scss":
/*!*********************************************************!*\
  !*** ./src/client/components/atoms/TextSize/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"text-size\":\"_1O_ajC_bXMHlF25LzLgeGw\",\"dec\":\"_2vdRsoAkNRYETioalQtVGx\",\"inc\":\"_2yVu2fSXFR9zTlHOKCPdwQ\"};\n\n//# sourceURL=webpack:///./src/client/components/atoms/TextSize/style.scss?");

/***/ }),

/***/ "./src/client/components/molecules/BlockWithText/BlockWithText.component.tsx":
/*!***********************************************************************************!*\
  !*** ./src/client/components/molecules/BlockWithText/BlockWithText.component.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst react_redux_i18n_1 = __webpack_require__(/*! react-redux-i18n */ \"react-redux-i18n\");\r\nconst Label_container_1 = __importDefault(__webpack_require__(/*! ../../atoms/Label/Label.container */ \"./src/client/components/atoms/Label/Label.container.ts\"));\r\nconst settings_1 = __webpack_require__(/*! ../../../common/settings */ \"./src/client/common/settings.ts\");\r\nconst Fade_1 = __importDefault(__webpack_require__(/*! ../../transitions/Fade/Fade */ \"./src/client/components/transitions/Fade/Fade.tsx\"));\r\nconst BlockWithText_types_1 = __webpack_require__(/*! ./BlockWithText.types */ \"./src/client/components/molecules/BlockWithText/BlockWithText.types.ts\");\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/molecules/BlockWithText/style.scss\"));\r\nconst defaultProps = {\r\n    children: '',\r\n    label: '',\r\n    labelSize: BlockWithText_types_1.LabelSize.SMALL,\r\n    rowReverse: false,\r\n    theme: settings_1.Themes.LIGHT,\r\n};\r\nconst BlockWithText = (props) => {\r\n    const { children, label, labelSize, rowReverse, } = props;\r\n    const labelClassProps = classnames_1.default(styles.blockWithText, {\r\n        [styles.rowReverse]: rowReverse,\r\n    });\r\n    return (react_1.default.createElement(Fade_1.default, null,\r\n        react_1.default.createElement(\"div\", { className: labelClassProps },\r\n            react_1.default.createElement(Label_container_1.default, { size: labelSize },\r\n                react_1.default.createElement(react_redux_i18n_1.Translate, { value: label })),\r\n            children)));\r\n};\r\nBlockWithText.defaultProps = defaultProps;\r\nBlockWithText.displayName = 'BlockWithText';\r\nexports.default = BlockWithText;\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/BlockWithText/BlockWithText.component.tsx?");

/***/ }),

/***/ "./src/client/components/molecules/BlockWithText/BlockWithText.container.ts":
/*!**********************************************************************************!*\
  !*** ./src/client/components/molecules/BlockWithText/BlockWithText.container.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nconst BlockWithText_component_1 = __importDefault(__webpack_require__(/*! ./BlockWithText.component */ \"./src/client/components/molecules/BlockWithText/BlockWithText.component.tsx\"));\r\nexports.default = react_redux_1.connect((state) => ({\r\n    theme: selectors_1.getActiveTheme(state),\r\n}))(BlockWithText_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/BlockWithText/BlockWithText.container.ts?");

/***/ }),

/***/ "./src/client/components/molecules/BlockWithText/BlockWithText.types.ts":
/*!******************************************************************************!*\
  !*** ./src/client/components/molecules/BlockWithText/BlockWithText.types.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LabelSize;\r\n(function (LabelSize) {\r\n    LabelSize[\"SMALL\"] = \"small\";\r\n    LabelSize[\"MEDIUM\"] = \"medim\";\r\n    LabelSize[\"LARGE\"] = \"large\";\r\n})(LabelSize = exports.LabelSize || (exports.LabelSize = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/BlockWithText/BlockWithText.types.ts?");

/***/ }),

/***/ "./src/client/components/molecules/BlockWithText/style.scss":
/*!******************************************************************!*\
  !*** ./src/client/components/molecules/BlockWithText/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"blockWithText\":\"_3ChJ58LEHClQ9lNPuIzmQi\",\"rowReverse\":\"_1ZWWMMPHfOQk4-pK6OULYa\"};\n\n//# sourceURL=webpack:///./src/client/components/molecules/BlockWithText/style.scss?");

/***/ }),

/***/ "./src/client/components/molecules/Card/Card.component.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/components/molecules/Card/Card.component.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst Card_types_1 = __webpack_require__(/*! ./Card.types */ \"./src/client/components/molecules/Card/Card.types.ts\");\r\nconst style_scss_1 = __importDefault(__webpack_require__(/*! ./style.scss */ \"./src/client/components/molecules/Card/style.scss\"));\r\nconst defaultProps = {\r\n    shape: Card_types_1.CardShapes.ROUNDED,\r\n    size: Card_types_1.CardSizes.MEDIUM,\r\n};\r\nconst Card = (props) => {\r\n    const { actions, children, imgSrc, overline, shape, size, theme, } = props;\r\n    const classProps = classnames_1.default(style_scss_1.default.card, style_scss_1.default[theme], style_scss_1.default[size], style_scss_1.default[shape]);\r\n    return (react_1.default.createElement(\"div\", { className: classProps },\r\n        react_1.default.createElement(\"img\", { className: style_scss_1.default.cardImg, src: imgSrc, alt: imgSrc }),\r\n        overline && (react_1.default.createElement(\"section\", null,\r\n            react_1.default.createElement(\"span\", { className: style_scss_1.default.cardOverline }, overline))),\r\n        react_1.default.createElement(\"article\", null, children),\r\n        actions && (react_1.default.createElement(\"section\", { className: style_scss_1.default.cardFooter }, actions.map((action) => (react_1.default.createElement(\"div\", { className: style_scss_1.default.cardActionWrapper }, action)))))));\r\n};\r\nCard.defaultProps = defaultProps;\r\nCard.displayName = 'Card';\r\nexports.default = Card;\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/Card/Card.component.tsx?");

/***/ }),

/***/ "./src/client/components/molecules/Card/Card.container.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/components/molecules/Card/Card.container.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nconst Card_component_1 = __importDefault(__webpack_require__(/*! ./Card.component */ \"./src/client/components/molecules/Card/Card.component.tsx\"));\r\nexports.default = react_redux_1.connect((state) => ({\r\n    theme: selectors_1.getActiveTheme(state),\r\n}))(Card_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/Card/Card.container.tsx?");

/***/ }),

/***/ "./src/client/components/molecules/Card/Card.types.ts":
/*!************************************************************!*\
  !*** ./src/client/components/molecules/Card/Card.types.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardSizes;\r\n(function (CardSizes) {\r\n    CardSizes[\"SMALL\"] = \"small\";\r\n    CardSizes[\"MEDIUM\"] = \"medium\";\r\n    CardSizes[\"LARGE\"] = \"large\";\r\n})(CardSizes = exports.CardSizes || (exports.CardSizes = {}));\r\nvar CardShapes;\r\n(function (CardShapes) {\r\n    CardShapes[\"STRAIGHT\"] = \"straight\";\r\n    CardShapes[\"ROUNDED\"] = \"rounded\";\r\n})(CardShapes = exports.CardShapes || (exports.CardShapes = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/Card/Card.types.ts?");

/***/ }),

/***/ "./src/client/components/molecules/Card/style.scss":
/*!*********************************************************!*\
  !*** ./src/client/components/molecules/Card/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"card\":\"UEqPE2-R-pz4o2CpBORjP\",\"cardImg\":\"_3uoKML_MainoOrbejP7NcC\",\"cardOverline\":\"_23I4-VzrjBd6c1Ac9BxQ6_\",\"cardFooter\":\"_2HYnLJCGm1zWDviEYzw6cB\",\"cardActionWrapper\":\"agmyLxVKrtI4y_v0GVkfM\",\"small\":\"_3cN4LgGpbucbIYujnw7Q87\",\"medium\":\"J76n_Oyjw6kvAvn5zRyi8\",\"large\":\"_1fzaLpBIZjSN8vH_rKpXCL\",\"rounded\":\"_2avpOTyyrHuwePv-IhwMar\",\"straight\":\"_2ko0kUeHa4a12fAFW4Y0BD\",\"light\":\"dYeS_FFQVarwYkhvcS9HF\",\"dark\":\"eONYWrjZabLpMj2ZsJuBJ\"};\n\n//# sourceURL=webpack:///./src/client/components/molecules/Card/style.scss?");

/***/ }),

/***/ "./src/client/components/molecules/Stepper/Stepper.component.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/components/molecules/Stepper/Stepper.component.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst rc_steps_1 = __importStar(__webpack_require__(/*! rc-steps */ \"rc-steps\"));\r\nconst react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nconst style_scss_1 = __importDefault(__webpack_require__(/*! ./style.scss */ \"./src/client/components/molecules/Stepper/style.scss\"));\r\nconst Stepper_types_1 = __webpack_require__(/*! ./Stepper.types */ \"./src/client/components/molecules/Stepper/Stepper.types.ts\");\r\nconst Button_container_1 = __importDefault(__webpack_require__(/*! ../../atoms/Button/Button.container */ \"./src/client/components/atoms/Button/Button.container.tsx\"));\r\nconst hourglass_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/hourglass.svg */ \"./src/client/assets/icons/hourglass.svg\"));\r\nconst pencil_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/pencil.svg */ \"./src/client/assets/icons/pencil.svg\"));\r\nconst tick_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/tick.svg */ \"./src/client/assets/icons/tick.svg\"));\r\nconst Button_types_1 = __webpack_require__(/*! ../../atoms/Button/Button.types */ \"./src/client/components/atoms/Button/Button.types.ts\");\r\nconst Clickable_component_1 = __webpack_require__(/*! ../../atoms/Clickable/Clickable.component */ \"./src/client/components/atoms/Clickable/Clickable.component.tsx\");\r\nconst pointer_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/pointer.svg */ \"./src/client/assets/icons/pointer.svg\"));\r\nconst defaultProps = {\r\n    currentStep: 0,\r\n    size: Stepper_types_1.StepperSizes.DEFAULT,\r\n    steps: [{}],\r\n};\r\nfunction reducer(state, action) {\r\n    switch (action.type) {\r\n        case Stepper_types_1.ActionTypes.NEXT_STEP:\r\n            return Object.assign(Object.assign({}, state), { currentStep: state.steps.length === state.currentStep ? state.currentStep : state.currentStep + 1 });\r\n        case Stepper_types_1.ActionTypes.PREVIOUS_STEP:\r\n            return Object.assign(Object.assign({}, state), { currentStep: state.currentStep === 0 ? state.currentStep : state.currentStep - 1 });\r\n        case Stepper_types_1.ActionTypes.SET_STATUS:\r\n            return Object.assign(Object.assign({}, state), { steps: state.steps.map((step, index) => {\r\n                    if (index === state.currentStep) {\r\n                        return Object.assign(Object.assign({}, step), { status: action.payload.status });\r\n                    }\r\n                    return step;\r\n                }) });\r\n        default:\r\n            return state;\r\n    }\r\n}\r\nconst Stepper = (props) => {\r\n    const { contentNodes, currentStep, onFinish, size, steps, } = props;\r\n    const [state, dispatch] = react_1.useReducer(reducer, {\r\n        currentStep,\r\n        steps,\r\n    });\r\n    function setNextStep() {\r\n        dispatch({ payload: { status: Stepper_types_1.Statuses.FINISH }, type: Stepper_types_1.ActionTypes.SET_STATUS });\r\n        dispatch({ type: Stepper_types_1.ActionTypes.NEXT_STEP });\r\n        dispatch({ payload: { status: Stepper_types_1.Statuses.PROCESS }, type: Stepper_types_1.ActionTypes.SET_STATUS });\r\n    }\r\n    function renderIcon(status) {\r\n        const iconAttrs = {\r\n            height: '20px',\r\n            width: '20px',\r\n        };\r\n        switch (status) {\r\n            case Stepper_types_1.Statuses.FINISH:\r\n                // eslint-disable-next-line react/jsx-props-no-spreading\r\n                return react_1.default.createElement(tick_svg_1.default, Object.assign({}, iconAttrs));\r\n            case Stepper_types_1.Statuses.PROCESS:\r\n                // eslint-disable-next-line react/jsx-props-no-spreading\r\n                return react_1.default.createElement(pencil_svg_1.default, Object.assign({}, iconAttrs));\r\n            default:\r\n                // eslint-disable-next-line react/jsx-props-no-spreading\r\n                return react_1.default.createElement(hourglass_svg_1.default, Object.assign({}, iconAttrs));\r\n        }\r\n    }\r\n    function renderSteps(stepsArr) {\r\n        return stepsArr.map((step) => {\r\n            const { status } = step;\r\n            const icon = renderIcon(status);\r\n            return react_1.default.createElement(rc_steps_1.Step, { status: status, icon: icon });\r\n        });\r\n    }\r\n    react_1.useEffect(() => {\r\n        if (state.currentStep === state.steps.length) {\r\n            onFinish();\r\n        }\r\n        // eslint-disable-next-line react-hooks/exhaustive-deps\r\n    }, [state]);\r\n    function renderContent(nodes) {\r\n        return nodes.map((contentNode, index) => (react_1.default.createElement(react_transition_group_1.CSSTransition, { classNames: Object.assign({}, style_scss_1.default), in: index === state.currentStep, timeout: 500, mountOnEnter: true, unmountOnExit: true }, contentNode)));\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: style_scss_1.default.wrapper },\r\n        react_1.default.createElement(rc_steps_1.default, { size: size, current: state.currentStep }, renderSteps(state.steps)),\r\n        react_1.default.createElement(\"div\", { className: style_scss_1.default.content }, renderContent(contentNodes)),\r\n        react_1.default.createElement(Clickable_component_1.Clickable, null,\r\n            react_1.default.createElement(Button_container_1.default, { onClick: setNextStep, size: Button_types_1.ButtonSizes.SMALL, Icon: pointer_svg_1.default, secondary: true }, \"Continue\"))));\r\n};\r\nStepper.defaultProps = defaultProps;\r\nStepper.displayName = 'Stepper';\r\nexports.default = Stepper;\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/Stepper/Stepper.component.tsx?");

/***/ }),

/***/ "./src/client/components/molecules/Stepper/Stepper.types.ts":
/*!******************************************************************!*\
  !*** ./src/client/components/molecules/Stepper/Stepper.types.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar StepperSizes;\r\n(function (StepperSizes) {\r\n    StepperSizes[\"DEFAULT\"] = \"default\";\r\n    StepperSizes[\"SMALL\"] = \"small\";\r\n})(StepperSizes = exports.StepperSizes || (exports.StepperSizes = {}));\r\nvar ActionTypes;\r\n(function (ActionTypes) {\r\n    ActionTypes[\"ERROR\"] = \"error\";\r\n    ActionTypes[\"NEXT_STEP\"] = \"nextStep\";\r\n    ActionTypes[\"PREVIOUS_STEP\"] = \"previousStep\";\r\n    ActionTypes[\"SET_STATUS\"] = \"setStatus\";\r\n})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));\r\nvar Statuses;\r\n(function (Statuses) {\r\n    Statuses[\"ERROR\"] = \"error\";\r\n    Statuses[\"FINISH\"] = \"finish\";\r\n    Statuses[\"PROCESS\"] = \"process\";\r\n    Statuses[\"WAIT\"] = \"wait\";\r\n})(Statuses = exports.Statuses || (exports.Statuses = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/Stepper/Stepper.types.ts?");

/***/ }),

/***/ "./src/client/components/molecules/Stepper/style.scss":
/*!************************************************************!*\
  !*** ./src/client/components/molecules/Stepper/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"content\":\"_1kZKhBMPhNW6juszdeUjSw\",\"wrapper\":\"_1oHOvGHF-ToGq3LkW4FaYl\",\"enter\":\"JwKLyYWHn0g_AdTERPdXZ\",\"enterActive\":\"_33jOpZqwx8NI246JldIZii\",\"exit\":\"_1McUPI-ojMa43vfm58t_vz\",\"exitActive\":\"_3e5jCezX8mTAU1PyfGe6hv\"};\n\n//# sourceURL=webpack:///./src/client/components/molecules/Stepper/style.scss?");

/***/ }),

/***/ "./src/client/components/molecules/UnorderedList/UnorderedList.component.tsx":
/*!***********************************************************************************!*\
  !*** ./src/client/components/molecules/UnorderedList/UnorderedList.component.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_i18n_1 = __webpack_require__(/*! react-redux-i18n */ \"react-redux-i18n\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst ListItem_container_1 = __importDefault(__webpack_require__(/*! ../../atoms/ListItem/ListItem.container */ \"./src/client/components/atoms/ListItem/ListItem.container.tsx\"));\r\nconst Fade_1 = __importDefault(__webpack_require__(/*! ../../transitions/Fade/Fade */ \"./src/client/components/transitions/Fade/Fade.tsx\"));\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/molecules/UnorderedList/style.scss\"));\r\nconst defaultProps = {\r\n    listItems: [{}],\r\n};\r\nconst UnorderedList = (props) => {\r\n    const { className, dotted, horizontal, listItems, } = props;\r\n    const classProps = classnames_1.default(styles.unorderedList, {\r\n        [styles.dotted]: dotted,\r\n        [styles.horizontal]: horizontal,\r\n    }, className);\r\n    function renderListItems(listItem) {\r\n        const { link, title } = listItem;\r\n        const component = (react_1.default.createElement(ListItem_container_1.default, null, link ? (react_1.default.createElement(react_router_dom_1.Link, { to: link },\r\n            react_1.default.createElement(react_redux_i18n_1.Translate, { value: title })))\r\n            : react_1.default.createElement(react_redux_i18n_1.Translate, { value: title })));\r\n        return {\r\n            component,\r\n            id: link,\r\n        };\r\n    }\r\n    return (react_1.default.createElement(\"ul\", { className: classProps },\r\n        react_1.default.createElement(Fade_1.default, { items: listItems.map(renderListItems) })));\r\n};\r\nUnorderedList.defaultProps = defaultProps;\r\nUnorderedList.displayName = 'UnorderedList';\r\nexports.default = UnorderedList;\r\n\n\n//# sourceURL=webpack:///./src/client/components/molecules/UnorderedList/UnorderedList.component.tsx?");

/***/ }),

/***/ "./src/client/components/molecules/UnorderedList/style.scss":
/*!******************************************************************!*\
  !*** ./src/client/components/molecules/UnorderedList/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"unorderedList\":\"_12uowOZ-jqj4_sNE2xIyl_\",\"dotted\":\"_3MQh6pScwFExNN3XTVHXFo\",\"horizontal\":\"_2nwZG84gPSDfYM1ssWPg8i\"};\n\n//# sourceURL=webpack:///./src/client/components/molecules/UnorderedList/style.scss?");

/***/ }),

/***/ "./src/client/components/organisms/Header/header.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/organisms/Header/header.component.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_toggle_1 = __importDefault(__webpack_require__(/*! react-toggle */ \"react-toggle\"));\r\nconst react_2 = __importDefault(__webpack_require__(/*! @tippyjs/react */ \"@tippyjs/react\"));\r\nconst react_dropdown_1 = __importDefault(__webpack_require__(/*! react-dropdown */ \"react-dropdown\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst settings_1 = __webpack_require__(/*! ../../../common/settings */ \"./src/client/common/settings.ts\");\r\nconst BlockWithText_container_1 = __importDefault(__webpack_require__(/*! ../../molecules/BlockWithText/BlockWithText.container */ \"./src/client/components/molecules/BlockWithText/BlockWithText.container.ts\"));\r\nconst design_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/design.svg */ \"./src/client/assets/icons/design.svg\"));\r\nconst settings_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/settings.svg */ \"./src/client/assets/icons/settings.svg\"));\r\nconst TextSize_container_1 = __importDefault(__webpack_require__(/*! ../../atoms/TextSize/TextSize.container */ \"./src/client/components/atoms/TextSize/TextSize.container.tsx\"));\r\nconst localization_1 = __webpack_require__(/*! ../../../localization */ \"./src/client/localization/index.ts\");\r\nconst UnorderedList_component_1 = __importDefault(__webpack_require__(/*! ../../molecules/UnorderedList/UnorderedList.component */ \"./src/client/components/molecules/UnorderedList/UnorderedList.component.tsx\"));\r\nconst Fade_1 = __importDefault(__webpack_require__(/*! ../../transitions/Fade/Fade */ \"./src/client/components/transitions/Fade/Fade.tsx\"));\r\nconst routes_1 = __webpack_require__(/*! ../../../routes/routes */ \"./src/client/routes/routes.tsx\");\r\n// import 'react-toggle/style.css';\r\n// import 'tippy.js/dist/tippy.css';\r\n// import 'tippy.js/animations/shift-toward.css';\r\n// import 'react-dropdown/style.css';\r\nconst styles = __importStar(__webpack_require__(/*! ./style.scss */ \"./src/client/components/organisms/Header/style.scss\"));\r\nconst BlockWithText_types_1 = __webpack_require__(/*! ../../molecules/BlockWithText/BlockWithText.types */ \"./src/client/components/molecules/BlockWithText/BlockWithText.types.ts\");\r\nconst defaultProps = {\r\n    theme: settings_1.Themes.LIGHT,\r\n};\r\nconst Header = (props) => {\r\n    const { selectedLocale, setLocaleWithFallback, theme, toggleTheme, } = props;\r\n    const classProps = classnames_1.default(styles.header, styles[theme]);\r\n    const tipClassProps = classnames_1.default(styles[theme], styles.tip);\r\n    const [visible, setVisible] = react_1.useState(false);\r\n    function handleThemeChange(event) {\r\n        const { target } = event;\r\n        toggleTheme(target.checked ? 'dark' : 'light');\r\n    }\r\n    function handleLocaleChange(option) {\r\n        const { value } = option;\r\n        setLocaleWithFallback(value);\r\n    }\r\n    const show = () => setVisible(true);\r\n    const hide = () => setVisible(false);\r\n    return (react_1.default.createElement(\"header\", { className: classProps },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/\" },\r\n            react_1.default.createElement(BlockWithText_container_1.default, { label: \"Logo\", labelSize: BlockWithText_types_1.LabelSize.MEDIUM, rowReverse: true },\r\n                react_1.default.createElement(design_svg_1.default, { className: \"design_svg__animated\", width: \"40px\" }))),\r\n        react_1.default.createElement(\"nav\", null,\r\n            react_1.default.createElement(UnorderedList_component_1.default, { listItems: routes_1.listItems, horizontal: true })),\r\n        react_1.default.createElement(Fade_1.default, null,\r\n            react_1.default.createElement(react_2.default, { content: (react_1.default.createElement(\"div\", null,\r\n                    react_1.default.createElement(BlockWithText_container_1.default, { label: \"settings.language\", labelSize: BlockWithText_types_1.LabelSize.SMALL },\r\n                        react_1.default.createElement(react_dropdown_1.default, { onChange: handleLocaleChange, options: Object.keys(localization_1.supportedLocales), value: selectedLocale })),\r\n                    react_1.default.createElement(BlockWithText_container_1.default, { label: \"settings.nightMode\", labelSize: BlockWithText_types_1.LabelSize.SMALL },\r\n                        react_1.default.createElement(react_toggle_1.default, { defaultChecked: false, icons: false, onChange: handleThemeChange })),\r\n                    react_1.default.createElement(BlockWithText_container_1.default, { label: \"settings.textSize\", labelSize: BlockWithText_types_1.LabelSize.SMALL },\r\n                        react_1.default.createElement(TextSize_container_1.default, null)))), animation: \"shift-toward\", className: tipClassProps, interactive: true, onClickOutside: hide, visible: visible },\r\n                react_1.default.createElement(\"span\", null,\r\n                    react_1.default.createElement(settings_svg_1.default, { className: \"settings_svg__animated\", height: \"40px\", onClick: visible ? hide : show, width: \"40px\" }))))));\r\n};\r\nHeader.defaultProps = defaultProps;\r\nexports.default = Header;\r\n\n\n//# sourceURL=webpack:///./src/client/components/organisms/Header/header.component.tsx?");

/***/ }),

/***/ "./src/client/components/organisms/Header/header.container.ts":
/*!********************************************************************!*\
  !*** ./src/client/components/organisms/Header/header.container.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst header_component_1 = __importDefault(__webpack_require__(/*! ./header.component */ \"./src/client/components/organisms/Header/header.component.tsx\"));\r\nconst actions_1 = __webpack_require__(/*! ../../../store/reducers/settings/actions */ \"./src/client/store/reducers/settings/actions.ts\");\r\nconst selectors_1 = __webpack_require__(/*! ../../../store/reducers/settings/selectors */ \"./src/client/store/reducers/settings/selectors.ts\");\r\nconst localization_1 = __webpack_require__(/*! ../../../localization */ \"./src/client/localization/index.ts\");\r\nexports.default = react_redux_1.connect((state) => ({\r\n    selectedLocale: selectors_1.getSelectedLocale(state),\r\n    theme: selectors_1.getActiveTheme(state),\r\n}), (dispatch) => ({\r\n    setLocaleWithFallback: localization_1.setLocaleWithFallback(dispatch),\r\n    toggleTheme: (themeName) => dispatch(actions_1.toggleThemeAction(themeName)),\r\n}))(header_component_1.default);\r\n\n\n//# sourceURL=webpack:///./src/client/components/organisms/Header/header.container.ts?");

/***/ }),

/***/ "./src/client/components/organisms/Header/style.scss":
/*!***********************************************************!*\
  !*** ./src/client/components/organisms/Header/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"header\":\"_3Qe8PbO_OiQQuvuxm3Q1T8\",\"settingsIcon\":\"_23Vhv_eUGyBI7OSM_pPJVa\",\"light\":\"_3LTx0mJ6Sw6Q-LjhSfuKKn\",\"tip\":\"_23tR1Es3O4LybuwRtFaeEZ\",\"dark\":\"drtuaILp-QtfqxTaNE9Fc\"};\n\n//# sourceURL=webpack:///./src/client/components/organisms/Header/style.scss?");

/***/ }),

/***/ "./src/client/components/pages/AboutUs.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/pages/AboutUs.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst AboutUs = () => (react_1.default.createElement(\"h1\", null, \"\\u041E \\u043D\\u0430\\u0441\"));\r\nexports.default = AboutUs;\r\n\n\n//# sourceURL=webpack:///./src/client/components/pages/AboutUs.tsx?");

/***/ }),

/***/ "./src/client/components/pages/Contacts.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/pages/Contacts.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Contacts = () => (react_1.default.createElement(\"h1\", null, \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B\"));\r\nexports.default = Contacts;\r\n\n\n//# sourceURL=webpack:///./src/client/components/pages/Contacts.tsx?");

/***/ }),

/***/ "./src/client/components/pages/Main.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/pages/Main.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst style_scss_1 = __importDefault(__webpack_require__(/*! ../templates/default/style.scss */ \"./src/client/components/templates/default/style.scss\"));\r\nconst ErrorHandler_component_1 = __importDefault(__webpack_require__(/*! ../Errors/ErrorHandler/ErrorHandler.component */ \"./src/client/components/Errors/ErrorHandler/ErrorHandler.component.tsx\"));\r\nconst Paragraph_component_1 = __importDefault(__webpack_require__(/*! ../atoms/Paragraph/Paragraph.component */ \"./src/client/components/atoms/Paragraph/Paragraph.component.tsx\"));\r\nconst Button_container_1 = __importDefault(__webpack_require__(/*! ../atoms/Button/Button.container */ \"./src/client/components/atoms/Button/Button.container.tsx\"));\r\nconst Clickable_component_1 = __webpack_require__(/*! ../atoms/Clickable/Clickable.component */ \"./src/client/components/atoms/Clickable/Clickable.component.tsx\");\r\nconst Stepper_component_1 = __importDefault(__webpack_require__(/*! ../molecules/Stepper/Stepper.component */ \"./src/client/components/molecules/Stepper/Stepper.component.tsx\"));\r\nconst Card_container_1 = __importDefault(__webpack_require__(/*! ../molecules/Card/Card.container */ \"./src/client/components/molecules/Card/Card.container.tsx\"));\r\nconst Button_types_1 = __webpack_require__(/*! ../atoms/Button/Button.types */ \"./src/client/components/atoms/Button/Button.types.ts\");\r\nconst Replace_1 = __importDefault(__webpack_require__(/*! ../transitions/Replace/Replace */ \"./src/client/components/transitions/Replace/Replace.tsx\"));\r\nconst Main = () => (react_1.default.createElement(\"section\", { className: style_scss_1.default.wrap },\r\n    react_1.default.createElement(\"div\", { className: style_scss_1.default.default },\r\n        react_1.default.createElement(ErrorHandler_component_1.default, null,\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"h1\", null, \"\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F\"),\r\n                react_1.default.createElement(Paragraph_component_1.default, null, \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\"),\r\n                react_1.default.createElement(Clickable_component_1.Clickable, null,\r\n                    react_1.default.createElement(Button_container_1.default, null, \"Button\"))),\r\n            react_1.default.createElement(Replace_1.default, { renderToggleIn: (handleToggle) => (react_1.default.createElement(Stepper_component_1.default, { steps: [\r\n                        {\r\n                            status: 'process',\r\n                        },\r\n                        {\r\n                            status: 'wait',\r\n                        },\r\n                        {\r\n                            status: 'wait',\r\n                        },\r\n                        {\r\n                            status: 'wait',\r\n                        },\r\n                    ], contentNodes: [\r\n                        react_1.default.createElement(\"div\", null,\r\n                            react_1.default.createElement(\"h2\", null, \"Step 1\"),\r\n                            react_1.default.createElement(\"p\", null, \"Bla bla bla 1\")),\r\n                        react_1.default.createElement(\"div\", null,\r\n                            react_1.default.createElement(\"h2\", null, \"Step 2\"),\r\n                            react_1.default.createElement(\"p\", null, \"Bla bla bla 2\")),\r\n                        react_1.default.createElement(\"div\", null,\r\n                            react_1.default.createElement(\"h2\", null, \"Step 3\"),\r\n                            react_1.default.createElement(\"p\", null, \"Bla bla bla 3\")),\r\n                        react_1.default.createElement(\"div\", null,\r\n                            react_1.default.createElement(\"h2\", null, \"Step 3\"),\r\n                            react_1.default.createElement(\"p\", null, \"Bla bla bla 3\")),\r\n                    ], onFinish: handleToggle })), togglesOut: [\r\n                    react_1.default.createElement(Card_container_1.default\r\n                    // imgSrc=\"https://cdn.quasar.dev/img/parallax2.jpg\"\r\n                    , { \r\n                        // imgSrc=\"https://cdn.quasar.dev/img/parallax2.jpg\"\r\n                        overline: \"Overline\", actions: [\r\n                            react_1.default.createElement(Button_container_1.default, { size: Button_types_1.ButtonSizes.SMALL }, \"Action 1\"),\r\n                            react_1.default.createElement(Button_container_1.default, { size: Button_types_1.ButtonSizes.SMALL }, \"Action 2\"),\r\n                        ] }, \"Card\"),\r\n                    react_1.default.createElement(Card_container_1.default\r\n                    // imgSrc=\"https://cdn.quasar.dev/img/parallax2.jpg\"\r\n                    , { \r\n                        // imgSrc=\"https://cdn.quasar.dev/img/parallax2.jpg\"\r\n                        overline: \"Overline\", actions: [\r\n                            react_1.default.createElement(Button_container_1.default, { size: Button_types_1.ButtonSizes.SMALL }, \"Action 1\"),\r\n                            react_1.default.createElement(Button_container_1.default, { size: Button_types_1.ButtonSizes.SMALL }, \"Action 2\"),\r\n                        ] }, \"Card\"),\r\n                    react_1.default.createElement(Card_container_1.default\r\n                    // imgSrc=\"https://cdn.quasar.dev/img/parallax2.jpg\"\r\n                    , { \r\n                        // imgSrc=\"https://cdn.quasar.dev/img/parallax2.jpg\"\r\n                        overline: \"Overline\", actions: [\r\n                            react_1.default.createElement(Button_container_1.default, { size: Button_types_1.ButtonSizes.SMALL }, \"Action 1\"),\r\n                            react_1.default.createElement(Button_container_1.default, { size: Button_types_1.ButtonSizes.SMALL }, \"Action 2\"),\r\n                        ] }, \"Card\"),\r\n                ] })))));\r\nexports.default = Main;\r\n\n\n//# sourceURL=webpack:///./src/client/components/pages/Main.tsx?");

/***/ }),

/***/ "./src/client/components/templates/default/style.scss":
/*!************************************************************!*\
  !*** ./src/client/components/templates/default/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"default\":\"TEbBXvmazlU75GwKx2am8\",\"wrap\":\"_1IiKuDGYdIcWOY1z3AjY04\"};\n\n//# sourceURL=webpack:///./src/client/components/templates/default/style.scss?");

/***/ }),

/***/ "./src/client/components/transitions/Fade/Fade.tsx":
/*!*********************************************************!*\
  !*** ./src/client/components/transitions/Fade/Fade.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nconst style_scss_1 = __importDefault(__webpack_require__(/*! ./style.scss */ \"./src/client/components/transitions/Fade/style.scss\"));\r\nconst defaultProps = {\r\n    duration: 500,\r\n};\r\nconst Fade = (props) => {\r\n    const { children, duration, items, renderChildren, } = props;\r\n    const [visible, setVisible] = react_1.useState(true);\r\n    function handleClose() {\r\n        setVisible(false);\r\n    }\r\n    if (renderChildren) {\r\n        return (react_1.default.createElement(react_transition_group_1.CSSTransition, { classNames: Object.assign({}, style_scss_1.default), in: visible, timeout: duration, unmountOnExit: true, appear: true }, renderChildren(handleClose)));\r\n    }\r\n    if (children) {\r\n        return (react_1.default.createElement(react_transition_group_1.TransitionGroup, { component: null, appear: true },\r\n            react_1.default.createElement(react_transition_group_1.CSSTransition, { timeout: duration, classNames: Object.assign({}, style_scss_1.default) }, children)));\r\n    }\r\n    if (items) {\r\n        return (react_1.default.createElement(react_transition_group_1.TransitionGroup, { component: null, appear: true }, items.map((item) => {\r\n            const { id, component } = item;\r\n            return (react_1.default.createElement(react_transition_group_1.CSSTransition, { timeout: duration, classNames: Object.assign({}, style_scss_1.default), key: id }, component));\r\n        })));\r\n    }\r\n    return null;\r\n};\r\nFade.defaultProps = defaultProps;\r\nFade.displayName = 'FadeTransition';\r\nexports.default = Fade;\r\n\n\n//# sourceURL=webpack:///./src/client/components/transitions/Fade/Fade.tsx?");

/***/ }),

/***/ "./src/client/components/transitions/Fade/style.scss":
/*!***********************************************************!*\
  !*** ./src/client/components/transitions/Fade/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"appear\":\"_1M0j1QU1LAc6b-rnKkYLih\",\"appearActive\":\"_1EtReodQ0llW24QWqriLpm\",\"exit\":\"_3vQ7CAK8V2_gUtKxwZALLI\",\"exitActive\":\"ph6JwUJxSHiAkR4p86cck\"};\n\n//# sourceURL=webpack:///./src/client/components/transitions/Fade/style.scss?");

/***/ }),

/***/ "./src/client/components/transitions/Replace/Replace.tsx":
/*!***************************************************************!*\
  !*** ./src/client/components/transitions/Replace/Replace.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nconst style_scss_1 = __importDefault(__webpack_require__(/*! ./style.scss */ \"./src/client/components/transitions/Replace/style.scss\"));\r\nconst animations_1 = __webpack_require__(/*! ../../../common/animations */ \"./src/client/common/animations.ts\");\r\nconst defaultProps = {\r\n    animationType: animations_1.Animations.FORWARD,\r\n    startOffMs: 500,\r\n};\r\nconst Replace = (props) => {\r\n    const { animationType, renderToggleIn, startOffMs, togglesOut, } = props;\r\n    const [toggles, setToggles] = react_1.useState([\r\n        { isVisible: true, render: renderToggleIn },\r\n        ...togglesOut.map((component) => ({ isVisible: false, render: () => component })),\r\n    ]);\r\n    function handleToggle() {\r\n        // eslint-disable-next-line arrow-body-style\r\n        setToggles((state) => state.map((toggle) => {\r\n            return Object.assign(Object.assign({}, toggle), { isVisible: !toggle.isVisible });\r\n        }));\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: style_scss_1.default.wrapper }, toggles.map((toggle, index) => {\r\n        const animationStep = index + 1;\r\n        const transitionClass = style_scss_1.default[`${animationType}-${animationStep}`];\r\n        return (react_1.default.createElement(react_transition_group_1.CSSTransition, { in: toggle.isVisible, classNames: {\r\n                enter: style_scss_1.default.enter,\r\n                enterActive: classnames_1.default(style_scss_1.default[`enterActive-${animationStep}`], transitionClass),\r\n                exit: style_scss_1.default.exit,\r\n                exitActive: style_scss_1.default[`exitActive-${animationStep}`],\r\n            }, timeout: startOffMs * animationStep, mountOnEnter: true, unmountOnExit: true },\r\n            react_1.default.createElement(\"div\", { className: style_scss_1.default.toggleElement }, toggle.render(handleToggle))));\r\n    })));\r\n};\r\nReplace.defaultProps = defaultProps;\r\nReplace.displayName = 'ReplaceAnimation';\r\nexports.default = Replace;\r\n\n\n//# sourceURL=webpack:///./src/client/components/transitions/Replace/Replace.tsx?");

/***/ }),

/***/ "./src/client/components/transitions/Replace/style.scss":
/*!**************************************************************!*\
  !*** ./src/client/components/transitions/Replace/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"enter\":\"_2QnyvPkx1S0nLXKUZdhgJY\",\"exit\":\"_2dWgHt8m23AD2ACApHcIQh\",\"enterActive-1\":\"_1PU2XPPuILP7UWKFXiv5Nz\",\"forward-1\":\"LNi-K7j_VtIDnCFqTLEjY\",\"default-1\":\"_3tpDbYMnhJB-_LRbkP8Rkx\",\"burst-1\":\"_3wnkisj9TLAEhcMDup95eI\",\"exitActive-1\":\"_3mnRlIYoeamcmNOdySmTp8\",\"enterActive-2\":\"_1qELgg-DJKVD4KLhyBnTLO\",\"forward-2\":\"_3tliryWdLDJ00_mfkLvTXK\",\"default-2\":\"_3wBcBE92i6fZfS1iaSsbxn\",\"burst-2\":\"_2-NTXLufpRBg_OT8HvZTM1\",\"exitActive-2\":\"_1Kq6Kvlk1jiJAwMkmKKGPL\",\"enterActive-3\":\"_2VXcnMOLdVvoSmQho-qCNT\",\"forward-3\":\"_3OvnVcDZgXOUjIVpiji4z_\",\"default-3\":\"_2jl--YQzP5D_JYK6L9Y-Q3\",\"burst-3\":\"UTHMd7JjCEWldtOBswMtv\",\"exitActive-3\":\"_20MdXdBqphz6oSBggKxNQ2\",\"enterActive-4\":\"_2D4qrGptyafTpmUVuof13J\",\"forward-4\":\"_235kJwy2Hs3SBB6aWBN0zO\",\"default-4\":\"E5SGFLmApxwBd40m33zza\",\"burst-4\":\"_1eV35FZPqOSMKFPr8Q_8sQ\",\"exitActive-4\":\"_2YHpApyEVxkG8PeoS1GhXG\",\"enterActive-5\":\"_2WxbYvbud8tq7m8x0-255L\",\"forward-5\":\"_28cDxRcwR6FXpHokO8MNhK\",\"default-5\":\"PL_23CcsoRld9YxMFq4tb\",\"burst-5\":\"_2k4mTl3dyMmT9xivEKBk3d\",\"exitActive-5\":\"_bTgTCprpcLC7WA-Z38Pj\",\"wrapper\":\"_17Ms1ChTuep3vA8R9ydc_2\",\"toggleElement\":\"_1zw8nNZ9SVksNo7jBVlnNx\"};\n\n//# sourceURL=webpack:///./src/client/components/transitions/Replace/style.scss?");

/***/ }),

/***/ "./src/client/localization/actions.ts":
/*!********************************************!*\
  !*** ./src/client/localization/actions.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_redux_i18n_1 = __webpack_require__(/*! react-redux-i18n */ \"react-redux-i18n\");\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/client/localization/config.ts\");\r\nfunction setLocaleWithFallback(dispatch) {\r\n    return (desiredLocale) => {\r\n        const finalLocale = Object.keys(config_1.supportedLocales).includes(desiredLocale)\r\n            ? desiredLocale\r\n            : config_1.fallbackLocale;\r\n        react_redux_i18n_1.setLocale(finalLocale)(dispatch);\r\n    };\r\n}\r\nexports.setLocaleWithFallback = setLocaleWithFallback;\r\n\n\n//# sourceURL=webpack:///./src/client/localization/actions.ts?");

/***/ }),

/***/ "./src/client/localization/config.ts":
/*!*******************************************!*\
  !*** ./src/client/localization/config.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.supportedLocales = {\r\n    en: 'English',\r\n    ru: 'Russian',\r\n};\r\nexports.fallbackLocale = 'en';\r\n\n\n//# sourceURL=webpack:///./src/client/localization/config.ts?");

/***/ }),

/***/ "./src/client/localization/index.ts":
/*!******************************************!*\
  !*** ./src/client/localization/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/localization/actions.ts\");\r\nexports.setLocaleWithFallback = actions_1.setLocaleWithFallback;\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/client/localization/config.ts\");\r\nexports.supportedLocales = config_1.supportedLocales;\r\nconst translations_1 = __webpack_require__(/*! ./translations */ \"./src/client/localization/translations.ts\");\r\nexports.translations = translations_1.translations;\r\n\n\n//# sourceURL=webpack:///./src/client/localization/index.ts?");

/***/ }),

/***/ "./src/client/localization/translations.ts":
/*!*************************************************!*\
  !*** ./src/client/localization/translations.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.translations = {\r\n    en: {\r\n        nav: {\r\n            about: 'About us',\r\n            contacts: 'Contacts',\r\n            main: 'Main',\r\n        },\r\n        settings: {\r\n            language: 'Language',\r\n            nightMode: 'Night Mode',\r\n            textSize: 'Text Size',\r\n        },\r\n    },\r\n    ru: {\r\n        nav: {\r\n            about: 'О нас',\r\n            contacts: 'Контакты',\r\n            main: 'Главная',\r\n        },\r\n        settings: {\r\n            language: 'Язык',\r\n            nightMode: 'Ночной режим',\r\n            textSize: 'Размер текста',\r\n        },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/localization/translations.ts?");

/***/ }),

/***/ "./src/client/routes/routes.tsx":
/*!**************************************!*\
  !*** ./src/client/routes/routes.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst AboutUs_1 = __importDefault(__webpack_require__(/*! ../components/pages/AboutUs */ \"./src/client/components/pages/AboutUs.tsx\"));\r\nconst Contacts_1 = __importDefault(__webpack_require__(/*! ../components/pages/Contacts */ \"./src/client/components/pages/Contacts.tsx\"));\r\nconst Main_1 = __importDefault(__webpack_require__(/*! ../components/pages/Main */ \"./src/client/components/pages/Main.tsx\"));\r\nconst routes_types_1 = __webpack_require__(/*! ./routes.types */ \"./src/client/routes/routes.types.ts\");\r\nexports.listItems = [\r\n    { link: routes_types_1.ROUTE_WAYS.BASE, title: 'nav.main' },\r\n    { link: routes_types_1.ROUTE_WAYS.ABOUT, title: 'nav.about' },\r\n    { link: routes_types_1.ROUTE_WAYS.CONTACTS, title: 'nav.contacts' },\r\n];\r\nexports.routesArr = [\r\n    {\r\n        component: Main_1.default,\r\n        isExact: true,\r\n        path: routes_types_1.ROUTE_WAYS.BASE,\r\n    },\r\n    {\r\n        component: AboutUs_1.default,\r\n        path: routes_types_1.ROUTE_WAYS.ABOUT,\r\n    },\r\n    {\r\n        component: Contacts_1.default,\r\n        path: routes_types_1.ROUTE_WAYS.CONTACTS,\r\n    },\r\n];\r\nexports.createRoutes = (routesArray) => routesArray.map((route) => {\r\n    const { component, isExact, path } = route;\r\n    return react_1.default.createElement(react_router_dom_1.Route, { key: path, path: path, component: component, exact: isExact });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/routes/routes.tsx?");

/***/ }),

/***/ "./src/client/routes/routes.types.ts":
/*!*******************************************!*\
  !*** ./src/client/routes/routes.types.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ROUTE_WAYS;\r\n(function (ROUTE_WAYS) {\r\n    ROUTE_WAYS[\"ABOUT\"] = \"/about-us\";\r\n    ROUTE_WAYS[\"BASE\"] = \"/\";\r\n    ROUTE_WAYS[\"CONTACTS\"] = \"/contacts\";\r\n})(ROUTE_WAYS = exports.ROUTE_WAYS || (exports.ROUTE_WAYS = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/routes/routes.types.ts?");

/***/ }),

/***/ "./src/client/store/reducers/rootReducer.ts":
/*!**************************************************!*\
  !*** ./src/client/store/reducers/rootReducer.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst react_redux_i18n_1 = __webpack_require__(/*! react-redux-i18n */ \"react-redux-i18n\");\r\nconst settings_1 = __webpack_require__(/*! ./settings/settings */ \"./src/client/store/reducers/settings/settings.ts\");\r\nconst users_1 = __webpack_require__(/*! ./users/users */ \"./src/client/store/reducers/users/users.ts\");\r\nexports.rootReducer = redux_1.combineReducers({\r\n    i18n: react_redux_i18n_1.i18nReducer,\r\n    settingsReducer: settings_1.settingsReducer,\r\n    usersReducer: users_1.usersReducer,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/rootReducer.ts?");

/***/ }),

/***/ "./src/client/store/reducers/settings/actions.ts":
/*!*******************************************************!*\
  !*** ./src/client/store/reducers/settings/actions.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\r\nexports.toggleThemeAction = typesafe_actions_1.createAction('TOGGLE_THEME', (themeName) => themeName)();\r\nexports.toggleTextSizeAction = typesafe_actions_1.createAction('TOGGLE_TEXT_SIZE', (size) => size)();\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/settings/actions.ts?");

/***/ }),

/***/ "./src/client/store/reducers/settings/selectors.ts":
/*!*********************************************************!*\
  !*** ./src/client/store/reducers/settings/selectors.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst reselect_1 = __webpack_require__(/*! reselect */ \"reselect\");\r\nconst getSettings = (state) => state.settingsReducer;\r\nconst getLocale = (state) => state.i18n.locale;\r\nexports.getActiveTheme = reselect_1.createSelector(getSettings, (settings) => settings.themeName);\r\nexports.getTextSize = reselect_1.createSelector(getSettings, (settings) => settings.textSize);\r\nexports.getSelectedLocale = reselect_1.createSelector(getLocale, (locale) => locale);\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/settings/selectors.ts?");

/***/ }),

/***/ "./src/client/store/reducers/settings/settings.ts":
/*!********************************************************!*\
  !*** ./src/client/store/reducers/settings/settings.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/store/reducers/settings/actions.ts\");\r\nconst settings_1 = __webpack_require__(/*! ../../../common/settings */ \"./src/client/common/settings.ts\");\r\nconst initialState = {\r\n    textSize: 100,\r\n    themeName: settings_1.Themes.LIGHT,\r\n};\r\nexports.settingsReducer = typesafe_actions_1.createReducer(initialState)\r\n    .handleAction(actions_1.toggleThemeAction, (state, action) => (Object.assign(Object.assign({}, state), { themeName: action.payload })))\r\n    .handleAction(actions_1.toggleTextSizeAction, (state, action) => (Object.assign(Object.assign({}, state), { textSize: action.payload })));\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/settings/settings.ts?");

/***/ }),

/***/ "./src/client/store/reducers/users/actions.ts":
/*!****************************************************!*\
  !*** ./src/client/store/reducers/users/actions.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\r\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/client/store/reducers/users/types.ts\");\r\nexports.getUsersAsync = typesafe_actions_1.createAsyncAction(types_1.USERS_TYPES.GET_USERS_ASYNC_REQUEST, types_1.USERS_TYPES.GET_USERS_ASYNC_SUCCESS, types_1.USERS_TYPES.GET_USERS_ASYNC_FAILURE)();\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/users/actions.ts?");

/***/ }),

/***/ "./src/client/store/reducers/users/types.ts":
/*!**************************************************!*\
  !*** ./src/client/store/reducers/users/types.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar USERS_TYPES;\r\n(function (USERS_TYPES) {\r\n    USERS_TYPES[\"GET_USERS_ASYNC_REQUEST\"] = \"GET_USERS_ASYNC_REQUEST\";\r\n    USERS_TYPES[\"GET_USERS_ASYNC_SUCCESS\"] = \"GET_USERS_ASYNC_SUCCESS\";\r\n    USERS_TYPES[\"GET_USERS_ASYNC_FAILURE\"] = \"GET_USERS_ASYNC_FAILURE\";\r\n})(USERS_TYPES = exports.USERS_TYPES || (exports.USERS_TYPES = {}));\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/users/types.ts?");

/***/ }),

/***/ "./src/client/store/reducers/users/users.ts":
/*!**************************************************!*\
  !*** ./src/client/store/reducers/users/users.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/store/reducers/users/actions.ts\");\r\nconst initialState = {\r\n    users: null,\r\n    usersError: '',\r\n    usersLoading: false,\r\n};\r\nexports.usersReducer = typesafe_actions_1.createReducer(initialState)\r\n    .handleAction(actions_1.getUsersAsync.request, (state) => (Object.assign(Object.assign({}, state), { usersError: null, usersLoading: true })))\r\n    .handleAction(actions_1.getUsersAsync.success, (state, action) => (Object.assign(Object.assign({}, state), { users: action.payload, usersError: null, usersLoading: false })))\r\n    .handleAction(actions_1.getUsersAsync.failure, (state, action) => (Object.assign(Object.assign({}, state), { usersError: action.payload, usersLoading: false })));\r\n\n\n//# sourceURL=webpack:///./src/client/store/reducers/users/users.ts?");

/***/ }),

/***/ "./src/client/store/store.ts":
/*!***********************************!*\
  !*** ./src/client/store/store.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst redux_saga_1 = __importDefault(__webpack_require__(/*! redux-saga */ \"redux-saga\"));\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nconst react_redux_i18n_1 = __webpack_require__(/*! react-redux-i18n */ \"react-redux-i18n\");\r\nconst localization_1 = __webpack_require__(/*! ../localization */ \"./src/client/localization/index.ts\");\r\nconst rootSaga_1 = __importDefault(__webpack_require__(/*! ../api/sagas/rootSaga */ \"./src/client/api/sagas/rootSaga.ts\"));\r\nconst rootReducer_1 = __webpack_require__(/*! ./reducers/rootReducer */ \"./src/client/store/reducers/rootReducer.ts\");\r\nconst sagaMiddleware = redux_saga_1.default();\r\nconst store = redux_1.createStore(rootReducer_1.rootReducer, {}, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(sagaMiddleware)));\r\nreact_redux_i18n_1.syncTranslationWithStore(store);\r\nreact_redux_i18n_1.loadTranslations(localization_1.translations)(store.dispatch);\r\nreact_redux_i18n_1.setLocale('en')(store.dispatch);\r\nsagaMiddleware.run(rootSaga_1.default);\r\nexports.default = store;\r\n\n\n//# sourceURL=webpack:///./src/client/store/store.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nconst App_1 = __importDefault(__webpack_require__(/*! ../client/App */ \"./src/client/App.tsx\"));\r\nconst server = express_1.default();\r\nserver.use(express_1.default.static('build'));\r\nserver.set('view engine', 'ejs');\r\nserver.set('views', './src/server/views');\r\nserver.get('/', (_, res) => {\r\n    const app = server_1.renderToString(react_1.createElement(App_1.default));\r\n    res.render('index', { app });\r\n});\r\n// eslint-disable-next-line no-console\r\nserver.listen(3000, () => console.log('Example app listening on port 3000!'));\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "@tippyjs/react":
/*!*********************************!*\
  !*** external "@tippyjs/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@tippyjs/react\");\n\n//# sourceURL=webpack:///external_%22@tippyjs/react%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "rc-steps":
/*!***************************!*\
  !*** external "rc-steps" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rc-steps\");\n\n//# sourceURL=webpack:///external_%22rc-steps%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dropdown\");\n\n//# sourceURL=webpack:///external_%22react-dropdown%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-redux-i18n":
/*!***********************************!*\
  !*** external "react-redux-i18n" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux-i18n\");\n\n//# sourceURL=webpack:///external_%22react-redux-i18n%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-toggle":
/*!*******************************!*\
  !*** external "react-toggle" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toggle\");\n\n//# sourceURL=webpack:///external_%22react-toggle%22?");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");\n\n//# sourceURL=webpack:///external_%22react-transition-group%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ }),

/***/ "typesafe-actions":
/*!***********************************!*\
  !*** external "typesafe-actions" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typesafe-actions\");\n\n//# sourceURL=webpack:///external_%22typesafe-actions%22?");

/***/ })

/******/ });