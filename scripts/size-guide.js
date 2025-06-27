document.addEventListener('DOMContentLoaded', () => {
  const zoomableImages = document.querySelectorAll('.zoomable');

  const modal = document.createElement('div');
  modal.classList.add('image-modal');
  document.body.appendChild(modal);

  const modalImg = document.createElement('img');
  modal.appendChild(modalImg);

  zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
    img.style.cursor = 'zoom-in';
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
    }
  });
});
