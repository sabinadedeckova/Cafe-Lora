import './style.css';

// úkol 2. - hide hamburger

const navEl = document.querySelector('nav');
const navAEl = document.querySelectorAll('nav a');

const hideNav = () => {
  navEl.classList.toggle('nav-closed');
};

const navBtnEl = document.querySelector('#nav-btn');
navBtnEl.addEventListener('click', hideNav);

navAEl.forEach((elm) => {
  elm.addEventListener('click', hideNav);
});
