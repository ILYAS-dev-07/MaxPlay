// -------------------------------
// Переводы
// -------------------------------
const translations = {
    ru: {
        nav_home: "Главная",
        nav_menu: "Меню",
        nav_shop: "Магазин",
        nav_contact: "Обратная связь",
        nav_about: "О нас",

        home_title: "Будущее уже здесь",
        home_subtitle: "Инновации Max Play формируют технологический мир завтрашнего дня.",
        btn_more: "Подробнее",

        menu_title: "Меню",
        menu_text: "Информация о наших услугах и продуктах.",

        shop_title: "Магазин",
        shop_text: "Здесь будут товары Max Play.",

        contact_title: "Обратная связь",
        contact_text: "Форма обратной связи или контакты.",
        contact_name: "Ваше имя",
        contact_msg: "Ваше сообщение",
        btn_send: "Отправить",

        about_title: "О нас",
        about_p1: "Max Play — это не просто компания...",
        about_p2: "Мы верим, что инновации рождаются...",
        about_p3: "Наша команда объединяет талантливых специалистов...",

        footer: "© 2025 Max Play. Все права защищены."
    },

    tr: {
        nav_home: "Ana Sayfa",
        nav_menu: "Menü",
        nav_shop: "Mağaza",
        nav_contact: "İletişim",
        nav_about: "Hakkımızda",

        home_title: "Gelecek burada",
        home_subtitle: "Max Play inovasyonları yarının teknolojisini şekillendiriyor.",
        btn_more: "Daha fazla",

        menu_title: "Menü",
        menu_text: "Hizmetlerimiz ve ürünlerimiz hakkında bilgiler.",

        shop_title: "Mağaza",
        shop_text: "Burada Max Play ürünleri olacak.",

        contact_title: "İletişim",
        contact_text: "İletişim formu veya sosyal medya.",
        contact_name: "Adınız",
        contact_msg: "Mesajınız",
        btn_send: "Gönder",

        about_title: "Hakkımızda",
        about_p1: "Max Play sadece bir şirket değildir...",
        about_p2: "İnovasyonun yaratıcı güçle buluştuğu yerde doğduğuna inanıyoruz...",
        about_p3: "Ekibimiz işini seven profesyonellerden oluşuyor...",

        footer: "© 2025 Max Play. Tüm hakları saklıdır."
    },

    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_shop: "Shop",
        nav_contact: "Contact",
        nav_about: "About",

        home_title: "The future is here",
        home_subtitle: "Max Play innovations shape the technology of tomorrow.",
        btn_more: "Learn more",

        menu_title: "Menu",
        menu_text: "Information about our services and products.",

        shop_title: "Shop",
        shop_text: "Here will be Max Play products.",

        contact_title: "Contact",
        contact_text: "Contact form or social media.",
        contact_name: "Your name",
        contact_msg: "Your message",
        btn_send: "Send",

        about_title: "About Us",
        about_p1: "Max Play is not just a company...",
        about_p2: "We believe innovation is born where technology meets creativity...",
        about_p3: "Our team brings together talented and passionate specialists...",

        footer: "© 2025 Max Play. All rights reserved."
    }
};


// -------------------------------
// Функция смены языка
// -------------------------------
function applyLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        const key = el.dataset.keyPlaceholder;
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    // кнопки переклюателя
    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}


// -------------------------------
// Переключатель языков
// -------------------------------
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});


// -------------------------------
// SPA Навигация (как было)
// -------------------------------
function showSection(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.section === id)
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // загрузка языка
    applyLanguage(localStorage.getItem("lang") || "ru");

    // навигация
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.section);
            document.querySelector('.main-nav').classList.remove('show');
            document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
        });
    });

    // бургер меню
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const shown = mainNav.classList.toggle('show');
            hamburger.setAttribute('aria-expanded', shown);
        });
    }

    // кнопка Подробнее
    const learnBtn = document.getElementById('learnMoreBtn');
    if (learnBtn) learnBtn.addEventListener('click', () => showSection('shop'));
});
