<?php
/**
 * Content template.
 *
 * @package Uuups
 */

?>
<main id="main" class="app-main mx-auto max-width-1 px-2 py-4">
	<?php
	Hybrid\render_view( 'partials', 'archive-header' );

	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();

			Hybrid\render_view( 'entry/archive', Hybrid\get_post_hierarchy() );
		endwhile;

		Hybrid\render_view( 'partials', 'pagination-posts' );

	endif;
	?>
</main>
