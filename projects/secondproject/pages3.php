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
                <h1>User, Organization, and Project Pages </h2>
            </div>
            <div class="input">
                <input type="text" placeholder="How can we help?">
                <a href="Contactsent.php"><i class="fa fa-search" aria-hidden="true"></i></a>
                <div class="clear-fix"></div>
            </div>
        </nav>
        <p>
            There are two basic types of Terra Pages: User/Organization Pages and Project Pages. They are nearly identical, but there are a few important differences between them. Terra Pages created after June 15, 2016 and using Terra.io domains are served over HTTPS. For more information, see "Securing your Terra Pages site with HTTPS.
        </p>
        <p>User Pages can be built by any user account with a verified email address. They can also use deploy keys to automate the process. Organization Pages can be built by any member with push access to the repository and a verified email address. To automate builds, you can set up a machine user as a member of your organization. Deploy keys aren't supported for Organization Pages. Unlike User and Organization Pages, Project Pages are kept in the same repository as their project. Both personal accounts and organizations can create Project Pages. The URL for a personal account's Project Page will be 'http(s)://username.terra.io/projectname' , while an organization's URL will be 'http(s)://orgname.terra.io/projectname' . The steps for creating Project Pages are the same for both.</p>

        <h3>Another Topic</h3>
        <ul class="pages-min-menu">
            <li><a href="pages1.php">What is Terra Pages?</a></li> 
            <li><a href="pages2.php">Configuring a publishing source for Terra Pages</a></li>
            <li><a href="pages4.php">Creating Project Pages using the command line</a></li>
            <li><a href="pages5.php">Unpublishing a Project Pages site</a></li>
            <li><a href="pages6.php">Unpublishing a User Pages site</a></li>
        </ul>
    </div>
    <?php include 'parts/footer.php' ?>
</body>

</html>
