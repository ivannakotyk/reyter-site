// readmore.js
const btn = document.getElementById('readMoreBtn');
const fullText = document.getElementById('fullText');

btn?.addEventListener('click', () => {
  const isHidden = fullText.hasAttribute('hidden');
  if (isHidden) {
    fullText.removeAttribute('hidden');
    fullText.classList.add('show');
    btn.textContent = 'Приховати';
    btn.setAttribute('aria-expanded', 'true');
  } else {
    fullText.classList.remove('show');
    setTimeout(() => {
      fullText.setAttribute('hidden', '');
    }, 500);
    btn.textContent = 'Читати більше';
    btn.setAttribute('aria-expanded', 'false');

    // Прокрутка назад до початку секції "Про нас"
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
});
