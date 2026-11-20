<?php
/**
 * Bot Suspected
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


<div id="page-background">
    <div id="page-image">
        <img style="opacity:0.5;" alt="base-44 Web Hosting Solutions"  src="img/base44-web-hosting-footer.webp" />
    </div>
</div>

<div id="page-hero">
    <div id="cover">
        <div id="cover-title">
            <div id="page-text" class="container thanks">
                <!-- <h3 class="cover-ki">Kenan Institute <span style="text-transform:lowercase;">of</span> Private Enterprise</h2> -->
                <h1 class="cover-annual" style="margin-bottom:0;">Suspected BOT</h1>
              </div>                
            </div>
        </div>
    </div>
</div>
