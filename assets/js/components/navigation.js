/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
const navigation = () => {
	// Menu variable.
	const container = document.getElementById( 'js-menu--primary' );

	// Bail if there is no menu.
	if ( ! container ) {
		return;
	}

	// Variables.
	const button = container.getElementsByTagName( 'button' )[ 0 ];
	const menu = container.getElementsByTagName( 'ul' )[ 0 ];
	const links = menu.getElementsByTagName( 'a' );
	let timeout;

	/**
	 * Is menu open.
	 *
	 * @return {boolean} True or false.
	 */
	function isMenuOpen() {
		const isMenuOpenCheck = ( 'false' === button.getAttribute( 'aria-expanded' ) ) ? false : true;
		return isMenuOpenCheck;
	}

	/**
	 * Toggle menu classes and ARIA.
	 */
	function toggleMenu() {
		container.classList.toggle( 'is-opened' );
		menu.classList.toggle( 'is-opened' );

		const expanded = ( 'false' === button.getAttribute( 'aria-expanded' ) ) ? 'true' : 'false';
		button.setAttribute( 'aria-expanded', expanded );
	}

	/**
	 * Set focus when nav is open.
	 */
	function setFocus() {
		// Bail if menu is not open.
		if ( ! isMenuOpen() ) {
			return;
		}

		// Set focusable elements inside main navigation.
		const focusableElements = container.querySelectorAll( [ 'a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])' ] );
		const firstFocusableElement = focusableElements[ 0 ];
		const lastFocusableElement = focusableElements[ focusableElements.length - 1 ];

		// Redirect last Tab to first focusable element.
		lastFocusableElement.addEventListener( 'keydown', function( e ) {
			if ( ( 9 === e.keyCode && ! e.shiftKey ) ) {
				e.preventDefault();
				button.focus(); // Set focus on first element - that's actually close menu button.
			}
		}, false );

		// Redirect first Shift+Tab to toggle button element.
		firstFocusableElement.addEventListener( 'keydown', function( e ) {
			if ( ( 9 === e.keyCode && e.shiftKey ) ) {
				e.preventDefault();
				button.focus(); // Set focus on first element.
			}
		}, false );

		// Redirect Shift+Tab from the toggle button to last focusable element.
		button.addEventListener( 'keydown', function( e ) {
			if ( ( 9 === e.keyCode && e.shiftKey ) ) {
				e.preventDefault();
				lastFocusableElement.focus(); // Set focus on last element.
			}
		}, false );
	}

	/**
	 * Reset menu on "desktop".
	 */
	function resetMenu() {
		// If menu toggle button have display: none css rule, we're on desktop.
		if ( 'none' === window.getComputedStyle( button, null ).getPropertyValue( 'display' ) ) {
			container.classList.remove( 'is-opened' );
			menu.classList.remove( 'is-opened' );
			button.setAttribute( 'aria-expanded', 'false' );
		}
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		let self = this;

		// Move up through the ancestors of the current link until we hit .js-nav-menu.
		while ( -1 === self.className.indexOf( 'js-nav-menu' ) ) {
			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.classList.remove( 'focus' );
				} else {
					self.classList.add( 'focus' );
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Each time a menu link is focused or blurred, toggle focus.
	 */
	function menuLinksFocused() {
		if ( ! menu.classList.contains( 'js-nav-menu' ) ) {
			menu.classList.add( 'js-nav-menu' );
		}

		for ( let i = 0; i < links.length; i++ ) {
			links[ i ].addEventListener( 'focus', toggleFocus, true );
			links[ i ].addEventListener( 'blur', toggleFocus, true );
		}
	}

	// Toggle menu on button click.
	button.addEventListener( 'click', function() {
		toggleMenu();

		setFocus();
	}, false );

	// Close menu using Esc key.
	document.addEventListener( 'keyup', function( event ) {
		if ( 27 === event.keyCode && isMenuOpen() ) {
			toggleMenu();
			button.focus();
		}
	}, false );

	// Reset menu when on "desktop".
	window.addEventListener( 'resize', function() {
		// Wait for a while before firing the event again.
		if ( ! timeout ) {
			timeout = setTimeout( function() { /* eslint-disable-line no-undef */
				// Reset timeout
				timeout = null;

				// Run our resize functions
				resetMenu();
			}, 66 );
		}
	}, false );

	// Init menu link focus class.
	menuLinksFocused();
};

export default navigation;
