<!doctype html>
<html lang="en">
<?php include 'parts/head.php' ?>

<body class="pages1-page" id="pages1">
    <?php include 'parts/header.php' ?>
    <div class="v-section-about">
        <div class="container">
            <h1>PAGES</h1>
            <h2>Home > Pages</h2>
            <div class="clear-fix"></div>
        </div>
    </div>
    <div class="container pages-min-container">
        <nav class="Categories">
            <div class="cat-header">
                <h1>Configuring a publishing source for Terra Pages</h2>
            </div>
            <div class="input">
                <input type="text" placeholder="How can we help?">
                <a href="Contactsent.php"><i class="fa fa-search" aria-hidden="true"></i></a>
                <div class="clear-fix"></div>
            </div>
        </nav>
        <p>
            You can configure Terra Pages to publish your site's source files from master Terra-pages, or a /docs folder on your master branch for Project Pages and other Pages sites that meet certain criteria. If your site is a User or Organization Page that has a repository named username.Terra.io or orgname.Terra.io, you cannot publish your site's source files from different locations. User and Organization Pages that have this type of repository name are only published from the master branch.
        </p>
        <p>To publish your site's source files from a /docs folder on your master branch, you must have a master branch and your repository must: have a /docs folder in the root of the repository not follow the repository naming scheme username.Terra.io or orgname.Terra.io Terra Pages will read everything to publish your site, including the CNAME file, from the /docs folder. For example, when you edit your custom domain through the Terra Pages settings, the custom domain will write to /docs/CNAME.</p>
        <h3>Another Topic</h3>
        <ul class="pages-min-menu">
            <li><a href="pages1.php">What is Terra Pages?</a></li> 
            <li><a href="pages3.php">User, Organization, and Project Pages </a></li>
            <li><a href="pages4.php">Creating Project Pages using the command line</a></li>
            <li><a href="pages5.php">Unpublishing a Project Pages site</a></li>
            <li><a href="pages6.php">Unpublishing a User Pages site</a></li>
        </ul>
    </div>
    <?php include 'parts/footer.php' ?>
</body>

</html>
