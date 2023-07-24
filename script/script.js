document.querySelector('#left').addEventListener('click', ()=>{
  looping();
});
const images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg'
]

const looping = () =>{
  let displayDOM = document.querySelector('.pics');
  let HTML = '';
  images.forEach((image) =>{
    let html = `<img src="${image}" alt="dp" id="image-avatar">`
    HTML += html;
  })
  displayDOM.innerHTML = HTML;
}