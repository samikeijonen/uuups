<?php
/**
 * Filter functions.
 *
 * This file holds functions that are used for filtering.
 *
 * @package   Uuups
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2018, Justin Tadlock
 * @link      https://github.com/samikeijonen/uuups/
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Uuups;

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

	if ( in_array( 'button', $item->classes, true ) ) {
		$atts['class'] .= ' menu__anchor--button';
	}

	return $atts;
}, 10, 4 );
