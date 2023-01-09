
jQuery(document).ready(function( $ ) {
    $("#clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 
            0: { items: 2 }, 
            768: { items: 4 }, 
            900: { items: 6 }
        }
    });

    $('#testimonials-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });

    $("#sidebar-toggle").click(function() {
        $("#sidebar").toggleClass("active");
    });
    $("#sidebar-close").click(function() {
        $("#sidebar").removeClass("active");
    });
    $(".nav-link").click(function() {
        $("#sidebar").removeClass("active");
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > $('#topbar').height()) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
});
