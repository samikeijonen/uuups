<?php
/**
 * Index template.
 *
 * @package Uuups
 */

// Load header/* template.
Hybrid\View\render( 'header', Hybrid\Template\hierarchy() );

// Load content template.
Hybrid\View\render( 'content', Hybrid\Template\hierarchy() );

// Load sidebar/* template.
Hybrid\View\render( 'sidebar', 'primary', [ 'name' => 'primary' ] );

// Load footer/* template.
Hybrid\View\render( 'footer', Hybrid\Template\hierarchy() );
