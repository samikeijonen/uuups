// WordPress dependencies.
const { __ } = wp.i18n;

/**
 * Add new button style variants.
 *
 * This adds new class `is-style-underlined` and `is-style-outline-rounded` to button block.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#block-style-variations
 */
wp.domReady( () => {
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'underlined',
		label: __( 'Underlined', 'uuups' ),
	} );

	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'outline-rounded',
		label: __( 'Outline rounded', 'uuups' ),
	} );
} );
