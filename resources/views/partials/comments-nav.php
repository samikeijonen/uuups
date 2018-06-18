<?php
/**
 * Comments navigation.
 *
 * @package Uuups
 */

if ( get_option( 'page_comments' ) && 1 < get_comment_pages_count() ) : ?>
	<nav class="comments-nav" aria-label="<?php esc_attr_e( 'Comments', 'uuups' ); ?>">
		<div class="flex justify-between">
			<?php
			previous_comments_link( _x( '&larr; Previous', 'comments navigation', 'uuups' ) );
			?>

			<span class="page-numbers">
			<?php
				printf(
					// Translators: Comments page numbers. 1 is current page and 2 is total pages.
					__( 'Page %1$s of %2$s', 'uuups' ),
					get_query_var( 'cpage' ) ? absint( get_query_var( 'cpage' ) ) : 1,
					absint( get_comment_pages_count() )
				);
			?>
			</span>

			<?php
			next_comments_link( _x( 'Next &rarr;', 'comments navigation', 'uuups' ) );
			?>
		</div>
	</nav>
<?php
endif;
