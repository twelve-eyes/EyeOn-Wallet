# Checklist - AP02: Controle de Gastos

Página de controle de gastos pessoais com HTML, CSS e JavaScript puro.

**Fonte:** [Enunciado da atividade](AP02_Atividade_Pratica_02_ProgramacaoWebI.pdf).

**Avaliação:** 7,0 pontos de funcionalidades + 3,0 pontos de qualidade, com desafio opcional de até +1,0 ponto.

**Revisão em 06/10/2026:** features 1 a 9 e bônus de totais por categoria verificados no navegador, incluindo cadastro, validação, remoção, filtros, limites de cor, teclado e tela de 360 px.

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

- [x] Rejeitar descrição vazia ou composta somente por espaços.
- [x] Rejeitar valor vazio.
- [x] Rejeitar valor igual ou inferior a zero.
- [x] Converter o valor digitado para número antes de qualquer cálculo.
- [x] Exibir mensagem de erro na própria página, sem `alert`.
- [x] Destacar o campo inválido usando uma classe CSS.
- [x] Limpar os campos após um cadastro válido.
- [x] Ocultar a mensagem de erro após um cadastro válido.

## Feature 4 - Remoção por delegação de eventos (1,0 ponto)

- [x] Usar um único listener na `<ul>` para tratar as remoções.
- [x] Identificar o botão acionado por meio de `evento.target`.
- [x] Remover o item correspondente usando `remove()`.
- [x] Garantir o funcionamento nos itens adicionados depois do carregamento.
- [x] Atualizar total e contador após cada remoção.

## Feature 5 - Total geral dos gastos (1,0 ponto)

- [x] Disponibilizar um painel com o total.
- [x] Armazenar o valor de cada gasto no atributo `data-valor` do item.
- [x] Recalcular o total lendo os itens existentes na página.
- [x] Usar um laço `for` para realizar a soma.
- [x] Converter os valores lidos dos atributos para número antes de somar.
- [x] Recalcular após toda inclusão e remoção.
- [x] Considerar todos os gastos, inclusive os ocultos pelo filtro.

## Feature 6 - Cor do total por faixa (0,6 ponto)

- [x] Exibir o total em **verde** quando for até `R$ 500,00`.
- [x] Exibir em **amarelo** quando for acima de `R$ 500,00` e até `R$ 1.000,00`.
- [x] Exibir em **vermelho** quando ultrapassar `R$ 1.000,00`.
- [x] Criar uma função que receba o total como parâmetro e devolva a classificação com `return`.
- [x] Definir as cores em classes CSS.
- [x] Atualizar a classe conforme o total mudar.

## Feature 7 - Filtro por categoria (0,7 ponto)

- [x] Criar um `<select>` com Todas, Alimentação, Transporte, Lazer e Outros.
- [x] Tratar a alteração do filtro usando o evento `change`.
- [x] Ocultar os gastos de outras categorias por meio de uma classe CSS.
- [x] Mostrar todos os gastos ao selecionar **Todas**.
- [x] Aplicar o filtro ativo também aos novos gastos cadastrados.
- [x] Manter o total geral incluindo os itens ocultos.

## Feature 8 - Modo escuro (0,3 ponto)

- [x] Criar um botão para alternar o modo escuro.
- [x] Alternar uma classe no `<body>` ao clicar.
- [x] Definir as cores do modo escuro no CSS.

## Feature 9 - Contador de gastos (0,4 ponto)

- [x] Mostrar a quantidade de gastos registrados.
- [x] Exibir **“1 gasto registrado”** para um item.
- [x] Exibir **“N gastos registrados”** para as demais quantidades, incluindo zero.
- [x] Atualizar o contador após cada inclusão e remoção.

## Requisitos técnicos e qualidade (3,0 pontos)

Estes critérios atravessam todas as features.

### Restrições técnicas (1,5 ponto)

- [x] Manter `index.html`, `style.css` e `script.js` separados e na mesma pasta.
- [x] Carregar o JavaScript com `<script src="script.js" defer></script>`.
- [x] Usar JavaScript puro, sem bibliotecas ou frameworks.
- [x] Manter o JavaScript separado do HTML.
- [x] Usar `const` por padrão e `let` apenas quando houver reatribuição.
- [x] Não usar `var`.
- [x] Usar `===` e `!==` nas comparações de igualdade e diferença.
- [x] Manter a aparência no CSS e controlar as classes pelo JavaScript com `classList`.
- [x] Usar `element.style` somente se houver justificativa em comentário. Não há uso de `element.style` no código atual.
- [x] Implementar pelo menos duas funções com parâmetros e `return`.
- [x] Não usar `innerHTML` com dados digitados pelo usuário.
- [x] Para atingir o nível excelente, usar funções pequenas, com um propósito e reaproveitadas.

