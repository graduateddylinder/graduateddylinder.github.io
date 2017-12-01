$(document).ready(function() {                      // Begin every .js with this //
  $('a[href^="#"]').on('click',function (e) {       // Select all 'a' elements that start with (^=) "#", on click run some function for event (click) e { //
    e.preventDefault();                             // Stop normal behavour for link //

    var target = this.hash;                         // Target hash ("#") that has been clicked (this element) as variable //
    var $target = $(target);                        // Set variable as jquery object //

    $('html, body').animate({                       // Select html and body elements and run jquery animate function //
        'scrollTop': $target.offset().top           // Parameter of animate, pass in $target and set offset to top of div //
    }, 1000, 'swing'); // , function () {                 // Set timing to 1000ms, choose 'swing' animation start callback function //
        // window.location.hash = target;              // (Optional), when clicked, sets hash in window to whatever was clicked ? //
      // });
  });

  $('.carousel').slick({
    autoplay: true,
    arrows: false
  });

});

// https://www.youtube.com/watch?v=_EGO-d9H184  <-- Tutorial where code is from //
