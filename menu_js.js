document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const menu = document.getElementById('menu');
    const nav = document.querySelector('nav');
    const body = document.body;

    // Abrir o menu
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex';
        nav.classList.add('menu-open'); // Adiciona classe para estilização
        body.style.overflow = 'hidden'; // Desativa o scroll global
    });

    // Fechar o menu
    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none';
        nav.classList.remove('menu-open'); // Remove classe de estilização
        body.style.overflow = ''; // Restaura o scroll global
    });

    // Gerenciar submenus
    const submenuTriggers = document.querySelectorAll('.has-submenu'); // Seleciona os itens com submenus

    submenuTriggers.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Impede que cliques se propaguem para o pai
            const submenu = this.querySelector('.submenu');

            if (submenu) {
                const isOpen = submenu.style.display === 'block';
                closeAllSubmenus(); // Fecha outros submenus

                // Alterna o submenu atual
                submenu.style.display = isOpen ? 'none' : 'block';
                this.classList.toggle('open', !isOpen); // Alterna a classe para estilização
            }
        });
    });

    // Fecha todos os submenus
    const closeAllSubmenus = () => {
        submenuTriggers.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
                item.classList.remove('open'); // Remove classe de estilização
            }
        });
    };

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.style.display = 'none';
            nav.classList.remove('menu-open');
            body.style.overflow = ''; // Restaura o scroll global
            closeAllSubmenus(); // Fecha submenus abertos
        }
    });
});
