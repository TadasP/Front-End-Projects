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
                <h1>Creating Project Pages using the command line</h2>
            </div>
            <div class="input">
                <input type="text" placeholder="How can we help?">
                <a href="Contactsent.php"><i class="fa fa-search" aria-hidden="true"></i></a>
                <div class="clear-fix"></div>
            </div>
        </nav>
        <p>
            To set up a Project Pages site, you need to create a new "orphan" branch (a branch that has no common history with an existing branch) in your repository. The safest way to do this is to start with a fresh clone: terra clone https://terra.com/user/repository.terra # Clone our repository Cloning into 'repository'... remote: Counting objects: 2791, done. remote: Compressing objects: 100% (1225/1225), done. remote: Total 2791 (delta 1722), reused 2513 (delta 1493) Receiving objects: 100% (2791/2791), 3.77 MiB | 969 KiB/s, done. Resolving deltas: 100% (1722/1722), done.
        </p>
        <p>After your push to the master branch, your Project Pages site will be available at 'http(s)://username.terra.io/projectname' . Note that Pages are always publicly accessible when published, even if their repository is private.</p>

        <h3>Another Topic</h3>
        <ul class="pages-min-menu">
            <li><a href="pages1.php">What is Terra Pages?</a></li> 
            <li><a href="pages2.php">Configuring a publishing source for Terra Pages</a></li>
            <li><a href="pages3.php">User, Organization, and Project Pages </a></li>
            <li><a href="pages5.php">Unpublishing a Project Pages site</a></li>
            <li><a href="pages6.php">Unpublishing a User Pages site</a></li>
        </ul>
    </div>
    <?php include 'parts/footer.php' ?>
</body>

</html>
