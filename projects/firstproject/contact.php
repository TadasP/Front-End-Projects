<!doctype html>
<html lang="en">
<?php include 'parts/head.php' ?>

<body class="contact-page" id="contact">
    <?php include 'header.php' ?>
    <div class="sechead">
        <div class="container">
            <h1>Contact</h1>
        </div>
    </div>
    <div class="contact-fold">
        <div class="line"></div>
        <h2>HOME > CONTACT</h2>
    </div>
    <section class="contacts">
        <div class="container">
            <h1>Get to know us better</h1>
            <div class="gradient-line"></div>
            <h2>Contact us, and we will contact you back. Want to chat? We can do that too.</h2>
            <div class="big-wrapper">
                <div class="contacts">
                    <div class="wrapper">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p>623 Fifth Avenue,<br> New York, NY 10022,<br> USA
                        </p>
                    </div>
                    <div class="wrapper">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <p>Randomness<br>@expire.com</p>
                    </div>
                    <div class="wrapper">
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                        <p>Phone: +(123) 456 7890<br> Fax: +(123) 456 7899</p>
                    </div>
                </div>
                <div class="input">
                    <div class="wrapper">
                        <input type="text" placeholder="Name" class="name">
                        <input type="text" placeholder="E-mail" class="email">
                        <input type="text" placeholder="Subject" class="subject">
                    </div>

                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
            </div>
        </div>
    </section>
    <section class="map">
        <div class="fold">
            <div class="folded-line">
            </div>
        </div>
        <div id="map"></div>
    </section>
    <div class="info">
        <div class="container">
            <h5>Go ahead and find out how we can help you!</h5>
            <div class="btn">get in touch</div>
        </div>
    </div>
    <?php include 'footer.php' ?>
    <script src="Js/index.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtErUEkhvR3V-7wkFk9LjJjwsumqy3Tio&callback=initMap">


    </script>
</body>

</html>
