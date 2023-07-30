document.querySelector('#left').addEventListener('click', ()=>{
  plusSlides(-1);
});
document.querySelector('#right').addEventListener('click', ()=>{
  plusSlides(1);
});
document.querySelector('.js-burger-btn').addEventListener('click',() => {
  document.querySelector('.burger').classList.remove('js-burger');
});
document.querySelector('.burger').addEventListener('click',() => {
  document.querySelector('.burger').classList.add('js-burger');
});

document.querySelector('.js-cart-btn').addEventListener('click',() => {
  document.querySelector('.cart').classList.remove('js-cart');
});
document.querySelector('.js-cart-btn-desktop').addEventListener('click',() => {
  document.querySelector('.cart').classList.remove('js-cart');
});
document.querySelector('.header-container').addEventListener('click',() => {
  document.querySelector('.cart').classList.add('js-cart');
});

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

let slideIndex = 1;
showSlides(slideIndex);




function showSlides(n){
  let screen = window.matchMedia('(min-width: 1440px)');
  if(!screen.matches){
    let i;
    let slides = document.querySelectorAll('.pics');
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    slides[slideIndex - 1].style.display = 'block';
    }
  }
   
}
/*

const images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg'
];
const looping = () =>{
  let displayDOM = document.querySelector('.pics');
  let HTML = '';
  images.forEach((image) =>{
    let html = `<img src="${image}" alt="dp" id="image-avatar">`
    HTML += html;
  })
  displayDOM.innerHTML = HTML;
}*/