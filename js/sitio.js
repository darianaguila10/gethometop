/*------------------------
INIT WOW
-------------------------*/
new WOW().init();

/*----------------------------------
INIT smoothScroll
--------------------------------*/
smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    offset: 80 // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    HIDE Y SHOW GO UP BUTTON 
 ----------------------------------*/
$(function() {
    $(window).scroll(function() {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".go-up").fadeIn();
        } else {
            $(".go-up").fadeOut();
        }
    });

});

/*---------------------------------
   ANIMATE HEADER
 ----------------------------------*/
$(window).scroll(function() {
    var m = $('#main-menu');
    var scroll = $(window).scrollTop();
    var a = $('#main-menu a');

    if (scroll >= 80) {
        m.addClass("change-menu");
        a.addClass("change-menu");
    } else {
        a.removeClass("change-menu");
        m.removeClass("change-menu");
    }
});

/*---------------------------------
   ACTIVE CAROUSEL
 ----------------------------------*/
$('#carousel').carousel({
    interval: 4000,
    pause: false
})


/*---------------------------------
   ACTIVE-MENU
 ----------------------------------*/
$('a[href*="#"]:not([href="#"])').on('click', function() {
    if ($(this).parents('#main-menu').length) {
        $('#main-menu .active').removeClass('active');
        $('.show').removeClass('show');
        $(this).closest('li').addClass('active');
    }
});

// Gallery - uses the magnific popup jQuery plugin
$('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});

/*---------------------------------
   PRICE-RANGE
 ----------------------------------*/
var slider = document.getElementById("price");
var output = document.getElementById("value");
if (output) {
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}

/*---------------------------------
   INIT TOOLTIP
 ----------------------------------*/
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})