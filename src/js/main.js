const navMobile = document.querySelector('.nav-content');
const navBtn = document.querySelector('.burger-btn');
const navBtnActive = document.querySelector('.burger-active');
const allNavLinks = document.querySelectorAll('.nav__item');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownLinks = document.querySelectorAll('.dropdown');
const submitBtn = document.querySelector('.contact__btn');
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const textarea = document.getElementById('message');
const errorMail = document.querySelector('.error-email');
const errorMsg = document.querySelector('.error-msg');
const popup = document.querySelector('.popup')

textarea.addEventListener('input', adjustTextareaHeight);

// const showError = (input, msg) => {
//   const formBox = input;
  
//   formBox.classList.add('error');
//   errorMail.classList.add('error-visible');
//   errorMsg.classList.add('error-visible');
// }

// const clearError = (input) => {
//   const formBox = input;
//   formBox.classList.remove('error');
//   errorMail.classList.remove('error-visible');
//   errorMsg.classList.remove('error-visible');
// }

// const checkForm = input => {
//   input.forEach(el => {
//       if (el.value === '') {
//           showError(el, el.placeholder)
//       } else {
//           clearError(el)
//       };
//   });
// };

// const checkEmail = email => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (re.test(email.value)) {
//       clearError(email)
//   } else {
//       showError(email)
//   }
// }


// submitBtn.addEventListener('click', e => {
//   e.preventDefault();

//   checkForm([email, message])
//   checkEmail(email);
// })

// const checkErrors = () => {

//   const allElements = document.querySelectorAll('input, textarea');
//   let errorCount = 0;

//   allElements.forEach(el => {
//       if (el.classList.contains('error')) {
//           errorCount++
//       }
//   })

//   if (errorCount === 0) {
//       popup.classList.add('show-popup')
//   }
// }

adjustTextareaHeight();


function adjustTextareaHeight() {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px'; 
}

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

// const dropdownMobile = () => {
//   dropdownContent.classList.toggle('show-dropdown');
//   console.log('Otwieranie dropdownMenu');
// }

// dropdownLinks.forEach(link => {
// link.addEventListener('click', dropdownMobile);
// });

navBtn.addEventListener('click', handleNav);



