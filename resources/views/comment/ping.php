<?php
/**
 * Ping comment template.
 *
 * @package Uuups
 */

?>
<li <?php Hybrid\attr( 'comment' ); ?>>

<div class="comment__meta">
	<span class="comment__author"><?php comment_author_link(); ?></span><br />
	<?php /* translators: %s how many days ago. */ ?>
	<a href="<?php comment_link(); ?>" class="comment__permalink"><time class="comment__published"><?php printf( __( '%s ago', 'uuups' ), esc_attr( human_time_diff( get_comment_time( 'U' ), current_time( 'timestamp' ) ) ) ); // phpcs:ignore WordPress.XSS.EscapeOutput ?></time></a>
	<?php edit_comment_link( null, Uuups\get_meta_sep() ); ?>
</div>

<?php /* No closing </li> is needed.  WordPress will know where to add it. */ ?>
