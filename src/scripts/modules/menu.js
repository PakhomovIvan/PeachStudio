export const menuSlider = () => {
  const menuNav = document.querySelector('.navigate__offices')
  const listNav = document.querySelector('.navigate__list')
  const listNavArrow = document.querySelector('.navigate__offices-arrow')

  menuNav.addEventListener('click', () => {
    listNav.classList.toggle('show')
    listNavArrow.classList.toggle('rotate')
  })
}
