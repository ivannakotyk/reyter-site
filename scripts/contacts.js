  const contactsSection = document.querySelector('.contacts');
  const contactsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactsSection.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  contactsObserver.observe(contactsSection);