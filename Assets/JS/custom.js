/*jshint esnext: true */
/* navigation */
$("#toggler, #overlay").click(()=>{
  $("#menu").toggleClass("max-lg:-translate-y-full")
  $("#menu").toggleClass("top-0")
  $("#menu").toggleClass("top-full")
  $("body").toggleClass("overflow-hidden")
  $("#overlay").toggleClass("hidden")
})
/* swiper */
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.offers-pagination',
  },
  navigation: {
    nextEl: '.offers-next',
    prevEl: '.offers-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 50
    },
    1440: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 50
    }
  }
});