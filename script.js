const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", () => { // função que será executada quando der o clique.
    document.body.classList.toggle("escuro"); // adicionando a classe escuro ao body, caso ela já exista, ela será removida.

    if (document.body.classList.contains("escuro")) { // verficando se o body possiu a classe escuro.
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
}

);