<?php
/**
 * Styles and scripts related functions, hooks, and filters.
 *
 * @package Uuups
 */

namespace Uuups;

use Hybrid\App;

/**
 * Enqueue scripts/styles.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
add_action(
	'wp_enqueue_scripts',
	function() {
		// Main scripts.
		wp_enqueue_script( 'uuups-app', asset( 'js/app.js' ), null, null, true );

		// Main styles.
		wp_enqueue_style( 'uuups-style', asset( 'css/style.css' ), null, null );

		// Comment script.
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// Dequeue Core block styles.
		wp_dequeue_style( 'wp-block-library' );
	},
	10
);

/**
 * Enqueue editor scripts/styles.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
add_action(
	'enqueue_block_editor_assets',
	function() {
		// Editor styles.
		wp_enqueue_style( 'uuups-editor', asset( 'css/editor.css' ), null, null );

		// Editor scripts.
		wp_enqueue_script(
			'uuups-editor-scripts',
			asset( 'js/editorScripts.js' ),
			[
				'wp-i18n',
				'wp-blocks',
				'wp-dom-ready',
				'wp-edit-post',
			],
			null,
			true
		);

		// Overwrite Core block styles with empty styles.
		wp_deregister_style( 'wp-block-library' );
		wp_register_style( 'wp-block-library', '' );

		// Overwrite Core theme styles with empty styles.
		wp_deregister_style( 'wp-block-library-theme' );
		wp_register_style( 'wp-block-library-theme', '' );
	},
	10
);

/**
 * Helper function for outputting an asset URL in the theme. This integrates
 * with Laravel Mix for handling cache busting. If used when you enqueue a script
 * or style, it'll append an ID to the file name.
 *
 * @link   https://laravel.com/docs/5.6/mix#versioning-and-cache-busting
 * @since  1.0.0
 * @access public
 * @param  string $path Path to asset.
 * @return string
 */
function asset( $path ) {
	// Get the manifest.
	$manifest = App::resolve( 'uuups/manifest' );

	if ( $manifest && isset( $manifest[ $path ] ) ) {
		$path = $manifest[ $path ];
	}

	return get_theme_file_uri( 'dist/' . $path );
}

/**
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 *
 * @since 1.0.0
 */
add_action(
	'wp_head',
	function() {
		echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
	},
	0
);
