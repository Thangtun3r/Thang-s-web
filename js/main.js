// ===========================
// WordPress Bricks Header Scroll
// ===========================
(function() {
  const header = document.getElementById('brx-header');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolling');
    } else {
      header.classList.remove('scrolling');
    }
  });
  
  // Mobile toggle (Bricks header)
  const nav = document.getElementById('brxe-ockggh');
  const offcanvas = document.getElementById('brxe-eumaod');
  const openButton = document.getElementById('brxe-gynkgg');
  const closeButton = document.getElementById('brxe-lhybfn');

  const setMenuOpen = (isOpen) => {
    nav?.classList.toggle('brx-open', isOpen);
    offcanvas?.classList.toggle('brx-open', isOpen);
    openButton?.setAttribute('aria-expanded', String(isOpen));
    closeButton?.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  openButton?.addEventListener('click', () => setMenuOpen(true));
  closeButton?.addEventListener('click', () => setMenuOpen(false));

  offcanvas?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
})();

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.getElementById('brxe-bpxpbg');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    backToTop?.classList.add('visible');
  } else {
    backToTop?.classList.remove('visible');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Site loaded successfully! 🎮');
});
