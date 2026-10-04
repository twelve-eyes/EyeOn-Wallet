# Checklist - AP02: Controle de Gastos

Página de controle de gastos pessoais com HTML, CSS e JavaScript puro.

**Fonte:** [Enunciado da atividade](AP02_Atividade_Pratica_02_ProgramacaoWebI.pdf).

**Avaliação:** 7,0 pontos de funcionalidades + 3,0 pontos de qualidade, com desafio opcional de até +1,0 ponto.

## Feature 1 - Cadastro de gastos (0,8 ponto)

- [x] Criar formulário com descrição textual, valor numérico e categoria.
- [x] Disponibilizar as categorias: Alimentação, Transporte, Lazer e Outros.
- [x] Incluir botão para adicionar o gasto.
- [x] Tratar o evento `submit` do formulário.
- [x] Usar `preventDefault()` para impedir o recarregamento.
- [x] Adicionar o gasto à lista quando os dados forem válidos.

## Feature 2 - Lista dinâmica de gastos (1,0 ponto)

- [x] Exibir a lista em uma `<ul>`.
- [x] Criar cada gasto como um `<li>` pelo JavaScript.
- [x] Mostrar descrição, categoria, valor e botão **Remover** em cada item.
- [x] Formatar os valores em reais, como `R$ 1.234,50`.
- [x] Usar `createElement`, `textContent` e `appendChild`.
- [x] Inserir o texto digitado pelo usuário com `textContent`.

## Feature 3 - Validação e tratamento do formulário (1,2 ponto)

- [ ] Rejeitar descrição vazia ou composta somente por espaços.
- [ ] Rejeitar valor vazio.
- [ ] Rejeitar valor igual ou inferior a zero.
- [ ] Converter o valor digitado para número antes de qualquer cálculo.
- [ ] Exibir mensagem de erro na própria página, sem `alert`.
- [ ] Destacar o campo inválido usando uma classe CSS.
- [ ] Limpar os campos após um cadastro válido.
- [ ] Ocultar a mensagem de erro após um cadastro válido.

## Feature 4 - Remoção por delegação de eventos (1,0 ponto)

- [ ] Usar um único listener na `<ul>` para tratar as remoções.
- [ ] Identificar o botão acionado por meio de `evento.target`.
- [ ] Remover o item correspondente usando `remove()`.
- [ ] Garantir o funcionamento nos itens adicionados depois do carregamento.
- [ ] Atualizar total e contador após cada remoção.

## Feature 5 - Total geral dos gastos (1,0 ponto)

- [ ] Disponibilizar um painel com o total.
- [ ] Armazenar o valor de cada gasto no atributo `data-valor` do item.
- [ ] Recalcular o total lendo os itens existentes na página.
- [ ] Usar um laço `for` para realizar a soma.
- [ ] Converter os valores lidos dos atributos para número antes de somar.
- [ ] Recalcular após toda inclusão e remoção.
- [ ] Considerar todos os gastos, inclusive os ocultos pelo filtro.

## Feature 6 - Cor do total por faixa (0,6 ponto)

- [ ] Exibir o total em **verde** quando for até `R$ 500,00`.
- [ ] Exibir em **amarelo** quando for acima de `R$ 500,00` e até `R$ 1.000,00`.
- [ ] Exibir em **vermelho** quando ultrapassar `R$ 1.000,00`.
- [ ] Criar uma função que receba o total como parâmetro e devolva a classificação com `return`.
- [ ] Definir as cores em classes CSS.
- [ ] Atualizar a classe conforme o total mudar.

## Feature 7 - Filtro por categoria (0,7 ponto)

- [ ] Criar um `<select>` com Todas, Alimentação, Transporte, Lazer e Outros.
- [ ] Tratar a alteração do filtro usando o evento `change`.
- [ ] Ocultar os gastos de outras categorias por meio de uma classe CSS.
- [ ] Mostrar todos os gastos ao selecionar **Todas**.
- [ ] Aplicar o filtro ativo também aos novos gastos cadastrados.
- [ ] Manter o total geral incluindo os itens ocultos.

## Feature 8 - Modo escuro (0,3 ponto)

- [ ] Criar um botão para alternar o modo escuro.
- [ ] Alternar uma classe no `<body>` ao clicar.
- [ ] Definir as cores do modo escuro no CSS.

## Feature 9 - Contador de gastos (0,4 ponto)

- [ ] Mostrar a quantidade de gastos registrados.
- [ ] Exibir **“1 gasto registrado”** para um item.
- [ ] Exibir **“N gastos registrados”** para as demais quantidades, incluindo zero.
- [ ] Atualizar o contador após cada inclusão e remoção.

