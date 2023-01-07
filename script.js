const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,  
    },
    loop: true,
    effect: "linear",
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
