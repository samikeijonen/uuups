<?php
/**
 * Content template.
 *
 * @package Uuups
 */

?>
<main id="main" class="app-main grid grid--blog px-2 py-4 mx-auto max-width-1">
	<?php
	Hybrid\View\render( 'partials', 'archive-header' );

	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();

			Hybrid\View\render( 'entry/archive', Hybrid\Post\hierarchy() );
		endwhile;

		Hybrid\View\render( 'nav/pagination', 'posts' );
	endif;
	?>
</main>
