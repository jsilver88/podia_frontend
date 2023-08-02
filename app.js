const dropdown = document.querySelectorAll('[data-dropdown]')
const subnav1 = document.querySelector('.subnav')
const subnav2 = document.querySelector('[data-dropdown="resources"] .subnav')
const menu = document.querySelector('[data-menu]')
const navLinks = document.querySelector('.nav-links')
const navHeader = document.querySelector('.nav-header')

function sticky() {
  const scroll = window.scrollY

  if (scroll > 30) {
    navHeader.classList.add('sticky')
  } else {
    navHeader.classList.remove('sticky')
  }
}

dropdown.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation()
    let currentBtn = e.currentTarget

    if (currentBtn.getAttribute('data-dropdown') === 'features') {
      subnav1.classList.toggle('open')
      subnav2.classList.remove('open')
    }

    if (currentBtn.getAttribute('data-dropdown') === 'resources') {
      subnav2.classList.toggle('open')
      subnav1.classList.remove('open')
    }
  })
})

menu.addEventListener('click', () => {
  navLinks.classList.toggle('show')
})

document.addEventListener('scroll', () => {
  sticky()
})
