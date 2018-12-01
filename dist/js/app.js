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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation */ "./resources/js/components/navigation.js");

Object(_components_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./resources/js/components/navigation.js":
/*!***********************************************!*\
  !*** ./resources/js/components/navigation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
var navigation = function navigation() {
  // Menu variable.
  var container = document.getElementById('js-menu--primary'); // Bail if there is no menu.

  if (!container) {
    return;
  } // Variables.


  var button = container.getElementsByTagName('button')[0];
  var menu = container.getElementsByTagName('ul')[0];
  var links = menu.getElementsByTagName('a');
  var timeout;
  /**
   * Is menu open.
   *
   * @returns {boolean} True or false.
   */

  function isMenuOpen() {
    var isMenuOpen = 'false' === button.getAttribute('aria-expanded') ? false : true;
    return isMenuOpen;
  }
  /**
   * Toggle menu classes and ARIA.
   */


  function toggleMenu() {
    container.classList.toggle('is-opened');
    menu.classList.toggle('is-opened');
    var expanded = 'false' === button.getAttribute('aria-expanded') ? 'true' : 'false';
    button.setAttribute('aria-expanded', expanded);
  }
  /**
   * Set focus when nav is open.
   */


  function setFocus() {
    // Bail if menu is not open.
    if (!isMenuOpen()) {
      return;
    } // Set focusable elements inside main navigation.


    var focusableElements = container.querySelectorAll(['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])']);
    var firstFocusableElement = focusableElements[0];
    var lastFocusableElement = focusableElements[focusableElements.length - 1]; // Redirect last Tab to first focusable element.

    lastFocusableElement.addEventListener('keydown', function (e) {
      if (9 === e.keyCode && !e.shiftKey) {
        e.preventDefault();
        button.focus(); // Set focus on first element - that's actually close menu button.
      }
    }, false); // Redirect first Shift+Tab to toggle button element.

    firstFocusableElement.addEventListener('keydown', function (e) {
      if (9 === e.keyCode && e.shiftKey) {
        e.preventDefault();
        button.focus(); // Set focus on first element.
      }
    }, false); // Redirect Shift+Tab from the toggle button to last focusable element.

    button.addEventListener('keydown', function (e) {
      if (9 === e.keyCode && e.shiftKey) {
        e.preventDefault();
        lastFocusableElement.focus(); // Set focus on last element.
      }
    }, false);
  }
  /**
   * Reset menu on "desktop".
   */


  function resetMenu() {
    // If menu toggle button have display: none css rule, we're on desktop.
    if ('none' === window.getComputedStyle(button, null).getPropertyValue('display')) {
      container.classList.remove('is-opened');
      menu.classList.remove('is-opened');
      button.setAttribute('aria-expanded', 'false');
    }
  }
  /**
   * Sets or removes .focus class on an element.
   */


  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .js-nav-menu.

    while (-1 === self.className.indexOf('js-nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.classList.remove('focus');
        } else {
          self.classList.add('focus');
        }
      }

      self = self.parentElement;
    }
  }
  /**
   * Each time a menu link is focused or blurred, toggle focus.
   */


  function menuLinksFocused() {
    if (!menu.classList.contains('js-nav-menu')) {
      menu.classList.add('js-nav-menu');
    }

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('focus', toggleFocus, true);
      links[i].addEventListener('blur', toggleFocus, true);
    }
  } // Toggle menu on button click.


  button.addEventListener('click', function (event) {
    toggleMenu();
    setFocus();
  }, false); // Close menu using Esc key.

  document.addEventListener('keyup', function (event) {
    if (27 === event.keyCode && isMenuOpen()) {
      toggleMenu();
      button.focus();
    }
  }, false); // Reset menu when on "desktop".

  window.addEventListener('resize', function (event) {
    // Wait for a while before firing the event again.
    if (!timeout) {
      timeout = setTimeout(function () {
        // Reset timeout
        timeout = null; // Run our resize functions

        resetMenu();
      }, 66);
    }
  }, false); // Init menu link focus class.

  menuLinksFocused();
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Jlc291cmNlcy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQgbmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5cbm5hdmlnYXRpb24oKTtcbiIsIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG5jb25zdCBuYXZpZ2F0aW9uID0gKCkgPT4ge1xuXHQvLyBNZW51IHZhcmlhYmxlLlxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2pzLW1lbnUtLXByaW1hcnknICk7XG5cblx0Ly8gQmFpbCBpZiB0aGVyZSBpcyBubyBtZW51LlxuXHRpZiAoICEgY29udGFpbmVyICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFZhcmlhYmxlcy5cblx0Y29uc3QgYnV0dG9uICA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2J1dHRvbicgKVswXTtcblx0Y29uc3QgbWVudSAgICA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ3VsJyApWzBdO1xuXHRjb25zdCBsaW5rcyAgID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2EnICk7XG5cdGxldCB0aW1lb3V0O1xuXG5cdC8qKlxuXHQgKiBJcyBtZW51IG9wZW4uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIG9yIGZhbHNlLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNNZW51T3BlbigpIHtcblx0XHRsZXQgaXNNZW51T3BlbiA9ICggJ2ZhbHNlJyA9PT0gYnV0dG9uLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgKSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRyZXR1cm4gaXNNZW51T3Blbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgbWVudSBjbGFzc2VzIGFuZCBBUklBLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcblx0XHRjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLW9wZW5lZCcgKTtcblx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoICdpcy1vcGVuZWQnICk7XG5cblx0XHRsZXQgZXhwYW5kZWQgPSAoICdmYWxzZScgPT09IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJyApICkgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgZm9jdXMgd2hlbiBuYXYgaXMgb3Blbi5cblx0ICovXG5cdGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuXHRcdC8vIEJhaWwgaWYgbWVudSBpcyBub3Qgb3Blbi5cblx0XHRpZiAoICEgaXNNZW51T3BlbigpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNldCBmb2N1c2FibGUgZWxlbWVudHMgaW5zaWRlIG1haW4gbmF2aWdhdGlvbi5cblx0XHRjb25zdCBmb2N1c2FibGVFbGVtZW50cyAgICAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCggWyAnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJyBdICk7XG5cdFx0Y29uc3QgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG5cdFx0Y29uc3QgbGFzdEZvY3VzYWJsZUVsZW1lbnQgID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cblx0XHQvLyBSZWRpcmVjdCBsYXN0IFRhYiB0byBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cblx0XHRsYXN0Rm9jdXNhYmxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0aWYgKCAoIDkgPT09IGUua2V5Q29kZSAmJiAhIGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRidXR0b24uZm9jdXMoKTsgLy8gU2V0IGZvY3VzIG9uIGZpcnN0IGVsZW1lbnQgLSB0aGF0J3MgYWN0dWFsbHkgY2xvc2UgbWVudSBidXR0b24uXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblxuXHRcdC8vIFJlZGlyZWN0IGZpcnN0IFNoaWZ0K1RhYiB0byB0b2dnbGUgYnV0dG9uIGVsZW1lbnQuXG5cdFx0Zmlyc3RGb2N1c2FibGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRpZiAoICggOSA9PT0gZS5rZXlDb2RlICYmIGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRidXR0b24uZm9jdXMoKTsgLy8gU2V0IGZvY3VzIG9uIGZpcnN0IGVsZW1lbnQuXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblxuXHRcdC8vIFJlZGlyZWN0IFNoaWZ0K1RhYiBmcm9tIHRoZSB0b2dnbGUgYnV0dG9uIHRvIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRpZiAoICggOSA9PT0gZS5rZXlDb2RlICYmIGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRsYXN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgb24gbGFzdCBlbGVtZW50LlxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogUmVzZXQgbWVudSBvbiBcImRlc2t0b3BcIi5cblx0ICovXG5cdGZ1bmN0aW9uIHJlc2V0TWVudSgpIHtcblx0XHQvLyBJZiBtZW51IHRvZ2dsZSBidXR0b24gaGF2ZSBkaXNwbGF5OiBub25lIGNzcyBydWxlLCB3ZSdyZSBvbiBkZXNrdG9wLlxuXHRcdGlmICggJ25vbmUnID09PSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggYnV0dG9uLCBudWxsICkuZ2V0UHJvcGVydHlWYWx1ZSggJ2Rpc3BsYXknICkgKSB7XG5cdFx0XHRjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLW9wZW5lZCcgKTtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLW9wZW5lZCcgKTtcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG9yIHJlbW92ZXMgLmZvY3VzIGNsYXNzIG9uIGFuIGVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b2dnbGVGb2N1cygpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBNb3ZlIHVwIHRocm91Z2ggdGhlIGFuY2VzdG9ycyBvZiB0aGUgY3VycmVudCBsaW5rIHVudGlsIHdlIGhpdCAuanMtbmF2LW1lbnUuXG5cdFx0d2hpbGUgKCAtMSA9PT0gc2VsZi5jbGFzc05hbWUuaW5kZXhPZiggJ2pzLW5hdi1tZW51JyApICkge1xuXHRcdFx0Ly8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG5cdFx0XHRpZiAoICdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRpZiAoIC0xICE9PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCAnZm9jdXMnICkgKSB7XG5cdFx0XHRcdFx0c2VsZi5jbGFzc0xpc3QucmVtb3ZlKCAnZm9jdXMnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5jbGFzc0xpc3QuYWRkKCAnZm9jdXMnICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2VsZiA9IHNlbGYucGFyZW50RWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWVudUxpbmtzRm9jdXNlZCgpIHtcblx0XHRpZiAoICEgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoICdqcy1uYXYtbWVudScgKSApIHtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCggJ2pzLW5hdi1tZW51JyApO1xuXHRcdH1cblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0bGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcblx0XHRcdGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBUb2dnbGUgbWVudSBvbiBidXR0b24gY2xpY2suXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dG9nZ2xlTWVudSgpO1xuXG5cdFx0c2V0Rm9jdXMoKTtcblx0fSwgZmFsc2UgKTtcblxuXHQvLyBDbG9zZSBtZW51IHVzaW5nIEVzYyBrZXkuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRpZiAoIDI3ID09PSBldmVudC5rZXlDb2RlICYmIGlzTWVudU9wZW4oKSApIHtcblx0XHRcdHRvZ2dsZU1lbnUoKTtcblx0XHRcdGJ1dHRvbi5mb2N1cygpO1xuXHRcdH1cblx0fSwgZmFsc2UgKTtcblxuXHQvLyBSZXNldCBtZW51IHdoZW4gb24gXCJkZXNrdG9wXCIuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdC8vIFdhaXQgZm9yIGEgd2hpbGUgYmVmb3JlIGZpcmluZyB0aGUgZXZlbnQgYWdhaW4uXG5cdFx0aWYgKCAhIHRpbWVvdXQgKSB7XG5cdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIFJlc2V0IHRpbWVvdXRcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cblx0XHRcdFx0Ly8gUnVuIG91ciByZXNpemUgZnVuY3Rpb25zXG5cdFx0XHRcdHJlc2V0TWVudSgpO1xuXHRcdFx0fSwgNjYgKTtcblx0XHR9XG5cdH0sIGZhbHNlICk7XG5cblx0Ly8gSW5pdCBtZW51IGxpbmsgZm9jdXMgY2xhc3MuXG5cdG1lbnVMaW5rc0ZvY3VzZWQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRpb247XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9