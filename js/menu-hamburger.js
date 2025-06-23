/* Inicializo constantes */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/*Función para recorrer opciones de menu*/
function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/*Agregar listener para click en navbar menu hamburger*/

hamburger.addEventListener("click",mobileMenu);

/*Función para cerrar los items del menu*/
function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/*Cuando hacemos click en cerrar hamburger icon*/

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click",closeMenu));


