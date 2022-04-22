window.addEventListener('DOMContentLoaded', () => {
  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Slider Handle
  (function handlesSlider() {
    let handlesSlider = document.querySelectorAll('.range-slider__range');
    let minStep = document.querySelectorAll('.range-slider__min');
    let maxStep = document.querySelectorAll('.range-slider__max');
    if (handlesSlider) {
      handlesSlider.forEach((el) => {
        noUiSlider.create(el, {
          start: [10000, 100000],
          connect: true,
          padding: [10, 10],
          range: {
            min: [0],
            max: [120000],
          },
          format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' руб. ',
          }),
        });

        el.noUiSlider.on('update', function (values, handle) {
          if (handle) {
            maxStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          } else {
            minStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          }
        });
      });
    }
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.news-tabs__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 15,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.overview-tabs__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 15,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.popup__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 25,
        slidesPerView: 2,

        navigation: {
          nextEl: document.querySelector('.popup__content .swiper-button-next'),
          prevEl: document.querySelector('.popup__content .swiper-button-prev'),
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2,
          },
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderMesotube() {
    const sliderEl = document.querySelectorAll('.mesotube__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 15,
        slidesPerView: 'auto',
      });
    });
  })();

  // $("#zoom_01").elevateZoom();

  // * ===== Slider
  (function sliderMesotube() {
    const sliderEl = document.querySelectorAll('.mesonews__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 15,
        slidesPerView: 'auto',
      });
    });
  })();

  // * ===== Slider
  (function sliderMesoblog() {
    const sliderEl = document.querySelectorAll('.mesoblog__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 15,
        slidesPerView: 'auto',
      });
    });
  })();

  // * ===== Slider
  (function sliderTestimonials() {
    const sliderEl = document.querySelectorAll('.testimonials__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        spaceBetween: 30,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderTestimonials() {
    const sliderEl = document.querySelectorAll('.card-img-slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
  })();

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  (function hideNitufy() {
    const notification = document.querySelector('.notification');
    const notificationBtn = document.querySelector('.notification__btn');
    if (notification) {
      notificationBtn.addEventListener('click', (e) => {
        notification.style.display = 'none';
      });
    }
  })();

  // * ===== Slider
  (function sliderHero() {
    const sliderEl = document.querySelector('.hero__slider');

    new Swiper(sliderEl, {
      slidesPerView: 1,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  (function lastNews() {
    const sliderEl = document.querySelector('.last-news__slider');

    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  })();

  (function sliderHero() {
    const sliderEl = document.querySelector('.subscription__slider');

    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 7,
      // centeredSlides: true,
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 200) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  if (window.pageYOffset >= 200) {
    header.classList.add('scroll-header');
  }

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Show Filter
  (function showFilter() {
    const menuBtn = document.querySelector('.catalog__filter-btn');
    const menu = document.querySelector('.form-filter');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    if (menu) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
      overlay.addEventListener('click', (e) => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.certificates__resize', '.popup--certificate', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs(
    '.news-tabs',
    '.news-tabs__top-btn',
    '.news-tabs__content',
    'news-tabs__top-btn--active'
  );

  function someTabsOverview(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass
  ) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }

  someTabsOverview(
    '.spec-tabs',
    '.spec-tabs__top-btn',
    '.spec-tabs__content',
    'spec-tabs__top-btn--active'
  );
});
