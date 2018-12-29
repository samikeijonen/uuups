<?php
/**
 * The header for our theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Uuups
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body <?php Hybrid\Attr\display( 'body' ); ?>>

<div class="app mx-auto max-width-full">
	<header class="app-header flex justify-between items-center mx-auto max-width-1 px-2 py-4">
		<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'uuups' ); ?></a>

		<div class="app-header__branding">
		<?php
			Uuups\site_title();
			Uuups\site_description();
		?>
		</div>

		<?php Hybrid\View\display( 'nav/menu', 'primary', [ 'name' => 'primary' ] ); ?>
	</header>
