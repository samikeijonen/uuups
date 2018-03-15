<?php
/**
 * Content template.
 *
 * @package Uuups
 */

namespace Uuups;

?>
<main id="main" class="app-main mx-auto max-width-1 px-2 py-4">
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
