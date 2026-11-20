<?php
/**
 * The template for displaying all pages.
 *
 * @package Base44
 */

get_header();
?>

<div id="hero-background">
    <div id="cover-background">
        <img alt="base-44 Web Hosting Solutions" src="<?php echo get_stylesheet_directory_uri(); ?>/img/base44-web-hosting-footer.webp" />
    </div>
    <div id="cover-image">
        <img style="opacity:0.5;" alt="base-44 Web Hosting Solutions"  src="<?php echo get_stylesheet_directory_uri(); ?>/img/base44-web-hosting-footer.webp" />
    </div>
</div>

<div id="page-background">
    <div id="page-image">
        <img style="opacity:0.5;" alt="base-44 Web Hosting Solutions"  src="img/base44-web-hosting-footer.webp" />
    </div>
</div>

<div id="page-hero">
    <div id="cover">
        <div id="cover-title">
            <div id="page-text" class="container" style="text-align:left;">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</div>

<?php
get_footer();