$(function() {

    $('.menu__con1').on('click', function () {

        $('.news1').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }

        });

    });
    $('.menu__con2').on('click', function () {

        $('.news2').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
    $('.menu__con3').on('click', function () {

        $('.news3').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
    $('.menu__con4').on('click', function () {

        $('.news4').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });

});