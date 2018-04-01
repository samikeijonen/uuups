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
 * Returns the metadata separator.
 *
 * @since  1.0.0
 * @access public
 * @param  string $sep Separator for metadata.
 * @return string
 */
function get_meta_sep( $sep = '' ) {

	return apply_filters(
		'uuups_meta_sep',
		sprintf(
			' <span class="sep">%s</span> ',
			$sep ? $sep : esc_html_x( '&middot;', 'meta separator', 'uuups' )
		)
	);
}

/**
 * The site title markup.
 *
 * @since  1.0.0
 * @access public
 */
function site_title() {
	if ( is_front_page() && is_home() ) : ?>
		<h1 class="app-header__title mb-0 h3 font-main fw-700"><a class="decoration-none color-dark" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
	<?php else : ?>
		<p class="app-header__title mb-0 h3 font-main fw-700"><a class="decoration-none color-dark" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
	<?php
	endif;
}

/**
 * The site description markup.
 *
 * @since  1.0.0
 * @access public
 */
function site_description() {
	$description = get_bloginfo( 'description', 'display' ); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound

	if ( $description || is_customize_preview() ) :
	?>
		<p class="app-header__description color-grey-60 font-size-88 mb-0"><?php echo $description; // phpcs:ignore WordPress.XSS.EscapeOutput ?></p>
	<?php
	endif;
}
