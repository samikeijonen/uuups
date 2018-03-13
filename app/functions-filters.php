<?php
/**
 * Filter functions.
 *
 * This file holds functions that are used for filtering.
 *
 * @package   ABC
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2018, Justin Tadlock
 * @link      https://themehybrid.com/themes/abc
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace ABC;

/**
 * Filters the WP nav menu item CSS classes.
 *
 * @since  1.0.0
 * @access public
 * @param  array  $classes
 * @return array
 */
add_filter( 'nav_menu_css_class', function( $classes ) {
	$classes[] = 'menu__item';

	if ( in_array( 'current-menu-item', $classes, true ) ) {
		$classes[] = 'menu__item--active';
	}

	if ( in_array( 'current-menu-parent', $classes, true ) ) {
		$classes[] = 'menu__item--parent';
	}

	if ( in_array( 'current-menu-ancestor', $classes, true ) ) {
		$classes[] = 'menu__item--ancestor';
	}

	return $classes;
}, 10 );

/**
 * Filters the WP nav menu link attributes.
 *
 * @param array    $atts {
 *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
 *
 *     @type string $title  Title attribute.
 *     @type string $target Target attribute.
 *     @type string $rel    The rel attribute.
 *     @type string $href   The href attribute.
 * }
 * @param WP_Post  $item  The current menu item.
 * @param stdClass $args  An object of wp_nav_menu() arguments.
 * @param int      $depth Depth of menu item. Used for padding.
 * @return string  $attr
 */
add_filter( 'nav_menu_link_attributes', function( $atts, $item, $args, $depth ) {
	$atts['class'] = 'menu__anchor menu__anchor--' . $args->theme_location;

	if ( in_array( 'current-menu-item', $item->classes, true ) ) {
		$atts['class'] .= ' is-active';
	}

	return $atts;
}, 10, 4 );

/**
 * Overwrites the HTML classes for the comment form default fields.
 *
 * @since  1.0.0
 * @access public
 * @param  array  $fields
 * @return array
 */
add_filter( 'comment_form_default_fields', function( $fields ) {

	array_walk( $fields, function( &$field, $key ) {

		$field = replace_html_class(
			"comment-respond__field comment-respond__field--{$key}",
			$field
		);
	} );

	return $fields;
}, 10 );

/**
 * Overwrites the HTML classes for various comment form elements.
 *
 * @since  1.0.0
 * @access public
 * @param  array  $defaults
 * @return array
 */
add_filter( 'comment_form_defaults', function( $defaults ) {

	// Classes we can set.
	$defaults['class_form']   = 'comment-respond__form';
	$defaults['class_submit'] = 'comment-respond__submit';

	// Field wrappers.
	$defaults['comment_field'] = replace_html_class( 'comment-respond__field comment-respond__field--comment', $defaults['comment_field'] );
	$defaults['submit_field']  = replace_html_class( 'comment-respond__field comment-respond__field--submit', $defaults['submit_field'] );

	// Other elements.
	$defaults['must_log_in']          = replace_html_class( 'comment-respond__must-log-in', $defaults['must_log_in'] );
	$defaults['logged_in_as']         = replace_html_class( 'comment-respond__logged-in-as', $defaults['logged_in_as'] );
	$defaults['comment_notes_before'] = replace_html_class( 'comment-respond__notes color-grey-1 text-center', $defaults['comment_notes_before'] );
	$defaults['title_reply_before']   = replace_html_class( 'comment-respond__reply-title text-center', $defaults['title_reply_before'] );

	return $defaults;
}, 10 );

/**
 * Helper function for replacing a class in an HTML string.
 *
 * @since  1.0.0
 * @access public
 * @param  string $class Class to add.
 * @param  string $html HTML markup.
 * @return string
 */
function replace_html_class( $class, $html ) {
	return preg_replace(
		"/class=(['\"]).+?(['\"])/i",
		'class=$1' . esc_attr( $class ) . '$2',
		$html,
		1
	);
}
