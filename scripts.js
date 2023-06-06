/*Este código agrega un detector de eventos al botón “Menú” que alterna la clase “nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic.*/
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})