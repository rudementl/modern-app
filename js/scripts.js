// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav');

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav');
  } else {
    nav.classList.remove('fixed__nav');
  }
}
window.addEventListener('scroll', fixedNav);

//  Num counter
function numCounter(selector, number, time, step) {
  const counter = document.querySelector(selector);

  let res = 0;

  const allTime = Math.round(time / (number / step));

  let interval = setInterval(() => {
    res = res + step;

    if (res === number) {
      clearInterval(interval);
    }
    counter.innerHTML = res;
  }, allTime);
}

numCounter('#num1', 3800, 2500, 100);
numCounter('#num2', 230, 2500, 10);
numCounter('#num3', 500, 2500, 10);

