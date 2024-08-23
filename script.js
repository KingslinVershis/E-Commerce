//variable declaration

const searchform=document.querySelector('.search-form');
const searchbtn=document.querySelector('#search-btn');
const cartbtn=document.querySelector('#cart-btn');
const userbtn=document.querySelector('#user-btn');
const shoppingcart=document.querySelector('.shopping-cart');
const user=document.querySelector('.login');
const ul=document.querySelector('#ul');
let textAlignStart=true;

//search

searchbtn.addEventListener('click',function(){
   
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    user.classList.remove('active');
   
    searchform.style.display='block';
    shoppingcart.style.display='none';
    user.style.display='none';
   
    textAlignStart?ul.style.textAlign = 'start':ul.style.textAlign = 'end';
    textAlignStart = !textAlignStart;
})

//shopping cart

cartbtn.addEventListener('click',function(){
    
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    user.classList.remove('active');
    
    shoppingcart.style.display='block';
    searchform.style.display='none';
    user.style.display='none';
    
    textAlignStart?ul.style.textAlign = 'start':ul.style.textAlign = 'end';
    textAlignStart = !textAlignStart;
})

//user

userbtn.addEventListener('click',function(){
    
    user.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');

    user.style.display='block';
    shoppingcart.style.display='none';
    searchform.style.display='none';
    
    textAlignStart?ul.style.textAlign = 'start':ul.style.textAlign = 'end';
    textAlignStart = !textAlignStart;
})

//Swipper

var swiper = new swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay :7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });