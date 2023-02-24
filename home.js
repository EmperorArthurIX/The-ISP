let keywords = document.querySelector("#keywords")
let text_slider = document.querySelector("#text-slider")

var typed = new Typed(text_slider, {
    strings: keywords.textContent.split(","),
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            animateOut: 'fadeOut',
        },
        600: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
});
