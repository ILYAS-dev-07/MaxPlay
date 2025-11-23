// Функция для открытия/закрытия гамбургер-меню
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// Закрытие меню при клике на ссылку (для мобильных)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});
