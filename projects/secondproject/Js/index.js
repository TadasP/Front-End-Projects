var left = document.querySelector('.left');
var right = document.querySelector('.right');
var page = document.querySelector('.landing-page-home');
var info = document.querySelector('.landing-page-home .wrapper h1');
var link = document.querySelector('landing-page-home .wrapper a');
var button = document.querySelector('landing-page-home .wrapper .btn');
var aboutPage = document.querySelector('.landing-page-home .about');
var contactsPage = document.querySelector('.landing-page-home .contacts');
var projectsPage = document.querySelector('.landing-page-home .projects');
var blogPage = document.querySelector('.landing-page-home .blog');


var fotoList = ['img/index/main1.jpeg', 'img/index/main2.jpeg', 'img/index/main3.jpeg', 'img/index/main.jpeg'];
var infoList =['share your experience','our recent develompents','get in touch with us','we care about you'];
var activeFoto = 0;

right.addEventListener('click', function () {
    page.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${fotoList[activeFoto]})`;
    page.style.backgroundSize = 'cover';
    page.style.backgroundPosition = 'center 50px';
    info.textContent = infoList[activeFoto];
    activeFoto++;
    if (activeFoto == 1){
        aboutPage.style.display = 'none';
        blogPage.style.display = 'block';
    }else if (activeFoto == 2){
        blogPage.style.display = 'none';
        projectsPage.style.display = 'block';
    }else if (activeFoto == 3){
        projectsPage.style.display = 'none';
        contactsPage.style.display = 'block';
    }else if (activeFoto == 4){
        aboutPage.style.display = 'block';
        contactsPage.style.display = 'none';
    }
    console.log(activeFoto);
    if (activeFoto == fotoList.length) activeFoto = 0;
});

var fotoListL = ['img/index/main3.jpeg', 'img/index/main.jpeg', 'img/index/main1.jpeg', 'img/index/main2.jpeg'];
var infoListL =['get in touch with us', 'we care about you','share your experience','our recent develompents'];

left.addEventListener('click', function (){
    page.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${fotoListL[activeFoto]})`;
    page.style.backgroundSize = 'cover';
    page.style.backgroundPosition = 'center 50px';
    info.textContent = infoListL[activeFoto];
    if (activeFoto == 0) activeFoto = 4;
    activeFoto--;
    console.log(activeFoto);
    if (activeFoto == 0){
        aboutPage.style.display = 'block';
        projectsPage.style.display = 'none';
        contactsPage.style.display = 'none';
        blogPage.style.display = 'none';
    }else if (activeFoto == 1){
        aboutPage.style.display = 'none';
        blogPage.style.display = 'block';
        contactsPage.style.display = 'none';
        projectsPage.style.display = 'none';
    }else if (activeFoto == 2){
        aboutPage.style.display = 'none';
        projectsPage.style.display = 'block';
        contactsPage.style.display = 'none';
        blogPage.style.display <= 'none';
    }else if (activeFoto == 3){
        aboutPage.style.display = 'none';
        projectsPage.style.display = 'none';
        contactsPage.style.display = 'block';
        blogPage.style.display = 'none';
    }
})
