// burger.js
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('mainNav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

window.addEventListener('click', (e) => {
  if (window.innerWidth <= 700 && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && e.target !== burger) {
      nav.classList.remove('open');
    }
  }
});

window.addEventListener('scroll', () => {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
});
