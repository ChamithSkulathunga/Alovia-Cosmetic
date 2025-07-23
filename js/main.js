(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Countdown Timer
    function countDownTimer() {	
        var endTime = new Date("31 December 2023 10:00:00 GMT+00:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (days < "10") {
            days = "0" + days;
        }
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#cdt-days").html(days + "<span>-Days-</span>");
        $("#cdt-hours").html(hours + "<span>-Hours-</span>");
        $("#cdt-minutes").html(minutes + "<span>-Mins-</span>");
        $("#cdt-seconds").html(seconds + "<span>-Secs-</span>");

    }

    setInterval(function () {
        countDownTimer();
    }, 1000);


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    
})(jQuery);






//  window.addEventListener("pageshow", function () {
//     const form = document.getElementById("contact-form");
//     if (form) form.reset();
//   });

// document.getElementById("cart-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     // Submit form via AJAX or just redirect after submission
//     window.location.href = "thankyou.html";
// });




//  function saveCartData(event) {
//     const product = document.getElementById("product").value;
//     if (!product) {
//       alert("Please select a product.");
//       event.preventDefault();
//       return false;
//     }

//     // Save to localStorage
//     localStorage.setItem("selectedProduct", product);
//     console.log("Saved product:", product); // Debug log

//     // Allow normal form submission to Formspree
//     return true;
//   }




//     window.onload = function () {
//     const product = localStorage.getItem("selectedProduct");
//     if (product) {
//       document.getElementById("selected-product").textContent = product;
//     } else {
//       document.getElementById("selected-product").textContent = "No product selected.";
//     }
//   };

// Reset form on back/forward navigation (like pressing back from thankyou.html)
window.addEventListener("pageshow", function () {
  const cartForm = document.getElementById("cart-form");
  if (cartForm) cartForm.reset();
});

// Save selected product before submit
function saveCartData() {
  const product = document.getElementById("product").value;
  if (!product) {
    alert("Please select a product.");
    return false;
  }

  localStorage.setItem("selectedProduct", product);
  console.log("Saved product:", product); // Debug
  return true;
}

// Hook into cart form submission
const cartForm = document.getElementById("cart-form");
if (cartForm) {
  cartForm.addEventListener("submit", function (e) {
    const success = saveCartData();
    if (!success) {
      e.preventDefault(); // Stop submission
    }
    // Let Formspree handle the redirect
  });
}

// On thankyou.html – show selected product and clear it after 5s
window.addEventListener("DOMContentLoaded", function () {
  const span = document.getElementById("selected-product");
  if (span) {
    const product = localStorage.getItem("selectedProduct");
    span.textContent = product || "No product selected.";

    // Clear from localStorage after showing
    setTimeout(() => {
      localStorage.removeItem("selectedProduct");
    }, 5000);
  }
});






