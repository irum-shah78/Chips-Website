const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const shadowHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

// SWIPER
const swiperFavorite = new Swiper('.favorite_swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
});