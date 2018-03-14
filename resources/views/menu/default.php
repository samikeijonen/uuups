<?php
/**
 * Displays navigation.
 *
 * @package Uuups
 */

namespace ABC;

if ( ! has_nav_menu( $data->name ) ) :
	return;
endif
?>

<nav class="menu menu--<?= esc_attr( $data->name ) ?>" id="js-menu--<?= esc_attr( $data->name ) ?>">
	<button id="menu-toggle" class="menu-toggle" aria-label="Menu" aria-expanded="false">
		<svg class="menu-toggle-icon" aria-hidden="true" focusable="false" viewBox="0 0 40 40">
			<line class="line line-1" x1="0" y1="12" x2="40" y2="12"></line>
			<line class="line line-2" x1="0" y1="20" x2="40" y2="20"></line>
			<line class="line line-3" x1="0" y1="28" x2="40" y2="28"></line>
		</svg>
	</button>

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
