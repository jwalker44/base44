<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>base44 - Web Hosting and Support</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="build/main-min.css?v=1.0.0.001">

<script>
    <!--
    if (window.history.replaceState) {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
    }
    -->
</script>


</head>
<body>
 
    <div id="screen">
        <div class="lds-ripple" style="margin-top: -20vh;"><div></div><div></div></div>
        <p style="color:#999; z-index:999999999;">LOADING</p>
        <!-- <div id="screen-image"><img src="img/base44-web-hosting-footer.webp" /></div> -->
    </div> 

    <?php 
        include_once('parts/page-nav.php');
        $result = include_once('parts/email-send.php');
        if ($result === false) {
            include_once('parts/page-bot.php'); 
        } else {
            include_once('parts/page-thanks.php'); 
        }
    ?>

    <section style=""></section>
    <script src='build/gsap/dist/gsap.min.js'></script>
    <script src='build/gsap/dist/ScrollTrigger.min.js'></script>
    <script src='build/gsap/dist/ScrollToPlugin.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>    
    <script src='build/src/js/main.min.js'></script>

</body>
</html>
