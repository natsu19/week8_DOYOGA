$(document).ready(function () {

  //Aos
  AOS.init({  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  // console.log('Hello!');

  // $(document).ready(() => {
  //   console.log('HesSchool Hello!');
  // });

  //swiper
  //首頁課程介紹
  //courseSwiper
  const autoPlaySwiper = document.querySelector('.autoPlaySwiper');
  if (autoPlaySwiper) {
  const  swiper = new Swiper(".autoPlaySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
      },
      grid: {
        rows: 2,    
        fill: 'row',
      },
      breakpoints: {
        992:{
          slidesPerView: 1.5,
          grid: {
            rows: 1, 
          },
        },
        1400:{
          slidesPerView: 2.2,
          grid: {
            rows: 1, 
          },
        },
      }
    });
  }

  //首頁-聽聽他們怎麼說
  const feedbackSwiper = document.querySelector('.feedbackSwiper');
  if (feedbackSwiper) {
    const swiper = new Swiper(".feedbackSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 3,
        fill: 'row',
      },
      breakpoints: {
        768: {
          slidesPerView: 2.2,
          grid: {
            rows: 2,
          },
        },
        992: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      keyboard: {
        enabled: true,
        //onlyInViewport: false,
      },
    });
  }


});