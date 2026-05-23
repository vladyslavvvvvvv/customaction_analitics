const btn = document.querySelector('#myButton');

btn.addEventListener('click', () => {
  gtag('event', 'order_button_click',);
  console.log("Дані відправлено!");
});