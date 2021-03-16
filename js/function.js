/*!
 *
 * Evgeniy Ivanov - 2018
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

window.addEventListener('touchmove', (e) => {
    console.log(nav);
    if (e.target !== nav && !e.target.closest('.nav') && nav.classList.contains('open')) {
        nav.classList.remove('open');
    }
});
