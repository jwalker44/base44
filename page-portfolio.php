<?php
/**
 * Template Name: Portfolio
 * Template Post Type: page
 *  @package Base44
 */

get_header();
?>

<div id="portfolio">
    <div id="cover">
        <div id="cover-title">
            <div id="page-text" style="text-align:left;">
                <h1><span class="base44"><span class="h1-sub">base-<span class="yellow">4</span><span class="green">4</span></span></span><br /><span class="graphic">Graphic</span><br />Design</h1>
            </div>
        </div>
        <div id="cover-image">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow-down.svg" />
        </div>
    </div>
    <div id="sample-1-container">
        <div id="sample-1">
            <div class="sample-text" style="width:50%;">
                <h4 class="sample-header">E.O Wilson Biodiversity Foundation</h4>
                <h2 class="sample-header">Impact Report</h2>
            </div>
            <div class="sample-image" style="width:50%;">
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/eo-wilson-1.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/eo-wilson-2.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/eo-wilson-3.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/eo-wilson-4.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/eo-wilson-5.webp" />
            </div>
        </div>
    </div>
    <div id="sample-2-container">
        <div id="sample-2">
            <div class="sample-text" style="width:50%;">
                <h4 class="sample-header">City of Durham</h4>
                <h2 class="sample-header">Water Quality Report</h2>
            </div>
            <div class="sample-image" style="width: 50%;">
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/durham-1.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/durham-2.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/durham-3.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/durham-4.webp" />
                <img style="max-width:80%;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/portfolio/durham-5.webp" />
            </div>
        </div>
    </div>
</div>

<?php
get_footer();