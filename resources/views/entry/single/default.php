<?php
/**
 * Default content template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\attr( 'entry' ); ?>>
	<header class="entry__header px-2 text-center">
		<h1 class="entry__title"><?php single_post_title(); ?></h1>
	</header>

	<div class="entry__content">
		<?php
		the_content();
		Hybrid\render_view( 'partials', 'pagination-singular' );
		?>
	</div>
</article>
