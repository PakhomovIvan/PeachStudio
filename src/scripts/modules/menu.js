export const menuSlider = () => {
  const menuNavLogo = document.querySelector('.navigate__offices')
  const listNav = document.querySelector('.navigate__list')
  const listNavArrow = document.querySelector('.navigate__offices-arrow')
  const navMap = document.querySelector('.navigate__map')

  const testNav = document.querySelectorAll('.nav-menu')
  const navMenu = document.querySelector('#nav-menu-item')

  let mobileWidth = false

  window.outerWidth <= 320 ? (mobileWidth = true) : (mobileWidth = false)

  window.addEventListener('resize', (e) => {
    e.target.outerWidth <= 320 ? (mobileWidth = true) : (mobileWidth = false)
    console.log(mobileWidth)
  })

  menuNavLogo.addEventListener('click', () => {
    listNav.classList.toggle('show')
    listNavArrow.classList.toggle('rotate')
    navMenu.classList.toggle('blur')
    navMap.classList.toggle('blur')
  })

  navMenu.addEventListener('click', (e) => {
    let selectName = e.target.className

    if (selectName === 'nav-menu') {
      testNav.forEach((e) => {
        e.classList.remove('active')
      })

      if (!mobileWidth) {
        navMap.style.background = `url("./img/images/map/${e.target.id}.svg") no-repeat center`
        e.target.classList.add('active')
      } else {
        e.target.classList.add('active')
        switch (e.target.id) {
          case 'Ural':
            navMap.style.background = `url("./img/images/map/${e.target.id}.svg") no-repeat -250px`
            break
          case 'Sibir':
            navMap.style.background = `url("./img/images/map/${e.target.id}.svg") no-repeat -430px`
            break
          case 'DV':
            navMap.style.background = `url("./img/images/map/${e.target.id}.svg") no-repeat -900px`
            break
          default:
            navMap.style.background = `url("./img/images/map/${e.target.id}.svg") no-repeat 0`
            break
        }
      }
    }
  })
}
