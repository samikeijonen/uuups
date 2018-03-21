<?php
/**
 * Create responsive videos by wrapping them in a div.
 *
 * @package Foxer
 */

namespace Uuups;

/**
 * Wraps embeds with `.embed-wrap` class.
 *
 * @since  1.0.0
 * @access public
 * @param  string $html Embeds html.
 * @return string
 */
function wrap_embed_html( $html ) {
	return $html && is_string( $html ) ? sprintf( '<div class="wp-block-embed__wrapper">%s</div>', $html ) : $html;
}

/**
 * Checks embed URL patterns to see if they should be wrapped in some special HTML, particularly
 * for responsive videos.
 *
 * @author     Automattic
 * @link       http://jetpack.me
 * @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 * @since  1.0.0
 * @access public
 * @param  string $html Embeds html.
 * @param  string $url  Embeds url.
 * @return string
 */
function maybe_wrap_embed( $html, $url ) {
	if ( ! $html || ! is_string( $html ) || ! $url ) {
		return $html;
	}

	$do_wrap = false;

	$patterns = [
		'#http://((m|www)\.)?youtube\.com/watch.*#i',
		'#https://((m|www)\.)?youtube\.com/watch.*#i',
		'#http://((m|www)\.)?youtube\.com/playlist.*#i',
		'#https://((m|www)\.)?youtube\.com/playlist.*#i',
		'#http://youtu\.be/.*#i',
		'#https://youtu\.be/.*#i',
		'#https?://(.+\.)?vimeo\.com/.*#i',
		'#https?://(www\.)?dailymotion\.com/.*#i',
		'#https?://dai.ly/*#i',
		'#https?://(www\.)?hulu\.com/watch/.*#i',
		'#https?://wordpress.tv/.*#i',
		'#https?://(www\.)?funnyordie\.com/videos/.*#i',
		'#https?://vine.co/v/.*#i',
		'#https?://(www\.)?collegehumor\.com/video/.*#i',
		'#https?://(www\.|embed\.)?ted\.com/talks/.*#i',
	];

	$patterns = apply_filters( app()->namespace . '_maybe_wrap_embed_patterns', $patterns ); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound

	foreach ( $patterns as $pattern ) {
		$do_wrap = preg_match( $pattern, $url );

		if ( $do_wrap ) {
			return wrap_embed_html( $html );
		}
	}

	return $html;
}
add_filter( 'embed_oembed_html', __NAMESPACE__ . '\maybe_wrap_embed', 10, 2 );
