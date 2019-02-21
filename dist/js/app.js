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
   * @return {boolean} True or false.
   */

  function isMenuOpen() {
    var isMenuOpenCheck = 'false' === button.getAttribute('aria-expanded') ? false : true;
    return isMenuOpenCheck;
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


  button.addEventListener('click', function () {
    toggleMenu();
    setFocus();
  }, false); // Close menu using Esc key.

  document.addEventListener('keyup', function (event) {
    if (27 === event.keyCode && isMenuOpen()) {
      toggleMenu();
      button.focus();
    }
  }, false); // Reset menu when on "desktop".

  window.addEventListener('resize', function () {
    // Wait for a while before firing the event again.
    if (!timeout) {
      timeout = setTimeout(function () {
        /* eslint-disable-line no-undef */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Jlc291cmNlcy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQgbmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5cbm5hdmlnYXRpb24oKTtcbiIsIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG5jb25zdCBuYXZpZ2F0aW9uID0gKCkgPT4ge1xuXHQvLyBNZW51IHZhcmlhYmxlLlxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2pzLW1lbnUtLXByaW1hcnknICk7XG5cblx0Ly8gQmFpbCBpZiB0aGVyZSBpcyBubyBtZW51LlxuXHRpZiAoICEgY29udGFpbmVyICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFZhcmlhYmxlcy5cblx0Y29uc3QgYnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYnV0dG9uJyApWyAwIF07XG5cdGNvbnN0IG1lbnUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICd1bCcgKVsgMCBdO1xuXHRjb25zdCBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdhJyApO1xuXHRsZXQgdGltZW91dDtcblxuXHQvKipcblx0ICogSXMgbWVudSBvcGVuLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIG9yIGZhbHNlLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNNZW51T3BlbigpIHtcblx0XHRjb25zdCBpc01lbnVPcGVuQ2hlY2sgPSAoICdmYWxzZScgPT09IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJyApICkgPyBmYWxzZSA6IHRydWU7XG5cdFx0cmV0dXJuIGlzTWVudU9wZW5DaGVjaztcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgbWVudSBjbGFzc2VzIGFuZCBBUklBLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcblx0XHRjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLW9wZW5lZCcgKTtcblx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoICdpcy1vcGVuZWQnICk7XG5cblx0XHRjb25zdCBleHBhbmRlZCA9ICggJ2ZhbHNlJyA9PT0gYnV0dG9uLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgKSA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBmb2N1cyB3aGVuIG5hdiBpcyBvcGVuLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG5cdFx0Ly8gQmFpbCBpZiBtZW51IGlzIG5vdCBvcGVuLlxuXHRcdGlmICggISBpc01lbnVPcGVuKCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGZvY3VzYWJsZSBlbGVtZW50cyBpbnNpZGUgbWFpbiBuYXZpZ2F0aW9uLlxuXHRcdGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFsgJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJywgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKScgXSApO1xuXHRcdGNvbnN0IGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWyAwIF07XG5cdFx0Y29uc3QgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1sgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMSBdO1xuXG5cdFx0Ly8gUmVkaXJlY3QgbGFzdCBUYWIgdG8gZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG5cdFx0bGFzdEZvY3VzYWJsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGlmICggKCA5ID09PSBlLmtleUNvZGUgJiYgISBlLnNoaWZ0S2V5ICkgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YnV0dG9uLmZvY3VzKCk7IC8vIFNldCBmb2N1cyBvbiBmaXJzdCBlbGVtZW50IC0gdGhhdCdzIGFjdHVhbGx5IGNsb3NlIG1lbnUgYnV0dG9uLlxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cblx0XHQvLyBSZWRpcmVjdCBmaXJzdCBTaGlmdCtUYWIgdG8gdG9nZ2xlIGJ1dHRvbiBlbGVtZW50LlxuXHRcdGZpcnN0Rm9jdXNhYmxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0aWYgKCAoIDkgPT09IGUua2V5Q29kZSAmJiBlLnNoaWZ0S2V5ICkgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YnV0dG9uLmZvY3VzKCk7IC8vIFNldCBmb2N1cyBvbiBmaXJzdCBlbGVtZW50LlxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cblx0XHQvLyBSZWRpcmVjdCBTaGlmdCtUYWIgZnJvbSB0aGUgdG9nZ2xlIGJ1dHRvbiB0byBsYXN0IGZvY3VzYWJsZSBlbGVtZW50LlxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0aWYgKCAoIDkgPT09IGUua2V5Q29kZSAmJiBlLnNoaWZ0S2V5ICkgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTsgLy8gU2V0IGZvY3VzIG9uIGxhc3QgZWxlbWVudC5cblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc2V0IG1lbnUgb24gXCJkZXNrdG9wXCIuXG5cdCAqL1xuXHRmdW5jdGlvbiByZXNldE1lbnUoKSB7XG5cdFx0Ly8gSWYgbWVudSB0b2dnbGUgYnV0dG9uIGhhdmUgZGlzcGxheTogbm9uZSBjc3MgcnVsZSwgd2UncmUgb24gZGVza3RvcC5cblx0XHRpZiAoICdub25lJyA9PT0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGJ1dHRvbiwgbnVsbCApLmdldFByb3BlcnR5VmFsdWUoICdkaXNwbGF5JyApICkge1xuXHRcdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1vcGVuZWQnICk7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoICdpcy1vcGVuZWQnICk7XG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLmpzLW5hdi1tZW51LlxuXHRcdHdoaWxlICggLTEgPT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoICdqcy1uYXYtbWVudScgKSApIHtcblx0XHRcdC8vIE9uIGxpIGVsZW1lbnRzIHRvZ2dsZSB0aGUgY2xhc3MgLmZvY3VzLlxuXHRcdFx0aWYgKCAnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0aWYgKCAtMSAhPT0gc2VsZi5jbGFzc05hbWUuaW5kZXhPZiggJ2ZvY3VzJyApICkge1xuXHRcdFx0XHRcdHNlbGYuY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlbGYuY2xhc3NMaXN0LmFkZCggJ2ZvY3VzJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEVhY2ggdGltZSBhIG1lbnUgbGluayBpcyBmb2N1c2VkIG9yIGJsdXJyZWQsIHRvZ2dsZSBmb2N1cy5cblx0ICovXG5cdGZ1bmN0aW9uIG1lbnVMaW5rc0ZvY3VzZWQoKSB7XG5cdFx0aWYgKCAhIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnanMtbmF2LW1lbnUnICkgKSB7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoICdqcy1uYXYtbWVudScgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGxpbmtzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcblx0XHRcdGxpbmtzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCB0b2dnbGVGb2N1cywgdHJ1ZSApO1xuXHRcdH1cblx0fVxuXG5cdC8vIFRvZ2dsZSBtZW51IG9uIGJ1dHRvbiBjbGljay5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHRvZ2dsZU1lbnUoKTtcblxuXHRcdHNldEZvY3VzKCk7XG5cdH0sIGZhbHNlICk7XG5cblx0Ly8gQ2xvc2UgbWVudSB1c2luZyBFc2Mga2V5LlxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0aWYgKCAyNyA9PT0gZXZlbnQua2V5Q29kZSAmJiBpc01lbnVPcGVuKCkgKSB7XG5cdFx0XHR0b2dnbGVNZW51KCk7XG5cdFx0XHRidXR0b24uZm9jdXMoKTtcblx0XHR9XG5cdH0sIGZhbHNlICk7XG5cblx0Ly8gUmVzZXQgbWVudSB3aGVuIG9uIFwiZGVza3RvcFwiLlxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIFdhaXQgZm9yIGEgd2hpbGUgYmVmb3JlIGZpcmluZyB0aGUgZXZlbnQgYWdhaW4uXG5cdFx0aWYgKCAhIHRpbWVvdXQgKSB7XG5cdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYgKi9cblx0XHRcdFx0Ly8gUmVzZXQgdGltZW91dFxuXHRcdFx0XHR0aW1lb3V0ID0gbnVsbDtcblxuXHRcdFx0XHQvLyBSdW4gb3VyIHJlc2l6ZSBmdW5jdGlvbnNcblx0XHRcdFx0cmVzZXRNZW51KCk7XG5cdFx0XHR9LCA2NiApO1xuXHRcdH1cblx0fSwgZmFsc2UgKTtcblxuXHQvLyBJbml0IG1lbnUgbGluayBmb2N1cyBjbGFzcy5cblx0bWVudUxpbmtzRm9jdXNlZCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbjtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==