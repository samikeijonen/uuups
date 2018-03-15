<?php
/**
 * Template functions.
 *
 * This file holds functions related to templates.
 *
 * @package   ABC
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2018, Justin Tadlock
 * @link      https://themehybrid.com/themes/abc
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace ABC;

/**
 * Returns a view object.
 *
 * @since  1.0.0
 * @access public
 * @param  string       $name  Name of object.
 * @param  array|string $slugs Slug of object.
 * @param  array        $data  Data of objec.
 * @return object
 */
function get_view( $name, $slugs = [], $data = [] ) {

	return new View( $name, $slugs, new Collection( $data ) );
}

/**
 * Outputs a view template.
 *
 * @since  1.0.0
 * @access public
 * @param  string       $name  Name of object.
 * @param  array|string $slugs Slug of object.
 * @param  array        $data  Data of object.
 * @return void
 */
function render_view( $name, $slugs = [], $data = [] ) {

	get_view( $name, $slugs, $data )->render();
}

/**
 * Returns a view template as a string.
 *
 * @since  1.0.0
 * @access public
 * @param  string       $name  Name of string.
 * @param  array|string $slugs Slug of string.
 * @param  array        $data  Data of string.
 * @return string
 */
function fetch_view( $name, $slugs = [], $data = [] ) {

	return get_view( $name, $slugs, $data )->fetch();
}

/**
 * Wrapper for the core WP `locate_template()` function. Runs the templates
 * through `filter_templates()` to change the file paths.
 *
 * @since  1.0.0
 * @access public
 * @param  array|string $templates    Template file(s) to search for, in order.
 * @param  bool         $load         If true the template file will be loaded if it is found.
 * @param  bool         $require_once Whether to require_once or require.
 * @return string
 */
function locate_template( $templates, $load = false, $require_once = true ) {

	return \locate_template( filter_templates( (array) $templates ), $load, $require_once );
}

/**
 * Filters an array of templates and prefixes them with the
 * `/resources/views/` file path.
 *
 * @since  1.0.0
 * @access public
 * @param  array $templates Template file(s) to search for, in order.
 * @return array
 */
function filter_templates( $templates ) {

	array_walk( $templates, function( &$template, $key ) {

		$path = 'resources/views';

		$template = ltrim( str_replace( $path, '', $template ), '/' );

		$template = "{$path}/{$template}";
	} );

	return $templates;
}

/**
 * Returns the template hierarchy from the theme wrapper.
 *
 * @since  1.0.0
 * @access public
 * @return array
 */
function get_template_hierarchy() {

	return app()->get( 'wrapper' )->hierarchy;
}

/**
 * Returns a configuration object.
 *
 * @since  1.0.0
 * @access public
 * @param  string $name Gonfig name.
 * @return object
 */
function config( $name ) {

	return app()->get( "config.{$name}" );
}

/**
 * Wrapper function for the `Collection` class.
 *
 * @since  1.0.0
 * @access public
 * @param  array $items Items collection.
 * @return object
 */
function collect( $items = [] ) {

	return new Collection( $items );
}

/**
 * Returns the metadata separator.
 *
 * @since  1.0.0
 * @access public
 * @param  string $sep Serarator.
 * @return string
 */
function get_meta_sep( $sep = '' ) {

	return apply_filters( // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		app()->namespace . '_meta_sep',
		sprintf(
			'<span class="sep">%s</span>',
			$sep ? $sep : esc_html_x( '&middot;', 'meta separator', 'uuups' )
		)
	);
}

/**
 * Returns a new `Pagination` object.
 *
 * @since  1.0.0
 * @access public
 * @param  array $args Pagination arguments.
 * @return object
 */
function pagination( $args = [] ) {

	return new Pagination( $args );
}

/**
 * Outputs the posts pagination.
 *
 * @since  1.0.0
 * @access public
 * @param  array $args Pagination arguments.
 * @return void
 */
function posts_pagination( $args = [] ) {
	echo pagination( $args )->fetch(); // phpcs:ignore WordPress.XSS.EscapeOutput.OutputNotEscaped
}

/**
 * Single post pagination. This is a replacement for `wp_link_pages()`
 * using our `Pagination` class.
 *
 * @since  1.0.0
 * @access public
 * @param  array $args Singular pagination arguments.
 * @global int   $page
 * @global int   $numpages
 * @global bool  $multipage
 * @global bool  $more
 * @global object $wp_rewrite
 * @return void
 */
function singular_pagination( $args = [] ) {
	global $page, $numpages, $multipage, $more, $wp_rewrite;

	if ( ! $multipage ) {
		return;
	}

	$url_parts = explode( '?', html_entity_decode( get_permalink() ) );
	$base      = trailingslashit( $url_parts[0] ) . '%_%';

	$format  = $wp_rewrite->using_index_permalinks() && ! strpos( $base, 'index.php' ) ? 'index.php/' : '';
	$format .= $wp_rewrite->using_permalinks() ? user_trailingslashit( '/%#%' ) : '?page=%#%';

	$args = (array) $args + [
		'base'    => $base,
		'format'  => $format,
		'current' => ! $more && 1 === $page ? 0 : $page,
		'total'   => $numpages,
	];

	echo pagination( $args )->fetch(); // phpcs:ignore WordPress.XSS.EscapeOutput.OutputNotEscaped
}
