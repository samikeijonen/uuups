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

<nav class="menu menu--<?= esc_attr( $data->name ) ?> pb-2" aria-label="<?php esc_attr_e( 'Social', 'uuups' ); ?>">
	<?php
	wp_nav_menu( [
		'theme_location' => $data->name,
		'container'      => '',
		'menu_id'        => '',
		'menu_class'     => 'menu__items menu__items--' . esc_attr( $data->name ),
		'link_before'    => '<span class="screen-reader-text">',
		'link_after'     => '</span>' . Uuups\get_svg( array( 'icon' => 'chain' ) ),
		'item_spacing'   => 'discard',
		'depth'          => 1,
	] );
	?>
</nav>
