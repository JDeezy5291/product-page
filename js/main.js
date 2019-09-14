$(document).ready(function() {
    var filterizd = $('.filtr-container').filterizr({});

    $(".filterListItem").on('click', function() {
        $(".filterListItem").removeClass("active");
        $(this).addClass("active");
    })
});

document.addEventListener("DOMContentLoaded", () => {
    var tl = new TimelineMax({paused: true});
    tl
    .to('.next', .3, {
        x: 1000,
        ease: Expo.easeInOut
    }, '-=.3')
    .to('.menu', .8, {
        // x: 100,
        width: '100%',
        autoAlpha: 1,
        ease: Power3.easeInOut
    }, '-=.3')
    .to('.close-menu', 1, {
        x: -50,
        float: 'right',
        autoAlpha: 1,
        ease: Power3.easeInOut
    }, '-=1')
    .to('.open-nav ul li', 1.5, {
        x: 50,
        autoAlpha: 1,
        ease: Power3.easeInOut
    }, '-=1')
    // TweenMax.from('.left-sidebar', 1.4, {
    //     width: '0%',
    //     ease: Expo.easeInOut
    // })
    TweenMax.from('.right', 1.6, {
        delay: .6,
        width: '0%',
        ease: Expo.easeInOut
    })
    TweenMax.from('.buy_left', .6, {
        width: '0%',
        ease: Expo.easeInOut
    })
    TweenMax.from('.buy_right', 1.6, {
        delay: .6,
        width: '0%',
        ease: Expo.easeInOut
    })
    TweenMax.from('.logo', 1, {
        delay: 1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    })
    TweenMax.from('.next', 1, {
        delay: 1.2,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    })
    TweenMax.from('.search', 1, {
        delay: 1.6,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    })
    TweenMax.from('.product-title', 1, {
        delay: 1.6,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    TweenMax.from('.desc', 2, {
        delay: 1.8,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    })
    TweenMax.from('#price', 2, {
        delay: 2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    TweenMax.from('.btn', 2, {
        delay: 2.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom('.right-sidebar ul li', 1, {
        delay: 2.6,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, '.08')
    TweenMax.from('.left-bottom', 2, {
        delay: 2.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom('.media ul li', 1, {
        delay: 3.6,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, '.08');
    // .to('.nav', .8, {
    //     width: 0,
    //     ease: Power3.easeInOut
    // })


    // .to('.menu',.8, {
    //     autoAlpha: 1
    // })
    // .staggerFrom('.main-menu li a:not(.submenu li a)', 1, {
    //     opacity: 0,
    //     y: 10,
    //     ease: Power3.easeInOut
    // }, .1)
    // .staggerFrom('.nav-media ul li', 1, {
    //     opacity: 0,
    //     y: 10,
    //     ease: Power3.easeInOut
    // }, .1, '-=2')
    // .from('.call', 1, {
    //     delay: -2,
    //     opacity: 0,
    //     y:10,
    //     ease: Power3.easeInOut
    // })
    // .from('.mail', 1, {
    //     delay: -1.6,
    //     opacity: 0,
    //     y:10,
    //     ease: Power3.easeInOut
    // });
    
    
    tl.reverse();

    $(document).on('click', '.next', function() {
        tl.reversed(!tl.reversed());
    });

    $(document).on('click', '.close-menu', function() {
        tl.reversed(!tl.reversed());
    })
})

// SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
    }    
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function showProducts(minPrice, maxPrice) {
    $("#products li").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
}

$(function() {
    var options = {
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            var min = ui.values[0],
                max = ui.values[1];

            $("#amount").val("$" + min + " - $" + max);
            showProducts(min, max);
        }
    }, min, max;

    $("#slider-range").slider(options);

    min = $("#slider-range").slider("values", 0);
    max = $("#slider-range").slider("values", 1);

    $("#amount").val("$" + min + " - $" + max);

    showProducts(min, max);
});