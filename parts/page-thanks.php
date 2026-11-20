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
                <h1 class="cover-annual" style="margin-bottom:0;">Thank You!</h1>
                <p>Thanks for reaching out!<br />I'll be reaching out personally to walk you through what's next. <strong><br />No canned responses, no delays.</strong> Just real progress, real quick..</p>
                <h2 style="margin-top: 4rem;">While you're waiting...</h2>
                <div class="links">
                  <a href="/posts.php?p=1">Top 5 Things Your Website Says About Your Business… Before You Even Say a Word</a>
                  <a href="/posts.php?p=2">Free Website Checklist: Is Your Site Secretly from 2009?</a>
                  <a href="/posts.php?p=3">10 Things You Should Never Put on Your Homepage (Unless You Want Visitors to Run Away Screaming)</a>
              </div>                
            </div>
        </div>
    </div>
</div>
