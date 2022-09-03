new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    slidesPerView: 1.5,

    // loop: true,

    // autoplay: {
    //   delay: 1500,
    // },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },

      680: {
        slidesPerView: 2,
      }

    }

});
