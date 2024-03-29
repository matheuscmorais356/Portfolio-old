
const formButtom = document.querySelector('.button_form > button')

// Efeitto de digitação
function typeWriter() {
  const text = document.querySelector('.apresentation h1')
  const characters = text.innerHTML.split('')
  text.innerHTML = ''

  characters.forEach((character, i) => {

    setTimeout(() => text.innerHTML += character, 75 * i)

  })
}


// Menu

function openMenu() {
  document.body.classList.add('menu_expanded')
}

function closeMenu() {
  document.body.classList.remove('menu_expanded')
}


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

// Projects cards

fetch('./data/projects.json')
  .then((response) => response.json())
  .then((data) => data.projects.forEach((project) => {
    createProjectCard(project)
  }))

function createProjectCard(project) {
  const content = document.querySelector('#projects .content')

  let tagA = document.createElement('a')

  let divImg = document.createElement('div')
  let divDescription = document.createElement('div')
  let divTechnologies = document.createElement('div')

  let img = document.createElement('img')
  let title = document.createElement('h4')
  let description = document.createElement('p')

  tagA.classList.add('card_project')
  divImg.classList.add('project_image')
  divDescription.classList.add('project_description')
  divTechnologies.classList.add('technologies')

  tagA.href = project.link
  tagA.target = '_blank'
  img.src = project.image
  img.alt = project.alt
  title.innerHTML = project.name
  description.innerHTML = project.description

  

  project.technologies.forEach((technology) => {
    let pill = document.createElement('p')
    pill.classList.add(`pill_${technology}`)
    pill.innerHTML = technology
    divTechnologies.appendChild(pill)
  })

  tagA.appendChild(divImg)
  tagA.appendChild(divDescription)
  divImg.appendChild(img)
  divDescription.appendChild(title)
  divDescription.appendChild(description)
  divDescription.appendChild(divTechnologies)

  content.appendChild(tagA)

}

// form

formButtom.addEventListener('click', () => {
  messageSucess()
})

function messageSucess() {
  message = document.querySelector('.button_form > p').classList

  message.add('show')

  setTimeout(() => {
    message.remove('show')
  }, 3000)
 
}

// Config scrollreveal
ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 500,
}).reveal (`
  #about .wrapper,
  #projects .wrapper,
  #contact .wrapper
`)
