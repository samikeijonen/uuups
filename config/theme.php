<?php
/**
 * Theme variables.
 *
 * @package Uuups
 */

return [

	/*
	 *-------------------------------------------------------------------------
	 * Theme namespace.
	 *-------------------------------------------------------------------------
	 *
	 * A prefix/namespace used for filter hooks and such in the theme.
	 *
	 */
	'namespace' => get_template(),

	/*
	 *-------------------------------------------------------------------------
	 * Theme version.
	 *-------------------------------------------------------------------------
	 *
	 * The version number for the theme (used mostly for script/styles).
	 *
	 */
	'version'   => wp_get_theme( get_template() )->get( 'Version' ),

	/*
	 *-------------------------------------------------------------------------
	 * Theme Directory Path
	 *-------------------------------------------------------------------------
	 *
	 * The absolute path to the theme directory (e.g., `/htdocs/wp-content/themes/uuups`).
	 *
	 */
	'dir'       => trailingslashit( get_parent_theme_file_path() ),

	/*
	 *-------------------------------------------------------------------------
	 * Theme Directory URI
	 *-------------------------------------------------------------------------
	 *
	 * URI to the theme directory (e.g., `http://localhost/wp-content/themes/uuups`).
	 *
	 */
	'uri'       => trailingslashit( get_parent_theme_file_uri() ),
];
