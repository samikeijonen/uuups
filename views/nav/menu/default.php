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

<nav class="menu menu--<?= esc_attr( $data->name ) ?>" id="js-menu--<?= esc_attr( $data->name ) ?>" aria-label="<?php esc_attr_e( 'Top', 'uuups' ); ?>">
	<button id="menu-toggle" class="menu-toggle" aria-label=<?= esc_html__( 'Menu', 'uuups' ); ?> aria-expanded="false">
		<svg class="menu-toggle__icon" aria-hidden="true" focusable="false" viewBox="0 0 40 40">
			<line class="menu-toggle__line menu-toggle__line--1" x1="0" y1="12" x2="40" y2="12"></line>
			<line class="menu-toggle__line menu-toggle__line--2" x1="0" y1="20" x2="40" y2="20"></line>
			<line class="menu-toggle__line menu-toggle__line--3" x1="0" y1="28" x2="40" y2="28"></line>
		</svg>
	</button>

	<?php
	wp_nav_menu(
		[
			'theme_location' => $data->name,
			'container'      => '',
			'menu_id'        => '',
			'menu_class'     => 'menu__items menu__items--' . esc_attr( $data->name ) . ' animated fade-in-down',
			'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
			'item_spacing'   => 'discard',
		]
	);
	?>

</nav>
