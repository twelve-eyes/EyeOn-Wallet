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
const formularioGasto  = document.querySelector("#form-gasto");
const campoDescricao   = document.querySelector("#descricao");
const campoValor       = document.querySelector("#valor");
const campoCategoria   = document.querySelector("#categoria");
const listaGastos      = document.querySelector("#lista-gastos");
const mensagemErro     = document.querySelector("#mensagem-erro");
const selectFiltro     = document.querySelector("#filtro");
const contador         = document.querySelector("#contador");
const elementoTotal    = document.querySelector("#total");
const painelTotal      = document.querySelector("#painel-total");
const totalAlimentacao = document.querySelector("#total-alimentacao");
const totalTransporte  = document.querySelector("#total-transporte");
const totalLazer       = document.querySelector("#total-lazer");
const totalOutros      = document.querySelector("#total-outros");

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

// Cor do total por faixa
function classificarTotal(total) {

    if (total > 1000) { // condição para classificar o total em faixa-vermelha/amarela/verde.
        return "faixa-vermelha";
    } else if (total > 500) {
        return "faixa-amarela";
    } else {
        return "faixa-verde";
    }

}

// Criação dos elementos de cada gasto
function criarItemGasto(descricao, valor, categoria) {
    const item = document.createElement("li");
    item.classList.add("gasto");
    item.dataset.categoria = categoria;
    item.dataset.valor = valor;

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

    item.appendChild(descricaoGasto);
    item.appendChild(categoriaGasto);
    item.appendChild(valorGasto);
    item.appendChild(botaoRemover);

    return item;
}

// Um único listener na lista trata a remoção de todos os gastos.
listaGastos.addEventListener("click", (evento) => {
    // Ignora cliques que não foram feitos em um botão Remover.
    if (!evento.target.classList.contains("btn-remover")) {
        return;
    }

    const item = evento.target.closest(".gasto");
    item.remove();
    atualizarContador();
    atualizarTotal();
});

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

    // Aplica o filtro ativo também ao gasto recém-cadastrado.
    aplicarFiltro();

    // Atualiza o contador e o total, incluindo os gastos ocultos pelo filtro.
    atualizarContador();
    atualizarTotal();

    // Limpa o formulário somente depois de um cadastro válido.
    formularioGasto.reset();
    campoDescricao.focus();
});

// Aplica a mesma regra de filtro no cadastro e na mudança de categoria.
function aplicarFiltro() {
    const categoriaSelecionada = selectFiltro.value;

    listaGastos.querySelectorAll(".gasto").forEach((item) => {
        const deveOcultar = categoriaSelecionada !== "Todas"
            && categoriaSelecionada !== item.dataset.categoria;

        item.classList.toggle("oculto", deveOcultar);
    });
}

selectFiltro.addEventListener("change", aplicarFiltro);

//Função para contar gastos na lista.
function atualizarContador() {
    const total = listaGastos.querySelectorAll(".gasto").length;
    if (total === 1) {
        contador.textContent = total + " gasto registrado";
    }
    else {
        contador.textContent = total + " gastos registrados";
    }
}

// Totais por categoria.
function somarCategorias(categoria) {
    const gastos = listaGastos.querySelectorAll(".gasto");
    let soma = 0;

    for (let indice = 0; indice < gastos.length; indice++) { // percorrendo os gastos da página.
        if (gastos[indice].getAttribute("data-categoria") === categoria) {
            soma += Number(gastos[indice].getAttribute("data-valor"));
        }
    }

    return soma;
}

function atualizarTotaisCategoria() {
    const totalAlimentacaoValor = somarCategorias("Alimentação");
    const totalTransporteValor = somarCategorias("Transporte");
    const totalLazerValor = somarCategorias("Lazer");
    const totalOutrosValor = somarCategorias("Outros"); 

    totalAlimentacao.textContent = formatarValor(totalAlimentacaoValor);
    totalTransporte.textContent = formatarValor(totalTransporteValor);
    totalLazer.textContent = formatarValor(totalLazerValor);
    totalOutros.textContent = formatarValor(totalOutrosValor);
}


// Soma os valores de todos os itens da lista, mesmo quando estão ocultos.
function atualizarTotal() {
    const gastos = listaGastos.querySelectorAll(".gasto");
    let total = 0;

    for (let indice = 0; indice < gastos.length; indice++) {
        total += Number(gastos[indice].dataset.valor);
    }

    elementoTotal.textContent = formatarValor(total);
    painelTotal.classList.remove("faixa-verde");
    painelTotal.classList.remove("faixa-amarela");
    painelTotal.classList.remove("faixa-vermelha");
    painelTotal.classList.add(classificarTotal(total));
    
    atualizarTotaisCategoria();
    
}

// Mantém o painel consistente com a lista ao carregar a página.
atualizarContador();
atualizarTotal();
