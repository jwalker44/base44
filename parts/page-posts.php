<?php
/**
 * Landing Hero
 */
?>

<script>
window.addEventListener('pageshow', function(event) {
  if (event.persisted || (window.performance && window.performance.getEntriesByType("navigation")[0].type === "back_forward")) {
    // Page was loaded from bfcache or back/forward cache, clear form
    const form = document.querySelector('form');
    if (form) {
      form.reset();
    }
  }
});
</script>


<div id="page-background" style="overflow:hidden;">
    <div id="page-image" style="overflow:hidden;">
        <img style="opacity:0.5;" alt="base-44 Web Hosting Solutions"  src="img/base44-web-hosting-footer-darker.webp" />
    </div>
</div>

<div id="post-hero">
    <div id="post">
        <div id="post-title">

            <div class="container" style="padding-top: 150px; padding-bottom: 400px;">

                <?php 
                    $post = isset($_GET['p']) ? $_GET['p'] : 0;
                    switch ($post) {
                        case 1:
                            include_once('posts/website-speaks.php'); 
                            break;
                        case 2:
                            include_once('posts/website-checklist.php'); 
                            break;
                        case 3:
                            include_once('posts/website-homepage.php'); 
                            break;
                        default:
                            include_once('404.php'); 
                    }                    
                ?>

            </div>




        </div>
    </div>
</div>
