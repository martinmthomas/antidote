function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'antidote';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_analysis_details_analysis_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/analysis-details/analysis-details.component */
    "./src/app/components/analysis-details/analysis-details.component.ts");
    /* harmony import */


    var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/tasks/tasks.component */
    "./src/app/components/tasks/tasks.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _components_analyses_chart_analyses_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/analyses-chart/analyses-chart.component */
    "./src/app/components/analyses-chart/analyses-chart.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], // HttpClientInMemoryWebApiModule.forRoot(
      //   InMemoryDataService, { dataEncapsulation: false }
      // ),
      ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_analysis_details_analysis_details_component__WEBPACK_IMPORTED_MODULE_6__["AnalysisDetailsComponent"], _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_analyses_chart_analyses_chart_component__WEBPACK_IMPORTED_MODULE_11__["AnalysesChartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], // HttpClientInMemoryWebApiModule.forRoot(
        //   InMemoryDataService, { dataEncapsulation: false }
        // ),
        ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_analysis_details_analysis_details_component__WEBPACK_IMPORTED_MODULE_6__["AnalysisDetailsComponent"], _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_analyses_chart_analyses_chart_component__WEBPACK_IMPORTED_MODULE_11__["AnalysesChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], // HttpClientInMemoryWebApiModule.forRoot(
          //   InMemoryDataService, { dataEncapsulation: false }
          // ),
          ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/models/task-status-enum.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/models/task-status-enum.ts ***!
    \***************************************************/

  /*! exports provided: TaskStatusEnum */

  /***/
  function srcAppCommonModelsTaskStatusEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskStatusEnum", function () {
      return TaskStatusEnum;
    });

    var TaskStatusEnum;

    (function (TaskStatusEnum) {
      TaskStatusEnum[TaskStatusEnum["None"] = 0] = "None";
      TaskStatusEnum[TaskStatusEnum["CleanStateStarted"] = 1] = "CleanStateStarted";
      TaskStatusEnum[TaskStatusEnum["CleanStateCompleted"] = 2] = "CleanStateCompleted";
      TaskStatusEnum[TaskStatusEnum["AnalysisStarted"] = 3] = "AnalysisStarted";
      TaskStatusEnum[TaskStatusEnum["AnalysisCompleted"] = 4] = "AnalysisCompleted";
      TaskStatusEnum[TaskStatusEnum["AntidoteGenStarted"] = 5] = "AntidoteGenStarted";
      TaskStatusEnum[TaskStatusEnum["AntidoteGenCompleted"] = 6] = "AntidoteGenCompleted";
    })(TaskStatusEnum || (TaskStatusEnum = {}));
    /***/

  },

  /***/
  "./src/app/components/analyses-chart/analyses-chart.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/analyses-chart/analyses-chart.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AnalysesChartComponent */

  /***/
  function srcAppComponentsAnalysesChartAnalysesChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalysesChartComponent", function () {
      return AnalysesChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chartjs-plugin-datalabels */
    "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
    /* harmony import */


    var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var AnalysesChartComponent = /*#__PURE__*/function () {
      function AnalysesChartComponent(taskService) {
        _classCallCheck(this, AnalysesChartComponent);

        this.taskService = taskService;
        this.pieChartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top'
          },
          plugins: {
            datalabels: {
              formatter: function formatter(value, ctx) {
                var label = ctx.chart.data.datasets[0].data[ctx.dataIndex];
                return label;
              }
            }
          }
        };
        this.pieChartLabels = ['Empty'];
        this.pieChartData = [100];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__];
        this.pieChartColors = [{
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
        }];
      }

      _createClass(AnalysesChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.taskService.getChartData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            _this.pieChartLabels = data.labels;
            _this.pieChartData = data.values;
          })).subscribe();
        }
      }]);

      return AnalysesChartComponent;
    }();

    AnalysesChartComponent.ɵfac = function AnalysesChartComponent_Factory(t) {
      return new (t || AnalysesChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]));
    };

    AnalysesChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalysesChartComponent,
      selectors: [["app-analyses-chart"]],
      decls: 4,
      vars: 7,
      consts: [[1, "chart"], ["baseChart", "", "width", "300", "height", "300", 3, "data", "labels", "chartType", "options", "plugins", "colors", "legend"]],
      template: function AnalysesChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("options", ctx.pieChartOptions)("plugins", ctx.pieChartPlugins)("colors", ctx.pieChartColors)("legend", ctx.pieChartLegend);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hbHlzZXMtY2hhcnQvYW5hbHlzZXMtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysesChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analyses-chart',
          templateUrl: './analyses-chart.component.html',
          styleUrls: ['./analyses-chart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/analysis-details/analysis-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/analysis-details/analysis-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AnalysisDetailsComponent */

  /***/
  function srcAppComponentsAnalysisDetailsAnalysisDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalysisDetailsComponent", function () {
      return AnalysisDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AnalysisDetailsComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var analyis_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, analyis_r1.date, "dd-MM-yyyy hh:mm:ss.SSS"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](analyis_r1.description);
      }
    }

    var AnalysisDetailsComponent = /*#__PURE__*/function () {
      function AnalysisDetailsComponent(taskService) {
        _classCallCheck(this, AnalysisDetailsComponent);

        this.taskService = taskService;
      }

      _createClass(AnalysisDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.analyses$ = this.taskService.getAnalyses();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return AnalysisDetailsComponent;
    }();

    AnalysisDetailsComponent.ɵfac = function AnalysisDetailsComponent_Factory(t) {
      return new (t || AnalysisDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
    };

    AnalysisDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalysisDetailsComponent,
      selectors: [["app-analysis-details"]],
      decls: 5,
      vars: 3,
      consts: [[1, "viewer"], ["class", "list-unstyled", 4, "ngFor", "ngForOf"], [1, "list-unstyled"], [1, "col-sm-3", "pr-5"]],
      template: function AnalysisDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnalysisDetailsComponent_li_3_Template, 6, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.analyses$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".viewer[_ngcontent-%COMP%] {\n  margin: 10px 15px;\n  padding-left: 5px;\n  padding-top: 5px;\n  border: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.12);\n  background-color: #4a4242;\n  color: #f3dada;\n  font-family: monospace;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmFseXNpcy1kZXRhaWxzL0U6XFxQcm9qZWN0c1xcQW50aWRvdGVHZW5lcmF0b3JcXHVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbmFseXNpcy1kZXRhaWxzXFxhbmFseXNpcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FuYWx5c2lzLWRldGFpbHMvYW5hbHlzaXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbmFseXNpcy1kZXRhaWxzL2FuYWx5c2lzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld2VyIHtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0MjQyO1xyXG4gICAgY29sb3I6ICNmM2RhZGE7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn0iLCIudmlld2VyIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0MjQyO1xuICBjb2xvcjogI2YzZGFkYTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analysis-details',
          templateUrl: './analysis-details.component.html',
          styleUrls: ['./analysis-details.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 2,
      vars: 0,
      consts: [[1, "logo-container", "pl-3", "py-3", "mb-5"], ["src", "assets/logo4.jpg", 1, "logo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo[_ngcontent-%COMP%] {\n  width: 270px;\n  top: 0%;\n}\n.logo-container[_ngcontent-%COMP%] {\n  background-color: #a19a9aff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRTpcXFByb2plY3RzXFxBbnRpZG90ZUdlbmVyYXRvclxcdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtBQ0NKO0FEQ0k7RUFDSSwyQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgdG9wOiAwJTtcclxuXHJcbiAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExOWE5YWZmO1xyXG4gICAgfVxyXG59IiwiLmxvZ28ge1xuICB3aWR0aDogMjcwcHg7XG4gIHRvcDogMCU7XG59XG4ubG9nby1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE5YTlhZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tasks/tasks.component */
    "./src/app/components/tasks/tasks.component.ts");
    /* harmony import */


    var _analysis_details_analysis_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../analysis-details/analysis-details.component */
    "./src/app/components/analysis-details/analysis-details.component.ts");
    /* harmony import */


    var _analyses_chart_analyses_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../analyses-chart/analyses-chart.component */
    "./src/app/components/analyses-chart/analyses-chart.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 0,
      consts: [[1, "row", "mr-0"], [1, "col-md-8"], [1, "col-md-4"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-analysis-details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-analyses-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__["TasksComponent"], _analysis_details_analysis_details_component__WEBPACK_IMPORTED_MODULE_2__["AnalysisDetailsComponent"], _analyses_chart_analyses_chart_component__WEBPACK_IMPORTED_MODULE_3__["AnalysesChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tasks/tasks.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/tasks/tasks.component.ts ***!
    \*****************************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppComponentsTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/common/models/task-status-enum */
    "./src/app/common/models/task-status-enum.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function TasksComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload Virus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_ng_template_9_Template_button_click_3_listener() {
          var modal_r2 = ctx.$implicit;
          return modal_r2.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Virus File");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TasksComponent_ng_template_9_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.fileSelected($event.target.files);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_ng_template_9_Template_button_click_17_listener() {
          var modal_r2 = ctx.$implicit;
          return modal_r2.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!!ctx_r1.selectedFile ? ctx_r1.selectedFile.name : "Choose file");
      }
    }

    var TasksComponent = /*#__PURE__*/function () {
      function TasksComponent(taskService, modalService) {
        _classCallCheck(this, TasksComponent);

        this.taskService = taskService;
        this.modalService = modalService;
      }

      _createClass(TasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.taskService.getStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (status) {
            return _this2.taskStatus = status;
          })).subscribe();
        }
      }, {
        key: "restoreCleanState",
        value: function restoreCleanState() {
          this.taskService.restoreCleanState().subscribe();
        }
      }, {
        key: "openModal",
        value: function openModal(fileUpload) {
          var _self = this;

          this.modalService.open(fileUpload).result.then(function (result) {
            _self.uploadFile();
          }, function (reject) {});
        }
      }, {
        key: "fileSelected",
        value: function fileSelected(files) {
          if (!!files && files.length > 0) {
            this.selectedFile = files[0];
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile() {
          this.taskService.uploadVirus(this.selectedFile.name).subscribe();
        }
      }, {
        key: "createAntidote",
        value: function createAntidote() {
          this.taskService.createAntidote().subscribe();
        }
      }, {
        key: "enableCleanStateBtn",
        get: function get() {
          return this.taskStatus == src_app_common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].None || this.taskStatus == src_app_common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].AntidoteGenCompleted;
        }
      }, {
        key: "enableStartAnalysisBtn",
        get: function get() {
          return this.taskStatus == src_app_common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].CleanStateCompleted;
        }
      }, {
        key: "enableAntidoteGenBtn",
        get: function get() {
          return this.taskStatus == src_app_common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].AnalysisCompleted;
        }
      }]);

      return TasksComponent;
    }();

    TasksComponent.ɵfac = function TasksComponent_Factory(t) {
      return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TasksComponent,
      selectors: [["app-tasks"]],
      decls: 11,
      vars: 6,
      consts: [[1, "stepper-container", "col-sm-12", "col-md-6"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "horizontal-line"], ["fileUpload", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "upload"], [1, "input-group", "mb-3"], [1, "custom-file"], ["type", "file", "id", "chooseFile", 1, "custom-file-input", 3, "change"], ["for", "chooseFile", 1, "custom-file-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
      template: function TasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_1_listener() {
            return ctx.restoreCleanState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clean State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.openModal(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start Analysis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_7_listener() {
            return ctx.createAntidote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Antidote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TasksComponent_ng_template_9_Template, 19, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-secondary", !ctx.enableCleanStateBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-secondary", !ctx.enableStartAnalysisBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-secondary", !ctx.enableAntidoteGenBtn);
        }
      },
      styles: [".stepper-container[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n  border-top-style: solid;\n  flex: auto;\n  height: 0;\n  margin: 0 16px;\n  min-width: 32px;\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9FOlxcUHJvamVjdHNcXEFudGlkb3RlR2VuZXJhdG9yXFx1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGFza3NcXHRhc2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHBlci1jb250YWluZXIge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1saW5lIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgbWluLXdpZHRoOiAzMnB4O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xyXG59IiwiLnN0ZXBwZXItY29udGFpbmVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvcml6b250YWwtbGluZSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGZsZXg6IGF1dG87XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIG1pbi13aWR0aDogMzJweDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tasks',
          templateUrl: './tasks.component.html',
          styleUrls: ['./tasks.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/task.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/task.service.ts ***!
    \******************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppServicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/models/task-status-enum */
    "./src/app/common/models/task-status-enum.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TaskService = /*#__PURE__*/function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
        this.baseUrl = "http://localhost:5000/api/task";
        this.taskStatusUrl = "".concat(this.baseUrl, "/status");
        this.analysesUrl = "".concat(this.baseUrl, "/analyses");
        this.cleanStateUrl = "".concat(this.baseUrl, "/cleanState");
        this.virusUploadUrl = "".concat(this.baseUrl, "/virus");
        this.antidoteUrl = "".concat(this.baseUrl, "/antidote");
        this.chartDataUrl = "".concat(this.baseUrl, "/chartdata");
        this.statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.analysesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.chartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.initSubjects();
      }

      _createClass(TaskService, [{
        key: "initSubjects",
        value: function initSubjects() {
          var _this3 = this;

          var apiCalls = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.http.get(this.taskStatusUrl), this.http.get(this.analysesUrl));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return apiCalls;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                status = _ref2[0],
                analyses = _ref2[1];

            _this3.statusSubject.next(status);

            _this3.analysesSubject.next(analyses);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                status = _ref4[0];

            return status === _common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_2__["TaskStatusEnum"].AnalysisCompleted || status === _common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_2__["TaskStatusEnum"].AntidoteGenCompleted || status === _common_models_task_status_enum__WEBPACK_IMPORTED_MODULE_2__["TaskStatusEnum"].CleanStateStarted;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return _this3.http.get(_this3.chartDataUrl);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return _this3.chartSubject.next(data);
          })).subscribe();
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          return this.statusSubject.asObservable();
        }
      }, {
        key: "getAnalyses",
        value: function getAnalyses() {
          return this.analysesSubject.asObservable();
        }
      }, {
        key: "getChartData",
        value: function getChartData() {
          return this.chartSubject.asObservable();
        }
      }, {
        key: "restoreCleanState",
        value: function restoreCleanState() {
          return this.http.post(this.cleanStateUrl, {});
        }
      }, {
        key: "uploadVirus",
        value: function uploadVirus(fileName) {
          return this.http.post("".concat(this.virusUploadUrl, "?fileName=").concat(fileName), {});
        }
      }, {
        key: "createAntidote",
        value: function createAntidote() {
          return this.http.post(this.antidoteUrl, {});
        }
      }]);

      return TaskService;
    }();

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\AntidoteGenerator\ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map