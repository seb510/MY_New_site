$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $(window).scroll(function () {
        $('.block').each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

}) ;

function list() {
    alert("This function work");
}