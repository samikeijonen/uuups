<?php
/**
 * Template functions.
 *
 * This file holds functions related to templates.
 *
 * @package   Uuups
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2018, Justin Tadlock
 * @link      https://github.com/samikeijonen/uuups/
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Uuups;

/**
 * Returns a configuration object.
 *
 * @since  1.0.0
 * @access public
 * @param  string $name Config object.
 * @return object
 */
function config( $name ) {
	return app()->get( "config.{$name}" );
}

/**
 * Returns the metadata separator.
 *
 * @since  1.0.0
 * @access public
 * @param  string $sep Separator for metadata.
 * @return string
 */
function get_meta_sep( $sep = '' ) {

	return apply_filters( // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		app()->namespace . '_meta_sep',
		sprintf(
			' <span class="sep">%s</span> ',
			$sep ? $sep : esc_html_x( '&middot;', 'meta separator', 'uuups' )
		)
	);
}
