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
<html <?php language_attributes( 'html' ); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php hybrid_attr( 'body' ); ?>>

<div class="app">
	<header class="app-header flex justify-between items-center mx-auto max-width-1 px-3 py-4">
		<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'uuups' ); ?></a>

		<div class="app-header__branding">
			<h1 class="app-header__title mb-0 h3"><a class="decoration-none color-dark" href="<?= esc_url( home_url() ) ?>"><?php bloginfo( 'name' ); ?></a></h1>
			<p class="app-header__description mb-0"><?php bloginfo( 'description' ); ?></p>
		</div>

		<?php ABC\render_view( 'menu', 'primary', [ 'name' => 'primary' ] ); ?>
	</header>
