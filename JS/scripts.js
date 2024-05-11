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
const swiperFavorite = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto,'
});

// SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  })
};
window.addEventListener('scroll', scrollActive);