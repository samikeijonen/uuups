<?php
/**
 * The sidebar containing widget areas.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Uuups
 */

if ( ! is_active_sidebar( $data->name ) ) :
	return;
endif
?>

<aside class="sidebar sidebar--<?= esc_attr( $data->name ) ?> mx-auto max-width-1 px-2 py-4">
	<?php dynamic_sidebar( esc_attr( $data->name ) ); ?>
</aside>
