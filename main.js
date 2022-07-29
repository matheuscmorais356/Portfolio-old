const projects = [
  {
    name: 'TipCalculate',
    image: './assets/tipCalculator.jpg',
    alt: 'Imagem do projeto TipCalculate',
    description: 'Esta é a solução para o desafio do Frontend Mentor. O desafio foi criar uma calculadora de gorjeta.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://matheuscmorais356.github.io/TipCalculator/'
  },
  {
    name: 'SingupForm',
    image: './assets/singupForm.PNG',
    alt: 'Imagem do projeto SingupFrom',
    description: 'Esta é a solução para o desafio do Frontend Mentor. O objetivo do projeto é fazer o tratamento de dados através do formulário, verificando se todos os campos estão preenchido e seguindo o padrão de escrita exigido.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://matheuscmorais356.github.io/SignupForm/'
  },
  {
    name: 'FAQ',
    image: './assets/faq.png',
    alt: 'Imagem do projeto FAQ',
    description: 'Esse é um projeto desenvolvido durante a Mapa Dev Week do Dev em Dobro.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://matheuscmorais356.github.io/FAQ/'
  },
  {
    name: 'SummaryCard',
    image: './assets/summaryCard.png',
    alt: 'Imagem do projeto SummaryCard',
    description: 'Esta é uma solução para o desafio do cartão de resumo do pedido no Frontend Mentor.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://matheuscmorais356.github.io/summaryCard/'
  }
]
const formButtom = document.querySelector('.button_form > button')


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

projects.forEach((project) => {

  createProjectCard(project)
})

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
  #home .wrapper,
  #about .wrapper,
  #projects .wrapper,
  #contact .wrapper
`)