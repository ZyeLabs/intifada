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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");
channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _site_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site_motion */ "./app/javascript/site_motion.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.






_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();
document.documentElement.classList.add("has-js");
var shareStatusTimers = new WeakMap();
var responsiveHeaderFrameId = null;
var responsiveHeaderEventsBound = false;
var focusableSelector = ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "[tabindex]:not([tabindex='-1'])"].join(",");
var clearShareStatusTimer = function clearShareStatusTimer(statusNode) {
  if (!statusNode) return;
  var timer = shareStatusTimers.get(statusNode);
  if (timer) {
    window.clearTimeout(timer);
    shareStatusTimers["delete"](statusNode);
  }
};
var setShareStatus = function setShareStatus(statusNode, message) {
  if (!statusNode) return;
  clearShareStatusTimer(statusNode);
  statusNode.textContent = message;
  statusNode.classList.toggle("is-active", Boolean(message));
  if (!message) return;
  var timer = window.setTimeout(function () {
    statusNode.textContent = "";
    statusNode.classList.remove("is-active");
    shareStatusTimers["delete"](statusNode);
  }, 2800);
  shareStatusTimers.set(statusNode, timer);
};
var copyText = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(text) {
    var input;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(navigator.clipboard && navigator.clipboard.writeText)) {
            _context.n = 2;
            break;
          }
          _context.n = 1;
          return navigator.clipboard.writeText(text);
        case 1:
          return _context.a(2);
        case 2:
          input = document.createElement("textarea");
          input.value = text;
          input.setAttribute("readonly", "readonly");
          input.style.position = "absolute";
          input.style.left = "-9999px";
          document.body.appendChild(input);
          input.select();
          document.execCommand("copy");
          document.body.removeChild(input);
        case 3:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function copyText(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleShareAction = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(container, action) {
    var statusNode, shareUrl, shareTitle, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          statusNode = container.querySelector("[data-share-status]");
          shareUrl = container.dataset.shareUrl;
          shareTitle = container.dataset.shareTitle;
          if (shareUrl) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          _context2.p = 1;
          if (!(action === "native" && navigator.share)) {
            _context2.n = 3;
            break;
          }
          _context2.n = 2;
          return navigator.share({
            title: shareTitle,
            url: shareUrl
          });
        case 2:
          setShareStatus(statusNode, "Shared.");
          return _context2.a(2);
        case 3:
          _context2.n = 4;
          return copyText(shareUrl);
        case 4:
          setShareStatus(statusNode, action === "native" ? "Link copied for sharing." : "Link copied.");
          _context2.n = 7;
          break;
        case 5:
          _context2.p = 5;
          _t = _context2.v;
          if (!(_t && _t.name === "AbortError")) {
            _context2.n = 6;
            break;
          }
          return _context2.a(2);
        case 6:
          setShareStatus(statusNode, "Unable to share right now.");
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 5]]);
  }));
  return function handleShareAction(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var initializeArticleShare = function initializeArticleShare() {
  document.querySelectorAll("[data-share-url]").forEach(function (container) {
    if (container.dataset.shareInitialized === "true") return;
    container.dataset.shareInitialized = "true";
    container.querySelectorAll("[data-share-action]").forEach(function (button) {
      button.addEventListener("click", function () {
        handleShareAction(container, button.dataset.shareAction);
      });
    });
  });
};
var initializeMobileNav = function initializeMobileNav() {
  document.querySelectorAll("[data-mobile-nav]").forEach(function (header) {
    if (header.dataset.mobileNavInitialized === "true") return;
    header.dataset.mobileNavInitialized = "true";
    var toggle = header.querySelector("[data-mobile-nav-toggle]");
    var drawer = header.querySelector("[data-mobile-nav-drawer]");
    var closeButton = header.querySelector("[data-mobile-nav-close]");
    var backdrop = header.querySelector("[data-mobile-nav-backdrop]");
    var drawerLinks = header.querySelectorAll("[data-mobile-nav-link]");
    var mediaQuery = window.matchMedia("(max-width: 760px)");
    var closeDuration = 240;
    var lastFocused = null;
    var isOpen = false;
    var hideTimer = null;
    if (!toggle || !drawer || !backdrop) return;
    var getFocusable = function getFocusable() {
      return Array.from(drawer.querySelectorAll(focusableSelector));
    };
    var clearHideTimer = function clearHideTimer() {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
        hideTimer = null;
      }
    };
    var hideDrawer = function hideDrawer() {
      drawer.hidden = true;
      backdrop.hidden = true;
    };
    var closeDrawer = function closeDrawer() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$restoreFocus = _ref3.restoreFocus,
        restoreFocus = _ref3$restoreFocus === void 0 ? true : _ref3$restoreFocus,
        _ref3$immediate = _ref3.immediate,
        immediate = _ref3$immediate === void 0 ? false : _ref3$immediate;
      if (!isOpen && !immediate) return;
      isOpen = false;
      clearHideTimer();
      toggle.setAttribute("aria-expanded", "false");
      header.classList.remove("is-nav-open");
      document.body.classList.remove("site-body--nav-open");
      if (immediate) {
        hideDrawer();
      } else {
        hideTimer = window.setTimeout(function () {
          hideDrawer();
          hideTimer = null;
        }, closeDuration);
      }
      if (restoreFocus && lastFocused && document.contains(lastFocused)) {
        lastFocused.focus();
      }
    };
    var syncDesktopState = function syncDesktopState() {
      if (mediaQuery.matches) return;
      closeDrawer({
        restoreFocus: false
      });
      drawer.hidden = true;
      backdrop.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    };
    var openDrawer = function openDrawer() {
      if (!mediaQuery.matches || isOpen) return;
      lastFocused = document.activeElement;
      clearHideTimer();
      drawer.hidden = false;
      backdrop.hidden = false;
      window.requestAnimationFrame(function () {
        isOpen = true;
        toggle.setAttribute("aria-expanded", "true");
        header.classList.add("is-nav-open");
        document.body.classList.add("site-body--nav-open");
        var focusable = getFocusable();
        (focusable[0] || drawer).focus();
      });
    };
    var onKeydown = function onKeydown(event) {
      if (!isOpen) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== "Tab") return;
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    toggle.addEventListener("click", function () {
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
    closeButton === null || closeButton === void 0 || closeButton.addEventListener("click", function () {
      return closeDrawer();
    });
    drawerLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        return closeDrawer({
          restoreFocus: false
        });
      });
    });
    backdrop.addEventListener("click", function () {
      return closeDrawer({
        restoreFocus: false
      });
    });
    document.addEventListener("keydown", onKeydown);
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncDesktopState);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(syncDesktopState);
    }
    document.addEventListener("turbolinks:before-cache", function () {
      return closeDrawer({
        restoreFocus: false,
        immediate: true
      });
    });
    syncDesktopState();
  });
};
var initializeResponsiveHeader = function initializeResponsiveHeader() {
  var syncHeaderState = function syncHeaderState() {
    responsiveHeaderFrameId = null;
    var isCondensed = window.scrollY > 24;
    var root = document.documentElement;
    document.querySelectorAll("[data-mobile-nav]").forEach(function (header) {
      header.classList.toggle("is-header-condensed", isCondensed);
      root.style.setProperty("--si-header-offset", "".concat(header.offsetHeight, "px"));
    });
  };
  var requestSync = function requestSync() {
    if (responsiveHeaderFrameId !== null) return;
    responsiveHeaderFrameId = window.requestAnimationFrame(syncHeaderState);
  };
  if (!responsiveHeaderEventsBound) {
    responsiveHeaderEventsBound = true;
    window.addEventListener("scroll", requestSync, {
      passive: true
    });
    window.addEventListener("resize", requestSync);
  }
  requestSync();
};
var initializeMobileCollapses = function initializeMobileCollapses() {
  var mediaQuery = window.matchMedia("(max-width: 760px)");
  document.querySelectorAll("details[data-mobile-collapse]").forEach(function (details) {
    var applyState = function applyState() {
      details.open = !mediaQuery.matches;
    };
    if (details.dataset.mobileCollapseInitialized !== "true") {
      details.dataset.mobileCollapseInitialized = "true";
      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", applyState);
      } else if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(applyState);
      }
    }
    applyState();
  });
};
var initializeMobileStickyCtas = function initializeMobileStickyCtas() {
  var mobileMedia = window.matchMedia("(max-width: 760px)");
  document.querySelectorAll("[data-mobile-sticky-context]").forEach(function (context) {
    if (context.dataset.mobileStickyInitialized === "true") return;
    context.dataset.mobileStickyInitialized = "true";
    var target = context.querySelector("[data-mobile-sticky-target]");
    var sticky = context.querySelector("[data-mobile-sticky-cta]");
    var hideDuration = 220;
    var hideTimer = null;
    if (!target || !sticky) return;
    var applyVisibility = function applyVisibility(visible) {
      var shouldShow = mobileMedia.matches && visible;
      if (hideTimer) {
        window.clearTimeout(hideTimer);
        hideTimer = null;
      }
      if (shouldShow) {
        sticky.hidden = false;
        window.requestAnimationFrame(function () {
          sticky.classList.add("is-visible");
        });
        return;
      }
      sticky.classList.remove("is-visible");
      hideTimer = window.setTimeout(function () {
        sticky.hidden = true;
        hideTimer = null;
      }, hideDuration);
    };
    var observer = new IntersectionObserver(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
        entry = _ref5[0];
      applyVisibility(!entry.isIntersecting);
    }, {
      threshold: 0.2
    });
    observer.observe(target);
    var syncOnResize = function syncOnResize() {
      if (!mobileMedia.matches) applyVisibility(false);
    };
    if (typeof mobileMedia.addEventListener === "function") {
      mobileMedia.addEventListener("change", syncOnResize);
    } else if (typeof mobileMedia.addListener === "function") {
      mobileMedia.addListener(syncOnResize);
    }
    document.addEventListener("turbolinks:before-cache", function () {
      observer.disconnect();
      if (hideTimer) {
        window.clearTimeout(hideTimer);
        hideTimer = null;
      }
      sticky.classList.remove("is-visible");
      sticky.hidden = true;
    });
  });
};
var initializeSiteUi = function initializeSiteUi() {
  initializeArticleShare();
  initializeResponsiveHeader();
  initializeMobileNav();
  initializeMobileCollapses();
  initializeMobileStickyCtas();
  Object(_site_motion__WEBPACK_IMPORTED_MODULE_4__["initializeSiteMotion"])();
};
document.addEventListener("turbolinks:load", initializeSiteUi);
document.addEventListener("turbolinks:before-cache", _site_motion__WEBPACK_IMPORTED_MODULE_4__["teardownSiteMotion"]);

