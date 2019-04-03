var square = document.querySelectorAll('.square');
var left = document.querySelector('.fa-angle-left');
var right = document.querySelector('.fa-angle-right');
var bg = document.querySelector('section.landing-page-home');
var headerInfo = document.querySelector('section.landing-page-home h2');
var headerBtn1 = document.querySelectorAll('section.landing-page-home .Btnfirst');
var headerBtn2 = document.querySelectorAll('section.landing-page-home .Btnsecond');
var headerBtn3 = document.querySelectorAll('section.landing-page-home .Btnthird');
var headerWrap = document.querySelector('section.landing-page-home .wrapper');

var InfoText = ["Professionaly designed, carefully made for your enjoyement.", "Intelligent desicions to save your time & money.", "We are working hard to suit your needs, contact us."];
const images = ['img/index/Main1.jpeg', 'img/index/Main2.jpg', 'img/index/Main3.jpeg'];
let current = 0;


square[current].style.backgroundColor = 'white'

right.addEventListener('click', function () {
    square[current].style.backgroundColor = 'transparent'
    current++;
    if (current == images.length) {
        current = 0;
    }
    bg.style.background = 'url("' + images[current] + '")';
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    square[current].style.backgroundColor = 'white';
    headerWrap.style.transform = 'translateX(120%)';
    console.log(current);

})

left.addEventListener('click', function () {
    square[current].style.backgroundColor = 'transparent'
    current--;
    if (current == -1) {
        current = images.length - 1;
    }
    bg.style.background = 'url("' + images[current] + '")';
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    square[current].style.backgroundColor = 'white'
    headerWrap.style.transform = 'translateX(-120%)';
})

headerWrap.addEventListener('transitionend', function () {
    headerInfo.textContent = `${InfoText[current]}`;
    headerWrap.style.transform = 'translateX(0)';
    if (current == 0) {
        headerBtn1[0].style.display = 'inline-block';
        headerBtn1[1].style.display = 'inline-block';
        headerBtn2[0].style.display = 'none';
        headerBtn2[1].style.display = 'none';
        headerBtn3[0].style.display = 'none';
        headerBtn3[1].style.display = 'none';
    }
    if (current == 1) {
        headerBtn1[0].style.display = 'none';
        headerBtn1[1].style.display = 'none';
        headerBtn2[0].style.display = 'inline-block';
        headerBtn2[1].style.display = 'inline-block';
        headerBtn3[0].style.display = 'none';
        headerBtn3[1].style.display = 'none';
    }
    if (current == 2) {
        headerBtn1[0].style.display = 'none';
        headerBtn1[1].style.display = 'none';
        headerBtn2[0].style.display = 'none';
        headerBtn2[1].style.display = 'none';
        headerBtn3[0].style.display = 'inline-block';
        headerBtn3[1].style.display = 'inline-block';
    }

});

function imagePreloader(arr) {
	$.preloadImages = function() {
		for (var i = 0; i < arguments.length; i++) {
			$("<img / index>").attr("src", arguments[i]);
		}
	}
	arr.forEach(img => $.preloadImages(img));
}

var hover = document.querySelector('.right-folder .top-fold .line');
var angleUp = document.querySelector('.right-folder .top-fold .line .fa-angle-up');
var angleDown = document.querySelector('.right-folder .top-fold .line .fa-angle-down');
var hoverText = document.querySelector('.right-folder .top-fold .line h2');
var folder = document.querySelector('.right-folder');
var textBox = document.querySelector('.right-folder .folder');
var text = document.querySelector('.right-folder .folder p');

let hovered = 0;

hover.addEventListener('click', function () {
    if (hovered == 0) {
        angleUp.style.display = 'none';
        angleDown.style.display = 'block';
        hoverText.textContent = 'RETRACT';
        textBox.style.height = '250px';
        folder.style.marginTop = '60px';
        text.style.opacity = '1';
        hovered++;
    } else if (hovered == 1) {
        angleUp.style.display = 'block';
        angleDown.style.display = 'none';
        hoverText.textContent = 'EXPAND';
        textBox.style.height = '45px';
        folder.style.marginTop = '260px';
        text.style.opacity = '0';
        hovered = 0;
    }
})

