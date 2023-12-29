const burgerMenu = document.querySelector('.burgerMenu ');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link')
const body = document.querySelector('body')
burgerMenu.addEventListener('click', () =>{
    burgerMenu.classList.toggle('-active');
    menu.classList.toggle('-active');
    body.classList.toString('-lock');
})
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('-active');
        menu.classList.remove('-active');
        body.classList.remove('-lock');
    }) 
}
)

const swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1052: {
            slidesPerView: 3,
        },
        820:{
            slidesPerView: 2,
        },
        320:{
            slidesPerView: 1,
        }
    }
  
  })


  const btnMoreInfo = document.querySelector('.more-info');
  const btnMoreComponents = document.querySelector('.more-components');
  if(btnMoreComponents && btnMoreInfo){
    const components = document.querySelector('.product__components');
    const useInfo = document.querySelector('.product__use-info');
    btnMoreComponents.addEventListener('click', () =>{
        components.classList.toggle('-active');
        btnMoreComponents.classList.toggle('-active');
    })
    btnMoreInfo.addEventListener('click', () => {
        useInfo.classList.toggle('-active');
        btnMoreInfo.classList.toggle('-active');
    })
  }