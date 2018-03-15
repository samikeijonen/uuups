<?php
/**
 * Posts pagination.
 *
 * @package Uuups
 */

namespace Uuups;

posts_pagination( [
	'prev_text'       => __( '&larr; Previous', 'uuups' ),
	'next_text'       => __( 'Next &rarr;', 'uuups' ),
	'title_text'      => __( 'Posts Navigation', 'uuups' ),
	'container_class' => 'pagination pagination--posts',
	'title_class'     => 'pagination__title screen-reader-text',
] );
