'use strict';
const cartIcon = document.querySelector('.shopping-cart a');
const closeCartIcon = document.querySelector('.close-cart');
const buttons = document.querySelectorAll('.product__button');
const cartWindow = document.querySelector('.shopping-cart__div');
const products = document.querySelectorAll('.product');

let openCart = function () {
    cartWindow.style.display ='block'
};

let closeCart = function () {
    cartWindow.style.display ='none'
};

let addToCart = function(event) {
    let product = event.target.parentNode;
    let productCart = {
        name: product.querySelector('.product__name').innerText,
        price: product.querySelector('.product__p').innerText
    };
    let name = document.createElement('p');
    name.innerText = productCart.name;
    let price = document.createElement('p');
    price.classList.add('price-in-cart');
    price.innerText = productCart.price;
    let div = document.createElement('div');
    div.classList.add('shopping-cart__box');
    closeCartIcon.insertAdjacentElement("afterend", div);
    div.insertAdjacentElement("beforeend", name);
    div.insertAdjacentElement("beforeend", price);
    summCart()
};

let summCart = function(){
    let allPrises = document.querySelectorAll('.price-in-cart');
    let summPrises = 0;
    if (!(allPrises.length === 0)) {
        allPrises.forEach(function (paragraph) {
            let priceProduct = Number(paragraph.innerText);
            summPrises += priceProduct
        })
    }
    let result = document.querySelector('.result-price');
    result.innerText = `Итого: ${summPrises}`;
};

buttons.forEach(function (a) {
a.addEventListener('click', function (event) {
    addToCart(event)
    })
});
cartIcon.addEventListener('click', openCart);
closeCartIcon.addEventListener('click', closeCart);

