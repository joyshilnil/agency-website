
// Toggle Navigation
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.add("open");
});

close.addEventListener("click", () => {
  navList.classList.remove("open");
});

// theme
const icons = [...document.querySelectorAll(".theme-icon")];

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="far fa-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="far fa-moon"></i>';
        icon.style.color = "#121713";
      }
    });
  }
});

;

/* menu-item active */
$(window).on('load scroll',function(){


  $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');

      if(top >= offset && top < offset + height){
          $('header ul li a').removeClass('active');
          $('header').find(`[href="#${id}"]`).addClass('active');
      }

  });

});

// Fix Nav
window.onscroll = ()=>{
  this.scrollY > 20 ? header.classList.add("fix-nav") : header.classList.remove("fix-nav");
}


// Home Slider


var swiper = new Swiper(".homeSwiper", {
  autoplay: {
  delay: 5000,
  },
  loop: true,
  parallax: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// jQuery counterUp


  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 3000
  });



// Testimonial Carowsel

var swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  autoplay: true,
 
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  slidesPerView: 2,
  breakpoints: {

    320: {
      slidesPerView: 1
    },
    991: {
      slidesPerView: 1
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2
    }
  }
});


// Clients Carowsel

var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 35, 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 35
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 35
    }
  }
});




// Praticle Plugin


document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('ax-praticals'), {
    dotColor: '#FFAA17',
    lineColor: '#525250'
  });
}, true);



  // Porfolio  and filterizr



  $( document ).ready(function() {


    // filterizr
    
    const filterizr = new Filterizr('.filter-container');      

        // for item active class 
        $('.ax-portfolio-item a').on( 'click',function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });



      // Initiate venobox (lightbox feature used in portofilo)
      $('.venobox').venobox();




  });


  /* Click TO Top */

  $(window).on('load scroll',function(){

    if($(window).scrollTop() > 0){
      $('.toped').show();
    }
    else{
      $('.toped').hide();
    }
  
  });
  






// Scrool Animation Plugin
AOS.init();