// Elementos do formulário e da lista
const formularioGasto = document.querySelector("#form-gasto");
const campoDescricao = document.querySelector("#descricao");
const campoValor = document.querySelector("#valor");
const campoCategoria = document.querySelector("#categoria");
const listaGastos = document.querySelector("#lista-gastos");

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
    const valor = Number(campoValor.value);
    const categoria = campoCategoria.value;
    const item = criarItemGasto(descricao, valor, categoria);

    listaGastos.appendChild(item);

    // Limpa os campos de texto e valor para o próximo cadastro.
    campoDescricao.value = "";
    campoValor.value = "";
});
