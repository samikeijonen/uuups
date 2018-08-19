<?php
/**
 * Theme functions.
 *
 * This file is used to load the autoload and bootstrap files necessary
 * for kick-starting the theme.
 *
 * @package Uuups
 */

/**
 * Bootstrap the theme.
 *
 * Load the bootstrap files. Note that autoloading should happen first so that
 * any classes/functions are available that we might need.
 */
require_once get_parent_theme_file_path( 'app/bootstrap-autoload.php' );
require_once get_parent_theme_file_path( 'app/bootstrap-app.php' );
