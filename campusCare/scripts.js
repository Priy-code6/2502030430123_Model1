document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '') || (href === 'campus-life.html' && path === 'campus-life.html')) {
      link.classList.add('active');
    }
  });
});
