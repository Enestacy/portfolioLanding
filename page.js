let BurgerButton = document.querySelector('.burger_menu');
let MenuMobile = document.querySelector('.mobile_menu_window');
let CloseMenu = document.querySelector('.close_icon');
let Switcher = document.querySelector('.other');
let Home = document.querySelector('.onfocus');
let Arrow = document.querySelector('.arrow_top');
let Mobile = document.querySelector('.menu_list_mobile');

BurgerButton.addEventListener('click',() => {
  MenuMobile.style.display = 'block';
  Home.classList.add("active");
});

CloseMenu.addEventListener('click',() => {
  MenuMobile.style.display = 'none';
});

Mobile.addEventListener('click',() => {
  MenuMobile.style.display = 'none';
});

Switcher.addEventListener('click',() => {
Home.classList.remove("active");
Switcher.classList.remove("active");
this.classList.add("active");
});

Arrow.addEventListener('click',() => {
  Home.classList.add("active");
});