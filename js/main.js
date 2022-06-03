$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
        // Tabs Section
        $('.tabs-switch li').click(function () {
            // add selected class to active link
            $(this).addClass('selected').siblings().removeClass('selected');
            // hide divs
            $('.tabs-sections .tabs-content > div').hide();
            // show div with connected link
            $('.'+ $(this).data('class')).show();
        });
    });
});