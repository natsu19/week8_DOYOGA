$(document).ready(function () {
//--- start ---

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
  // console.log('Hello World!');

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
      loop:true,
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        //onlyInViewport: false,
      },
    });
  }

  //立即預約-選擇等級
  // const ClassLevel = document.querySelector('.ClassLevel');
  // if (ClassLevel) {
  // const swiper = new Swiper(".ClassLevel", {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   grid: {
  //     fill: 'row',
  //   },
  //   breakpoints: {
  //     768:{
  //       slidesPerView: 1.5,
  //       rows: 1,
  //       // loop: true,
  //     },
  //     992:{
  //       slidesPerView: 2.3,
  //       rows: 1,
  //     },
  //     1200:{
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //       rows: 1,
  //     },
  //   }
  // });
  // }

  const ClassLevel = new Swiper(".ClassLevel",{
    slidesPerView: 1,
    slidesPerColumn: 3,
    spaceBetween: 24,
    slidesPerColumnFill: 'row',
    breakpoints: {
      768: {
        slidesPerView: 1.8,
        slidesPerColumn: 1,
        spaceBetween: 30,
      },
      960: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 20,
      }
    }
  })

  //首次體驗 
  $('.FirstBtn').click(function(){
    //把其他兩個卡片藏起來
    $('.pills-ShortTerm,.pills-LongTerm').toggleClass('d-none d-lg-block');
  })
    
  //點填寫資料、完成預約等分頁，"選擇課程階級"會隱藏
  $('.projectPage').click(function(){
    $('.reserveRemind').slideDown();
  })
  
  $('.fillDataPage,.reservePage').click(function(){
    $('.reserveRemind,.courseList').slideUp();
  })
    


  
  // const ClassLevel = document.querySelector('.ClassLevel');
  // if (ClassLevel) {
  // const  swiper = new Swiper(".ClassLevel", {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
      
  //     grid: {
  //       rows: 1,    
  //       fill: 'row',
  //     },
  //     breakpoints: {
  //       992:{
  //         slidesPerView: 3,
  //         grid: {
  //           rows: 1, 
  //         },
  //       },

  //     }
  //   });
  // }

//--- end ---

});

