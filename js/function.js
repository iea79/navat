/*!
 *
 * Evgeniy Ivanov - 2021
 * busforward@gmail.com
 * Skype: ivanov_ea
 *
 */
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

// Скрываем блоки с картинками, готовим анимацию появления
img.forEach(item => {
    const parent = item.parentNode;
    parent.style.opacity = 0;
    parent.style.transform = 'translateY(20px)';
});

// После загрузки страницы
window.addEventListener('load', () => {
    // Прячем лоадер
    loader.classList.add('hide');

    // Показываем блоки с картинками поочередно c задержкой в 200мс после загрузки страницы
    setTimeout(() => {
        img.forEach((item, i) => {
            const parent = item.parentNode;
            setTimeout(() => {
                parent.style.opacity = 1;
                parent.style.transform = 'translateY(0px)';
            }, 100 * i);
        });
    }, 200);
});
