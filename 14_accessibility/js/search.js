window.addEventListener('DOMContentLoaded', function () {
  function toggleNavActive() {
    document.querySelector('.header__wrape-search').classList.toggle('search__form-open');
  }

  document.querySelector('.header__search').addEventListener('click', toggleNavActive);
  document.querySelector('.search__form-close').addEventListener('click', toggleNavActive);

});
