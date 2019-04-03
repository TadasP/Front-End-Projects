<!doctype html>
<html lang="en">
<?php include 'parts/head.php' ?>

<body class="contacts-page" id="contacts">
    <?php include 'parts/header.php' ?>
    <div class="v-section-contacts">
        <div class="container">
            <h1>CONTACTS</h1>
            <h2>Home > Contacts</h2>
            <div class="clear-fix"></div>
        </div>
    </div>
    <div class="container">
        <h1 class="contact-header">contact us</h1>
        <div class="border"></div>
        <input type="text" class="first-name" placeholder="First Name">
        <input type="text" class="last-name" placeholder="Last Name">
        <input type="text" class="your-email" placeholder="Your E-Mail">
        <input type="text" class="website" placeholder="Website">
        <textarea rows="4" cols="10" class="message" placeholder="Your Message"></textarea>
        <a href="Contactsent.php"><button>Submit</button></a>
    </div>
    <div id="map"></div>
    <?php include 'parts/footer.php' ?>
    <script src="Js/contacts.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAn_4_N45lP5FEfJyoc8Tw1XgvJXeS4SE8&callback=initMap">
    </script>
</body>

</html>
