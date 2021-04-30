
const nav = document.querySelector('.nav');
const navToggle = document.querySelectorAll('.nav__toggle');
const img = document.querySelectorAll('.img');
const loader = document.querySelector('.loader');

navToggle.forEach((item) => {
    item.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});

window.addEventListener('touchmove', (e) => hideMenu(e));
// По идее можно удалить так как делаем для тач устройства. Пока оставлю для удобства
window.addEventListener('mouseup', (e) => hideMenu(e));

function hideMenu(e) {
    if (e.target !== nav && !e.target.closest('.nav') && nav.classList.contains('open')) {
        nav.classList.remove('open');
    }
}



function showLightboxImg() {
    const lightboxTrigger = document.querySelectorAll('[data-lightbox]');
    const lightboxClose = document.querySelector('.lightbox__close');
    
    lightboxTrigger.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let lightbox = document.querySelector('.lightbox'),
            lightboxContent = lightbox.querySelector('.lightbox__content'),
            src = this.href;

            lightboxContent.innerHTML = `<img src=${src} />`;
            lightbox.classList.add('open');
            document.body.classList.add('not_scroll');

        });
    });

    lightboxClose.addEventListener('click', () => {
        let lightbox = document.querySelector('.lightbox'),
        lightboxContent = lightbox.querySelector('.lightbox__content');

        lightboxContent.innerHTML = ``;
        lightbox.classList.remove('open');
        document.body.classList.remove('not_scroll');
    });
}

try {
    showLightboxImg();
} catch (e) {

} finally {

}

// Скрываем блоки с картинками, готовим анимацию появления
// img.forEach(item => {
//     const parent = item.parentNode;
//     parent.style.opacity = 0;
//     parent.style.transform = 'translateY(20px)';
// });

// После загрузки страницы
window.addEventListener('load', () => {
    // Прячем лоадер
    try {
        loader.classList.add('hide');
    } finally {

    }

    // Показываем блоки с картинками поочередно c задержкой в 200мс после загрузки страницы
    // setTimeout(() => {
    //     img.forEach((item, i) => {
    //         const parent = item.parentNode;
    //         setTimeout(() => {
    //             parent.style.opacity = 1;
    //             parent.style.transform = 'translateY(0px)';
    //         }, 100 * i);
    //     });
    // }, 200);
});
