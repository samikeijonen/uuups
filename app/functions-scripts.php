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
add_action( 'wp_enqueue_scripts', function() {// Main scripts.
	wp_enqueue_script( 'uuups-app', asset( 'scripts/app.js' ), null, false, true );

	// Add custom fonts.
	wp_enqueue_style( 'uuups-fonts', fonts_url(), null, null );

	// Main styles.
	wp_enqueue_style( 'uuups-style', asset( 'styles/style.css' ), null );

	// Comments JS.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

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
	wp_enqueue_style( 'uuups-blocks', asset( 'styles/editor.css' ), null );
}, 10 );

/**
 * Helper function for getting the script/style `.min` suffix for minified files.
 *
 * @return string
 */
function get_min_suffix() {
	return defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ? '' : '.min';
}
