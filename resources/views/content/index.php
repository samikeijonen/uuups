<?php
/**
 * Content template.
 *
 * @package Uuups
 */

?>
<main id="main" class="app-main py-4">
	<?php
	Hybrid\render_view( 'partials', 'archive-header' );

	if ( have_posts() ) :
		global $wp_query;
		while ( have_posts() ) :
			the_post();

			if ( 0 == $wp_query->current_post ) :
				echo '<div class="grid grid--bigger">';
			endif;

			Hybrid\render_view( 'entry/archive', Hybrid\get_post_hierarchy() );

			if ( 1 == $wp_query->current_post ) :
				echo '</div><div class="grid hide-excerpt">';
			endif;
		endwhile;
		echo '</div>';

		Hybrid\render_view( 'partials', 'pagination-posts' );

	endif;
	?>
</main>
