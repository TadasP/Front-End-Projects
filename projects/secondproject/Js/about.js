var main1 = document.querySelector('.main1-wrapper');
var main2 = document.querySelector('.main2-wrapper');
var main3 = document.querySelector('.main3-wrapper');
var main4 = document.querySelector('.main4-wrapper');

var text1 = document.querySelector('.text1');
var text2 = document.querySelector('.text2');
var text3 = document.querySelector('.text3');
var text4 = document.querySelector('.text4');

var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');

var arrow1 = document.querySelector('.arrow1');
var arrow2 = document.querySelector('.arrow2');
var arrow3 = document.querySelector('.arrow3');
var arrow4 = document.querySelector('.arrow4');

var activeSection1 = 0;
var activeSection2 = 0;
var activeSection3 = 0;
var activeSection4 = 0;


arrow1.addEventListener('click', function () {
    if (activeSection1 == 0) {
        main1.style.display = 'block';
        btn1.style.transform = 'rotate(90deg)';
        btn1.style.color = 'white';
        btn1.style.transition = '.5s';
        arrow1.style.background = '#26a1e4';
        arrow1.style.border = '1px solid #26a1e4';
        text1.style.background = 'black';
        text1.style.color = 'white';
        text1.style.border = '1px solid black';
        activeSection1++;
        main2.style.display = 'none';
        btn2.style.transform = 'rotate(0deg)';
        btn2.style.color = '#26a1e4';
        btn2.style.transition = '.5s';
        arrow2.style.background = 'white';
        arrow2.style.border = '1px solid #ddd';
        text2.style.background = 'white';
        text2.style.color = 'black';
        text2.style.border = '1px solid #ddd';
        activeSection2 = 0;
        main3.style.display = 'none';
        btn3.style.transform = 'rotate(0deg)';
        btn3.style.color = '#26a1e4';
        btn3.style.transition = '.5s';
        arrow3.style.background = 'white';
        arrow3.style.border = '1px solid #ddd';
        text3.style.background = 'white';
        text3.style.color = 'black';
        text3.style.border = '1px solid #ddd';
        activeSection3 = 0;
        main4.style.display = 'none';
        btn4.style.transform = 'rotate(0deg)';
        btn4.style.color = '#26a1e4';
        btn4.style.transition = '.5s';
        arrow4.style.background = 'white';
        arrow4.style.border = '1px solid #ddd';
        text4.style.background = 'white';
        text4.style.color = 'black';
        text4.style.border = '1px solid #ddd';
        activeSection4 = 0;
    } else if (activeSection1 == 1) {
        main1.style.display = 'none';
        btn1.style.transform = 'rotate(0deg)';
        btn1.style.color = '#26a1e4';
        btn1.style.transition = '.5s';
        arrow1.style.background = 'white';
        arrow1.style.border = '1px solid #ddd';
        text1.style.background = 'white';
        text1.style.color = 'black';
        text1.style.border = '1px solid #ddd';
        activeSection1 = 0;
    }
})
arrow2.addEventListener('click', function () {
    if (activeSection2 == 0) {
        main2.style.display = 'block';
        btn2.style.transform = 'rotate(90deg)';
        btn2.style.color = 'white';
        btn2.style.transition = '.5s';
        arrow2.style.background = '#26a1e4';
        arrow2.style.border = '1px solid #26a1e4';
        text2.style.background = 'black';
        text2.style.color = 'white';
        text2.style.border = '1px solid black';
        activeSection2++;
        main1.style.display = 'none';
        btn1.style.transform = 'rotate(0deg)';
        btn1.style.color = '#26a1e4';
        btn1.style.transition = '.5s';
        arrow1.style.background = 'white';
        arrow1.style.border = '1px solid #ddd';
        text1.style.background = 'white';
        text1.style.color = 'black';
        text1.style.border = '1px solid #ddd';
        activeSection1 = 0;
        main3.style.display = 'none';
        btn3.style.transform = 'rotate(0deg)';
        btn3.style.color = '#26a1e4';
        btn3.style.transition = '.5s';
        arrow3.style.background = 'white';
        arrow3.style.border = '1px solid #ddd';
        text3.style.background = 'white';
        text3.style.color = 'black';
        text3.style.border = '1px solid #ddd';
        activeSection3 = 0;
        main4.style.display = 'none';
        btn4.style.transform = 'rotate(0deg)';
        btn4.style.color = '#26a1e4';
        btn4.style.transition = '.5s';
        arrow4.style.background = 'white';
        arrow4.style.border = '1px solid #ddd';
        text4.style.background = 'white';
        text4.style.color = 'black';
        text4.style.border = '1px solid #ddd';
        activeSection4 = 0;
    } else if (activeSection2 == 1) {
        main2.style.display = 'none';
        btn2.style.transform = 'rotate(0deg)';
        btn2.style.color = '#26a1e4';
        btn2.style.transition = '.5s';
        arrow2.style.background = 'white';
        arrow2.style.border = '1px solid #ddd';
        text2.style.background = 'white';
        text2.style.color = 'black';
        text2.style.border = '1px solid #ddd';
        activeSection2 = 0;
    }
})
arrow3.addEventListener('click', function () {
    if (activeSection3 == 0) {
        main3.style.display = 'block';
        btn3.style.transform = 'rotate(90deg)';
        btn3.style.color = 'white';
        btn3.style.transition = '.5s';
        arrow3.style.background = '#26a1e4';
        arrow3.style.border = '1px solid #26a1e4';
        text3.style.background = 'black';
        text3.style.color = 'white';
        text3.style.border = '1px solid black';
        activeSection3++;
        main1.style.display = 'none';
        btn1.style.transform = 'rotate(0deg)';
        btn1.style.color = '#26a1e4';
        btn1.style.transition = '.5s';
        arrow1.style.background = 'white';
        arrow1.style.border = '1px solid #ddd';
        text1.style.background = 'white';
        text1.style.color = 'black';
        text1.style.border = '1px solid #ddd';
        activeSection1 = 0;
        main2.style.display = 'none';
        btn2.style.transform = 'rotate(0deg)';
        btn2.style.color = '#26a1e4';
        btn2.style.transition = '.5s';
        arrow2.style.background = 'white';
        arrow2.style.border = '1px solid #ddd';
        text2.style.background = 'white';
        text2.style.color = 'black';
        text2.style.border = '1px solid #ddd';
        activeSection2 = 0;
        main4.style.display = 'none';
        btn4.style.transform = 'rotate(0deg)';
        btn4.style.color = '#26a1e4';
        btn4.style.transition = '.5s';
        arrow4.style.background = 'white';
        arrow4.style.border = '1px solid #ddd';
        text4.style.background = 'white';
        text4.style.color = 'black';
        text4.style.border = '1px solid #ddd';
        activeSection4 = 0;
    } else if (activeSection3 == 1) {
        main3.style.display = 'none';
        btn3.style.transform = 'rotate(0deg)';
        btn3.style.color = '#26a1e4';
        btn3.style.transition = '.5s';
        arrow3.style.background = 'white';
        arrow3.style.border = '1px solid #ddd';
        text3.style.background = 'white';
        text3.style.color = 'black';
        text3.style.border = '1px solid #ddd';
        activeSection3 = 0;
    }
})

