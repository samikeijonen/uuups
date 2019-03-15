<?php
/**
 * Template functions.
 *
 * This file holds functions related to templates.
 *
 * @package Uuups
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
function sep( $sep = '' ) {

	return apply_filters(
		'uuups/sep',
		sprintf(
			' <span class="sep">%s</span> ',
			$sep ?: esc_html_x( '&middot;', 'meta separator', 'uuups' )
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
	if ( is_front_page() && is_home() ) :
		?>
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
			<p class="app-header__description color-grey-60 font-size-1 mb-0"><?php echo $description; // phpcs:ignore WordPress.XSS.EscapeOutput ?></p>
		<?php
	endif;
}

/**
 * Displays an optional post thumbnail.
 *
 * Wraps the post thumbnail in an anchor element on index views, or a div
 * element when on single views.
 *
 * @since  1.0.0
 * @access public
 */
function post_thumbnail() {
	if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
		return;
	}

	if ( is_singular() ) :
		?>

		<div class="entry__thumbnail">
			<?php the_post_thumbnail(); ?>
		</div><!-- .entry__thumbnail -->

	<?php else : ?>

		<a class="post-thumbnail block mb-2" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
			<?php
			the_post_thumbnail(
				'post-thumbnail',
				[
					'alt' => the_title_attribute(
						[
							'echo' => false,
						]
					),
				]
			);
			?>
		</a>

		<?php
	endif; // End is_singular().
}
