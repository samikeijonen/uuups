<?php
/**
 * Index template.
 *
 * @package Uuups
 */

// Load header/* template.
Hybrid\View\display( 'header', Hybrid\Template\hierarchy() );

// Load content template.
Hybrid\View\display( 'content', Hybrid\Template\hierarchy() );

// Load sidebar/* template.
Hybrid\View\display( 'sidebar', 'primary', [ 'name' => 'primary' ] );

// Load footer/* template.
Hybrid\View\display( 'footer', Hybrid\Template\hierarchy() );
