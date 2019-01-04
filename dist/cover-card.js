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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cover-card.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cover-card.js":
/*!***************************!*\
  !*** ./src/cover-card.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import './cover-card.scss';\n(function ($) {\n  'use strict';\n\n  var InnovedCoverCard = function InnovedCoverCard() {\n    //public - remove overflow hidden when dropdown is activated\n    this.positionDropdown = function (container) {\n      $(container + \" .dropdown\").on(\"show.bs.dropdown\", function () {\n        if (!$(this).hasClass('bootstrap-select')) {\n          $(container).css('overflow', 'visible');\n          $('.cover-card-under-content').css('overflow', 'visible');\n        }\n      });\n      $(container + \" .dropdown\").on(\"hide.bs.dropdown\", function () {\n        if (!$(this).hasClass('bootstrap-select')) {\n          $(container).css('overflow', 'hidden');\n          $('.cover-card-under-content').css('overflow', 'hidden');\n        }\n      });\n    }; //public\n\n\n    this.showCard = function (_onComplete) {\n      $('.cover-card').css('display', 'block');\n      TweenMax.to($('.cover-card'), 0.6, {\n        x: '0%',\n        ease: Power3.easeOut,\n        onComplete: function onComplete() {\n          $('.cover-card-holder').css('overflow', 'visible');\n          $('.cover-card-under-content').css('overflow', 'hidden');\n          $('html').addClass('cover-card-is-open');\n\n          if (_onComplete) {\n            eval(_onComplete);\n          }\n        }\n      });\n      this.setUnderContentHeight();\n    }; //public\n\n\n    this.hideCard = function () {\n      $('.cover-card').css('height', '100%');\n      TweenMax.to($('.cover-card'), 0.6, {\n        x: '100%',\n        ease: Power1.easeOut,\n        onComplete: function onComplete() {\n          $('.cover-card').css('display', 'none');\n        }\n      });\n      $('.cover-card-holder').css('overflow', 'hidden');\n      $('.cover-card-under-content').css({\n        'height': 'auto',\n        'overflow': 'visible',\n        'visibility': 'visible'\n      });\n      $('html').removeClass('cover-card-is-open');\n\n      if ($('.cover-card-holder .dropdown').length) {\n        this.positionDropdown('.cover-card-holder');\n      }\n    }; //public - sets the height of the content under the cover card to match for smooth transitions\n\n\n    this.setUnderContentHeight = function () {\n      TweenMax.to($('.cover-card-under-content'), 1, {\n        height: $('.cover-card-content').height() + 65 + 'px',\n        ease: Power1.easeOut\n      });\n    };\n  }; //return the object for global use\n\n\n  $.innovedCoverCard = function () {\n    return new InnovedCoverCard();\n  };\n})(jQuery); //export for package\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ($.innovedCoverCard());\n\n//# sourceURL=webpack:///./src/cover-card.js?");

/***/ })

/******/ });