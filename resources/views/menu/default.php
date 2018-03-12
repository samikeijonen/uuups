<?php
/**
 * Displays navigation.
 *
 * @package Uuups
 */

if ( ! has_nav_menu( $data->name ) ) :
	return;
endif
?>

<nav class="menu menu--<?= esc_attr( $data->name ) ?>">

	<?php
	wp_nav_menu( [
		'theme_location' => $data->name,
		'container'      => '',
		'menu_id'        => '',
		'menu_class'     => 'menu__items',
		'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
		'item_spacing'   => 'discard',
	] );
	?>

</nav>
