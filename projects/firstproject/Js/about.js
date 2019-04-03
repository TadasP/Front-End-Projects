var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');

var blog1 = document.querySelector('section.blogone');
var blog2 = document.querySelector('section.blogtwo');
var blog3 = document.querySelector('section.blogthree');
var blog4 = document.querySelector('section.blogfour');
var blog5 = document.querySelector('section.blogfive');
var blog6 = document.querySelector('section.blogsix');
var blog7 = document.querySelector('section.blogseven');
var blog8 = document.querySelector('section.blogeight');

btn1.addEventListener('click', function () {
    blog1.style.display = 'block';
    blog2.style.display = 'block';
    blog3.style.display = 'block';
    blog4.style.display = 'block';
    blog5.style.display = 'none';
    blog6.style.display = 'none';
    blog7.style.display = 'none';
    blog8.style.display = 'none';
    jQuery("html, body").animate({ scrollTop: 300 }, 1000);
})

btn2.addEventListener('click', function () {
    blog5.style.display = 'block';
    blog6.style.display = 'block';
    blog7.style.display = 'block';
    blog8.style.display = 'block';
    blog1.style.display = 'none';
    blog2.style.display = 'none';
    blog3.style.display = 'none';
    blog4.style.display = 'none';
    jQuery("html, body").animate({ scrollTop: 300 }, 1000);
})

btn3.addEventListener('click', function () {
    blog5.style.display = 'block';
    blog6.style.display = 'block';
    blog7.style.display = 'block';
    blog8.style.display = 'block';
    blog1.style.display = 'none';
    blog2.style.display = 'none';
    blog3.style.display = 'none';
    blog4.style.display = 'none';
    jQuery("html, body").animate({ scrollTop: 300 }, 1000);
})



