<?php
/**
 * Enqueue scripts and styles.
*/

function base44_scripts() {
	wp_enqueue_script('base44-gsap', get_template_directory_uri() . '/build/gsap/dist/gsap.min.js', array(), 1.0, true);
	wp_enqueue_script('base44-gsap-st', get_template_directory_uri() . '/build/gsap/dist/ScrollTrigger.min.js', array('base44-gsap'), 1.0, true);
	wp_enqueue_script('base44-gsap-stp', get_template_directory_uri() . '/build/gsap/dist/ScrollToPlugin.min.js', array('base44-gsap'), 1.0, true);

	wp_enqueue_style( 'base44-styles', get_template_directory_uri() . '/build/main-min.css', array(), filemtime( get_template_directory() . '/build/main-min.css' ) );
	if ( ! is_page_template( 'page-portfolio.php' ) ) {
		wp_enqueue_script('base44-js', get_template_directory_uri() . '/build/src/js/main.min.js', array('base44-gsap', 'base44-gsap-st', 'base44-gsap-stp'), filemtime
		( get_template_directory() . '/build/src/js/main.min.js' ), true);
	}
}
add_action( 'wp_enqueue_scripts', 'base44_scripts' );

function base44_portfolio() {
    if ( is_page_template( 'page-portfolio.php' ) ) {
        wp_enqueue_style(
            'portfolio',
            get_template_directory_uri() . '/build/portfolio-min.css',
            array(),
            filemtime( get_template_directory() . '/build/portfolio-min.css' )
        );
        wp_enqueue_script(
            'portfoliojs',
            get_template_directory_uri() . '/build/src/js/portfolio.min.js',
            array( 'base44-gsap', 'base44-gsap-st', 'base44-gsap-stp' ),
            filemtime( get_template_directory() . '/build/src/js/portfolio.min.js' ),
            true
        );

    }
}
add_action( 'wp_enqueue_scripts', 'base44_portfolio' );