function initMap() {
    var uluru = {
        lat: 40.767167,
        lng: -73.970935
    };
    var myLatLng = {
        lat: 40.767167,
        lng: -73.970935
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        mapTypeControl: false,
        clickableIcons: false,
        zoomControl: false,

    });
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: '632 New York Avenue',
    });
}


var menuButton = document.querySelector('.fa-bars');
var mobileNav = document.querySelector('.mobile-nav');

var activeMenu = 0;

//menuButton.addEventListener('click', function () {
// if (activeMenu == 0) {
//     mobileNav.style.display = 'block';
//     activeMenu++;
// } else if (activeMenu == 1) {
//     mobileNav.style.display = 'none';
//     if (activeMenu == 1) activeMenu = 0;
// }
//})

$(".fa-bars").click(function () {
    $(".mobile-nav").slideToggle("slow", function () {
        // Animation complete.
    });
});

var blogArrowLeft = document.querySelector('section.blog-posts .fa-angle-left');
var blogArrowRight = document.querySelector('section.blog-posts .fa-angle-right');

var BlogPost1 = document.querySelector('section.blog-posts .d');
var BlogPost2 = document.querySelector('section.blog-posts .f');
var BlogPost3 = document.querySelector('section.blog-posts .e');
var BlogPost4 = document.querySelector('section.blog-posts .i');
var BlogPost5 = document.querySelector('section.blog-posts .h');
var BlogPost6 = document.querySelector('section.blog-posts .k');

var activeBlog = 0;

$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});


var btn01 = document.querySelector('section.others .btn1');
var btn02 = document.querySelector('section.others .btn2');
var btn03 = document.querySelector('section.others .btn3');
var client = document.querySelector('section.others .mini-folder');
var quote = document.querySelector('section.others .right-folder p');
var clientName = document.querySelector('section.others .right h2');
var job = document.querySelector('section.others .right h2 span');
var firstQuote = document.querySelector('section.others .right p');

btn01.addEventListener('click', function () {
    btn01.style.background = '#ff3c1f';
    btn02.style.background = 'white';
    btn03.style.background = 'white';
    client.style.backgroundImage = `url(img/index/Astrid.jpg)`;
    quote.textContent = 'Astrid Jorgensen is a Brisbane-based composer, conductor, educator and performer. She holds a Masters degree in Music Studies (Vocal Jazz) from the Queensland Conservatorium of Music, and both a Graduate Diploma in Secondary Education (Music) and a Bachelor of Arts (Music) from the University of Queensland. Astrid is an Arts Faculty Scholar of UQ, and won the Hugh Brandon Prize for the top conducting student in 2010. Astrids achievements as a performer have seen her share stages with some of the finest performers in the world including The Rolling Stones, Sticky Fingers, James Morrison, Katie Noonan, and Li Cunxin.Astrid s received the 2012 Billy Thorpe Scholarship at the QLD Music Awards for the best emerging artist. In 2013 her band, Astrid and The Asteroids released an eponymous EP of 5 songs, which received 8 nominations at the Australian Independent Music Awards.';
    clientName.textContent = 'Astrid Jorgensen';
    job.textContent = 'Financial Adviser';
    firstQuote.textContent = 'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.';
});

btn02.addEventListener('click', function () {
    btn01.style.background = 'white';
    btn02.style.background = '#ff3c1f';
    btn03.style.background = 'white';
    client.style.backgroundImage = `url(img/index/CJ.jpg)`;
    quote.textContent = 'Carl "CJ" Johnson was born in 1968 in Los Santos, to Beverly Johnson. He has a father, but as seen in the intro movie, he said he didnt know him. Beverly had four children: Sean, Carl, Kendl, and Brian. Sweet states that Carl was born at the Johnson House, the familys childhood and current home. Old Reece, a family friend, and Gantons local Barber Old Reece, recalls memories of Carls father, although Carl tells Joey Leone that he never knew his father, and that Sweet was the "man" of the house but made his life miserable. Carl says to Woozie in Amphibious Assault that when he was swimming as a child, he once got a condom stuck on his face and that "horror like that stays with you for life". This also explains his fear for swimming.';
    clientName.textContent = 'Carl Johnson';
    job.textContent = 'CEO';
    firstQuote.textContent = 'I was charged with finding Beauty. The order whispered as I slept. A voice said it was my duty. Then quietly it wept. Filled with purpose, I set out. I was honored with my quest. In my mind there was no doubt. I was up to this great test. In my garden I stopped first. My roses were in bloom.'
});

