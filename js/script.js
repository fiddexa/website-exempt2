// ==============================
// FIDDEXA
// script.js
// ==============================

// Плавное появление страницы
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ==============================
// Выбор языка
// ==============================

const langBtn = document.querySelector(".language");

if (langBtn) {
    langBtn.addEventListener("click", () => {

        const current = langBtn.innerText.trim();

        if (current === "EN ▼") {
            langBtn.innerHTML = "RU ▼";
        } else if (current === "RU ▼") {
            langBtn.innerHTML = "FR ▼";
        } else if (current === "FR ▼") {
            langBtn.innerHTML = "中文 ▼";
        } else {
            langBtn.innerHTML = "EN ▼";
        }

    });
}

// ==============================
// Анимация кнопок
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px) scale(1.03)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });

});

// ==============================
// Анимация преимуществ
// ==============================

const features = document.querySelectorAll(".feature");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

features.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".8s";

    observer.observe(item);

});

// ==============================
// Плавная прокрутка
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ==============================
// Подсветка Header при прокрутке
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(4,16,20,.90)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(4,16,20,.55)";
        header.style.boxShadow = "none";

    }

});
