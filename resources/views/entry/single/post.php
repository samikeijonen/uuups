<?php
/**
 * Post content template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\Attr\display( 'entry' ); ?>>
	<header class="entry__header text-center">
		<h1 class="entry__title"><?php single_post_title(); ?></h1>

		<div class="entry__byline pb-2">
			<?php Hybrid\Post\display_author(); ?>
			<?php Hybrid\Post\display_date( [ 'before' => Uuups\sep() ] ); ?>
			<?php Hybrid\Post\display_comments_link( [ 'before' => Uuups\sep() ] ); ?>
		</div>
	</header>

	<div class="entry__content">
		<?php
		the_content();
		Hybrid\View\display( 'nav/pagination', 'post' );
		?>
	</div>

	<footer class="entry__footer">
		<?php
		Hybrid\Post\display_terms(
			[
				'taxonomy' => 'category',
				'before'   => '<span class="terms-wrapper"><span class="screen-reader-text">' . esc_html__( 'Categories:', 'uuups' ) . ' </span>' . Uuups\get_svg( [ 'icon' => 'folder-open' ] ),
				'after'    => '</span>',
			]
		);

		Hybrid\Post\display_terms(
			[
				'taxonomy' => 'post_tag',
				'before'   => '<span class="terms-wrapper"><span class="screen-reader-text">' . esc_html__( 'Tags:', 'uuups' ) . ' </span>' . Uuups\get_svg( [ 'icon' => 'hashtag' ] ),
				'after'    => '</span>',
			]
		);
		?>
	</footer>
</article>
