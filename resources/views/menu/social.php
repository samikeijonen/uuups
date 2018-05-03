<?php
/**
 * Displays social links navigation.
 *
 * @package Uuups
 */

if ( ! has_nav_menu( $data->name ) ) :
	return;
endif
?>

<nav class="menu menu--<?= esc_attr( $data->name ) ?> pb-2">
	<?php
	echo Hybrid\get_svg( 'angle-down.svg', [ 'title' => 'This is title', 'desc' => 'This is desc' ] );
	wp_nav_menu( [
		'theme_location' => $data->name,
		'container'      => '',
		'menu_id'        => '',
		'menu_class'     => 'menu__items menu__items--' . esc_attr( $data->name ),
		'link_before'    => '<span class="screen-reader-text">',
		'link_after'     => '</span>' . Hybrid\get_svg( 'chain.svg' ),
		'item_spacing'   => 'discard',
		'depth'          => 1,
	] );
	?>
</nav>
