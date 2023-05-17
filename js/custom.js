$(document).ready(function() {
    $('.brand-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        centerPadding: 20,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    let list = document.querySelectorAll('.list');
    let portfoliowrapper = document.querySelectorAll('.portfoliowrapper');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');

            let datafilter = this.getAttribute('data-filter');

            for (let k = 0; k < portfoliowrapper.length; k++) {
                portfoliowrapper[k].classList.remove('active');
                portfoliowrapper[k].classList.add('hide');

                if (portfoliowrapper[k].getAttribute('data-item') == datafilter || datafilter == 'all') {
                    portfoliowrapper[k].classList.remove('hide');
                    portfoliowrapper[k].classList.add('active');
                }
            }
        })
    }

    $('.team-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        centerPadding: 40,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
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

    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: "<div class='slick-prev'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>",
        nextArrow: "<div class='slick-next'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>",
        centerPadding: 20,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
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

    $('.blog-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: "<div class='slick-prev'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>",
        nextArrow: "<div class='slick-next'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>",
        speed: 3000,
        centerPadding: 20,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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