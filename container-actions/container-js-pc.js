// Selecionar os elementos
const reservarVooHeader = document.getElementById("reservar-voo-header");
const reservaVooContainer = document.getElementById("reserva-voo-container");

const minhasViagensHeader = document.getElementById("minhas-viagens-header");
const minhasViagensContainer = document.getElementById("minhas-viagens-container");

// Adicionar evento de clique no cabeçalho "Reservar um voo"
reservarVooHeader.addEventListener("click", () => {
    if (reservaVooContainer.classList.contains("expandido")) {
        // Remover a classe para colapsar
        reservaVooContainer.classList.remove("expandido");
        reservaVooContainer.style.display = "none"; // Ocultar
    } else {
        // Adicionar a classe para expandir
        reservaVooContainer.classList.add("expandido");
        reservaVooContainer.style.display = "flex"; // Exibir como flex
    }
});

// Adicionar evento de clique no cabeçalho "As minhas viagens"
minhasViagensHeader.addEventListener("click", () => {
    if (minhasViagensContainer.classList.contains("expandido")) {
        // Remover a classe para colapsar
        minhasViagensContainer.classList.remove("expandido");
        minhasViagensContainer.style.display = "none"; // Ocultar
    } else {
        // Adicionar a classe para expandir
        minhasViagensContainer.classList.add("expandido");
        minhasViagensContainer.style.display = "flex"; // Exibir como flex
    }
});
