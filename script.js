var cart_prices;


cart_prices = [];
let element_total = document.getElementById('total');
element_total.innerText = cart_prices.reduce((a,b) => a+b, 0);


document.getElementById('add-to-cart-1').addEventListener('click', (event) => {
  let element_cart = document.getElementById('cart');
  let new_li = document.createElement('li');
  new_li.innerText = 'SMOKE SESSIONS - £59 ';

  element_cart.appendChild(new_li);
  cart_prices.unshift(59);
  let element_total2 = document.getElementById('total');
  element_total2.innerText = cart_prices.reduce((a,b) => a+b, 0);

});

document.getElementById('add-to-cart-2').addEventListener('click', (event) => {
  let element_cart2 = document.getElementById('cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'FIERY 42 - £70';

  element_cart2.appendChild(new_li2);
  cart_prices.unshift(70);
  let element_total3 = document.getElementById('total');
  element_total3.innerText = cart_prices.reduce((a,b) => a+b, 0);

});

document.getElementById('add-to-cart-3').addEventListener('click', (event) => {
  let element_cart3 = document.getElementById('cart');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'BLOOD SUGAR EYESHADOW  - £85';

  element_cart3.appendChild(new_li3);
  cart_prices.unshift(85);
  let element_total4 = document.getElementById('total');
  element_total4.innerText = cart_prices.reduce((a,b) => a+b, 0);

});

document.getElementById('add-to-cart-4').addEventListener('click', (event) => {
  let element_cart4 = document.getElementById('cart');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'STACEY MARIE - £40';

  element_cart4.appendChild(new_li4);
  cart_prices.unshift(40);
  let element_total5 = document.getElementById('total');
  element_total5.innerText = cart_prices.reduce((a,b) => a+b, 0);

});