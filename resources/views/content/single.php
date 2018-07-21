<?php
/**
 * Content single template.
 *
 * @package Uuups
 */

?>
<main id="main" class="app-main px-2 py-4">
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();

			Hybrid\View\render( 'entry/single', Hybrid\Post\hierarchy() );
		endwhile;

		comments_template();

	endif;
	?>
</main>
