export const menuSlider = () => {
  const menuNavLogo = document.querySelector('.navigate__offices')
  const listNav = document.querySelector('.navigate__list')
  const listNavArrow = document.querySelector('.navigate__offices-arrow')
  const navMap = document.querySelector('.navigate__map')

  const testNav = document.querySelectorAll('.nav-menu')
  const navMenu = document.querySelector('#nav-menu-item')

  menuNavLogo.addEventListener('click', () => {
    listNav.classList.toggle('show')
    listNavArrow.classList.toggle('rotate')
    navMenu.classList.toggle('blur')
    navMap.classList.toggle('blur')
  })

  navMenu.addEventListener('click', (e) => {
    if (e.target.className === 'nav-menu') {
      testNav.forEach((e) => {
        e.classList.remove('active')
      })
      e.target.classList.add('active')
      navMap.style.background = `url("./img/images/map/${e.target.id}.svg") no-repeat center`
    }
  })
}
