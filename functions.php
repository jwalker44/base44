<?php
/** 
 * For more info: https://developer.wordpress.org/themes/basics/theme-functions/
 *
 */			
	
/** Core Functions */
//require_once get_template_directory() . '/inc/kicore.php';  

/** Enqueue Scripts & Styles */
require_once get_template_directory() . '/inc/enqueue.php';

/** Post Types & Classes */
//require_once get_template_directory() . '/inc/post-types-and-classes.php';  


// FIX ME - adding classes to bootstrap navigation items.
function add_custom_menu_classes($classes, $item, $args) {
    $classes[] = 'nav-item';
    return $classes;
}
add_filter('nav_menu_css_class', 'add_custom_menu_classes', 10, 3);
function add_custom_menu_link_class($atts, $item, $args) {
    $atts['class'] = 'nav-link';
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_custom_menu_link_class', 10, 3);

/**
 * Register custom List block styles.
 */
function base44_register_list_block_styles() {
	register_block_style(
		'core/list',
		array(
			'name'  => 'boxes',
			'label' => __( 'Boxes', 'base44' ),
		)
	);
}
add_action( 'init', 'base44_register_list_block_styles' );
