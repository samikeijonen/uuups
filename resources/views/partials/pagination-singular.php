<?php
/**
 * Singular pagination.
 *
 * @package Uuups
 */

namespace Uuups;

singular_pagination( [
	'show_all'        => true,
	'prev_next'       => false,
	'title_text'      => __( 'Pages:', 'uuups' ),
	'container_class' => 'pagination pagination--singular',
] );
