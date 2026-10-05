const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", () => { // função que será executada quando der o clique.
    document.body.classList.toggle("escuro"); // adicionando a classe escuro ao body, caso ela já exista, ela será removida.

    if (document.body.classList.contains("escuro")) { // verficando se o body possiu a classe escuro.
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
});

// Elementos do formulário e da lista
const formularioGasto = document.querySelector("#form-gasto");
const campoDescricao = document.querySelector("#descricao");
const campoValor = document.querySelector("#valor");
const campoCategoria = document.querySelector("#categoria");
const listaGastos = document.querySelector("#lista-gastos");
const mensagemErro = document.querySelector("#mensagem-erro");

// Validação dos dados e indicação dos campos que precisam de correção
function validarGasto(descricao, valor) {
    const descricaoInvalida = descricao === "";
    const valorInvalido = !Number.isFinite(valor) || valor <= 0;
    const mensagens = [];

    campoDescricao.classList.toggle("invalido", descricaoInvalida);
    campoValor.classList.toggle("invalido", valorInvalido);
    campoDescricao.setAttribute("aria-invalid", String(descricaoInvalida));
    campoValor.setAttribute("aria-invalid", String(valorInvalido));

    if (descricaoInvalida) {
        mensagens.push("Informe uma descrição para o gasto.");
    }

    if (valorInvalido) {
        mensagens.push("Informe um valor numérico maior que zero.");
    }

    // Sem erros, o texto fica vazio e o CSS oculta a mensagem.
    mensagemErro.textContent = mensagens.join(" ");

    if (descricaoInvalida) {
        campoDescricao.focus();
    } else if (valorInvalido) {
        campoValor.focus();
    }

    return mensagens.length === 0;
}

// Formatação dos valores em reais
function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Criação dos elementos de cada gasto
function criarItemGasto(descricao, valor, categoria) {
    const item = document.createElement("li");
    item.classList.add("gasto");
    item.dataset.categoria = categoria;

    const descricaoGasto = document.createElement("span");
    descricaoGasto.classList.add("gasto-descricao");
    descricaoGasto.textContent = descricao;

    const categoriaGasto = document.createElement("span");
    categoriaGasto.classList.add("gasto-categoria");
    categoriaGasto.textContent = categoria;

    const valorGasto = document.createElement("span");
    valorGasto.classList.add("gasto-valor");
    valorGasto.textContent = formatarValor(valor);

    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.classList.add("btn-remover");
    botaoRemover.textContent = "Remover";

    // Mantém a remoção existente; a delegação será tratada na feature 4.
    botaoRemover.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(descricaoGasto);
    item.appendChild(categoriaGasto);
    item.appendChild(valorGasto);
    item.appendChild(botaoRemover);

    return item;
}

// Cadastro sem recarregar a página
formularioGasto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const descricao = campoDescricao.value.trim();
    // valueAsNumber converte a entrada; um campo vazio resulta em NaN.
    const valor = campoValor.valueAsNumber;

    if (!validarGasto(descricao, valor)) {
        return;
    }

    const categoria = campoCategoria.value;
    const item = criarItemGasto(descricao, valor, categoria);

    listaGastos.appendChild(item);

    // Limpa o formulário somente depois de um cadastro válido.
    formularioGasto.reset();
    campoDescricao.focus();
});
