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
let qty = 0, qtyHolder = 0;
document.querySelector('.js-add-to-cart').addEventListener('click', () => {
  addToCart();
})
document.querySelector('.js-minus-btn').addEventListener('click', ()=>{
  if(qty <= 0){
    document.querySelector('.qty').innerHTML = 0;
  }else{
    qty--;
    document.querySelector('.qty').innerHTML = `${qty}`;
  }
});
document.querySelector('.js-add-btn').addEventListener('click', ()=>{
  qty++;
  document.querySelector('.qty').innerHTML = `${qty}`;
});

let products = {
  prodnName: 'fall limited edition sneakers',
  prodPrice: 125,
}
const addToCart = () => {
  let qtyCount = document.querySelector('.js-cart-counter'),
    ordered = document.querySelector('.js-ordered');

  
  qtyHolder += qty;
  qtyCount.innerHTML = qtyHolder;
  let total = qtyHolder * products.prodPrice;
  
  if(qty === 0){
    document.querySelector('.empty-cart').innerHTML = `
      <div class="">
        <h5>Your cart is empty.</h5>
      </div>
    `
  }else{
    ordered.innerHTML = `
    <div class="container ">
      <div class="label">
        <h3>Cart</h3>
      </div>
      <div class="product ">
        <div>
          <img src="./images/image-product-1-thumbnail.jpg" alt="sample_image">
        </div>
        <div class="">
          <h5>fall limited edition sneakers</h5>
          <div class="price-container">
            <p>$${products.prodPrice}</p>
            <p>x ${qtyHolder}</p>
            <p>$${total}</p>
          </div>
        </div>
        <button id="delete-cart"><img src="./images/icon-delete.svg" alt="" ></button>
      </div>
      <div class="checkout">
        <button>checkout</button>
      </div>
    </div>
    `;
  }
}

