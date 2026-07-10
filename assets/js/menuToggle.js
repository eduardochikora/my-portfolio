const btnOpenMenu = document.querySelector(".menu-toggle")
const mobileNav = document.querySelector(".nav-mobile")
const icon = document.getElementById("menuIcon")
let isOpen = false 

// Abrir e fechar o menu mobile
btnOpenMenu.addEventListener("click", () => {

    // Altera entre aberto e fechado
    isOpen = !isOpen

    // Altera em abrir e fechar o menu
    mobileNav.classList.toggle("menu-active", isOpen)

    // Altera o atributo aria-expanded
    btnOpenMenu.setAttribute("aria-expanded", isOpen)

    // Altera o ícone
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")

})