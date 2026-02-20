// ===========================
// Mobile Menu Toggle
// ===========================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking links
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ===========================
// Header Scroll Effect
// ===========================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.getElementById('backToTop');

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
// Dark Mode Toggle
// ===========================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (themeIcon) {
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// Toggle theme on button click
themeToggle?.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  if (themeIcon) {
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  }
  
  // Add a fun rotation animation
  themeToggle.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    themeToggle.style.transform = '';
  }, 300);
});

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  console.log(`Site loaded successfully! 🎮 Theme: ${currentTheme}`);
});
