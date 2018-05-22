$(function() {
  $(".fadeSlider").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    fade: true,
    cssEase: "linear",
    arrows: false
  });
  $(".menuSlider").slick({
    autoplay: true,
    autoplaySpeed: 0,
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
