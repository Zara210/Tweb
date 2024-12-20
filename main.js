window.onscroll = function () {atualizarNavbar();};

function atualizarNavbar() {
    const navbar = document.querySelector('nav');
    const profileIcon = document.querySelector('.nav-buttons_pc .login-btn img');
    const navText = document.querySelector('.nav-buttons_pc .nav-text'); 

    if (window.scrollY > 20) {
        navbar.classList.add('navbar-scroll'); // Adiciona a classe do scroll
        profileIcon.src = 'img/profile_verde.jpg'; // Altera o ícone para verde
        navText.style.color = 'black'; // Altera a cor do texto para branco
    } else {
        navbar.classList.remove('navbar-scroll'); // Remove a classe do scroll
        profileIcon.src = 'img/profile_branco.png'; // Volta para o ícone branco
        navText.style.color = ''; // Remove a cor personalizada 
    }
}
