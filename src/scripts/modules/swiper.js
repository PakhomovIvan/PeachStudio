export const swiperFunc = () => {
  var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: {
      el: '.paginator',
      clickable: true,
    },
    keyboard: true,
  })
}
