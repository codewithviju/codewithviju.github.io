$(document).ready(function () {
  const slider1 = $(".certificat-slider");
  const slider2 = $(".Projects-slider");

  slider1.slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  slider2.slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  slider1.on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });
  slider2.on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });

  //   var owl = $(".owl-carousel");
  //   owl.owlCarousel({
  //     loop: false,
  //     nav: false,
  //     dots: false,
  //     margin: 20,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 2,
  //       },
  //       960: {
  //         items: 3,
  //       },
  //       1200: {
  //         items: 3,
  //       },
  //     },
  //   });

  //   owl.on("mousewheel", ".owl-stage", function (e) {
  //     if (e.deltaY > 0) {
  //       owl.trigger("next.owl");
  //     } else {
  //       owl.trigger("prev.owl");
  //     }
  //     e.preventDefault();
  //   });
});
