const infoDotBtn = document.querySelectorAll('.info-dot');
const infoHint = document.querySelectorAll('.info-hint');
const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
const mobileNavBtnClose = document.querySelector('.mobile-nav-btn-close');
const navBtn = document.querySelector('.nav-btn');
const mobileNavItem = document.querySelector('.mobile-nav__item');

for (let btn of infoDotBtn) {

  btn.addEventListener('click', showHint);
}

function showHint(e) {

  for (let hints of infoHint) {
    hints.classList.add('none');
  }

  e.stopPropagation();
  this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

document.addEventListener('click', closeHint);

function closeHint() {
  for (let hints of infoHint) {
    hints.classList.add('none');
  }
}

for (let hints of infoHint) {
  hints.addEventListener('click', (e) => e.stopPropagation());
}

//swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  freeMode: true,

  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});

// Tab

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');


for (let btn of tabsBtns) {
  btn.addEventListener('click', function () {
    for (let btn of tabsBtns) {
      btn.classList.remove('tab-controls__tabs--active');
    }
    this.classList.add('tab-controls__tabs--active');

    for (let product of tabsProducts) {

      if(this.dataset.tab == 'all') {
        product.classList.remove('none');

      } else {
        if (product.dataset.tabValue == this.dataset.tab) {
          product.classList.remove('none');
        } else {
          product.classList.add('none');
        }
      }

    }
    swiper.update()
  });
}

//mobile nav 

navBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  mobileNavWrapper.classList.add('mobile-nav__wrapper--open')
})

mobileNavBtnClose.addEventListener('click', () => {
  mobileNavWrapper.classList.remove('mobile-nav__wrapper--open')
})

mobileNavWrapper.addEventListener('click', () => {
  mobileNavWrapper.classList.remove('mobile-nav__wrapper--open')
})

window.addEventListener('click', () => {
  mobileNavWrapper.classList.remove('mobile-nav__wrapper--open')
})