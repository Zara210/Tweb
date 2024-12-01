document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn'); // Botão para abrir o menu
    const closeBtn = document.getElementById('closeBtn'); // Botão para fechar o menu
    const menu = document.getElementById('menu'); // Container do menu principal
    const nav = document.querySelector('nav'); // Elemento do navegador
    const body = document.body; // Corpo da página

    // Abrir o menu
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex'; // Mostra o menu principal
        nav.classList.add('menu-open'); // Adiciona uma classe para estilização
        body.classList.add('menu-open'); // Adiciona o fundo escurecido na área content-main
        body.style.overflow = 'hidden'; // Desativa o scroll global
    });

    // Fechar o menu
    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none'; // Oculta o menu principal
        nav.classList.remove('menu-open'); // Remove a classe de estilização
        body.classList.remove('menu-open'); // Remove o fundo escurecido na área content-main
        body.style.overflow = ''; // Restaura o scroll global
    });

    // Fechar o menu ao clicar fora (fechar o menu e o fundo escurecido)
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.style.display = 'none'; // Oculta o menu principal
            nav.classList.remove('menu-open'); // Remove a classe de estilização
            body.classList.remove('menu-open'); // Remove o fundo escurecido na área content-main
            body.style.overflow = ''; // Restaura o scroll global
        }
    });

    // Gerenciar submenus de primeiro nível
    const mainMenuItems = document.querySelectorAll('.menu-list > li.has-submenu > .menu-item'); // Itens com submenus

    mainMenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Impede a propagação do clique

            const submenu = this.nextElementSibling; // Submenu associado
            const isOpen = submenu.style.display === 'block'; // Verifica o estado do submenu

            // Fecha todos os submenus antes de abrir o submenu atual
            closeAllSubmenus();

            // Alterna a visibilidade do submenu atual
            if (!isOpen) {
                submenu.style.display = 'block';
                this.parentElement.classList.add('open'); // Marca o submenu como aberto
            } else {
                submenu.style.display = 'none';
                this.parentElement.classList.remove('open'); // Marca o submenu como fechado
            }
        });
    });

    // Gerenciar submenus de segundo nível (sub-submenu)
    const submenuItems = document.querySelectorAll('.submenu li.has-submenu > .menu-item');

    submenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Impede a propagação do clique

            const submenu = this.nextElementSibling; // Sub-submenu associado
            const isOpen = submenu.style.display === 'block'; // Verifica o estado do sub-submenu

            // Alterna a visibilidade do sub-submenu
            if (!isOpen) {
                submenu.style.display = 'block';
                this.parentElement.classList.add('open'); // Marca o sub-submenu como aberto
            } else {
                submenu.style.display = 'none';
                this.parentElement.classList.remove('open'); // Marca o sub-submenu como fechado
            }
        });
    });

    // Função para fechar todos os submenus
    const closeAllSubmenus = () => {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => {
            submenu.style.display = 'none'; // Fecha o submenu
        });
        const openItems = document.querySelectorAll('.has-submenu.open');
        openItems.forEach(item => {
            item.classList.remove('open'); // Remove a marcação de aberto
        });
    };
});
