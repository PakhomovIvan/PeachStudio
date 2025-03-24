export const menuSlider = () => {
  const menuNavLogo = document.querySelector('.navigate__offices')
  const listNav = document.querySelector('.navigate__list')
  const listNavArrow = document.querySelector('.navigate__offices-arrow')
  const navigateMap = document.querySelector('.navigate__map')

  const testNav = document.querySelectorAll('#nav-menu')
  const testTestNav = document.querySelector('#testtest')

  menuNavLogo.addEventListener('click', () => {
    listNav.classList.toggle('show')
    listNavArrow.classList.toggle('rotate')
  })

  testTestNav.addEventListener('click', (e) => {
    if (e.target.id === 'nav-menu') {
      testNav.forEach((e) => {
        e.classList.remove('active')
      })
      e.target.classList.add('active')
      navigateMap.innerHTML = `<img src="/img/images/map/${e.target.innerText}.svg" alt="offices-map" />`
    }
  })
}
