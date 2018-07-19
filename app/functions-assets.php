<?php
/**
 * Styles and scripts related functions, hooks, and filters.
 *
 * @package    Uuups
 */

namespace Uuups;

/**
 * Enqueue scripts/styles.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
add_action( 'wp_enqueue_scripts', function() {
	// Main scripts.
	wp_enqueue_script( 'uuups-app', asset( 'scripts/app.js' ), null, null, true );

	// Add custom fonts.
	wp_enqueue_style( 'uuups-fonts', fonts_url(), null, null );

	// Main styles.
	wp_enqueue_style( 'uuups-style', asset( 'styles/style.css' ), null, null );

	// Dequeue Core block styles.
	wp_dequeue_style( 'wp-core-blocks' );
}, 10 );

/**
 * Enqueue editor scripts/styles.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
add_action( 'enqueue_block_editor_assets', function() {
	// Main block styles.
	wp_enqueue_style( 'uuups-blocks', asset( 'styles/editor.css' ), null, null );

	// Overwrite Core theme styles with empty styles.
	wp_deregister_style( 'wp-core-blocks-theme' );
	wp_register_style( 'wp-core-blocks-theme', asset( 'styles/theme.css' ), null, null );
}, 10 );

/**
 * Helper function for getting the script/style `.min` suffix for minified files.
 *
 * @return string
 */
function get_min_suffix() {
	return defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ? '' : '.min';
}
