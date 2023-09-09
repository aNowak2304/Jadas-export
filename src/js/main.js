const navMobile = document.querySelector('.nav-content');
const navBtn = document.querySelector('.burger-btn');
const navBtnActive = document.querySelector('.burger-active');
const allNavLinks = document.querySelectorAll('.nav__item');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownLinks = document.querySelectorAll('.dropdown');

const handleNav = () => {
  navBtn.classList.toggle('burger-active');
  navMobile.classList.toggle('nav--active');
  allNavLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMobile.classList.remove('nav--active')
          navBtn.classList.remove('burger-active')
      })
  })
}

document.addEventListener('DOMContentLoaded', function() {
  const navDesktop = document.querySelector('.nav-desktop')
  const navMobile = document.querySelector('.nav-mobile')

  function addBackground() {
      if ((window.scrollY >= 1) && (window.innerWidth > 992)){
          navDesktop.classList.add('nav-background')
      }

      else if ((window.scrollY >= 1) && (window.innerWidth < 992)){
        navMobile.classList.add('nav-background')
      }

      else{
        navDesktop.classList.remove('nav-background')
          navMobile.classList.remove('nav-background')
      }
  }
  window.addEventListener('scroll', addBackground)
})

const dropdownMobile = () => {
  dropdownContent.classList.toggle('show-dropdown');
  console.log('Otwieranie dropdownMenu');
}

dropdownLinks.forEach(link => {
link.addEventListener('click', dropdownMobile);
});

navBtn.addEventListener('click', handleNav);
