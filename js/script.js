var menuBurger = document.querySelector('.main-header__toggle'),
    header = document.querySelector('.main-header');
menuBurger.addEventListener('click', menuToggle);

function menuToggle() {
  if (header.classList.contains('main-header--menu-opened')) {
    header.classList.remove('main-header--menu-opened');
    header.classList.add('main-header--menu-closed');
  } else {
    header.classList.add('main-header--menu-opened');
    header.classList.remove('main-header--menu-closed');
  }
}
