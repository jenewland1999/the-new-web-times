(function () {
  var navToggle = document.querySelector('.header .icon-menu')
  var navClose = document.querySelector('.offcanvas__button')
  var navMenu = document.querySelector('.offcanvas')
  var page = document.querySelector('.page')
  var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

  navClose.addEventListener('click', function (e) {
    e.preventDefault = true
    if (viewportWidth >= 1024) {
      page.classList.toggle('expanded')
    }
    navMenu.classList.toggle('expanded')
  })

  navToggle.addEventListener('click', function (e) {
    e.preventDefault = true
    if (viewportWidth >= 1024) {
      page.classList.toggle('expanded')
    }
    navMenu.classList.toggle('expanded')
  })
})()
