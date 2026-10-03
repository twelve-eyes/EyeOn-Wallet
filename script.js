//A página não rearrega ao responder o formulário.
const form = document.querySelector("#form-gasto");
const input1 = document.querySelector("#descricao");
const input2 = document.querySelector("#valor");
const lista = document.querySelector("#lista-gastos");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const item = document.createElement("li");
    const vNum = parseFloat(input2.value);
    const vFormat = vNum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    item.textContent = input1.value + " - " + vFormat;

    const botao = document.createElement("button");
    botao.textContent = "Remover";

    botao.addEventListener("click", () =>{
        lista.removeChild(item);
    });

    item.appendChild(botao);
    lista.appendChild(item);
    
    input1.value = "";
    input2.value = "";
});


