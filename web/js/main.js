$(function() {
    $('.slder__box').slick({
        infinite: true,
        dots:true,
    });
    $('.slider-box').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});

$(function() {

    $('.logo-menu').on('click', function () {

        $('.hd-hide-menu').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

$(window).resize(function() {
    if(document.documentElement.clientWidth > 1056) {
        document.getElementById("menu-hide-1").style.display="block"
        // тут ваш скрипт
    }
});
$(window).resize(function() {
    if(document.documentElement.clientWidth < 1056) {
        document.getElementById("menu-hide-1").style.display="none"
        // тут ваш скрипт
    }
});
function show() {
    document.getElementById("menu-hide-1").style.display = "none"
}
function show_call(){
    document.getElementById("modal-window").style.display="block"
}
function hide_call(){
    document.getElementById("modal-window").style.display="none"
}
$(function() {
    $('.color-black').on('click', function () {
        $('.ipsilver').css('display', 'none');
        $('.ipblack').css('display', 'inline-block');
    });
    $('.color-silver').on('click', function () {
        $('.ipblack').css('display', 'none');
        $('.ipsilver').css('display', 'inline-block');

    });
});

$(document).ready(function() {
    $('.box-item').on("click", function() {
        if ($(this).next().hasClass('show')) {
            $(this).next().removeClass('show');
            $(this).next().slideUp(200);
        } else {
            $(this).parent().find('.box-content').removeClass('show');
            $(this).parent().find('.box-content').slideUp(200);
            $(this).next().toggleClass('show');
            $(this).next().slideToggle(200);
        }
    });});(jQuery);


var map;
var image = 'img/loc2.png';
function initMap() {
    map = new google.maps.Map(document.querySelector('#map'), {
        center:  {lat:39.2230663, lng:-105.9981785},
        zoom: 17,
        scrollwheel: false,
    });


    var marker = new google.maps.Marker({
        position:   {lat:39.2234954, lng:-105.9990012},
        map: map,
        icon: image
    });

}
document.addEventListener('DOMContentLoaded', initMap);


