window.addEventListener('DOMContentLoaded', function () {
  function toggleNavActive() {
    document.querySelector('.nav').classList.toggle('burger-active');
  }

  document.querySelector('#burger').addEventListener('click', toggleNavActive);
  document.querySelector('#burger-close').addEventListener('click', toggleNavActive);

});
