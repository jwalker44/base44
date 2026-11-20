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
        <img style="opacity:0.5;" alt="base-44 Web Hosting Solutions"  src="<?php echo get_stylesheet_directory_uri(); ?>/img/base44-web-hosting-footer.webp" />
    </div>
</div>

<div id="page-hero">
    <div id="cover">
        <div id="cover-title">
            <div id="page-text" class="container">
                <!-- <h3 class="cover-ki">Kenan Institute <span style="text-transform:lowercase;">of</span> Private Enterprise</h2> -->
                <h1 class="cover-annual" style="margin-bottom:0;">Full Hosting</h1>
                <p>Fill out this quick form, and I'll personally give you a call to talk through next steps. I move fast, so once we connect, we can get your project moving right away.</p>
            </div>
            <div class="container">
                <form action="thanks.php">
                    <input type="hidden" id="type" name="type" value="Basic Hosting" />
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-4">
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" placeholder="First Name..." value=""/>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" placeholder="Last Name..." value=""/>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-12 col-lg-8">
                            <label for="email">Email Address</label>
                            <input type="text" id="email" name="email" placeholder="Email Address..." value="" required />
                        </div>                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-12 col-lg-8">
                            <label for="description"><strong><em>If you want,</em></strong> leave a brief description of your project</label>
                            <textarea id="description" name="description" placeholder="Project Description..." rows="2" cols="40"></textarea>
                        </div>                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-12 col-lg-8 text-center">
                            <button tyle="submit">SUBMIT</a>
                        </div>                        
                    </div>
                </form>
            </div>            
        </div>
    </div>
</div>
