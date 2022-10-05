/*window.onscroll = function() {scrollFixed()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navMain").add('fixed');
    document.querySelectorAll('cus_nav>a').style = 'color: #fff;'
  } else {
    document.getElementById("navbar").remove('fixed');
    document.querySelectorAll('cus_nav>a').style = 'color: #000;'

  }
}
*/

$(document).ready(function () {
  $(window).scroll(function () { // check if scroll event happened
    if ($(document).scrollTop() > 70) { // check if user scrolled more than 50 from top of the browser window
      $("#navMain").addClass('fixed');
      $('.nav_list li a').addClass('white');
      $('.nav_list').addClass('bg');
    } else {
      $("#navMain").removeClass('fixed');
      $('.nav_list li a').removeClass('white');
      $('.nav_list').removeClass('bg');

    }
  });

});

/*========product========*/
var swiper = new Swiper('.product-slide', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});
/*==========testi_slide=============*/
var swipertes = new Swiper('.tes_slide', {
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})