window.sr = ScrollReveal({ reset: true });

sr.reveal('.about_me_left_section', {
    rotate: { x: 20, y: 0, z: 0 },
    duration: 2000
})

sr.reveal('.about_me_right_section', {
    rotate: { x: 20, y: 0, z: 0 },
    duration: 2500
})

sr.reveal('.row', {
    rotate: { x: 0, y: 0, z: 0 },
    duration: 2000
})



//BTN TO TOP FUNCTION WITH JQUERY

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 440) {
        $(".btn_top").fadeOut();
    } else {
        $(".btn_top").fadeIn();
    }
});