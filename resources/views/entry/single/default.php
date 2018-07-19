<?php
/**
 * Default content template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\Attr\render( 'entry' ); ?>>
	<header class="entry__header text-center">
		<h1 class="entry__title"><?php single_post_title(); ?></h1>
	</header>

	<div class="entry__content">
		<?php
		the_content();
		Hybrid\View\render( 'partials', 'pagination-singular' );
		?>
	</div>
</article>
