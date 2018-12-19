/**
 * Custom header preview.
 *
 * This file handles the JavaScript for the live preview of the `custom-header`
 * feature in the customizer.
 *
 * @package Uuups
 */

const customHeader = () => {
	// Site title.
	wp.customize( 'blogname', ( value ) => {
		value.bind( ( to ) => {
			document.querySelector( '.app-header__title a' ).textContent = to;
		} );
	} );

	// Site description.
	wp.customize( 'blogdescription', ( value ) => {
		value.bind( ( to ) => {
			document.querySelector( '.app-header__description' ).textContent = to;
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', ( value ) => {
		value.bind( ( to ) => {
			const headerItems = document.querySelectorAll(
				'.app-header__title a, .app-header__description'
			);

			headerItems.forEach( function( text ) {
				if ( 'blank' === to ) {
					text.style.clip = 'rect(0 0 0 0)';
					text.style.position = 'absolute';
				} else {
					text.style.clip = null;
					text.style.position = null;
					text.style.color = to;
				}
			} );
		} );
	} );
};

export default customHeader;