arrow4.addEventListener('click', function () {
    if (activeSection4 == 0) {
        main4.style.display = 'block';
        btn4.style.transform = 'rotate(90deg)';
        btn4.style.color = 'white';
        btn4.style.transition = '.5s';
        arrow4.style.background = '#26a1e4';
        arrow4.style.border = '1px solid #26a1e4';
        text4.style.background = 'black';
        text4.style.color = 'white';
        text4.style.border = '1px solid black';
        activeSection4++;
        main1.style.display = 'none';
        btn1.style.transform = 'rotate(0deg)';
        btn1.style.color = '#26a1e4';
        btn1.style.transition = '.5s';
        arrow1.style.background = 'white';
        arrow1.style.border = '1px solid #ddd';
        text1.style.background = 'white';
        text1.style.color = 'black';
        text1.style.border = '1px solid #ddd';
        activeSection1 = 0;
        main2.style.display = 'none';
        btn2.style.transform = 'rotate(0deg)';
        btn2.style.color = '#26a1e4';
        btn2.style.transition = '.5s';
        arrow2.style.background = 'white';
        arrow2.style.border = '1px solid #ddd';
        text2.style.background = 'white';
        text2.style.color = 'black';
        text2.style.border = '1px solid #ddd';
        activeSection2 = 0;
        main3.style.display = 'none';
        btn3.style.transform = 'rotate(0deg)';
        btn3.style.color = '#26a1e4'; 
        btn3.style.transition = '.5s';
        arrow3.style.background = 'white';
        arrow3.style.border = '1px solid #ddd';
        text3.style.background = 'white';
        text3.style.color = 'black';
        text3.style.border = '1px solid #ddd';
        activeSection3 = 0;
    } else if (activeSection4 == 1) {
        main4.style.display = 'none';
        btn4.style.transform = 'rotate(0deg)';
        btn4.style.color = '#26a1e4';
        btn4.style.transition = '.5s';
        arrow4.style.background = 'white';
        arrow4.style.border = '1px solid #ddd';
        text4.style.background = 'white';
        text4.style.color = 'black';
        text4.style.border = '1px solid #ddd';
        activeSection4 = 0;
    }
})

var btn01 = document.querySelector('.circle-wrapper .circle-1');
var btn02 = document.querySelector('.circle-wrapper .circle-2');
var btn03 = document.querySelector('.circle-wrapper .circle-3');
var client = document.querySelector('section.clients-about .img-wrap');
var quote = document.querySelector('section.clients-about p');
var clientName = document.querySelector('section.clients-about h2');
var job = document.querySelector('section.clients-about h3');

btn01.addEventListener('click', function () {
    btn01.style.background = '#26a1e4';
    btn02.style.background = 'white';
    btn03.style.background = 'white';
    client.style.backgroundImage =`url(img/About/person1.jpg)`;
    quote.textContent = '"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.."';
    clientName.textContent = 'Michelle Crain';
    job.textContent = 'Financial Adviser';
});

btn02.addEventListener('click', function () {
    btn01.style.background = 'white';
    btn02.style.background = '#26a1e4';
    btn03.style.background = 'white';
    client.style.backgroundImage =`url(img/About/person.jpg)`;
    quote.textContent = '"The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward."';
    clientName.textContent = 'Hary Sunio';
    job.textContent = 'CEO';
});

btn03.addEventListener('click', function () {
    btn01.style.background = 'white';
    btn02.style.background = 'white';
    btn03.style.background = '#26a1e4';
    client.style.backgroundImage =`url(img/About/person2.jpg)`;
    quote.textContent = '"Desire is the key to motivation, but its determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek. Success is simple. Do whats right, the right way, at the right time."';
    clientName.textContent = 'Edward Kenway';
    job.textContent = 'Pirate';
});

