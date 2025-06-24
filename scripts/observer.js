  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // знімаємо клас, якщо елемент вийшов з поля зору
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.category-animated').forEach(el => {
    observer.observe(el);
  });