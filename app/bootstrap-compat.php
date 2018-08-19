<?php
/**
 * WP and PHP compatibility.
 *
 * Functions used to gracefully fail when a theme doesn't meet the minimum WP or
 * PHP versions required. Note that only code that will work on PHP 5.2.4 should
 * go into this file. Otherwise, it'll break on sites not meeting the minimum
 * PHP requirement. Only call this file after initially checking that the site
 * doesn't meet either the WP or PHP requirement.
 *
 * @package    Uuups
 */

// Add actions to fail at certain points in the load process.
add_action( 'after_switch_theme', 'uuups_switch_theme' );
add_action( 'load-customize.php', 'uuups_load_customize' );
add_action( 'template_redirect', 'uuups_preview' );

/**
 * Returns the compatibility messaged based on whether the WP or PHP minimum
 * requirement wasn't met.
 *
 * @since  1.0.0
 * @access public
 * @return mixed
 */
function uuups_compat_message() {
	if ( version_compare( $GLOBALS['wp_version'], '4.9', '<' ) ) {

		return sprintf(
			/* translators: %1$s is supported WordPress version, and %2$s is WordPress version used. */
			esc_html__( 'Theme requires at least WordPress version %1$s. You are running version %2$s. Please upgrade and try again.', 'uuups' ),
			'4.9',
			$GLOBALS['wp_version']
		);

	} elseif ( version_compare( PHP_VERSION, '5.6', '<' ) ) {

		return sprintf(
			/* translators: %1$s is supported PHP version, and %2$s is PHP version used. */
			esc_html__( 'Theme requires at least PHP version %1$s. You are running version %2$s. Please upgrade and try again.', 'uuups' ),
			'5.6',
			PHP_VERSION
		);
	}

	return '';
}

/**
 * Switches to the previously active theme after the theme has been activated.
 *
 * @since  1.0.0
 * @access public
 * @param  string $old_name Old name of the theme.
 * @return void
 */
function uuups_switch_theme( $old_name ) {

	switch_theme( $old_name ? $old_name : WP_DEFAULT_THEME );

	unset( $_GET['activated'] );

	add_action( 'admin_notices', 'uuups_upgrade_notice' );
}

/**
 * Outputs an admin notice with the compatibility issue.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
function uuups_upgrade_notice() {
	printf( '<div class="error"><p>%s</p></div>', esc_html( uuups_compat_message() ) );
}

/**
 * Kills the loading of the customizer.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
function uuups_load_customize() {
	wp_die( esc_html( uuups_compat_message() ), '', array( 'back_link' => true ) );
}

/**
 * Kills the customizer previewer on installs prior to WP 4.7.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
function uuups_preview() {
	if ( isset( $_GET['preview'] ) ) {
		wp_die( esc_html( uuups_compat_message() ) );
	}
}