/***/ }),

/***/ "./app/javascript/site_motion.js":
/*!***************************************!*\
  !*** ./app/javascript/site_motion.js ***!
  \***************************************/
/*! exports provided: teardownSiteMotion, initializeSiteMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teardownSiteMotion", function() { return teardownSiteMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeSiteMotion", function() { return initializeSiteMotion; });
/* harmony import */ var _motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/dom/dist/animate/index.cjs.js */ "./node_modules/@motionone/dom/dist/animate/index.cjs.js");
/* harmony import */ var _motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _motionone_dom_dist_utils_stagger_cjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/dom/dist/utils/stagger.cjs.js */ "./node_modules/@motionone/dom/dist/utils/stagger.cjs.js");
/* harmony import */ var _motionone_dom_dist_utils_stagger_cjs_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_motionone_dom_dist_utils_stagger_cjs_js__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var MOBILE_BREAKPOINT = "(max-width: 760px)";
var REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
var DEFAULT_THRESHOLD = 0.15;
var MOTION_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
var SOFT_EASE = "cubic-bezier(0.25, 0.1, 0.25, 1)";
var splitRegistry = new Map();
var pageCleanupFns = [];
var globalMotionEventsBound = false;
var navigationProgress = null;
var navigationProgressBar = null;
var navigationProgressTimer = null;
var navigationProgressHideTimer = null;
var navigationProgressValue = 0;
var prefersReducedMotion = function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
};
var isMobileViewport = function isMobileViewport() {
  return window.matchMedia(MOBILE_BREAKPOINT).matches;
};
var addPageCleanup = function addPageCleanup(fn) {
  if (typeof fn === "function") pageCleanupFns.push(fn);
};
var clearAnimation = function clearAnimation(animation) {
  if (!animation) return;
  if (typeof animation.stop === "function") {
    animation.stop();
    return;
  }
  if (typeof animation.cancel === "function") {
    animation.cancel();
  }
};
var resetStyle = function resetStyle(element, properties) {
  properties.forEach(function (property) {
    element.style[property] = "";
  });
};
var clamp = function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
};
var getNumericDataset = function getNumericDataset(element, key, fallback) {
  var value = Number(element.dataset[key]);
  return Number.isFinite(value) ? value : fallback;
};
var wrapWords = function wrapWords(element) {
  if (splitRegistry.has(element)) return splitRegistry.get(element).words;
  if (element.children.length > 0) return [];
  var originalHTML = element.innerHTML;
  var originalAriaLabel = element.getAttribute("aria-label");
  var text = element.textContent || "";
  var fragments = text.split(/(\s+)/);
  var words = [];
  element.textContent = "";
  element.setAttribute("aria-label", text.trim());
  fragments.forEach(function (fragment) {
    if (!fragment) return;
    if (/^\s+$/.test(fragment)) {
      element.appendChild(document.createTextNode(fragment));
      return;
    }
    var word = document.createElement("span");
    word.className = "motion-word";
    word.setAttribute("aria-hidden", "true");
    word.textContent = fragment;
    element.appendChild(word);
    words.push(word);
  });
  splitRegistry.set(element, {
    originalHTML: originalHTML,
    originalAriaLabel: originalAriaLabel,
    words: words
  });
  return words;
};
var restoreSplitElements = function restoreSplitElements() {
  splitRegistry.forEach(function (entry, element) {
    element.innerHTML = entry.originalHTML;
    if (entry.originalAriaLabel === null) {
      element.removeAttribute("aria-label");
    } else {
      element.setAttribute("aria-label", entry.originalAriaLabel);
    }
  });
  splitRegistry.clear();
};
var prepareSvgDraw = function prepareSvgDraw(element) {
  var paths = Array.from(element.querySelectorAll("path, circle, rect, line, polyline, polygon, ellipse"));
  paths.forEach(function (path) {
    if (path.dataset.motionDrawPrepared === "true") return;
    try {
      var length = Math.max(path.getTotalLength(), 1);
      path.dataset.motionDrawPrepared = "true";
      path.dataset.motionDrawLength = "".concat(length);
      path.style.strokeDasharray = "".concat(length);
      path.style.strokeDashoffset = "".concat(length);
      path.style.opacity = "1";
    } catch (_error) {
      path.dataset.motionDrawPrepared = "skip";
    }
  });
  addPageCleanup(function () {
    paths.forEach(function (path) {
      delete path.dataset.motionDrawPrepared;
      delete path.dataset.motionDrawLength;
      path.style.strokeDasharray = "";
      path.style.strokeDashoffset = "";
      path.style.opacity = "";
    });
  });
  return paths.filter(function (path) {
    return path.dataset.motionDrawPrepared === "true";
  });
};
var prepareElement = function prepareElement(element) {
  if (element.dataset.motionPrepared === "true") return;
  var type = element.dataset.animate;
  if (type === "word-stagger") {
    var words = wrapWords(element);
    words.forEach(function (word) {
      word.style.opacity = "0";
      word.style.transform = "translate3d(0, 1.05em, 0)";
    });
    addPageCleanup(function () {
      words.forEach(function (word) {
        return resetStyle(word, ["opacity", "transform"]);
      });
    });
    element.dataset.motionPrepared = "true";
    return;
  }
  if (type === "draw-in" || element.hasAttribute("data-svg-draw")) {
    prepareSvgDraw(element);
    element.dataset.motionPrepared = "true";
    return;
  }
  if (type === "line-grow") {
    element.style.transformOrigin = "left center";
    element.style.transform = "scaleX(0)";
    element.dataset.motionPrepared = "true";
    addPageCleanup(function () {
      return resetStyle(element, ["transformOrigin", "transform"]);
    });
    return;
  }
  if (type === "clip-reveal") {
    element.style.clipPath = "inset(0 0 18% 0)";
    element.style.opacity = "0.001";
    element.style.transform = "scale(1.02)";
    element.dataset.motionPrepared = "true";
    addPageCleanup(function () {
      return resetStyle(element, ["clipPath", "opacity", "transform"]);
    });
    return;
  }
  var origin = element.dataset.animateOrigin;
  var x = type === "fade-left" ? "-24px" : type === "fade-right" ? "24px" : "0px";
  var y = type === "scale-in" ? "0px" : origin === "top" ? "-24px" : type === "fade-up" ? "24px" : "0px";
  var scale = type === "scale-in" ? "0.92" : "1";
  element.style.opacity = "0.001";
  element.style.transform = "translate3d(".concat(x, ", ").concat(y, ", 0) scale(").concat(scale, ")");
  element.dataset.motionPrepared = "true";
  addPageCleanup(function () {
    return resetStyle(element, ["opacity", "transform"]);
  });
};
var animateElement = function animateElement(element) {
  if (element.dataset.motionAnimated === "true") return;
  var type = element.dataset.animate;
  var delay = getNumericDataset(element, "animateDelay", 0);
  var animation = null;
  if (type === "word-stagger") {
    var words = wrapWords(element);
    animation = Object(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__["animate"])(words, {
      opacity: [0, 1],
      transform: ["translate3d(0, 1.05em, 0)", "translate3d(0, 0, 0)"]
    }, {
      delay: Object(_motionone_dom_dist_utils_stagger_cjs_js__WEBPACK_IMPORTED_MODULE_1__["stagger"])(0.035, {
        start: delay
      }),
      duration: 0.72,
      easing: MOTION_EASE,
      fill: "forwards"
    });
  } else if (type === "draw-in" || element.hasAttribute("data-svg-draw")) {
    var paths = prepareSvgDraw(element);
    animation = Object(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__["animate"])(paths, {
      strokeDashoffset: 0
    }, {
      delay: Object(_motionone_dom_dist_utils_stagger_cjs_js__WEBPACK_IMPORTED_MODULE_1__["stagger"])(0.06, {
        start: delay
      }),
      duration: 0.9,
      easing: MOTION_EASE,
      fill: "forwards"
    });
  } else if (type === "line-grow") {
    animation = Object(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__["animate"])(element, {
      transform: ["scaleX(0)", "scaleX(1)"]
    }, {
      delay: delay,
      duration: 0.68,
      easing: MOTION_EASE,
      fill: "forwards"
    });
  } else if (type === "clip-reveal") {
    animation = Object(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__["animate"])(element, {
      opacity: [0.001, 1],
      clipPath: ["inset(0 0 18% 0)", "inset(0 0 0% 0)"],
      transform: ["scale(1.02)", "scale(1)"]
    }, {
      delay: delay,
      duration: 0.9,
      easing: MOTION_EASE,
      fill: "forwards"
    });
  } else {
    animation = Object(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__["animate"])(element, {
      opacity: [0.001, 1],
      transform: [element.style.transform || "translate3d(0, 24px, 0)", "translate3d(0, 0, 0) scale(1)"]
    }, {
      delay: delay,
      duration: 0.62,
      easing: SOFT_EASE,
      fill: "forwards"
    });
  }
  element.dataset.motionAnimated = "true";
  addPageCleanup(function () {
    delete element.dataset.motionAnimated;
    delete element.dataset.motionPrepared;
    clearAnimation(animation);
  });
};
var observeElement = function observeElement(element, callback) {
  var threshold = getNumericDataset(element, "animateThreshold", DEFAULT_THRESHOLD);
  var once = element.dataset.animateOnce !== "false";
  var observer = new IntersectionObserver(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      entry = _ref2[0];
    if (entry.isIntersecting) {
      callback();
      if (once) observer.disconnect();
    } else if (!once) {
      delete element.dataset.motionAnimated;
      prepareElement(element);
    }
  }, {
    threshold: threshold
  });
  observer.observe(element);
  addPageCleanup(function () {
    return observer.disconnect();
  });
};
var prepareRevealGroups = function prepareRevealGroups() {
  document.querySelectorAll("[data-animate-group='stagger']").forEach(function (group) {
    var children = Array.from(group.children).filter(function (child) {
      return !child.hidden;
    });
    if (!children.length) return;
    children.forEach(function (child) {
      child.style.opacity = "0.001";
      child.style.transform = "translate3d(0, 24px, 0)";
    });
    addPageCleanup(function () {
      children.forEach(function (child) {
        return resetStyle(child, ["opacity", "transform"]);
      });
    });
    observeElement(group, function () {
      if (group.dataset.motionAnimated === "true") return;
      var delay = getNumericDataset(group, "animateDelay", 0);
      var step = isMobileViewport() ? 0.05 : 0.07;
      var animation = Object(_motionone_dom_dist_animate_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__["animate"])(children, {
        opacity: [0.001, 1],
        transform: ["translate3d(0, 24px, 0)", "translate3d(0, 0, 0)"]
      }, {
        delay: Object(_motionone_dom_dist_utils_stagger_cjs_js__WEBPACK_IMPORTED_MODULE_1__["stagger"])(step, {
          start: delay
        }),
        duration: 0.62,
        easing: SOFT_EASE,
        fill: "forwards"
      });
      group.dataset.motionAnimated = "true";
      addPageCleanup(function () {
        delete group.dataset.motionAnimated;
        clearAnimation(animation);
      });
    });
  });
};
var prepareRevealElements = function prepareRevealElements() {
  document.querySelectorAll("[data-animate]").forEach(function (element) {
    prepareElement(element);
    observeElement(element, function () {
      return animateElement(element);
    });
  });
};
var prepareArticleBodyMotion = function prepareArticleBodyMotion() {
  document.querySelectorAll(".article-detail__body h2, .article-detail__body h3, .article-detail__body blockquote").forEach(function (element) {
    if (!element.dataset.animate) element.dataset.animate = "fade-up";
    if (!element.dataset.animateThreshold) element.dataset.animateThreshold = "0.1";
  });
};
var prepareParallax = function prepareParallax() {
  if (prefersReducedMotion() || isMobileViewport()) return;
  var entries = Array.from(document.querySelectorAll("[data-parallax]")).map(function (element) {
    var target = element.querySelector("img, video, iframe") || element.firstElementChild;
    if (!target) return null;
    return {
      element: element,
      target: target,
      amount: element.dataset.parallax === "medium" ? 0.14 : 0.08
    };
  }).filter(Boolean);
  if (!entries.length) return;
  var frameId = null;
  var update = function update() {
    frameId = null;
    entries.forEach(function (_ref3) {
      var element = _ref3.element,
        target = _ref3.target,
        amount = _ref3.amount;
      var rect = element.getBoundingClientRect();
      var centerDelta = window.innerHeight / 2 - (rect.top + rect.height / 2);
      var offset = clamp(centerDelta * amount, -40, 40);
      target.style.setProperty("--si-parallax-offset", "".concat(offset.toFixed(2), "px"));
    });
  };
  var requestUpdate = function requestUpdate() {
    if (frameId !== null) return;
    frameId = window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", requestUpdate, {
    passive: true
  });
  window.addEventListener("resize", requestUpdate);
  addPageCleanup(function () {
    if (frameId !== null) window.cancelAnimationFrame(frameId);
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    entries.forEach(function (_ref4) {
      var target = _ref4.target;
      return target.style.removeProperty("--si-parallax-offset");
    });
  });
};
var ensureNavigationProgress = function ensureNavigationProgress() {
  if (navigationProgress && navigationProgressBar) return;
  navigationProgress = document.createElement("div");
  navigationProgress.className = "site-motion-progress";
  navigationProgress.setAttribute("aria-hidden", "true");
  navigationProgress.hidden = true;
  navigationProgressBar = document.createElement("span");
  navigationProgressBar.className = "site-motion-progress__bar";
  navigationProgress.appendChild(navigationProgressBar);
  document.body.appendChild(navigationProgress);
};
var setNavigationProgress = function setNavigationProgress(value) {
  ensureNavigationProgress();
  navigationProgressValue = clamp(value, 0, 1);
  navigationProgressBar.style.transform = "scaleX(".concat(navigationProgressValue, ")");
};
var clearNavigationTimers = function clearNavigationTimers() {
  if (navigationProgressTimer) {
    window.clearInterval(navigationProgressTimer);
    navigationProgressTimer = null;
  }
  if (navigationProgressHideTimer) {
    window.clearTimeout(navigationProgressHideTimer);
    navigationProgressHideTimer = null;
  }
};
var startNavigationProgress = function startNavigationProgress() {
  ensureNavigationProgress();
  clearNavigationTimers();
  navigationProgress.hidden = false;
  navigationProgress.classList.add("is-active");
  setNavigationProgress(prefersReducedMotion() ? 0.2 : 0.08);
  navigationProgressTimer = window.setInterval(function () {
    setNavigationProgress(navigationProgressValue + (navigationProgressValue < 0.45 ? 0.12 : 0.04));
    if (navigationProgressValue >= 0.82) clearNavigationTimers();
  }, 180);
};
var completeNavigationProgress = function completeNavigationProgress() {
  if (!navigationProgress || !navigationProgressBar) return;
  clearNavigationTimers();
  navigationProgress.classList.add("is-active");
  navigationProgress.hidden = false;
  setNavigationProgress(1);
  navigationProgressHideTimer = window.setTimeout(function () {
    navigationProgress.classList.remove("is-active");
    navigationProgress.hidden = true;
    setNavigationProgress(0);
  }, prefersReducedMotion() ? 40 : 260);
};
var bindNavigationProgress = function bindNavigationProgress() {
  if (globalMotionEventsBound) return;
  globalMotionEventsBound = true;
  document.addEventListener("turbolinks:visit", startNavigationProgress);
  document.addEventListener("turbolinks:before-render", function () {
    if (!navigationProgress) return;
    setNavigationProgress(Math.max(navigationProgressValue, 0.88));
  });
  document.addEventListener("turbolinks:load", completeNavigationProgress);
};
var ensureReadingProgress = function ensureReadingProgress() {
  var progress = document.querySelector(".site-reading-progress");
  if (progress) return progress;
  progress = document.createElement("div");
  progress.className = "site-reading-progress";
  progress.hidden = true;
  progress.setAttribute("aria-hidden", "true");
  var bar = document.createElement("span");
  bar.className = "site-reading-progress__bar";
  progress.appendChild(bar);
  document.body.appendChild(progress);
  return progress;
};
var prepareReadingProgress = function prepareReadingProgress() {
  var target = document.querySelector("[data-progress-target='article']");
  var progress = ensureReadingProgress();
  var bar = progress.querySelector(".site-reading-progress__bar");
  if (!target || !bar) {
    progress.hidden = true;
    return;
  }
  var frameId = null;
  var update = function update() {
    frameId = null;
    var headerOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--si-header-offset")) || 0;
    var targetTop = target.getBoundingClientRect().top + window.scrollY;
    var start = targetTop - headerOffset - 32;
    var end = targetTop + target.offsetHeight - window.innerHeight + headerOffset + 96;
    var ratio = end <= start ? 1 : clamp((window.scrollY - start) / (end - start), 0, 1);
    progress.hidden = false;
    bar.style.transform = "scaleX(".concat(ratio, ")");
  };
  var requestUpdate = function requestUpdate() {
    if (frameId !== null) return;
    frameId = window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", requestUpdate, {
    passive: true
  });
  window.addEventListener("resize", requestUpdate);
  addPageCleanup(function () {
    if (frameId !== null) window.cancelAnimationFrame(frameId);
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    progress.hidden = true;
    bar.style.transform = "scaleX(0)";
  });
};
var teardownSiteMotion = function teardownSiteMotion() {
  var cleanupFns = pageCleanupFns.slice().reverse();
  pageCleanupFns = [];
  cleanupFns.forEach(function (fn) {
    try {
      fn();
    } catch (_error) {
      // noop
    }
  });
  restoreSplitElements();
};
var initializeSiteMotion = function initializeSiteMotion() {
  teardownSiteMotion();
  bindNavigationProgress();
  prepareArticleBodyMotion();
  if (prefersReducedMotion()) {
    prepareReadingProgress();
    return;
  }
  prepareRevealGroups();
  prepareRevealElements();
  prepareParallax();
  prepareReadingProgress();
};

