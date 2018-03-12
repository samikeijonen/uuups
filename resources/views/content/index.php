<?php
/**
 * Content template.
 *
 * @package Uuups
 */

namespace ABC;

?>
<main class="app-main">
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();

			render_view( 'entry', get_post_type() );

			if ( is_singular() ) :
				comments_template( '/resources/views/partials/comments.php' );
			endif;
		endwhile;

		if ( hybrid_is_plural() ) :
			render_view( 'partials', 'pagination-posts' );
		endif;

	endif;
	?>
</main>
