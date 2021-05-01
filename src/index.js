import './style.css';

// úkol č.2 - hide hamburger

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

//úkol č. 4

let ordered = false;

const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
  if (ordered === false) {
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = true;
    orderBtn.textContent = 'Zrušit';
  } else {
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    ordered = false;
  }
});
