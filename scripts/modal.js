
  const modal = document.getElementById('productModal');
  const modalName = document.getElementById('modalName');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');
  const modalGallery = document.querySelector('.modal-gallery');

  let currentImages = [];
  let currentIndex = 0;

  function showImage(idx) {
    if (!currentImages.length) return;
    currentIndex = (idx + currentImages.length) % currentImages.length;
    modalImage.src = currentImages[currentIndex].trim();
  }

  function openModal(card) {
    modalName.textContent = card.dataset.name;
    modalPrice.textContent = card.dataset.price;
    modalDescription.innerHTML = card.dataset.description.replace(/\n|\r|\r\n|&#10;/g, '<br>');
    currentImages = card.dataset.images.split(',').map(s => s.trim()).filter(Boolean);
    showImage(0);
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  function nextImage() {
    showImage(currentIndex + 1);
  }

  function prevImage() {
    showImage(currentIndex - 1);
  }

  // Закриття по кліку поза вікном
  window.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Закриття по ESC і перелистування стрілками
  document.addEventListener('keydown', function (e) {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // SWIPE для всієї області .modal-gallery на мобільних (додаємо лише один раз!)
  (function enableSwipe() {
    let touchStartX = null;
    let touchStartY = null;
    modalGallery.addEventListener('touchstart', function(e) {
      if (window.innerWidth > 900) return;
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].screenX;
        touchStartY = e.touches[0].screenY;
      }
    });
    modalGallery.addEventListener('touchend', function(e) {
      if (window.innerWidth > 900) return;
      if (touchStartX === null) return;
      let touchEndX = e.changedTouches[0].screenX;
      let touchEndY = e.changedTouches[0].screenY;
      if (Math.abs(touchEndX - touchStartX) > 50 && Math.abs(touchEndY - touchStartY) < 60) {
        if (touchEndX - touchStartX > 0) {
          prevImage();
        } else {
          nextImage();
        }
      }
      touchStartX = null;
      touchStartY = null;
    });
  })();
