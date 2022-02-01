document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector('.burger');
  const topNav = document.querySelector('.navigation');

  burgerBtn.onclick = function () {
    burgerBtn.classList.toggle('active');
    topNav.classList.toggle('active');
  };

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
    slidesPerColumn: 2,
    slidesPerGroup: 2,

    // tab
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      768: {
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

    // tab
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      768: {
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
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerGroup: 2,

    // tab
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });


  $('input, select').styler();

  $('.dropdown__title').on('click', function () {
    $(this).closest('.dropdown').toggleClass('active');
    $(this).next('.dropdown__content').slideToggle();
  });

  let video = document.querySelector('.video__item');
  let videoBtn = document.querySelector('.video__middle');
  video.volume = 0.2;

  video.addEventListener('click', () => {
    if (video.paused) {
      videoBtn.classList.add('active');
      video.play();
    } else {
      video.pause();
      videoBtn.classList.remove('active');
    }
  });
  videoBtn.addEventListener('click', () => {
    if (video.paused) {
      videoBtn.classList.add('active');
      video.play();
    } else {
      video.pause();
      videoBtn.classList.remove('active');
    }
  });
});