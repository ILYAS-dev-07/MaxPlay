// Показать нужную секцию по id (SPA-подобное поведение)
function showSection(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('active');
        // плавная прокрутка к началу
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Подключаем обработчики навигации
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.main-nav .nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            if (section) showSection(section);
})})})

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

