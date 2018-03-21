<?php
/**
 * Ping comment template.
 *
 * @package Uuups
 */

?>
<li <?php hybrid_attr( 'comment' ); ?>>

	<div class="thread__meta">
		<span class="thread__author"><?php comment_author_link(); ?></span><br />
		<?php /* translators: %s how many days ago. */ ?>
		<a href="<?php comment_link(); ?>" class="comment__permalink"><time class="comment__published"><?php printf( esc_html__( '%s ago', 'uuups' ), esc_html( human_time_diff( get_comment_time( 'U' ) ), current_time( 'timestamp' ) ) ); ?></time></a>
		<?php edit_comment_link( null, get_meta_sep() ); ?>
	</div>

<?php
/* No closing </li> is needed.  WordPress will know where to add it. */
