$(function () {

    $(".menu .menu__link, .menu .logo, .header__content .header__link, .footer .logo").on("click", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);

    });

    $(window).ready(function () {
        $(this).scrollTop(0);
    });

    $(window).scroll(function () {

        var windowWidth = $(window).width();
        if ($(document).scrollTop() > 0) {
            $('.menu').addClass('change');
        }
        if ($(document).scrollTop() == 0) {
            $('.menu').removeClass('change');
        }

    });

    $('.menu-btn, .menu .menu__link').on('click', function () {

        $('body').toggleClass('body--scroll-block');
        $('.header').toggleClass('header--active');
        $('.header__content').toggleClass('header__content--active');
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu-btn__item').toggleClass('menu-btn__item--active');

    });

    Fancybox.bind("[data-fancybox]", {

    });

    var mixer = mixitup('.gallery__content');

});