<?php
/**
 * Index template.
 *
 * @package Uuups
 */

namespace Uuups;

// Load header template.
render_view( 'header', get_template_hierarchy() );

// Load content template.
render_view( 'content', get_template_hierarchy() );

// Load sidebar template.
render_view( 'sidebar', 'primary', [ 'name' => 'primary' ] );

// Load footer template.
render_view( 'footer', get_template_hierarchy() );
