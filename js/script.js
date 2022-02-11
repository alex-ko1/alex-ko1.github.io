$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
    let len = $('.slider').children().length;
    let x = len > 3;
    $('.slider').slick({
        arrows: false,
        autoplay: x,
        slidesToShow: 3,
        dots: x,
        infinite: x,
        draggable: x,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

                autoplay: true,
                autoplaySpeed: 8000,
                pauseOnHover: true,

                touchTreshhold: 5,
                touchMove: true,
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]
    });
    $('.slider2').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        //pauseOnFocus: true,
        pauseOnHover: true,

        touchTreshhold: 5,
        touchMove: true,
        waitForAnimate: false,
        variableHeight: false,

    });
    $('.slider3').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnHover: true,

        touchTreshhold: 5,
        touchMove: true,
        waitForAnimate: false,

    });

});