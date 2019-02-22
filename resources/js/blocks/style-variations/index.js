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
	/**
	 * Unregister default and squared button styles.
	 * This way we can register them again with squared as default.
	 */
	wp.blocks.unregisterBlockStyle( 'core/button', 'default' );
	wp.blocks.unregisterBlockStyle( 'core/button', 'squared' );

	// This is squared.
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'default',
		label: __( 'Default', 'uuups' ),
		isDefault: true,
	} );

	// This was originally default by Core.
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'rounded',
		label: __( 'Rounded', 'uuups' ),
	} );

	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'underlined',
		label: __( 'Underlined', 'uuups' ),
	} );

	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'outline-rounded',
		label: __( 'Outline rounded', 'uuups' ),
	} );

	wp.blocks.registerBlockStyle( 'core/paragraph', {
		name: 'ingress',
		label: __( 'Ingress', 'uuups' ),
	} );

	wp.blocks.registerBlockStyle( 'core/paragraph', {
		name: 'highlight',
		label: __( 'Highlight', 'uuups' ),
	} );
} );
