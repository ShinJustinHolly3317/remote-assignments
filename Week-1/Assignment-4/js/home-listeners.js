/* elements */
const burgerBtn = document.querySelector('.js-burger-button')
const collapsingNavbar = document.querySelector('.js-collapse-navbar')
const collapseClosingBtn = document.querySelector('.js-burger-close-btn')
const siteMask = document.querySelector('.site-mask')


/* Listeners */
burgerBtn.addEventListener('click', () => {
  console.log('hahahaha');
  collapsingNavbar.classList.toggle('floating-inside-window')
  siteMask.classList.toggle('js-mask-fadein')
  siteMask.classList.toggle('not-visible')
})

collapseClosingBtn.addEventListener('click', () => {
  collapsingNavbar.classList.toggle('floating-inside-window')
  siteMask.classList.toggle('js-mask-fadein')
  siteMask.classList.toggle('not-visible')
})
