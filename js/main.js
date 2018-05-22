$(function () {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  // $(document).bind("mousewheel", function (event, delta) {
  //   return false;
  // });

  $("nav")
    .children("nav-menu")
    .find("div")
    .click(function () {
      let target = $(this).data("target");
      let _offset = $("." + target).offset().top;
      $("html,body").animate({
        scrollTop: _offset
      }, {
        duration: 1000
      });
      return false;
    });

  $(".hamburger").click(function () {
    $(this).toggleClass("hamburger-x");
    $(this).next().slideToggle();
  })

  $(".hambergur-part i").click(function () {
    let target = $(this).data("target");
    let _offset = $("." + target).offset().top;
    $(".hambergur-icon").slideToggle();
    $("html,body").animate({
      scrollTop: _offset
    }, {
      duration: 1000
    });
    return false;
  });

  $(".hambergur-part").hide();
  $(window).scroll(function () {
    var scrollHeight = $(window).scrollTop();
    if (scrollHeight > 800) {
      $(".hambergur-part").fadeIn();
    } else {
      $(".hambergur-part").fadeOut();
    }
  });

  $(".nav-menu div").hover(function () {
    $(this).toggleClass("animated");
    $(this).toggleClass("rubberBand");
    $(this).toggleClass("infinite");
  });
  $(".hambergur-icon i").hover(function () {
    $(this).toggleClass("animated");
    $(this).toggleClass("rubberBand");
    $(this).toggleClass("infinite");
  });
  $(".hambergur-part").click(function () {
    $(".hambergur-icon").slideToggle();
  });
  var wH = $(window).height();
  $(".welcome-page-title").css({
    height: wH - 100
  });
  $(".skill-part").css({
    height: wH
  });
  $(".works-part").css({
    height: wH
  });
  $(".works-part-japan").css({
    height: wH
  });
  $(".works-part-this").css({
    height: wH
  });
  $(".about-me-part").css({
    height: wH - 80
  });
  $(".contact-me-part").css({
    height: wH - 200
  });

  new WOW().init();

  $("button").click(function () {
    var contentTop = $(this).data("target");
    var _offsetBtn = $("." + contentTop).offset().top;
    $("body, html").animate({
      scrollTop: _offsetBtn
    }, {
      duration: 1000
    });
  });
  setTimeout(function () {
    $(".welcome-bump").css("opacity", "0");
  }, 3700);

  // var currentWin = 0;
  // $(document).ready(function() {
  //   $("body, html").on("mousewheel", function(event, delta) {
  //     $("body, html").stop();
  //     var dir = delta > 0 ? -wH -120 : wH +120;
  //     currentWin += dir;
  //     console.log(dir);
  //     console.log(currentWin);
  //     $("body, html").animate({
  //       scrollTop: currentWin,
  //     },{
  //       duration: 1000,
  //     })
  //     return false;
  //     return currentWin;
  //   });
  // });

  // $(".intro-btn").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: wH + 220,
  //     },
  //     {
  //       duration: 1000,
  //     }
  //   );
  // });
  // $(".skill-btn").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: wH * 2.8 -50,
  //     },
  //     {
  //       duration: 1000,
  //     }
  //   );
  // });
  // $(".website-btn").click(function(){
  //   var slideBtnHw = $(this).offset().top;
  //   $('html, body').animate({
  //     scrollTop: slideBtnHw + wH +50,
  //   },
  //   {
  //     duration: 1000,
  //   })
  // })
  // $('.this-btn').click(function(){
  //   var slideBtnHw = $(this).offset().top;
  //   $('html, body').animate({
  //     scrollTop: slideBtnHw +150,
  //   },
  //   {
  //     duration: 1000,
  //   })

  // })

  // var currentWin = 0;
  // $("body, html").on("mousewheel", function(event, delta) {
  //   $("html, body").stop();
  // var dir = delta > 0 ? -(wH) : wH +100;
  //   console.log(delta);
  // console.log(-(wH));
  //   currentWin = dir;
  // console.log(currentWin);
  //   console.log(dir);
  //   $("body, html").animate({
  //     scrollTop: currentWin
  //   });
  //   return currentWin;
  // });
});