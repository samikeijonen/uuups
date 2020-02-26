<?php
/**
 * Ping comment template.
 *
 * @package Uuups
 */

?>
<li <?php Hybrid\Attr\display( 'comment' ); ?>>

<div class="comment__meta">
	<?php
	Hybrid\Comment\display_author( [ 'after' => '<br />' ] );

	Hybrid\Comment\display_permalink(
		[
			'text' => sprintf(
				// Translators: 1 is the comment date and 2 is the time.
				esc_html__( '%1$s at %2$s', 'uuups' ),
				Hybrid\Comment\render_date(),
				Hybrid\Comment\render_time()
			),
		]
	);

	Hybrid\Comment\display_edit_link( [ 'before' => Uuups\sep() ] );
	?>
</div>

<?php /* No closing </li> is needed.  WordPress will know where to add it. */ ?>
