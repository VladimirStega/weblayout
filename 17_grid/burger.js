window.addEventListener('DOMContentLoaded', function () {
  function toggleNavActive() {
    document.querySelector('.header__nav').classList.toggle('is-active');
  }

  document.querySelector('#burger').addEventListener('click', toggleNavActive);
  document.querySelector('#burger-close').addEventListener('click', toggleNavActive);

});
