<?php
/**
 * Default content template.
 *
 * @package Uuups
 */

namespace ABC;

?>
<article <?php hybrid_attr( 'entry' ); ?>>
	<?php if ( get_the_ID() === get_queried_object_id() ) : ?>

		<header class="entry__header">
			<h1 class="entry__title"><?php single_post_title(); ?></h1>
		</header>

		<div class="entry__content">
			<?php
			the_content();
			render_view( 'partials', 'pagination-singular' );
			?>
		</div>

	<?php else : ?>

		<header class="entry__header">
			<h2 class="entry__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		</header>

		<div class="entry__summary">
			<?php the_excerpt(); ?>
		</div>

	<?php endif ?>
</article>
