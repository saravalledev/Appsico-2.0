/* Variaveis */

const menuContainer = document.getElementById('menu_container');
const footerContainer = document.getElementById('footer_container');

const welcomeContainer = document.getElementById('welcome');
const typesServiceContainer = document.getElementById('types_service_box');
const valueContainer = document.getElementById('value_div');
const btnGoContainer = document.getElementById('btn_go');


const searchProfessionalContainer = document.getElementById('search_professional');



/* Métodos */
/* Home */
fetch('views/containers/header/index.ejs')
  .then(response => response.text())
  .then(html => menuContainer.innerHTML = html);

fetch('/src/containers/footer/index.ejs')
  .then(response => response.text())
  .then(html => footerContainer.innerHTML = html);

fetch('/src/components/welcome/index.ejs')
  .then(response => response.text())
  .then(html => welcomeContainer.innerHTML = html);

fetch('/src/components/typesServiceBox/index.ejs')
  .then(response => response.text())
  .then(html => typesServiceContainer.innerHTML = html);

fetch('/src/components/valueDiv/index.ejs')
  .then(response => response.text())
  .then(html => valueContainer.innerHTML = html);

fetch('/src/components/btnGo/index.ejs')
  .then(response => response.text())
  .then(html => btnGoContainer.innerHTML = html);

/* Search Professional */
  fetch('/src/components/searchProfessional/index.ejs')
  .then(response => response.text())
  .then(html => searchProfessionalContainer.innerHTML = html);