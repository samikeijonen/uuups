<?php
/**
 * Post content template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\Attr\render( 'entry' ); ?>>
	<header class="entry__header text-center">
		<h1 class="entry__title"><?php single_post_title(); ?></h1>

		<div class="entry__byline pb-2">
			<?php Hybrid\Post\render_author(); ?>
			<?php Hybrid\Post\render_date( [ 'before' => Uuups\sep() ] ); ?>
			<?php Hybrid\Post\render_comments_link( [ 'before' => Uuups\sep() ] ); ?>
		</div>
	</header>

	<div class="entry__content">
		<?php
		the_content();
		Hybrid\View\render( 'partials', 'pagination-singular' );
		?>
	</div>

	<footer class="entry__footer">
		<?php
			Hybrid\Post\render_terms( [
				'taxonomy' => 'category',
				'before'   => '<span class="terms-wrapper"><span class="screen-reader-text">' . esc_html__( 'Categories:', 'uuups' ) . ' </span>' . Uuups\get_svg( [ 'icon' => 'folder-open' ] ),
				'after'    => '</span>',
			] );

			Hybrid\Post\render_terms( [
				'taxonomy' => 'post_tag',
				'before'   => '<span class="terms-wrapper"><span class="screen-reader-text">' . esc_html__( 'Tags:', 'uuups' ) . ' </span>' . Uuups\get_svg( [ 'icon' => 'hashtag' ] ),
				'after'    => '</span>',
			] );
		?>
	</footer>
</article>
