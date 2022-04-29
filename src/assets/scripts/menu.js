const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');
const mainNavList = navMain.querySelector('.main-nav__list');

const closeMenu = () => {
  document.body.classList.remove('page__body--lock');
  navMain.classList.remove('main-nav--opened');
}

const onNavToggleClick = () => {
  document.body.classList.toggle('page__body--lock');
  navMain.classList.toggle('main-nav--opened');
};

const onMainNavListClick = (evt) => {
  const id = evt.target.getAttribute('href');
  const section = document.querySelector(id);

  if (id != null && id.startsWith('#')) {
    evt.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    closeMenu();
  }
};

document.onclick = function (evt) {
  if (navMain.classList.contains('main-nav--opened')) {
    if (evt.target.classList.contains('main-nav--opened')) {
      closeMenu();
    }
  }
}

if (navToggle) {
  navToggle.addEventListener('click', onNavToggleClick);
}

if (navMain) {
  mainNavList.addEventListener('click', onMainNavListClick);
}
