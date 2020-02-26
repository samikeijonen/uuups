<?php
/**
 * Default content template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\Attr\display( 'entry' ); ?>>
	<header class="entry__header text-center">
		<h1 class="entry__title"><?php single_post_title(); ?></h1>
	</header>

	<div class="entry__content">
		<?php
		the_content();
		Hybrid\View\display( 'nav/pagination', 'post' );
		?>
	</div>
</article>
