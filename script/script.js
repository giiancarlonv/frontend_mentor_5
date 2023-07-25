document.querySelector('#left').addEventListener('click', ()=>{
  plusSlides(-1);
});
document.querySelector('#right').addEventListener('click', ()=>{
  plusSlides(1);
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
  let i;
  let slides = document.querySelectorAll('.pics');
  if(n > slides.length) slideIndex = 1;
  if(n < 1) slideIndex = slides.length;

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex - 1].style.display = 'block';
  //
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