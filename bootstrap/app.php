<?php
/**
 * App bootstrap.
 *
 * This file bootstraps the theme. It sets up the single, one-true instance
 * of the app, which can be accessed via the `app()` function.  The file is
 * used to configure any "global" configuration and load any functions-files
 * that are needed for the theme.
 *
 * @package   Uuups
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2018, Justin Tadlock
 * @link      https://github.com/samikeijonen/uuups/
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Uuups;

use function Hybrid\app;

// Load functions files.
array_map(
	function( $file ) {
		require_once get_parent_theme_file_path( "app/{$file}.php" );
	},
	// Add file names of files to auto-load from the `/app` folder.
	// Classes are auto-loaded, so we only need this for functions-files.
	[
		'functions-filters',
		'functions-fonts',
		'functions-icons',
		'functions-setup',
		'functions-template',
		'functions-videos',
	]
);

// Runs after the app has been bootstrapped.
do_action( 'uuups_bootstrapped', app() );
