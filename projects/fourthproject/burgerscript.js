var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('active');
});

// Event listeners (keyboard key events)

document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.keyCode == 27) {
        menu.classList.remove('active');
        banner.style.opacity = 0;
    }
})

// Foto galerija

var navigation = document.querySelector('.main-foto');
var mainFoto = document.querySelector('.main-foto img');
var circle = document.querySelectorAll('.circle');

var fotoList = ['img/2.jpeg', 'img/3.jpg', 'img/4.jpg', 'img/1.jpeg'];
var activeFoto = 0;
circle[activeFoto].style.background = 'maroon';

navigation.addEventListener('click', function () {
    mainFoto.src = fotoList[activeFoto];
    circle[activeFoto].style.background = '';
    activeFoto++;
    if (activeFoto == fotoList.length) activeFoto = 0;
    circle[activeFoto].style.background = 'maroon';
});

// Scroll events

var header = document.querySelector('header');
var blogTitle = document.querySelector('.article h2');
var text = document.querySelectorAll('.animate')
var pictureRight = document.querySelectorAll('.picture-right')
var pictureLeft = document.querySelectorAll('.picture-left')

//elemento atstumas iki puslapio virsaus
console.log(blogTitle.offsetTop);
// el.get
//header.getBoundingClientRect()

window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    // window.scrollY - lango koordinates scrollinant
    if (window.scrollY > blogTitle.offsetTop) {
        header.style.background = 'rgba(128,0,0, .5)';
    } else {
        header.style.background = '';
    }

    // Keiciam text elemento spalva ji prascrollinus
    for (let x = 0; x < text.length; x++) {
        if (window.scrollY + window.innerHeight * .7 > text[x].offsetTop) {
            text[x].style.opacity = 1;
        }
    }
    // Keiciam elemento picture savybes
    for (let x= 0; x<pictureRight.length; x++){
    if (window.scrollY + window.innerHeight * .8 > pictureRight[x].offsetTop) {
        pictureRight[x].style.opacity = 1;
        pictureRight[x].style.transform = 'translateX(0)';
    }
    }
     for (let x= 0; x<pictureLeft.length; x++){
    if (window.scrollY + window.innerHeight * .8 > pictureLeft[x].offsetTop) {
        pictureLeft[x].style.opacity = 1;
        pictureLeft[x].style.transform = 'translateX(0)';
    }
    }
    
});

var banner = document.querySelector ('.banner');
var escape = document.querySelector ('.banner i')
var c = 0;

window.addEventListener('scroll', function() {
   if (window.scrollY > 1500 && c == 0){
       banner.style.opacity = 1;
       c++;
   }
});

escape.addEventListener('click', function(){
   banner.style.opacity = 0; 
});