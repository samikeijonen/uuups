<?php
/**
 * Index template.
 *
 * @package Uuups
 */

// Load header/* template.
Hybrid\render_view( 'header', Uuups\get_template_hierarchy() );

// Load content template.
Hybrid\render_view( 'content', Uuups\get_template_hierarchy() );

// Load sidebar/* template.
Hybrid\render_view( 'sidebar', 'primary', [ 'name' => 'primary' ] );

// Load footer/* template.
Hybrid\render_view( 'footer', Uuups\get_template_hierarchy() );
