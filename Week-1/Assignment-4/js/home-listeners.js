/* elements */
const burgerBtn = document.querySelector('.js-burger-button')
const collapsingNavbar = document.querySelector('.js-collapse-navbar')
const collapseClosingBtn = document.querySelector('.js-burger-close-btn')
const siteMask = document.querySelector('.site-mask')


const dynaSearch = document.querySelector('.dynamic-search-wrapper')
const smallSearchIcon = document.querySelector('#small-search-icon')
const navbarMain = document.querySelector('.menu')
const navbarLogo = document.querySelector('.logo-area')
const userProfile = document.querySelector('.user-profile')
const closeDynaSearch = document.querySelector('.js-close-dynamic-search')
const lanBtn = document.querySelector('.navbar-utilities .language-btn')


/* Listeners */

// control side bar when in small screen
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

// control dynamic search when in small screen
smallSearchIcon.addEventListener('click', () => {
  // This is silly, but stil can't figure out a better way QQ.......
  dynaSearch.classList.toggle('not-visible')
  userProfile.classList.toggle('not-visible')
  navbarLogo.classList.toggle('not-visible')
  navbarMain.classList.toggle('not-visible')
  smallSearchIcon.classList.toggle('not-visible')
  lanBtn.classList.toggle('not-visible')
})

closeDynaSearch.addEventListener('click', () => {
  dynaSearch.classList.toggle('not-visible')
  userProfile.classList.toggle('not-visible')
  navbarLogo.classList.toggle('not-visible')
  navbarMain.classList.toggle('not-visible')
  smallSearchIcon.classList.toggle('not-visible')
  lanBtn.classList.toggle('not-visible')
})

    