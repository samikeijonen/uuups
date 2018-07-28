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
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php Hybrid\Attr\render( 'body' ); ?>>

<div class="app">
	<header class="app-header flex justify-between items-center mx-auto max-width-1 px-2 py-4">
		<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'uuups' ); ?></a>

		<div class="app-header__branding">
		<?php
			Hybrid\Site\render_title( [
				'class' => 'app-header__title mb-0 h3 font-main fw-700',
				'tag'   => is_front_page() && is_home() ? 'h1' : 'p',
			] );

			Hybrid\Site\render_description( [
				'class' => 'app-header__title mb-0 h3 font-main fw-700',
				'tag'   => 'p',
			] );
		?>
		</div>

		<?php Hybrid\View\render( 'nav/menu', 'primary', [ 'name' => 'primary' ] ); ?>
	</header>
