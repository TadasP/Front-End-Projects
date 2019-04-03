$(document).ready(function () {
    if (window.innerWidth > 900) {
        $('.autoplay').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });
    } else if (window.innerWidth < 900 && window.innerWidth >= 600) {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });
    } else if (window.innerWidth < 600) {
        $('.autoplay').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });
    }
});
