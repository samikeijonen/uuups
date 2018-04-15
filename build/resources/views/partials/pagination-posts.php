<?php
/**
 * Posts pagination.
 *
 * @package Uuups
 */

Hybrid\posts_pagination( [
	'prev_text'          => __( '&larr; Previous page', 'uuups' ),
	'next_text'          => __( 'Next page &rarr;', 'uuups' ),
	'title_text'         => __( 'Posts Navigation', 'uuups' ),
	'container_class'    => 'pagination pagination--posts',
	'title_class'        => 'pagination__title screen-reader-text',
	'before_page_number' => __( 'Page', 'uuups' ) . ' ',
] );