/***/ }),

/***/ "./node_modules/@motionone/animation/dist/Animation.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/@motionone/animation/dist/Animation.es.js ***!
  \****************************************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/easing.es.js */ "./node_modules/@motionone/animation/dist/utils/easing.es.js");


class Animation {
  constructor(output, keyframes = [0, 1], {
    easing,
    duration: initialDuration = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].duration,
    delay = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].delay,
    endDelay = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].endDelay,
    repeat = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].repeat,
    offset,
    direction = "normal",
    autoplay = true
  } = {}) {
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"];
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    easing = easing || _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].easing;
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isEasingGenerator"])(easing)) {
      const custom = easing.createAnimation(keyframes);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isEasingList"])(easing) ? _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"] : Object(_utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"])(easing);
    this.updateDuration(initialDuration);
    const interpolate$1 = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["interpolate"])(keyframes, offset, Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isEasingList"])(easing) ? easing.map(_utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"]) : _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"]);
    this.tick = timestamp => {
      var _a;
      // TODO: Temporary fix for OptionsResolver typing
      delay = delay;
      let t = 0;
      if (this.pauseTime !== undefined) {
        t = this.pauseTime;
      } else {
        t = (timestamp - this.startTime) * this.rate;
      }
      this.t = t;
      // Convert to seconds
      t /= 1000;
      // Rebase on delay
      t = Math.max(t - delay, 0);
      /**
       * If this animation has finished, set the current time
       * to the total duration.
       */
      if (this.playState === "finished" && this.pauseTime === undefined) {
        t = this.totalDuration;
      }
      /**
       * Get the current progress (0-1) of the animation. If t is >
       * than duration we'll get values like 2.5 (midway through the
       * third iteration)
       */
      const progress = t / this.duration;
      // TODO progress += iterationStart
      /**
       * Get the current iteration (0 indexed). For instance the floor of
       * 2.5 is 2.
       */
      let currentIteration = Math.floor(progress);
      /**
       * Get the current progress of the iteration by taking the remainder
       * so 2.5 is 0.5 through iteration 2
       */
      let iterationProgress = progress % 1.0;
      if (!iterationProgress && progress >= 1) {
        iterationProgress = 1;
      }
      /**
       * If iteration progress is 1 we count that as the end
       * of the previous iteration.
       */
      iterationProgress === 1 && currentIteration--;
      /**
       * Reverse progress if we're not running in "normal" direction
       */
      const iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      const latest = interpolate$1(this.easing(p));
      output(latest);
      const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
      if (isAnimationFinished) {
        this.playState = "finished";
        (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
      } else if (this.playState !== "idle") {
        this.frameRequestId = requestAnimationFrame(this.tick);
      }
    };
    if (autoplay) this.play();
  }
  play() {
    const now = performance.now();
    this.playState = "running";
    if (this.pauseTime !== undefined) {
      this.startTime = now - this.pauseTime;
    } else if (!this.startTime) {
      this.startTime = now;
    }
    this.cancelTimestamp = this.startTime;
    this.pauseTime = undefined;
    this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused";
    this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished";
    this.tick(0);
  }
  stop() {
    var _a;
    this.playState = "idle";
    if (this.frameRequestId !== undefined) {
      cancelAnimationFrame(this.frameRequestId);
    }
    (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
  }
  cancel() {
    this.stop();
    this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(duration) {
    this.duration = duration;
    this.totalDuration = duration * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    if (this.pauseTime !== undefined || this.rate === 0) {
      this.pauseTime = t;
    } else {
      this.startTime = performance.now() - t / this.rate;
    }
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(rate) {
    this.rate = rate;
  }
}


/***/ }),

