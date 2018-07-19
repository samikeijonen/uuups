<?php
/**
 * Comments pagination.
 *
 * @package uuups
 */

Hybrid\Pagination\render( 'comments', [
	'prev_text'          => Uuups\get_svg( [ 'icon' => 'arrow-left' ] ) . '<span class="screen-reader-text">' . esc_html__( 'Previous page', 'uuups' ) . '</span>',
	'next_text'          => '<span class="screen-reader-text">' . esc_html__( 'Next page', 'uuups' ) . '</span>' . Uuups\get_svg( [ 'icon' => 'arrow-right' ] ),
	'before_page_number' => '<span class="screen-reader-text">' . esc_html__( 'Page', 'uuups' ) . ' </span>',
] );
