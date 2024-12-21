window.onscroll = function () {
    atualizarNavbar();
};

window.onresize = function () {
    atualizarNavbar(); // Atualiza a navbar também no redimensionamento
};

function atualizarNavbar() {
    const navbar = document.querySelector('nav');
    const profileIcon = document.querySelector('.nav-buttons_pc .login-btn img');
    const logoBranco = document.querySelector('.logo_branco'); // Seleciona o logo branco
    const logoNormal = document.querySelector('.logo'); // Seleciona o logo normal

    // Quando o usuário rolar mais de 20px
    if (window.scrollY > 15) {
        navbar.classList.add('navbar-scroll'); // Adiciona a classe "navbar-scroll"
        profileIcon.src = 'img/profile_verde.jpg'; // Altera o ícone para verde

        // Troca o logo apenas se a tela for maior que 1124px
        if (window.innerWidth > 1124) {
            logoBranco.style.display = 'none'; // Esconde o logo branco
            logoNormal.style.display = 'block'; // Exibe o logo normal
        }

    } else {
        navbar.classList.remove('navbar-scroll'); // Remove a classe "navbar-scroll"
        profileIcon.src = 'img/profile_branco.png'; // Volta para o ícone branco

        // Troca o logo apenas se a tela for maior que 1124px
        if (window.innerWidth > 1124) {
            logoBranco.style.display = 'block'; // Exibe o logo branco
            logoNormal.style.display = 'none'; // Esconde o logo normal
        }
    }

    // Ao redimensionar a tela, esconde o logo branco se for menor que 1124px
    if (window.innerWidth <= 1124) {
        logoBranco.style.display = 'none'; // Esconde o logo branco
        logoNormal.style.display = 'none'; // Esconde o logo normal
    }

    // Adiciona a condição para telas menores que 768px
    if (window.innerWidth < 1024) {
        logoBranco.style.display = 'none'; // Esconde o logo branco
        logoNormal.style.display = 'block'; // Esconde o logo normal
    }
}
