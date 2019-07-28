//слайдер our members
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

    // плавна анімація при скролі внис випливають заголовки
    $(window).scroll(function () {
        $('.block').each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
// Плавний перехід по силках на сторінці
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

}) ;

function list() {
    alert("This function work");
}