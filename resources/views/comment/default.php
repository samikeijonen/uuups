<?php
/**
 * Default comment template.
 *
 * @package Uuups
 */

?>
<li <?php Hybrid\Attr\render( 'comment' ); ?>>

	<header class="comment__meta flex items-center font-size-88">
		<?= get_avatar( $data->comment, 120, '', '', [ 'class' => 'comment__avatar' ] ) ?>

		<div class="comment__info">
			<span class="comment__author fw-700"><?php comment_author_link(); ?></span>
			<br />
			<?php /* translators: %s how many days ago. */ ?>
			<a href="<?php comment_link(); ?>" class="comment__permalink"><time class="comment__published"><?php printf( __( '%s ago', 'uuups' ), esc_attr( human_time_diff( get_comment_time( 'U' ) ) ) ); // phpcs:ignore WordPress.XSS.EscapeOutput ?></time></a>
			<?php edit_comment_link( null, Uuups\get_meta_sep() ); ?>
			<?php Hybrid\Comment\render_reply_link( [ 'before' => Uuups\get_meta_sep() ] ); ?>
		</div>
	</header>

	<div class="comment__content">
		<?php if ( '0' === $data->comment->comment_approved ) : ?>
			<p class="comment__moderation">
				<?php esc_html_e( 'Your comment is awaiting moderation.', 'uuups' ); ?>
			</p>
		<?php endif; ?>

		<?php comment_text(); ?>
	</div>

<?php /* No closing </li> is needed.  WordPress will know where to add it. */ ?>