## Requisitos técnicos e qualidade (3,0 pontos)

Estes critérios atravessam todas as features.

### Restrições técnicas (1,5 ponto)

- [ ] Manter `index.html`, `style.css` e `script.js` separados e na mesma pasta.
- [ ] Carregar o JavaScript com `<script src="script.js" defer></script>`.
- [ ] Usar JavaScript puro, sem bibliotecas ou frameworks.
- [ ] Manter o JavaScript separado do HTML.
- [ ] Usar `const` por padrão e `let` apenas quando houver reatribuição.
- [ ] Não usar `var`.
- [ ] Usar `===` e `!==` nas comparações de igualdade e diferença.
- [ ] Manter a aparência no CSS e controlar as classes pelo JavaScript com `classList`.
- [ ] Usar `element.style` somente se houver justificativa em comentário.
- [ ] Implementar pelo menos duas funções com parâmetros e `return`.
- [ ] Não usar `innerHTML` com dados digitados pelo usuário.
- [ ] Para atingir o nível excelente, usar funções pequenas, com um propósito e reaproveitadas.

### Organização e legibilidade (1,0 ponto)

- [ ] Manter indentação consistente.
- [ ] Usar nomes descritivos para variáveis e funções.
- [ ] Evitar duplicação de código.
- [ ] Organizar o código com comentários por seção.
- [ ] Separar as tarefas em funções.

### Interface e acessibilidade (0,5 ponto)

- [ ] Manter a página legível em celular, com aproximadamente `360 px` de largura.
- [ ] Associar os campos aos respectivos `label`.
- [ ] Exibir os erros na própria página.
- [ ] Usar hierarquia visual clara e contraste adequado.
- [ ] Garantir foco visível nos elementos interativos.
- [ ] Permitir o uso do formulário apenas com teclado.

## Feature bônus - Escolher uma opção (até +1,0 ponto)

O bônus é opcional; o enunciado pede escolher **um** dos desafios:

- [ ] **Persistência:** salvar os gastos em `localStorage` e restaurar a lista após recarregar a página. O enunciado orienta pesquisar esse recurso na documentação da MDN.
- [ ] **Totais por categoria:** mostrar quanto foi gasto em cada uma das quatro categorias, além do total geral.

## Checklist de testes

Os testes abaixo verificam as regras do enunciado e seus casos-limite:

- [ ] Cadastrar gastos válidos e verificar lista, total e contador.
- [ ] Tentar cadastrar descrição vazia e descrição somente com espaços.
- [ ] Tentar cadastrar valor vazio, zero e negativo.
- [ ] Fazer um cadastro válido após um erro e verificar a limpeza do formulário.
- [ ] Remover itens, incluindo o último da lista.
- [ ] Confirmar total zero e contador zero quando a lista ficar vazia.
- [ ] Verificar as cores nos limites: `500,00`, `500,01`, `1.000,00` e `1.000,01`.
- [ ] Testar todas as opções do filtro.
- [ ] Cadastrar gastos com o filtro ativo, tanto da categoria selecionada quanto de outra.
- [ ] Confirmar que filtrar não altera o total geral.
- [ ] Alternar entre modo claro e escuro.
- [ ] Verificar a página em largura de `360 px` e navegar pelo formulário com teclado.
- [ ] Conferir o console do navegador, com F12, em busca de erros.
- [ ] Caso implemente o bônus, testar o comportamento escolhido.

## Checklist de entrega

- [ ] Realizar o trabalho individualmente ou em dupla.
- [ ] Inserir os nomes de todos os integrantes em comentário no topo de `script.js`.
- [ ] Reunir os três arquivos em uma única pasta.
- [ ] Testar a página no navegador antes de compactar.
- [ ] Gerar `AP02_NOMEDADUPLA_DATA.zip`.
- [ ] Usar os nomes dos integrantes sem espaços e sem acentos no nome do ZIP.
- [ ] Usar a data da entrega no formato `DD-MM`.
- [ ] Enviar o ZIP como anexo para `wellinton.silva@uniavan.edu.br`.
- [ ] Usar o assunto **“AP02 – Programação Web I – nomes dos integrantes”**.
- [ ] Em dupla, realizar um único envio e incluir os dois nomes no corpo do e-mail.
- [ ] Em dupla, garantir que ambos consigam explicar qualquer parte do código.

**Prazo informado no PDF:** 28/09/2026.

**Visual:** livre, respeitando os critérios de legibilidade e acessibilidade.
