/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var container, button, menu, links, i, len, focusableElements, firstFocusableElement, lastFocusableElement;

	container = document.getElementById( 'js-menu--primary' );

	// Bail if there is no menu.
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( ! menu.classList.contains( 'js-nav-menu' ) ) {
		menu.classList.add( 'js-nav-menu' );
	}

	button.addEventListener( 'click', function() {
		toggleMenu();

		setFocus();
	} );

	// Close menu using Esc key.
	document.addEventListener( 'keyup', function( event ) {
		if ( 27 === event.keyCode ) {
			if ( button.classList.contains( 'is-toggled' ) ) {
				toggleMenu(); // Close menu.
				button.focus();
			}
		}
	} );

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Toggle menu classes and ARIA.
	 */
	function toggleMenu() {
		container.classList.toggle( 'is-toggled' );
		menu.classList.toggle( 'is-toggled' );
		button.classList.toggle( 'is-toggled' );

		let expanded = ( 'false' === button.getAttribute( 'aria-expanded' ) ) ? 'true' : 'false';
		button.setAttribute( 'aria-expanded', expanded );
	}

	/**
	 * Set focus when nav is open.
	 */
	function setFocus() {

		// Bail if menu is not open.
		if ( ! button.classList.contains( 'is-toggled' ) ) {
			return;
		}

		// Set focusable elements inside main navigation.
		focusableElements     = container.querySelectorAll( [ 'a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])' ] );
		firstFocusableElement = focusableElements[0];
		lastFocusableElement  = focusableElements[focusableElements.length - 1];

		// Redirect last Tab to first focusable element.
		lastFocusableElement.addEventListener( 'keydown', function( e ) {
			if ( ( 9 === e.keyCode && ! e.shiftKey ) ) {
				e.preventDefault();
				button.focus(); // Set focus on first element - that's actually close menu button.
			}
		} );

		// Redirect first Shift+Tab to toggle button element.
		firstFocusableElement.addEventListener( 'keydown', function( e ) {
			if ( ( 9 === e.keyCode && e.shiftKey ) ) {
				e.preventDefault();
				button.focus(); // Set focus on first element.
			}
		} );

		// Redirect Shift+Tab from the toggle button to last focusable element.
		button.addEventListener( 'keydown', function( e ) {
			if ( ( 9 === e.keyCode && e.shiftKey ) ) {
				e.preventDefault();
				lastFocusableElement.focus(); // Set focus on last element.
			}
		} );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .js-nav-menu.
		while ( -1 === self.className.indexOf( 'js-nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode,
				i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );
} () );
