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

<aside class="sidebar sidebar--<?= esc_attr( $data->name ) ?>">
	<?php dynamic_sidebar( esc_attr( $data->name ) ); ?>
</aside>
