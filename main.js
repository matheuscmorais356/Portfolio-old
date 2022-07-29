
// Back to top button 

onScroll()
window.addEventListener('scroll', onScroll)

function onScroll() {
  showBackToTopButton()
}

function showBackToTopButton() {
  if(scrollY > 400) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 500,
}).reveal (`
  #home .wrapper,
  #about .wrapper,
  #projects .wrapper,
  #contact .wrapper
`)