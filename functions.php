<?php
/**
 * Theme functions.
 *
 * This file is used to load the autoload and bootstrap files necessary
 * for kick-starting the theme.
 *
 * @package   Uuups
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2018, Justin Tadlock
 * @link      https://github.com/samikeijonen/uuups/
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// Auto-load any projects via the Composer autoloader. Be sure to check if the
// file exists in case someone's using Composer to load their dependencies in
// a different directory.
if ( file_exists( get_parent_theme_file_path( 'vendor/autoload.php' ) ) ) {
	require_once get_parent_theme_file_path( 'vendor/autoload.php' );
}

// Bootstrap the theme. This loads any functions-files from the `/app` folder
// that are needed. If the theme needs a more robust bootstrapping process, it's
// recommended to create a `/bootstrap` folder and load those files directly.
array_map(
	function( $file ) {
		require_once get_parent_theme_file_path( "app/{$file}.php" );
	},
	[
		'functions-filters',
		'functions-fonts',
		'functions-icons',
		'functions-setup',
		'functions-template',
		'functions-videos',
	]
);
