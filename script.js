// SPA-подобное поведение
function showSection(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    const el = document.getElementById(id);
    if(el) el.classList.add('active');
    window.scrollTo({ top:0, behavior:'smooth' });

    // Подсветка кнопки
    const navButtons = document.querySelectorAll('.main-nav .nav-btn');
    navButtons.forEach(btn=>{
        btn.classList.remove('active');
        if(btn.getAttribute('data-section') === id){
            btn.classList.add('active');
        }
    });
}

// Навигация
document.addEventListener('DOMContentLoaded', ()=>{
    const navButtons = document.querySelectorAll('.main-nav .nav-btn');
    navButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const section = btn.getAttribute('data-section');
            if(section) showSection(section);
        });
    });

    // Гамбургер для мобильных
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    if(hamburger && mainNav){
        hamburger.addEventListener('click', ()=>{
            mainNav.classList.toggle('show');
        });
    }

    // Закрытие меню при выборе раздела
    navButtons.forEach(link=>{
        link.addEventListener('click', ()=>{
            if(mainNav.classList.contains('show')) mainNav.classList.remove('show');
        });
    });
});
