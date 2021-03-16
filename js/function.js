/*!
 *
 * Evgeniy Ivanov - 2021
 * busforward@gmail.com
 * Skype: ivanov_ea
 *
 */


const nav = document.querySelector('.nav');
const navToggle = document.querySelectorAll('.nav__toggle');

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
