var nav1 = document.querySelector('section.projects .all');
var nav2 = document.querySelector('section.projects .nav2');
var nav3 = document.querySelector('section.projects .nav3');
var nav4 = document.querySelector('section.projects .nav4');
var nav5 = document.querySelector('section.projects .nav5');

var photo1 = document.querySelector('section.projects .one');
var photo2 = document.querySelector('section.projects .two');
var photo3 = document.querySelector('section.projects .three');
var photo4 = document.querySelector('section.projects .four');
var photo5 = document.querySelector('section.projects .five');
var photo6 = document.querySelector('section.projects .six');
var photo7 = document.querySelector('section.projects .seven');
var photo8 = document.querySelector('section.projects .eight');
var photo9 = document.querySelector('section.projects .nine');
var imgWrap = document.querySelector('section.projects .wrapper');

nav1.addEventListener('click', function(){
    photo1.style.display = 'block';
    photo2.style.display = 'block';
    photo3.style.display = 'block';
    photo4.style.display = 'block';
    photo5.style.display = 'block';
    photo6.style.display = 'block';
    photo7.style.display = 'block';
    photo8.style.display = 'block';
    photo9.style.display = 'block';
    nav1.style.color = '#26a1e4';
    nav2.style.color = '#323232';
    nav3.style.color = '#323232';
    nav4.style.color = '#323232';
    nav5.style.color = '#323232';
    imgWrap.style.marginBottom = '0';
})
nav2.addEventListener('click', function(){
    photo1.style.display = 'none';
    photo2.style.display = 'block';
    photo3.style.display = 'none';
    photo4.style.display = 'none';
    photo5.style.display = 'none';
    photo6.style.display = 'block';
    photo7.style.display = 'none';
    photo8.style.display = 'none';
    photo9.style.display = 'block';
    nav1.style.color = '#323232';
    nav2.style.color = '#26a1e4';
    nav3.style.color = '#323232';
    nav4.style.color = '#323232';
    nav5.style.color = '#323232';
    imgWrap.style.marginBottom = '50px';
})
nav3.addEventListener('click', function(){
    photo1.style.display = 'block';
    photo2.style.display = 'none';
    photo3.style.display = 'none';
    photo4.style.display = 'none';
    photo5.style.display = 'block';
    photo6.style.display = 'none';
    photo7.style.display = 'none';
    photo8.style.display = 'none';
    photo9.style.display = 'none';
    nav1.style.color = '#323232';
    nav2.style.color = '#323232';
    nav3.style.color = '#26a1e4';
    nav4.style.color = '#323232';
    nav5.style.color = '#323232';
    imgWrap.style.marginBottom = '50px';
})
nav4.addEventListener('click', function(){
    photo1.style.display = 'none';
    photo2.style.display = 'none';
    photo3.style.display = 'block';
    photo4.style.display = 'none';
    photo5.style.display = 'none';
    photo6.style.display = 'none';
    photo7.style.display = 'block';
    photo8.style.display = 'block';
    photo9.style.display = 'none';
    nav1.style.color = '#323232';
    nav2.style.color = '#323232';
    nav3.style.color = '#323232';
    nav4.style.color = '#26a1e4';
    nav5.style.color = '#323232';
    imgWrap.style.marginBottom = '50px';
})
nav5.addEventListener('click', function(){
    photo1.style.display = 'none';
    photo2.style.display = 'none';
    photo3.style.display = 'none';
    photo4.style.display = 'block';
    photo5.style.display = 'none';
    photo6.style.display = 'none';
    photo7.style.display = 'none';
    photo8.style.display = 'none';
    photo9.style.display = 'none';
    nav1.style.color = '#323232';
    nav2.style.color = '#323232';
    nav3.style.color = '#323232';
    nav4.style.color = '#323232';
    nav5.style.color = '#26a1e4';
    imgWrap.style.marginBottom = '50px';
})

