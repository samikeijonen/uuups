<?php
/**
 * Archive template.
 *
 * @package Uuups
 */

?>
<article <?php Hybrid\Attr\display( 'entry' ); ?>>
	<?php Uuups\post_thumbnail(); ?>

	<header class="entry__header">
		<h2 class="entry__title h3"><a class="decoration-none h-decoration-underline color-dark" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	</header>

	<div class="entry__summary font-size-1">
		<?php the_excerpt(); ?>
	</div>
</article>
