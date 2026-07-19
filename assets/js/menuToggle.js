const btnOpenMenu = document.querySelector(".menu-toggle")
const mobileNav = document.querySelector(".nav-mobile")
const links = document.querySelectorAll(".nav-mobile a")
const icon = document.getElementById("menuIcon")
let isOpen = false 

const toggleMenu = (open) => {

    isOpen = open

    // Altera em abrir e fechar o menu
    mobileNav.classList.toggle("menu-active", isOpen)

    // Altera o atributo aria-expanded
    btnOpenMenu.setAttribute("aria-expanded", isOpen)

    // Altera o ícone
    icon.classList.toggle("fa-bars", !isOpen)
    icon.classList.toggle("fa-xmark", isOpen)
       
}

// Abrir e fechar o menu mobile
btnOpenMenu.addEventListener("click", () => toggleMenu(!isOpen))

// Fecha o menu ao clicar em um link
links.forEach(link => link.addEventListener("click", () => toggleMenu(false)))