### Organização e legibilidade (1,0 ponto)

- [x] Manter indentação consistente.
- [x] Usar nomes descritivos para variáveis e funções.
- [ ] Evitar duplicação de código.
- [x] Organizar o código com comentários por seção.
- [x] Separar as tarefas em funções.

Pendência observada: a aplicação do filtro se repete no cadastro e no listener de `change`. Na inicialização, `atualizarTotaisCategoria()` também é chamado diretamente depois de `atualizarTotal()`, que já executa essa atualização.

### Interface e acessibilidade (0,5 ponto)

- [x] Manter a página legível em celular, com aproximadamente `360 px` de largura.
- [x] Associar os campos aos respectivos `label`.
- [x] Exibir os erros na própria página.
- [x] Usar hierarquia visual clara e contraste adequado.
- [x] Garantir foco visível nos elementos interativos.
- [x] Permitir o uso do formulário apenas com teclado.

Melhoria de acessibilidade identificada: o botão de tema mantém `aria-pressed="false"` mesmo quando o modo escuro está ativo. Sincronizar esse atributo com a classe `escuro` do `<body>`.

## Feature bônus - Escolher uma opção (até +1,0 ponto)

O bônus é opcional; o enunciado pede escolher **um** dos desafios:

**Opção implementada e verificada:** totais por categoria. A persistência é uma alternativa opcional, não necessária para concluir o bônus escolhido.

- [ ] **Persistência:** salvar os gastos em `localStorage` e restaurar a lista após recarregar a página. O enunciado orienta pesquisar esse recurso na documentação da MDN.
- [x] **Totais por categoria:** mostrar quanto foi gasto em cada uma das quatro categorias, além do total geral.

## Checklist de testes

Os testes abaixo verificam as regras do enunciado e seus casos-limite:

- [x] Cadastrar gastos válidos e verificar lista, total e contador.
- [x] Tentar cadastrar descrição vazia e descrição somente com espaços.
- [x] Tentar cadastrar valor vazio, zero e negativo.
- [x] Fazer um cadastro válido após um erro e verificar a limpeza do formulário.
- [x] Remover itens, incluindo o último da lista.
- [x] Confirmar total zero e contador zero quando a lista ficar vazia.
- [x] Verificar as cores nos limites: `500,00`, `500,01`, `1.000,00` e `1.000,01`.
- [x] Testar todas as opções do filtro.
- [x] Cadastrar gastos com o filtro ativo, tanto da categoria selecionada quanto de outra.
- [x] Confirmar que filtrar não altera o total geral.
- [x] Alternar entre modo claro e escuro.
- [x] Verificar a página em largura de `360 px` e navegar pelo formulário com teclado.
- [x] Conferir o console do navegador, com F12, em busca de erros. Console e exceções conferidos por automação do navegador; nenhum erro da aplicação foi registrado nos testes.
- [x] Caso implemente o bônus, testar o comportamento escolhido.

## Checklist de entrega

- [ ] Realizar o trabalho individualmente ou em dupla.
- [ ] Inserir os nomes de todos os integrantes em comentário no topo de `script.js`.
- [x] Reunir os três arquivos em uma única pasta.
- [x] Testar a página no navegador antes de compactar.
- [ ] Gerar `AP02_NOMEDADUPLA_DATA.zip`.
- [ ] Usar os nomes dos integrantes sem espaços e sem acentos no nome do ZIP.
- [ ] Usar a data da entrega no formato `DD-MM`.
- [ ] Enviar o ZIP como anexo para `wellinton.silva@uniavan.edu.br`.
- [ ] Usar o assunto **“AP02 – Programação Web I – nomes dos integrantes”**.
- [ ] Em dupla, realizar um único envio e incluir os dois nomes no corpo do e-mail.
- [ ] Em dupla, garantir que ambos consigam explicar qualquer parte do código.

**Prazo informado no PDF:** 28/09/2026.

**Visual:** livre, respeitando os critérios de legibilidade e acessibilidade.