btn03.addEventListener('click', function () {
    btn01.style.background = 'white';
    btn02.style.background = 'white';
    btn03.style.background = '#ff3c1f';
    client.style.backgroundImage = `url(img/index/Edward.jpg)`;
    quote.textContent = 'Edward James Kenway (1693 – 1735) was a Welsh-born British privateer-turned-pirate and a member of the West Indies and British Brotherhoods of Assassins. Born to farmers, Edward sought to acquire riches and fame. He became a privateer of the Royal Navy early i n his life and, once accepted, found himself stationed at the West Indies. However, a quick end to the War of the Spanish Succession and the promise of gold, glory and fame eventually seduced him into a life of piracy.It was during the quest that Edward first encountered the Assassin and Templar orders, and became embroiled of their struggle ';
    clientName.textContent = 'Edward Kenway';
    job.textContent = 'Pirate';
    firstQuote.textContent = ' For years Ive been rushing around, taking whatever I fancied, not giving a tinkers curse for those I hurt. Yet here I am... with riches and reputation, feeling no wiser than when I left home. Yet when I turn around, and look at the course Ive run... theres not a man or woman that I love left standing beside me.'
});


$(window).scroll(function () {
    var triger = document.querySelector('section.stats .numbers');
    if (window.scrollY + window.innerHeight < triger.offsetTop) {
        (function ($) {

            $.fn.countTo = function (options) {
                options = options || {};

                return $(this).each(function () {
                    var settings = $.extend({}, $.fn.countTo.defaults, {
                        from: $(this).data('from'),
                        to: $(this).data('to'),
                        speed: $(this).data('speed'),
                        refreshInterval: $(this).data('refresh-interval'),
                        decimals: $(this).data('decimals')
                    }, options);

                    // how many times to update the value, and how much to increment the value on each update
                    var loops = Math.ceil(settings.speed / settings.refreshInterval),
                        increment = (settings.to - settings.from) / loops;

                    // references & variables that will change with each update
                    var self = this,
                        $self = $(this),
                        loopCount = 0,
                        value = settings.from,
                        data = $self.data('countTo') || {};

                    $self.data('countTo', data);

                    // if an existing interval can be found, clear it first
                    if (data.interval) {
                        clearInterval(data.interval);
                    }
                    data.interval = setInterval(updateTimer, settings.refreshInterval);

                    // initialize the element with the starting value
                    render(value);

                    function updateTimer() {
                        value += increment;
                        loopCount++;

                        render(value);

                        if (typeof (settings.onUpdate) == 'function') {
                            settings.onUpdate.call(self, value);
                        }

                        if (loopCount >= loops) {
                            // remove the interval
                            $self.removeData('countTo');
                            clearInterval(data.interval);
                            value = settings.to;

                            if (typeof (settings.onComplete) == 'function') {
                                settings.onComplete.call(self, value);
                            }
                        }
                    }

                    function render(value) {
                        var formattedValue = settings.formatter.call(self, value, settings);
                        $self.html(formattedValue);
                    }
                });
            };

            $.fn.countTo.defaults = {
                from: 0, // the number the element should start at
                to: 0, // the number the element should end at
                speed: 1000, // how long it should take to count between the target numbers
                refreshInterval: 100, // how often the element should be updated
                decimals: 0, // the number of decimal places to show
                formatter: formatter, // handler for formatting the value before rendering
                onUpdate: null, // callback method for every time the element is updated
                onComplete: null // callback method for when the element finishes updating
            };

            function formatter(value, settings) {
                return value.toFixed(settings.decimals);
            }
        }(jQuery));

        jQuery(function ($) {
            // custom formatting example
            $('.numbers h3').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });

            // start all the timers

            $('.timer').each(count);

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }

        });

    }
});
