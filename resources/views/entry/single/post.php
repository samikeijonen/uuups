<?php
/**
 * Post content template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\attr( 'entry' ); ?>>
	<header class="entry__header text-center">
		<h1 class="entry__title"><?php single_post_title(); ?></h1>

		<div class="entry__byline pb-2">
			<?php Hybrid\post_author(); ?>
			<?php Hybrid\post_date( [ 'before' => Uuups\get_meta_sep() ] ); ?>
			<?php Hybrid\post_comments( [ 'before' => Uuups\get_meta_sep() ] ); ?>
		</div>
	</header>

	<div class="entry__content">
		<?php
		the_content();
		Hybrid\render_view( 'partials', 'pagination-singular' );
		?>
	</div>

	<footer class="entry__footer">
		<?php
			Hybrid\post_terms( [ 'taxonomy' => 'category' ] );

			Hybrid\post_terms( [
				'taxonomy' => 'post_tag',
				'before'   => Uuups\get_meta_sep(),
			] );
		?>
	</footer>
</article>
