//Declarando variáveis que se referem a IDs HTML
const form = document.querySelector("#form-gasto");
const input1 = document.querySelector("#descricao");
const input2 = document.querySelector("#valor");
const lista = document.querySelector("#lista-gastos");

//Criando evento para página não recarregar e formatar valor em reais
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const item = document.createElement("li");
    const vNum = parseFloat(input2.value);
    const vFormat = vNum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    //conteúdo dos itens da lista
    item.textContent = input1.value + " - " + vFormat;

    //criando botão de remover
    const botao = document.createElement("button");
    botao.textContent = "Remover";

    //quando clicar no botão remove item da lista
    botao.addEventListener("click", () =>{
        lista.removeChild(item);
    });

    item.appendChild(botao);//botão é filho do item
    lista.appendChild(item);//item é filho da lista

    input1.value = ""; //mostra a descricao
    input2.value = "";//mostra o valor
});


