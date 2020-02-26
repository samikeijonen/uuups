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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/blocks/style-variations/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/blocks/style-variations/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// WordPress dependencies.
var __ = wp.i18n.__;
/**
 * Add new button style variants.
 *
 * This adds new class `is-style-underlined` and `is-style-outline-rounded` to button block.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#block-style-variations
 */

wp.domReady(function () {
  /**
   * Unregister default and squared button styles.
   * This way we can register them again with squared as default.
   */
  wp.blocks.unregisterBlockStyle('core/button', 'default');
  wp.blocks.unregisterBlockStyle('core/button', 'squared'); // This is squared.

  wp.blocks.registerBlockStyle('core/button', {
    name: 'default',
    label: __('Default', 'uuups'),
    isDefault: true
  }); // This was originally default by Core.

  wp.blocks.registerBlockStyle('core/button', {
    name: 'rounded',
    label: __('Rounded', 'uuups')
  });
  wp.blocks.registerBlockStyle('core/button', {
    name: 'underlined',
    label: __('Underlined', 'uuups')
  });
  wp.blocks.registerBlockStyle('core/button', {
    name: 'outline-rounded',
    label: __('Outline rounded', 'uuups')
  });
  wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'ingress',
    label: __('Ingress', 'uuups')
  });
  wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'highlight',
    label: __('Highlight', 'uuups')
  });
  wp.blocks.unregisterBlockStyle('core/social-links', 'logos-only');
  wp.blocks.unregisterBlockStyle('core/social-links', 'pill-shape');
});

/***/ }),

/***/ "./resources/js/editor.js":
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_style_variations___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/style-variations/ */ "./resources/js/blocks/style-variations/index.js");
/* harmony import */ var _blocks_style_variations___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_style_variations___WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZWRpdG9yU2NyaXB0cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmxvY2tzL3N0eWxlLXZhcmlhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2VkaXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Jlc291cmNlcy9qcy9lZGl0b3IuanNcIik7XG4iLCIvLyBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBBZGQgbmV3IGJ1dHRvbiBzdHlsZSB2YXJpYW50cy5cbiAqXG4gKiBUaGlzIGFkZHMgbmV3IGNsYXNzIGBpcy1zdHlsZS11bmRlcmxpbmVkYCBhbmQgYGlzLXN0eWxlLW91dGxpbmUtcm91bmRlZGAgdG8gYnV0dG9uIGJsb2NrLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svZGVzaWduZXJzLWRldmVsb3BlcnMvZGV2ZWxvcGVycy9maWx0ZXJzL2Jsb2NrLWZpbHRlcnMvI2Jsb2NrLXN0eWxlLXZhcmlhdGlvbnNcbiAqL1xud3AuZG9tUmVhZHkoICgpID0+IHtcblx0LyoqXG5cdCAqIFVucmVnaXN0ZXIgZGVmYXVsdCBhbmQgc3F1YXJlZCBidXR0b24gc3R5bGVzLlxuXHQgKiBUaGlzIHdheSB3ZSBjYW4gcmVnaXN0ZXIgdGhlbSBhZ2FpbiB3aXRoIHNxdWFyZWQgYXMgZGVmYXVsdC5cblx0ICovXG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSggJ2NvcmUvYnV0dG9uJywgJ2RlZmF1bHQnICk7XG5cdHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSggJ2NvcmUvYnV0dG9uJywgJ3NxdWFyZWQnICk7XG5cblx0Ly8gVGhpcyBpcyBzcXVhcmVkLlxuXHR3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9idXR0b24nLCB7XG5cdFx0bmFtZTogJ2RlZmF1bHQnLFxuXHRcdGxhYmVsOiBfXyggJ0RlZmF1bHQnLCAndXV1cHMnICksXG5cdFx0aXNEZWZhdWx0OiB0cnVlLFxuXHR9ICk7XG5cblx0Ly8gVGhpcyB3YXMgb3JpZ2luYWxseSBkZWZhdWx0IGJ5IENvcmUuXG5cdHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoICdjb3JlL2J1dHRvbicsIHtcblx0XHRuYW1lOiAncm91bmRlZCcsXG5cdFx0bGFiZWw6IF9fKCAnUm91bmRlZCcsICd1dXVwcycgKSxcblx0fSApO1xuXG5cdHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoICdjb3JlL2J1dHRvbicsIHtcblx0XHRuYW1lOiAndW5kZXJsaW5lZCcsXG5cdFx0bGFiZWw6IF9fKCAnVW5kZXJsaW5lZCcsICd1dXVwcycgKSxcblx0fSApO1xuXG5cdHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoICdjb3JlL2J1dHRvbicsIHtcblx0XHRuYW1lOiAnb3V0bGluZS1yb3VuZGVkJyxcblx0XHRsYWJlbDogX18oICdPdXRsaW5lIHJvdW5kZWQnLCAndXV1cHMnICksXG5cdH0gKTtcblxuXHR3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9wYXJhZ3JhcGgnLCB7XG5cdFx0bmFtZTogJ2luZ3Jlc3MnLFxuXHRcdGxhYmVsOiBfXyggJ0luZ3Jlc3MnLCAndXV1cHMnICksXG5cdH0gKTtcblxuXHR3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9wYXJhZ3JhcGgnLCB7XG5cdFx0bmFtZTogJ2hpZ2hsaWdodCcsXG5cdFx0bGFiZWw6IF9fKCAnSGlnaGxpZ2h0JywgJ3V1dXBzJyApLFxuXHR9ICk7XG5cblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9zb2NpYWwtbGlua3MnLCAnbG9nb3Mtb25seScgKTtcblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9zb2NpYWwtbGlua3MnLCAncGlsbC1zaGFwZScgKTtcbn0gKTtcbiIsImltcG9ydCAnLi9ibG9ja3Mvc3R5bGUtdmFyaWF0aW9ucy8nO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==