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

    // Подсветка кнопки навигации
    const navButtons = document.querySelectorAll('.main-nav .nav-btn');
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-section') === id);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.main-nav .nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            if (section) showSection(section);

            // если мобильное меню открыто — закрываем
            const mainNav = document.querySelector('.main-nav');
            if (mainNav && mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                const hamburger = document.querySelector('.hamburger');
                if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Устанавливаем активную кнопку при загрузке (синхро с активной секцией)
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        const id = activePage.getAttribute('id');
        if (id) {
            navButtons.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-section') === id);
            });
        }
    }

    // Гамбургер для мобильных
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            const isShown = mainNav.classList.toggle('show');
            hamburger.setAttribute('aria-expanded', String(isShown));
        });

        // Закрыть меню при клике вне (мягко)
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !hamburger.contains(e.target) && mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Дополнительно: учтём случайную кнопку "Подробнее" (для примера)
    const learnBtn = document.getElementById('learnMoreBtn');
    if (learnBtn) {
        learnBtn.addEventListener('click', () => {
            showSection('shop'); // например переводим в магазин
        });
    }
});
