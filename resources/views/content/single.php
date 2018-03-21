<?php
/**
 * Content single template.
 *
 * @package Uuups
 */

?>
<main id="main" class="app-main mx-auto max-width-1 px-2 py-4">
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();

			Hybrid\render_view( 'entry/single', Hybrid\get_post_hierarchy() );
		endwhile;

		comments_template( '/resources/views/partials/comments.php' );

	endif;
	?>
</main>
