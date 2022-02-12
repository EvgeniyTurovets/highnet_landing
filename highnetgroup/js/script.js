document.addEventListener("DOMContentLoaded", function () {
  // табы 
  $('.js-tab-trigger').on('click', function () {
    let id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="' + id + '"]');

    $(this).closest('.container').find('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');

    $(this).closest('.container').find('.js-tab-content.active').removeClass('active');
    content.addClass('active');
  });

  // Калькуляторы
  $('.js-calc__path').on('change', function () {
    let id = $(this).val();
    let container = $(this).closest('.calc');
    let content = container.find('.js-path-content[data-path="' + id + '"]');

    container.find('.js-path-content').removeClass('active');
    content.addClass('active');
  });
  $('.calc__submit').on('click', function (event) {
    event.preventDefault();
  });
  // слайдеры
  new Swiper('.investment__slider', {
    pagination: {
      el: '.slider__pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<span> / </span>' + '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: '.investment__arrow-next',
      prevEl: '.investment__arrow-prev',
    },
    spaceBetween: 15,
    slidesPerView: 1,
    grid: {
      rows: 2,
    },

    // tab
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      540: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2,
      },
      768: {
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.slider2__slider', {
    pagination: {
      el: '.slider__pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<span> / </span>' + '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: '.slider2__arrow-next',
      prevEl: '.slider2__arrow-prev',
    },
    spaceBetween: 15,
    slidesPerView: 1,
    grid: {
      rows: 2,
    },

    // tab
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      540: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2,
      },
      768: {
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.cases__slider', {
    pagination: {
      el: '.slider__pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<span> / </span>' + '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: '.cases__arrow-next',
      prevEl: '.cases__arrow-prev',
    },
    spaceBetween: 30,
    slidesPerView: 1,
    grid: {
      rows: 3,
    },

    // tab
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      540: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2,
      },
      768: {
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
  });

  // бургер
  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.navigation').toggleClass('active');
  });

  // библиотека стилизации
  $('input, select').styler();

  // выпадашки
  $('.dropdown__title').on('click', function () {
    $(this).closest('.dropdown').toggleClass('active');
    $(this).next('.dropdown__content').slideToggle();
  });

  $('.contacts__btn').on('click', function () {
    $(this).closest('.interactive__card').toggleClass('active');
    $(this).next('.interactive__dropdown').slideToggle();
  });

  // вызов модалок
  $('.js-modal-trigger').on('click', function () {
    let id = $(this).attr('data-modal'),
      content = $('.js-modal-content[data-modal="' + id + '"]');

    content.addClass('visible-flex');
    $('body').addClass('modal-open');
  });

  // скрытие модалок
  $('.modal-close').on('click', function () {
    $('.modal').removeClass('visible-flex');
    $('body').removeClass('modal-open');
  });

  // маска для телефона
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $(".application__phone").on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7 (999) 999 9999");
  // кнопка на форме отправки
  $('.application-btn').on('click', function () {
    $(this).closest('.application__form').addClass('hidden');
    $(this).closest('.application__left').find('.correct').addClass('visible-flex');
  });




  $('.correct__btn').on('click', function () {
    $('.application__form').removeClass('hidden');
    $('.correct').removeClass('visible-flex');
    $('.modal').removeClass('visible-flex');
    $('body').removeClass('modal-open');
  });

  // плеер
  let video = document.querySelector('.video__item');
  let videoBtn = document.querySelector('.video__middle');
  video.volume = 0.2;

  video.addEventListener('click', () => {
    if (video.paused) {
      videoBtn.classList.add('hidden');
      video.setAttribute('controls', '');
      video.play();
    }
  });
  videoBtn.addEventListener('click', () => {
    if (video.paused) {
      videoBtn.classList.add('hidden');
      video.setAttribute('controls', '');
      video.play();
    }
  });
});