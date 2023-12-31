var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    
    
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      },
      1560: {
        slidesPerView: 3
      }
    }
  });