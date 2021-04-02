// const accordion = document.getElementsByClassName('item-benefits-list');
// for (i = 0; i < accordion.length; i++) {
//    accordion[i].addEventListener('click', function () {
//       this.classList.toggle('active')
//    })
// };

// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//    smoothLink.addEventListener('click', function (e) {
//       e.preventDefault();
//       const id = smoothLink.getAttribute('href');
//       document.querySelector(id).scrollIntoView({
//          behavior: 'smooth',
//          block: 'start'
//       });
//    });
// };
// window.onscroll = function () {
//    let scrollElem = document.getElementById("scrollToTop");
//    if (window.scrollY > document.documentElement.clientHeight) {
//       scrollElem.style.opacity = "1";
//    } else {
//       scrollElem.style.opacity = "0";
//    }
// };
// let timeOut;
// function goUp() {
//    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//    if (top > 0) {
//       window.scrollBy(0, -100);
//       timeOut = setTimeout('goUp()', 5);
//    } else clearTimeout(timeOut);
// };


// const colors = document.querySelectorAll('.color');
// colors.forEach((color) => {
//    color.addEventListener('mouseover', () => {
//       color.closest('.block-jvc__main').querySelector('.block-jvc__main-img').src = color.getAttribute('data-image');
//    });

//    color.addEventListener('click', (event) => {
//       color.closest('.block-jvc__main').querySelectorAll('.color').forEach((item) => {
//          item.classList.remove('active')
//       });
//       event.target.classList.add('active');
//    });


// });

const widgetItem = document.querySelectorAll('.widget__item');
widgetItem.forEach((img) => {
  img.addEventListener('mouseover', (event) => {
    img.closest('.menu').querySelector('.menu__img').src = img.getAttribute('data-image');
    img.closest('.menu').querySelectorAll('.widget__item').forEach((item) => {
      item.classList.remove('active')
    });
    event.currentTarget.classList.add('active');
  });
});


const color = document.querySelectorAll('.product__color');
color.forEach((colors) => {
  colors.addEventListener('click', (event) => {
    colors.closest('.product').querySelectorAll('.product__color').forEach((item) => {
      item.classList.remove('active')
      console.log('remove');
    });
    event.currentTarget.classList.add('active');
    console.log('add');
  });
});


const swiper = new Swiper('.swiper-container', {
  lazy: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

});