/***/ "./node_modules/@motionone/animation/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/animation/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: Animation, getEasingFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animation_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation.es.js */ "./node_modules/@motionone/animation/dist/Animation.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _Animation_es_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]; });

/* harmony import */ var _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/easing.es.js */ "./node_modules/@motionone/animation/dist/utils/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEasingFunction", function() { return _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"]; });




/***/ }),

/***/ "./node_modules/@motionone/animation/dist/utils/easing.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@motionone/animation/dist/utils/easing.es.js ***!
  \*******************************************************************/
/*! exports provided: getEasingFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEasingFunction", function() { return getEasingFunction; });
/* harmony import */ var _motionone_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/easing */ "./node_modules/@motionone/easing/dist/index.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


const namedEasings = {
  ease: Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.25, 0.1, 0.25, 1.0),
  "ease-in": Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.42, 0.0, 1.0, 1.0),
  "ease-in-out": Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.42, 0.0, 0.58, 1.0),
  "ease-out": Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  // If already an easing function, return
  if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(definition)) return definition;
  // If an easing curve definition, return bezier function
  if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isCubicBezier"])(definition)) return Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(...definition);
  // If we have a predefined easing function, return
  const namedEasing = namedEasings[definition];
  if (namedEasing) return namedEasing;
  // If this is a steps function, attempt to create easing curve
  if (definition.startsWith("steps")) {
    const args = functionArgsRegex.exec(definition);
    if (args) {
      const argsArray = args[1].split(",");
      return Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["steps"])(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return _motionone_utils__WEBPACK_IMPORTED_MODULE_1__["noopReturn"];
}


/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/animate-style.cjs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/animate-style.cjs.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./data.cjs.js */ "./node_modules/@motionone/dom/dist/animate/data.cjs.js");
var cssVar = __webpack_require__(/*! ./utils/css-var.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/css-var.cjs.js");
var utils = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
var transforms = __webpack_require__(/*! ./utils/transforms.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.cjs.js");
var easing = __webpack_require__(/*! ./utils/easing.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/easing.cjs.js");
var featureDetection = __webpack_require__(/*! ./utils/feature-detection.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/feature-detection.cjs.js");
var keyframes = __webpack_require__(/*! ./utils/keyframes.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/keyframes.cjs.js");
var style = __webpack_require__(/*! ./style.cjs.js */ "./node_modules/@motionone/dom/dist/animate/style.cjs.js");
var getStyleName = __webpack_require__(/*! ./utils/get-style-name.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.cjs.js");
var stopAnimation = __webpack_require__(/*! ./utils/stop-animation.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/stop-animation.cjs.js");
var getUnit = __webpack_require__(/*! ./utils/get-unit.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-unit.cjs.js");
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
  const record = getDevToolsRecord();
  const isRecording = options.record !== false && record;
  let animation;
  let _options$duration = options.duration,
    duration = _options$duration === void 0 ? utils.defaults.duration : _options$duration,
    _options$delay = options.delay,
    delay = _options$delay === void 0 ? utils.defaults.delay : _options$delay,
    _options$endDelay = options.endDelay,
    endDelay = _options$endDelay === void 0 ? utils.defaults.endDelay : _options$endDelay,
    _options$repeat = options.repeat,
    repeat = _options$repeat === void 0 ? utils.defaults.repeat : _options$repeat,
    _options$easing = options.easing,
    easing$1 = _options$easing === void 0 ? utils.defaults.easing : _options$easing,
    _options$persist = options.persist,
    persist = _options$persist === void 0 ? false : _options$persist,
    direction = options.direction,
    offset = options.offset,
    _options$allowWebkitA = options.allowWebkitAcceleration,
    allowWebkitAcceleration = _options$allowWebkitA === void 0 ? false : _options$allowWebkitA,
    _options$autoplay = options.autoplay,
    autoplay = _options$autoplay === void 0 ? true : _options$autoplay;
  const data$1 = data.getAnimationData(element);
  const valueIsTransform = transforms.isTransform(key);
  let canAnimateNatively = featureDetection.supports.waapi();
  /**
   * If this is an individual transform, we need to map its
   * key to a CSS variable and update the element's transform style
   */
  valueIsTransform && transforms.addTransformToElement(element, key);
  const name = getStyleName.getStyleName(key);
  const motionValue = data.getMotionValue(data$1.values, name);
  /**
   * Get definition of value, this will be used to convert numerical
   * keyframes into the default value type.
   */
  const definition = transforms.transformDefinitions.get(name);
  /**
   * Stop the current animation, if any. Because this will trigger
   * commitStyles (DOM writes) and we might later trigger DOM reads,
   * this is fired now and we return a factory function to create
   * the actual animation that can get called in batch,
   */
  stopAnimation.stopAnimation(motionValue.animation, !(utils.isEasingGenerator(easing$1) && motionValue.generator) && options.record !== false);
  /**
   * Batchable factory function containing all DOM reads.
   */
  return () => {
    const readInitialValue = () => {
      var _a, _b;
      return (_b = (_a = style.style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
    };
    /**
     * Replace null values with the previous keyframe value, or read
     * it from the DOM if it's the first keyframe.
     */
    let keyframes$1 = keyframes.hydrateKeyframes(keyframes.keyframesList(keyframesDefinition), readInitialValue);
    /**
     * Detect unit type of keyframes.
     */
    const toUnit = getUnit.getUnitConverter(keyframes$1, definition);
    if (utils.isEasingGenerator(easing$1)) {
      const custom = easing$1.createAnimation(keyframes$1, key !== "opacity", readInitialValue, name, motionValue);
      easing$1 = custom.easing;
      keyframes$1 = custom.keyframes || keyframes$1;
      duration = custom.duration || duration;
    }
    /**
     * If this is a CSS variable we need to register it with the browser
     * before it can be animated natively. We also set it with setProperty
     * rather than directly onto the element.style object.
     */
    if (cssVar.isCssVar(name)) {
      if (featureDetection.supports.cssRegisterProperty()) {
        cssVar.registerCssVariable(name);
      } else {
        canAnimateNatively = false;
      }
    }
    /**
     * If we've been passed a custom easing function, and this browser
     * does **not** support linear() easing, and the value is a transform
     * (and thus a pure number) we can still support the custom easing
     * by falling back to the animation polyfill.
     */
    if (valueIsTransform && !featureDetection.supports.linearEasing() && (utils.isFunction(easing$1) || utils.isEasingList(easing$1) && easing$1.some(utils.isFunction))) {
      canAnimateNatively = false;
    }
    /**
     * If we can animate this value with WAAPI, do so.
     */
    if (canAnimateNatively) {
      /**
       * Convert numbers to default value types. Currently this only supports
       * transforms but it could also support other value types.
       */
      if (definition) {
        keyframes$1 = keyframes$1.map(value => utils.isNumber(value) ? definition.toDefaultUnit(value) : value);
      }
      /**
       * If this browser doesn't support partial/implicit keyframes we need to
       * explicitly provide one.
       */
      if (keyframes$1.length === 1 && (!featureDetection.supports.partialKeyframes() || isRecording)) {
        keyframes$1.unshift(readInitialValue());
      }
      const animationOptions = {
        delay: utils.time.ms(delay),
        duration: utils.time.ms(duration),
        endDelay: utils.time.ms(endDelay),
        easing: !utils.isEasingList(easing$1) ? easing.convertEasing(easing$1, duration) : undefined,
        direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate({
        [name]: keyframes$1,
        offset,
        easing: utils.isEasingList(easing$1) ? easing$1.map(thisEasing => easing.convertEasing(thisEasing, duration)) : undefined
      }, animationOptions);
      /**
       * Polyfill finished Promise in browsers that don't support it
       */
      if (!animation.finished) {
        animation.finished = new Promise((resolve, reject) => {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      const target = keyframes$1[keyframes$1.length - 1];
      animation.finished.then(() => {
        if (persist) return;
        // Apply styles to target
        style.style.set(element, name, target);
        // Ensure fill modes don't persist
        animation.cancel();
      }).catch(utils.noop);
      /**
       * This forces Webkit to run animations on the main thread by exploiting
       * this condition:
       * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
       *
       * This fixes Webkit's timing bugs, like accelerated animations falling
       * out of sync with main thread animations and massive delays in starting
       * accelerated animations in WKWebView.
       */
      if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
      /**
       * If we can't animate the value natively then we can fallback to the numbers-only
       * polyfill for transforms.
       */
    } else if (AnimationPolyfill && valueIsTransform) {
      /**
       * If any keyframe is a string (because we measured it from the DOM), we need to convert
       * it into a number before passing to the Animation polyfill.
       */
      keyframes$1 = keyframes$1.map(value => typeof value === "string" ? parseFloat(value) : value);
      /**
       * If we only have a single keyframe, we need to create an initial keyframe by reading
       * the current value from the DOM.
       */
      if (keyframes$1.length === 1) {
        keyframes$1.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill(latest => {
        style.style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes$1, Object.assign(Object.assign({}, options), {
        duration,
        easing: easing$1
      }));
    } else {
      const target = keyframes$1[keyframes$1.length - 1];
      style.style.set(element, name, definition && utils.isNumber(target) ? definition.toDefaultUnit(target) : target);
    }
    if (isRecording) {
      record(element, key, keyframes$1, {
        duration,
        delay: delay,
        easing: easing$1,
        repeat,
        offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    if (animation && !autoplay) animation.pause();
    return animation;
  };
}
exports.animateStyle = animateStyle;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/create-animate.cjs.js":
/*!************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/create-animate.cjs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heyListen = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
var animateStyle = __webpack_require__(/*! ./animate-style.cjs.js */ "./node_modules/@motionone/dom/dist/animate/animate-style.cjs.js");
var options = __webpack_require__(/*! ./utils/options.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/options.cjs.js");
var resolveElements = __webpack_require__(/*! ../utils/resolve-elements.cjs.js */ "./node_modules/@motionone/dom/dist/utils/resolve-elements.cjs.js");
var controls = __webpack_require__(/*! ./utils/controls.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/controls.cjs.js");
var stagger = __webpack_require__(/*! ../utils/stagger.cjs.js */ "./node_modules/@motionone/dom/dist/utils/stagger.cjs.js");
function createAnimate(AnimatePolyfill) {
  return function animate(elements, keyframes, options$1 = {}) {
    elements = resolveElements.resolveElements(elements);
    const numElements = elements.length;
    heyListen.invariant(Boolean(numElements), "No valid element provided.");
    heyListen.invariant(Boolean(keyframes), "No keyframes defined.");
    /**
     * Create and start new animations
     */
    const animationFactories = [];
    for (let i = 0; i < numElements; i++) {
      const element = elements[i];
      for (const key in keyframes) {
        const valueOptions = options.getOptions(options$1, key);
        valueOptions.delay = stagger.resolveOption(valueOptions.delay, i, numElements);
        const animation = animateStyle.animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return controls.withControls(animationFactories, options$1,
    /**
     * TODO:
     * If easing is set to spring or glide, duration will be dynamically
     * generated. Ideally we would dynamically generate this from
     * animation.effect.getComputedTiming().duration but this isn't
     * supported in iOS13 or our number polyfill. Perhaps it's possible
     * to Proxy animations returned from animateStyle that has duration
     * as a getter.
     */
    options$1.duration);
  };
}
exports.createAnimate = createAnimate;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/data.cjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/data.cjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! @motionone/types */ "./node_modules/@motionone/types/dist/index.es.js");
const data = new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new types.MotionValue());
  }
  return motionValues.get(name);
}
exports.getAnimationData = getAnimationData;
exports.getMotionValue = getMotionValue;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/index.cjs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/index.cjs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var animation = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");
var createAnimate = __webpack_require__(/*! ./create-animate.cjs.js */ "./node_modules/@motionone/dom/dist/animate/create-animate.cjs.js");
const animate = createAnimate.createAnimate(animation.Animation);
exports.animate = animate;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/style.cjs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/style.cjs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cssVar = __webpack_require__(/*! ./utils/css-var.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/css-var.cjs.js");
var getStyleName = __webpack_require__(/*! ./utils/get-style-name.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.cjs.js");
var transforms = __webpack_require__(/*! ./utils/transforms.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.cjs.js");
const style = {
  get: (element, name) => {
    name = getStyleName.getStyleName(name);
    let value = cssVar.isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    // TODO Decide if value can be 0
    if (!value && value !== 0) {
      const definition = transforms.transformDefinitions.get(name);
      if (definition) value = definition.initialValue;
    }
    return value;
  },
  set: (element, name, value) => {
    name = getStyleName.getStyleName(name);
    if (cssVar.isCssVar(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};
exports.style = style;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/controls.cjs.js":
/*!************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/controls.cjs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
var stopAnimation = __webpack_require__(/*! ./stop-animation.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/stop-animation.cjs.js");
const createAnimation = factory => factory();
const withControls = (animationFactory, options, duration = utils.defaults.duration) => {
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration,
    options
  }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
const getActiveAnimation = state => state.animations[0];
const controls = {
  get: (target, key) => {
    const activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return utils.time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished)).catch(utils.noop);
        }
        return target.finished;
      case "stop":
        return () => {
          target.animations.forEach(animation => stopAnimation.stopAnimation(animation));
        };
      case "forEachNative":
        /**
         * This is for internal use only, fire a callback for each
         * underlying animation.
         */
        return callback => {
          target.animations.forEach(animation => callback(animation, target));
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : () => target.animations.forEach(animation => animation[key]());
    }
  },
  set: (target, key, value) => {
    switch (key) {
      case "currentTime":
        value = utils.time.ms(value);
      // Fall-through
      case "playbackRate":
        for (let i = 0; i < target.animations.length; i++) {
          target.animations[i][key] = value;
        }
        return true;
    }
    return false;
  }
};
const selectFinished = animation => animation.finished;
exports.controls = controls;
exports.withControls = withControls;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/css-var.cjs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/css-var.cjs.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var transforms = __webpack_require__(/*! ./transforms.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.cjs.js");
const isCssVar = name => name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
  if (registeredProperties.has(name)) return;
  registeredProperties.add(name);
  try {
    const _ref = transforms.transformDefinitions.has(name) ? transforms.transformDefinitions.get(name) : {},
      syntax = _ref.syntax,
      initialValue = _ref.initialValue;
    CSS.registerProperty({
      name,
      inherits: false,
      syntax,
      initialValue
    });
  } catch (e) {}
}
exports.isCssVar = isCssVar;
exports.registerCssVariable = registerCssVariable;
exports.registeredProperties = registeredProperties;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/easing.cjs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/easing.cjs.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
var featureDetection = __webpack_require__(/*! ./feature-detection.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/feature-detection.cjs.js");

// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
  let points = "";
  const numPoints = Math.round(duration / resolution);
  for (let i = 0; i < numPoints; i++) {
    points += easing(utils.progress(0, numPoints - 1, i)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
  if (utils.isFunction(easing)) {
    return featureDetection.supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : utils.defaults.easing;
  } else {
    return utils.isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
  }
};
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
exports.convertEasing = convertEasing;
exports.cubicBezierAsString = cubicBezierAsString;
exports.generateLinearEasingPoints = generateLinearEasingPoints;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/feature-detection.cjs.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/feature-detection.cjs.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({
        opacity: [1]
      });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({
    opacity: [0, 1]
  }, {
    duration: 0.001
  }).finished),
  linearEasing: () => {
    try {
      testAnimation({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (e) {
      return false;
    }
    return true;
  }
};
const results = {};
const supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
  };
}
exports.supports = supports;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.cjs.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/get-style-name.cjs.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var transforms = __webpack_require__(/*! ./transforms.cjs.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.cjs.js");
function getStyleName(key) {
  if (transforms.transformAlias[key]) key = transforms.transformAlias[key];
  return transforms.isTransform(key) ? transforms.asTransformCssVar(key) : key;
}
exports.getStyleName = getStyleName;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/get-unit.cjs.js":
/*!************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/get-unit.cjs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
function getUnitConverter(keyframes, definition) {
  var _a;
  let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || utils.noopReturn;
  const finalKeyframe = keyframes[keyframes.length - 1];
  if (utils.isString(finalKeyframe)) {
    const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
    if (unit) toUnit = value => value + unit;
  }
  return toUnit;
}
exports.getUnitConverter = getUnitConverter;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/keyframes.cjs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/keyframes.cjs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hydrateKeyframes(keyframes, readInitialValue) {
  for (let i = 0; i < keyframes.length; i++) {
    if (keyframes[i] === null) {
      keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    }
  }
  return keyframes;
}
const keyframesList = keyframes => Array.isArray(keyframes) ? keyframes : [keyframes];
exports.hydrateKeyframes = hydrateKeyframes;
exports.keyframesList = keyframesList;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/options.cjs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/options.cjs.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const getOptions = (options, key) =>
/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */
options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);
exports.getOptions = getOptions;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/stop-animation.cjs.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/stop-animation.cjs.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function stopAnimation(animation, needsCommit = true) {
  if (!animation || animation.playState === "finished") return;
  // Suppress error thrown by WAAPI
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e) {}
}
exports.stopAnimation = stopAnimation;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/transforms.cjs.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/transforms.cjs.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
var data = __webpack_require__(/*! ../data.cjs.js */ "./node_modules/@motionone/dom/dist/animate/data.cjs.js");

/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
const axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
const rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: v => v + "deg"
};
const baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: v => v + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: utils.noopReturn
  },
  skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = name => `--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */
const transforms = ["x", "y", "z"];
order.forEach(name => {
  axes.forEach(axis => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */
const transformLookup = new Set(transforms);
const isTransform = name => transformLookup.has(name);
const addTransformToElement = (element, name) => {
  // Map x to translateX etc
  if (transformAlias[name]) name = transformAlias[name];
  const _data$getAnimationDat = data.getAnimationData(element),
    transforms = _data$getAnimationDat.transforms;
  utils.addUniqueItem(transforms, name);
  /**
   * TODO: An optimisation here could be to cache the transform in element data
   * and only update if this has changed.
   */
  element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = transforms => transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;
exports.addTransformToElement = addTransformToElement;
exports.asTransformCssVar = asTransformCssVar;
exports.axes = axes;
exports.buildTransformTemplate = buildTransformTemplate;
exports.compareTransformOrder = compareTransformOrder;
exports.isTransform = isTransform;
exports.transformAlias = transformAlias;
exports.transformDefinitions = transformDefinitions;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/utils/resolve-elements.cjs.js":
/*!************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/utils/resolve-elements.cjs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  /**
   * Return an empty array
   */
  return Array.from(elements || []);
}
exports.resolveElements = resolveElements;

/***/ }),

/***/ "./node_modules/@motionone/dom/dist/utils/stagger.cjs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/utils/stagger.cjs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
var animation = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");
function stagger(duration = 0.1, {
  start = 0,
  from = 0,
  easing
} = {}) {
  return (i, total) => {
    const fromIndex = utils.isNumber(from) ? from : getFromIndex(from, total);
    const distance = Math.abs(fromIndex - i);
    let delay = duration * distance;
    if (easing) {
      const maxDelay = total * duration;
      const easingFunction = animation.getEasingFunction(easing);
      delay = easingFunction(delay / maxDelay) * maxDelay;
    }
    return start + delay;
  };
}
function getFromIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function resolveOption(option, i, total) {
  return utils.isFunction(option) ? option(i, total) : option;
}
exports.getFromIndex = getFromIndex;
exports.resolveOption = resolveOption;
exports.stagger = stagger;

/***/ }),

/***/ "./node_modules/@motionone/easing/dist/cubic-bezier.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/@motionone/easing/dist/cubic-bezier.es.js ***!
  \****************************************************************/
/*! exports provided: cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0.0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"];
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  // If animation is at start/end, return t without easing
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}


/***/ }),

/***/ "./node_modules/@motionone/easing/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/easing/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: cubicBezier, steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.es.js */ "./node_modules/@motionone/easing/dist/cubic-bezier.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"]; });

/* harmony import */ var _steps_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps.es.js */ "./node_modules/@motionone/easing/dist/steps.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return _steps_es_js__WEBPACK_IMPORTED_MODULE_1__["steps"]; });




/***/ }),

/***/ "./node_modules/@motionone/easing/dist/steps.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/easing/dist/steps.es.js ***!
  \*********************************************************/
/*! exports provided: steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");

const steps = (steps, direction = "end") => progress => {
  progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
  const expanded = progress * steps;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0, 1, rounded / steps);
};


/***/ }),

/***/ "./node_modules/@motionone/types/dist/MotionValue.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/types/dist/MotionValue.es.js ***!
  \**************************************************************/
/*! exports provided: MotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
class MotionValue {
  setAnimation(animation) {
    this.animation = animation;
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@motionone/types/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/types/dist/index.es.js ***!
  \********************************************************/
/*! exports provided: MotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MotionValue_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MotionValue.es.js */ "./node_modules/@motionone/types/dist/MotionValue.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return _MotionValue_es_js__WEBPACK_IMPORTED_MODULE_0__["MotionValue"]; });



/***/ }),

/***/ "./node_modules/@motionone/utils/dist/array.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/array.es.js ***!
  \********************************************************/
/*! exports provided: addUniqueItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUniqueItem", function() { return addUniqueItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/clamp.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/clamp.es.js ***!
  \********************************************************/
/*! exports provided: clamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/defaults.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/defaults.es.js ***!
  \***********************************************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
const defaults = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/easing.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/easing.es.js ***!
  \*********************************************************/
/*! exports provided: getEasingForSegment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEasingForSegment", function() { return getEasingForSegment; });
/* harmony import */ var _is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-easing-list.es.js */ "./node_modules/@motionone/utils/dist/is-easing-list.es.js");
/* harmony import */ var _wrap_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrap.es.js */ "./node_modules/@motionone/utils/dist/wrap.es.js");


function getEasingForSegment(easing, i) {
  return Object(_is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_0__["isEasingList"])(easing) ? easing[Object(_wrap_es_js__WEBPACK_IMPORTED_MODULE_1__["wrap"])(0, easing.length, i)] : easing;
}


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/index.es.js ***!
  \********************************************************/
/*! exports provided: addUniqueItem, removeItem, clamp, defaults, getEasingForSegment, interpolate, isCubicBezier, isEasingGenerator, isEasingList, isFunction, isNumber, isString, mix, noop, noopReturn, defaultOffset, fillOffset, progress, time, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.es.js */ "./node_modules/@motionone/utils/dist/array.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUniqueItem", function() { return _array_es_js__WEBPACK_IMPORTED_MODULE_0__["addUniqueItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return _array_es_js__WEBPACK_IMPORTED_MODULE_0__["removeItem"]; });

/* harmony import */ var _clamp_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clamp.es.js */ "./node_modules/@motionone/utils/dist/clamp.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _clamp_es_js__WEBPACK_IMPORTED_MODULE_1__["clamp"]; });

/* harmony import */ var _defaults_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.es.js */ "./node_modules/@motionone/utils/dist/defaults.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults_es_js__WEBPACK_IMPORTED_MODULE_2__["defaults"]; });

/* harmony import */ var _easing_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.es.js */ "./node_modules/@motionone/utils/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEasingForSegment", function() { return _easing_es_js__WEBPACK_IMPORTED_MODULE_3__["getEasingForSegment"]; });

/* harmony import */ var _interpolate_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolate.es.js */ "./node_modules/@motionone/utils/dist/interpolate.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _interpolate_es_js__WEBPACK_IMPORTED_MODULE_4__["interpolate"]; });

/* harmony import */ var _is_cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-cubic-bezier.es.js */ "./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCubicBezier", function() { return _is_cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_5__["isCubicBezier"]; });

/* harmony import */ var _is_easing_generator_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-easing-generator.es.js */ "./node_modules/@motionone/utils/dist/is-easing-generator.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEasingGenerator", function() { return _is_easing_generator_es_js__WEBPACK_IMPORTED_MODULE_6__["isEasingGenerator"]; });

/* harmony import */ var _is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-easing-list.es.js */ "./node_modules/@motionone/utils/dist/is-easing-list.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEasingList", function() { return _is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_7__["isEasingList"]; });

/* harmony import */ var _is_function_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-function.es.js */ "./node_modules/@motionone/utils/dist/is-function.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _is_function_es_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"]; });

/* harmony import */ var _is_number_es_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-number.es.js */ "./node_modules/@motionone/utils/dist/is-number.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _is_number_es_js__WEBPACK_IMPORTED_MODULE_9__["isNumber"]; });

/* harmony import */ var _is_string_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is-string.es.js */ "./node_modules/@motionone/utils/dist/is-string.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is_string_es_js__WEBPACK_IMPORTED_MODULE_10__["isString"]; });

/* harmony import */ var _mix_es_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mix.es.js */ "./node_modules/@motionone/utils/dist/mix.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return _mix_es_js__WEBPACK_IMPORTED_MODULE_11__["mix"]; });

/* harmony import */ var _noop_es_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noop.es.js */ "./node_modules/@motionone/utils/dist/noop.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop_es_js__WEBPACK_IMPORTED_MODULE_12__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noopReturn", function() { return _noop_es_js__WEBPACK_IMPORTED_MODULE_12__["noopReturn"]; });

/* harmony import */ var _offset_es_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offset.es.js */ "./node_modules/@motionone/utils/dist/offset.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOffset", function() { return _offset_es_js__WEBPACK_IMPORTED_MODULE_13__["defaultOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fillOffset", function() { return _offset_es_js__WEBPACK_IMPORTED_MODULE_13__["fillOffset"]; });

/* harmony import */ var _progress_es_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progress.es.js */ "./node_modules/@motionone/utils/dist/progress.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return _progress_es_js__WEBPACK_IMPORTED_MODULE_14__["progress"]; });

/* harmony import */ var _time_es_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./time.es.js */ "./node_modules/@motionone/utils/dist/time.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _time_es_js__WEBPACK_IMPORTED_MODULE_15__["time"]; });

/* harmony import */ var _velocity_es_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./velocity.es.js */ "./node_modules/@motionone/utils/dist/velocity.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return _velocity_es_js__WEBPACK_IMPORTED_MODULE_16__["velocityPerSecond"]; });

/* harmony import */ var _wrap_es_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wrap.es.js */ "./node_modules/@motionone/utils/dist/wrap.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_es_js__WEBPACK_IMPORTED_MODULE_17__["wrap"]; });




















/***/ }),

/***/ "./node_modules/@motionone/utils/dist/interpolate.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/interpolate.es.js ***!
  \**************************************************************/
/*! exports provided: interpolate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony import */ var _mix_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix.es.js */ "./node_modules/@motionone/utils/dist/mix.es.js");
/* harmony import */ var _noop_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop.es.js */ "./node_modules/@motionone/utils/dist/noop.es.js");
/* harmony import */ var _offset_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset.es.js */ "./node_modules/@motionone/utils/dist/offset.es.js");
/* harmony import */ var _progress_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress.es.js */ "./node_modules/@motionone/utils/dist/progress.es.js");
/* harmony import */ var _easing_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easing.es.js */ "./node_modules/@motionone/utils/dist/easing.es.js");
/* harmony import */ var _clamp_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp.es.js */ "./node_modules/@motionone/utils/dist/clamp.es.js");






function interpolate(output, input = Object(_offset_es_js__WEBPACK_IMPORTED_MODULE_2__["defaultOffset"])(output.length), easing = _noop_es_js__WEBPACK_IMPORTED_MODULE_1__["noopReturn"]) {
  const length = output.length;
  /**
   * If the input length is lower than the output we
   * fill the input to match. This currently assumes the input
   * is an animation progress value so is a good candidate for
   * moving outside the function.
   */
  const remainder = length - input.length;
  remainder > 0 && Object(_offset_es_js__WEBPACK_IMPORTED_MODULE_2__["fillOffset"])(input, remainder);
  return t => {
    let i = 0;
    for (; i < length - 2; i++) {
      if (t < input[i + 1]) break;
    }
    let progressInRange = Object(_clamp_es_js__WEBPACK_IMPORTED_MODULE_5__["clamp"])(0, 1, Object(_progress_es_js__WEBPACK_IMPORTED_MODULE_3__["progress"])(input[i], input[i + 1], t));
    const segmentEasing = Object(_easing_es_js__WEBPACK_IMPORTED_MODULE_4__["getEasingForSegment"])(easing, i);
    progressInRange = segmentEasing(progressInRange);
    return Object(_mix_es_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(output[i], output[i + 1], progressInRange);
  };
}


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js ***!
  \******************************************************************/
/*! exports provided: isCubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCubicBezier", function() { return isCubicBezier; });
/* harmony import */ var _is_number_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-number.es.js */ "./node_modules/@motionone/utils/dist/is-number.es.js");

const isCubicBezier = easing => Array.isArray(easing) && Object(_is_number_es_js__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(easing[0]);


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-easing-generator.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-easing-generator.es.js ***!
  \**********************************************************************/
/*! exports provided: isEasingGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasingGenerator", function() { return isEasingGenerator; });
const isEasingGenerator = easing => typeof easing === "object" && Boolean(easing.createAnimation);


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-easing-list.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-easing-list.es.js ***!
  \*****************************************************************/
/*! exports provided: isEasingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasingList", function() { return isEasingList; });
/* harmony import */ var _is_number_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-number.es.js */ "./node_modules/@motionone/utils/dist/is-number.es.js");

const isEasingList = easing => Array.isArray(easing) && !Object(_is_number_es_js__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(easing[0]);


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-function.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-function.es.js ***!
  \**************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
const isFunction = value => typeof value === "function";


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-number.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-number.es.js ***!
  \************************************************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
const isNumber = value => typeof value === "number";


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-string.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-string.es.js ***!
  \************************************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
const isString = value => typeof value === "string";


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/mix.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/mix.es.js ***!
  \******************************************************/
/*! exports provided: mix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
const mix = (min, max, progress) => -progress * min + progress * max + min;


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/noop.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/noop.es.js ***!
  \*******************************************************/
/*! exports provided: noop, noopReturn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopReturn", function() { return noopReturn; });
const noop = () => {};
const noopReturn = v => v;


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/offset.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/offset.es.js ***!
  \*********************************************************/
/*! exports provided: defaultOffset, fillOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOffset", function() { return defaultOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillOffset", function() { return fillOffset; });
/* harmony import */ var _mix_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix.es.js */ "./node_modules/@motionone/utils/dist/mix.es.js");
/* harmony import */ var _progress_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.es.js */ "./node_modules/@motionone/utils/dist/progress.es.js");


function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = Object(_progress_es_js__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, remaining, i);
    offset.push(Object(_mix_es_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/progress.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/progress.es.js ***!
  \***********************************************************/
/*! exports provided: progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/time.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/time.es.js ***!
  \*******************************************************/
/*! exports provided: time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
const time = {
  ms: seconds => seconds * 1000,
  s: milliseconds => milliseconds / 1000
};


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/velocity.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/velocity.es.js ***!
  \***********************************************************/
/*! exports provided: velocityPerSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}


/***/ }),

/***/ "./node_modules/@motionone/utils/dist/wrap.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/wrap.es.js ***!
  \*******************************************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};


/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x, k) {
        var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "",
          j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
              begin = clamp(from, length),
              end = length,
              num,
              target,
              targetArray,
              sourceArray;
            if (to !== undefined) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
          buff = new ArrayBuffer(length),
          arr = new Uint8Array(buff),
          i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [],
          length = hex.length,
          x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
          i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
          tmp,
          lo,
          hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
          length = buff.length,
          i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);
    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();
  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
      cancelable = eventInit.cancelable,
      detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;
      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");
      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};
        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
          responseType = _xhr.responseType,
          response = _xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();
  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;
      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
        url = _blob$directUploadDat.url,
        headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
          status = _xhr.status,
          response = _xhr.response;
        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();
  var id = 0;
  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }
    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }
          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();
  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }
      return object[methodName].apply(object, messages);
    }
  }
  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          _this.dispatch("end");
          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }
    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var controllers = this.createDirectUploadControllers();
        var startNextController = function startNextController() {
          var controller = controllers.shift();
          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);
                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            _this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;
  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    var form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      var _button = button,
        disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm.delete(form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }
  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;
      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };
      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };
      expando = '_ujsData';
      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };
      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };
      Rails.isContentEditable = function (element) {
        var isEditable;
        isEditable = false;
        while (true) {
          if (element.isContentEditable) {
            isEditable = true;
            break;
          }
          element = element.parentElement;
          if (!element) {
            break;
          }
        }
        return isEditable;
      };
      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;
      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };
      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };
      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };
      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;
      if (typeof CustomEvent !== 'function') {
        CustomEvent = function (event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);
          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function () {
                return true;
              }
            });
          }
          return result;
        };
      }
      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };
      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };
      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };
      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };
      prepareOptions = function (options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };
      createXHR = function (options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };
      processResponse = function (response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };
      Rails.href = function (element) {
        return element.href;
      };
      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;
      toArray = function (e) {
        return Array.prototype.slice.call(e);
      };
      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };
      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;
      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };
      Rails.confirm = function (message, element) {
        return confirm(message);
      };
      allowAction = function (element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isContentEditable, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements, isContentEditable = Rails.isContentEditable;
      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };
      Rails.enableElement = function (e) {
        var element;
        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }
          element = e.target;
        } else {
          element = e;
        }
        if (isContentEditable(element)) {
          return;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };
      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (isContentEditable(element)) {
          return;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };
      disableLinkElement = function (element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };
      enableLinkElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };
      disableFormElements = function (form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };
      disableFormElement = function (element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };
      enableFormElements = function (form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };
      enableFormElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };
      isXhrRedirect = function (event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var isContentEditable, stopEverything;
      stopEverything = Rails.stopEverything;
      isContentEditable = Rails.isContentEditable;
      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        if (isContentEditable(this)) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
        fire,
        getData,
        isContentEditable,
        isCrossDomain,
        isRemote,
        matches,
        serializeElement,
        setData,
        stopEverything,
        slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement, isContentEditable = Rails.isContentEditable;
      isRemote = function (element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };
      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        if (isContentEditable(element)) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };
      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };
      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;
      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }
      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };
      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);
  if ( true && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () {};
var invariant = function () {};
if (true) {
  warning = function (check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };
  invariant = function (check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}


/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function (t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function () {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function (t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
        r,
        n,
        o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};
        for (e in t) n = t[e], r[e] = n;
        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;
          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;
        for (r = "", t = e = 1; 36 >= e; t = ++e) r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }
        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function (t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function (t) {
          return n(t, "/") ? t : t + "/";
        }, o = function (t, e) {
          return t.slice(0, e.length) === e;
        }, n = function (t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }
        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }
        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }
        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();
            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;
          for (this.elements = {}, n = 0, a = t.length; a > n; n++) u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
            type: i(u),
            tracked: o(u),
            elements: []
          }, r.elements.push(u));
        }
        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];
            for (t in r) e = r[t].tracked, e && n.push(t);
            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];
          for (n in o) i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;
          for (e in n) o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;
          for (o in i) n = i[o].elements, e(n[0], t) && (r = n[0]);
          return r;
        }, i = function (t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function (t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function (t, e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }
        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;
          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;
      e.Renderer = function () {
        function e() {}
        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
              o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function (t, e) {
          var r, n, o, i, s, a, u;
          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
        r,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var n in e) o.call(e, n) && (t[n] = e[n]);
          return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
        },
        o = {}.hasOwnProperty;
      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }
        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.removeChild(t));
          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;
          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;
          for (u = [], o = 0, i = t.length; i > o; o++) a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;
          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function (t) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
          element: e,
          permanentElement: t
        };
      }, r = function (t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function (t, e) {
          function n() {
            this.constructor = t;
          }
          for (var o in e) r.call(e, o) && (t[o] = e[o]);
          return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
        },
        r = {}.hasOwnProperty;
      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }
        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;
          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }
        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }
        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;
          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) e = n[t], o.push(delete this.snapshots[e]);
          return o;
        }, r = function (t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }
        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function (t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }
        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function () {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function () {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function () {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this),  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);

/***/ })

/******/ });
//# sourceMappingURL=application-24c5f98c67d9973989b0.js.map