// Theme
document.querySelector('.theme-controller').addEventListener('change', (e) => {
  const html = document.querySelector('html');
  if (e.target.checked) {
    html.setAttribute('data-theme', 'cyberpunk');
  } else {
    html.setAttribute('data-theme', 'light');
  }
});

// Smoth Scroll
document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua link dalam navbar, termasuk yang di dalam dropdown
  const navLinks = document.querySelectorAll('.navbar a, .dropdown-content a');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Hitung posisi scroll dengan mempertimbangkan tinggi navbar
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Jika menggunakan dropdown mobile, tutup dropdown setelah klik
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
          dropdown.classList.remove('open'); // Sesuaikan dengan class yang Anda gunakan untuk membuka dropdown
        }
      }
    });
  });
});
